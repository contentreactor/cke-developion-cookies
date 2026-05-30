(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ckeditor5')) :
	typeof define === 'function' && define.amd ? define(['exports', 'ckeditor5'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Cookies = {}, global.ckeditor5));
})(this, (function (exports, ckeditor5) { 'use strict';

	var e='<svg stroke="red" width="51px" height="51px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M0.026 1h3v1h-2v13h2v1h-3v-15zM14.026 1v1h2v13h-2v1h3v-15h-3zM8.91 7.967c-1.115-0.433-1.607-0.804-1.607-1.56 0-0.552 0.42-1.211 1.523-1.211 0.731 0 1.271 0.239 1.535 0.384l0.288-0.852c-0.359-0.204-0.96-0.396-1.787-0.396-1.571 0-2.614 0.936-2.614 2.195 0 1.14 0.815 1.823 2.135 2.291 1.091 0.419 1.523 0.851 1.523 1.606 0 0.815-0.624 1.38-1.691 1.38-0.72 0-1.403-0.24-1.871-0.528l-0.264 0.876c0.432 0.287 1.283 0.516 2.062 0.516 1.907 0 2.831-1.079 2.831-2.327 0.001-1.188-0.696-1.847-2.063-2.374z" fill="#000000" /></svg>\n';class n extends ckeditor5.Plugin{static get pluginName(){return "Cookies"}init(){const t=this.editor;this.editor.data.processor;const{t:n}=t.locale;t.ui.componentFactory.add("cookies",n=>{const i=new ckeditor5.ButtonView(n);return i.set({label:"Insert Cookies Info",icon:e,withText:false,tooltip:true}),i.on("execute",()=>{t.model.change(o=>{const e=o.createText("[cookie]");t.model.insertContent(e,t.model.document.selection);const n=new FormData;n.append("action","_craft-cookies/utilities/get-data"),n.append(Craft.csrfTokenName,Craft.csrfTokenValue),fetch(location.origin,{method:"POST",headers:{Accept:"application/json"},body:n}).then(t=>t.json()).then(t=>{console.log(t);});});}),i});}}const i={ckeditor:e};

	exports.Cookies = n;
	exports.icons = i;

}));
//# sourceMappingURL=index.umd.js.map
