(function($) {
	var $Overlay = null;
	var $Screen  = null;

	var DefaultSettings = {};
	
	var initialized = false;
	var opened      = false;

	var Methods = {
		init : function() {
			$Overlay = $('<div id="sc-overlay" />');
			$Screen  = $('<div id="sc-overlay-screen" />');
			
			$Overlay
                .click(function() { $.SC_Overlay('close'); })
				.append(
					$('<div id="sc-overlay-window" />')
						.click(function() { return false; })
						.append(
							$('#popup-content').removeClass('Hidden')
						)
				)
			;
			
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

			$('body').addClass('BodyOverlayed');
			$('body').append($Screen).append($Overlay);
			
			opened = true;
		},
		
		close : function() {
			if(!opened) {
                return;
            }

			$Screen.detach();
			$Overlay.detach();
			
			$('body').removeClass('BodyOverlayed');
		}
	};

	$.SC_Overlay = function(method)	{
		if(!Methods[method]) {
            method = 'open';
        }

		return Methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	};

})(jQuery);
