(window.webpackJsonp=window.webpackJsonp||[]).push([[9,6],{447:function(o,t,e){"use strict";e.r(t);var n=e(0),l={__name:"TheCardHabilidade",props:["logo_tecnologia","nome_tecnologia"],setup:function(o){var t=o,l=Object(n.a)((function(){return e(461)("./".concat(t.logo_tecnologia))}));return{__sfc:!0,props:t,logo:l}}},c=e(44),component=Object(c.a)(l,(function(){var o=this,t=o._self._c;return t("div",{staticClass:"card-habilidade flex flex-col items-center justify-center transition-all lg:contrast-75 lg:hover:contrast-100 cursor-pointer"},[t("div",{staticClass:"img max-w-[56px] md:max-w-[64px]"},[t("img",{staticClass:"transition-all w-16 h-16",attrs:{src:o._self._setupProxy.logo,alt:""}})]),o._v(" "),t("div",{staticClass:"texto pt-4"},[t("h3",{staticClass:"text-base md:text-lg tracking-tight text-center"},[o._v(o._s(o.nome_tecnologia))])])])}),[],!1,null,"e0fd3f9a",null);t.default=component.exports},461:function(o,t,e){var map={"./bootstrap.svg":462,"./css3.svg":463,"./figma.svg":464,"./git.svg":465,"./graphql.svg":466,"./html5.svg":467,"./javascript.svg":468,"./nuxt.png":469,"./quasar.png":470,"./react.svg":471,"./tailwind.svg":472,"./vuejs.svg":473,"./wordpress.svg":474};function n(o){var t=l(o);return e(t)}function l(o){if(!e.o(map,o)){var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}return map[o]}n.keys=function(){return Object.keys(map)},n.resolve=l,o.exports=n,n.id=461},462:function(o,t,e){o.exports=e.p+"img/bootstrap.9a779c1.svg"},463:function(o,t,e){o.exports=e.p+"img/css3.67c188f.svg"},464:function(o,t,e){o.exports=e.p+"img/figma.b57c6c0.svg"},465:function(o,t,e){o.exports=e.p+"img/git.67a9ac2.svg"},466:function(o,t,e){o.exports=e.p+"img/graphql.8171c4e.svg"},467:function(o,t,e){o.exports=e.p+"img/html5.e0a36f5.svg"},468:function(o,t,e){o.exports=e.p+"img/javascript.712f32e.svg"},469:function(o,t,e){o.exports=e.p+"img/nuxt.0912ea9.png"},470:function(o,t,e){o.exports=e.p+"img/quasar.f8ec093.png"},471:function(o,t,e){o.exports=e.p+"img/react.8a6d12f.svg"},472:function(o,t,e){o.exports=e.p+"img/tailwind.09cb781.svg"},473:function(o,t,e){o.exports=e.p+"img/vuejs.493dfed.svg"},474:function(o,t,e){o.exports=e.p+"img/wordpress.a4345a9.svg"},475:function(o,t,e){var content=e(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(78).default)("6b46ba9e",content,!0,{sourceMap:!1})},486:function(o,t,e){"use strict";e(475)},487:function(o,t,e){var n=e(77)((function(i){return i[1]}));n.push([o.i,".grid-habilidades[data-v-626c74db]{-moz-column-gap:2rem;column-gap:2rem;grid-template-columns:repeat(auto-fit,minmax(100px,max-content));justify-content:center;row-gap:4rem}@media(max-width:640px){.grid-habilidades[data-v-626c74db]{-moz-column-gap:1rem;column-gap:1rem;grid-template-columns:repeat(3,1fr);row-gap:2rem}}",""]),n.locals={},o.exports=n},495:function(o,t,e){"use strict";e.r(t);var n=e(447),l={__name:"TheHabilidades",setup:function(o){return{__sfc:!0,habilidades:[{id:0,nome_tecnologia:"Vue.js",logo_tecnologia:"vuejs.svg"},{id:1,nome_tecnologia:"Nuxt.js",logo_tecnologia:"nuxt.png"},{id:2,nome_tecnologia:"Quasar",logo_tecnologia:"quasar.png"},{id:3,nome_tecnologia:"React.js",logo_tecnologia:"react.svg"},{id:4,nome_tecnologia:"GraphQL",logo_tecnologia:"graphql.svg"},{id:5,nome_tecnologia:"Wordpress CMS",logo_tecnologia:"wordpress.svg"},{id:6,nome_tecnologia:"Javascript",logo_tecnologia:"javascript.svg"},{id:7,nome_tecnologia:"HTML5",logo_tecnologia:"html5.svg"},{id:8,nome_tecnologia:"CSS3",logo_tecnologia:"css3.svg"},{id:9,nome_tecnologia:"TailwindCSS",logo_tecnologia:"tailwind.svg"},{id:10,nome_tecnologia:"Bootstrap",logo_tecnologia:"bootstrap.svg"},{id:11,nome_tecnologia:"Figma",logo_tecnologia:"figma.svg"},{id:12,nome_tecnologia:"Git",logo_tecnologia:"git.svg"}],TheCardHabilidade:n.default}}},c=(e(486),e(44)),component=Object(c.a)(l,(function(){var o=this,t=o._self._c,e=o._self._setupProxy;return t("div",{staticClass:"grid grid-habilidades mt-10 md:mt-12"},o._l(e.habilidades,(function(n){return e.habilidades?t(e.TheCardHabilidade,{key:n.id,attrs:{logo_tecnologia:n.logo_tecnologia,nome_tecnologia:n.nome_tecnologia,"data-aos":"zoom-in","data-aos-delay":"200"}}):o._e()})),1)}),[],!1,null,"626c74db",null);t.default=component.exports;installComponents(component,{TheCardHabilidade:e(447).default})}}]);