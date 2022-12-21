import React, { Fragment, useState } from 'react'
import { Modal } from 'src/common/components/containers/Modal'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { useTableParam } from 'src/frontend/hooks/useRawDataParam'

export const Info = (): JSX.Element => {
    const { atom } = useTableParam()
    const [showModal, setShowModal] = useState<boolean>(false)

    if (!atom) {
        return <Fragment></Fragment>
    }

    return (
        <Fragment>
            <button
                className="table-header__info-button"
                type="button"
                onClick={() => setShowModal(true)}
            >
                ?
            </button>
            {showModal && (
                <Modal closeModal={() => setShowModal(false)}>
                    <Row dom="dl">
                        <Column small={6}>
                            <dt>Name</dt>
                            <dd>{atom.name}</dd>
                            <dt>Mass</dt>
                            <dd>{atom.atomic_mass}</dd>
                            <dt>Density</dt>
                            <dd>{atom.density}</dd>
                            <dt>Period</dt>
                            <dd>{atom.period}</dd>
                        </Column>
                        <Column small={6}>
                            <dt>X-Pos</dt>
                            <dd>{atom.xpos}</dd>
                            <dt>Y-Pos</dt>
                            <dd>{atom.ypos}</dd>
                            <dt>Shells</dt>
                            <dd>{atom.shells.join(', ')}</dd>
                            <dt>Configuration</dt>
                            <dd>{atom.electron_configuration}</dd>
                        </Column>
                    </Row>
                </Modal>
            )}
        </Fragment>
    )
}
