// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";function s(e,t,s,n,d,i,o,a){var m,f,l;if(e<=0)return i;for(m=d,f=a,l=0;l<e;l++)t=r(t+s[m]),i[f]=t,m+=n,f+=o;return i}function n(e,r,n,d,i,o){return s(e,r,n,d,t(e,d),i,o,t(e,o)),i}e(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
