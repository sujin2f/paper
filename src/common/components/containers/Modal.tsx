import React, { PropsWithChildren, MouseEvent } from 'react'

import { CloseButton } from '../forms/CloseButton'
import { Button } from '../forms/Button'
import { Overlay } from './Overlay'

type Props = {
    closeModal?: (e?: MouseEvent) => void
    className?: string
}
export const Modal = (props: PropsWithChildren<Props>): JSX.Element => {
    return (
        <Overlay
            style={{ display: 'block' }}
            onClick={props.closeModal}
            className={props.className}
        >
            <div className="reveal" style={{ display: 'block' }}>
                {props.children}

                <Button
                    className="secondary"
                    onClick={props.closeModal}
                    title="Cancel"
                />

                <CloseButton onClick={props.closeModal} />
            </div>
        </Overlay>
    )
}
