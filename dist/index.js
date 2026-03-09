"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=o(function(D,f){
var E=require('@stdlib/number-float64-base-to-float32/dist');function O(e,r,a,s,u,i,R,_){var t,n,v;if(e<=0)return i;for(t=u,n=_,v=0;v<e;v++)r=E(r+a[t]),i[n]=r,t+=s,n+=R;return i}f.exports=O
});var x=o(function(F,p){
var m=require('@stdlib/strided-base-stride2offset/dist'),b=q();function g(e,r,a,s,u,i){return b(e,r,a,s,m(e,s),u,i,m(e,i)),u}p.exports=g
});var y=o(function(G,j){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=x(),k=q();h(d,"ndarray",k);j.exports=d
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=y(),c,l=z(w(__dirname,"./native.js"));A(l)?c=B:c=l;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
