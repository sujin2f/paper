import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Public } from 'src/frontend/scenes/public'
import { FrontPage } from 'src/frontend/scenes/public/FrontPage'
import { Orbital } from 'src/frontend/scenes/public/Orbital'
import { Ether } from 'src/frontend/scenes/public/Ether'
import { RawData } from 'src/frontend/scenes/public/RawData'

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

            <Route
                path="/raw-data"
                element={
                    <Public>
                        <RawData />
                    </Public>
                }
            />

            <Route
                path="/raw-data/:number"
                element={
                    <Public>
                        <RawData />
                    </Public>
                }
            />

            <Route
                path="/raw-data/:number/:ion"
                element={
                    <Public>
                        <RawData />
                    </Public>
                }
            />

            <Route
                path="/orbital"
                element={
                    <Public>
                        <Orbital />
                    </Public>
                }
            />

            <Route
                path="/orbital/:number"
                element={
                    <Public>
                        <Orbital />
                    </Public>
                }
            />

            <Route
                path="/orbital/:number/:ion"
                element={
                    <Public>
                        <Orbital />
                    </Public>
                }
            />

            <Route
                path="/ether"
                element={
                    <Public>
                        <Ether />
                    </Public>
                }
            />

            <Route
                path="/ether/:number"
                element={
                    <Public>
                        <Ether />
                    </Public>
                }
            />

            <Route
                path="/ether/:number/:ion"
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
                        <div>Broken Router</div>
                    </Public>
                }
            />
        </Routes>
    )
}
