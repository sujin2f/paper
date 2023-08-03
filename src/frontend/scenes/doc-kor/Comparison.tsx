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
        <p>
            여기서 내가 하려는 작업은 오비탈 분류가 적절한지 에테르 분류가
            적절한지 알아보는 것이다. 즉, 원형 에테르의 변화와 선형 에테르의
            변화가 각자 일정한 규칙을 보인다면, 에테르의 존재에 대한 힌트가 될
            수 있기 때문이다.
        </p>
        <p>
            그렇다면 어떤 값을 기준으로 비교해야 할까? 가로축 방향으로 이동한
            방정식과 실제 값을 비교하는 것이 가장 합리적일 것이다. 그런데 여기서
            한가지 문제가 발견된다.
        </p>

        <p>
            값이 아니라 차리를 비교해야 된다. & 그래프를 찌그러 뜨리는 방법은? &
            diff
        </p>
    </Doc>
)
