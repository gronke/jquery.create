if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}
(function($) {
	$.fn.create = function(tag, options) {
		if(this.length) {

			var ret = [];

			if(tag !== undefined) {
				options = $.extend((options || {}), {
					tag: tag
				});
			}

			this.each(function() {

				this.options = jQuery.extend({
					tag: 'div',
					type: null,
					id: null,
					position: null
				},(options || {}));

				var elem = this,
					$elem = jQuery(elem);

				var n, $n;
				if(this.options.type!==null) {
					try {
						n = document.createElement('<' + this.options.tag + ' type="' + this.options.type + '"></' + this.options.tag + '>');
					} catch(e) {
						n = document.createElement(this.options.tag);
						$(n).attr('type', this.options.type);
					}
				} else {
					n = document.createElement(this.options.tag);
				}

				if(n) {
					$n = jQuery(n);

					if(this.options.id!==null) {
						$n.attr("id", this.options.id);
					}

					switch(this.options.position) {

						case "before":
							$elem.prepend(n);
							break;

						default:
							$elem.append(n);
							break;

					}
					
				}

				ret.push(n);

			});

			return jQuery(ret);
		}
	};
})(jQuery);