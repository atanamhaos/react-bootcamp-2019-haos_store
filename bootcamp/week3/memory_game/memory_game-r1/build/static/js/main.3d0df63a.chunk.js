(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(7),o=n.n(c),l=(n(14),n(1)),r=n(2),u=n(4),s=n(3),m=n(5),d=(n(15),n(16),n(17),function(e){return i.a.createElement("button",{className:"tile",id:"".concat(e.rowIndex).concat(e.tileIndex),value:e.valueOfTile,onClick:function(t){e.tileClickEvent(t)}})}),v=(n(18),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).tileClickEvent=function(e){function t(){return document.getElementById("".concat(e.target.id)).innerHTML="".concat(e.target.value)}if(console.log("".concat(e.target.id).concat(e.target.value)),""===n.state.click1.value){var a=n.state.click1;a.value=e.target.value,a.position=e.target.id,n.setState({click1:a}),t()}else if(""===n.state.click2.value){var i=n.state.click2;i.value=e.target.value,i.position=e.target.id,n.setState({click2:i}),t(),setTimeout(function(){var e,t;console.log("waiting inside"),n.state.click1.value!==n.state.click2.value&&(console.log("in the if"),e=n.state.click1.position,t=n.state.click2.position,document.getElementById(e).innerHTML="",document.getElementById(t).innerHTML="");var a={value:"",position:""},i={value:"",position:""};n.setState({click1:a,click2:i})},2e3),console.log("waiting outside")}else console.log("clcikihui")},n.state={gameBoard:[[{num:"1",show:!1},{num:"2"},{num:"3"},{num:"4"}],[{num:"2"},{num:"6"},{num:"1"},{num:"2"}],[{num:"3"},{num:"4"},{num:"5"},{num:"6"}]],click1:{value:"",position:""},click2:{value:"",position:""}},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h1",null,"Game Board this is"),this.state.gameBoard.map(function(t,n){return i.a.createElement("div",{className:"gameBoardRow"},t.map(function(t,a){return i.a.createElement(d,{rowIndex:n,tileIndex:a,valueOfTile:t.num,tileClickEvent:e.tileClickEvent})}))}))}}]),t}(i.a.Component)),f=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return console.log("MemoryGame.js render()"),i.a.createElement("div",null,i.a.createElement("h1",null,"Memory Game"),i.a.createElement(v,null))}}]),t}(i.a.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.3d0df63a.chunk.js.map