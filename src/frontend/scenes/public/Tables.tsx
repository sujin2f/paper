import React, { Fragment } from 'react'
import { useTableParam } from 'src/frontend/hooks/useTableParam'
import { RawData } from './RawData'
// import { Ether } from './Ether'
// import { Orbital } from './Orbital'
import { Public } from '.'

export const Tables = (): JSX.Element => {
    const { linkBase } = useTableParam()

    switch (linkBase) {
        case 'raw-data':
            return (
                <Public>
                    <RawData />
                </Public>
            )
        // case 'ether':
        //     return (
        //         <Public>
        //             <Ether />
        //         </Public>
        //     )
        // case 'orbital':
        //     return (
        //         <Public>
        //             <Orbital />
        //         </Public>
        //     )
    }
    return <Fragment />
}
