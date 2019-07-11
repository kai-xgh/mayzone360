! function() {

    const $spic = $('.spic');
    const $bpic = $('.bpic');
    const $sf = $('.sf');
    const $bf = $('.bf');
    const $title = $('.title');
    const $price = $('.price');
    const $movelisul = $('.movelistul');
    const $details = $('.details');
    const $increase = $('.increase');
    const $decrease = $('.decrease');
    const $buybtn = $('.buybtn');
    const $addcart = $('.addcart');
    const $quantity = $('#quantity');
    const $linkbox = $('.linkbox');
    const $close = $('.linkbox span')

    // 放大镜



    // 求宽高 
    $sf.width($spic.width() * $bf.width() / $bpic.width());
    $sf.height($spic.height() * $bf.height() / $bpic.height());
    var bili = $bpic.width() / $spic.width();



    $spic.on('mouseover', function() {

        $sf.css(
            'visibility', 'visible'
        )
        $bf.css(
            'visibility', 'visible'
        );


        // $sf.width($spic.offsetWidth * $bf.offsetWidth / $bpic.offsetWidth);
        // $sf.height($spic.offsetHeight * $bf.offsetHeight / $bpic.offsetHeight);


    })

    $(this).on('mousemove', function(ev) {
        var $left = ev.pageX - $details.offset().left - $sf.width() / 2;
        var $top = ev.pageY - $details.offset().top - $sf.height() / 2;
        if ($left < 0) {
            $left = 0
        }
        if ($left >= $spic.width() - $sf.width()) { //小图减小放的宽
            $left = $spic.width() - $sf.width()
        }
        if ($top < 0) {
            $top = 0
        }
        if ($top >= $spic.height() - $sf.height()) { //小图减小放的高
            $top = $spic.height() - $sf.height()
        }

        $sf.css('left', $left);
        $sf.css('top', $top);
        $bpic.css('left', -$left * bili);
        $bpic.css('top', -$top * bili);
    })
    $(this).on('mouseout', function() {
            $sf.css(
                'visibility', 'hidden'
            )
            $bf.css(
                'visibility', 'hidden'
            );
        })
        // 放大镜结束
        // 加号事件
    let num = 1;

    $increase.on('click', function() {
        num++;
        $quantity.val(num)

    });
    // 减号事件
    $decrease.on('click', function() {
        num--;
        $quantity.val(num);
        if (num <= 0) { //如果num小于零是就让其为零
            num = 0
            $quantity.val(num);

        }

    })
    $linkbox.hide() //弹窗隐藏

    // 加入购物车事件
    $addcart.on('click', function() {
        $linkbox.show() //弹窗显示
        $close.on('click', function() {
            $linkbox.hide() //弹窗隐藏
        })
    })





}()