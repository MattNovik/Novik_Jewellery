'use strict';
(function() {
const questionsListElements = document.querySelectorAll('.questions__list-element');
const filterFormElements = document.querySelectorAll('.filter-form__element');
const wrapperFilterForm = document.querySelector('.filter-form');
const filterForm = document.querySelector('.filter-form__form');
const popup = document.querySelector('.form-login');
const loginForm = document.querySelector('.form-login__form');
const openLoginForm = document.querySelectorAll('.wrapper-login-busket__login');
const page = document.querySelector('.page');
const pageHover = document.querySelector('.page-main__module-hover');
const popupClose = document.querySelector('.form-login__close');
const loginFormNameInput = document.querySelector('.form-login__email');
const closeFilterForm = document.querySelector('.filter-form__close');
const openFilterForm = document.querySelector('.filter-open-tablet');
const inputSearchTabletMenu = document.querySelector('.wrapper-search-tablet__search');
const openMenuTablet = document.querySelector('.menu--tablet');
const menuTablet = document.querySelector('.menu--nav-tablet');
const pageHeader = document.querySelector('.page-header');
const menuBusketTablet = document.querySelector('.wrapper-login-busket--tablet');
const logoDesktop = document.querySelectorAll('.logo--desktop');
const logoTabletMenu = document.querySelectorAll('.logo--tablet');
let checkingEventListener = 0;

document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('#slider')) {
    new ChiefSlider('#slider');
  }
});
document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('#slider-mob')) {
    new ChiefSlider('#slider-mob');
  }
});

menuTablet.classList.remove('menu--nav-tablet-nojs');
openMenuTablet.classList.remove('menu--tablet-open');
pageHeader.classList.remove('page-header--open-menu');
menuTablet.classList.remove('menu--nav-tablet-open');
menuBusketTablet.classList.remove('wrapper-login-busket--tablet-open');
for (let i = 0; i< logoDesktop.length;i++) {
  logoDesktop[i].classList.remove('logo--desktop-close');
  logoTabletMenu[i].classList.remove('logo--tablet-open');
}

for (let i = 0; i < questionsListElements.length;i++) {
  questionsListElements[i].classList.remove('questions__list-element--open');
  questionsListElements[i].addEventListener('click',(evt) => {
      questionsListElements[i].classList.toggle('questions__list-element--open');
  });
}

menuTablet.addEventListener('click', (evt)=> {
  if (evt.target.classList.contains('menu__login--menu')) {
    evt.preventDefault();
    openMenuTablet.classList.toggle('menu--tablet-open');
    menuTablet.classList.toggle('menu--nav-tablet-open');
    pageHeader.classList.toggle('page-header--open-menu');
    menuBusketTablet.classList.toggle('wrapper-login-busket--tablet-open');
    if (checkingEventListener === 0) {
      document.addEventListener('keydown', onMenuEscKeydown);
      checkingEventListener++;
    } else {
      document.removeEventListener('keydown', onMenuEscKeydown);
      checkingEventListener--;
    }
    for (let i = 0; i< logoDesktop.length;i++) {
      logoDesktop[i].classList.toggle('logo--desktop-close');
      logoTabletMenu[i].classList.toggle('logo--tablet-open');
    }
    popup.classList.remove('form-login--close');
    pageHover.classList.remove('page-main__module-hover--closed');
    loginFormNameInput.focus();
    document.addEventListener('keydown', onPopupEscKeydown);
  } else if (evt.target.tagName === 'A') {
    openMenuTablet.classList.toggle('menu--tablet-open');
    page.classList.toggle('page--hidden');
    menuTablet.classList.toggle('menu--nav-tablet-open');
    pageHeader.classList.toggle('page-header--open-menu');
    menuBusketTablet.classList.toggle('wrapper-login-busket--tablet-open');
    if (checkingEventListener === 0) {
      document.addEventListener('keydown', onMenuEscKeydown);
      checkingEventListener++;
    } else {
      document.removeEventListener('keydown', onMenuEscKeydown);
      checkingEventListener--;
    }
    for (let i = 0; i< logoDesktop.length;i++) {
      logoDesktop[i].classList.toggle('logo--desktop-close');
      logoTabletMenu[i].classList.toggle('logo--tablet-open');
    }
  }
});

