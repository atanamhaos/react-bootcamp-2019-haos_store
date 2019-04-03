(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},32:function(e,t,a){e.exports=a(68)},37:function(e,t,a){},38:function(e,t,a){},58:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(29),r=a.n(l),o=(a(37),a(6)),i=a(7),s=a(10),u=a(8),m=a(11),d=a(9),p=a(13),h=(a(38),a(15),function(e){return c.a.createElement("div",{className:"bodyclass"},c.a.createElement("h1",null,"Home Page"),c.a.createElement("p",null,"Welcome to the Project Product Management. Here we can manage a ",c.a.createElement("br",null),"set of products. You are able to create new products, remove old ",c.a.createElement("br",null),"products, and edit products."))}),b=a(12),f=a.n(b),E=(a(58),function(e){return c.a.createElement("div",{className:"displayclass"},c.a.createElement("img",{className:"imgclass",src:e.data.url,alt:"handbag"}),c.a.createElement("label",{className:"displaylabel"},e.data.name),c.a.createElement("label",{className:"displaylabel"},"$",e.data.price),c.a.createElement(d.b,{className:"astyle",to:"/products/edit/".concat(e.data.id)},c.a.createElement("button",{className:"displaybtnedit"},"EDIT")),c.a.createElement("button",{className:"displaybtndelete",onClick:function(){e.deleteitem(e.data.id)}},"Delete"))}),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).fetchproducts=function(){f.a.get("/fetchproducts").then(function(e){a.setState({productData:e.data})}).catch(function(e){console.log(e)})},a.deleteitem=function(e){f.a.post("/deleteproduct/".concat(e)).then(function(e){"success"===e.data.status&&a.fetchproducts()}).catch(function(e){console.log(e)})},a.state={productData:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchproducts()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"bodyclass"},c.a.createElement("h1",null,"Products List"),this.state.productData?this.state.productData.map(function(t,a){return c.a.createElement(E,{data:t,deleteitem:e.deleteitem})}):null)}}]),t}(c.a.Component),v=a(16),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a.formSubmit=function(e){e.preventDefault(),f.a.post("/postproductdata",{name:a.state.title,price:a.state.price,url:a.state.url}).then(function(e){console.log(e),200===e.status&&a.setState({redirectPage:!0})}).catch(function(e){console.log(e)})},a.redirectPage=function(){if(a.state.redirectPage)return c.a.createElement(p.a,{to:"/products"})},a.state={title:"",price:"",url:"",redirectPage:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"bodyclass"},this.redirectPage(),c.a.createElement("h1",null,"Create a new Product"),c.a.createElement("form",{onSubmit:this.formSubmit},c.a.createElement("div",{className:"datacomponent"},c.a.createElement("label",{className:"componentlabel",htmlFor:"title"},"Title"),c.a.createElement("input",{className:"inputcomponent",id:"title",name:"title",onChange:this.handleChange,value:this.state.title})),c.a.createElement("div",{className:"datacomponent"},c.a.createElement("label",{className:"componentlabel",htmlFor:"price"},"Price"),c.a.createElement("input",{className:"inputcomponent",id:"price",name:"price",onChange:this.handleChange,value:this.state.price})),c.a.createElement("div",{className:"datacomponent"},c.a.createElement("label",{className:"componentlabel",htmlFor:"url"},"Image url"),c.a.createElement("input",{className:"inputcomponent",id:"url",name:"url",onChange:this.handleChange,value:this.state.url})),c.a.createElement("button",{className:"btn",type:"submit"},"Create")))}}]),t}(c.a.Component),j=(a(67),function(e){return c.a.createElement("div",{id:"navheader"},c.a.createElement("ul",{id:"linkstyle"},c.a.createElement("li",{className:"listyle"},c.a.createElement(d.b,{to:"/home"},"Home")),c.a.createElement("li",{className:"listyle"},c.a.createElement(d.b,{to:"/products"},"Product List")),c.a.createElement("li",{className:"listyle"},c.a.createElement(d.b,{to:"/products/new"},"Product Creation"))))}),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a.updateProduct=function(){f.a.put("/updateproduct/".concat(a.props.match.params.id),{name:a.state.title,price:a.state.price,url:a.state.url}).then(function(e){"success"===e.data.status&&a.setState({pageRedirect:!0})}).catch(function(e){console.log(e)})},a.deleteProduct=function(){f.a.post("/deleteproduct/".concat(a.props.match.params.id)).then(function(e){"success"===e.data.status&&a.setState({pageRedirect:!0})}).catch(function(e){console.log(e)})},a.formSubmit=function(e){e.preventDefault()},a.redirectPage=function(){if(a.state.pageRedirect)return c.a.createElement(p.a,{to:"/products"})},a.state={title:"",price:"",url:"",pageRedirect:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("componentdid mount"),f.a.get("/fetchproducts/".concat(this.props.match.params.id)).then(function(t){e.setState({title:t.data.name,price:t.data.price,url:t.data.url})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"bodyclass"},this.redirectPage(),c.a.createElement("h1",null,"Create a new Product"),c.a.createElement("form",{onSubmit:this.formSubmit},c.a.createElement("div",{className:"datacomponent"},c.a.createElement("label",{className:"componentlabel",htmlFor:"title"},"Title"),c.a.createElement("input",{className:"inputcomponent",id:"title",name:"title",onChange:this.handleChange,value:this.state.title})),c.a.createElement("div",{className:"datacomponent"},c.a.createElement("label",{className:"componentlabel",htmlFor:"price"},"Price"),c.a.createElement("input",{className:"inputcomponent",id:"price",name:"price",onChange:this.handleChange,value:this.state.price})),c.a.createElement("div",{className:"datacomponent"},c.a.createElement("label",{className:"componentlabel",htmlFor:"url"},"Image url"),c.a.createElement("input",{className:"inputcomponent",id:"url",name:"url",onChange:this.handleChange,value:this.state.url})),c.a.createElement("button",{className:"btn",type:"submit",onClick:this.deleteProduct},"Delete"),c.a.createElement("button",{className:"btn",type:"submit",onClick:this.updateProduct},"Update")))}}]),t}(c.a.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement("div",{id:"prodmanage"},c.a.createElement("h1",null,"PPM - Project Product Management"),c.a.createElement(j,null),c.a.createElement(p.d,null,c.a.createElement(p.a,{exact:!0,from:"/",to:"/home"}),c.a.createElement(p.b,{path:"/home",component:h}),c.a.createElement(p.b,{path:"/products/new",component:N}),c.a.createElement(p.b,{path:"/products/edit/:id",component:y}),c.a.createElement(p.b,{path:"/products",component:g}))))}}]),t}(c.a.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(O,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.b9ae8613.chunk.js.map