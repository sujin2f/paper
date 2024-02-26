import { useContext, useEffect } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { loadScript } from '../store/actions'
import { ScriptLoaderStatus } from 'src/constants/script-loader'

export const useScriptLoader = (src: string) => {
    // before loading: NaN, on loading: 1
    const [{ scriptLoader }, dispatch] = useContext(Context) as ContextType

    useEffect(() => {
        if (!scriptLoader[src]) {
            dispatch(loadScript([src, ScriptLoaderStatus.ON_LOADING]))

            const script = document.createElement('script')
            script.src = src
            script.async = true
            script.onload = () => {
                dispatch(loadScript([src, ScriptLoaderStatus.COMPLETE]))
            }

            document.body.appendChild(script)
        }
    }, [dispatch, scriptLoader, src])

    return scriptLoader[src]
}
