(this["webpackJsonphw-02-feedback"]=this["webpackJsonphw-02-feedback"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a,r,c,o,i,s,d,j=n(1),b=n.n(j),l=n(5),u=n.n(l),h=n(2),g=n(3),p=g.a.div(a||(a=Object(h.a)(["\n    width: 600px;\n    margin: 0 auto;\n"]))),O=n(7),f=n(8),x=n(10),v=n(9),m=g.a.h1(r||(r=Object(h.a)([""]))),k=(g.a.h2(c||(c=Object(h.a)([""]))),g.a.ul(o||(o=Object(h.a)(["\n  display: ",";\n"])),(function(e){return e.display})));k.defaultProps={display:"block"};var F=g.a.button(i||(i=Object(h.a)(["\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 4px;\n  border: solid 1px grey;\n  background-color: transparent;\n  cursor: pointer;\n  transition: transform 0.3s ease 0s;\n\n  :hover {\n    transform: scale(1.2);\n  }\n"]))),w=g.a.li(s||(s=Object(h.a)(["\n  margin-bottom: ","px;\n  margin-right: ","px;\n"])),(function(e){return e.gapBottom}),(function(e){return e.gapRight}));w.defaultProps={gapBottom:0,gapRight:0};var L=g.a.span(d||(d=Object(h.a)(["\n  margin-left: ","px;\n"])),(function(e){return e.gapLeft}));L.defaultProps={gapLeft:0};var P=n(0),y=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(P.jsx)(P.Fragment,{children:t.map((function(e){return Object(P.jsx)(w,{gapRight:10,children:Object(P.jsx)(F,{type:"submit",onClick:n,children:e})},e)}))})},B=function(e){var t=e.children,n=e.title;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(m,{children:n}),t]})},N=function(e){var t=e.good,n=e.neutral,a=e.bad,r=e.positivePercentage,c=e.total;return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(k,{children:[Object(P.jsxs)(w,{gapBottom:10,children:["Good:",Object(P.jsx)(L,{gapLeft:5,children:t})]}),Object(P.jsxs)(w,{gapBottom:10,children:["Neutral:",Object(P.jsx)(L,{gapLeft:5,children:n})]}),Object(P.jsxs)(w,{gapBottom:10,children:["Bad:",Object(P.jsx)(L,{gapLeft:5,children:a})]}),Object(P.jsxs)(w,{gapBottom:10,children:["Total:",Object(P.jsx)(L,{gapLeft:5,children:c})]}),Object(P.jsxs)(w,{children:["Positive feedback:",Object(P.jsx)(L,{gapLeft:5,children:r}),"%"]})]})})},C=function(e){var t=e.children,n=e.message,a=e.show;return Object(P.jsx)(P.Fragment,{children:a?Object(P.jsx)("div",{children:t}):Object(P.jsx)("p",{children:n})})},G=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.show=function(e){return!!e&&(!!e||void 0)},e.onLeaveFeedback=function(t){var n=t.target.textContent;e.setState((function(e){return"Good"===n?{good:e.good+1}:"Neutral"===n?{neutral:e.neutral+1}:"Bad"===n?{bad:e.bad+1}:void 0})),e.show(!0)},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(t){var n=e.state.good;return Math.round(n/t*100)},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage(e),n=this.show(e);return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(B,{title:"Plese leave feedback",children:Object(P.jsx)(k,{display:"flex",children:Object(P.jsx)(y,{options:["Good","Neutral","Bad"],onLeaveFeedback:this.onLeaveFeedback})})}),Object(P.jsx)(B,{title:"Statistics",children:Object(P.jsx)(C,{message:"No feedback given",show:n,children:Object(P.jsx)(N,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:t})})})]})}}]),n}(j.Component),R=function(){return Object(P.jsx)(p,{children:Object(P.jsx)(G,{})})},S=function(){return Object(P.jsx)(R,{})};n(20);u.a.render(Object(P.jsx)(b.a.StrictMode,{children:Object(P.jsx)(S,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.141f5e6e.chunk.js.map