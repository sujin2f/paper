import React, { Fragment } from 'react'
import Latex from 'react-latex'
import { scrollTo } from 'src/common/utils/device'

import pic6 from 'src/assets/images/doc/pic6.png'
import pic12 from 'src/assets/images/doc/pic12.png'

export const SchrodingerEquation = (): JSX.Element => {
    return (
        <Fragment>
            <h2 id="schrodinger-equation">가설의 검증(3): 슈뢰딩거 방정식</h2>

            <p>
                주의: 본 문서는 엄밀한 수학적 과정을 담지 못하고 있다. 값을
                임으로 조작한 결과이기 때문이다. 부끄러우니까 안 읽으셔도 좋다.
                <button
                    onClick={() => scrollTo('#conclusion')}
                    className="anchor"
                >
                    그러니까 다음 문서
                </button>
                .
            </p>

            <h3>슈뢰딩거 방정식으로 보는 광자-에테르</h3>

            <p>
                앞선 장에서 보았듯 에테르는 오비탈을 형성하는 것으로 볼 수 있다.
                그렇다면 전자의 슈뢰딩거 방정식을 변화시켜서 광자-에테르
                방정식을 만들 수 있지 않을까? 원형 에테르인 마디의 위치는
                슈뢰딩거 방정식의 지름 파동함수 R(r) 방정식으로 알아볼 수 있다.
            </p>

            <Latex
                displayMode={true}
            >{`$$\\frac{1}{R(r)} \\frac{d}{dr} (r^2 \\frac{d}{dr}) R(r) - \\frac{2 \\mu r^2}{ℏ^2}(V(r)-E) - l(l+1) = 0$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to \\frac{d}{dr} (r^2 \\frac{d}{dr}) R(r) + [\\frac{2 \\mu r^2}{ℏ^2}E - \\frac{2 \\mu r^2}{ℏ^2}V(r) - l(l+1)]R(r) = 0$$`}</Latex>

            <p className="align__center">
                <strong>지름 파동함수 R(r)</strong>
            </p>

            <p>
                수소 원자의 지름 파동함수의 해를 구하는 방법 중 변형된 버금
                라게르 함수꼴로 만드는 방법을 사용할 것이다.
            </p>

            <Latex
                displayMode={true}
            >{`$$y_j^k(x) = e^{-x/2} x^{(k+1)/2} L_j^k(x)$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$ {y_j^k}''(x) + (-\\frac{1}{4} + \\frac{2j+k+1}{2x} - \\frac{k^2-1}{4x^2})y_j^k(x) = 0$$`}</Latex>

            <p>변형된 버금 라게르 함수</p>

            <p>지름 파동함수에서 y(r) = rR(r)로 치환하면 아래와 같다.</p>

            <Latex
                displayMode={true}
            >{`$$\\frac{d^2y(r)}{dr^2} + [\\frac{2 \\mu r^2}{ℏ^2}E - \\frac{2 \\mu r^2}{ℏ^2}V(r) - l(l+1)]\\frac{y(r)}{r} = 0$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to \\frac{d^2y(r)}{dr^2} + [\\frac{2 \\mu}{ℏ^2}E - \\frac{2 \\mu}{ℏ^2}V(r) - \\frac{l(l+1)}{r^2}]y(r) = 0$$`}</Latex>

            <p>다시 한 번 특정한 형태로 치환한다.</p>

            <Latex
                displayMode={true}
            >{`$$(\\frac{\\epsilon}{2})^2 = -\\frac{2\\mu}{ℏ^2}E \\hspace{10pt} , \\hspace{10pt} x=r\\epsilon$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\epsilon^2\\frac{d^2y(x)}{dx^2} + [-\\frac{\\epsilon^2}{4} + \\frac{2 \\mu}{ℏ^2}V(r) - \\epsilon^2\\frac{l(l+1)}{x^2}]y(x) = 0$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to \\frac{d^2y(x)}{dx^2} + [-\\frac{1}{4} + \\frac{2 \\mu}{ℏ^2\\epsilon^2}V(r) - \\frac{l(l+1)}{x^2}]y(x) = 0$$`}</Latex>

            <p>
                이 형태는 버금 라게르 함수와 일치한다. 먼저 l을 포함하는 대괄호
                항의 세 번째 항이 버금 라게르 함수의 k<sup>2</sup> - 1을
                포함하는 항과 일치하는 것으로{' '}
                <Latex>{`$l (l + 1) = (k^2 - 1) / 4 \\to k = 2l + 1$`}</Latex>,
                l과 k의 관계를 구할 수 있다. k = 2l + 1. 또한 위 식의 V(r)을
                포함하는 항이 <Latex>{`$\\dfrac{2j + k + 1}{2x}$`}</Latex>와
                일치하는 것을 가정해 E를 다시 구하고자 한다. 여기서{' '}
                <Latex>{`$\\dfrac{2j + k + 1}{2}$`}</Latex>는 j + l + 1로 볼 수
                있으며, 이는 수소 원자의 슈뢰딩거 방정식 풀이에서 주양자수 n으로
                변환된다. 그러나, 광자-에테르는 n이 1보다 큰 경우만 다루기
                때문에 이를 n - 1로 변환하기로 하겠다.
            </p>

            <Latex
                displayMode={true}
            >{`$$\\frac{2 \\mu}{ℏ^2\\epsilon^2}V(r) = \\frac{2j+k+1}{2x}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to \\frac{2 \\mu}{ℏ^2\\epsilon^2}V(r) = \\frac{n-1}{x}$$`}</Latex>

            <p>
                ɛ<sup>2</sup>을 앞선 치환 조건에 의해 다시 변환하면,
            </p>

            <Latex
                displayMode={true}
            >{`$$-\\frac{2 \\mu}{ℏ^2} \\frac{ℏ^2}{4\\mu} \\frac{V(r)}{E} = \\frac{n-1}{x}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to-\\frac{1}{2} \\frac{V(r)}{E} = \\frac{n-1}{x}$$`}</Latex>

            <p>이를 E와 n의 관계로 변환해 보자.</p>

            <Latex
                displayMode={true}
            >{`$$E = -\\frac{1}{n-1} \\frac{x}{2}V(r)$$`}</Latex>

            <p>
                우리는 이미 에너지를 알고 있다. E<sub>th</sub>(n)가 그것이다.
                그러나 퍼텐셜 에너지 V(r)에 대해서는 아는 바가 없다. 여기가 너무
                억지스럽지만, <Latex>{`$\\dfrac{x}{2}V(r)$`}</Latex>을{' '}
                <Latex>{`$E_{th}(n)\\dfrac{1}{\\alpha}$`}</Latex>라 가정해보자.
            </p>

            <Latex
                displayMode={true}
            >{`$$\\to E = -\\frac{1}{n-1} E_{th}(n) \\frac{1}{\\alpha} $$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to E\\alpha = -\\frac{ℏ^2}{2 \\mu a_0 ^ 2} N_{th}(n) \\frac{1}{n-1}$$`}</Latex>

            <p>
                이 <Latex>{`$E\\alpha$`}</Latex>를 다시 치환 조건에 대입해 x
                값을 얻어낸다.
            </p>

            <Latex
                displayMode={true}
            >{`$$(\\frac{\\epsilon}{2})^2 = \\frac{2\\mu}{ℏ^2} \\frac{ℏ^2}{2 \\mu a_0 ^ 2} N_{th}(n) \\frac{1}{n-1}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to (\\frac{\\epsilon}{2})^2 = \\frac{1}{a_0 ^ 2} N_{th}(n) \\frac{1}{n-1}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to \\epsilon^2 = \\frac{4}{a_0 ^ 2} N_{th}(n) \\frac{1}{n-1}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to \\frac{x^2}{r^2} = \\frac{4}{a_0 ^ 2} N_{th}(n) \\frac{1}{n-1}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to x^2 = \\frac{4r^2}{a_0 ^ 2} N_{th}(n) \\frac{1}{n-1}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to x = \\frac{2r}{a_0} \\sqrt{ N_{th}(n) \\frac{1}{n-1}}$$`}</Latex>

            <p>
                이 x값을 버금 라게르 함수에 대입하는 것으로 지름 파동함수의 해를
                구할 수 있다. 먼저 y(x)를 다시 rR(r)로 되돌린다.
            </p>

            <Latex
                displayMode={true}
            >{`$$y_j^k(x) = e^{-x/2} x^{\\frac{k+1}{2}} L_j^k(x)$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to y_n^l(x) = e^{-x/2} x^{l+1} L_{n-l-1}^{2l+1}(x)$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to rR_{n,l}(r) = e^{-x/2} x^{l+1} L_{n-l-1}^{2l+1}(x)$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to R_{n,l}(r) = Ae^{-x/2} x^l L_{n-l-1}^{2l+1}(x)$$`}</Latex>

            <p>
                우리가 구하려는 것은 n 당 오비탈의 마디 한 개이다. 따라서 라게르
                다항식의 밑은 언제나 1인 것으로 가정하자. 또한 우리는 이
                단계에서 l = 0인 경우만 생각할 것이다. 위 식에서 x와 L 항이
                제거된 최종적인 형태의 파동함수는 다음과 같다.
            </p>

            <Latex displayMode={true}>{`$$R_{th}(r) = Ae^{-x/2}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$A = \\frac{1}{\\sqrt{2}} (\\frac{1}{a_0} \\sqrt{N_{th}(n) \\frac{1}{n-1}})^{\\frac{3}{2}}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$R_{th}(r) = Ae^{-\\frac{r}{a_0} \\sqrt{N_{th}(n) \\frac{1}{n-1}}} \\hspace{10pt} { n \\geqq 2, l = 0 }$$`}</Latex>
            <p>
                광자-에테르의 지름 파동함수 R<sub>th</sub>(r)
            </p>

            <p>
                여기서 기대하는 결과는 기존의 오비탈의 마디와 광자-에테르의
                고점이 일치하는 것이다. 그렇다면 가설로 세운 전자와 원자핵
                사이에 광자-에테르가 들어가는 것이 성립하게 된다. 그 결과는{' '}
                <a
                    href="https://www.desmos.com/calculator/ap6thpgo3q"
                    target="_blank"
                    rel="noreferrer"
                >
                    이곳
                </a>
                에서 확인할 수 있다.
            </p>

            <p>
                붉은색 파선은 수소 원자의 지름 방정식이며, 초록색 파선은
                광자-에테르의 고점의 위치이다. 둘이 근사하는 것을 볼 수 있다.
            </p>

            <div className="align__center">
                <img
                    src={pic6}
                    alt="전자 오비탈 마디의 위치와 광자-에테르 그래프"
                />
            </div>

            <h3>
                R<sub>th</sub>(r)의 보정, 부양자수 l
            </h3>

            <p>
                R<sub>th</sub>(r)은 수소 원자 오비탈의 마디와 대략 일치하지만
                (1) 오차가 있으며 (2) 수소 파동함수에서 쓰이는 부양자수 l을
                포함하지 못한다. 여기서는 이 두 가지 문제를 해결해 보도록 노력해
                보겠다. 먼저 밝히자면 아까보다 훨씬 억지스럽다. 그러나 이것으로
                수소 원자에서 n<sup>2</sup>이{' '}
                <Latex>{`$N_{th}(n)\\dfrac{1}{n-1}$`}</Latex>로 변화한 것과 같이
                l에 대한 보정이 필요하다는 것을 말하고자 한다.
            </p>

            <p>수소 원자의 슈뢰딩거 방정식으로 돌아가 보자.</p>

            <Latex
                displayMode={true}
            >{`$$R_{n,l}(r) = Ae^{-x/2} x^l L_{j}^{k}(x)$$`}</Latex>

            <p>
                우리는 L 항의 j 부분이 항상 1이 되는 것으로 가정해서 제거했다.
                이 j가 항상 1이 되기 위해서는 l 값을 재정의해야한다. 그를 x
                <sup>l</sup> 항에서의 l 값이 부양자수가 아닌 것이 될 것이다. R
                <sub>th</sub>(r)를 다시 보자.{' '}
            </p>

            <Latex
                displayMode={true}
            >{`$$x = \\frac{2r}{a_0} \\sqrt{\\frac{N_{th}(n)}{n-1}}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$R_{th}(r, n) = Ae^{-\\frac{x}{2}} x^l L_{j}^{k}(x)$$`}</Latex>

            <p>
                오비탈을 다시 보자. l이 증가함에 따라 원형의 마디(node)가
                줄어들고 선형의 마디(node)가 생겨난다. 부양자수 l이 증가한다는
                것은 원형의 광자-에테르가 선형으로 변화하는 것을 뜻하며, l이
                적용된 수소 원자의 슈뢰딩거 방정식에서는 마디(node)가 하나
                줄어드는 것을 볼 수 있다. 따라서 에테르의 위치를 뜻하는{' '}
                <Latex>{`$\\dfrac{1}{n-1}$`}</Latex> 부분은{' '}
                <Latex>{`$\\dfrac{1}{n-l-1}$`}</Latex>로 고치는 것이 타당해
                보인다.
            </p>

            <Latex
                displayMode={true}
            >{`$$x = \\frac{2r}{a_0} \\sqrt{\\frac{N_{th}(n)}{n-l-1}}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$R_{th}(r, n_{th}) = Ae^{-\\frac{x}{2}} x^l L_{j}^{k}(x)$$`}</Latex>

            <p>
                우리는 앞에서 <Latex>{`$\\dfrac{2j + k + 1}{2}$`}</Latex>를 n -
                1로 치환했다. 그런데 다시 수소 원자로 돌아가 보면, 이 과정에서의
                n - 1은 원래 n<sup>2</sup>이었다.
            </p>

            <p>
                또한 수소 원자에서 주양자수 n은{' '}
                <Latex>{`$\\dfrac{N_{th}(n)}{n-1}$`}</Latex>로도 전환된 것을 볼
                수 있다. 하나는 수소 원자에서 왔고 다른 하나는 내가 만든
                수식에서 왔지만 이를 합쳐보기로 하자. 말도 안 되는 일을 벌이는
                거다. 왼쪽 항은 수소 원자에서, 오른쪽은 위에서 만든 에테르에서
                온 것이다. 이렇게 l 값을 구해보도록 한다.
            </p>

            <Latex
                displayMode={true}
            >{`$$(\\frac{2j + k + 1}{2})^2 = \\frac{N_{th}(n)}{n-1}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to \\frac{2j + 2l + 2}{2} = \\sqrt{\\frac{N_{th}(n)}{n-1}}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to j + l + 1 = \\sqrt{\\frac{N_{th}(n)}{n-1}}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to l = \\sqrt{\\frac{N_{th}(n)}{n-1}} - (j + 1)$$`}</Latex>

            <p>
                이제 j를 다시 재정의해보자. 수소 원자의 방정식을 유도할 때,{' '}
                <Latex>{`$\\dfrac{2j + k + 1}{2}$`}</Latex>은 n이 되어 x의
                일부로 <Latex>{`$\\dfrac{1}{n^2}$`}</Latex>이 된다. 역시 말도 안
                되지만 그것으로부터 출발하겠다. 우리는 n 말고 n - 1을 사용한다.
                k는 L의 위 인자이기도 하다. L의 아래 인자를 1로 가정한 것과 같이
                여기서도 k를 항상 1이라 하자. 그래야 L이 항상 1이 될 수 있다.
            </p>

            <Latex
                displayMode={true}
            >{`$$\\frac{2j + k + 1}{2} = \\frac{1}{(n-1)^2}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to \\frac{2j + 2}{2} = \\frac{1}{(n-1)^2}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to j + 1 = \\frac{1}{(n-1)^2}$$`}</Latex>

            <p>이것을 아까의 l 식에 대입해 보겠다.</p>

            <Latex
                displayMode={true}
            >{`$$\\to l = \\sqrt{\\frac{N_{th}(n)}{n-1}} - \\frac{1}{(n-1)^2}$$`}</Latex>

            <p>
                이것을 R<sub>th</sub>(r)에 대입하기로 한다.
            </p>

            <Latex
                displayMode={true}
            >{`$$x = \\frac{2r}{a_0} \\sqrt{\\frac{N_{th}(n)}{n -1- l}}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$R_{th}(r, n, l) = Ae^{-\\frac{x}{2}} x^{\\sqrt{\\frac{N_{th}(n)}{n-1}} - \\frac{1}{(n-1)^2}} L_{1}^{1}(x)$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$R_{th}(r, n, l) = Ae^{-\\frac{x}{2}} x^{\\sqrt{\\frac{N_{th}(n)}{n-1}} - \\frac{1}{(n-1)^2}}$$`}</Latex>

            <p>이 경우 정규화 상수는 내 능력 밖이다... ;ㅁ;</p>

            <p>
                그 결과는{' '}
                <a
                    href="https://www.desmos.com/calculator/siznuyffxq"
                    target="_blank"
                    rel="noreferrer"
                >
                    이곳
                </a>
                에서 확인할 수 있다.
            </p>

            <p>
                붉은색 파선은 수소 원자의 지름 방정식이며, 보라색 파선은 보정된
                광자-에테르의 고점의 위치이다. 둘이 더욱 근사하는 것을 볼 수
                있다.
            </p>

            <div className="align__center">
                <img src={pic12} alt="보정된 광자-에테르 그래프" />
                <p>보정된 광자-에테르 그래프</p>
            </div>

            <p>
                그래프를 다시 그려보면, 위치는 조금씩 보정이 일어났고, l에 대한
                보정도 일어난 것을 볼 수 있다. 나는 여기서 이것이 정확한
                방정식이라고 주장하는 것이 아니라 수소 원자의 슈뢰딩거 방정식과
                비교하여 x 항의 지수로 쓰이는 광자-에테르 방정식의 l은 다른
                의미를 가진다는 것을 주장하는 것이다.
            </p>
        </Fragment>
    )
}
