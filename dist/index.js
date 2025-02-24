"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=v(function(B,f){
var E=require('@stdlib/number-float64-base-to-float32/dist');function F(e,r,u,i,s,a,R,_){var t,o,n;if(e<=0)return a;for(t=s,o=_,n=0;n<e;n++)r=E(r+u[t]),a[o]=r,t+=i,o+=R;return a}f.exports=F
});var x=v(function(C,p){
var m=require('@stdlib/strided-base-stride2offset/dist'),O=q();function T(e,r,u,i,s,a){return O(e,r,u,i,m(e,i),s,a,m(e,a)),s}p.exports=T
});var j=v(function(D,l){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=x(),g=q();b(d,"ndarray",g);l.exports=d
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=j(),c,y=k(h(__dirname,"./native.js"));w(y)?c=z:c=y;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
