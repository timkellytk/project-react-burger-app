(this["webpackJsonpburger-app-udemy"]=this["webpackJsonpburger-app-udemy"]||[]).push([[5],{103:function(e,r,n){"use strict";n.r(r);var t=n(5),a=n(6),o=n(8),i=n(7),s=n(0),u=n.n(s),c=n(98),l=n.n(c),d=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map((function(e){return u.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"}},e.name,": ",e.amount)}));return u.a.createElement("div",{className:l.a.Order},u.a.createElement("p",null,"Ingredients: ",t),u.a.createElement("p",null,"Price: ",u.a.createElement("strong",null,e.price)))},p=n(18),m=n(14),h=n(15),g=n(40),f=n(41),O=n(99),b=n.n(O),v=n(32),E=function(e){Object(o.a)(n,e);var r=Object(i.a)(n);function n(){var e;Object(t.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=r.call.apply(r,[this].concat(o))).goToBurgerBuilder=function(){e.props.history.push("/")},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=u.a.createElement(g.a,null);return this.props.loading||(e=this.props.orders.map((function(e){return u.a.createElement(d,{price:e.price,ingredients:e.ingredients,key:e.id})}))),0===this.props.orders.length&&(e=u.a.createElement("div",{className:b.a.Orders},u.a.createElement("h1",null,"No orders"),u.a.createElement("p",null,"Please go to the Burger Builder and order a burger"),u.a.createElement(v.a,{btnType:"Success",clicked:this.goToBurgerBuilder},"Go To Burger Builder"))),u.a.createElement("div",null,e)}}]),n}(s.Component);r.default=Object(m.b)((function(e){return{orders:e.orders.orders,loading:e.orders.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(r,n){return e(h.d(r,n))},onFetchOrdersStart:function(){return e(h.e())}}}))(Object(f.a)(E,p.a))},98:function(e,r,n){e.exports={Order:"Order_Order__3kYZJ"}},99:function(e,r,n){e.exports={Orders:"Orders_Orders__zeSJl"}}}]);
//# sourceMappingURL=5.002fe632.chunk.js.map