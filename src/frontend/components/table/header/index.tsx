import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useTableParam } from 'src/frontend/hooks/useTableParam'
import { Context, ContextType } from 'src/frontend/store'
import { setDigit } from 'src/frontend/store/actions'
import { getAtom } from 'src/utils/atom'
import { InfoModal } from './InfoModal'
import { OptionDropdown } from './OptionDropdown'
import { PeriodicTableModal } from './PeriodicTableModal'

export const Header = (): JSX.Element => {
    const { atom, number, ion, linkBase } = useTableParam()
    const [options, dispatch] = useContext(Context) as ContextType

    if (!atom) {
        return <Fragment></Fragment>
    }

    const prev = getAtom(number - 1)
    const next = getAtom(number + 1)

    const doChangeDigit = (newDigit: number) => {
        if (newDigit < 0 || newDigit > 10) {
            return
        }

        dispatch(setDigit(newDigit))
    }

    return (
        <Fragment>
            <div className="table-header">
                <nav className="align__left">
                    {prev && (
                        <Link to={`/${linkBase}/${prev.number}/${ion}`}>
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
                        <Link to={`/${linkBase}/${next.number}/${ion}`}>
                            {next.name} &gt;
                        </Link>
                    )}
                </nav>
            </div>
            <div className="top-bar">
                <nav className="top-bar-left">
                    <OptionDropdown />
                    <span>&nbsp;|&nbsp;</span>
                    <Link to={`/raw-data/${atom.number}/${ion}`}>Raw Data</Link>
                    <span>&nbsp;|&nbsp;</span>
                    <Link to={`/orbital/${atom.number}/${ion}`}>Orbital</Link>
                    <span>&nbsp;|&nbsp;</span>
                    <Link to={`/ether/${atom.number}/${ion}`}>Ether</Link>
                    <span>&nbsp;|&nbsp;</span>
                    <PeriodicTableModal />
                </nav>
                <div className="top-bar-right">
                    <ul className="menu">
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
