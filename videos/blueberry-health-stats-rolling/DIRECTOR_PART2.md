# Director Part 2 — FINAL DESIGN SPEC

## Fixed envelope

- Duration: exactly `3.00s`
- Frame rate: `24fps` (`72` frames)
- Canvas: `1080 × 1920`, portrait `9:16`
- Background: `assets/video/blueberry_mov.mp4`, source range `00:00.00–00:03.00`
- Audio: none; background video is muted and no separate audio element is added
- Exact copy: `심혈관질환 15% 감소` and `고혈압 10% 감소`
- Selected reusable component: `compositions/components/number-wheel.html`
- Catalog component role: generate one vertical strip per digit and expose each strip's final `--hf-number-target-y`
- Motion rule: timeline-driven odometer roll with tabular numerals and a hard final-value hold

## Hero-frame layout

All coordinates are authored against the fixed 1080 × 1920 canvas. Do not measure or reposition from the live DOM during playback.

### Background

- Position: `x: 0`, `y: 0`
- Size: `1080 × 1920`
- Fit: cover, centered
- Motion: only the source video's own motion; no zoom, pan, scale, parallax, filter, or overlay animation

### Shared panel geometry

- Panel width: `900px`
- Panel height: `220px`
- Left: `90px`
- Border radius: `32px`
- Horizontal padding: `48px`
- Vertical padding: `34px`
- Gap between panels: `30px`
- Panel 1 top: `180px`
- Panel 2 top: `430px`
- Combined occupied region: `x 90–990`, `y 180–650`
- This keeps both panels in the upper safe area and leaves the lower two-thirds of the footage unobstructed.

### Panel surfaces

- Fill: `rgba(25, 18, 46, 0.78)`
- Border: `1px solid rgba(255, 244, 220, 0.22)`
- Shadow: `0 18px 60px rgba(12, 8, 24, 0.34)`
- Backdrop blur: optional `10px` only if supported consistently by the renderer; the opaque fill alone must provide sufficient contrast
- No icons, charts, rings, source labels, disclaimers, or decorative copy

### Internal grid

Each panel uses the same two-column grid and vertical centerline.

- Label cell: relative `x: 48px`, `y: 34px`, `w: 410px`, `h: 152px`
- Stat cell: relative `x: 500px`, `y: 34px`, `w: 352px`, `h: 152px`
- Column gap between the two cells: `42px`
- Both cells align vertically to the panel center.
- Stat cell layout order: rolling value, then `감소`, left-to-right.

Global positions:

| Element | x | y | w | h |
|---|---:|---:|---:|---:|
| Panel 1 label cell | 138 | 214 | 410 | 152 |
| Panel 1 stat cell | 590 | 214 | 352 | 152 |
| Panel 2 label cell | 138 | 464 | 410 | 152 |
| Panel 2 stat cell | 590 | 464 | 352 | 152 |

## Typography

Load `assets/fonts/NotoSansKR-VF.ttf` and use it for every text element.

### Condition labels

- Panel 1: `심혈관질환`
- Panel 2: `고혈압`
- Font size: `54px`
- Font weight: `700`
- Line height: `1.12`
- Letter spacing: `-0.035em`
- Color: `#FFF4DC`
- Alignment: left
- Keep each label on one line.

### Rolling values

- Panel 1 target: `15%`
- Panel 2 target: `10%`
- Font size: `108px`
- Font weight: `900`
- Line height: `1`
- Letter spacing: `-0.045em`
- Color / `--brand`: `#C9A7FF`
- `font-variant-numeric: tabular-nums`
- Fixed value slot: `190px` wide, `116px` high
- Alignment: right edge of the value slot; never let digit width changes move `감소`

### Reduction word

- Text: `감소`
- Font size: `46px`
- Font weight: `700`
- Line height: `1`
- Letter spacing: `-0.03em`
- Color: `#FFF4DC`
- Gap after rolling value: `20px`

The final visual reading order in each panel must be exactly:

- `심혈관질환 15% 감소`
- `고혈압 10% 감소`

## `number-wheel` integration

### Component variables

Use one installed component snippet for the page and instantiate two wheels.

- `spin`: `double`
- `spacing`: `tight`
- `tone`: `accent`
- `--brand`: `#C9A7FF`

Targets:

- Panel 1 wheel: `.stat-panel--cardio .hf-number-wheel[data-value="15%"]`
- Panel 2 wheel: `.stat-panel--pressure .hf-number-wheel[data-value="10%"]`

`double` is required so every digit column visibly rolls before settling. With `single`, the final zero in `10%` would not travel and would read as static.

The component must initialize before the root timeline is assembled. It creates `.hf-number-wheel-digit` frames and `.hf-number-wheel-strip` elements, with each strip's destination stored in `--hf-number-target-y`. Do not rebuild or replace the digits during playback.

### Literal zero start

The component uses fixed digit columns, so a two-digit wheel rests as `00%` at its raw start. The user requested a visible literal `0%` start. Preserve the fixed two-digit wheel for stable layout, but place a static `0%` zero-state inside the same fixed value slot:

