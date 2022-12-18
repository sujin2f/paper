import React, { Fragment } from 'react'
import Latex from 'react-latex'

import pic6 from 'src/assets/images/doc/pic6.png'
import pic12 from 'src/assets/images/doc/pic12.png'

export const SchrodingerEquation = (): JSX.Element => {
    return (
        <Fragment>
            <h2 id="schrodinger-equation">Proof(3): Schrödinger Equation</h2>

            <p>
                Caution: This chapter is not perfectly mathematical. The formula
                is somewhat manipulated. So, you can pass it to [the next
                chapter](./conclusion_en.md).
            </p>

            <h3>The Photon-Ether from Schrödinger Equation</h3>

            <p>
                As we observed in the previous chapter, an ether creates an
                orbital. Therefore, is it possible to make a photon-ether
                equation to manipulate the hydrogen Schrödinger equation? The
                position of nodes can get with the R(r) equation, which is the
                radial equation.
            </p>

            <Latex
                displayMode={true}
            >{`$$\\frac{1}{R(r)} \\frac{d}{dr} (r^2 \\frac{d}{dr}) R(r) - \\frac{2 \\mu r^2}{ℏ^2}(V(r)-E) - l(l+1) = 0$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to \\frac{d}{dr} (r^2 \\frac{d}{dr}) R(r) + [\\frac{2 \\mu r^2}{ℏ^2}E - \\frac{2 \\mu r^2}{ℏ^2}V(r) - l(l+1)]R(r) = 0$$`}</Latex>

            <p>The Radial Equation, R(r)</p>

            <p>
                I will use the way to make the form of associated Laguerre
                polynomials and functions.
            </p>

            <Latex
                displayMode={true}
            >{`$$y_j^k(x) = e^{-x/2} x^{(k+1)/2} L_j^k(x)$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$ {y_j^k}''(x) + (-\\frac{1}{4} + \\frac{2j+k+1}{2x} - \\frac{k^2-1}{4x^2})y_j^k(x) = 0$$`}</Latex>

            <p>
                Slightly Different Associated Laguerre Equation and its Solution
            </p>

            <p>First, let me substitute y(r) = rR(r).</p>

            <Latex
                displayMode={true}
            >{`$$\\frac{d^2y(r)}{dr^2} + [\\frac{2 \\mu r^2}{ℏ^2}E - \\frac{2 \\mu r^2}{ℏ^2}V(r) - l(l+1)]\\frac{y(r)}{r} = 0$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to \\frac{d^2y(r)}{dr^2} + [\\frac{2 \\mu}{ℏ^2}E - \\frac{2 \\mu}{ℏ^2}V(r) - \\frac{l(l+1)}{r^2}]y(r) = 0$$`}</Latex>

            <p>And then, apply other substitutions.</p>

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
                This form is identical to the associated Laguerre equation
                above. First, using the third group in the bracket is the same
                with k<sup>2</sup> - 1 group in the associated Laguerre
                equation, we can get the relationship between l and k, l \* (l +
                1) = (k<sup>2</sup> - 1) / 4 =&gt; k = 2l + 1. Also, the group
                includes V(r) is the same with (2j + k + 1) / 2x, so I will get
                what is E. We can say (2j + k + 1) / 2 is j + l + 1, and this is
                converted to n in the hydrogen atom. However, our photon-ether
                starts from 2, so I will set this as n - 1.
            </p>

            <Latex
                displayMode={true}
            >{`$$\\frac{2 \\mu}{ℏ^2\\epsilon^2}V(r) = \\frac{2j+k+1}{2x}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to \\frac{2 \\mu}{ℏ^2\\epsilon^2}V(r) = \\frac{n-1}{x}$$`}</Latex>

            <p>
                Let me change ɛ<sup>2</sup> with the substitution rule above,
            </p>

            <Latex
                displayMode={true}
            >{`$$-\\frac{2 \\mu}{ℏ^2} \\frac{ℏ^2}{4\\mu} \\frac{V(r)}{E} = \\frac{n-1}{x}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to-\\frac{1}{2} \\frac{V(r)}{E} = \\frac{n-1}{x}$$`}</Latex>

            <p>Let me convert this to the relationship with E and n.</p>

            <Latex
                displayMode={true}
            >{`$$E = -\\frac{1}{n-1} \\frac{x}{2}V(r)$$`}</Latex>

            <p>
                We already know the energy, E<sub>th</sub>(n). However, we do
                not know about V(r). I know this is not logical enough, but let
                me assume x / 2 \* V(r) to E<sub>th</sub>(n) \_ 1 / ɑ.
            </p>

            <Latex
                displayMode={true}
            >{`$$\\to E = -\\frac{1}{n-1} E_{th}(n) \\frac{1}{\\alpha} $$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$\\to E\\alpha = -\\frac{ℏ^2}{2 \\mu a_0 ^ 2} N_{th}(n) \\frac{1}{n-1}$$`}</Latex>

            <p>Getting `x` from substitution of E \* ɑ.</p>

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
                This x will help to get the solution of the radial equation to
                change the form of the associated Laguerre equation. First, let
                me convert y(x) back to rR(r).
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
                What I want to get is one node per n. Therefore, let me assume
                n-l-1 is always 1. We also consider only the case of l as zero.
                The result is:
            </p>

            <Latex displayMode={true}>{`$$R_{th}(r) = Ae^{-x/2}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$A = \\frac{1}{\\sqrt{2}} (\\frac{1}{a_0} \\sqrt{N_{th}(n) \\frac{1}{n-1}})^{\\frac{3}{2}}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$R_{th}(r) = Ae^{-\\frac{r}{a_0} \\sqrt{N_{th}(n) \\frac{1}{n-1}}} \\hspace{10pt} { n \\geqq 2, l = 0 }$$`}</Latex>
            <p>
                Radial equation of photon-ether R<sub>th</sub>(r)
            </p>

            <p>
                What I expect is that the node of the hydrogen atom radial
                equation with the peak point of the photon-ether equation. If
                so, it would tend to equal the node is the ether. The result can
                be seen [here](https://www.desmos.com/calculator/ap6thpgo3q).
            </p>

            <p>
                The red dotted line is the radial equation of the hydrogen atom,
                and the green one is the peak point of the photon-ether.
            </p>

            <img src={pic6} alt="Adjusting Rth(r): The Angular Momentum, l" />

            <h3>
                Adjusting R<sub>th</sub>(r): The Angular Momentum, l
            </h3>

            <p>
                R<sub>th</sub>(r) is close to the node of hydrogen orbital, but
                it has an approximation error, and it does not contain the l
                value. Here I will try to fix those problems. To be honest, this
                process will be more mathematically incorrect than the previous
                equation. However, this process will provide we need to adjust l
                value like I adjusted n<sup>2</sup> to N<sub>th</sub>(n) \*
                1/(n-1) above.
            </p>

            <p>Let me get back to the hydrogen atom Schrödinger equation.</p>

            <Latex
                displayMode={true}
            >{`$$R_{n,l}(r) = Ae^{-x/2} x^l L_{j}^{k}(x)$$`}</Latex>

            <p>
                I eliminated L to assume the j value is always 1. To make j to
                1, we need to redeclare l. The l would not be the angular
                momentum. Let me examine R<sub>th</sub>(r) again.
            </p>

            <Latex
                displayMode={true}
            >{`$$x = \\frac{2r}{a_0} \\sqrt{\\frac{N_{th}(n)}{n-1}}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$R_{th}(r, n) = Ae^{-\\frac{x}{2}} x^l L_{j}^{k}(x)$$`}</Latex>

            <p>
                Please watch the orbital again. Along with the increment of l,
                the count of radial nodes decreased, and linear nodes increased.
                The increment of angular momentum means the radial ether becomes
                linear, and it is decreasing node from the hydrogen R equation.
                Therefore, 1 / (n - 1), which means the position of ether,
                should become 1 / (n - l - 1).
            </p>

            <Latex
                displayMode={true}
            >{`$$x = \\frac{2r}{a_0} \\sqrt{\\frac{N_{th}(n)}{n-l-1}}$$`}</Latex>
            <Latex
                displayMode={true}
            >{`$$R_{th}(r, n_{th}) = Ae^{-\\frac{x}{2}} x^l L_{j}^{k}(x)$$`}</Latex>

            <p>
                We replaced (2j + k + 1) / 2 to n - 1, yet for the hydrogen
                equation, that was n<sup>2</sup>.
            </p>

            <p>
                Also, the electron's energy n converted to N<sub>th</sub>(n) /
                (n - 1) in the hydrogen atom. One comes from the hydrogen, and
                the other one comes from my equation, and I will merge them in
                one place. I know it is nonsense. The left equation is from
                hydrogen, and the right is from ether to get a new l.
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
                I will redeclare j. When we get the hydrogen equation, (2j + k +
                1) / 2 becomes n, and it goes to the part of x, 1 / n
                <sup>2</sup>. I will use n - 1 instead of n. k is also included
                in L. Likewise I assumed the bottom of L to 1, let me assume k
                is always 1, so L can be always 1.
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

            <p>To apply this to the l equation:</p>

            <Latex
                displayMode={true}
            >{`$$\\to l = \\sqrt{\\frac{N_{th}(n)}{n-1}} - \\frac{1}{(n-1)^2}$$`}</Latex>

            <p>
                And then apply this to R<sub>th</sub>(r):
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

            <p>
                In this case, the normalizing constant is out of my capability
                :(
            </p>

            <p>
                The result is
                [here](https://www.desmos.com/calculator/siznuyffxq).
            </p>

            <p>
                The red dotted line is the R equation of the hydrogen atom, and
                the purple line is the adjusted photon-ether's peak point.
            </p>

            <img src={pic12} alt="Adjusted Photon-Ether Graph" />
            <p>Adjusted Photon-Ether Graph</p>

            <p>
                Watching a graph, the position is a little bit adjusted and
                corrected for the l value. I do not argue this is an accuracy
                equation. I want to say the l is different than the hydrogen.
            </p>
        </Fragment>
    )
}
