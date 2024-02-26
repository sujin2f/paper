// Store Global State
// From: https://dev.to/yezyilomo/global-state-management-in-react-with-global-variables-and-hooks-state-management-doesn-t-have-to-be-so-hard-2n2c
class GlobalState {
    private _value: string[] = []

    private static instance: GlobalState
    public static getInstance(): GlobalState {
        if (!GlobalState.instance) {
            GlobalState.instance = new GlobalState()
        }
        return GlobalState.instance
    }

    public loadStyle(src: string) {
        // Already loaded
        if (this._value.indexOf(src) > -1) {
            return
        }
        const link = document.createElement('link')
        link.href = src
        link.rel = 'stylesheet'

        document.body.appendChild(link)
        this._value.push(src)
    }
}

export const useStyleLoader = (...src: string[]) => {
    const globalState = GlobalState.getInstance()
    src.forEach((href) => {
        globalState.loadStyle(href)
    })

    return
}
