import React, { Fragment, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { romanize } from 'src/common/utils/number'
import { useURLParam } from 'src/frontend/hooks/useURLParam'
import { getAtom } from 'src/utils/atom'

import { Info } from 'src/frontend/components/modal/Info'
import { PeriodicTable } from 'src/frontend/components/modal/PeriodicTable'

import { ChartDropdown } from 'src/frontend/components/dropdown/ChartDropdown'
import { HeaderRight } from './HeaderRight'
import { IonDropdown } from 'src/frontend/components/dropdown/IonDropdown'
import { OptionDropdown } from 'src/frontend/components/dropdown/OptionDropdown'
import { TermDropdown } from '../../dropdown/TermDropdown'
import { useStore } from 'src/frontend/hooks/useStore'

export const Header = (): JSX.Element => {
    const [{ container }] = useStore()
    const { atom, atomNumber, ion, dataType, getAddress } = useURLParam()

    const prev = useMemo(() => {
        if (atomNumber === 1) {
            return
        }
        return getAtom(atomNumber - 1)
    }, [atomNumber])

    const next = useMemo(() => {
        return getAtom(atomNumber + 1)
    }, [atomNumber])

    if (!atom) {
        return <Fragment></Fragment>
    }

    return (
        <Fragment>
            <div className="data-header">
                <nav className="align__left">
                    {prev && (
                        <Fragment>
                            <Link
                                to={getAddress({
                                    number: prev.number,
                                    term: 0,
                                    ion: 1,
                                })}
                            >
                                &lt; {prev.symbol}
                            </Link>
                        </Fragment>
                    )}
                </nav>
                <header className="align__center data-header__title">
                    <div>
                        <h1>
                            {atom.symbol} {romanize(ion)}
                        </h1>
                        <div>
                            <PeriodicTable />
                        </div>
                    </div>
                    <Info />
                </header>

                <nav className="align__right">
                    {next && (
                        <Fragment>
                            <Link
                                to={getAddress({
                                    number: next.number,
                                    term: 0,
                                    ion: 1,
                                })}
                            >
                                {next.symbol} &gt;
                            </Link>
                        </Fragment>
                    )}
                </nav>
            </div>
            {container && (
                <div className="top-bar">
                    <nav className="top-bar-left">
                        <ul className="dropdown__wrapper menu">
                            <OptionDropdown />
                            <IonDropdown />
                            <TermDropdown />

                            <li className="divider hide-for-small-only">|</li>

                            <li
                                className={`link-base ${
                                    dataType === 'orbital' ? 'current' : ''
                                }`}
                            >
                                <Link
                                    to={getAddress({
                                        dataType: 'orbital',
                                    })}
                                >
                                    Orbital
                                </Link>
                            </li>
                            <li
                                className={`link-base ${
                                    dataType === 'ether' ? 'current' : ''
                                }`}
                            >
                                <Link
                                    to={getAddress({
                                        dataType: 'ether',
                                    })}
                                >
                                    Ether
                                </Link>
                            </li>

                            <li className="divider hide-for-small-only">|</li>

                            <ChartDropdown />
                        </ul>
                    </nav>
                    <HeaderRight />
                </div>
            )}
        </Fragment>
    )
}
