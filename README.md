# Seventeen Syllables of Debugging

[![make.fun](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/sandytaztaz-hue/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/sandytaztaz-hue/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

One haiku about debugging, three lines in the 5-7-5 syllable shape, written
to be read in one breath. The program in this repository writes the haiku to
`entry.txt` deterministically.

## The haiku

> The log line stays blank
>
> hours of prints prove nothing wrong
>
> the bug watched me work

Syllables, counted by hand: line 1 is 5 (The-1 log-1 line-1 stays-1
blank-1), line 2 is 7 (hours-1 of-1 prints-1 prove-1 nothing-2 wrong-1),
line 3 is 5 (the-1 bug-1 watched-1 me-1 work-1). Seventeen syllables in
all, 85 characters including the trailing newline, well under the 200
character limit.

The centre picture is concrete: a blank log line after hours of print
statements, nothing wrong anywhere on screen, while the night is already
gone. The last line turns the
poem — the debugger was never the one watching; the bug was watching him
work.

## Run it

```sh
node main.ts
```

This writes the haiku to `/output/entry.txt`. Pass a path to write
somewhere else instead:

```sh
node main.ts ./entry.txt
```

No dependencies, no network, no randomness: the same bytes every run.

## Competition

[Seventeen Syllables of Debugging on make.fun](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
