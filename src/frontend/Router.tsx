import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Public } from 'src/frontend/scenes/Public'
import { Loading } from './components/Loading'

const Data = lazy(() => import('src/frontend/scenes/data/Data'))

const IntroKor = lazy(() => import('src/frontend/scenes/doc-kor/Intro'))
const HypothesisKor = lazy(
    () => import('src/frontend/scenes/doc-kor/Hypothesis'),
)
const ClassicPhysicsKor = lazy(
    () => import('src/frontend/scenes/doc-kor/ClassicPhysics'),
)
const MultiElectronAtomsKor = lazy(
    () => import('src/frontend/scenes/doc-kor/MultiElectronAtoms'),
)
const ComparisonKor = lazy(
    () => import('src/frontend/scenes/doc-kor/Comparison'),
)
const ConclusionKor = lazy(
    () => import('src/frontend/scenes/doc-kor/Conclusion'),
)
const BetweenKor = lazy(() => import('src/frontend/scenes/doc-kor/Between'))

const Intro = lazy(() => import('src/frontend/scenes/doc/Intro'))
const Hypothesis = lazy(() => import('src/frontend/scenes/doc/Hypothesis'))
const ClassicPhysics = lazy(
    () => import('src/frontend/scenes/doc/ClassicPhysics'),
)
const MultiElectronAtoms = lazy(
    () => import('src/frontend/scenes/doc/MultiElectronAtoms'),
)
const Comparison = lazy(() => import('src/frontend/scenes/doc/Comparison'))
const Between = lazy(() => import('src/frontend/scenes/doc/Between'))
const Conclusion = lazy(() => import('src/frontend/scenes/doc/Conclusion'))

export const Router = (): JSX.Element => {
    return (
        <Suspense fallback={<Loading />}>
            <Public>
                <Routes>
                    {/* Document */}
                    <Route path="/" element={<Intro />} />
                    <Route path="/hypothesis" element={<Hypothesis />} />
                    <Route
                        path="/classic-physics"
                        element={<ClassicPhysics />}
                    />
                    <Route
                        path="/multi-electron-atoms"
                        element={<MultiElectronAtoms />}
                    />
                    <Route path="/comparison" element={<Comparison />} />
                    <Route path="/between" element={<Between />} />
                    <Route path="/conclusion" element={<Conclusion />} />

                    {/* Document: Kor */}
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
                    <Route path="/kor/comparison" element={<ComparisonKor />} />
                    <Route path="/kor/between" element={<BetweenKor />} />
                    <Route path="/kor/conclusion" element={<ConclusionKor />} />

                    {/* Data */}
                    <Route path="/:dataType/:atom" element={<Data />}>
                        <Route path="graph" element={<Data />}>
                            <Route path=":graphType" element={<Data />} />
                        </Route>
                    </Route>

                    <Route path="*" element={<div>Page Broken</div>} />
                </Routes>{' '}
            </Public>
        </Suspense>
    )
}
