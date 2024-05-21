const body = document.querySelector('body');
if (body) {
  createOverlay();
}

function createOverlay() {
  const overlay = document.createElement('img');
  overlay.src =
    'https://baileedastugue.dev/assets/underBunstruction-DqLuASq8.png';
  overlay.style.width = '200px';
  overlay.style.height = 'auto';
  overlay.style.position = 'absolute';
  overlay.style.top = '50%';
  overlay.style.left = '50%';
  overlay.style.transform = 'translate(-50%, -50%)';
  overlay.style.zIndex = 100;
  body.insertAdjacentElement('afterbegin', overlay);
}
