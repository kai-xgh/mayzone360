! function() {

    const $aform = $('.si-container form');
    const $ainput1 = $('.si-container form .input1');
    const $ainput2 = $('.si-container form .input2');
    const $ainput3 = $('.si-container form .input3');
    const $ainput4 = $('.si-container form .input4');
    const $aspan1 = $('.si-container form .span1');
    const $aspan2 = $('.si-container form .span2');
    const $aspan3 = $('.si-container form .span3');
    const $red = $('.red');
    const $yellow = $('.yellow');
    const $green = $('.green');
    const $ruo = $('.ruo');
    const $zhong = $('.zhong');
    const $qiang = $('.qiang');
    var useflag = true,
        mmflag = true,
        qrmmflag = true;


    // 用户名
    // 得到焦点
    $ainput1.on('focus', function() {
        if ($(this).text('')) {
            $aspan1.text("请输入用户名，用户名不能超过7个汉字或14个字符");
            $aspan1.css({
                'color': 'red',
                'font-size': '12px',
                'background': 'url(img/false.gif) no-repeat',
            })
            useflag = false
        }
    })

    // 失去焦点
    $ainput1.on('blur', function() {
            let username = $(this).val();
            // let len = username.length
            if (username == '') {

                $aspan1.text('用户名不能为空');
                $aspan1.css({
                    'background': 'url(img/false.gif) no-repeat',
                    'color': 'red',
                    'font-size': '12px',

                })
                useflag = false;

            } else {

                var reg = /^[\u4e00-\u9fa5]+|[a-zA-Z]+$/;
                if (reg.test(this.value)) { //匹配成功
                    console.log(1)
                    var len = this.value.replace(/[\u4e00-\u9fa5]/g, 'bb').length;
                    if (len <= 14 && len > 7) {
                        $aspan1.text(' ')
                        $aspan1.css({
                            'background': 'url(img/return.gif) no-repeat'
                        })
                        useflag = true;
                    } else {
                        $aspan1.text('请输入合法用户名');
                        $aspan1.css({
                            'background': 'url(img/false.gif) no-repeat',
                            'color': 'red',
                            'font-size': '12px',
                        })
                        useflag = false;
                    }
                }
            }
        })
        // 密码
        // 得到焦点
    $ainput2.on('focus', function() {
            let $password = $(this).val();
            if ($password == '') {
                $aspan2.text("请输入密码，密码不能超过6-20个字符");
                $aspan2.css({
                    'color': 'red',
                    'font-size': '12px',
                    'background': 'url(img/false.gif) no-repeat',
                })
                mmflag = false
            }
        })
        // 失去焦点
    $ainput2.on('blur', function() {
            let $password = $(this).val();
            if ($password == '') {
                $aspan2.text('密码不能为空');
                $aspan2.css({
                    'background': 'url(img/false.gif) no-repeat',
                    'color': 'red',
                    'font-size': '12px',
                })
                mmflag = false
            }

        })
        // 密码安全性验证

    $ainput2.on('keyup', function() {
        console.log(1)
        let $password = $(this).val();
        let len = $password.length;
        if (len < 6 || len > 20) { //长度验证
            $aspan2.text('密码长度不符');
            $aspan2.css({
                'background': 'url(img/false.gif) no-repeat',
                'color': 'red',
                'font-size': '12px',
            })
            mmflag = false
        } else if (len >= 6 && len <= 20) {
            let num = 0;
            let regnum = /\d+/;
            let reglowercase = /[a-z]+/;
            let reguppercase = /[A-Z]+/;
            let othercase = /[\W\_]+/;
            if (regnum.test(this.value)) { //正则验证
                num++
            }
            if (reglowercase.test(this.value)) {
                num++
            }
            if (reguppercase.test(this.value)) {
                num++
            }
            if (othercase.test(this.value)) {
                num++
            }
            switch (num) {
                case 1:
                    $aspan2.text('密码过于简单');
                    $aspan2.css({
                        'background': 'url(img/false.gif) no-repeat',
                        'color': 'red',
                        'font-size': '12px',
                    })
                    $red.css({
                        'background': 'red',
                    })
                    mmflag = false

                    break;
                case 2:
                case 3:
                    $aspan2.text('');
                    $aspan2.css({
                        'background': 'url(img/return.gif) no-repeat',

                    })
                    $yellow.css({
                        'background': 'yellow',
                    })
                    mmflag = true
                    break;
                case 4:

                    $green.css({
                        'background': 'green',
                    })
                    $aspan2.text('');
                    $aspan2.css({
                        'background': 'url(img/return.gif) no-repeat',

                    })
                    mmflag = true
                    break;
            }
        }



    })


    // 确认密码
    // 得到焦点
    $ainput3.on('focus', function() {
            let $passwordsure = $(this).val();
            if ($passwordsure == '') {
                $aspan3.text('请确认密码');

                $aspan3.css({
                    'background': 'url(img/false.gif) no-repeat',
                    'color': 'red',
                    'font-size': '12px',
                })
                qrmmflag = false
            }
        })
        // 失去焦点
    $ainput3.on('blur', function() {
            let $passwordsure = $(this).val();
            if ($passwordsure != '') {
                if ($passwordsure === $ainput2.val()) {
                    $aspan3.text('');
                    $aspan3.css({
                        'background': 'url(img/return.gif) no-repeat',

                    })
                    qrmmflag = true
                } else {
                    $aspan3.text('两次密码不一样');
                    $aspan3.css({
                        'background': 'url(img/false.gif) no-repeat',
                        'color': 'red',
                        'font-size': '12px',
                    })
                    qrmmflag = false
                }
            } else {
                $aspan3.text('请确认密码');

                $aspan3.css({
                    'background': 'url(img/false.gif) no-repeat',
                    'color': 'red',
                    'font-size': '12px',
                })
                qrmmflag = false
            }
        })
        // 提交事件
    $aform.on('submit', function() {

        if (($ainput1.val()) == '') {

            $aspan1.text('用户名不能为空');
            $aspan1.css({
                'background': 'url(img/false.gif) no-repeat',
                'color': 'red',
                'font-size': '12px',

            })
            useflag = false;

        }
        if (($ainput2.val()) == '') {

            $aspan2.text('密码不能为空');
            $aspan2.css({
                'background': 'url(img/false.gif) no-repeat',
                'color': 'red',
                'font-size': '12px',

            })
            mmflag = false;

        }
        if (($ainput3.val()) == '') {

            $aspan3.text('确认密码不能为空');
            $aspan3.css({
                'background': 'url(img/false.gif) no-repeat',
                'color': 'red',
                'font-size': '12px',

            })
            qrmmflag = false;

        }
        if (!useflag || !mmflag || !qrmmflag) {
            return false;
        }
    })




    let usernameflag = true;


    const phpurl = 'http://localhost/mayzone/php/';
    //失去焦点将用户名传给后端。
    $ainput1.onblur = function() {
        ajax({
                type: 'post',
                url: phpurl + 'reg.php',
                data: {
                    name: $ainput1.value
                }
            })
            .then(function(d) {
                if (!d) {
                    errorinfo.innerHTML = '√';
                    errorinfo.style.color = 'green';
                    usernameflag = true;
                } else {
                    errorinfo.innerHTML = '该用户名已经存在';
                    errorinfo.style.color = 'red';
                    usernameflag = false;
                }
            });
    }

    //点击提交注册按钮将数据提交到数据库
    $ainput4.onclick = function() {
        if (!usernameflag) {
            $ainput1.focus();
            return false;
        }
    }


































}(jQuery)