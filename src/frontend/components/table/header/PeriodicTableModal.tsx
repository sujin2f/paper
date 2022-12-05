import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'src/common/components/containers/Modal'
import { periodicTable } from 'src/constants/periodic-table'
import { useTableParam } from 'src/frontend/hooks/useTableParam'
import { Atom } from 'src/types/atom'

export const PeriodicTableModal = (): JSX.Element => {
    const { linkBase } = useTableParam()
    const [showModal, setShowModal] = useState<boolean>(false)

    const table: Atom[][] = periodicTable.elements.reduce<Atom[][]>(
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

    const rows = Array(10).fill('')
    const cols = Array(18).fill('')

    return (
        <Fragment>
            <Link type="button" to="#" onClick={() => setShowModal(true)}>
                Select Atom
            </Link>
            {showModal && (
                <Modal
                    closeModal={() => setShowModal(false)}
                    className="periodic-table-modal"
                >
                    <table>
                        <tbody>
                            {rows.map((_, row) => (
                                <tr key={`periodic-table-row-${row}`}>
                                    {cols.map((_, col) => {
                                        const atom = table[row][col]
                                        return (
                                            <td
                                                key={`periodic-table-col-${row}-${col}`}
                                            >
                                                {atom && (
                                                    <Link
                                                        to={`/${linkBase}/${atom.number}`}
                                                        onClick={() =>
                                                            setShowModal(false)
                                                        }
                                                    >
                                                        {atom.symbol}
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
