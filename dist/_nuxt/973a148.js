(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,13],{325:function(t,e,n){var content=n(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("85ba67a4",content,!0,{sourceMap:!1})},326:function(t,e,n){"use strict";n.r(e);var o=n(6),r=(n(48),{name:"ComponentTitle",props:["text","center"],computed:{title:function(){return"<h2>"+this.text.replace(/::\b/gim,"<span>").replace(/\b::/gim,"</span>")+"</h2>"},classes:function(){return Object(o.a)({},"tbn-title--center",this.center)}}}),c=(n(329),n(3)),component=Object(c.a)(r,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"tbn-title",class:t.classes,domProps:{innerHTML:t._s(t.title)}})}),[],!1,null,null,null);e.default=component.exports},327:function(t,e,n){"use strict";n.r(e);var o=n(6),r={name:"ComponentButton",props:["text","category","block","type"],computed:{classes:function(){var t;return t={},Object(o.a)(t,"i-button--"+this.category,this.category),Object(o.a)(t,"i-button--block",this.block),t}}},c=(n(332),n(3)),component=Object(c.a)(r,(function(){var t=this;return(0,t._self._c)("button",{staticClass:"i-button",class:t.classes,attrs:{type:t.type||"button"},on:{click:function(e){return t.$emit("click")}}},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(327).default})},328:function(t,e,n){var content=n(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("368523c4",content,!0,{sourceMap:!1})},329:function(t,e,n){"use strict";n(325)},330:function(t,e,n){var o=n(10)(!1);o.push([t.i,".tbn-title{color:var(--black);margin:0 auto;max-width:1024px}.tbn-title span{background-color:var(--yellow);padding:0 2px}.tbn-title--center{text-align:center}",""]),t.exports=o},332:function(t,e,n){"use strict";n(328)},333:function(t,e,n){var o=n(10)(!1);o.push([t.i,".i-button{background-color:transparent;border:2px solid transparent;color:var(--black);cursor:pointer;display:inline-block;font-size:16px;height:48px;padding:12px 16px 16px;text-align:center;transition:background .3s,border .3s,box-shadow .3s}.i-button--primary,.i-button--secondary,.i-button--tertiary,.i-button:hover{box-shadow:0 20px 16px -16px rgba(0,0,0,.24)}.i-button--primary{background-color:var(--yellow)}.i-button--secondary{border-color:var(--yellow)}.i-button--secondary,.i-button--tertiary{background-color:var(--white)}.i-button--tertiary:hover{background-color:var(--yellow)light;box-shadow:none}.i-button--block{display:block;width:100%}",""]),t.exports=o},339:function(t,e,n){var content=n(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("97c6b442",content,!0,{sourceMap:!1})},352:function(t,e,n){"use strict";n(339)},353:function(t,e,n){var o=n(10)(!1);o.push([t.i,".i-home__pay{background-color:var(--graylight);padding:48px 24px}.i-home__pay__content{max-width:768px;margin:0 auto;text-align:center}.i-home__pay__content i{pointer-events:none;color:var(--gray)}.i-home__pay__content p{font-size:14px;line-height:21px;text-align:center}@media screen and (min-width:768px){.i-home__pay__content p{font-size:16px;line-height:24px;margin:8px 0 24px}}",""]),t.exports=o},362:function(t,e,n){"use strict";n.r(e);var o={name:"ComponentHome__pay",methods:{open:function(){window.open("https://checkout.wompi.co/l/VPOS_Fvw0oU","_blank")}}},r=(n(352),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"i-home__pay",attrs:{id:"pay"}},[e("div",{staticClass:"i-home__pay__content"},[e("Icon",{attrs:{name:"usd-circle",size:"large"}}),e("Title",{attrs:{text:"Paga tus licencias y servicios de INSAC"}}),e("Button",{attrs:{text:"Pagar en linea",category:"primary"},on:{click:function(e){return t.open()}}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(58).default,Title:n(326).default,Button:n(327).default})}}]);