import React, { Fragment, useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Modal } from 'src/common/components/containers/Modal'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { Context, ContextType } from 'src/frontend/store'
import {
    setDiff,
    setDigit,
    setEther,
    setNth,
    setOrbital,
    setPercentPoint,
    setRydberg,
} from 'src/frontend/store/actions'
import { getAtom } from 'src/utils/atom'

type Props = {
    linkBase: string
}

export const Header = (props: Props): JSX.Element => {
    const { linkBase } = props
    const param = useParams()
    const [showModal, setShowModal] = useState<boolean>(false)
    const number = parseInt(param.number || '1')
    const current = getAtom(number)
    const [options, dispatch] = useContext(Context) as ContextType

    if (!current) {
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
            {showModal && (
                <Modal closeModal={() => setShowModal(false)}>
                    <Row dom="dl">
                        <Column small={6}>
                            <dt>Name</dt>
                            <dd>{current.name}</dd>
                            <dt>Mass</dt>
                            <dd>{current.atomic_mass}</dd>
                            <dt>Density</dt>
                            <dd>{current.density}</dd>
                            <dt>Period</dt>
                            <dd>{current.period}</dd>
                        </Column>
                        <Column small={6}>
                            <dt>X-Pos</dt>
                            <dd>{current.xpos}</dd>
                            <dt>Y-Pos</dt>
                            <dd>{current.ypos}</dd>
                            <dt>Shells</dt>
                            <dd>{current.shells.join(', ')}</dd>
                            <dt>Configuration</dt>
                            <dd>{current.electron_configuration}</dd>
                        </Column>
                    </Row>
                </Modal>
            )}
            <div className="table-header__top">
                <nav className="align__left">
                    {prev && (
                        <Link to={`/${linkBase}/${prev.number}`}>
                            {prev.name}
                        </Link>
                    )}
                </nav>
                <header className="align__center">
                    <h1>
                        {current.name}
                        <button
                            type="button"
                            onClick={() => setShowModal(true)}
                        >
                            ?
                        </button>
                    </h1>
                    <Link className="button" to={`/raw-data/${current.number}`}>
                        Jump to Raw Data
                    </Link>
                    <Link className="button" to={`/ether/${current.number}`}>
                        Jump to Ether
                    </Link>
                    <Link className="button" to={`/orbital/${current.number}`}>
                        Jump to Orbital
                    </Link>
                </header>

                <nav className="align__right">
                    {next && (
                        <Link to={`/${linkBase}/${next.number}`}>
                            {next.name}
                        </Link>
                    )}
                </nav>
            </div>
            <div className="top-bar">
                <nav className="top-bar-left">
                    <ul className="dropdown menu">
                        <li className="menu-text">View Option</li>
                        <li>
                            <Link
                                to="#"
                                type="button"
                                onClick={() =>
                                    dispatch(setOrbital(!options.orbital))
                                }
                            >
                                Orbital
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                type="button"
                                onClick={() =>
                                    dispatch(setEther(!options.ether))
                                }
                            >
                                Ether
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                type="button"
                                onClick={() =>
                                    dispatch(setRydberg(!options.rydberg))
                                }
                            >
                                Rydberg
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                type="button"
                                onClick={() => dispatch(setDiff(!options.diff))}
                            >
                                Diff
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                type="button"
                                onClick={() => dispatch(setNth(!options.nth))}
                            >
                                N<sub>th</sub>(n)
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                type="button"
                                onClick={() =>
                                    dispatch(
                                        setPercentPoint(!options.percentPoint),
                                    )
                                }
                            >
                                %P
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li>
                            <button
                                type="button"
                                className="button"
                                onClick={() => doChangeDigit(options.digit - 1)}
                            >
                                .0
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="button"
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
