---
workflow: motion-graphics
flow: automation
storyboard: no
message: "블루베리 섭취와 관련된 두 건강 지표 개선 정보를 롤링 숫자판으로 전달"
destination: "exercise02 MP4"
aspect: "9:16"
language: ko
audience: "AI 활용 강의 수강자와 일반 시청자"
length: "5s"
---

## Intent

기존 블루베리 피킹 영상을 배경으로 사용하고, 화면 위쪽에 다음 두 정보를 명확하게 보여준다.

1. 심혈관질환 15% 감소
2. 고혈압 10% 감소

각 퍼센트 수치는 0에서 최종값까지 위로 구르는 숫자판처럼 애니메이션된다. 숫자 롤링이 끝난 뒤에는 최종값을 충분히 읽을 수 있도록 고정한다.

## Assets

- 사용자 제공 영상: `exercise02/blueberry_mov.mp4`
- 새 프로젝트 안으로 복사해 로컬 자산으로 고정한다.
- 배경 영상의 첫 3초를 사용한다.

## Design

- 세로형 1080×1920, 24fps, 3초
- 두 정보 패널은 화면 상단 안전 영역 안에 세로로 배치한다.
- 어두운 반투명 패널과 밝은 텍스트로 배경 위 가독성을 확보한다.
- 수치는 블루베리 보라색 계열로 강조하고, 숫자는 tabular numerals를 사용한다.
- 별도의 음원이나 내레이션은 추가하지 않는다.

## Motion

- 0.15–0.50초: 두 패널이 짧은 시차로 등장
- 0.45–1.75초: 0→15%, 0→10% 숫자판 롤링
- 1.75–3.00초: 최종 수치 고정
- 하나의 paused GSAP 루트 타임라인으로 seek-safe하게 구성한다.

## Notes

### Current revision (supersedes earlier timing/layout specifications)

- Total duration: 5 seconds; source footage range 0–5 seconds.
- Rolling runs from 0.45 to 4.00 seconds with power1.inOut easing, then holds for 1 second.
- Percent suffix is a separate fixed 72px element, separated from the 142px numeric slot by 12px.
- Each numeric digit has a non-shrinking 66px column and 4px inter-digit gap to prevent clipping.
- Export: exercise02/blueberry-health-stats-rolling-5s.mp4.

- 사용자가 결과 영상 내보내기를 명시적으로 요청했다.
- 영상 속 의료·건강 수치 문구는 사용자가 제공한 표현을 그대로 표시한다.
