import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Public } from 'src/frontend/scenes/Public'
import { RawData } from 'src/frontend/scenes/data/RawData'

import { Intro } from 'src/frontend/scenes/doc/Intro'
import { Hypothesis } from 'src/frontend/scenes/doc/Hypothesis'
import { ClassicPhysics } from 'src/frontend/scenes/doc/ClassicPhysics'
import { MultiElectronAtoms } from 'src/frontend/scenes/doc/MultiElectronAtoms'
import { SchrodingerEquation } from 'src/frontend/scenes/doc/SchrodingerEquation'
import { Conclusion } from 'src/frontend/scenes/doc/Conclusion'

import { Intro as IntroKor } from 'src/frontend/scenes/doc-kor/Intro'
import { Hypothesis as HypothesisKor } from 'src/frontend/scenes/doc-kor/Hypothesis'
import { ClassicPhysics as ClassicPhysicsKor } from 'src/frontend/scenes/doc-kor/ClassicPhysics'
import { MultiElectronAtoms as MultiElectronAtomsKor } from 'src/frontend/scenes/doc-kor/MultiElectronAtoms'
import { SchrodingerEquation as SchrodingerEquationKor } from 'src/frontend/scenes/doc-kor/SchrodingerEquation'
import { Conclusion as ConclusionKor } from 'src/frontend/scenes/doc-kor/Conclusion'
import { Appendix1 as Appendix1Kor } from 'src/frontend/scenes/doc-kor/Appendix1'

import { Orbital } from 'src/frontend/scenes/data/Orbital'
import { Ether } from 'src/frontend/scenes/data/Ether'
import { Cart } from 'src/frontend/scenes/data/Cart'
import { SavedData } from 'src/frontend/scenes/data/SavedData'

export const Router = (): JSX.Element => {
    return (
        <Public>
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/hypothesis" element={<Hypothesis />} />
                <Route path="/classic-physics" element={<ClassicPhysics />} />
                <Route
                    path="/multi-electron-atoms"
                    element={<MultiElectronAtoms />}
                />
                <Route
                    path="/schrodinger-equation"
                    element={<SchrodingerEquation />}
                />
                <Route path="/conclusion" element={<Conclusion />} />

                <Route path="/kor" element={<IntroKor />} />
                <Route path="/kor/hypothesis" element={<HypothesisKor />} />
                <Route
                    path="/kor/classic-physics"
                    element={<ClassicPhysicsKor />}
                />
                <Route
                    path="/kor/multi-electron-atoms"
                    element={<MultiElectronAtomsKor />}
                />
                <Route
                    path="/kor/schrodinger-equation"
                    element={<SchrodingerEquationKor />}
                />
                <Route path="/kor/conclusion" element={<ConclusionKor />} />
                <Route path="/kor/appendix1" element={<Appendix1Kor />} />

                <Route path="/raw-data/:atom" element={<RawData />}>
                    <Route path=":term" element={<RawData />}>
                        <Route path="graph" element={<RawData />}>
                            <Route path=":graphType" element={<RawData />} />
                        </Route>
                    </Route>
                    <Route path="graph" element={<RawData />}>
                        <Route path=":graphType" element={<RawData />} />
                    </Route>
                </Route>

                <Route path="/orbital/:atom" element={<Orbital />}>
                    <Route path=":term" element={<Orbital />}>
                        <Route path="graph" element={<Orbital />}>
                            <Route path=":graphType" element={<Orbital />} />
                        </Route>
                    </Route>
                    <Route path="graph" element={<Orbital />}>
                        <Route path=":graphType" element={<Orbital />} />
                    </Route>
                </Route>

                <Route path="/ether/:atom" element={<Ether />}>
                    <Route path=":term" element={<Ether />}>
                        <Route path="graph" element={<Ether />}>
                            <Route path=":graphType" element={<Ether />} />
                        </Route>
                    </Route>
                    <Route path="graph" element={<Ether />}>
                        <Route path=":graphType" element={<Ether />} />
                    </Route>
                </Route>

                <Route path="/cart" element={<Cart />}>
                    <Route path="graph" element={<Cart />}>
                        <Route path=":graphType" element={<Cart />} />
                    </Route>
                </Route>

                <Route path="/saved-data/:_id" element={<SavedData />}>
                    <Route path="graph" element={<SavedData />}>
                        <Route path=":graphType" element={<SavedData />} />
                    </Route>
                </Route>

                <Route path="*" element={<div>Broken Router</div>} />
            </Routes>
        </Public>
    )
}