openMenuTablet.addEventListener('click', (evt)=> {
  openMenuTablet.classList.toggle('menu--tablet-open');
  page.classList.toggle('page--hidden');
  menuTablet.classList.toggle('menu--nav-tablet-open');
  pageHeader.classList.toggle('page-header--open-menu');
  menuBusketTablet.classList.toggle('wrapper-login-busket--tablet-open');
  if (checkingEventListener === 0) {
    document.addEventListener('keydown', onMenuEscKeydown);
    checkingEventListener++;
  } else {
    document.removeEventListener('keydown', onMenuEscKeydown);
    checkingEventListener--;
  }
  for (let i = 0; i< logoDesktop.length;i++) {
    logoDesktop[i].classList.toggle('logo--desktop-close');
    logoTabletMenu[i].classList.toggle('logo--tablet-open');
  }
});

const onMenuEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    checkingEventListener--;
    evt.preventDefault();
    openMenuTablet.classList.remove('menu--tablet-open');
    page.classList.remove('page--hidden');
    menuTablet.classList.remove('menu--nav-tablet-open');
    pageHeader.classList.remove('page-header--open-menu');
    menuBusketTablet.classList.remove('wrapper-login-busket--tablet-open');
    for (let i = 0; i< logoDesktop.length;i++) {
      logoDesktop[i].classList.remove('logo--desktop-close');
      logoTabletMenu[i].classList.remove('logo--tablet-open');
    }
  }
};

inputSearchTabletMenu.addEventListener('change',(evt)=> {
  if (inputSearchTabletMenu.value != 0) {
    inputSearchTabletMenu.classList.add('wrapper-search-tablet__search--no-label');
  } else {
    inputSearchTabletMenu.classList.remove('wrapper-search-tablet__search--no-label');
  }
});

if (openFilterForm) {
  openFilterForm.addEventListener('click', (evt) => {
    wrapperFilterForm.classList.remove('filter-form--close');
    pageHover.classList.remove('page-main__module-hover--closed');
    document.addEventListener('keydown', onFilterEscKeydown);
    page.classList.add('page--hidden');
  });
}

if (closeFilterForm) {
  closeFilterForm.addEventListener('click', (evt)=> {
    wrapperFilterForm.classList.add('filter-form--close');
    pageHover.classList.add('page-main__module-hover--closed');
    page.classList.remove('page--hidden');
    document.removeEventListener('keydown', onFilterEscKeydown);
  });
}

for (let i = 0; i < openLoginForm.length;i++) {
  openLoginForm[i].addEventListener('click', (evt) => {
    evt.preventDefault();
    popup.classList.remove('form-login--close');
    pageHover.classList.remove('page-main__module-hover--closed');
    loginFormNameInput.focus();
    document.addEventListener('keydown', onPopupEscKeydown);
    page.classList.add('page--hidden');
  });
}

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    popup.classList.add('form-login--close');
    pageHover.classList.add('page-main__module-hover--closed');
    page.classList.remove('page--hidden');
  }
};

const onFilterEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    wrapperFilterForm.classList.add('filter-form--close');
    pageHover.classList.add('page-main__module-hover--closed');
    page.classList.remove('page--hidden');
  }
};

pageHover.addEventListener('click', () => {
  popup.classList.add('form-login--close');
  if (wrapperFilterForm) {
    wrapperFilterForm.classList.add('filter-form--close');
  }
  pageHover.classList.add('page-main__module-hover--closed');
  page.classList.remove('page--hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
});

popupClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  popup.classList.add('form-login--close');
  pageHover.classList.add('page-main__module-hover--closed');
  page.classList.remove('page--hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
});

if (filterForm) {
  filterForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    localStorage.setItem('email', loginFormNameInput.value);
    alert('checked');
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    alert('send');
  });
}

for (let i = 0; i < filterFormElements.length;i++) {
  filterFormElements[i].addEventListener('click',(evt) => {
    if (evt.target.tagName === 'H2' || evt.target.tagName === 'svg' || evt.target.tagName === 'use') {
      filterFormElements[i].classList.toggle('filter-form__element--open');
    }
  });
}

