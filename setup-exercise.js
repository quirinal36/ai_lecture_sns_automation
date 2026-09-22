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
    .setup-exercise .note { margin-top:18px; border-left:3px solid #9a8ccd; padding:8px 12px; color:#68636e; background:#f6f3ff; font-size:13px; }
    @media(max-width:800px) { .setup-exercise .requirements { grid-template-columns:1fr; } }
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.id = 'setup-exercise';
  section.className = 'setup-exercise';
  section.innerHTML = `
    <span class="eyebrow"><i></i> 실습 02 · 환경 설정</span>
    <h2 style="margin-top:16px">Node.js, FFmpeg 설치 후<br>HyperFrames를 로컬에서 실행하기</h2>
    <p class="desc">HyperFrames의 로컬 미리보기와 렌더링을 위한 개발 환경을 준비합니다.</p>
    <div class="setup-card">
      <div class="requirements">
        <div class="requirement"><b>Node.js 22+</b><span>CLI 실행 환경</span></div>
        <div class="requirement"><b>FFmpeg</b><span>영상 인코딩 도구</span></div>
        <div class="requirement"><b>HyperFrames</b><span>HTML 기반 영상 프레임워크</span></div>
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
        <li><b>HyperFrames 프로젝트를 생성합니다.</b><code>npx hyperframes init my-hyperframes-project
cd my-hyperframes-project</code></li>
        <li><b>로컬 미리보기 서버를 실행합니다.</b><code>npx hyperframes preview --background</code>명령 실행 후 출력되는 로컬 주소를 브라우저에서 열어 타임라인과 결과를 확인합니다.</li>
        <li><b>작업 전 환경을 점검합니다.</b><code>npx hyperframes doctor</code>Node.js 22 이상과 FFmpeg가 준비되어 있는지 확인한 뒤, 프로젝트 작업을 시작하세요.</li>
      </ol>
      <div class="note">HyperFrames CLI는 Node.js 22 이상과 FFmpeg를 필요로 합니다. 설치 오류가 나면 먼저 위 버전 확인 명령의 결과를 점검해 주세요.</div>
    </div>
  `;
  previous.insertAdjacentElement('afterend', section);

  const toc = document.querySelector('.toc');
  if (toc) {
    const link = document.createElement('a');
    link.href = '#setup-exercise';
    link.textContent = '실습 02 · 환경 설정';
    toc.appendChild(link);
  }
});
