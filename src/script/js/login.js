! function() {
    $('.text').on('blur', function() {
        let $pw = $(this).val();
        if ($pw == '') {
            $('.error').css('visibility', 'visible')
        }
    })














}(jQuery);