var WRAPPER_SELECTOR = '.slider__wrapper';
var ITEMS_SELECTOR = '.slider__items';
var ITEM_SELECTOR = '.slider__item';
var CONTROL_CLASS = 'slider__control';

var SELECTOR_PREV = '.slider__control[data-slide="prev"]';
var SELECTOR_NEXT = '.slider__control[data-slide="next"]';
var SELECTOR_INDICATOR = '.slider__indicators>li';
var SLIDER_TRANSITION_OFF = 'slider_disable-transition';
var CLASS_CONTROL_HIDE = 'slider__control_hide';
var CLASS_ITEM_ACTIVE = 'slider__item--active';
var CLASS_INDICATOR_ACTIVE = 'active';

function ChiefSlider(selector, config) {
  // элементы слайдера
  var $root = typeof selector === 'string' ?
    document.querySelector(selector) : selector;
  this._$root = $root;
  this._$wrapper = $root.querySelector(WRAPPER_SELECTOR);
  this._$items = $root.querySelector(ITEMS_SELECTOR);
  this._$itemList = $root.querySelectorAll(ITEM_SELECTOR);
  this._$controlPrev = $root.querySelector(SELECTOR_PREV);
  this._$controlNext = $root.querySelector(SELECTOR_NEXT);
  this._$indicatorList = $root.querySelectorAll(SELECTOR_INDICATOR);
  // экстремальные значения слайдов
  this._minOrder = 0;
  this._maxOrder = 0;
  this._$itemWithMinOrder = null;
  this._$itemWithMaxOrder = null;
  this._minTranslate = 0;
  this._maxTranslate = 0;
  // направление смены слайдов (по умолчанию)
  this._direction = 'next';
  // determines whether the position of item needs to be determined
  this._balancingItemsFlag = false;
  this._activeItems = [];
  // текущее значение трансформации
  this._transform = 0;
  // swipe параметры
  this._hasSwipeState = false;
  this.__swipeStartPos = 0;
  // slider properties
  this._transform = 0; // текущее значение трансформации
  this._intervalId = null;
  // configuration of the slider
  this._config = {
    loop: true,
    autoplay: false,
    interval: 5000,
    refresh: true,
    swipe: true,
  };
  for (var key in config) {
    if (this._config.hasOwnProperty(key)) {
      this._config[key] = config[key];
    }
  }
  // create some constants
  var $itemList = this._$itemList;
  var widthItem = $itemList[0].offsetWidth;
  var widthWrapper = this._$wrapper.offsetWidth;
  var itemsInVisibleArea = Math.round(widthWrapper / widthItem);
  // initial setting properties
  this._widthItem = widthItem;
  this._widthWrapper = widthWrapper;
  this._itemsInVisibleArea = itemsInVisibleArea;
  this._transformStep = 100 / itemsInVisibleArea;
  // initial setting order and translate items
  for (var i = 0, length = $itemList.length; i < length; i++) {
    $itemList[i].dataset.index = i;
    $itemList[i].dataset.order = i;
    $itemList[i].dataset.translate = 0;
    if (i < itemsInVisibleArea) {
      this._activeItems.push(i);
    }
  }
  if (this._config.loop) {
    // перемещаем последний слайд перед первым
    var count = $itemList.length - 1;
    var translate = -$itemList.length * 100;
    $itemList[count].dataset.order = -1;
    $itemList[count].dataset.translate = -$itemList.length * 100;
    $itemList[count].style.transform = 'translateX(' + translate + '%)';
    this.__refreshExtremeValues();
  } else {
    if (this._$controlPrev) {
      this._$controlPrev.classList.add(CLASS_CONTROL_HIDE);
    }
  }
  this._setActiveClass();
  this._addEventListener();
  this._updateIndicators();
  this._autoplay();
}

