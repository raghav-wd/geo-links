window.addEventListener("load", function () {
  $("<video muted autoplay loop>").appendTo($(".header"));
  $("video").attr(
    "src",
    "http://zeynepb.net/storage/2023/10/zeynep-bastik-wsite.mp4"
  );
});
