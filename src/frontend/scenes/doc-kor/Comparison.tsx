import React from 'react'
import { Doc } from 'src/frontend/scenes/doc-kor'

import pic49 from 'src/assets/images/doc/pic49.png'

export const Comparison = (): JSX.Element => (
    <Doc>
        <h2 id="multi-electron-atoms">가설의 검증(4): 오비탈과 에테르 비교</h2>
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
            따른다. 여기서 선형 에테르가 하나라도 들어오면 왼쪽으로 가로축
            이동이 일어나며 이에 따라 값은 점프하게 된다.
        </p>
        <p>
            에테르로 보았을 때와 오비탈로 보았을 때 변하지 않는 기준이 단 두 개
            존재한다. 하나는 s오비탈(원형 에테르)이며, 다른 하나는 선형 에테르가
            시작되는 점(2p)이다. 그렇다면 두 점으로 가로축 이동을 한 두 선을
            각각 0과 100으로 하는 좌표계를 생각할 수 있다. 이 좌표계에서 각 점이
            어떻게 배치되어 있는지를 살펴 봄으로 오비탈을 에테르로 해석하는 것이
            타당한 방법인지 살펴볼 수 있겠다.
        </p>
        <p>
            이렇게 하면! 잘 안 보인다. 앞서 식을 만들었지만 여전히 오차가 존재하기 때문이다.
        </p>
    </Doc>
)
