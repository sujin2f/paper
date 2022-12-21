import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const TOCKor = (): JSX.Element => (
    <Fragment>
        <li>
            <Link to="/kor">소개</Link>
        </li>
        <li>
            <Link to="/kor/hypothesis">가설 제시</Link>
        </li>
        <li>
            <Link to="/kor/classic-physics">가설의 검증(1): 고전 물리학</Link>
        </li>
        <li>
            <Link to="/kor/multi-electron-atoms">
                가설의 검증(2): 다 전자 원자
            </Link>
        </li>
        <li>
            <Link to="/kor/schrodinger-equation">
                가설의 검증(3): 슈뢰딩거 방정식
            </Link>
        </li>
        <li>
            <Link to="/kor/conclusion">결론</Link>
        </li>
    </Fragment>
)
