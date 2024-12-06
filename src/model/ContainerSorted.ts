import { SortType, RawData, TABLE_ROW } from 'src/types/data'

import { Container, values } from 'src/model/Container'

import {
    getEtherTermGroups,
    getOrbitalTermGroups,
    getRatio,
    getRydberg,
} from 'src/utils/atom'
import { isEmpty } from 'src/common/utils/object'
import { Error } from 'src/common/model/Error'
import { map } from 'src/common/utils/array'
import { TermGroup } from './TermGroup'
import { Row } from './Row'
import { generateUUID } from 'src/common/utils/string'

export class ContainerSorted extends Container {
    static _instance: Record<string, ContainerSorted> = {}

    public static getInstance(
        identifier: string,
        rawData?: RawData[],
        number?: number,
        ion?: number,
        term?: number,
        type?: SortType,
    ): ContainerSorted {
        if (this._instance[identifier]) {
            return this._instance[identifier]
        }

        if (
            isEmpty(rawData) ||
            isEmpty(number) ||
            isEmpty(ion) ||
            isEmpty(term) ||
            isEmpty(type)
        ) {
            throw new Error(
                `Cannot create ContainerSorted instance with ${rawData}, ${number}, ${ion}, ${term}, and ${type}.`,
                {
                    code: 'MDL-0001',
                    source: 'model/ContainerSorted.ts',
                    level: 'error',
                },
            )
        }

        this._instance[identifier] = new this(
            rawData!,
            number!,
            ion!,
            term!,
            type!,
        )
        return this._instance[identifier]
    }

    public static hasInstance(identifier: string): boolean {
        return !!this._instance[identifier]
    }

    public tableRows: (keyof typeof TABLE_ROW)[] = [
        'orbital',
        'ether',
        'energy',
        'diff',
        'transform',
        'between',
        'k',
    ]

    public chartTypes: (keyof typeof TABLE_ROW)[] = [
        'close',
        'transform',
        'between',
    ]

    public get term(): number {
        return this._term
    }
    public set term(term: number) {
        this._term = term

        if (this._term === 0) {
            this.forEach((termGroup) => {
                termGroup.visible = true
            })
            return
        }

        this.forEach((termGroup, index) => {
            if (index === this._term - 1) {
                termGroup.visible = true
            } else {
                termGroup.visible = false
            }
        })
    }

    public constructor(
        rawData: RawData[],
        public number: number,
        public ion: number,
        private _term: number,
        public type: SortType,
    ) {
        const group = Array.isArray(rawData)
            ? type === 'ether'
                ? getEtherTermGroups(rawData)
                : getOrbitalTermGroups(rawData)
            : [rawData]
        super(...group)
        this.term = _term
    }

    public getAddress(param: {
        type?: SortType
        number?: number
        ion?: number
        term?: number
        chartType?: keyof typeof TABLE_ROW
    }): string {
        const typeParam = param.type || this.type
        const numberEntry = param.number || this.number
        const ionEntry = param.ion !== undefined ? param.ion : this.ion
        const termEntry = param.term !== undefined ? param.term : this.term
        const atomParam = [numberEntry, ionEntry, termEntry]
            .filter((v) => v)
            .join('+')

        let chartParam =
            this.chartType !== 'close' ? `/chart/${this.chartType}` : ''
        if (param.chartType === 'close') {
            chartParam = ''
        } else if (param.chartType) {
            chartParam = `/chart/${param.chartType}`
        }

        return `/${typeParam}/${atomParam}${chartParam}`
    }

    protected getChartLabel(): string[] {
        return map(this.max, (_, index) => index.toString())
    }

    public getRowValues(
        type: keyof typeof TABLE_ROW,
        term: TermGroup,
        row: Row,
    ): values[] {
        let arr: number[] = []
        if (term.isCombination || !term.visible) {
            return []
        }
        switch (type) {
            case 'transform':
                arr = term.getTransforms(row)
                break
            case 'between':
                arr = this.getBetweens(row)
                break
        }
        if (arr.length === 0) {
            return super.getRowValues(type, term, row)
        }
        return arr.length > this.max ? arr.slice(1, this.max + 1) : arr.slice(1)
    }

    private getBetweens(row: Row) {
        const first = row.find('first-element')
        const ratio = getRatio(first.ion)

        const ks = this.map((group) =>
            group.map((row) =>
                row.filter((item) => item).map((electron) => electron.k),
            ),
        )
            .flat()
            .flat()
            .filter((value) => !isNaN(value))
        const highK = Math.max(...ks)
        const lowK = Math.min(...ks)

        return row.map((electron) => {
            if (electron.isNull || !electron.prev || electron.prev.isNull) {
                return NaN
            }

            const low = getRydberg(ratio, highK, electron.position)
            const high = getRydberg(ratio, lowK, electron.position)

            return (100 * (electron.diff - low)) / (high - low)
        })
    }
}
