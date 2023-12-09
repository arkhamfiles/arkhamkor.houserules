window.onload = function () {
  var viewAllTaboo = localStorage.getItem('viewAllTaboo') == 'true';
  window.toggleViewAllTaboo.innerText = viewAllTaboo ? '[공식금기] 포함(전부보기)' : '[공식금기] 제외(차이만)';
  var viewOnlyForbidden = localStorage.getItem('viewOnlyForbidden') == 'true';
  window.toggleviewOnlyForbidden.innerText = viewOnlyForbidden ? '[제안금기] 금지목록만' : '[제안금기] 전부보기';

  window.toggleViewAllTaboo.onclick = function() {
    toggleViewSelector('.revised, .free, .previous, .legacy');
    viewAllTaboo = !viewAllTaboo;
      window.toggleViewAllTaboo.innerText = viewAllTaboo ? '[공식금기] 포함(전부보기)' : '[공식금기] 제외(차이만)';
    localStorage.setItem('viewAllTaboo', viewAllTaboo);
  }
  // TODO: onclick function for viewOnlyForbidden variable
  window.toggleviewOnlyForbidden.onclick = function() {
    viewOnlyForbidden = !viewOnlyForbidden;
      window.toggleviewOnlyForbidden.innerText = viewOnlyForbidden ? '[제안금기] 금지목록만' : '[제안금기] 전부보기';
    localStorage.setItem('toggleviewOnlyForbidden', toggleviewOnlyForbidden);
  }

  // TODO: toggleViewSelector for both view variables with...
  if(!viewAllTaboo && !viewOnlyForbidden){
    toggleViewSelector('.revised, .free');
    // turn on: .revised, .free
    // turn off: .legacy, .previous
  }
  else if(!viewAllTaboo && viewOnlyForbidden){
    // turn on: .revised, .legacy
    // turn off: .free, .mutated, .mutated_optional
    ;
  }
  else if(viewAllTaboo && !viewOnlyForbidden){
    // turn on: .free, .previous
    // turn off: .legacy, .revised
    ;
  }
  else{
    // turn on: .legacy, .mutated, .mutated_optional
    // turn off: .free, .revised
    ;
  }
  if (!viewAllTaboo) {
    toggleViewSelector('.revised, .free');
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
