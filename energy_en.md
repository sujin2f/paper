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

If the wavelength between the orbit is always same, we can calculate its energy. `E = hc / λ` is a energy formula

광자-에테르가 일정한 파장을 가지고 있다면 그 에너지를 구할 수 있을 것이다. 빛의 에너지는 E = hc / λ의 식으로 구할 수 있다. 여기서 λ는 앞서 구한 파수를 의미한다. 우리는 파수를 구하는 식을 이미 알고 있으며, 이렇게 구한 값은 J의 단위를 가진다. 이를 eV를 단위로 갖는 에너지 값은 아래의 수식과 같으며, 이를 정리하면 아래의 표와 같다. 여기서 1 / (n - 1)<sup>2</sup> - 1 / n<sup>2</sup>를 함수 N<sub>th</sub>(n)이라 하자. 이 함수는 앞으로도 계속 쓰일 것이다.

$$N_{th}(n) = \dfrac{1}{(n-1)^2} - \dfrac{1}{n^2}$$

<p align="center"><strong>N<sub>th</sub>(n)</strong>: 이 함수 계속 나온다</p>

$$E = Rhc(N_{th}(n))\cdot6.242\cdot10^{32}$$

<p align="center"><strong>파장을 이용해 에너지를 구하는 공식</strong></p>

| n | 1-2 | 2-3 | 3-4 | 4-5 | 5-6 | 6-7 | 8-8 |
|--|--|--|--|--|--|--|--|
| E `eV` | 10.2050 | 1.8898 | 0.6614 | 0.3061 | 0.1663 | 0.1002 | 0.0650 |

<p align="center"><strong>그렇게 구한 에너지</strong></p>

보어 원자 모형과 수소 원자의 슈뢰딩거 방정식에서 n 껍질의 에너지는 다음의 수식을 만족한다.

$$E_n = -\frac{ℏ^2}{2 \mu a_0 ^ 2} \frac{1}{n^2}$$

<p align="center"><strong>수소 원자의 슈뢰딩거 방정식에서의 에너지 공식</strong></p>

여기서 1 / n<sup>2</sup>을 N<sub>th</sub>(n)로 치환하고, J를 eV로 변환하면 위에서 구한 방식과 거의 일치하는 것을 알 수 있다. 여기서 에너지는 양수로 표기하기로 하고 이를 E<sub>th</sub>(n)이라 명한다.

$$E_{th}(n) = \frac{ℏ^2}{2 \mu a_0 ^ 2}N_{th}(n) \hspace{10pt} \\\{ n \geqq 2 \\\}$$

<p align="center"><strong>그 공식으로 각 구간의 에너지를 구하는 방법</strong></p>

| n | 1-2 | 2-3 | 3-4 | 4-5 | 5-6 | 6-7 | 8-8 |
|--|--|--|--|--|--|--|--|
| 방출 파장에서 `eV` | 10.2050 | 1.8898 | 0.6614 | 0.3061 | 0.1663 | 0.1002 | 0.0650 |
| E<sub>th</sub>(n) `eV` | 10.2009 | 1.8890 | 0.6611 | 0.3060 | 0.1662 | 0.1002 | 0.0650 |

<p align="center"><strong>두 방법으로 구한 에너지를 비교한 표</strong></p>

<p align="center">
 <img src="./images/pic5.png">
</p>

<p align="center"><strong>광자-에테르가 가진 EC</strong><br>덧셈으로 계산 가능</p>

그림에서 볼 수 있듯, 이제 에테르가 가진 에너지는 덧셈으로 쉽게 구할 수 있게 되었다. 에너지, 파장, 심지어는 질량 마저도 구할 수 있게 되었다.

두 방법 모두 상수값들을 제외하면 N<sub>th</sub>(n)만이 변화되는 양임을 알 수 있다. 즉, 이 부분에 어떤 값이 들어가는지에 따라 에너지의 값이 변하게 된다. 이 부분을 <strong>에너지 계수(EC)</strong>라고 부르기로 하자.

### 정리

여기서 한 이야기는 모두 너무 당연한 이야기이다. 고전물리 교과서 잠깐만 보면 모두 알 수 있는 내용이다. 이건 한 세기도 전인 닐스 보어 시대에도 수소 원자에서 당연하게 딱딱 맞는 내용이다. 그러나 다전자 원자에서는 하나도 맞지 않는다. 여러분은 낚였다.

여기서 내가 원하는 것은 에테르-스파클 가설이 설득력을 가질 수 있는 조건을 제시하는 것이다.

- 첫째, 에테르가 가진 에너지는 **예상 가능**해야 한다.
- 둘째, 에테르가 가진 에너지는 **덧셈**에 의해 구할 수 있어야 한다.
- 셋째, 위 조건은 **다전자 원자**에서도 성립 해야한다.

위 조건을 만족한다면, 에너지가 에테르의 형태로 저장된다는 것을 증명할 수 있을 것이다. 다음 장에서는 다전자 원자에 대해 다루고자 한다.

---

- 목차: [목차](./README.md)
- 이전 문서: [가설 제시](./hypothesis.md)
- 다음 문서: [가설의 검증(2): 다 전자 원자](./atomic_spectra_data.md)
