webpackJsonp([0xd5d9d741ef0b],{556:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=o(1),r=a(n),i=o(3),u=a(i),f=o(135),s=a(f),l=o(195),d=a(l),c=o(194),p=a(c),v=function(e){var t=e.page,o=(t||{}).html;return r.default.createElement(s.default,null,r.default.createElement(d.default,t.frontmatter),r.default.createElement(p.default,{html:o}))};v.propTypes={page:u.default.object.isRequired},t.default=v,e.exports=t.default},557:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=o(556);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(n).default}}),e.exports=t.default},577:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=o(1),f=a(u),s=o(3),l=a(s),d=o(41),c=o(38),p=o(60),v=o(136),g=a(v),b=o(557),h=a(b),m=o(291),y=a(m),_=o(196),P=a(_),E=function(e){function t(){var o,a,i;n(this,t);for(var u=arguments.length,f=Array(u),s=0;s<u;s++)f[s]=arguments[s];return o=a=r(this,e.call.apply(e,[this].concat(f))),a.moveNavigatorAside=p.moveNavigatorAside.bind(a),i=o,r(a,i)}return i(t,e),t.prototype.componentDidMount=function(){"is-featured"===this.props.navigatorPosition&&this.moveNavigatorAside()},t.prototype.render=function(){var e=this.props.data,t=(((e||{}).site||{}).siteMetadata||{}).facebook;return f.default.createElement(g.default,null,f.default.createElement(h.default,{page:e.page}),"is-featured"===this.props.navigatorPosition&&f.default.createElement(y.default,{footnote:e.footnote}),f.default.createElement(P.default,{data:e.post,facebook:t}))},t}(f.default.Component);E.propTypes={data:l.default.object.isRequired,navigatorPosition:l.default.string.isRequired,setNavigatorPosition:l.default.func.isRequired,isWideScreen:l.default.bool.isRequired};var w=function(e,t){return{navigatorPosition:e.navigatorPosition,isWideScreen:e.isWideScreen}},M={setNavigatorPosition:c.setNavigatorPosition,setNavigatorShape:c.setNavigatorShape};t.default=(0,d.connect)(w,M)(E);t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-page-template-js-2b75610627210588bded.js.map