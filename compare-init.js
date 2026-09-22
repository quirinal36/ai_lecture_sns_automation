window.addEventListener('load', () => {
  const override = document.createElement('style');
  override.textContent = `
    .visuals { display:block; position:relative; background:transparent; }
    img-comparison-slider { display:block; width:100%; --divider-color:#fff; --divider-width:2px; --default-handle-color:#fff; }
    img-comparison-slider img { display:block; width:100%; height:auto; max-height:none; object-fit:contain; }
    .compare-label { position:absolute; top:14px; z-index:2; padding:4px 9px; border-radius:5px; font:10px 'DM Mono',monospace; letter-spacing:.06em; pointer-events:none; }
    .before-label { left:14px; background:#ffffffe6; color:#292826; }
    .after-label { right:14px; background:#363330; color:#fff; }
    .before-download { position:absolute; left:14px; bottom:14px; z-index:3; display:inline-flex; align-items:center; gap:6px; border:1px solid #ffffffb8; border-radius:8px; background:#292826dc; color:#fff; padding:8px 12px; font:700 11px Pretendard,Arial,sans-serif; text-decoration:none; box-shadow:0 4px 14px #0002; backdrop-filter:blur(6px); transition:transform .15s ease,background .15s ease; }
    .before-download:hover { transform:translateY(-1px); background:#292826; }
    .before-download:focus-visible { outline:3px solid #fff; outline-offset:2px; }
    .before-download[aria-busy="true"] { cursor:wait; opacity:.78; }
    pre, .template pre { max-height:none; overflow:visible; }
    .template pre { margin-bottom:0; }
  `;
  document.head.appendChild(override);

  document.querySelectorAll('.visuals').forEach((wrap) => {
    const [before, after] = [...wrap.querySelectorAll('img')];
    const slider = document.createElement('img-comparison-slider');
    slider.setAttribute('value', '50');
    slider.setAttribute('aria-label', 'Before and after image comparison');
    before.slot = 'first';
    after.slot = 'second';

    const beforeLabel = document.createElement('span');
    beforeLabel.className = 'compare-label before-label';
    beforeLabel.textContent = 'BEFORE';
    const afterLabel = document.createElement('span');
    afterLabel.className = 'compare-label after-label';
    afterLabel.textContent = 'AFTER';

    const sourceUrl = before.getAttribute('src');
    const sourceName = decodeURIComponent(new URL(sourceUrl, window.location.href).pathname.split('/').pop());
    const download = document.createElement('a');
    download.className = 'before-download';
    download.href = sourceUrl;
    download.download = sourceName;
    download.setAttribute('aria-label', `${sourceName} 다운로드`);
    download.textContent = '↓ BEFORE 다운로드';
    download.addEventListener('click', async (event) => {
      event.preventDefault();
      if (download.getAttribute('aria-busy') === 'true') return;

      const originalText = download.textContent;
      download.setAttribute('aria-busy', 'true');
      download.textContent = '다운로드 준비 중…';

      try {
        const response = await fetch(sourceUrl);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const blobUrl = URL.createObjectURL(await response.blob());
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = sourceName;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
        download.textContent = '다운로드 완료 ✓';
      } catch (error) {
        console.error('BEFORE 이미지 다운로드 실패:', error);
        download.textContent = '새 탭에서 열기 ↗';
        window.open(sourceUrl, '_blank', 'noopener');
      } finally {
        window.setTimeout(() => {
          download.removeAttribute('aria-busy');
          download.textContent = originalText;
        }, 1600);
      }
    });

    slider.append(before, after);
    wrap.replaceChildren(slider, beforeLabel, afterLabel, download);
  });
});
