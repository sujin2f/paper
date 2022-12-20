import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TableOfContent } from 'src/frontend/scenes/doc/TableOfContent'

export const EngDocDropdown = (): JSX.Element => {
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
                Document (Eng) ▾
            </Link>
            {!!showOptions && (
                <ul className="menu vertical">
                    <TableOfContent />
                </ul>
            )}
        </li>
    )
}
