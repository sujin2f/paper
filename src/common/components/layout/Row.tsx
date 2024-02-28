import { PropsWithChildren, createElement } from 'react'

type Props = {
    className?: string
    dom?: string
}

/*
 * Grid Layout Component in Foundation Site
 * @ref https://get.foundation/sites/docs/flex-grid.html
 */
export const Row = (props: PropsWithChildren<Props>): JSX.Element => {
    const { className } = props
    const type = props.dom || 'div'
    const Element = createElement(
        type,
        {
            className: `row ${className || ''}`,
        },
        props.children,
    )

    return Element
}