ChiefSlider.prototype._addEventListener = function() {
  var $root = this._$root;
  var $items = this._$items;
  var config = this._config;
  function onClick(e) {
    var $target = e.target;
    this._autoplay('stop');
    if ($target.classList.contains(CONTROL_CLASS)) {
      e.preventDefault();
      this._direction = $target.dataset.slide;
      this._move();
    } else if ($target.dataset.slideTo) {
      var index = parseInt($target.dataset.slideTo);
      this._moveTo(index);
    }
    if (this._config.loop) {
      this._autoplay();
    }
  }
  function onMouseEnter(e) {
    this._autoplay('stop');
  }
  function onMouseLeave(e) {
    this._autoplay();
  }
  function onTransitionStart() {
    if (this._balancingItemsFlag) {
      return;
    }
    this._balancingItemsFlag = true;
    window.requestAnimationFrame(this._balancingItems.bind(this));
  }
  function onTransitionEnd() {
    this._balancingItemsFlag = false;
  }
  function onResize() {
    window.requestAnimationFrame(this._refresh.bind(this));
  }
  function onSwipeStart(e) {
    this._autoplay('stop');
    var event = e.type.search('touch') === 0 ? e.touches[0] : e;
    this._swipeStartPos = event.clientX;
    this._hasSwipeState = true;
  }
  function onSwipeEnd(e) {
    if (!this._hasSwipeState) {
      return;
    }
    var event = e.type.search('touch') === 0 ? e.changedTouches[0] : e;
    var diffPos = this._swipeStartPos - event.clientX;
    if (diffPos > 50) {
      this._direction = 'next';
      this._move();
    } else if (diffPos < -50) {
      this._direction = 'prev';
      this._move();
    }
    this._hasSwipeState = false;
    if (this._config.loop) {
      this._autoplay();
    }
  }
  function onDragStart(e) {
    e.preventDefault();
  }
  function onVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      this._autoplay('stop');
    } else if (document.visibilityState === 'visible') {
      if (this._config.loop) {
        this._autoplay();
      }
    }
  }

  $root.addEventListener('click', onClick.bind(this));
  $root.addEventListener('mouseenter', onMouseEnter.bind(this));
  $root.addEventListener('mouseleave', onMouseLeave.bind(this));
  // on resize
  if (config.refresh) {
    window.addEventListener('resize', onResize.bind(this));
  }
  // on transitionstart and transitionend
  if (config.loop) {
    $items.addEventListener('transition-start', onTransitionStart.bind(this));
    $items.addEventListener('transitionend', onTransitionEnd.bind(this));
  }
  // on touchstart and touchend
  if (config.swipe) {
    $root.addEventListener('touchstart', onSwipeStart.bind(this));
    $root.addEventListener('mousedown', onSwipeStart.bind(this));
    document.addEventListener('touchend', onSwipeEnd.bind(this));
    document.addEventListener('mouseup', onSwipeEnd.bind(this));
  }
  $root.addEventListener('dragstart', onDragStart.bind(this));
  // при изменении активности вкладки
  document.addEventListener('visibilitychange', onVisibilityChange.bind(this));
};

ChiefSlider.prototype.__refreshExtremeValues = function() {
  var $itemList = this._$itemList;
  this._minOrder = +$itemList[0].dataset.order;
  this._maxOrder = this._minOrder;
  this._$itemByMinOrder = $itemList[0];
  this._$itemByMaxOrder = $itemList[0];
  this._minTranslate = +$itemList[0].dataset.translate;
  this._maxTranslate = this._minTranslate;
  for (var i = 0, length = $itemList.length; i < length; i++) {
    var $item = $itemList[i];
    var order = +$item.dataset.order;
    if (order < this._minOrder) {
      this._minOrder = order;
      this._$itemByMinOrder = $item;
      this._minTranslate = +$item.dataset.translate;
    } else if (order > this._maxOrder) {
      this._maxOrder = order;
      this._$itemByMaxOrder = $item;
      this._minTranslate = +$item.dataset.translate;
    }
  }
};

