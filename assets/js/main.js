// Mobile navigation and publication filters. The site works without JavaScript.
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var buttons = document.querySelectorAll('.filter');
  if (!buttons.length) return;
  function apply(line) {
    buttons.forEach(function (b) { b.classList.toggle('active', b.dataset.filter === line); });
    var shown = 0;
    document.querySelectorAll('.pub-year').forEach(function (sec) {
      var visible = 0;
      sec.querySelectorAll('.pub').forEach(function (li) {
        var lines = (li.dataset.lines || '').split(' ');
        var ok = line === 'all' || lines.indexOf(line) !== -1;
        li.hidden = !ok; if (ok) visible++;
      });
      sec.hidden = visible === 0; shown += visible;
    });
    var empty = document.querySelector('.empty-msg');
    if (empty) empty.hidden = shown !== 0;
  }
  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      apply(b.dataset.filter);
      var url = new URL(window.location);
      if (b.dataset.filter === 'all') url.searchParams.delete('line'); else url.searchParams.set('line', b.dataset.filter);
      history.replaceState(null, '', url);
    });
  });
  var initial = new URLSearchParams(window.location.search).get('line');
  if (initial && document.querySelector('.filter[data-filter="' + initial + '"]')) apply(initial);
});
