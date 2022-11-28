## Proof(1): Classic Physics

### The Emission Wavelength of Photon-Ether from Bohr Model

Rydberg formula is the solution to calculate the wavelength from an electron. The next ones are the Rydberg formula and tables of Lyman series, emission wavelengths from n >=2 to n = 1, Paschen series, emission wavelengths from n >=4 to n = 3.

$$\dfrac{1}{\lambda} = R(\dfrac{1}{m^2} - \dfrac{1}{n^2}) \hspace{10pt} \\\{ R=1.0974 \times 10^7 m^2 \\\}$$

<p align="center"><strong>Rydberg Formula</strong>: how did you figure it out, sir?</p>

| n | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|--|--|--|--|--|--|--|--|
| Wavelength `nm` | 121.50 | 102.51 | 97.20 | 94.92 | 93.73 | 93.02 | 92.57 |

<p align="center"><strong>Lyman Series</strong></p>

| n | 4 | 5 | 6 | 7 | 8 |
|--|--|--|--|--|--|
| Wavelength `nm` | 1,874.60 | 1,281.46 | 1,093.52 | 1,004.67 | 954.34 |

<p align="center"><strong>Paschen Series</strong></p>

It tends to have rules, but there's no rule between series. For example, the emissions from four to three are different. What I assume is there is a certain amount of energy between the same orbit, so these tables are not matched to my assumption. Here's the reciprocal of a fraction, a wave number.

| n | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|--|--|--|--|--|--|--|--|
| Wave Number `cm^−1` | 82,302.98 | 97,544.28 | 102,878.73 | 105,347.82 | 106,689.05 | 107,497.77 | 108,022.67 |

<p align="center"><strong>Wave Number of Lyman Series</strong></p>

The next tables are differences between the orbit number, which means from two to one, from three to two, etc.

| n | $3 \to 2$ | $4 \to 3$ | $5 \to 4$ | $6 \to 5$ | $7 \to 6$ | $8 \to 7$ |
|--|--|--|--|--|--|--|
| Wave Number Differences `cm^−1` | 15,241.29 | 5,334.45 | 2,469.08 | 1,341.23 | 808.72 | 524.89 |

<p align="center"><strong>Wave Number Differences of Lyman Series</strong></p>

| n | $5 \to 4$ | $6 \to 5$ | $7 \to 6$ | $8 \to 7$ |
|--|--|--|--|--|
| Wave Number Differences `cm^−1` | 2,469.08 | 1,341.23 | 808.72 | 524.89 |

<p align="center"><strong>Wave Number Differences of Paschen Series</strong></p>

They match together. This supports the certain amount of energy stores in between the orbits. Now, calculation of electron energy is just plus equation.

### Energy of Photon-Ether

If the wavelength between the orbit is always same, we can calculate its energy. `E = hc / λ` is a energy formula, and λ is a wavelength. The result unit is J, and converting to eV is the table below. I declare a function 1 / (n - 1)<sup>2</sup> - 1 / n<sup>2</sup> as N<sub>th</sub>(n), and this function will be used in this document.

$$N_{th}(n) = \dfrac{1}{(n-1)^2} - \dfrac{1}{n^2}$$

<p align="center"><strong>N<sub>th</sub>(n)</strong>: remember this function</p>

$$E = Rhc(N_{th}(n))\cdot6.242\cdot10^{32}$$

<p align="center"><strong>Energy Formula from Wavelength</strong></p>

| n | 1-2 | 2-3 | 3-4 | 4-5 | 5-6 | 6-7 | 8-8 |
|--|--|--|--|--|--|--|--|
| E `eV` | 10.2050 | 1.8898 | 0.6614 | 0.3061 | 0.1663 | 0.1002 | 0.0650 |

<p align="center"><strong>Result from the formula</strong></p>

From Bohr model and Schrödinger equation, the energy of n shell is:

$$E_n = -\frac{ℏ^2}{2 \mu a_0 ^ 2} \frac{1}{n^2}$$

I swap 1 / n<sup>2</sup> to N<sub>th</sub>(n), and convert J to eV. The values are similar with a table above.

$$E_{th}(n) = \frac{ℏ^2}{2 \mu a_0 ^ 2}N_{th}(n) \hspace{10pt} \\\{ n \geqq 2 \\\}$$

| n | 1-2 | 2-3 | 3-4 | 4-5 | 5-6 | 6-7 | 8-8 |
|--|--|--|--|--|--|--|--|
| 1st values `eV` | 10.2050 | 1.8898 | 0.6614 | 0.3061 | 0.1663 | 0.1002 | 0.0650 |
| 2nd values `eV` | 10.2009 | 1.8890 | 0.6611 | 0.3060 | 0.1662 | 0.1002 | 0.0650 |

<p align="center">
 <img src="../images/pic5.png">
</p>

<p align="center"><strong>EC of Photon-Ether</strong><br>simple plus calculation</p>

As you can see, we can get the energy of ether by the plus calculation. Also wavelength and mass would be able to calculate.

Two formulas has N<sub>th</sub>(n) as only variable. Therefore the value is changed by the part of N<sub>th</sub>(n). I declare it as <strong>Energy Coefficient (EC)</strong>.

### Recap

So far, it is obvious. It is all from a classic physics text book. It is right in hydrogen-like atom in Bohr era, before a century ago. However, it does not match to multi-electron atoms. I made y'all fool.

I want to suggest conditions that makes ether-sparkle hypothesis would be right.

- First, the ether energy should be **possible to guess**
- Second, the ether energy should be **summed**
- Third, the two conditions above should be established in **multi-electron atoms**

If I pass the conditions, I may prove the electron energy is stored as a form of ether. Next chapter is about the multi-electron atoms.

---

- First Page: [Introduction](../README.md)
- Prev Chapter: [Hypothesis](./hypothesis_en.md)
- Next Chapter: [Proof(2): Multi-Electron Atoms](./atomic_spectra_data_en.md)