ChiefSlider.prototype._balancingItems = function() {
  if (!this._balancingItemsFlag) {
    return;
  }
  var $wrapper = this._$wrapper;
  var $wrapperClientRect = $wrapper.getBoundingClientRect();
  var widthHalfItem = $wrapperClientRect.width / this._itemsInVisibleArea / 2;
  var count = this._$itemList.length;
  var translate;
  var clientRect;
  if (this._direction === 'next') {
    var wrapperLeft = $wrapperClientRect.left;
    var $min = this._$itemByMinOrder;
    translate = this._minTranslate;
    clientRect = $min.getBoundingClientRect();
    if (clientRect.right < wrapperLeft - widthHalfItem) {
      $min.dataset.order = this._minOrder + count;
      translate += count * 100;
      $min.dataset.translate = translate;
      $min.style.transform = 'translateX('.concat(translate, '%)');
      // update values of extreme properties
      this.__refreshExtremeValues();
    }
  } else {
    var wrapperRight = $wrapperClientRect.right;
    var $max = this._$itemByMaxOrder;
    translate = this._maxTranslate;
    clientRect = $max.getBoundingClientRect();
    if (clientRect.left > wrapperRight + widthHalfItem) {
      $max.dataset.order = this._maxOrder - count;
      translate -= count * 100;
      $max.dataset.translate = translate;
      $max.style.transform = 'translateX('.concat(translate, '%)');
      // update values of extreme properties
      this.__refreshExtremeValues();
    }
  }
  // updating...
  requestAnimationFrame(this._balancingItems.bind(this));
};

ChiefSlider.prototype._setActiveClass = function() {
  var activeItems = this._activeItems;
  var $itemList = this._$itemList;
  for (var i = 0, length = $itemList.length; i < length; i++) {
    var $item = $itemList[i];
    var index = +$item.dataset.index;
    if (activeItems.indexOf(index) > -1) {
      $item.classList.add(CLASS_ITEM_ACTIVE);
    } else {
      $item.classList.remove(CLASS_ITEM_ACTIVE);
    }
  }
};

ChiefSlider.prototype._updateIndicators = function() {
  var $indicatorList = this._$indicatorList;
  var $itemList = this._$itemList;
  if (!$indicatorList.length) {
    return;
  }
  for (var index = 0, length = $itemList.length; index < length; index++) {
    var $item = $itemList[index];
    if ($item.classList.contains(CLASS_ITEM_ACTIVE)) {
      $indicatorList[index].classList.add(CLASS_INDICATOR_ACTIVE);
      document.querySelector('.active-page').innerHTML = index+1;
    } else {
      $indicatorList[index].classList.remove(CLASS_INDICATOR_ACTIVE);
    }
  }
};

ChiefSlider.prototype._move = function() {
  var step = this._direction ===
   'next' ? -this._transformStep : this._transformStep;
  var transform = this._transform + step;
  if (!this._config.loop) {
    var endTransformValue =
      this._transformStep * (this._$itemList.length - this._itemsInVisibleArea);
    transform = Math.round(transform * 10) / 10;
    if (transform < -endTransformValue || transform > 0) {
      return;
    }
    this._$controlPrev.classList.remove(CLASS_CONTROL_HIDE);
    this._$controlNext.classList.remove(CLASS_CONTROL_HIDE);
    if (transform === -endTransformValue) {
      this._$controlNext.classList.add(CLASS_CONTROL_HIDE);
    } else if (transform === 0) {
      this._$controlPrev.classList.add(CLASS_CONTROL_HIDE);
    }
  }
  var activeIndex = [];
  var i = 0;
  var length;
  var index;
  var newIndex;
  if (this._direction === 'next') {
    for (i = 0, length = this._activeItems.length; i < length; i++) {
      index = this._activeItems[i];
      newIndex = ++index;
      if (newIndex > this._$itemList.length - 1) {
        newIndex -= this._$itemList.length;
      }
      activeIndex.push(newIndex);
    }
  } else {
    for (i = 0, length = this._activeItems.length; i < length; i++) {
      index = this._activeItems[i];
      newIndex = --index;
      if (newIndex < 0) {
        newIndex += this._$itemList.length;
      }
      activeIndex.push(newIndex);
    }
  }
  this._activeItems = activeIndex;
  this._setActiveClass();
  this._updateIndicators();
  this._transform = transform;
  this._$items.style.transform = 'translateX(' + transform + '%)';
  this._$items.dispatchEvent(new CustomEvent('transition-start', {bubbles: true}));
};

ChiefSlider.prototype._moveToNext = function() {
  this._direction = 'next';
  this._move();
};

ChiefSlider.prototype._moveToPrev = function() {
  this._direction = 'prev';
  this._move();
};

