var pjax = new Pjax({
    elements: 'a',

    analytics: false,
    cacheBust: false,
    debug: false,
});

$(document).on('pjax:send', function () {
    loadingBefore(); // 加载动画
});

$(document).on('pjax:success', function () {
    loadingAfter(); // 加载动画
});

function loadingBefore() {
    $("#main").fadeOut(100);
    $(".pjax_loading").css("display", "block");

}

function loadingAfter() {
    var styl = '{{theme.pjax.style}}';
    $("#main").fadeIn(100);
    $(".pjax_loading").css("display", "none");
}