import { csvParser } from './csv-parser'

const capitalizeFirstLetter = (value: string): string => {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
}

export const crawl = async (no: number, atom: string, ion: number) => {
    const atomString = capitalizeFirstLetter(atom)
    const ionString = Array(ion).fill('I').join()
    const nistUrl = `https://physics.nist.gov/cgi-bin/ASD/lines1.pl?spectra=${atomString}+${ionString}&limits_type=0&low_w=&upp_w=&unit=1&de=0&I_scale_type=1&format=2&line_out=0&remove_js=on&en_unit=2&output=0&bibrefs=1&page_size=100&order_out=0&max_low_enrg=&show_av=2&max_upp_enrg=&tsb_value=0&min_str=&A_out=0&intens_out=on&max_str=&allowed_out=1&forbid_out=1&min_accur=&min_intens=&conf_out=on&term_out=on&enrg_out=on&J_out=on&submit=Retrieve+Data`

    const result = await fetch(nistUrl)
        .then(async (response) => await response.text())
        .catch((e) => console.error(e))
    if (result) {
        await csvParser(no, atomString, ionString, result)
        return true
    }
    return false
}
