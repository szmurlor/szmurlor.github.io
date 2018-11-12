$('document').ready(function(){
  var els = document.querySelectorAll(".lb");
  els.forEach(e => {
    var src = "";
    var imgs = e.querySelectorAll("img");
    imgs.forEach(i => {
      src = i.src;
    });
    e.innerHTML = '<a data-fancybox="gallery" href="' + src + '">' + e.innerHTML + "</a>";

    console.log(imgs);
  });
});
