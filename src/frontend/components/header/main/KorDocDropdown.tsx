import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TOCKor } from 'src/frontend/components/document/TOCKor'

export const KorDocDropdown = (): JSX.Element => {
    const [showOptions, setShowOptions] = useState<boolean>(false)

    document.addEventListener('click', () => {
        setShowOptions(false)
    })

    return (
        <li>
            <Link
                to="#"
                onClick={(e) => {
                    e.stopPropagation()
                    setShowOptions(!showOptions)
                }}
            >
                문서 ▾
            </Link>
            {!!showOptions && (
                <ul className="menu vertical">
                    <TOCKor />
                </ul>
            )}
        </li>
    )
}
