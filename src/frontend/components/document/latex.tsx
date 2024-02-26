import React, { PropsWithChildren, useEffect, useState } from 'react'

import {
    useScriptLoader,
    ScriptLoaderStatus,
} from 'src/common/hooks/useScriptLoader'
import { useStyleLoader } from 'src/common/hooks/useStyleLoader'

export const Latex = (
    props: PropsWithChildren<{ displayMode?: boolean }>,
): JSX.Element => {
    const [html, changeHTML] = useState<string>('')
    const script = useScriptLoader(
        'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js',
    )
    useStyleLoader(
        'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css',
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
