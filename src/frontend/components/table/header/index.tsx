import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useTableParam } from 'src/frontend/hooks/useTableParam'
import { Context, ContextType } from 'src/frontend/store'
import { setDigit, setShift } from 'src/frontend/store/actions'
import { getAtom } from 'src/utils/models/atom'
import { ChartModal } from './ChartModal'
import { InfoModal } from './InfoModal'
import { IonDropdown } from './IonDropdown'
import { OptionDropdown } from './OptionDropdown'
import { PeriodicTableModal } from './PeriodicTableModal'

export const Header = (): JSX.Element => {
    const { atom, number, ion, linkBase, term } = useTableParam()
    const [options, dispatch] = useContext(Context) as ContextType

    if (!atom) {
        return <Fragment></Fragment>
    }

    const prev = getAtom(number - 1)
    const next = getAtom(number + 1)

    const doChangeDigit = (newDigit: number) => {
        if (newDigit < 0 || newDigit > 20) {
            return
        }

        dispatch(setDigit(newDigit))
    }

    const navigateSuffix = term
        ? `${number}/${ion}/${term}`
        : `${number}/${ion}`

    return (
        <Fragment>
            <div className="table-header">
                <nav className="align__left">
                    {prev && (
                        <Link to={`/${linkBase}/${prev.number}`}>
                            &lt; {prev.name}
                        </Link>
                    )}
                </nav>
                <header className="align__center table-header__title">
                    <div>
                        <h1>
                            {atom.symbol} {ion}
                        </h1>
                        <h2>{atom.name}</h2>
                    </div>
                    <InfoModal />
                </header>

                <nav className="align__right">
                    {next && (
                        <Link to={`/${linkBase}/${next.number}/`}>
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
                        <li
                            className={`link-base ${
                                linkBase === 'raw-data' && 'current'
                            }`}
                        >
                            <Link to={`/raw-data/${navigateSuffix}`}>
                                Raw Data
                            </Link>
                        </li>
                        <li
                            className={`link-base ${
                                linkBase === 'orbital' && 'current'
                            }`}
                        >
                            <Link to={`/orbital/${navigateSuffix}`}>
                                Orbital
                            </Link>
                        </li>
                        <li
                            className={`link-base ${
                                linkBase === 'ether' && 'current'
                            }`}
                        >
                            <Link to={`/ether/${navigateSuffix}`}>Ether</Link>
                        </li>
                        <li>
                            <PeriodicTableModal />
                        </li>
                    </ul>
                </nav>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li>
                            <ChartModal />
                        </li>
                        <li>
                            <button
                                type="button"
                                className="button small"
                                onClick={() =>
                                    dispatch(setShift(options.shift + 1))
                                }
                            >
                                &lt;
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="button small"
                                onClick={() => dispatch(setShift(0))}
                            >
                                0
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="button small"
                                onClick={() =>
                                    dispatch(setShift(options.shift - 1))
                                }
                            >
                                &gt;
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="button small"
                                onClick={() => doChangeDigit(options.digit - 1)}
                            >
                                .0
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="button small"
                                onClick={() => doChangeDigit(options.digit + 1)}
                            >
                                .00
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}
