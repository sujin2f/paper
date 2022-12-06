import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Public } from 'src/frontend/scenes/public'
import { FrontPage } from 'src/frontend/scenes/public/FrontPage'
import { Tables } from './scenes/public/Tables'

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
            <Route path="/:linkBase/:atom" element={<Tables />}>
                <Route path="diagonal" element={<Tables />} />
                <Route path="graph" element={<Tables />}>
                    <Route path="diagonal" element={<Tables />} />
                    <Route path=":graphType" element={<Tables />}>
                        <Route path="diagonal" element={<Tables />} />
                    </Route>
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
