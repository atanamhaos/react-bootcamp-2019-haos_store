/*
Created 20190308 by Caleb and Ben. Further modified by Ben so he can understand it a little better.
*/

(function (window) {   /* This line, and it's closing line, create an imediate function that exposes the $DOJO object. */
    window.$Dojo = function (id) {
        let el = document.getElementById(id);

        return {
            click: function (functionOnClick) {
                el.addEventListener("click", functionOnClick);
            },
            hover: function (functionForMouseOver, functionForMouseOut) {
                el.addEventListener("mouseover", functionForMouseOver);
                el.addEventListener("mouseout", functionForMouseOut);
            }
        };
    };
})(window);
