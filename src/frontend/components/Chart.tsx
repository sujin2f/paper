import React, { Fragment } from 'react'

import { useChart } from 'src/frontend/hooks/useChart'
import { useStore } from 'src/frontend/hooks/useStore'

export const Chart = (): JSX.Element => {
    const [{ container }] = useStore()
    const wrapper = useChart(container)

    if (!container || container.chartType === 'close') {
        return <Fragment />
    }
    return <canvas id="chart" className="chart" ref={wrapper}></canvas>
}
