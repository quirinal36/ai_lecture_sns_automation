document.addEventListener('DOMContentLoaded', () => {
  const previous = document.getElementById('hyperframes-practice-04');
  if (!previous) return;

  const style = document.createElement('style');
  style.textContent = `
    .shorts-showcase { margin-top:74px; scroll-margin-top:36px; }
    .shorts-showcase .shorts-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:14px; margin-top:24px; }
    .shorts-showcase .short-card { overflow:hidden; border:1px solid var(--line); border-radius:16px; background:#fff; }
    .shorts-showcase .short-card-head { padding:19px 20px 0; }
    .shorts-showcase .case-label { color:#8172b5; font:800 10px 'DM Mono',monospace; letter-spacing:.08em; }
    .shorts-showcase .short-card h3 { margin:8px 0 6px; font-size:17px; letter-spacing:-.4px; }
    .shorts-showcase .short-card p { margin:0; color:var(--muted); font-size:12px; }
    .shorts-showcase .short-player { position:relative; width:min(calc(100% - 40px),290px); aspect-ratio:9/16; margin:18px auto; overflow:hidden; border-radius:13px; background:#171719; box-shadow:0 14px 34px #241e3424; }
    .shorts-showcase .short-player iframe { position:absolute; inset:0; width:100%; height:100%; border:0; }
    .shorts-showcase .short-actions { display:flex; justify-content:center; padding:0 20px 20px; }
    .shorts-showcase .short-actions a { display:inline-flex; align-items:center; justify-content:center; border-radius:7px; padding:8px 11px; background:#efecf5; color:#5b5270; text-decoration:none; font-size:12px; font-weight:800; }
    .shorts-showcase .usage-map { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:18px; }
    .shorts-showcase .usage { border-radius:12px; padding:17px; background:#29282a; color:#f7f3ec; }
    .shorts-showcase .usage:last-child { background:#eeeaf9; color:#393343; }
    .shorts-showcase .usage span { display:block; margin-bottom:8px; color:#b9acd9; font:700 10px 'DM Mono',monospace; }
    .shorts-showcase .usage:last-child span { color:#7464aa; }
    .shorts-showcase .usage b { display:block; margin-bottom:5px; font-size:14px; }
    .shorts-showcase .usage p { margin:0; color:inherit; opacity:.76; font-size:12px; }
    .shorts-showcase .watch-note { margin-top:14px; padding:12px 14px; border-left:3px solid #8a7ac3; background:#f5f2fc; color:#625b70; font-size:13px; }
    @media(max-width:700px) { .shorts-showcase .shorts-grid, .shorts-showcase .usage-map { grid-template-columns:1fr; } }
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.id = 'hyperframes-shorts-showcase';
  section.className = 'shorts-showcase';
  section.innerHTML = `
    <span class="eyebrow"><i></i> 실제 활용 사례 · YouTube Shorts</span>
    <h2 style="margin-top:16px">실제 HyperFrames를 이용해<br>만들어 올린 쇼츠영상</h2>
    <p class="desc">HyperFrames는 기존 영상 위에 필요한 그래픽만 더할 수도 있고, 화면 구성과 움직임을 포함한 전체 영상을 만들 수도 있습니다. 실제 업로드한 두 쇼츠를 비교해 보세요.</p>

    <div class="shorts-grid">
      <article class="short-card">
        <div class="short-card-head">
          <span class="case-label">CASE 01 · 부분 적용</span>
          <h3>화면 위쪽 제목을 HyperFrames로 보여주기</h3>
          <p>촬영하거나 생성한 기존 영상은 유지하고, 상단 제목처럼 정확한 글자와 그래픽이 필요한 부분만 HyperFrames로 구성한 사례입니다.</p>
        </div>
        <div class="short-player">
          <iframe src="https://www.youtube-nocookie.com/embed/stmoP5T53F0?rel=0" title="화면 위쪽 제목을 HyperFrames로 보여준 YouTube Shorts" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="short-actions"><a href="https://youtube.com/shorts/stmoP5T53F0?si=mbQvtDB8tHUM06AN" target="_blank" rel="noopener noreferrer">YouTube에서 보기 ↗</a></div>
      </article>

      <article class="short-card">
        <div class="short-card-head">
          <span class="case-label">CASE 02 · 전체 제작</span>
          <h3>전체 영상을 HyperFrames로 만들기</h3>
          <p>장면 구성, 텍스트, 이미지, 타이밍과 애니메이션을 하나의 HyperFrames 프로젝트에서 설계해 완성한 사례입니다.</p>
        </div>
        <div class="short-player">
          <iframe src="https://www.youtube-nocookie.com/embed/drG2FHqdewI?rel=0" title="전체 영상을 HyperFrames로 만든 YouTube Shorts" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="short-actions"><a href="https://youtube.com/shorts/drG2FHqdewI?si=vgB2WFidHKj5p3JU" target="_blank" rel="noopener noreferrer">YouTube에서 보기 ↗</a></div>
      </article>
    </div>

    <div class="usage-map">
      <div class="usage"><span>기존 영상 + HYPERFRAMES</span><b>필요한 부분만 정확하게 보강</b><p>제목, 수치, 자막, 콜아웃처럼 글자가 정확해야 하는 그래픽 레이어를 영상 위에 추가할 때 적합합니다.</p></div>
      <div class="usage"><span>FULL HYPERFRAMES</span><b>영상 전체의 흐름을 코드로 설계</b><p>장면 전환과 레이아웃, 여러 요소의 움직임까지 프레임 단위로 통제하고 싶을 때 활용합니다.</p></div>
    </div>
    <div class="watch-note"><b>비교하며 보기</b> · HyperFrames가 담당한 범위가 달라지면 제작 방식과 수정 가능한 요소가 어떻게 달라지는지 살펴보세요. 임베드 영상이 재생되지 않으면 ‘YouTube에서 보기’를 이용할 수 있습니다.</div>
  `;
  previous.insertAdjacentElement('afterend', section);

  const toc = document.querySelector('.toc');
  if (toc) {
    const link = document.createElement('a');
    link.className = 'sub';
    link.href = '#hyperframes-shorts-showcase';
    link.textContent = '실제 쇼츠 활용 사례';
    toc.appendChild(link);
  }
});
