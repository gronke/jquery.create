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

			if(tag != undefined) {
				options = $.extend((options || {}), {
					tag: tag
				});
			}

			this.each(function() {

				this.options = jQuery.extend({
					tag: 'div',
					type: null,
					id: null
				},(options || {}));

				var elem = this,
					$elem = jQuery(elem);

				var n, $n;
				if(n = document.createElement(this.options.tag)) {
					$n = jQuery(n);

					if(this.options.type!=null) {
						n.type = this.options.type;
					}

					if(this.options.id!=null) {
						$n.attr("id", this.options.id);
					}

					$elem.append(n);
				}

				ret.push(n);

			});

			return jQuery(ret);
		}
	}
})(jQuery);