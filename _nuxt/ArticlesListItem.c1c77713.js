import{d as x,H as p,b as n,c,F as v,Y as C,f as s,g as l,w as m,e as r,t as i,L as f,n as w,$ as D,D as L,a0 as N,k as B}from"./entry.f02aa04b.js";import{u as I}from"./preview.65762d8b.js";import{f as V}from"./date.824a539b.js";const $=["data-content-id"],z={key:0,class:"image"},A={key:0},E={class:"content"},F={class:"description"},S=x({__name:"ArticlesListItem",props:{article:{type:Object,required:!0,validator:t=>!!(t!=null&&t._path&&t.title)},featured:{type:Boolean,default:!1}},setup(t){const _=t,h=p(()=>{var a,o;return(a=I())!=null&&a.isEnabled()?(o=_.article)==null?void 0:o._id:void 0});return(a,o)=>{var u;const y=D,d=L;return t.article._path&&t.article.title?(n(),c("article",{key:0,class:w({featured:t.featured}),"data-content-id":f(h)},[t.article.cover?(n(),c("div",z,[(u=t.article)!=null&&u.badges?(n(),c("div",A,[(n(!0),c(v,null,C(t.article.badges,(e,k)=>(n(),c("span",{key:k,style:N({backgroundColor:(e==null?void 0:e.bg)||"rgba(0, 0, 0, 0.3)",color:(e==null?void 0:e.color)||"white"})},i(typeof e=="string"?e:e.content),5))),128))])):s("",!0),l(d,{to:t.article._path},{default:m(()=>[l(y,{src:t.article.cover,alt:t.article.title,width:"16",height:"9"},null,8,["src","alt"])]),_:1},8,["to"])])):s("",!0),r("div",E,[l(d,{to:t.article._path,class:"headline"},{default:m(()=>[r("h1",null,i(t.article.title),1)]),_:1},8,["to"]),r("p",F,i(t.article.description),1),r("time",null,i(("formatDate"in a?a.formatDate:f(V))(t.article.date)),1)])],10,$)):s("",!0)}}});const H=B(S,[["__scopeId","data-v-61710c2f"]]);export{H as default};