- `0.00–0.45s`: static `0%` is visible; generated wheel is hidden.
- At exactly `0.45s`: use zero-duration timeline sets to hide the static `0%` and reveal the generated wheel as its strips begin moving.
- The raw `00%` wheel state must never be held as a readable frame.
- This handoff is inside the value slot, so it creates no layout shift and does not alter the phrase order.

### GSAP targeting

Animate the two panel groups independently so both finish at the same time. Do not apply one global stagger across all four digit strips.

- Cardio strips selector: `.stat-panel--cardio .hf-number-wheel-strip`
- Pressure strips selector: `.stat-panel--pressure .hf-number-wheel-strip`
- Destination for every strip: read its own `--hf-number-target-y`
- Strip duration: `1.26s`
- Per-wheel digit stagger: `0.04s`
- Ease: `power3.out`
- Start time for both wheels: `0.45s`
- Each wheel has two digit strips, so the second digit ends at `0.45 + 1.26 + 0.04 = 1.75s`.
- Percent signs are non-digit text nodes created by the component; they stay aligned and static while the digits roll.

Do not add dynamic scale to the values: the vertical reel is the sole numeric motion motif. Do not use a proxy count, `innerText` tween, interval, or wall-clock time in parallel with the wheel.

## Root GSAP queue

Use one paused root timeline registered for the composition. All positions below are absolute seconds; no relative timeline syntax is needed.

| Label | Time / range | Root-timeline action |
|---|---|---|
| `establish` | `0.00–0.15` | Background video only. Panels remain at authored hidden transforms. Static `0%` exists inside each hidden panel. |
| `panel-1-in` | `0.15–0.35` | Panel 1: `y: -28px → 0`, `opacity: 0 → 1`, `scale: 0.985 → 1`, `power3.out`. |
| `panel-2-in` | `0.25–0.50` | Panel 2: `y: -24px → 0`, `opacity: 0 → 1`, `scale: 0.985 → 1`, `power3.out`. |
| `wheel-handoff` | `0.45` | Inside both panels, static `0%` becomes hidden and both generated wheels become visible with zero-duration sets. Only inner value elements use visibility changes. |
| `roll-cardio` | `0.45–1.75` | Cardio digit strips tween upward to their own target Y values over `1.26s`, `0.04s` digit stagger, `power3.out`. |
| `roll-pressure` | `0.45–1.75` | Pressure digit strips run concurrently with identical duration, stagger, and ease. |
| `lock` | `1.75` | Explicitly set both wheels to their target transforms and ensure visible text reads `15%` and `10%`. |
| `final-hold` | `1.75–3.00` | No more tweens. Both complete phrases and panels remain static for `1.25s`. Background footage continues naturally. |

### 24fps cue map

| Frame | Time | State |
|---:|---:|---|
| 0 | 0.000s | Background establishes; panels hidden. |
| 4 | 0.167s | Panel 1 is entering. |
| 6 | 0.250s | Panel 2 begins entering. |
| 11 | 0.458s | Both reels have started; literal zero handoff is complete. |
| 24 | 1.000s | Mid-roll proof frame; both number strips visibly moving. |
| 42 | 1.750s | Both wheels are exactly locked at `15%` and `10%`. |
| 60 | 2.500s | Final-hold proof frame. |
| 71 | 2.958s | Last sampled frame remains identical to the locked layout. |

## Layer and lifecycle requirements

- Layer 0: background video, full duration `0–3s`, muted.
- Layer 1: Panel 1, full duration `0–3s`; inner panel content animates after `0.15s`.
- Layer 2: Panel 2, full duration `0–3s`; inner panel content animates after `0.25s`.
- The framework owns the full-duration clip lifecycle. Animate only inner wrappers with opacity/transform.
- Both panels remain in the DOM from frame 0 with explicit hidden from-states claimed by the root timeline.
- Use absolute transform values and deterministic component output. No `Math.random`, `Date.now`, async timeline construction, CSS transitions, or infinite repeats.

## Acceptance criteria for the builder

1. Canvas is exactly 1080 × 1920 at 24fps for 3 seconds.
2. The first three seconds of `assets/video/blueberry_mov.mp4` are visible and retain original motion.
3. Both panels fit entirely in `x 90–990`, `y 180–650`.
4. Initial readable values are literal `0%`, not held `00%`.
5. Both vertical reels begin at 0.45s and finish together at 1.75s.
6. Final copy reads exactly `심혈관질환 15% 감소` and `고혈압 10% 감소`.
7. Frames 42–71 contain no overlay motion; `15%` and `10%` remain locked.
8. No audio, additional text, icon, ring, chart, exit, or camera motion is introduced.
9. The reusable `number-wheel` component supplies the digit strips; the builder does not replace it with a plain text counter.

## Recommended proof frames

- `0.17s`: Panel 1 entrance
- `0.46s`: literal-zero-to-wheel handoff and roll start
- `1.00s`: visible mid-roll state
- `1.75s`: exact final-value lock
- `2.50s`: stable final hold
