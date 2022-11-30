import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Public } from 'src/frontend/scenes/public'
import { Orbital } from 'src/frontend/scenes/public/Orbital'
import { Ether } from 'src/frontend/scenes/public/Ether'

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
                path="/orbital/:atomNo"
                element={
                    <Public>
                        <Orbital />
                    </Public>
                }
            />

            <Route
                path="/ether/:atomNo"
                element={
                    <Public>
                        <Ether />
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
