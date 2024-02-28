import React, { Fragment, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'src/common/components/containers/Modal'
import { periodicTable } from 'src/constants/periodic-table'
import { useURLParam } from 'src/frontend/hooks/useURLParam'
import { Atom } from 'src/frontend/types/atom'

const rows = [...Array(10).fill('').keys()]
const cols = [...Array(18).fill('').keys()]

export const PeriodicTable = (): JSX.Element => {
    const { atom, getAddress } = useURLParam()
    const [showModal, setShowModal] = useState<boolean>(false)

    const table: Atom[][] = useMemo(() => {
        return periodicTable.elements.reduce<Atom[][]>(
            (elem, current) => {
                const x = current.xpos
                const y = current.ypos

                if (!elem[y - 1]) {
                    elem[y - 1] = []
                }

                elem[y - 1][x - 1] = current
                return elem
            },
            [[]],
        )
    }, [])

    return (
        <Fragment>
            <Link type="button" to="#" onClick={() => setShowModal(true)}>
                {atom?.name}
            </Link>
            {showModal && (
                <Modal
                    closeModal={() => setShowModal(false)}
                    className="periodic-table-modal"
                >
                    <table>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={`periodic-table-row-${row}`}>
                                    {cols.map((col) => {
                                        const current = table[row][col]
                                        return (
                                            <td
                                                key={`periodic-table-col-${row}-${col}`}
                                            >
                                                {current && (
                                                    <Link
                                                        to={getAddress({
                                                            number: current.number,
                                                            ion: 1,
                                                            term: 0,
                                                        })}
                                                        onClick={() =>
                                                            setShowModal(false)
                                                        }
                                                    >
                                                        {current.symbol}
                                                    </Link>
                                                )}
                                            </td>
                                        )
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Modal>
            )}
        </Fragment>
    )
}
