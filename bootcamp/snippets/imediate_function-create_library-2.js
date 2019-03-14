(function (window) {

    window.Library = function (id) {

        let el = document.getElementById(id);
        return {
            click: function (callback) {
                el.onclick = callback;
            }
        };
    }
})(window);

// console.log(Library);
// obj = Library("asdf")
// console.log(obj);
// obj.click(function(){console.log("Something was clicked...") })
// console.log(Library);

Library("app").click(function(){console.log("Something was clicked...") })
Library("app1").click(function(){console.log("Something 1 was clicked...") })
Library("app2").click(function(){console.log("Something 2 was clicked...") })