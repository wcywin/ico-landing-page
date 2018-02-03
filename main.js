var $teamSection = $(".team");
var $teamSlider = $(".teamSlider");
var $footerEmail = $("#email");
var $firstFooterList = $("#firstLi");
var $subscribeButton = $("#changeButton");
var $copywriters = $("#additional");

$teamSection.show();
$teamSlider.hide();
$copywriters.hide();

$(window).on("resize", function () {
    var window = $(this);

    if(window.width() <= 768) {
        $teamSection.hide();
        $teamSlider.show();
        $footerEmail.text("hello@stay.io");
        $firstFooterList.hide();
        $subscribeButton.text("").html("<img src=\"http://www.cywinski.pro/ethwork/assets/icon/Subscribe@1x.svg\" />");
        $copywriters.show();

    } else {
        $teamSection.show();
        $teamSlider.hide();
        $footerEmail.text("have@nicecoding.io");
        $firstFooterList.show();
        $subscribeButton.text("Subscribe");
        $copywriters.hide();
    }
});