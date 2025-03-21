# MLBB-Winrate
Simpelnya ini adalah data winrate hero di MLBB.
Karna website Mobile Legends memiliki [Javascript Rendering](https://www.geeksforgeeks.org/what-is-javascript-rendering/), di repository ini dapat di fetch tanpa melalui tahap [Javascript Rendering](https://www.geeksforgeeks.org/what-is-javascript-rendering/).

- [x] Data di update setiap hari, **00.00 WIB /  17:00 UTC** melalui [Cron Jobs Workflow](https://github.com/Pren7/MLBB-Winrate/blob/main/.github/workflows/main.yml)

---
## Fitur
- [x] Dapatkan data winrate setiap hero
- [ ] Dapatkan data winrate **"Past 30 day, Past 15 day, Past 7 day**"
- [x] Dapatkan detail setiap hero "**Nama, Icon, Pickrate, Winrate, Banrate**"
- [x] Dapatkan data winrate "**Past 1 day, All Rank**"

---
# Mulai Fetch Data
- Fetch ke **URL**:
  > **https://raw.githubusercontent.com/Pren7/MLBB-Winrate/refs/heads/main/winrate.json**
- Lalu kamu akan menerima sample data seperti:
---
```json
[
  {
    "name": "Floryn",
    "icon": "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_5a57b91e4914cf071a3849e352e530a5.png",
    "winrate": "58.83%",
    "banrate": "3.69%",
    "pickrate": "0.83%"
  },
  {
    "name": "Lolita",
    "icon": "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_474cea36a4bfdc7bf7d94530853a99b2.png",
    "winrate": "57.14%",
    "banrate": "0.13%",
    "pickrate": "0.11%"
  },
  {
    "name": "Irithel",
    "icon": "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_a7c51b517dbce49dac4e537bd4ab4f87.png",
    "winrate": "56.49%",
    "banrate": "0.52%",
    "pickrate": "1.16%"
  },
  {
    "name": "Argus",
    "icon": "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_0bd96658e5b8ec578226ea1622bd7231.png",
    "winrate": "55.72%",
    "banrate": "3.07%",
    "pickrate": "1.03%"
  },
  {
    "name": "Popol and Kupa",
    "icon": "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_1acbb23b9a50f412104047a60eb18808.png",
    "winrate": "55.69%",
    "banrate": "0.33%",
    "pickrate": "0.49%"
  },
  {
    "name": "Wanwan",
    "icon": "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage_1_9_47/100_44bfa1dc44deb8d7620605faaa9ffae7.png",
    "winrate": "55.25%",
    "banrate": "0.53%",
    "pickrate": "0.40%"
  }
]
```
- **Rank**: (All)
- **Date**: (Today)
- **Sort**: Winrate
- **Past**: 1 Day
---
# More Info will be Collected Soon.
# Collected from [MLBB/rank](https://m.mobilelegends.com/rank)
