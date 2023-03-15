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
import { TermDropdown } from 'src/frontend/components/dropdown/TermDropdown'

type Props = {
    data: Container
}

export const Header = (props: Props): JSX.Element => {
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
                        <Link
                            to={getAddress({
                                number: prev.number,
                                term: '',
                                ion: 1,
                            })}
                        >
                            &lt; {prev.name}
                        </Link>
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
                        <Link
                            to={getAddress({
                                number: next.number,
                                term: '',
                                ion: 1,
                            })}
                        >
                            {next.name} &gt;
                        </Link>
                    )}
                </nav>
            </div>
            <div className="top-bar">
                <nav className="top-bar-left">
                    <ul className="dropdown menu">
                        <OptionDropdown />
                        <IonDropdown />
                        <TermDropdown data={props.data} />

                        <li className="divider">|</li>

                        <li
                            className={`link-base ${
                                dataType === 'raw-data' ? 'current' : ''
                            }`}
                        >
                            <Link
                                to={getAddress({
                                    dataType: 'raw-data',
                                    term: '',
                                })}
                            >
                                Raw Data
                            </Link>
                        </li>
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

                        <li className="divider">|</li>

                        <ChartDropdown />
                    </ul>
                </nav>
                <HeaderRight />
            </div>
        </Fragment>
    )
}
