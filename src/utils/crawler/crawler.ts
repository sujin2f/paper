import { Atom } from 'src/types/atom'
import { csvParser } from 'src/utils/crawler/csv-parser'

export const crawl = async (atom: Atom, ion: string) => {
    const nistUrl = `https://physics.nist.gov/cgi-bin/ASD/lines1.pl?spectra=${atom.symbol}+${ion}&limits_type=0&low_w=&upp_w=&unit=1&de=0&I_scale_type=1&format=2&line_out=0&remove_js=on&en_unit=2&output=0&bibrefs=1&page_size=15&show_obs_wl=1&show_calc_wl=1&unc_out=1&order_out=0&max_low_enrg=&show_av=2&max_upp_enrg=&tsb_value=0&min_str=&A_out=0&intens_out=on&max_str=&allowed_out=1&forbid_out=1&min_accur=&min_intens=&conf_out=on&term_out=on&enrg_out=on&J_out=on&submit=Retrieve+Data`

    const result = await fetch(nistUrl)
        .then(async (response) => await response.text())
        .catch((e) => {
            console.error(e)
            return ''
        })

    if (result) {
        await csvParser(atom, ion, result)
        return true
    }
    return false
}
