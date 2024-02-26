import React from 'react'
import { Link } from 'react-router-dom'

import { scrollTo } from 'src/common/utils/device'
import { Row } from 'src/common/components/layout/Row'
import { Column } from 'src/common/components/layout/Column'

import { Doc } from 'src/frontend/scenes/doc'
import { Latex } from 'src/frontend/components/document/latex'

import pic5 from 'src/assets/images/doc/pic5_eng.png'

export const ClassicPhysics = (): JSX.Element => {
    return (
        <Doc>
            <h2 id="classic-physics">Proof(1): Classic Physics</h2>
            <h3>
                The emitted wavelengths of the Photon-Ether based on Bohr's
                atomic model
            </h3>

            <p>
                The wavelengths emitted by the electron can be determined using
                the Rydberg formula. Below is a summary of the Rydberg formula
                and the emitted wavelengths in the Lyman series, where n
                decreases from <Latex>n \geq 2</Latex> to <Latex>n = 1</Latex>,
                and the Paschen series, where the transition changes from{' '}
                <Latex>n \geq 4</Latex> to <Latex>n = 3</Latex>.
            </p>

            <div className="align__center">
                <Latex
                    displayMode={true}
                >{`\\dfrac{1}{\\lambda} = R(\\dfrac{1}{m^2} - \\dfrac{1}{n^2}) \\hspace{10pt} \\{ R=1.0973731568539 \\times 10^7 m^{-1} \\}`}</Latex>
                <p>
                    <strong>Rydberg Formula</strong>: how did you figure it out,
                    sir?
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
                <strong>Wavelength of the Lyman Series</strong>
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
                <strong>Wavelength of the Paschen Series</strong>
            </p>

            <p>
                At first glance, it may seem that there is a decreasing pattern
                within the same series, but it is difficult to determine how the
                values change between different series. It is challenging to
                infer the transition from 4 to 3 using only the values in the
                Lyman series. We desire a consistent value for the spacing
                between n shells, so wavelengths are not suitable. However, if
                we express the wavelengths in terms of their reciprocals, called
                wave numbers, it can be represented as follows:
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
                <strong>Wave Number of Lyman Series</strong>
            </p>

            <p>
                Let's focus on the gaps between the wave numbers. In other
                words, we will examine the values when transitioning from 2 to 1
                and from 4 to 3.
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
                <strong>Wave Number Differences of the Lyman Series</strong>
            </p>

            <div className="table-scroll">
                <table className="unstriped">
                    <thead>
                        <tr>
                            <th>n</th>
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
                            <td>2,469.08</td>
                            <td>1,341.23</td>
                            <td>808.72</td>
                            <td>524.89</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="align__center">
                <strong>Wave Number Differences of the Paschen Series</strong>
            </p>

            <p>
                The difference in wave numbers is the same for both series. This
                supports the hypothesis that a specific energy is conserved in
                the space between the n shells in the form of Ether. Each
                corresponding Photon-Ether between the shells has a constant
                energy, and it can be interpreted as being converted into
                exactly that amount of Photon-Sparkle and emitted. Now, the
                absorption and emission of energy have been combined as
                additions.
            </p>

            <h3>Emission Energy of Photon-Ether</h3>

            <p>
                If photon-Ether has a constant wavelength, we can determine its
                energy. The energy of light can be calculated using the formula
                <Latex>E = hc / λ</Latex>, where λ represents the previously
                calculated wavelength. The value obtained has units of Joules
                (J). Converting this energy value to electron volts (eV) yields
                the following formula, and organizing it results in the table
                below.
            </p>

            <div className="align__center">
                <Latex
                    displayMode={true}
                >{`E = Rhc(\\dfrac{1}{(n - 1)^2} - \\dfrac{1}{n^2})\\cdot6.242\\cdot10^{32}`}</Latex>
                <p>
                    Since the Rydberg constant, Planck's constant, and the speed
                    of light are all constants,
                </p>
                <Latex
                    displayMode={true}
                >{`E = 1.0973731568539 \\cdot 10^{-7} \\cdot 6.62607015 \\cdot 10^{-34} \\cdot 299792458 \\cdot (\\dfrac{1}{(n - 1)^2} - \\dfrac{1}{n^2}) \\cdot 6.242 \\cdot 10^{32}`}</Latex>
                <Latex
                    displayMode={true}
                >{`E = 13.60676328 \\cdot (\\dfrac{1}{(n - 1)^2} - \\dfrac{1}{n^2})`}</Latex>

                <p>
                    <strong>
                        The formula for calculating energy (in electron volts,
                        eV) using the Rydberg formula
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
                <strong>Result Energy from the Formula</strong>
            </p>

            <p>
                In the Bohr atomic model and the Schrödinger equation for the
                hydrogen atom, the energy of the nth shell satisfies the
                following equation:
            </p>

            <p className="align__center">
                <Latex
                    displayMode={true}
                >{`E_n = -\\frac{ℏ^2}{2 \\mu a_0 ^ 2} \\frac{1}{n^2}`}</Latex>
            </p>

            <p>
                By substituting <Latex>{`\\dfrac{1}{n^2}`}</Latex> with{' '}
                <Latex>{`(\\dfrac{1}{(n - 1)^2} - \\dfrac{1}{n^2})`}</Latex> and
                J with eV, we can observe that the obtained expression closely
                matches the one derived earlier.
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
                <img src={pic5} alt="Rydberg of Photon-Ether" />
                <p>
                    <strong>Rydberg of Photon-Ether</strong>
                    <br />
                    simple plus calculation
                </p>
            </div>

            <p>
                As seen in the diagram, we can now easily determine the energy
                possessed by the ether through addition. We are now able to
                calculate energy, wavelength, and even mass.
            </p>

            <h3>Summary</h3>

            <p>
                Everything discussed here is quite obvious. It's basic knowledge
                that can be found in any classical physics textbook. These
                concepts were already well-established during Niels Bohr's time,
                specifically in the context of hydrogen atoms. However, they do
                not hold true for multi-electron atoms. You have been deceived.
                Haha!
            </p>
            <p>
                What I am looking for here is to present the conditions under
                which the ether-spark hypothesis can be convincing.
            </p>

            <ul>
                <li>
                    Firstly, the energy possessed by the ether should be{' '}
                    <strong>predictable</strong>.
                </li>
                <li>
                    Secondly, the energy possessed by the ether should be
                    obtainable through <strong>addition</strong>.
                </li>
                <li>
                    Thirdly, these conditions should hold true even for{' '}
                    <strong>multi-electron atoms</strong>.
                </li>
            </ul>
            <p>
                If these conditions are satisfied, it would be possible to
                demonstrate that energy is stored in the form of ether. In the
                next section, we will delve into multi-electron atoms.
            </p>

            <hr />

            <Row className="hide-for-medium hide-for-large">
                <Column>
                    <ul>
                        <li>
                            Prev:
                            <Link to="/hypothesis" onClick={() => scrollTo()}>
                                Hypothesis
                            </Link>
                        </li>
                        <li>
                            Next:
                            <Link
                                to="/multi-electron-atoms"
                                onClick={() => scrollTo()}
                            >
                                Proof(2): Reinterpretation of Rydberg Formula
                            </Link>
                        </li>
                    </ul>
                </Column>
            </Row>
        </Doc>
    )
}
