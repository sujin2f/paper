import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { romanize } from 'src/common/utils/number'
import { useTableParam } from 'src/frontend/hooks/useRawDataParam'
import { getAtom } from 'src/utils/atom'
import { ChartDropdown } from './ChartDropdown'
import { HeaderRight } from './HeaderRight'
import { InfoModal } from './InfoModal'
import { IonDropdown } from './IonDropdown'
import { OptionDropdown } from './OptionDropdown'
import { PeriodicTableModal } from './PeriodicTableModal'
import { TermDropdown } from './TermDropdown'

export const Header = (): JSX.Element => {
    const { atom, atomNumber, ion, linkBase, getAddress } = useTableParam()

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
                            <PeriodicTableModal />
                        </div>
                    </div>
                    <InfoModal />
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
                        <TermDropdown />

                        <li className="divider">|</li>

                        <li
                            className={`link-base ${
                                linkBase === 'raw-data' ? 'current' : ''
                            }`}
                        >
                            <Link
                                to={getAddress({
                                    linkBase: 'raw-data',
                                    term: '',
                                })}
                            >
                                Raw Data
                            </Link>
                        </li>
                        <li
                            className={`link-base ${
                                linkBase === 'orbital' ? 'current' : ''
                            }`}
                        >
                            <Link
                                to={getAddress({
                                    linkBase: 'orbital',
                                })}
                            >
                                Orbital
                            </Link>
                        </li>
                        <li
                            className={`link-base ${
                                linkBase === 'ether' ? 'current' : ''
                            }`}
                        >
                            <Link
                                to={getAddress({
                                    linkBase: 'ether',
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
