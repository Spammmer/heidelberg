
(function(global) {

	var header  = document.querySelector('header');
	var welcome = document.querySelector('header div');



	if (header !== null && welcome !== null) {

		var _resize = function() {

			var offset = ((global.innerHeight - welcome.offsetHeight) / 2).toFixed(0);

			header.style.paddingTop    = offset + 'px';
			header.style.paddingBottom = offset + 'px';

		};


		global.addEventListener('resize', _resize, true);
		global.addEventListener('orientationchange', _resize, true);
		_resize();

	}

})(this);

