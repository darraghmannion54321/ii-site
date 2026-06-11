(function() {
  function buildWip(wip) {
    wip.innerHTML = '';
    var base = window.location.pathname.replace(/[^\/]*$/, '');
    var img = document.createElement('img');
    img.src = base + 'assets/tape-final.png';
    img.className = 'wip-tape-img';
    wip.appendChild(img);

    var badge = document.createElement('div');
    badge.className = 'wip-badge';
    var badgeImg = document.createElement('img');
    badgeImg.src = base + 'assets/wip-sign-nobg.png?v=2';
    badge.appendChild(badgeImg);
    wip.appendChild(badge);
  }

  function init() {
    document.querySelectorAll('.wip').forEach(buildWip);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
