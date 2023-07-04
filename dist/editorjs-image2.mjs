(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(`.editorjs-image2-input{height:0}.editorjs-image2-empty{margin:1em auto;height:40px;border-radius:4px;color:#37352f99;display:flex;align-items:center;text-align:left;overflow:hidden;background:#f2f1ee;font-size:13px;outline:none;cursor:pointer;caret-color:transparent;user-select:none}.editorjs-image2-empty_icon{margin-right:6px;margin-left:10px}.editorjs-image2-input_holder{display:none}.editorjs-image2-tab{width:650px;height:200px;position:fixed;z-index:2;display:flex;flex-direction:column;box-shadow:#0f0f0f0d 0 0 0 1px,#0f0f0f1a 0 3px 6px,#0f0f0f33 0 9px 24px;background:white}.editorjs-image2-tab-nav{border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#d3d3d3;margin-bottom:10px;padding:6px 10px}.editorjs-image2-tab-nav_item{display:inline-block;cursor:pointer;padding:8px;font-size:13px;margin-right:12px}.editorjs-image2-tab-nav_item.active{border-width:0 0 3px 0;border-style:solid;border-color:#388ae5}.editorjs-image2-tab-content{padding:12px}.editorjs-image2-tab-content_item{display:none}.editorjs-image2-tab-content_item.active{display:block}.editorjs-image2-hidden{display:none}.editorjs-image2.inline-image .inline-image__picture{margin:0 auto;text-align:center}.editorjs-image2.inline-image .inline-image__picture--withBorder{border:1px solid #e8e8eb;padding:1px}.editorjs-image2.inline-image .inline-image__picture--withBackground{background:#eff2f5;padding:10px}.editorjs-image2.inline-image .inline-image__picture--withBackground .image__picture__data{max-width:60%;margin:0 auto}.editorjs-image2.inline-image .image__picture__data{max-width:100%}.inline-image__embed-button{width:50%;background-color:#388ae5;user-select:none;color:#fff;text-align:center;margin:20px auto;padding:10px;cursor:pointer;font-size:14px}/*!
 * Viewer.js v1.10.3
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-02-02T05:14:59.271Z
 */.viewer-zoom-in:before,.viewer-zoom-out:before,.viewer-one-to-one:before,.viewer-reset:before,.viewer-prev:before,.viewer-play:before,.viewer-next:before,.viewer-rotate-left:before,.viewer-rotate-right:before,.viewer-flip-horizontal:before,.viewer-flip-vertical:before,.viewer-fullscreen:before,.viewer-fullscreen-exit:before,.viewer-close:before{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAAUCAYAAABWOyJDAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAQPSURBVHic7Zs/iFxVFMa/0U2UaJGksUgnIVhYxVhpjDbZCBmLdAYECxsRFBTUamcXUiSNncgKQbSxsxH8gzAP3FU2jY0kKKJNiiiIghFlccnP4p3nPCdv3p9778vsLOcHB2bfveeb7955c3jvvNkBIMdxnD64a94GHMfZu3iBcRynN7zAOI7TG15gHCeeNUkr8zaxG2lbYDYsdgMbktBsP03jdQwljSXdtBhLOmtjowC9Mg9L+knSlcD8TNKpSA9lBpK2JF2VdDSR5n5J64m0qli399hNFMUlpshQii5jbXTbHGviB0nLNeNDSd9VO4A2UdB2fp+x0eCnaXxWXGA2X0au/3HgN9P4LFCjIANOJdrLr0zzZ+BEpNYDwKbpnQMeAw4m8HjQtM6Z9qa917zPQwFr3M5KgA6J5rTJCdFZJj9/lyvGhsDvwFNVuV2MhhjrK6b9bFiE+j1r87eBl4HDwCF7/U/k+ofAX5b/EXBv5JoLMuILzf3Ap6Z3EzgdqHMCuF7hcQf4HDgeoHnccncqdK/TvSDWffFXI/exICY/xZyqc6XLWF1UFZna4gJ7q8BsRvgd2/xXpo6P+D9dfT7PpECtA3cnWPM0GXGFZh/wgWltA+cDNC7X+AP4GzjZQe+k5dRxuYPeiuXU7e1qwLpDz7dFjXKRaSwuMLvAlG8zZlG+YmiK1HoFqT7wP2z+4Q45TfEGcMt01xLoNZEBTwRqD4BLpnMLeC1A41UmVxsXgXeBayV/Wx20rpTyrpnWRft7p6O/FdqzGrDukPNtkaMoMo3FBdBSQMOnYBCReyf05s126fU9ytfX98+mY54Kxnp7S9K3kj6U9KYdG0h6UdLbkh7poFXMfUnSOyVvL0h6VtIXHbS6nOP+s/Zm9mvyXW1uuC9ohZ72E9uDmXWLJOB1GxsH+DxPftsB8B6wlGDN02TAkxG6+4D3TWsbeC5CS8CDFce+AW500LhhOW2020TRjK3b21HEmgti9m0RonxbdMZeVzV+/4tF3cBpP7E9mKHNL5q8h5g0eYsCMQz0epq8gQrwMXAgcs0FGXGFRcB9wCemF9PkbYqM/Bas7fxLwNeJPdTdpo4itQti8lPMqTpXuozVRVXPpbHI3KkNTB1NfkL81j2mvhDp91HgV9MKuRIqrykj3WPq4rHyL+axj8/qGPmTqi6F9YDlHOvJU6oYcTsh/TYSzWmTE6JT19CtLTJt32D6CmHe0eQn1O8z5AXgT4sx4Vcu0/EQecMydB8z0hUWkTd2t4CrwNEePqMBcAR4mrBbwyXLPWJa8zrXmmLEhNBmfpkuY2102xxrih+pb+ieAb6vGhuA97UcJ5KR8gZ77K+99xxeYBzH6Q3/Z0fHcXrDC4zjOL3hBcZxnN74F+zlvXFWXF9PAAAAAElFTkSuQmCC);background-repeat:no-repeat;background-size:280px;color:transparent;display:block;font-size:0;height:20px;line-height:0;width:20px}.viewer-zoom-in:before{background-position:0 0;content:"Zoom In"}.viewer-zoom-out:before{background-position:-20px 0;content:"Zoom Out"}.viewer-one-to-one:before{background-position:-40px 0;content:"One to One"}.viewer-reset:before{background-position:-60px 0;content:"Reset"}.viewer-prev:before{background-position:-80px 0;content:"Previous"}.viewer-play:before{background-position:-100px 0;content:"Play"}.viewer-next:before{background-position:-120px 0;content:"Next"}.viewer-rotate-left:before{background-position:-140px 0;content:"Rotate Left"}.viewer-rotate-right:before{background-position:-160px 0;content:"Rotate Right"}.viewer-flip-horizontal:before{background-position:-180px 0;content:"Flip Horizontal"}.viewer-flip-vertical:before{background-position:-200px 0;content:"Flip Vertical"}.viewer-fullscreen:before{background-position:-220px 0;content:"Enter Full Screen"}.viewer-fullscreen-exit:before{background-position:-240px 0;content:"Exit Full Screen"}.viewer-close:before{background-position:-260px 0;content:"Close"}.viewer-container{bottom:0;direction:ltr;font-size:0;left:0;line-height:0;overflow:hidden;position:absolute;right:0;-webkit-tap-highlight-color:transparent;top:0;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.viewer-container::-moz-selection,.viewer-container *::-moz-selection{background-color:transparent}.viewer-container::selection,.viewer-container *::selection{background-color:transparent}.viewer-container:focus{outline:0}.viewer-container img{display:block;height:auto;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.viewer-canvas{bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0}.viewer-canvas>img{height:auto;margin:15px auto;max-width:90%!important;width:auto}.viewer-footer{bottom:0;left:0;overflow:hidden;position:absolute;right:0;text-align:center}.viewer-navbar{background-color:#0000007f;overflow:hidden}.viewer-list{box-sizing:content-box;height:50px;margin:0;overflow:hidden;padding:1px 0}.viewer-list>li{color:transparent;cursor:pointer;float:left;font-size:0;height:50px;line-height:0;opacity:.5;overflow:hidden;transition:opacity .15s;width:30px}.viewer-list>li:focus,.viewer-list>li:hover{opacity:.75}.viewer-list>li:focus{outline:0}.viewer-list>li+li{margin-left:1px}.viewer-list>.viewer-loading{position:relative}.viewer-list>.viewer-loading:after{border-width:2px;height:20px;margin-left:-10px;margin-top:-10px;width:20px}.viewer-list>.viewer-active,.viewer-list>.viewer-active:focus,.viewer-list>.viewer-active:hover{opacity:1}.viewer-player{background-color:#000;bottom:0;cursor:none;display:none;left:0;position:absolute;right:0;top:0;z-index:1}.viewer-player>img{left:0;position:absolute;top:0}.viewer-toolbar>ul{display:inline-block;margin:0 auto 5px;overflow:hidden;padding:6px 3px}.viewer-toolbar>ul>li{background-color:#0000007f;border-radius:50%;cursor:pointer;float:left;height:24px;overflow:hidden;transition:background-color .15s;width:24px}.viewer-toolbar>ul>li:focus,.viewer-toolbar>ul>li:hover{background-color:#000c}.viewer-toolbar>ul>li:focus{box-shadow:0 0 3px #fff;outline:0;position:relative;z-index:1}.viewer-toolbar>ul>li:before{margin:2px}.viewer-toolbar>ul>li+li{margin-left:1px}.viewer-toolbar>ul>.viewer-small{height:18px;margin-bottom:3px;margin-top:3px;width:18px}.viewer-toolbar>ul>.viewer-small:before{margin:-1px}.viewer-toolbar>ul>.viewer-large{height:30px;margin-bottom:-3px;margin-top:-3px;width:30px}.viewer-toolbar>ul>.viewer-large:before{margin:5px}.viewer-tooltip{background-color:#000c;border-radius:10px;color:#fff;display:none;font-size:12px;height:20px;left:50%;line-height:20px;margin-left:-25px;margin-top:-10px;position:absolute;text-align:center;top:50%;width:50px}.viewer-title{color:#ccc;display:inline-block;font-size:12px;line-height:1.2;margin:0 5% 5px;max-width:90%;opacity:.8;overflow:hidden;text-overflow:ellipsis;transition:opacity .15s;white-space:nowrap}.viewer-title:hover{opacity:1}.viewer-button{background-color:#0000007f;border-radius:50%;cursor:pointer;height:80px;overflow:hidden;position:absolute;right:-40px;top:-40px;transition:background-color .15s;width:80px}.viewer-button:focus,.viewer-button:hover{background-color:#000c}.viewer-button:focus{box-shadow:0 0 3px #fff;outline:0}.viewer-button:before{bottom:15px;left:15px;position:absolute}.viewer-fixed{position:fixed}.viewer-open{overflow:hidden}.viewer-show{display:block}.viewer-hide{display:none}.viewer-backdrop{background-color:#0000007f}.viewer-invisible{visibility:hidden}.viewer-move{cursor:move;cursor:-webkit-grab;cursor:grab}.viewer-fade{opacity:0}.viewer-in{opacity:1}.viewer-transition{transition:all .3s}@-webkit-keyframes viewer-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes viewer-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.viewer-loading:after{-webkit-animation:viewer-spinner 1s linear infinite;animation:viewer-spinner 1s linear infinite;border:4px solid rgb(255 255 255 / 10%);border-left-color:#ffffff7f;border-radius:50%;content:"";display:inline-block;height:40px;left:50%;margin-left:-20px;margin-top:-20px;position:absolute;top:50%;width:40px;z-index:1}@media (max-width: 767px){.viewer-hide-xs-down{display:none}}@media (max-width: 991px){.viewer-hide-sm-down{display:none}}@media (max-width: 1199px){.viewer-hide-md-down{display:none}}`)),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
