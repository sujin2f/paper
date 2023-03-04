import React from 'react'
import Latex from 'react-latex'
import { Doc } from 'src/frontend/scenes/doc-kor'

export const OrbitalEquation = (): JSX.Element => (
    <Doc>
        <h2 id="multi-electron-atoms">가설의 검증(2-1): 오비탈 방정식</h2>

        <p>
            사실 앞서 진행한 뤼드베리 값의 비교는 완전하지 않다. 왜냐하면
            뤼드베리 방정식은 수소 꼴 원자 이외에는 들어맞지 않기 때문이다. 이제
            올바른 방정식을 찾도록 하자. 여기{' '}
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
            리튬의 바닥 오비탈의 상태는 (1s2, 2s)이다. 빈 전자 두 개와 원형
            에테르 하나인 것이다. 따라서 바닥 상태는 원형 에테르 하나이며,
            수소의 (2s: 0.75)와 헬륨의 원형 에테르(1s, 2s: 1.5), 그리고 리튬의
            바닥 상태(1s2, 2s: 0)는 동일하거나 유사한 상태라고 가정할 수 있다.
            다만 전자와 중성자, 양성자의 수만 다를 뿐이다.
        </p>

        <p>
            비슷한 예가 세 가지 밖에 없을 것 같지만 사실 훨씬 많다. 이온화된
            원자들이다. H I과 비율만 다른 He II, Li III, Be IV 등이 존재한다.
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
                        <th>He</th>
                        <th>Li</th>
                        <th>Be</th>
                        <th>B</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>I</th>
                        <td>1</td>
                        <td>2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>II</th>
                        <td></td>
                        <td>4</td>
                        <td>6</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>III</th>
                        <td></td>
                        <td></td>
                        <td>9</td>
                        <td>12</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>IV</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>16</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="align__center">
            <strong>0.75의 몇 배일까?</strong>
        </p>

        <p>
            첫번째 값들은 모두 Z의 제곱과 일치한다. (짜잔!) 가로 방향의 변화는
            1, 2, 3, 4로 역시 일정하다. (짜자잔!) 세로 방향의 변화 역시 2, 3,
            4로 일정하다. (짜자자잔!) 이제 빈 전자들과 오비탈 하나의 값을 예측할
            수 있게 되었다. Li I는 3이 아니면 이상할 지경이 된 것이다.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$u(Z, i) = 0.75(i^2 + \\dfrac{Z(Z-1)}{2} - \\dfrac{i(i-1)}{2})$$`}</Latex>
            <p>
                <strong>첫번째 에테르 공식</strong>: i는 이온 값. first의 f는
                함수, one의 o는 0하고 혼돈되니, unus의 u를 사용했다.
            </p>
        </div>

        <p>
            그러나 방정식은 점 하나로 알아낼 수 없다. 찾고자 하는 방정식이
            뤼드베리 방정식의 형태라면 특정한 값을 하나만 더 알아내면 된다.
            다행히 이번에는 샘플이 더 많다. 첫번째 에테르를 찾아냈기 때문이다.
            근사이기는 하나, 이제 리튬의 바닥 상태의 실제 값을 알기 때문이다.
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
            따라서 우리는 고점인 w 값만을 찾으면 되는 것이다. w가 0인 수소
            원자의 고점이 1이기 때문에 사실 찾고자 하는 값은 w + 1인 값이다.
            그리고 Z가 1이 아닌 경우에는 약간 더 작업이 필요하나, 산수는
            생략하기로 하자. 아래는 간단한 프로그램을 짜서 값을 대입하는
            방식으로 찾아낸 고점의 위치이다. 리튬의 고점은 바닥 상태의 값을
            첫번째 에테르의 값으로 치환하였다. 즉, Li I의 모든 값에 3을 더해
            고점의 위치를 구했다.
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
                        <td>0.8072</td>
                        <td>1.8072</td>
                        <td>1.5874</td>
                        <td>3.3946</td>
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
                        <td>1.559</td>
                        <td>5.559</td>
                        <td>2.529</td>
                        <td>8.088</td>
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
                        <td>2.312</td>
                        <td>11.312</td>
                        <td>3.474</td>
                        <td>14.786</td>
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
                        <td>3.063</td>
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
            <Latex displayMode={true}>{`$$p_2(k) = 0.9416k + 0.6458$$`}</Latex>
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
            근사치 이기는 하나, 두 개의 값을 알아냈다. 이제 마지막 함수를 만들어
            보자. 그 함수는 아래와 같은 형태가 될 것이다. 위에서 Z의 제곱을
            사용한 것은 수소 꼴 원자에서만 성립된다. 실제 그래프의 비율은 이온
            값의 제곱이다.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$f(Z, i, x) = i^2(1 - \\dfrac{1}{(x + 1 + v)^2} + w)$$`}</Latex>
        </div>

        <p>
            x가 1일 때의 값인 u(Z, i)를 알고 있으니까 x가 1이고 값이 정해져 있는
            상태는 아래와 같이 정의할 수 있다. 극한값 p는 이미 i^2이 적용되어
            있기 때문에 괄호 밖으로 빠져나와 있으며 이는 w 값과 동일하다. w가
            0일 때 u는 1이 되기 때문에 w는 p(Z, i) - 1이다. 그렇다면 x의 이동인
            v만 구하면 완성이다.
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
            >{`$$f(Z, i, x) = p(Z, i) - (\\dfrac{i}{x + i / (\\sqrt{p(Z, i) - u(Z, i)} - 1})^2$$`}</Latex>
        </div>

        <p>
            이 방정식과 실제 값과의 비교는 이곳에서 볼 수 있다.{' '}
            <a
                href="https://www.desmos.com/calculator/1qia2man0o"
                target="_blank"
                rel="noreferrer"
            >
                https://www.desmos.com/calculator/1qia2man0o
            </a>
            실제 값인 점과 방정식이 근사하게 근사하는 것을 볼 수 있다.
        </p>
    </Doc>
)
