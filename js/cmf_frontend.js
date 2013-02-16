$(document).ready(function() {
    $('.btn[data-toggle="button"]').click(function() {
        if ($(this).attr('class-toggle') != undefined && !$(this).hasClass('disabled')) {
            if ($(this).attr('data-toggle') == 'button') {
                if ($(this).hasClass('active')) {
                    $(this).removeClass($(this).attr('class-toggle'));
                    $(this).text("Просмотр");
                    $(".node").removeClass("node-edit");
                } else {
                    $(this).addClass($(this).attr('class-toggle'));
                    $(this).text("Редактирование");
                    $(".node").addClass("node-edit");
                }
            }
        }
    });
    $('#pop1').popover(html=true)
    $('#pop2').popover()
});
