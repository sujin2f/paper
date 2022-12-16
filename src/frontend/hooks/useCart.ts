import { useContext, useEffect } from 'react'
import { CartContainer } from 'src/model/CartContainer'
import { Context, ContextType } from '../store'
import { setData } from '../store/actions'

export const useCart = () => {
    const [{ cart }, dispatch] = useContext(Context) as ContextType

    useEffect(() => {
        if (!cart.length) {
            return
        }

        dispatch(setData(new CartContainer(cart)))
    }, [cart])
}
