import React, { Fragment, useMemo } from 'react'
import { Row } from 'src/model/Row'

type Props = {
    row: Row
}

export const Term = (props: Props): JSX.Element => {
    const terms = props.row.term
    return (
        <Fragment>
            <sup>{terms.spin && !isNaN(terms.spin) ? terms.spin : ''}</sup>
            {terms.l}
            {terms.parity && <span>°</span>}
            {!isNaN(terms.j) && <sub>{terms.j}</sub>}
            {!isNaN(terms.numerator) && <sub>{terms.numerator}/2</sub>}
        </Fragment>
    )
}
