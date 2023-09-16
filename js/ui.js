window.onload = function () {
  var viewAllTaboo = localStorage.getItem('viewAllTaboo') == 'true';
  window.toggleViewAllTaboo.innerText = viewAllTaboo ? '전체 금기 보기' : '기존 금기 차이점만 보기';

  window.toggleViewAllTaboo.onclick = function() {
    toggleViewSelector('.revised, .previous');
    viewAllTaboo = !viewAllTaboo;
      window.toggleViewAllTaboo.innerText = viewAllTaboo ? '전체 금기 보기' : '기존 금기 차이점만 보기';
    localStorage.setItem('viewAllTaboo', viewAllTaboo);
  }

  if (!viewAllTaboo) {
    toggleViewSelector('.revised');
  } else {
    toggleViewSelector('.previous');
  }

  //putCurrentItemClass(currentItemClass);
}

function toggleView (element, type, mode, initial) {
  if (!mode) {
    mode = '';
  }
  if (!initial) {
    initial = 'none';
  }
  element.style[type] = element.style[type] === mode ? initial : mode;
}

function toggleViewSelector (selector, mode) {
  var viewSelector = document.querySelectorAll(selector);
  viewSelector.forEach(function (x) {
    toggleView(x, 'display', mode);
  });
}

function toggleViewColor (selector, color) {
  var viewSelector = document.querySelectorAll(selector);
  viewSelector.forEach(function (x) {
    toggleView(x, 'color', '', 'red');
  });
}

function putCurrentItemClass (idx) {
  document.getElementById('barMenu').children[idx].children[0].className = 'currentItem';
}
