import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TOCEng } from 'src/frontend/components/document/TOCEng'

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
                Document ▾
            </Link>
            {!!showOptions && (
                <ul className="menu vertical">
                    <TOCEng />
                </ul>
            )}
        </li>
    )
}
