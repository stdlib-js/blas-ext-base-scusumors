"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var x=c(function(A,l){
var T=require('@stdlib/number-float64-base-to-float32/dist');function _(e,r,v,t,o,a){var u,s,i;if(e<=0)return o;for(t<0?u=(1-e)*t:u=0,a<0?s=(1-e)*a:s=0,i=0;i<e;i++)r=T(r+v[u]),o[s]=r,u+=t,s+=a;return o}l.exports=_
});var j=c(function(B,p){
var E=require('@stdlib/number-float64-base-to-float32/dist');function O(e,r,v,t,o,a,u,s){var i,n,f;if(e<=0)return a;for(i=o,n=s,f=0;f<e;f++)r=E(r+v[i]),a[n]=r,i+=t,n+=u;return a}p.exports=O
});var F=c(function(C,y){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=x(),d=j();b(m,"ndarray",d);y.exports=m
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=F(),q,R=h(g(__dirname,"./native.js"));k(R)?q=w:q=R;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
