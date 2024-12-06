import { useEffect, useRef } from 'react'

import { Chart } from 'chart.js/auto'
import { Container } from 'src/model/Container'
import { Nullable } from 'src/common/types'
import { useStore } from './useStore'

export const useChart = (instance: Nullable<Container>) => {
    const [{ version }] = useStore()
    const wrapper = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        let chart: undefined | any = undefined
        ;(async () => {
            if (instance && wrapper.current) {
                const [options, data] = instance.getChartData()
                chart = new Chart(wrapper.current, {
                    type: 'line',
                    data,
                    options,
                })
            }
        })()

        return () => {
            if (chart) {
                chart.destroy()
            }
        }
    }, [instance, version])

    return wrapper
}
