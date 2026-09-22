document.addEventListener('DOMContentLoaded', () => {
  const previous = document.getElementById('instagram-guide') || document.getElementById('template');
  if (!previous) return;

  const style = document.createElement('style');
  style.textContent = `
    .setup-exercise { margin-top:74px; scroll-margin-top:36px; }
    .setup-exercise .setup-card { border:1px solid var(--line); border-radius:16px; background:#fff; padding:25px; }
    .setup-exercise .requirements { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin:18px 0 26px; }
    .setup-exercise .requirement { border-radius:10px; padding:13px; background:#f7f5f2; }
    .setup-exercise .requirement b { display:block; font-size:13px; }
    .setup-exercise .requirement span { color:var(--muted); font-size:12px; }
    .setup-exercise .agent-prompt { margin:16px 0 24px; border:1px solid #e4deef; border-radius:10px; overflow:hidden; background:#fbfaff; }
    .setup-exercise .agent-prompt b { display:block; padding:10px 13px; background:#f2eef9; font-size:13px; }
    .setup-exercise .agent-prompt pre { margin:0; padding:14px; background:transparent; color:#514b5d; max-height:none; overflow:visible; font:12px/1.7 'DM Mono',monospace; }
    .setup-exercise ol { margin:0; padding-left:21px; }
    .setup-exercise li { padding:7px 0 17px; }
    .setup-exercise li:last-child { padding-bottom:0; }
    .setup-exercise code { display:block; margin-top:8px; padding:11px 13px; border-radius:7px; background:#29282a; color:#f5f1e9; font:12px/1.6 'DM Mono',monospace; white-space:pre-wrap; }
    .setup-exercise code.inline { display:inline; margin:0; padding:2px 5px; border-radius:4px; font-size:11px; white-space:normal; }
    .setup-exercise .note { margin-top:18px; border-left:3px solid #9a8ccd; padding:8px 12px; color:#68636e; background:#f6f3ff; font-size:13px; }
    .hyperframes-info { margin-top:74px; scroll-margin-top:36px; }
    .hyperframes-info .intro-card { margin-top:24px; border:1px solid #ded8f4; border-radius:18px; padding:27px; background:linear-gradient(135deg,#f7f4ff 0%,#fff 68%); }
    .hyperframes-info .intro-card h3 { margin:0 0 8px; font-size:20px; letter-spacing:-.5px; }
    .hyperframes-info .intro-card p { margin:0; color:#68636e; }
    .hyperframes-info code { padding:2px 5px; border-radius:4px; background:#e8e3f5; color:#554a76; font:11px 'DM Mono',monospace; }
    .hyperframes-info .flow { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; margin:20px 0; counter-reset:flow; }
    .hyperframes-info .flow-item { position:relative; min-height:132px; border:1px solid var(--line); border-radius:12px; padding:16px; background:#fff; counter-increment:flow; }
    .hyperframes-info .flow-item::before { content:'0' counter(flow); display:block; margin-bottom:13px; color:#8577bd; font:700 11px 'DM Mono',monospace; }
    .hyperframes-info .flow-item b { display:block; margin-bottom:5px; font-size:13px; }
    .hyperframes-info .flow-item span { display:block; color:var(--muted); font-size:12px; line-height:1.6; }
    .hyperframes-info .parts { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:12px; }
    .hyperframes-info .part { border-radius:14px; padding:20px; background:#29282a; color:#f7f3ec; }
    .hyperframes-info .part:first-child code { background:#464149; color:#f7f3ec; }
    .hyperframes-info .part:last-child { background:#eeebf8; color:#35313e; }
    .hyperframes-info .part .part-label { color:#b9acd9; font:700 10px 'DM Mono',monospace; letter-spacing:.08em; }
    .hyperframes-info .part:last-child .part-label { color:#7767aa; }
    .hyperframes-info .part h3 { margin:8px 0 6px; font-size:16px; }
    .hyperframes-info .part p { margin:0; color:inherit; opacity:.78; font-size:13px; }
    .hyperframes-info .info-note { margin-top:16px; padding:13px 15px; border-radius:10px; background:#fff8df; color:#625b43; font-size:13px; }
    .hyperframes-info .source { margin-top:13px; font-size:12px; color:var(--muted); }
    .hyperframes-info .source a { color:#665e93; font-weight:700; }
    @media(max-width:800px) { .setup-exercise .requirements { grid-template-columns:1fr; } }
    @media(max-width:800px) { .hyperframes-info .flow { grid-template-columns:1fr 1fr; } .hyperframes-info .parts { grid-template-columns:1fr; } }
    @media(max-width:520px) { .hyperframes-info .flow { grid-template-columns:1fr; } }
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.id = 'setup-exercise';
  section.className = 'setup-exercise';
  section.innerHTML = `
    <span class="eyebrow"><i></i> 실습 02 · 환경 설정</span>
    <h2 style="margin-top:16px">Node.js, FFmpeg 설치 후<br>HyperFrames Skills 준비하기</h2>
    <p class="desc">영상 제작에 필요한 기본 도구를 설치하고, 공식 저장소에서 HyperFrames Skills를 추가합니다.</p>
    <div class="setup-card">
      <div class="requirements">
        <div class="requirement"><b>Node.js 22+</b><span>CLI 실행 환경</span></div>
        <div class="requirement"><b>FFmpeg</b><span>영상 인코딩 도구</span></div>
        <div class="requirement"><b>HyperFrames Skills</b><span>AI 에이전트용 영상 제작 지침</span></div>
      </div>
      <div class="agent-prompt"><b>Step 01 · Node.js 설치 — Codex 입력 프롬프트</b><pre>Windows 환경에서 winget을 사용해 Node.js LTS를 설치해줘.

1. winget 사용 가능 여부를 먼저 확인해줘.
2. Node.js LTS를 공식 패키지 ID로 설치해줘.
3. 설치 후 새 터미널 기준으로 node --version, npm --version을 실행해 정상 설치 여부를 확인해줘.
4. 프로젝트 파일은 수정하지 말고, 설치 결과와 확인된 버전을 간단히 알려줘.</pre></div>
      <div class="agent-prompt"><b>Step 02 · FFmpeg 설치 및 PATH 등록 — Codex 입력 프롬프트</b><pre>Windows 환경에서 winget을 사용해 FFmpeg를 설치하고, FFmpeg의 bin 디렉터리를 사용자 PATH 환경 변수에 추가해줘.

1. winget 사용 가능 여부와 설치 가능한 FFmpeg 패키지를 먼저 확인해줘.
2. 공식 또는 신뢰할 수 있는 FFmpeg 패키지를 winget으로 설치해줘.
3. 설치 경로를 확인해 ffmpeg.exe가 있는 bin 디렉터리를 찾고, 해당 경로가 사용자 PATH에 없을 때만 추가해줘.
4. 이미 등록된 PATH 항목은 중복 추가하거나 삭제하지 말아줘.
5. 새 터미널 기준으로 ffmpeg -version을 실행해 설치와 PATH 등록이 정상인지 확인해줘.
6. 프로젝트 파일은 수정하지 말고, 설치 경로와 확인 결과를 간단히 알려줘.</pre></div>
      <ol>
        <li><b>위 프롬프트를 순서대로 Codex에 입력합니다.</b><br>Node.js와 FFmpeg 설치가 끝난 뒤, 새 터미널에서 버전 확인 결과가 정상인지 확인합니다.</li>
        <li><b>공식 저장소의 안내에 따라 HyperFrames Skills를 설치합니다.</b><code>npx skills add heygen-com/hyperframes</code>선택 화면이 열리면 <b>Core Skills</b> 그룹을 선택하세요. 여기에는 영상 요청을 알맞은 작업 흐름으로 연결하는 <code class="inline">/hyperframes</code> 스킬과 핵심 제작 스킬이 포함됩니다.</li>
        <li><b>설치가 끝나면 Codex에서 <code class="inline">/hyperframes</code>로 시작합니다.</b><br>원하는 영상의 내용과 길이, 화면 비율 등을 설명하면 필요한 작업 흐름을 안내받을 수 있습니다. 별도의 HyperFrames 프로젝트는 이 단계에서 생성하지 않습니다.</li>
      </ol>
      <div class="note">설치 방법과 최신 명령은 <a href="https://github.com/heygen-com/hyperframes/blob/main/README.md" target="_blank" rel="noopener noreferrer">HyperFrames 공식 README</a>에서 확인할 수 있습니다. 실제 영상 렌더링에는 Node.js 22 이상과 FFmpeg가 필요합니다.</div>
    </div>
  `;
  previous.insertAdjacentElement('afterend', section);

  const infoSection = document.createElement('section');
  infoSection.id = 'hyperframes-info';
  infoSection.className = 'hyperframes-info';
  infoSection.innerHTML = `
    <span class="eyebrow"><i></i> 개념 이해 · HyperFrames</span>
    <h2 style="margin-top:16px">HyperFrames란?</h2>
    <p class="desc">HTML, CSS, 미디어와 애니메이션으로 영상을 만들고, 결과를 MP4로 렌더링하는 오픈 소스 영상 제작 프레임워크입니다.</p>

    <div class="intro-card">
      <h3>웹페이지를 만들 듯 영상을 설계합니다</h3>
      <p>화면의 요소와 재생 시간을 HTML에 선언하고, CSS와 GSAP 같은 익숙한 웹 기술로 움직임을 만듭니다. 브라우저에서 바로 미리 본 뒤, HyperFrames가 각 프레임을 정확한 시점으로 캡처하고 FFmpeg로 영상 파일을 완성합니다.</p>
    </div>

    <div class="flow" aria-label="HyperFrames 영상 제작 흐름">
      <div class="flow-item"><b>영상 요청</b><span>Codex에서 <code>/hyperframes</code>와 함께 만들 영상을 설명합니다.</span></div>
      <div class="flow-item"><b>HTML 구성</b><span>장면, 텍스트, 이미지, 오디오와 재생 시간을 코드로 구성합니다.</span></div>
      <div class="flow-item"><b>프레임 캡처</b><span>브라우저가 애니메이션의 각 시점을 정확하게 그립니다.</span></div>
      <div class="flow-item"><b>MP4 렌더링</b><span>FFmpeg가 캡처한 프레임과 오디오를 하나의 영상으로 인코딩합니다.</span></div>
    </div>

    <div class="parts">
      <article class="part">
        <span class="part-label">AGENT SKILLS</span>
        <h3>Codex가 제작 방법을 이해하도록 돕습니다</h3>
        <p><code>/hyperframes</code>는 요청을 분석해 알맞은 영상 제작 흐름으로 연결하고, 디자인·애니메이션·미디어 관련 스킬을 필요할 때 불러옵니다.</p>
      </article>
      <article class="part">
        <span class="part-label">CLI &amp; ENGINE</span>
        <h3>실제 미리보기와 렌더링을 담당합니다</h3>
        <p>CLI는 프로젝트 점검과 미리보기, 렌더링 명령을 제공하고, 렌더링 엔진은 브라우저와 FFmpeg를 이용해 최종 영상을 만듭니다.</p>
      </article>
    </div>

    <div class="info-note"><b>지금 단계에서는 Skills만 준비하면 됩니다.</b> 실제 HyperFrames 프로젝트는 영상을 만들기 시작할 때 필요한 구성으로 생성합니다.</div>
    <p class="source">더 알아보기 · <a href="https://github.com/heygen-com/hyperframes/blob/main/README.md" target="_blank" rel="noopener noreferrer">HyperFrames 공식 README</a></p>
  `;
  section.insertAdjacentElement('afterend', infoSection);

  const toc = document.querySelector('.toc');
  if (toc) {
    const link = document.createElement('a');
    link.href = '#setup-exercise';
    link.textContent = '실습 02 · 환경 설정';
    toc.appendChild(link);

    const infoLink = document.createElement('a');
    infoLink.className = 'sub';
    infoLink.href = '#hyperframes-info';
    infoLink.textContent = 'HyperFrames란?';
    toc.appendChild(infoLink);
  }
});
