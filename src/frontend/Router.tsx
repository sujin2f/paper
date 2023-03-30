import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Public } from 'src/frontend/scenes/Public'
import { Data } from 'src/frontend/scenes/data/Data'

import { Intro } from 'src/frontend/scenes/doc/Intro'
import { Hypothesis } from 'src/frontend/scenes/doc/Hypothesis'
import { ClassicPhysics } from 'src/frontend/scenes/doc/ClassicPhysics'
import { MultiElectronAtoms } from 'src/frontend/scenes/doc/MultiElectronAtoms'
import { Conclusion } from 'src/frontend/scenes/doc/Conclusion'

import { Intro as IntroKor } from 'src/frontend/scenes/doc-kor/Intro'
import { Hypothesis as HypothesisKor } from 'src/frontend/scenes/doc-kor/Hypothesis'
import { ClassicPhysics as ClassicPhysicsKor } from 'src/frontend/scenes/doc-kor/ClassicPhysics'
import { MultiElectronAtoms as MultiElectronAtomsKor } from 'src/frontend/scenes/doc-kor/MultiElectronAtoms'
import { OrbitalEquation as OrbitalEquationKor } from 'src/frontend/scenes/doc-kor/OrbitalEquation'
import { Comparison as ComparisonKor } from 'src/frontend/scenes/doc-kor/Comparison'
import { Conclusion as ConclusionKor } from 'src/frontend/scenes/doc-kor/Conclusion'

export const Router = (): JSX.Element => {
    return (
        <Public>
            <Routes>
                {/* Document */}
                <Route path="/" element={<Intro />} />
                <Route path="/hypothesis" element={<Hypothesis />} />
                <Route path="/classic-physics" element={<ClassicPhysics />} />
                <Route
                    path="/multi-electron-atoms"
                    element={<MultiElectronAtoms />}
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
                    path="/kor/orbital-equation"
                    element={<OrbitalEquationKor />}
                />
                <Route path="/kor/comparison" element={<ComparisonKor />} />
                <Route path="/kor/conclusion" element={<ConclusionKor />} />

                <Route path="/:dataType/:atom" element={<Data />}>
                    <Route path=":term" element={<Data />}>
                        <Route path="graph" element={<Data />}>
                            <Route path=":graphType" element={<Data />} />
                        </Route>
                    </Route>
                    <Route path="graph" element={<Data />}>
                        <Route path=":graphType" element={<Data />} />
                    </Route>
                </Route>

                <Route path="*" element={<div>Broken Router</div>} />
            </Routes>
        </Public>
    )
}
