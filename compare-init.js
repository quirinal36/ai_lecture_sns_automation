window.addEventListener('load', () => {
  const override = document.createElement('style');
  override.textContent = `
    .visuals { display:block; position:relative; background:transparent; }
    img-comparison-slider { display:block; width:100%; --divider-color:#fff; --divider-width:2px; --default-handle-color:#fff; }
    img-comparison-slider img { display:block; width:100%; height:auto; max-height:none; object-fit:contain; }
    .compare-label { position:absolute; top:14px; z-index:2; padding:4px 9px; border-radius:5px; font:10px 'DM Mono',monospace; letter-spacing:.06em; pointer-events:none; }
    .before-label { left:14px; background:#ffffffe6; color:#292826; }
    .after-label { right:14px; background:#363330; color:#fff; }
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

    slider.append(before, after);
    wrap.replaceChildren(slider, beforeLabel, afterLabel);
  });
});
