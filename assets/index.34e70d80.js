import{G as n,T as l,M as i,a as c,V as u,f as p}from"./vendor.92407124.js";const m=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&o(t)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}};m();const y={version:8,sources:{hs_raster:{type:"raster",tiles:["https://xycarto-base-maps.s3.ap-southeast-2.amazonaws.com/tile-service-raster/tiles/hs-nz/{z}/{x}/{y}.png"],bounds:[-178.826516,-52.620881,179.067794,-29.231342],scheme:"tms",tileSize:256,attribution:"Mine!",maxzoom:14}},layers:[{id:"hs_raster",source:"hs_raster",type:"raster",layout:{visibility:"visible"},paint:{"raster-opacity":.75,"raster-resampling":"linear","raster-brightness-max":1,"raster-brightness-min":.5,"raster-contrast":0,"raster-opacity":{stops:[[1,.35],[7,.35],[8,.65],[15,.65],[16,.3]]}}}]},d="https://xycarto-base-maps.s3.ap-southeast-2.amazonaws.com/tile-service-cog/webmerdem_cog.tif",f=new n({sources:[{url:d,max:1e3}]}),h=new l({opacity:.5,source:f,style:{color:["interpolate",["linear"],["band",1],0,[0,0,0,0],.01,[101,145,102,.35],.15,[116,158,117,1],.75,[223,230,220,1]]}}),b=new i({opacity:1,crossOrigin:"anonymous",maplibreOptions:{style:"./style.json"}}),g=new i({crossOrigin:"anonymous",maplibreOptions:{style:y}});new c({target:"map",layers:[h,g,b],view:new u({center:p([174,-41.29]),zoom:8})});
//# sourceMappingURL=index.34e70d80.js.map
