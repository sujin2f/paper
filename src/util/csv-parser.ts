import csv from 'csv-parser'
import fs from 'fs'
import { addEther, Ether } from './mongo/ether'

const getValueInside = (value: string): string => {
    const regex = new RegExp(/[0-9a-zA-Z\.\/]+/)
    const exec = regex.exec(value)

    if (!exec || !exec.length) {
        return ''
    }

    return exec[0]
}

const getEther = (
    no: number,
    atom: string,
    ion: string,
    ry: string,
    conf: string,
    term: string,
    j: string,
): Ether | undefined => {
    const ryValue = parseFloat(getValueInside(ry))
    const confValue = getValueInside(conf)
    const termValue = getValueInside(term)
    const jValue = getValueInside(j)

    if (!confValue || !termValue || !jValue || isNaN(ryValue)) {
        return
    }

    return {
        no,
        atom,
        ion,
        ry: ryValue,
        conf: confValue,
        term: termValue,
        j: jValue,
    }
}

export const csvParser = (
    no: number,
    atom: string,
    ion: string,
    filename: string,
) => {
    const ethers: Ether[] = []
    fs.createReadStream(filename)
        .pipe(csv())
        .on('data', (data) => {
            const {
                'Ei(Ry)': eI,
                conf_i: confI,
                term_i: termI,
                J_i: jI,
                'Ek(Ry)': eK,
                conf_k: confK,
                term_k: termK,
                J_k: jK,
            } = data

            let ether = getEther(no, atom, ion, eI, confI, termI, jI)
            if (ether) {
                ethers.push(ether)
            }

            ether = getEther(no, atom, ion, eK, confK, termK, jK)
            if (ether) {
                ethers.push(ether)
            }
        })
        .on('end', async () => {
            for (const ether of ethers) {
                await addEther(ether)
            }
        })
}
