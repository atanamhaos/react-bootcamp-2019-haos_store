(function(window) {
    window.$DojoOne = function(id) {
      let el = document.getElementById(id);

      return {
        click: function(functionOnClick) {
          el.addEventListener("click", functionOnClick);
        },
        hover: function(functionOnClick) {
          el.addEventListener("mouseover", functionOnClick);
        }
      };
    };
  })(window);
/*
$DojoOne("myButton").click(function() {
    console.log("The button was clicked!");
});
$DojoOne("myButton").hover(function() {
    console.log("The button was hovered on!");
});
*/
