import{B as c}from"./basedecoder.e41ef53f.js";class f extends c{decodeBlock(a){const s=new DataView(a),r=[];for(let e=0;e<a.byteLength;++e){let t=s.getInt8(e);if(t<0){const o=s.getUint8(e+1);t=-t;for(let n=0;n<=t;++n)r.push(o);e+=1}else{for(let o=0;o<=t;++o)r.push(s.getUint8(e+o+1));e+=t+1}}return new Uint8Array(r).buffer}}export{f as default};
//# sourceMappingURL=packbits.9b36fb03.js.map
