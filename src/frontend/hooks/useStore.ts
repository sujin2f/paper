import { useContext } from 'react'
import { Context, ContextType } from '../store'

export const useStore = () => {
    return useContext(Context) as ContextType
}
