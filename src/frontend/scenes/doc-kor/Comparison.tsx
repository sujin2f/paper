import React from 'react'
import { Doc } from 'src/frontend/scenes/doc-kor'
import Latex from 'react-latex'
import { Row } from 'src/common/components/layout/Row'
import { Column } from 'src/common/components/layout/Column'

import pic49 from 'src/assets/images/doc/pic49.png'
import pic66 from 'src/assets/images/doc/pic66.png'
import pic68 from 'src/assets/images/doc/pic68.png'
import pic69 from 'src/assets/images/doc/pic69.png'
import pic70 from 'src/assets/images/doc/pic70.png'
import pic71 from 'src/assets/images/doc/pic71.png'
import pic73 from 'src/assets/images/doc/pic73.png'
import pic75 from 'src/assets/images/doc/pic75.png'
import pic76 from 'src/assets/images/doc/pic76.png'
import pic77 from 'src/assets/images/doc/pic77.png'
import pic78 from 'src/assets/images/doc/pic78.png'
import pic79 from 'src/assets/images/doc/pic79.png'
import pic80 from 'src/assets/images/doc/pic80.png'
import pic81 from 'src/assets/images/doc/pic81.png'
import pic82 from 'src/assets/images/doc/pic82.png'
import pic83 from 'src/assets/images/doc/pic83.png'
import pic84 from 'src/assets/images/doc/pic84.png'
import pic85 from 'src/assets/images/doc/pic85.png'
import pic87 from 'src/assets/images/doc/pic87.png'
import pic88 from 'src/assets/images/doc/pic88.png'
import pic89 from 'src/assets/images/doc/pic89.png'
import pic90 from 'src/assets/images/doc/pic90.png'

