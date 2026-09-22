window.addEventListener('load', () => {
  const main = document.querySelector('main');
  const exerciseTwo = document.getElementById('setup-exercise');
  if (!main || !exerciseTwo) return;

  const exerciseOne = document.createElement('section');
  exerciseOne.id = 'practice-01';
  exerciseOne.className = 'practice-01';

  const title = main.querySelector('h1');
  const eyebrow = main.querySelector('.eyebrow');
  if (eyebrow) eyebrow.innerHTML = '<i></i> 실습 01 · 이미지 편집';
  if (title) title.id = 'practice-01-title';

  const nodes = [];
  for (const child of [...main.children]) {
    if (child === exerciseTwo || child.tagName === 'FOOTER') break;
    nodes.push(child);
  }
  nodes.forEach((node) => exerciseOne.appendChild(node));
  main.insertBefore(exerciseOne, exerciseTwo);

  const firstTocLink = document.querySelector('.toc a[href="#top"]');
  if (firstTocLink) {
    firstTocLink.href = '#practice-01';
    firstTocLink.textContent = '실습 01 · 다이어리 이미지';
  }
});
