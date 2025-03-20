# MLBB-Winrate
Simpelnya ini adalah data winrate hero di MLBB.
- Diambil dari:
  > **https://m.mobilelegends.com/rank**

---
- Karna website Mobile Legends memiliki [Javascript Rendering](https://www.geeksforgeeks.org/what-is-javascript-rendering/), di repository ini dapat di fetch tanpa melalui tahap [Javascript Rendering](https://www.geeksforgeeks.org/what-is-javascript-rendering/).

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
```json
[
  {
    "name": "Lolita",
    "heroImage": "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_474cea36a4bfdc7bf7d94530853a99b2.png",
    "pickRate": "0.15%",
    "winRate": "57.77%",
    "banRate": "0.82%"
  },
  {
    "name": "Floryn",
    "heroImage": "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_5a57b91e4914cf071a3849e352e530a5.png",
    "pickRate": "0.83%",
    "winRate": "57.21%",
    "banRate": "18.93%"
  },
  {
    "name": "Julian",
    "heroImage": "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_5511ddc0ad2789b525f32ef572b017eb.png",
    "pickRate": "1.58%",
    "winRate": "56.29%",
    "banRate": "55.72%"
  }
]
```
- Dan masih banyak lainnya sampai 127+ Hero.
---
# More Info will be Collected Soon.
