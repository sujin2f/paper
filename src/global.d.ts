import { GlobalVariable } from 'src/types/common'

declare global {
    interface Window {
        globalVariable: GlobalVariable
        twttr: any
        adsbygoogle: any
        opera: any
        katex: any
    }
}

export default global
