window.addEventListener("load", function () {
  const cards = document.querySelectorAll(".js-block");
  Array.prototype.forEach.call(cards, (card) => {
    let link = card.querySelector("a");
    let newWindow;
    let url;

    if (link) {
      newWindow = link.getAttribute("target") === "__blank";
      url = link.getAttribute("href");
      card.style.cursor = "pointer";
      card.classList.add("js-block--with-link");
    }

    if (link && newWindow) {
      card.addEventListener("click", function (e) {
        window.open(url, "__blank").focus();
        e.preventDefault();
      });
    } else if (link) {
      card.addEventListener("click", function (e) {
        document.location.href = url;
        e.preventDefault();
      });
    }
  });
});
