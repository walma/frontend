$(document).ready(function() {

    // Переключатель "просмотр" и "редактирование" на тулбаре.
    $('.btn[data-toggle="button"]').click(function() {
        if ($(this).attr('class-toggle') != undefined && !$(this).hasClass('disabled')) {
            if ($(this).attr('data-toggle') == 'button') {
                if ($(this).hasClass('active')) {
                    $(this).removeClass($(this).attr('class-toggle'));
                    $(this).text("Просмотр");
                    $(".cmf-frontadmin-node").removeClass("cmf-node-edit");
                } else {
                    $(this).addClass($(this).attr('class-toggle'));
                    $(this).text("Редактирование");
                    $(".cmf-frontadmin-node").addClass("cmf-node-edit");
                }
            }
        }
    });
    $('#pop1').popover(html=true);
    $('#pop2').popover();

    // По клику на ссылку, отображается оверлей.
    $('.popup-trigger').click(function() {
        $.SC_Overlay('open');

        return false;
    });

    var $Overlay = null;
    var $Screen  = null;

    var DefaultSettings = {};

    var initialized = false;
    var opened      = false;

    var Methods = {
        init : function() {
            $Overlay = $('<div id="cmf-overlay" />');
            $Screen  = $('<div id="cmf-overlay-screen" />');

            $Overlay
                .click(function() { $.SC_Overlay('close'); })
                .append(
                    $('<div id="cmf-overlay-window" />')
                        .click(function() { return false; })
                        .append(
                        $('#popup-content').removeClass('hidden')
                    )
                );

            initialized = true;
        },

        open : function(Options) {
            // Настройки.
            Settings = $.extend({}, DefaultSettings);

            if(Options) {
                $.extend(Settings, Options);
            }

            if(!initialized) {
                $.SC_Overlay('init');
            }

            $('body').addClass('body-overlayed');
            $('body').append($Screen).append($Overlay);

            opened = true;
        },

        close : function() {
            if(!opened) {
                return;
            }

            $Screen.detach();
            $Overlay.detach();

            $('body').removeClass('body-overlayed');
        }
    };

    $.SC_Overlay = function(method)	{
        if(!Methods[method]) {
            method = 'open';
        }

        return Methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    };

});
