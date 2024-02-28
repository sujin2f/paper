import React from 'react'
import { Link } from 'react-router-dom'

import { Doc } from 'src/frontend/scenes/doc'
import { Row } from 'src/common/components/layout/Row'
import { Column } from 'src/common/components/layout/Column'
import { scrollTo } from 'src/common/utils/device'

import { Latex } from 'src/frontend/components/document/Latex'

import pic29 from 'src/assets/images/doc/pic29.png'
import pic42 from 'src/assets/images/doc/pic42.png'
import pic65 from 'src/assets/images/doc/pic65.png'
import pic86 from 'src/assets/images/doc/pic86.png'
import pic96 from 'src/assets/images/doc/pic96.png'
import pic97 from 'src/assets/images/doc/pic97.png'
import pic98 from 'src/assets/images/doc/pic98.png'
import pic99 from 'src/assets/images/doc/pic99.png'
import pic100 from 'src/assets/images/doc/pic100.png'
import pic101 from 'src/assets/images/doc/pic101.png'
import pic102 from 'src/assets/images/doc/pic102.png'
import pic103 from 'src/assets/images/doc/pic103.png'
import pic104 from 'src/assets/images/doc/pic104.png'
import pic105 from 'src/assets/images/doc/pic105.png'
import pic106 from 'src/assets/images/doc/pic106.png'
import pic107 from 'src/assets/images/doc/pic107.png'
import pic108 from 'src/assets/images/doc/pic108.png'
import pic109 from 'src/assets/images/doc/pic109.png'
import pic110 from 'src/assets/images/doc/pic110.png'
import pic111 from 'src/assets/images/doc/pic111.png'
import pic112 from 'src/assets/images/doc/pic112.png'

