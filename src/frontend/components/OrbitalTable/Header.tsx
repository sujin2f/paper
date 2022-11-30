import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
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
    } = props
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

    return (
        <Fragment>
            <div className="table-header__top">
                <nav className="align__left">
                    {prev && (
                        <Link to={`/orbital/${prev.number}`}>{prev.name}</Link>
                    )}
                </nav>
                <header className="align__center">
                    <h1>{current.name}</h1>
                    <Link className="button" to={`/ether/${current.number}`}>
                        Show Ether
                    </Link>
                </header>

                <nav className="align__right">
                    {next && (
                        <Link to={`/orbital/${next.number}`}>{next.name}</Link>
                    )}
                </nav>
            </div>
            <div className="table-header__bottom">
                <nav>
                    <div
                        className="button"
                        onClick={() => doChangeDate(digit + 1)}
                    >
                        Increase
                    </div>
                    <div
                        className="button"
                        onClick={() => doChangeDate(digit - 1)}
                    >
                        Decrease
                    </div>
                    <div
                        className="button"
                        onClick={() => setShowOrbital(!showOrbital)}
                    >
                        Orbital
                    </div>
                    <div
                        className="button"
                        onClick={() => setShowEther(!showEther)}
                    >
                        Ether
                    </div>
                    <div
                        className="button"
                        onClick={() => setShowRydberg(!showRydberg)}
                    >
                        Rydberg
                    </div>
                    <div
                        className="button"
                        onClick={() => setShowDiff(!showDiff)}
                    >
                        Diff
                    </div>
                    <div
                        className="button"
                        onClick={() => setShowNth(!showNth)}
                    >
                        N<sub>th</sub>(n)
                    </div>
                    <div
                        className="button"
                        onClick={() => setPercentPoint(!showPercentPoint)}
                    >
                        %P
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}
