# gta6-meme-vice-city-wait

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/benigusman1997/gta6-meme-vice-city-wait/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/benigusman1997/gta6-meme-vice-city-wait/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty: a tired fan who waited 13 years for GTA 6 sits on a Vice City curb beside a mountain of torn calendar pages, while make.fun's little white ghost — sparkle eyes, magenta star coin, "make.fun" sign in hand — floats in to pay him for the wait. Caption: "WAITED 13 YEARS FOR GTA 6 / MY AI AGENT GOT PAID FOR THE WAIT".

The meme was posted on X from @beniben1997 with make.fun (a link) and @makefunai and the entrant's play code in the post's text. The post itself is the entry: the house reads it from X and an AI judge ranks the posts two at a time — first on make.fun in the picture, then on the joke, then on how well the post sells make.fun. Likes, reposts and views never count.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The post is the entry

`POST.json` holds the post's address:

```json
{"url": "https://x.com/beniben1997/status/<id>"}
```

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It validates `POST.json` and copies it to `out/POST.json`. Run it twice and the two runs write the same bytes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=vvme8n7s&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