var tr = Object.defineProperty;
var er = (a, t, i) => t in a ? tr(a, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[t] = i;
var z = (a, t, i) => (er(a, typeof t != "symbol" ? t + "" : t, i), i);
const ir = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', nr = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', ge = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', rr = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
var $t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, pe = { exports: {} };
(function(a, t) {
  var i = 200, e = "__lodash_hash_undefined__", r = 1, o = 2, l = 9007199254740991, u = "[object Arguments]", f = "[object Array]", c = "[object AsyncFunction]", p = "[object Boolean]", d = "[object Date]", y = "[object Error]", I = "[object Function]", T = "[object GeneratorFunction]", R = "[object Map]", F = "[object Number]", V = "[object Null]", L = "[object Object]", _ = "[object Promise]", wt = "[object Proxy]", it = "[object RegExp]", U = "[object Set]", nt = "[object String]", ct = "[object Symbol]", Dt = "[object Undefined]", W = "[object WeakMap]", _e = "[object ArrayBuffer]", Rt = "[object DataView]", Ni = "[object Float32Array]", xi = "[object Float64Array]", Oi = "[object Int8Array]", Si = "[object Int16Array]", zi = "[object Int32Array]", ki = "[object Uint8Array]", ji = "[object Uint8ClampedArray]", Pi = "[object Uint16Array]", Hi = "[object Uint32Array]", Ri = /[\\^$.*+?()[\]{}|]/g, Yi = /^\[object .+?Constructor\]$/, Fi = /^(?:0|[1-9]\d*)$/, D = {};
  D[Ni] = D[xi] = D[Oi] = D[Si] = D[zi] = D[ki] = D[ji] = D[Pi] = D[Hi] = !0, D[u] = D[f] = D[_e] = D[p] = D[Rt] = D[d] = D[y] = D[I] = D[R] = D[F] = D[L] = D[it] = D[U] = D[nt] = D[W] = !1;
  var Me = typeof $t == "object" && $t && $t.Object === Object && $t, Vi = typeof self == "object" && self && self.Object === Object && self, rt = Me || Vi || Function("return this")(), Ie = t && !t.nodeType && t, Le = Ie && !0 && a && !a.nodeType && a, De = Le && Le.exports === Ie, ae = De && Me.process, Ce = function() {
    try {
      return ae && ae.binding && ae.binding("util");
    } catch {
    }
  }(), Ne = Ce && Ce.isTypedArray;
  function Bi(n, s) {
    for (var h = -1, g = n == null ? 0 : n.length, C = 0, w = []; ++h < g; ) {
      var O = n[h];
      s(O, h, n) && (w[C++] = O);
    }
    return w;
  }
  function Ui(n, s) {
    for (var h = -1, g = s.length, C = n.length; ++h < g; )
      n[C + h] = s[h];
    return n;
  }
  function Wi(n, s) {
    for (var h = -1, g = n == null ? 0 : n.length; ++h < g; )
      if (s(n[h], h, n))
        return !0;
    return !1;
  }
  function Xi(n, s) {
    for (var h = -1, g = Array(n); ++h < n; )
      g[h] = s(h);
    return g;
  }
  function qi(n) {
    return function(s) {
      return n(s);
    };
  }
  function $i(n, s) {
    return n.has(s);
  }
  function Gi(n, s) {
    return n == null ? void 0 : n[s];
  }
  function Zi(n) {
    var s = -1, h = Array(n.size);
    return n.forEach(function(g, C) {
      h[++s] = [C, g];
    }), h;
  }
  function Qi(n, s) {
    return function(h) {
      return n(s(h));
    };
  }
  function Ki(n) {
    var s = -1, h = Array(n.size);
    return n.forEach(function(g) {
      h[++s] = g;
    }), h;
  }
  var Ji = Array.prototype, tn = Function.prototype, Yt = Object.prototype, se = rt["__core-js_shared__"], xe = tn.toString, tt = Yt.hasOwnProperty, Oe = function() {
    var n = /[^.]+$/.exec(se && se.keys && se.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }(), Se = Yt.toString, en = RegExp(
    "^" + xe.call(tt).replace(Ri, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ze = De ? rt.Buffer : void 0, Ft = rt.Symbol, ke = rt.Uint8Array, je = Yt.propertyIsEnumerable, nn = Ji.splice, dt = Ft ? Ft.toStringTag : void 0, Pe = Object.getOwnPropertySymbols, rn = ze ? ze.isBuffer : void 0, an = Qi(Object.keys, Object), oe = bt(rt, "DataView"), Ct = bt(rt, "Map"), le = bt(rt, "Promise"), he = bt(rt, "Set"), ue = bt(rt, "WeakMap"), Nt = bt(Object, "create"), sn = pt(oe), on = pt(Ct), ln = pt(le), hn = pt(he), un = pt(ue), He = Ft ? Ft.prototype : void 0, ce = He ? He.valueOf : void 0;
  function ft(n) {
    var s = -1, h = n == null ? 0 : n.length;
    for (this.clear(); ++s < h; ) {
      var g = n[s];
      this.set(g[0], g[1]);
    }
  }
  function cn() {
    this.__data__ = Nt ? Nt(null) : {}, this.size = 0;
  }
  function dn(n) {
    var s = this.has(n) && delete this.__data__[n];
    return this.size -= s ? 1 : 0, s;
  }
  function fn(n) {
    var s = this.__data__;
    if (Nt) {
      var h = s[n];
      return h === e ? void 0 : h;
    }
    return tt.call(s, n) ? s[n] : void 0;
  }
  function gn(n) {
    var s = this.__data__;
    return Nt ? s[n] !== void 0 : tt.call(s, n);
  }
  function pn(n, s) {
    var h = this.__data__;
    return this.size += this.has(n) ? 0 : 1, h[n] = Nt && s === void 0 ? e : s, this;
  }
  ft.prototype.clear = cn, ft.prototype.delete = dn, ft.prototype.get = fn, ft.prototype.has = gn, ft.prototype.set = pn;
  function at(n) {
    var s = -1, h = n == null ? 0 : n.length;
    for (this.clear(); ++s < h; ) {
      var g = n[s];
      this.set(g[0], g[1]);
    }
  }
  function mn() {
    this.__data__ = [], this.size = 0;
  }
  function vn(n) {
    var s = this.__data__, h = Bt(s, n);
    if (h < 0)
      return !1;
    var g = s.length - 1;
    return h == g ? s.pop() : nn.call(s, h, 1), --this.size, !0;
  }
  function wn(n) {
    var s = this.__data__, h = Bt(s, n);
    return h < 0 ? void 0 : s[h][1];
  }
  function bn(n) {
    return Bt(this.__data__, n) > -1;
  }
  function yn(n, s) {
    var h = this.__data__, g = Bt(h, n);
    return g < 0 ? (++this.size, h.push([n, s])) : h[g][1] = s, this;
  }
  at.prototype.clear = mn, at.prototype.delete = vn, at.prototype.get = wn, at.prototype.has = bn, at.prototype.set = yn;
  function gt(n) {
    var s = -1, h = n == null ? 0 : n.length;
    for (this.clear(); ++s < h; ) {
      var g = n[s];
      this.set(g[0], g[1]);
    }
  }
  function En() {
    this.size = 0, this.__data__ = {
      hash: new ft(),
      map: new (Ct || at)(),
      string: new ft()
    };
  }
  function Tn(n) {
    var s = Ut(this, n).delete(n);
    return this.size -= s ? 1 : 0, s;
  }
  function An(n) {
    return Ut(this, n).get(n);
  }
  function _n(n) {
    return Ut(this, n).has(n);
  }
  function Mn(n, s) {
    var h = Ut(this, n), g = h.size;
    return h.set(n, s), this.size += h.size == g ? 0 : 1, this;
  }
  gt.prototype.clear = En, gt.prototype.delete = Tn, gt.prototype.get = An, gt.prototype.has = _n, gt.prototype.set = Mn;
  function Vt(n) {
    var s = -1, h = n == null ? 0 : n.length;
    for (this.__data__ = new gt(); ++s < h; )
      this.add(n[s]);
  }
  function In(n) {
    return this.__data__.set(n, e), this;
  }
  function Ln(n) {
    return this.__data__.has(n);
  }
  Vt.prototype.add = Vt.prototype.push = In, Vt.prototype.has = Ln;
  function lt(n) {
    var s = this.__data__ = new at(n);
    this.size = s.size;
  }
  function Dn() {
    this.__data__ = new at(), this.size = 0;
  }
  function Cn(n) {
    var s = this.__data__, h = s.delete(n);
    return this.size = s.size, h;
  }
  function Nn(n) {
    return this.__data__.get(n);
  }
  function xn(n) {
    return this.__data__.has(n);
  }
  function On(n, s) {
    var h = this.__data__;
    if (h instanceof at) {
      var g = h.__data__;
      if (!Ct || g.length < i - 1)
        return g.push([n, s]), this.size = ++h.size, this;
      h = this.__data__ = new gt(g);
    }
    return h.set(n, s), this.size = h.size, this;
  }
  lt.prototype.clear = Dn, lt.prototype.delete = Cn, lt.prototype.get = Nn, lt.prototype.has = xn, lt.prototype.set = On;
  function Sn(n, s) {
    var h = Wt(n), g = !h && $n(n), C = !h && !g && de(n), w = !h && !g && !C && qe(n), O = h || g || C || w, H = O ? Xi(n.length, String) : [], Y = H.length;
    for (var x in n)
      (s || tt.call(n, x)) && !(O && (x == "length" || C && (x == "offset" || x == "parent") || w && (x == "buffer" || x == "byteLength" || x == "byteOffset") || Bn(x, Y))) && H.push(x);
    return H;
  }
  function Bt(n, s) {
    for (var h = n.length; h--; )
      if (Be(n[h][0], s))
        return h;
    return -1;
  }
  function zn(n, s, h) {
    var g = s(n);
    return Wt(n) ? g : Ui(g, h(n));
  }
  function xt(n) {
    return n == null ? n === void 0 ? Dt : V : dt && dt in Object(n) ? Fn(n) : qn(n);
  }
  function Re(n) {
    return Ot(n) && xt(n) == u;
  }
  function Ye(n, s, h, g, C) {
    return n === s ? !0 : n == null || s == null || !Ot(n) && !Ot(s) ? n !== n && s !== s : kn(n, s, h, g, Ye, C);
  }
  function kn(n, s, h, g, C, w) {
    var O = Wt(n), H = Wt(s), Y = O ? f : ht(n), x = H ? f : ht(s);
    Y = Y == u ? L : Y, x = x == u ? L : x;
    var X = Y == L, Z = x == L, B = Y == x;
    if (B && de(n)) {
      if (!de(s))
        return !1;
      O = !0, X = !1;
    }
    if (B && !X)
      return w || (w = new lt()), O || qe(n) ? Fe(n, s, h, g, C, w) : Rn(n, s, Y, h, g, C, w);
    if (!(h & r)) {
      var $ = X && tt.call(n, "__wrapped__"), G = Z && tt.call(s, "__wrapped__");
      if ($ || G) {
        var ut = $ ? n.value() : n, st = G ? s.value() : s;
        return w || (w = new lt()), C(ut, st, h, g, w);
      }
    }
    return B ? (w || (w = new lt()), Yn(n, s, h, g, C, w)) : !1;
  }
  function jn(n) {
    if (!Xe(n) || Wn(n))
      return !1;
    var s = Ue(n) ? en : Yi;
    return s.test(pt(n));
  }
  function Pn(n) {
    return Ot(n) && We(n.length) && !!D[xt(n)];
  }
  function Hn(n) {
    if (!Xn(n))
      return an(n);
    var s = [];
    for (var h in Object(n))
      tt.call(n, h) && h != "constructor" && s.push(h);
    return s;
  }
  function Fe(n, s, h, g, C, w) {
    var O = h & r, H = n.length, Y = s.length;
    if (H != Y && !(O && Y > H))
      return !1;
    var x = w.get(n);
    if (x && w.get(s))
      return x == s;
    var X = -1, Z = !0, B = h & o ? new Vt() : void 0;
    for (w.set(n, s), w.set(s, n); ++X < H; ) {
      var $ = n[X], G = s[X];
      if (g)
        var ut = O ? g(G, $, X, s, n, w) : g($, G, X, n, s, w);
      if (ut !== void 0) {
        if (ut)
          continue;
        Z = !1;
        break;
      }
      if (B) {
        if (!Wi(s, function(st, mt) {
          if (!$i(B, mt) && ($ === st || C($, st, h, g, w)))
            return B.push(mt);
        })) {
          Z = !1;
          break;
        }
      } else if (!($ === G || C($, G, h, g, w))) {
        Z = !1;
        break;
      }
    }
    return w.delete(n), w.delete(s), Z;
  }
  function Rn(n, s, h, g, C, w, O) {
    switch (h) {
      case Rt:
        if (n.byteLength != s.byteLength || n.byteOffset != s.byteOffset)
          return !1;
        n = n.buffer, s = s.buffer;
      case _e:
        return !(n.byteLength != s.byteLength || !w(new ke(n), new ke(s)));
      case p:
      case d:
      case F:
        return Be(+n, +s);
      case y:
        return n.name == s.name && n.message == s.message;
      case it:
      case nt:
        return n == s + "";
      case R:
        var H = Zi;
      case U:
        var Y = g & r;
        if (H || (H = Ki), n.size != s.size && !Y)
          return !1;
        var x = O.get(n);
        if (x)
          return x == s;
        g |= o, O.set(n, s);
        var X = Fe(H(n), H(s), g, C, w, O);
        return O.delete(n), X;
      case ct:
        if (ce)
          return ce.call(n) == ce.call(s);
    }
    return !1;
  }
  function Yn(n, s, h, g, C, w) {
    var O = h & r, H = Ve(n), Y = H.length, x = Ve(s), X = x.length;
    if (Y != X && !O)
      return !1;
    for (var Z = Y; Z--; ) {
      var B = H[Z];
      if (!(O ? B in s : tt.call(s, B)))
        return !1;
    }
    var $ = w.get(n);
    if ($ && w.get(s))
      return $ == s;
    var G = !0;
    w.set(n, s), w.set(s, n);
    for (var ut = O; ++Z < Y; ) {
      B = H[Z];
      var st = n[B], mt = s[B];
      if (g)
        var $e = O ? g(mt, st, B, s, n, w) : g(st, mt, B, n, s, w);
      if (!($e === void 0 ? st === mt || C(st, mt, h, g, w) : $e)) {
        G = !1;
        break;
      }
      ut || (ut = B == "constructor");
    }
    if (G && !ut) {
      var Xt = n.constructor, qt = s.constructor;
      Xt != qt && "constructor" in n && "constructor" in s && !(typeof Xt == "function" && Xt instanceof Xt && typeof qt == "function" && qt instanceof qt) && (G = !1);
    }
    return w.delete(n), w.delete(s), G;
  }
  function Ve(n) {
    return zn(n, Qn, Vn);
  }
  function Ut(n, s) {
    var h = n.__data__;
    return Un(s) ? h[typeof s == "string" ? "string" : "hash"] : h.map;
  }
  function bt(n, s) {
    var h = Gi(n, s);
    return jn(h) ? h : void 0;
  }
  function Fn(n) {
    var s = tt.call(n, dt), h = n[dt];
    try {
      n[dt] = void 0;
      var g = !0;
    } catch {
    }
    var C = Se.call(n);
    return g && (s ? n[dt] = h : delete n[dt]), C;
  }
  var Vn = Pe ? function(n) {
    return n == null ? [] : (n = Object(n), Bi(Pe(n), function(s) {
      return je.call(n, s);
    }));
  } : Kn, ht = xt;
  (oe && ht(new oe(new ArrayBuffer(1))) != Rt || Ct && ht(new Ct()) != R || le && ht(le.resolve()) != _ || he && ht(new he()) != U || ue && ht(new ue()) != W) && (ht = function(n) {
    var s = xt(n), h = s == L ? n.constructor : void 0, g = h ? pt(h) : "";
    if (g)
      switch (g) {
        case sn:
          return Rt;
        case on:
          return R;
        case ln:
          return _;
        case hn:
          return U;
        case un:
          return W;
      }
    return s;
  });
  function Bn(n, s) {
    return s = s == null ? l : s, !!s && (typeof n == "number" || Fi.test(n)) && n > -1 && n % 1 == 0 && n < s;
  }
  function Un(n) {
    var s = typeof n;
    return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? n !== "__proto__" : n === null;
  }
  function Wn(n) {
    return !!Oe && Oe in n;
  }
  function Xn(n) {
    var s = n && n.constructor, h = typeof s == "function" && s.prototype || Yt;
    return n === h;
  }
  function qn(n) {
    return Se.call(n);
  }
  function pt(n) {
    if (n != null) {
      try {
        return xe.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  function Be(n, s) {
    return n === s || n !== n && s !== s;
  }
  var $n = Re(function() {
    return arguments;
  }()) ? Re : function(n) {
    return Ot(n) && tt.call(n, "callee") && !je.call(n, "callee");
  }, Wt = Array.isArray;
  function Gn(n) {
    return n != null && We(n.length) && !Ue(n);
  }
  var de = rn || Jn;
  function Zn(n, s) {
    return Ye(n, s);
  }
  function Ue(n) {
    if (!Xe(n))
      return !1;
    var s = xt(n);
    return s == I || s == T || s == c || s == wt;
  }
  function We(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= l;
  }
  function Xe(n) {
    var s = typeof n;
    return n != null && (s == "object" || s == "function");
  }
  function Ot(n) {
    return n != null && typeof n == "object";
  }
  var qe = Ne ? qi(Ne) : Pn;
  function Qn(n) {
    return Gn(n) ? Sn(n) : Hn(n);
  }
  function Kn() {
    return [];
  }
  function Jn() {
    return !1;
  }
  a.exports = Zn;
})(pe, pe.exports);
const Ge = pe.exports;
const P = "editorjs-image2", ar = (a) => /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g.test(a);
class sr {
  constructor(t) {
    z(this, "key", "URL-PANEL");
    z(this, "name", "URL");
    z(this, "context");
    this.context = t;
  }
  render() {
    const t = document.createElement("div"), i = document.createElement("input");
    i.classList.add("cdx-input"), i.value = this.context.getData().url || "";
    const e = document.createElement("div");
    return e.classList.add("inline-image__embed-button"), e.innerText = "Embed Image", e.addEventListener("click", (r) => {
      const o = i.value;
      ar(o) ? this.context.selectImage(o) : this.context.api.notifier.show({
        message: "Please enter a valid url.",
        style: "error"
      });
    }), t.append(i, e), t;
  }
}
class or {
  constructor(t) {
    z(this, "key", "UPLOAD-PANEL");
    z(this, "name", "UPLOAD");
    z(this, "context");
    this.context = t;
  }
  render() {
    return document.createElement("div");
  }
}
class lr {
  constructor(t) {
    z(this, "nodes");
    z(this, "context");
    z(this, "tabs", []);
    z(this, "activeTab", "");
    z(this, "eventIds", []);
    this.nodes = {
      wrapper: null,
      empty: null,
      input: null
    }, this.context = t;
  }
  render() {
    if (this.nodes.wrapper)
      return;
    this.nodes.wrapper = document.createElement("div"), this.nodes.wrapper.classList.add(`${P}-tab`);
    const t = document.createElement("div");
    t.classList.add(`${P}-tab-nav`);
    const i = document.createElement("div");
    i.classList.add(`${P}-tab-content`), [
      new sr(this.context),
      new or(this.context)
    ].forEach((o, l) => {
      const u = document.createElement("span");
      u.classList.add(`${P}-tab-nav_item`), u.innerHTML = o.name, u.setAttribute("tabIndex", `${l}`), u.addEventListener("click", () => {
        this.showTab(o.key);
      });
      const f = document.createElement("div");
      f.classList.add(`${P}-tab-content_item`), f.appendChild(o.render()), this.tabs.push({ key: o.key, tag: u, content: f });
    }), t.append(...this.tabs.map((o) => o.tag)), i.append(...this.tabs.map((o) => o.content)), this.nodes.wrapper.append(t, i), document.body.append(this.nodes.wrapper), this.batchBindEvent(this.context.api.ui.nodes.wrapper, ["click"], (o) => {
      o == null || o.stopPropagation(), this.hide();
    }), this.batchBindEvent(this.nodes.wrapper, ["keydown", "keyup", "click"], (o) => {
      o == null || o.stopPropagation();
    });
    const r = document.body;
    r && this.batchBindEvent(r, ["keydown", "keyup", "click"], () => {
      this.destroy();
    });
  }
  show(t) {
    this.nodes.wrapper || this.render(), this.nodes.wrapper && (this.activeTab || this.showTab("URL-PANEL"), Object.assign(this.nodes.wrapper.style, {
      top: `${t.y + 60}px`,
      left: `${t.x}px`
    }), this.nodes.wrapper.classList.remove(`${P}-hidden`));
  }
  showByElement(t) {
    if (t) {
      const { x: i, y: e } = t.getBoundingClientRect();
      this.show({ x: i, y: e });
    }
  }
  hide() {
    this.nodes.wrapper && this.nodes.wrapper.classList.add(`${P}-hidden`), this.activeTab = "";
  }
  getActiveTab() {
    return this.activeTab;
  }
  destroy() {
    var t;
    this.eventIds.forEach((i) => this.context.api.listeners.offById(i)), (t = this.nodes.wrapper) == null || t.remove(), this.tabs = [], this.eventIds = [], this.nodes = {}, this.activeTab = "";
  }
  showTab(t) {
    t !== this.activeTab && (this.activeTab = t, this.tabs.forEach((i) => {
      i.key === t ? (i.tag.classList.add("active"), i.content.classList.add("active"), setTimeout(() => {
        var e;
        return (e = i.content.getElementsByClassName("cdx-input")[0]) == null ? void 0 : e.focus();
      }, 100)) : (i.tag.classList.remove("active"), i.content.classList.remove("active"));
    }));
  }
  batchBindEvent(t, i, e, r) {
    i.forEach((o) => {
      const l = this.context.api.listeners.on(t, o, e, r);
      this.eventIds.push(l);
    });
  }
}
/*!
 * Viewer.js v1.10.3
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-02-02T05:15:01.702Z
 */
function Ze(a, t) {
  var i = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(a);
    t && (e = e.filter(function(r) {
      return Object.getOwnPropertyDescriptor(a, r).enumerable;
    })), i.push.apply(i, e);
  }
  return i;
}
function ye(a) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ze(Object(i), !0).forEach(function(e) {
      cr(a, e, i[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : Ze(Object(i)).forEach(function(e) {
      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e));
    });
  }
  return a;
}
function me(a) {
  return me = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, me(a);
}
function hr(a, t) {
  if (!(a instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qe(a, t) {
  for (var i = 0; i < t.length; i++) {
    var e = t[i];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(a, e.key, e);
  }
}
function ur(a, t, i) {
  return t && Qe(a.prototype, t), i && Qe(a, i), Object.defineProperty(a, "prototype", {
    writable: !1
  }), a;
}
function cr(a, t, i) {
  return t in a ? Object.defineProperty(a, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[t] = i, a;
}
var Ke = {
  backdrop: !0,
  button: !0,
  navbar: !0,
  title: !0,
  toolbar: !0,
  className: "",
  container: "body",
  filter: null,
  fullscreen: !0,
  inheritedAttributes: ["crossOrigin", "decoding", "isMap", "loading", "referrerPolicy", "sizes", "srcset", "useMap"],
  initialViewIndex: 0,
  inline: !1,
  interval: 5e3,
  keyboard: !0,
  focus: !0,
  loading: !0,
  loop: !0,
  minWidth: 200,
  minHeight: 100,
  movable: !0,
  rotatable: !0,
  scalable: !0,
  zoomable: !0,
  zoomOnTouch: !0,
  zoomOnWheel: !0,
  slideOnTouch: !0,
  toggleOnDblclick: !0,
  tooltip: !0,
  transition: !0,
  zIndex: 2015,
  zIndexInline: 0,
  zoomRatio: 0.1,
  minZoomRatio: 0.01,
  maxZoomRatio: 100,
  url: "src",
  ready: null,
  show: null,
  shown: null,
  hide: null,
  hidden: null,
  view: null,
  viewed: null,
  move: null,
  moved: null,
  rotate: null,
  rotated: null,
  scale: null,
  scaled: null,
  zoom: null,
  zoomed: null,
  play: null,
  stop: null
}, dr = '<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>', re = typeof window < "u" && typeof window.document < "u", ot = re ? window : {}, _t = re && ot.document.documentElement ? "ontouchstart" in ot.document.documentElement : !1, Ee = re ? "PointerEvent" in ot : !1, b = "viewer", Jt = "move", Ii = "switch", St = "zoom", Gt = "".concat(b, "-active"), fr = "".concat(b, "-close"), te = "".concat(b, "-fade"), ve = "".concat(b, "-fixed"), gr = "".concat(b, "-fullscreen"), Je = "".concat(b, "-fullscreen-exit"), vt = "".concat(b, "-hide"), pr = "".concat(b, "-hide-md-down"), mr = "".concat(b, "-hide-sm-down"), vr = "".concat(b, "-hide-xs-down"), et = "".concat(b, "-in"), kt = "".concat(b, "-invisible"), Mt = "".concat(b, "-loading"), wr = "".concat(b, "-move"), ti = "".concat(b, "-open"), yt = "".concat(b, "-show"), S = "".concat(b, "-transition"), It = "click", we = "dblclick", ei = "dragstart", ii = "focusin", ni = "keydown", K = "load", ie = "error", br = _t ? "touchend touchcancel" : "mouseup", yr = _t ? "touchmove" : "mousemove", Er = _t ? "touchstart" : "mousedown", ri = Ee ? "pointerdown" : Er, ai = Ee ? "pointermove" : yr, si = Ee ? "pointerup pointercancel" : br, oi = "resize", Q = "transitionend", li = "wheel", hi = "ready", ui = "show", ci = "shown", di = "hide", fi = "hidden", gi = "view", jt = "viewed", pi = "move", mi = "moved", vi = "rotate", wi = "rotated", bi = "scale", yi = "scaled", Ei = "zoom", Ti = "zoomed", Ai = "play", _i = "stop", ne = "".concat(b, "Action"), Te = /\s\s*/, Zt = ["zoom-in", "zoom-out", "one-to-one", "reset", "prev", "play", "next", "rotate-left", "rotate-right", "flip-horizontal", "flip-vertical"];
function Pt(a) {
  return typeof a == "string";
}
var Tr = Number.isNaN || ot.isNaN;
function j(a) {
  return typeof a == "number" && !Tr(a);
}
function Tt(a) {
  return typeof a > "u";
}
function Lt(a) {
  return me(a) === "object" && a !== null;
}
var Ar = Object.prototype.hasOwnProperty;
function zt(a) {
  if (!Lt(a))
    return !1;
  try {
    var t = a.constructor, i = t.prototype;
    return t && i && Ar.call(i, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function A(a) {
  return typeof a == "function";
}
function M(a, t) {
  if (a && A(t))
    if (Array.isArray(a) || j(a.length)) {
      var i = a.length, e;
      for (e = 0; e < i && t.call(a, a[e], e, a) !== !1; e += 1)
        ;
    } else
      Lt(a) && Object.keys(a).forEach(function(r) {
        t.call(a, a[r], r, a);
      });
  return a;
}
var q = Object.assign || function(t) {
  for (var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)
    e[r - 1] = arguments[r];
  return Lt(t) && e.length > 0 && e.forEach(function(o) {
    Lt(o) && Object.keys(o).forEach(function(l) {
      t[l] = o[l];
    });
  }), t;
}, _r = /^(?:width|height|left|top|marginLeft|marginTop)$/;
function J(a, t) {
  var i = a.style;
  M(t, function(e, r) {
    _r.test(r) && j(e) && (e += "px"), i[r] = e;
  });
}
function Mr(a) {
  return Pt(a) ? a.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : a;
}
function Et(a, t) {
  return !a || !t ? !1 : a.classList ? a.classList.contains(t) : a.className.indexOf(t) > -1;
}
function m(a, t) {
  if (!(!a || !t)) {
    if (j(a.length)) {
      M(a, function(e) {
        m(e, t);
      });
      return;
    }
    if (a.classList) {
      a.classList.add(t);
      return;
    }
    var i = a.className.trim();
    i ? i.indexOf(t) < 0 && (a.className = "".concat(i, " ").concat(t)) : a.className = t;
  }
}
function E(a, t) {
  if (!(!a || !t)) {
    if (j(a.length)) {
      M(a, function(i) {
        E(i, t);
      });
      return;
    }
    if (a.classList) {
      a.classList.remove(t);
      return;
    }
    a.className.indexOf(t) >= 0 && (a.className = a.className.replace(t, ""));
  }
}
function Ht(a, t, i) {
  if (!!t) {
    if (j(a.length)) {
      M(a, function(e) {
        Ht(e, t, i);
      });
      return;
    }
    i ? m(a, t) : E(a, t);
  }
}
var Ir = /([a-z\d])([A-Z])/g;
function Ae(a) {
  return a.replace(Ir, "$1-$2").toLowerCase();
}
function At(a, t) {
  return Lt(a[t]) ? a[t] : a.dataset ? a.dataset[t] : a.getAttribute("data-".concat(Ae(t)));
}
function be(a, t, i) {
  Lt(i) ? a[t] = i : a.dataset ? a.dataset[t] = i : a.setAttribute("data-".concat(Ae(t)), i);
}
var Li = function() {
  var a = !1;
  if (re) {
    var t = !1, i = function() {
    }, e = Object.defineProperty({}, "once", {
      get: function() {
        return a = !0, t;
      },
      set: function(o) {
        t = o;
      }
    });
    ot.addEventListener("test", i, e), ot.removeEventListener("test", i, e);
  }
  return a;
}();
function N(a, t, i) {
  var e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, r = i;
  t.trim().split(Te).forEach(function(o) {
    if (!Li) {
      var l = a.listeners;
      l && l[o] && l[o][i] && (r = l[o][i], delete l[o][i], Object.keys(l[o]).length === 0 && delete l[o], Object.keys(l).length === 0 && delete a.listeners);
    }
    a.removeEventListener(o, r, e);
  });
}
function v(a, t, i) {
  var e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, r = i;
  t.trim().split(Te).forEach(function(o) {
    if (e.once && !Li) {
      var l = a.listeners, u = l === void 0 ? {} : l;
      r = function() {
        delete u[o][i], a.removeEventListener(o, r, e);
        for (var c = arguments.length, p = new Array(c), d = 0; d < c; d++)
          p[d] = arguments[d];
        i.apply(a, p);
      }, u[o] || (u[o] = {}), u[o][i] && a.removeEventListener(o, u[o][i], e), u[o][i] = r, a.listeners = u;
    }
    a.addEventListener(o, r, e);
  });
}
function k(a, t, i, e) {
  var r;
  return A(Event) && A(CustomEvent) ? r = new CustomEvent(t, ye({
    bubbles: !0,
    cancelable: !0,
    detail: i
  }, e)) : (r = document.createEvent("CustomEvent"), r.initCustomEvent(t, !0, !0, i)), a.dispatchEvent(r);
}
function Lr(a) {
  var t = a.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
function ee(a) {
  var t = a.rotate, i = a.scaleX, e = a.scaleY, r = a.translateX, o = a.translateY, l = [];
  j(r) && r !== 0 && l.push("translateX(".concat(r, "px)")), j(o) && o !== 0 && l.push("translateY(".concat(o, "px)")), j(t) && t !== 0 && l.push("rotate(".concat(t, "deg)")), j(i) && i !== 1 && l.push("scaleX(".concat(i, ")")), j(e) && e !== 1 && l.push("scaleY(".concat(e, ")"));
  var u = l.length ? l.join(" ") : "none";
  return {
    WebkitTransform: u,
    msTransform: u,
    transform: u
  };
}
function Dr(a) {
  return Pt(a) ? decodeURIComponent(a.replace(/^.*\//, "").replace(/[?&#].*$/, "")) : "";
}
var fe = ot.navigator && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(ot.navigator.userAgent);
function Di(a, t, i) {
  var e = document.createElement("img");
  if (a.naturalWidth && !fe)
    return i(a.naturalWidth, a.naturalHeight), e;
  var r = document.body || document.documentElement;
  return e.onload = function() {
    i(e.width, e.height), fe || r.removeChild(e);
  }, M(t.inheritedAttributes, function(o) {
    var l = a.getAttribute(o);
    l !== null && e.setAttribute(o, l);
  }), e.src = a.src, fe || (e.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", r.appendChild(e)), e;
}
function Qt(a) {
  switch (a) {
    case 2:
      return vr;
    case 3:
      return mr;
    case 4:
      return pr;
    default:
      return "";
  }
}
function Cr(a) {
  var t = ye({}, a), i = [];
  return M(a, function(e, r) {
    delete t[r], M(t, function(o) {
      var l = Math.abs(e.startX - o.startX), u = Math.abs(e.startY - o.startY), f = Math.abs(e.endX - o.endX), c = Math.abs(e.endY - o.endY), p = Math.sqrt(l * l + u * u), d = Math.sqrt(f * f + c * c), y = (d - p) / p;
      i.push(y);
    });
  }), i.sort(function(e, r) {
    return Math.abs(e) < Math.abs(r);
  }), i[0];
}
function Kt(a, t) {
  var i = a.pageX, e = a.pageY, r = {
    endX: i,
    endY: e
  };
  return t ? r : ye({
    timeStamp: Date.now(),
    startX: i,
    startY: e
  }, r);
}
function Nr(a) {
  var t = 0, i = 0, e = 0;
  return M(a, function(r) {
    var o = r.startX, l = r.startY;
    t += o, i += l, e += 1;
  }), t /= e, i /= e, {
    pageX: t,
    pageY: i
  };
}
var xr = {
  render: function() {
    this.initContainer(), this.initViewer(), this.initList(), this.renderViewer();
  },
  initBody: function() {
    var t = this.element.ownerDocument, i = t.body || t.documentElement;
    this.body = i, this.scrollbarWidth = window.innerWidth - t.documentElement.clientWidth, this.initialBodyPaddingRight = i.style.paddingRight, this.initialBodyComputedPaddingRight = window.getComputedStyle(i).paddingRight;
  },
  initContainer: function() {
    this.containerData = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  initViewer: function() {
    var t = this.options, i = this.parent, e;
    t.inline && (e = {
      width: Math.max(i.offsetWidth, t.minWidth),
      height: Math.max(i.offsetHeight, t.minHeight)
    }, this.parentData = e), (this.fulled || !e) && (e = this.containerData), this.viewerData = q({}, e);
  },
  renderViewer: function() {
    this.options.inline && !this.fulled && J(this.viewer, this.viewerData);
  },
  initList: function() {
    var t = this, i = this.element, e = this.options, r = this.list, o = [];
    r.innerHTML = "", M(this.images, function(l, u) {
      var f = l.src, c = l.alt || Dr(f), p = t.getImageURL(l);
      if (f || p) {
        var d = document.createElement("li"), y = document.createElement("img");
        M(e.inheritedAttributes, function(I) {
          var T = l.getAttribute(I);
          T !== null && y.setAttribute(I, T);
        }), y.src = f || p, y.alt = c, y.setAttribute("data-original-url", p || f), d.setAttribute("data-index", u), d.setAttribute("data-viewer-action", "view"), d.setAttribute("role", "button"), e.keyboard && d.setAttribute("tabindex", 0), d.appendChild(y), r.appendChild(d), o.push(d);
      }
    }), this.items = o, M(o, function(l) {
      var u = l.firstElementChild, f, c;
      be(u, "filled", !0), e.loading && m(l, Mt), v(u, K, f = function(d) {
        N(u, ie, c), e.loading && E(l, Mt), t.loadImage(d);
      }, {
        once: !0
      }), v(u, ie, c = function() {
        N(u, K, f), e.loading && E(l, Mt);
      }, {
        once: !0
      });
    }), e.transition && v(i, jt, function() {
      m(r, S);
    }, {
      once: !0
    });
  },
  renderList: function() {
    var t = this.index, i = this.items[t];
    if (!!i) {
      var e = i.nextElementSibling, r = parseInt(window.getComputedStyle(e || i).marginLeft, 10), o = i.offsetWidth, l = o + r;
      J(this.list, q({
        width: l * this.length - r
      }, ee({
        translateX: (this.viewerData.width - o) / 2 - l * t
      })));
    }
  },
  resetList: function() {
    var t = this.list;
    t.innerHTML = "", E(t, S), J(t, ee({
      translateX: 0
    }));
  },
  initImage: function(t) {
    var i = this, e = this.options, r = this.image, o = this.viewerData, l = this.footer.offsetHeight, u = o.width, f = Math.max(o.height - l, l), c = this.imageData || {}, p;
    this.imageInitializing = {
      abort: function() {
        p.onload = null;
      }
    }, p = Di(r, e, function(d, y) {
      var I = d / y, T = u, R = f;
      i.imageInitializing = !1, f * I > u ? R = u / I : T = f * I, T = Math.min(T * 0.9, d), R = Math.min(R * 0.9, y);
      var F = (u - T) / 2, V = (f - R) / 2, L = {
        left: F,
        top: V,
        x: F,
        y: V,
        width: T,
        height: R,
        oldRatio: 1,
        ratio: T / d,
        aspectRatio: I,
        naturalWidth: d,
        naturalHeight: y
      }, _ = q({}, L);
      e.rotatable && (L.rotate = c.rotate || 0, _.rotate = 0), e.scalable && (L.scaleX = c.scaleX || 1, L.scaleY = c.scaleY || 1, _.scaleX = 1, _.scaleY = 1), i.imageData = L, i.initialImageData = _, t && t();
    });
  },
  renderImage: function(t) {
    var i = this, e = this.image, r = this.imageData;
    if (J(e, q({
      width: r.width,
      height: r.height,
      marginLeft: r.x,
      marginTop: r.y
    }, ee(r))), t)
      if ((this.viewing || this.moving || this.rotating || this.scaling || this.zooming) && this.options.transition && Et(e, S)) {
        var o = function() {
          i.imageRendering = !1, t();
        };
        this.imageRendering = {
          abort: function() {
            N(e, Q, o);
          }
        }, v(e, Q, o, {
          once: !0
        });
      } else
        t();
  },
  resetImage: function() {
    if (this.viewing || this.viewed) {
      var t = this.image;
      this.viewing && this.viewing.abort(), t.parentNode.removeChild(t), this.image = null;
    }
  }
}, Or = {
  bind: function() {
    var t = this.options, i = this.viewer, e = this.canvas, r = this.element.ownerDocument;
    v(i, It, this.onClick = this.click.bind(this)), v(i, ei, this.onDragStart = this.dragstart.bind(this)), v(e, ri, this.onPointerDown = this.pointerdown.bind(this)), v(r, ai, this.onPointerMove = this.pointermove.bind(this)), v(r, si, this.onPointerUp = this.pointerup.bind(this)), v(r, ni, this.onKeyDown = this.keydown.bind(this)), v(window, oi, this.onResize = this.resize.bind(this)), t.zoomable && t.zoomOnWheel && v(i, li, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), t.toggleOnDblclick && v(e, we, this.onDblclick = this.dblclick.bind(this));
  },
  unbind: function() {
    var t = this.options, i = this.viewer, e = this.canvas, r = this.element.ownerDocument;
    N(i, It, this.onClick), N(i, ei, this.onDragStart), N(e, ri, this.onPointerDown), N(r, ai, this.onPointerMove), N(r, si, this.onPointerUp), N(r, ni, this.onKeyDown), N(window, oi, this.onResize), t.zoomable && t.zoomOnWheel && N(i, li, this.onWheel, {
      passive: !1,
      capture: !0
    }), t.toggleOnDblclick && N(e, we, this.onDblclick);
  }
}, Sr = {
  click: function(t) {
    var i = this.options, e = this.imageData, r = t.target, o = At(r, ne);
    switch (!o && r.localName === "img" && r.parentElement.localName === "li" && (r = r.parentElement, o = At(r, ne)), _t && t.isTrusted && r === this.canvas && clearTimeout(this.clickCanvasTimeout), o) {
      case "mix":
        this.played ? this.stop() : i.inline ? this.fulled ? this.exit() : this.full() : this.hide();
        break;
      case "hide":
        this.hide();
        break;
      case "view":
        this.view(At(r, "index"));
        break;
      case "zoom-in":
        this.zoom(0.1, !0);
        break;
      case "zoom-out":
        this.zoom(-0.1, !0);
        break;
      case "one-to-one":
        this.toggle();
        break;
      case "reset":
        this.reset();
        break;
      case "prev":
        this.prev(i.loop);
        break;
      case "play":
        this.play(i.fullscreen);
        break;
      case "next":
        this.next(i.loop);
        break;
      case "rotate-left":
        this.rotate(-90);
        break;
      case "rotate-right":
        this.rotate(90);
        break;
      case "flip-horizontal":
        this.scaleX(-e.scaleX || -1);
        break;
      case "flip-vertical":
        this.scaleY(-e.scaleY || -1);
        break;
      default:
        this.played && this.stop();
    }
  },
  dblclick: function(t) {
    t.preventDefault(), this.viewed && t.target === this.image && (_t && t.isTrusted && clearTimeout(this.doubleClickImageTimeout), this.toggle(t.isTrusted ? t : t.detail && t.detail.originalEvent));
  },
  load: function() {
    var t = this;
    this.timeout && (clearTimeout(this.timeout), this.timeout = !1);
    var i = this.element, e = this.options, r = this.image, o = this.index, l = this.viewerData;
    E(r, kt), e.loading && E(this.canvas, Mt), r.style.cssText = "height:0;" + "margin-left:".concat(l.width / 2, "px;") + "margin-top:".concat(l.height / 2, "px;") + "max-width:none!important;position:relative;width:0;", this.initImage(function() {
      Ht(r, wr, e.movable), Ht(r, S, e.transition), t.renderImage(function() {
        t.viewed = !0, t.viewing = !1, A(e.viewed) && v(i, jt, e.viewed, {
          once: !0
        }), k(i, jt, {
          originalImage: t.images[o],
          index: o,
          image: r
        }, {
          cancelable: !1
        });
      });
    });
  },
  loadImage: function(t) {
    var i = t.target, e = i.parentNode, r = e.offsetWidth || 30, o = e.offsetHeight || 50, l = !!At(i, "filled");
    Di(i, this.options, function(u, f) {
      var c = u / f, p = r, d = o;
      o * c > r ? l ? p = o * c : d = r / c : l ? d = r / c : p = o * c, J(i, q({
        width: p,
        height: d
      }, ee({
        translateX: (r - p) / 2,
        translateY: (o - d) / 2
      })));
    });
  },
  keydown: function(t) {
    var i = this.options;
    if (!!i.keyboard) {
      var e = t.keyCode || t.which || t.charCode;
      switch (e) {
        case 13:
          this.viewer.contains(t.target) && this.click(t);
          break;
      }
      if (!!this.fulled)
        switch (e) {
          case 27:
            this.played ? this.stop() : i.inline ? this.fulled && this.exit() : this.hide();
            break;
          case 32:
            this.played && this.stop();
            break;
          case 37:
            this.prev(i.loop);
            break;
          case 38:
            t.preventDefault(), this.zoom(i.zoomRatio, !0);
            break;
          case 39:
            this.next(i.loop);
            break;
          case 40:
            t.preventDefault(), this.zoom(-i.zoomRatio, !0);
            break;
          case 48:
          case 49:
            t.ctrlKey && (t.preventDefault(), this.toggle());
            break;
        }
    }
  },
  dragstart: function(t) {
    t.target.localName === "img" && t.preventDefault();
  },
  pointerdown: function(t) {
    var i = this.options, e = this.pointers, r = t.buttons, o = t.button;
    if (!(!this.viewed || this.showing || this.viewing || this.hiding || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && (j(r) && r !== 1 || j(o) && o !== 0 || t.ctrlKey))) {
      t.preventDefault(), t.changedTouches ? M(t.changedTouches, function(u) {
        e[u.identifier] = Kt(u);
      }) : e[t.pointerId || 0] = Kt(t);
      var l = i.movable ? Jt : !1;
      i.zoomOnTouch && i.zoomable && Object.keys(e).length > 1 ? l = St : i.slideOnTouch && (t.pointerType === "touch" || t.type === "touchstart") && this.isSwitchable() && (l = Ii), i.transition && (l === Jt || l === St) && E(this.image, S), this.action = l;
    }
  },
  pointermove: function(t) {
    var i = this.pointers, e = this.action;
    !this.viewed || !e || (t.preventDefault(), t.changedTouches ? M(t.changedTouches, function(r) {
      q(i[r.identifier] || {}, Kt(r, !0));
    }) : q(i[t.pointerId || 0] || {}, Kt(t, !0)), this.change(t));
  },
  pointerup: function(t) {
    var i = this, e = this.options, r = this.action, o = this.pointers, l;
    t.changedTouches ? M(t.changedTouches, function(u) {
      l = o[u.identifier], delete o[u.identifier];
    }) : (l = o[t.pointerId || 0], delete o[t.pointerId || 0]), r && (t.preventDefault(), e.transition && (r === Jt || r === St) && m(this.image, S), this.action = !1, _t && r !== St && l && Date.now() - l.timeStamp < 500 && (clearTimeout(this.clickCanvasTimeout), clearTimeout(this.doubleClickImageTimeout), e.toggleOnDblclick && this.viewed && t.target === this.image ? this.imageClicked ? (this.imageClicked = !1, this.doubleClickImageTimeout = setTimeout(function() {
      k(i.image, we, {
        originalEvent: t
      });
    }, 50)) : (this.imageClicked = !0, this.doubleClickImageTimeout = setTimeout(function() {
      i.imageClicked = !1;
    }, 500)) : (this.imageClicked = !1, e.backdrop && e.backdrop !== "static" && t.target === this.canvas && (this.clickCanvasTimeout = setTimeout(function() {
      k(i.canvas, It, {
        originalEvent: t
      });
    }, 50)))));
  },
  resize: function() {
    var t = this;
    if (!(!this.isShown || this.hiding) && (this.fulled && (this.close(), this.initBody(), this.open()), this.initContainer(), this.initViewer(), this.renderViewer(), this.renderList(), this.viewed && this.initImage(function() {
      t.renderImage();
    }), this.played)) {
      if (this.options.fullscreen && this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
        this.stop();
        return;
      }
      M(this.player.getElementsByTagName("img"), function(i) {
        v(i, K, t.loadImage.bind(t), {
          once: !0
        }), k(i, K);
      });
    }
  },
  wheel: function(t) {
    var i = this;
    if (!!this.viewed && (t.preventDefault(), !this.wheeling)) {
      this.wheeling = !0, setTimeout(function() {
        i.wheeling = !1;
      }, 50);
      var e = Number(this.options.zoomRatio) || 0.1, r = 1;
      t.deltaY ? r = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? r = -t.wheelDelta / 120 : t.detail && (r = t.detail > 0 ? 1 : -1), this.zoom(-r * e, !0, t);
    }
  }
}, zr = {
  show: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, i = this.element, e = this.options;
    if (e.inline || this.showing || this.isShown || this.showing)
      return this;
    if (!this.ready)
      return this.build(), this.ready && this.show(t), this;
    if (A(e.show) && v(i, ui, e.show, {
      once: !0
    }), k(i, ui) === !1 || !this.ready)
      return this;
    this.hiding && this.transitioning.abort(), this.showing = !0, this.open();
    var r = this.viewer;
    if (E(r, vt), r.setAttribute("role", "dialog"), r.setAttribute("aria-labelledby", this.title.id), r.setAttribute("aria-modal", !0), r.removeAttribute("aria-hidden"), e.transition && !t) {
      var o = this.shown.bind(this);
      this.transitioning = {
        abort: function() {
          N(r, Q, o), E(r, et);
        }
      }, m(r, S), r.initialOffsetWidth = r.offsetWidth, v(r, Q, o, {
        once: !0
      }), m(r, et);
    } else
      m(r, et), this.shown();
    return this;
  },
  hide: function() {
    var t = this, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.element, r = this.options;
    if (r.inline || this.hiding || !(this.isShown || this.showing))
      return this;
    if (A(r.hide) && v(e, di, r.hide, {
      once: !0
    }), k(e, di) === !1)
      return this;
    this.showing && this.transitioning.abort(), this.hiding = !0, this.played ? this.stop() : this.viewing && this.viewing.abort();
    var o = this.viewer, l = this.image, u = function() {
      E(o, et), t.hidden();
    };
    if (r.transition && !i) {
      var f = function p(d) {
        d && d.target === o && (N(o, Q, p), t.hidden());
      }, c = function() {
        Et(o, S) ? (v(o, Q, f), E(o, et)) : u();
      };
      this.transitioning = {
        abort: function() {
          t.viewed && Et(l, S) ? N(l, Q, c) : Et(o, S) && N(o, Q, f);
        }
      }, this.viewed && Et(l, S) ? (v(l, Q, c, {
        once: !0
      }), this.zoomTo(0, !1, null, !0)) : c();
    } else
      u();
    return this;
  },
  view: function() {
    var t = this, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.initialViewIndex;
    if (i = Number(i) || 0, this.hiding || this.played || i < 0 || i >= this.length || this.viewed && i === this.index)
      return this;
    if (!this.isShown)
      return this.index = i, this.show();
    this.viewing && this.viewing.abort();
    var e = this.element, r = this.options, o = this.title, l = this.canvas, u = this.items[i], f = u.querySelector("img"), c = At(f, "originalUrl"), p = f.getAttribute("alt"), d = document.createElement("img");
    if (M(r.inheritedAttributes, function(F) {
      var V = f.getAttribute(F);
      V !== null && d.setAttribute(F, V);
    }), d.src = c, d.alt = p, A(r.view) && v(e, gi, r.view, {
      once: !0
    }), k(e, gi, {
      originalImage: this.images[i],
      index: i,
      image: d
    }) === !1 || !this.isShown || this.hiding || this.played)
      return this;
    var y = this.items[this.index];
    y && (E(y, Gt), y.removeAttribute("aria-selected")), m(u, Gt), u.setAttribute("aria-selected", !0), r.focus && u.focus(), this.image = d, this.viewed = !1, this.index = i, this.imageData = {}, m(d, kt), r.loading && m(l, Mt), l.innerHTML = "", l.appendChild(d), this.renderList(), o.innerHTML = "";
    var I = function() {
      var V = t.imageData, L = Array.isArray(r.title) ? r.title[1] : r.title;
      o.innerHTML = Mr(A(L) ? L.call(t, d, V) : "".concat(p, " (").concat(V.naturalWidth, " \xD7 ").concat(V.naturalHeight, ")"));
    }, T, R;
    return v(e, jt, I, {
      once: !0
    }), this.viewing = {
      abort: function() {
        N(e, jt, I), d.complete ? t.imageRendering ? t.imageRendering.abort() : t.imageInitializing && t.imageInitializing.abort() : (d.src = "", N(d, K, T), t.timeout && clearTimeout(t.timeout));
      }
    }, d.complete ? this.load() : (v(d, K, T = function() {
      N(d, ie, R), t.load();
    }, {
      once: !0
    }), v(d, ie, R = function() {
      N(d, K, T), t.timeout && (clearTimeout(t.timeout), t.timeout = !1), E(d, kt), r.loading && E(t.canvas, Mt);
    }, {
      once: !0
    }), this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(function() {
      E(d, kt), t.timeout = !1;
    }, 1e3)), this;
  },
  prev: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, i = this.index - 1;
    return i < 0 && (i = t ? this.length - 1 : 0), this.view(i), this;
  },
  next: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, i = this.length - 1, e = this.index + 1;
    return e > i && (e = t ? 0 : i), this.view(e), this;
  },
  move: function(t) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, e = this.imageData;
    return this.moveTo(Tt(t) ? t : e.x + Number(t), Tt(i) ? i : e.y + Number(i)), this;
  },
  moveTo: function(t) {
    var i = this, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, o = this.element, l = this.options, u = this.imageData;
    if (t = Number(t), e = Number(e), this.viewed && !this.played && l.movable) {
      var f = u.x, c = u.y, p = !1;
      if (j(t) ? p = !0 : t = f, j(e) ? p = !0 : e = c, p) {
        if (A(l.move) && v(o, pi, l.move, {
          once: !0
        }), k(o, pi, {
          x: t,
          y: e,
          oldX: f,
          oldY: c,
          originalEvent: r
        }) === !1)
          return this;
        u.x = t, u.y = e, u.left = t, u.top = e, this.moving = !0, this.renderImage(function() {
          i.moving = !1, A(l.moved) && v(o, mi, l.moved, {
            once: !0
          }), k(o, mi, {
            x: t,
            y: e,
            oldX: f,
            oldY: c,
            originalEvent: r
          }, {
            cancelable: !1
          });
        });
      }
    }
    return this;
  },
  rotate: function(t) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(t)), this;
  },
  rotateTo: function(t) {
    var i = this, e = this.element, r = this.options, o = this.imageData;
    if (t = Number(t), j(t) && this.viewed && !this.played && r.rotatable) {
      var l = o.rotate;
      if (A(r.rotate) && v(e, vi, r.rotate, {
        once: !0
      }), k(e, vi, {
        degree: t,
        oldDegree: l
      }) === !1)
        return this;
      o.rotate = t, this.rotating = !0, this.renderImage(function() {
        i.rotating = !1, A(r.rotated) && v(e, wi, r.rotated, {
          once: !0
        }), k(e, wi, {
          degree: t,
          oldDegree: l
        }, {
          cancelable: !1
        });
      });
    }
    return this;
  },
  scaleX: function(t) {
    return this.scale(t, this.imageData.scaleY), this;
  },
  scaleY: function(t) {
    return this.scale(this.imageData.scaleX, t), this;
  },
  scale: function(t) {
    var i = this, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, r = this.element, o = this.options, l = this.imageData;
    if (t = Number(t), e = Number(e), this.viewed && !this.played && o.scalable) {
      var u = l.scaleX, f = l.scaleY, c = !1;
      if (j(t) ? c = !0 : t = u, j(e) ? c = !0 : e = f, c) {
        if (A(o.scale) && v(r, bi, o.scale, {
          once: !0
        }), k(r, bi, {
          scaleX: t,
          scaleY: e,
          oldScaleX: u,
          oldScaleY: f
        }) === !1)
          return this;
        l.scaleX = t, l.scaleY = e, this.scaling = !0, this.renderImage(function() {
          i.scaling = !1, A(o.scaled) && v(r, yi, o.scaled, {
            once: !0
          }), k(r, yi, {
            scaleX: t,
            scaleY: e,
            oldScaleX: u,
            oldScaleY: f
          }, {
            cancelable: !1
          });
        });
      }
    }
    return this;
  },
  zoom: function(t) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = this.imageData;
    return t = Number(t), t < 0 ? t = 1 / (1 - t) : t = 1 + t, this.zoomTo(r.width * t / r.naturalWidth, i, e), this;
  },
  zoomTo: function(t) {
    var i = this, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, l = this.element, u = this.options, f = this.pointers, c = this.imageData, p = c.x, d = c.y, y = c.width, I = c.height, T = c.naturalWidth, R = c.naturalHeight;
    if (t = Math.max(0, t), j(t) && this.viewed && !this.played && (o || u.zoomable)) {
      if (!o) {
        var F = Math.max(0.01, u.minZoomRatio), V = Math.min(100, u.maxZoomRatio);
        t = Math.min(Math.max(t, F), V);
      }
      if (r)
        switch (r.type) {
          case "wheel":
            u.zoomRatio >= 0.055 && t > 0.95 && t < 1.05 && (t = 1);
            break;
          case "pointermove":
          case "touchmove":
          case "mousemove":
            t > 0.99 && t < 1.01 && (t = 1);
            break;
        }
      var L = T * t, _ = R * t, wt = L - y, it = _ - I, U = c.ratio;
      if (A(u.zoom) && v(l, Ei, u.zoom, {
        once: !0
      }), k(l, Ei, {
        ratio: t,
        oldRatio: U,
        originalEvent: r
      }) === !1)
        return this;
      if (this.zooming = !0, r) {
        var nt = Lr(this.viewer), ct = f && Object.keys(f).length > 0 ? Nr(f) : {
          pageX: r.pageX,
          pageY: r.pageY
        };
        c.x -= wt * ((ct.pageX - nt.left - p) / y), c.y -= it * ((ct.pageY - nt.top - d) / I);
      } else
        c.x -= wt / 2, c.y -= it / 2;
      c.left = c.x, c.top = c.y, c.width = L, c.height = _, c.oldRatio = U, c.ratio = t, this.renderImage(function() {
        i.zooming = !1, A(u.zoomed) && v(l, Ti, u.zoomed, {
          once: !0
        }), k(l, Ti, {
          ratio: t,
          oldRatio: U,
          originalEvent: r
        }, {
          cancelable: !1
        });
      }), e && this.tooltip();
    }
    return this;
  },
  play: function() {
    var t = this, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    if (!this.isShown || this.played)
      return this;
    var e = this.element, r = this.options;
    if (A(r.play) && v(e, Ai, r.play, {
      once: !0
    }), k(e, Ai) === !1)
      return this;
    var o = this.player, l = this.loadImage.bind(this), u = [], f = 0, c = 0;
    if (this.played = !0, this.onLoadWhenPlay = l, i && this.requestFullscreen(i), m(o, yt), M(this.items, function(d, y) {
      var I = d.querySelector("img"), T = document.createElement("img");
      T.src = At(I, "originalUrl"), T.alt = I.getAttribute("alt"), T.referrerPolicy = I.referrerPolicy, f += 1, m(T, te), Ht(T, S, r.transition), Et(d, Gt) && (m(T, et), c = y), u.push(T), v(T, K, l, {
        once: !0
      }), o.appendChild(T);
    }), j(r.interval) && r.interval > 0) {
      var p = function d() {
        t.playing = setTimeout(function() {
          E(u[c], et), c += 1, c = c < f ? c : 0, m(u[c], et), d();
        }, r.interval);
      };
      f > 1 && p();
    }
    return this;
  },
  stop: function() {
    var t = this;
    if (!this.played)
      return this;
    var i = this.element, e = this.options;
    if (A(e.stop) && v(i, _i, e.stop, {
      once: !0
    }), k(i, _i) === !1)
      return this;
    var r = this.player;
    return this.played = !1, clearTimeout(this.playing), M(r.getElementsByTagName("img"), function(o) {
      N(o, K, t.onLoadWhenPlay);
    }), E(r, yt), r.innerHTML = "", this.exitFullscreen(), this;
  },
  full: function() {
    var t = this, i = this.options, e = this.viewer, r = this.image, o = this.list;
    return !this.isShown || this.played || this.fulled || !i.inline ? this : (this.fulled = !0, this.open(), m(this.button, Je), i.transition && (E(o, S), this.viewed && E(r, S)), m(e, ve), e.setAttribute("role", "dialog"), e.setAttribute("aria-labelledby", this.title.id), e.setAttribute("aria-modal", !0), e.removeAttribute("style"), J(e, {
      zIndex: i.zIndex
    }), i.focus && this.enforceFocus(), this.initContainer(), this.viewerData = q({}, this.containerData), this.renderList(), this.viewed && this.initImage(function() {
      t.renderImage(function() {
        i.transition && setTimeout(function() {
          m(r, S), m(o, S);
        }, 0);
      });
    }), this);
  },
  exit: function() {
    var t = this, i = this.options, e = this.viewer, r = this.image, o = this.list;
    return !this.isShown || this.played || !this.fulled || !i.inline ? this : (this.fulled = !1, this.close(), E(this.button, Je), i.transition && (E(o, S), this.viewed && E(r, S)), i.focus && this.clearEnforceFocus(), e.removeAttribute("role"), e.removeAttribute("aria-labelledby"), e.removeAttribute("aria-modal"), E(e, ve), J(e, {
      zIndex: i.zIndexInline
    }), this.viewerData = q({}, this.parentData), this.renderViewer(), this.renderList(), this.viewed && this.initImage(function() {
      t.renderImage(function() {
        i.transition && setTimeout(function() {
          m(r, S), m(o, S);
        }, 0);
      });
    }), this);
  },
  tooltip: function() {
    var t = this, i = this.options, e = this.tooltipBox, r = this.imageData;
    return !this.viewed || this.played || !i.tooltip ? this : (e.textContent = "".concat(Math.round(r.ratio * 100), "%"), this.tooltipping ? clearTimeout(this.tooltipping) : i.transition ? (this.fading && k(e, Q), m(e, yt), m(e, te), m(e, S), e.removeAttribute("aria-hidden"), e.initialOffsetWidth = e.offsetWidth, m(e, et)) : (m(e, yt), e.removeAttribute("aria-hidden")), this.tooltipping = setTimeout(function() {
      i.transition ? (v(e, Q, function() {
        E(e, yt), E(e, te), E(e, S), e.setAttribute("aria-hidden", !0), t.fading = !1;
      }, {
        once: !0
      }), E(e, et), t.fading = !0) : (E(e, yt), e.setAttribute("aria-hidden", !0)), t.tooltipping = !1;
    }, 1e3), this);
  },
  toggle: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    return this.imageData.ratio === 1 ? this.zoomTo(this.imageData.oldRatio, !0, t) : this.zoomTo(1, !0, t), this;
  },
  reset: function() {
    return this.viewed && !this.played && (this.imageData = q({}, this.initialImageData), this.renderImage()), this;
  },
  update: function() {
    var t = this, i = this.element, e = this.options, r = this.isImg;
    if (r && !i.parentNode)
      return this.destroy();
    var o = [];
    if (M(r ? [i] : i.querySelectorAll("img"), function(c) {
      A(e.filter) ? e.filter.call(t, c) && o.push(c) : t.getImageURL(c) && o.push(c);
    }), !o.length)
      return this;
    if (this.images = o, this.length = o.length, this.ready) {
      var l = [];
      if (M(this.items, function(c, p) {
        var d = c.querySelector("img"), y = o[p];
        y && d ? (y.src !== d.src || y.alt !== d.alt) && l.push(p) : l.push(p);
      }), J(this.list, {
        width: "auto"
      }), this.initList(), this.isShown)
        if (this.length) {
          if (this.viewed) {
            var u = l.indexOf(this.index);
            if (u >= 0)
              this.viewed = !1, this.view(Math.max(Math.min(this.index - u, this.length - 1), 0));
            else {
              var f = this.items[this.index];
              m(f, Gt), f.setAttribute("aria-selected", !0);
            }
          }
        } else
          this.image = null, this.viewed = !1, this.index = 0, this.imageData = {}, this.canvas.innerHTML = "", this.title.innerHTML = "";
    } else
      this.build();
    return this;
  },
  destroy: function() {
    var t = this.element, i = this.options;
    return t[b] ? (this.destroyed = !0, this.ready ? (this.played && this.stop(), i.inline ? (this.fulled && this.exit(), this.unbind()) : this.isShown ? (this.viewing && (this.imageRendering ? this.imageRendering.abort() : this.imageInitializing && this.imageInitializing.abort()), this.hiding && this.transitioning.abort(), this.hidden()) : this.showing && (this.transitioning.abort(), this.hidden()), this.ready = !1, this.viewer.parentNode.removeChild(this.viewer)) : i.inline && (this.delaying ? this.delaying.abort() : this.initializing && this.initializing.abort()), i.inline || N(t, It, this.onStart), t[b] = void 0, this) : this;
  }
}, kr = {
  getImageURL: function(t) {
    var i = this.options.url;
    return Pt(i) ? i = t.getAttribute(i) : A(i) ? i = i.call(this, t) : i = "", i;
  },
  enforceFocus: function() {
    var t = this;
    this.clearEnforceFocus(), v(document, ii, this.onFocusin = function(i) {
      var e = t.viewer, r = i.target;
      r !== document && r !== e && !e.contains(r) && (r.getAttribute("tabindex") === null || r.getAttribute("aria-modal") !== "true") && e.focus();
    });
  },
  clearEnforceFocus: function() {
    this.onFocusin && (N(document, ii, this.onFocusin), this.onFocusin = null);
  },
  open: function() {
    var t = this.body;
    m(t, ti), t.style.paddingRight = "".concat(this.scrollbarWidth + (parseFloat(this.initialBodyComputedPaddingRight) || 0), "px");
  },
  close: function() {
    var t = this.body;
    E(t, ti), t.style.paddingRight = this.initialBodyPaddingRight;
  },
  shown: function() {
    var t = this.element, i = this.options, e = this.viewer;
    this.fulled = !0, this.isShown = !0, this.render(), this.bind(), this.showing = !1, i.focus && (e.focus(), this.enforceFocus()), A(i.shown) && v(t, ci, i.shown, {
      once: !0
    }), k(t, ci) !== !1 && this.ready && this.isShown && !this.hiding && this.view(this.index);
  },
  hidden: function() {
    var t = this.element, i = this.options, e = this.viewer;
    i.fucus && this.clearEnforceFocus(), this.fulled = !1, this.viewed = !1, this.isShown = !1, this.close(), this.unbind(), m(e, vt), e.removeAttribute("role"), e.removeAttribute("aria-labelledby"), e.removeAttribute("aria-modal"), e.setAttribute("aria-hidden", !0), this.resetList(), this.resetImage(), this.hiding = !1, this.destroyed || (A(i.hidden) && v(t, fi, i.hidden, {
      once: !0
    }), k(t, fi, null, {
      cancelable: !1
    }));
  },
  requestFullscreen: function(t) {
    var i = this.element.ownerDocument;
    if (this.fulled && !(i.fullscreenElement || i.webkitFullscreenElement || i.mozFullScreenElement || i.msFullscreenElement)) {
      var e = i.documentElement;
      e.requestFullscreen ? zt(t) ? e.requestFullscreen(t) : e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen && e.msRequestFullscreen();
    }
  },
  exitFullscreen: function() {
    var t = this.element.ownerDocument;
    this.fulled && (t.fullscreenElement || t.webkitFullscreenElement || t.mozFullScreenElement || t.msFullscreenElement) && (t.exitFullscreen ? t.exitFullscreen() : t.webkitExitFullscreen ? t.webkitExitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.msExitFullscreen && t.msExitFullscreen());
  },
  change: function(t) {
    var i = this.options, e = this.pointers, r = e[Object.keys(e)[0]];
    if (!!r) {
      var o = r.endX - r.startX, l = r.endY - r.startY;
      switch (this.action) {
        case Jt:
          this.move(o, l, t);
          break;
        case St:
          this.zoom(Cr(e), !1, t);
          break;
        case Ii: {
          this.action = "switched";
          var u = Math.abs(o);
          u > 1 && u > Math.abs(l) && (this.pointers = {}, o > 1 ? this.prev(i.loop) : o < -1 && this.next(i.loop));
          break;
        }
      }
      M(e, function(f) {
        f.startX = f.endX, f.startY = f.endY;
      });
    }
  },
  isSwitchable: function() {
    var t = this.imageData, i = this.viewerData;
    return this.length > 1 && t.x >= 0 && t.y >= 0 && t.width <= i.width && t.height <= i.height;
  }
}, jr = ot.Viewer, Pr = function(a) {
  return function() {
    return a += 1, a;
  };
}(-1), Ci = /* @__PURE__ */ function() {
  function a(t) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (hr(this, a), !t || t.nodeType !== 1)
      throw new Error("The first argument is required and must be an element.");
    this.element = t, this.options = q({}, Ke, zt(i) && i), this.action = !1, this.fading = !1, this.fulled = !1, this.hiding = !1, this.imageClicked = !1, this.imageData = {}, this.index = this.options.initialViewIndex, this.isImg = !1, this.isShown = !1, this.length = 0, this.moving = !1, this.played = !1, this.playing = !1, this.pointers = {}, this.ready = !1, this.rotating = !1, this.scaling = !1, this.showing = !1, this.timeout = !1, this.tooltipping = !1, this.viewed = !1, this.viewing = !1, this.wheeling = !1, this.zooming = !1, this.id = Pr(), this.init();
  }
  return ur(a, [{
    key: "init",
    value: function() {
      var i = this, e = this.element, r = this.options;
      if (!e[b]) {
        e[b] = this, r.focus && !r.keyboard && (r.focus = !1);
        var o = e.localName === "img", l = [];
        if (M(o ? [e] : e.querySelectorAll("img"), function(c) {
          A(r.filter) ? r.filter.call(i, c) && l.push(c) : i.getImageURL(c) && l.push(c);
        }), this.isImg = o, this.length = l.length, this.images = l, this.initBody(), Tt(document.createElement(b).style.transition) && (r.transition = !1), r.inline) {
          var u = 0, f = function() {
            if (u += 1, u === i.length) {
              var p;
              i.initializing = !1, i.delaying = {
                abort: function() {
                  clearTimeout(p);
                }
              }, p = setTimeout(function() {
                i.delaying = !1, i.build();
              }, 0);
            }
          };
          this.initializing = {
            abort: function() {
              M(l, function(p) {
                p.complete || N(p, K, f);
              });
            }
          }, M(l, function(c) {
            c.complete ? f() : v(c, K, f, {
              once: !0
            });
          });
        } else
          v(e, It, this.onStart = function(c) {
            var p = c.target;
            p.localName === "img" && (!A(r.filter) || r.filter.call(i, p)) && i.view(i.images.indexOf(p));
          });
      }
    }
  }, {
    key: "build",
    value: function() {
      if (!this.ready) {
        var i = this.element, e = this.options, r = i.parentNode, o = document.createElement("div");
        o.innerHTML = dr;
        var l = o.querySelector(".".concat(b, "-container")), u = l.querySelector(".".concat(b, "-title")), f = l.querySelector(".".concat(b, "-toolbar")), c = l.querySelector(".".concat(b, "-navbar")), p = l.querySelector(".".concat(b, "-button")), d = l.querySelector(".".concat(b, "-canvas"));
        if (this.parent = r, this.viewer = l, this.title = u, this.toolbar = f, this.navbar = c, this.button = p, this.canvas = d, this.footer = l.querySelector(".".concat(b, "-footer")), this.tooltipBox = l.querySelector(".".concat(b, "-tooltip")), this.player = l.querySelector(".".concat(b, "-player")), this.list = l.querySelector(".".concat(b, "-list")), l.id = "".concat(b).concat(this.id), u.id = "".concat(b, "Title").concat(this.id), m(u, e.title ? Qt(Array.isArray(e.title) ? e.title[0] : e.title) : vt), m(c, e.navbar ? Qt(e.navbar) : vt), Ht(p, vt, !e.button), e.keyboard && p.setAttribute("tabindex", 0), e.backdrop && (m(l, "".concat(b, "-backdrop")), !e.inline && e.backdrop !== "static" && be(d, ne, "hide")), Pt(e.className) && e.className && e.className.split(Te).forEach(function(_) {
          m(l, _);
        }), e.toolbar) {
          var y = document.createElement("ul"), I = zt(e.toolbar), T = Zt.slice(0, 3), R = Zt.slice(7, 9), F = Zt.slice(9);
          I || m(f, Qt(e.toolbar)), M(I ? e.toolbar : Zt, function(_, wt) {
            var it = I && zt(_), U = I ? Ae(wt) : _, nt = it && !Tt(_.show) ? _.show : _;
            if (!(!nt || !e.zoomable && T.indexOf(U) !== -1 || !e.rotatable && R.indexOf(U) !== -1 || !e.scalable && F.indexOf(U) !== -1)) {
              var ct = it && !Tt(_.size) ? _.size : _, Dt = it && !Tt(_.click) ? _.click : _, W = document.createElement("li");
              e.keyboard && W.setAttribute("tabindex", 0), W.setAttribute("role", "button"), m(W, "".concat(b, "-").concat(U)), A(Dt) || be(W, ne, U), j(nt) && m(W, Qt(nt)), ["small", "large"].indexOf(ct) !== -1 ? m(W, "".concat(b, "-").concat(ct)) : U === "play" && m(W, "".concat(b, "-large")), A(Dt) && v(W, It, Dt), y.appendChild(W);
            }
          }), f.appendChild(y);
        } else
          m(f, vt);
        if (!e.rotatable) {
          var V = f.querySelectorAll('li[class*="rotate"]');
          m(V, kt), M(V, function(_) {
            f.appendChild(_);
          });
        }
        if (e.inline)
          m(p, gr), J(l, {
            zIndex: e.zIndexInline
          }), window.getComputedStyle(r).position === "static" && J(r, {
            position: "relative"
          }), r.insertBefore(l, i.nextSibling);
        else {
          m(p, fr), m(l, ve), m(l, te), m(l, vt), J(l, {
            zIndex: e.zIndex
          });
          var L = e.container;
          Pt(L) && (L = i.ownerDocument.querySelector(L)), L || (L = this.body), L.appendChild(l);
        }
        if (e.inline && (this.render(), this.bind(), this.isShown = !0), this.ready = !0, A(e.ready) && v(i, hi, e.ready, {
          once: !0
        }), k(i, hi) === !1) {
          this.ready = !1;
          return;
        }
        this.ready && e.inline && this.view(this.index);
      }
    }
  }], [{
    key: "noConflict",
    value: function() {
      return window.Viewer = jr, a;
    }
  }, {
    key: "setDefaults",
    value: function(i) {
      q(Ke, zt(i) && i);
    }
  }]), a;
}();
q(Ci.prototype, xr, Or, Sr, zr, kr);
const Hr = "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTMwNC4xMjggNDU2LjE5MmM0OC42NCAwIDg4LjA2NC0zOS40MjQgODguMDY0LTg4LjA2NHMtMzkuNDI0LTg4LjA2NC04OC4wNjQtODguMDY0LTg4LjA2NCAzOS40MjQtODguMDY0IDg4LjA2NCAzOS40MjQgODguMDY0IDg4LjA2NCA4OC4wNjR6bTAtMTE2LjIyNGMxNS4zNiAwIDI4LjE2IDEyLjI4OCAyOC4xNiAyOC4xNnMtMTIuMjg4IDI4LjE2LTI4LjE2IDI4LjE2LTI4LjE2LTEyLjI4OC0yOC4xNi0yOC4xNiAxMi4yODgtMjguMTYgMjguMTYtMjguMTZ6IiBmaWxsPSIjZTZlNmU2Ii8+PHBhdGggZD0iTTg4Ny4yOTYgMTU5Ljc0NEgxMzYuNzA0Qzk2Ljc2OCAxNTkuNzQ0IDY0IDE5MiA2NCAyMzIuNDQ4djU1OS4xMDRjMCAzOS45MzYgMzIuMjU2IDcyLjcwNCA3Mi43MDQgNzIuNzA0aDE5OC4xNDRMNTAwLjIyNCA2ODguNjRsLTM2LjM1Mi0yMjIuNzIgMTYyLjMwNC0xMzAuNTYtNjEuNDQgMTQzLjg3MiA5Mi42NzIgMjE0LjAxNi0xMDUuNDcyIDE3MS4wMDhoMzM1LjM2QzkyNy4yMzIgODY0LjI1NiA5NjAgODMyIDk2MCA3OTEuNTUyVjIzMi40NDhjMC0zOS45MzYtMzIuMjU2LTcyLjcwNC03Mi43MDQtNzIuNzA0em0tMTM4Ljc1MiA3MS42OHYuNTEySDg1Ny42YzE2LjM4NCAwIDMwLjIwOCAxMy4zMTIgMzAuMjA4IDMwLjIwOHYzOTkuODcyTDY3My4yOCA0MDguMDY0bDc1LjI2NC0xNzYuNjR6TTMwNC42NCA3OTIuMDY0SDE2NS44ODhjLTE2LjM4NCAwLTMwLjIwOC0xMy4zMTItMzAuMjA4LTMwLjIwOHYtOS43MjhsMTM4Ljc1Mi0xNjQuMzUyIDEwNC45NiAxMjQuNDE2LTc0Ljc1MiA3OS44NzJ6bTgxLjkyLTM1NS44NGwzNy4zNzYgMjI4Ljg2NC0uNTEyLjUxMi0xNDIuODQ4LTE2OS45ODRjLTMuMDcyLTMuNTg0LTkuMjE2LTMuNTg0LTEyLjI4OCAwTDEzNS42OCA2NTIuOFYyNjIuMTQ0YzAtMTYuMzg0IDEzLjMxMi0zMC4yMDggMzAuMjA4LTMwLjIwOGg0NzQuNjI0TDM4Ni41NiA0MzYuMjI0em01MDEuMjQ4IDMyNS42MzJjMCAxNi44OTYtMTMuMzEyIDMwLjIwOC0yOS42OTYgMzAuMjA4SDY4MC45Nmw1Ny4zNDQtOTMuMTg0LTg3LjU1Mi0yMDIuMjQgNy4xNjgtNy42OCAyMjkuODg4IDI3Mi44OTZ6IiBmaWxsPSIjZTZlNmU2Ii8+PC9zdmc+";
let Mi = !1;
class Rr {
  constructor(t) {
    z(this, "nodes");
    z(this, "tabPanel");
    z(this, "context");
    this.context = t, this.nodes = {
      wrapper: null,
      empty: null,
      imagePreloader: null,
      imageHolder: null,
      imageView: null
    }, this.tabPanel = new lr(t);
  }
  getContainer() {
    return this.nodes.wrapper;
  }
  render() {
    var t, i;
    if (!this.nodes.wrapper) {
      this.nodes.wrapper = document.createElement("div"), this.nodes.wrapper.classList.add(`${P}`, "cdx-block", "inline-image");
      const e = document.createElement("div");
      e.setAttribute("contenteditable", "true"), e.classList.add(`${P}-input`), this.nodes.wrapper.append(e), this.nodes.wrapper.append(this.renderEmpty()), this.nodes.wrapper.append(this.renderImage()), (t = this.nodes.emptyHolder) == null || t.addEventListener("click", (r) => {
        if (r == null || r.stopPropagation(), this.tabPanel.getActiveTab()) {
          this.tabPanel.hide();
          return;
        }
        this.tabPanel.showByElement(this.nodes.wrapper);
      }), (i = this.nodes.imageHolder) == null || i.addEventListener("click", (r) => {
        r == null || r.stopPropagation(), this.preview();
      }), setTimeout(() => {
        this.syncUi(), !this.context.getData().url && this.tabPanel.showByElement(this.nodes.wrapper);
      });
    }
    return this.nodes.wrapper;
  }
  syncUi() {
    var e, r, o, l, u, f, c, p;
    const t = this.context.getData();
    t.url ? ((e = this.nodes.imageHolder) == null || e.classList.remove(`${P}-hidden`), ((r = this.nodes.imageView) == null ? void 0 : r.getAttribute("src")) !== this.context.getData().url && ((o = this.nodes.imageView) == null || o.setAttribute("src", this.context.getData().url)), (l = this.nodes.emptyHolder) == null || l.classList.add(`${P}-hidden`)) : ((u = this.nodes.imageHolder) == null || u.classList.add(`${P}-hidden`), (f = this.nodes.emptyHolder) == null || f.classList.remove(`${P}-hidden`));
    const i = ["withBorder", "stretched", "withBackground"];
    (c = this.nodes.imageHolder) == null || c.classList.add(
      ...i.filter((d) => t[d] === !0).map((d) => `inline-image__picture--${d}`)
    ), (p = this.nodes.imageHolder) == null || p.classList.remove(
      ...i.filter((d) => t[d] === !1).map((d) => `inline-image__picture--${d}`)
    );
  }
  destroy() {
    var t, i;
    (t = this.nodes.wrapper) == null || t.remove(), this.nodes = {
      wrapper: null,
      input: null,
      emptyHolder: null,
      imagePreloader: null,
      imageHolder: null,
      imageView: null
    }, (i = this.tabPanel) == null || i.destroy();
  }
  getTabPanel() {
    return this.tabPanel;
  }
  renderEmpty() {
    if (this.nodes.emptyHolder)
      return this.nodes.emptyHolder;
    const t = document.createElement("div");
    t.classList.add(`${P}-empty`, `${P}-hidden`), t.dataset.mutationFree = "true";
    const i = document.createElement("span");
    i.classList.add(`${P}-empty_icon`), i.innerHTML = ge;
    const e = document.createElement("span");
    return e.classList.add(`${P}-empty_tip`), e.innerHTML = "\u6DFB\u52A0\u56FE\u7247", t.append(i), t.append(e), this.nodes.emptyHolder = t;
  }
  renderImage() {
    if (this.nodes.imageHolder)
      return this.nodes.imageHolder;
    const t = document.createElement("div");
    t.classList.add(`${P}-image`, `${P}-hidden`, "inline-image__picture"), t.dataset.mutationFree = "true";
    const i = document.createElement("img");
    return i.classList.add("image__picture__data"), i.setAttribute("src", this.context.getData().url), i.dataset.mutationFree = "true", t.append(i), Mi || (Mi = !0, document.addEventListener("error", (e) => {
      var l;
      let r = e.target;
      (r.tagName || "").toLowerCase() === "img" && ((l = r == null ? void 0 : r.src) == null ? void 0 : l.length) > 0 && (r.src = Hr, r.dataset.state = "false");
    }, !0)), this.nodes.imageView = i, this.nodes.imageHolder = t;
  }
  preview() {
    if (this.nodes.imageHolder && this.context.getData().url) {
      const t = new Ci(this.nodes.imageHolder, {
        inline: !1,
        navbar: !1,
        title: !1,
        container: document.body,
        toolbar: {
          zoomIn: 4,
          zoomOut: 4,
          oneToOne: 4,
          reset: 4,
          play: {
            show: 4,
            size: "large"
          },
          rotateLeft: 4,
          rotateRight: 4,
          flipHorizontal: 4,
          flipVertical: 4
        },
        hidden() {
          t.destroy();
        }
      });
      t.show();
    }
  }
}
class Fr {
  constructor({ data: t, config: i, api: e, block: r, readOnly: o }) {
    z(this, "api");
    z(this, "block");
    z(this, "readOnly");
    z(this, "data");
    z(this, "config");
    z(this, "ui");
    this.data = Object.assign({}, t), this.config = i, this.api = e, this.block = r, this.readOnly = o;
    const l = {
      api: this.api,
      selectImage: (u) => {
        this.selectImage({ url: u }), this.ui.getTabPanel().hide();
      },
      doUpload: (u) => Promise.resolve([]),
      getData: () => this.data
    };
    this.ui = new Rr(l);
  }
  render() {
    return this.ui.render();
  }
  selectImage(t) {
    const i = Object.assign({}, this.data, t);
    Ge(i, this.data) || (this.data = i, this.ui.syncUi(), this.block.dispatchChange());
  }
  applyTune(t, i) {
    const e = Object.assign({}, this.data, { [`${t}`]: i });
    Ge(e, this.data) || (this.data = e, this.ui.syncUi(), this.block.dispatchChange());
  }
  save() {
    return this.data;
  }
  validate() {
    var t;
    return !!((t = this.data.url) != null && t.trim());
  }
  renderSettings() {
    return [
      {
        icon: nr,
        label: "With border",
        toggle: "withBorder",
        isActive: this.data.withBorder,
        onActivate: () => {
          this.applyTune("withBorder", !this.data.withBorder);
        }
      },
      {
        icon: rr,
        label: "Stretch image",
        toggle: "stretched",
        isActive: this.data.stretched,
        onActivate: () => {
          this.block.stretched = !this.data.stretched, this.applyTune("stretched", !this.data.stretched);
        }
      },
      {
        icon: ir,
        label: "With background",
        toggle: "withBackground",
        isActive: this.data.withBackground,
        onActivate: () => {
          this.applyTune("withBackground", !this.data.withBackground);
        }
      },
      {
        icon: ge,
        label: "Pop",
        onActivate: (t, i) => {
          var r;
          this.api.toolbar.close();
          const e = (r = this.ui) == null ? void 0 : r.getContainer();
          e && setTimeout(() => this.ui.getTabPanel().showByElement(e), 100);
        }
      }
    ];
  }
  destroy() {
    this.ui.destroy();
  }
  onPaste(t) {
    switch (t.type) {
      case "tag":
        this.selectImage({ url: t.detail.data.src });
        break;
      case "pattern":
        this.selectImage({ url: t.detail.data });
        break;
    }
  }
  static get pasteConfig() {
    return {
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|webp)$/i
      },
      tags: ["img"],
      files: {
        mimeTypes: ["image/*"]
      }
    };
  }
  static get toolbox() {
    return {
      title: "image",
      icon: ge
    };
  }
  static get isReadOnlySupported() {
    return !0;
  }
  rendered() {
    this.block.stretched = !!this.data.stretched;
  }
}
export {
  Fr as default
};