export const Comparison = (): JSX.Element => (
    <Doc>
        <h2 id="comparison">Proof(3): Emission Energy Analysis</h2>

        <p>
            The formula is ready. Let's proceed to the comparisons. I will bring
            back the last graph from the previous section with some
            enhancements.
        </p>

        <div className="align__center">
            <img src={pic96} alt="Changes in the Helium Orbital Values" />
            <p>
                <strong>Changes in the Helium Orbital Values</strong>
            </p>
        </div>

        <p>
            The 0 position represents the point where the first ether appears in
            the ground state. Since the reference for the horizontal shift is
            the first ether, setting the difference in values to 0 is
            acceptable. Additionally, a violet 1 position for the d orbital has
            been added. Blue represents the s orbital, green represents the p
            orbital. The blue values of the s orbital are all changes
            corresponding to the increase in circular ether. The first value in
            green, representing the p orbital, is the change from{' '}
            <code>[X]</code>에서 <code>[-]</code>, and the rest are changes
            corresponding to the increase in circular ether. Finally, the violet
            values for the d orbital also show an increase in linear ether for
            the first value, and the rest indicate an increase in circular
            ether.
        </p>
        <p>
            The increase in circular ether in the s and p orbitals seems to
            exhibit a pattern of initially peaking, then dropping, and rising
            again before converging to a focal point. However, the pattern for d
            is different. There could be some error. Is it not converging well
            to a focal point? It's too early to give up hope.
        </p>

        <div className="align__center">
            <img
                src={pic97}
                alt="Changes in the Helium Orbital Values + Linear Ether"
            />
            <p>
                <strong>
                    Changes in the Helium Orbital Values + Linear Ether
                </strong>
            </p>
        </div>

        <p>
            The added red line represents the change in the number of linear
            ether: <code>[X]</code>, <code>[-]</code>, <code>[--]</code>,{' '}
            <code>[---]</code>. Clearly, the other values correspond to changes
            in the number of circular ether, but the d orbital aligns with the
            changes in linear ether. If the accumulation of circular and linear
            ether determines the emitted energy, circular should follow a
            circular pattern, and linear should follow a linear pattern. That's
            how addition works. It failed. The hypothesis is broken. Farewell,
            everyone.
        </p>

        <h3>Which comes first, the circle or the line?</h3>

        <p>
            Let's raise a brief question here. Between <code>[-O]</code> and{' '}
            <code>[O-]</code>, which one seems correct to you? Some might wonder
            what difference it makes, and others might think as I do that the
            first one is correct. Those who think the first one is correct may
            base their orbital classification on the number of linear ether. For
            example, as the p orbital changes in <code>[-]</code>,{' '}
            <code>[-O]</code>, <code>[-OO]</code>, they habitually place the
            linear part at the beginning. However, if you consider it as{' '}
            <code>[O-]</code>, the meaning completely changes.
        </p>

        <p>
            The ether in the first position is very large, while the one in the
            second position is relatively small. The values for circular and
            linear ether are different. When these three are combined, the
            values for <code>[-O]</code> and <code>[O-]</code> must be different
            if it's an addition. If
            <code>[O]</code> is 10, <code>[-]</code> is 11, and{' '}
            <code>[O-]</code> is 12, for instance. If linear comes first, then
            in <code>[-O]</code>, circular should be 1, and if circular comes
            first, in the second position of <code>[O-]</code>, linear should be
            2. So, it can be said that what accumulates first is very important.
        </p>

        <p>
            <code>[X]</code> =&gt; <code>[O]</code> =&gt; <code>[OO]</code>{' '}
            =&gt; <code>[OOO]</code> =&gt; <code>[OOOO]</code> represents the s
            orbital and circular ether. <code>[X]</code> =&gt; <code>[-]</code>{' '}
            =&gt; <code>[--]</code> =&gt; <code>[---]</code> =&gt;{' '}
            <code>[----]</code> represents the linear ether, changing as{' '}
            <code>1s</code> =&gt; <code>2p</code> =&gt; <code>3d</code> =&gt;{' '}
            <code>4f</code>. <code>[O]</code> =&gt; <code>[O-]</code> =&gt;{' '}
            <code>[O--]</code> =&gt; <code>[O---]</code> represents the stacking
            of linear ether on one circular ether, changing as <code>2s</code>{' '}
            =&gt; <code>3p</code> =&gt; <code>4d</code> =&gt; <code>5f</code>.
        </p>

        <p>Let's rearrange the values.</p>

        <div className="align__center">
            <img src={pic98} alt="Circle comes first!" />
            <p>
                <strong>Circle comes first!</strong>
            </p>
        </div>

        <p>
            The blue line remains the s orbital, showing the pattern of
            increasing circular ether, just like before. The red line also
            represents the change in the number of linear ether, as in the
            previous plot. The green line represents the changes in values where
            one circular ether is fixed and linear ether increases. In other
            words, the blue line shows changes in circular ether, while the
            others show changes in linear ether. Can you see it, humans? Behold!
            How beautiful is this pattern! Placing circular first seems to
            exhibit a better pattern. The orbital classification based on the
            number of linear ether, like s, p, d, may be incorrect.
        </p>

        <p>
            A hint was caught in the specific case of helium. But can this be
            applied to all atoms? Let's make it. After all, I am a computer
            programmer.
        </p>

        <p>
            So, I{' '}
            <a href="/ether/2+1+1/graph" target="_blank" rel="noreferrer">
                created it
            </a>
            .
        </p>

        <p>
            I will distinguish the classification that prioritizes linear (as in
            traditional orbital classification) from the classification that
            prioritizes circular ether and denote it as "Ether Classification."
        </p>

        <Row>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic100}
                        alt="Changes in the Helium Orbital Values"
                    />
                    <p>
                        <strong>Changes in the Helium Orbital Values</strong>
                    </p>
                </div>
            </Column>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img src={pic99} alt="Changes in the Helium Ether Values" />
                    <p>
                        <strong>Changes in the Helium Ether Values</strong>
                    </p>
                </div>
            </Column>
        </Row>

        <h3>
            <a href="/ether/1+1/graph" target="_blank" rel="noreferrer">
                Hydrogen
            </a>
        </h3>

        <Row>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic102}
                        alt="Changes in the Hydrogen Orbital Values"
                    />
                    <p>
                        <strong>Changes in the Hydrogen Orbital Values</strong>
                    </p>
                </div>
            </Column>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic101}
                        alt="Changes in the Hydrogen Ether Values"
                    />
                    <p>
                        <strong>Changes in the Hydrogen Ether Values</strong>
                    </p>
                </div>
            </Column>
        </Row>

        <p>
            Unfortunately, hydrogen lacks distinctiveness in this context.
            Firstly, hydrogen already has a very low error with the existing
            Rydberg formula. The second reason is that the r value I used (the
            height of the graph in hydrogen) is derived from the ionization
            energy values obtained{' '}
            <a
                href="https://github.com/Bowserinator/Periodic-Table-JSON"
                target="_blank"
                rel="noreferrer"
            >
                here
            </a>
            , which may have a slight margin of error. This is true for all
            atoms, but hydrogen has such a small error that even a change of
            0.0001 significantly alters the graph.
        </p>

        <p>
            However, we cannot simply overlook this. Hydrogen's r value is a
            crucial factor used as the ratio of the graph in many atoms. Let's
            make a correction. The obtained value is <code>1312 J</code>, but
            after some trial and error, I found it to be{' '}
            <code>13.5984355 eV</code>. I applied this value and redraw the
            graph.
        </p>

        <Row>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic103}
                        alt="Changes in the Hydrogen Orbital Values"
                    />
                    <p>
                        <strong>
                            Changes in the Hydrogen Orbital Values <sup>2</sup>S
                            <sub>1/2</sub>
                        </strong>
                    </p>
                </div>
            </Column>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic104}
                        alt="Changes in the Hydrogen Ether Values"
                    />
                    <p>
                        <strong>
                            Changes in the Hydrogen Ether Values <sup>2</sup>S
                            <sub>1/2</sub>
                        </strong>
                    </p>
                </div>
            </Column>
        </Row>

        <p>
            It still lacks distinctiveness. The Rydberg formula resembles a
            logarithmic function that decreases in variation as you go further
            back. Naturally, as the graph converges backward, it becomes
            challenging to observe changes. To slightly widen that gap, I'll
            make a very small modification to the equation.
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`D(x) = v_2 - v_1 - (R(x+1+k_{2}) - R(x+k_{1}))`}</Latex>

            <p>
                The difference D(x) when energy is emitted from energy v
                <sub>2</sub> to v<sub>1</sub>
                in the modified Rydberg formula.
            </p>

            <Latex
                displayMode={true}
            >{`D(x) = \\dfrac{v_2 - v_1 - (R(x+1+k_{2}) - R(x+k_{1}))}{R(x+1+k_{2}) - R(x+k_{1})} `}</Latex>
            <p>
                The result D(x), where weights are applied to make it easier to
                see as you go backward
            </p>
        </div>

        <div className="align__center">
            <img
                src={pic105}
                alt="Changes in the Hydrogen Ether Values with D(x)"
            />
            <p>
                <strong>
                    Changes in the Hydrogen Ether Values <sup>2</sup>S
                    <sub>1/2</sub> with D(x)
                </strong>
            </p>
        </div>

        <p>
            Now that it's a bit easier to see, let's adopt this formula
            consistently.
        </p>

        <h3>
            <a href="/ether/2+1+1/graph" target="_blank" rel="noreferrer">
                Helium
            </a>
        </h3>

        <Row>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic112}
                        alt="Changes in the Helium Orbital Values"
                    />
                    <p>
                        <strong>
                            Changes in the Helium Orbital Values <sup>1</sup>S
                            <sub>0</sub>
                        </strong>
                    </p>
                </div>
            </Column>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img src={pic99} alt="Changes in the Helium Ether Values" />
                    <p>
                        <strong>
                            Changes in the Helium Ether Values <sup>1</sup>S
                            <sub>0</sub>
                        </strong>
                    </p>
                </div>
            </Column>
        </Row>

        <p>
            Helium's graph, as shown earlier in this conversation, is identical
            to the one using the weighted function D(x), with the added emphasis
            on regularities. Still, there are no clear patterns in the orbitals,
            while patterns can be observed in the ethers.
        </p>

        <h3>
            <a href="/ether/3+1+1/graph" target="_blank" rel="noreferrer">
                Lithium
            </a>
        </h3>

        <Row>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic106}
                        alt="Changes in the Lithium Orbital Values"
                    />
                    <p>
                        <strong>
                            Changes in the Lithium Orbital Values <sup>2</sup>S
                            <sub>1/2</sub>
                        </strong>
                    </p>
                </div>
            </Column>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic107}
                        alt="Changes in the Lithium Ether Values"
                    />
                    <p>
                        <strong>
                            Changes in the Lithium Ether Values <sup>2</sup>S
                            <sub>1/2</sub>
                        </strong>
                    </p>
                </div>
            </Column>
        </Row>

        <p>
            The change in lithium orbitals may not have been as noticeable
            messed up, but the weighting with D(x) emphasizes the differences in
            the higher positions. Even so, a similar pattern can be observed in
            lithium. However, as a non-expert, I find it challenging to discern
            which configurations might be grouped together as the atomic number
            increases. Unfortunately, this limits my ability to create a more
            definitive resource on the topic.
        </p>

        <h3>Analysis of the Ground-State of Atoms beyond Lithium</h3>

        <p>
            The curve traced by hydrogen fits well into the Rydberg formula.
            Helium exhibits an upward trend in the graph, with values rising
            along with the peak. However, starting from lithium, the trend
            shifts downward, and thereafter, it becomes erratic. What could be
            the reason for this? Let's first examine the values of circular
            ether for hydrogen-like atoms and helium-like atoms. While eV is
            suitable for calculating energy, it lacks intuitiveness, so the
            values are expressed in Rydberg units
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
            <strong>Values of the One Circular Ether</strong>
        </p>

        <p>
            Surprisingly, the approximate values fall quite neatly:{' '}
            <code>0.75</code>, <code>1.5</code>, <code>3</code>,{' '}
            <code>4.5</code>,<code>6.75</code>, <code>9</code>, <code>12</code>,{' '}
            <code>18.75</code>. They are all multiples of 0.75. Notably, 0.75 is
            also the value when x is 1 in the Rydberg formula. So, how many
            times is each of these values a multiple of 0.75?
        </p>

        <div className="align__center">
            <img src={pic29} alt="How Many Times of 0.75?" />
            <p>
                <strong>How Many Times of 0.75?</strong>: Red represents the
                measured values, while blue represents the predicted values
            </p>
        </div>

        <p>
            Let's focus on the red values first. The values along the first
            diagonal are all 1, 4, 9, 16, matching Z squared, indicating the
            Rydberg formula expressing the atomic number's increase as Z
            squared. Looking at the diagonal for horizontal changes, it follows
            a consistent pattern of +1, +2, +3, +4. This could be understood as
            the shift in the vertical direction, which corresponds to the s
            value. The vertical changes also follow a consistent pattern of +2,
            +3, +4. Predicting changes in values as integer multiples of 0.75
            seems plausible. This suggests that Li I could be 3, and Be I could
            be 4. Assuming this, looking at the vertical changes, we can observe
            that lithium becomes{' '}
            <Latex>{`\\begin{bmatrix}+3\\\\+3\\end{bmatrix}`}</Latex>, and
            beryllium becomes{' '}
            <Latex>{`\\begin{bmatrix}+4\\\\+4\\\\+4\\end{bmatrix}`}</Latex>.
            Another possibility is assuming the horizontal axis changes as{' '}
            <Latex>{`\\begin{bmatrix}+1 & +2 & +3 & +4 & ...\\end{bmatrix}`}</Latex>
            . In this case, the vertical changes would increase by 1, like{' '}
            <Latex>{`\\begin{bmatrix}+2\\\\+3\\end{bmatrix}`}</Latex>. Between
            the two possibilities, the first one seems more convincing. This is
            because the impact of <code>[X]</code> on the vertical shift becomes
            constant at 0.75. Hydrogen has no <code>[X]</code>, making its peak
            0.75. For helium, 0.75 plus the impact of one <code>[X]</code>{' '}
            results in 1.5. For lithium, it becomes 2.25 with the impact of two{' '}
            <code>[X]</code>. Let's follow Occam's razor, which suggests that
            the simpler explanation is more likely to be true. If illustrated,
            it would look like the following.
        </p>

        <div className="align__center">
            <img src={pic42} alt="Prediction of Vertical Shifts" />
            <p>
                <strong>Prediction of Vertical Shifts</strong>
            </p>
        </div>

        <div className="align__center">
            <img
                src={pic65}
                alt="Result of Shifting Lithium's points by the Hypothesis"
            />
            <p>
                <strong>
                    Result of Shifting Lithium's points by the Hypothesis
                </strong>{' '}
                Isn't this beautiful?
            </p>
        </div>

        <p>
            The ground state of lithium is <code>[X]2[O]</code>. The last{' '}
            <code>[O]</code> cannot be <code>[X]</code> due to the Pauli
            exclusion principle in the filling of multi-electron atoms.
            Therefore, the ground state of lithium can be considered as if the
            x-axis itself has shifted upward to the ground state. This
            demonstrates that the Rydberg formula can still be applicable even
            in this case.
        </p>

        <h3>
            <a href="/ether/4+1+1/graph" target="_blank" rel="noreferrer">
                Beryllium
            </a>
        </h3>

        <Row>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic108}
                        alt="Changes in the Beryllium Orbital Values"
                    />
                    <p>
                        <strong>
                            Changes in the Beryllium Orbital Values <sup>1</sup>
                            S<sub>0</sub>
                        </strong>
                    </p>
                </div>
            </Column>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic109}
                        alt="Changes in the Beryllium Ether Values"
                    />
                    <p>
                        <strong>
                            Changes in the Beryllium Ether Values <sup>1</sup>S
                            <sub>0</sub>
                        </strong>
                    </p>
                </div>
            </Column>
        </Row>

        <p>
            Beryllium is also beautiful. Let's tell a slightly different story
            than lithium. Can we also shift the graph for beryllium 'as it
            originally was' like lithium? The answer is 'possible, but
            challenging.'
        </p>

        <p>
            The ground state of beryllium is <code>[X]2[O]2</code>. Two circular
            orbitals are involved. Let's assume that the vertical shift due to{' '}
            <code>[X]</code> is the same as lithium. However, what impact do the
            two <code>[O]</code> have? To infer this, we can look at the case
            where there are two ethers in helium and lithium.
        </p>

        <p>
            For helium, the eV value of <code>[X][O]</code> is 20.6157751334,
            and the peak is at 24.58732518. However, <code>[O][-]</code> is as
            high as 58.311. The same pattern exists for lithium. The value for
            the next state after the ground state, <code>[X]2[OO]</code>, is
            3.373129, but
            <code>[X][O][-]</code> is 57.469. When two ethers are present, the
            values skyrocket. Therefore, understanding the vertical shift caused
            by two
            <code>[X]</code> and the vertical shift caused by two{' '}
            <code>[O]</code> is necessary to determine the ground state of
            beryllium.
        </p>

        <Row>
            <Column small={4}></Column>
            <Column small={3}>
                <div className="align__center">
                    <img src={pic86} alt="Energy Distribution of Lithium" />
                </div>
            </Column>
        </Row>

        <div className="align__center">
            <p>
                <strong>Energy Distribution of Lithium</strong> To decipher
                beryllium, one must understand the rules of the constellations
                above
            </p>
        </div>

        <p>
            States beyond beryllium would require further exploration to
            unravel. However, what I want to emphasize here is the prediction
            that it will also be based on the Rydberg formula. Why? Because the
            graph of beryllium is also beautiful.
        </p>

        <h3>
            <a href="/ether/11+1+1/graph" target="_blank" rel="noreferrer">
                Sodium
            </a>
        </h3>

        <p>
            Finally, let's look at sodium. As mentioned earlier, it is very
            challenging for non-experts to accurately classify values up to neon
            due to their limitations. However, looking at the approximate shape
            of{' '}
            <a href="/ether/8+1+1/graph" target="_blank" rel="noreferrer">
                oxygen
            </a>
            , I expect that everything else will also show a pattern as long as
            the values are correctly arranged.
        </p>

        <p>
            Interestingly, after beryllium, the atom where the pattern becomes
            clear is sodium. It is a friend in the same group as hydrogen on the{' '}
            <a
                href="</a>https://www.google.com/search?q=periodic+table"
                target="_blank"
                rel="noreferrer"
            >
                periodic table
            </a>
            . It is a friend with a similar structure where orbitals are
            initially arranged in a circular shape in the shell.
        </p>

        <Row>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic110}
                        alt="Changes in the Sodium Orbital Values"
                    />
                    <p>
                        <strong>
                            Changes in the Sodium Orbital Values <sup>2</sup>S
                            <sub>1/2</sub>
                        </strong>
                    </p>
                </div>
            </Column>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic111}
                        alt="Changes in the Sodium Ether Values"
                    />
                    <p>
                        <strong>
                            Changes in the Sodium Ether Values <sup>2</sup>S
                            <sub>1/2</sub>
                        </strong>
                    </p>
                </div>
            </Column>
        </Row>

        <hr />

        <Row className="hide-for-medium hide-for-large">
            <Column>
                <ul>
                    <li>
                        Prev:
                        <Link
                            to="/multi-electron-atoms"
                            onClick={() => scrollTo('', false)}
                        >
                            Proof(2): Reinterpretation of Rydberg Formula
                        </Link>
                    </li>
                    <li>
                        Next:
                        <Link to="/between" onClick={() => scrollTo('', false)}>
                            Proof(4): Between Comparison
                        </Link>
                    </li>
                </ul>
            </Column>
        </Row>
    </Doc>
)
