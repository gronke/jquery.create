if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}
(function($) {
	$.fn.create = function(options) {
		if(this.length) {

			var ret = [];

			this.each(function() {

				if(typeof options == "string") {
					options = { type: options }
				}
				this.options = jQuery.extend({
					type: 'div',
					id: null,
					className: null
				},options);

				var elem = this,
					$elem = jQuery(elem);

				var n, $n;
				if(n = document.createElement(this.options.type)) {
					$n = jQuery(n);

					if(this.options.className!=null) {
						$n.addClass(this.options.className);
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