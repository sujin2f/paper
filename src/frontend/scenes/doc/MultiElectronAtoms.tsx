import React from 'react'
import Latex from 'react-latex'
import { Doc } from 'src/frontend/scenes/doc'

import pic9 from 'src/assets/images/doc/pic9.png'
import pic10 from 'src/assets/images/doc/pic10.png'
import pic11 from 'src/assets/images/doc/pic11_eng.png'
import pic16 from 'src/assets/images/doc/pic16.png'
import pic17 from 'src/assets/images/doc/pic17.png'
import pic18 from 'src/assets/images/doc/pic18.png'
import pic19 from 'src/assets/images/doc/pic19.png'
import pic20 from 'src/assets/images/doc/pic20.png'
import pic21 from 'src/assets/images/doc/pic21.png'
import pic22 from 'src/assets/images/doc/pic22.png'
import pic23 from 'src/assets/images/doc/pic23.png'
import pic24 from 'src/assets/images/doc/pic24.png'

export const MultiElectronAtoms = (): JSX.Element => (
    <Doc>
        <h2 id="multi-electron-atoms">Proof(2): Multi-Electron Atoms</h2>

        <p>
            So far, I tried to prove the hypothesis from the Bohr model.
            However, the Bohr model is not accurate anymore. In quantum physics,
            an electron creates an orbital shape as a result of absorbing
            energy. The ether is not a radial shape anymore.
        </p>

        <div className="align__center">
            <img src={pic9} alt="Atomic Orbital" />
            <p>
                <strong>Atomic Orbital</strong>{' '}
                <a
                    href="https://en.wikipedia.org/wiki/Atomic_orbital"
                    target="_blank"
                    rel="noreferrer"
                >
                    From : Wikipedia
                </a>
            </p>
        </div>

        <p>
            The shape of the orbital is determined by quantum numbers n, l, and
            m<sub>l</sub>. The electron's energy, n, increases the number of the
            node. The angular momentum, l, changes the shape of the node to
            linear. Let me ignore the magnetic quantum number, m<sub>l</sub>,
            which changes the angle of the orbital.
        </p>
        <p>
            The s orbital is an orbital that only has radial nodes. When there
            is no node, it is s1, and s2 has one radial node. The p orbital has
            one linear node. One linear node is p2, and one linear and one
            radial node is p3. Under this rule, scientists named d, f, and g
            orbital based on how many linear nodes the orbital has.
        </p>

        <div className="align__center">
            <img src={pic10} alt="The Orbital with the Hypothesis" />
            <p>
                <strong>The Orbital with the Hypothesis</strong>
                <br />
                The combination of radial and linear ethers
            </p>
        </div>

        <p>
            We can translate the node into the ether. Increasing n increases the
            number of ethers, and increasing l changes the shape of the ether.
            The s orbital only has radial ethers, and the p orbital has one
            linear ether. The s1 orbital means the electron does not have any
            ether, and p3 orbital has one radial and one linear ether.
        </p>

        <p>
            The orbital has been understood to change the shape of an electron.
            Under my hypothesis, the electron is not changed, but its space is
            separated by the photon-ether likewise it is separated by the
            double-slit. If so, the electron-sparkle travels through the
            separated electron-ether, which is divided by the photon-ether, and
            the existence of the electron-sparkle exists in probability. This is
            what orbital is.
        </p>

        <p>
            To be clear, I want to suggest the notation. The p3 is{' '}
            <strong>[-O]</strong>, and <strong>[--O]</strong> is d4. Too many
            ethers like <strong>[--OOOOO]</strong> can be written in{' '}
            <strong>[2-5O]</strong> for your readability. The data below is from{' '}
            <a
                href="https://physics.nist.gov/PhysRefData/ASD/lines_form.html"
                target="_blank"
                rel="noreferrer"
            >
                NIST
            </a>
            . The configuration is from the same set which just changed l value
            (1S/J=0, 1P/J=1, 1D/J=2...) I built the website to visualize the
            data{' '}
            <a
                href="https://ether.sujinc.com/orbital/1+1/graph/percent"
                target="_blank"
                rel="noreferrer"
            >
                here
            </a>
            . The correction value is what the formula satisfied.
        </p>

        <Latex
            displayMode={true}
        >{`$$Diff = (\\frac{1}{n+c})^2 - (\\frac{1}{n+1+c})^2$$`}</Latex>

        <h3>Hydrogen: Singular Electron</h3>

        <p>
            The hydrogen shows the exact, calculable values. The reason I
            mention the hydrogen is to check the accuracy of NIST data and to
            reveal what should be focused on in other atoms.
        </p>

        <div className="align__center">
            <img src={pic16} alt="Hydrogen Atom" />
            <p>
                <strong>
                    <a
                        href="https://ether.sujinc.com/orbital/1+1/graph/percent"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Hydrogen Atom
                    </a>
                </strong>
                <br />
                Simple as Classic Physics
            </p>
        </div>

        <p>
            NIST data is from various observations, and the values are the same,
            so it is extremely accurate. As we already know, the value meets N
            <sub>th</sub>(n), but we still can see the small differences.
        </p>

        <p>
            The first-row set <strong>s orbital</strong> is what we should focus
            on. This set shows <strong>an increment of radial ether</strong>.
            The <strong>diagonal set of top left to bottom right from p</strong>{' '}
            is also important. The first diagonal set is{' '}
            <strong>the increment of linear ether</strong>. From the second set,
            they represent a{' '}
            <strong>similar set of increments of radial ether</strong>. For
            example, p4 is <strong>[-O]</strong> to <strong>[-OO]</strong>, and
            p5 is <strong>[--O]</strong> to <strong>[--OO]</strong>. So, every
            orbital should have the same tendency because it is all about radial
            ether increment. In the other words,{' '}
            <strong>
                the diagonal sets and linear; and s orbital and the other
                orbitals should have a similar tendency
            </strong>{' '}
            because they are the same increments.
        </p>

        <p>
            Let us go back to the graph. The s orbital goes up and keeps down.
            Linear ether comes from top-left to bottom-right as the
            <Latex>{`$y=\\dfrac{a}{x}$`}</Latex> graph goes. Other orbitals,
            well..., not quite organized, and also not quite matched to the s
            orbital changes. This is a pretty graph, but I cannot say it is
            satisfactory. According to the hypothesis, s, p, and d orbitals are
            the increment of radial ether, but the tendencies are different.
        </p>

        <h3>Helium: Multi-Electron Atom (two electrons)</h3>

        <p>
            The energy of the multi-electron atom is not constant like a
            hydrogen atom. Scientists say this is because of the influence of
            other electrons. Nevertheless, to prove the ether-sparkle
            hypothesis, it should have a tendency even though it is not as
            simple as N<sub>th</sub>(n). Let me check the helium, which shows
            the variety of orbital. And its result is{' '}
            <strong>very disappointing</strong>.
        </p>

        <div className="align__center">
            <img src={pic17} alt="Helium Atom" />
            <p>
                <strong>
                    <a
                        href="https://ether.sujinc.com/orbital/2+1/graph/percent"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Helium Atom
                    </a>
                </strong>
                <br />
                Too irregular & huge failure
            </p>
        </div>

        <p>
            The first positions of s, p, and linear orbital are high Rydberg of
            approximately 100%p. The d and f orbitals are higher than N
            <sub>th</sub>(n), and others are lower. By increasing the position,
            it tends to close to N<sub>th</sub>(n), but the diagonal changes are
            not matched to each other. Moreover, it is not convincing why the
            changes of two and three linear ether, d and f, are different from
            other changes. The table is too irregular. There is no tendency. End
            of the story. Bye.
        </p>

        <p>What if the way we think is wrong?</p>

        <p>
            Let me recheck the 3p orbital. It should be different between [O-]
            and [-O] because the radial and linear ether affect differently in
            different positions. [-] is 107.933, and [O] is 102.031, so [-O]
            should not be the same as [O-]. However, the 3p value from NIST is
            always the same. Therefore, only one case is right.
        </p>

        <p>
            When I constructed the table, I accepted the s and p orbital which
            is linear ether first. What if it is the opposite? What if the
            radial ether first, and then the linear ether comes above the radial
            ether?
        </p>

        <div className="align__center">
            <img src={pic18} alt="Radial Ether First!!" />
            <p>
                <strong>
                    <a
                        href="https://ether.sujinc.com/ether/2+1/graph/percent"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Radial Ether First!!
                    </a>
                </strong>
            </p>
        </div>

        <p>
            See, human? See this beautiful tendency! Each row shows the
            increment of linear ethers. So, we need to compare other rows with
            linear ether. They go down and close to the N<sub>th</sub>
            (n).
        </p>

        <p>My excitement makes me draw the diagonal table for you.</p>

        <div className="table-scroll">
            <table className="unstriped">
                <thead>
                    <tr>
                        <th>digit</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>first linear %p</th>
                        <td>107.933</td>
                        <td>30.776</td>
                        <td>24.247</td>
                        <td>21.593</td>
                        <td>20.143</td>
                        <td>19.228</td>
                        <td>18.597</td>
                        <td>18.136</td>
                        <td>17.784</td>
                    </tr>
                    <tr>
                        <th>second linear %p</th>
                        <td></td>
                        <td>-1.780</td>
                        <td>-1.825</td>
                        <td>-1.762</td>
                        <td>-1.709</td>
                        <td>-1.670</td>
                        <td>-1.639</td>
                        <td>-1.616</td>
                        <td>-1.597</td>
                    </tr>
                    <tr>
                        <th>third linear %p</th>
                        <td></td>
                        <td></td>
                        <td>0.234</td>
                        <td>0.226</td>
                        <td>0.217</td>
                        <td>0.209</td>
                        <td>0.202</td>
                        <td>0.197</td>
                        <td>0.193</td>
                    </tr>
                    <tr>
                        <th>fourth linear %p</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>0.026</td>
                        <td>0.027</td>
                        <td>0.027</td>
                        <td>0.026</td>
                        <td>0.026</td>
                        <td>0.025</td>
                    </tr>
                    <tr>
                        <th>fifth linear %p</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>-0.004</td>
                        <td>-0.004</td>
                        <td>-0.004</td>
                        <td>-0.004</td>
                        <td>-0.004</td>
                    </tr>
                    <tr>
                        <th>sixth linear %p</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>-0.011</td>
                        <td>-0.011</td>
                        <td>-0.011</td>
                        <td>-0.011</td>
                    </tr>
                    <tr>
                        <th>seventh linear %p</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>-0.013</td>
                        <td>-0.013</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>
            The first linear ether has a high Rydberg vale, the second is minus,
            and from the third, it converges to N<sub>th</sub>(n). It seems to
            be possible to make functions, and the overall Rydberg would be
            calculated.
        </p>

        <p>
            On the other hand, it has a rule, and I can say the condition of the
            ether-sparkle hypothesis is compromised.
        </p>

        <p>
            It explains how the radial ether increased and how the linear ether
            was added above the radial ether. The orbital is not an electron
            shape. The node is photon-ether, and the orbital is electron ether,
            divided by the photon-ether.
        </p>

        <p>
            The table above is the percentage point. The Rydberg of the position
            is in the table below. Now I changed the digit from 1 because we do
            not need s1 which means no ether.
        </p>

        <div className="table-scroll">
            <table className="unstriped">
                <thead>
                    <tr>
                        <th>digit</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>radial</th>
                        <td>1.515</td>
                        <td>0.169</td>
                        <td>0.055</td>
                        <td>0.025</td>
                        <td>0.013</td>
                        <td>0.008</td>
                        <td>0.005</td>
                        <td>0.003</td>
                        <td>0.002</td>
                    </tr>
                    <tr>
                        <th>1st linear</th>
                        <td>1.559</td>
                        <td>0.182</td>
                        <td>0.060</td>
                        <td>0.027</td>
                        <td>0.015</td>
                        <td>0.009</td>
                        <td>0.006</td>
                        <td>0.004</td>
                        <td>0.003</td>
                    </tr>
                    <tr>
                        <th>2nd linear</th>
                        <td></td>
                        <td>0.136</td>
                        <td>0.048</td>
                        <td>0.022</td>
                        <td>0.012</td>
                        <td>0.007</td>
                        <td>0.005</td>
                        <td>0.003</td>
                        <td>0.002</td>
                    </tr>
                    <tr>
                        <th>3rd linear</th>
                        <td></td>
                        <td></td>
                        <td>0.049</td>
                        <td>0.023</td>
                        <td>0.012</td>
                        <td>0.007</td>
                        <td>0.005</td>
                        <td>0.003</td>
                        <td>0.002</td>
                    </tr>
                    <tr>
                        <th>4th linear</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>0.023</td>
                        <td>0.012</td>
                        <td>0.007</td>
                        <td>0.005</td>
                        <td>0.003</td>
                        <td>0.002</td>
                    </tr>
                    <tr>
                        <th>5th linear</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>0.012</td>
                        <td>0.007</td>
                        <td>0.005</td>
                        <td>0.003</td>
                        <td>0.002</td>
                    </tr>
                    <tr>
                        <th>6th linear</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>0.007</td>
                        <td>0.005</td>
                        <td>0.003</td>
                        <td>0.002</td>
                    </tr>
                    <tr>
                        <th>7th linear</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>0.005</td>
                        <td>0.003</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="align__center">
            <img src={pic11} alt="The Ether [OO--] of Helium" />
            <p>
                <strong>The Ether [OO--] of Helium</strong>
                <br />
                The value seems to be calculated, and we can get the Rydberg by
                summing the value.
                <br />
                The values are from radial 1 to →→↘︎↘︎ order.
            </p>
        </div>

        <p>
            This tendency can be observed in other atoms like lithium,
            beryllium, boron, and neon. It is also on the same site as{' '}
            <a
                href="https://ether.sujinc.com/ether/10+1/graph/percent"
                target="_blank"
                rel="noreferrer"
            >
                Neon
            </a>
        </p>

        <h3>Radial Ethers</h3>

        <p>
            The set below is a set of radial ether changes from helium to
            magnesium. I assure you it is possible to find the rule or function
            with atom number, term, and J value.
        </p>

        <div className="align__center">
            <img src={pic19} alt="% Values of Radial Ethers" />
            <p>
                <strong>
                    <a
                        href="https://ether.sujinc.com/saved-data/639ccf1ad649ed64672f6a67/graph/percent"
                        target="_blank"
                        rel="noreferrer"
                    >
                        % Values of Radial Ethers
                    </a>
                </strong>
            </p>
        </div>

        <div className="align__center">
            <img src={pic20} alt="Correction Values of Radial Ethers" />
            <p>
                <strong>
                    <a
                        href="https://ether.sujinc.com/saved-data/639ccf1ad649ed64672f6a67/graph/correction"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Correction Values of Radial Ethers
                    </a>
                </strong>
            </p>
        </div>

        <p>
            Under -1 correction value means the changing digit of N<sub>th</sub>
            (n). It would be possible to figure out the rule of stacking radial
            ethers per atomic number.
        </p>

        <h3>Tendency of other ethers</h3>

        <p>
            I mentioned the tendency, so I will serve you graphs of them. Please
            watch the similar tendency in the hydrogen whose error is too small.
        </p>

        <div className="align__center">
            <img src={pic21} alt="Hydrogen" />
            <p>
                <strong>
                    <a
                        href="https://ether.sujinc.com/ether/1+1/graph/percent"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Hydrogen
                    </a>
                </strong>
            </p>
        </div>

        <div className="align__center">
            <img src={pic22} alt="Helium" />
            <p>
                <strong>
                    <a
                        href="https://ether.sujinc.com/ether/2+1/graph/percent"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Helium
                    </a>
                </strong>
            </p>
        </div>

        <div className="align__center">
            <img src={pic23} alt="Lithium" />
            <p>
                <strong>
                    <a
                        href="https://ether.sujinc.com/ether/3+1/graph/percent"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Lithium
                    </a>
                </strong>
            </p>
        </div>

        <div className="align__center">
            <img src={pic24} alt="Beryllium" />
            <p>
                <strong>
                    <a
                        href="https://ether.sujinc.com/ether/4+1/graph/percent"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Beryllium
                    </a>
                </strong>
            </p>
        </div>

        <h3>Limit</h3>
        <p>
            Unfortunately, there are enough atoms that have enough linear
            ethers. I need to analyze more data or create a possible equation
            from helium.
        </p>
    </Doc>
)
