(function (window) {
    window.$Dojo = function (id) {
        let el = document.getElementById(id);
        return {
            click: function (functionForAClick) {
                el.onclick = functionForAClick;
            },
            hover: function (functionForHover) {
                // el.
        },
            keypress: function (etc) {
                el.keypress = etc;

            }
        };
    }
})(window);