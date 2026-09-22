document.addEventListener('DOMContentLoaded', () => {
  const template = document.getElementById('template');
  if (!template) return;

  const style = document.createElement('style');
  style.textContent = `
    .instagram-guide { margin-top:74px; scroll-margin-top:36px; }
    .instagram-guide .guide-card { border:1px solid var(--line); border-radius:16px; overflow:hidden; background:#fff; }
    .instagram-guide img { display:block; width:100%; height:auto; background:#f2f0ed; }
    .instagram-guide .guide-copy { padding:22px 24px 24px; }
    .instagram-guide .guide-copy p { margin:0; color:var(--muted); font-size:14px; }
    .instagram-guide .guide-steps { display:flex; flex-wrap:wrap; gap:8px; margin-top:16px; }
    .instagram-guide .guide-steps span { padding:5px 10px; border-radius:99px; background:#f2eef9; color:#655c83; font-size:12px; font-weight:600; }
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.id = 'instagram-guide';
  section.className = 'instagram-guide';
  section.innerHTML = `
    <h2>Aside Browser를 이용해<br>인스타그램에 게시를 해보세요.</h2>
    <p class="desc">완성된 이미지를 준비했다면 Aside Browser에서 Instagram을 열고, 게시물 만들기 흐름을 따라 공유해 보세요.</p>
    <div class="guide-card">
      <img src="exercise01/aside-request.png" alt="Aside Browser에서 인스타그램 게시를 요청하는 예시">
      <div class="guide-copy">
        <p>이미지 업로드 후에는 게시글 문구와 해시태그를 확인하고, 미리보기에서 이미지가 의도한 비율로 보이는지 점검해 주세요.</p>
        <div class="guide-steps"><span>01. Instagram 열기</span><span>02. 이미지 업로드</span><span>03. 문구 작성</span><span>04. 게시 전 확인</span></div>
      </div>
    </div>
  `;
  template.insertAdjacentElement('afterend', section);

  const toc = document.querySelector('.toc');
  if (toc) {
    const link = document.createElement('a');
    link.href = '#instagram-guide';
    link.textContent = 'Aside Browser 게시하기';
    toc.appendChild(link);
  }
});
