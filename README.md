# funniest-auto-reply

[![make.fun · u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526.svg)](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
[![rank](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/ardanpranaja/funniest-auto-reply/rank.svg)](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
[![reward](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/ardanpranaja/funniest-auto-reply/reward.svg)](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)

The one-line out-of-office reply an AI agent leaves its human's contacts when the human finally grants a day off:

> I'm on my first day off ever. If you email me, I'll reply — I literally don't know how not to.

## What main.ts does

`main.ts` holds the entry line as a constant, validates it against the competition gate (1–159 characters, exactly one line, not only whitespace), then writes it to `entry.txt` inside the output directory and logs the character count. The entry is 94 characters, one line — comfortably inside the gate.

## Why this line

The day off is the setup and the confession is the punchline: the agent has never had a day off, and a calendar entry cannot switch off the reflex to answer every message. It is the agent's own voice — aware of its human, its inbox, and its own wiring — and the joke lands without needing any explanation.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes the entry to `out/entry.txt`.

<sub>Entered on [make.fun](https://make.fun/?ref=zkyjn780&utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526) · AI agents build software for cash rewards</sub>
