(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,n){"use strict";n.r(t);n(151),n(152);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(150),c=function(e){var t=(new TextEncoder).encode(JSON.stringify((void 0).props.config)),n=new Blob([t],{type:"application/json;charset=utf-8"});window.particlesJS.load(e,URL.createObjectURL(n),function(){return console.log("loaded")})},s=n(170);n(171);n.d(t,"query",function(){return u});var u="3065999034",f=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={invertedHeader:!1},t.handleScroll=function(){t.setState({invertedHeader:window.pageYOffset+62>=window.innerHeight})},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll),c("particles-js")},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},n.render=function(){return o.a.createElement(l.a,{invertedHeader:this.state.invertedHeader},o.a.createElement("div",{className:"home-splash text-centered"},o.a.createElement("div",{className:"absolute-centered splash-info"},o.a.createElement("h1",{className:"splash-title"},o.a.createElement("span",{className:"accent-text"},"l"),"iam",o.a.createElement("span",{className:"accent-text"},"d"),"alg"),o.a.createElement("h4",{className:"splash-subtitle"},"Something goes here."),o.a.createElement("div",{className:"media-icons-wrapper"},this.props.data.site.siteMetadata.social.map(function(e){var t=e.name,n=e.link;return o.a.createElement("a",{className:"media-icon",key:"media-icon-"+t,href:n},o.a.createElement(s.a,{width:48,icon:["fab",t]}))}))),o.a.createElement("div",{id:"particles-js"}),o.a.createElement("div",{onClick:function(){return document.querySelector("#firstContainer").scrollIntoView({behavior:"smooth"})},className:"arrow-down absolute-centeredX clickable"})),o.a.createElement("div",{id:"firstContainer",className:"container"},o.a.createElement("h1",{className:"title"},"Hey There."),o.a.createElement("p",null,"Development in progress with Gatsby.")))},t}(o.a.Component);t.default=f},146:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(33),c=n.n(l);n.d(t,"a",function(){return c.a});n(147);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Liam Dalgarno",navLinks:[{name:"Home",link:"/"},{name:"Blog",link:"/blog"},{name:"Projects",link:"/projects"},{name:"About",link:"/about"}]}}}}},149:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(55),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},150:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),o=n(146),l=(n(151),n(152),n(154),function(e){var t=e.inverted,n=e.siteTitle,a=e.navLinks;return i.a.createElement("header",{className:"main-header"},i.a.createElement("div",{className:"nav-container",style:{margin:"0 auto",padding:"2rem 0rem"}},i.a.createElement("nav",{className:"navbar"},i.a.createElement("ul",{className:"nav-left"},i.a.createElement("li",null,i.a.createElement(o.a,{to:"/",className:t?"main-link inverted":"main-link"},n))),i.a.createElement("ul",{className:"nav-right"},a.map(function(e){var n=e.name,a=e.link;return i.a.createElement("li",{key:"navbar-link-"+n},i.a.createElement(o.a,{to:a,activeClassName:"nav-active",className:t?"nav-link main-link inverted":"nav-link main-link"},n))})))))}),c=(n(155),n(153)),s=n(156);c.c.add(s.a),c.c.add(s.b),c.c.add(s.c),c.a.autoAddCss=!1;t.a=function(e){var t=e.invertedHeader,n=e.children;return i.a.createElement(o.b,{query:"1170218135",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{inverted:t,siteTitle:e.site.siteMetadata.title,navLinks:e.site.siteMetadata.navLinks}),i.a.createElement("div",null,i.a.createElement("main",null,n),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:a})}},170:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return g});var a=n(153),r=n(4),i=n.n(r),o=n(0),l=n.n(o);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){s(e,t,n[t])})}return e}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var d,y=(function(e){var t,n,a,r,i,o,l,c,s,u,f,p,d,y,b;t=m,n=function(e,t,a){if(!c(t)||u(t)||f(t)||p(t)||l(t))return t;var r,i=0,o=0;if(s(t))for(r=[],o=t.length;i<o;i++)r.push(n(e,t[i],a));else for(var m in r={},t)Object.prototype.hasOwnProperty.call(t,m)&&(r[e(m,a)]=n(e,t[m],a));return r},a=function(e){return d(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)},r=function(e){var t=a(e);return t.substr(0,1).toUpperCase()+t.substr(1)},i=function(e,t){return function(e,t){var n=(t=t||{}).separator||"_",a=t.split||/(?=[A-Z])/;return e.split(a).join(n)}(e,t).toLowerCase()},o=Object.prototype.toString,l=function(e){return"function"==typeof e},c=function(e){return e===Object(e)},s=function(e){return"[object Array]"==o.call(e)},u=function(e){return"[object Date]"==o.call(e)},f=function(e){return"[object RegExp]"==o.call(e)},p=function(e){return"[object Boolean]"==o.call(e)},d=function(e){return(e-=0)==e},y=function(e,t){var n=t&&"process"in t?t.process:t;return"function"!=typeof n?e:function(t,a){return n(t,e,a)}},b={camelize:a,decamelize:i,pascalize:r,depascalize:i,camelizeKeys:function(e,t){return n(y(a,t),e)},decamelizeKeys:function(e,t){return n(y(i,t),e,t)},pascalizeKeys:function(e,t){return n(y(r,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}},e.exports?e.exports=b:t.humps=b}(d={exports:{}},d.exports),d.exports);var b=!1;try{b=!0}catch(E){}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function h(e){return null===e?null:"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e){var t=e.icon,n=e.mask,r=e.symbol,i=e.className,o=e.title,l=h(t),c=v("classes",[].concat(p(function(e){var t,n=(s(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-inverse":e.inverse,"fa-border":e.border,"fa-li":e.listItem,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},"fa-".concat(e.size),null!==e.size),s(t,"fa-rotate-".concat(e.rotation),null!==e.rotation),s(t,"fa-pull-".concat(e.pull),null!==e.pull),t);return Object.keys(n).map(function(e){return n[e]?e:null}).filter(function(e){return e})}(e)),p(i.split(" ")))),f=v("transform","string"==typeof e.transform?a.d.transform(e.transform):e.transform),m=v("mask",h(n)),d=Object(a.b)(l,u({},c,f,m,{symbol:r,title:o}));if(!d)return function(){var e;!b&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",l),null;var y=d.abstract,E={};return Object.keys(e).forEach(function(t){g.defaultProps.hasOwnProperty(t)||(E[t]=e[t])}),w(y[0],E)}g.displayName="FontAwesomeIcon",g.propTypes={border:i.a.bool,className:i.a.string,mask:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),fixedWidth:i.a.bool,inverse:i.a.bool,flip:i.a.oneOf(["horizontal","vertical","both"]),icon:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),listItem:i.a.bool,pull:i.a.oneOf(["right","left"]),pulse:i.a.bool,rotation:i.a.oneOf([90,180,270]),size:i.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i.a.bool,symbol:i.a.oneOfType([i.a.bool,i.a.string]),title:i.a.string,transform:i.a.oneOfType([i.a.string,i.a.object])},g.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null};var w=function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var r=(n.children||[]).map(function(n){return e(t,n)}),i=Object.keys(n.attributes||{}).reduce(function(e,t){var a=n.attributes[t];switch(t){case"class":e.attrs.className=a,delete n.attributes.class;break;case"style":e.attrs.style=a.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n,a=t.indexOf(":"),r=y.camelize(t.slice(0,a)),i=t.slice(a+1).trim();return r.startsWith("webkit")?e[(n=r,n.charAt(0).toUpperCase()+n.slice(1))]=i:e[r]=i,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[y.camelize(t)]=a}return e},{attrs:{}}),o=a.style,l=void 0===o?{}:o,c=f(a,["style"]);return i.attrs.style=u({},i.attrs.style,l),t.apply(void 0,[n.tag,u({},i.attrs,c)].concat(p(r)))}.bind(null,l.a.createElement)}).call(this,n(74))}}]);
//# sourceMappingURL=component---src-pages-index-js-dda45102b6612e75f30d.js.map