export const Comparison = (): JSX.Element => (
    <Doc>
        <h2 id="multi-electron-atoms">가설의 검증(3): 방출 에너지 분석</h2>

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
            여기서 내가 하려는 작업은 선형과 원형 에테르가 쌓이는 것이 값을
            일정하게 증감시키는지 알아보는 것이다. 즉, 원형 에테르의 변화와 선형
            에테르의 변화가 각자 일정한 규칙을 보인다면, 에테르의 존재에 대한
            근거가 될 수 있기 때문이다.
        </p>

        <p>
            원형 에테르만 가진 s 오비탈이 그리는 값의 궤적은 위 그림에서 붉은
            선에 해당한다. 여기서 선형 에테르가 하나라도 들어오면 왼쪽으로 크게
            가로축 이동이 일어나며 이에 따라 값은 점프하게 된다. 선형 에테르의
            존재가 값을 크게 증가시킨다는 뜻이다.
        </p>

        <h3>Ground Fixed 방정식</h3>

        <p>
            그렇다면 어떤 값을 기준으로 비교해야 할까? 가장 간단한 방식은 바닥
            상태를 시작점으로 하는 방정식으로 오비탈이 어떻게 변화하는지 보기로
            하자. 이 방정식을 Ground Fixed라고 부르기로 한다. 기준이 되는
            방정식에서 이전 값과의 차이와 실제 값에서의 이전 값과의 차이를
            비교해보자.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$ R^{1.1}(x) = R(x, 1, 13.60676328, 13.60676328, 0, 0) $$`}</Latex>
            <p>수소의 Ground Fixed</p>
        </div>

        <div className="align__center">
            <img src={pic66} alt="수소: Ground Fixed, 2S1/2" />
            <p>
                <strong>수소: Ground Fixed, 2S1/2</strong> 예쁘다. 그러나,
            </p>
        </div>

        <p>
            위는 <sup>2</sup>S<sub>1/2</sub>에서 <sup>2</sup>P*<sub>3/2</sub>
            으로 뒤쪽 J값이 1씩 증가하는 그룹이다. s 오비탈은 붉은 선이며,{' '}
            <code>1s</code>는 0이기에 100%가 된다. 이는 너무 멀리 떨어진 값이라
            잘라냈지만, 붉은 선이 사실은 저 위에서 시작했다고 생각하시면 된다.
            각각의 선은 s, p와 같은 오비탈이다. <code>[X]</code>,{' '}
            <code>[O]</code>, <code>[OO]</code>, 혹은 <code>[-]</code>,{' '}
            <code>[-O]</code>, <code>[-OO]</code>와 같이 원형 에테르의 변화를
            나타낸다. 위쪽 그룹은 같은 패턴인 것 처럼 보인다. 그러나 붉은 선인 s
            오비탈은 패턴이 다르다. 원형 에테르만으로 이루어진 그룹인 s 오비탈만
            예외적으로 떨어졌다 올라가는 나이키 패턴을 보인다고 말할 수는
            있으나, 이것이 가설을 증명한다고 말하기에는 뭔가 찝찝하다. 내가
            증명하고 싶은 것은 원형, 혹은 선형의 변화가 일정한 패턴을 가진다는
            것이다. 이 그림으로 원형 에테르가 증가하는 패턴이 존재한다고
            자신있게 말할 수는 없다. 망했다.
        </p>

        <div className="align__center">
            <img src={pic70} alt="수소: Ground Fixed, 2P*1/2" />
            <p>
                <strong>수소: Ground Fixed, 2P*1/2</strong>
            </p>
        </div>

        <p>
            위는 <sup>2</sup>P*<sub>1/2</sub>에서 <sup>2</sup>D<sub>3/2</sub>
            으로 증가하는 그룹이다. 붉은 선은 p 오비탈이다. 즉, 선형 에테르가
            포함된 선이다. 위에서는 s 오비탈을 예외로 했는데, 이제는 p 오비탈도
            나이키 패턴을 그릴 수 있다고 해야한다. 마이클 조던의 움직임 만큼이나
            말이 되지 않는다. 완전히 망했다.
        </p>

        <h3>원이 먼저인가, 선이 먼저인가?</h3>

        <p>
            여기서 잠깐 의문을 하나 제기해 본다. <code>[-O]</code>와{' '}
            <code>[O-]</code> 중에 여러분은 어떤 것이 맞는 것 같은가? 그게 무슨
            상관이냐고 하시는 분들도 있을 것이고, 나와 같이 앞의 것이 맞다고
            생각하는 사람도 있을 것이다. 앞의 것이 맞다고 생각하는 사람들은
            오비탈의 분류가 선형 에테르의 개수를 기준으로 하기 때문일 것이다.
            예를 들자면, p 오비탈이 <code>[-]</code>, <code>[-O]</code>,{' '}
            <code>[-OO]</code>로 변화하기 때문에 습관적으로 선형을 앞에
            두게된다. 그런데 이것을 <code>[O-]</code>라고 생각하면 의미가 완전히
            달라진다.
        </p>

        <p>
            첫번째 자리에 있는 에테르는 값이 아주 크다. 반면 두 번째 자리의 것은
            상대적으로 작다. 원형과 선형의 에테르는 값이 다르다. 이 세가지를
            조합하면 <code>[-O]</code>과 <code>[O-]</code>의 값은 다를 수 밖에
            없다. 그것이 덧셈이라면 말이다.
        </p>

        <p>
            <code>[X]</code> =&gt; <code>[O]</code> =&gt; <code>[OO]</code>{' '}
            =&gt; <code>[OOO]</code> =&gt; <code>[OOOO]</code> 이것은 s
            오비탈이며 원형 에테르이다. <code>[X]</code> =&gt; <code>[-]</code>{' '}
            =&gt; <code>[--]</code> =&gt; <code>[---]</code> =&gt;{' '}
            <code>[----]</code> 이것은 선형 에테르이며 <code>1s</code> =&gt;{' '}
            <code>2p</code> =&gt; <code>3d</code> =&gt; <code>4f</code>로
            변화한다. <code>[O]</code> =&gt; <code>[O-]</code> =&gt;{' '}
            <code>[O--]</code> =&gt; <code>[O---]</code> 이것은 원형 하나 위에
            선형들이 쌓이는 것으로 <code>2s</code> =&gt; <code>3p</code> =&gt;{' '}
            <code>4d</code> =&gt; <code>5f</code>가 되는 값이다.
        </p>

        <p>
            값들을 재정렬하자. <sup>2</sup>S<sub>1/2</sub>에서 마지막 J값 에는
            선형 에테르의 개수인 l값이 더해져 있다. 따라서 <sup>2</sup>S
            <sub>1/2</sub> =&gt; <sup>2</sup>P*
            <sub>3/2</sub> =&gt; <sup>2</sup>D<sub>5/2</sub>로 s, p, d
            오비탈들을 묶을 수 있을 것이다. 이들 값을 교차시켜서 원형이 먼저인
            그룹으로 나열하고 다시 동일한 방정식을 적용하도록 하자.
        </p>

        <div className="align__center">
            <img
                src={pic68}
                alt="수소를 원형 우선으로 정렬했을 때의 Ground Fixed, 2S1/2"
            />
            <p>
                <strong>
                    수소를 원형 우선으로 정렬했을 때의 Ground Fixed, 2S1/2
                </strong>{' '}
                눈물이 앞을 가린다
            </p>
        </div>

        <p>
            붉은 선은 원형 오비탈의 변화이며 나머지는 선형의 변화다. 앞서 말했듯
            0번 자리에는 100%가 들어가기에 저 위에서 떨어지는 값이다. 빨간
            원형은 두 번 떨어지는 나이키, 나머지 선형은 한 번 떨어지는 나이키
            패턴이다. 지린다.
        </p>

        <div className="align__center">
            <img
                src={pic69}
                alt="수소를 원형 우선으로 정렬했을 때의 Ground Fixed, 2P*1/2"
            />
            <p>
                <strong>
                    수소를 원형 우선으로 정렬했을 때의 Ground Fixed, 2P*1/2
                </strong>{' '}
                눈물이 눈물을 가린다
            </p>
        </div>

        <p>
            아까 엉망진창이었던 <sup>2</sup>P*<sub>1/2</sub>도 깔끔하게
            정리된다. 원형을 먼저 배치하는 방법이 더 합리적인 것을 알았다. s, p,
            d와 같이 선형 에테르의 개수를 기준으로 하는 오비탈 분류법은 틀렸을
            수 있다.
        </p>

        <p>
            이 그림으로 알 수 있는 또 다른 하나는 <code>[O]</code>에서{' '}
            <code>[O-]</code>로, <code>[OO]</code>에서 <code>[OO-]</code>로와
            같이 어느 자리에서건 선형 에테르가 등장하고 늘어나는 패턴이 자리수와
            상관 없이 동일하다는 것이다. 정확한 값은 차이가 있으나 덧셈이라 볼
            수 있다는 것이다.
        </p>

        <h3>헬륨을 안 해볼 수 없잖아?</h3>

        <Row>
            <Column small={6}>
                <div className="align__center">
                    <img src={pic71} alt="헬륨 오비탈의 Ground Fixed, 1S0" />
                    <p>
                        <strong>헬륨 오비탈의 Ground Fixed, 1S0</strong> 왠열?
                        규칙적이네?
                    </p>
                </div>
            </Column>

            <Column small={6}>
                <div className="align__center">
                    <img src={pic73} alt="헬륨 오비탈의 Ground Fixed, 3S1" />
                    <p>
                        <strong>헬륨 오비탈의 Ground Fixed, 3S1</strong> 그럼
                        그렇지
                    </p>
                </div>
            </Column>
        </Row>

        <p>
            첫번째는 뭔가 규칙이 있어 보였는데 두번째는 아니다. 이제 에테르를
            보자.
        </p>

        <Row>
            <Column small={6}>
                <div className="align__center">
                    <img src={pic75} alt="헬륨 에테르의 Ground Fixed, 1S0" />
                    <p>
                        <strong>헬륨 에테르의 Ground Fixed, 1S0</strong>
                    </p>
                </div>
            </Column>

            <Column small={6}>
                <div className="align__center">
                    <img src={pic76} alt="헬륨 에테르의 Ground Fixed, 3P*0" />
                    <p>
                        <strong>헬륨 에테르의 Ground Fixed, 3P*0</strong>
                    </p>
                </div>
            </Column>
        </Row>

        <p>마음이 편안해지면서 내면의 평화를 찾을 수 있다.</p>

        <h3>리튬 빼면 섭하지</h3>

        <div className="align__center">
            <img src={pic77} alt="리튬 오비탈의 Ground Fixed, 2S1/2" />
            <p>
                <strong>리튬 오비탈의 Ground Fixed, 2S1/2</strong>
            </p>
        </div>

        <p>
            엉망진창인 것을 기대했지만 이건 너무했다. 오류가 있는 것이다. 이전
            장에서 리튬의 바닥 상태는 실제 바닥 상태가 아님을 알게 되었다. 아래
            표를 보자. 공통적으로 들어가는 <code>[X]2</code>는 생략하였다.
        </p>

        <div className="table-scroll">
            <table className="unstriped">
                <thead>
                    <tr>
                        <th>
                            <sup>2</sup>S<sub>1/2</sub> (붉은색)
                        </th>
                        <th>[O]</th>
                        <th>[OO]</th>
                        <th>[OOO]</th>
                        <th>[OOOO]</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th></th>
                        <td>0</td>
                        <td>3.3731</td>
                        <td>4.3409</td>
                        <td>4.7485</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th>
                            <sup>2</sup>P*<sub>3/2</sub> (주황색)
                        </th>
                        <th>[-]</th>
                        <th>[O-]</th>
                        <th>[OO-]</th>
                        <th>[OOO-]</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th></th>
                        <td>1.8479</td>
                        <td>3.8343</td>
                        <td>4.5216</td>
                        <td>4.8373</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>
            이전 장에서 제시한 바로는 리튬의 실제 값이 2d(1)만큼 위로 올라가야
            한다는 것이다. <sup>2</sup>P*<sub>3/2</sub>의 <code>[-]</code>값은
            실제로는 <code>[O]</code>와의 차이이지 이전 값에서의 변화가 아닌
            것이다. 이를 제외하도록 하자.
        </p>

        <Row>
            <Column small={6}>
                <div className="align__center">
                    <img src={pic78} alt="리튬 오비탈의 Ground Fixed, 2S1/2" />
                    <p>
                        <strong>리튬 오비탈의 Ground Fixed, 2S1/2</strong>
                    </p>
                </div>
            </Column>
            <Column small={6}>
                <div className="align__center">
                    <img src={pic79} alt="리튬 에테르의 Ground Fixed, 2S1/2" />
                    <p>
                        <strong>리튬 에테르의 Ground Fixed, 2S1/2</strong>
                    </p>
                </div>
            </Column>
        </Row>

        <p>
            오비탈 보다는 에테르 쪽이 더 규칙적으로 보인다. 적어도 내 눈에는
            그러하다.
        </p>

        <h3>Float 방정식</h3>

        <p>
            Ground Fixed는 고정된 기준에서 값을 비교하는 방식이다. 기준
            방정식에서 멀어질 수록 차이가 줄어들게 된다. 이제 몇가지 비교 기준을
            더 제시하고자 한다. 첫째는 Float로, 각각의 세트에 가깝게 방정식을
            좌우이동 하는 것이다. 좌우이동 k값 기억하는가? 같은 세트의 모든
            점에서 k값을 구해 그 중간 값으로 k를 잡아 그래프를 이동하기로 하자.
            이렇게 이동시킨 것을 Float라고 부르기로 한다. 아래 그림에서 각각의
            선은 그 기준 방정식이 값의 배치에 맞추어 좌우이동한 것이다.
        </p>

        <Row>
            <Column small={6}>
                <div className="align__center">
                    <img src={pic80} alt="수소 오비탈의 Float, 2S1/2" />
                    <p>
                        <strong>수소 오비탈의 Float, 2S1/2</strong>
                    </p>
                </div>
            </Column>
            <Column small={6}>
                <div className="align__center">
                    <img src={pic81} alt="수소 에테르의 Float, 2S1/2" />
                    <p>
                        <strong>수소 에테르의 Float, 2S1/2</strong>
                    </p>
                </div>
            </Column>
        </Row>

        <Row>
            <Column small={6}>
                <div className="align__center">
                    <img src={pic82} alt="헬륨 오비탈의 Float, 1S0" />
                    <p>
                        <strong>헬륨 오비탈의 Float, 1S0</strong>
                    </p>
                </div>
            </Column>
            <Column small={6}>
                <div className="align__center">
                    <img src={pic83} alt="헬륨 에테르의 Float, 1S0" />
                    <p>
                        <strong>헬륨 에테르의 Float, 1S0</strong>
                    </p>
                </div>
            </Column>
        </Row>

        <p>
            오비탈 역시 비슷한 변화를 보이는 것 같지만, 헬륨 오비탈의 경우에는
            주황, 노랑, 청록의 꺾이는 지점이 규칙적이지 않다는 것을 볼 수 있다.
            기준을 바꾸더라도 에테르 분류가 더 설득력이 있다.
        </p>

        <h3>Between 방정식</h3>

        <p>
            세번째 비교 방식은 Between이다. 모든 에테르 조합이 가진 각각의 k값의
            최대값과 최소값을 구해서 방정식 두 개를 만든다. 이 두 방정식 사이를
            0에서 100으로 하는 좌표계로 봤을 때 각각의 에테르가 어디에
            위치하는지 보는 것이다. k<sub>min</sub>을 k로 하는 방정식 R
            <sub>min</sub>()과 max를 k로 하는 방정식 R<sub>max</sub>()를 만들고,
            R<sub>min</sub>(1) - R<sub>min</sub>(0)을 100으로, max를 0으로 했을
            때, 각 점과 이전 점의 차이를 대입하는 것이다.
        </p>

        <Row>
            <Column small={6}>
                <div className="align__center">
                    <img src={pic84} alt="수소 오비탈의 Between" />
                    <p>
                        <strong>수소 오비탈의 Between</strong>
                    </p>
                </div>
            </Column>
            <Column small={6}>
                <div className="align__center">
                    <img src={pic85} alt="수소 에테르의 Between" />
                    <p>
                        <strong>수소 에테르의 Between</strong>
                    </p>
                </div>
            </Column>
        </Row>

        <p>
            '키야~ 깔금하다'라고 생각할 수 있겠지만, 수소의 오차는 너무도 작아서
            역설적으로 기준 방정식에서 모든 점이 차이가 같이 나는 것 뿐이다.
            헬륨을 보자.
        </p>

        <Row>
            <Column small={6}>
                <div className="align__center">
                    <img src={pic87} alt="헬륨 오비탈의 Between, 1S0" />
                    <p>
                        <strong>헬륨 오비탈의 Between, 1S0</strong>
                    </p>
                </div>
            </Column>
            <Column small={6}>
                <div className="align__center">
                    <img src={pic88} alt="헬륨 오비탈의 Between, 3S1" />
                    <p>
                        <strong>헬륨 오비탈의 Between, 3S1</strong>
                    </p>
                </div>
            </Column>
        </Row>

        <p>
            <sup>1</sup>S<sub>0</sub>에서 시작하는 오비탈은, 다시 말해 원형
            에테르의 변화는, 일견 규칙적으로 보인다. 그러나 <sup>3</sup>S
            <sub>1</sub>에서는 다르다. 에테르는 어떠할까?
        </p>

        <Row>
            <Column small={6}>
                <div className="align__center">
                    <img src={pic89} alt="헬륨 에테르의 Between, 1S0" />
                    <p>
                        <strong>헬륨 오비탈의 Between, 1S0</strong>
                    </p>
                </div>
            </Column>
            <Column small={6}>
                <div className="align__center">
                    <img src={pic90} alt="헬륨 에테르의 Between, 3S1" />
                    <p>
                        <strong>헬륨 오비탈의 Between, 3S1</strong>
                    </p>
                </div>
            </Column>
        </Row>
    </Doc>
)
