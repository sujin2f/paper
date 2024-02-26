import React from 'react'

import { Doc } from 'src/frontend/scenes/doc-kor'
import { Latex } from 'src/frontend/components/document/latex'

import pic27 from 'src/assets/images/doc/pic27.png'
import pic28 from 'src/assets/images/doc/pic28.png'
import pic29 from 'src/assets/images/doc/pic29.png'
import pic31 from 'src/assets/images/doc/pic31.png'
import pic33 from 'src/assets/images/doc/pic33.png'
import pic42 from 'src/assets/images/doc/pic42.png'
import pic50 from 'src/assets/images/doc/pic50.png'
import pic51 from 'src/assets/images/doc/pic51.png'
import pic52 from 'src/assets/images/doc/pic52.png'
import pic53 from 'src/assets/images/doc/pic53.png'

export const OrbitalEquation = (): JSX.Element => (
    <Doc>
        <h2 id="orbital-equation">가설의 검증(3): 뤼드베리 방정식</h2>

        <p>
            앞서 진행한 뤼드베리 값의 비교는 완전하지 않다. 왜냐하면 뤼드베리
            방정식은 수소꼴 원자 이외에는 들어맞지 않기 때문이다. 오차가
            어마무지 하다는 이야기이다.이제 올바른 방정식을 찾도록 하자.
            Nth(n)에서 수소 원자의 뤼드베리 값들을 보자. 대략 0.75에서 시작해서
            1로 수렴하게 된다. 그것은 뤼드베리 방정식의 구조와도 일치한다. n에
            1를 넣었을 때의 값은 0.75이며 함수의 극한은 1로 수렴되기 때문이다.
            그러니 수소꼴 원자들이 방정식에 맞지 않으면 서운할 지경이다. 그런데
            매우 서운하다. 안 맞기 때문이다.
        </p>
        <div className="align__center">
            <img src={pic27} alt="수소(H)의 뤼드베리 값" />
            <p>
                <Latex displayMode={true}>{`Z^2(1 - \\dfrac{1}{n^2})`}</Latex>
                <strong>수소(H)의 뤼드베리 값</strong>: 뤼드베리 방정식과 딱
                맞아 떨어지나..?
            </p>
        </div>
        <div className="align__center">
            <img src={pic31} alt="스트론튬 XXXVII과 XXXVIII의 뤼드베리 값" />
            <p>
                <strong>스트론튬 XXXVII과 XXXVIII의 뤼드베리 값</strong>: 안
                맞네?
            </p>
        </div>
        <p>
            우리가 하고자 하는 작업은 기준값과의 비교를 통해서 오비탈 분류와
            에테르 분류를 검증하기 위함이다. 그런데 기준이 되는 방정식의 오차가
            크다면 비교가 어려워진다. 에테르의 수가 늘어날 수록 (2s =&gt; 3s)
            이전 값과의 차이는 매우 작아지기 때문에 기준점은 최소한의 오차를
            가지는 것이 좋다. 우리는 보다 오차가 작은 방정식을 찾아내야 한다.
        </p>
        <p>
            뤼드베리 방정식을 고쳐 쓰려면 값들이 배치된 구조를 알아야 한다. 앞서
            보았듯 첫번째 에테르를 지나서 한 점으로 수렴하는 형태이다. 원자번호
            2번 헬륨 부터는 이것이 조금 복잡해진다. 그들이 그리는 형태는 스핀과
            부원자수에 따라 다른 시작점을 가진다. 그래프가 가로 방향으로
            이동한다는 뜻이다. 다행히 모든 변화는 같은 점으로 수렴되는 듯 하다.
        </p>
        <div className="align__center">
            <img src={pic28} alt="같은 원자에서 고점은 일치" />
            <p>
                <strong>고점은 일치</strong>: 같은 원자에서는 한 곳으로 수렴한다
            </p>
        </div>
        <p>
            이 규칙은 몇 개의 전자가 에테르를 가지는지에 따라 달라지는 것으로
            보인다. 헬륨 원자에서 <code>[X, O]</code>, <code>[X, O-]</code>,{' '}
            <code>[X, O--]</code>와 같이 하나의 전자만 에테르를 가질 경우에는
            대략 1.8 정도의 값으로 수렴되며, <code>[O, -]</code>.{' '}
            <code>[-, -]</code>와 같은 점들은 시작점이 4.23 정도가 된다. 즉,
            고점의 위치는 에테르를 가진 전자의 수에 따라 달라지는 것을 알 수
            있다. 일단은 바닥상태와 같은 종류에 대해 규칙을 파악해보도록 하자.
        </p>
        <h3>첫점 규칙</h3>
        <p>
            고점은 추론 값이다. 하지만 첫점은 명확한 관측값이 존재한다. 원자번호
            3번인 리튬을 보면 바닥 상태인 <code>[X, X, O]</code>의 값이 0이다.
            이것은 첫점이라고 봐야한다. 즉, 리튬은 모든 값에 첫점 값을 더한 값이
            실제 값이라고 봐야한다. 첫점이 관측값과 일치하는 것은 바닥 상태가
            모두 1s인 <code>[X]</code>의 수소꼴 원자 (H, He II, Li III, ...)와{' '}
            <code>[X, X]</code>의 헬륨꼴 원자 (He, Li II, Be III, ...)들일
            것이다. 이를 표에 정리해 보자.
        </p>
        <div className="table-scroll">
            <table className="unstriped">
                <thead>
                    <tr>
                        <th></th>
                        <th>H</th>
                        <th>He</th>
                        <th>Li</th>
                        <th>Be</th>
                        <th>B</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>I</th>
                        <td>0.7496</td>
                        <td>1.5152</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>II</th>
                        <td></td>
                        <td>2.9997</td>
                        <td>4.4777</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>III</th>
                        <td></td>
                        <td></td>
                        <td>6.7501</td>
                        <td>8.9412</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>IV</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>12.0013</td>
                        <td>18.7540</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="align__center">
            <strong>원형 에테르 하나의 값</strong>
        </p>
        <p>
            놀랍게도 근사값이 근사하게 떨어진다. <code>0.75</code>,{' '}
            <code>1.5</code>, <code>3</code>, <code>4.5</code>,<code>6.75</code>
            , <code>9</code>, <code>12</code>, <code>18.75</code>. 전부 0.75의
            배수들이다. 그럼 몇 배일까?
        </p>
        <div className="align__center">
            <img src={pic29} alt="0.75의 몇 배일까?" />
            <p>
                <strong>0.75의 몇 배일까?</strong>: 붉은색은 측정 값, 푸른색은
                예측값
            </p>
        </div>
        <p>
            일단 붉은 글씨만을 먼저 보기로 하자. 첫번째 대각선 값들은 모두 1, 4,
            9, 16으로 Z의 제곱과 일치한다. (짜잔!) 가로 방향의 변화를 대각선으로
            보면 +1, +2, +3, +4로 역시 일정하다. (짜자잔!) 세로 방향의 변화 역시
            +2, +3, +4로 일정하다. (짜자자잔!) 이제 빈 전자들과 오비탈 하나의
            값을 예측할 수 있게 되었다. 0.75의 정수배일 것이다. Li I이 3, Be I이
            4일 수 있다는 것이다. 그렇게 가정하고 세로 방향의 변화를 보면 리튬은{' '}
            <Latex>{`\\begin{bmatrix}+3\\\\+3\\end{bmatrix}`}</Latex>, 베릴륨은{' '}
            <Latex>{`\\begin{bmatrix}+4\\\\+4\\\\+4\\end{bmatrix}`}</Latex>가
            되는 것을 볼 수 있다. 한 가지 가능성이 더 있는데, 가로축 변화량을
            <Latex>{`\\begin{bmatrix}+1 & +2 & +3 & +4 & ...\\end{bmatrix}`}</Latex>
            로 가정하는 것이다. 그렇게 하면 세로 방향의 변화는{' '}
            <Latex>{`\\begin{bmatrix}+2\\\\+3\\end{bmatrix}`}</Latex>과 같이 1씩
            증가한다. 두 가지 가능성 중에서 더 설득력이 있는 것은 첫번째 것이다.
            빈 전자의 수가 첫점에 미치는 영향이 0.75로 일정해지기 때문이다.
            수소는 다른 전자가 없기 때문에 고점이 0.75이다. 헬륨은 0.75에 빈
            전자 하나의 영향 0.75를 더해 1.5가 된다. 리튬은 0.75에 빈 전자 두
            개의 영향 1.5를 더해 2.25가 되는 것이다. 더 단순한 설명이 진실일
            것이라는 오컴의 면도날을 따르자.
        </p>
        <div className="align__center">
            <Latex displayMode={true}>{`u(Z, i) = 0.75Zi`}</Latex>
            <p>
                <strong>첫점 공식 (안 정밀 버전)</strong>
            </p>
        </div>
        <p>
            첫점 공식의 비율이 Zi인 것을 보고 혹시나 뤼드베리 방정식의 Z
            <sup>2</sup>이 Zi가 아닐까 의문이 든다. 이것은 Z와 i의 차이가 큰
            원소의 비율을 보면 된다. 11번 소디움 I와 20번 칼슘의 X를 보면 Zi는
            올바른 비율이 아니라는 것을 알 수 있다. 이것은 이온 번호의 제곱과
            근사하며, 고점 공식을 구할 때 더 자세히 알아보자.
        </p>

        <p>
            이제 값들을 더 정밀하게 대입해보자. 위 그림에서 우리가 알 수 있는
            정확한 값은 대각선 방향이다. 그리고 가로 방향은 일정하게 증가하는
            1차 함수로 추론하였다. 그렇다면 대각선 성분에 대한 함수 두 개를 먼저
            만들고 이를 합성하면 가로 방향의 그래프가 만들어질 수 있다. 모든
            값은 원형 에테르 하나인 2s, <code>[O]</code>를 사용하였다.
        </p>
        <div className="align__center">
            <img src={pic33} alt="수소꼴 원자들의 첫번째 뤼드베리 값" />
            <p>
                <strong>수소꼴 원자들의 첫번째 뤼드베리 값</strong>
            </p>
        </div>
        <p>
            보라색 선은 실제 측정값이며 주황 선은 변화량이다. 뤼드베리 방정식의
            Z<sup>2</sup>이 보이는 것 처럼 측정값은 2차 함수의 형태이며 변화량은
            1차 함수이다. 그러나 뒤로 갈 수록 약간씩 기울기가 늘어난다. 이 오차
            까지 수정하려면 너무 복잡해진다. 첫번째 변화 부터 열번째 변화 까지를
            직선으로 연결하는 선으로 변화량을 취하도록 하겠다. 즉, 이 방정식은
            앞쪽 원소들에서 오차가 없는 것을 지향한다. 이제 이것을 방정식으로
            만들어보자. f는 first의 의미이다. 모든 과정에서 무리수는 나오지 않기
            때문에 i를 이온 번호를 나타내는 변수로 사용하겠다.
        </p>
        <div>
            <Latex
                displayMode={true}
            >{`f^{\\prime}_{H}(x) = \\dfrac{p_{10}-p_{9}-(p_{2}-p_{1})}{8}x-\\dfrac{p_{10}-p_{9}-(p_{2}-p_{1})}{8}+p_{2}-p_{1}`}</Latex>
            <Latex
                displayMode={true}
            >{`\\to f^{\\prime}_{H}(x) = 1.50352958331x + 0.746578380239`}</Latex>
        </div>
        <p>
            1을 넣으면 1번에서 2번으로의 변화량, 2를 넣으면 3번에서 4번으로의
            변화량을 얻을 수 있다. 10번의 위치를 구하기 위해서는 1번 값 + 1번
            변화 + 2번 변화 + .. + 9번 변화를 계산해주면 된다.
        </p>
        <div className="align__center">
            <Latex
                displayMode={true}
            >{`f_{H}(i) = 0.7495987475942 + \\sum_{n=1}^{i-1} (1.50352958331n + 0.746578380239)`}</Latex>
            <p>
                <strong>수소꼴 원자에서의 첫점 공식</strong>
            </p>
        </div>
        <p>
            똑같은 방법으로 헬륨꼴 원자들의 공식 또한 만들어낼 수 있다. 헬륨
            꼴에서는 스핀에 따라 s 오비탈이 두 개 존재한다. 이 중간 값을
            취하도록 하겠다.
        </p>
        <div className="align__center">
            <Latex
                displayMode={true}
            >{`f^{\\prime}_{He}(x) = 1.50330222794x + 1.41856704855`}</Latex>
            <Latex
                displayMode={true}
            >{`f_{He}(i) = 1.48597317351 + \\sum_{n=1}^{i-1} (1.50330222794n + 1.41856704855)`}</Latex>
            <p>
                <strong>헬륨꼴 원자에서의 첫점 공식</strong>
            </p>
        </div>
        <p>두 개의 공식을 합성해서 첫점 공식을 완성해보자.</p>
        <div className="align__center">
            <Latex
                displayMode={true}
            >{`f(Z, i) = (f_{He}(i) - f_{H}(i))(Z - i + 1) - (f_{He}(i) - f_{H}(i)) + f_{H}(i)`}</Latex>
            <Latex
                displayMode={true}
            >{`f(Z, i) = (f_{He}(i) - f_{H}(i))(Z - i) + f_{H}(i)`}</Latex>
            <p>
                <strong>첫점 공식 (최종)</strong>
            </p>
        </div>

        <p>
            우리가 구하고자 하는 방정식에서 첫점은 거의 의미가 없다. 그래프의
            형태를 결정하는 것은 수렴하는 지점인 고점이기 때문이다. 그러나
            첫점이 완전히 의미가 없는 것은 아니다. 첫점은 리튬꼴의 끝점을 예측할
            때 유의미하다. 리튬에 첫점을 더해 우리의 가정이 옳은지 검증해보자.
        </p>

        <div className="align__center">
            <img src={pic42} alt="첫점과 고점의 비율" />
            <p>
                <strong>첫점과 고점의 비율</strong>
            </p>
        </div>

        <p>
            첫점 공식에 의해 구해진 리튬꼴 원소들의 바닥 상태 값을 f(3, i)만큼
            더해주면 고점과의 비율도 잘 맞아 떨어지는 것을 볼 수 있다. 위
            그래프들은 가로 방향 이동을 하지 않은 상태이다. 각 그래프의 세로
            크기는 1로서 동일하다. 이것이 의미하는 바는 무엇일까? 덧셈이다.
            첫번째 수소의 바닥 상태는 아시다시피 0이며 첫점(<code>[O]</code>)은
            0.75이고 1로 수렴한다. 헬륨이 시작되는 위치는 대략 0.8이다. 이는
            비어있는 전자(
            <code>[X, X]</code>)의 영향이라고 볼 수 있다. 여기에 원형 에테르
            하나의 값을 더한 <code>[X, O]</code>는 0.75 + 0.8인 1.55이며, 1.8로
            수렴한다. 리튬의 그래프는 <code>[X, X, X]</code> 상태인 1.6에서
            시작하며 이 때 첫점은 여기에 0.75를 더한 2.35가 되고 2.6으로
            수렴한다. 0.8은 에테르가 하나 존재할 때 빈 전자가 영향을 미치는
            값이라고 볼 수 있다.
        </p>

        <p>
            그런데 재미 있는 것은 이렇게 더한 첫점 값들은 선형 에테르와 더 잘
            맞는다는 것이다. 이것은 우리가 구하려는 방정식의 틀로 모든 것을
            설명하고자 할 때 유용하게 사용될 수 있는 정보이다.
        </p>

        <p>
            정리해 보자. 첫점은 우리가 원하는 방정식에서는 의미가 없다. 혹은
            아무 의미도 없다. 방정식은 시작점과 끝점, 그리고 그래프의 비율로서
            결정되기 때문이다. 하지만 첫점을 구함으로서 리튬의 바닥 상태를 알 수
            있게 되었고, 오비탈의 형태가 그 마디가 가진 값의 합이라는 근거를
            마련할 수 있었다. 즉, 원형 혹은 선형의 에테르가 일정한 에너지를
            가진다는 것이다. 덧셈이다. 이제는 고점을 구함으로서 지금까지 얻은
            대략적인 그래프의 형태를 더 구체화 시켜 보겠다.
        </p>

        <h3>수소꼴의 방정식: 비율</h3>

        <p>
            수소꼴의 경우 고점은 Z<sup>2</sup>로 볼 수 있다. 그러나 스트론튬의
            예에서 보았듯, 첫점과 마찬가지로 오차가 생긴다. 하지만 걱정 마시라.
            고점의 경우에는 이온화 에너지라는 관측 값이 있다. 이제 부터의 단위는
            eV로 통일하도록 한다.
        </p>

        <p>수소의 이온화 에너지 13.5970432eV로 관측값과 비교해보자.</p>

        <div className="align__center">
            <img src={pic50} alt="수소 방정식" />
            <Latex
                displayMode={true}
            >{`y = 13.5970432 (1 - \\dfrac{1}{(x + 1)^2})`}</Latex>
        </div>

        <p>
            이번에는 내가 가진 데이터 중 가장 큰 번호인 29번 구리를 보자. 이온화
            에너지는 11566.865778eV이다.
        </p>

        <div className="align__center">
            <img src={pic51} alt="구리 방정식" />
            <Latex
                displayMode={true}
            >{`y = 11566.865778 (1 - \\dfrac{1}{(x + 1)^2})`}</Latex>
        </div>

        <p>
            수소꼴의 방정식은 이온화 에너지를 이용하면 간단하게 구해진다는 것을
            보았다. Nth(n)에 영향을 미치는 비율은 해당 원소의 이온화 에너지이다.
        </p>

        <h3>헬륨I의 방정식: 좌우 이동</h3>

        <p>
            헬륨I을 보도록 하자. 그래프의 비율은 수소I의 13.5970432eV를
            사용한다. 그리고 고점을 맞춰주기 위해 헬륨I의 이온화 에너지
            24.58556828eV를 더하고 수소I의 13.5970432eV를 빼준다.
        </p>

        <div className="align__center">
            <img src={pic52} alt="헬륨I의 방정식" />
            <Latex
                displayMode={true}
            >{`y = 13.5970432 (1 - \\dfrac{1}{(x + 1)^2}) + 24.58556828 - 13.5970432`}</Latex>
        </div>

        <p>
            이 그래프는 실제 값들과 차이가 존재한다. 앞서 전제했듯 그래프를
            좌우로 이동시켜 보자. 이는 훈트의 규칙과 같은 것들에 의해 움직일
            테지만 지금은 움직이는 것에만 집중해 보자.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`y = r (1 - \\dfrac{1}{(x + 1 + k)^2}) + S`}</Latex>
            <Latex
                displayMode={true}
            >{`\\to r (1 - \\dfrac{1}{(x + 1 + k)^2}) = y - S`}</Latex>
            <Latex
                displayMode={true}
            >{`\\to 1 - \\dfrac{1}{(x + 1 + k)^2} = \\dfrac{y - S}{r}`}</Latex>
            <Latex
                displayMode={true}
            >{`\\to \\dfrac{1}{(x + 1 + k)^2} = 1 - \\dfrac{y - S}{r}`}</Latex>
            <Latex
                displayMode={true}
            >{`\\to (x + 1 + k)^2 = \\dfrac{1}{1 - \\dfrac{y - S}{r}}`}</Latex>
            <Latex
                displayMode={true}
            >{`\\to x + 1 + k = \\sqrt{\\dfrac{1}{1 - \\dfrac{y - S}{r}}}`}</Latex>
            <Latex
                displayMode={true}
            >{`\\to k = \\sqrt{\\dfrac{1}{1 - \\dfrac{y - S}{r}}} - x- 1`}</Latex>
        </div>

        <p>
            k는 특정한 x, y 값이 주어졌을 때 그래프를 이동해 준다. 즉, s2 [O]
            상태가 19라면 1, 19를 넣으면 된다. 이를 정리하면 아래와 같다.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`y = r (1 - \\dfrac{1}{(x + \\sqrt{\\dfrac{1}{1 - \\dfrac{y_1 - S}{r}}} - x_1)^2}) + S`}</Latex>
        </div>

        <div className="align__center">
            <img src={pic53} alt="헬륨I의 그래프 좌우 이동" />
            <p>
                <strong>헬륨I의 그래프 좌우 이동</strong>
            </p>
        </div>

        <p>
            여기서 가장 큰 오차가 발생하는 것은 바닥 상태의 값이다. 다른
            원소들의 이온에서도 역시 바닥 상태가 가장 큰 오차를 보인다. 이는
            역시 다른 전자들의 개입일 것이며, 이는 다음 과제로 삼기로 한다.
        </p>

        <h3>정리</h3>

        <p>
            바닥 상태의 오차가 존재하지만 뤼드베리 방정식으로 다전자 원자의
            오비탈의 변화를 비교적 잘 설명할 수 있게 되었다. 다음 장에서는
            오비탈 분류와 에테르 분류 중 어떤 것이 현상을 잘 설명하는 지를
            살펴볼 것이다.
        </p>
    </Doc>
)
