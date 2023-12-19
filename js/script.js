$(document).ready(function () {
    var url=window.location.host;
    var myurl="www.52xyi.cn";
    if (url!=myurl) {
        $(".record").addClass("hidden");
    }else{
       $(".record").removeClass("hidden"); 
    }
    new Vidage('#VidageVideo');
    var delay = 1;
    var DELAY_STEP = 200;
    var animationOptions = { opacity: 1, top: 0};

    $('h1').animate(animationOptions).promise()
            .pipe(animateMain)
            .pipe(animateLocationIcon);

    function animateMain() {
        var dfd = $.Deferred();
        var els = $('.animate-init');
        var size = els.size();

        els.each(function (index, el) {
            delay++;
            $(el).delay(index * DELAY_STEP)
                    .animate(animationOptions);
            (size - 1 === index) && dfd.resolve();
        });
        return dfd.promise();
    }

    function animateLocationIcon() {
        $('.location-icon').delay(delay * DELAY_STEP).animate({
            opacity: 1,
            top: 0
        }).promise().done(animationQuote);
    }

    function animationQuote() {}
    $(".location-text").mouseover(function(){
        $('.tip').tipso({
            width: 260,
            position: 'top',
            background: 'rgba(0,0,0,0.1)',
            color: '#FFF'
        });
    });

    $(document.body).on('keydown', function (event) {
        // Press 'b' key
        if (event.which === 88) {
            $('.go-location').text("Going to XiaoYi's blog");
            $('.go').css('opacity', 1);

            window.setTimeout(function () {
                window.location.href = 'http://blog.domeyi.com';
            }, 1000);
        }
    });
});
var content = document.getElementsByClassName("content")[0];
var arr = [
    "祸兮福之所倚，福兮祸之所伏。 ——鵩鸟赋",
    "日日要光明,天天须前进。",
    "太阳每一天都是新的，生命每一天都是美的。",
    "每天，东升的太阳总是给人以新的生命。",
    "白日去如箭，达者惜今阳。 ——朱敦儒",
    "太阳升起的瞬间，对于昨天已成永远！",
    "一日学一日功，一日不学十日空。——谚语",
    "勇气通往天堂，怯懦通往地狱。 ——塞内加",
    "金钩细，丝纶漫卷，牵动一潭星。——秦观",
    "名不显时心不朽，再挑灯火看文章。 ——唐寅",
    "人离开了书，如同离开空气一样不能生活。",
    "夹路风流地，魂梦不知和。",
    "慕道不知恩，尘埃不见人",
    "进学致和，行方思远。",
    "读书之于头脑，好比运动之于身体。",
    "一切节省，归根到底都归结为时间的节省。",
    "书籍是伟大的天才留给人类的遗产。",
    "天才就是无止境刻苦勤奋的能力。",
    "没有智慧的头脑，就象没有腊烛的灯笼。",
    "读书使人充实、讨论使人机智，作文使人正确。",
    "最可怕的敌人，就是没有坚强的信念。",
    "思想的形成，首先是意志的形成。",
    "永远没有人力可以击退一个坚决强毅的希望。",
    "没有伟大的意志力，就不可能有雄才大略。",
    "要在这个世界上获得成功，就必须坚持到底。"
];
var num = Math.floor(Math.random()*arr.length);
content.innerHTML = arr[num];