import { RawDataItem } from 'src/types/raw-data'
import { Action, StateChartData } from 'src/types/store'
export const SET_DIGIT = 'ether/v1/SET_DIGIT'
export const SET_ORBITAL = 'ether/v1/SET_ORBITAL'
export const SET_ETHER = 'ether/v1/SET_ETHER'
export const SET_RYDBERG = 'ether/v1/SET_RYDBERG'
export const SET_DIFF = 'ether/v1/SET_DIFF'
export const SET_NTH = 'ether/v1/SET_NTH'
export const SET_PERCENT_POINT = 'ether/v1/SET_PERCENT_POINT'
export const SET_PERCENT = 'ether/v1/SET_PERCENT'
export const SET_WEIGHT = 'ether/v1/SET_WEIGHT'
export const SET_CHART_TITLE = 'ether/v1/CHART_TITLE'
export const SET_CHART_DATA = 'ether/v1/SET_CHART_DATA'
export const SET_SHIFT = 'ether/v1/SET_SHIFT'
export const SET_ENTRIES = 'ether/v1/SET_ENTRIES'

export const setDigit = (digit: number): Action => {
    return {
        type: SET_DIGIT,
        digit,
    }
}

export const setOrbital = (orbital: boolean): Action => {
    return {
        type: SET_ORBITAL,
        orbital,
    }
}

export const setEther = (ether: boolean): Action => {
    return {
        type: SET_ETHER,
        ether,
    }
}

export const setRydberg = (rydberg: boolean): Action => {
    return {
        type: SET_RYDBERG,
        rydberg,
    }
}

export const setDiff = (diff: boolean): Action => {
    return {
        type: SET_DIFF,
        diff,
    }
}

export const setNth = (nth: boolean): Action => {
    return {
        type: SET_NTH,
        nth,
    }
}

export const setPercentPoint = (percentPoint: boolean): Action => {
    return {
        type: SET_PERCENT_POINT,
        percentPoint,
    }
}

export const setPercent = (percent: boolean): Action => {
    return {
        type: SET_PERCENT,
        percent,
    }
}

export const setWeight = (weight: boolean): Action => {
    return {
        type: SET_WEIGHT,
        weight,
    }
}

export const setChartTitle = (chartTitle: string): Action => {
    return {
        type: SET_CHART_TITLE,
        chartTitle,
    }
}

export const setChartData = (chartData: StateChartData): Action => {
    return {
        type: SET_CHART_DATA,
        chartData,
    }
}

export const setShift = (shift: number): Action => {
    return {
        type: SET_SHIFT,
        shift,
    }
}

export const setEntries = (entries: RawDataItem[]): Action => {
    return {
        type: SET_ENTRIES,
        entries,
    }
}
