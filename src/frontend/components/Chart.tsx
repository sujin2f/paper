import React, { Fragment, useEffect, useRef } from 'react'

import {
    LoadingStatus,
    useScriptLoader,
} from 'src/common/hooks/useScriptLoader'

import { useURLParam } from 'src/frontend/hooks/useURLParam'
import { useStore } from 'src/frontend/hooks/useStore'

export const Chart = (): JSX.Element => {
    const [{ container }] = useStore()
    const { isGraph, graphType, term, dataType } = useURLParam()
    const wrapper = useRef<HTMLCanvasElement>(null)
    const script = useScriptLoader(
        'https://unpkg.com/chart.js@4.2.0/dist/chart.umd.js',
    )

    useEffect(() => {
        let chart: undefined | any = undefined
        if (script === LoadingStatus.COMPLETE) {
            if (container && wrapper.current && isGraph) {
                const options = {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top' as const,
                        },
                    },
                }
                const data = container.getChartData(graphType)
                chart = new window.Chart(wrapper.current, {
                    type: 'line',
                    data,
                    options,
                })
            }
        }

        if (!isGraph && chart) {
            chart.destroy()
        }

        return () => {
            if (chart) {
                chart.destroy()
            }
        }
    }, [container, graphType, script, isGraph, term, dataType])

    if (!isGraph) {
        return <Fragment></Fragment>
    }

    return <canvas id="chart" className="chart" ref={wrapper}></canvas>
}
