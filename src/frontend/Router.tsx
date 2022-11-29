import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Public } from 'src/frontend/scenes/public'
import { RawData } from 'src/frontend/scenes/public/RawData'

export const Router = (): JSX.Element => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Public>
                        <div>/</div>
                    </Public>
                }
            />

            <Route
                path="/raw-data/:atomNo"
                element={
                    <Public>
                        <RawData />
                    </Public>
                }
            />

            <Route
                path="*"
                element={
                    <Public>
                        <div>404</div>
                    </Public>
                }
            />
        </Routes>
    )
}
