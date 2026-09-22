document.addEventListener('DOMContentLoaded', () => {
  const previous = document.getElementById('hyperframes-practice-02');
  if (!previous) return;

  const style = document.createElement('style');
  style.textContent = `
    .hf-practice .stat-preview { display:grid; gap:8px; margin:18px 0 20px; }
    .hf-practice .stat-preview div { display:grid; grid-template-columns:1fr auto auto; align-items:center; gap:9px; padding:11px 13px; border-radius:9px; background:#211a35; color:#fff8e9; }
    .hf-practice .stat-preview b { font-size:13px; }
    .hf-practice .stat-preview strong { color:#c9a7ff; font:900 25px 'DM Mono',monospace; }
    .hf-practice .stat-preview span { font-size:12px; font-weight:700; }
    .hf-practice .progress-story { display:grid; grid-template-columns:repeat(3,1fr); gap:7px; margin:16px 0 20px; }
    .hf-practice .progress-story div { padding:10px; border-radius:9px; background:#f8f6f2; text-align:center; }
    .hf-practice .progress-story b { display:block; color:#55467e; font-size:12px; }
    .hf-practice .progress-story span { color:var(--muted); font-size:11px; }
    @media(max-width:520px) { .hf-practice .progress-story { grid-template-columns:1fr; } }
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.id = 'hyperframes-practice-03';
  section.className = 'hf-practice';
  section.innerHTML = `
    <span class="eyebrow"><i></i> HyperFrames 실습 03 · 롤링 숫자판</span>
    <h2 style="margin-top:16px">영상 위에 건강 수치를 넣고<br>숫자를 0부터 롤링하기</h2>
    <p class="desc">이번에는 정지 사진 대신 움직이는 블루베리 피킹 영상을 배경으로 사용합니다. 두 건강 수치가 0에서 목표값까지 숫자판처럼 올라가는 5초 영상을 만들어 봅니다.</p>

    <article class="result-card">
      <div class="video-wrap">
        <video controls playsinline preload="metadata" poster="https://raw.githubusercontent.com/quirinal36/ai_lecture_sns_automation/main/exercise02/blueberry-health-stats-rolling-5s-poster.jpg" aria-label="블루베리 건강 수치 롤링 숫자판 영상 결과물">
          <source src="https://raw.githubusercontent.com/quirinal36/ai_lecture_sns_automation/main/exercise02/blueberry-health-stats-rolling-5s.mp4" type="video/mp4">
          브라우저가 MP4 영상 재생을 지원하지 않습니다.
        </video>
      </div>
      <div class="result-copy">
        <span class="eyebrow"><i></i> 완성 결과</span>
        <h3>블루베리 건강 수치 롤링 숫자판</h3>
        <p>움직이는 영상 위에 두 개의 정보 패널을 배치하고, 퍼센트 숫자만 세로로 굴러 최종 수치에 도달하도록 만든 통계 모션입니다.</p>
        <div class="specs"><span>1080 × 1920</span><span>9:16</span><span>5 SEC</span><span>24 FPS</span><span>MP4</span></div>
        <div class="stat-preview">
          <div><b>심혈관질환</b><strong>15%</strong><span>감소</span></div>
          <div><b>고혈압</b><strong>10%</strong><span>감소</span></div>
        </div>
        <div class="progress-story">
          <div><b>시작</b><span>두 수치 모두 0%</span></div>
          <div><b>롤링</b><span>숫자가 위로 이동</span></div>
          <div><b>고정</b><span>15% · 10% 유지</span></div>
        </div>
        <div class="actions">
          <a href="https://raw.githubusercontent.com/quirinal36/ai_lecture_sns_automation/main/exercise02/blueberry-health-stats-rolling-5s.mp4" target="_blank" rel="noopener noreferrer">결과 MP4 다운로드</a>
          <a class="secondary" href="https://raw.githubusercontent.com/quirinal36/ai_lecture_sns_automation/main/exercise02/blueberry_mov.mp4" target="_blank" rel="noopener noreferrer">원본 영상 열기</a>
        </div>
      </div>
    </article>

    <div class="guide">
      <h3>그대로 따라 하기</h3>
      <div class="steps">
        <div class="step"><span class="step-num">STEP 01</span><b>원본 영상을 첨부합니다</b><p>‘원본 영상 열기’에서 블루베리 피킹 영상을 저장한 뒤 Codex 작업창에 첨부합니다.</p></div>
        <div class="step"><span class="step-num">STEP 02</span><b>통계 문구를 정확히 입력합니다</b><p>질환 이름, 목표 퍼센트, ‘감소’가 한 문장으로 읽히도록 아래 프롬프트를 그대로 입력합니다.</p></div>
        <div class="step"><span class="step-num">STEP 03</span><b>숫자판 움직임을 지정합니다</b><p>단순한 숫자 교체가 아니라 0에서 목표값까지 위로 구르는 숫자판 효과를 요청합니다.</p></div>
        <div class="step"><span class="step-num">STEP 04</span><b>최종 수치를 확인합니다</b><p>영상 마지막에 15%와 10%가 충분히 읽히도록 멈춰 있고, 배경 영상도 계속 재생되는지 확인합니다.</p></div>
      </div>
    </div>

    <div class="prompt-card">
      <div class="prompt-head"><b>Codex에 입력할 프롬프트</b><button type="button" class="prompt-copy">프롬프트 복사</button></div>
      <pre class="practice-prompt">첨부한 블루베리 피킹 영상을 배경으로 hyperframes를 활용해 건강 수치 정보를 보여주는 세로 영상을 만들 거야.

화면 위쪽에 아래 두 문구를 세로로 배치해줘.
- 심혈관질환 15% 감소
- 고혈압 10% 감소

각 퍼센트 수치는 0%에서 시작해 목표값인 15%와 10%까지 위로 구르는 숫자판처럼 애니메이션해줘.
롤링이 끝난 뒤에는 최종 수치가 충분히 읽히도록 멈춰서 보여줘.

어두운 반투명 패널과 밝은 글자를 사용하고, 퍼센트 수치는 블루베리 보라색으로 강조해줘.
영상은 9:16 세로 비율, 5초 분량으로 만들고 원본 영상의 움직임은 유지해줘.
음악, 음성, 추가 문구는 넣지 말아줘.
지금 바로 적용하고 MP4 동영상 파일로 내보내기 해줘.</pre>
    </div>
    <div class="finish-note"><b>확인 포인트</b> · 배경 영상이 자연스럽게 움직이는지, 숫자가 0부터 위로 굴러가는지, 마지막 화면에서 ‘심혈관질환 15% 감소’와 ‘고혈압 10% 감소’가 온전히 읽히는지 확인하세요.</div>
  `;
  previous.insertAdjacentElement('afterend', section);

  const copyButton = section.querySelector('.prompt-copy');
  const prompt = section.querySelector('.practice-prompt');
  copyButton.addEventListener('click', async () => {
    const originalLabel = copyButton.textContent;
    try {
      await navigator.clipboard.writeText(prompt.innerText);
      copyButton.textContent = '복사됨 ✓';
    } catch (error) {
      copyButton.textContent = '복사 실패';
    }
    setTimeout(() => { copyButton.textContent = originalLabel; }, 1400);
  });

  const toc = document.querySelector('.toc');
  if (toc) {
    const link = document.createElement('a');
    link.href = '#hyperframes-practice-03';
    link.textContent = 'HyperFrames 실습 03';
    toc.appendChild(link);
  }
});
