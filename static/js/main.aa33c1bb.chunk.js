(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),s=(a(15),a(2)),c=a(5),i=a(6),u=a(8),h=a(7),m=a(1),p=a(9);function b(e){var t=e.product;return r.a.createElement("li",null,t)}var v=function(e){var t=e.goodsArray;return r.a.createElement(r.a.Fragment,null,t.map(function(e,t){return r.a.createElement(b,{product:e,key:e})}))},d=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={show:!1,goodsArray:[],selectValue:1},a.updateShow=a.updateShow.bind(Object(m.a)(a)),a.Reverse=a.Reverse.bind(Object(m.a)(a)),a.SortAlph=a.SortAlph.bind(Object(m.a)(a)),a.Reset=a.Reset.bind(Object(m.a)(a)),a.SortByLength=a.SortByLength.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a.ChangeSelect=a.ChangeSelect.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"ChangeSelect",value:function(e){this.setState({selectValue:e.target.value})}},{key:"updateShow",value:function(){this.setState({show:!0,goodsArray:Object(s.a)(this.props.goodsFromServer)})}},{key:"Reverse",value:function(){var e=Object(s.a)(this.props.goodsFromServer).reverse();this.setState({goodsArray:e})}},{key:"SortAlph",value:function(){var e=Object(s.a)(this.props.goodsFromServer).sort();this.setState({goodsArray:e})}},{key:"Reset",value:function(){this.setState({goodsArray:this.props.goodsFromServer,selectValue:1})}},{key:"SortByLength",value:function(){var e=Object(s.a)(this.props.goodsFromServer).sort(function(e,t){return t.length-e.length});this.setState({goodsArray:e})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=Object(s.a)(this.props.goodsFromServer).filter(function(e){return e.length>=t.state.selectValue});this.setState({goodsArray:a})}},{key:"render",value:function(){var e=this.state,t=e.show,a=e.goodsArray,n=this.props.labelStart;return r.a.createElement(r.a.Fragment,null,!t&&r.a.createElement("button",{type:"button",onClick:this.updateShow},n),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:this.Reverse},"Reverse"),r.a.createElement("button",{type:"button",onClick:this.SortAlph},"SortAlphabetically"),r.a.createElement("button",{type:"button",onClick:this.Reset},"Reset"),r.a.createElement("button",{type:"button",onClick:this.SortByLength},"SortByLength"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("select",{name:"number",onChange:this.ChangeSelect,size:"5",value:this.state.selectValue},r.a.createElement("option",{disabled:!0},"choose length"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9"),r.a.createElement("option",{value:"10"},"10")),r.a.createElement("input",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})),r.a.createElement(v,{goodsArray:a})))}}]),t}(n.Component),S=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Goods 1"),r.a.createElement("section",null,r.a.createElement(d,{goodsFromServer:S,labelStart:"Start"})))};l.a.render(r.a.createElement(g,{test:123}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.aa33c1bb.chunk.js.map