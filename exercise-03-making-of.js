document.addEventListener('DOMContentLoaded', () => {
  const previous = document.getElementById('hyperframes-shorts-showcase') || document.getElementById('hyperframes-practice-04');
  if (!previous) return;

  const style = document.createElement('style');
  style.textContent = `
    .making-of { margin-top:74px; scroll-margin-top:36px; }
    .making-of .making-hero { margin-top:24px; overflow:hidden; border-radius:18px; background:#171b30; color:#f7f3ec; }
    .making-of .making-summary { display:grid; grid-template-columns:1fr auto; gap:24px; align-items:center; padding:25px 27px; }
    .making-of .making-summary h3 { margin:0 0 8px; font-size:21px; letter-spacing:-.6px; }
    .making-of .making-summary p { max-width:600px; margin:0; color:#c9cad5; font-size:13px; }
    .making-of .making-link { display:inline-flex; align-items:center; justify-content:center; border-radius:8px; padding:10px 13px; background:#ff795f; color:#17131b; text-decoration:none; white-space:nowrap; font-size:12px; font-weight:800; }
    .making-of .facts { display:grid; grid-template-columns:repeat(4,1fr); border-top:1px solid #ffffff1c; }
    .making-of .fact { padding:17px 20px; border-right:1px solid #ffffff1c; }
    .making-of .fact:last-child { border-right:0; }
    .making-of .fact b { display:block; color:#ff8a72; font:800 17px 'DM Mono',monospace; }
    .making-of .fact span { color:#aeb0bf; font-size:11px; }
    .making-of .making-document { width:100%; margin-top:18px; }
    .making-of .making-document-status { padding:44px 20px; background:#0b1020; color:#eef1f7; text-align:center; font-size:13px; }
    .making-of .making-document-status a { color:#7fb4ff; font-weight:800; }
    .making-of .talk-guide { margin-top:28px; }
    .making-of .talk-guide h3 { margin:0 0 14px; font-size:18px; }
    .making-of .talk-points { display:grid; grid-template-columns:repeat(2,1fr); gap:10px; }
    .making-of .talk-point { border:1px solid var(--line); border-radius:12px; padding:17px; background:#fff; }
    .making-of .talk-point span { display:block; margin-bottom:8px; color:#8577bd; font:700 11px 'DM Mono',monospace; }
    .making-of .talk-point b { display:block; margin-bottom:5px; font-size:14px; }
    .making-of .talk-point p { margin:0; color:var(--muted); font-size:12px; }
    .making-of .reflection { margin-top:18px; border-radius:14px; padding:20px; background:#f5f2fc; }
    .making-of .reflection h3 { margin:0 0 10px; font-size:16px; }
    .making-of .reflection ol { margin:0; padding-left:20px; color:#625b70; font-size:13px; }
    .making-of .reflection li { padding:4px 0; }
    .making-of .session-note { margin-top:14px; padding:13px 15px; border-left:3px solid #ff795f; background:#fff5ef; color:#68574f; font-size:13px; }
    @media(max-width:800px) { .making-of .making-summary { grid-template-columns:1fr; } .making-of .facts { grid-template-columns:1fr 1fr; } .making-of .fact:nth-child(2) { border-right:0; } .making-of .fact:nth-child(-n+2) { border-bottom:1px solid #ffffff1c; } }
    @media(max-width:560px) { .making-of .talk-points { grid-template-columns:1fr; } }
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.id = 'exercise-03-making-of';
  section.className = 'making-of';
  section.innerHTML = `
    <span class="eyebrow"><i></i> 실습 03 · 영상 제작기</span>
    <h2 style="margin-top:16px">75초 영상 제작 :<br>40$ 금액 소진</h2>
    <p class="desc">렛츠코딩 라운지 소개 영상의 제작 기록을 함께 보며, 아이디어가 실제 영상이 되기까지 어떤 요청과 선택, 실패와 수정이 있었는지 경험을 들어봅니다.</p>

    <div class="making-hero">
      <div class="making-summary">
        <div>
          <h3>코드 한 줄이 우주로 날아가기까지</h3>
          <p>기획 메모에서 캐릭터와 기체를 만들고, AI 영상 모델로 장면을 생성한 뒤, 편집과 사운드 그리고 HyperFrames 제목 작업으로 완성한 과정을 담았습니다.</p>
        </div>
        <a class="making-link" href="https://raw.githubusercontent.com/quirinal36/ai_lecture_sns_automation/main/letscoding_lounge_making_of.html" target="_blank" rel="noopener noreferrer">원본 HTML 보기 ↗</a>
      </div>
      <div class="facts">
        <div class="fact"><b>75초</b><span>완성 애니메이션</span></div>
        <div class="fact"><b>약 40컷</b><span>채택한 AI 영상 클립</span></div>
        <div class="fact"><b>11개 장</b><span>기획부터 마무리까지</span></div>
        <div class="fact"><b>여러 도구</b><span>각 모델의 장점 조합</span></div>
      </div>
    </div>

    <div class="making-document" aria-label="렛츠코딩 라운지 소개 영상 제작기">
      <div class="making-document-status">제작기 화면을 불러오고 있습니다.</div>
    </div>

    <div class="talk-guide">
      <h3>이야기를 들으며 살펴볼 것</h3>
      <div class="talk-points">
        <div class="talk-point"><span>01 · 기획</span><b>큰 아이디어를 장면으로 나누는 방법</b><p>‘코드가 우주로 날아간다’는 추상적인 생각을 9개의 구체적인 장면과 감정선으로 바꾼 과정을 살펴봅니다.</p></div>
        <div class="talk-point"><span>02 · 일관성</span><b>캐릭터와 소품을 먼저 고정한 이유</b><p>같은 인물과 기체가 여러 장면에서 이어져 보이도록 이미지와 키프레임을 설계한 방법을 확인합니다.</p></div>
        <div class="talk-point"><span>03 · 시행착오</span><b>어려운 움직임을 작게 쪼개는 방법</b><p>한 번에 만들기 어려운 변신과 회전을 여러 단계와 컷으로 나누며 결과를 개선한 경험을 들어봅니다.</p></div>
        <div class="talk-point"><span>04 · 마무리</span><b>AI 생성과 직접 제작을 구분하는 기준</b><p>인물과 기계 움직임은 영상 모델을 활용하고, 글자·제목·카피는 프로그램과 HyperFrames로 완성한 이유를 살펴봅니다.</p></div>
      </div>
    </div>

    <div class="reflection">
      <h3>함께 이야기해 볼 질문</h3>
      <ol>
        <li>처음 기획에서 영상의 방향을 가장 선명하게 만든 요청은 무엇이었나요?</li>
        <li>AI가 반복해서 어려워한 장면은 무엇이었고, 어떻게 작업을 나누어 해결했나요?</li>
        <li>이미지 생성, 영상 생성, 편집, HyperFrames는 각각 어떤 역할을 맡았나요?</li>
        <li>같은 영상을 다시 만든다면 어느 단계를 먼저 바꾸고 싶나요?</li>
      </ol>
    </div>
    <div class="session-note"><b>이 시간의 목표</b> · 정답이나 하나의 제작 공식을 외우기보다, 실제 작업자가 결과를 보고 판단하고 다시 요청하는 과정을 이해하는 데 집중합니다.</div>
  `;
  previous.insertAdjacentElement('afterend', section);

  const toc = document.querySelector('.toc');
  if (toc) {
    const link = document.createElement('a');
    link.href = '#exercise-03-making-of';
    link.textContent = '75초 영상 제작 : 40$ 금액 소진';
    toc.appendChild(link);
  }

  const documentHost = section.querySelector('.making-document');
  fetch('https://raw.githubusercontent.com/quirinal36/ai_lecture_sns_automation/main/letscoding_lounge_making_of.html')
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.text();
    })
    .then((source) => {
      const parsed = new DOMParser().parseFromString(source, 'text/html');
      const sourceStyles = Array.from(parsed.querySelectorAll('style'))
        .map((node) => node.textContent)
        .join('\n')
        .replace(/:root/g, ':host')
        .replace(/\bbody\s*\{/g, '.making-document-body{');

      parsed.querySelectorAll('script').forEach((node) => node.remove());

      const shadow = documentHost.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          :host { display:block; width:100%; }
          ${sourceStyles}
        </style>
        <div class="making-document-body">${parsed.body.innerHTML}</div>
      `;

      shadow.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
          const targetId = link.getAttribute('href').slice(1);
          const target = shadow.getElementById(targetId);
          if (!target) return;
          event.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });

      const lightbox = shadow.getElementById('lb');
      const lightboxImage = lightbox?.querySelector('img');
      if (lightbox && lightboxImage) {
        shadow.querySelectorAll('figure img').forEach((image) => {
          image.addEventListener('click', () => {
            lightboxImage.src = image.src;
            lightbox.style.display = 'flex';
          });
        });
        lightbox.addEventListener('click', () => {
          lightbox.style.display = 'none';
        });
      }
    })
    .catch(() => {
      documentHost.innerHTML = `
        <div class="making-document-status">
          제작기 화면을 불러오지 못했습니다.
          <a href="https://raw.githubusercontent.com/quirinal36/ai_lecture_sns_automation/main/letscoding_lounge_making_of.html" target="_blank" rel="noopener noreferrer">원본 HTML 열기</a>
        </div>
      `;
    });
});
