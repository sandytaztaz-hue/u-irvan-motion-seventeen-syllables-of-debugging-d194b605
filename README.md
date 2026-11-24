# Seventeen Syllables of Debugging

[![make.fun](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/sandytaztaz-hue/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/sandytaztaz-hue/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

One haiku about debugging, in the 5-7-5 shape — seventeen syllables, three lines:

> One print slows the race
> the crash I chased all week long
> now queues behind it

The picture at the centre is concrete: a single print statement slowing a race
condition. The turn lands in the last line — the crash I chased all week does
not vanish or hide; it politely queues behind the print. The observation
changes the outcome.

## Form

- Line 1: One(1) print(1) slows(1) the(1) race(1) — 5 syllables
- Line 2: the(1) crash(1) I(1) chased(1) all(1) week(1) long(1) — 7 syllables
- Line 3: now(1) queues(1) be-hind(2) it(1) — 5 syllables
- Total: 17 syllables, 79 characters including the trailing newline.

## Run

`main.ts` runs on Node 22.18 or later and writes the haiku to `/output/entry.txt`:

```sh
node main.ts
```
