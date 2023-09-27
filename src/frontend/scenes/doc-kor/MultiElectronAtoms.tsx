import React from 'react'
import Latex from 'react-latex'
import { Doc } from 'src/frontend/scenes/doc-kor'

import pic9 from 'src/assets/images/doc/pic9.png'
import pic10 from 'src/assets/images/doc/pic10.png'
import pic11 from 'src/assets/images/doc/pic11.png'
import pic16 from 'src/assets/images/doc/pic16.png'
import pic17 from 'src/assets/images/doc/pic17.png'
import pic18 from 'src/assets/images/doc/pic18.png'
import pic19 from 'src/assets/images/doc/pic19.png'
import pic20 from 'src/assets/images/doc/pic20.png'
import pic21 from 'src/assets/images/doc/pic21.png'
import pic22 from 'src/assets/images/doc/pic22.png'
import pic23 from 'src/assets/images/doc/pic23.png'
import pic24 from 'src/assets/images/doc/pic24.png'
import pic25 from 'src/assets/images/doc/pic25.png'
import pic26 from 'src/assets/images/doc/pic26.png'
import pic29 from 'src/assets/images/doc/pic29.png'
import pic42 from 'src/assets/images/doc/pic42.png'
import pic54 from 'src/assets/images/doc/pic54.png'
import pic55 from 'src/assets/images/doc/pic55.png'
import pic56 from 'src/assets/images/doc/pic56.png'
import pic57 from 'src/assets/images/doc/pic57.png'
import pic58 from 'src/assets/images/doc/pic58.png'
import pic59 from 'src/assets/images/doc/pic59.png'
import pic60 from 'src/assets/images/doc/pic60.png'
import pic61 from 'src/assets/images/doc/pic61.png'
import pic62 from 'src/assets/images/doc/pic62.png'
import pic63 from 'src/assets/images/doc/pic63.png'
import pic64 from 'src/assets/images/doc/pic64.png'
import pic65 from 'src/assets/images/doc/pic65.png'

