import React from 'react'
import { Link } from 'react-router-dom'

import { scrollTo } from 'src/common/utils/device'
import { Row } from 'src/common/components/layout/Row'
import { Column } from 'src/common/components/layout/Column'

import { Doc } from 'src/frontend/scenes/doc-kor'
import { Latex } from 'src/frontend/components/document/latex'

import pic5 from 'src/assets/images/doc/pic5_eng.png'

export const ClassicPhysics = (): JSX.Element => (
    <Doc>
        <h2 id="classic-physics">가설의 검증(1): 고전 물리학</h2>
        <h3>보어의 원자 모형에 기초한 광자-에테르의 방출 파장</h3>

        <p>
            전자가 방출하는 파장은 뤼드베리 공식을 통해 구할 수 있다. 아래는
            뤼드베리 공식과 <Latex>n \geq 2</Latex>에서 <Latex>n = 1</Latex>
            으로 준위가 떨어질 때 방출되는 빛의 파장인 라이먼 계열과{' '}
            <Latex>n \geq 4</Latex>에서 <Latex>n = 3</Latex>으로 변화하는 파센
            계열의 방출 파장을 정리한 것이다.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`\\dfrac{1}{\\lambda} = R(\\dfrac{1}{m^2} - \\dfrac{1}{n^2}) \\hspace{10pt} \\{ R=1.0973731568539 \\times 10^7 m^{-1} \\}`}</Latex>
            <p>
                <strong>뤼드베리 공식</strong>: 이걸 도데체 어떻게 알아낸거야?
            </p>
        </div>

        <div className="table-scroll">
            <table className="unstriped">
                <thead>
                    <tr>
                        <th>n</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>nm</th>
                        <td>121.50</td>
                        <td>102.51</td>
                        <td>97.20</td>
                        <td>94.92</td>
                        <td>93.73</td>
                        <td>93.02</td>
                        <td>92.57</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="align__center">
            <strong>라이먼 계열의 방출 파장</strong>
        </p>

        <div className="table-scroll">
            <table className="unstriped">
                <thead>
                    <tr>
                        <th>n</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>nm</th>
                        <td>1,874.60</td>
                        <td>1,281.46</td>
                        <td>1,093.52</td>
                        <td>1,004.67</td>
                        <td>954.34</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="align__center">
            <strong>파센 계열의 방출 파장</strong>
        </p>

        <p>
            언뜻 보면 같은 계열 사이에서는 수치가 줄어드는 규칙이 있는 듯하지만
            다른 계열 사이에서는 어떤 방식으로 값이 변화하는지 알아보기 힘들다.
            4에서 5로 가는 수치가 둘 사이에 차이가 있다는 이야기이다. 우리는 n
            껍질 사이의 공간이 일정한 수치가 되는 것을 원한다. 가설을 뒷받침하기
            위해서는 그것이 동일한 빛-에테르여야 하기 때문이다. 라이먼 계열의
            파장을 그 역수인 파수로 바꾸어 표현하면 아래와 같다.
        </p>

        <div className="table-scroll">
            <table className="unstriped">
                <thead>
                    <tr>
                        <th>n</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            cm<sup>-1</sup>
                        </th>
                        <td>82,302.98</td>
                        <td>97,544.28</td>
                        <td>102,878.73</td>
                        <td>105,347.82</td>
                        <td>106,689.05</td>
                        <td>107,497.77</td>
                        <td>108,022.67</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="align__center">
            <strong>라이먼 계열의 방출 파수</strong>
        </p>

        <p>
            파수의 간극을 보기로 하자. 즉, 2번에서 1번으로, 4번에서 3번으로
            이동할 때의 값을 살펴보는 것이다.
        </p>

        <div className="table-scroll">
            <table className="unstriped">
                <thead>
                    <tr>
                        <th>n</th>
                        <th>
                            <Latex>3 \to 2</Latex>
                        </th>
                        <th>
                            <Latex>4 \to 3</Latex>
                        </th>
                        <th>
                            <Latex>5 \to 4</Latex>
                        </th>
                        <th>
                            <Latex>6 \to 5</Latex>
                        </th>
                        <th>
                            <Latex>7 \to 6</Latex>
                        </th>
                        <th>
                            <Latex>8 \to 7</Latex>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            cm<sup>-1</sup>
                        </th>
                        <td>15,241.29</td>
                        <td>5,334.45</td>
                        <td>2,469.08</td>
                        <td>1,341.23</td>
                        <td>808.72</td>
                        <td>524.89</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="align__center">
            <strong>라이먼 계열의 파수 차이</strong>
        </p>

        <div className="table-scroll">
            <table className="unstriped">
                <thead>
                    <tr>
                        <th>n</th>
                        <th></th>
                        <th></th>
                        <th>
                            <Latex>5 \to 4</Latex>
                        </th>
                        <th>
                            <Latex>6 \to 5</Latex>
                        </th>
                        <th>
                            <Latex>7 \to 6</Latex>
                        </th>
                        <th>
                            <Latex>8 \to 7</Latex>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            cm<sup>-1</sup>
                        </th>
                        <td></td>
                        <td></td>
                        <td>2,469.08</td>
                        <td>1,341.23</td>
                        <td>808.72</td>
                        <td>524.89</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="align__center">
            <strong>파센 계열의 파수 차이</strong>
        </p>

        <p>
            파수의 차이는 두 계열에서 동일하다. n 껍질 사이의 공간에 특정한
            에너지가 에테르의 형태로 보존된다는 가설을 뒷받침해 준다. 각 껍질과
            껍질 사이에 해당하는 광자-에테르는 일정한 에너지를 가지고 있고, 딱
            그 에너지만큼의 광자-스파클로 전환되어 방출되는 것으로 해석할 수
            있다. 이제 에너지의 흡수와 방출은 덧셈이 되었다.
        </p>

        <h3>광자-에테르의 방출 에너지</h3>

        <p>
            광자-에테르가 일정한 파장을 가지고 있다면 그 에너지를 구할 수 있을
            것이다. 빛의 에너지는 <Latex>E = hc / λ</Latex>의 식으로 구할 수
            있다. 여기서 λ는 앞서 구한 파수를 의미하며, 이렇게 구한 값은 J의
            단위를 가진다. 이를 eV를 단위로 갖는 에너지 값은 아래의 수식과
            같으며, 이를 정리하면 아래의 표와 같다.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`E = Rhc(\\dfrac{1}{(n - 1)^2} - \\dfrac{1}{n^2})\\cdot6.242\\cdot10^{32}`}</Latex>
            <p>뤼드베리 상수, 플랑크 상수, 빛의 속도는 모두 상수이니까,</p>
            <Latex
                displayMode={true}
            >{`E = 1.0973731568539 \\cdot 10^{-7} \\cdot 6.62607015 \\cdot 10^{-34} \\cdot 299792458 \\cdot (\\dfrac{1}{(n - 1)^2} - \\dfrac{1}{n^2}) \\cdot 6.242 \\cdot 10^{32}`}</Latex>
            <Latex
                displayMode={true}
            >{`E = 13.60676328 \\cdot (\\dfrac{1}{(n - 1)^2} - \\dfrac{1}{n^2})`}</Latex>

            <p>
                <strong>
                    뤼드베리 방정식을 이용해 에너지(eV)를 구하는 공식
                </strong>
            </p>
        </div>

        <div className="table-scroll">
            <table className="unstriped">
                <thead>
                    <tr>
                        <th>n</th>
                        <th>
                            <Latex>2 \to 1</Latex>
                        </th>
                        <th>
                            <Latex>3 \to 2</Latex>
                        </th>
                        <th>
                            <Latex>4 \to 3</Latex>
                        </th>
                        <th>
                            <Latex>5 \to 4</Latex>
                        </th>
                        <th>
                            <Latex>6 \to 5</Latex>
                        </th>
                        <th>
                            <Latex>7 \to 6</Latex>
                        </th>
                        <th>
                            <Latex>8 \to 7</Latex>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>eV</th>
                        <td>10.2050</td>
                        <td>1.8898</td>
                        <td>0.6614</td>
                        <td>0.3061</td>
                        <td>0.1663</td>
                        <td>0.1002</td>
                        <td>0.0650</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="align__center">
            <strong>그렇게 구한 에너지</strong>
        </p>

        <p>
            보어 원자 모형과 수소 원자의 슈뢰딩거 방정식에서 n 껍질의 에너지는
            다음의 수식을 만족한다.
        </p>

        <Latex
            displayMode={true}
        >{`E_n = -\\frac{ℏ^2}{2 \\mu a_0 ^ 2} \\frac{1}{n^2}`}</Latex>

        <p>
            여기서 <Latex>{`\\dfrac{1}{n^2}`}</Latex>을{' '}
            <Latex>{`(\\dfrac{1}{(n - 1)^2} - \\dfrac{1}{n^2})`}</Latex>로
            치환하고, J를 eV로 변환하면 위에서 구한 값과 일치하는 것을 알 수
            있다.
        </p>

        <Latex
            displayMode={true}
        >{`\\frac{ℏ^2}{2 \\mu a_0 ^ 2} (\\dfrac{1}{(n - 1)^2} - \\dfrac{1}{n^2}) \\hspace{10pt} \\{ n \\geqq 2 \\}`}</Latex>

        <div className="table-scroll">
            <table className="unstriped">
                <thead>
                    <tr>
                        <th>n</th>
                        <th>
                            <Latex>2 \to 1</Latex>
                        </th>
                        <th>
                            <Latex>3 \to 2</Latex>
                        </th>
                        <th>
                            <Latex>4 \to 3</Latex>
                        </th>
                        <th>
                            <Latex>5 \to 4</Latex>
                        </th>
                        <th>
                            <Latex>6 \to 5</Latex>
                        </th>
                        <th>
                            <Latex>7 \to 6</Latex>
                        </th>
                        <th>
                            <Latex>8 \to 7</Latex>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1st values</th>
                        <td>10.2050</td>
                        <td>1.8898</td>
                        <td>0.6614</td>
                        <td>0.3061</td>
                        <td>0.1663</td>
                        <td>0.1002</td>
                        <td>0.0650</td>
                    </tr>
                    <tr>
                        <th>2nd values</th>
                        <td>10.2009</td>
                        <td>1.8890</td>
                        <td>0.6611</td>
                        <td>0.3060</td>
                        <td>0.1662</td>
                        <td>0.1002</td>
                        <td>0.0650</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="align__center">
            <img src={pic5} alt="광자 에테르의 뤼드베리 값" />
            <p>
                <strong>광자 에테르의 뤼드베리 값</strong>
                <br />
                이제 덧셈이 되었다.
            </p>
        </div>

        <p>
            그림에서 볼 수 있듯, 이제 에테르가 가진 에너지는 덧셈으로 쉽게 구할
            수 있게 되었다. 에너지, 파장, 심지어는 질량 마저도 구할 수 있게
            되었다.
        </p>

        <h3>정리</h3>
        <p>
            여기서 한 이야기는 모두 너무 당연한 이야기이다. 고전물리 교과서
            잠깐만 보면 모두 알 수 있는 내용이다. 이건 한 세기도 전인 닐스 보어
            시대에도 수소 원자에서 당연하게 딱딱 맞는 내용이다. 그러나 다전자
            원자에서는 하나도 맞지 않는다. 여러분은 낚였다.
        </p>
        <p>
            여기서 내가 원하는 것은 에테르-스파클 가설이 설득력을 가질 수 있는
            조건을 제시하는 것이다.
        </p>

        <ul>
            <li>
                첫째, 광자-에테르가 가진 에너지는 <strong>예상 가능</strong>해야
                한다.
            </li>
            <li>
                둘째, 광자-에테르가 가진 에너지는 <strong>덧셈</strong>에 의해
                구할 수 있어야 한다.
            </li>
            <li>
                셋째, 위 조건은 <strong>다전자 원자</strong>에서도 성립
                해야한다.
            </li>
        </ul>
        <p>
            위 조건을 만족한다면, 광자라는 스파클이 광자-에테르의 형태로 원자
            속에 저장된다는 것을 증명할 수 있을 것이다. 다음 장에서는 다전자
            원자에 대해 다루고자 한다.
        </p>

        <hr />

        <Row className="hide-for-medium hide-for-large">
            <Column>
                <ul>
                    <li>
                        Prev:
                        <Link to="/kor/hypothesis" onClick={() => scrollTo()}>
                            가설 제시
                        </Link>
                    </li>
                    <li>
                        Next:
                        <Link
                            to="/kor/multi-electron-atoms"
                            onClick={() => scrollTo()}
                        >
                            가설의 검증(2): 뤼드베리 방정식의 재정립
                        </Link>
                    </li>
                </ul>
            </Column>
        </Row>
    </Doc>
)
