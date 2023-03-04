import React from 'react'
import Latex from 'react-latex'
import { Doc } from 'src/frontend/scenes/doc-kor'

export const OrbitalEquation = (): JSX.Element => (
    <Doc>
        <h2 id="multi-electron-atoms">가설의 검증(2-1): 오비탈 방정식</h2>

        <h3>방정식 유도</h3>
        <p>
            앞서 진행한 뤼드베리 값의 비교는 완전하지 않다. 왜냐하면 뤼드베리
            방정식은 수소 꼴 원자 이외에는 들어맞지 않기 때문이다. 오차가
            어마무지 하다는 이야기이다. 이제 올바른 방정식을 찾도록 하자. 여기{' '}
            <a href="/raw-data/1+1">수소 원자의 방출 파장</a>이 있다. 수소
            원자는 0.75에서 시작해서 1로 수렴하게 된다. 그것은 뤼드베리 방정식의
            구조와도 일치한다. n에 2를 넣었을 때의 값은 0.75이며 함수의 극한은
            1로 수렴되기 때문이다. 그러니 수소 꼴 원자들이 방정식에 맞지 않으면
            서운할 지경이다. (스포일러: 나중에 정말 서운해진다.)
        </p>

        <div className="align__center">
            <Latex displayMode={true}>{`$$Z^2(1 - \\dfrac{1}{n^2})$$`}</Latex>
            Z는 원소 번호이다.
        </div>

        <p>
            헬륨을 <a href="/raw-data/2+1">보자</a>. 첫번째 값이 1.5 정도이다.
            그런데 리튬의 첫번째 값은 0.247이다. 이랬다가 저랬다가 왔다 갔다.
            리튬의 바닥 상태(0)는 (1s2, 2s)이다. 빈 전자 두 개와 원형 에테르
            하나인 것이다. 따라서 바닥 상태는 원형 에테르 하나이며, 수소의 (2s:
            0.75)와 헬륨의 원형 에테르(1s, 2s: 1.5), 그리고 리튬의 바닥
            상태(1s2, 2s: 0)는 동일하거나 유사한 상태라고 가정할 수 있다. 다만
            전자와 중성자, 양성자의 수만 다를 뿐이다.
        </p>

        <p>
            비슷한 예가 세 가지 밖에 없을 것 같지만 사실 훨씬 많다. 이온화된
            원자들이다. H I와 비율만 다른 He II, Li III, Be IV 등이 존재한다.
            그렇다면 헬륨 꼴 원자들도 같은 성질을 가진다고 가정할 수 있다.
            그렇다면 그들의 원형 에테르 하나인 상태들을 비교해볼 수 있겠다.
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
            놀랍게도 근사값이 근사하게 떨어진다. 0.75, 1.5, 3, 4.5, 6.75, 9, 12,
            18.75. 전부 0.75의 배수들이다. 그럼 몇 배일까?
        </p>

        <div className="table-scroll">
            <table className="unstriped">
                <thead>
                    <tr>
                        <th></th>
                        <th>H</th>
                        <th>변화량</th>
                        <th>He</th>
                        <th>변화량</th>
                        <th>Li</th>
                        <th>변화량</th>
                        <th>Be</th>
                        <th>변화량</th>
                        <th>B</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>I</th>
                        <td>1</td>
                        <th>1</th>
                        <td>2</td>
                        <th>1 | 2</th>
                        <td>3 | 4</td>
                        <th>1 | 3</th>
                        <td>4 | 7</td>
                        <th>1 | 4</th>
                        <td>5 | 11</td>
                    </tr>
                    <tr>
                        <th>변화량</th>
                        <td></td>
                        <td></td>
                        <th>2</th>
                        <th></th>
                        <th>3 | 2</th>
                        <th></th>
                        <th>4 | 2</th>
                        <th></th>
                        <th>5 | 2</th>
                    </tr>
                    <tr>
                        <th>II</th>
                        <td></td>
                        <td></td>
                        <td>4</td>
                        <th>2</th>
                        <td>6</td>
                        <th>2 | 3</th>
                        <td>8 | 9</td>
                        <th>2 | 4</th>
                        <td>10 | 13</td>
                    </tr>
                    <tr>
                        <th>변화량</th>
                        <td></td>
                        <td></td>
                        <th></th>
                        <th></th>
                        <th>3</th>
                        <th></th>
                        <th>4 | 3</th>
                        <th></th>
                        <th>5 | 3</th>
                    </tr>
                    <tr>
                        <th>III</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>9</td>
                        <th>3</th>
                        <td>12</td>
                        <th>3 | 4</th>
                        <td>15 | 16</td>
                    </tr>
                    <tr>
                        <th>변화량</th>
                        <td></td>
                        <td></td>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>4</th>
                        <th></th>
                        <th>5 | 4</th>
                    </tr>
                    <tr>
                        <th>IV</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>16</td>
                        <th>4</th>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="align__center">
            <strong>0.75의 몇 배일까?</strong>
        </p>

        <p>
            중간에 |가 있는 항목은 예측치이니 숫자만 써 있는 항목만을 먼저
            보기로 하자. 첫번째 값들은 모두 1, 4, 9, 16으로 Z의 제곱과 일치한다.
            (짜잔!) 가로 방향의 변화는 1, 2, 3, 4로 역시 일정하다. (짜자잔!)
            세로 방향의 변화 역시 2, 3, 4로 일정하다. (짜자자잔!) 이제 빈
            전자들과 오비탈 하나의 값을 예측할 수 있게 되었다. 0.75의
            정수배이다. Li I이 3, Be I이 4일 수 있다는 것이다. 그렇게 가정하고
            세로 방향의 변화를 보면 리튬은{' '}
            <Latex>{`$\\begin{matrix}3\\\\3\\end{matrix}$`}</Latex>, 베릴륨은{' '}
            <Latex>{`$\\begin{matrix}4\\\\4\\\\4\\end{matrix}$`}</Latex>가 되는
            것을 볼 수 있다. 한 가지 가능성이 더 있는데, 가로축 변화량을 1, 2,
            3, 4로 가정하는 것이다. 그렇게 하면 세로 방향의 변화는 1씩 감소한다.
            II가 I이 되는 것은 2, III이 II이 되는 것은 3이다. 두 가지 가능성
            중에서 더 설득력이 있는 것은 첫번째 것이다. 빈 전자의 수가 에테르에
            미치는 영향이 0.75로 일정해지기 때문이다. 수소는 다른 전자가 없기
            때문에 고점이 0.75이다. 헬륨은 0.75에 빈 전자 하나의 영향 0.75를
            더해 1.5가 된다. 리튬은 0.75에 빈 전자 두 개의 영향 1.5를 더해
            2.25가 되는 것이다. 더 단순한 설명이 진실일 것이라는 오컴의 면도날을
            따르자.
        </p>

        <div className="align__center">
            <Latex displayMode={true}>{`$$u(Z, i) = 0.75Zi$$`}</Latex>
            <p>
                <strong>첫번째 에테르 공식</strong>: i는 이온 값. first의 f는
                함수, one의 o는 0하고 혼돈되니, unus의 u를 사용했다.
            </p>
        </div>

        <p>
            그러나 방정식은 점 하나로 알아낼 수 없다. 찾고자 하는 방정식이
            뤼드베리 방정식의 형태라면 특정한 값을 하나만 더 알아내면 된다.
            다행히 이번에는 샘플이 더 많다. 첫번째 에테르를 찾아냈기 때문이다.
            근사이기는 하나, 이제 0 이었던 리튬의 바닥 상태의 실제 값을 알기
            때문이다.
        </p>

        <p>
            헬륨이나 리튬의 오비탈의 값들이 그리는 형태를 살펴보면 오비탈의
            종류나 스핀에 따라 첫번째 시작점은 다르지만 값들이 수렴되는 지점은
            거의 일치하는 것을 알 수 있다. 이는 에테르로 분류해도 마찬가지이다.
            이를 해석하자면 우리가 찾는 방정식은 한 원자에서 같은 고점을 가지며
            상황에 따라 x축 방향으로 이동하는 형태일 것이다. 즉, 방금 찾아낸
            첫번째 값은 기준점일 뿐이고 그래프가 좌우로 이동함에 따라 변하는
            값이 될 것이며 일정한 값은 고점이라는 것을 나타낸다.
        </p>

        <p>
            점의 분포는 고점이 있음을 짐작하게 하지만 이 점들로 정확한 고점의
            정확한 위치를 찾는 것은 불가능하다. 다만 아래의 공식에 값을 대입하는
            방식으로 최대한 오차가 없는 근사값을 찾을 수는 있다.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$y = Z^2(1 - \\dfrac{1}{(x + 1 + v)^2} + w)$$`}</Latex>
        </div>

        <p>
            앞에서도 말했듯 x측으로의 이동(v)은 스핀 등에 따라 달라지며 y축의
            이동(w)은 고점을 나타내고 이는 원자의 종류에 따라 일정할 것이다.
            아래는 간단한 프로그램을 짜서 값을 대입하는 방식으로 찾아낸 고점의
            근사값이다. 리튬의 고점은 바닥 상태의 값을 첫번째 에테르의 값으로
            치환하였다. 즉, Li I의 값에 2.25을 더한 값을 취했다.
        </p>

        <div className="table-scroll">
            <table className="unstriped">
                <thead>
                    <tr>
                        <th></th>
                        <th>H</th>
                        <th>변화량</th>
                        <th>He</th>
                        <th>변화량</th>
                        <th>Li</th>
                        <th>변화량</th>
                        <th>Be</th>
                        <th>변화량</th>
                        <th>B</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>I</th>
                        <td>1</td>
                        <th>0.8072</th>
                        <td>1.8072</td>
                        <th>0.8374</th>
                        <td>2.6446</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>II</th>
                        <td></td>
                        <td></td>
                        <td>4</td>
                        <th>1.559</th>
                        <td>5.559</td>
                        <th>1.779</th>
                        <td>7.338</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>III</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>9</td>
                        <th>2.312</th>
                        <td>11.312</td>
                        <th>2.724</th>
                        <td>14.036</td>
                    </tr>
                    <tr>
                        <th>IV</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>16</td>
                        <th>3.063</th>
                        <td>19.063</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="align__center">
            <strong>고점의 위치와 그 변화량</strong>
        </p>

        <p>
            수소 꼴에서 헬륨 꼴로의 변화량의 변화를 보자. 0.8072 에서 1.559는
            0.7518이다. 그 다음(2.312-1.559)은 0.753. 또 그 다음(3.063-2.312)은
            0.751이다. 변화량이 같은 1차 함수 그래프이다. 헬륨 꼴에서 리튬 꼴의
            변화량도 일정하게 증가한다. 첫번째 에테르 방정식과 같이 수학적으로
            변화를 예측할 수 있다는 뜻이다. 이 두 변화량의 함수는 아래와 같다.
        </p>

        <div className="align__center">
            <Latex displayMode={true}>{`$$p_1(k) = 0.7518k + 0.0544$$`}</Latex>
            <Latex displayMode={true}>{`$$p_2(k) = 0.9416k - 0.1042$$`}</Latex>
        </div>

        <p>
            이것은 대각선 방향의 변화를 나타낸다. 따라서 리튬의 고점을 알고
            싶다면 가로 방향의 값들인 1 + p1(1) + p2(1)로 구할 수 있다. 두
            함수를 합성해서 가로 방향의 변화를 나타내는 새로운 함수 p_k를 만들어
            보자. 이 함수의 인자는 위 표에서 원자의 세로방향 위치이기 때문에 i와
            동일하다.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$p_k(i) = (p_1(k) - p_2(k-1))i - (p_1(k) - p_2(k-1))k + p_1(k)$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$p_k(i) = (i-k)(p_1(k) - p_2(k-1)) + p_1(k)$$`}</Latex>
            <p>
                <strong>고점 공식</strong>: 아까 보다는 덜 아름답다
            </p>
        </div>

        <p>
            최종 함수는 먼저 이온 방향으로 이동(i^2)한 후, 가로 방향의 변화를
            더하고 더한 값이 될 것이다. 이를 수식으로 나타내면 아래와 같다.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$p(Z, i) = i^2 + \\sum_{k=i}^{Z-1}\\{(i-k)(p_1(k) - p_2(k-1)) + p_1(k)\\}$$`}</Latex>
        </div>

        <p>
            근사치 이기는 하나, 첫번째 자리와 고점, 두 개의 값을 알아냈다. 이제
            마지막 함수를 만들어 보자. 그 함수는 아래와 같은 형태가 될 것이다.
            위에서 Z의 제곱을 사용한 것은 수소 꼴 원자에서만 성립된다. 실제
            그래프의 비율은 이온 값의 제곱이다.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$f(Z, i, x) = i^2(1 - \\dfrac{1}{(x + 1 + v)^2} + w)$$`}</Latex>
        </div>

        <p>
            우리는 이미 x가 1일 때의 값인 u(Z, i)와 고점인 p(Z, i)를 알고 있다.
            그러니 두 값을 만족하는 x축 방향으로의 이동인 v만 찾으면 된다. 1 +
            w는 고점을 나타낸다. 이를 p(Z, i)로 치환하자. 이 때, p(Z, i)는 이미
            이온 상태에서의 고점이기 때문에 i^2(...) 밖으로 뺄 수 있다. 이제 v를
            구해보도록 하자.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$u(Z, i) = p(Z, i) - \\dfrac{i^2}{(2 + v)^2}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to \\dfrac{p(Z, i) - u(Z, i)}{i^2} = \\dfrac{1}{(2 + v)^2}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to \\dfrac{i^2}{p(Z, i) - u(Z, i)} = (2 + v)^2$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to v = \\dfrac{i}{\\sqrt{p(Z, i) - u(Z, i)}} - 2$$`}</Latex>
        </div>

        <p>이것을 다시 기본 방정식에 대입하면 아래와 같다.</p>
        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$f(Z, i, x) = p(Z, i) - \\dfrac{i^2}{(x + 1 + v)^2}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$f(Z, i, x) = p(Z, i) - \\dfrac{i^2}{(x + 1 + \\dfrac{i}{\\sqrt{p(Z, i) - u(Z, i)}} - 2)^2}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$f(Z, i, x) = p(Z, i) - (\\dfrac{i}{x + \\dfrac{i}{\\sqrt{p(Z, i) - u(Z, i)}} - 1})^2$$`}</Latex>
        </div>

        <p>
            이 방정식과 실제 값과의 비교는 이곳에서 볼 수 있다.{' '}
            <a
                href="https://www.desmos.com/calculator/le2khjysrz"
                target="_blank"
                rel="noreferrer"
            >
                https://www.desmos.com/calculator/le2khjysrz
            </a>
            실제 값인 점과 방정식이 근사하게 근사하는 것을 볼 수 있다.
        </p>
        <p>
            물론 이 방정식은 오차가 존재한다. 첫째로 뤼드베리 방정식으로 부터
            나오는 0.75가 실제 값과는 차이가 있다. 이는 105번 더브늄의 값들을
            105의 제곱으로 나누었을 때 약 0.14의 오차가 생기는 것으로 알 수
            있다. 역시 이 공식을 도출하는데 사용된 상수들이 추정값이나
            근사값이기 때문에 원소 번호가 증가할 수록 오차가 커질 수 밖에 없다.
        </p>
        <p>
            또 하나의 문제점은 4번 베릴륨 부터는 다른 방정식이 필요하다는
            것이다. 이 방정식은 에테르를 가진 전자가 하나일 경우만을 설명한다.
            베릴륨의 바닥 상태는 (1s2 2s2), [X][X][O][O]이기 때문에 이에
            적합하지 않다. 이를 알기 위해서는 헬륨, 리튬에서의 [O][-], [-][-],
            [X][O][-], [X][-][-]와 같이 에테르를 가진 전자가 두 개 존재할 때의
            변화에서 새로운 방정식을 만들어야 한다. 이는 지금 만들어낸 방정식의
            형태일 것으로 예상된다.
        </p>
        <p>
            그러나 이 방정식을 만든 이유는 정확한 방정식을 만들기 위함이 아니라,
            오비탈과 에테르의 비교를 통해 오비탈 보다는 에테르가 더 올바른
            설명임을 증명하기 위해서이다. 뤼드베리 공식 보다 더 실제 값에 근접한
            것이 필요했기 때문이었다.따라서 더 발전된 방정식을 만드는 것은 다음
            과제로 삼기로 하자.
        </p>
    </Doc>
)
