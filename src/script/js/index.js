;
(function($) {
    // banner数据
    // $.ajax({
    //     url: 'php/banner.php',
    //     dataType: 'json'
    // }).done(function(bannerdata) {
    //     $.each(bannerdata, function(index, value) {
    //         var $bannerstr = '<ul>';

    //     });
    // });

    // //lunbo数据
    // $.ajax({
    //     url: 'php/banner.php',
    //     dataType: 'json'
    // }).done(function(bannerdata) {
    //     $.each(bannerdata, function(index, value) {
    //         var $bannerstr = '<ul>';

    //     });
    // });
    // //tab切换数据
    // $.ajax({
    //     url: 'php/banner.php',
    //     dataType: 'json'
    // }).done(function(bannerdata) {
    //     $.each(bannerdata, function(index, value) {
    //         var $bannerstr = '<ul>';

    //     });
    // });


    // jQuery(".mz-banner").slide({
    //     type: "slide",
    //     titCell: ".hd ul",
    //     mainCell: ".bd ul",
    //     interTime: 4000,
    //     delayTime: 250,
    //     effect: "fold",
    //     autoPlay: true,
    //     autoPage: "<li><a></a></li>",
    //     trigger: "click",

    //     startFun: function() {
    //         var timer = jQuery(".mz-banner .timer");
    //         timer.stop(true, true).animate({ "width": "0%" }, 0).animate({ "width": "100%" }, 4000);
    //     }
    // });


    ! function() {
        //1.拼接数据
        $.ajax({
            url: '../php/taobaodata.php',
            dataType: 'json'
        }).done(function(data) {
            var $html = '<ul>';
            console.log(data);
            $.each(data, function(index, value) {
                $html += `
                    <li>
                        <a href="details.html?sid=${value.sid}" target="_blank">
                            <img src="${value.url}" />
                            <h4>${value.titile}</h4>
                            <p>¥${value.price}</p>
                        </a>
                    </li>
                `;
            });
            $html += '</ul>';
            $('.goodslist').html($html);
        });
    }();
















    // lunbotu
    $('.bd').each(function(index, element) {
        const $pic = $('.mz-banner .bd ul li');
        const $btn = $(' .hd ul li ');
        const $left = $('.left');
        const $right = $('.mz-banner .right');
        let $timer = null;
        var $num = 0;
        $btn.on('click', function() {

            $num = $(this).index();
            tabswitch($num);
        })
        $right.on('click', function() {

            $num++
            if ($num > $btn.length - 1) {
                $num = 0
            }
            tabswitch($num);
        })
        $left.on('click', function() {
            $num--
            if ($num < 0) {
                $num = $btn.length - 1
            }
            tabswitch($num);
        })
        $(this).hover(function() {

                clearInterval($timer);
            },
            function() {
                setInterval(function() {
                    $right.click()
                }, 2000)

            })

        function tabswitch($num) {

            $btn.eq($num).addClass('on').siblings().removeClass('on');
            $pic.eq($num).addClass('acctive').css('display', 'block').siblings().removeClass('acctive').css('display', 'none')
        }

        $timer = setInterval(function() {
            $right.click()

        }, 2000)

    })

























})(jQuery);