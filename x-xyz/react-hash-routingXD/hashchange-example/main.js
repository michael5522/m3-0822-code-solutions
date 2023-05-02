var $tabs = document.querySelectorAll('.tab');
console.log('tabs', $tabs);
var $views = document.querySelectorAll('.view');
console.log('views', $views);

showView(window.location.hash);

window.addEventListener('hashchange', e => {
  showView(window.location.hash);
});

function showView(xxx) {

  console.log('newHash:', xxx);

  var route = xxx.startsWith('#') ? xxx.replace('#', '') : '';

  console.log('route:', route);

  if (route === '') return;

  for (var tabIndex = 0; tabIndex < $tabs.length; tabIndex++) {
    console.log('12345', $tabs[tabIndex].hash);
    if ($tabs[tabIndex].hash === xxx) {
      console.log('match', $tabs[tabIndex].hash);
      $tabs[tabIndex].className = 'tab active';
    } else {
      $tabs[tabIndex].className = 'tab';
    }
  }

  for (var viewIndex = 0; viewIndex < $views.length; viewIndex++) {
    if ($views[viewIndex].getAttribute('data-view') !== route) {
      $views[viewIndex].className = 'view hidden';
    } else {
      $views[viewIndex].className = 'view';
    }
  }
}
