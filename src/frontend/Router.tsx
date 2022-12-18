import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Public } from 'src/frontend/scenes/public'
import { Doc } from 'src/frontend/scenes/doc'
import { Data } from 'src/frontend/scenes/public/Data'
import { Cart } from './scenes/public/Cart'
import { SavedData } from './scenes/public/SavedData'

export const Router = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Doc />} />

            <Route path="/saved-data" element={<SavedData />}>
                <Route path=":_id" element={<SavedData />}>
                    <Route path="graph" element={<SavedData />}>
                        <Route path=":graphType" element={<SavedData />} />
                    </Route>
                </Route>
            </Route>

            <Route path="/cart" element={<Cart />}>
                <Route path="graph" element={<Cart />}>
                    <Route path=":graphType" element={<Data />} />
                </Route>
            </Route>

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
