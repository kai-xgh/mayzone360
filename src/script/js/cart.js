! function() {
    function goodslist(id, count) {
        $.ajax({
            url: '../php/.php',
            dataType: 'json'
        }).done(function(data) {
            $.each(data, function(index, value) {
                if (id == value.sid) {
                    var $clonebox = $('.goods-item:hidden').clone(true, true);
                    $clonebox.find('.goods-pic').find('img').attr('src', value.url);
                    $clonebox.find('.goods-pic').find('img').attr('sid', value.sid);
                    $clonebox.find('.goods-d-info').find('a').html(value.titile);
                    $clonebox.find('.b-price').find('strong').html(value.price);
                    $clonebox.find('.quantity-form').find('input').val(count);
                }
            });
        })
    }





}()