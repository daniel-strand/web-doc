(function () {
  init();

  var g_containerInViewport;
  function init() {
    setStickyContainersSize();
    bindEvents();
  }

  function bindEvents() {
    window.addEventListener("wheel", wheelHandler);
  }

  function setStickyContainersSize() {
    document.querySelectorAll(".horisontal").forEach(function (container) {
      const stikyContainerHeight =
        container.querySelector(".sektion").scrollWidth;
      container.setAttribute("style", "height: " + stikyContainerHeight + "px");
    });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
  }

  function wheelHandler(evt) {
    const containerInViewPort = Array.from(
      document.querySelectorAll(".horisontal")
    ).filter(function (container) {
      return isElementInViewport(container);
    })[0];

    if (!containerInViewPort) {
      return;
    }

    var isPlaceHolderBelowTop =
      containerInViewPort.offsetTop < document.documentElement.scrollTop;
    var isPlaceHolderBelowBottom =
      containerInViewPort.offsetTop + containerInViewPort.offsetHeight >
      document.documentElement.scrollTop;
    let g_canScrollHorizontally =
      isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

    if (g_canScrollHorizontally) {
      containerInViewPort.querySelector(".sektion").scrollLeft += evt.deltaY;
    }
  }
})();


/* BURGER-MENU ---------------------------------------------------------------------- */
document.getElementById('carrot-menu').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  if (menu.style.right === '-250px') {
    menu.style.right = '0';
  } else {
    menu.style.right = '-250px';
  }
});