import React, { PropsWithChildren, useEffect, useState } from 'react'

import { useScriptLoader } from 'src/frontend/hooks/useScriptLoader'
import { ScriptLoaderStatus } from 'src/constants/script-loader'

export const Latex = (
    props: PropsWithChildren<{ displayMode?: boolean }>,
): JSX.Element => {
    const [html, changeHTML] = useState<string>('')
    const script = useScriptLoader(
        'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js',
    )
    useEffect(() => {
        if (script === ScriptLoaderStatus.COMPLETE) {
            const latex = window.katex.renderToString(props.children, {
                throwOnError: false,
                displayMode: props.displayMode,
            })
            changeHTML(latex)
        }
    }, [props.children, props.displayMode, script])

    if (html) {
        return <span dangerouslySetInnerHTML={{ __html: html }}></span>
    }

    return <span>{props.children}</span>
}
