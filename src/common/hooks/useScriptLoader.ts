import { useEffect, useState } from 'react'
import { Fn } from 'src/types/common'

export enum ScriptLoaderStatus {
    ON_LOADING = 'onload',
    COMPLETE = 'complete',
}

// Store Global State
// From: https://dev.to/yezyilomo/global-state-management-in-react-with-global-variables-and-hooks-state-management-doesn-t-have-to-be-so-hard-2n2c
class GlobalState {
    private _value: Record<string, ScriptLoaderStatus> = {}
    private _subscribers: Record<string, Fn<[ScriptLoaderStatus]>[]> = {}

    private static instance: GlobalState
    public static getInstance(): GlobalState {
        if (!GlobalState.instance) {
            GlobalState.instance = new GlobalState()
        }
        return GlobalState.instance
    }

    public getValue(src: string) {
        return this._value[src]
    }

    public setValue(src: string, newState: ScriptLoaderStatus) {
        if (this._value[src] === newState) {
            return
        }

        this._value[src] = newState // Update global state value

        if (!this._subscribers[src]) {
            this._subscribers[src] = []
        }
        this._subscribers[src].forEach((render) => {
            // Notify subscribers that the global state has changed
            render(this._value[src])
        })
    }

    public subscribe(src: string, render: Fn<[ScriptLoaderStatus]>) {
        // First attempt
        if (!this._subscribers[src]) {
            this._subscribers[src] = []

            this.setValue(src, ScriptLoaderStatus.ON_LOADING)
            const script = document.createElement('script')
            script.src = src
            script.async = true
            script.onload = () => {
                this.setValue(src, ScriptLoaderStatus.COMPLETE)
            }

            document.body.appendChild(script)
        }

        // This is a function for subscribing to a global state
        if (this._subscribers[src].indexOf(render) > -1) {
            // Already subscribed
            return
        }
        // Subscribe a component
        this._subscribers[src].push(render)
    }

    public unsubscribe(src: string, render: Fn<[ScriptLoaderStatus]>) {
        if (!this._subscribers[src]) {
            this._subscribers[src] = []
        }

        // This is a function for unsubscribing from a global state
        this._subscribers[src] = this._subscribers[src].filter(
            (subscriber) => subscriber !== render,
        )
    }
}

export const useScriptLoader = (src: string) => {
    const globalState = GlobalState.getInstance()
    const [, setState] = useState<ScriptLoaderStatus>(globalState.getValue(src))
    const state = globalState.getValue(src)

    function render(newState: ScriptLoaderStatus) {
        // This will be called when the global state changes
        setState(newState)
    }

    useEffect(() => {
        // Subscribe to a global state when a component mounts
        globalState.subscribe(src, render)

        return () => {
            // Unsubscribe from a global state when a component unmounts
            globalState.unsubscribe(src, render)
        }
    })

    return state
}
