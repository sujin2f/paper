import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { scrollTo } from 'src/common/utils/device'

export const TOCKor = (): JSX.Element => (
    <Fragment>
        <li>
            <Link to="/kor" onClick={() => scrollTo()}>
                소개
            </Link>
        </li>
        <li>
            <Link to="/kor/hypothesis" onClick={() => scrollTo()}>
                가설 제시
            </Link>
        </li>
        <li>
            <Link to="/kor/classic-physics" onClick={() => scrollTo()}>
                가설의 검증(1): 고전 물리학
            </Link>
        </li>
        <li>
            <Link to="/kor/multi-electron-atoms" onClick={() => scrollTo()}>
                가설의 검증(2): 뤼드베리 방정식의 재정립
            </Link>
        </li>
        <li>
            <Link to="/kor/comparison" onClick={() => scrollTo()}>
                가설의 검증(3): 방출 에너지 분석
            </Link>
        </li>
        <li>
            <Link to="/kor/between" onClick={() => scrollTo()}>
                가설의 검증(4): 비교기준, Between
            </Link>
        </li>
        <li>
            <Link to="/kor/conclusion" onClick={() => scrollTo()}>
                결론
            </Link>
        </li>
    </Fragment>
)