export const MultiElectronAtoms = (): JSX.Element => (
    <Doc>
        <h2 id="multi-electron-atoms">가설의 검증(2): 다 전자 원자 - 오비탈</h2>

        <p>
            지금까지는 보어의 원자모형을 기준으로 가설을 검증했었다. 그러나 보어
            원자모형은 더 이상 유효하지 않다. 다전자 원자에서는 성립하지 않으며,
            실제 전자는 원형 궤도를 도는 존재가 아니다. 양자물리학이 밝혀낸 것은
            원자에 속한 전자가 에너지를 흡수해서 오비탈이라는 형상(확률)으로
            나타난다는 것이다. 오비탈 안에서 전자는 활률적으로 존재한다.
        </p>

        <div className="align__center">
            <img src={pic9} alt="전자 오비탈" />
            <p>
                <strong>전자 오비탈</strong>{' '}
                <a
                    href="https://en.wikipedia.org/wiki/Atomic_orbital"
                    target="_blank"
                    rel="noreferrer"
                >
                    출처: 위키피디아
                </a>
            </p>
        </div>

        <h3>가설: 오비탈의 마디는 광자-에테르</h3>

        <p>
            그림에서 검은 부분을 마디라고 부른다. 그 마디의 모양과 개수에 따라
            오비탈의 형태가 결정된다. 오비탈의 모양은 앞서 보어 원자모형에서도
            등장한 주양자수 <code>n</code>과 부양자수 <code>l</code>, 그리고
            자기양자수인{' '}
            <code>
                m<sub>l</sub>
            </code>
            에 의해 결정된다. <code>n</code>의 증가는 보어 원자모형과 같이
            원형의 개수를 증가시킨다. <code>l</code>의 증가는 원형 하나가
            없어지면서 선형의 마디가 생겨난다. 자기양자수는 각도를 결정한다.
        </p>

        <p>
            원형의 마디를 가진 오비탈을 s 오비탈이라고 부른다. 마디가 없으면{' '}
            <code>1s</code>, 원형 마디가 하나일 때 <code>2s</code>
            이다. 선형의 마디를 하나 가진 오비탈을 <code>p</code>라고 한다. 선형
            하나면 <code>2p</code>, 선형 하나에 원형 하나면 <code>3p</code>이다.
            이런 식으로 선형의 마디 개수를 기준으로 <code>d</code>,{' '}
            <code>f</code>, <code>g</code>와 같은 이름을 가진다. 이제 마디를
            광자-에테르라고 가정하고 오비탈을 다시 해석해 보겠다.
        </p>

        <div className="align__center">
            <img src={pic10} alt="에테르의 관점으로 본 오비탈" />
            <p>
                <strong>에테르의 관점으로 본 오비탈</strong>
                <br />
                원형과 선형 에테르가 혼합되어 있는 형태
            </p>
        </div>

        <p>
            <code>n</code>의 증가는 에테르의 개수가 늘어나는 것을 의미하며,
            <code>l</code>의 증가는 원형이었던 에테르를 선형으로 변화시킨다. s
            오비탈은 원형의 에테르만을 가지고 있으며, p 오비탈은 선형 에테르
            하나에 원형 에테르를 가진 것으로 해석할 수 있다. <code>1s</code>
            오비탈은 에테르를 가지지 않은 상태이며, <code>3p</code> 오비탈은
            원형 하나와 선형 하나를 가진 상태를 가진다는 것이다.
        </p>

        {/* 그림 */}

        <p>
            이는 전자의 모양이 변화되는 것으로 이해되고 있으나, 에테르의
            관점에서는 저 검은 마디가 에테르이며, 전자의 에테르는 구형 그대로를
            유지하되 광자-에테르에 의해 공간이 분리된 것으로 이해할 수 있다.
            마치 이중슬릿 실험에서 전자의 에테르가 분리가 된 것처럼 말이다.
            그렇다면 전자-스파클은 전자-에테르의 형상에 맞추어 분리된 공간
            속에서 확률적으로 존재한다고 할 수 있다. 그렇게 나타난 형상이 바로
            오비탈인 것이다.
        </p>

        {/* 그림 */}

        <p>
            에테르의 관점을 더 잘 나타내기 위해 원과 선으로 표기법을 정해보기로
            하자. <code>[X]</code>는 <code>1s</code>, <code>[O]</code>는{' '}
            <code>2s</code>, <code>[OO]</code>는 <code>3s</code>를 의미한다.{' '}
            <code>[-]</code>는 <code>2p</code>, <code>[-O]</code>는{' '}
            <code>3p</code>를, <code>[--O]</code>는 <code>4d</code>를 의미하게
            될 것이다. <code>[--OOOOO]</code>와 같이 자릿수가 높아지면 가독성을
            위해 <code>[2-5O]</code>와 같이 나타내는 방식을 병행하겠다. 전자가
            여러개일 때,{' '}
            <code>
                1s<sup>2</sup>
            </code>
            는 <code>[X][X]</code>,
            <code>
                2s<sup>2</sup>
            </code>
            는 <code>[O][O]</code>와 같이 표기하도록 하자. 아래 사용되는
            데이터는{' '}
            <a
                href="https://physics.nist.gov/PhysRefData/ASD/lines_form.html"
                target="_blank"
                rel="noreferrer"
            >
                NIST에서 참조
            </a>
            하였다. 모든 데이터는{' '}
            <a
                href="https://ether.sujinc.com/orbital/1+1/graph/percent"
                target="_blank"
                rel="noreferrer"
            >
                이렇게
            </a>{' '}
            표와 그래프로 시각화 하였다.
        </p>

        {/* 에테르와 오비탈 비교 */}

        <p>
            이를 통해 증명하고 싶은 것은 원형과 선형에 따라 쌓이는 패턴이
            존재한다는 것이다. 다전자 원자에서 값이 변하는 추이가 마치 수소
            원자와 같이 일정하며, 방출 에너지는 에테르의 합이라는 것을 보이고
            싶은 것이다. 그렇다면 그 추이를 설명할 수 있는 기준값이 필요하다.
            수소꼴 원자에서의 뤼드베리 방정식과 같은 것 말이다.
        </p>

        <p>
            먼저 수소와 헬륨에서 원형 에테르 값의 변화를 보자. <code>[X]</code>,{' '}
            <code>[O]</code>, <code>[OO]</code>과 같은 변화이다.
        </p>

        <div className="align__center">
            <img src={pic55} alt="수소와 헬륨의 원형 에테르" />
            <p>
                <strong>수소와 헬륨의 원형 에테르</strong> 그래프는 뤼드베리
                방정식 오른쪽 상단이 헬륨이다.
            </p>
        </div>

        <p>
            그래프를 상하좌우로 이동 시키면 마치 겹칠 것 같이 생겼다. 이에
            착안하여 뤼드베리 방정식을 변형시키는 방식으로 기준값 방정식을
            만들어보겠다. 이 과정에서 오차 없이 완벽한 방정식을 찾으면 훌륭한
            성과이겠지만, 우리가 원하는 것은 기준이 되는 방정식과 실제 값과의
            차이를 통해 수치의 변화가 일정한지 보는 것이다. 아주 크지만 않다면
            오차가 있는 편이 더 나을 것이다.
        </p>

        <h3>그래프의 이동</h3>

        <div className="align__center">
            <img src={pic56} alt="헬륨의 s, p 오비탈" />
            <p>
                <strong>헬륨의 s, p 오비탈</strong>
            </p>
        </div>

        <p>
            헬륨 원자의 오비탈의 변화를 통해 알아보겠다. 각각의 색상은{' '}
            <code>
                <sup>1</sup>S<sub>0</sub>
            </code>
            ,{' '}
            <code>
                <sup>3</sup>S<sub>1</sub>
            </code>
            ,{' '}
            <code>
                <sup>3</sup>P*
                <sub>2</sub>
            </code>
            와 같은 항기호(Term Symbol)가 같은 s, p 오비탈들이다. 이 값들이
            뤼드베리 방정식이 좌우로 이동을 한 값이라 생각해보자. 그렇다면
            뤼드베리 방정식을 변형하여 각각의 그래프를 만들 수 있을 것이다.
            수렴값은 이온화 에너지 값을 이용하자. 헬륨 I의 이온화 에너지는
            <code>24.58556828</code>이다. 그래프의 비율은 수소 I와 동일하다
            가정한다. 오비탈이 아닌 에테르가 기준이기에 <code>1/(x + 1)^2</code>
            로 표현한다. x가 1번 자리일 때, 즉 <code>[O]</code> 또는
            <code>[-]</code>와 같이 에테르가 하나 존재할 때 1/4가 될 것이고, 두
            개 존재할 때는 1/9가 될 것이다. 이를 식으로 표현하면 이와 같다.
            앞으로 구하는 R방정식은 R위에 원소 번호와 이온 번호를 .으로 구분하여
            아라비아 숫자로 표기하고, 에테르나 오비탈의 경우는 그 밑에
            표기하도록 하겠다.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$R^{1.1}(x) = 13.60676328 \\cdot (1 - \\dfrac{1}{(x + 1)^2})$$`}</Latex>
            <p>수소 I의 뤼드베리 방정식 (eV)</p>
            <Latex
                displayMode={true}
            >{`$$R^{2.1}(x) = 13.60676328 \\cdot (1 - \\dfrac{1}{(x + 1)^2}) + 24.58556828 - 13.60676328$$`}</Latex>
            <p>헬륨 I의 뤼드베리 방정식 (eV)</p>
        </div>

        <div className="align__center">
            <img
                src={pic57}
                alt="뤼드베리 방정식을 헬륨I에 맞추어 상하이동한 그래프"
            />
            <p>
                <strong>
                    뤼드베리 방정식을 헬륨I에 맞추어 상하이동한 그래프
                </strong>
            </p>
        </div>

        <p>
            뭔가 근사하게 맞아 떨어지는 듯 보인다. 바닥 상태인{' '}
            <code>[X][X]</code>가 0에서 왼쪽으로 벗어난 자잘한 사실은
            잊어버리자. 사실은 다음 단락에서 이를 다시 볼 것이다. 이제 각각의
            항기호에 맞게 좌우 이동을 해보자. 그래프의 비율인{' '}
            <code>13.60676328</code>는 <code>r</code>(radius)로, 상하 이동값인{' '}
            <code>24.58556828 - 13.60676328</code>는 <code>s</code>(shift)로
            좌우 이동값은 <code>k</code>로 치환한다.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$w = r \\cdot (1 - \\dfrac{1}{(v + 1 + k)^2}) + s$$`}</Latex>
        </div>
        <p>
            위 식에서 <code>w</code>를 <code>[O]</code>에테르의 에너지,{' '}
            <code>v</code>에 에테르의 번호인 <code>1</code>을 대입하면 이동값
            <code>k</code>를 구할 수 있다. 그럼 <code>k</code>에 관한 식으로
            만들어 보자.
        </p>
        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$w = r \\cdot (1 - \\dfrac{1}{(v + 1 + k)^2}) + s$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to \\dfrac{w - s}{r} = 1 - \\dfrac{1}{(v + 1 + k)^2}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to 1 - \\dfrac{w - s}{r} = \\dfrac{1}{(v + 1 + k)^2}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to \\dfrac{1}{1 - \\dfrac{w - s}{r}} = (v + 1 + k)^2$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to \\dfrac{1}{\\sqrt{1 - \\dfrac{w - s}{r}}} = v + 1 + k$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to k = \\dfrac{1}{\\sqrt{1 - \\dfrac{w - s}{r}}} - v - 1$$`}</Latex>
            <p>이를 최초의 식에 다시 대입해보자.</p>
            <Latex
                displayMode={true}
            >{`$$R(x, r, s, v, w) = r \\cdot (1 - \\dfrac{1}{(x + 1 + \\dfrac{1}{\\sqrt{1 - \\dfrac{w - s}{r}}} - v - 1)^2}) + s$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to R(x, r, s, v, w) = r + s - \\dfrac{r}{(x + \\dfrac{1}{\\sqrt{1 - \\dfrac{w - s}{r}}} - v)^2}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to R(x, r, s, v, w) = r + s - \\dfrac{r}{(x - v + \\dfrac{1}{\\sqrt{\\dfrac{r - w + s}{r}}})^2}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to R(x, r, s, v, w) = r + s - \\dfrac{r}{(x - v + \\sqrt{\\dfrac{r}{r - w + s}})^2}$$`}</Latex>
            <p>
                여기서 <code>r+s</code>는 그래프의 고점이다. <code>r+s</code>를
                <code>p</code>(peak)로 표기해 보자.
            </p>
            <Latex
                displayMode={true}
            >{`$$R(x, r, p, v, w) = p - \\dfrac{r}{(x - v + \\sqrt{\\dfrac{r}{p - w}})^2}$$`}</Latex>
            <p>완성된 변형 뤼드베리 방정식.</p>
        </div>

        <p>
            <code>r</code>은 그래프의 비율이며 같은 위상에 있는 수소꼴 원자의
            고점이다. 즉, He I의 <code>r</code> 값은 H I과 같으며, Li II의{' '}
            <code>r</code> 값은 He II와 같은 값이다. <code>p</code>는 그래프의
            고점, 수렴값이며 이는 이온화 에너지와 동일하다. 값을 대입해서 헬륨
            I의 s, p 오비탈의 그래프를 그려보면 아래와 같다.
        </p>

        <div className="align__center">
            <img src={pic58} alt="헬륨 I의 s, p 오비탈의 그래프" />
            <p>
                <strong>헬륨 I의 s, p 오비탈의 그래프</strong> 예쁘다
            </p>
        </div>

        <p>
            다른 예로 리튬 I의{' '}
            <code>
                <sup>2</sup>S<sub>1/2</sub>
            </code>
            을{' '}
            <code>
                1s<sup>2</sup>
            </code>
            , <code>3s</code>인<code>[X][X][OO]</code>에 맞추어 방정식을 만들면
            아래와 같다. 수소 I의 <code>r</code>값<code>13.60676328</code>, 리튬
            I의 이온화 에너지 <code>s</code>값 <code>5.39114472</code>, 2번
            자리에서의 방출 에너지 <code>3.373129</code>를 대입하는 것이다.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$R^{3.1}_{2S.1/2}(x) = R(x, 13.60676328, 5.39114472, 2, 3.373129)$$`}</Latex>
        </div>

        <div className="align__center">
            <img src={pic59} alt="리툼 I의 s 오비탈의 그래프" />
            <p>
                <strong>리툼 I의 s 오비탈의 그래프</strong> 얘도 예쁘다
            </p>
        </div>

        <h3>수소꼴 원자의 r값</h3>

        <p>
            수소 I는 전자가 하나이며, 뤼드베리 방정식에 잘 맞아 떨어진다.
            뤼드베리 방정식에 따르면 전자를 하나 가진 수소꼴 원자, 즉 헬륨 II와
            리튬 III와 같은 것들은 뤼드베리 방정식에 원자번호(Z)의 제곱을 곱하면
            된다고 한다. 정말 그러할까?
        </p>

        <div className="align__center">
            <img src={pic60} alt="원자번호 80번 수은 LXXX와 90번 토륨 XC" />
            <p>
                <strong>원자번호 80번 수은 LXXX와 90번 토륨 XC</strong> 저기요,
                뤼드베리 선생님?
            </p>
        </div>

        <p>
            배신 당했다. 위에서 그래프의 고점은 이온화 에너지 값이라 가정하였다.
            내가 가진 자료에서는 수소꼴 원자에서 이온화 에너지는 29번 구리 까지
            나와있다. 그렇다면 우리가 구할 수 있는 <code>r</code>값은 이온
            번호가 XXIX인 원소 까지이다. 그런데, 103번 로렘슘 XIII 까지는 첫번째
            에테르인 <code>2s</code>, <code>[O]</code>의 방출 에너지의 측정값이
            존재한다. 현재 단계의 목적은 Z의 제곱이 아니라 최대한 오차가 적은{' '}
            <code>r</code>값을 구하는 방정식을 만드는 것이기 때문에 이것을
            활용해 보자. 29번 까지의 이온화 에너지와 첫번째 에테르값, 그리고
            둘의 차이는 아래와 같다.
        </p>

        <div className="align__center">
            <img src={pic61} alt="고점과 첫번째 에테르의 차이" />
            <p>
                <strong>고점과 첫번째 에테르의 차이</strong>
            </p>
        </div>

        <p>
            왠지 그래프가 그려질 것 같이 생겼다. 세 번을 이전값과의 차이를 구한
            다음 직선 방정식을 만들고 세 번 시그마를 씌우는 방식으로{' '}
            <code>r</code> 방정식을 만들어보자. <code>i</code>는 수소 I, 헬륨
            II에서 숫자 부분인 이온값이다.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$r_1(i) = 6.8 + \\sum_{n=1}^{i}(0.00204i - 0.0026)$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to r_1(i) = 6.8 + \\dfrac{0.00204}{2}i(i+1) - 0.0026i$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to r_1(i) = 6.8 + 0.00102i^2 + 0.00102i - 0.0026i$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to r_1(i) = 0.00102i^2 - 0.00158i + 6.8$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$r_2(i) = -3.3 + \\sum_{n=1}^{i}(0.00102n^2 - 0.00158n + 6.8)$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to r_2(i) = -3.3 + \\dfrac{0.00102}{6}x(x + 1)(2x + 1) - \\dfrac{0.00158}{2}x(x + 1) + 6.8x$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to r_2(i) = -3.3 + 0.00017(2x^{3} + 3x^{2} + x ) - 0.00079x^{2} + 0.00079x + 6.8x$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to r_2(i) = 0.00034x^{3} - 0.00028x^{2} + 6.80096x - 3.3$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$r_3(i) = -0.1 + \\sum_{n=1}^{i}(0.00034i^{3} - 0.00028i^{2} + 6.80096i - 3.3)$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to r_3(i) = -0.1 + \\frac{0.00034}{4}(x(x + 1))^{2} - \\frac{0.00028}{6}x(x + 1)(2x + 1) + \\frac{6.80096}{2}x(x + 1) - 3.3x$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to r_3(i) = -0.1 + 0.000085(x^{4}+2x^{3}+x^{2})-0.000047(2x^{3}+3x^{2}+x)+3.40048x^{2}+3.40048x-3.3x$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to r_3(i) = 0.000085x^{4} + 0.000076x^{3} + 3.400424x^{2} + 0.100433x - 0.1$$`}</Latex>
            <p>근사치로 나타내면 아래와 같다</p>
            <Latex
                displayMode={true}
            >{`$$\\to r_3(i) = 0.000085x^{4} + 0.000075x^{3} + 3.4x^{2} + 0.1x - 0.1$$`}</Latex>
            <p>
                여기에 같은 이온값을 가진 수소꼴 원자의 첫번째 원형 에테르 값을
                더하면 방정식을 완성할 수 있다.
            </p>
            <Latex
                displayMode={true}
            >{`$$r(i, e_1) = 0.000085x^{4} + 0.000075x^{3} + 3.4x^{2} + 0.1x - 0.1 + e_1$$`}</Latex>
            <p>
                물론 오차는 존재하나 Z의 제곱보다는 많이 줄여냈다. 이것을 앞서의
                뤼드베리 방정식에 적용하자.
            </p>
            <Latex
                displayMode={true}
            >{`$$R(x, i, e_1, p, v, w) = p - \\dfrac{r(i, e_1)}{(x - v + \\sqrt{\\dfrac{r(i, e_1)}{p - w}})^2}$$`}</Latex>
        </div>

        <p>
            아까 배신감을 느꼈던 원자번호 80번 수은 LXXX의 원형 에테르 방정식은
            <code>i</code>에 <code>80</code>,{' '}
            <code>
                e<sub>1</sub>
            </code>
            에는 <code>[O]</code>값 <code>71313.81</code>, <code>p</code>에는{' '}
            <code>r</code>값과 동일한 <code>r(80, 71313.81)</code>,{' '}
            <code>v</code>는 <code>1</code>, <code>w</code>는 <code>[O]</code>
            값인 <code>71313.81</code>를 대입하면 된다.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$R^{80.80}_{2S.1/2}(x) = R(x, 80, 71313.81, r(80, 71313.81), 1, 71313.81)$$`}</Latex>
        </div>

        <div className="align__center">
            <img
                src={pic62}
                alt="Z 제곱과 R 방정식의 수은 LXXX의 원형 에테르"
            />
            <p>
                <strong>Z 제곱과 R 방정식의 수은 LXXX의 원형 에테르</strong>{' '}
                많이 편안해졌다.
            </p>
        </div>

        <h3>헬륨꼴 원자의 p값</h3>

        <p>
            앞서 만든 방정식에서 필요한 값 중에{' '}
            <code>
                e<sub>1</sub>
            </code>
            은 앞서 언급했듯 103번 로렘슘 XIII 까지 존재하기 때문에 별 문제가
            없다. 그러나 이온화 에너지 <code>p</code>값은 측정값이 충분히
            존재하지 않는다. 예를 들어 원자번호 30번 아연의 헬륨꼴 이온인 아연
            XXIX의 이온화 에너지는 측정값이 존재하지 않는다. 수소꼴 원자의 경우{' '}
            <code>r</code>과 <code>p</code>가 동일하여 <code>r</code>방정식을
            그대로 사용할 수 있으나, 다른 원자들의 <code>p</code>값은 여전히
            측정값을 필요로한다. 이 역시{' '}
            <code>
                r(i, e<sub>1</sub>)
            </code>
            과 같이 예측값을 만들어보자.
        </p>

        <p>
            헬륨 I의 바닥 상태는{' '}
            <code>
                <sup>1</sup>S<sub>0</sub>
            </code>
            의 <code>[X][X]</code>이며
            <code>[X][O]</code>, <code>[X][OO]</code>로 증가한다. 그래프의
            비율인 <code>r</code>값은 수소 I의
            <code>p</code>값과 동일하며, <code>p</code>값은 수소 I의{' '}
            <code>p</code>값에 일정한 값(헬륨 I의 <code>p</code> - 수소 I의
            <code>p</code>)을 더한 값이다. 헬륨꼴 원자의 <code>p</code>값은 같은
            이온값을 가진 수소꼴 원자의 <code>r</code>값에 어떠한 값을 더한
            것이다. 이것을 그래프로 나타내보면 아래와 같다.
        </p>

        <div className="align__center">
            <img
                src={pic63}
                alt="헬륨꼴 원자의 p값과 수소꼴 원자의 p값의 차이"
            />
            <p>
                <strong>
                    헬륨꼴 원자의 <code>p</code>값과 수소꼴 원자의{' '}
                    <code>p</code>값의 차이
                </strong>{' '}
                반갑다 직선아
            </p>
        </div>

        <p>
            놀랍게도 직선이 된다. 즉, 수소꼴의 <code>p</code>를 헬륨꼴의{' '}
            <code>p</code>로 만드는 방정식은 1차 방정식이라 생각할 수 있다.{' '}
            <code>d(i)</code>(difference)라 표기하자.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$d(i) = 10.2214651452i + 0.767059934815$$`}</Latex>
        </div>

        <p>
            헬륨 I의 <code>p</code>값은 수소 I의 <code>r</code>에{' '}
            <code>d(1)</code>을 더해주면 된다.
        </p>

        <p>
            원자번호 38번인 끝말잇기 종결 단어 스트론튬의 헬륨꼴 원자 Sr
            XXXVII의 그래프를 그려보자. <code>i</code>는 <code>37</code>,{' '}
            <code>
                e<sub>1</sub>
            </code>
            은 37번의 수소꼴 원자의 <code>[O]</code>값인 <code>14200.5441</code>
            , <code>p</code>에는 37번의 수소꼴 원자의 <code>r</code>값에{' '}
            <code>d(37)</code>을 더한 값, 1번 자리에 Sr XXXVII의{' '}
            <code>[O]</code>를 대입한다.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$R^{38.37}_{1S.0}(x) = R(x, 37, 14200.5441, r(37, 14200.5441) + d(37), 1, 14562.88)$$`}</Latex>
        </div>

        <div className="align__center">
            <img src={pic64} alt="스트론튬 XXXVII의 그래프" />
            <p>
                <strong>스트론튬 XXXVII의 그래프</strong>
            </p>
        </div>

        <h3>리튬꼴 원자</h3>

        <p>
            여기까지 수소꼴과 헬륨꼴 원자의 방정식들을 만들 수 있는 방법을
            제시하였다. 그런데 문제는 그 다음 부터이다. 수소꼴의 바닥 상태는
            <code>[X]</code>, 헬륨꼴의 바닥 상태는 <code>[X][X]</code>이다.
            그런데 리튬꼴의 바닥 상태는 첫번째 껍질에 <code>[X]</code>가 두 개
            까지만 들어갈 수 있기 때문에 <code>[X][X][O]</code>가 된다. 가상의{' '}
            <code>[X][X][X]</code>와 <code>[X][X][O]</code>의 차이는 관측할 수
            없다는 것이다. 이는 증명 불가능한 영역이지만 추론을 해 보도록
            하겠다.
        </p>

        <p>
            수소꼴 원자의 경우 <code>r</code> 방정식에 의해 비율과 고점{' '}
            <code>p</code>가 결정되는 것을 보았다. 원자 번호는 같은 자리의
            에테르의 값을 2차 방정식에 가깝게 증가시키는 것이다. 그리고 헬륨꼴
            원자에서 p값은 이전 원자의 수소꼴 <code>r</code>값에{' '}
            <code>d(i)</code>값을 더하면 되며 이를 다시 말하면 2차 방정식의 이전
            값에 1차 방정식을 더한다는 것이다. 다시 말해 전자의 수는 에테르의
            값을 감소시킨다. 리튬 I가 이와 같은 규칙을 따른다면 리튬 I는 헬륨 I
            보다 높은 값을 가지게 될 것이다.
        </p>

        <p>
            eV는 에너지를 구하기에 적절하지만 직관적이지는 못하기에 Rydberg
            값으로 <code>[O]</code>와 <code>[X][O]</code>를 살펴보자.
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
            9, 16으로 Z의 제곱과 일치한다. 실제로는{' '}
            <code>
                r(i, e<sub>1</sub>)
            </code>{' '}
            값일테다. (짜잔!) 가로 방향의 변화를 대각선으로 보면 +1, +2, +3,
            +4로 역시 일정하다. 이것은 <code>d(i)</code>와 관련될 것이다.
            (짜자잔!) 세로 방향의 변화 역시 +2, +3, +4로 일정하다. (짜자자잔!)
            0.75의 정수배로 값의 변화를 예측할 수 있다는 것이다. Li I이 3, Be
            I이 4일 수 있다는 것이다. 그렇게 가정하고 세로 방향의 변화를 보면
            리튬은 <Latex>{`$\\begin{bmatrix}+3\\\\+3\\end{bmatrix}$`}</Latex>,
            베릴륨은{' '}
            <Latex>{`$\\begin{bmatrix}+4\\\\+4\\\\+4\\end{bmatrix}$`}</Latex>가
            되는 것을 볼 수 있다. 한 가지 가능성이 더 있는데, 가로축 변화량을
            <Latex>{`$\\begin{bmatrix}+1 & +2 & +3 & +4 & ...\\end{bmatrix}$`}</Latex>
            로 가정하는 것이다. 그렇게 하면 세로 방향의 변화는{' '}
            <Latex>{`$\\begin{bmatrix}+2\\\\+3\\end{bmatrix}$`}</Latex>과 같이
            1씩 증가한다. 두 가지 가능성 중에서 더 설득력이 있는 것은 첫번째
            것이다. <code>[X]</code>의 수가 첫점에 미치는 영향이 0.75로
            일정해지기 때문이다. 수소는 <code>[X]</code>가 없기 때문에 고점이
            0.75이다. 헬륨은 0.75에 <code>[X]</code> 하나의 영향 0.75를 더해
            1.5가 된다. 리튬은 0.75에 <code>[X]</code> 두 개의 영향 1.5를 더해
            2.25가 되는 것이다. 더 단순한 설명이 진실일 것이라는 오컴의 면도날을
            따르자. 이를 도해하면 아래와 같다.
        </p>

        <div className="align__center">
            <img src={pic42} alt="첫점과 고점의 비율" />
            <p>
                <strong>첫점과 고점의 비율</strong>
            </p>
        </div>

        <p>
            이 추론은 얼마나 정확할까? 실제 값과 비교해 보자. 위 그림에서 0.8로
            표현한 것은 <code>d(i)</code>이다. 따라서 이 가정에 따른 수소, 헬륨,
            리튬의 방정식은 아래와 같아진다. 그리고 리튬의 고점을 그래프의
            고점에 맞추어 주자. 첫점은 <code>(0, 0)</code>에 맞춘다. 값은 원형
            에테르만을 표시하였다.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$R^{1.1}(x) = R(x, 1, e_1, r(1, e_1), 0, 0)$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$R^{2.1}(x) = R(x, 1, e_1, r(1, e_1) + d(1), 0, 0)$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$R^{3.1}(x) = R(x, 1, e_1, r(1, e_1) + 2d(1), 0, 0)$$`}</Latex>
        </div>

        <div className="align__center">
            <img src={pic65} alt="가설에 따른 그래프" />
            <p>
                <strong>가설에 따른 그래프</strong> 이게 아름답지 않다고?
            </p>
        </div>

        <p>
            헬륨의 경우에는 스핀이 다른 원형 에테르 쌍이 존재하며, 그래프는 그
            사이를 지나간다. 오차는 좌우이동을 구하면 일정한 값이 될 수도
            있겠지만 다음 과제로 삼기로 하겠다. 이걸 자세히 할 거면 애초에
            <code>r</code>도 정확히 구했을 것이다.
        </p>

        <h3>베릴륨꼴 원자</h3>

        <p>
            이러한 규칙이 베릴륨에도 적용될 수 있을까? 결론은 아니다. 베릴륨의
            바닥 상태는 <code>[X][X][O][O]</code>이다. 리튬에서{' '}
            <code>[X][O][O]</code>와 같이 두 개의 전자가 에테르를 가지고 있을
            때의 값은 그렇지 않은 경우 보다 높으며 <code>[X][O][-]</code>와 같이
            에테르를 가진 전자의 수가 같은 경우와 고점이 같아 보인다. 즉,
            베릴륨의 실제 바닥 상태는 <code>d(i)</code> 만으로는 구할 수 없다.
            두 개의 전자가 에테르를 가졌을 때의 값의 변화도 알아야 한다. 실제
            값의 변화로 예상하는 것은 그래프의 비율인 <code>r</code> 값은 동일할
            것이다. 따라서 베릴륨의 경우에도 비율은 동일한 것으로 가정할 수
            있다.
        </p>

        <p>
            너무 멀리 와버렸다. 다시 강조하지만 본 장의 목적은 비교의 기준이
            되는 방정식을 구하는 것이기에 여기 까지 하도록 하겠다.
        </p>
    </Doc>
)