ChiefSlider.prototype._moveTo = function(index) {
  var $indicatorList = this._$indicatorList;
  var nearestIndex = null;
  var diff = null;
  var i;
  var length;
  for (i = 0, length = $indicatorList.length; i < length; i++) {
    var $indicator = $indicatorList[i];
    if ($indicator.classList.contains(CLASS_INDICATOR_ACTIVE)) {
      var slideTo = +$indicator.dataset.slideTo;
      if (diff === null) {
        nearestIndex = slideTo;
        diff = Math.abs(index - nearestIndex);
      } else {
        if (Math.abs(index - slideTo) < diff) {
          nearestIndex = slideTo;
          diff = Math.abs(index - nearestIndex);
        }
      }
    }
  }
  diff = index - nearestIndex;
  if (diff === 0) {
    return;
  }
  this._direction = diff > 0 ? 'next' : 'prev';
  for (i = 1; i <= Math.abs(diff); i++) {
    this._move();
  }
};

ChiefSlider.prototype._autoplay = function(action) {
  if (!this._config.autoplay) {
    return;
  }
  if (action === 'stop') {
    clearInterval(this._intervalId);
    this._intervalId = null;
    return;
  }
  if (this._intervalId === null) {
    this._intervalId = setInterval(
        function() {
          this._direction = 'next';
          this._move();
        }.bind(this),
        this._config.interval
    );
  }
};

ChiefSlider.prototype._refresh = function() {
  // create some constants
  var $itemList = this._$itemList;
  var widthItem = $itemList[0].offsetWidth;
  var widthWrapper = this._$wrapper.offsetWidth;
  var itemsInVisibleArea = Math.round(widthWrapper / widthItem);

  if (itemsInVisibleArea === this._itemsInVisibleArea) {
    return;
  }

  this._autoplay('stop');

  this._$items.classList.add(SLIDER_TRANSITION_OFF);
  this._$items.style.transform = 'translateX(0)';

  // setting properties after reset
  this._widthItem = widthItem;
  this._widthWrapper = widthWrapper;
  this._itemsInVisibleArea = itemsInVisibleArea;
  this._transform = 0;
  this._transformStep = 100 / itemsInVisibleArea;
  this._balancingItemsFlag = false;
  this._activeItems = [];

  // setting order and translate items after reset
  for (var i = 0, length = $itemList.length; i < length; i++) {
    var $item = $itemList[i];
    var position = i;
    $item.dataset.index = position;
    $item.dataset.order = position;
    $item.dataset.translate = 0;
    $item.style.transform = 'translateX(0)';
    if (position < itemsInVisibleArea) {
      this._activeItems.push(position);
    }
  }

  this._setActiveClass();
  this._updateIndicators();
  window.requestAnimationFrame(
      function() {
        this._$items.classList.remove(SLIDER_TRANSITION_OFF);
      }.bind(this)
  );

  // hide prev arrow for non-infinite slider
  if (!this._config.loop) {
    if (this._$controlPrev) {
      this._$controlPrev.classList.add(CLASS_CONTROL_HIDE);
    }
    return;
  }

  // translate last item before first
  var count = $itemList.length - 1;
  var translate = -$itemList.length * 100;
  $itemList[count].dataset.order = -1;
  $itemList[count].dataset.translate = -$itemList.length * 100;
  $itemList[count].style.transform = 'translateX('.concat(translate, '%)');
  // update values of extreme properties
  this.__refreshExtremeValues();
  // calling _autoplay
  this._autoplay();
};

ChiefSlider.prototype.next = function() {
  this._moveToNext();
};
ChiefSlider.prototype.prev = function() {
  this._moveToPrev();
};
ChiefSlider.prototype.moveTo = function(index) {
  this._moveTo(index);
};
ChiefSlider.prototype.refresh = function() {
  this._refresh();
};

})();

 (function() {
  if (typeof window.CustomEvent === 'function' ) return false;
  function CustomEvent(event, params) {
    params = params || {bubbles: false, cancelable: false, detail: null};
    var e = document.createEvent('CustomEvent');
    e.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return e;
  }
  window.CustomEvent = CustomEvent;
})();
