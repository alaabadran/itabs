'use strict';
// adding events
$(document).on('click', '#tab-items li', function (e){
    var $li = $(this); //storing element in var
    if($li.hasClass('active')){
        return false;
    } else {
        var $lis = $('#tab-items li');
        $lis.removeClass('active');
        $li.addClass('active');
        var $li_index = $lis.index($li);
        $('#tabs-content .tab-content').hide().eq($li_index).fadeIn(300);
    }
});