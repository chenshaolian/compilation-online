window.onload = function () {
  function pageOne() {
    window.location.href = '/helloWorld'
  }
  document.getElementById("pageOne").onclick = pageOne;

  function pageTwo() {
    window.location.href = '/variablesAndTypes'
  }
  document.getElementById("pageTwo").onclick = pageTwo;

  function pageThree() {
    window.location.href = '/lists'
  }
  document.getElementById("pageThree").onclick = pageThree;

  function toIndex() {
    window.location.href = '/'
  }
  document.getElementById("logo").onclick = toIndex;
  document.getElementById("project").onclick = toIndex;
}