document.addEventListener('DOMContentLoaded', () => {
  const previous = document.getElementById('hyperframes-practice-03');
  if (!previous) return;

  const style = document.createElement('style');
  style.textContent = `
    .hf-practice .video-wrap.square video { aspect-ratio:1/1; }
    .hf-practice .product-beats { display:grid; grid-template-columns:repeat(4,1fr); gap:7px; margin:18px 0 20px; }
    .hf-practice .product-beats div { padding:10px 8px; border-radius:9px; background:#f8f6f2; text-align:center; }
    .hf-practice .product-beats b { display:block; color:#55467e; font-size:12px; }
    .hf-practice .product-beats span { color:var(--muted); font-size:10px; }
    .hf-practice .palette-row { display:flex; align-items:center; gap:8px; margin:16px 0; color:var(--muted); font-size:12px; }
    .hf-practice .palette-row i { width:19px; height:19px; border:1px solid #00000014; border-radius:50%; }
    .hf-practice .palette-row i:nth-of-type(1) { background:#f4f1eb; }
    .hf-practice .palette-row i:nth-of-type(2) { background:#141414; }
    .hf-practice .palette-row i:nth-of-type(3) { background:#ff5937; }
    .hf-practice .palette-row i:nth-of-type(4) { background:#d4e2cb; }
    .hf-practice .palette-row i:nth-of-type(5) { background:#c9c3e9; }
    @media(max-width:620px) { .hf-practice .product-beats { grid-template-columns:1fr 1fr; } }
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.id = 'hyperframes-practice-04';
  section.className = 'hf-practice';
  section.innerHTML = `
    <span class="eyebrow"><i></i> HyperFrames 실습 04 · 앱 홍보 영상</span>
    <h2 style="margin-top:16px">가상의 앱을 기획하고<br>10초 홍보 영상으로 만들기</h2>
    <p class="desc">참고 영상의 스마트폰 회전·확대·배열 방식을 분석해, 가상의 라이프스타일 앱 PULSE를 소개하는 정사각형 프로모션 영상을 만듭니다.</p>

    <article class="result-card">
      <div class="video-wrap square">
        <video controls playsinline preload="metadata" poster="exercise02/pulse-app-promo-poster.jpg" aria-label="PULSE 가상 앱 홍보 영상 결과물">
          <source src="exercise02/pulse-app-promo.mp4" type="video/mp4">
          브라우저가 MP4 영상 재생을 지원하지 않습니다.
        </video>
      </div>
      <div class="result-copy">
        <span class="eyebrow"><i></i> 완성 결과</span>
        <h3>PULSE — 일상을, 내 리듬으로.</h3>
        <p>코드로 만든 스마트폰과 앱 화면이 한 대에서 여러 가능성으로 확장되고, 마지막에 브랜드 메시지를 남기는 10초 프로모션입니다.</p>
        <div class="specs"><span>1080 × 1080</span><span>1:1</span><span>10 SEC</span><span>30 FPS</span><span>MP4</span></div>
        <div class="product-beats">
          <div><b>등장</b><span>폰 회전</span></div>
          <div><b>접근</b><span>화면 확대</span></div>
          <div><b>확장</b><span>3×3 배열</span></div>
          <div><b>마무리</b><span>브랜드 카드</span></div>
        </div>
        <div class="palette-row"><span>컬러</span><i></i><i></i><i></i><i></i><i></i></div>
        <div class="actions">
          <a href="exercise02/pulse-app-promo.mp4" download>결과 MP4 다운로드</a>
          <a class="secondary" href="https://www.youtube.com/shorts/JruzJjQONJI" target="_blank" rel="noopener noreferrer">참고 영상 보기</a>
        </div>
      </div>
    </article>

    <div class="guide">
      <h3>그대로 따라 하기</h3>
      <div class="steps">
        <div class="step"><span class="step-num">STEP 01</span><b>참고 영상의 역할을 정합니다</b><p>스마트폰 회전, 확대, 여러 대로 확장되는 흐름만 참고합니다. 원본 브랜드와 제품 화면은 복제하지 않습니다.</p></div>
        <div class="step"><span class="step-num">STEP 02</span><b>가상의 앱 콘셉트를 전달합니다</b><p>PULSE라는 이름과 ‘일상을, 내 리듬으로.’라는 메시지, 코럴 중심의 색상 체계를 프롬프트에 지정합니다.</p></div>
        <div class="step"><span class="step-num">STEP 03</span><b>10초 장면 흐름을 확인합니다</b><p>한 대의 폰이 다가오고, 여러 화면으로 확장된 뒤, 어두운 브랜드 카드로 끝나는지 확인합니다.</p></div>
        <div class="step"><span class="step-num">STEP 04</span><b>정사각형 MP4를 검토합니다</b><p>앱 화면과 큰 문구가 잘 읽히는지, 마지막 PULSE 화면이 충분히 유지되는지 결과 영상과 비교합니다.</p></div>
      </div>
    </div>

    <div class="prompt-card">
      <div class="prompt-head"><b>Codex에 입력할 프롬프트</b><button type="button" class="prompt-copy">프롬프트 복사</button></div>
      <pre class="practice-prompt">아래 참고 영상의 연출 방식을 참고해서 hyperframes로 가상의 앱 홍보 영상을 만들어줘.

참고 영상:
https://www.youtube.com/shorts/JruzJjQONJI

앱 이름: PULSE
앱 콘셉트: 일상 속 아이디어와 영감을 모으는 라이프스타일 앱
메인 문구: "일상을, 내 리듬으로."

영상 흐름:
1. PULSE 앱 화면이 담긴 스마트폰 한 대가 회전하며 등장
2. 스마트폰이 화면 앞으로 확대되며 앱 UI를 보여줌
3. 한 대의 스마트폰이 다양한 화면을 가진 3×3 스마트폰 배열로 확장
4. 어두운 배경 위에 PULSE 로고와 "일상을, 내 리듬으로."를 보여주며 마무리

따뜻한 미색 배경, 짙은 그래파이트 스마트폰, 선명한 코럴 오렌지를 주요 색상으로 사용해줘.
앱 UI와 스마트폰은 HTML/CSS로 새롭게 디자인하고, 참고 영상의 브랜드나 제품 화면은 사용하지 말아줘.

영상은 1080×1080 정사각형, 30fps, 10초 분량으로 만들어줘.
음성과 내레이션은 넣지 말고 화면 움직임과 큰 타이포그래피를 중심으로 구성해줘.
지금 바로 적용하고 MP4 동영상 파일로 내보내기 해줘.</pre>
    </div>
    <div class="finish-note"><b>확인 포인트</b> · 첫 화면에서 앱과 스마트폰이 바로 보이는지, 한 대에서 여러 대로 확장되는 흐름이 자연스러운지, 마지막 브랜드 화면이 충분히 오래 유지되는지 확인하세요.</div>
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
    link.href = '#hyperframes-practice-04';
    link.textContent = 'HyperFrames 실습 04';
    toc.appendChild(link);
  }
});
