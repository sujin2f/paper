import React from 'react'
import { Doc } from 'src/frontend/scenes/doc-kor'

import pic49 from 'src/assets/images/doc/pic49.png'

export const Comparison = (): JSX.Element => (
    <Doc>
        <h2 id="multi-electron-atoms">가설의 검증(4): 오비탈과 에테르</h2>
        <p>
            공식이 준비되었다. 이제 실제 값과 비교해보자. 그런데, 어떤 방법으로
            비교할 것인가? 값이 어떻게 변하는지를 보는 기준을 세워야 한다.
        </p>
        <div className="align__center">
            <img src={pic49} alt="값의 배치" />
            <p>
                <strong>값의 배치</strong>
            </p>
        </div>
        <p>
            원형 에테르만 가진 s 오비탈이 그리는 값의 궤적은 뤼드베리 방정식을
            따른다. 여기서 선형 에테르가 하나라도 들어오면 왼쪽으로 크게 가로축
            이동이 일어나며 이에 따라 값은 점프하게 된다.
        </p>
        <p>어떤 기준에서의 비교가 가장 타당할지 생각해 보자. 그래프는</p>
    </Doc>
)
