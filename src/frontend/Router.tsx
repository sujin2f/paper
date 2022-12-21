import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Public } from 'src/frontend/scenes/Public'
import { RawData } from 'src/frontend/scenes/data/RawData'
// import { Cart } from './scenes/data/Cart'
// import { SavedData } from './scenes/data/SavedData'

import { Intro } from './scenes/doc/Intro'
import { Hypothesis } from './scenes/doc/Hypothesis'
import { ClassicPhysics } from './scenes/doc/ClassicPhysics'
import { MultiElectronAtoms } from './scenes/doc/MultiElectronAtoms'
import { SchrodingerEquation } from './scenes/doc/SchrodingerEquation'
import { Conclusion } from './scenes/doc/Conclusion'

import { Intro as IntroKor } from './scenes/doc-kor/Intro'
import { Hypothesis as HypothesisKor } from './scenes/doc-kor/Hypothesis'
import { ClassicPhysics as ClassicPhysicsKor } from './scenes/doc-kor/ClassicPhysics'
import { MultiElectronAtoms as MultiElectronAtomsKor } from './scenes/doc-kor/MultiElectronAtoms'
import { SchrodingerEquation as SchrodingerEquationKor } from './scenes/doc-kor/SchrodingerEquation'
import { Conclusion as ConclusionKor } from './scenes/doc-kor/Conclusion'
import { Orbital } from './scenes/data/Orbital'

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

                <Route path="*" element={<div>Broken Router</div>} />
            </Routes>
        </Public>
    )
}
