(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{83:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(1),a=n.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,f(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:this.props.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.a.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))}}])&&u(n.prototype,o),i&&u(n,i),t}(o.PureComponent);p.propTypes={color:a.a.string};var b=p;function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,v(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){requestAnimationFrame((function(){e.about.classList.add("animate")}))}),50)}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{ref:function(t){return e.about=t},className:"about"},r.a.createElement("a",{role:"button",className:"close",onClick:this.props.history.goBack,title:"close"},r.a.createElement(b,{color:"#000"})),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"MARVEL API Explorer is a personal project made by ",r.a.createElement("a",{title:"Ion Drimba Filho Potfolio",className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://iondrimbafilho.me/"},"Ion Drimba Filho")," using ReactJS + Redux and the oficial ",r.a.createElement("a",{title:"Marvel API",className:"link",target:"_blank",rel:"noopener noreferrer",href:"http://developer.marvel.com/"},"Marvel API"),".",r.a.createElement("br",null),"It also works as a PWA."),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/iondrimba/marvel-api-explorer",className:"github",title:"Github"},r.a.createElement("img",{src:"/images/github.svg",alt:"Github icon",width:"32",height:"32"}))))}}])&&m(n.prototype,o),i&&m(n,i),t}(o.PureComponent);d.propTypes={history:a.a.object};t.default=d}}]);