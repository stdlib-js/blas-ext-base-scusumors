// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.1-esm/index.mjs";function t(r,t,n,s,o,a){var i,d,f;if(r<=0)return o;for(i=s<0?(1-r)*s:0,d=a<0?(1-r)*a:0,f=0;f<r;f++)t=e(t+n[i]),o[d]=t,i+=s,d+=a;return o}function n(r,t,n,s,o,a,i,d){var f,l,m;if(r<=0)return a;for(f=o,l=d,m=0;m<r;m++)t=e(t+n[f]),a[l]=t,f+=s,l+=i;return a}r(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
