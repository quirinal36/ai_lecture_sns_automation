document.addEventListener('DOMContentLoaded', () => {
  const previous = document.getElementById('hyperframes-practice-01');
  if (!previous) return;

  const style = document.createElement('style');
  style.textContent = `
    .hf-practice .word-sequence { display:flex; flex-wrap:wrap; align-items:center; gap:7px; margin:18px 0; }
    .hf-practice .word-sequence span { padding:7px 10px; border-radius:7px; background:#f0edf7; color:#564a79; font-size:12px; font-weight:800; }
    .hf-practice .word-sequence i { color:#a39bad; font-style:normal; }
    .hf-practice .motion-key { display:grid; grid-template-columns:repeat(3,1fr); gap:7px; margin:16px 0 20px; }
    .hf-practice .motion-key div { padding:10px; border-radius:9px; background:#f8f6f2; text-align:center; }
    .hf-practice .motion-key b { display:block; color:#55467e; font-size:12px; }
    .hf-practice .motion-key span { color:var(--muted); font-size:11px; }
    @media(max-width:520px) { .hf-practice .motion-key { grid-template-columns:1fr; } }
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.id = 'hyperframes-practice-02';
  section.className = 'hf-practice';
  section.innerHTML = `
    <span class="eyebrow"><i></i> HyperFrames 실습 02 · 롤링 타이포그래피</span>
    <h2 style="margin-top:16px">세 문구를 3D 롤링 효과로<br>차례대로 보여주기</h2>
    <p class="desc">같은 블루베리 피킹 사진 위에서 건강 효능 세 가지가 화면 중앙을 차례로 지나가는 5초 분량의 타이포그래피 영상을 만듭니다.</p>

    <article class="result-card">
      <div class="video-wrap">
        <video controls playsinline preload="metadata" poster="https://raw.githubusercontent.com/quirinal36/ai_lecture_sns_automation/main/exercise02/blueberry-health-rolling-words-poster.jpg" aria-label="블루베리 건강 효능 롤링 타이포그래피 영상 결과물">
          <source src="https://raw.githubusercontent.com/quirinal36/ai_lecture_sns_automation/main/exercise02/blueberry-health-rolling-words.mp4" type="video/mp4">
          브라우저가 MP4 영상 재생을 지원하지 않습니다.
        </video>
      </div>
      <div class="result-copy">
        <span class="eyebrow"><i></i> 완성 결과</span>
        <h3>블루베리 건강 효능 롤링 타이포그래피</h3>
        <p>배경 사진은 고정하고, 세 문구만 하나의 세로형 3D 릴처럼 움직여 현재 문구에 시선이 집중되도록 만든 영상입니다.</p>
        <div class="specs"><span>1080 × 1920</span><span>9:16</span><span>5 SEC</span><span>30 FPS</span><span>MP4</span></div>
        <div class="word-sequence" aria-label="문구 재생 순서"><span>저속 노화</span><i>→</i><span>비만 방지</span><i>→</i><span>혈관 청소</span></div>
        <div class="motion-key">
          <div><b>들어오는 문구</b><span>아래에서 중앙으로</span></div>
          <div><b>현재 문구</b><span>크고 선명하게</span></div>
          <div><b>지난 문구</b><span>작고 투명하게</span></div>
        </div>
        <div class="actions">
          <a href="https://raw.githubusercontent.com/quirinal36/ai_lecture_sns_automation/main/exercise02/blueberry-health-rolling-words.mp4" target="_blank" rel="noopener noreferrer">결과 MP4 다운로드</a>
          <a class="secondary" href="https://raw.githubusercontent.com/quirinal36/ai_lecture_sns_automation/main/exercise01/image_01%28before%29.png" target="_blank" rel="noopener noreferrer">원본 사진 열기</a>
        </div>
      </div>
    </article>

    <div class="guide">
      <h3>그대로 따라 하기</h3>
      <div class="steps">
        <div class="step"><span class="step-num">STEP 01</span><b>원본 사진을 첨부합니다</b><p>실습 01에서 사용한 블루베리 피킹 원본 사진을 Codex 작업창에 다시 첨부합니다.</p></div>
        <div class="step"><span class="step-num">STEP 02</span><b>문구와 순서를 지정합니다</b><p>아래 프롬프트를 복사해 세 문구가 표시될 순서와 중앙 배치를 정확하게 전달합니다.</p></div>
        <div class="step"><span class="step-num">STEP 03</span><b>움직임의 차이를 확인합니다</b><p>현재 문구는 크고 선명하게, 앞뒤 문구는 축소·회전·투명 처리되도록 요청했는지 확인합니다.</p></div>
        <div class="step"><span class="step-num">STEP 04</span><b>완성 영상을 재생합니다</b><p>각 문구가 중앙에 충분히 머무르고 마지막 ‘혈관 청소’가 정지된 상태로 끝나는지 확인합니다.</p></div>
      </div>
    </div>

    <div class="prompt-card">
      <div class="prompt-head"><b>Codex에 입력할 프롬프트</b><button type="button" class="prompt-copy">프롬프트 복사</button></div>
      <pre class="practice-prompt">블루베리 피킹하는 (before) 사진에 hyperframes를 활용해 블루베리의 건강 효능을 보여주는 세로 영상을 만들 거야.

문구는 아래 순서대로 보여줘.
- 저속 노화
- 비만 방지
- 혈관 청소

세 문구가 화면 정중앙에서 세로형 3D 롤링 캐러셀처럼 하나씩 중심으로 올라오게 해줘.
현재 중심에 있는 문구는 크고 선명하게 보여주고, 지나간 문구는 작아지고 투명해지면서 화면 뒤쪽으로 물러나는 느낌으로 표현해줘.

영상은 9:16 세로 비율, 5초 분량으로 만들어줘.
배경 사진은 고정하고 음성, 음악, 추가 문구, 카메라 움직임은 넣지 말아줘.
지금 바로 적용하고 MP4 동영상 파일로 내보내기 해줘.</pre>
    </div>
    <div class="finish-note"><b>확인 포인트</b> · 문구 순서가 정확한지, 중앙 문구가 가장 잘 읽히는지, 문구가 바뀔 때 하나의 축을 따라 자연스럽게 회전하는지 확인하세요.</div>
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
    link.href = '#hyperframes-practice-02';
    link.textContent = 'HyperFrames 실습 02';
    toc.appendChild(link);
  }
});
