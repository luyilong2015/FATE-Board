(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-db08"],{"3U1A":function(e,t,n){"use strict";n.r(t);var i=n("m1cH"),o=n.n(i),l=n("FyfS"),r=n.n(l),a={name:"CustomeLegend",props:{choose:{type:Array,default:function(){return[]}},filter:{type:Boolean|Number,default:12}},data:function(){return{filters:this.filter,currentList:[],defColor:[["#494ece","#00d269","#ff8103","#00dfcf","#f23ba9","#0080ff","#c13ce1","#ffcd03","#7c56ff","#a7cf02","#00d3ff","#ff1414"],["#6e78fc","#66e4a5","#ffb36f","#6df1e7","#e576c2","#66b3ff","#dd83f2","#ffea84","#b692f6","#e1f397","#77e3ff","#ff5a5a"]],unchooseColor:["#bbbbc8","#E6E6E6"],chooseColor:[],selectedColor:0,withOutDialog:5,dialogShowing:!1,currentChoosed:[]}},computed:{filterLimit:function(){var e=this,t=0,n=!0,i=!1,o=void 0;try{for(var l,a=r()(this.currentList);!(n=(l=a.next()).done);n=!0){var s=l.value;s.length>t&&(t=s.length)}}catch(e){i=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(i)throw o}}var c=function(n){return e.currentList.length*t>=n?n:e.currentList.length*t},d="number"==typeof this.filters?c(this.filters):c(12);return Math.floor(d/t)}},watch:{choose:{handler:function(){this.toDisplay(),this.colorInit(),this.currentChoosed=[]}}},beforeMount:function(){this.toDisplay(),this.colorInit()},mounted:function(){var e=this;this.$nextTick(function(){document.addEventListener("click",e.hideDialog)})},beforeDestroy:function(){document.removeEventListener("click",this.hideDialog)},methods:{toDisplay:function(){var e=[],t=[].concat(o()(this.choose)),n=!0,i=!1,l=void 0;try{for(var a,s=r()(t);!(n=(a=s.next()).done);n=!0){for(var c=a.value,d=[],f=Array.isArray(c)?c:[c],h=0;h<f.length;h++){var u=f[h];if(u.group)for(var g=0;g<u.items.length;g++){var p=u.items[g];d.push({label:"string"==typeof u?p:p.label,value:"string"==typeof u?p:p.value,group:u.group,color:this.unchooseColor[this.colorSelect(this.unchooseColor.length,g)]})}else d.push({label:"string"==typeof u?u:u.label,value:"string"==typeof u?u:u.value,group:"string"==typeof u?u:u.value,color:this.unchooseColor[this.colorSelect(this.unchooseColor.length,h)]})}e.push(d)}}catch(e){i=!0,l=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw l}}this.currentList=e},colorSelect:function(e,t){return t%(e-1)},showDialog:function(){this.dialogShowing=!0},hideDialog:function(){this.dialogShowing=!1},labelDisplay:function(e){return{backgroundColor:e}},clearAll:function(){var e=!0,t=!1,n=void 0;try{for(var i,o=r()(this.currentChoosed);!(e=(i=o.next()).done);e=!0){var l=i.value;this.clearItem(l)}}catch(e){t=!0,n=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw n}}},clearItem:function(e){var t=this,n=this.currentChoosed.indexOf(e);n>=0&&this.currentChoosed.splice(n,1),this.currentList[e].forEach(function(e,n){0===n&&t.filters&&t.selectedColor.push(t.chooseColor[0].indexOf(e.color)),e.color=t.unchooseColor[t.colorSelect(t.unchooseColor.length,n)]})},chooseItem:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.currentChoosed.indexOf(e)>=0)this.clearItem(e);else{if(this.filters){var n=this.filterLimit;this.currentChoosed.length>=n&&this.clearItem(this.currentChoosed[0])}this.currentChoosed.push(e);for(var i=this.currentList[e],o=0;o<i.length;o++){var l=i[o],r=this.colorSelect(this.chooseColor.length,o);l.color=this.filters?this.chooseColor[r][this.selectedColor[0]]:this.chooseColor[r][0]}this.filters&&this.selectedColor.splice(0,1)}t&&this.request()},colorInit:function(){var e=this.filterLimit>this.defColor[0].length?this.defColor[0].length:this.filterLimit,t=[],n=!0,i=!1,o=void 0;try{for(var l,a=r()(this.defColor);!(n=(l=a.next()).done);n=!0){var s=l.value;if(this.filters){for(var c=[],d=0;d<e;d++)c.push(s[d]);t.push(c)}else t.push(s[0])}}catch(e){i=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(i)throw o}}this.chooseColor=t,this.filters&&this.selectedColorInit()},selectedColorInit:function(){for(var e=[],t=0;t<this.chooseColor[0].length;t++)e.push(t);this.selectedColor=e},setDefault:function(e){if(e)this.setProperty(e);else for(var t=0;t<this.filterLimit;t++)t<this.currentList.length&&this.chooseItem(t,!1);return this.request(),!0},change:function(){var e=this.getProperty();this.$emit("change",e)},confirm:function(){var e=this.getProperty(!0);this.$emit("form",e)},request:function(){this.confirm(),this.change()},getProperty:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[],n=!0,i=!1,o=void 0;try{for(var l,a=r()(this.currentList);!(n=(l=a.next()).done);n=!0){var s=l.value,c=[];if(this.unchooseColor.indexOf(s[0].color)<0){var d=!0,f=!1,h=void 0;try{for(var u,g=r()(s);!(d=(u=g.next()).done);d=!0){var p=u.value;e?c.indexOf(p.color)<0&&c.push(p.color):t.push(p.value)}}catch(e){f=!0,h=e}finally{try{!d&&g.return&&g.return()}finally{if(f)throw h}}e&&t.push({group:{name:s[0].group,color:c},items:s})}}}catch(e){i=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(i)throw o}}return t},setProperty:function(e){this.clearAll();var t=!0,n=!1,i=void 0;try{for(var o,l=r()(e);!(t=(o=l.next()).done);t=!0)for(var a=o.value,s=0;s<this.currentList.length;s++){this.currentList[s][0].group===a.group.name&&this.chooseItem(s,!1)}}catch(e){n=!0,i=e}finally{try{!t&&l.return&&l.return()}finally{if(n)throw i}}}}},s=(n("QeY2"),n("KHd+")),c=Object(s.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"legend__container"},[n("div",{staticClass:"legend__display"},[e._l(e.currentList.slice(0,e.withOutDialog),function(t,i){return n("div",{key:i,staticClass:"legend__cp",on:{click:function(t){t.stopPropagation(),e.chooseItem(i)}}},e._l(t,function(t,i){return n("span",{key:i,staticClass:"legend__label",style:e.labelDisplay(t.color)},[e._v(e._s(t.label))])}))}),e._v(" "),e.currentList.length>e.withOutDialog?n("div",{staticClass:"legend__cp",on:{click:e.showDialog}},e._l(e.currentList[0],function(t,i){return n("span",{key:i,staticClass:"legend__lable",style:e.labelDisplay(e.unchooseColor[i])},[e._v("...")])})):e._e(),e._v(" "),n("div",{staticClass:"legend__cp"},[n("i",{staticClass:"el-icon-download",on:{click:function(t){return t.stopPropagation(),e.showDialog(t)}}})])],2),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogShowing,expression:"dialogShowing"}],staticClass:"legend__dialog",on:{click:function(e){e.stopPropagation()}}},[n("header",{staticClass:"legend__d-header"},[n("div",{staticClass:"legend__d-operation"},[n("span",{staticClass:"legend__d-text"},[e._v("Total: "+e._s(e.currentList.length))]),e._v(" "),n("span",{staticClass:"legend__d-text"},[e._v("Choose: "+e._s(e.currentChoosed.length))]),e._v(" "),n("span",{staticClass:"legend__d-clear",on:{click:function(t){return t.stopPropagation(),e.clearAll(t)}}},[e._v("Clear")])]),e._v(" "),n("span",{staticClass:"legend__d-hide"},[n("i",{staticClass:"el-icon-upload",on:{click:function(t){return t.stopPropagation(),e.hideDialog(t)}}})])]),e._v(" "),n("main",{staticClass:"legend__d-main"},e._l(e.currentList,function(t,i){return n("div",{key:i,staticClass:"legend__cp",on:{click:function(t){t.stopPropagation(),e.chooseItem(i)}}},e._l(t,function(t,i){return n("span",{key:i,staticClass:"legend__label",style:e.labelDisplay(t.color)},[e._v(e._s(t.label))])}))}))])])},[],!1,null,"3a40fb4c",null);c.options.__file="index.vue";t.default=c.exports},QeY2:function(e,t,n){"use strict";var i=n("hwpL");n.n(i).a},Xtww:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".legend__container[data-v-3a40fb4c] {\n  position: relative;\n  margin-bottom: 5px;\n}\n.legend__display[data-v-3a40fb4c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.legend__display .legend__cp[data-v-3a40fb4c] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-right: 12px;\n    cursor: pointer;\n}\n.legend__display .legend__cp[data-v-3a40fb4c]:last-child {\n      margin-right: 0px;\n}\n.legend__display .legend__cp .legend__label[data-v-3a40fb4c] {\n      padding: 2px 4px;\n      border-radius: 2px;\n      color: #fff;\n      margin-bottom: 2px;\n}\n.legend__display .legend__cp .legend__label[data-v-3a40fb4c]:last-child {\n        margin-bottom: 0px;\n}\n.legend__dialog[data-v-3a40fb4c] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  padding: 12px;\n  border-radius: 4px;\n  -webkit-box-shadow: 1px 1px 5px #aaa;\n          box-shadow: 1px 1px 5px #aaa;\n  background-color: #fff;\n  z-index: 5;\n  min-width: 400px;\n}\n.legend__dialog .legend__d-header[data-v-3a40fb4c] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.legend__dialog .legend__d-header .legend__d-operation[data-v-3a40fb4c] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n}\n.legend__dialog .legend__d-main[data-v-3a40fb4c] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.legend__dialog .legend__d-main .legend__cp[data-v-3a40fb4c] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-right: 12px;\n      cursor: pointer;\n}\n.legend__dialog .legend__d-main .legend__cp[data-v-3a40fb4c]:last-child {\n        margin-right: 0px;\n}\n.legend__dialog .legend__d-main .legend__cp .legend__label[data-v-3a40fb4c] {\n        padding: 2px 4px;\n        border-radius: 2px;\n        color: #fff;\n        margin-bottom: 2px;\n}\n.legend__dialog .legend__d-main .legend__cp .legend__label[data-v-3a40fb4c]:last-child {\n          margin-bottom: 0px;\n}\n",""])},hwpL:function(e,t,n){var i=n("Xtww");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("SZ7m").default)("ee047cf6",i,!0,{})}}]);