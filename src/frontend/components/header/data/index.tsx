import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { romanize } from 'src/common/utils/number'
import { useURLParam } from 'src/frontend/hooks/useURLParam'
import { getAtom } from 'src/utils/atom'
import { Container } from 'src/model/Container'

import { Info } from 'src/frontend/components/modal/Info'
import { PeriodicTable } from 'src/frontend/components/modal/PeriodicTable'

import { ChartDropdown } from 'src/frontend/components/dropdown/ChartDropdown'
import { HeaderRight } from './HeaderRight'
import { IonDropdown } from 'src/frontend/components/dropdown/IonDropdown'
import { OptionDropdown } from 'src/frontend/components/dropdown/OptionDropdown'
import { TermDropdown } from '../../dropdown/TermDropdown'

export const Header = (): JSX.Element => {
    const { atom, atomNumber, ion, dataType, getAddress } = useURLParam()

    if (!atom) {
        return <Fragment></Fragment>
    }

    const prev = getAtom(atomNumber - 1)
    const next = getAtom(atomNumber + 1)

    return (
        <Fragment>
            <div className="table-header">
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
                                &lt; {prev.name}
                            </Link>
                            <br />
                            {ion - 1 !== 0 && (
                                <Link
                                    to={getAddress({
                                        number: prev.number,
                                        term: 0,
                                        ion: ion - 1,
                                    })}
                                >
                                    &lt; {prev.name} {ion - 1}
                                </Link>
                            )}
                        </Fragment>
                    )}
                </nav>
                <header className="align__center table-header__title">
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
                                {next.name} &gt;
                            </Link>
                            <br />
                            <Link
                                to={getAddress({
                                    number: next.number,
                                    term: 0,
                                    ion: ion + 1,
                                })}
                            >
                                {next.name} {ion + 1} &gt;
                            </Link>
                        </Fragment>
                    )}
                </nav>
            </div>
            <div className="top-bar">
                <nav className="top-bar-left">
                    <ul className="dropdown menu">
                        <OptionDropdown />
                        <IonDropdown />
                        <TermDropdown />

                        <li className="divider">|</li>

                        <li
                            className={`link-base ${
                                dataType === 'raw-data' ? 'current' : ''
                            }`}
                        >
                            <Link
                                to={getAddress({
                                    dataType: 'raw-data',
                                    term: 0,
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
                                    term: 0,
                                })}
                            >
                                Ether
                            </Link>
                        </li>

                        <li className="divider">|</li>

                        <ChartDropdown />
                    </ul>
                </nav>
                <HeaderRight />
            </div>
        </Fragment>
    )
}
