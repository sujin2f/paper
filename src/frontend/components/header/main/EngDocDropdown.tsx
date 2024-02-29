import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TOCEng } from 'src/frontend/components/document/TOCEng'

export const EngDocDropdown = (): JSX.Element => {
    const [showOptions, setShowOptions] = useState<boolean>(false)

    useEffect(() => {
        document.addEventListener('click', () => {
            setShowOptions(false)
        })

        return () => {
            document.removeEventListener('click', () => {
                setShowOptions(false)
            })
        }
    }, [])

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
                <ul className="menu dropdown">
                    <TOCEng />
                </ul>
            )}
        </li>
    )
}
