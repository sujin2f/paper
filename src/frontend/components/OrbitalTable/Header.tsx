import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'src/common/components/containers/Modal'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { getAtom } from 'src/utils/orbital'

type Props = {
    atom: number
    digit: number
    setDigit: React.Dispatch<React.SetStateAction<number>>
    showOrbital: boolean
    setShowOrbital: React.Dispatch<React.SetStateAction<boolean>>
    showEther: boolean
    setShowEther: React.Dispatch<React.SetStateAction<boolean>>
    showRydberg: boolean
    setShowRydberg: React.Dispatch<React.SetStateAction<boolean>>
    showDiff: boolean
    setShowDiff: React.Dispatch<React.SetStateAction<boolean>>
    showNth: boolean
    setShowNth: React.Dispatch<React.SetStateAction<boolean>>
    showPercentPoint: boolean
    setPercentPoint: React.Dispatch<React.SetStateAction<boolean>>
    isEtherPage?: boolean
}

export const Header = (props: Props): JSX.Element => {
    const {
        atom,
        digit,
        setDigit,
        showOrbital,
        setShowOrbital,
        showEther,
        setShowEther,
        showRydberg,
        setShowRydberg,
        showDiff,
        setShowDiff,
        showNth,
        setShowNth,
        showPercentPoint,
        setPercentPoint,
        isEtherPage,
    } = props
    const [showModal, setShowModal] = useState<boolean>(false)
    const current = getAtom(atom)

    if (!current) {
        return <Fragment></Fragment>
    }

    const prev = getAtom(atom - 1)
    const next = getAtom(atom + 1)

    const doChangeDate = (newDigit: number) => {
        if (newDigit < 0 || newDigit > 10) {
            return
        }

        setDigit(newDigit)
    }

    const linkBase = isEtherPage ? 'ether' : 'orbital'

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
                    {!isEtherPage && (
                        <Link
                            className="button"
                            to={`/ether/${current.number}`}
                        >
                            Jump to Ether
                        </Link>
                    )}
                    {isEtherPage && (
                        <Link
                            className="button"
                            to={`/orbital/${current.number}`}
                        >
                            Jump to Orbital
                        </Link>
                    )}
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
                                onClick={() => setShowOrbital(!showOrbital)}
                            >
                                Orbital
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                type="button"
                                onClick={() => setShowEther(!showEther)}
                            >
                                Ether
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                type="button"
                                onClick={() => setShowRydberg(!showRydberg)}
                            >
                                Rydberg
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                type="button"
                                onClick={() => setShowDiff(!showDiff)}
                            >
                                Diff
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                type="button"
                                onClick={() => setShowNth(!showNth)}
                            >
                                N<sub>th</sub>(n)
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                type="button"
                                onClick={() =>
                                    setPercentPoint(!showPercentPoint)
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
                                onClick={() => doChangeDate(digit - 1)}
                            >
                                .0
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="button"
                                onClick={() => doChangeDate(digit + 1)}
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
