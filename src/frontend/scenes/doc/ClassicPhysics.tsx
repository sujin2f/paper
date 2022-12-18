import React, { Fragment } from 'react'
import Latex from 'react-latex'

import pic5 from 'src/assets/images/doc/pic5.png'

export const ClassicPhysics = (): JSX.Element => {
    return (
        <Fragment>
            <h2 id="classic-physics">Proof(1): Classic Physics</h2>
            <h3>The Emission Wavelength of Photon-Ether from the Bohr Model</h3>

            <p>
                Rydberg formula is the solution to calculate the wavelength from
                an electron. The next ones are the Rydberg formula and tables of
                the Lyman series, emission wavelengths from{' '}
                <Latex>$n \geq 2$</Latex> to <Latex>$n = 1$</Latex>, and the
                Paschen series, emission wavelengths from{' '}
                <Latex>$n \geq 4$</Latex> to <Latex>$n = 3$</Latex>.
            </p>

            <div className="align__center">
                <Latex
                    displayMode={true}
                >{`$$\\dfrac{1}{\\lambda} = R(\\dfrac{1}{m^2} - \\dfrac{1}{n^2}) \\hspace{10pt} \\{ R=1.0974 \\times 10^7 m^2 \\}$$`}</Latex>
                <p>
                    <strong>Rydberg Formula</strong>: how did you figure it out,
                    sir?
                </p>
            </div>

            <table>
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
                        <th>Wavelength (nm)</th>
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
            <p className="align__center">
                <strong>the Lyman Series</strong>
            </p>

            <table>
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
                        <th>Wavelength (nm)</th>
                        <td>1,874.60</td>
                        <td>1,281.46</td>
                        <td>1,093.52</td>
                        <td>1,004.67</td>
                        <td>954.34</td>
                    </tr>
                </tbody>
            </table>
            <p className="align__center">
                <strong>the Paschen Series</strong>
            </p>

            <p>
                It tends to have rules, but there is no rule between series. For
                example, the emissions from four to three are different. What I
                assume is there is a certain amount of energy between the same
                orbit, so these tables are not matched my assumption. Here's the
                reciprocal of a fraction, a wave number.
            </p>

            <table>
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
                            Wave Number <Latex>{`$cm^{-1}$`}</Latex>
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
            <p className="align__center">
                <strong>Wave Number of Lyman Series</strong>
            </p>

            <p>
                The following tables are differences between the orbit number,
                which means from two to one, from three to two, etc.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>n</th>
                        <th>
                            <Latex>$3 \to 2$</Latex>
                        </th>
                        <th>
                            <Latex>$4 \to 3$</Latex>
                        </th>
                        <th>
                            <Latex>$5 \to 4$</Latex>
                        </th>
                        <th>
                            <Latex>$6 \to 5$</Latex>
                        </th>
                        <th>
                            <Latex>$7 \to 6$</Latex>
                        </th>
                        <th>
                            <Latex>$8 \to 7$</Latex>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            Wave Number Differences <Latex>{`$cm^{-1}$`}</Latex>
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
            <p className="align__center">
                <strong>Wave Number Differences of the Lyman Series</strong>
            </p>

            <table>
                <thead>
                    <tr>
                        <th>n</th>
                        <th>
                            <Latex>$5 \to 4$</Latex>
                        </th>
                        <th>
                            <Latex>$6 \to 5$</Latex>
                        </th>
                        <th>
                            <Latex>$7 \to 6$</Latex>
                        </th>
                        <th>
                            <Latex>$8 \to 7$</Latex>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            Wave Number Differences <Latex>{`$cm^{-1}$`}</Latex>
                        </th>
                        <td>2,469.08</td>
                        <td>1,341.23</td>
                        <td>808.72</td>
                        <td>524.89</td>
                    </tr>
                </tbody>
            </table>
            <p className="align__center">
                <strong>Wave Number Differences of the Paschen Series</strong>
            </p>

            <p>
                They match together. This result supports the exact amount of
                energy stored in between the orbits. Now, the calculation of
                electron energy is just an adding equation.
            </p>

            <h3>Energy of Photon-Ether</h3>

            <p>
                If the wavelength between the orbit is always the same, we can
                calculate its energy. <Latex>$E = hc / λ$</Latex> is an energy
                formula, and λ is a wavelength. The resulting unit is J, and
                converting to eV is in the table below. I declare a function
                <Latex>{`$\\dfrac{1}{n - 1}^2 - \\dfrac{1}{n}^2$`}</Latex>
                as <Latex>{`$N_{th}(n)$`}</Latex>, and this function will be
                used in this document again and again.
            </p>

            <div className="align__center">
                <Latex
                    displayMode={true}
                >{`$$N_{th}(n) = \\dfrac{1}{(n-1)^2} - \\dfrac{1}{n^2}$$`}</Latex>
                <p>
                    <strong>
                        <Latex>{`$N_{th}(n)$`}</Latex>
                    </strong>
                </p>
                <Latex
                    displayMode={true}
                >{`$$E = Rhc(N_{th}(n))\\cdot6.242\\cdot10^{32}$$`}</Latex>
                <p>
                    <strong>Energy Formula from Wavelength</strong>
                </p>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>n</th>
                        <th>
                            <Latex>$2 \to 1$</Latex>
                        </th>
                        <th>
                            <Latex>$3 \to 2$</Latex>
                        </th>
                        <th>
                            <Latex>$4 \to 3$</Latex>
                        </th>
                        <th>
                            <Latex>$5 \to 4$</Latex>
                        </th>
                        <th>
                            <Latex>$6 \to 5$</Latex>
                        </th>
                        <th>
                            <Latex>$7 \to 6$</Latex>
                        </th>
                        <th>
                            <Latex>$8 \to 7$</Latex>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>E (eV)</th>
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
            <p className="align__center">
                <strong>Result from the formula</strong>
            </p>

            <p>
                From the Bohr model and Schrödinger equation, the energy of n
                shell is:
            </p>

            <Latex
                displayMode={true}
            >{`$$E_n = -\\frac{ℏ^2}{2 \\mu a_0 ^ 2} \\frac{1}{n^2}$$`}</Latex>

            <p>
                I swap <Latex>{`$\dfrac{1}{n^2}$`}</Latex> to{' '}
                <Latex>{`$N_{th}(n)$`}</Latex> and convert J to eV. The values
                are similar to the table above.
            </p>

            <Latex
                displayMode={true}
            >{`$$E_{th}(n) = \\frac{ℏ^2}{2 \\mu a_0 ^ 2}N_{th}(n) \\hspace{10pt} { n \\geqq 2 }$$`}</Latex>

            <table>
                <thead>
                    <tr>
                        <th>n</th>
                        <th>
                            <Latex>$2 \to 1$</Latex>
                        </th>
                        <th>
                            <Latex>$3 \to 2$</Latex>
                        </th>
                        <th>
                            <Latex>$4 \to 3$</Latex>
                        </th>
                        <th>
                            <Latex>$5 \to 4$</Latex>
                        </th>
                        <th>
                            <Latex>$6 \to 5$</Latex>
                        </th>
                        <th>
                            <Latex>$7 \to 6$</Latex>
                        </th>
                        <th>
                            <Latex>$8 \to 7$</Latex>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1st values `eV`</th>
                        <td>10.2050</td>
                        <td>1.8898</td>
                        <td>0.6614</td>
                        <td>0.3061</td>
                        <td>0.1663</td>
                        <td>0.1002</td>
                        <td>0.0650</td>
                    </tr>
                    <tr>
                        <th>2nd values `eV`</th>
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
            <img src={pic5} alt="Rydberg of Photon-Ether" />
            <p>
                <strong>Rydberg of Photon-Ether</strong>
                <br />
                simple plus calculation
            </p>
            <p>
                As you can see, we can get the energy of ether by the plus
                calculation. Also, wavelength and mass would be able to
                calculate.
            </p>
            <p>
                Two formulas has N<sub>th</sub>(n) as only variable. Therefore
                the value is changed by the part of N<sub>th</sub>(n). It is
                called <strong>Rydberg</strong> as a unit.
            </p>

            <h3>Recap</h3>
            <p>
                So far, it is obvious. It is all from a classic physics
                textbook. It is right in the hydrogen-like atom in the Bohr era,
                a century ago. However, it does not match multi-electron atoms.
                I made y'all fool.
            </p>
            <p>
                I want to suggest conditions that make the ether-sparkle
                hypothesis would be right.
            </p>

            <ul>
                <li>
                    First, the ether energy should be{' '}
                    <strong>possible to guess</strong>
                </li>
                <li>
                    Second, the ether energy should be <strong>summed</strong>
                </li>
                <li>
                    Third, the two conditions above should be established in{' '}
                    <strong>multi-electron atoms</strong>
                </li>
            </ul>
            <p>
                If it passes the conditions, I may prove the electron energy is
                stored as a form of ether. The next chapter is about
                multi-electron atoms.
            </p>
        </Fragment>
    )
}
