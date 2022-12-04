import React, { Fragment, useRef } from 'react'
import { Input } from 'src/common/components/forms/Input'
import { useTableParam } from 'src/frontend/hooks/useTableParam'
import { Ether } from 'src/types/ether'
import { GraphModal } from './GraphModal'

type Props = {
    addEther: () => void
    ether: Ether
    z: [number, React.Dispatch<React.SetStateAction<number>>]
    weight: [number, React.Dispatch<React.SetStateAction<number>>]
}

export const EtherHeader = (props: Props): JSX.Element => {
    const { atom } = useTableParam()
    const {
        addEther,
        z: [z, setZ],
        weight: [weight, setWeight],
    } = props
    const refZ = useRef<HTMLInputElement>(null)
    const refWeight = useRef<HTMLInputElement>(null)

    if (!atom) {
        return <Fragment></Fragment>
    }

    const ether = {
        ...props.ether,
        z,
        weight,
    }

    return (
        <div className="top-bar">
            <nav className="top-bar-left">
                <GraphModal ether={ether} />
            </nav>
            <div className="top-bar-right">
                <ul className="menu menu__ether">
                    <li>
                        <Input
                            defaultValue={z}
                            label="Z"
                            reference={refZ}
                            onChange={() => {
                                const newZ = refZ.current
                                    ? refZ.current.value
                                    : '1'
                                setZ(parseInt(newZ))
                            }}
                        />
                    </li>
                    <li>
                        <Input
                            defaultValue={weight}
                            label="Weight"
                            reference={refWeight}
                            onChange={() => {
                                const newWeight = refWeight.current
                                    ? refWeight.current.value
                                    : '1'
                                setWeight(parseFloat(newWeight))
                            }}
                        />
                    </li>
                    <li>
                        <button
                            type="button"
                            className="button small"
                            onClick={() => addEther()}
                        >
                            Save
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
