(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(162),l=t(160),c=r.a.createElement("div",{className:"err-splash absolute-centered"},r.a.createElement("h1",null,"Whoops!"),r.a.createElement("h3",null,"404: Route not found."));a.default=function(){return r.a.createElement(i.a,{banner:c,bannerHeight:"100vh"},r.a.createElement(l.a,{title:"404: Not found"}))}},154:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),i=t(4),l=t.n(i),c=t(33),o=t.n(c);t.d(a,"a",function(){return o.a});t(155);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},155:function(e,a,t){var n;e.exports=(n=t(159))&&n.default||n},158:function(e){e.exports={data:{site:{siteMetadata:{title:"liamdalg",navLinks:[{name:"Home",link:"/"},{name:"Blog",link:"/blog"},{name:"Projects",link:"/projects"}],social:[{name:"github",link:"https://github.com/liamdalg"},{name:"linkedin",link:"https://www.linkedin.com/in/liamdalg/"},{name:"twitter",link:"https://twitter.com/liamdalg_"}]}}}}},159:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),i=t(4),l=t.n(i),c=t(55),o=t(2),s=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=s},160:function(e,a,t){"use strict";var n=t(161),r=t(0),i=t.n(r),l=t(4),c=t.n(l),o=t(167),s=t.n(o);function m(e){var a=e.description,t=e.lang,r=e.meta,l=e.keywords,c=e.title,o=n.data.site,m=a||o.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},a.a=m},161:function(e){e.exports={data:{site:{siteMetadata:{title:"liamdalg",description:"Personal blog built with Gatsby.",author:"@liamdalg"}}}}},162:function(e,a,t){"use strict";t(156),t(157);var n=t(7),r=t.n(n),i=t(158),l=t(0),c=t.n(l),o=t(154),s=t(164),m=t.n(s),d=(t(143),function(e){var a=e.siteTitle,t=e.navLinks,n=e.noSpacer;return c.a.createElement(c.a.Fragment,null,!n&&c.a.createElement("div",{className:"nav-container nav-placeholder"},"liamdalg placeholder"),c.a.createElement("header",{className:"main-header"},c.a.createElement("div",{className:"nav-container",style:{margin:"0 auto",padding:"1rem 0rem"}},c.a.createElement("nav",{className:"navbar"},c.a.createElement("ul",{className:"nav-left"},c.a.createElement("li",null,c.a.createElement(o.a,{to:"/",className:"main-link"},a))),c.a.createElement("ul",{className:"nav-right"},t.map(function(e){var a=e.name,t=e.link;return c.a.createElement("li",{key:"navbar-link-"+a},c.a.createElement(o.a,{to:t,activeClassName:"nav-active",className:"nav-link main-link"},a))}),c.a.createElement("a",{href:"/cv-pub.pdf",target:"_blank",className:"nav-link main-link"},"CV"))))))}),u=(t(144),{particles:{number:{value:150,density:{enable:!0,value_area:2e3}},color:{value:"#fb713f"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!1,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#fb713f",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}),p=t(163),v=t(165),h=t(166);p.c.add(v.a),p.c.add(v.b),p.c.add(v.c),p.a.autoAddCss=!1;var g=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this;return c.a.createElement(o.b,{query:"1973186001",render:function(a){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{siteTitle:a.site.siteMetadata.title,navLinks:a.site.siteMetadata.navLinks,noSpacer:e.props.noSpacer}),c.a.createElement("div",null,c.a.createElement("div",{style:{position:"relative",backgroundColor:"#161616",width:"100%",height:e.props.bannerHeight}},e.props.banner,!e.props.noParticles&&c.a.createElement(m.a,{className:"particles",params:u})),c.a.createElement("main",null,e.props.children),c.a.createElement("footer",null,c.a.createElement("div",{className:"footer-wrapper"},c.a.createElement("div",{className:"media-icons-wrapper"},a.site.siteMetadata.social.map(function(e){var a=e.name,t=e.link;return c.a.createElement("a",{className:"media-icon",key:"media-icon-"+a,href:t},c.a.createElement(h.a,{width:48,icon:["fab",a]}))})),c.a.createElement("div",{className:"footer-other"},c.a.createElement("p",null,"liamdalg99@gmail.com"),c.a.createElement("p",null,"© 2019 Liam Dalgarno | Made with GatsbyJS and Github Pages."))))))},data:i})},a}(c.a.Component);a.a=g}}]);
//# sourceMappingURL=component---src-pages-404-js-2c821ddaaa27e5405eb4.js.map