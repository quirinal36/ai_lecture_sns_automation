document.addEventListener('DOMContentLoaded', () => {
  const previous = document.getElementById('hyperframes-info');
  if (!previous) return;

  const style = document.createElement('style');
  style.textContent = `
    .hf-practice { margin-top:74px; scroll-margin-top:36px; }
    .hf-practice .result-card { display:grid; grid-template-columns:minmax(250px,340px) 1fr; gap:28px; margin-top:24px; padding:24px; border:1px solid var(--line); border-radius:18px; background:#fff; }
    .hf-practice .video-wrap { overflow:hidden; border-radius:14px; background:#1e1d20; box-shadow:0 16px 38px #302a4426; }
    .hf-practice video { display:block; width:100%; aspect-ratio:9/16; object-fit:cover; }
    .hf-practice .result-copy { align-self:center; }
    .hf-practice .result-copy h3 { margin:12px 0 8px; font-size:22px; letter-spacing:-.7px; }
    .hf-practice .result-copy > p { margin:0; color:var(--muted); }
    .hf-practice .specs { display:flex; flex-wrap:wrap; gap:7px; margin:18px 0; }
    .hf-practice .specs span { padding:5px 9px; border-radius:6px; background:#f0edf7; color:#62577f; font:700 11px 'DM Mono',monospace; }
    .hf-practice .checks { display:grid; gap:8px; margin:18px 0 20px; }
    .hf-practice .check { padding:10px 12px; border-radius:9px; background:#f8f6f2; font-size:13px; }
    .hf-practice .check b { color:#55467e; }
    .hf-practice .actions { display:flex; flex-wrap:wrap; gap:8px; }
    .hf-practice .actions a { display:inline-flex; align-items:center; justify-content:center; border-radius:7px; padding:8px 11px; background:#29282a; color:#fff; text-decoration:none; font-size:12px; font-weight:700; }
    .hf-practice .actions a.secondary { background:#efecf5; color:#5b5270; }
    .hf-practice .guide { margin-top:28px; }
    .hf-practice .guide h3 { margin:0 0 14px; font-size:18px; }
    .hf-practice .steps { display:grid; grid-template-columns:repeat(2,1fr); gap:10px; }
    .hf-practice .step { border:1px solid var(--line); border-radius:12px; padding:17px; background:#fff; }
    .hf-practice .step-num { display:block; margin-bottom:9px; color:#8678bd; font:700 11px 'DM Mono',monospace; }
    .hf-practice .step b { display:block; margin-bottom:5px; font-size:14px; }
    .hf-practice .step p { margin:0; color:var(--muted); font-size:12px; }
    .hf-practice .prompt-card { position:relative; margin-top:18px; overflow:hidden; border-radius:14px; background:#29282a; color:#f7f3ec; }
    .hf-practice .prompt-head { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:13px 16px; border-bottom:1px solid #454247; }
    .hf-practice .prompt-head b { font-size:13px; }
    .hf-practice .prompt-copy { border:0; border-radius:6px; padding:7px 10px; background:#f4e9a9; color:#554a29; cursor:pointer; font:700 11px Pretendard,Arial,sans-serif; }
    .hf-practice .prompt-card pre { max-height:none; overflow:visible; margin:0; padding:18px; color:#f7f3ec; font:12px/1.8 'DM Mono',monospace; }
    .hf-practice .finish-note { margin-top:14px; padding:13px 15px; border-left:3px solid #8979c3; background:#f5f2fc; color:#625b70; font-size:13px; }
    .hf-practice code { padding:2px 5px; border-radius:4px; background:#e8e3f5; color:#554a76; font:11px 'DM Mono',monospace; }
    @media(max-width:800px) { .hf-practice .result-card { grid-template-columns:minmax(0,330px); justify-content:center; } .hf-practice .result-copy { padding-top:4px; } }
    @media(max-width:620px) { .hf-practice .steps { grid-template-columns:1fr; } .hf-practice .result-card { padding:16px; } }
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.id = 'hyperframes-practice-01';
  section.className = 'hf-practice';
  section.innerHTML = `
    <span class="eyebrow"><i></i> HyperFrames 실습 01 · 타이틀 영상</span>
    <h2 style="margin-top:16px">사진에 제목을 추가하고<br>세로 영상으로 내보내기</h2>
    <p class="desc">블루베리 피킹 사진 한 장에 중앙 타이틀을 더해 6초 분량의 MP4 영상을 만듭니다. 아래 순서와 프롬프트를 그대로 따라 해보세요.</p>

    <article class="result-card">
      <div class="video-wrap">
        <video controls playsinline preload="metadata" poster="https://raw.githubusercontent.com/quirinal36/ai_lecture_sns_automation/main/exercise02/blueberry-slow-aging-title-poster.jpg" aria-label="블루베리 저속노화 타이틀 영상 결과물">
          <source src="https://raw.githubusercontent.com/quirinal36/ai_lecture_sns_automation/main/exercise02/blueberry-slow-aging-title.mp4" type="video/mp4">
          브라우저가 MP4 영상 재생을 지원하지 않습니다.
        </video>
      </div>
      <div class="result-copy">
        <span class="eyebrow"><i></i> 완성 결과</span>
        <h3>블루베리, 나의 저속노화 비법</h3>
        <p>원본 사진을 유지하면서 화면 중앙에 크고 선명한 제목을 더한 짧은 세로형 타이틀 영상입니다.</p>
        <div class="specs"><span>1080 × 1920</span><span>9:16</span><span>6 SEC</span><span>30 FPS</span><span>MP4</span></div>
        <div class="checks">
          <div class="check"><b>배치</b> · 제목을 화면 정중앙에 크게 표시</div>
          <div class="check"><b>블루베리</b> · 짙은 보라색으로 강조</div>
          <div class="check"><b>저속노화</b> · 밝은 노란색으로 강조</div>
        </div>
        <div class="actions">
          <a href="https://raw.githubusercontent.com/quirinal36/ai_lecture_sns_automation/main/exercise02/blueberry-slow-aging-title.mp4" target="_blank" rel="noopener noreferrer">결과 MP4 다운로드</a>
          <a class="secondary" href="https://raw.githubusercontent.com/quirinal36/ai_lecture_sns_automation/main/exercise01/image_01%28before%29.png" target="_blank" rel="noopener noreferrer">원본 사진 열기</a>
        </div>
      </div>
    </article>

    <div class="guide">
      <h3>그대로 따라 하기</h3>
      <div class="steps">
        <div class="step"><span class="step-num">STEP 01</span><b>원본 사진을 준비합니다</b><p>위의 ‘원본 사진 열기’를 눌러 블루베리 피킹 이미지를 저장한 뒤 Codex 작업창에 첨부합니다.</p></div>
        <div class="step"><span class="step-num">STEP 02</span><b>프롬프트를 복사합니다</b><p>아래 ‘프롬프트 복사’ 버튼을 누르고, 이미지가 첨부된 대화에 그대로 입력합니다.</p></div>
        <div class="step"><span class="step-num">STEP 03</span><b>Codex의 제작 안내를 진행합니다</b><p>HyperFrames가 영상 구성을 정리하면 내용을 확인하고 제작과 렌더링을 진행합니다.</p></div>
        <div class="step"><span class="step-num">STEP 04</span><b>완성된 MP4를 확인합니다</b><p>렌더링이 끝나면 Codex가 알려주는 파일을 열어 제목 위치와 색상을 결과 예시와 비교합니다.</p></div>
      </div>
    </div>

    <div class="prompt-card">
      <div class="prompt-head"><b>Codex에 입력할 프롬프트</b><button type="button" class="prompt-copy">프롬프트 복사</button></div>
      <pre class="practice-prompt">블루베리 피킹하는 (before) 사진에 hyperframes 를 활용해 제목을 추가 해볼거야.
제목 : "블루베리, 나의 저속노화 비법"
제목이 화면의 정중앙에 큰 텍스트로 보여지면 좋겠어.
색상 :
- 블루베리 - 짙은 보라색
- 저속노화 - 밝은 노란색
지금 바로 적용하고 동영상파일로 내보내기 해줘.</pre>
    </div>
    <div class="finish-note"><b>확인 포인트</b> · 원본 사진이 세로 화면을 가득 채우는지, 제목이 중앙에서 잘 읽히는지, 두 핵심 단어의 색상이 요청대로 구분되는지 확인하세요.</div>
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
    link.href = '#hyperframes-practice-01';
    link.textContent = 'HyperFrames 실습 01';
    toc.appendChild(link);
  }
});
