import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Public } from 'src/frontend/scenes/public'

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
