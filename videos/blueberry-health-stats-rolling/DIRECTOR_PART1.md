# Director Part 1 — DRAFT

## Classification

- Category: `stat`
- Search required: no
- Asset strategy: use the already frozen local video; `asset_needs: []`
- Duration: 3 seconds
- Frame rate: 24 fps
- Canvas: 1080 × 1920 (`9:16`)
- Export intent: MP4
- Audio: none; do not add music, narration, or sound effects
- Part 1 boundary: no catalog block selection, composition code, or render in this phase

## Frozen inputs

- Background video: `assets/video/blueberry_mov.mp4`
- Source properties: 1080 × 1920, 5 seconds
- Usage: use only `00:00.00–00:03.00`; keep the original moving image and framing
- Local font: `assets/fonts/NotoSansKR-VF.ttf`

## Exact on-screen copy

The following two phrases are locked and must appear exactly as written, with no paraphrase or additional copy:

1. `심혈관질환 15% 감소`
2. `고혈압 10% 감소`

Each phrase may be typographically separated into a label and a numeric result inside its panel, but the complete visible reading order must remain exactly `심혈관질환 15% 감소` and `고혈압 10% 감소`.

## Envelope

- Style: clean wellness editorial stat overlay over live blueberry-picking footage
- Palette: dark translucent navy-purple panels, warm white labels, blueberry-purple numerals, restrained cream borders
- Font: Noto Sans KR; all rolling numerals use tabular numerals
- Dominant motion idea: two vertical odometer reels roll upward from zero to their supplied percentage targets, then lock together
- Composition: two stacked panels inside the top safe area; background remains full-frame and visually secondary to the stats

## Layout intent

- Keep both panels in the upper safe area, stacked vertically and centered horizontally.
- Reserve approximately the top 15–40% of the portrait frame for the two panels.
- Panel 1 displays `심혈관질환 15% 감소`.
- Panel 2 displays `고혈압 10% 감소`.
- Use a dark translucent surface behind each phrase so the text stays readable over the moving footage.
- Keep panel edges, labels, and numerals fully inside mobile-safe margins.
- Emphasize `15%` and `10%` in blueberry purple; keep the condition names and `감소` bright and neutral.

## Stat content

| Panel | Label | Start | Target | Suffix | Ring |
|---|---|---:|---:|---|---|
| 1 | 심혈관질환 감소 | 0 | 15 | `%` | false |
| 2 | 고혈압 감소 | 0 | 10 | `%` | false |

The builder must preserve the exact full phrases by visually ordering each panel as condition name → rolling percentage → `감소`.

## Motion and pacing

| Time | Direction |
|---|---|
| `0.00–0.15s` | Background video establishes alone. Both panels are off or in their authored hidden state. |
| `0.15–0.35s` | Panel 1 enters the upper safe area with a short, controlled rise. |
| `0.25–0.50s` | Panel 2 follows with a small stagger and settles beneath Panel 1. |
| `0.45–1.75s` | Both numeric reels roll vertically upward. Panel 1 advances from `0` to `15%`; Panel 2 advances from `0` to `10%`. The rolls are timeline-driven, seek-safe, and decelerate into the final values. |
| `1.75–3.00s` | Both reels are locked at `15%` and `10%`. Hold every final value and both complete phrases fully static for reading. No exit animation. |

## Rolling-number requirements

- Use a vertical rolling number-board/odometer presentation, not a plain crossfade or simple text replacement.
- Panel 1 must visibly begin at `0` and finish at `15%`.
- Panel 2 must visibly begin at `0` and finish at `10%`.
- Digits move upward through the reel and settle precisely on the authored targets.
- The percent sign stays aligned with the numeral and lands with the final value.
- Both counters may share the same overall rolling window, but Panel 2 can trail Panel 1 slightly to preserve the entrance stagger.
- Final values must be reached by `1.75s` and remain unchanged through `3.00s`.
- No infinite repeat, wall-clock timer, random stepping, bounce after the lock, or motion during the final hold.

## Beat map

- Frame 4 (`0.17s`): first panel arrival
- Frame 7 (`0.29s`): second panel arrival
- Frame 11 (`0.46s`): number reels begin
- Frame 42 (`1.75s`): both final percentages lock
- Frames 42–72 (`1.75–3.00s`): final-value hold

## Shot brief

The first three seconds of the supplied blueberry-picking video play full-frame while two compact dark panels settle into the upper safe area. The exact phrases `심혈관질환 15% 감소` and `고혈압 10% 감소` remain visually complete as their percentage fields behave like upward-rolling odometer reels: `0→15%` and `0→10%`. Both reels finish at 1.75 seconds and the completed claims hold without further movement through the final frame, making the two values easy to read while preserving the original background footage.

## Part 2 handoff notes

- Confirm a reusable stat/counting component through live catalog search before naming a block.
- Prefer timeline-driven count/odometer behavior; do not use the finance-specific burst or sound treatment from `apple-money-count` unless all finance/SFX styling is removed.
- Preserve the supplied wording exactly; no disclaimer, source line, headline, icon, or decorative copy should be introduced.
