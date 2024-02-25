import React from 'react'
import Latex from 'react-latex'
import { Doc } from 'src/frontend/scenes/doc'
import { Row } from 'src/common/components/layout/Row'
import { Column } from 'src/common/components/layout/Column'

import pic58 from 'src/assets/images/doc/pic58.png'
import pic114 from 'src/assets/images/doc/pic114.png'
import pic115 from 'src/assets/images/doc/pic115.png'
import pic116 from 'src/assets/images/doc/pic116.png'
import pic117 from 'src/assets/images/doc/pic117.png'
import pic118 from 'src/assets/images/doc/pic118.png'
import pic119 from 'src/assets/images/doc/pic119.png'
import pic120 from 'src/assets/images/doc/pic120.png'
import pic121 from 'src/assets/images/doc/pic121.png'
import pic122 from 'src/assets/images/doc/pic122.png'
import pic123 from 'src/assets/images/doc/pic123.png'

export const Between = (): JSX.Element => (
    <Doc>
        <h2 id="between">Proof(4): Between Comparison</h2>

        <p>
            It raises a question: Is it really appropriate to shift the changes
            in circular ether towards the s orbital side and the rest towards
            the p orbital side for comparison? Could combining changes involving
            linear ether reveal their own patterns? Perhaps a more objective
            comparison is needed. Let's revisit the arrangement of values in
            helium.
        </p>

        <div className="align__center">
            <img src={pic58} alt="s and p Orbital of Helium" />
            <p>
                <strong>s and p Orbital of Helium</strong>
            </p>
        </div>

        <p>
            In the previous section, we shifted the graph of s orbitals, which
            only have circular ether, to one reference point and moved the rest,
            with linear ether, towards the p orbital side. The new criterion to
            be proposed is to create coordinates from these two shifted graphs.
            By considering the graph shifted with <code>[O]</code> as 0 and the
            graph shifted with <code>[-]</code> as 100, the positions of the
            points will be marked. This approach allows aligning all points with
            a single criterion. Let's call this method "Between," and the
            previous one will be referred to as "Transform."
        </p>

        <div className="align__center">
            <Latex
                displayMode={true}
            >{`$$(R_{p}(x) - R_{p}(x-1)) - (R_{s}(x) - R_{s}(x-1)) : 100 = (p_{x} - p_{x-1}) - (R_{s}(x) - R_{s}(x-1)) : v$$`}</Latex>

            <Latex
                displayMode={true}
            >{`$$\\to v = \\dfrac{100\\{(p_{x} - p_{x-1}) - (R_{s}(x) - R_{s}(x-1))\\}}{(R_{p}(x) - R_{p}(x-1)) - (R_{s}(x) - R_{s}(x-1))}$$`}</Latex>
        </div>

        <h3>
            <a
                href="/orbital/1+1+1/graph/between"
                target="_blank"
                rel="noreferrer"
            >
                Hydrogen
            </a>
        </h3>

        <Row>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic122}
                        alt="Betweens in the Hydrogen Orbital Values"
                    />
                    <p>
                        <strong>
                            Betweens in the Hydrogen Orbital Values <sup>2</sup>
                            S<sub>1/2</sub>
                        </strong>
                    </p>
                </div>
            </Column>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic123}
                        alt="Betweens in the Hydrogen Ether Values"
                    />
                    <p>
                        <strong>
                            Betweens in the Hydrogen Ether Values <sup>2</sup>S
                            <sub>1/2</sub>
                        </strong>
                    </p>
                </div>
            </Column>
        </Row>

        <p>
            Hydrogen exhibits patterns on both sides. This is because hydrogen
            is an element with very small errors that can be explained by the
            Rydberg formula.
        </p>

        <h3>
            <a
                href="/orbital/2+1+1/graph/between"
                target="_blank"
                rel="noreferrer"
            >
                Helium
            </a>
        </h3>

        <Row>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic114}
                        alt="Betweens in the Helium Orbital Values"
                    />
                    <p>
                        <strong>
                            Betweens in the Helium Orbital Values <sup>1</sup>S
                            <sub>0</sub>
                        </strong>
                    </p>
                </div>
            </Column>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic115}
                        alt="Betweens in the Helium Ether Values"
                    />
                    <p>
                        <strong>
                            Betweens in the Helium Ether Values <sup>1</sup>S
                            <sub>0</sub>
                        </strong>
                    </p>
                </div>
            </Column>
        </Row>

        <p>
            Let's focus on orbitals first. The red line starts at 0,
            representing the point where <code>[O]</code> becomes{' '}
            <code>[OO]</code>. It is the point where the second circular ether
            is added. It slightly increases. The orange line represents the p
            orbital, and if we ignore the ratio of its increase, it can be seen
            to exhibit a pattern similar to s. The ether changes are also
            clearly evident. Let's look at elements with higher atomic numbers
            to better observe the changes.
        </p>

        <h3>Higher Atomic Numbers</h3>

        <Row>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic116}
                        alt="Betweens in the Beryllium Orbital Values"
                    />
                    <p>
                        <strong>
                            Betweens in the Beryllium Orbital Values{' '}
                            <sup>1</sup>S<sub>0</sub>
                        </strong>
                    </p>
                </div>
            </Column>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic117}
                        alt="Betweens in the Beryllium Ether Values"
                    />
                    <p>
                        <strong>
                            Betweens in the Beryllium Ether Values <sup>1</sup>S
                            <sub>0</sub>
                        </strong>
                    </p>
                </div>
            </Column>
        </Row>

        <Row>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic118}
                        alt="Betweens in the Sodium Orbital Values"
                    />
                    <p>
                        <strong>
                            Betweens in the Sodium Orbital Values <sup>2</sup>S
                            <sub>1/2</sub>
                        </strong>
                    </p>
                </div>
            </Column>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic119}
                        alt="Betweens in the Sodium Ether Values"
                    />
                    <p>
                        <strong>
                            Betweens in the Sodium Ether Values <sup>2</sup>S
                            <sub>1/2</sub>
                        </strong>
                    </p>
                </div>
            </Column>
        </Row>

        <Row>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic120}
                        alt="Betweens in the Cesium Orbital Values"
                    />
                    <p>
                        <strong>
                            Betweens in the Cesium Orbital Values <sup>2</sup>S
                            <sub>1/2</sub>
                        </strong>
                    </p>
                </div>
            </Column>
            <Column medium={6} small={12}>
                <div className="align__center">
                    <img
                        src={pic121}
                        alt="Betweens in the Cesium Ether Values"
                    />
                    <p>
                        <strong>
                            Betweens in the Cesium Ether Values <sup>2</sup>S
                            <sub>1/2</sub>
                        </strong>
                    </p>
                </div>
            </Column>
        </Row>

        <p>
            Commonly, it seems that the p orbital exhibits some irregularities,
            and there is still a clear pattern in the ether classification. If
            we were to create an equation based on this, we might need to treat
            p as an exception. As we go to higher elements like cesium, even d
            orbitals become exceptions.
        </p>

        <p>
            Both in Transform and Between, there is a common trend. Shifting the
            Rydberg formula seems to yield predictions with relatively low
            errors. Even in these small errors, the ether classification method
            shows a more distinct pattern than the traditional orbital
            classification method. While this is not a conclusive proof, it
            suggests the possibility that the ether classification method might
            provide clearer patterns than the traditional method. This concludes
            the demonstration.
        </p>
    </Doc>
)
