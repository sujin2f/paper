import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Public } from 'src/frontend/scenes/public'
import { FrontPage } from 'src/frontend/scenes/public/FrontPage'
import { Data } from 'src/frontend/scenes/public/Data'

export const Router = (): JSX.Element => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Public>
                        <FrontPage />
                    </Public>
                }
            />
            <Route path="/:linkBase/:atom" element={<Data />}>
                <Route path=":term" element={<Data />}>
                    <Route path="graph" element={<Data />}>
                        <Route path=":graphType" element={<Data />} />
                    </Route>
                </Route>
                <Route path="graph" element={<Data />}>
                    <Route path=":graphType" element={<Data />} />
                </Route>
            </Route>

            <Route
                path="*"
                element={
                    <Public>
                        <div>Broken Router</div>
                    </Public>
                }
            />
        </Routes>
    )
}
