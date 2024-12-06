import { Error } from 'src/common/model/Error'
import { capitalize } from 'src/common/utils/string'
import { orbitalKeys } from 'src/constants/orbital'
import { ElectronState, ElectronStateFactory } from 'src/model/ElectronState'
import { RowType } from 'src/types/data'
import { getAtom, getConfArray } from 'src/utils/atom'

type terms = {
    spin: number
    l: string
    j: number
    numerator: number
    parity: boolean
}

export class Row extends Array<ElectronState> {
    public type: RowType = 'radial'

    public find(
        predicate:
            | ((
                  value: ElectronState,
                  index: number,
                  obj: ElectronState[],
              ) => unknown)
            | 'first-element'
            | 'first-value',
        thisArg?: unknown,
    ): ElectronState {
        switch (predicate) {
            case 'first-element':
                const first = this.filter((electron) => electron.isFirst)
                if (first.length === 0 && this.length === 0) {
                    throw new Error('Empty row does not allowed', {
                        level: 'error',
                    })
                }
                return first[0] || ElectronStateFactory()
            case 'first-value':
                const firstValue = this.filter(
                    (electron) => !electron.isNull && electron.energy !== 0,
                )
                if (firstValue.length === 0 && this.length === 0) {
                    throw new Error('Empty row does not allowed', {
                        level: 'error',
                    })
                }
                return firstValue[0] || ElectronStateFactory()
        }
        if (predicate) {
            return super.find(predicate, thisArg) || ElectronStateFactory()
        }

        return ElectronStateFactory()
    }

    /**
     * When this is false, this set is not from the base state
     * */
    public get isCombination() {
        const first = this.find('first-element')
        const confState = first.conf.filter((conf) => !conf.startsWith('('))
        const min = Math.min(
            ...confState.map((conf) => parseInt(conf.charAt(0))),
        )
        const atom = getAtom(first.number)
        const confAtom = getConfArray(atom.electron_configuration)
            .filter((conf) => parseInt(conf.charAt(0)) >= min)
            .sort((a, b) => {
                if (a.charAt(0) === b.charAt(0)) {
                    if (
                        orbitalKeys.indexOf(a.charAt(1)) >
                        orbitalKeys.indexOf(b.charAt(1))
                    ) {
                        return 1
                    }
                    if (
                        orbitalKeys.indexOf(a.charAt(1)) <
                        orbitalKeys.indexOf(b.charAt(1))
                    ) {
                        return -1
                    }
                    return 0
                }

                if (a.charAt(0) > b.charAt(0)) {
                    return 1
                }
                return -1
            })
            .slice(-confState.length)

        confState.splice(confState.length - 1, 1)
        confAtom.splice(confAtom.length - 1, 1)
        confAtom.forEach((conf) => {
            const index = confState.indexOf(conf)
            if (index > -1) {
                confState.splice(index, 1)
            }
        })

        return confState.length > 0
    }

    public get term(): terms {
        const element = this.find('first-element')
        const spin = element.spin * 2 + 1
        const l = element.l
        const j = Number.isInteger(element.j) ? element.j : NaN
        const numerator = isNaN(j) ? element.j / 0.5 : NaN
        return { spin, l, j, numerator, parity: element.parity }
    }

    public constructor(...electrons: ElectronState[]) {
        super(...electrons)
        const items = electrons.filter((item) => item)
        if (items[0] instanceof ElectronState) {
            this.refresh()
        }
    }

    public refresh() {
        for (let i = 0; i < this.length; i++) {
            if (!this[i]) {
                this[i] = ElectronStateFactory()
            }
            if (this[i - 1]) {
                this[i - 1].next = this[i]
                this[i].prev = this[i - 1]
            }
        }
    }

    public push(...electrons: ElectronState[]): number {
        electrons
            .filter(
                (electron) =>
                    electron instanceof ElectronState && !electron.isNull,
            )
            .forEach((electron) => {
                this[electron.position] = electron.clone()
            })
        return this.length
    }

    public toString(type?: string): string {
        const electron = this.find('first-element')
        if (type === 'chart') {
            const term = this.term
            const parity = term.parity ? '°' : ''
            const j = term.j || `${term.numerator}/2`
            return `${capitalize(this.type)}:${term.spin}${term.l}${parity}${j}`
        }

        return `${this.type} ${electron.toString('group')}`
    }
}
