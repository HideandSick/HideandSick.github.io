import{d as p,r as b,o as f,a as m,l as v,c as l,b as e,F as x,e as h,f as o,u,t as _,_ as w}from"./index-Be9QHBzg.js";import{o as k,l as g}from"./constants-CpyvxI5m.js";const C={class:"notice-list"},$=["onClick"],y={class:"date"},B=p({__name:"Crowler1",setup(q){const t=b();f(()=>{c()});const c=()=>{m.get("/api1").then(n=>{var s=v(n.data);t.value=s('.list_box[value="notice"] a'),console.log(t)})};return(n,s)=>(o(),l("div",null,[e("table",C,[s[0]||(s[0]=e("thead",null,[e("tr",null,[e("th",null,"공지사항"),e("th",null,"날짜")])],-1)),e("tbody",null,[(o(!0),l(x,null,h(t.value,(a,r)=>{var d,i;return o(),l("tr",{key:a,onClick:F=>u(k)(`${u(g)[0]}${a==null?void 0:a.attribs.href}`.replace("/wbase/wbase","/wbase"))},[e("td",null,_((d=t.value)==null?void 0:d.find(".list_box_title").eq(r).text()),1),e("td",y,_((i=t.value)==null?void 0:i.find(".list_box_date").eq(r).text()),1)],8,$)}),128))])])]))}}),A=w(B,[["__scopeId","data-v-bb3b2d58"]]);export{A as default};