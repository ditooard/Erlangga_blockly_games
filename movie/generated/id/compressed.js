// Automatically generated file.  Do not edit!

"use strict";
var b,
  g = { g: {} };
g.g.global = (function () {
  return "object" === typeof self
    ? self
    : "object" === typeof window
    ? window
    : "object" === typeof global
    ? global
    : this;
})();
g.h = {};
g.g.global.Blockly || (g.g.global.Blockly = {});
g.g.global.Blockly.Msg || (g.g.global.Blockly.Msg = g.h);
g.g.V = function (a, c) {
  this.x = a;
  this.y = c;
};
g.g.V.Le = function (a, c) {
  return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1;
};
g.g.V.Qx = function (a, c) {
  var d = a.x - c.x;
  a = a.y - c.y;
  return Math.sqrt(d * d + a * a);
};
g.g.V.aG = function (a) {
  return Math.sqrt(a.x * a.x + a.y * a.y);
};
g.g.V.Ek = function (a, c) {
  return new g.g.V(a.x - c.x, a.y - c.y);
};
g.g.V.sum = function (a, c) {
  return new g.g.V(a.x + c.x, a.y + c.y);
};
g.g.V.prototype.scale = function (a) {
  this.x *= a;
  this.y *= a;
  return this;
};
g.g.V.prototype.translate = function (a, c) {
  this.x += a;
  this.y += c;
  return this;
};
g.g.jb = {};
g.g.jb.startsWith = function (a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
g.g.jb.gv = function (a) {
  return a.length
    ? a.reduce(function (c, d) {
        return c.length < d.length ? c : d;
      }).length
    : 0;
};
g.g.jb.$D = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || g.g.jb.gv(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0][e], h = 1; h < a.length; h++) if (f != a[h][e]) return d;
    " " == f && (d = e + 1);
  }
  for (h = 1; h < a.length; h++) if ((f = a[h][e]) && " " != f) return d;
  return c;
};
g.g.jb.aE = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || g.g.jb.gv(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
      if (f != a[h].substr(-e - 1, 1)) return d;
    " " == f && (d = e + 1);
  }
  for (h = 1; h < a.length; h++)
    if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return d;
  return c;
};
g.g.jb.IA = function (a, c) {
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) a[d] = g.g.jb.MH(a[d], c);
  return a.join("\n");
};
g.g.jb.MH = function (a, c) {
  if (a.length <= c) return a;
  for (var d = a.trim().split(/\s+/), e = 0; e < d.length; e++)
    d[e].length > c && (c = d[e].length);
  e = -Infinity;
  var f = 1;
  do {
    var h = e;
    var k = a;
    a = [];
    var l = d.length / f,
      m = 1;
    for (e = 0; e < d.length - 1; e++)
      m < (e + 1.5) / l ? (m++, (a[e] = !0)) : (a[e] = !1);
    a = g.g.jb.JA(d, a, c);
    e = g.g.jb.Av(d, a, c);
    a = g.g.jb.NH(d, a);
    f++;
  } while (e > h);
  return k;
};
g.g.jb.Av = function (a, c, d) {
  for (var e = [0], f = [], h = 0; h < a.length; h++)
    (e[e.length - 1] += a[h].length),
      !0 === c[h]
        ? (e.push(0), f.push(a[h].charAt(a[h].length - 1)))
        : !1 === c[h] && e[e.length - 1]++;
  a = Math.max.apply(Math, e);
  for (h = c = 0; h < e.length; h++)
    (c -= 2 * Math.pow(Math.abs(d - e[h]), 1.5)),
      (c -= Math.pow(a - e[h], 1.5)),
      -1 != ".?!".indexOf(f[h])
        ? (c += d / 3)
        : -1 != ",;)]}".indexOf(f[h]) && (c += d / 4);
  1 < e.length && e[e.length - 1] <= e[e.length - 2] && (c += 0.5);
  return c;
};
g.g.jb.JA = function (a, c, d) {
  for (var e = g.g.jb.Av(a, c, d), f, h = 0; h < c.length - 1; h++)
    if (c[h] != c[h + 1]) {
      var k = [].concat(c);
      k[h] = !k[h];
      k[h + 1] = !k[h + 1];
      var l = g.g.jb.Av(a, k, d);
      l > e && ((e = l), (f = k));
    }
  return f ? g.g.jb.JA(a, f, d) : c;
};
g.g.jb.NH = function (a, c) {
  for (var d = [], e = 0; e < a.length; e++)
    d.push(a[e]), void 0 !== c[e] && d.push(c[e] ? "\n" : " ");
  return d.join("");
};
g.g.ge = function (a, c) {
  this.width = a;
  this.height = c;
};
g.g.ge.Le = function (a, c) {
  return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1;
};
g.g.style = {};
g.g.style.Wg = function (a) {
  if ("none" != g.g.style.Fy(a, "display")) return g.g.style.Dy(a);
  var c = a.style,
    d = c.display,
    e = c.visibility,
    f = c.position;
  c.visibility = "hidden";
  c.position = "absolute";
  c.display = "inline";
  var h = a.offsetWidth;
  a = a.offsetHeight;
  c.display = d;
  c.position = f;
  c.visibility = e;
  return new g.g.ge(h, a);
};
g.g.style.Dy = function (a) {
  return new g.g.ge(a.offsetWidth, a.offsetHeight);
};
g.g.style.Fy = function (a, c) {
  return (
    g.g.style.getComputedStyle(a, c) ||
    g.g.style.aF(a, c) ||
    (a.style && a.style[c])
  );
};
g.g.style.getComputedStyle = function (a, c) {
  return document.defaultView &&
    document.defaultView.getComputedStyle &&
    (a = document.defaultView.getComputedStyle(a, null))
    ? a[c] || a.getPropertyValue(c) || ""
    : "";
};
g.g.style.aF = function (a, c) {
  return a.currentStyle ? a.currentStyle[c] : null;
};
g.g.style.Mm = function (a) {
  var c = new g.g.V(0, 0);
  a = a.getBoundingClientRect();
  var d = document.documentElement;
  d = new g.g.V(
    window.pageXOffset || d.scrollLeft,
    window.pageYOffset || d.scrollTop
  );
  c.x = a.left + d.x;
  c.y = a.top + d.y;
  return c;
};
g.g.style.Ft = function () {
  var a = document.body,
    c = document.documentElement;
  return new g.g.V(a.scrollLeft || c.scrollLeft, a.scrollTop || c.scrollTop);
};
g.g.style.bv = function (a, c) {
  a.style.display = c ? "" : "none";
};
g.g.style.Wk = function () {
  return "rtl" == g.g.style.Fy(void 0, "direction");
};
g.g.style.YE = function (a) {
  var c = g.g.style.getComputedStyle(a, "borderLeftWidth"),
    d = g.g.style.getComputedStyle(a, "borderRightWidth"),
    e = g.g.style.getComputedStyle(a, "borderTopWidth");
  a = g.g.style.getComputedStyle(a, "borderBottomWidth");
  return {
    top: parseFloat(e),
    right: parseFloat(d),
    bottom: parseFloat(a),
    left: parseFloat(c),
  };
};
g.g.style.Zu = function (a, c) {
  a = g.g.style.cF(a, c);
  c.scrollLeft = a.x;
  c.scrollTop = a.y;
};
g.g.style.cF = function (a, c) {
  var d = g.g.style.Mm(a),
    e = g.g.style.Mm(c),
    f = g.g.style.YE(c),
    h = d.x - e.x - f.left;
  d = d.y - e.y - f.top;
  a = g.g.style.Dy(a);
  e = c.clientHeight - a.height;
  f = c.scrollLeft;
  var k = c.scrollTop;
  f += Math.min(h, Math.max(h - (c.clientWidth - a.width), 0));
  k += Math.min(d, Math.max(d - e, 0));
  return new g.g.V(f, k);
};
g.g.userAgent = {};
(function (a) {
  function c(e) {
    return -1 != d.indexOf(e.toUpperCase());
  }
  g.g.userAgent.raw = a;
  var d = g.g.userAgent.raw.toUpperCase();
  g.g.userAgent.yg = c("Trident") || c("MSIE");
  g.g.userAgent.Co = c("Edge");
  g.g.userAgent.bC = c("JavaFX");
  g.g.userAgent.Zr = c("WebKit") && !g.g.userAgent.Co;
  g.g.userAgent.Go =
    c("Gecko") && !g.g.userAgent.Zr && !g.g.userAgent.yg && !g.g.userAgent.Co;
  g.g.userAgent.Al = c("Android");
  g.g.userAgent.ck = c("iPad");
  g.g.userAgent.gw = c("iPod");
  g.g.userAgent.fw = c("iPhone") && !g.g.userAgent.ck && !g.g.userAgent.gw;
  g.g.userAgent.oC = c("Macintosh");
  g.g.userAgent.$C =
    g.g.userAgent.ck || (g.g.userAgent.Al && !c("Mobile")) || c("Silk");
  g.g.userAgent.wC =
    !g.g.userAgent.$C &&
    (g.g.userAgent.gw || g.g.userAgent.fw || g.g.userAgent.Al || c("IEMobile"));
})((g.g.global.navigator && g.g.global.navigator.userAgent) || "");
g.g.qG = function (a) {
  a.preventDefault();
  a.stopPropagation();
};
g.g.$p = function (a) {
  return (
    "textarea" == a.target.type ||
    "text" == a.target.type ||
    "number" == a.target.type ||
    "email" == a.target.type ||
    "password" == a.target.type ||
    "search" == a.target.type ||
    "tel" == a.target.type ||
    "url" == a.target.type ||
    a.target.isContentEditable
  );
};
g.g.Oe = function (a) {
  var c = new g.g.V(0, 0),
    d = a.getAttribute("x");
  d && (c.x = parseInt(d, 10));
  if ((d = a.getAttribute("y"))) c.y = parseInt(d, 10);
  if ((d = (d = a.getAttribute("transform")) && d.match(g.g.Oe.sD)))
    (c.x += Number(d[1])), d[3] && (c.y += Number(d[3]));
  (a = a.getAttribute("style")) &&
    -1 < a.indexOf("translate") &&
    (a = a.match(g.g.Oe.tD)) &&
    ((c.x += Number(a[1])), a[3] && (c.y += Number(a[3])));
  return c;
};
g.g.Km = function (a) {
  for (var c = 0, d = 0; a; ) {
    var e = g.g.Oe(a);
    c += e.x;
    d += e.y;
    if (
      -1 !=
      (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
    )
      break;
    a = a.parentNode;
  }
  return new g.g.V(c, d);
};
g.g.Oe.sD = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*)?/;
g.g.Oe.tD =
  /transform:\s*translate(?:3d)?\(\s*([-+\d.e]+)\s*px([ ,]\s*([-+\d.e]+)\s*px)?/;
g.g.lj = function (a) {
  return a.ctrlKey && g.g.userAgent.oC ? !0 : 2 == a.button;
};
g.g.nn = function (a, c, d) {
  var e = c.createSVGPoint();
  e.x = a.clientX;
  e.y = a.clientY;
  d || (d = c.getScreenCTM().inverse());
  return e.matrixTransform(d);
};
g.g.Cy = function (a) {
  switch (a.deltaMode) {
    case 0:
      return { x: a.deltaX, y: a.deltaY };
    case 1:
      return { x: a.deltaX * g.kw, y: a.deltaY * g.kw };
    case 2:
      return { x: a.deltaX * g.sw, y: a.deltaY * g.sw };
  }
};
g.g.zH = function (a) {
  return g.g.uv(a, !0);
};
g.g.nc = function (a) {
  if ("string" != typeof a) return a;
  a = g.g.uv(a, !1);
  return a.length ? a[0] : "";
};
g.g.ix = function (a) {
  for (var c = g.h, d = a.match(/%{BKY_[A-Z]\w*}/gi), e = 0; e < d.length; e++)
    void 0 == c[d[e].toUpperCase().slice(6, -1)] &&
      console.log("WARNING: No message string for " + d[e] + " in " + a);
};
g.g.uv = function (a, c) {
  var d = [],
    e = a.split("");
  e.push("");
  var f = 0;
  a = [];
  for (var h = null, k = 0; k < e.length; k++) {
    var l = e[k];
    0 == f
      ? "%" == l
        ? ((l = a.join("")) && d.push(l), (a.length = 0), (f = 1))
        : a.push(l)
      : 1 == f
      ? "%" == l
        ? (a.push(l), (f = 0))
        : c && "0" <= l && "9" >= l
        ? ((f = 2), (h = l), (l = a.join("")) && d.push(l), (a.length = 0))
        : "{" == l
        ? (f = 3)
        : (a.push("%", l), (f = 0))
      : 2 == f
      ? "0" <= l && "9" >= l
        ? (h += l)
        : (d.push(parseInt(h, 10)), k--, (f = 0))
      : 3 == f &&
        ("" == l
          ? (a.splice(0, 0, "%{"), k--, (f = 0))
          : "}" != l
          ? a.push(l)
          : ((f = a.join("")),
            /[A-Z]\w*/i.test(f)
              ? ((l = f.toUpperCase()),
                (l = g.g.jb.startsWith(l, "BKY_") ? l.substring(4) : null) &&
                l in g.h
                  ? ((f = g.h[l]),
                    "string" == typeof f
                      ? Array.prototype.push.apply(d, g.g.uv(f, c))
                      : c
                      ? d.push(String(f))
                      : d.push(f))
                  : d.push("%{" + f + "}"))
              : d.push("%{" + f + "}"),
            (f = a.length = 0)));
  }
  (l = a.join("")) && d.push(l);
  c = [];
  for (k = a.length = 0; k < d.length; ++k)
    "string" == typeof d[k]
      ? a.push(d[k])
      : ((l = a.join("")) && c.push(l), (a.length = 0), c.push(d[k]));
  (l = a.join("")) && c.push(l);
  a.length = 0;
  return c;
};
g.g.Tg = function () {
  for (var a = g.g.Tg.pA.length, c = [], d = 0; 20 > d; d++)
    c[d] = g.g.Tg.pA.charAt(Math.random() * a);
  return c.join("");
};
g.g.Tg.pA =
  "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
g.g.gj = function () {
  if (void 0 !== g.g.gj.zs) return g.g.gj.zs;
  if (!g.g.global.getComputedStyle) return !1;
  var a = document.createElement("p"),
    c = "none",
    d = {
      webkitTransform: "-webkit-transform",
      OTransform: "-o-transform",
      msTransform: "-ms-transform",
      MozTransform: "-moz-transform",
      transform: "transform",
    };
  document.body.insertBefore(a, null);
  for (var e in d)
    if (void 0 !== a.style[e]) {
      a.style[e] = "translate3d(1px,1px,1px)";
      c = g.g.global.getComputedStyle(a);
      if (!c) return document.body.removeChild(a), !1;
      c = c.getPropertyValue(d[e]);
    }
  document.body.removeChild(a);
  g.g.gj.zs = "none" !== c;
  return g.g.gj.zs;
};
g.g.gA = function (a) {
  if ("object" != typeof document)
    throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
  if ("complete" == document.readyState) a();
  else
    var c = setInterval(function () {
      "complete" == document.readyState && (clearInterval(c), a());
    }, 10);
};
g.g.lF = function () {
  var a = g.g.style.Ft();
  return {
    right: document.documentElement.clientWidth + a.x,
    bottom: document.documentElement.clientHeight + a.y,
    top: a.y,
    left: a.x,
  };
};
g.g.cp = function (a, c) {
  c = a.indexOf(c);
  if (-1 == c) return !1;
  a.splice(c, 1);
  return !0;
};
g.g.gF = function () {
  var a = document.documentElement,
    c = window;
  return g.g.userAgent.yg && c.pageYOffset != a.scrollTop
    ? new g.g.V(a.scrollLeft, a.scrollTop)
    : new g.g.V(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop);
};
g.g.rt = function (a, c) {
  var d = Object.create(null),
    e = p(a, !0);
  c && (a = q(a)) && ((a = e.indexOf(a)), e.splice(a, e.length - a));
  for (a = 0; (c = e[a]); a++) d[c.type] ? d[c.type]++ : (d[c.type] = 1);
  return d;
};
g.g.eH = function (a, c) {
  var d = c.x;
  c = c.y;
  var e = aa(a).getBoundingClientRect();
  d = new g.g.V(d - e.left, c - e.top);
  c = g.g.Km(a.kb);
  return g.g.V.Ek(d, c).scale(1 / a.scale);
};
g.Touch = {};
g.Touch.Jw =
  "ontouchstart" in g.g.global ||
  !!(
    g.g.global.document &&
    document.documentElement &&
    "ontouchstart" in document.documentElement
  ) ||
  !(
    !g.g.global.navigator ||
    (!g.g.global.navigator.maxTouchPoints &&
      !g.g.global.navigator.msMaxTouchPoints)
  );
g.Touch.Tn = null;
g.Touch.Nf = {};
g.g.global.PointerEvent
  ? (g.Touch.Nf = {
      mousedown: ["pointerdown"],
      mouseenter: ["pointerenter"],
      mouseleave: ["pointerleave"],
      mousemove: ["pointermove"],
      mouseout: ["pointerout"],
      mouseover: ["pointerover"],
      mouseup: ["pointerup", "pointercancel"],
      touchend: ["pointerup"],
      touchcancel: ["pointercancel"],
    })
  : g.Touch.Jw &&
    (g.Touch.Nf = {
      mousedown: ["touchstart"],
      mousemove: ["touchmove"],
      mouseup: ["touchend", "touchcancel"],
    });
g.eq = 0;
g.ZF = function (a, c) {
  g.Zh();
  (a.changedTouches && 1 != a.changedTouches.length) ||
    (g.eq = setTimeout(function () {
      a.changedTouches &&
        ((a.button = 2),
        (a.clientX = a.changedTouches[0].clientX),
        (a.clientY = a.changedTouches[0].clientY));
      c && ba(c, a);
    }, g.lC));
};
g.Zh = function () {
  g.eq && (clearTimeout(g.eq), (g.eq = 0));
};
g.Touch.Dh = function () {
  g.Touch.Tn = null;
};
g.Touch.hv = function (a) {
  return !g.Touch.QF(a) || g.Touch.WD(a);
};
g.Touch.Lp = function (a) {
  return void 0 != a.pointerId
    ? a.pointerId
    : a.changedTouches &&
      a.changedTouches[0] &&
      void 0 !== a.changedTouches[0].identifier &&
      null !== a.changedTouches[0].identifier
    ? a.changedTouches[0].identifier
    : "mouse";
};
g.Touch.WD = function (a) {
  var c = g.Touch.Lp(a);
  return void 0 !== g.Touch.Tn && null !== g.Touch.Tn
    ? g.Touch.Tn == c
    : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type
    ? ((g.Touch.Tn = c), !0)
    : !1;
};
g.Touch.gH = function (a) {
  if (g.g.jb.startsWith(a.type, "touch")) {
    var c = a.changedTouches[0];
    a.clientX = c.clientX;
    a.clientY = c.clientY;
  }
};
g.Touch.QF = function (a) {
  return (
    g.g.jb.startsWith(a.type, "touch") ||
    g.g.jb.startsWith(a.type, "mouse") ||
    g.g.jb.startsWith(a.type, "pointer")
  );
};
g.Touch.cq = function (a) {
  return (
    g.g.jb.startsWith(a.type, "touch") || g.g.jb.startsWith(a.type, "pointer")
  );
};
g.Touch.nH = function (a) {
  var c = [];
  if (a.changedTouches)
    for (var d = 0; d < a.changedTouches.length; d++)
      c[d] = {
        type: a.type,
        changedTouches: [a.changedTouches[d]],
        target: a.target,
        stopPropagation: function () {
          a.stopPropagation();
        },
        preventDefault: function () {
          a.preventDefault();
        },
      };
  else c.push(a);
  return c;
};
g.g.o = {};
g.g.o.Yl = "http://www.w3.org/2000/svg";
g.g.o.ak = "http://www.w3.org/1999/xhtml";
g.g.o.ef = "http://www.w3.org/1999/xlink";
g.g.o.Node = {
  ELEMENT_NODE: 1,
  TEXT_NODE: 3,
  COMMENT_NODE: 8,
  DOCUMENT_POSITION_CONTAINED_BY: 16,
};
g.g.o.Mi = null;
g.g.o.xs = 0;
g.g.o.K = function (a, c, d) {
  a = document.createElementNS(g.g.o.Yl, a);
  for (var e in c) a.setAttribute(e, c[e]);
  document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
  d && d.appendChild(a);
  return a;
};
g.g.o.rb = function (a, c) {
  var d = a.getAttribute("class") || "";
  if (-1 != (" " + d + " ").indexOf(" " + c + " ")) return !1;
  d && (d += " ");
  a.setAttribute("class", d + c);
  return !0;
};
g.g.o.Sb = function (a, c) {
  var d = a.getAttribute("class");
  if (-1 == (" " + d + " ").indexOf(" " + c + " ")) return !1;
  d = d.split(/\s+/);
  for (var e = 0; e < d.length; e++)
    (d[e] && d[e] != c) || (d.splice(e, 1), e--);
  d.length ? a.setAttribute("class", d.join(" ")) : a.removeAttribute("class");
  return !0;
};
g.g.o.Py = function (a, c) {
  return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + c + " ");
};
g.g.o.removeNode = function (a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
};
g.g.o.fj = function (a, c) {
  var d = c.nextSibling;
  c = c.parentNode;
  if (!c) throw Error("Reference node has no parent.");
  d ? c.insertBefore(a, d) : c.appendChild(a);
};
g.g.o.containsNode = function (a, c) {
  return !!(
    a.compareDocumentPosition(c) & g.g.o.Node.DOCUMENT_POSITION_CONTAINED_BY
  );
};
g.g.o.Gn = function (a, c) {
  a.style.transform = c;
  a.style["-webkit-transform"] = c;
};
g.g.o.Mn = function () {
  g.g.o.xs++;
  g.g.o.Mi || (g.g.o.Mi = {});
};
g.g.o.Nn = function () {
  g.g.o.xs--;
  g.g.o.xs || (g.g.o.Mi = null);
};
g.g.o.Nm = function (a) {
  var c = a.textContent + "\n" + a.className.baseVal,
    d;
  if (g.g.o.Mi && (d = g.g.o.Mi[c])) return d;
  try {
    d =
      g.g.userAgent.yg || g.g.userAgent.Co
        ? a.getBBox().width
        : a.getComputedTextLength();
  } catch (e) {
    return 8 * a.textContent.length;
  }
  g.g.o.Mi && (g.g.o.Mi[c] = d);
  return d;
};
g.nk = function (a) {
  this.s = a;
  this.oe = new g.La(a, !0, !0, "blocklyMainWorkspaceScrollbar");
  this.xe = new g.La(a, !1, !0, "blocklyMainWorkspaceScrollbar");
  this.qm = g.g.o.K(
    "rect",
    { height: g.La.xc, width: g.La.xc, class: "blocklyScrollbarBackground" },
    null
  );
  g.g.o.fj(this.qm, a.zf);
};
g.nk.prototype.Mb = null;
g.nk.prototype.I = function () {
  g.g.o.removeNode(this.qm);
  this.Mb = this.s = this.qm = null;
  this.oe.I();
  this.oe = null;
  this.xe.I();
  this.xe = null;
};
g.nk.prototype.resize = function () {
  var a = this.s.jc();
  if (a) {
    var c = !1,
      d = !1;
    this.Mb &&
    this.Mb.vb == a.vb &&
    this.Mb.Cb == a.Cb &&
    this.Mb.Fc == a.Fc &&
    this.Mb.qc == a.qc
      ? ((this.Mb &&
          this.Mb.jf == a.jf &&
          this.Mb.gc == a.gc &&
          this.Mb.Hc == a.Hc) ||
          (c = !0),
        (this.Mb &&
          this.Mb.Ld == a.Ld &&
          this.Mb.pc == a.pc &&
          this.Mb.tc == a.tc) ||
          (d = !0))
      : (d = c = !0);
    c && this.oe.resize(a);
    d && this.xe.resize(a);
    (this.Mb && this.Mb.vb == a.vb && this.Mb.qc == a.qc) ||
      this.qm.setAttribute("x", this.xe.pd.x);
    (this.Mb && this.Mb.Cb == a.Cb && this.Mb.Fc == a.Fc) ||
      this.qm.setAttribute("y", this.oe.pd.y);
    this.Mb = a;
  }
};
g.nk.prototype.set = function (a, c) {
  var d = {};
  a *= this.oe.Oc;
  c *= this.xe.Oc;
  var e = this.xe.We,
    f = a / this.oe.We;
  d.x = isNaN(f) ? 0 : f;
  e = c / e;
  d.y = isNaN(e) ? 0 : e;
  this.s.ki(d);
  da(this.oe, a);
  da(this.xe, c);
};
g.La = function (a, c, d, e) {
  this.s = a;
  this.al = d || !1;
  this.cj = c;
  this.Mb = null;
  this.rm(e);
  this.pd = new g.g.V(0, 0);
  a = g.La.xc;
  c
    ? (this.Rc.setAttribute("height", a),
      this.jg.setAttribute("height", a),
      this.Xd.setAttribute("height", a - 5),
      this.Xd.setAttribute("y", 2.5),
      (this.dn = "width"),
      (this.Rz = "x"))
    : (this.Rc.setAttribute("width", a),
      this.jg.setAttribute("width", a),
      this.Xd.setAttribute("width", a - 5),
      this.Xd.setAttribute("x", 2.5),
      (this.dn = "height"),
      (this.Rz = "y"));
  this.Mz = g.ca(this.Rc, "mousedown", this, this.BG);
  this.Nz = g.ca(this.Xd, "mousedown", this, this.CG);
};
b = g.La.prototype;
b.Hu = new g.g.V(0, 0);
b.rA = 0;
b.We = 0;
b.Nh = 0;
b.Qm = 0;
b.Xh = !0;
b.Pi = !0;
g.La.xc = 15;
g.Touch.Jw && (g.La.xc = 25);
g.La.bG = function (a, c) {
  return a &&
    c &&
    a.vb == c.vb &&
    a.Cb == c.Cb &&
    a.gc == c.gc &&
    a.pc == c.pc &&
    a.Fc == c.Fc &&
    a.qc == c.qc &&
    a.jf == c.jf &&
    a.Ld == c.Ld &&
    a.Hc == c.Hc &&
    a.tc == c.tc
    ? !0
    : !1;
};
g.La.prototype.I = function () {
  ea();
  g.Ua(this.Mz);
  this.Mz = null;
  g.Ua(this.Nz);
  this.Nz = null;
  g.g.o.removeNode(this.jg);
  this.Rc = this.H = this.jg = null;
  this.Xd && (this.s.Zb.unsubscribe(this.Xd), (this.Xd = null));
  this.s = null;
};
function da(a, c) {
  a.Qm = c;
  a.Xd.setAttribute(a.Rz, a.Qm);
}
function ha(a, c) {
  a.We = c;
  a.jg.setAttribute(a.dn, a.We);
  a.Rc.setAttribute(a.dn, a.We);
}
g.nk.prototype.Aj = function (a) {
  this.oe.Aj(a);
  this.xe.Aj(a);
};
function ia(a, c, d) {
  a.pd.x = c;
  a.pd.y = d;
  g.g.o.Gn(
    a.jg,
    "translate(" + (a.pd.x + a.Hu.x) + "px," + (a.pd.y + a.Hu.y) + "px)"
  );
}
b = g.La.prototype;
b.resize = function (a) {
  if (!a && ((a = this.s.jc()), !a)) return;
  g.La.bG(a, this.Mb) ||
    ((this.Mb = a), this.cj ? ja(this, a) : ka(this, a), la(this));
};
function ja(a, c) {
  var d = c.vb - 1;
  a.al && (d -= g.La.xc);
  ha(a, Math.max(0, d));
  d = c.qc + 0.5;
  a.al && a.s.G && (d += g.La.xc);
  ia(a, d, c.Fc + c.Cb - g.La.xc - 0.5);
  ma(a, c);
}
function ma(a, c) {
  a.al || a.Yb(a.We < c.jf);
  a.Oc = a.We / c.jf;
  if (-Infinity == a.Oc || Infinity == a.Oc || isNaN(a.Oc)) a.Oc = 0;
  a.Nh = Math.max(0, c.vb * a.Oc);
  a.Xd.setAttribute(a.dn, a.Nh);
  da(a, na(a, (c.gc - c.Hc) * a.Oc));
}
function ka(a, c) {
  var d = c.Cb - 1;
  a.al && (d -= g.La.xc);
  ha(a, Math.max(0, d));
  d = c.qc + 0.5;
  a.s.G || (d += c.vb - g.La.xc - 1);
  ia(a, d, c.Fc + 0.5);
  oa(a, c);
}
function oa(a, c) {
  a.al || a.Yb(a.We < c.Ld);
  a.Oc = a.We / c.Ld;
  if (-Infinity == a.Oc || Infinity == a.Oc || isNaN(a.Oc)) a.Oc = 0;
  a.Nh = Math.max(0, c.Cb * a.Oc);
  a.Xd.setAttribute(a.dn, a.Nh);
  da(a, na(a, (c.pc - c.tc) * a.Oc));
}
b.rm = function (a) {
  var c = "blocklyScrollbar" + (this.cj ? "Horizontal" : "Vertical");
  a && (c += " " + a);
  this.jg = g.g.o.K("svg", { class: c }, null);
  this.H = g.g.o.K("g", {}, this.jg);
  this.Rc = g.g.o.K("rect", { class: "blocklyScrollbarBackground" }, this.H);
  a = Math.floor((g.La.xc - 5) / 2);
  this.Xd = g.g.o.K(
    "rect",
    { class: "blocklyScrollbarHandle", rx: a, ry: a },
    this.H
  );
  this.s.Zb.subscribe(this.Xd, "scrollbar", "fill");
  this.s.Zb.subscribe(this.Xd, "scrollbarOpacity", "fill-opacity");
  g.g.o.fj(this.jg, r(this.s));
};
b.isVisible = function () {
  return this.Xh;
};
b.Aj = function (a) {
  var c = a != this.Pi;
  this.Pi = a;
  c && this.Xn();
};
b.Yb = function (a) {
  var c = a != this.isVisible();
  if (this.al) throw Error("Unable to toggle visibility of paired scrollbars.");
  this.Xh = a;
  c && this.Xn();
};
b.Xn = function () {
  this.Pi && this.isVisible()
    ? this.jg.setAttribute("display", "block")
    : this.jg.setAttribute("display", "none");
};
b.BG = function (a) {
  pa(this.s);
  g.Touch.Dh();
  ea();
  if (g.g.lj(a)) a.stopPropagation();
  else {
    var c = g.g.nn(a, r(this.s), qa(this.s));
    c = this.cj ? c.x : c.y;
    var d = g.g.Km(this.Xd);
    d = this.cj ? d.x : d.y;
    var e = this.Qm,
      f = 0.95 * this.Nh;
    c <= d ? (e -= f) : c >= d + this.Nh && (e += f);
    da(this, na(this, e));
    la(this);
    a.stopPropagation();
    a.preventDefault();
  }
};
b.CG = function (a) {
  pa(this.s);
  ea();
  g.g.lj(a)
    ? a.stopPropagation()
    : ((this.oH = this.Qm),
      ra(this.s),
      (this.rA = this.cj ? a.clientX : a.clientY),
      (g.La.Ue = g.ca(document, "mouseup", this, this.KG)),
      (g.La.hg = g.ca(document, "mousemove", this, this.HG)),
      a.stopPropagation(),
      a.preventDefault());
};
b.HG = function (a) {
  da(this, na(this, this.oH + ((this.cj ? a.clientX : a.clientY) - this.rA)));
  la(this);
};
b.KG = function () {
  sa(this.s);
  g.Touch.Dh();
  ea();
};
function ea() {
  g.wc(!0);
  g.La.Ue && (g.Ua(g.La.Ue), (g.La.Ue = null));
  g.La.hg && (g.Ua(g.La.hg), (g.La.hg = null));
}
function na(a, c) {
  return (c = 0 >= c || isNaN(c) || a.We < a.Nh ? 0 : Math.min(c, a.We - a.Nh));
}
function la(a) {
  var c = a.Qm / a.We;
  isNaN(c) && (c = 0);
  var d = {};
  a.cj ? (d.x = c) : (d.y = c);
  a.s.ki(d);
}
b.set = function (a) {
  da(this, na(this, a * this.Oc));
  la(this);
};
g.g.Rd = {};
g.g.Rd.rv = function (a) {
  return (a * Math.PI) / 180;
};
g.g.Rd.zM = function (a) {
  return (180 * a) / Math.PI;
};
g.g.Rd.zk = function (a, c, d) {
  if (d < a) {
    var e = d;
    d = a;
    a = e;
  }
  return Math.max(a, Math.min(c, d));
};
g.Bo = function () {
  this.Jc = this.Vb = null;
};
function u(a, c) {
  a.Vb = c;
  a.Jc && a.Jc.draw(a.Vb);
}
b = g.Bo.prototype;
b.Ha = function () {
  this.Jc && this.Jc.Ha();
};
b.next = function () {
  var a = this.Vb;
  if (!a) return null;
  for (
    a = a.next();
    a && a.next() && (a.Qb() == g.F.types.De || a.Qb() == g.F.types.ae);

  )
    a = a.next();
  a && u(this, a);
  return a;
};
b.Sm = function () {
  var a = this.Vb;
  if (!a) return null;
  if (a.Qb() == g.F.types.Ge || a.Qb() == g.F.types.lk) a = a.next();
  (a = a.Sm()) && u(this, a);
  return a;
};
b.lg = function () {
  var a = this.Vb;
  if (!a) return null;
  for (
    a = a.lg();
    a && a.lg() && (a.Qb() == g.F.types.De || a.Qb() == g.F.types.ae);

  )
    a = a.lg();
  a && u(this, a);
  return a;
};
b.rn = function () {
  var a = this.Vb;
  if (!a) return null;
  (a = a.rn()) && a.Qb() == g.F.types.ae && (a = a.lg() || a);
  a && u(this, a);
  return a;
};
g.g.object = {};
g.g.object.X = function (a, c) {
  a.w = c.prototype;
  a.prototype = Object.create(c.prototype);
  a.prototype.constructor = a;
};
g.g.object.eg = function (a, c) {
  for (var d in c) a[d] = c[d];
};
g.g.object.values = function (a) {
  return Object.values
    ? Object.values(a)
    : Object.keys(a).map(function (c) {
        return a[c];
      });
};
g.uh = function () {
  g.uh.w.constructor.call(this);
};
g.g.object.X(g.uh, g.Bo);
g.uh.prototype.next = function () {
  return null;
};
g.uh.prototype.Sm = function () {
  return null;
};
g.uh.prototype.lg = function () {
  return null;
};
g.uh.prototype.rn = function () {
  return null;
};
g.i = {};
g.i.My = "";
g.i.Pc = !0;
g.i.Ss = 0;
g.i.wo = "create";
g.i.Bl = g.i.wo;
g.i.El = "delete";
g.i.io = g.i.El;
g.i.si = "change";
g.i.$H = g.i.si;
g.i.Sl = "move";
g.i.Jv = g.i.Sl;
g.i.Lw = "var_create";
g.i.Mw = "var_delete";
g.i.Nw = "var_rename";
g.i.$o = "ui";
g.i.to = "comment_create";
g.i.Pv = "comment_delete";
g.i.Ov = "comment_change";
g.i.uo = "comment_move";
g.i.FB = "finished_loading";
g.i.$A = [g.i.Bl, g.i.Jv, g.i.to, g.i.uo];
g.i.Hl = [];
g.i.Oa = function (a) {
  g.i.isEnabled() && (g.i.Hl.length || setTimeout(g.i.RE, 0), g.i.Hl.push(a));
};
g.i.RE = function () {
  for (
    var a = g.i.filter(g.i.Hl, !0), c = (g.i.Hl.length = 0), d;
    (d = a[c]);
    c++
  )
    if (d.Cc) {
      var e = g.Nb.tt(d.Cc);
      if (e) {
        var f = d;
        if (f.Pc)
          for (e.Nj.push(f), e.yn.length = 0; e.Nj.length > e.lw && 0 <= e.lw; )
            e.Nj.shift();
        for (var h = 0; (d = e.Cd[h]); h++) d(f);
      }
    }
};
g.i.filter = function (a, c) {
  a = a.slice();
  c || a.reverse();
  for (var d = [], e = Object.create(null), f = 0, h; (h = a[f]); f++)
    if (!h.Uk()) {
      var k = [h.type, h.Gc, h.Cc].join(" "),
        l = e[k],
        m = l ? l.event : null;
      if (!l) (e[k] = { event: h, index: f }), d.push(h);
      else if (h.type == g.i.Sl && l.index == f - 1)
        (m.sj = h.sj), (m.rj = h.rj), (m.$h = h.$h), (l.index = f);
      else if (h.type == g.i.si && h.element == m.element && h.name == m.name)
        m.newValue = h.newValue;
      else if (
        h.type != g.i.$o ||
        "click" != h.element ||
        ("commentOpen" != m.element &&
          "mutatorOpen" != m.element &&
          "warningOpen" != m.element)
      )
        (e[k] = { event: h, index: 1 }), d.push(h);
    }
  a = d.filter(function (n) {
    return !n.Uk();
  });
  c || a.reverse();
  for (f = 1; (h = a[f]); f++)
    h.type == g.i.si && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
  return a;
};
g.i.ZD = function () {
  for (var a = 0, c; (c = g.i.Hl[a]); a++) c.Pc = !1;
};
g.i.disable = function () {
  g.i.Ss++;
};
g.i.enable = function () {
  g.i.Ss--;
};
g.i.isEnabled = function () {
  return 0 == g.i.Ss;
};
g.i.cc = function () {
  return g.i.My;
};
g.i.aa = function (a) {
  g.i.My = "boolean" == typeof a ? (a ? g.g.Tg() : "") : a;
};
g.i.ty = function (a) {
  var c = [];
  a = p(a, !1);
  for (var d = 0, e; (e = a[d]); d++) c[d] = e.id;
  return c;
};
g.i.pa = function (a) {
  switch (a.type) {
    case g.i.wo:
      var c = new g.i.Ye(null);
      break;
    case g.i.El:
      c = new g.i.Ff(null);
      break;
    case g.i.si:
      c = new g.i.rh(null, "", "", "", "");
      break;
    case g.i.Sl:
      c = new g.i.zi(null);
      break;
    case g.i.Lw:
      c = new g.i.He(null);
      break;
    case g.i.Mw:
      c = new g.i.df(null);
      break;
    case g.i.Nw:
      c = new g.i.Of(null, "");
      break;
    case g.i.$o:
      c = new g.i.yd(null, "", "", "");
      break;
    case g.i.to:
      c = new g.i.ug(null);
      break;
    case g.i.Ov:
      c = new g.i.Xj(null, "", "");
      break;
    case g.i.uo:
      c = new g.i.ti(null);
      break;
    case g.i.Pv:
      c = new g.i.vg(null);
      break;
    default:
      throw Error("Unknown event type.");
  }
  c.pa(a);
  c.Cc = (void 0).id;
  return c;
};
g.i.zE = function (a) {
  if ((a.type == g.i.Sl || a.type == g.i.wo) && a.Cc) {
    var c = g.Nb.tt(a.Cc);
    if ((a = x(c, a.Gc))) {
      var d = a.getParent();
      if (d && d.isEnabled())
        for (c = p(a, !1), a = 0; (d = c[a]); a++) d.qd(!0);
      else if ((a.L || a.$) && !c.lc()) {
        do a.qd(!1), (a = q(a));
        while (a);
      }
    }
  }
};
g.jD = function () {
  var a = g.Gi.Wj.PD;
  this.KD = g.Gi.Wj.rE;
  this.QD = a;
  this.bE = Object.create(null);
};
function ta(a, c) {
  return (c = a.bE[c]) && "string" == typeof propertyValue && ta(a, c)
    ? ta(a, c)
    : c
    ? String(c)
    : null;
}
g.$l = function (a) {
  this.Jq = a;
  this.Gq = [];
  this.Eh = Object.create(null);
};
g.$l.prototype.Kp = function () {
  return this.Jq;
};
g.$l.prototype.subscribe = function (a, c, d) {
  this.Eh[c] || (this.Eh[c] = []);
  this.Eh[c].push({ element: a, propertyName: d });
  a.style[d] = (this.Jq && ta(this.Jq, c)) || "";
};
g.$l.prototype.unsubscribe = function (a) {
  if (a)
    for (var c = Object.keys(this.Eh), d = 0, e; (e = c[d]); d++) {
      for (var f = this.Eh[e], h = f.length - 1; 0 <= h; h--)
        f[h].element === a && f.splice(h, 1);
      this.Eh[e].length || delete this.Eh[e];
    }
};
g.$l.prototype.I = function () {
  this.Eh = this.Gq = this.Jq = this.od = null;
};
g.Gi = {};
g.Gi.Wj = {};
g.Gi.Wj.rE = {
  colour_blocks: { colourPrimary: "20" },
  list_blocks: { colourPrimary: "260" },
  logic_blocks: { colourPrimary: "210" },
  loop_blocks: { colourPrimary: "120" },
  math_blocks: { colourPrimary: "230" },
  procedure_blocks: { colourPrimary: "290" },
  text_blocks: { colourPrimary: "160" },
  variable_blocks: { colourPrimary: "330" },
  variable_dynamic_blocks: { colourPrimary: "310" },
  hat_blocks: { colourPrimary: "330", hat: "cap" },
};
g.Gi.Wj.PD = {
  colour_category: { colour: "20" },
  list_category: { colour: "260" },
  logic_category: { colour: "210" },
  loop_category: { colour: "120" },
  math_category: { colour: "230" },
  procedure_category: { colour: "290" },
  text_category: { colour: "160" },
  variable_category: { colour: "330" },
  variable_dynamic_category: { colour: "310" },
};
g.Gi.Wj = new g.jD();
g.i.Abstract = function () {
  this.Cc = void 0;
  this.group = g.i.cc();
  this.Pc = g.i.Pc;
};
g.i.Abstract.prototype.fb = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  return a;
};
g.i.Abstract.prototype.pa = function (a) {
  this.group = a.group;
};
g.i.Abstract.prototype.Uk = function () {
  return !1;
};
g.i.Abstract.prototype.run = function () {};
function ua(a) {
  if (a.Cc) var c = g.Nb.tt(a.Cc);
  if (!c)
    throw Error(
      "Workspace is null. Event must have been generated from real Blockly events."
    );
  return c;
}
g.i.Gg = function (a) {
  g.i.Gg.w.constructor.call(this);
  this.ni = a.va();
  this.Cc = a.v.id;
};
g.g.object.X(g.i.Gg, g.i.Abstract);
g.i.Gg.prototype.fb = function () {
  var a = g.i.Gg.w.fb.call(this);
  a.varId = this.ni;
  return a;
};
g.i.Gg.prototype.pa = function (a) {
  g.i.Gg.w.fb.call(this);
  this.ni = a.varId;
};
g.i.He = function (a) {
  a &&
    (g.i.He.w.constructor.call(this, a),
    (this.Qj = a.type),
    (this.Pj = a.name));
};
g.g.object.X(g.i.He, g.i.Gg);
g.i.He.prototype.type = g.i.Lw;
g.i.He.prototype.fb = function () {
  var a = g.i.He.w.fb.call(this);
  a.varType = this.Qj;
  a.varName = this.Pj;
  return a;
};
g.i.He.prototype.pa = function (a) {
  g.i.He.w.pa.call(this, a);
  this.Qj = a.varType;
  this.Pj = a.varName;
};
g.i.He.prototype.run = function (a) {
  var c = ua(this);
  a ? c.Md(this.Pj, this.Qj, this.ni) : c.Zf(this.ni);
};
g.i.df = function (a) {
  a &&
    (g.i.df.w.constructor.call(this, a),
    (this.Qj = a.type),
    (this.Pj = a.name));
};
g.g.object.X(g.i.df, g.i.Gg);
g.i.df.prototype.type = g.i.Mw;
g.i.df.prototype.fb = function () {
  var a = g.i.df.w.fb.call(this);
  a.varType = this.Qj;
  a.varName = this.Pj;
  return a;
};
g.i.df.prototype.pa = function (a) {
  g.i.df.w.pa.call(this, a);
  this.Qj = a.varType;
  this.Pj = a.varName;
};
g.i.df.prototype.run = function (a) {
  var c = ua(this);
  a ? c.Zf(this.ni) : c.Md(this.Pj, this.Qj, this.ni);
};
g.i.Of = function (a, c) {
  a && (g.i.Of.w.constructor.call(this, a), (this.xu = a.name), (this.qu = c));
};
g.g.object.X(g.i.Of, g.i.Gg);
g.i.Of.prototype.type = g.i.Nw;
g.i.Of.prototype.fb = function () {
  var a = g.i.Of.w.fb.call(this);
  a.oldName = this.xu;
  a.newName = this.qu;
  return a;
};
g.i.Of.prototype.pa = function (a) {
  g.i.Of.w.pa.call(this, a);
  this.xu = a.oldName;
  this.qu = a.newName;
};
g.i.Of.prototype.run = function (a) {
  var c = ua(this);
  a ? c.gi(this.ni, this.qu) : c.gi(this.ni, this.xu);
};
g.Yr = function (a) {
  this.Va = Object.create(null);
  this.v = a;
};
b = g.Yr.prototype;
b.clear = function () {
  this.Va = Object.create(null);
};
b.yq = function (a, c) {
  var d = this.Zc(c, a.type),
    e = y(this.v, !1);
  g.i.aa(!0);
  try {
    if (d && d.va() != a.va()) {
      var f = a.type;
      c != d.name && va(d, c, e);
      for (c = 0; c < e.length; c++) e[c].xq(a.va(), d.va());
      g.i.Oa(new g.i.df(a));
      this.Va[f].splice(this.Om(f).indexOf(a), 1);
    } else va(a, c, e);
  } finally {
    g.i.aa(!1);
  }
};
b.gi = function (a, c) {
  var d = this.pf(a);
  if (!d) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
  this.yq(d, c);
};
function va(a, c, d) {
  g.i.Oa(new g.i.Of(a, c));
  a.name = c;
  for (c = 0; c < d.length; c++) d[c].Nq(a);
}
b.Md = function (a, c, d) {
  var e = this.Zc(a, c);
  if (e) {
    if (d && e.va() != d)
      throw Error(
        'Variable "' +
          a +
          '" is already in use and its id is "' +
          e.va() +
          '" which conflicts with the passed in id, "' +
          d +
          '".'
      );
    return e;
  }
  if (d && this.pf(d))
    throw Error('Variable id, "' + d + '", is already in use.');
  e = d || g.g.Tg();
  c = c || "";
  e = new g.bm(this.v, a, c, e);
  a = this.Va[c] || [];
  a.push(e);
  delete this.Va[c];
  this.Va[c] = a;
  return e;
};
b.Zf = function (a) {
  var c = this.pf(a);
  if (c) {
    var d = c.name,
      e = this.Dt(a);
    a = 0;
    for (var f; (f = e[a]); a++)
      if (
        "procedures_defnoreturn" == f.type ||
        "procedures_defreturn" == f.type
      ) {
        a = z(f, "NAME");
        d = g.h.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", d).replace(
          "%2",
          a
        );
        g.alert(d);
        return;
      }
    var h = this;
    1 < e.length
      ? ((d = g.h.DELETE_VARIABLE_CONFIRMATION.replace(
          "%1",
          String(e.length)
        ).replace("%2", d)),
        g.confirm(d, function (k) {
          k && h.rp(c, e);
        }))
      : h.rp(c, e);
  } else console.warn("Can't delete non-existent variable: " + a);
};
b.rp = function (a, c) {
  var d = g.i.cc();
  d || g.i.aa(!0);
  try {
    for (var e = 0; e < c.length; e++) c[e].I(!0, !1);
    var f = this.Va[a.type];
    c = 0;
    for (var h; (h = f[c]); c++)
      if (h.va() == a.va()) {
        f.splice(c, 1);
        g.i.Oa(new g.i.df(a));
        break;
      }
  } finally {
    d || g.i.aa(!1);
  }
};
b.Zc = function (a, c) {
  if ((c = this.Va[c || ""]))
    for (var d = 0, e; (e = c[d]); d++) if (g.fe.Le(e.name, a)) return e;
  return null;
};
b.pf = function (a) {
  for (var c = Object.keys(this.Va), d = 0; d < c.length; d++)
    for (var e = c[d], f = 0, h; (h = this.Va[e][f]); f++)
      if (h.va() == a) return h;
  return null;
};
b.Om = function (a) {
  return (a = this.Va[a || ""]) ? a.slice() : [];
};
b.Ct = function (a) {
  var c = [];
  a && a.ci && (c = Object.keys(a.ci.Va));
  a = Object.keys(this.Va).concat(c);
  c = !1;
  for (var d = 0; d < a.length; d++) "" == a[d] && (c = !0);
  c || a.push("");
  return a;
};
b.Ug = function () {
  var a = [],
    c;
  for (c in this.Va) a = a.concat(this.Va[c]);
  return a;
};
b.Dt = function (a) {
  for (var c = [], d = y(this.v, !1), e = 0; e < d.length; e++) {
    var f = d[e].Xg();
    if (f) for (var h = 0; h < f.length; h++) f[h].va() == a && c.push(d[e]);
  }
  return c;
};
g.Nb = function (a) {
  this.id = g.g.Tg();
  g.Nb.cm[this.id] = this;
  this.options = a || {};
  this.G = !!this.options.G;
  this.Od = !!this.options.Od;
  this.Ia = this.options.Ia;
  this.vl = [];
  this.Kq = [];
  this.mp = Object.create(null);
  this.Cd = [];
  this.Nj = [];
  this.yn = [];
  this.ss = Object.create(null);
  this.oh = Object.create(null);
  this.Va = new g.Yr(this);
  this.ci = null;
  this.cb = new g.Bo();
  this.fc = new g.uh();
  this.Zb = this.options.Rb
    ? this.options.Rb.Zb
    : new g.$l(this.options.yH || g.Gi.Wj);
  this.Zb.Gq.push(this);
};
b = g.Nb.prototype;
b.ga = !1;
b.Qt = !1;
b.lw = 1024;
b.op = null;
b.$u = function (a) {
  this.cb = a;
};
b.lA = function (a) {
  this.fc = a;
};
b.Kp = function () {
  return this.Zb.Kp();
};
b.I = function () {
  this.Cd.length = 0;
  this.clear();
  delete g.Nb.cm[this.id];
  if (this.Zb) {
    var a = this.Zb,
      c = a.Gq.indexOf(this);
    if (0 > c)
      throw Error(
        "Cannot unsubscribe a workspace that hasn't been subscribed."
      );
    a.Gq.splice(c, 1);
    this.Zb.unsubscribe(this.Rc);
    this.options.Rb || (this.Zb.I(), (this.Zb = null));
  }
};
g.Nb.Bw = 3;
b = g.Nb.prototype;
b.og = function (a, c) {
  a = a.Sa();
  c = c.Sa();
  return (
    a.y +
    g.Nb.prototype.og.offset * a.x -
    (c.y + g.Nb.prototype.og.offset * c.x)
  );
};
function wa(a, c) {
  if (!g.g.cp(a.vl, c))
    throw Error("Block not present in workspace's list of top-most blocks.");
}
function A(a, c) {
  var d = [].concat(a.vl);
  c &&
    1 < d.length &&
    ((a.og.offset = Math.sin(g.g.Rd.rv(g.Nb.Bw))),
    a.G && (a.og.offset *= -1),
    d.sort(a.og));
  return d;
}
function xa(a, c) {
  var d = [].concat(a.Kq);
  c &&
    1 < d.length &&
    ((a.og.offset = Math.sin(g.g.Rd.rv(g.Nb.Bw))),
    a.G && (a.og.offset *= -1),
    d.sort(a.og));
  return d;
}
function y(a, c) {
  if (c) {
    a = A(a, !0);
    c = [];
    for (var d = 0; d < a.length; d++) c.push.apply(c, p(a[d], !0));
  } else
    for (c = A(a, !1), d = 0; d < c.length; d++) c.push.apply(c, c[d].Kh(!1));
  return c.filter(function (e) {
    return !e.Th();
  });
}
b.clear = function () {
  this.Qt = !0;
  try {
    var a = g.i.cc();
    for (a || g.i.aa(!0); this.vl.length; ) this.vl[0].I();
    for (; this.Kq.length; ) this.Kq[this.Kq.length - 1].I();
    a || g.i.aa(!1);
    this.Va.clear();
    this.ci && this.ci.clear();
  } finally {
    this.Qt = !1;
  }
};
b.gi = function (a, c) {
  this.Va.gi(a, c);
};
b.Md = function (a, c, d) {
  return this.Va.Md(a, c, d);
};
b.Dt = function (a) {
  return this.Va.Dt(a);
};
b.Zf = function (a) {
  this.Va.Zf(a);
};
b.rp = function (a, c) {
  this.Va.rp(a, c);
};
b.Zc = function (a, c) {
  return this.Va.Zc(a, c);
};
b.pf = function (a) {
  return this.Va.pf(a);
};
b.Om = function (a) {
  return this.Va.Om(a);
};
b.Ct = function () {
  return this.Va.Ct(this);
};
b.Ug = function () {
  return this.Va.Ug();
};
b.cg = function () {
  return 0;
};
b.fg = function (a, c) {
  return new g.no(this, a, c);
};
function ya(a) {
  return isNaN(a.options.ju) ? Infinity : a.options.ju - y(a).length;
}
function za(a, c) {
  if (!Aa(a)) return !0;
  var d = 0,
    e;
  for (e in c) {
    var f = c[e];
    if (a.options.ku) {
      var h = a.options.ku[e] || Infinity;
      var k = a.oh[e] ? a.oh[e].slice(0) : [];
      h -= k.length;
    } else h = Infinity;
    if (f > h) return !1;
    d += c[e];
  }
  return d > ya(a) ? !1 : !0;
}
function Aa(a) {
  return Infinity != a.options.ju || !!a.options.ku;
}
b.yv = function (a) {
  var c = a ? this.yn : this.Nj,
    d = a ? this.Nj : this.yn,
    e = c.pop();
  if (e) {
    for (var f = [e]; c.length && e.group && e.group == c[c.length - 1].group; )
      f.push(c.pop());
    for (c = 0; (e = f[c]); c++) d.push(e);
    f = g.i.filter(f, a);
    g.i.Pc = !1;
    try {
      for (c = 0; (e = f[c]); c++) e.run(a);
    } finally {
      g.i.Pc = !0;
    }
  }
};
function Ba(a, c) {
  a.Cd.push(c);
}
function Ca(a, c) {
  g.g.cp(a.Cd, c);
}
function x(a, c) {
  return a.ss[c] || null;
}
g.Nb.cm = Object.create(null);
g.Nb.tt = function (a) {
  return g.Nb.cm[a] || null;
};
g.Nb.getAll = function () {
  var a = [],
    c;
  for (c in g.Nb.cm) a.push(g.Nb.cm[c]);
  return a;
};
g.na = function (a, c, d, e, f, h) {
  this.s = a;
  this.kf = c;
  this.nA = d;
  d = g.na.VA;
  this.s.G && (d = -d);
  this.ED = g.g.Rd.rv(d);
  a.zf.appendChild(this.rm(c, !(!f || !h)));
  this.bc = e;
  this.zq && Da(this);
  (f && h) ||
    ((c = this.kf.getBBox()),
    (f = c.width + 2 * g.na.gd),
    (h = c.height + 2 * g.na.gd));
  this.Fn(f, h);
  Da(this);
  Ea(this);
  this.zq = !0;
  a.options.readOnly ||
    (g.ca(this.gm, "mousedown", this, this.LD),
    this.ng && g.ca(this.ng, "mousedown", this, this.$G));
};
g.na.gd = 6;
g.na.WA = 5;
g.na.VA = 20;
g.na.Fv = 4;
g.na.TA = 8;
g.na.Ue = null;
g.na.hg = null;
g.na.prototype.Uu = null;
g.na.xv = function () {
  g.na.Ue && (g.Ua(g.na.Ue), (g.na.Ue = null));
  g.na.hg && (g.Ua(g.na.hg), (g.na.hg = null));
};
g.na.MD = function () {
  g.Touch.Dh();
  g.na.xv();
};
b = g.na.prototype;
b.zq = !1;
b.bc = null;
b.eh = 0;
b.ei = 0;
b.yb = 0;
b.$c = 0;
b.ps = !0;
b.rm = function (a, c) {
  this.ke = g.g.o.K("g", {}, null);
  var d = { filter: "url(#" + this.s.options.Xx + ")" };
  g.g.userAgent.bC && (d = {});
  d = g.g.o.K("g", d, this.ke);
  this.ws = g.g.o.K("path", {}, d);
  this.gm = g.g.o.K(
    "rect",
    { class: "blocklyDraggable", x: 0, y: 0, rx: g.na.gd, ry: g.na.gd },
    d
  );
  c
    ? ((this.ng = g.g.o.K(
        "g",
        { class: this.s.G ? "blocklyResizeSW" : "blocklyResizeSE" },
        this.ke
      )),
      (c = 2 * g.na.gd),
      g.g.o.K(
        "polygon",
        { points: "0,x x,x x,0".replace(/x/g, c.toString()) },
        this.ng
      ),
      g.g.o.K(
        "line",
        {
          class: "blocklyResizeLine",
          x1: c / 3,
          y1: c - 1,
          x2: c - 1,
          y2: c / 3,
        },
        this.ng
      ),
      g.g.o.K(
        "line",
        {
          class: "blocklyResizeLine",
          x1: (2 * c) / 3,
          y1: c - 1,
          x2: c - 1,
          y2: (2 * c) / 3,
        },
        this.ng
      ))
    : (this.ng = null);
  this.ke.appendChild(a);
  return this.ke;
};
b.za = function () {
  return this.ke;
};
function Ga(a, c) {
  a.ke.dataset && (a.ke.dataset.blockId = c);
}
b.LD = function (a) {
  var c = this.s.Vg(a);
  if (c) {
    if (c.aj)
      throw Error(
        "Tried to call gesture.handleBubbleStart, but the gesture had already been started."
      );
    c.ve || (c.ve = this);
    c.vf = a;
  }
};
b.Jn = function () {};
b.qe = function () {
  return !1;
};
b.$G = function (a) {
  Ha(this);
  g.na.xv();
  g.g.lj(a) ||
    (this.s.mv(a, new g.g.V(this.s.G ? -this.yb : this.yb, this.$c)),
    (g.na.Ue = g.ca(document, "mouseup", this, g.na.MD)),
    (g.na.hg = g.ca(document, "mousemove", this, this.aH)),
    g.wc());
  a.stopPropagation();
};
b.aH = function (a) {
  this.ps = !1;
  var c = this.s;
  a = g.g.nn(a, r(c), qa(c));
  a.x /= c.scale;
  a.y /= c.scale;
  c = g.g.V.sum(c.Ux, a);
  this.Fn(this.s.G ? -c.x : c.x, c.y);
  this.s.G && Da(this);
};
function Ha(a) {
  var c = a.ke.parentNode;
  return c.lastChild !== a.ke ? (c.appendChild(a.ke), !0) : !1;
}
function Ia(a, c, d) {
  var e = a.s.G ? a.bc.x - c.x - a.yb : c.x + a.bc.x;
  c = c.y + a.bc.y;
  return Math.max(
    0,
    Math.min(
      1,
      ((Math.min(e + a.yb, d.gc + d.vb) - Math.max(e, d.gc)) *
        (Math.min(c + a.$c, d.pc + d.Cb) - Math.max(c, d.pc))) /
        (a.yb * a.$c)
    )
  );
}
function Da(a) {
  var c = a.bc.x;
  c = a.s.G ? c - (a.eh + a.yb) : c + a.eh;
  a.moveTo(c, a.ei + a.bc.y);
}
b.moveTo = function (a, c) {
  this.ke.setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.st = function () {
  return new g.g.ge(this.yb, this.$c);
};
b.Fn = function (a, c) {
  var d = 2 * g.na.gd;
  a = Math.max(a, d + 45);
  c = Math.max(c, d + 20);
  this.yb = a;
  this.$c = c;
  this.gm.setAttribute("width", a);
  this.gm.setAttribute("height", c);
  this.ng &&
    (this.s.G
      ? this.ng.setAttribute(
          "transform",
          "translate(" + 2 * g.na.gd + "," + (c - d) + ") scale(-1 1)"
        )
      : this.ng.setAttribute(
          "transform",
          "translate(" + (a - d) + "," + (c - d) + ")"
        ));
  if (this.ps) {
    a = this.s.jc();
    a.gc /= this.s.scale;
    a.vb /= this.s.scale;
    a.pc /= this.s.scale;
    a.Cb /= this.s.scale;
    c = -this.yb / 4;
    if (!(this.yb > a.vb)) {
      if (this.s.G) {
        d = this.bc.x - c;
        var e = d - this.yb;
        var f = a.gc + a.vb,
          h = a.gc + g.La.xc / this.s.scale;
      } else
        (e = c + this.bc.x),
          (d = e + this.yb),
          (h = a.gc),
          (f = a.gc + a.vb - g.La.xc / this.s.scale);
      this.s.G
        ? e < h
          ? (c = -(h - this.bc.x + this.yb))
          : d > f && (c = -(f - this.bc.x))
        : e < h
        ? (c = h - this.bc.x)
        : d > f && (c = f - this.bc.x - this.yb);
    }
    e = c;
    c = -this.$c / 4;
    if (!(this.$c > a.Cb)) {
      d = this.bc.y + c;
      f = d + this.$c;
      h = a.pc;
      var k = a.pc + a.Cb - g.La.xc / this.s.scale,
        l = this.bc.y;
      d < h ? (c = h - l) : f > k && (c = k - l - this.$c);
    }
    h = c;
    f = this.nA.getBBox();
    c = { x: e, y: -this.$c - g.xa.yr };
    d = { x: -this.yb - 30, y: h };
    h = { x: f.width, y: h };
    k = { x: e, y: f.height };
    e = f.width < f.height ? h : k;
    f = f.width < f.height ? k : h;
    h = Ia(this, c, a);
    k = Ia(this, d, a);
    l = Ia(this, e, a);
    a = Math.max(h, k, l, Ia(this, f, a));
    h == a
      ? ((this.eh = c.x), (this.ei = c.y))
      : k == a
      ? ((this.eh = d.x), (this.ei = d.y))
      : l == a
      ? ((this.eh = e.x), (this.ei = e.y))
      : ((this.eh = f.x), (this.ei = f.y));
  }
  Da(this);
  Ea(this);
  this.Uu && this.Uu();
};
function Ea(a) {
  var c = [],
    d = a.yb / 2,
    e = a.$c / 2,
    f = -a.eh,
    h = -a.ei;
  if (d == f && e == h) c.push("M " + d + "," + e);
  else {
    h -= e;
    f -= d;
    a.s.G && (f *= -1);
    var k = Math.sqrt(h * h + f * f),
      l = Math.acos(f / k);
    0 > h && (l = 2 * Math.PI - l);
    var m = l + Math.PI / 2;
    m > 2 * Math.PI && (m -= 2 * Math.PI);
    var n = Math.sin(m),
      t = Math.cos(m),
      v = a.st();
    m = (v.width + v.height) / g.na.WA;
    m = Math.min(m, v.width, v.height) / 4;
    v = 1 - g.na.TA / k;
    f = d + v * f;
    h = e + v * h;
    v = d + m * t;
    var w = e + m * n;
    d -= m * t;
    e -= m * n;
    n = l + a.ED;
    n > 2 * Math.PI && (n -= 2 * Math.PI);
    l = (Math.sin(n) * k) / g.na.Fv;
    k = (Math.cos(n) * k) / g.na.Fv;
    c.push("M" + v + "," + w);
    c.push(
      "C" + (v + k) + "," + (w + l) + " " + f + "," + h + " " + f + "," + h
    );
    c.push(
      "C" + f + "," + h + " " + (d + k) + "," + (e + l) + " " + d + "," + e
    );
  }
  c.push("z");
  a.ws.setAttribute("d", c.join(" "));
}
b.se = function (a) {
  this.gm.setAttribute("fill", a);
  this.ws.setAttribute("fill", a);
};
b.I = function () {
  g.na.xv();
  g.g.o.removeNode(this.ke);
  this.nA = this.kf = this.s = this.ng = this.gm = this.ws = this.ke = null;
};
b.nu = function (a, c) {
  a ? a.Mj(c.x, c.y) : this.moveTo(c.x, c.y);
  this.eh = this.s.G ? this.bc.x - c.x - this.yb : c.x - this.bc.x;
  this.ei = c.y - this.bc.y;
  Ea(this);
};
b.Sa = function () {
  return new g.g.V(this.bc.x + this.eh, this.bc.y + this.ei);
};
g.g.xml = {};
g.g.xml.xC = "https://developers.google.com/blockly/xml";
g.g.xml.document = function () {
  return document;
};
g.g.xml.createElement = function (a) {
  return g.g.xml.document().createElementNS(g.g.xml.xC, a);
};
g.g.xml.createTextNode = function (a) {
  return g.g.xml.document().createTextNode(a);
};
g.g.xml.vH = function (a) {
  return new DOMParser().parseFromString(a, "text/xml");
};
g.g.xml.Nd = function (a) {
  return new XMLSerializer().serializeToString(a);
};
g.i.Ef = function (a) {
  g.i.Ef.w.constructor.call(this);
  this.Gc = a.id;
  this.Cc = a.v.id;
};
g.g.object.X(g.i.Ef, g.i.Abstract);
g.i.Ef.prototype.fb = function () {
  var a = g.i.Ef.w.fb.call(this);
  a.blockId = this.Gc;
  return a;
};
g.i.Ef.prototype.pa = function (a) {
  g.i.Ef.w.pa.call(this, a);
  this.Gc = a.blockId;
};
g.i.rh = function (a, c, d, e, f) {
  a &&
    (g.i.rh.w.constructor.call(this, a),
    (this.element = c),
    (this.name = d),
    (this.oldValue = e),
    (this.newValue = f));
};
g.g.object.X(g.i.rh, g.i.Ef);
g.i.sg = g.i.rh;
b = g.i.rh.prototype;
b.type = g.i.si;
b.fb = function () {
  var a = g.i.rh.w.fb.call(this);
  a.element = this.element;
  this.name && (a.name = this.name);
  a.newValue = this.newValue;
  return a;
};
b.pa = function (a) {
  g.i.rh.w.pa.call(this, a);
  this.element = a.element;
  this.name = a.name;
  this.newValue = a.newValue;
};
b.Uk = function () {
  return this.oldValue == this.newValue;
};
b.run = function (a) {
  var c = x(ua(this), this.Gc);
  if (c)
    switch (
      (c.Sd && c.Sd.Yb(!1),
      (a = a ? this.newValue : this.oldValue),
      this.element)
    ) {
      case "field":
        (c = B(c, this.name))
          ? c.setValue(a)
          : console.warn("Can't set non-existent field: " + this.name);
        break;
      case "comment":
        c.ji(a || null);
        break;
      case "collapsed":
        c.kh(!!a);
        break;
      case "disabled":
        c.qd(!a);
        break;
      case "inline":
        c.te(!!a);
        break;
      case "mutation":
        var d = "";
        c.Pa && (d = (d = c.Pa()) && g.R.Nd(d));
        if (c.lb) {
          var e = g.R.mi(a || "<mutation/>");
          c.lb(e);
        }
        g.i.Oa(new g.i.rh(c, "mutation", null, d, a));
        break;
      default:
        console.warn("Unknown change type: " + this.element);
    }
  else console.warn("Can't change non-existent block: " + this.Gc);
};
g.i.Ye = function (a) {
  a &&
    (g.i.Ye.w.constructor.call(this, a),
    (this.xml = a.v.ga ? g.R.ts(a) : g.R.Bh(a)),
    (this.Ph = g.i.ty(a)));
};
g.g.object.X(g.i.Ye, g.i.Ef);
g.i.oo = g.i.Ye;
g.i.Ye.prototype.type = g.i.wo;
g.i.Ye.prototype.fb = function () {
  var a = g.i.Ye.w.fb.call(this);
  a.xml = g.R.Nd(this.xml);
  a.ids = this.Ph;
  return a;
};
g.i.Ye.prototype.pa = function (a) {
  g.i.Ye.w.pa.call(this, a);
  this.xml = g.R.mi(a.xml);
  this.Ph = a.ids;
};
g.i.Ye.prototype.run = function (a) {
  var c = ua(this);
  if (a)
    (a = g.g.xml.createElement("xml")), a.appendChild(this.xml), g.R.Hh(a, c);
  else {
    a = 0;
    for (var d; (d = this.Ph[a]); a++) {
      var e = x(c, d);
      e
        ? e.I(!1)
        : d == this.Gc &&
          console.warn("Can't uncreate non-existent block: " + d);
    }
  }
};
g.i.Ff = function (a) {
  if (a) {
    if (a.getParent()) throw Error("Connected blocks cannot be deleted.");
    g.i.Ff.w.constructor.call(this, a);
    this.zu = a.v.ga ? g.R.ts(a) : g.R.Bh(a);
    this.Ph = g.i.ty(a);
  }
};
g.g.object.X(g.i.Ff, g.i.Ef);
g.i.aB = g.i.Ff;
g.i.Ff.prototype.type = g.i.El;
g.i.Ff.prototype.fb = function () {
  var a = g.i.Ff.w.fb.call(this);
  a.ids = this.Ph;
  return a;
};
g.i.Ff.prototype.pa = function (a) {
  g.i.Ff.w.pa.call(this, a);
  this.Ph = a.ids;
};
g.i.Ff.prototype.run = function (a) {
  var c = ua(this);
  if (a) {
    a = 0;
    for (var d; (d = this.Ph[a]); a++) {
      var e = x(c, d);
      e
        ? e.I(!1)
        : d == this.Gc && console.warn("Can't delete non-existent block: " + d);
    }
  } else
    (a = g.g.xml.createElement("xml")), a.appendChild(this.zu), g.R.Hh(a, c);
};
g.i.zi = function (a) {
  a &&
    (g.i.zi.w.constructor.call(this, a),
    (a = Ja(this)),
    (this.Fz = a.Pz),
    (this.Ez = a.az),
    (this.vu = a.xx));
};
g.g.object.X(g.i.zi, g.i.Ef);
g.i.Cl = g.i.zi;
b = g.i.zi.prototype;
b.type = g.i.Sl;
b.fb = function () {
  var a = g.i.zi.w.fb.call(this);
  this.sj && (a.newParentId = this.sj);
  this.rj && (a.newInputName = this.rj);
  this.$h &&
    (a.newCoordinate = Math.round(this.$h.x) + "," + Math.round(this.$h.y));
  return a;
};
b.pa = function (a) {
  g.i.zi.w.pa.call(this, a);
  this.sj = a.newParentId;
  this.rj = a.newInputName;
  a.newCoordinate &&
    ((a = a.newCoordinate.split(",")),
    (this.$h = new g.g.V(Number(a[0]), Number(a[1]))));
};
b.zj = function () {
  var a = Ja(this);
  this.sj = a.Pz;
  this.rj = a.az;
  this.$h = a.xx;
};
function Ja(a) {
  var c = x(ua(a), a.Gc);
  a = {};
  var d = c.getParent();
  if (d) {
    a.Pz = d.id;
    a: {
      for (var e = 0, f; (f = d.P[e]); e++)
        if (f.connection && C(f.connection) == c) {
          c = f;
          break a;
        }
      c = null;
    }
    c && (a.az = c.name);
  } else a.xx = c.Sa();
  return a;
}
b.Uk = function () {
  return this.Fz == this.sj && this.Ez == this.rj && g.g.V.Le(this.vu, this.$h);
};
b.run = function (a) {
  var c = ua(this),
    d = x(c, this.Gc);
  if (d) {
    var e = a ? this.sj : this.Fz,
      f = a ? this.rj : this.Ez;
    a = a ? this.$h : this.vu;
    var h = null;
    if (e && ((h = x(c, e)), !h)) {
      console.warn("Can't connect to non-existent block: " + e);
      return;
    }
    d.getParent() && D(d);
    if (a) (f = d.Sa()), d.moveBy(a.x - f.x, a.y - f.y);
    else {
      d = d.L || d.$;
      if (f) {
        if ((c = E(h, f))) var k = c.connection;
      } else d.type == g.cf && (k = h.U);
      k
        ? d.connect(k)
        : console.warn("Can't connect to non-existent input: " + f);
    }
  } else console.warn("Can't move non-existent block: " + this.Gc);
};
g.i.yd = function (a, c, d, e) {
  g.i.yd.w.constructor.call(this);
  this.Gc = a ? a.id : null;
  this.Cc = a ? a.v.id : void 0;
  this.element = c;
  this.oldValue = d;
  this.newValue = e;
  this.Pc = !1;
};
g.g.object.X(g.i.yd, g.i.Abstract);
g.i.yd.prototype.type = g.i.$o;
g.i.yd.prototype.fb = function () {
  var a = g.i.yd.w.fb.call(this);
  a.element = this.element;
  void 0 !== this.newValue && (a.newValue = this.newValue);
  this.Gc && (a.blockId = this.Gc);
  return a;
};
g.i.yd.prototype.pa = function (a) {
  g.i.yd.w.pa.call(this, a);
  this.element = a.element;
  this.newValue = a.newValue;
  this.Gc = a.blockId;
};
g.Hd = function (a) {
  this.T = a;
};
b = g.Hd.prototype;
b.lx = !0;
b.Wo = 17;
b.Ub = null;
b.dj = null;
function Ka(a) {
  a.Pd ||
    ((a.Pd = g.g.o.K("g", { class: "blocklyIconGroup" }, null)),
    a.T.ec && g.g.o.rb(a.Pd, "blocklyIconGroupReadonly"),
    a.Zs(a.Pd),
    a.T.za().appendChild(a.Pd),
    g.ca(a.Pd, "mouseup", a, a.Lt),
    a.ph());
}
b.I = function () {
  g.g.o.removeNode(this.Pd);
  this.Pd = null;
  this.Yb(!1);
  this.T = null;
};
b.ph = function () {};
b.isVisible = function () {
  return !!this.Ub;
};
b.Lt = function (a) {
  this.T.v.lc() || this.T.ec || g.g.lj(a) || this.Yb(!this.isVisible());
};
b.Xe = function () {
  this.isVisible() && this.Ub.se(this.T.Ni);
};
function La(a) {
  var c = a.T.Sa(),
    d = g.g.Oe(a.Pd);
  c = new g.g.V(c.x + d.x + a.Wo / 2, c.y + d.y + a.Wo / 2);
  g.g.V.Le(a.dj, c) ||
    ((a.dj = c), a.isVisible() && ((a = a.Ub), (a.bc = c), a.zq && Da(a)));
}
g.Pf = function (a) {
  g.Pf.w.constructor.call(this, a);
  Ka(this);
  this.Ed = {};
};
g.g.object.X(g.Pf, g.Hd);
g.Pf.prototype.lx = !1;
g.Pf.prototype.Zs = function (a) {
  g.g.o.K(
    "path",
    {
      class: "blocklyIconShape",
      d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z",
    },
    a
  );
  g.g.o.K(
    "path",
    {
      class: "blocklyIconSymbol",
      d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z",
    },
    a
  );
  g.g.o.K(
    "rect",
    { class: "blocklyIconSymbol", x: "7", y: "11", height: "2", width: "2" },
    a
  );
};
g.Pf.wH = function (a) {
  var c = g.g.o.K(
    "text",
    { class: "blocklyText blocklyBubbleText", y: g.na.gd },
    null
  );
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) {
    var e = g.g.o.K("tspan", { dy: "1em", x: g.na.gd }, c),
      f = document.createTextNode(a[d]);
    e.appendChild(f);
  }
  return c;
};
b = g.Pf.prototype;
b.Yb = function (a) {
  a != this.isVisible() &&
    (g.i.Oa(new g.i.yd(this.T, "warningOpen", !a, a)),
    a ? this.yx() : this.Ox());
};
b.yx = function () {
  this.vj = g.Pf.wH(this.dc());
  this.Ub = new g.na(this.T.v, this.vj, this.T.Yd, this.dj, null, null);
  Ga(this.Ub, this.T.id);
  if (this.T.G)
    for (
      var a = this.vj.getBBox().width, c = 0, d;
      (d = this.vj.childNodes[c]);
      c++
    )
      d.setAttribute("text-anchor", "end"), d.setAttribute("x", a + g.na.gd);
  this.Xe();
};
b.Ox = function () {
  this.Ub.I();
  this.vj = this.Ub = null;
};
b.ll = function (a, c) {
  this.Ed[c] != a &&
    (a ? (this.Ed[c] = a) : delete this.Ed[c],
    this.isVisible() && (this.Yb(!1), this.Yb(!0)));
};
b.dc = function () {
  var a = [],
    c;
  for (c in this.Ed) a.push(this.Ed[c]);
  return a.join("\n");
};
b.I = function () {
  this.T.ed = null;
  g.Hd.prototype.I.call(this);
};
g.Comment = function (a) {
  g.Comment.w.constructor.call(this, a);
  this.mc = a.Je;
  this.mc.text = this.mc.text || "";
  this.ys = "";
  Ka(this);
};
g.g.object.X(g.Comment, g.Hd);
b = g.Comment.prototype;
b.Zs = function (a) {
  g.g.o.K("circle", { class: "blocklyIconShape", r: "8", cx: "8", cy: "8" }, a);
  g.g.o.K(
    "path",
    {
      class: "blocklyIconSymbol",
      d: "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z",
    },
    a
  );
  g.g.o.K(
    "rect",
    {
      class: "blocklyIconSymbol",
      x: "6.8",
      y: "10.78",
      height: "2",
      width: "2",
    },
    a
  );
};
b.Hs = function () {
  this.Fm = g.g.o.K("foreignObject", { x: g.na.gd, y: g.na.gd }, null);
  var a = document.createElementNS(g.g.o.ak, "body");
  a.setAttribute("xmlns", g.g.o.ak);
  a.className = "blocklyMinimalBody";
  var c = (this.Lj = document.createElementNS(g.g.o.ak, "textarea"));
  c.className = "blocklyCommentTextarea";
  c.setAttribute("dir", this.T.G ? "RTL" : "LTR");
  c.value = this.mc.text;
  Ma(this);
  a.appendChild(c);
  this.Fm.appendChild(a);
  g.ca(c, "mouseup", this, this.pH, !0, !0);
  g.ca(c, "wheel", this, function (d) {
    d.stopPropagation();
  });
  g.ca(c, "change", this, function () {
    this.ys != this.mc.text &&
      g.i.Oa(new g.i.sg(this.T, "comment", null, this.ys, this.mc.text));
  });
  g.ca(c, "input", this, function () {
    this.mc.text = c.value;
  });
  setTimeout(c.focus.bind(c), 0);
  return this.Fm;
};
b.ph = function () {
  g.Comment.w.ph.call(this);
  this.isVisible() && (Na(this), Oa(this));
};
b.vG = function () {
  this.isVisible() && ((this.mc.size = this.Ub.st()), Ma(this));
};
function Ma(a) {
  var c = a.mc.size,
    d = 2 * g.na.gd,
    e = c.width - d;
  c = c.height - d;
  a.Fm.setAttribute("width", e);
  a.Fm.setAttribute("height", c);
  a.Lj.style.width = e - 4 + "px";
  a.Lj.style.height = c - 4 + "px";
}
b.Yb = function (a) {
  a != this.isVisible() &&
    (g.i.Oa(new g.i.yd(this.T, "commentOpen", !a, a)),
    (this.mc.Nu = a) ? Oa(this) : Na(this));
};
function Oa(a) {
  if (!a.T.nd() || g.g.userAgent.yg) g.Pf.prototype.yx.call(a);
  else {
    a.Ub = new g.na(
      a.T.v,
      a.Hs(),
      a.T.Yd,
      a.dj,
      a.mc.size.width,
      a.mc.size.height
    );
    Ga(a.Ub, a.T.id);
    var c = a.vG.bind(a);
    a.Ub.Uu = c;
    a.Xe();
  }
}
function Na(a) {
  a.vj
    ? g.Pf.prototype.Ox.call(a)
    : (a.Ub.I(), (a.Ub = null), (a.Lj = null), (a.Fm = null));
}
b.pH = function () {
  Ha(this.Ub) && this.Lj.focus();
  this.ys = this.mc.text;
};
b.st = function () {
  return this.mc.size;
};
b.Fn = function (a, c) {
  this.Ub
    ? this.Ub.Fn(a, c)
    : ((this.mc.size.width = a), (this.mc.size.height = c));
};
b.dc = function () {
  return this.mc.text || "";
};
b.ll = function (a) {
  this.mc.text != a && ((this.mc.text = a), Pa(this));
};
function Pa(a) {
  a.Lj
    ? (a.Lj.value = a.mc.text)
    : a.vj && (a.vj.firstChild.textContent = a.mc.text);
}
b.I = function () {
  this.T.Ak = null;
  g.Hd.prototype.I.call(this);
};
g.Tc = {};
g.Tc.Nt = !1;
g.Tc.register = function (a) {
  if (g.Tc.Nt) throw Error("CSS already injected");
  Array.prototype.push.apply(g.Tc.er, a);
  a.length = 0;
};
g.Tc.Rh = function (a, c) {
  if (!g.Tc.Nt) {
    g.Tc.Nt = !0;
    var d = g.Tc.er.join("\n");
    g.Tc.er.length = 0;
    a &&
      ((a = c.replace(/[\\/]$/, "")),
      (d = d.replace(/<<<PATH>>>/g, a)),
      (a = document.createElement("style")),
      (d = document.createTextNode(d)),
      a.appendChild(d),
      document.head.insertBefore(a, document.head.firstChild));
  }
};
g.Tc.$u = function () {
  console.warn(
    "Deprecated call to Blockly.Css.setCursor. See https://github.com/google/blockly/issues/981 for context"
  );
};
g.Tc.er = [
  ".blocklySvg {",
  "background-color: #fff;",
  "outline: none;",
  "overflow: hidden;",
  "position: absolute;",
  "display: block;",
  "}",
  ".blocklyWidgetDiv {",
  "display: none;",
  "position: absolute;",
  "z-index: 99999;",
  "}",
  ".injectionDiv {",
  "height: 100%;",
  "position: relative;",
  "overflow: hidden;",
  "touch-action: none;",
  "}",
  ".blocklyNonSelectable {",
  "user-select: none;",
  "-ms-user-select: none;",
  "-webkit-user-select: none;",
  "}",
  ".blocklyWsDragSurface {",
  "display: none;",
  "position: absolute;",
  "top: 0;",
  "left: 0;",
  "}",
  ".blocklyWsDragSurface.blocklyOverflowVisible {",
  "overflow: visible;",
  "}",
  ".blocklyBlockDragSurface {",
  "display: none;",
  "position: absolute;",
  "top: 0;",
  "left: 0;",
  "right: 0;",
  "bottom: 0;",
  "overflow: visible !important;",
  "z-index: 50;",
  "}",
  ".blocklyBlockCanvas.blocklyCanvasTransitioning,",
  ".blocklyBubbleCanvas.blocklyCanvasTransitioning {",
  "transition: transform .5s;",
  "}",
  ".blocklyTooltipDiv {",
  "background-color: #ffffc7;",
  "border: 1px solid #ddc;",
  "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);",
  "color: #000;",
  "display: none;",
  "font-family: sans-serif;",
  "font-size: 9pt;",
  "opacity: .9;",
  "padding: 2px;",
  "position: absolute;",
  "z-index: 100000;",
  "}",
  ".blocklyDropDownDiv {",
  "position: fixed;",
  "left: 0;",
  "top: 0;",
  "z-index: 1000;",
  "display: none;",
  "border: 1px solid;",
  "border-radius: 2px;",
  "padding: 4px;",
  "box-shadow: 0px 0px 3px 1px rgba(0,0,0,.3);",
  "}",
  ".blocklyDropDownDiv.focused {",
  "box-shadow: 0px 0px 6px 1px rgba(0,0,0,.3);",
  "}",
  ".blocklyDropDownContent {",
  "max-height: 300px;",
  "overflow: auto;",
  "overflow-x: hidden;",
  "}",
  ".blocklyDropDownArrow {",
  "position: absolute;",
  "left: 0;",
  "top: 0;",
  "width: 16px;",
  "height: 16px;",
  "z-index: -1;",
  "background-color: inherit;",
  "border-color: inherit;",
  "}",
  ".blocklyDropDownButton {",
  "display: inline-block;",
  "float: left;",
  "padding: 0;",
  "margin: 4px;",
  "border-radius: 4px;",
  "outline: none;",
  "border: 1px solid;",
  "transition: box-shadow .1s;",
  "cursor: pointer;",
  "}",
  ".arrowTop {",
  "border-top: 1px solid;",
  "border-left: 1px solid;",
  "border-top-left-radius: 4px;",
  "border-color: inherit;",
  "}",
  ".arrowBottom {",
  "border-bottom: 1px solid;",
  "border-right: 1px solid;",
  "border-bottom-right-radius: 4px;",
  "border-color: inherit;",
  "}",
  ".blocklyResizeSE {",
  "cursor: se-resize;",
  "fill: #aaa;",
  "}",
  ".blocklyResizeSW {",
  "cursor: sw-resize;",
  "fill: #aaa;",
  "}",
  ".blocklyResizeLine {",
  "stroke: #515A5A;",
  "stroke-width: 1;",
  "}",
  ".blocklyHighlightedConnectionPath {",
  "fill: none;",
  "stroke: #fc3;",
  "stroke-width: 4px;",
  "}",
  ".blocklyPathLight {",
  "fill: none;",
  "stroke-linecap: round;",
  "stroke-width: 1;",
  "}",
  ".blocklySelected>.blocklyPath {",
  "stroke: #fc3;",
  "stroke-width: 3px;",
  "}",
  ".blocklySelected>.blocklyPathLight {",
  "display: none;",
  "}",
  ".blocklyDraggable {",
  'cursor: url("<<<PATH>>>/handopen.cur"), auto;',
  "cursor: grab;",
  "cursor: -webkit-grab;",
  "}",
  ".blocklyDragging {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyDraggable:active {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyBlockDragSurface .blocklyDraggable {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyDragging.blocklyDraggingDelete {",
  'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  "}",
  ".blocklyDragging>.blocklyPath,",
  ".blocklyDragging>.blocklyPathLight {",
  "fill-opacity: .8;",
  "stroke-opacity: .8;",
  "}",
  ".blocklyDragging>.blocklyPathDark {",
  "display: none;",
  "}",
  ".blocklyDisabled>.blocklyPath {",
  "fill-opacity: .5;",
  "stroke-opacity: .5;",
  "}",
  ".blocklyDisabled>.blocklyPathLight,",
  ".blocklyDisabled>.blocklyPathDark {",
  "display: none;",
  "}",
  ".blocklyInsertionMarker>.blocklyPath,",
  ".blocklyInsertionMarker>.blocklyPathLight,",
  ".blocklyInsertionMarker>.blocklyPathDark {",
  "fill-opacity: .2;",
  "stroke: none",
  "}",
  ".blocklyReplaceable .blocklyPath {",
  "fill-opacity: .5;",
  "}",
  ".blocklyReplaceable .blocklyPathLight,",
  ".blocklyReplaceable .blocklyPathDark {",
  "display: none;",
  "}",
  ".blocklyText {",
  "cursor: default;",
  "fill: #fff;",
  "font-family: sans-serif;",
  "font-size: 11pt;",
  "}",
  ".blocklyMultilineText {",
  "font-family: monospace;",
  "}",
  ".blocklyNonEditableText>text {",
  "pointer-events: none;",
  "}",
  ".blocklyNonEditableText>rect,",
  ".blocklyEditableText>rect {",
  "fill: #fff;",
  "fill-opacity: .6;",
  "}",
  ".blocklyNonEditableText>text,",
  ".blocklyEditableText>text {",
  "fill: #000;",
  "}",
  ".blocklyEditableText:hover>rect {",
  "stroke: #fff;",
  "stroke-width: 2;",
  "}",
  ".blocklyBubbleText {",
  "fill: #000;",
  "}",
  ".blocklyFlyout {",
  "position: absolute;",
  "z-index: 20;",
  "}",
  ".blocklySvg text, .blocklyBlockDragSurface text {",
  "user-select: none;",
  "-ms-user-select: none;",
  "-webkit-user-select: none;",
  "cursor: inherit;",
  "}",
  ".blocklyHidden {",
  "display: none;",
  "}",
  ".blocklyFieldDropdown:not(.blocklyHidden) {",
  "display: block;",
  "}",
  ".blocklyIconGroup {",
  "cursor: default;",
  "}",
  ".blocklyIconGroup:not(:hover),",
  ".blocklyIconGroupReadonly {",
  "opacity: .6;",
  "}",
  ".blocklyIconShape {",
  "fill: #00f;",
  "stroke: #fff;",
  "stroke-width: 1px;",
  "}",
  ".blocklyIconSymbol {",
  "fill: #fff;",
  "}",
  ".blocklyMinimalBody {",
  "margin: 0;",
  "padding: 0;",
  "}",
  ".blocklyCommentForeignObject {",
  "position: relative;",
  "z-index: 0;",
  "}",
  ".blocklyCommentRect {",
  "fill: #E7DE8E;",
  "stroke: #bcA903;",
  "stroke-width: 1px",
  "}",
  ".blocklyCommentTarget {",
  "fill: transparent;",
  "stroke: #bcA903;",
  "}",
  ".blocklyCommentTargetFocused {",
  "fill: none;",
  "}",
  ".blocklyCommentHandleTarget {",
  "fill: none;",
  "}",
  ".blocklyCommentHandleTargetFocused {",
  "fill: transparent;",
  "}",
  ".blocklyFocused>.blocklyCommentRect {",
  "fill: #B9B272;",
  "stroke: #B9B272;",
  "}",
  ".blocklySelected>.blocklyCommentTarget {",
  "stroke: #fc3;",
  "stroke-width: 3px;",
  "}",
  ".blocklyCommentTextarea {",
  "background-color: #fef49c;",
  "border: 0;",
  "outline: 0;",
  "margin: 0;",
  "padding: 3px;",
  "resize: none;",
  "display: block;",
  "overflow: hidden;",
  "}",
  ".blocklyCommentDeleteIcon {",
  "cursor: pointer;",
  "fill: #000;",
  "display: none",
  "}",
  ".blocklySelected > .blocklyCommentDeleteIcon {",
  "display: block",
  "}",
  ".blocklyDeleteIconShape {",
  "fill: #000;",
  "stroke: #000;",
  "stroke-width: 1px;",
  "}",
  ".blocklyDeleteIconShape.blocklyDeleteIconHighlighted {",
  "stroke: #fc3;",
  "}",
  ".blocklyHtmlInput {",
  "border: none;",
  "border-radius: 4px;",
  "font-family: sans-serif;",
  "height: 100%;",
  "margin: 0;",
  "outline: none;",
  "padding: 0;",
  "width: 100%;",
  "text-align: center;",
  "}",
  ".blocklyHtmlInput::-ms-clear {",
  "display: none;",
  "}",
  ".blocklyMainBackground {",
  "stroke-width: 1;",
  "stroke: #c6c6c6;",
  "}",
  ".blocklyMutatorBackground {",
  "fill: #fff;",
  "stroke: #ddd;",
  "stroke-width: 1;",
  "}",
  ".blocklyFlyoutBackground {",
  "fill:rgb(134, 191, 255);",
  "fill-opacity: .8;",
  "}",
  ".blocklyMainWorkspaceScrollbar {",
  "z-index: 20;",
  "}",
  ".blocklyFlyoutScrollbar {",
  "z-index: 30;",
  "}",
  ".blocklyScrollbarHorizontal, .blocklyScrollbarVertical {",
  "position: absolute;",
  "outline: none;",
  "}",
  ".blocklyScrollbarBackground {",
  "opacity: 0;",
  "}",
  ".blocklyScrollbarHandle {",
  "fill: #ccc;",
  "}",
  ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,",
  ".blocklyScrollbarHandle:hover {",
  "fill: #bbb;",
  "}",
  ".blocklyFlyout .blocklyScrollbarHandle {",
  "fill: #bbb;",
  "}",
  ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,",
  ".blocklyFlyout .blocklyScrollbarHandle:hover {",
  "fill: #aaa;",
  "}",
  ".blocklyInvalidInput {",
  "background: #faa;",
  "}",
  ".blocklyContextMenu {",
  "border-radius: 4px;",
  "max-height: 100%;",
  "}",
  ".blocklyDropdownMenu {",
  "border-radius: 2px;",
  "padding: 0 !important;",
  "}",
  ".blocklyWidgetDiv .blocklyDropdownMenu .goog-menuitem,",
  ".blocklyDropDownDiv .blocklyDropdownMenu .goog-menuitem {",
  "padding-left: 28px;",
  "}",
  ".blocklyWidgetDiv .blocklyDropdownMenu .goog-menuitem.goog-menuitem-rtl,",
  ".blocklyDropDownDiv .blocklyDropdownMenu .goog-menuitem.goog-menuitem-rtl {",
  "padding-left: 5px;",
  "padding-right: 28px;",
  "}",
  ".blocklyVerticalCursor {",
  "stroke-width: 3px;",
  "fill: rgba(255,255,255,.5);",
  "}",
  ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,",
  ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon,",
  ".blocklyDropDownDiv .goog-option-selected .goog-menuitem-checkbox,",
  ".blocklyDropDownDiv .goog-option-selected .goog-menuitem-icon {",
  "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px;",
  "}",
  ".blocklyWidgetDiv .goog-menu {",
  "background: #fff;",
  "border-color: transparent;",
  "border-style: solid;",
  "border-width: 1px;",
  "cursor: default;",
  "font: normal 13px Arial, sans-serif;",
  "margin: 0;",
  "outline: none;",
  "padding: 4px 0;",
  "position: absolute;",
  "overflow-y: auto;",
  "overflow-x: hidden;",
  "max-height: 100%;",
  "z-index: 20000;",
  "box-shadow: 0px 0px 3px 1px rgba(0,0,0,.3);",
  "}",
  ".blocklyWidgetDiv .goog-menu.focused {",
  "box-shadow: 0px 0px 6px 1px rgba(0,0,0,.3);",
  "}",
  ".blocklyDropDownDiv .goog-menu {",
  "cursor: default;",
  'font: normal 13px "Helvetica Neue", Helvetica, sans-serif;',
  "outline: none;",
  "z-index: 20000;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem,",
  ".blocklyDropDownDiv .goog-menuitem {",
  "color: #000;",
  "font: normal 13px Arial, sans-serif;",
  "list-style: none;",
  "margin: 0;",
  "min-width: 7em;",
  "border: none;",
  "padding: 6px 15px;",
  "white-space: nowrap;",
  "cursor: pointer;",
  "}",
  ".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,",
  ".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem,",
  ".blocklyDropDownDiv .goog-menu-nocheckbox .goog-menuitem,",
  ".blocklyDropDownDiv .goog-menu-noicon .goog-menuitem {",
  "padding-left: 12px;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-content,",
  ".blocklyDropDownDiv .goog-menuitem-content {",
  "font: normal 13px Arial, sans-serif;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-content {",
  "color: #000;",
  "}",
  ".blocklyDropDownDiv .goog-menuitem-content {",
  "color: #000;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-disabled,",
  ".blocklyDropDownDiv .goog-menuitem-disabled {",
  "cursor: inherit;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content,",
  ".blocklyDropDownDiv .goog-menuitem-disabled .goog-menuitem-content {",
  "color: #ccc !important;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon,",
  ".blocklyDropDownDiv .goog-menuitem-disabled .goog-menuitem-icon {",
  "opacity: .3;",
  "filter: alpha(opacity=30);",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-highlight ,",
  ".blocklyDropDownDiv .goog-menuitem-highlight {",
  "background-color: rgba(0,0,0,.1);",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-checkbox,",
  ".blocklyWidgetDiv .goog-menuitem-icon,",
  ".blocklyDropDownDiv .goog-menuitem-checkbox,",
  ".blocklyDropDownDiv .goog-menuitem-icon {",
  "background-repeat: no-repeat;",
  "height: 16px;",
  "left: 6px;",
  "position: absolute;",
  "right: auto;",
  "vertical-align: middle;",
  "width: 16px;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,",
  ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon,",
  ".blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-checkbox,",
  ".blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-icon {",
  "left: auto;",
  "right: 6px;",
  "}",
  ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,",
  ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon,",
  ".blocklyDropDownDiv .goog-option-selected .goog-menuitem-checkbox,",
  ".blocklyDropDownDiv .goog-option-selected .goog-menuitem-icon {",
  "position: static;",
  "float: left;",
  "margin-left: -24px;",
  "}",
  ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,",
  ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon,",
  ".blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-checkbox,",
  ".blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-icon {",
  "float: right;",
  "margin-right: -24px;",
  "}",
];
g.D = function () {};
g.D.ye = null;
g.D.vs = null;
g.D.od = null;
g.D.tq = null;
g.D.ho = 16;
g.D.Mv = 1;
g.D.Hv = 12;
g.D.rw = 16;
g.D.Zq = 0.25;
g.D.Rv = "#dadce0";
g.D.Sv = "#fff";
g.D.js = null;
g.D.uj = null;
g.D.Ja = function () {
  if (!g.D.ye) {
    var a = document.createElement("div");
    a.className = "blocklyDropDownDiv";
    a.style.backgroundColor = g.D.Sv;
    a.style.borderColor = g.D.Rv;
    document.body.appendChild(a);
    g.D.ye = a;
    var c = document.createElement("div");
    c.className = "blocklyDropDownContent";
    a.appendChild(c);
    g.D.kf = c;
    c = document.createElement("div");
    c.className = "blocklyDropDownArrow";
    a.appendChild(c);
    g.D.ff = c;
    g.D.ye.style.opacity = 0;
    g.D.ye.style.transition =
      "transform " + g.D.Zq + "s, opacity " + g.D.Zq + "s";
    a.addEventListener("focusin", function () {
      g.g.o.rb(a, "focused");
    });
    a.addEventListener("focusout", function () {
      g.g.o.Sb(a, "focused");
    });
  }
};
g.D.iA = function (a) {
  g.D.vs = a;
};
g.D.sy = function () {
  return g.D.kf;
};
g.D.YD = function () {
  g.D.kf.innerHTML = "";
  g.D.kf.style.width = "";
};
g.D.se = function (a) {
  g.D.ye.style.backgroundColor = a;
  g.D.ye.style.borderColor = void 0;
};
g.D.sM = function (a) {
  g.D.ye.setAttribute("data-category", a);
};
g.D.uM = function (a, c, d, e) {
  var f = c.v.scale,
    h = c.width,
    k = c.height;
  h *= f;
  k *= f;
  f = c.za().getBoundingClientRect();
  h = f.left + h / 2;
  k = f.top + k;
  f = f.top;
  e && (f += e);
  g.D.iA(r(c.v).parentNode);
  return g.D.show(a, c.G, h, k, h, f, d);
};
g.D.oA = function (a, c) {
  var d = a.za().getBoundingClientRect(),
    e = d.left + d.width / 2,
    f = d.bottom;
  d = d.top;
  var h = a.B;
  g.D.tq = !0;
  g.D.iA(r(h.v).parentNode);
  g.D.show(a, h.G, e, f, e, d, c);
};
g.D.show = function (a, c, d, e, f, h, k) {
  g.D.od = a;
  g.D.uj = k || null;
  a = g.D.By(d, e, f, h);
  a.ns
    ? ((g.D.ff.style.display = ""),
      (g.D.ff.style.transform =
        "translate(" + a.fm + "px," + a.Ww + "px) rotate(45deg)"),
      g.D.ff.setAttribute(
        "class",
        a.ls
          ? "blocklyDropDownArrow arrowTop"
          : "blocklyDropDownArrow arrowBottom"
      ))
    : (g.D.ff.style.display = "none");
  g.D.ye.style.direction = c ? "rtl" : "ltr";
  g.D.un(a.Rp, a.Sp, a.zp, a.Ap);
  return a.ls;
};
g.D.ZE = function () {
  var a = g.D.vs.getBoundingClientRect(),
    c = g.g.style.Wg(g.D.vs);
  return {
    left: a.left,
    right: a.left + c.width,
    top: a.top,
    bottom: a.top + c.height,
    width: c.width,
    height: c.height,
  };
};
g.D.By = function (a, c, d, e) {
  var f = g.D.ZE(),
    h = g.g.style.Wg(g.D.ye);
  return c + h.height < f.bottom
    ? g.D.Ay(a, c, f, h)
    : e - h.height > f.top
    ? g.D.zy(d, e, f, h)
    : c + h.height < document.documentElement.clientHeight
    ? g.D.Ay(a, c, f, h)
    : e - h.height > document.documentElement.clientTop
    ? g.D.zy(d, e, f, h)
    : g.D.jF(a, f, h);
};
g.D.Ay = function (a, c, d, e) {
  a = g.D.yt(a, d.left, d.right, e.width);
  return {
    Rp: a.Fk,
    Sp: c,
    zp: a.Fk,
    Ap: c + g.D.rw,
    fm: a.fm,
    Ww: -(g.D.ho / 2 + g.D.Mv),
    ls: !0,
    ns: !0,
  };
};
g.D.zy = function (a, c, d, e) {
  a = g.D.yt(a, d.left, d.right, e.width);
  return {
    Rp: a.Fk,
    Sp: c - e.height,
    zp: a.Fk,
    Ap: c - e.height - g.D.rw,
    fm: a.fm,
    Ww: e.height - 2 * g.D.Mv - g.D.ho / 2,
    ls: !1,
    ns: !0,
  };
};
g.D.jF = function (a, c, d) {
  a = g.D.yt(a, c.left, c.right, d.width);
  return { Rp: a.Fk, Sp: 0, zp: a.Fk, Ap: 0, ns: !1 };
};
g.D.yt = function (a, c, d, e) {
  var f = a;
  a = g.g.Rd.zk(c, a - e / 2, d - e);
  f -= g.D.ho / 2;
  c = g.g.Rd.zk(g.D.Hv, f - a, e - g.D.Hv - g.D.ho);
  return { fm: c, Fk: a };
};
g.D.isVisible = function () {
  return !!g.D.od;
};
g.D.Ok = function (a, c) {
  g.D.od === a && (c ? g.D.bj() : g.D.Ha());
};
g.D.Ha = function () {
  var a = g.D.ye;
  a.style.transform = "translate(0, 0)";
  a.style.opacity = 0;
  g.D.js = setTimeout(function () {
    g.D.bj();
  }, 1e3 * g.D.Zq);
  g.D.uj && (g.D.uj(), (g.D.uj = null));
};
g.D.bj = function () {
  if (g.D.isVisible()) {
    g.D.js && clearTimeout(g.D.js);
    var a = g.D.ye;
    a.style.transform = "";
    a.style.left = "";
    a.style.top = "";
    a.style.opacity = 0;
    a.style.display = "none";
    a.style.backgroundColor = g.D.Sv;
    a.style.borderColor = g.D.Rv;
    g.D.uj && (g.D.uj(), (g.D.uj = null));
    g.D.YD();
    g.D.od = null;
  }
};
g.D.un = function (a, c, d, e) {
  a = Math.floor(a);
  c = Math.floor(c);
  d = Math.floor(d);
  e = Math.floor(e);
  var f = g.D.ye;
  f.style.left = a + "px";
  f.style.top = c + "px";
  f.style.display = "block";
  f.style.opacity = 1;
  f.style.transform = "translate(" + (d - a) + "px," + (e - c) + "px)";
};
g.D.nM = function () {
  if (g.D.od) {
    var a = g.D.od.B,
      c = a.v.scale,
      d = g.D.tq ? g.D.od.Bb.width : a.width,
      e = g.D.tq ? g.D.od.Bb.height : a.height;
    d *= c;
    e *= c;
    a = g.D.tq
      ? g.D.od.me.getBoundingClientRect()
      : a.za().getBoundingClientRect();
    d = a.left + d / 2;
    e = g.D.By(d, a.top + e, d, a.top);
    g.D.un(e.Rp, e.Sp, e.zp, e.Ap);
  } else g.D.Ha();
};
g.sb = {};
g.sb.Us = 0;
g.sb.tp = null;
g.sb.DE = function (a) {
  var c = a.v,
    d = a.za();
  c.Rf.play("delete");
  a = Qa(c, d);
  d = d.cloneNode(!0);
  d.CH = a.x;
  d.DH = a.y;
  d.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
  r(c).appendChild(d);
  d.Xw = d.getBBox();
  g.sb.Px(d, c.G, new Date(), c.scale);
};
g.sb.Px = function (a, c, d, e) {
  var f = (new Date() - d) / 150;
  1 < f
    ? g.g.o.removeNode(a)
    : (a.setAttribute(
        "transform",
        "translate(" +
          (a.CH + (((c ? -1 : 1) * a.Xw.width * e) / 2) * f) +
          "," +
          (a.DH + a.Xw.height * e * f) +
          ") scale(" +
          (1 - f) * e +
          ")"
      ),
      setTimeout(g.sb.Px, 10, a, c, d, e));
};
g.sb.eE = function (a) {
  var c = a.v,
    d = c.scale;
  c.Rf.play("click");
  if (!(1 > d)) {
    var e = Qa(c, a.za());
    a.L
      ? ((e.x += (a.G ? 3 : -3) * d), (e.y += 13 * d))
      : a.$ && ((e.x += (a.G ? -23 : 23) * d), (e.y += 3 * d));
    a = g.g.o.K(
      "circle",
      {
        cx: e.x,
        cy: e.y,
        r: 0,
        fill: "none",
        stroke: "#888",
        "stroke-width": 10,
      },
      r(c)
    );
    g.sb.tx(a, new Date(), d);
  }
};
g.sb.tx = function (a, c, d) {
  var e = (new Date() - c) / 150;
  1 < e
    ? g.g.o.removeNode(a)
    : (a.setAttribute("r", 25 * e * d),
      (a.style.opacity = 1 - e),
      (g.sb.Us = setTimeout(g.sb.tx, 10, a, c, d)));
};
g.sb.CE = function (a) {
  a.v.Rf.play("disconnect");
  if (!(1 > a.v.scale)) {
    var c = Ra(a).height;
    c = (Math.atan(10 / c) / Math.PI) * 180;
    a.G || (c *= -1);
    g.sb.Nx(a.za(), c, new Date());
  }
};
g.sb.Nx = function (a, c, d) {
  var e = (new Date() - d) / 200;
  1 < e
    ? (a.Ln = "")
    : ((a.Ln =
        "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * c) + ")"),
      (g.sb.tp = a),
      (g.sb.Us = setTimeout(g.sb.Nx, 10, a, c, d)));
  a.setAttribute("transform", a.Un + a.Ln);
};
g.sb.Vs = function () {
  if (g.sb.tp) {
    clearTimeout(g.sb.Us);
    var a = g.sb.tp;
    a.Ln = "";
    a.setAttribute("transform", a.Un);
    g.sb.tp = null;
  }
};
g.Jo = function (a) {
  this.Bf = g.selected = a;
  this.s = a.v;
  this.mj = this.Vt = null;
  this.Hk = Sa(this, this.Bf);
  this.Mc = this.Jb = null;
  this.rg = !1;
  this.oj = null;
  this.Kt = !1;
  this.Pk = null;
  a = this.Bf.Me(!1);
  var c;
  a: {
    for (c = this.Bf.U; c; ) {
      var d = C(c);
      if (!d) break a;
      c = d.U;
    }
    c = null;
  }
  c && c != this.Bf.U && (a.push(c), (this.Vt = c), (this.mj = Sa(this, c.B)));
  this.qs = a;
};
g.Jo.prototype.I = function () {
  this.s = this.Bf = null;
  this.qs.length = 0;
  this.Mc = this.Jb = null;
  g.i.disable();
  try {
    this.Hk && (this.Hk.I(), (this.Hk = null)),
      this.mj && (this.mj.I(), (this.mj = null));
  } finally {
    g.i.enable();
  }
  this.Pk = null;
};
g.Jo.prototype.update = function (a, c) {
  var d = this.Jb && this.Mc ? g.iB : g.wd;
  for (var e = null, f = null, h = 0; h < this.qs.length; h++) {
    var k = this.qs[h],
      l = k.closest(d, a);
    l.connection && ((e = l.connection), (f = k), (d = l.vq));
  }
  e = ((d = { closest: e, local: f, vq: d }), !!d.closest) && c != g.Uv;
  if (
    (this.rg = !!c && !this.Bf.getParent() && this.Bf.qe() && !e) ||
    Ta(this, d, a)
  ) {
    g.i.disable();
    d.closest
      ? ((a = this.Jb != d.closest),
        (c = this.Mc != d.local),
        this.Jb && this.Mc && (a || c || this.rg) && Ua(this))
      : Ua(this);
    this.Mc = this.Jb = this.oj = null;
    if (!this.rg && ((a = d.closest), (c = d.local), a))
      if (a == this.Jb || a.B.Th())
        console.log("Trying to connect to an insertion marker");
      else {
        this.Jb = a;
        this.Mc = c;
        a = this.Jb;
        c = this.Mc;
        if (c.type == g.bf) a = a.isConnected() && !g.ta.lz(this.Bf, a.ka.B);
        else {
          a: {
            for (d = 0; (e = c.B.P[d]); d++)
              if (e.connection && e.connection.type == g.Xa) {
                d = e.connection;
                break a;
              }
            d = null;
          }
          a = c == d ? 0 : !this.Bf.U && c.type == g.cf && a.isConnected();
        }
        if (a)
          (a = this.Jb),
            (c = this.Mc),
            C(a)
              ? ((this.Pk = C(a)), Va(C(a), !0))
              : c.type == g.bf && ((this.Pk = a.B), a.B.DF(a, !0)),
            (this.Kt = !0);
        else {
          d = this.Mc;
          a = this.Jb;
          c = this.Vt && d == this.Vt ? this.mj : this.Hk;
          a: {
            f = d.B;
            e = c.Me(!0);
            f = f.Me(!0);
            if (e.length != f.length)
              throw Error("Connection lists did not match in length.");
            for (h = 0; h < f.length; h++)
              if (f[h] == d) {
                d = e[h];
                break a;
              }
            d = null;
          }
          if (d == this.oj)
            throw Error(
              "Made it to connectMarker_ even though the marker isn't changing"
            );
          c.Ea();
          c.ga = !0;
          c.za().setAttribute("visibility", "visible");
          (d.type != g.Xa && d.type != g.Ra) ||
            c.moveBy(a.$b - d.$b, a.gb - d.gb);
          d.connect(a);
          this.oj = d;
        }
        this.Jb && this.Jb.Xy();
      }
    g.i.enable();
  }
};
function Sa(a, c) {
  var d = c.type;
  g.i.disable();
  try {
    var e = a.s.fg(d);
    e.kA(!0);
    e.kh(c.isCollapsed());
    if (c.Pa) {
      var f = c.Pa();
      f && e.lb(f);
    }
    for (a = 0; a < c.P.length; a++) {
      var h = c.P[a],
        k = e.P[a];
      for (d = 0; d < h.Na.length; d++) k.Na[d].setValue(h.Na[d].getValue());
    }
    e.Qd();
    e.za().setAttribute("visibility", "hidden");
  } finally {
    g.i.enable();
  }
  return e;
}
function Ta(a, c, d) {
  var e = c.local,
    f = c.closest;
  c = c.vq;
  if (e && f) {
    if (a.Mc && a.Jb) {
      if (a.Jb == f && a.Mc == e) return !1;
      e = a.Mc.$b + d.x - a.Jb.$b;
      a = a.Mc.gb + d.y - a.Jb.gb;
      a = Math.sqrt(e * e + a * a);
      return !(f && c > a - g.nB);
    }
    if (a.Mc || a.Jb)
      console.error(
        "Only one of localConnection_ and closestConnection_ was set."
      );
    else return !0;
  } else return !(!a.Mc || !a.Jb);
  console.error(
    "Returning true from shouldUpdatePreviews, but it's not clear why."
  );
  return !0;
}
function Ua(a) {
  a.Jb && (g.g.o.removeNode(g.ta.Yy), delete g.ta.Yy);
  if (a.Kt) {
    var c = a.Jb;
    c.type != g.Ra || c.isConnected() ? Va(a.Pk, !1) : a.Pk.DF(c, !1);
    a.Pk = null;
    a.Kt = !1;
  } else if (a.oj)
    if (a.oj) {
      c = a.oj;
      var d = c.B,
        e = d.U,
        f = d.$,
        h = d.L;
      h = c.type == g.Ra && !(h && h.ka);
      !(c != e || (f && f.ka)) || h
        ? D(C(c), !1)
        : c.type == g.Xa && c != e
        ? ((e = c.ka),
          D(e.B, !1),
          (f = f ? f.ka : null),
          D(d, !0),
          f && f.connect(e))
        : D(d, !0);
      if (c.ka)
        throw Error(
          "markerConnection_ still connected at the end of disconnectInsertionMarker"
        );
      a.oj = null;
      d.za().setAttribute("visibility", "hidden");
    } else console.log("No insertion marker connection to disconnect");
}
g.Jo.prototype.Kk = function () {
  var a = [];
  this.Hk && a.push(this.Hk);
  this.mj && a.push(this.mj);
  return a;
};
g.ri = function (a, c) {
  this.Kb = a;
  this.s = c;
  this.$f = new g.Jo(this.Kb);
  this.Vi = null;
  this.rg = !1;
  this.pg = this.Kb.Sa();
  this.wp = g.ri.JF(a);
};
g.ri.prototype.I = function () {
  this.zc = this.s = this.Kb = null;
  this.wp.length = 0;
  this.$f && (this.$f.I(), (this.$f = null));
};
g.ri.JF = function (a) {
  var c = [];
  a = p(a, !1);
  for (var d = 0, e; (e = a[d]); d++) {
    e = Wa(e);
    for (var f = 0; f < e.length; f++)
      c.push({ location: e[f].dj, icon: e[f] });
  }
  return c;
};
function Xa(a, c, d) {
  d = a.bl(d);
  var e = g.g.V.sum(a.pg, d);
  a.Kb.nu(e);
  for (e = 0; e < a.wp.length; e++) {
    var f = a.wp[e],
      h = f.icon;
    f = g.g.V.sum(f.location, d);
    h.dj = f;
    h.isVisible() && ((h = h.Ub), (h.bc = f), h.zq && Da(h));
  }
  a.Vi = Ya(a.s, c);
  a.$f.update(d, a.Vi);
  a.rg = a.$f.rg;
  c = a.s.cd;
  a.rg
    ? (Za(a.Kb, !0), a.Vi == g.hr && c && $a(c, !0))
    : (Za(a.Kb, !1), c && $a(c, !1));
}
function ab(a, c, d) {
  Xa(a, c, d);
  a.wp = [];
  g.g.o.Nn();
  g.sb.Vs();
  c = a.bl(d);
  d = g.g.V.sum(a.pg, c);
  var e = a.Kb;
  e.ao && (e.translate(d.x, d.y), e.v.je.jp(e.v.kb));
  d = a.s.cd;
  a.rg
    ? (d && setTimeout(d.close.bind(d), 100), a.Dm(), a.Kb.I(!1, !0))
    : d && d.close();
  a.rg ||
    (bb(a.Kb, c.x, c.y),
    a.Kb.Bj(!1),
    a.Dm(),
    a.$f.Jb
      ? ((c = a.$f),
        c.Jb &&
          (g.i.disable(),
          Ua(c),
          g.i.enable(),
          c.Mc.connect(c.Jb),
          c.Bf.ga && (g.sb.eE((F(c.Mc) ? c.Jb : c.Mc).B), cb(db(c.Bf)))))
      : a.Kb.Ea(),
    eb(a.Kb));
  a.s.Qc(!0);
  (c = a.s.sa) &&
    g.g.o.Sb(c.Ec, a.Kb.qe() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  g.i.aa(!1);
}
g.ri.prototype.Dm = function () {
  var a = new g.i.Cl(this.Kb);
  a.vu = this.pg;
  a.zj();
  g.i.Oa(a);
};
g.ri.prototype.bl = function (a) {
  a = new g.g.V(a.x / this.s.scale, a.y / this.s.scale);
  this.s.kj && a.scale(1 / this.s.options.Rb.scale);
  return a;
};
g.ri.prototype.Kk = function () {
  return this.$f && this.$f.Kk ? this.$f.Kk() : [];
};
g.i.tg = function (a) {
  this.Uf = a.id;
  this.Cc = a.v.id;
  this.group = g.i.cc();
  this.Pc = g.i.Pc;
};
g.g.object.X(g.i.tg, g.i.Abstract);
g.i.tg.prototype.fb = function () {
  var a = g.i.tg.w.fb.call(this);
  this.Uf && (a.commentId = this.Uf);
  return a;
};
g.i.tg.prototype.pa = function (a) {
  g.i.tg.w.pa.call(this, a);
  this.Uf = a.commentId;
};
g.i.Xj = function (a, c, d) {
  a && (g.i.Xj.w.constructor.call(this, a), (this.Dz = c), (this.kq = d));
};
g.g.object.X(g.i.Xj, g.i.tg);
b = g.i.Xj.prototype;
b.type = g.i.Ov;
b.fb = function () {
  var a = g.i.Xj.w.fb.call(this);
  a.newContents = this.kq;
  return a;
};
b.pa = function (a) {
  g.i.Xj.w.pa.call(this, a);
  this.kq = a.newValue;
};
b.Uk = function () {
  return this.Dz == this.kq;
};
b.run = function (a) {
  var c;
  (c = ua(this).mp[this.Uf] || null)
    ? c.tM(a ? this.kq : this.Dz)
    : console.warn("Can't change non-existent comment: " + this.Uf);
};
g.i.ug = function (a) {
  a && (g.i.ug.w.constructor.call(this, a), (this.xml = a.tv()));
};
g.g.object.X(g.i.ug, g.i.tg);
g.i.ug.prototype.type = g.i.to;
g.i.ug.prototype.fb = function () {
  var a = g.i.ug.w.fb.call(this);
  a.xml = g.R.Nd(this.xml);
  return a;
};
g.i.ug.prototype.pa = function (a) {
  g.i.ug.w.pa.call(this, a);
  this.xml = g.R.mi(a.xml);
};
g.i.ug.prototype.run = function (a) {
  g.i.Qv(this, a);
};
g.i.Qv = function (a, c) {
  var d = ua(a);
  c
    ? ((c = g.g.xml.createElement("xml")), c.appendChild(a.xml), g.R.Hh(c, d))
    : (d = d.mp[a.Uf] || null)
    ? d.I(!1, !1)
    : console.warn("Can't uncreate non-existent comment: " + a.Uf);
};
g.i.vg = function (a) {
  a && (g.i.vg.w.constructor.call(this, a), (this.xml = a.tv()));
};
g.g.object.X(g.i.vg, g.i.tg);
g.i.vg.prototype.type = g.i.Pv;
g.i.vg.prototype.fb = function () {
  return g.i.vg.w.fb.call(this);
};
g.i.vg.prototype.pa = function (a) {
  g.i.vg.w.pa.call(this, a);
};
g.i.vg.prototype.run = function (a) {
  g.i.Qv(this, !a);
};
g.i.ti = function (a) {
  a &&
    (g.i.ti.w.constructor.call(this, a),
    (this.Es = a),
    (this.wu = a.Jy()),
    (this.qj = null));
};
g.g.object.X(g.i.ti, g.i.tg);
b = g.i.ti.prototype;
b.zj = function () {
  if (!this.Es)
    throw Error(
      "Tried to record the new position of a comment on the same event twice."
    );
  this.qj = this.Es.Jy();
  this.Es = null;
};
b.type = g.i.uo;
b.fb = function () {
  var a = g.i.ti.w.fb.call(this);
  this.qj &&
    (a.newCoordinate = Math.round(this.qj.x) + "," + Math.round(this.qj.y));
  return a;
};
b.pa = function (a) {
  g.i.ti.w.pa.call(this, a);
  a.newCoordinate &&
    ((a = a.newCoordinate.split(",")),
    (this.qj = new g.g.V(Number(a[0]), Number(a[1]))));
};
b.Uk = function () {
  return g.g.V.Le(this.wu, this.qj);
};
b.run = function (a) {
  var c;
  if ((c = ua(this).mp[this.Uf] || null)) {
    a = a ? this.qj : this.wu;
    var d = c.Jy();
    c.moveBy(a.x - d.x, a.y - d.y);
  } else console.warn("Can't move non-existent comment: " + this.Uf);
};
g.Dl = function (a, c) {
  this.uc = a;
  this.s = c;
  this.Vi = null;
  this.Qq = !1;
  this.pg = this.uc.Sa();
  this.Xi = g.g.gj() && c.je ? c.je : null;
};
g.Dl.prototype.I = function () {
  this.Xi = this.s = this.uc = null;
};
function fb(a, c, d) {
  d = a.bl(d);
  d = g.g.V.sum(a.pg, d);
  a.uc.nu(a.Xi, d);
  a.uc.qe() &&
    ((a.Vi = Ya(a.s, c)),
    (a.Qq = a.Vi != g.Tv),
    (c = a.s.cd),
    a.Qq
      ? (Za(a.uc, !0), a.Vi == g.hr && c && $a(c, !0))
      : (Za(a.uc, !1), c && $a(c, !1)));
}
function gb(a, c, d) {
  fb(a, c, d);
  c = a.bl(d);
  c = g.g.V.sum(a.pg, c);
  a.uc.moveTo(c.x, c.y);
  c = a.s.cd;
  a.Qq
    ? (c && setTimeout(c.close.bind(c), 100), a.Dm(), a.uc.I(!1, !0))
    : c && c.close();
  a.Qq || (a.Xi && a.Xi.jp(a.s.zf), a.uc.Bj && a.uc.Bj(!1), a.Dm());
  a.s.Qc(!0);
  a.s.sa &&
    g.g.o.Sb(
      a.s.sa.Ec,
      a.uc.qe() ? "blocklyToolboxDelete" : "blocklyToolboxGrab"
    );
  g.i.aa(!1);
}
g.Dl.prototype.Dm = function () {
  if (this.uc.fz) {
    var a = new g.i.ti(this.uc);
    a.wu = this.pg;
    a.zj();
    g.i.Oa(a);
  }
};
g.Dl.prototype.bl = function (a) {
  a = new g.g.V(a.x / this.s.scale, a.y / this.s.scale);
  this.s.kj && a.scale(1 / this.s.options.Rb.scale);
  return a;
};
g.Dl.prototype.pu = function () {
  this.uc.moveTo(0, 0);
  this.Xi.Mj(this.pg.x, this.pg.y);
  hb(this.Xi, this.uc.za());
};
g.UL = {};
g.kw = 40;
g.sw = 125;
g.xB = 5;
g.GB = 10;
g.wd = 28;
g.iB = g.wd;
g.nB = 8;
g.WB = "#000000";
g.mo = 250;
g.cr = 10;
g.gB = 30;
g.lC = 750;
g.TC = 100;
g.yB = !0;
g.SB = 0.45;
g.TB = 0.65;
g.xd = { width: 96, height: 124, url: "sprites.png" };
g.Ra = 1;
g.bf = 2;
g.Xa = 3;
g.cf = 4;
g.xg = 5;
g.Xq = -1;
g.Dv = 0;
g.fd = 1;
g.CI = 0;
g.DI = 1;
g.AI = 1;
g.BI = 2;
g.jk = [];
g.jk[g.Ra] = g.bf;
g.jk[g.bf] = g.Ra;
g.jk[g.Xa] = g.cf;
g.jk[g.cf] = g.Xa;
g.Fg = 0;
g.Fi = 1;
g.Jd = 2;
g.Eg = 3;
g.Tv = null;
g.hr = 1;
g.Uv = 2;
g.Kw = "VARIABLE";
g.nD = "VARIABLE_DYNAMIC";
g.tw = "PROCEDURE";
g.Aw = "RENAME_VARIABLE_ID";
g.Vv = "DELETE_VARIABLE_ID";
g.dm = function (a) {
  this.s = a;
  this.tA = new g.g.V(a.scrollX, a.scrollY);
};
g.dm.prototype.I = function () {
  this.s = null;
};
g.dm.prototype.mv = function () {
  g.selected && ib(g.selected);
  ra(this.s);
};
g.dm.prototype.Ih = function (a) {
  a = g.g.V.sum(this.tA, a);
  this.s.scroll(a.x, a.y);
};
g.Fo = function (a) {
  g.Fo.w.constructor.call(this, a.Lk());
  this.yc = a.yc;
  this.rf = a.rf;
};
g.g.object.X(g.Fo, g.dm);
g.Fo.prototype.Ih = function (a) {
  a = g.g.V.sum(this.tA, a);
  this.rf ? this.yc.set(-a.x) : this.yc.set(-a.y);
};
g.J = {};
g.J.visible = !1;
g.J.xk = !1;
g.J.fC = 50;
g.J.zz = 0;
g.J.Kn = 0;
g.J.Xt = 0;
g.J.Yt = 0;
g.J.mb = null;
g.J.rq = null;
g.J.nw = 0;
g.J.ow = 10;
g.J.LC = 10;
g.J.RB = 750;
g.J.rr = 5;
g.J.Ca = null;
g.J.Ja = function () {
  g.J.Ca ||
    ((g.J.Ca = document.createElement("div")),
    (g.J.Ca.className = "blocklyTooltipDiv"),
    document.body.appendChild(g.J.Ca));
};
g.J.wk = function (a) {
  g.jd(a, "mouseover", null, g.J.JG);
  g.jd(a, "mouseout", null, g.J.IG);
  a.addEventListener("mousemove", g.J.Fu, !1);
};
g.J.JG = function (a) {
  if (!g.J.xk) {
    for (
      a = a.currentTarget;
      "string" != typeof a.Af && "function" != typeof a.Af;

    )
      a = a.Af;
    g.J.mb != a && (g.J.Ha(), (g.J.rq = null), (g.J.mb = a));
    clearTimeout(g.J.zz);
  }
};
g.J.IG = function () {
  g.J.xk ||
    ((g.J.zz = setTimeout(function () {
      g.J.mb = null;
      g.J.rq = null;
      g.J.Ha();
    }, 1)),
    clearTimeout(g.J.Kn));
};
g.J.Fu = function (a) {
  if (g.J.mb && g.J.mb.Af && !g.J.xk)
    if (g.J.visible) {
      var c = g.J.Xt - a.pageX;
      a = g.J.Yt - a.pageY;
      Math.sqrt(c * c + a * a) > g.J.LC && g.J.Ha();
    } else
      g.J.rq != g.J.mb &&
        (clearTimeout(g.J.Kn),
        (g.J.Xt = a.pageX),
        (g.J.Yt = a.pageY),
        (g.J.Kn = setTimeout(g.J.kH, g.J.RB)));
};
g.J.Ha = function () {
  g.J.visible &&
    ((g.J.visible = !1), g.J.Ca && (g.J.Ca.style.display = "none"));
  g.J.Kn && clearTimeout(g.J.Kn);
};
g.J.block = function () {
  g.J.Ha();
  g.J.xk = !0;
};
g.J.EH = function () {
  g.J.xk = !1;
};
g.J.kH = function () {
  if (!g.J.xk && ((g.J.rq = g.J.mb), g.J.Ca)) {
    g.J.Ca.innerHTML = "";
    for (var a = g.J.mb.Af; "function" == typeof a; ) a = a();
    a = g.g.jb.IA(a, g.J.fC);
    a = a.split("\n");
    for (var c = 0; c < a.length; c++) {
      var d = document.createElement("div");
      d.appendChild(document.createTextNode(a[c]));
      g.J.Ca.appendChild(d);
    }
    a = g.J.mb.G;
    c = document.documentElement.clientWidth;
    d = document.documentElement.clientHeight;
    g.J.Ca.style.direction = a ? "rtl" : "ltr";
    g.J.Ca.style.display = "block";
    g.J.visible = !0;
    var e = g.J.Xt;
    e = a ? e - (g.J.nw + g.J.Ca.offsetWidth) : e + g.J.nw;
    var f = g.J.Yt + g.J.ow;
    f + g.J.Ca.offsetHeight > d + window.scrollY &&
      (f -= g.J.Ca.offsetHeight + 2 * g.J.ow);
    a
      ? (e = Math.max(g.J.rr - window.scrollX, e))
      : e + g.J.Ca.offsetWidth > c + window.scrollX - 2 * g.J.rr &&
        (e = c - g.J.Ca.offsetWidth - 2 * g.J.rr);
    g.J.Ca.style.top = f + "px";
    g.J.Ca.style.left = e + "px";
  }
};
g.$j = function (a, c) {
  this.zc = this.Ac = this.Ej = this.Fj = this.ve = this.zd = this.yz = null;
  this.Is = c;
  this.Vm = this.ij = this.Wm = this.Zi = !1;
  this.vf = a;
  this.O = this.pi = this.gf = this.Ig = this.oq = this.nq = null;
  this.Xp = this.aj = this.bx = !1;
  this.Ty = !g.yB;
};
b = g.$j.prototype;
b.I = function () {
  g.Touch.Dh();
  g.J.EH();
  this.Is.Ic = null;
  this.nq && g.Ua(this.nq);
  this.oq && g.Ua(this.oq);
  this.O = this.zc = this.Ac = this.Ej = this.Fj = null;
  this.gf && (this.gf.I(), (this.gf = null));
  this.pi && (this.pi.I(), (this.pi = null));
  this.Ig && (this.Ig.I(), (this.Ig = null));
};
function jb(a, c) {
  a.zd = g.g.V.Ek(new g.g.V(c.clientX, c.clientY), a.yz);
  if (a.Zi) var d = !1;
  else (a.Zi = g.g.V.aG(a.zd) > (a.O ? g.GB : g.xB)), (d = a.Zi);
  if (d) {
    if (a.bx)
      throw Error("updateIsDragging_ should only be called once per gesture.");
    a.bx = !0;
    if (a.ve) {
      a.Vm = !0;
      a.Ig = new g.Dl(a.ve, a.zc);
      d = a.Ig;
      g.i.cc() || g.i.aa(!0);
      d.s.Qc(!1);
      d.uc.ps = !1;
      d.Xi && d.pu();
      d.uc.Bj && d.uc.Bj(!0);
      var e = d.s.sa;
      e &&
        g.g.o.rb(
          e.Ec,
          d.uc.qe() ? "blocklyToolboxDelete" : "blocklyToolboxGrab"
        );
      fb(a.Ig, a.vf, a.zd);
      d = !0;
    } else d = !1;
    if (!d) {
      if (a.Ac)
        if (
          (a.O
            ? (a.O.ez(a.Ac)
                ? ((d = !kb(a.O)) ||
                    ((d = a.zd),
                    (d = (Math.atan2(d.y, d.x) / Math.PI) * 180),
                    (e = a.O.IE),
                    (d =
                      (d < e && d > -e) || d < -180 + e || d > 180 - e
                        ? !0
                        : !1)),
                  d
                    ? ((a.zc = a.O.ub),
                      lb(a.zc),
                      g.i.cc() || g.i.aa(!0),
                      (a.Ej = null),
                      (a.Ac = mb(a.O, a.Ac)),
                      a.Ac.select(),
                      (d = !0))
                    : (d = !1))
                : (d = !1),
              (a.ij = d))
            : a.Ac.Lc() && (a.ij = !0),
          a.ij)
        ) {
          a.gf = new g.ri(a.Ac, a.zc);
          d = a.gf;
          e = a.zd;
          var f = a.Ty;
          g.i.cc() || g.i.aa(!0);
          d.s.kj && cb(d.Kb);
          g.g.o.Mn();
          d.s.Qc(!1);
          g.sb.Vs();
          if (d.Kb.getParent() || (f && d.Kb.U && C(d.Kb.U)))
            D(d.Kb, f),
              (e = d.bl(e)),
              (e = g.g.V.sum(d.pg, e)),
              d.Kb.translate(e.x, e.y),
              g.sb.CE(d.Kb);
          d.Kb.Bj(!0);
          d.Kb.pu();
          (e = d.s.sa) &&
            g.g.o.rb(
              e.Ec,
              d.Kb.qe() ? "blocklyToolboxDelete" : "blocklyToolboxGrab"
            );
          Xa(a.gf, a.vf, a.zd);
          d = !0;
        } else d = !1;
      else d = !1;
      if ((d = !d))
        if (a.O) d = kb(a.O);
        else if ((d = a.zc)) (d = a.zc), (d = d.options.Nc && d.options.Nc.Ih);
      d &&
        ((a.pi = a.O ? new g.Fo(a.O) : new g.dm(a.zc)), (a.Wm = !0), a.pi.mv());
    }
    g.Zh();
  }
  a.vf = c;
}
b.Ws = function (a) {
  g.g.$p(a)
    ? this.cancel()
    : ((this.aj = !0),
      g.sb.Vs(),
      lb(this.zc),
      this.zc.kj && this.zc.resize(),
      pa(this.zc),
      (this.vf = a),
      g.wc(!!this.O),
      g.J.block(),
      this.Ac &&
        (!this.Ac.ec && a.shiftKey
          ? (g.navigation.ht(), u(this.Is.cb, g.navigation.Bt(this.Ac)))
          : this.Ac.select()),
      g.g.lj(a)
        ? ba(this, a)
        : (("touchstart" != a.type.toLowerCase() &&
            "pointerdown" != a.type.toLowerCase()) ||
            "mouse" == a.pointerType ||
            g.ZF(a, this),
          (this.yz = new g.g.V(a.clientX, a.clientY)),
          (this.Ty = a.altKey || a.ctrlKey || a.metaKey),
          this.wk(a)));
};
b.wk = function (a) {
  this.nq = g.ca(document, "mousemove", null, this.Pm.bind(this));
  this.oq = g.ca(document, "mouseup", null, this.Mp.bind(this));
  a.preventDefault();
  a.stopPropagation();
};
b.Pm = function (a) {
  jb(this, a);
  this.Wm
    ? this.pi.Ih(this.zd)
    : this.ij
    ? Xa(this.gf, this.vf, this.zd)
    : this.Vm && fb(this.Ig, this.vf, this.zd);
  a.preventDefault();
  a.stopPropagation();
};
b.Mp = function (a) {
  jb(this, a);
  g.Zh();
  if (this.Xp) console.log("Trying to end a gesture recursively.");
  else {
    this.Xp = !0;
    if (this.Vm) gb(this.Ig, a, this.zd);
    else if (this.ij) ab(this.gf, a, this.zd);
    else if (this.Wm) {
      var c = this.pi;
      c.Ih(this.zd);
      sa(c.s);
    } else if (this.ve && !this.Zi)
      this.ve.hH && this.ve.hH(), this.ve.select && this.ve.select();
    else if (nb(this)) this.Fj.yf(), ob(this);
    else if (this.Ej && !this.Zi && !nb(this))
      this.O && this.O.vk
        ? this.Ac.isEnabled() &&
          (g.i.cc() || g.i.aa(!0), eb(mb(this.O, this.Ac)))
        : g.i.Oa(new g.i.yd(this.Ej, "click", void 0, void 0)),
        ob(this),
        g.i.aa(!1);
    else if (!(this.Ej || this.ve || this.Fj || this.Zi))
      if (((c = this.Is), a.shiftKey)) {
        g.navigation.ht();
        var d = g.g.eH(c, new g.g.V(a.clientX, a.clientY));
        d = g.F.um(c, d);
        u(c.cb, d);
      } else g.selected && ib(g.selected);
    a.preventDefault();
    a.stopPropagation();
    this.I();
  }
};
b.cancel = function () {
  if (!this.Xp) {
    g.Zh();
    if (this.Vm) gb(this.Ig, this.vf, this.zd);
    else if (this.ij) ab(this.gf, this.vf, this.zd);
    else if (this.Wm) {
      var a = this.pi;
      a.Ih(this.zd);
      sa(a.s);
    }
    this.I();
  }
};
function ba(a, c) {
  a.Ac
    ? (ob(a), g.wc(a.O), a.Ac.Jn(c))
    : a.ve
    ? a.ve.Jn(c)
    : a.zc && !a.O && (g.wc(), a.zc.Jn(c));
  c.preventDefault();
  c.stopPropagation();
  a.I();
}
function pb(a, c, d) {
  if (a.aj)
    throw Error(
      "Tried to call gesture.handleWsStart, but the gesture had already been started."
    );
  a.zc || (a.zc = d);
  a.vf = c;
  a.Ws(c);
  g.Se && g.navigation.eb(g.navigation.Xl);
}
function qb(a, c, d) {
  if (a.aj)
    throw Error(
      "Tried to call gesture.handleFlyoutStart, but the gesture had already been started."
    );
  a.O || (a.O = d);
  pb(a, c, d.Lk());
}
function ob(a) {
  a.Ac && !a.O && cb(a.Ac);
}
function rb(a, c) {
  a.Ej || a.ve || ((a.Ej = c), c.ec && c != db(c) ? sb(a, db(c)) : sb(a, c));
}
function sb(a, c) {
  c.ib ? sb(a, c.getParent()) : (a.Ac = c);
}
function nb(a) {
  if (a.Fj) {
    var c = a.Fj;
    c = !!c.B && c.B.nd() && !!c.yf && "function" === typeof c.yf;
  } else c = !1;
  return c && !a.Zi && (!a.O || !a.O.vk);
}
b.lc = function () {
  return this.Wm || this.ij || this.Vm;
};
b.Kk = function () {
  return this.gf ? this.gf.Kk() : [];
};
g.$j.Mt = function () {
  for (var a = g.Nb.getAll(), c = 0, d; (d = a[c]); c++) if (d.Ic) return !0;
  return !1;
};
g.oa = function (a, c, d) {
  this.zA = this.Oj = this.$a = null;
  this.Bb = new g.g.ge(0, 0);
  this.Yc = null;
  d && this.ld(d);
  this.setValue(a);
  c && (this.Oj = c);
};
g.oa.lo = 16;
g.oa.Hw = 12.5;
g.oa.rk = 10;
g.oa.bs = 10;
g.oa.wg = g.oa.rk / 2;
b = g.oa.prototype;
b.name = void 0;
b.hq = 50;
b.B = null;
b.sf = !0;
b.oi = !0;
b.kp = null;
g.oa.Oo = "\u00a0";
b = g.oa.prototype;
b.Gf = !0;
b.Ei = !1;
b.ld = function (a) {
  var c = a.tooltip;
  "string" == typeof c && (c = g.g.nc(a.tooltip));
  c && this.Ta(c);
};
b.fv = function (a) {
  if (this.B) throw Error("Field already bound to a block.");
  this.B = a;
};
b.Z = function () {
  this.me ||
    ((this.me = g.g.o.K("g", {}, null)),
    this.isVisible() || (this.me.style.display = "none"),
    this.B.za().appendChild(this.me),
    this.Zg(),
    this.ph(),
    this.Ta(this.zA),
    g.J.wk(this.kp || this.za()),
    (this.xz = g.ca(this.kp || this.za(), "mousedown", this, this.ai)),
    this.ej());
};
b.Zg = function () {
  tb(this);
  ub(this);
};
b.ej = function () {};
function tb(a) {
  a.Bb.height = Math.max(a.Bb.height, g.oa.lo);
  a.Bb.width = Math.max(a.Bb.width, g.oa.rk);
  a.Kd = g.g.o.K(
    "rect",
    { rx: 4, ry: 4, x: 0, y: 0, height: a.Bb.height, width: a.Bb.width },
    a.me
  );
}
function ub(a) {
  a.Bc = g.g.o.K(
    "text",
    { class: "blocklyText", y: g.oa.Hw, x: a.Kd ? g.oa.wg : 0 },
    a.me
  );
  a.Kj = document.createTextNode("");
  a.Bc.appendChild(a.Kj);
}
b.Gm = function (a) {
  this.setValue(a.textContent);
};
b.xA = function (a) {
  a.textContent = this.getValue();
  return a;
};
b.I = function () {
  g.D.Ok(this);
  g.ba.Ok(this);
  this.xz && g.Ua(this.xz);
  g.g.o.removeNode(this.me);
};
b.ph = function () {
  var a = this.kp || this.za();
  this.Gf &&
    a &&
    (this.B.nd()
      ? (g.g.o.rb(a, "blocklyEditableText"),
        g.g.o.Sb(a, "blocklyNonEditableText"),
        (a.style.cursor = this.xo))
      : (g.g.o.rb(a, "blocklyNonEditableText"),
        g.g.o.Sb(a, "blocklyEditableText"),
        (a.style.cursor = "")));
};
b.isVisible = function () {
  return this.oi;
};
b.Yb = function (a) {
  if (this.oi != a) {
    this.oi = a;
    var c = this.za();
    c && (c.style.display = a ? "block" : "none");
  }
};
function vb(a, c) {
  a.Oj = c;
}
b.Iy = function () {
  return this.Oj;
};
b.za = function () {
  return this.me;
};
b.Xe = function () {};
b.fh = function () {
  this.Kj && ((this.Kj.nodeValue = this.Ep()), this.zv());
};
b.zv = function () {
  var a = g.g.o.Nm(this.Bc);
  this.Kd && ((a += g.oa.rk), this.Kd.setAttribute("width", a));
  this.Bb.width = a;
};
b.Wg = function () {
  if (!this.isVisible()) return new g.g.ge(0, 0);
  this.sf
    ? (this.fh(), (this.sf = !1))
    : this.oi &&
      0 == this.Bb.width &&
      (console.warn(
        "Deprecated use of setting size_.width to 0 to rerender a field. Set field.isDirty_ to true instead."
      ),
      this.fh());
  return this.Bb;
};
function wb(a) {
  var c = a.Kd.getBBox(),
    d = c.height * a.B.v.scale;
  c = c.width * a.B.v.scale;
  a = g.g.style.Mm(a.Kd);
  return { top: a.y, bottom: a.y + d, left: a.x, right: a.x + c };
}
b.Ep = function () {
  var a = this.dc();
  if (!a) return g.oa.Oo;
  a.length > this.hq && (a = a.substring(0, this.hq - 2) + "\u2026");
  a = a.replace(/\s/g, g.oa.Oo);
  this.B && this.B.G && (a += "\u200f");
  return a;
};
b.dc = function () {
  if (this.Jp) {
    var a = this.Jp.call(this);
    if (null !== a) return String(a);
  }
  return String(this.getValue());
};
b.ll = function () {
  throw Error("setText method is deprecated");
};
b.hn = function () {
  this.sf = !0;
};
function xb(a) {
  a.sf = !0;
  a.B && a.B.ga && (a.B.Ea(), a.B.Pb());
}
b.setValue = function (a) {
  if (null !== a) {
    var c = this.Qg(a);
    a = yb(this, a, c);
    if (!(a instanceof Error)) {
      if ((c = this.Iy()))
        if (((c = c.call(this, a)), (a = yb(this, a, c)), a instanceof Error))
          return;
      c = this.getValue();
      c !== a &&
        (this.B &&
          g.i.isEnabled() &&
          g.i.Oa(new g.i.sg(this.B, "field", this.name || null, c, a)),
        this.Rg(a),
        this.sf && xb(this));
    }
  }
};
function yb(a, c, d) {
  if (null === d) return a.Tx(), a.sf && xb(a), Error();
  void 0 !== d && (c = d);
  return c;
}
b.getValue = function () {
  return this.$a;
};
b.Qg = function (a) {
  return null === a || void 0 === a ? null : a;
};
b.Rg = function (a) {
  this.$a = a;
  this.sf = !0;
};
b.Tx = function () {};
b.ai = function (a) {
  if (this.B && this.B.v && (a = this.B.v.Vg(a))) {
    if (a.aj)
      throw Error(
        "Tried to call gesture.setStartField, but the gesture had already been started."
      );
    a.Fj || (a.Fj = this);
  }
};
b.Ta = function (a) {
  var c = this.kp || this.za();
  c ? (c.Af = a || "" === a ? a : this.B) : (this.zA = a);
};
b.zn = function () {
  return !1;
};
b.ag = function () {
  for (var a = null, c = this.B, d = c.P, e = 0; e < c.P.length; e++)
    for (var f = d[e], h = f.Na, k = 0; k < h.length; k++)
      if (h[k] === this) {
        a = f;
        break;
      }
  return a;
};
b.wy = function () {
  return !1;
};
b.hz = function () {
  return !1;
};
b.gg = function () {
  return !1;
};
b.Hn = function (a) {
  a ? (this.me.appendChild(a), (this.Yc = a)) : (this.Yc = null);
};
b.In = function (a) {
  a && this.me.appendChild(a);
};
g.vc = {};
g.vc.Vn = {};
g.vc.register = function (a, c) {
  if ("string" != typeof a || "" == a.trim())
    throw Error(
      'Invalid field type "' + a + '". The type must be a non-empty string.'
    );
  if (g.vc.Vn[a])
    throw Error('Error: Field "' + a + '" is already registered.');
  if (!c || "function" != typeof c.pa)
    throw Error('Field "' + c + '" must have a fromJson function');
  a = a.toLowerCase();
  g.vc.Vn[a] = c;
};
g.vc.unregister = function (a) {
  g.vc.Vn[a]
    ? delete g.vc.Vn[a]
    : console.warn('No field mapping for type "' + a + '" found to unregister');
};
g.vc.pa = function (a) {
  var c = g.vc.Vn[a.type.toLowerCase()];
  return c
    ? c.pa(a)
    : (console.warn(
        "Blockly could not create a field of type " +
          a.type +
          ". The field is probably not being registered. This could be because the file is not loaded, the field does not register itself (Issue #1584), or the registration is not being reached."
      ),
      null);
};
g.Df = function (a) {
  this.name = a;
};
g.F = function (a, c, d) {
  if (!c) throw Error("Cannot create a node without a location.");
  this.Wn = a;
  this.Um = g.F.OF(a);
  this.ra = c;
  (a = d || null) && a.KA && (this.LA = a.KA);
};
g.F.types = {
  ze: "field",
  ae: "block",
  zg: "input",
  lk: "output",
  De: "next",
  Ge: "previous",
  Lf: "stack",
  Ki: "workspace",
};
g.F.tB = -20;
g.F.OF = function (a) {
  switch (a) {
    case g.F.types.Ge:
    case g.F.types.De:
    case g.F.types.zg:
    case g.F.types.lk:
      return !0;
  }
  return !1;
};
g.F.sm = function (a) {
  return new g.F(g.F.types.ze, a);
};
g.F.Wf = function (a) {
  return a
    ? a.type == g.Ra || (a.type == g.Xa && a.ag())
      ? g.F.Ri(a.ag())
      : a.type == g.Xa
      ? new g.F(g.F.types.De, a)
      : a.type == g.bf
      ? new g.F(g.F.types.lk, a)
      : a.type == g.cf
      ? new g.F(g.F.types.Ge, a)
      : null
    : null;
};
g.F.Ri = function (a) {
  return a ? new g.F(g.F.types.zg, a.connection) : null;
};
g.F.Ng = function (a) {
  return new g.F(g.F.types.ae, a);
};
g.F.tm = function (a) {
  return new g.F(g.F.types.Lf, a);
};
g.F.um = function (a, c) {
  return new g.F(g.F.types.Ki, a, { KA: c });
};
b = g.F.prototype;
b.Qb = function () {
  return this.Wn;
};
function zb(a, c) {
  a = a.ra;
  a instanceof g.no || (a = a.B);
  if (!a || !a.v) return null;
  var d = db(a);
  a = A(d.v, !0);
  for (var e = 0, f; (f = a[e]); e++)
    if (d.id == f.id)
      return (
        (c = e + (c ? 1 : -1)), -1 == c || c == a.length ? null : g.F.tm(a[c])
      );
  throw Error("Couldn't find " + (c ? "next" : "previous") + " stack?!");
}
function Ab(a) {
  if (!a) return null;
  do var c = a.$ && C(a.$);
  while (c && q(c) == a && (a = c));
  return (c = a.$ || a.L) && c.ka && c.ka.ag() ? g.F.Ri(c.ka.ag()) : g.F.tm(a);
}
b.next = function () {
  switch (this.Wn) {
    case g.F.types.Lf:
      return zb(this, !0);
    case g.F.types.lk:
      return g.F.Ng(this.ra.B);
    case g.F.types.ze:
      a: {
        var a = this.ra,
          c = a.ag();
        var d = a.B;
        a = c.Na.indexOf(a) + 1;
        c = d.P.indexOf(c);
        for (var e; (e = d.P[c]); c++) {
          for (var f = e.Na; a < f.length; ) {
            if (f[a].Gf) {
              d = g.F.sm(f[a]);
              break a;
            }
            a++;
          }
          a = 0;
          if (e.connection) {
            d = g.F.Ri(e);
            break a;
          }
        }
        d = null;
      }
      return d;
    case g.F.types.zg:
      a: {
        a = this.ra.ag();
        d = a.B;
        for (a = d.P.indexOf(a) + 1; (c = d.P[a]); a++) {
          e = c.Na;
          f = 0;
          for (var h; (h = e[f]); f++)
            if (h.Gf) {
              d = g.F.sm(h);
              break a;
            }
          if (c.connection) {
            d = g.F.Ri(c);
            break a;
          }
        }
        d = null;
      }
      return d;
    case g.F.types.ae:
      if ((d = this.ra.U)) return g.F.Wf(d);
      break;
    case g.F.types.Ge:
      return g.F.Ng(this.ra.B);
    case g.F.types.De:
      if ((d = this.ra.ka)) return g.F.Wf(d);
  }
  return null;
};
b.Sm = function () {
  switch (this.Wn) {
    case g.F.types.Ki:
      var a = A(this.ra, !0);
      if (0 < a.length) return g.F.tm(a[0]);
      break;
    case g.F.types.Lf:
      a = this.ra;
      var c = a.$ || a.L;
      return c ? g.F.Wf(c) : g.F.Ng(a);
    case g.F.types.ae:
      a: {
        a = this.ra.P;
        c = 0;
        for (var d; (d = a[c]); c++) {
          for (var e = d.Na, f = 0, h; (h = e[f]); f++)
            if (h.Gf) {
              a = g.F.sm(h);
              break a;
            }
          if (d.connection) {
            a = g.F.Ri(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.F.types.zg:
      if ((a = this.ra.ka)) return g.F.Wf(a);
  }
  return null;
};
b.lg = function () {
  switch (this.Wn) {
    case g.F.types.Lf:
      return zb(this, !1);
    case g.F.types.ze:
      a: {
        var a = this.ra;
        var c = a.ag();
        var d = a.B;
        a = c.Na.indexOf(a) - 1;
        for (var e = d.P.indexOf(c), f; (f = d.P[e]); e--) {
          if (f.connection && f !== c) {
            c = g.F.Ri(f);
            break a;
          }
          for (f = f.Na; -1 < a; ) {
            if (f[a].Gf) {
              c = g.F.sm(f[a]);
              break a;
            }
            a--;
          }
          0 <= e - 1 && (a = d.P[e - 1].Na.length - 1);
        }
        c = null;
      }
      return c;
    case g.F.types.zg:
      a: {
        c = this.ra.ag();
        d = c.B;
        for (a = d.P.indexOf(c); (e = d.P[a]); a--) {
          if (e.connection && e !== c) {
            c = g.F.Ri(e);
            break a;
          }
          e = e.Na;
          f = e.length - 1;
          for (var h; (h = e[f]); f--)
            if (h.Gf) {
              c = g.F.sm(h);
              break a;
            }
        }
        c = null;
      }
      return c;
    case g.F.types.ae:
      c = this.ra.L;
      if ((c = this.ra.$ || c)) return g.F.Wf(c);
      break;
    case g.F.types.Ge:
      if ((c = this.ra.ka) && !c.ag()) return g.F.Wf(c);
      break;
    case g.F.types.De:
      return g.F.Ng(this.ra.B);
  }
  return null;
};
b.rn = function () {
  switch (this.Wn) {
    case g.F.types.Lf:
      var a = this.ra.Sa();
      return g.F.um(this.ra.v, new g.g.V(a.x, a.y + g.F.tB));
    case g.F.types.lk:
      return (a = this.ra.ka) ? g.F.Wf(a) : g.F.tm(this.ra.B);
    case g.F.types.ze:
      return g.F.Ng(this.ra.B);
    case g.F.types.zg:
      return g.F.Ng(this.ra.B);
    case g.F.types.ae:
      return Ab(this.ra);
    case g.F.types.Ge:
      return Ab(this.ra.B);
    case g.F.types.De:
      return Ab(this.ra.B);
  }
  return null;
};
g.g.ya = {
  JL: 0,
  CJ: 3,
  XA: 8,
  Fw: 9,
  UJ: 12,
  Gl: 13,
  RC: 16,
  pI: 17,
  SA: 18,
  IK: 19,
  cI: 20,
  jr: 27,
  nL: 32,
  HK: 33,
  GK: 34,
  HI: 35,
  mJ: 36,
  Ko: 37,
  am: 38,
  To: 39,
  Fl: 40,
  LK: 43,
  NK: 44,
  mr: 45,
  El: 46,
  ZERO: 48,
  ONE: 49,
  BL: 50,
  vL: 51,
  eJ: 52,
  bJ: 53,
  jL: 54,
  hL: 55,
  GI: 56,
  QJ: 57,
  $I: 59,
  YI: 61,
  XI: 173,
  ZI: 163,
  PK: 63,
  VH: 64,
  NA: 65,
  XH: 66,
  bB: 67,
  sB: 68,
  E: 69,
  JI: 70,
  fJ: 71,
  hJ: 72,
  UB: 73,
  rJ: 74,
  cC: 75,
  sJ: 76,
  BJ: 77,
  OJ: 78,
  jK: 79,
  FK: 80,
  Q: 81,
  QK: 82,
  OC: 83,
  ZC: 84,
  CL: 85,
  kD: 86,
  oD: 87,
  Rw: 88,
  ML: 89,
  uD: 90,
  uC: 91,
  KL: 92,
  nI: 93,
  iK: 96,
  bK: 97,
  hK: 98,
  gK: 99,
  YJ: 100,
  XJ: 101,
  fK: 102,
  eK: 103,
  WJ: 104,
  aK: 105,
  $J: 106,
  dK: 107,
  ZJ: 109,
  cK: 110,
  VJ: 111,
  KI: 112,
  OI: 113,
  QI: 114,
  RI: 115,
  SI: 116,
  TI: 117,
  UI: 118,
  VI: 119,
  WI: 120,
  LI: 121,
  MI: 122,
  NI: 123,
  TJ: 144,
  dL: 145,
  aJ: 166,
  tJ: 183,
  fL: 186,
  qI: 189,
  II: 187,
  kI: 188,
  JK: 190,
  kL: 191,
  RH: 192,
  wL: 192,
  iL: 222,
  kK: 219,
  YH: 220,
  gI: 221,
  IL: 224,
  DJ: 224,
  EJ: 91,
  FJ: 93,
  HL: 229,
  GL: 252,
  KK: 255,
};
g.xb = {};
g.xb.tb = {};
g.xb.tb.nj = {};
g.xb.tb.lu = { RC: "Shift", kB: "Control", SA: "Alt", uC: "Meta" };
g.xb.tb.rM = function (a, c) {
  var d = g.xb.tb.iF(c);
  d && delete g.xb.tb.nj[d];
  g.xb.tb.nj[a] = c;
};
g.xb.tb.iH = function (a) {
  g.xb.tb.nj = a;
};
g.xb.tb.$L = function () {
  var a = {};
  g.g.object.eg(a, g.xb.tb.nj);
  return a;
};
g.xb.tb.VE = function (a) {
  return g.xb.tb.nj[a];
};
g.xb.tb.iF = function (a) {
  for (var c = Object.keys(g.xb.tb.nj), d = 0, e; (e = c[d]); d++)
    if (g.xb.tb.nj[e].name === a.name) return e;
  return null;
};
g.xb.tb.fH = function (a) {
  for (var c = g.g.object.values(g.xb.tb.lu), d = "", e = 0, f; (f = c[e]); e++)
    a.getModifierState(f) && (d += f);
  return (d += a.keyCode);
};
g.xb.tb.iE = function () {
  for (
    var a = g.g.ya.cC,
      c = [g.xb.tb.lu.kB],
      d = "",
      e = g.g.object.values(g.xb.tb.lu),
      f = 0,
      h;
    (h = c[f]);
    f++
  )
    if (-1 < e.indexOf(h)) d += h;
    else throw Error(h + " is not a valid modifier key.");
  return d + a;
};
g.xb.tb.gE = function () {
  var a = {},
    c = g.xb.tb.iE();
  a[g.g.ya.oD] = g.navigation.fo;
  a[g.g.ya.NA] = g.navigation.Vq;
  a[g.g.ya.OC] = g.navigation.eo;
  a[g.g.ya.sB] = g.navigation.Uq;
  a[g.g.ya.UB] = g.navigation.PA;
  a[g.g.ya.Gl] = g.navigation.QA;
  a[g.g.ya.Rw] = g.navigation.OA;
  a[g.g.ya.ZC] = g.navigation.RA;
  a[g.g.ya.E] = g.navigation.Tq;
  a[g.g.ya.jr] = g.navigation.Tq;
  a[c] = g.navigation.Cv;
  return a;
};
g.navigation = {};
g.navigation.Zk = null;
g.navigation.Ew = 1;
g.navigation.Xl = 2;
g.navigation.Rr = 3;
g.navigation.Si = g.navigation.Xl;
g.navigation.hb = {
  Ge: "previous",
  De: "next",
  Ho: "in",
  So: "out",
  mr: "insert",
  wr: "mark",
  Wv: "disconnect",
  Iw: "toolbox",
  kr: "exit",
  Tr: "toggle_keyboard_nav",
};
g.navigation.jy = function () {
  var a = g.Gb(),
    c = a.sa;
  c &&
    ((g.navigation.Si = g.navigation.Rr),
    g.navigation.dA(!1),
    a.fc.Vb || g.navigation.iu(),
    c.Fd.Ud || ((a = c.Fd), (c = a.Pe()) && a.ey && Bb(c, a.ey)));
};
g.navigation.iy = function () {
  g.navigation.Si = g.navigation.Ew;
  var a = g.Gb();
  var c = a.sa;
  c = c ? c.O : Cb(a);
  a.fc.Vb || g.navigation.iu();
  c &&
    c.Lk() &&
    ((a = A(c.Lk(), !0)),
    0 < a.length && ((a = a[0]), (a = g.F.tm(a)), u(g.navigation.Lh(), a)));
};
g.navigation.Bp = function () {
  g.wc();
  var a = g.Gb(),
    c = a.cb,
    d = !!a.sa,
    e = A(a, !0);
  g.navigation.dA(d);
  g.navigation.Si = g.navigation.Xl;
  0 < e.length
    ? u(c, g.navigation.Bt(e[0]))
    : ((a = g.F.um(a, new g.g.V(100, 100))), u(c, a));
};
g.navigation.Lh = function () {
  var a = g.Gb(),
    c = null;
  a.ga && (c = (a = (c = a.sa) ? c.O : Cb(a)) ? a.s.cb : null);
  return c;
};
g.navigation.NF = function () {
  var a = g.Gb(),
    c = Cb(a);
  if (c && c.isVisible()) {
    var d = g.navigation.Lh().Vb.ra;
    d.isEnabled()
      ? ((c = mb(c, d)),
        c.Ea(),
        Db(c, !1),
        u(a.cb, g.F.Ng(c)),
        g.navigation.wz() ||
          g.navigation.rd(
            "Something went wrong while inserting a block from the flyout."
          ),
        g.navigation.Bp(),
        u(a.cb, g.navigation.Bt(c)),
        g.navigation.YG())
      : g.navigation.rd("Can't insert a disabled block.");
  } else
    g.navigation.rd(
      "Trying to insert from the flyout when the flyout does not  exist or is not visible"
    );
};
g.navigation.dA = function (a) {
  g.navigation.Lh() && (g.navigation.Lh().Ha(), a && Cb(g.Gb()).Ha());
};
g.navigation.cG = function () {
  var a = g.Gb().fc.Vb,
    c = g.Gb().cb.Vb;
  if (!a) return g.navigation.rd("Cannot insert with no marked node."), !1;
  if (!c) return g.navigation.rd("Cannot insert with no cursor node."), !1;
  a = a.Qb();
  c = c.Qb();
  return a == g.F.types.ze
    ? (g.navigation.rd("Should not have been able to mark a field."), !1)
    : a == g.F.types.ae
    ? (g.navigation.rd("Should not have been able to mark a block."), !1)
    : a == g.F.types.Lf
    ? (g.navigation.rd("Should not have been able to mark a stack."), !1)
    : c == g.F.types.ze
    ? (g.navigation.rd("Cannot attach a field to anything else."), !1)
    : c == g.F.types.Ki
    ? (g.navigation.rd("Cannot attach a workspace to anything else."), !1)
    : !0;
};
g.navigation.iG = function (a, c) {
  if (a.ib)
    return g.navigation.rd("Cannot move a shadow block to the workspace."), !1;
  a.getParent() && D(a, !1);
  a.moveTo(c.LA);
  return !0;
};
g.navigation.wz = function () {
  var a = g.Gb().fc.Vb,
    c = g.Gb().cb.Vb;
  if (!g.navigation.cG()) return !1;
  var d = a.Qb(),
    e = c.Qb(),
    f = c.ra,
    h = a.ra;
  if (a.Um && c.Um) return g.navigation.hf(f, h);
  if (a.Um && (e == g.F.types.ae || e == g.F.types.Lf))
    return g.navigation.bz(f, h);
  if (d == g.F.types.Ki) return (c = g.navigation.zt(c)), g.navigation.iG(c, a);
  g.navigation.rd("Unexpected state in Blockly.navigation.modify_.");
  return !1;
};
g.navigation.BE = function (a, c) {
  var d = a.B,
    e = c.B;
  db(d) == db(e) &&
    (-1 < p(d, !1).indexOf(e)
      ? g.navigation.Gp(c).disconnect()
      : g.navigation.Gp(a).disconnect());
};
g.navigation.mu = function (a, c) {
  if (!a || !c) return !1;
  var d = a.B;
  return Eb(c, a) == g.ta.po
    ? (g.navigation.BE(a, c),
      F(c) ||
        (a.type != g.Xa && a.type != g.Ra) ||
        db(d).moveBy(c.$b - a.$b, c.gb - a.gb),
      c.connect(a),
      !0)
    : !1;
};
g.navigation.Gp = function (a) {
  var c = a.B;
  return F(a) ? (c.$ ? c.$ : c.L ? c.L : null) : a;
};
g.navigation.Gy = function (a) {
  return F(a) ? a : a.ka ? a.ka : null;
};
g.navigation.hf = function (a, c) {
  if (!a || !c) return !1;
  var d = g.navigation.Gp(a),
    e = g.navigation.Gy(c),
    f = g.navigation.Gy(a),
    h = g.navigation.Gp(c);
  if (
    (d && e && g.navigation.mu(d, e)) ||
    (f && h && g.navigation.mu(f, h)) ||
    g.navigation.mu(a, c)
  )
    return !0;
  try {
    Fb(c, a);
  } catch (k) {
    g.navigation.rd("Connection failed with error: " + k);
  }
  return !1;
};
g.navigation.bz = function (a, c) {
  switch (c.type) {
    case g.cf:
      if (g.navigation.hf(a.U, c)) return !0;
      break;
    case g.Xa:
      if (g.navigation.hf(a.$, c)) return !0;
      break;
    case g.Ra:
      if (g.navigation.hf(a.L, c)) return !0;
      break;
    case g.bf:
      for (var d = 0; d < a.P.length; d++) {
        var e = a.P[d].connection;
        if (e && e.type === g.Ra && g.navigation.hf(e, c)) return !0;
      }
      if (a.L && g.navigation.hf(a.L, c)) return !0;
  }
  g.navigation.rd("This block can not be inserted at the marked location.");
  return !1;
};
g.navigation.AE = function () {
  var a = g.Gb(),
    c = a.cb.Vb;
  if (c.Um) {
    var d = c.ra;
    d.isConnected()
      ? ((c = F(d) ? d : d.ka),
        (d = F(d) ? d.ka : d),
        d.B.ib
          ? g.navigation.bu("Cannot disconnect a shadow block")
          : (c.disconnect(),
            Gb(d, c),
            cb(db(c.B)),
            (c = g.F.Wf(c)),
            u(a.cb, c)))
      : g.navigation.bu("Cannot disconnect unconnected connection");
  } else
    g.navigation.bu(
      "Cannot disconnect blocks when the cursor is not on a connection"
    );
};
g.navigation.iu = function () {
  var a = g.Gb();
  u(a.fc, a.cb.Vb);
};
g.navigation.YG = function () {
  var a = g.Gb();
  u(a.fc, null);
  a.fc.Ha();
};
g.navigation.eb = function (a) {
  g.navigation.Si = a;
};
g.navigation.zt = function (a) {
  return a
    ? a.Qb() === g.F.types.ae
      ? a.ra
      : a.Qb() === g.F.types.Lf
      ? a.ra
      : a.Qb() === g.F.types.Ki
      ? null
      : a.ra.B
    : null;
};
g.navigation.Bt = function (a) {
  var c = a.$ || a.L;
  return c ? g.F.Wf(c) : g.F.Ng(a);
};
g.navigation.Bz = function (a) {
  var c = g.Gb();
  if (c && (c = c.cb)) {
    var d = g.navigation.zt(c.Vb);
    d === a
      ? d.getParent()
        ? (a = d.$ || d.L) && u(c, g.F.Wf(a.ka))
        : u(c, g.F.um(d.v, d.Sa()))
      : -1 < a.Kh(!1).indexOf(d) && u(c, g.F.um(d.v, d.Sa()));
  }
};
g.navigation.jG = function (a) {
  var c = g.Gb().cb;
  if (c) {
    var d = g.navigation.zt(c.Vb);
    d === a && u(c, g.F.Ng(d));
  }
};
g.navigation.ht = function () {
  g.Se || ((g.Se = !0), g.navigation.Bp());
};
g.navigation.yE = function () {
  if (g.Se) {
    var a = g.Gb();
    g.Se = !1;
    a.cb.Ha();
    a.fc.Ha();
    g.navigation.Lh() && g.navigation.Lh().Ha();
  }
};
g.navigation.bu = function (a) {
  g.navigation.Zk ? g.navigation.Zk("log", a) : console.log(a);
};
g.navigation.rd = function (a) {
  g.navigation.Zk ? g.navigation.Zk("warn", a) : console.warn(a);
};
g.navigation.WL = function (a) {
  g.navigation.Zk ? g.navigation.Zk("error", a) : console.error(a);
};
g.navigation.Kz = function (a) {
  a = g.xb.tb.fH(a);
  return (a = g.xb.tb.VE(a)) ? g.navigation.gg(a) : !1;
};
g.navigation.gg = function (a) {
  var c = g.Gb().options.readOnly,
    d = !1;
  g.Se
    ? c
      ? -1 < g.navigation.MC.indexOf(a) && (d = g.navigation.Ny(a))
      : (d = g.navigation.Ny(a))
    : a.name === g.navigation.hb.Tr && (g.navigation.ht(), (d = !0));
  return d;
};
g.navigation.Ny = function (a) {
  var c = g.Gb();
  if (a.name === g.navigation.hb.Tr) return g.navigation.yE(), !0;
  if (a.name === g.navigation.hb.Iw)
    return c.sa ? g.navigation.jy() : g.navigation.iy(), !0;
  if (g.navigation.Si === g.navigation.Xl) {
    c = c.cb.Vb;
    var d = !1;
    c && c.Qb() === g.F.types.ze && (d = c.ra.gg(a));
    d || (d = g.navigation.LH(a));
    return d;
  }
  return g.navigation.Si === g.navigation.Ew
    ? g.navigation.UE(a)
    : g.navigation.Si === g.navigation.Rr
    ? g.navigation.AH(a)
    : !1;
};
g.navigation.LH = function (a) {
  var c = g.Gb();
  switch (a.name) {
    case g.navigation.hb.Ge:
      return c.cb.lg(), !0;
    case g.navigation.hb.So:
      return c.cb.rn(), !0;
    case g.navigation.hb.De:
      return c.cb.next(), !0;
    case g.navigation.hb.Ho:
      return c.cb.Sm(), !0;
    case g.navigation.hb.mr:
      return g.navigation.wz(), !0;
    case g.navigation.hb.wr:
      return g.navigation.qF(), !0;
    case g.navigation.hb.Wv:
      return g.navigation.AE(), !0;
    default:
      return !1;
  }
};
g.navigation.UE = function (a) {
  switch (a.name) {
    case g.navigation.hb.Ge:
      return g.navigation.Lh().lg(), !0;
    case g.navigation.hb.So:
      return g.navigation.jy(), !0;
    case g.navigation.hb.De:
      return g.navigation.Lh().next(), !0;
    case g.navigation.hb.wr:
      return g.navigation.NF(), !0;
    case g.navigation.hb.kr:
      return g.navigation.Bp(), !0;
    default:
      return !1;
  }
};
g.navigation.AH = function (a) {
  if (a.name === g.navigation.hb.kr) return g.navigation.Bp(), !0;
  var c = g.Gb().sa.gg(a);
  return c || a.name !== g.navigation.hb.Ho ? c : (g.navigation.iy(), !0);
};
g.navigation.qF = function () {
  var a = g.Gb().cb.Vb,
    c = a.Qb();
  c == g.F.types.ze
    ? a.ra.yf()
    : a.Um || c == g.F.types.Ki
    ? g.navigation.iu()
    : c == g.F.types.ae
    ? g.navigation.rd("Cannot mark a block.")
    : c == g.F.types.Lf && g.navigation.rd("Cannot mark a stack.");
};
g.navigation.fo = new g.Df(g.navigation.hb.Ge);
g.navigation.Vq = new g.Df(g.navigation.hb.So);
g.navigation.eo = new g.Df(g.navigation.hb.De);
g.navigation.Uq = new g.Df(g.navigation.hb.Ho);
g.navigation.PA = new g.Df(g.navigation.hb.mr);
g.navigation.QA = new g.Df(g.navigation.hb.wr);
g.navigation.OA = new g.Df(g.navigation.hb.Wv);
g.navigation.RA = new g.Df(g.navigation.hb.Iw);
g.navigation.Tq = new g.Df(g.navigation.hb.kr);
g.navigation.Cv = new g.Df(g.navigation.hb.Tr);
g.navigation.MC = [
  g.navigation.fo,
  g.navigation.Vq,
  g.navigation.Uq,
  g.navigation.eo,
  g.navigation.Cv,
];
g.g.M = {};
g.g.M.UA = "aria-";
g.g.M.Mr = "role";
g.g.M.Kf = {
  PH: "alert",
  QH: "alertdialog",
  SH: "application",
  TH: "article",
  ZH: "banner",
  bI: "button",
  dI: "checkbox",
  iI: "columnheader",
  jI: "combobox",
  lI: "complementary",
  mI: "contentinfo",
  tI: "definition",
  wI: "dialog",
  xI: "directory",
  zI: "document",
  dJ: "form",
  MB: "grid",
  NB: "gridcell",
  OB: "group",
  kJ: "heading",
  nJ: "img",
  vJ: "link",
  wJ: "list",
  xJ: "listbox",
  yJ: "listitem",
  AJ: "log",
  GJ: "main",
  HJ: "marquee",
  IJ: "math",
  rC: "menu",
  KJ: "menubar",
  sC: "menuitem",
  tC: "menuitemcheckbox",
  LJ: "menuitemradio",
  PJ: "navigation",
  SJ: "note",
  mK: "option",
  GC: "presentation",
  OK: "progressbar",
  RK: "radio",
  SK: "radiogroup",
  UK: "region",
  Uo: "row",
  $K: "rowgroup",
  aL: "rowheader",
  cL: "scrollbar",
  eL: "search",
  gL: "separator",
  lL: "slider",
  oL: "spinbutton",
  pL: "status",
  Fw: "tab",
  qL: "table",
  rL: "tablist",
  sL: "tabpanel",
  tL: "textbox",
  uL: "textinfo",
  xL: "timer",
  yL: "toolbar",
  zL: "tooltip",
  hD: "tree",
  AL: "treegrid",
  iD: "treeitem",
};
g.g.M.State = {
  Wq: "activedescendant",
  UH: "atomic",
  WH: "autocomplete",
  aI: "busy",
  eI: "checked",
  hI: "colindex",
  oI: "controls",
  vI: "describedby",
  yI: "disabled",
  EI: "dropeffect",
  Do: "expanded",
  cJ: "flowto",
  gJ: "grabbed",
  iJ: "haspopup",
  lJ: "hidden",
  pJ: "invalid",
  dC: "label",
  jw: "labelledby",
  eC: "level",
  zJ: "live",
  MJ: "multiline",
  NJ: "multiselectable",
  CC: "orientation",
  EK: "owns",
  FC: "posinset",
  MK: "pressed",
  TK: "readonly",
  VK: "relevant",
  YK: "required",
  bL: "rowindex",
  mk: "selected",
  QC: "setsize",
  mL: "sort",
  lD: "valuemax",
  mD: "valuemin",
  DL: "valuenow",
  EL: "valuetext",
};
g.g.M.ue = function (a, c) {
  c ? a.setAttribute(g.g.M.Mr, c) : g.g.M.ZG(a);
};
g.g.M.aM = function (a) {
  return a.getAttribute(g.g.M.Mr) || null;
};
g.g.M.ZG = function (a) {
  a.removeAttribute(g.g.M.Mr);
};
g.g.M.eb = function (a, c, d) {
  Array.isArray(d) && (d = d.join(" "));
  a.setAttribute(g.g.M.WE(c), d);
};
g.g.M.WE = function (a) {
  return g.g.M.UA + a;
};
g.g.Ab = {};
g.g.Ab.parse = function (a) {
  a = String(a).toLowerCase().trim();
  var c = g.g.Ab.names[a];
  if (c) return c;
  c = "#" == a[0] ? a : "#" + a;
  if (/^#[0-9a-f]{6}$/.test(c)) return c;
  if (/^#[0-9a-f]{3}$/.test(c))
    return ["#", c[1], c[1], c[2], c[2], c[3], c[3]].join("");
  var d = a.match(/^(?:rgb)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
  return d &&
    ((a = Number(d[1])),
    (c = Number(d[2])),
    (d = Number(d[3])),
    0 <= a && 256 > a && 0 <= c && 256 > c && 0 <= d && 256 > d)
    ? g.g.Ab.Xu(a, c, d)
    : null;
};
g.g.Ab.Xu = function (a, c, d) {
  c = (a << 16) | (c << 8) | d;
  return 16 > a
    ? "#" + (16777216 | c).toString(16).substr(1)
    : "#" + c.toString(16);
};
g.g.Ab.Uy = function (a) {
  a = parseInt(a.substr(1), 16);
  return [a >> 16, (a >> 8) & 255, a & 255];
};
g.g.Ab.EF = function (a) {
  var c = g.SB,
    d = 255 * g.TB,
    e = 0,
    f = 0,
    h = 0;
  if (0 == c) h = f = e = d;
  else {
    var k = Math.floor(a / 60),
      l = a / 60 - k;
    a = d * (1 - c);
    var m = d * (1 - c * l);
    c = d * (1 - c * (1 - l));
    switch (k) {
      case 1:
        e = m;
        f = d;
        h = a;
        break;
      case 2:
        e = a;
        f = d;
        h = c;
        break;
      case 3:
        e = a;
        f = m;
        h = d;
        break;
      case 4:
        e = c;
        f = a;
        h = d;
        break;
      case 5:
        e = d;
        f = a;
        h = m;
        break;
      case 6:
      case 0:
        (e = d), (f = c), (h = a);
    }
  }
  return g.g.Ab.Xu(Math.floor(e), Math.floor(f), Math.floor(h));
};
g.g.Ab.rs = function (a, c, d) {
  a = g.g.Ab.Uy(g.g.Ab.parse(a));
  c = g.g.Ab.Uy(g.g.Ab.parse(c));
  return g.g.Ab.Xu(
    Math.round(c[0] + d * (a[0] - c[0])),
    Math.round(c[1] + d * (a[1] - c[1])),
    Math.round(c[2] + d * (a[2] - c[2]))
  );
};
g.g.Ab.names = {
  aqua: "#00ffff",
  black: "#000000",
  blue: "#0000ff",
  fuchsia: "#ff00ff",
  gray: "#808080",
  green: "#008000",
  lime: "#00ff00",
  maroon: "#800000",
  navy: "#000080",
  olive: "#808000",
  purple: "#800080",
  red: "#ff0000",
  silver: "#c0c0c0",
  teal: "#008080",
  white: "#ffffff",
  yellow: "#ffff00",
};
g.g.Ol = {};
g.g.Ol.pG = 0;
g.g.Ol.yy = function () {
  return "blockly:" + (g.g.Ol.pG++).toString(36);
};
g.Ib = function (a, c, d) {
  g.Ib.w.constructor.call(this, a || g.Ib.qo[0], c, d);
  this.Bb = new g.g.ge(g.Ib.vB, g.oa.lo);
};
g.g.object.X(g.Ib, g.oa);
g.Ib.pa = function (a) {
  return new g.Ib(a.colour, void 0, a);
};
g.Ib.vB = 26;
g.Ib.sI = g.oa.lo;
b = g.Ib.prototype;
b.Ei = !0;
b.xo = "default";
b.sf = !1;
b.Ds = null;
b.wA = null;
b.lm = 0;
b.ld = function (a) {
  g.Ib.w.ld.call(this, a);
  a.colourOptions && ((this.Ds = a.colourOptions), (this.wA = a.colourTitles));
  a.columns && (this.lm = a.columns);
};
b.Zg = function () {
  tb(this);
  this.Kd.style.fillOpacity = 1;
  this.Kd.style.fill = this.$a;
};
b.Qg = function (a) {
  return "string" != typeof a ? null : g.g.Ab.parse(a);
};
b.Rg = function (a) {
  this.$a = a;
  this.Kd && (this.Kd.style.fill = a);
};
b.dc = function () {
  var a = this.$a;
  /^#(.)\1(.)\2(.)\3$/.test(a) && (a = "#" + a[1] + a[3] + a[5]);
  return a;
};
g.Ib.qo =
  "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(
    " "
  );
g.Ib.gD = [];
g.Ib.so = 7;
b = g.Ib.prototype;
b.setColumns = function (a) {
  this.lm = a;
  return this;
};
b.yf = function () {
  this.dh = this.ft();
  g.D.sy().appendChild(this.dh);
  g.D.oA(this, this.gt.bind(this));
  this.dh.focus();
};
b.lq = function (a) {
  a = (a = a.target) && a.label;
  null !== a && (this.setValue(a), g.D.Ok(this));
};
b.Eu = function (a) {
  var c = !1;
  if (a.keyCode === g.g.ya.am) Hb(this, 0, -1), (c = !0);
  else if (a.keyCode === g.g.ya.Fl) Hb(this, 0, 1), (c = !0);
  else if (a.keyCode === g.g.ya.Ko) Hb(this, -1, 0), (c = !0);
  else if (a.keyCode === g.g.ya.To) Hb(this, 1, 0), (c = !0);
  else if (a.keyCode === g.g.ya.Gl) {
    if ((c = Ib(this))) (c = c && c.label), null !== c && this.setValue(c);
    g.D.bj();
    c = !0;
  }
  c && a.stopPropagation();
};
b.gg = function (a) {
  if (this.dh) {
    if (a === g.navigation.fo) return Hb(this, 0, -1), !0;
    if (a === g.navigation.eo) return Hb(this, 0, 1), !0;
    if (a === g.navigation.Vq) return Hb(this, -1, 0), !0;
    if (a === g.navigation.Uq) return Hb(this, 1, 0), !0;
  }
  return g.Ib.w.gg.call(this, a);
};
function Hb(a, c, d) {
  var e = a.Ds || g.Ib.qo,
    f = a.lm || g.Ib.so,
    h = a.md % f,
    k = Math.floor(a.md / f);
  h += c;
  k += d;
  0 > c
    ? 0 > h && 0 < k
      ? ((h = f - 1), k--)
      : 0 > h && (h = 0)
    : 0 < c
    ? h > f - 1 && k < Math.floor(e.length / f) - 1
      ? ((h = 0), k++)
      : h > f - 1 && h--
    : 0 > d
    ? 0 > k && (k = 0)
    : 0 < d &&
      k > Math.floor(e.length / f) - 1 &&
      (k = Math.floor(e.length / f) - 1);
  Jb(a, a.dh.childNodes[k].childNodes[h], k * f + h);
}
b.Fu = function (a) {
  var c = (a = a.target) && a.getAttribute("data-index");
  null !== c && c !== this.md && Jb(this, a, Number(c));
};
b.EG = function () {
  this.dh.focus();
};
b.GG = function () {
  this.dh.blur();
  var a = Ib(this);
  a && g.g.o.Sb(a, "blocklyColourHighlighted");
};
function Ib(a) {
  var c = a.lm || g.Ib.so,
    d = a.dh.childNodes[Math.floor(a.md / c)];
  return d ? d.childNodes[a.md % c] : null;
}
function Jb(a, c, d) {
  var e = Ib(a);
  e && g.g.o.Sb(e, "blocklyColourHighlighted");
  g.g.o.rb(c, "blocklyColourHighlighted");
  a.md = d;
  g.g.M.eb(a.dh, g.g.M.State.Wq, c.getAttribute("id"));
}
b.ft = function () {
  var a = this.lm || g.Ib.so,
    c = this.Ds || g.Ib.qo,
    d = this.wA || g.Ib.gD,
    e = this.getValue(),
    f = document.createElement("table");
  f.className = "blocklyColourTable";
  f.tabIndex = 0;
  f.dir = "ltr";
  g.g.M.ue(f, g.g.M.Kf.MB);
  g.g.M.eb(f, g.g.M.State.Do, !0);
  g.g.M.eb(f, "rowcount", Math.floor(c.length / a));
  g.g.M.eb(f, "colcount", a);
  for (var h, k = 0; k < c.length; k++) {
    0 == k % a &&
      ((h = document.createElement("tr")),
      g.g.M.ue(h, g.g.M.Kf.Uo),
      f.appendChild(h));
    var l = document.createElement("td");
    h.appendChild(l);
    l.label = c[k];
    l.title = d[k] || c[k];
    l.id = g.g.Ol.yy();
    l.setAttribute("data-index", k);
    g.g.M.ue(l, g.g.M.Kf.NB);
    g.g.M.eb(l, g.g.M.State.dC, c[k]);
    g.g.M.eb(l, g.g.M.State.mk, c[k] == e);
    l.style.backgroundColor = c[k];
    c[k] == e && ((l.className = "blocklyColourSelected"), (this.md = k));
  }
  this.Au = g.ca(f, "click", this, this.lq, !0);
  this.hg = g.ca(f, "mousemove", this, this.Fu, !0);
  this.DG = g.ca(f, "mouseenter", this, this.EG, !0);
  this.FG = g.ca(f, "mouseleave", this, this.GG, !0);
  this.pn = g.ca(f, "keydown", this, this.Eu);
  return f;
};
b.gt = function () {
  g.Ua(this.Au);
  g.Ua(this.hg);
  g.Ua(this.DG);
  g.Ua(this.FG);
  g.Ua(this.pn);
  this.dh = null;
};
g.Tc.register([
  ".blocklyColourTable {",
  "border-collapse: collapse;",
  "display: block;",
  "outline: none;",
  "padding: 1px;",
  "}",
  ".blocklyColourTable>tr>td {",
  "border: .5px solid #888;",
  "box-sizing: border-box;",
  "cursor: pointer;",
  "display: inline-block;",
  "height: 20px;",
  "padding: 0;",
  "width: 20px;",
  "}",
  ".blocklyColourTable>tr>td.blocklyColourHighlighted {",
  "border-color: #eee;",
  "box-shadow: 2px 2px 7px 2px rgba(0,0,0,.3);",
  "position: relative;",
  "}",
  ".blocklyColourSelected, .blocklyColourSelected:hover {",
  "border-color: #eee !important;",
  "outline: 1px solid #333;",
  "position: relative;",
  "}",
]);
g.vc.register("field_colour", g.Ib);
g.Zj = function (a, c, d, e) {
  this.s = a;
  this.ub = c;
  this.Ed = d.getAttribute("text");
  this.pd = new g.g.V(0, 0);
  this.ah = e;
  this.hp = d.getAttribute("callbackKey") || d.getAttribute("callbackkey");
  this.Ax = d.getAttribute("web-class") || null;
};
g.Zj.af = 5;
b = g.Zj.prototype;
b.width = 0;
b.height = 0;
b.Ue = null;
b.Ja = function () {
  var a = this.ah ? "blocklyFlyoutLabel" : "blocklyFlyoutButton";
  this.Ax && (a += " " + this.Ax);
  this.H = g.g.o.K("g", { class: a }, this.s.kb);
  if (!this.ah)
    var c = g.g.o.K(
      "rect",
      { class: "blocklyFlyoutButtonShadow", rx: 4, ry: 4, x: 1, y: 1 },
      this.H
    );
  a = g.g.o.K(
    "rect",
    {
      class: this.ah
        ? "blocklyFlyoutLabelBackground"
        : "blocklyFlyoutButtonBackground",
      rx: 4,
      ry: 4,
    },
    this.H
  );
  var d = g.g.o.K(
    "text",
    {
      class: this.ah ? "blocklyFlyoutLabelText" : "blocklyText",
      x: 0,
      y: 0,
      "text-anchor": "middle",
    },
    this.H
  );
  d.textContent = g.g.nc(this.Ed);
  this.ah &&
    ((this.qv = d), this.s.Zb.subscribe(this.qv, "flyoutText", "fill"));
  this.width = g.g.o.Nm(d);
  this.height = 20;
  this.ah ||
    ((this.width += 2 * g.Zj.af),
    c.setAttribute("width", this.width),
    c.setAttribute("height", this.height));
  a.setAttribute("width", this.width);
  a.setAttribute("height", this.height);
  d.setAttribute("x", this.width / 2);
  d.setAttribute("y", this.height - g.Zj.af);
  Kb(this);
  this.Ue = g.ca(this.H, "mouseup", this, this.LG);
  return this.H;
};
b.show = function () {
  Kb(this);
  this.H.setAttribute("display", "block");
};
function Kb(a) {
  a.H.setAttribute("transform", "translate(" + a.pd.x + "," + a.pd.y + ")");
}
b.moveTo = function (a, c) {
  this.pd.x = a;
  this.pd.y = c;
  Kb(this);
};
b.I = function () {
  this.Ue && g.Ua(this.Ue);
  this.H && g.g.o.removeNode(this.H);
  this.qv && this.s.Zb.unsubscribe(this.qv);
};
b.LG = function (a) {
  (a = this.ub.Vg(a)) && a.cancel();
  this.ah && this.hp
    ? console.warn("Labels should not have callbacks. Label text: " + this.Ed)
    : this.ah || (this.hp && Lb(this.ub, this.hp))
    ? this.ah || Lb(this.ub, this.hp)(this)
    : console.warn("Buttons should have callbacks. Button text: " + this.Ed);
};
g.Tc.register(
  ".blocklyFlyoutButton {,fill: #888;,cursor: default;,},.blocklyFlyoutButtonShadow {,fill: #666;,},.blocklyFlyoutButton:hover {,fill: #aaa;,},.blocklyFlyoutLabel {,cursor: default;,},.blocklyFlyoutLabelBackground {,opacity: 0;,},.blocklyFlyoutLabelText {,fill: #000;,}".split(
    ","
  )
);
g.Dc = function () {
  this.fA = g.Dc.Gx;
  this.Qk = null;
  this.ad = !1;
  this.Td = this.mb = null;
  this.ob = [];
  this.Bs = {};
};
g.Dc.Gx = !1;
g.Dc.Error = {
  Yq: "Component already rendered",
  Fr: "Unable to set parent component",
  fB: "Child component index out of bounds",
};
b = g.Dc.prototype;
b.va = function () {
  return this.Qk || (this.Qk = g.g.Ol.yy());
};
b.ua = function () {
  return this.mb;
};
b.kl = function (a) {
  if (this == a) throw Error(g.Dc.Error.Fr);
  var c;
  if ((c = a && this.Td && this.Qk))
    c = (c = this.Qk) ? this.Td.Bs[c] || null : null;
  if (c && this.Td != a) throw Error(g.Dc.Error.Fr);
  this.Td = a;
};
b.getParent = function () {
  return this.Td;
};
b.Ja = function () {
  this.mb = document.createElement("div");
};
b.Ea = function (a) {
  this.fh(a);
};
b.fh = function (a, c) {
  if (this.ad) throw Error(g.Dc.Error.Yq);
  this.mb || this.Ja();
  a ? a.insertBefore(this.mb, c || null) : document.body.appendChild(this.mb);
  (this.Td && !this.Td.ad) || this.nf();
};
b.nf = function () {
  this.ad = !0;
  Mb(this, function (a) {
    !a.ad && a.ua() && a.nf();
  });
};
b.Jh = function () {
  Mb(this, function (a) {
    a.ad && a.Jh();
  });
  this.ad = !1;
};
b.I = function () {
  this.EE || ((this.EE = !0), this.zm());
};
b.zm = function () {
  this.ad && this.Jh();
  Mb(this, function (a) {
    a.I();
  });
  this.mb && g.g.o.removeNode(this.mb);
  this.Td = this.mb = this.Bs = this.ob = null;
};
b.em = function (a, c, d) {
  if (a.ad && (d || !this.ad)) throw Error(g.Dc.Error.Yq);
  if (0 > c || c > this.ob.length) throw Error(g.Dc.Error.fB);
  this.Bs[a.va()] = a;
  if (a.getParent() == this) {
    var e = this.ob.indexOf(a);
    -1 < e && this.ob.splice(e, 1);
  }
  a.kl(this);
  this.ob.splice(c, 0, a);
  a.ad && this.ad && a.getParent() == this
    ? ((d = this.mb),
      (c = d.childNodes[c] || null),
      c != a.ua() && d.insertBefore(a.ua(), c))
    : d
    ? (this.mb || this.Ja(),
      (c = this.ob[c + 1] || null),
      a.fh(this.mb, c ? c.mb : null))
    : this.ad &&
      !a.ad &&
      a.mb &&
      a.mb.parentNode &&
      a.mb.parentNode.nodeType == g.g.o.Node.ELEMENT_NODE &&
      a.nf();
};
b.Wk = function () {
  return this.fA;
};
function Nb(a, c) {
  if (a.ad) throw Error(g.Dc.Error.Yq);
  a.fA = c;
}
function Ob(a) {
  return 0 != a.ob.length;
}
function Mb(a, c, d) {
  for (var e = 0; e < a.ob.length; e++) c.call(d, a.ob[e], e);
}
g.Fa = {};
g.Fa.sd = function (a, c) {
  g.Dc.call(this);
  this.Xc = c;
  this.kf = a;
  this.Cm = this.Cq = !1;
  this.Tt = !0;
  this.Ms = -1;
};
g.g.object.X(g.Fa.sd, g.Dc);
g.Fa.sd.gs = {};
b = g.Fa.sd.prototype;
b.zm = function () {
  g.Fa.sd.w.zm.call(this);
  this.Fa && (this.Fa = null);
  this.mb = null;
};
b.Qp = function () {
  var a = this.ua();
  if (a) {
    var c = Pb(this);
    c && !c.id && (c.id = this.va() + ".label");
    g.g.M.ue(a, g.g.M.Kf.iD);
    g.g.M.eb(a, g.g.M.State.mk, !1);
    g.g.M.eb(a, g.g.M.State.eC, this.Jk());
    c && g.g.M.eb(a, g.g.M.State.jw, c.id);
    (c = this.vt()) && g.g.M.ue(c, g.g.M.Kf.GC);
    if ((c = Qb(this)))
      if ((g.g.M.ue(c, g.g.M.Kf.OB), c.hasChildNodes()))
        for (
          g.g.M.eb(a, g.g.M.State.Do, !1), a = this.ob.length, c = 1;
          c <= a;
          c++
        ) {
          var d = (this.ob[c - 1] || null).ua();
          g.g.M.eb(d, g.g.M.State.QC, a);
          g.g.M.eb(d, g.g.M.State.FC, c);
        }
  }
};
b.Ja = function () {
  var a = document.createElement("div");
  a.appendChild(Rb(this));
  this.mb = a;
};
b.nf = function () {
  g.Fa.sd.w.nf.call(this);
  g.Fa.sd.gs[this.va()] = this;
  this.Qp();
};
b.Jh = function () {
  g.Fa.sd.w.Jh.call(this);
  delete g.Fa.sd.gs[this.va()];
};
b.em = function (a, c) {
  var d = this.ob[c - 1] || null,
    e = this.ob[c] || null;
  g.Fa.sd.w.em.call(this, a, c);
  a.fl = d;
  a.tu = e;
  d ? (d.tu = a) : (this.ey = a);
  e && (e.fl = a);
  (c = this.Pe()) && Sb(a, c);
  Tb(a, this.Jk() + 1);
  if ((c = this.ua()))
    if ((this.Mq(), g.g.M.eb(c, g.g.M.State.Do, this.Ne()), this.Ne())) {
      c = Qb(this);
      a.ua() || a.Ja();
      var f = a.ua(),
        h = e && e.ua();
      c.insertBefore(f, h);
      this.ad && a.nf();
      e || (d ? d.Mq() : (g.g.style.bv(c, !0), this.Cj(this.Ne())));
    }
};
b.add = function (a) {
  if (a.getParent()) throw Error(g.Dc.Error.Fr);
  this.em(a, this.ob.length);
};
b.Pe = function () {
  return null;
};
b.Jk = function () {
  var a = this.Ms;
  0 > a && ((a = (a = this.getParent()) ? a.Jk() + 1 : 0), Tb(this, a));
  return a;
};
function Tb(a, c) {
  if (c != a.Ms) {
    a.Ms = c;
    var d = Ub(a);
    if (d) {
      var e = Vb(a) + "px";
      a.Wk() ? (d.style.paddingRight = e) : (d.style.paddingLeft = e);
    }
    Mb(a, function (f) {
      Tb(f, c + 1);
    });
  }
}
b.contains = function (a) {
  for (; a; ) {
    if (a == this) return !0;
    a = a.getParent();
  }
  return !1;
};
b.Kh = function () {
  var a = [];
  Mb(this, function (c) {
    a.push(c);
  });
  return a;
};
b.select = function () {
  var a = this.Pe();
  a && Bb(a, this);
};
function Wb(a, c) {
  if (a.Cq != c) {
    a.Cq = c;
    Xb(a);
    var d = a.ua();
    d &&
      (g.g.M.eb(d, g.g.M.State.mk, c),
      c && ((c = a.Pe().ua()), g.g.M.eb(c, g.g.M.State.Wq, a.va())));
  }
}
b.Ne = function () {
  return this.Cm;
};
b.Cj = function (a) {
  var c = a != this.Cm,
    d;
  this.Cm = a;
  var e = this.Pe(),
    f = this.ua();
  if (Ob(this)) {
    if ((!a && e && this.contains(e.Ud) && this.select(), f)) {
      if ((d = Qb(this)))
        g.g.style.bv(d, a),
          g.g.M.eb(f, g.g.M.State.Do, a),
          a &&
            this.ad &&
            !d.hasChildNodes() &&
            (Mb(this, function (h) {
              d.appendChild(Rb(h));
            }),
            Mb(this, function (h) {
              h.nf();
            }));
      this.Mq();
    }
  } else (d = Qb(this)) && g.g.style.bv(d, !1);
  f && (this.vt().className = this.Dp());
  c && (a ? this.Sx() : this.Rx());
};
b.Sx = function () {};
b.Rx = function () {};
b.toggle = function () {
  this.Cj(!this.Ne());
};
function Rb(a) {
  var c = a.Ne() && Ob(a),
    d = document.createElement("div");
  d.style.backgroundPosition = Yb(a);
  c || (d.style.display = "none");
  c &&
    Mb(a, function (e) {
      d.appendChild(Rb(e));
    });
  c = document.createElement("div");
  c.id = a.va();
  c.appendChild(Zb(a));
  c.appendChild(d);
  return c;
}
function Vb(a) {
  return Math.max(0, (a.Jk() - 1) * a.Xc.$y);
}
function Zb(a) {
  var c = document.createElement("div");
  c.className = a.Ip();
  c.style["padding-" + (a.Wk() ? "right" : "left")] = Vb(a) + "px";
  c.appendChild($b(a));
  c.appendChild(ac(a));
  return c;
}
b.Ip = function () {
  var a = "";
  this.Cq && (a = " " + (this.Xc.qE || ""));
  return this.Xc.Dx + a;
};
function ac(a) {
  var c = document.createElement("span");
  c.className = a.Xc.oE || "";
  c.textContent = a.dc();
  return c;
}
function $b(a) {
  var c = document.createElement("span");
  c.style.display = "inline-block";
  c.className = a.Dp();
  return c;
}
b.Dp = function () {
  throw Error("unimplemented abstract method");
};
function Yb(a) {
  return (a.tu ? (a.Jk() - 1) * a.Xc.$y : "-100") + "px 0";
}
b.ua = function () {
  var a = g.Fa.sd.w.ua.call(this);
  a || (this.mb = a = document.getElementById(this.va()));
  return a;
};
function Ub(a) {
  return (a = a.ua()) ? a.firstChild : null;
}
b.vt = function () {
  var a = Ub(this);
  return a ? a.firstChild : null;
};
function Pb(a) {
  return (a = Ub(a)) && a.lastChild ? a.lastChild.previousSibling : null;
}
function Qb(a) {
  return (a = a.ua()) ? a.lastChild : null;
}
b.ll = function (a) {
  this.kf = a;
};
b.dc = function () {
  return this.kf;
};
function Xb(a) {
  var c = Ub(a);
  c && (c.className = a.Ip());
}
b.Mq = function () {
  var a = Qb(this);
  a && (a.style.backgroundPosition = Yb(this));
};
b.Lz = function (a) {
  "expand" == a.target.getAttribute("type") && Ob(this)
    ? this.Tt && this.toggle()
    : (this.select(), Xb(this));
};
b.lq = function (a) {
  a.preventDefault();
};
b.Du = function (a) {
  var c = !0;
  switch (a.keyCode) {
    case g.g.ya.To:
      if (a.altKey) break;
      c = bc(this);
      break;
    case g.g.ya.Ko:
      if (a.altKey) break;
      c = cc(this);
      break;
    case g.g.ya.Fl:
      c = dc(this);
      break;
    case g.g.ya.am:
      c = ec(this);
      break;
    default:
      c = !1;
  }
  c && a.preventDefault();
  return c;
};
function dc(a) {
  a: if (Ob(a) && a.Ne()) a = a.ob[0] || null;
  else {
    for (var c = a, d; c != a.Pe(); ) {
      d = c.tu;
      if (null != d) {
        a = d;
        break a;
      }
      c = c.getParent();
    }
    a = null;
  }
  a && a.select();
  return !0;
}
function ec(a) {
  var c = a.fl;
  if (null != c) a = fc(c);
  else {
    c = a.getParent();
    var d = a.Pe();
    a = c == d || a == d ? null : c;
  }
  a && a.select();
  return !0;
}
function cc(a) {
  if (Ob(a) && a.Ne() && a.Tt) a.Cj(!1);
  else {
    var c = a.getParent();
    a = a.Pe();
    c && c != a && c.select();
  }
  return !0;
}
function bc(a) {
  return Ob(a) ? (a.Ne() ? (a.ob[0] || null).select() : a.Cj(!0), !0) : !1;
}
function fc(a) {
  return a.Ne() && Ob(a) ? fc(a.ob[a.ob.length - 1] || null) : a;
}
function Sb(a, c) {
  a.Fa != c &&
    ((a.Fa = c),
    Mb(a, function (d) {
      Sb(d, c);
    }));
}
g.Fa.Ah = function (a, c, d) {
  this.sa = a;
  g.Fa.sd.call(this, c, d);
};
g.g.object.X(g.Fa.Ah, g.Fa.sd);
b = g.Fa.Ah.prototype;
b.Pe = function () {
  if (this.Fa) return this.Fa;
  var a = this.getParent();
  return a && (a = a.Pe()) ? (Sb(this, a), a) : null;
};
b.Dp = function () {
  var a = this.Ne(),
    c = this.NE;
  if (a && c) return c;
  c = this.FF;
  if (!a && c) return c;
  c = this.Xc;
  if (Ob(this)) {
    if (a && c.Bx) return c.pp + " " + c.Bx;
    if (!a && c.lE) return c.pp + " " + c.lE;
  } else if (c.Cx) return c.pp + " " + c.Cx;
  return "";
};
b.lq = function () {
  Ob(this) && this.Tt
    ? (this.toggle(), this.select())
    : this.Cq
    ? Bb(this.Pe(), null)
    : this.select();
  Xb(this);
};
b.Lz = function () {};
b.Du = function (a) {
  if (this.Fa.sa.rf) {
    var c = {},
      d = g.g.ya.Fl,
      e = g.g.ya.am;
    c[g.g.ya.To] = this.Wk() ? e : d;
    c[g.g.ya.Ko] = this.Wk() ? d : e;
    c[g.g.ya.am] = g.g.ya.Ko;
    c[g.g.ya.Fl] = g.g.ya.To;
    Object.defineProperties(a, {
      keyCode: { value: c[a.keyCode] || a.keyCode },
    });
  }
  return g.Fa.Ah.w.Du.call(this, a);
};
b.eA = function () {
  this.Oz && this.Oz.call(this.sa);
};
b.Sx = g.Fa.Ah.prototype.eA;
b.Rx = g.Fa.Ah.prototype.eA;
g.Fa.Ii = function (a, c) {
  this.sa = a;
  g.Fa.sd.call(this, "", c);
  this.Cm = !0;
  Wb(this, !0);
  this.Ud = this;
};
g.g.object.X(g.Fa.Ii, g.Fa.sd);
b = g.Fa.Ii.prototype;
b.Pe = function () {
  return this;
};
b.Jk = function () {
  return 0;
};
b.rF = function () {
  this.ky = !0;
  var a = this.ua();
  g.g.o.rb(a, "focused");
  this.Ud && this.Ud.select();
};
b.oF = function () {
  this.ky = !1;
  var a = this.ua();
  g.g.o.Sb(a, "focused");
};
b.hasFocus = function () {
  return this.ky;
};
b.Ne = function () {
  return !0;
};
b.Cj = function (a) {
  this.Cm = a;
};
b.vt = function () {
  var a = Ub(this);
  return a ? a.firstChild : null;
};
b.Mq = function () {};
b.Ip = function () {
  return g.Fa.Ii.w.Ip.call(this) + " " + this.Xc.nE;
};
b.Dp = function () {
  var a = this.Ne(),
    c = this.NE;
  if (a && c) return c;
  c = this.FF;
  if (!a && c) return c;
  c = this.Xc;
  return a && c.mE ? c.pp + " " + c.mE : "";
};
function Bb(a, c) {
  if (c != a.Ud && (!a.Hz || a.Hz.call(a.sa, c))) {
    var d = a.Ud;
    a.Ud && Wb(a.Ud, !1);
    (a.Ud = c) && Wb(c, !0);
    a.Gz && a.Gz.call(a.sa, d, c);
  }
}
b.Qp = function () {
  g.Fa.Ii.w.Qp.call(this);
  var a = this.ua();
  g.g.M.ue(a, g.g.M.Kf.hD);
  g.g.M.eb(a, g.g.M.State.jw, Pb(this).id);
};
b.nf = function () {
  g.Fa.Ii.w.nf.call(this);
  var a = this.ua();
  a.className = this.Xc.pE;
  a.setAttribute("hideFocus", "true");
  this.os();
  this.Qp();
};
b.Jh = function () {
  g.Fa.Ii.w.Jh.call(this);
  this.Ns();
};
b.os = function () {
  var a = this.ua();
  a.tabIndex = 0;
  this.xG = g.jd(a, "focus", this, this.rF);
  this.uG = g.jd(a, "blur", this, this.oF);
  this.Au = g.ca(a, "click", this, this.vF);
  this.AG = g.jd(a, "keydown", this, this.sF);
};
b.Ns = function () {
  g.Ua(this.xG);
  g.Ua(this.uG);
  g.Ua(this.Au);
  g.Ua(this.AG);
};
b.vF = function (a) {
  var c;
  a: {
    for (var d = a.target; null != d; ) {
      if ((c = g.Fa.sd.gs[d.id])) break a;
      if (d == this.ua()) break;
      d = d.parentNode;
    }
    c = null;
  }
  if (c)
    switch (a.type) {
      case "mousedown":
        c.Lz(a);
        break;
      case "click":
        c.lq(a);
    }
};
b.sF = function (a) {
  var c = !1;
  if ((c = (this.Ud && this.Ud.Du(a)) || c))
    g.g.style.Zu(this.Ud.ua(), this.ua().parentNode), a.preventDefault();
  return c;
};
b.createNode = function (a) {
  return new g.Fa.Ah(this.sa, a || "", this.Xc);
};
g.g.Rect = function (a, c, d, e) {
  this.top = a;
  this.bottom = c;
  this.left = d;
  this.right = e;
};
g.g.Rect.prototype.contains = function (a, c) {
  return a >= this.left && a <= this.right && c >= this.top && c <= this.bottom;
};
g.Hi = function (a) {
  this.s = a;
  this.G = a.options.G;
  this.rf = a.options.Od;
  this.Ia = a.options.Ia;
  this.Xc = {
    $y: 19,
    pE: "blocklyTreeRoot",
    nE: "blocklyHidden",
    Dx: "blocklyTreeRow",
    oE: "blocklyTreeLabel",
    pp: "blocklyTreeIcon",
    Bx: "blocklyTreeIconOpen",
    Cx: "blocklyTreeIconNone",
    qE: "blocklyTreeSelected",
  };
  this.AA = { Dx: "blocklyTreeSeparator" };
  this.rf &&
    ((this.Xc.cssTreeRow += a.G
      ? " blocklyHorizontalTreeRtl"
      : " blocklyHorizontalTree"),
    (this.AA.cssTreeRow =
      "blocklyTreeSeparatorHorizontal " +
      (a.G ? "blocklyHorizontalTreeRtl" : "blocklyHorizontalTree")),
    (this.Xc.cssTreeIcon = ""));
};
b = g.Hi.prototype;
b.width = 0;
b.height = 0;
b.Yk = null;
b.Z = function () {
  var a = this.s,
    c = r(this.s);
  this.Ec = document.createElement("div");
  this.Ec.className = "blocklyToolboxDiv blocklyNonSelectable";
  this.Ec.setAttribute("dir", a.G ? "RTL" : "LTR");
  c.parentNode.insertBefore(this.Ec, c);
  c = a.Zb;
  c.subscribe(this.Ec, "toolbox", "background-color");
  c.subscribe(this.Ec, "toolboxText", "color");
  g.ca(
    this.Ec,
    "mousedown",
    this,
    function (d) {
      g.g.lj(d) || d.target == this.Ec ? g.wc(!1) : g.wc(!0);
      g.Touch.Dh();
    },
    !1,
    !0
  );
  c = {
    Pg: a.options.Pg,
    Rb: a,
    G: a.G,
    Dd: a.options.Dd,
    Od: a.Od,
    Ia: a.options.Ia,
    gh: a.options.gh,
  };
  this.O = null;
  if (a.Od) {
    if (!g.Ml) throw Error("Missing require for Blockly.HorizontalFlyout");
    this.O = new g.Ml(c);
  } else {
    if (!g.Hg) throw Error("Missing require for Blockly.VerticalFlyout");
    this.O = new g.Hg(c);
  }
  g.g.o.fj(this.O.Ja("svg"), r(this.s));
  this.O.Z(a);
  this.Xc.cleardotPath = a.options.wf + "1x1.gif";
  this.Xc.cssCollapsedFolderIcon =
    "blocklyTreeIconClosed" + (a.G ? "Rtl" : "Ltr");
  gc(this, a.options.Xk);
};
function gc(a, c) {
  a.Fd && (a.Fd.I(), (a.Yk = null));
  var d = new g.Fa.Ii(a, a.Xc);
  a.Fd = d;
  Bb(d, null);
  d.Hz = a.nF;
  d.Gz = a.mF;
  var e = null;
  if (c) {
    a.Fd.Sf = [];
    a.Ht = !1;
    e = hc(a, c, a.Fd, a.s.options.wf);
    if (a.Fd.Sf.length)
      throw Error(
        "Toolbox cannot have both blocks and categories in the root level."
      );
    ic(a.s);
  }
  d.Ea(a.Ec);
  e && Bb(d, e);
  jc(a);
  a.position();
  a.rf && g.g.M.eb(a.Fd.ua(), g.g.M.State.CC, "horizontal");
}
b.nF = function (a) {
  if (a == this.Fd) return !1;
  this.Yk && (Ub(this.Yk).style.backgroundColor = "");
  if (a) {
    var c = a.Nk || "#57e";
    Ub(a).style.backgroundColor = c;
    jc(this, a);
  }
  return !0;
};
b.mF = function (a, c) {
  c && c.Sf && c.Sf.length
    ? (this.O.show(c.Sf),
      this.Yk != c && this.O.yc.set(0),
      g.Se && g.navigation.eb(g.navigation.Rr))
    : (this.O.Ha(),
      !g.Se || c instanceof g.Hi.Xr || g.navigation.eb(g.navigation.Xl));
  a != c &&
    a != this &&
    ((a = new g.i.yd(null, "category", a && a.dc(), c && c.dc())),
    (a.Cc = this.s.id),
    g.i.Oa(a));
  c && (this.Yk = c);
};
b.yF = function () {
  g.rl(this.s);
};
b.gg = function (a) {
  var c = this.Fd.Ud;
  if (!c) return !1;
  switch (a.name) {
    case g.navigation.hb.Ge:
      return ec(c);
    case g.navigation.hb.So:
      return cc(c);
    case g.navigation.hb.De:
      return dc(c);
    case g.navigation.hb.Ho:
      return bc(c);
    default:
      return !1;
  }
};
b.I = function () {
  this.O.I();
  this.Fd.I();
  this.s.Zb.unsubscribe(this.Ec);
  g.g.o.removeNode(this.Ec);
  this.Yk = this.s = null;
};
b.cg = function () {
  return this.width;
};
b.xy = function () {
  return this.height;
};
b.position = function () {
  var a = this.Ec;
  if (a) {
    var c = r(this.s);
    c = g.vA(c);
    this.rf
      ? ((a.style.left = "0"),
        (a.style.height = "auto"),
        (a.style.width = c.width + "px"),
        (this.height = a.offsetHeight),
        this.Ia == g.Fg ? (a.style.top = "0") : (a.style.bottom = "0"))
      : (this.Ia == g.Eg ? (a.style.right = "0") : (a.style.left = "0"),
        (a.style.height = c.height + "px"),
        (this.width = a.offsetWidth));
    this.O.position();
  }
};
function hc(a, c, d, e) {
  for (var f = null, h = null, k = 0, l; (l = c.childNodes[k]); k++)
    if (l.tagName)
      switch (l.tagName.toUpperCase()) {
        case "CATEGORY":
          var m = g.g.nc(l.getAttribute("name"));
          h = a.Fd.createNode(m);
          h.Oz = a.yF;
          h.Sf = [];
          d.add(h);
          var n = l.getAttribute("custom");
          n ? (h.Sf = n) : (n = hc(a, l, h, e)) && (f = n);
          var t = l.getAttribute("categorystyle");
          if ((n = l.getAttribute("colour")) && t)
            (h.Nk = ""),
              console.warn(
                'Toolbox category "' +
                  m +
                  '" can not have both a style and a colour'
              );
          else if (t) {
            n = a;
            var v = h;
            v.yM = t;
            var w = n.s.Kp();
            t &&
              w &&
              ((w = w.QD[t]) && w.Ab
                ? kc(n, w.Ab, v, m)
                : console.warn(
                    'Style "' + t + '" must exist and contain a colour value'
                  ));
          } else kc(a, n, h, m);
          "true" == l.getAttribute("expanded")
            ? (h.Sf.length && (f = h), h.Cj(!0))
            : h.Cj(!1);
          h = l;
          break;
        case "SEP":
          if (h && "CATEGORY" == h.tagName.toUpperCase()) {
            d.add(new g.Hi.Xr(a.AA));
            break;
          }
        case "BLOCK":
        case "SHADOW":
        case "LABEL":
        case "BUTTON":
          d.Sf.push(l), (h = l);
      }
  return f;
}
function kc(a, c, d, e) {
  c = g.g.nc(c);
  if (null === c || "" === c) d.Nk = "";
  else {
    var f = Number(c);
    isNaN(f)
      ? (f = g.g.Ab.parse(c))
        ? ((d.Nk = f), (a.Ht = !0))
        : ((d.Nk = ""),
          console.warn(
            'Toolbox category "' +
              e +
              '" has unrecognized colour attribute: ' +
              c
          ))
      : ((d.Nk = g.Zy(f)), (a.Ht = !0));
  }
}
function jc(a, c) {
  c = (c || a.Fd).Kh(!1);
  for (var d = 0, e; (e = c[d]); d++) {
    var f = Ub(e);
    if (f) {
      var h = a.Ht ? "8px solid " + (e.Nk || "#ddd") : "none";
      a.s.G ? (f.style.borderRight = h) : (f.style.borderLeft = h);
    }
    jc(a, e);
  }
}
b.Im = function () {
  if (!this.Ec) return null;
  var a = this.Ec.getBoundingClientRect(),
    c = a.top,
    d = c + a.height,
    e = a.left;
  a = e + a.width;
  return this.Ia == g.Fg
    ? new g.g.Rect(-1e7, d, -1e7, 1e7)
    : this.Ia == g.Fi
    ? new g.g.Rect(c, 1e7, -1e7, 1e7)
    : this.Ia == g.Jd
    ? new g.g.Rect(-1e7, 1e7, -1e7, a)
    : new g.g.Rect(-1e7, 1e7, e, 1e7);
};
g.Hi.Xr = function (a) {
  g.Fa.Ah.call(this, null, "", a);
};
g.g.object.X(g.Hi.Xr, g.Fa.Ah);
g.Tc.register([
  ".blocklyToolboxDelete {",
  'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  "}",
  ".blocklyToolboxGrab {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyToolboxDiv {",
  "background-color: #d9ebff;",
  "overflow-x: visible;",
  "overflow-y: auto;",
  "position: absolute;",
  "z-index: 70;",
  "-webkit-tap-highlight-color: transparent;",
  "}",
  ".blocklyTreeRoot {",
  "padding: 25px 0;",
  "}",
  ".blocklyTreeRoot:focus {",
  "outline: none;",
  "}",
  ".blocklyTreeRow {",
  "height: 50px;",
  "line-height: 50px;",
  "margin-bottom: 3px;",
  "padding-right: 8px;",
  "white-space: nowrap;",
  "}",
  ".blocklyHorizontalTree {",
  "float: left;",
  "margin: 1px 5px 8px 0;",
  "}",
  ".blocklyHorizontalTreeRtl {",
  "float: right;",
  "margin: 1px 0 8px 5px;",
  "}",
  '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {',
  "margin-left: 8px;",
  "}",
  ".blocklyTreeRow:not(.blocklyTreeSelected):hover {",
  "background-color:rgb(91, 192, 255);",
  "}",
  ".blocklyTreeSeparator {",
  "border-bottom: solidrgb(230, 0, 0) 1px;",
  "height: 0;",
  "margin: 5px 0;",
  "}",
  ".blocklyTreeSeparatorHorizontal {",
  "border-right: solid #e5e5e5 1px;",
  "width: 0;",
  "padding: 5px 0;",
  "margin: 0 5px;",
  "}",
  ".blocklyTreeIcon {",
  "background-image: url(<<<PATH>>>/sprites.png);",
  "height: 16px;",
  "vertical-align: middle;",
  "width: 16px;",
  "}",
  ".blocklyTreeIconClosedLtr {",
  "background-position: -32px -1px;",
  "}",
  ".blocklyTreeIconClosedRtl {",
  "background-position: 0 -1px;",
  "}",
  ".blocklyTreeIconOpen {",
  "background-position: -16px -1px;",
  "}",
  ".blocklyTreeSelected>.blocklyTreeIconClosedLtr {",
  "background-position: -32px -17px;",
  "}",
  ".blocklyTreeSelected>.blocklyTreeIconClosedRtl {",
  "background-position: 0 -17px;",
  "}",
  ".blocklyTreeSelected>.blocklyTreeIconOpen {",
  "background-position: -16px -17px;",
  "}",
  ".blocklyTreeIconNone,",
  ".blocklyTreeSelected>.blocklyTreeIconNone {",
  "background-position: -48px -1px;",
  "}",
  ".blocklyTreeLabel {",
  "cursor: default;",
  "font-family: Tahoma;",
  "font-size: 18px;",
  "padding: 0 3px;",
  "vertical-align: middle;",
  "}",
  ".blocklyToolboxDelete .blocklyTreeLabel {",
  'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  "}",
  ".blocklyTreeSelected .blocklyTreeLabel {",
  "color: #fff;",
  "}",
]);
g.i.Il = function (a) {
  this.Cc = a.id;
  this.group = g.i.cc();
  this.Pc = !1;
};
g.g.object.X(g.i.Il, g.i.Abstract);
g.i.Il.prototype.type = g.i.FB;
g.i.Il.prototype.fb = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  this.Cc && (a.workspaceId = this.Cc);
  return a;
};
g.i.Il.prototype.pa = function (a) {
  this.Cc = a.workspaceId;
  this.group = a.group;
};
g.R = {};
g.R.HA = function (a) {
  var c = G,
    d = g.g.xml.createElement("xml"),
    e = g.R.HH(g.N.Vw(c));
  e.hasChildNodes() && d.appendChild(e);
  var f = xa(c, !0);
  e = 0;
  for (var h; (h = f[e]); e++) d.appendChild(h.tv(a));
  c = A(c, !0);
  for (e = 0; (f = c[e]); e++) d.appendChild(g.R.ts(f, a));
  return d;
};
g.R.HH = function (a) {
  for (var c = g.g.xml.createElement("variables"), d = 0, e; (e = a[d]); d++) {
    var f = g.g.xml.createElement("variable");
    f.appendChild(g.g.xml.createTextNode(e.name));
    e.type && f.setAttribute("type", e.type);
    f.id = e.va();
    c.appendChild(f);
  }
  return c;
};
g.R.ts = function (a, c) {
  var d;
  a.v.G && (d = a.v.cg());
  c = g.R.Bh(a, c);
  var e = a.Sa();
  c.setAttribute("x", Math.round(a.v.G ? d - e.x : e.x));
  c.setAttribute("y", Math.round(e.y));
  return c;
};
g.R.PE = function (a) {
  var c = !1;
  a.name &&
    (a.Ei
      ? (c = !0)
      : a.Gf &&
        (console.warn(
          "Detected an editable field that was not serializable. Please define SERIALIZABLE property as true on all editable custom fields. Proceeding with serialization."
        ),
        (c = !0)));
  return c
    ? ((c = g.g.xml.createElement("field")),
      c.setAttribute("name", a.name),
      a.xA(c))
    : null;
};
g.R.BD = function (a, c) {
  for (var d = 0, e; (e = a.P[d]); d++)
    for (var f = 0, h; (h = e.Na[f]); f++) (h = g.R.PE(h)) && c.appendChild(h);
};
g.R.Bh = function (a, c) {
  var d = g.g.xml.createElement(a.ib ? "shadow" : "block");
  d.setAttribute("type", a.type);
  c || (d.id = a.id);
  if (a.Pa) {
    var e = a.Pa();
    e && (e.hasChildNodes() || e.hasAttributes()) && d.appendChild(e);
  }
  g.R.BD(a, d);
  if ((e = a.Je.text)) {
    var f = a.Je.size,
      h = a.Je.Nu,
      k = g.g.xml.createElement("comment");
    k.appendChild(g.g.xml.createTextNode(e));
    k.setAttribute("pinned", h);
    k.setAttribute("h", f.height);
    k.setAttribute("w", f.width);
    d.appendChild(k);
  }
  a.data &&
    ((e = g.g.xml.createElement("data")),
    e.appendChild(g.g.xml.createTextNode(a.data)),
    d.appendChild(e));
  for (f = 0; (h = a.P[f]); f++) {
    var l;
    k = !0;
    if (h.type != g.xg) {
      var m = C(h.connection);
      h.type == g.Ra
        ? (l = g.g.xml.createElement("value"))
        : h.type == g.Xa && (l = g.g.xml.createElement("statement"));
      e = h.connection.xf;
      !e || (m && m.ib) || l.appendChild(g.R.kx(e, c));
      m && (l.appendChild(g.R.Bh(m, c)), (k = !1));
      l.setAttribute("name", h.name);
      k || d.appendChild(l);
    }
  }
  void 0 != a.$g && a.$g != a.MF && d.setAttribute("inline", a.$g);
  a.isCollapsed() && d.setAttribute("collapsed", !0);
  a.isEnabled() || d.setAttribute("disabled", !0);
  a.qe() || a.ib || d.setAttribute("deletable", !1);
  a.Lc() || a.ib || d.setAttribute("movable", !1);
  a.nd() || d.setAttribute("editable", !1);
  if ((f = q(a)))
    (l = g.g.xml.createElement("next")),
      l.appendChild(g.R.Bh(f, c)),
      d.appendChild(l);
  e = a.U && a.U.xf;
  !e || (f && f.ib) || l.appendChild(g.R.kx(e, c));
  return d;
};
g.R.kx = function (a, c) {
  for (var d = (a = a.cloneNode(!0)), e; d; )
    if ((c && "shadow" == d.nodeName && d.removeAttribute("id"), d.firstChild))
      d = d.firstChild;
    else {
      for (; d && !d.nextSibling; )
        (e = d),
          (d = d.parentNode),
          e.nodeType == g.g.o.Node.TEXT_NODE &&
            "" == e.data.trim() &&
            d.firstChild != e &&
            g.g.o.removeNode(e);
      d &&
        ((e = d),
        (d = d.nextSibling),
        e.nodeType == g.g.o.Node.TEXT_NODE &&
          "" == e.data.trim() &&
          g.g.o.removeNode(e));
    }
  return a;
};
g.R.Nd = function (a) {
  a = g.g.xml.Nd(a);
  var c = /(<[^/](?:[^>]*[^/])?>[^<]*)\n([^<]*<\/)/;
  do {
    var d = a;
    a = a.replace(c, "$1&#10;$2");
  } while (a != d);
  return a;
};
g.R.VL = function (a) {
  a = g.R.Nd(a).split("<");
  for (var c = "", d = 1; d < a.length; d++) {
    var e = a[d];
    "/" == e[0] && (c = c.substring(2));
    a[d] = c + "<" + e;
    "/" != e[0] && "/>" != e.slice(-2) && (c += "  ");
  }
  a = a.join("\n");
  a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>");
  return a.replace(/^\n/, "");
};
g.R.mi = function (a) {
  var c = g.g.xml.vH(a);
  if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length)
    throw Error("textToDom was unable to parse: " + a);
  return c.documentElement;
};
g.R.RL = function (a, c) {
  c.Qc(!1);
  c.clear();
  a = g.R.Hh(a, c);
  c.Qc(!0);
  return a;
};
g.R.Hh = function (a, c) {
  if (a instanceof g.Nb) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments."
    );
  }
  var e;
  c.G && (e = c.cg());
  d = [];
  g.g.o.Mn();
  var f = a.childNodes.length,
    h = g.i.cc();
  h || g.i.aa(!0);
  c.Qc && c.Qc(!1);
  var k = !0;
  try {
    for (var l = 0; l < f; l++) {
      var m = a.childNodes[l],
        n = m.nodeName.toLowerCase();
      if ("block" == n || ("shadow" == n && !g.i.Pc)) {
        var t = g.R.Wi(m, c);
        d.push(t.id);
        var v = m.hasAttribute("x") ? parseInt(m.getAttribute("x"), 10) : 10,
          w = m.hasAttribute("y") ? parseInt(m.getAttribute("y"), 10) : 10;
        isNaN(v) || isNaN(w) || t.moveBy(c.G ? e - v : v, w);
        k = !1;
      } else {
        if ("shadow" == n)
          throw TypeError("Shadow block cannot be a top-level block.");
        if ("comment" == n)
          c.ga
            ? g.qk
              ? g.qk.Gm(m)
              : console.warn(
                  "Missing require for Blockly.WorkspaceCommentSvg, ignoring workspace comment."
                )
            : g.rD
            ? g.rD.Gm(m)
            : console.warn(
                "Missing require for Blockly.WorkspaceComment, ignoring workspace comment."
              );
        else if ("variables" == n) {
          if (k) g.R.HE(m, c);
          else
            throw Error(
              "'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location."
            );
          k = !1;
        }
      }
    }
  } finally {
    h || g.i.aa(!1), g.g.o.Nn();
  }
  c.Qc && c.Qc(!0);
  g.i.Oa(new g.i.Il(c));
  return d;
};
g.R.OL = function (a, c) {
  if (c.hasOwnProperty("scale")) {
    var d = g.xa.zh;
    try {
      g.xa.zh = 0;
      var e = lc(c);
    } finally {
      g.xa.zh = d;
    }
  }
  a = g.R.Hh(a, c);
  if (e && e.top != e.bottom) {
    d = e.bottom;
    var f = e.left;
    var h = Infinity,
      k = Infinity;
    for (e = 0; e < a.length; e++) {
      var l = x(c, a[e]).Sa();
      l.y < k && (k = l.y);
      l.x < h && (h = l.x);
    }
    d = d - k + g.xa.PC;
    f -= h;
    var m;
    c.G && (m = c.cg());
    for (e = 0; e < a.length; e++) x(c, a[e]).moveBy(c.G ? m - f : f, d);
  }
  return a;
};
g.R.Wi = function (a, c) {
  if (a instanceof g.Nb) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToBlock, swap the arguments."
    );
  }
  g.i.disable();
  d = c.Ug();
  try {
    var e = g.R.Xs(a, c),
      f = p(e, !1);
    if (c.ga) {
      Db(e, !0);
      for (var h = f.length - 1; 0 <= h; h--) f[h].Qd();
      for (h = f.length - 1; 0 <= h; h--) f[h].Ea(!1);
      setTimeout(function () {
        e.v && Db(e, !1);
      }, 1);
      mc(e);
      ic(c);
    } else for (h = f.length - 1; 0 <= h; h--) f[h].ej();
  } finally {
    g.i.enable();
  }
  if (g.i.isEnabled()) {
    a = g.N.py(c, d);
    for (h = 0; h < a.length; h++) g.i.Oa(new g.i.He(a[h]));
    g.i.Oa(new g.i.oo(e));
  }
  return e;
};
g.R.HE = function (a, c) {
  for (var d = 0, e; (e = a.childNodes[d]); d++)
    if (e.nodeType == g.g.o.Node.ELEMENT_NODE) {
      var f = e.getAttribute("type"),
        h = e.getAttribute("id");
      c.Md(e.textContent, f, h);
    }
};
g.R.Xs = function (a, c) {
  var d = null,
    e = a.getAttribute("type");
  if (!e) throw TypeError("Block type unspecified: " + a.outerHTML);
  var f = a.getAttribute("id");
  d = c.fg(e, f);
  var h = null;
  f = 0;
  for (var k; (k = a.childNodes[f]); f++)
    if (k.nodeType != g.g.o.Node.TEXT_NODE) {
      for (var l = (h = null), m = 0, n; (n = k.childNodes[m]); m++)
        n.nodeType == g.g.o.Node.ELEMENT_NODE &&
          ("block" == n.nodeName.toLowerCase()
            ? (h = n)
            : "shadow" == n.nodeName.toLowerCase() && (l = n));
      !h && l && (h = l);
      m = k.getAttribute("name");
      switch (k.nodeName.toLowerCase()) {
        case "mutation":
          d.lb && (d.lb(k), d.Qd && d.Qd());
          break;
        case "comment":
          if (!g.Comment) {
            console.warn(
              "Missing require for Blockly.Comment, ignoring block comment."
            );
            break;
          }
          h = k.textContent;
          l = "true" == k.getAttribute("pinned");
          m = parseInt(k.getAttribute("w"), 10);
          k = parseInt(k.getAttribute("h"), 10);
          d.ji(h);
          d.Je.Nu = l;
          isNaN(m) || isNaN(k) || (d.Je.size = new g.g.ge(m, k));
          l &&
            d.bF &&
            !d.ec &&
            setTimeout(function () {
              d.Tf.Yb(!0);
            }, 1);
          break;
        case "data":
          d.data = k.textContent;
          break;
        case "title":
        case "field":
          g.R.GE(d, m, k);
          break;
        case "value":
        case "statement":
          k = E(d, m);
          if (!k) {
            console.warn("Ignoring non-existent input " + m + " in block " + e);
            break;
          }
          l && (k.connection.xf = l);
          if (h)
            if (((h = g.R.Xs(h, c)), h.L)) k.connection.connect(h.L);
            else if (h.$) k.connection.connect(h.$);
            else
              throw TypeError(
                "Child block does not have output or previous statement."
              );
          break;
        case "next":
          l && d.U && (d.U.xf = l);
          if (h) {
            if (!d.U) throw TypeError("Next statement does not exist.");
            if (d.U.isConnected())
              throw TypeError("Next statement is already connected.");
            h = g.R.Xs(h, c);
            if (!h.$)
              throw TypeError("Next block does not have previous statement.");
            d.U.connect(h.$);
          }
          break;
        default:
          console.warn("Ignoring unknown tag: " + k.nodeName);
      }
    }
  (f = a.getAttribute("inline")) && d.te("true" == f);
  (f = a.getAttribute("disabled")) && d.qd("true" != f && "disabled" != f);
  if ((f = a.getAttribute("deletable"))) d.Ls = "true" == f;
  (f = a.getAttribute("movable")) && d.Dq("true" == f);
  (f = a.getAttribute("editable")) && d.av("true" == f);
  (f = a.getAttribute("collapsed")) && d.kh("true" == f);
  if ("shadow" == a.nodeName.toLowerCase()) {
    a = d.Kh(!1);
    for (f = 0; (c = a[f]); f++)
      if (!c.ib) throw TypeError("Shadow block not allowed non-shadow child.");
    if (d.Xg().length)
      throw TypeError("Shadow blocks cannot have variable references.");
    d.ev(!0);
  }
  return d;
};
g.R.GE = function (a, c, d) {
  var e = B(a, c);
  e
    ? e.Gm(d)
    : console.warn("Ignoring non-existent field " + c + " in block " + a.type);
};
g.R.vE = function (a) {
  for (var c = 0, d; (d = a.childNodes[c]); c++)
    if ("next" == d.nodeName.toLowerCase()) {
      a.removeChild(d);
      break;
    }
};
g.Wr = function (a) {
  this.s = a;
  this.Qi = [];
  if (!(0 >= this.s.options.iq)) {
    a = {
      scrollbars: !0,
      Pg: this.s.options.Pg,
      Rb: this.s,
      G: this.s.G,
      Dd: this.s.options.Dd,
      gh: this.s.options.gh,
    };
    if (this.s.Od) {
      a.Ia = this.s.Ia == g.Fg ? g.Fi : g.Fg;
      if (!g.Ml) throw Error("Missing require for Blockly.HorizontalFlyout");
      this.O = new g.Ml(a);
    } else {
      a.Ia = this.s.Ia == g.Eg ? g.Jd : g.Eg;
      if (!g.Hg) throw Error("Missing require for Blockly.VerticalFlyout");
      this.O = new g.Hg(a);
    }
    Ba(this.s, this.wG.bind(this));
  }
};
b = g.Wr.prototype;
b.Ji = 47;
b.jo = 44;
b.gk = 16;
b.vr = 20;
b.Rl = 20;
b.Mo = 10;
b.Pr = 0;
b.Qr = 32;
b.PB = 0.1;
b.St = !1;
b.jq = 0;
b.H = null;
b.Hq = null;
b.Zt = 0;
b.Yh = 0;
b.cn = 0;
b.wl = 0;
b.Ja = function () {
  this.H = g.g.o.K("g", { class: "blocklyTrash" }, null);
  var a = String(Math.random()).substring(2);
  var c = g.g.o.K("clipPath", { id: "blocklyTrashBodyClipPath" + a }, this.H);
  g.g.o.K("rect", { width: this.Ji, height: this.jo, y: this.gk }, c);
  var d = g.g.o.K(
    "image",
    {
      width: g.xd.width,
      x: -this.Pr,
      height: g.xd.height,
      y: -this.Qr,
      "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")",
    },
    this.H
  );
  d.setAttributeNS(g.g.o.ef, "xlink:href", this.s.options.wf + g.xd.url);
  c = g.g.o.K("clipPath", { id: "blocklyTrashLidClipPath" + a }, this.H);
  g.g.o.K("rect", { width: this.Ji, height: this.gk }, c);
  this.Hq = g.g.o.K(
    "image",
    {
      width: g.xd.width,
      x: -this.Pr,
      height: g.xd.height,
      y: -this.Qr,
      "clip-path": "url(#blocklyTrashLidClipPath" + a + ")",
    },
    this.H
  );
  this.Hq.setAttributeNS(g.g.o.ef, "xlink:href", this.s.options.wf + g.xd.url);
  g.ca(this.H, "mouseup", this, this.click);
  g.jd(d, "mouseover", this, this.hG);
  g.jd(d, "mouseout", this, this.fG);
  this.hs();
  return this.H;
};
b.Z = function (a) {
  0 < this.s.options.iq &&
    (g.g.o.fj(this.O.Ja("svg"), r(this.s)),
    this.O.Z(this.s),
    (this.O.ez = function () {
      return !0;
    }));
  this.qh = this.vr + a;
  $a(this, !1);
  return this.qh + this.jo + this.gk;
};
b.I = function () {
  this.H && (g.g.o.removeNode(this.H), (this.H = null));
  this.s = this.Hq = null;
  clearTimeout(this.Zt);
};
b.position = function () {
  if (this.qh) {
    var a = this.s.jc();
    a &&
      ((this.cn =
        a.Ia == g.Jd || (this.s.Od && !this.s.G)
          ? a.vb + a.qc - this.Ji - this.Rl - g.La.xc
          : this.Rl + g.La.xc),
      (this.wl =
        a.Ia == g.Fi ? this.qh : a.Cb + a.Fc - (this.jo + this.gk) - this.qh),
      this.H.setAttribute(
        "transform",
        "translate(" + this.cn + "," + this.wl + ")"
      ));
  }
};
b.Im = function () {
  if (!this.H) return null;
  var a = this.H.getBoundingClientRect(),
    c = a.top + this.Qr - this.Mo;
  a = a.left + this.Pr - this.Mo;
  return new g.g.Rect(
    c,
    c + this.gk + this.jo + 2 * this.Mo,
    a,
    a + this.Ji + 2 * this.Mo
  );
};
function $a(a, c) {
  a.St != c && (clearTimeout(a.Zt), (a.St = c), a.hs());
}
b.hs = function () {
  this.Yh += this.St ? 0.2 : -0.2;
  this.Yh = Math.min(Math.max(this.Yh, this.jq), 1);
  nc(this, 45 * this.Yh);
  this.H.style.opacity = 0.4 + 0.4 * this.Yh;
  this.Yh > this.jq &&
    1 > this.Yh &&
    (this.Zt = setTimeout(this.hs.bind(this), 20));
};
function nc(a, c) {
  var d = a.s.Ia == g.Eg || (a.s.Od && a.s.G);
  a.Hq.setAttribute(
    "transform",
    "rotate(" + (d ? -c : c) + "," + (d ? 4 : a.Ji - 4) + "," + (a.gk - 2) + ")"
  );
}
b.close = function () {
  $a(this, !1);
};
b.click = function () {
  if (this.Qi.length) {
    for (var a = [], c = 0, d; (d = this.Qi[c]); c++) a[c] = g.R.mi(d);
    this.O.show(a);
  }
};
b.hG = function () {
  this.Qi.length && $a(this, !0);
};
b.fG = function () {
  $a(this, !1);
};
b.wG = function (a) {
  if (
    !(0 >= this.s.options.iq) &&
    a.type == g.i.io &&
    "shadow" != a.zu.tagName.toLowerCase()
  ) {
    for (var c = (a = a.zu.cloneNode(!0)); c; ) {
      c.removeAttribute &&
        (c.removeAttribute("x"),
        c.removeAttribute("y"),
        c.removeAttribute("id"));
      var d = c.firstChild || c.nextSibling;
      if (!d)
        for (d = c.parentNode; d; ) {
          if (d.nextSibling) {
            d = d.nextSibling;
            break;
          }
          d = d.parentNode;
        }
      c = d;
    }
    a = g.R.Nd(a);
    if (-1 == this.Qi.indexOf(a)) {
      for (this.Qi.unshift(a); this.Qi.length > this.s.options.iq; )
        this.Qi.pop();
      this.jq = this.PB;
      nc(this, 45 * this.jq);
    }
  }
};
g.S = Object.create(null);
g.ta = function (a, c) {
  this.B = a;
  this.type = c;
};
g.ta.po = 0;
g.ta.ww = 1;
g.ta.zw = 2;
g.ta.yw = 3;
g.ta.uw = 4;
g.ta.vw = 5;
g.ta.xw = 6;
b = g.ta.prototype;
b.ka = null;
b.Kg = null;
b.xf = null;
b.$b = 0;
b.gb = 0;
b.hf = function (a) {
  var c = this,
    d = c.B,
    e = a.B;
  a.isConnected() && a.disconnect();
  if (c.isConnected()) {
    var f = C(c),
      h = c.xf;
    c.xf = null;
    if (f.ib) (h = g.R.Bh(f)), f.I(), (f = null);
    else if (c.type == g.Ra) {
      if (!f.L) throw Error("Orphan block does not have an output connection.");
      var k = g.ta.lz(e, f);
      k && (f.L.connect(k), (f = null));
    } else if (c.type == g.Xa) {
      if (!f.$)
        throw Error("Orphan block does not have a previous connection.");
      for (k = e; k.U; ) {
        var l = q(k);
        if (l && !l.ib) k = l;
        else {
          oc(f.$, k.U) && (k.U.connect(f.$), (f = null));
          break;
        }
      }
    }
    if (f && (c.disconnect(), g.i.Pc)) {
      var m = g.i.cc();
      setTimeout(function () {
        f.v &&
          !f.getParent() &&
          (g.i.aa(m), f.L ? f.L.mq(c) : f.$ && f.$.mq(c), g.i.aa(!1));
      }, g.mo);
    }
    c.xf = h;
  }
  var n;
  g.i.isEnabled() && (n = new g.i.Cl(e));
  g.ta.dE(c, a);
  e.kl(d);
  n && (n.zj(), g.i.Oa(n));
};
b.I = function () {
  if (this.isConnected()) {
    this.xf = null;
    var a = C(this);
    a.ib ? a.I() : D(a);
  }
};
function F(a) {
  return a.type == g.Ra || a.type == g.Xa;
}
b.isConnected = function () {
  return !!this.ka;
};
function Eb(a, c) {
  if (!c) return g.ta.yw;
  if (F(a))
    var d = a.B,
      e = c.B;
  else (e = a.B), (d = c.B);
  return d && d == e
    ? g.ta.ww
    : c.type != g.jk[a.type]
    ? g.ta.zw
    : d && e && d.v !== e.v
    ? g.ta.vw
    : oc(a, c)
    ? d.ib && !e.ib
      ? g.ta.xw
      : g.ta.po
    : g.ta.uw;
}
function Fb(a, c) {
  switch (Eb(a, c)) {
    case g.ta.po:
      break;
    case g.ta.ww:
      throw Error("Attempted to connect a block to itself.");
    case g.ta.vw:
      throw Error("Blocks not on same workspace.");
    case g.ta.zw:
      throw Error("Attempt to connect incompatible types.");
    case g.ta.yw:
      throw Error("Target connection is null.");
    case g.ta.uw:
      throw Error(
        "Connection checks failed. " +
          (a + " expected " + a.Kg + ", found " + c.Kg)
      );
    case g.ta.xw:
      throw Error("Connecting non-shadow to shadow block.");
    default:
      throw Error("Unknown connection failure: this should never happen!");
  }
}
b.Vp = function (a) {
  if (a.B.Th() || Eb(this, a) != g.ta.po) return !1;
  switch (a.type) {
    case g.cf:
      return (
        this.ka || -1 != g.Am.indexOf(a)
          ? (a = !1)
          : a.ka
          ? ((a = C(a)), (a = a.Th() ? !(a.$ && C(a.$)) : !1))
          : (a = !0),
        a
      );
    case g.bf:
      if ((a.isConnected() && !C(a).Th()) || this.isConnected()) return !1;
      break;
    case g.Ra:
      if (a.isConnected() && !C(a).Lc() && !C(a).ib) return !1;
      break;
    case g.Xa:
      if (a.isConnected() && !this.B.U && !C(a).ib && C(a).U) return !1;
      break;
    default:
      throw Error("Unknown connection type in isConnectionAllowed");
  }
  return -1 != g.Am.indexOf(a) ? !1 : !0;
};
b.mq = function () {};
b.connect = function (a) {
  if (this.ka != a) {
    Fb(this, a);
    var c = g.i.cc();
    c || g.i.aa(!0);
    F(this) ? this.hf(a) : a.hf(this);
    c || g.i.aa(!1);
  }
};
g.ta.dE = function (a, c) {
  if (!a || !c) throw Error("Cannot connect null connections.");
  a.ka = c;
  c.ka = a;
};
g.ta.lH = function (a, c) {
  for (var d = !1, e = 0; e < a.P.length; e++) {
    var f = a.P[e].connection;
    if (f && f.type == g.Ra && oc(c.L, f)) {
      if (d) return null;
      d = f;
    }
  }
  return d;
};
g.ta.lz = function (a, c) {
  for (var d; (d = g.ta.lH(a, c)); ) if (((a = C(d)), !a || a.ib)) return d;
  return null;
};
b = g.ta.prototype;
b.disconnect = function () {
  var a = this.ka;
  if (!a) throw Error("Source connection not connected.");
  if (a.ka != this)
    throw Error("Target connection not connected to source connection.");
  if (F(this)) {
    var c = this.B;
    var d = a.B;
    a = this;
  } else (c = a.B), (d = this.B);
  var e = g.i.cc();
  e || g.i.aa(!0);
  this.Ts(c, d);
  a.Wu();
  e || g.i.aa(!1);
};
b.Ts = function (a, c) {
  var d;
  g.i.isEnabled() && (d = new g.i.Cl(c));
  this.ka = this.ka.ka = null;
  c.kl(null);
  d && (d.zj(), g.i.Oa(d));
};
b.Wu = function () {
  var a = this.B,
    c = this.xf;
  if (a.v && c && g.i.Pc)
    if (((a = g.R.Wi(c, a.v)), a.L)) this.connect(a.L);
    else if (a.$) this.connect(a.$);
    else throw Error("Child block does not have output or previous statement.");
};
function C(a) {
  return a.isConnected() ? a.ka.B : null;
}
function oc(a, c) {
  if (!a.Kg || !c.Kg) return !0;
  for (var d = 0; d < a.Kg.length; d++)
    if (-1 != c.Kg.indexOf(a.Kg[d])) return !0;
  return !1;
}
b.Iz = function () {
  this.isConnected() && !oc(this, this.ka) && D(F(this) ? C(this) : this.B);
};
b.wa = function (a) {
  a
    ? (Array.isArray(a) || (a = [a]), (this.Kg = a), this.Iz())
    : (this.Kg = null);
  return this;
};
b.Cz = function () {
  return [];
};
b.ag = function () {
  for (var a = null, c = this.B, d = c.P, e = 0; e < c.P.length; e++)
    if (d[e].connection === this) {
      a = d[e];
      break;
    }
  return a;
};
b.toString = function () {
  var a = this.B;
  if (a)
    if (a.L == this) var c = "Output Connection of ";
    else if (a.$ == this) c = "Previous Connection of ";
    else if (a.U == this) c = "Next Connection of ";
    else {
      c = null;
      for (var d = 0, e; (e = a.P[d]); d++)
        if (e.connection == this) {
          c = e;
          break;
        }
      if (c) c = 'Input "' + c.name + '" connection on ';
      else
        return (
          console.warn("Connection not actually connected to sourceBlock_"),
          "Orphan Connection"
        );
    }
  else return "Orphan Connection";
  return c + pc(a);
};
g.Y = {};
g.Y.zl = {};
g.Y.register = function (a, c) {
  if ("string" != typeof a || "" == a.trim())
    throw Error('Error: Invalid extension name "' + a + '"');
  if (g.Y.zl[a])
    throw Error('Error: Extension "' + a + '" is already registered.');
  if ("function" != typeof c)
    throw Error('Error: Extension "' + a + '" must be a function');
  g.Y.zl[a] = c;
};
g.Y.wq = function (a, c) {
  if (!c || "object" != typeof c)
    throw Error('Error: Mixin "' + a + '" must be a object');
  g.Y.register(a, function () {
    this.eg(c);
  });
};
g.Y.An = function (a, c, d, e) {
  var f = 'Error when registering mutator "' + a + '": ';
  g.Y.hx(f, c.lb, "domToMutation");
  g.Y.hx(f, c.Pa, "mutationToDom");
  var h = g.Y.jx(c, f);
  if (d && "function" != typeof d)
    throw Error('Extension "' + a + '" is not a function');
  g.Y.register(a, function () {
    if (h) {
      if (!g.ac) throw Error(f + "Missing require for Blockly.Mutator");
      this.jl(new g.ac(e));
    }
    this.eg(c);
    d && d.apply(this);
  });
};
g.Y.unregister = function (a) {
  g.Y.zl[a]
    ? delete g.Y.zl[a]
    : console.warn(
        'No extension mapping for name "' + a + '" found to unregister'
      );
};
g.Y.apply = function (a, c, d) {
  var e = g.Y.zl[a];
  if ("function" != typeof e)
    throw Error('Error: Extension "' + a + '" not found.');
  if (d) g.Y.VD(a, c);
  else var f = g.Y.xt(c);
  e.apply(c);
  if (d) g.Y.TD('Error after applying mutator "' + a + '": ', c);
  else if (!g.Y.lG(f, c))
    throw Error(
      'Error when applying extension "' +
        a +
        '": mutation properties changed when applying a non-mutator extension.'
    );
};
g.Y.hx = function (a, c, d) {
  if (!c) throw Error(a + 'missing required property "' + d + '"');
  if ("function" != typeof c)
    throw Error(a + '" required property "' + d + '" must be a function');
};
g.Y.VD = function (a, c) {
  if (g.Y.xt(c).length)
    throw Error(
      'Error: tried to apply mutation "' +
        a +
        '" to a block that already has mutator functions.  Block id: ' +
        c.id
    );
};
g.Y.jx = function (a, c) {
  var d = void 0 !== a.Vf,
    e = void 0 !== a.Yf;
  if (d && e) {
    if ("function" != typeof a.Vf)
      throw Error(c + "compose must be a function.");
    if ("function" != typeof a.Yf)
      throw Error(c + "decompose must be a function.");
    return !0;
  }
  if (d || e)
    throw Error(c + 'Must have both or neither of "compose" and "decompose"');
  return !1;
};
g.Y.TD = function (a, c) {
  if ("function" != typeof c.lb)
    throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
  if ("function" != typeof c.Pa)
    throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
  g.Y.jx(c, a);
};
g.Y.xt = function (a) {
  var c = [];
  void 0 !== a.lb && c.push(a.lb);
  void 0 !== a.Pa && c.push(a.Pa);
  void 0 !== a.Vf && c.push(a.Vf);
  void 0 !== a.Yf && c.push(a.Yf);
  return c;
};
g.Y.lG = function (a, c) {
  c = g.Y.xt(c);
  if (c.length != a.length) return !1;
  for (var d = 0; d < c.length; d++) if (a[d] != c[d]) return !1;
  return !0;
};
g.Y.ep = function (a, c) {
  var d = [];
  "object" == typeof document &&
    g.g.gA(function () {
      for (var e in c) g.g.ix(c[e]);
    });
  return function () {
    this.type &&
      -1 == d.indexOf(this.type) &&
      (g.Y.UD(this, a, c), d.push(this.type));
    this.Ta(
      function () {
        var e = z(this, a),
          f = c[e];
        null == f
          ? -1 == d.indexOf(this.type) &&
            ((e = "No tooltip mapping for value " + e + " of field " + a),
            null != this.type && (e += " of block type " + this.type),
            console.warn(e + "."))
          : (f = g.g.nc(f));
        return f;
      }.bind(this)
    );
  };
};
g.Y.UD = function (a, c, d) {
  var e = B(a, c);
  if ("function" != typeof e.pj) {
    e = e.getOptions();
    for (var f = 0; f < e.length; ++f) {
      var h = e[f][1];
      null == d[h] &&
        console.warn(
          "No tooltip mapping for value " +
            h +
            " of field " +
            c +
            " of block type " +
            a.type
        );
    }
  }
};
g.Y.fp = function (a) {
  "object" == typeof document &&
    g.g.gA(function () {
      g.g.ix(a);
    });
  return function () {
    this.Ta(
      function () {
        var c = B(this, "VAR");
        return g.g.nc(a).replace("%1", c ? c.dc() : "");
      }.bind(this)
    );
  };
};
g.Y.OE = function () {
  this.BH = this.Af;
  this.Ta(
    function () {
      var a = this.getParent();
      return (a && qc(a) && a.Af) || this.BH;
    }.bind(this)
  );
};
g.Y.register("parent_tooltip_when_inline", g.Y.OE);
g.ce = function (a, c, d) {
  this.ip = null;
  null == a && (a = "");
  g.ce.w.constructor.call(this, a, null, d);
  d || (this.ip = c || null);
  this.Bb = new g.g.ge(0, g.oa.Hw);
};
g.g.object.X(g.ce, g.oa);
g.ce.pa = function (a) {
  var c = g.g.nc(a.text);
  return new g.ce(c, void 0, a);
};
g.ce.prototype.Gf = !1;
g.ce.prototype.ld = function (a) {
  g.ce.w.ld.call(this, a);
  this.ip = a["class"];
};
g.ce.prototype.Zg = function () {
  ub(this);
  this.Bc.setAttribute("y", this.Bb.height);
  this.ip && g.g.o.rb(this.Bc, this.ip);
};
g.ce.prototype.Qg = function (a) {
  return null === a || void 0 === a ? null : String(a);
};
g.vc.register("field_label", g.ce);
g.hw = function (a, c, d, e) {
  if (a != g.xg && !c)
    throw Error("Value inputs and statement inputs must have non-empty name.");
  this.type = a;
  this.name = c;
  this.B = d;
  this.connection = e;
  this.Na = [];
};
b = g.hw.prototype;
b.align = g.Xq;
b.oi = !0;
function H(a, c, d) {
  rc(a, a.Na.length, c, d);
  return a;
}
function rc(a, c, d, e) {
  if (0 > c || c > a.Na.length) throw Error("index " + c + " out of bounds.");
  if (!(d || ("" == d && e))) return c;
  "string" == typeof d && (d = new g.ce(d));
  d.fv(a.B);
  a.B.ga && d.Z();
  d.name = e;
  d.Ou && (c = rc(a, c, d.Ou));
  a.Na.splice(c, 0, d);
  ++c;
  d.pv && (c = rc(a, c, d.pv));
  a.B.ga && (a.B.Ea(), a.B.Pb());
  return c;
}
b.isVisible = function () {
  return this.oi;
};
b.Yb = function (a) {
  var c = [];
  if (this.oi == a) return c;
  for (
    var d = (this.oi = a) ? "block" : "none", e = 0, f;
    (f = this.Na[e]);
    e++
  )
    f.Yb(a);
  if (this.connection) {
    if (a) c = sc(this.connection);
    else if (((e = this.connection), tc(e, !0), e.ka))
      for (e = p(C(e), !1), f = 0; f < e.length; f++) {
        for (var h = e[f], k = h.Me(!0), l = 0; l < k.length; l++) tc(k[l], !0);
        h = Wa(h);
        for (l = 0; l < h.length; l++) h[l].Yb(!1);
      }
    if ((e = C(this.connection))) (e.za().style.display = d), a || (e.ga = !1);
  }
  return c;
};
b.hn = function () {
  for (var a = 0, c; (c = this.Na[a]); a++) c.hn();
};
b.wa = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.wa(a);
  return this;
};
function J(a, c) {
  a.align = c;
  a.B.ga && a.B.Ea();
  return a;
}
b.Z = function () {
  if (this.B.v.ga) for (var a = 0; a < this.Na.length; a++) this.Na[a].Z();
};
b.I = function () {
  for (var a = 0, c; (c = this.Na[a]); a++) c.I();
  this.connection && this.connection.I();
  this.B = null;
};
g.no = function (a, c, d) {
  if (g.Generator && "undefined" != typeof g.Generator.prototype[c])
    throw Error(
      'Block prototypeName "' +
        c +
        '" conflicts with Blockly.Generator members.'
    );
  this.id = d && !x(a, d) ? d : g.g.Tg();
  a.ss[this.id] = this;
  this.$ = this.U = this.L = null;
  this.P = [];
  this.$g = void 0;
  this.disabled = !1;
  this.Af = "";
  this.contextMenu = !0;
  this.kg = null;
  this.Lg = [];
  this.Wx = this.Az = this.Ls = !0;
  this.Mg = this.ib = !1;
  this.Ak = null;
  this.Je = { text: null, Nu: !1, size: new g.g.ge(160, 80) };
  this.MA = new g.g.V(0, 0);
  this.v = a;
  this.ec = a.re;
  this.G = a.G;
  this.Zm = !1;
  this.Yg = void 0;
  if (c) {
    this.type = c;
    d = g.S[c];
    if (!d || "object" != typeof d) throw TypeError("Unknown block type: " + c);
    g.g.object.eg(this, d);
  }
  a.vl.push(this);
  a.oh[this.type] || (a.oh[this.type] = []);
  a.oh[this.type].push(this);
  "function" == typeof this.Z && this.Z();
  this.MF = this.$g;
  if (g.i.isEnabled()) {
    (a = g.i.cc()) || g.i.aa(!0);
    try {
      g.i.Oa(new g.i.oo(this));
    } finally {
      a || g.i.aa(!1);
    }
  }
  if ("function" == typeof this.onchange) {
    if ((a = this.onchange) && "function" != typeof a)
      throw Error("onchange must be a function.");
    this.qn && Ca(this.v, this.qn);
    if ((this.onchange = a)) (this.qn = a.bind(this)), Ba(this.v, this.qn);
  }
};
b = g.no.prototype;
b.data = null;
b.Ni = "#000000";
b.mx = null;
b.nx = null;
b.I = function (a) {
  if (this.v) {
    this.qn && Ca(this.v, this.qn);
    g.Se && g.navigation.Bz(this);
    D(this, a);
    g.i.isEnabled() && g.i.Oa(new g.i.aB(this));
    g.i.disable();
    try {
      if (this.v) {
        wa(this.v, this);
        var c = this.v;
        c.oh[this.type].splice(c.oh[this.type].indexOf(this), 1);
        c.oh[this.type].length || delete c.oh[this.type];
        delete this.v.ss[this.id];
        this.v = null;
      }
      g.selected == this && (g.selected = null);
      for (var d = this.Lg.length - 1; 0 <= d; d--) this.Lg[d].I(!1);
      d = 0;
      for (var e; (e = this.P[d]); d++) e.I();
      this.P.length = 0;
      var f = this.Me(!0);
      d = 0;
      for (var h; (h = f[d]); d++) h.I();
    } finally {
      g.i.enable();
    }
  }
};
b.ej = function () {
  for (var a = 0, c; (c = this.P[a]); a++)
    for (var d = 0, e; (e = c.Na[d]); d++) e.ej && e.ej();
};
function D(a, c) {
  if (a.L) {
    var d = null;
    a.L.isConnected() && ((d = a.L.ka), a.L.disconnect());
    if (d && c) {
      a: {
        c = null;
        for (var e = 0; e < a.P.length; e++) {
          var f = a.P[e].connection;
          if (f && f.type == g.Ra && f.ka) {
            if (c) {
              a = null;
              break a;
            }
            c = f;
          }
        }
        a = c;
      }
      a &&
        a.isConnected() &&
        !C(a).ib &&
        ((a = a.ka), a.disconnect(), oc(a, d) ? d.connect(a) : a.mq(d));
    }
  } else
    a.$ &&
      ((d = null),
      a.$.isConnected() && ((d = a.$.ka), a.$.disconnect()),
      (e = q(a)),
      c &&
        e &&
        !e.ib &&
        ((a = a.U.ka), a.disconnect(), d && oc(d, a) && d.connect(a)));
}
b.Me = function () {
  var a = [];
  this.L && a.push(this.L);
  this.$ && a.push(this.$);
  this.U && a.push(this.U);
  for (var c = 0, d; (d = this.P[c]); c++) d.connection && a.push(d.connection);
  return a;
};
b.Pb = function () {
  console.warn(
    "Not expected to reach Block.bumpNeighbours function. BlockSvg.bumpNeighbours was expected to be called instead."
  );
};
b.getParent = function () {
  return this.kg;
};
function uc(a) {
  do {
    var c = a;
    a = a.getParent();
    if (!a) return null;
  } while (q(a) == c);
  return a;
}
function q(a) {
  return a.U && C(a.U);
}
function db(a) {
  var c = a;
  do (a = c), (c = a.kg);
  while (c);
  return a;
}
b.Kh = function (a) {
  if (!a) return this.Lg;
  a = [];
  for (var c = 0, d; (d = this.P[c]); c++)
    d.connection && (d = C(d.connection)) && a.push(d);
  (c = q(this)) && a.push(c);
  return a;
};
b.kl = function (a) {
  if (a != this.kg) {
    if (this.kg) {
      g.g.cp(this.kg.Lg, this);
      if (this.$ && this.$.isConnected())
        throw Error("Still connected to previous block.");
      if (this.L && this.L.isConnected())
        throw Error("Still connected to parent block.");
      this.kg = null;
    } else wa(this.v, this);
    (this.kg = a) ? a.Lg.push(this) : this.v.vl.push(this);
  }
};
function p(a, c) {
  var d = [a];
  a = a.Kh(c);
  for (var e, f = 0; (e = a[f]); f++) d.push.apply(d, p(e, c));
  return d;
}
b.qe = function () {
  return this.Ls && !this.ib && !(this.v && this.v.options.readOnly);
};
b.Lc = function () {
  return this.Az && !this.ib && !(this.v && this.v.options.readOnly);
};
b.Dq = function (a) {
  this.Az = a;
};
b.ev = function (a) {
  this.ib = a;
};
b.Th = function () {
  return this.Zm;
};
b.kA = function (a) {
  this.Zm = a;
};
b.nd = function () {
  return this.Wx && !(this.v && this.v.options.readOnly);
};
b.av = function (a) {
  this.Wx = a;
  a = 0;
  for (var c; (c = this.P[a]); a++)
    for (var d = 0, e; (e = c.Na[d]); d++) e.ph();
};
b.Ta = function (a) {
  this.Af = a;
};
function vc(a) {
  var c = a.mx;
  return c ? c : g.g.Ab.rs("#fff", a.Ni, 0.6);
}
b.se = function (a) {
  var c = "string" == typeof a ? g.g.nc(a) : a,
    d = Number(c);
  if (!isNaN(d) && 0 <= d && 360 >= d) this.Ni = g.Zy(d);
  else if ((d = g.g.Ab.parse(c))) this.Ni = d;
  else
    throw (
      ((d = 'Invalid colour: "' + c + '"'),
      a != c && (d += ' (from "' + a + '")'),
      Error(d))
    );
};
function K(a, c) {
  var d = a.v.Kp().KD[c];
  if (d)
    (a.mx = d.colourSecondary),
      (a.nx = d.colourTertiary),
      (a.Yg = d.Yg),
      a.se(d.colourPrimary);
  else throw Error("Invalid style name: " + c);
}
function B(a, c) {
  for (var d = 0, e; (e = a.P[d]); d++)
    for (var f = 0, h; (h = e.Na[f]); f++) if (h.name == c) return h;
  return null;
}
b.Et = function () {
  for (var a = [], c = 0, d; (d = this.P[c]); c++)
    for (var e = 0, f; (f = d.Na[e]); e++) f.zn() && a.push(f.getValue());
  return a;
};
b.Xg = function () {
  for (var a = [], c = 0, d; (d = this.P[c]); c++)
    for (var e = 0, f; (f = d.Na[e]); e++)
      f.zn() && (f = this.v.pf(f.getValue())) && a.push(f);
  return a;
};
b.Nq = function (a) {
  for (var c = 0, d; (d = this.P[c]); c++)
    for (var e = 0, f; (f = d.Na[e]); e++)
      f.zn() && a.va() == f.getValue() && xb(f);
};
b.xq = function (a, c) {
  for (var d = 0, e; (e = this.P[d]); d++)
    for (var f = 0, h; (h = e.Na[f]); f++)
      h.zn() && a == h.getValue() && h.setValue(c);
};
function z(a, c) {
  return (a = B(a, c)) ? a.getValue() : null;
}
function wc(a, c, d) {
  a = B(a, d);
  if (!a) throw Error('Field "' + d + '" not found.');
  a.setValue(c);
}
b.Wd = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.$) {
      if (this.L)
        throw Error(
          "Remove output connection prior to adding previous connection."
        );
      this.$ = this.gn(g.cf);
    }
    this.$.wa(c);
  } else if (this.$) {
    if (this.$.isConnected())
      throw Error(
        "Must disconnect previous statement before removing connection."
      );
    this.$.I();
    this.$ = null;
  }
};
b.Vd = function (a, c) {
  if (a)
    void 0 === c && (c = null),
      this.U || (this.U = this.gn(g.Xa)),
      this.U.wa(c);
  else if (this.U) {
    if (this.U.isConnected())
      throw Error("Must disconnect next statement before removing connection.");
    this.U.I();
    this.U = null;
  }
};
b.bd = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.L) {
      if (this.$)
        throw Error(
          "Remove previous connection prior to adding output connection."
        );
      this.L = this.gn(g.bf);
    }
    this.L.wa(c);
  } else if (this.L) {
    if (this.L.isConnected())
      throw Error("Must disconnect output value before removing connection.");
    this.L.I();
    this.L = null;
  }
};
b.te = function (a) {
  this.$g != a &&
    (g.i.Oa(new g.i.sg(this, "inline", null, this.$g, a)), (this.$g = a));
};
function qc(a) {
  if (void 0 != a.$g) return a.$g;
  for (var c = 1; c < a.P.length; c++)
    if (a.P[c - 1].type == g.xg && a.P[c].type == g.xg) return !1;
  for (c = 1; c < a.P.length; c++)
    if (a.P[c - 1].type == g.Ra && a.P[c].type == g.xg) return !0;
  return !1;
}
b.isEnabled = function () {
  return !this.disabled;
};
b.qd = function (a) {
  this.isEnabled() != a &&
    (g.i.Oa(new g.i.sg(this, "disabled", null, this.disabled, !a)),
    (this.disabled = !a));
};
function xc(a) {
  for (a = uc(a); a; ) {
    if (a.disabled) return !0;
    a = uc(a);
  }
  return !1;
}
b.isCollapsed = function () {
  return this.Mg;
};
b.kh = function (a) {
  this.Mg != a &&
    (g.i.Oa(new g.i.sg(this, "collapsed", null, this.Mg, a)), (this.Mg = a));
};
b.toString = function (a, c) {
  var d = [],
    e = c || "?";
  if (this.Mg) d.push(E(this, "_TEMP_COLLAPSED_INPUT").Na[0].dc());
  else
    for (var f = 0, h; (h = this.P[f]); f++) {
      for (var k = 0, l; (l = h.Na[k]); k++) d.push(l.dc());
      h.connection &&
        ((h = C(h.connection)) ? d.push(h.toString(void 0, c)) : d.push(e));
    }
  d = d.join(" ").trim() || "???";
  a && d.length > a && (d = d.substring(0, a - 3) + "...");
  return d;
};
function L(a, c) {
  return a.Qf(g.Ra, c);
}
function M(a, c) {
  return a.Qf(g.xg, c || "");
}
function yc(a, c) {
  var d = c.type ? 'Block "' + c.type + '": ' : "";
  if (c.output && c.previousStatement)
    throw Error(d + "Must not have both an output and a previousStatement.");
  c.style && c.style.Yg && ((a.Yg = c.style.Yg), (c.style = null));
  if (c.style && c.colour)
    throw Error(d + "Must not have both a colour and a style.");
  if (c.style) {
    var e = c.style;
    try {
      K(a, e);
    } catch (I) {
      console.warn(d + "Style does not exist: ", e);
    }
  } else if ("colour" in c)
    if (void 0 === c.colour) console.warn(d + "Undefined colour value.");
    else {
      e = c.colour;
      try {
        a.se(e);
      } catch (I) {
        console.warn(d + "Illegal colour value: ", e);
      }
    }
  for (e = 0; void 0 !== c["message" + e]; ) {
    for (
      var f = a,
        h = c["args" + e] || [],
        k = c["lastDummyAlign" + e],
        l = g.g.zH(c["message" + e]),
        m = [],
        n = 0,
        t = [],
        v = 0;
      v < l.length;
      v++
    ) {
      var w = l[v];
      if ("number" == typeof w) {
        if (0 >= w || w > h.length)
          throw Error(
            'Block "' + f.type + '": Message index %' + w + " out of range."
          );
        if (m[w])
          throw Error(
            'Block "' + f.type + '": Message index %' + w + " duplicated."
          );
        m[w] = !0;
        n++;
        t.push(h[w - 1]);
      } else (w = w.trim()) && t.push(w);
    }
    if (n != h.length)
      throw Error(
        'Block "' +
          f.type +
          '": Message does not reference all ' +
          h.length +
          " arg(s)."
      );
    t.length &&
      ("string" == typeof t[t.length - 1] ||
        g.g.jb.startsWith(t[t.length - 1].type, "field_")) &&
      ((v = { type: "input_dummy" }), k && (v.align = k), t.push(v));
    k = { LEFT: g.Xq, RIGHT: g.fd, CENTRE: g.Dv };
    h = [];
    for (v = 0; v < t.length; v++)
      if (((m = t[v]), "string" == typeof m)) h.push([m, void 0]);
      else {
        l = n = null;
        do
          if (((w = !1), "string" == typeof m)) n = new g.ce(m);
          else
            switch (m.type) {
              case "input_value":
                l = L(f, m.name);
                break;
              case "input_statement":
                l = f.Qf(g.Xa, m.name);
                break;
              case "input_dummy":
                l = M(f, m.name);
                break;
              default:
                (n = g.vc.pa(m)), !n && m.alt && ((m = m.alt), (w = !0));
            }
        while (w);
        if (n) h.push([n, m.name]);
        else if (l) {
          m.check && l.wa(m.check);
          m.align && J(l, k[m.align]);
          for (m = 0; m < h.length; m++) H(l, h[m][0], h[m][1]);
          h.length = 0;
        }
      }
    e++;
  }
  void 0 !== c.inputsInline && a.te(c.inputsInline);
  void 0 !== c.output && a.bd(!0, c.output);
  void 0 !== c.previousStatement && a.Wd(!0, c.previousStatement);
  void 0 !== c.nextStatement && a.Vd(!0, c.nextStatement);
  void 0 !== c.tooltip && ((e = c.tooltip), (e = g.g.nc(e)), a.Ta(e));
  void 0 !== c.enableContextMenu &&
    ((e = c.enableContextMenu), (a.contextMenu = !!e));
  void 0 !== c.helpUrl && ((e = c.helpUrl), (e = g.g.nc(e)), (a.Wb = e));
  "string" == typeof c.extensions &&
    (console.warn(
      d +
        "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" +
        c.type +
        "' block."
    ),
    (c.extensions = [c.extensions]));
  void 0 !== c.mutator && g.Y.apply(c.mutator, a, !0);
  if (Array.isArray(c.extensions))
    for (c = c.extensions, d = 0; d < c.length; ++d) g.Y.apply(c[d], a, !1);
}
b.eg = function (a, c) {
  if (void 0 !== c && "boolean" != typeof c)
    throw Error("opt_disableCheck must be a boolean if provided");
  if (!c) {
    c = [];
    for (var d in a) void 0 !== this[d] && c.push(d);
    if (c.length)
      throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
  }
  g.g.object.eg(this, a);
};
b.Qf = function (a, c) {
  var d = null;
  if (a == g.Ra || a == g.Xa) d = this.gn(a);
  a = new g.hw(a, c, this, d);
  this.P.push(a);
  return a;
};
function zc(a, c, d) {
  if (c != d) {
    for (var e = -1, f = d ? -1 : a.P.length, h = 0, k; (k = a.P[h]); h++)
      if (k.name == c) {
        if (((e = h), -1 != f)) break;
      } else if (d && k.name == d && ((f = h), -1 != e)) break;
    if (-1 == e) throw Error('Named input "' + c + '" not found.');
    if (-1 == f) throw Error('Reference input "' + d + '" not found.');
    a.ou(e, f);
  }
}
b.ou = function (a, c) {
  if (a == c) throw Error("Can't move input to itself.");
  if (a >= this.P.length)
    throw RangeError("Input index " + a + " out of bounds.");
  if (c > this.P.length)
    throw RangeError("Reference input " + c + " out of bounds.");
  var d = this.P[a];
  this.P.splice(a, 1);
  a < c && c--;
  this.P.splice(c, 0, d);
};
b.pb = function (a, c) {
  for (var d = 0, e; (e = this.P[d]); d++)
    if (e.name == a) {
      e.I();
      this.P.splice(d, 1);
      return;
    }
  if (!c) throw Error("Input not found: " + a);
};
function E(a, c) {
  for (var d = 0, e; (e = a.P[d]); d++) if (e.name == c) return e;
  return null;
}
function N(a, c) {
  return (a = E(a, c)) && a.connection && C(a.connection);
}
b.ji = function (a) {
  this.Je.text != a &&
    (g.i.Oa(new g.i.sg(this, "comment", null, this.Je.text, a)),
    (this.Ak = this.Je.text = a));
};
b.mh = function () {};
b.jl = function () {};
b.Sa = function () {
  return this.MA;
};
b.moveBy = function (a, c) {
  if (this.kg) throw Error("Block has parent.");
  var d = new g.i.Cl(this);
  this.MA.translate(a, c);
  d.zj();
  g.i.Oa(d);
};
b.gn = function (a) {
  return new g.ta(this, a);
};
function pc(a) {
  var c = a.type ? '"' + a.type + '" block' : "Block";
  a.id && (c += ' (id="' + a.id + '")');
  return c;
}
g.m = {};
g.m.hl = {};
g.m.$n = !1;
g.m.register = function (a, c) {
  if (g.m.hl[a]) throw Error("Renderer has already been registered.");
  g.m.hl[a] = c;
};
g.m.unregister = function (a) {
  g.m.hl[a]
    ? delete g.m.hl[a]
    : console.warn(
        'No renderer mapping for name "' + a + '" found to unregister'
      );
};
g.m.wM = function () {
  g.m.$n = !0;
};
g.m.xM = function () {
  g.m.$n = !1;
};
g.m.Z = function (a) {
  function c() {
    c.w.constructor.call(this);
  }
  if (!g.m.hl[a]) throw Error("Renderer not registered: ", a);
  g.g.object.X(c, g.m.hl[a]);
  a = new c();
  a.Z();
  return a;
};
g.wi = function () {
  g.wi.w.constructor.call(this);
};
g.g.object.X(g.wi, g.Bo);
g.wi.prototype.next = function () {
  var a = this.Vb;
  if (!a) return null;
  (a = a.next()) && u(this, a);
  return a;
};
g.wi.prototype.Sm = function () {
  return null;
};
g.wi.prototype.lg = function () {
  var a = this.Vb;
  if (!a) return null;
  (a = a.lg()) && u(this, a);
  return a;
};
g.wi.prototype.rn = function () {
  return null;
};
g.m.qJ = function () {};
g.m.Ci = function (a) {
  this.Ij = a;
  this.ql = g.g.o.K("path", { class: "blocklyPath" }, this.Ij);
  this.Sn = g.g.o.K("path", { class: "blocklyPathLight" }, this.Ij);
  this.Qn = g.g.o.K(
    "path",
    { class: "blocklyPathDark", transform: "translate(1,1)" },
    this.Ij
  );
};
g.m.Ci.prototype.cv = function (a) {
  this.ql.setAttribute("d", a);
  this.Sn.style.display = "none";
  this.Qn.style.display = "none";
};
g.m.Ci.prototype.mt = function () {
  this.ql.setAttribute("transform", "scale(-1 1)");
};
g.yi = function () {
  g.Dc.call(this);
  this.md = -1;
};
g.g.object.X(g.yi, g.Dc);
b = g.yi.prototype;
b.Ja = function () {
  var a = document.createElement("div");
  a.id = this.va();
  this.mb = a;
  a.className = "goog-menu goog-menu-vertical blocklyNonSelectable";
  a.tabIndex = 0;
  g.g.M.ue(a, this.Yu || g.g.M.Kf.rC);
};
b.focus = function () {
  var a = this.ua();
  a && (a.focus(), g.g.o.rb(a, "focused"));
};
b.blur = function () {
  var a = this.ua();
  a && (a.blur(), g.g.o.Sb(a, "focused"));
};
b.ue = function (a) {
  this.Yu = a;
};
b.nf = function () {
  g.yi.w.nf.call(this);
  Mb(
    this,
    function (a) {
      if (a.ad) {
        var c = a.ua();
        c = c.id || (c.id = a.va());
        this.yk || (this.yk = {});
        this.yk[c] = a;
      }
    },
    this
  );
  this.os();
};
b.Jh = function () {
  Ac(this, -1);
  g.yi.w.Jh.call(this);
};
b.zm = function () {
  g.yi.w.zm.call(this);
  this.Ns();
};
b.os = function () {
  var a = this.ua();
  this.gG = g.ca(a, "mouseover", this, this.xF, !0);
  this.jm = g.ca(a, "click", this, this.pF, !0);
  this.dG = g.ca(a, "mouseenter", this, this.uF, !0);
  this.eG = g.ca(a, "mouseleave", this, this.wF, !0);
  this.pn = g.ca(a, "keydown", this, this.Gt);
};
b.Ns = function () {
  g.Ua(this.gG);
  g.Ua(this.jm);
  g.Ua(this.dG);
  g.Ua(this.eG);
  g.Ua(this.pn);
};
b.yk = null;
function Bc(a, c) {
  if (a.yk)
    for (var d = a.ua(); c && c !== d; ) {
      var e = c.id;
      if (e in a.yk) return a.yk[e];
      c = c.parentNode;
    }
  return null;
}
function Cc(a) {
  (a = a.ob[a.md] || null) && a.lh(!1);
}
function Ac(a, c) {
  var d = a.ob[c] || null;
  d
    ? (d.lh(!0), (a.md = c))
    : -1 < a.md && ((a.ob[a.md] || null).lh(!1), (a.md = -1));
  d && g.g.style.Zu(d.ua(), a.ua());
}
b.lh = function (a) {
  Ac(this, this.ob.indexOf(a));
};
function Dc(a) {
  Cc(a);
  Ec(
    a,
    function (c, d) {
      return (c + 1) % d;
    },
    a.md
  );
}
function Fc(a) {
  Cc(a);
  Ec(
    a,
    function (c, d) {
      c--;
      return 0 > c ? d - 1 : c;
    },
    a.md
  );
}
function Ec(a, c, d) {
  var e = a.ob.length;
  d = c.call(a, 0 > d ? -1 : d, e);
  for (var f = 0; f <= e; ) {
    var h = a.ob[d] || null;
    if (h && h.isEnabled()) {
      Ac(a, d);
      break;
    }
    f++;
    d = c.call(a, d, e);
  }
}
b.xF = function (a) {
  (a = Bc(this, a.target)) &&
    a.isEnabled() &&
    (this.ob[this.md] || null) !== a &&
    (Cc(this), this.lh(a));
};
b.pF = function (a) {
  var c = Bc(this, a.target),
    d;
  if ((d = c)) c.isEnabled() && (c.lh(!0), Gc(c)), (d = void 0);
  d && a.preventDefault();
};
b.uF = function () {
  this.focus();
};
b.wF = function () {
  this.ua() && (this.blur(), Cc(this), Ac(this, -1));
};
b.Gt = function (a) {
  return 0 != this.ob.length && Hc(this, a)
    ? (a.preventDefault(), a.stopPropagation(), !0)
    : !1;
};
function Hc(a, c) {
  var d = a.ob[a.md] || null;
  if (d && "function" == typeof d.Gt && d.Gt(c)) return !0;
  if (c.shiftKey || c.ctrlKey || c.metaKey || c.altKey) return !1;
  switch (c.keyCode) {
    case g.g.ya.Gl:
      d && Gc(d);
      break;
    case g.g.ya.am:
      Fc(a);
      break;
    case g.g.ya.Fl:
      Dc(a);
      break;
    default:
      return !1;
  }
  return !0;
}
g.No = function (a, c) {
  g.Dc.call(this);
  this.kf = a;
  this.setValue(c);
  this.xp = !0;
};
g.g.object.X(g.No, g.Dc);
b = g.No.prototype;
b.Ja = function () {
  var a = document.createElement("div");
  a.id = this.va();
  this.mb = a;
  a.className =
    "goog-menuitem goog-option " +
    (this.xp ? "" : "goog-menuitem-disabled ") +
    (this.As ? "goog-option-selected " : "") +
    (this.Wk() ? "goog-menuitem-rtl " : "");
  var c = document.createElement("div");
  c.className = "goog-menuitem-content";
  a.appendChild(c);
  if (this.im) {
    var d = document.createElement("div");
    d.className = "goog-menuitem-checkbox";
  } else d = null;
  d && c.appendChild(d);
  c.appendChild(Ic(this));
  g.g.M.ue(a, this.Yu || (this.im ? g.g.M.Kf.tC : g.g.M.Kf.sC));
  g.g.M.eb(a, g.g.M.State.mk, (this.im && this.As) || !1);
};
function Ic(a) {
  a = a.kf;
  "string" === typeof a && (a = document.createTextNode(a));
  return a;
}
b.setValue = function (a) {
  this.$a = a;
};
b.getValue = function () {
  return this.$a;
};
b.ue = function (a) {
  this.Yu = a;
};
function Jc(a, c) {
  if (a.im) {
    a.As = c;
    var d = a.ua();
    d &&
      a.isEnabled() &&
      (c
        ? (g.g.o.rb(d, "goog-option-selected"), g.g.M.eb(d, g.g.M.State.mk, !0))
        : (g.g.o.Sb(d, "goog-option-selected"),
          g.g.M.eb(d, g.g.M.State.mk, !1)));
  }
}
b.lh = function (a) {
  var c = this.ua();
  c &&
    this.isEnabled() &&
    (a
      ? g.g.o.rb(c, "goog-menuitem-highlight")
      : g.g.o.Sb(c, "goog-menuitem-highlight"));
};
b.isEnabled = function () {
  return this.xp;
};
b.qd = function (a) {
  this.xp = a;
  (a = this.ua()) &&
    (this.xp
      ? g.g.o.Sb(a, "goog-menuitem-disabled")
      : g.g.o.rb(a, "goog-menuitem-disabled"));
};
function Gc(a) {
  a.im && Jc(a, !a.As);
  a.Tw && a.Tw.call(a.yD, a);
}
function Kc(a, c, d) {
  a.Tw = c;
  a.yD = d;
}
g.g.Lq = {};
g.g.Lq.Wg = function (a) {
  a = a.ua();
  var c = g.g.style.Wg(a);
  c.height = a.scrollHeight;
  return c;
};
g.g.Lq.zD = function (a, c, d) {
  c.left += d.width;
  c.right += d.width;
  a.left += d.width;
  a.right += d.width;
};
g.Ga = {};
g.Ga.qp = null;
g.Ga.Zx = null;
g.Ga.show = function (a, c, d) {
  g.ba.show(g.Ga, d, null);
  if (c.length) {
    var e = g.Ga.SG(c, d);
    g.Ga.pd(e, a, d);
    setTimeout(function () {
      e.ua().focus();
    }, 1);
    g.Ga.qp = null;
  } else g.Ga.Ha();
};
g.Ga.SG = function (a, c) {
  var d = new g.yi();
  Nb(d, c);
  for (var e = 0, f; (f = a[e]); e++) {
    var h = new g.No(f.text);
    Nb(h, c);
    d.em(h, d.ob.length, !0);
    h.qd(f.enabled);
    f.enabled &&
      Kc(
        h,
        function () {
          g.Ga.Ha();
          this.Fb();
        },
        f
      );
  }
  return d;
};
g.Ga.pd = function (a, c, d) {
  var e = g.g.lF();
  c = {
    top: c.clientY + e.top,
    bottom: c.clientY + e.top,
    left: c.clientX + e.left,
    right: c.clientX + e.left,
  };
  g.Ga.kE(a);
  var f = g.g.Lq.Wg(a);
  d && g.g.Lq.zD(e, c, f);
  g.ba.TG(e, c, f, d);
  a.ua().focus();
};
g.Ga.kE = function (a) {
  a.Ea(g.ba.Ca);
  var c = a.ua();
  g.g.o.rb(c, "blocklyContextMenu");
  g.ca(c, "contextmenu", null, g.g.qG);
  a.focus();
};
g.Ga.Ha = function () {
  g.ba.Ok(g.Ga);
  g.Ga.qp = null;
  g.Ga.Zx && g.Ua(g.Ga.Zx);
};
g.Ga.gp = function (a, c) {
  return function () {
    g.i.disable();
    try {
      var d = g.R.Wi(c, a.v),
        e = a.Sa();
      e.x = a.G ? e.x - g.wd : e.x + g.wd;
      e.y += 2 * g.wd;
      d.moveBy(e.x, e.y);
    } finally {
      g.i.enable();
    }
    g.i.isEnabled() && !d.ib && g.i.Oa(new g.i.oo(d));
    d.select();
  };
};
g.Ga.HD = function (a) {
  var c = p(a, !1).length,
    d = q(a);
  d && (c -= p(d, !1).length);
  return {
    text:
      1 == c ? g.h.DELETE_BLOCK : g.h.DELETE_X_BLOCKS.replace("%1", String(c)),
    enabled: !0,
    Fb: function () {
      g.i.aa(!0);
      a.I(!0, !0);
      g.i.aa(!1);
    },
  };
};
g.Ga.JD = function (a) {
  return {
    enabled: !("function" == typeof a.Wb ? !a.Wb() : !a.Wb),
    text: g.h.HELP,
    Fb: function () {
      var c = "function" == typeof a.Wb ? a.Wb() : a.Wb;
      c && window.open(c);
    },
  };
};
g.Ga.ID = function (a) {
  var c = Aa(a.v) ? za(a.v, g.g.rt(a, !0)) : !0;
  return {
    text: g.h.DUPLICATE_BLOCK,
    enabled: c,
    Fb: function () {
      g.Vx(a);
    },
  };
};
g.Ga.GD = function (a) {
  var c = { enabled: !g.g.userAgent.yg };
  a.Ak
    ? ((c.text = g.h.REMOVE_COMMENT),
      (c.Fb = function () {
        a.ji(null);
      }))
    : ((c.text = g.h.ADD_COMMENT),
      (c.Fb = function () {
        a.ji("");
      }));
  return c;
};
g.Ga.SL = function (a) {
  return {
    text: g.h.WK,
    enabled: !0,
    Fb: function () {
      g.i.aa(!0);
      a.I(!0, !0);
      g.i.aa(!1);
    },
  };
};
g.Ga.TL = function (a) {
  return {
    text: g.h.FI,
    enabled: !0,
    Fb: function () {
      g.Vx(a);
    },
  };
};
g.Ga.BM = function (a, c) {
  if (!g.qk) throw Error("Missing require for Blockly.WorkspaceCommentSvg");
  var d = { enabled: !g.g.userAgent.yg };
  d.text = g.h.OH;
  d.Fb = function () {
    var e = new g.qk(a, g.h.LL, g.qk.uB, g.qk.uB),
      f = aa(a).getBoundingClientRect();
    f = new g.g.V(c.clientX - f.left, c.clientY - f.top);
    var h = g.g.Km(a.kb);
    f = g.g.V.Ek(f, h);
    f.scale(1 / a.scale);
    e.moveBy(f.x, f.y);
    a.ga && (e.Qd(), e.Ea(), e.select());
  };
  return d;
};
g.Cg = function (a, c) {
  g.Cg.w.constructor.call(this, a, c);
  this.Xf = a.v.op[c];
  this.Ex = a.v.op[g.jk[c]];
  this.tj = new g.g.V(0, 0);
  this.Qh = !1;
  this.Wy = !this.Xf;
};
g.g.object.X(g.Cg, g.ta);
b = g.Cg.prototype;
b.I = function () {
  g.Cg.w.I.call(this);
  this.Qh && Lc(this.Xf, this);
};
function Mc(a, c) {
  var d = a.$b - c.$b;
  a = a.gb - c.gb;
  return Math.sqrt(d * d + a * a);
}
function Gb(a, c) {
  if (!a.B.v.lc()) {
    var d = db(a.B);
    if (!d.ec) {
      var e = !1;
      if (!d.Lc()) {
        d = db(c.B);
        if (!d.Lc()) return;
        c = a;
        e = !0;
      }
      var f = g.selected == d;
      f || d.ap();
      var h = c.$b + g.wd + Math.floor(Math.random() * g.cr) - a.$b,
        k = c.gb + g.wd + Math.floor(Math.random() * g.cr) - a.gb;
      e && (k = -k);
      d.G && (h = c.$b - g.wd - Math.floor(Math.random() * g.cr) - a.$b);
      d.moveBy(h, k);
      f || d.Bn();
    }
  }
}
b.moveTo = function (a, c) {
  this.Qh && Lc(this.Xf, this);
  this.$b = a;
  this.gb = c;
  this.Wy || Nc(this.Xf, this);
};
b.moveBy = function (a, c) {
  this.moveTo(this.$b + a, this.gb + c);
};
function Oc(a, c) {
  a.moveTo(c.x + a.tj.x, c.y + a.tj.y);
}
function Pc(a, c, d) {
  a.tj.x = c;
  a.tj.y = d;
}
function Qc(a) {
  var c = a.ka.$b - a.$b,
    d = a.ka.gb - a.gb;
  if (0 != c || 0 != d) {
    a = C(a);
    var e = a.za();
    if (!e) throw Error("block is not rendered.");
    e = g.g.Oe(e);
    a.za().setAttribute(
      "transform",
      "translate(" + (e.x - c) + "," + (e.y - d) + ")"
    );
    bb(a, -c, -d);
  }
}
b.closest = function (a, c) {
  var d = this.Ex;
  if (d.ic.length) {
    var e = this.gb,
      f = this.$b;
    this.$b = f + c.x;
    this.gb = e + c.y;
    var h = Rc(d, this);
    c = null;
    for (
      var k = a, l, m = h - 1;
      0 <= m && Math.abs(d.ic[m].gb - this.gb) <= a;

    )
      (l = d.ic[m]), this.Vp(l, k) && ((c = l), (k = Mc(l, this))), m--;
    for (; h < d.ic.length && Math.abs(d.ic[h].gb - this.gb) <= a; )
      (l = d.ic[h]), this.Vp(l, k) && ((c = l), (k = Mc(l, this))), h++;
    this.$b = f;
    this.gb = e;
    a = { connection: c, vq: k };
  } else a = { connection: null, vq: a };
  return a;
};
b.Xy = function () {
  var a = this.B.v.hh.C;
  a =
    this.type == g.Ra || this.type == g.bf
      ? g.g.A.moveBy(0, -5) + g.g.A.ea("v", 5) + a.Bi.Ve + g.g.A.ea("v", 5)
      : g.g.A.moveBy(-5, 0) + g.g.A.ea("h", 5) + a.hk.bi + g.g.A.ea("h", 5);
  var c = this.B.Sa();
  g.ta.Yy = g.g.o.K(
    "path",
    {
      class: "blocklyHighlightedConnectionPath",
      d: a,
      transform:
        "translate(" +
        (this.$b - c.x) +
        "," +
        (this.gb - c.y) +
        ")" +
        (this.B.G ? " scale(-1 1)" : ""),
    },
    this.B.za()
  );
};
function sc(a) {
  tc(a, !1);
  var c = [];
  if (a.type != g.Ra && a.type != g.Xa) return c;
  if ((a = C(a))) {
    if (a.isCollapsed()) {
      var d = [];
      a.L && d.push(a.L);
      a.U && d.push(a.U);
      a.$ && d.push(a.$);
    } else d = a.Me(!0);
    for (var e = 0; e < d.length; e++) c.push.apply(c, sc(d[e]));
    c.length || (c[0] = a);
  }
  return c;
}
function tc(a, c) {
  (a.Wy = c) && a.Qh ? Lc(a.Xf, a) : c || a.Qh || Nc(a.Xf, a);
}
b.Vp = function (a, c) {
  return Mc(this, a) > c ? !1 : g.Cg.w.Vp.call(this, a);
};
b.mq = function (a) {
  Gb(this, a);
};
b.Ts = function (a, c) {
  g.Cg.w.Ts.call(this, a, c);
  a.ga && a.Ea();
  c.ga && (mc(c), c.Ea());
};
b.Wu = function () {
  var a = this.B,
    c = this.xf;
  if (a.v && c && g.i.Pc) {
    g.Cg.w.Wu.call(this);
    c = C(this);
    if (!c)
      throw Error("Couldn't respawn the shadow block that should exist here.");
    c.Qd();
    c.Ea(!1);
    a.ga && a.Ea();
  }
};
b.Cz = function (a) {
  return Sc(this.Ex, this, a);
};
b.hf = function (a) {
  g.Cg.w.hf.call(this, a);
  var c = this.B;
  a = a.B;
  c.ga && mc(c);
  a.ga && mc(a);
  c.ga && a.ga && (this.type == g.Xa || this.type == g.cf ? a.Ea() : c.Ea());
};
b.Iz = function () {
  this.isConnected() &&
    !oc(this, this.ka) &&
    (D(F(this) ? C(this) : this.B), this.B.Pb());
};
g.xa = function (a, c, d) {
  this.H = g.g.o.K("g", {}, null);
  this.H.Un = "";
  this.wj = a.hh.uz(this.H);
  this.Rn = this.wj.Qn || null;
  this.Yd = this.wj.ql || null;
  this.Hj = this.wj.Sn || null;
  this.Yd.Af = this;
  this.ga = !1;
  this.ao = g.g.gj() && !!a.je;
  g.J.wk(this.Yd);
  g.xa.w.constructor.call(this, a, c, d);
  this.H.dataset && (this.H.dataset.id = this.id);
  this.Yc = null;
};
g.g.object.X(g.xa, g.no);
g.xa.prototype.height = 0;
g.xa.prototype.width = 0;
g.xa.prototype.$d = null;
g.xa.oJ = -1;
g.xa.dr = "TEMP_COLLAPSED_WARNING_";
g.xa.PC = 10;
g.xa.yr = 25;
g.xa.zh = 8;
g.xa.Dg = !1;
b = g.xa.prototype;
b.Qd = function () {
  if (!this.v.ga) throw TypeError("Workspace is headless.");
  for (var a = 0, c; (c = this.P[a]); a++) c.Z();
  c = Wa(this);
  for (a = 0; a < c.length; a++) Ka(c[a]);
  this.Xe();
  Tc(this);
  this.v.options.readOnly ||
    this.ME ||
    g.ca(this.za(), "mousedown", this, this.ai);
  this.ME = !0;
  this.za().parentNode || this.v.kb.appendChild(this.za());
};
b.select = function () {
  if (this.ib && this.getParent()) this.getParent().select();
  else if (g.selected != this) {
    var a = null;
    if (g.selected) {
      a = g.selected.id;
      g.i.disable();
      try {
        ib(g.selected);
      } finally {
        g.i.enable();
      }
    }
    a = new g.i.yd(null, "selected", a, this.id);
    a.Cc = this.v.id;
    g.i.Oa(a);
    g.selected = this;
    this.ap();
  }
};
function ib(a) {
  if (g.selected == a) {
    var c = new g.i.yd(null, "selected", a.id, null);
    c.Cc = a.v.id;
    g.i.Oa(c);
    g.selected = null;
    a.Bn();
  }
}
b.Sd = null;
b.Ak = null;
b.Tf = null;
b.ed = null;
function Wa(a) {
  var c = [];
  a.Sd && c.push(a.Sd);
  a.Tf && c.push(a.Tf);
  a.ed && c.push(a.ed);
  return c;
}
b.kl = function (a) {
  var c = this.kg;
  if (a != c) {
    g.g.o.Mn();
    g.xa.w.kl.call(this, a);
    g.g.o.Nn();
    var d = this.za();
    if (!this.v.Qt && d) {
      var e = this.Sa();
      a
        ? (a.za().appendChild(d),
          (a = this.Sa()),
          bb(this, a.x - e.x, a.y - e.y))
        : c && (this.v.kb.appendChild(d), this.translate(e.x, e.y));
    }
  }
};
b.Sa = function () {
  var a = 0,
    c = 0,
    d = this.ao ? this.v.je.cc() : null,
    e = this.za();
  if (e) {
    do {
      var f = g.g.Oe(e);
      a += f.x;
      c += f.y;
      this.ao &&
        this.v.je.lf.firstChild == e &&
        ((f = this.v.je.At()), (a += f.x), (c += f.y));
      e = e.parentNode;
    } while (e && e != this.v.kb && e != d);
  }
  return new g.g.V(a, c);
};
b.moveBy = function (a, c) {
  if (this.kg) throw Error("Block has parent.");
  var d = g.i.isEnabled();
  if (d) var e = new g.i.Cl(this);
  var f = this.Sa();
  this.translate(f.x + a, f.y + c);
  bb(this, a, c);
  d && (e.zj(), g.i.Oa(e));
  ic(this.v);
};
b.translate = function (a, c) {
  this.za().setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.pu = function () {
  if (this.ao) {
    var a = this.Sa();
    this.za().removeAttribute("transform");
    this.v.je.Mj(a.x, a.y);
    hb(this.v.je, this.za());
  }
};
b.moveTo = function (a) {
  var c = this.Sa();
  this.moveBy(a.x - c.x, a.y - c.y);
};
b.nu = function (a) {
  this.ao
    ? this.v.je.Mj(a.x, a.y)
    : ((this.H.Un = "translate(" + a.x + "," + a.y + ")"),
      this.H.setAttribute("transform", this.H.Un + this.H.Ln));
};
function Uc(a) {
  if (a.v && !a.v.lc() && !a.getParent() && !a.ec) {
    var c = a.v.Qe;
    if (c && c.mH) {
      var d = c.jv,
        e = d / 2,
        f = a.Sa();
      c = Math.round((f.x - e) / d) * d + e - f.x;
      d = Math.round((f.y - e) / d) * d + e - f.y;
      c = Math.round(c);
      d = Math.round(d);
      (0 == c && 0 == d) || a.moveBy(c, d);
    }
  }
}
function Vc(a) {
  var c = a.Sa(),
    d = a.L ? g.xa.zh : 0,
    e = Ra(a),
    f = c.y,
    h = c.y + e.height;
  a.G
    ? ((a = c.x - (e.width - d)), (c = c.x + d))
    : ((a = c.x - d), (c = c.x + e.width - d));
  return new g.g.Rect(f, h, a, c);
}
b.hn = function () {
  for (var a = 0, c; (c = this.P[a]); a++) c.hn();
};
b.kh = function (a) {
  if (this.Mg != a) {
    for (var c = [], d = 0, e; (e = this.P[d]); d++) c.push.apply(c, e.Yb(!a));
    if (a) {
      e = Wa(this);
      for (d = 0; d < e.length; d++) e[d].Yb(!1);
      d = this.toString(g.gB);
      H(M(this, "_TEMP_COLLAPSED_INPUT"), d).Z();
      e = p(this, !0);
      if ((d = q(this))) (d = e.indexOf(d)), e.splice(d, e.length - d);
      d = 1;
      for (var f; (f = e[d]); d++)
        if (f.ed) {
          this.mh(g.h.COLLAPSED_WARNINGS_WARNING, g.xa.dr);
          break;
        }
    } else
      this.pb("_TEMP_COLLAPSED_INPUT"),
        this.ed &&
          (this.ed.ll("", g.xa.dr),
          Object.keys(this.ed.Ed).length || this.mh(null));
    g.xa.w.kh.call(this, a);
    c.length || (c[0] = this);
    if (this.ga) for (d = 0; (f = c[d]); d++) f.Ea();
  }
};
function Wc(a, c, d) {
  for (var e = [], f = 0, h; (h = a.P[f]); f++) {
    for (var k = 0, l; (l = h.Na[k]); k++) l.hz() && l.isVisible() && e.push(l);
    h.connection && (h = C(h.connection)) && e.push(h);
  }
  c = e.indexOf(c);
  -1 == c && (c = d ? -1 : e.length);
  (e = e[d ? c + 1 : c - 1])
    ? e instanceof g.oa
      ? e.yf()
      : Wc(e, null, d)
    : (e = a.getParent()) && Wc(e, a, d);
}
b.ai = function (a) {
  var c = this.v && this.v.Vg(a);
  if (c) {
    if (c.aj)
      throw Error(
        "Tried to call gesture.handleBlockStart, but the gesture had already been started."
      );
    rb(c, this);
    c.vf = a;
  }
};
function Xc(a) {
  if (a.v.options.readOnly || !a.contextMenu) return null;
  var c = [];
  if (!a.ec) {
    a.qe() && a.Lc() && c.push(g.Ga.ID(a));
    a.v.options.mm && !a.Mg && a.nd() && c.push(g.Ga.GD(a));
    if (a.Lc())
      if (a.Mg)
        a.v.options.collapse &&
          ((d = { enabled: !0 }),
          (d.text = g.h.EXPAND_BLOCK),
          (d.Fb = function () {
            a.kh(!1);
          }),
          c.push(d));
      else {
        for (var d = 1; d < a.P.length; d++)
          if (a.P[d - 1].type != g.Xa && a.P[d].type != g.Xa) {
            d = { enabled: !0 };
            var e = qc(a);
            d.text = e ? g.h.EXTERNAL_INPUTS : g.h.INLINE_INPUTS;
            d.Fb = function () {
              a.te(!e);
            };
            c.push(d);
            break;
          }
        a.v.options.collapse &&
          ((d = { enabled: !0 }),
          (d.text = g.h.COLLAPSE_BLOCK),
          (d.Fb = function () {
            a.kh(!0);
          }),
          c.push(d));
      }
    a.v.options.disable &&
      a.nd() &&
      ((d = {
        text: a.isEnabled() ? g.h.DISABLE_BLOCK : g.h.ENABLE_BLOCK,
        enabled: !xc(a),
        Fb: function () {
          var f = g.i.cc();
          f || g.i.aa(!0);
          a.qd(!a.isEnabled());
          f || g.i.aa(!1);
        },
      }),
      c.push(d));
    a.qe() && c.push(g.Ga.HD(a));
  }
  c.push(g.Ga.JD(a));
  a.Og && a.Og(c);
  return c;
}
b.Jn = function (a) {
  var c = Xc(this);
  c && c.length && (g.Ga.show(a, c, this.G), (g.Ga.qp = this));
};
function bb(a, c, d) {
  if (a.ga) {
    for (var e = a.Me(!1), f = 0; f < e.length; f++) e[f].moveBy(c, d);
    e = Wa(a);
    for (f = 0; f < e.length; f++) La(e[f]);
    for (f = 0; f < a.Lg.length; f++) bb(a.Lg[f], c, d);
  }
}
b.Bj = function (a) {
  if (a) {
    var c = this.za();
    c.Un = "";
    c.Ln = "";
    g.Am = g.Am.concat(this.Me(!0));
    g.g.o.rb(this.H, "blocklyDragging");
  } else (g.Am = []), g.g.o.Sb(this.H, "blocklyDragging");
  for (c = 0; c < this.Lg.length; c++) this.Lg[c].Bj(a);
};
function Tc(a) {
  a.Lc()
    ? g.g.o.rb(a.H, "blocklyDraggable")
    : g.g.o.Sb(a.H, "blocklyDraggable");
}
b.Dq = function (a) {
  g.xa.w.Dq.call(this, a);
  Tc(this);
};
b.av = function (a) {
  g.xa.w.av.call(this, a);
  a = Wa(this);
  for (var c = 0; c < a.length; c++) a[c].ph();
};
b.ev = function (a) {
  g.xa.w.ev.call(this, a);
  this.Xe();
};
b.kA = function (a) {
  this.Zm != a &&
    (this.Zm = a) &&
    (this.se(g.WB), g.g.o.rb(this.H, "blocklyInsertionMarker"));
};
b.za = function () {
  return this.H;
};
b.I = function (a, c) {
  if (this.v) {
    g.J.Ha();
    g.g.o.Mn();
    var d = this.v;
    if (g.selected == this) {
      ib(this);
      var e = this.v;
      e.Ic && e.Ic.cancel();
    }
    g.Ga.qp == this && g.Ga.Ha();
    g.Se && g.navigation.Bz(this);
    c && this.ga && (D(this, a), g.sb.DE(this));
    this.ga = !1;
    if (this.$d) {
      for (var f in this.$d) clearTimeout(this.$d[f]);
      this.$d = null;
    }
    c = Wa(this);
    for (e = 0; e < c.length; e++) c[e].I();
    g.xa.w.I.call(this, a);
    g.g.o.removeNode(this.H);
    ic(d);
    this.Rn = this.Hj = this.Yd = this.H = null;
    g.g.o.Nn();
  }
};
b.Xe = function () {
  var a;
  if (this.isEnabled()) {
    if (this.ib) {
      var c = vc(this);
      this.Hj.style.display = "none";
      this.Rn.setAttribute("fill", c);
      this.Yd.setAttribute("stroke", "none");
      this.Yd.setAttribute("fill", c);
    } else {
      if ((c = this.nx)) var d = (a = null);
      else
        (d = this.Ni),
          (c = null),
          (a = g.g.Ab.rs("#fff", d, 0.3)),
          (d = g.g.Ab.rs("#000", d, 0.2));
      c
        ? ((this.Hj.style.display = "none"),
          (this.Rn.style.display = "none"),
          this.Yd.setAttribute("stroke", c))
        : ((this.Hj.style.display = ""),
          (this.Rn.style.display = ""),
          this.Yd.setAttribute("stroke", "none"),
          this.Hj.setAttribute("stroke", a),
          this.Rn.setAttribute("fill", d));
      this.Yd.setAttribute("fill", this.Ni);
    }
    c = Wa(this);
    for (a = 0; a < c.length; a++) c[a].Xe();
    for (c = 0; (a = this.P[c]); c++) {
      d = 0;
      for (var e; (e = a.Na[d]); d++) e.Xe();
    }
  }
};
function mc(a) {
  !a.isEnabled() || xc(a)
    ? g.g.o.rb(a.H, "blocklyDisabled") &&
      a.Yd.setAttribute("fill", "url(#" + a.v.options.Pg + ")")
    : g.g.o.Sb(a.H, "blocklyDisabled") && a.Xe();
  a = a.Kh(!1);
  for (var c = 0, d; (d = a[c]); c++) mc(d);
}
b.bF = function () {
  return this.Tf;
};
b.ji = function (a) {
  if (!g.Comment) throw Error("Missing require for Blockly.Comment");
  this.Je.text != a &&
    (g.xa.w.ji.call(this, a),
    (a = null != a),
    !!this.Tf == a
      ? Pa(this.Tf)
      : (a
          ? (this.Ak = this.Tf = new g.Comment(this))
          : (this.Tf.I(), (this.Ak = this.Tf = null)),
        this.ga && (this.Ea(), this.Pb())));
};
b.mh = function (a, c) {
  this.$d || (this.$d = Object.create(null));
  var d = c || "";
  if (d) this.$d[d] && (clearTimeout(this.$d[d]), delete this.$d[d]);
  else for (var e in this.$d) clearTimeout(this.$d[e]), delete this.$d[e];
  if (this.v.lc()) {
    var f = this;
    this.$d[d] = setTimeout(function () {
      f.v && (delete f.$d[d], f.mh(a, d));
    }, 100);
  } else {
    this.ec && (a = null);
    c = uc(this);
    for (e = null; c; ) c.isCollapsed() && (e = c), (c = uc(c));
    e && e.mh(g.h.COLLAPSED_WARNINGS_WARNING, g.xa.dr);
    c = !1;
    "string" == typeof a
      ? (this.ed || ((this.ed = new g.Pf(this)), (c = !0)), this.ed.ll(a, d))
      : this.ed && !d
      ? (this.ed.I(), (c = !0))
      : this.ed &&
        ((c = this.ed.dc()),
        this.ed.ll("", d),
        (e = this.ed.dc()) || this.ed.I(),
        (c = c != e));
    c && this.ga && (this.Ea(), this.Pb());
  }
};
b.jl = function (a) {
  this.Sd && this.Sd !== a && this.Sd.I();
  a && ((a.T = this), (this.Sd = a), Ka(a));
};
b.qd = function (a) {
  this.isEnabled() != a && (g.xa.w.qd.call(this, a), this.ga && mc(this));
};
b.lh = function (a) {
  this.ga &&
    (a
      ? (this.Yd.setAttribute("filter", "url(#" + this.v.options.Xx + ")"),
        (this.Hj.style.display = "none"))
      : (this.Yd.setAttribute("filter", "none"),
        (this.Hj.style.display = "inline")));
};
b.ap = function () {
  g.g.o.rb(this.H, "blocklySelected");
};
b.Bn = function () {
  g.g.o.Sb(this.H, "blocklySelected");
};
function Za(a, c) {
  c
    ? g.g.o.rb(a.H, "blocklyDraggingDelete")
    : g.g.o.Sb(a.H, "blocklyDraggingDelete");
}
b.se = function (a) {
  g.xa.w.se.call(this, a);
  this.ga && this.Xe();
};
function cb(a) {
  do {
    var c = a.za();
    c.parentNode.appendChild(c);
    a = a.getParent();
  } while (a);
}
b.Wd = function (a, c) {
  g.xa.w.Wd.call(this, a, c);
  this.ga && (this.Ea(), this.Pb());
};
b.Vd = function (a, c) {
  g.xa.w.Vd.call(this, a, c);
  this.ga && (this.Ea(), this.Pb());
};
b.bd = function (a, c) {
  g.xa.w.bd.call(this, a, c);
  this.ga && (this.Ea(), this.Pb());
};
b.te = function (a) {
  g.xa.w.te.call(this, a);
  this.ga && (this.Ea(), this.Pb());
};
b.pb = function (a, c) {
  g.xa.w.pb.call(this, a, c);
  this.ga && (this.Ea(), this.Pb());
};
b.ou = function (a, c) {
  g.xa.w.ou.call(this, a, c);
  this.ga && (this.Ea(), this.Pb());
};
b.Qf = function (a, c) {
  a = g.xa.w.Qf.call(this, a, c);
  this.ga && (this.Ea(), this.Pb());
  return a;
};
function Db(a, c) {
  if (!c && a.isCollapsed()) {
    if ((a.L && tc(a.L, c), a.$ && tc(a.$, c), a.U)) {
      tc(a.U, c);
      var d = C(a.U);
      d && Db(d, c);
    }
  } else {
    a = a.Me(!0);
    for (var e = 0; (d = a[e]); e++) tc(d, c), F(d) && (d = C(d)) && Db(d, c);
  }
}
b.Me = function (a) {
  var c = [];
  if (a || this.ga)
    if (
      (this.L && c.push(this.L),
      this.$ && c.push(this.$),
      this.U && c.push(this.U),
      a || !this.Mg)
    ) {
      a = 0;
      for (var d; (d = this.P[a]); a++) d.connection && c.push(d.connection);
    }
  return c;
};
b.gn = function (a) {
  return new g.Cg(this, a);
};
b.Pb = function () {
  if (this.v && !this.v.lc()) {
    var a = db(this);
    if (!a.ec)
      for (var c = this.Me(!1), d = 0, e; (e = c[d]); d++) {
        e.isConnected() && F(e) && C(e).Pb();
        for (var f = e.Cz(g.wd), h = 0, k; (k = f[h]); h++)
          (e.isConnected() && k.isConnected()) ||
            (db(k.B) != a && (F(e) ? Gb(k, e) : Gb(e, k)));
      }
  }
};
function eb(a) {
  var c = g.i.cc();
  setTimeout(function () {
    g.i.aa(c);
    Uc(a);
    g.i.aa(!1);
  }, g.mo / 2);
  setTimeout(function () {
    g.i.aa(c);
    a.Pb();
    g.i.aa(!1);
  }, g.mo);
}
b.Ea = function (a) {
  g.g.o.Mn();
  this.ga = !0;
  this.v.hh.Ea(this);
  var c = this.Sa();
  this.$ && Oc(this.$, c);
  this.L && Oc(this.L, c);
  for (var d = 0; d < this.P.length; d++) {
    var e = this.P[d].connection;
    e && (Oc(e, c), e.isConnected() && Qc(e));
  }
  this.U && (Oc(this.U, c), this.U.isConnected() && Qc(this.U));
  !1 !== a && ((a = this.getParent()) ? a.Ea(!0) : ic(this.v));
  g.g.o.Nn();
};
b.Hn = function (a) {
  a ? (this.H.appendChild(a), (this.Yc = a)) : (this.Yc = null);
};
b.In = function (a) {
  a && (this.Yc ? this.H.insertBefore(a, this.Yc) : this.H.appendChild(a));
};
function Ra(a) {
  var c = a.height,
    d = a.width;
  if ((a = q(a))) (a = Ra(a)), (c += a.height - 4), (d = Math.max(d, a.width));
  return { height: c, width: d };
}
function Va(a, c) {
  c ? g.g.o.rb(a.H, "blocklyReplaceable") : g.g.o.Sb(a.H, "blocklyReplaceable");
}
g.Yj = function () {
  this.ic = [];
};
function Nc(a, c) {
  if (c.Qh) throw Error("Connection already in database.");
  c.B.ec || (a.ic.splice(Rc(a, c), 0, c), (c.Qh = !0));
}
function Yc(a, c) {
  if (!a.ic.length) return -1;
  var d = Rc(a, c);
  if (d >= a.ic.length) return -1;
  for (var e = c.gb, f = d; 0 <= f && a.ic[f].gb == e; ) {
    if (a.ic[f] == c) return f;
    f--;
  }
  for (; d < a.ic.length && a.ic[d].gb == e; ) {
    if (a.ic[d] == c) return d;
    d++;
  }
  return -1;
}
function Rc(a, c) {
  if (!a.ic.length) return 0;
  for (var d = 0, e = a.ic.length; d < e; ) {
    var f = Math.floor((d + e) / 2);
    if (a.ic[f].gb < c.gb) d = f + 1;
    else if (a.ic[f].gb > c.gb) e = f;
    else {
      d = f;
      break;
    }
  }
  return d;
}
function Lc(a, c) {
  if (!c.Qh) throw Error("Connection not in database.");
  var d = Yc(a, c);
  if (-1 == d) throw Error("Unable to find connection in connectionDB.");
  c.Qh = !1;
  a.ic.splice(d, 1);
}
function Sc(a, c, d) {
  function e(n) {
    var t = h - f[n].$b,
      v = k - f[n].gb;
    Math.sqrt(t * t + v * v) <= d && m.push(f[n]);
    return v < d;
  }
  var f = a.ic,
    h = c.$b,
    k = c.gb;
  a = 0;
  for (var l = (c = f.length - 2); a < l; )
    f[l].gb < k ? (a = l) : (c = l), (l = Math.floor((a + c) / 2));
  var m = [];
  c = a = l;
  if (f.length) {
    for (; 0 <= a && e(a); ) a--;
    do c++;
    while (c < f.length && e(c));
  }
  return m;
}
g.Yj.Z = function () {
  var a = [];
  a[g.Ra] = new g.Yj();
  a[g.bf] = new g.Yj();
  a[g.Xa] = new g.Yj();
  a[g.cf] = new g.Yj();
  return a;
};
g.xi = function (a, c) {
  this.Mk = a;
  this.jv = c.spacing;
  this.pz = c.length;
  this.VF = (this.$t = a.firstChild) && this.$t.nextSibling;
  this.mH = c.snap;
};
g.xi.prototype.ii = 1;
g.xi.prototype.I = function () {
  this.Mk = null;
};
g.xi.prototype.update = function (a) {
  this.ii = a;
  var c = this.jv * a || 100;
  this.Mk.setAttribute("width", c);
  this.Mk.setAttribute("height", c);
  c = Math.floor(this.jv / 2) + 0.5;
  var d = c - this.pz / 2,
    e = c + this.pz / 2;
  c *= a;
  d *= a;
  e *= a;
  Zc(this.$t, a, d, e, c, c);
  Zc(this.VF, a, c, c, d, e);
};
function Zc(a, c, d, e, f, h) {
  a &&
    (a.setAttribute("stroke-width", c),
    a.setAttribute("x1", d),
    a.setAttribute("y1", f),
    a.setAttribute("x2", e),
    a.setAttribute("y2", h));
}
g.xi.prototype.moveTo = function (a, c) {
  this.Mk.setAttribute("x", a);
  this.Mk.setAttribute("y", c);
  (g.g.userAgent.yg || g.g.userAgent.Co) && this.update(this.ii);
};
g.xi.Ja = function (a, c, d) {
  a = g.g.o.K(
    "pattern",
    { id: "blocklyGridPattern" + a, patternUnits: "userSpaceOnUse" },
    d
  );
  0 < c.length && 0 < c.spacing
    ? (g.g.o.K("line", { stroke: c.colour }, a),
      1 < c.length && g.g.o.K("line", { stroke: c.colour }, a))
    : g.g.o.K("line", {}, a);
  return a;
};
g.Fe = function (a) {
  var c = !!a.readOnly;
  if (c)
    var d = null,
      e = !1,
      f = !1,
      h = !1,
      k = !1,
      l = !1,
      m = !1;
  else {
    d = g.Fe.PG(a.toolbox || null);
    e = !(!d || !d.getElementsByTagName("category").length);
    f = a.trashcan;
    void 0 === f && (f = e);
    var n = a.maxTrashcanContents;
    f ? void 0 === n && (n = 32) : (n = 0);
    h = a.collapse;
    void 0 === h && (h = e);
    k = a.comments;
    void 0 === k && (k = e);
    l = a.disable;
    void 0 === l && (l = e);
    m = a.sounds;
    void 0 === m && (m = !0);
  }
  var t = !!a.rtl,
    v = a.horizontalLayout;
  void 0 === v && (v = !1);
  var w = a.toolboxPosition;
  w = "end" === w ? !1 : !0;
  w = v ? (w ? g.Fg : g.Fi) : w == t ? g.Eg : g.Jd;
  var I = a.css;
  void 0 === I && (I = !0);
  var ca = "https://blockly-demo.appspot.com/static/media/";
  a.media ? (ca = a.media) : a.path && (ca = a.path + "media/");
  var fa = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex,
    Fa = a.theme,
    Be = a.keyMap || g.xb.tb.gE(),
    Ce = a.renderer || "geras";
  this.G = t;
  this.Dd = fa;
  this.collapse = h;
  this.mm = k;
  this.disable = l;
  this.readOnly = c;
  this.ju = a.maxBlocks || Infinity;
  this.ku = a.maxInstances;
  this.wf = ca;
  this.Oy = e;
  this.Nc = g.Fe.OG(a, e);
  this.Sy = f;
  this.iq = n;
  this.CF = m;
  this.AF = I;
  this.Od = v;
  this.Xk = d;
  this.Ky = g.Fe.NG(a);
  this.Hb = g.Fe.QG(a);
  this.Ia = w;
  this.yH = Fa;
  this.tb = Be;
  this.gh = Ce;
};
g.Fe.prototype.Rb = null;
g.Fe.prototype.ki = null;
g.Fe.prototype.jc = null;
g.Fe.OG = function (a, c) {
  var d = a.move || {},
    e = {};
  e.scrollbars =
    void 0 === d.scrollbars && void 0 === a.scrollbars
      ? c
      : !!d.scrollbars || !!a.scrollbars;
  e.Rj = e.scrollbars && void 0 !== d.wheel ? !!d.wheel : !1;
  e.Ih = e.scrollbars ? (void 0 === d.drag ? !0 : !!d.drag) : !1;
  return e;
};
g.Fe.QG = function (a) {
  a = a.zoom || {};
  var c = {};
  c.controls = void 0 === a.controls ? !1 : !!a.controls;
  c.Rj = void 0 === a.wheel ? !1 : !!a.wheel;
  c.sA = void 0 === a.startScale ? 1 : Number(a.startScale);
  c.jn = void 0 === a.maxScale ? 3 : Number(a.maxScale);
  c.ln = void 0 === a.minScale ? 0.3 : Number(a.minScale);
  c.dH = void 0 === a.scaleSpeed ? 1.2 : Number(a.scaleSpeed);
  return c;
};
g.Fe.NG = function (a) {
  a = a.grid || {};
  var c = {};
  c.spacing = Number(a.spacing) || 0;
  c.Ab = a.colour || "#888";
  c.length = Number(a.length) || 1;
  c.vM = 0 < c.spacing && !!a.snap;
  return c;
};
g.Fe.PG = function (a) {
  if (a) {
    if (
      ("string" != typeof a &&
        (g.g.userAgent.yg && a.outerHTML
          ? (a = a.outerHTML)
          : a instanceof Element || (a = null)),
      "string" == typeof a &&
        ((a = g.R.mi(a)), "xml" != a.nodeName.toLowerCase()))
    )
      throw TypeError("Toolbox should be an <xml> document.");
  } else a = null;
  return a;
};
g.ie = function (a, c) {
  g.ie.w.constructor.call(this, a, c);
  this.Zp = !1;
  this.Ie = {};
  this.qA = this.wn = 0;
  this.Gu = null;
};
g.g.object.X(g.ie, g.$j);
g.ie.vD = 5;
g.ie.wD = 6;
b = g.ie.prototype;
b.Ws = function (a) {
  g.ie.w.Ws.call(this, a);
  !this.Xp && g.Touch.cq(a) && $c(this, a);
};
b.wk = function (a) {
  this.Gu = g.ca(document, "mousedown", null, this.zF.bind(this), !0);
  this.nq = g.ca(document, "mousemove", null, this.Pm.bind(this), !0);
  this.oq = g.ca(document, "mouseup", null, this.Mp.bind(this), !0);
  a.preventDefault();
  a.stopPropagation();
};
b.zF = function (a) {
  !this.lc() && g.Touch.cq(a) && ($c(this, a), this.Zp && g.Zh());
};
b.Pm = function (a) {
  if (this.lc()) g.Touch.hv(a) && g.ie.w.Pm.call(this, a);
  else if (this.Zp) {
    if (g.Touch.cq(a)) {
      this.Ie[g.Touch.Lp(a)] = ad(this, a);
      var c = Object.keys(this.Ie);
      if (2 == c.length) {
        c = g.g.V.Qx(this.Ie[c[0]], this.Ie[c[1]]) / this.qA;
        if (0 < this.wn && Infinity > this.wn) {
          var d = c - this.wn;
          d = 0 < d ? d * g.ie.vD : d * g.ie.wD;
          var e = this.zc,
            f = g.g.nn(a, r(e), qa(e));
          e.zoom(f.x, f.y, d);
        }
        this.wn = c;
        a.preventDefault();
      }
    }
    g.Zh();
  } else g.ie.w.Pm.call(this, a);
};
b.Mp = function (a) {
  if (g.Touch.cq(a) && !this.lc()) {
    var c = g.Touch.Lp(a);
    this.Ie[c] && delete this.Ie[c];
    2 > Object.keys(this.Ie).length && ((this.Ie = {}), (this.wn = 0));
  }
  !this.Zp || this.lc()
    ? g.Touch.hv(a) && g.ie.w.Mp.call(this, a)
    : (a.preventDefault(), a.stopPropagation(), this.I());
};
b.I = function () {
  g.ie.w.I.call(this);
  this.Gu && g.Ua(this.Gu);
};
function $c(a, c) {
  a.Ie[g.Touch.Lp(c)] = ad(a, c);
  var d = Object.keys(a.Ie);
  2 == d.length &&
    ((a.qA = g.g.V.Qx(a.Ie[d[0]], a.Ie[d[1]])),
    (a.Zp = !0),
    c.preventDefault());
}
function ad(a, c) {
  return a.zc
    ? new g.g.V(
        c.pageX ? c.pageX : c.changedTouches[0].pageX,
        c.pageY ? c.pageY : c.changedTouches[0].pageY
      )
    : null;
}
g.Pw = function (a) {
  this.Ku = a;
  this.Wl = Object.create(null);
};
b = g.Pw.prototype;
b.Wt = null;
b.I = function () {
  this.Wl = this.Ku = null;
};
b.load = function (a, c) {
  if (a.length) {
    try {
      var d = new g.g.global.Audio();
    } catch (l) {
      return;
    }
    for (var e, f = 0; f < a.length; f++) {
      var h = a[f],
        k = h.match(/\.(\w+)$/);
      if (k && d.canPlayType("audio/" + k[1])) {
        e = new g.g.global.Audio(h);
        break;
      }
    }
    e && e.play && (this.Wl[c] = e);
  }
};
b.preload = function () {
  for (var a in this.Wl) {
    var c = this.Wl[a];
    c.volume = 0.01;
    var d = c.play();
    void 0 !== d ? d.then(c.pause).catch(function () {}) : c.pause();
    if (g.g.userAgent.ck || g.g.userAgent.fw) break;
  }
};
b.play = function (a, c) {
  var d = this.Wl[a];
  d
    ? ((a = new Date()),
      (null != this.Wt && a - this.Wt < g.TC) ||
        ((this.Wt = a),
        (d = g.g.userAgent.ck || g.g.userAgent.Al ? d : d.cloneNode()),
        (d.volume = void 0 === c ? 1 : c),
        d.play()))
    : this.Ku && this.Ku.Rf.play(a, c);
};
g.Qw = function (a) {
  this.pm = a;
  this.Ja();
};
b = g.Qw.prototype;
b.bb = null;
b.lf = null;
b.pm = null;
b.Ja = function () {
  this.bb ||
    ((this.bb = g.g.o.K(
      "svg",
      {
        xmlns: g.g.o.Yl,
        "xmlns:html": g.g.o.ak,
        "xmlns:xlink": g.g.o.ef,
        version: "1.1",
        class: "blocklyWsDragSurface blocklyOverflowVisible",
      },
      null
    )),
    this.pm.appendChild(this.bb));
};
b.Mj = function (a, c) {
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.bb.style.display = "block";
  g.g.o.Gn(this.bb, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.At = function () {
  return g.g.Oe(this.bb);
};
b.jp = function (a) {
  if (!a)
    throw Error(
      "Couldn't clear and hide the drag surface: missing new surface."
    );
  var c = this.bb.childNodes[0],
    d = this.bb.childNodes[1];
  if (
    !(
      c &&
      d &&
      g.g.o.Py(c, "blocklyBlockCanvas") &&
      g.g.o.Py(d, "blocklyBubbleCanvas")
    )
  )
    throw Error(
      "Couldn't clear and hide the drag surface. A node was missing."
    );
  null != this.fl ? g.g.o.fj(c, this.fl) : a.insertBefore(c, a.firstChild);
  g.g.o.fj(d, c);
  this.bb.style.display = "none";
  if (this.bb.childNodes.length) throw Error("Drag surface was not cleared.");
  g.g.o.Gn(this.bb, "");
  this.fl = null;
};
g.qb = function (a, c, d) {
  g.qb.w.constructor.call(this, a);
  this.jc = a.jc || g.qb.kF;
  this.ki = a.ki || g.qb.jH;
  this.op = g.Yj.Z();
  c && (this.je = c);
  d && (this.Sj = d);
  this.Oq = this.Sj && g.g.gj();
  this.Rm = [];
  this.Rf = new g.Pw(a.Rb);
  this.Qe = this.options.Ly ? new g.xi(a.Ly, a.Ky) : null;
  this.Yc = null;
  g.N && g.N.Yi && bd(this, g.Kw, g.N.Yi);
  g.Ow && g.Ow.Yi && bd(this, g.nD, g.Ow.Yi);
  g.Ka && g.Ka.Yi && bd(this, g.tw, g.Ka.Yi);
  this.hh = g.m.Z(this.options.gh || "geras");
};
g.g.object.X(g.qb, g.Nb);
b = g.qb.prototype;
b.Aq = null;
b.ga = !0;
b.Xh = !0;
b.re = !1;
b.kj = !1;
b.Vu = !0;
b.scrollX = 0;
b.scrollY = 0;
b.Ux = null;
b.scale = 1;
b.cd = null;
b.Xb = null;
b.O = null;
b.sa = null;
b.Ic = null;
b.je = null;
b.Sj = null;
b.Oq = !1;
b.Wp = !1;
b.Ot = null;
b.oz = null;
b.nt = {};
b.vv = {};
b.px = null;
b.Jj = null;
b.cz = null;
b.Pt = !0;
b.$u = function (a) {
  this.cb && this.cb.Jc && this.cb.Jc.I();
  if ((this.cb = a))
    (this.cb.Jc = new g.Ba(this, !1)), this.Hn(this.cb.Jc.Ja());
};
b.lA = function (a) {
  this.fc && this.fc.Jc && this.fc.Jc.I();
  if ((this.fc = a))
    (this.fc.Jc = new g.Ba(this, !0)), this.In(this.fc.Jc.Ja());
};
b.Hn = function (a) {
  a ? this.kb && (this.kb.appendChild(a), (this.Yc = a)) : (this.Yc = null);
};
b.In = function (a) {
  a &&
    this.kb &&
    (this.Yc ? this.kb.insertBefore(a, this.Yc) : this.kb.appendChild(a));
};
function qa(a) {
  if (a.Pt) {
    var c = r(a).getScreenCTM();
    c && ((a.cz = c.inverse()), (a.Pt = !1));
  }
  return a.cz;
}
b.Yn = function () {
  this.Pt = !0;
};
b.isVisible = function () {
  return this.Xh;
};
function Qa(a, c) {
  var d = 0,
    e = 0,
    f = 1;
  if (g.g.o.containsNode(a.kb, c) || g.g.o.containsNode(a.zf, c)) f = a.scale;
  do {
    var h = g.g.Oe(c);
    if (c == a.kb || c == a.zf) f = 1;
    d += h.x * f;
    e += h.y * f;
    c = c.parentNode;
  } while (c && c != r(a));
  return new g.g.V(d, e);
}
function aa(a) {
  if (!a.Ot)
    for (var c = a.H; c; ) {
      if (
        -1 !=
        (" " + (c.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
      ) {
        a.Ot = c;
        break;
      }
      c = c.parentNode;
    }
  return a.Ot;
}
b.Ja = function (a) {
  this.H = g.g.o.K("g", { class: "blocklyWorkspace" }, null);
  a &&
    ((this.Rc = g.g.o.K(
      "rect",
      { height: "100%", width: "100%", class: a },
      this.H
    )),
    "blocklyMainBackground" == a && this.Qe
      ? (this.Rc.style.fill = "url(#" + this.Qe.Mk.id + ")")
      : this.Zb.subscribe(this.Rc, "workspace", "fill"));
  this.kb = g.g.o.K("g", { class: "blocklyBlockCanvas" }, this.H);
  this.zf = g.g.o.K("g", { class: "blocklyBubbleCanvas" }, this.H);
  this.re ||
    (g.ca(this.H, "mousedown", this, this.ai, !1, !0),
    g.ca(this.H, "wheel", this, this.MG));
  if (this.options.Oy) {
    if (!g.Hi) throw Error("Missing require for Blockly.Toolbox");
    this.sa = new g.Hi(this);
  }
  this.Qe && this.Qe.update(this.scale);
  cd(this);
  this.cb.Jc = new g.Ba(this, !1);
  a = this.cb.Jc.Ja();
  this.H.appendChild(a);
  this.fc.Jc = new g.Ba(this, !0);
  a = this.fc.Jc.Ja();
  this.H.appendChild(a);
  return this.H;
};
b.I = function () {
  this.ga = !1;
  this.Ic && this.Ic.cancel();
  this.H && (g.g.o.removeNode(this.H), (this.H = null));
  this.zf = this.kb = null;
  this.sa && (this.sa.I(), (this.sa = null));
  this.O && (this.O.I(), (this.O = null));
  this.cd && (this.cd.I(), (this.cd = null));
  this.Xb && (this.Xb.I(), (this.Xb = null));
  this.Tj && (this.Tj.I(), (this.Tj = null));
  this.fc && this.fc.Jc.I();
  this.cb && this.cb.Jc.I();
  this.Rf && (this.Rf.I(), (this.Rf = null));
  this.Qe && (this.Qe.I(), (this.Qe = null));
  this.Zb && this.Zb.unsubscribe(this.Rc);
  g.qb.w.I.call(this);
  this.nt = this.vv = this.op = null;
  if (!this.options.Rb) {
    var a = r(this).parentNode;
    a && g.g.o.removeNode(a);
  }
  this.Aq && (g.Ua(this.Aq), (this.Aq = null));
};
b.fg = function (a, c) {
  return new g.xa(this, a, c);
};
function dd(a) {
  if (!g.Wr) throw Error("Missing require for Blockly.Trashcan");
  a.cd = new g.Wr(a);
  var c = a.cd.Ja();
  a.H.insertBefore(c, a.kb);
}
function ed(a) {
  if (!g.ds) throw Error("Missing require for Blockly.ZoomControls");
  a.Tj = new g.ds(a);
  var c = a.Tj.Ja();
  a.H.appendChild(c);
}
function fd(a, c) {
  var d = {
    Pg: a.options.Pg,
    Rb: a,
    G: a.G,
    Dd: a.options.Dd,
    Od: a.Od,
    Ia: a.options.Ia,
    gh: a.options.gh,
  };
  if (a.Od) {
    if (!g.Ml) throw Error("Missing require for Blockly.HorizontalFlyout");
    a.O = new g.Ml(d);
  } else {
    if (!g.Hg) throw Error("Missing require for Blockly.VerticalFlyout");
    a.O = new g.Hg(d);
  }
  a.O.vk = !1;
  return a.O.Ja(c);
}
function Cb(a) {
  return a.O ? a.O : a.sa ? a.sa.O : null;
}
function ic(a) {
  if (a.Vu && a.ga) {
    if (a.Xb) {
      var c = a.jc();
      ma(a.Xb.oe, c);
      oa(a.Xb.xe, c);
    }
    a.Yn();
  }
}
b.resize = function () {
  this.sa && this.sa.position();
  this.O && this.O.position();
  this.cd && this.cd.position();
  this.Tj && this.Tj.position();
  this.Xb && this.Xb.resize();
  this.Yn();
  cd(this);
};
function lb(a) {
  var c = g.g.gF();
  g.g.V.Le(a.oz, c) || ((a.oz = c), a.Yn(), cd(a));
}
function r(a) {
  if (a.Zw) return a.Zw;
  for (var c = a.H; c; ) {
    if ("svg" == c.tagName) return (a.Zw = c);
    c = c.parentNode;
  }
  return null;
}
b.translate = function (a, c) {
  if (this.Oq && this.Wp) this.Sj.Mj(a, c);
  else {
    var d = "translate(" + a + "," + c + ") scale(" + this.scale + ")";
    this.kb.setAttribute("transform", d);
    this.zf.setAttribute("transform", d);
  }
  if (this.je) {
    d = this.je;
    var e = this.scale;
    d.ii = e;
    d.lf.setAttribute(
      "transform",
      "translate(" + a.toFixed(0) + "," + c.toFixed(0) + ") scale(" + e + ")"
    );
  }
  this.Qe && this.Qe.moveTo(a, c);
};
function sa(a) {
  if (a.Oq) {
    a.Wp = !1;
    var c = a.Sj.At();
    a.Sj.jp(a.H);
    c = "translate(" + c.x + "," + c.y + ") scale(" + a.scale + ")";
    a.kb.setAttribute("transform", c);
    a.zf.setAttribute("transform", c);
  }
}
function ra(a) {
  if (a.Oq && !a.Wp) {
    a.Wp = !0;
    var c = a.kb.previousSibling,
      d = parseInt(r(a).getAttribute("width"), 10),
      e = parseInt(r(a).getAttribute("height"), 10),
      f = g.g.Oe(a.kb),
      h = a.Sj,
      k = a.kb,
      l = a.zf,
      m = a.scale;
    if (h.bb.childNodes.length) throw Error("Already dragging a block.");
    h.fl = c;
    k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    h.bb.setAttribute("width", d);
    h.bb.setAttribute("height", e);
    h.bb.appendChild(k);
    h.bb.appendChild(l);
    h.bb.style.display = "block";
    a.Sj.Mj(f.x, f.y);
  }
}
b.cg = function () {
  var a = this.jc();
  return a ? a.vb / this.scale : 0;
};
b.Yb = function (a) {
  this.Xb && this.Xb.Aj(a);
  Cb(this) && Cb(this).Aj(a);
  r(this).style.display = a ? "block" : "none";
  this.sa && (this.sa.Ec.style.display = a ? "block" : "none");
  if (a) {
    for (var c = y(this, !1), d = c.length - 1; 0 <= d; d--) c[d].hn();
    this.Ea();
    this.sa && this.sa.position();
  } else g.wc(!0);
  this.Xh = a;
};
b.Ea = function () {
  for (var a = y(this, !1), c = a.length - 1; 0 <= c; c--) a[c].Ea(!1);
  if (this.Ic) for (a = this.Ic.Kk(), c = 0; c < a.length; c++) a[c].Ea(!1);
};
function gd(a) {
  var c = g.km;
  if (a.ga && !(c.getElementsByTagName("block").length >= ya(a)))
    if ((a.Ic && a.Ic.cancel(), "comment" == c.tagName.toLowerCase())) {
      g.i.disable();
      try {
        var d = g.qk.Gm(c),
          e = parseInt(c.getAttribute("x"), 10),
          f = parseInt(c.getAttribute("y"), 10);
        isNaN(e) || isNaN(f) || (a.G && (e = -e), d.moveBy(e + 50, f + 50));
      } finally {
        g.i.enable();
      }
      d.select();
    } else
      a: {
        g.i.disable();
        try {
          var h = g.R.Wi(c, a),
            k = a.fc.Vb;
          if (g.Se && k) {
            g.navigation.bz(h, k.ra);
            break a;
          }
          var l = parseInt(c.getAttribute("x"), 10),
            m = parseInt(c.getAttribute("y"), 10);
          if (!isNaN(l) && !isNaN(m)) {
            a.G && (l = -l);
            do {
              c = !1;
              var n = y(a, !1);
              d = 0;
              for (var t; (t = n[d]); d++) {
                var v = t.Sa();
                if (1 >= Math.abs(l - v.x) && 1 >= Math.abs(m - v.y)) {
                  c = !0;
                  break;
                }
              }
              if (!c) {
                var w = h.Me(!1);
                d = 0;
                for (var I; (I = w[d]); d++)
                  if (I.closest(g.wd, new g.g.V(l, m)).connection) {
                    c = !0;
                    break;
                  }
              }
              c && ((l = a.G ? l - g.wd : l + g.wd), (m += 2 * g.wd));
            } while (c);
            h.moveBy(l, m);
          }
        } finally {
          g.i.enable();
        }
        g.i.isEnabled() && !h.ib && g.i.Oa(new g.i.oo(h));
        h.select();
      }
}
function hd(a) {
  if ((a = a.re ? a.Jj : a) && !a.Ic && a.sa && a.sa.O) {
    a = a.sa;
    var c = a.Fd.Ud;
    c && c.Sf && a.O.show(c.Sf);
  }
}
b.gi = function (a, c) {
  g.qb.w.gi.call(this, a, c);
  hd(this);
};
b.Zf = function (a) {
  g.qb.w.Zf.call(this, a);
  hd(this);
};
b.Md = function (a, c, d) {
  a = g.qb.w.Md.call(this, a, c, d);
  hd(this);
  return a;
};
function cd(a) {
  a.Ix = a.cd && a.H.parentNode ? a.cd.Im() : null;
  a.Hx = a.O ? a.O.Im() : a.sa ? a.sa.Im() : null;
}
function Ya(a, c) {
  return a.Ix && a.Ix.contains(c.clientX, c.clientY)
    ? g.hr
    : a.Hx && a.Hx.contains(c.clientX, c.clientY)
    ? g.Uv
    : g.Tv;
}
b.ai = function (a) {
  var c = this.Vg(a);
  c && pb(c, a, this);
};
b.mv = function (a, c) {
  a = g.g.nn(a, r(this), qa(this));
  a.x /= this.scale;
  a.y /= this.scale;
  this.Ux = g.g.V.Ek(c, a);
};
b.lc = function () {
  return null != this.Ic && this.Ic.lc();
};
function id(a) {
  return (
    (a.options.Nc && a.options.Nc.scrollbars) ||
    (a.options.Nc && a.options.Nc.Rj) ||
    (a.options.Nc && a.options.Nc.Ih) ||
    (a.options.Hb && a.options.Hb.controls) ||
    (a.options.Hb && a.options.Hb.Rj)
  );
}
b.Lc = function () {
  return (
    (this.options.Nc && this.options.Nc.scrollbars) ||
    (this.options.Nc && this.options.Nc.Rj) ||
    (this.options.Nc && this.options.Nc.Ih) ||
    (this.options.Hb && this.options.Hb.Rj)
  );
};
b.MG = function (a) {
  if (g.$j.Mt()) a.preventDefault(), a.stopPropagation();
  else {
    var c = this.options.Hb && this.options.Hb.Rj,
      d = this.options.Nc && this.options.Nc.Rj;
    if (c || d) {
      var e = g.g.Cy(a);
      !c || (!a.ctrlKey && d)
        ? ((c = this.scrollX - e.x),
          (d = this.scrollY - e.y),
          a.shiftKey && !e.x && ((c = this.scrollX - e.y), (d = this.scrollY)),
          this.scroll(c, d))
        : ((e = -e.y / 50),
          (c = g.g.nn(a, r(this), qa(this))),
          this.zoom(c.x, c.y, e));
      a.preventDefault();
    }
  }
};
function lc(a) {
  var c = A(a, !1);
  a = xa(a, !1);
  c = c.concat(a);
  if (!c.length) return new g.g.Rect(0, 0, 0, 0);
  a = Vc(c[0]);
  for (var d = 1; d < c.length; d++) {
    var e = Vc(c[d]);
    e.top < a.top && (a.top = e.top);
    e.bottom > a.bottom && (a.bottom = e.bottom);
    e.left < a.left && (a.left = e.left);
    e.right > a.right && (a.right = e.right);
  }
  return a;
}
b.XD = function () {
  this.Qc(!1);
  g.i.aa(!0);
  for (var a = A(this, !0), c = 0, d = 0, e; (e = a[d]); d++)
    if (e.Lc()) {
      var f = e.Sa();
      e.moveBy(-f.x, c - f.y);
      Uc(e);
      c = e.Sa().y + Ra(e).height + g.xa.yr;
    }
  g.i.aa(!1);
  this.Qc(!0);
};
b.Jn = function (a) {
  function c(I) {
    if (I.qe()) w = w.concat(p(I, !1));
    else {
      I = I.Kh(!1);
      for (var ca = 0; ca < I.length; ca++) c(I[ca]);
    }
  }
  function d() {
    g.i.aa(h);
    var I = w.shift();
    I && (I.v ? (I.I(!1, !0), setTimeout(d, 10)) : d());
    g.i.aa(!1);
  }
  if (!this.options.readOnly && !this.re) {
    var e = [],
      f = A(this, !0),
      h = g.g.Tg(),
      k = this,
      l = {};
    l.text = g.h.UNDO;
    l.enabled = 0 < this.Nj.length;
    l.Fb = this.yv.bind(this, !1);
    e.push(l);
    l = {};
    l.text = g.h.REDO;
    l.enabled = 0 < this.yn.length;
    l.Fb = this.yv.bind(this, !0);
    e.push(l);
    this.Lc() &&
      ((l = {}),
      (l.text = g.h.CLEAN_UP),
      (l.enabled = 1 < f.length),
      (l.Fb = this.XD.bind(this)),
      e.push(l));
    if (this.options.collapse) {
      for (var m = (l = !1), n = 0; n < f.length; n++)
        for (var t = f[n]; t; )
          t.isCollapsed() ? (l = !0) : (m = !0), (t = q(t));
      var v = function (I) {
        for (var ca = 0, fa = 0; fa < f.length; fa++)
          for (var Fa = f[fa]; Fa; )
            setTimeout(Fa.kh.bind(Fa, I), ca), (Fa = q(Fa)), (ca += 10);
      };
      m = { enabled: m };
      m.text = g.h.COLLAPSE_ALL;
      m.Fb = function () {
        v(!0);
      };
      e.push(m);
      l = { enabled: l };
      l.text = g.h.EXPAND_ALL;
      l.Fb = function () {
        v(!1);
      };
      e.push(l);
    }
    var w = [];
    for (n = 0; n < f.length; n++) c(f[n]);
    l = {
      text:
        1 == w.length
          ? g.h.DELETE_BLOCK
          : g.h.DELETE_X_BLOCKS.replace("%1", String(w.length)),
      enabled: 0 < w.length,
      Fb: function () {
        k.Ic && k.Ic.cancel();
        2 > w.length
          ? d()
          : g.confirm(
              g.h.DELETE_ALL_BLOCKS.replace("%1", w.length),
              function (I) {
                I && d();
              }
            );
      },
    };
    e.push(l);
    this.px && this.px(e);
    g.Ga.show(a, e, this.G);
  }
};
function pa(a) {
  if (a.options.Rb) pa(a.options.Rb);
  else {
    g.fn = a;
    document.activeElement && document.activeElement.blur();
    try {
      r(a).focus();
    } catch (c) {
      try {
        r(a).parentNode.setActive();
      } catch (d) {
        r(a).parentNode.focus();
      }
    }
  }
}
b.zoom = function (a, c, d) {
  if (!this.re && !this.kj) {
    d = Math.pow(this.options.Hb.dH, d);
    var e = this.scale * d;
    if (this.scale != e) {
      e > this.options.Hb.jn
        ? (d = this.options.Hb.jn / this.scale)
        : e < this.options.Hb.ln && (d = this.options.Hb.ln / this.scale);
      var f = this.kb.getCTM(),
        h = r(this).createSVGPoint();
      h.x = a;
      h.y = c;
      h = h.matrixTransform(f.inverse());
      a = h.x;
      c = h.y;
      f = f.translate(a * (1 - d), c * (1 - d)).scale(d);
      this.scrollX = f.e;
      this.scrollY = f.f;
      this.setScale(e);
    }
  }
};
function jd(a, c) {
  var d = a.jc();
  if (a.O) {
    var e = d.uH / 2;
    d = d.tH / 2;
  } else (e = d.vb / 2 + d.qc), (d = d.Cb / 2 + d.Fc);
  a.zoom(e, d, c);
}
b.LE = function () {
  g.g.o.Sb(this.kb, "blocklyCanvasTransitioning");
  g.g.o.Sb(this.zf, "blocklyCanvasTransitioning");
};
b.setScale = function (a) {
  this.options.Hb.jn && a > this.options.Hb.jn
    ? (a = this.options.Hb.jn)
    : this.options.Hb.ln && a < this.options.Hb.ln && (a = this.options.Hb.ln);
  this.scale = a;
  g.wc(!1);
  this.O && (this.O.Su(), cd(this));
  this.Qe && this.Qe.update(this.scale);
  a = this.jc();
  this.scrollX -= a.qc;
  this.scrollY -= a.Fc;
  a.gc += a.qc;
  a.pc += a.Fc;
  this.scroll(this.scrollX, this.scrollY);
  this.Xb &&
    (this.O
      ? (ja(this.Xb.oe, a), ka(this.Xb.xe, a))
      : (ma(this.Xb.oe, a), oa(this.Xb.xe, a)));
};
b.scroll = function (a, c) {
  g.wc(!0);
  var d = this.jc(),
    e = d.jf + d.Hc - d.vb,
    f = d.Ld + d.tc - d.Cb;
  a = Math.min(a, -d.Hc);
  c = Math.min(c, -d.tc);
  a = Math.max(a, -e);
  c = Math.max(c, -f);
  this.scrollX = a;
  this.scrollY = c;
  this.Xb &&
    (da(this.Xb.oe, -(a + d.Hc) * this.Xb.oe.Oc),
    da(this.Xb.xe, -(c + d.tc) * this.Xb.xe.Oc));
  a += d.qc;
  c += d.Fc;
  this.translate(a, c);
};
g.qb.uy = function (a) {
  var c = 0,
    d = 0;
  a && ((c = a.cg()), (d = a.xy()));
  return { width: c, height: d };
};
g.qb.eF = function (a, c) {
  return id(a) ? g.qb.dF(a, c) : g.qb.qy(a);
};
g.qb.qy = function (a) {
  var c = lc(a),
    d = a.scale;
  a = c.top * d;
  var e = c.bottom * d,
    f = c.left * d;
  c = c.right * d;
  return { top: a, bottom: e, left: f, right: c, width: c - f, height: e - a };
};
g.qb.dF = function (a, c) {
  a = g.qb.qy(a);
  var d = c.width;
  c = c.height;
  var e = d / 2,
    f = c / 2,
    h = Math.min(a.left - e, a.right - d),
    k = Math.min(a.top - f, a.bottom - c);
  return {
    left: h,
    top: k,
    height: Math.max(a.bottom + f, a.top + c) - k,
    width: Math.max(a.right + e, a.left + d) - h,
  };
};
g.qb.kF = function () {
  var a = g.qb.uy(this.sa),
    c = g.qb.uy(this.O),
    d = g.vA(r(this)),
    e = { height: d.height, width: d.width };
  if (this.sa)
    if (this.Ia == g.Fg || this.Ia == g.Fi) e.height -= a.height;
    else {
      if (this.Ia == g.Jd || this.Ia == g.Eg) e.width -= a.width;
    }
  else if (this.O)
    if (this.Ia == g.Fg || this.Ia == g.Fi) e.height -= c.height;
    else if (this.Ia == g.Jd || this.Ia == g.Eg) e.width -= c.width;
  var f = g.qb.eF(this, e),
    h = 0;
  this.sa && this.Ia == g.Jd
    ? (h = a.width)
    : this.O && this.Ia == g.Jd && (h = c.width);
  var k = 0;
  this.sa && this.Ia == g.Fg
    ? (k = a.height)
    : this.O && this.Ia == g.Fg && (k = c.height);
  return {
    Ld: f.height,
    jf: f.width,
    tc: f.top,
    Hc: f.left,
    Cb: e.height,
    vb: e.width,
    pc: -this.scrollY,
    gc: -this.scrollX,
    Fc: k,
    qc: h,
    tH: d.height,
    uH: d.width,
    yA: a.width,
    AM: a.height,
    YL: c.width,
    XL: c.height,
    Ia: this.Ia,
  };
};
g.qb.jH = function (a) {
  var c = this.jc();
  "number" == typeof a.x && (this.scrollX = -c.jf * a.x - c.Hc);
  "number" == typeof a.y && (this.scrollY = -c.Ld * a.y - c.tc);
  this.translate(this.scrollX + c.qc, this.scrollY + c.Fc);
};
g.qb.prototype.Qc = function (a) {
  var c = !this.Vu && a;
  this.Vu = a;
  c && ic(this);
};
g.qb.prototype.clear = function () {
  this.Qc(!1);
  g.qb.w.clear.call(this);
  this.Qc(!0);
};
function kd(a, c) {
  if ("function" != typeof c)
    throw TypeError("Button callbacks must be functions.");
  a.nt.CREATE_VARIABLE = c;
}
function Lb(a, c) {
  return (a = a.nt[c]) ? a : null;
}
function bd(a, c, d) {
  if ("function" != typeof d)
    throw TypeError("Toolbox category callbacks must be functions.");
  a.vv[c] = d;
}
g.qb.prototype.Vg = function (a) {
  var c =
      "mousedown" == a.type ||
      "touchstart" == a.type ||
      "pointerdown" == a.type,
    d = this.Ic;
  return d
    ? c && d.aj
      ? (console.warn("Tried to start the same gesture twice."),
        d.cancel(),
        null)
      : d
    : c
    ? (this.Ic = new g.ie(a, this))
    : null;
};
g.Jl = function (a) {
  a.jc = this.Lm.bind(this);
  a.ki = this.mA.bind(this);
  this.s = new g.qb(a);
  this.s.re = !0;
  this.s.$u(new g.wi());
  this.s.lA(new g.uh());
  this.G = !!a.G;
  this.ul = a.Ia;
  this.jt = [];
  this.gq = [];
  this.hm = [];
  this.Cd = [];
  this.Mu = [];
  this.tl = this.s.hh.C.zh;
};
b = g.Jl.prototype;
b.vk = !0;
b.Xh = !1;
b.Pi = !0;
b.Db = 8;
b.af = g.Jl.prototype.Db;
b.KB = 3 * g.Jl.prototype.af;
b.LB = 3 * g.Jl.prototype.af;
b.Nr = 2;
b.yb = 0;
b.$c = 0;
b.IE = 70;
b.Ja = function (a) {
  this.H = g.g.o.K(a, { class: "blocklyFlyout", style: "display: none" }, null);
  this.Rc = g.g.o.K("path", { class: "blocklyFlyoutBackground" }, this.H);
  this.H.appendChild(this.s.Ja());
  this.s.Zb.subscribe(this.Rc, "flyout", "fill");
  this.s.Zb.subscribe(this.Rc, "flyoutOpacity", "fill-opacity");
  return this.H;
};
b.Z = function (a) {
  this.ub = a;
  this.s.Jj = a;
  this.yc = new g.La(this.s, this.rf, !1, "blocklyFlyoutScrollbar");
  this.Ha();
  Array.prototype.push.apply(this.jt, g.ca(this.H, "wheel", this, this.IH));
  this.vk || ((this.yp = this.kt.bind(this)), Ba(this.ub, this.yp));
  Array.prototype.push.apply(
    this.jt,
    g.ca(this.Rc, "mousedown", this, this.ai)
  );
  this.s.Vg = this.ub.Vg.bind(this.ub);
  this.s.Va = this.ub.Va;
  a = this.s;
  a.ci = new g.Yr(a);
};
b.I = function () {
  this.Ha();
  g.Ua(this.jt);
  this.yp && (Ca(this.ub, this.yp), (this.yp = null));
  this.yc && (this.yc.I(), (this.yc = null));
  this.s &&
    (this.s.Zb.unsubscribe(this.Rc),
    (this.s.Jj = null),
    this.s.I(),
    (this.s = null));
  this.H && (g.g.o.removeNode(this.H), (this.H = null));
  this.ub = this.Rc = null;
};
b.cg = function () {
  return this.yb;
};
b.xy = function () {
  return this.$c;
};
b.Lk = function () {
  return this.s;
};
b.isVisible = function () {
  return this.Xh;
};
b.Yb = function (a) {
  var c = a != this.isVisible();
  this.Xh = a;
  c && this.Xn();
};
b.Aj = function (a) {
  var c = a != this.Pi;
  this.Pi = a;
  c && this.Xn();
};
b.Xn = function () {
  var a = this.Pi ? this.isVisible() : !1;
  this.H.style.display = a ? "block" : "none";
  this.yc.Aj(a);
};
b.Ha = function () {
  if (this.isVisible()) {
    this.Yb(!1);
    for (var a = 0, c; (c = this.Cd[a]); a++) g.Ua(c);
    this.Cd.length = 0;
    this.di && (Ca(this.s, this.di), (this.di = null));
  }
};
b.show = function (a) {
  this.s.Qc(!1);
  this.Ha();
  ld(this);
  if ("string" == typeof a) {
    a = this.s.Jj.vv[a] || null;
    if ("function" != typeof a)
      throw TypeError(
        "Couldn't find a callback function when opening a toolbox category."
      );
    a = a(this.s.Jj);
    if (!Array.isArray(a))
      throw TypeError("Result of toolbox category callback must be an array.");
  }
  this.Yb(!0);
  var c = [],
    d = [];
  this.Mu.length = 0;
  for (var e = this.rf ? this.KB : this.LB, f = 0, h; (h = a[f]); f++)
    if (h.tagName)
      switch (h.tagName.toUpperCase()) {
        case "BLOCK":
          var k = g.R.Wi(h, this.s);
          k.isEnabled() || this.Mu.push(k);
          c.push({ type: "block", block: k });
          h = parseInt(h.getAttribute("gap"), 10);
          d.push(isNaN(h) ? e : h);
          break;
        case "SEP":
          h = parseInt(h.getAttribute("gap"), 10);
          !isNaN(h) && 0 < d.length ? (d[d.length - 1] = h) : d.push(e);
          break;
        case "LABEL":
        case "BUTTON":
          k = "LABEL" == h.tagName.toUpperCase();
          if (!g.Zj) throw Error("Missing require for Blockly.FlyoutButton");
          h = new g.Zj(this.s, this.ub, h, k);
          c.push({ type: "button", button: h });
          d.push(e);
      }
  md(this, c, d);
  this.Cd.push(
    g.ca(this.Rc, "mouseover", this, function () {
      for (var l = A(this.s, !1), m = 0, n; (n = l[m]); m++) n.Bn();
    })
  );
  this.rf ? (this.$c = 0) : (this.yb = 0);
  this.s.Qc(!0);
  this.Su();
  this.kt();
  this.position();
  this.di = this.Su.bind(this);
  Ba(this.s, this.di);
};
function ld(a) {
  for (var c = A(a.s, !1), d = 0, e; (e = c[d]); d++) e.v == a.s && e.I(!1, !1);
  for (d = 0; d < a.gq.length; d++) (c = a.gq[d]) && g.g.o.removeNode(c);
  for (d = a.gq.length = 0; (c = a.hm[d]); d++) c.I();
  a.hm.length = 0;
  a.s.ci.clear();
}
function nd(a, c) {
  return function (d) {
    var e = a.ub.Vg(d);
    e && (rb(e, c), qb(e, d, a));
  };
}
b.ai = function (a) {
  var c = this.ub.Vg(a);
  c && qb(c, a, this);
};
b.ez = function (a) {
  return a.isEnabled();
};
function mb(a, c) {
  var d = null;
  g.i.disable();
  var e = a.ub.Ug();
  a.ub.Qc(!1);
  try {
    var f = a.ub;
    if (!c.za()) throw Error("oldBlock is not rendered.");
    var h = g.R.Bh(c, !0);
    f.Qc(!1);
    var k = g.R.Wi(h, f);
    if (!k.za()) throw Error("block is not rendered.");
    var l = g.g.Km(f.kb),
      m = g.g.Km(a.s.kb),
      n = c.Sa();
    n.scale(a.s.scale);
    var t = g.g.V.sum(m, n),
      v = g.g.V.Ek(t, l);
    v.scale(1 / f.scale);
    k.moveBy(v.x, v.y);
    d = k;
    g.wc();
  } finally {
    g.i.enable();
  }
  c = g.N.py(a.ub, e);
  if (g.i.isEnabled())
    for (g.i.aa(!0), g.i.Oa(new g.i.Ye(d)), e = 0; e < c.length; e++)
      g.i.Oa(new g.i.He(c[e]));
  a.vk ? a.Ha() : a.kt();
  return d;
}
b.kt = function () {
  for (var a = A(this.s, !1), c = 0, d; (d = a[c]); c++)
    if (-1 == this.Mu.indexOf(d))
      for (var e = za(this.ub, g.g.rt(d)); d; ) d.qd(e), (d = q(d));
};
b.Su = function () {
  this.di && Ca(this.s, this.di);
  this.s.scale = this.ub.scale;
  for (var a = 0, c = A(this.s, !1), d = 0, e; (e = c[d]); d++) {
    var f = Ra(e).width;
    e.L && (f -= this.tl);
    a = Math.max(a, f);
  }
  for (d = 0; (e = this.hm[d]); d++) a = Math.max(a, e.width);
  a += 1.5 * this.af + this.tl;
  a *= this.s.scale;
  a += g.La.xc;
  if (this.yb != a) {
    for (d = 0; (e = c[d]); d++) {
      if (this.G) {
        f = e.Sa().x;
        var h = a / this.s.scale - this.af;
        e.L || (h -= this.tl);
        e.moveBy(h - f, 0);
      }
      e.gy &&
        ((f = e.gy),
        (h = e),
        (e = Ra(h)),
        f.setAttribute("width", e.width),
        f.setAttribute("height", e.height),
        (h = h.Sa()),
        f.setAttribute("y", h.y),
        f.setAttribute("x", this.G ? h.x - e.width : h.x));
    }
    if (this.G)
      for (d = 0; (e = this.hm[d]); d++)
        e.moveTo(a / this.s.scale - e.width - this.af - this.tl, e.pd.y);
    this.yb = a;
    this.position();
  }
  this.di && Ba(this.s, this.di);
};
function kb(a) {
  return a.yc ? a.yc.isVisible() : !1;
}
g.ba = {};
g.ba.Ca = null;
g.ba.od = null;
g.ba.vp = null;
g.ba.Ja = function () {
  g.ba.Ca ||
    ((g.ba.Ca = document.createElement("div")),
    (g.ba.Ca.className = "blocklyWidgetDiv"),
    document.body.appendChild(g.ba.Ca));
};
g.ba.show = function (a, c, d) {
  g.ba.Ha();
  g.ba.od = a;
  g.ba.vp = d;
  g.ba.Ca.style.top = g.g.style.Ft().y + "px";
  g.ba.Ca.style.direction = c ? "rtl" : "ltr";
  g.ba.Ca.style.display = "block";
};
g.ba.Ha = function () {
  g.ba.od &&
    ((g.ba.od = null),
    (g.ba.Ca.style.display = "none"),
    (g.ba.Ca.style.left = ""),
    (g.ba.Ca.style.top = ""),
    g.ba.vp && g.ba.vp(),
    (g.ba.vp = null),
    (g.ba.Ca.innerHTML = ""));
};
g.ba.isVisible = function () {
  return !!g.ba.od;
};
g.ba.Ok = function (a) {
  g.ba.od == a && g.ba.Ha();
};
g.ba.un = function (a, c, d) {
  g.ba.Ca.style.left = a + "px";
  g.ba.Ca.style.top = c + "px";
  g.ba.Ca.style.height = d + "px";
};
g.ba.TG = function (a, c, d, e) {
  var f = g.ba.OD(a, c, d);
  a = g.ba.ND(a, c, d, e);
  0 > f ? g.ba.un(a, 0, d.height + f) : g.ba.un(a, f, d.height);
};
g.ba.ND = function (a, c, d, e) {
  if (e)
    return (
      (c = Math.max(c.right - d.width, a.left)), Math.min(c, a.right - d.width)
    );
  c = Math.min(c.left, a.right - d.width);
  return Math.max(c, a.left);
};
g.ba.OD = function (a, c, d) {
  return c.bottom + d.height >= a.bottom ? c.top - d.height : c.bottom;
};
g.Hg = function (a) {
  a.jc = this.Lm.bind(this);
  a.ki = this.mA.bind(this);
  g.Hg.w.constructor.call(this, a);
  this.rf = !1;
};
g.g.object.X(g.Hg, g.Jl);
b = g.Hg.prototype;
b.Lm = function () {
  if (!this.isVisible()) return null;
  try {
    var a = this.s.kb.getBBox();
  } catch (f) {
    a = { height: 0, y: 0, width: 0, x: 0 };
  }
  var c = this.Nr,
    d = this.$c - 2 * this.Nr,
    e = this.yb;
  this.G || (e -= this.Nr);
  return {
    Cb: d,
    vb: e,
    Ld: a.height * this.s.scale + 2 * this.af,
    jf: a.width * this.s.scale + 2 * this.af,
    pc: -this.s.scrollY + a.y,
    gc: -this.s.scrollX,
    tc: a.y,
    Hc: a.x,
    Fc: c,
    qc: 0,
  };
};
b.mA = function (a) {
  var c = this.Lm();
  c &&
    ("number" == typeof a.y && (this.s.scrollY = -c.Ld * a.y),
    this.s.translate(this.s.scrollX + c.qc, this.s.scrollY + c.Fc));
};
b.position = function () {
  if (this.isVisible()) {
    var a = this.ub.jc();
    if (a) {
      this.$c = a.Cb;
      var c = this.yb - this.Db,
        d = a.Cb - 2 * this.Db,
        e = this.ul == g.Eg,
        f = c + this.Db;
      f = ["M " + (e ? f : 0) + ",0"];
      f.push("h", e ? -c : c);
      f.push(
        "a",
        this.Db,
        this.Db,
        0,
        0,
        e ? 0 : 1,
        e ? -this.Db : this.Db,
        this.Db
      );
      f.push("v", Math.max(0, d));
      f.push(
        "a",
        this.Db,
        this.Db,
        0,
        0,
        e ? 0 : 1,
        e ? this.Db : -this.Db,
        this.Db
      );
      f.push("h", e ? c : -c);
      f.push("z");
      this.Rc.setAttribute("d", f.join(" "));
      c = this.$c;
      a =
        this.ub.Ia == this.ul
          ? a.yA
            ? this.ul == g.Jd
              ? a.yA
              : a.vb - this.yb
            : this.ul == g.Jd
            ? 0
            : a.vb
          : this.ul == g.Jd
          ? 0
          : a.vb + a.qc - this.yb;
      this.H.setAttribute("width", this.yb);
      this.H.setAttribute("height", c);
      "svg" == this.H.tagName
        ? g.g.o.Gn(this.H, "translate(" + a + "px,0px)")
        : this.H.setAttribute("transform", "translate(" + a + ",0)");
      this.yc &&
        ((this.yc.Hu = new g.g.V(a, 0)),
        this.yc.resize(),
        ia(this.yc, this.yc.pd.x, this.yc.pd.y));
    }
  }
};
b.IH = function (a) {
  var c = g.g.Cy(a);
  if (c.y) {
    var d = this.Lm();
    c = d.pc - d.tc + c.y;
    c = Math.min(c, d.Ld - d.Cb);
    c = Math.max(c, 0);
    this.yc.set(c);
    g.ba.Ha();
  }
  a.preventDefault();
  a.stopPropagation();
};
function md(a, c, d) {
  a.s.scale = a.ub.scale;
  for (var e = a.af, f = a.G ? e : e + a.tl, h = 0, k; (k = c[h]); h++)
    if ("block" == k.type) {
      k = k.block;
      for (var l = p(k, !1), m = 0, n; (n = l[m]); m++) n.ec = !0;
      k.Ea();
      n = k.za();
      l = Ra(k);
      m = k.L ? f - a.tl : f;
      k.moveBy(m, e);
      var t = a,
        v = k,
        w = h;
      m = g.g.o.K(
        "rect",
        {
          "fill-opacity": 0,
          x: a.G ? m - l.width : m,
          y: e,
          height: l.height,
          width: l.width,
        },
        null
      );
      m.Af = v;
      g.J.wk(m);
      t.s.kb.insertBefore(m, v.za());
      v.gy = m;
      t.gq[w] = m;
      t = a;
      t.Cd.push(g.ca(n, "mousedown", null, nd(t, k)));
      t.Cd.push(g.ca(m, "mousedown", null, nd(t, k)));
      t.Cd.push(g.jd(n, "mouseover", k, k.ap));
      t.Cd.push(g.jd(n, "mouseout", k, k.Bn));
      t.Cd.push(g.jd(m, "mouseover", k, k.ap));
      t.Cd.push(g.jd(m, "mouseout", k, k.Bn));
      e += l.height + d[h];
    } else
      "button" == k.type &&
        ((l = a),
        (m = k.button),
        (n = f),
        (t = e),
        (v = m.Ja()),
        m.moveTo(n, t),
        m.show(),
        l.Cd.push(g.ca(v, "mousedown", l, l.ai)),
        l.hm.push(m),
        (e += k.button.height + d[h]));
}
b.Im = function () {
  if (!this.H) return null;
  var a = this.H.getBoundingClientRect(),
    c = a.left;
  if (this.ul == g.Jd) return new g.g.Rect(-1e9, 1e9, -1e9, c + a.width);
  g.g.userAgent.Go &&
    this.ub &&
    this.ub.kj &&
    ((a = this.ub.H.getBoundingClientRect().x),
    10 > Math.abs(a - c) && (c += this.kM * this.ub.options.Rb.scale));
  return new g.g.Rect(-1e9, 1e9, c, 1e9);
};
g.ds = function (a) {
  this.s = a;
};
b = g.ds.prototype;
b.Ji = 32;
b.Kl = 110;
b.vr = 20;
b.Rl = 20;
b.H = null;
b.cn = 0;
b.wl = 0;
b.Ja = function () {
  this.H = g.g.o.K("g", {}, null);
  var a = String(Math.random()).substring(2);
  od(this, a);
  pd(this, a);
  this.s.Lc() && qd(this, a);
  return this.H;
};
b.Z = function (a) {
  this.qh = this.vr + a;
  return this.qh + this.Kl;
};
b.I = function () {
  this.H && g.g.o.removeNode(this.H);
};
b.position = function () {
  if (this.qh) {
    var a = this.s.jc();
    a &&
      ((this.cn =
        a.Ia == g.Jd || (this.s.Od && !this.s.G)
          ? a.vb + a.qc - this.Ji - this.Rl - g.La.xc
          : this.Rl + g.La.xc),
      a.Ia == g.Fi
        ? ((this.wl = this.qh),
          this.Rq.setAttribute("transform", "translate(0, 34)"),
          this.Sq && this.Sq.setAttribute("transform", "translate(0, 77)"))
        : ((this.wl = a.Cb + a.Fc - this.Kl - this.qh),
          this.Rq.setAttribute("transform", "translate(0, 43)"),
          this.Bv.setAttribute("transform", "translate(0, 77)")),
      this.H.setAttribute(
        "transform",
        "translate(" + this.cn + "," + this.wl + ")"
      ));
  }
};
function od(a, c) {
  var d = a.s;
  a.Bv = g.g.o.K("g", { class: "blocklyZoom" }, a.H);
  var e = g.g.o.K("clipPath", { id: "blocklyZoomoutClipPath" + c }, a.Bv);
  g.g.o.K("rect", { width: 32, height: 32 }, e);
  a = g.g.o.K(
    "image",
    {
      width: g.xd.width,
      height: g.xd.height,
      x: -64,
      y: -92,
      "clip-path": "url(#blocklyZoomoutClipPath" + c + ")",
    },
    a.Bv
  );
  a.setAttributeNS(g.g.o.ef, "xlink:href", d.options.wf + g.xd.url);
  g.ca(a, "mousedown", null, function (f) {
    pa(d);
    jd(d, -1);
    g.Touch.Dh();
    f.stopPropagation();
    f.preventDefault();
  });
}
function pd(a, c) {
  var d = a.s;
  a.Rq = g.g.o.K("g", { class: "blocklyZoom" }, a.H);
  var e = g.g.o.K("clipPath", { id: "blocklyZoominClipPath" + c }, a.Rq);
  g.g.o.K("rect", { width: 32, height: 32 }, e);
  a = g.g.o.K(
    "image",
    {
      width: g.xd.width,
      height: g.xd.height,
      x: -32,
      y: -92,
      "clip-path": "url(#blocklyZoominClipPath" + c + ")",
    },
    a.Rq
  );
  a.setAttributeNS(g.g.o.ef, "xlink:href", d.options.wf + g.xd.url);
  g.ca(a, "mousedown", null, function (f) {
    pa(d);
    jd(d, 1);
    g.Touch.Dh();
    f.stopPropagation();
    f.preventDefault();
  });
}
function qd(a, c) {
  var d = a.s;
  a.Sq = g.g.o.K("g", { class: "blocklyZoom" }, a.H);
  var e = g.g.o.K("clipPath", { id: "blocklyZoomresetClipPath" + c }, a.Sq);
  g.g.o.K("rect", { width: 32, height: 32 }, e);
  a = g.g.o.K(
    "image",
    {
      width: g.xd.width,
      height: g.xd.height,
      y: -92,
      "clip-path": "url(#blocklyZoomresetClipPath" + c + ")",
    },
    a.Sq
  );
  a.setAttributeNS(g.g.o.ef, "xlink:href", d.options.wf + g.xd.url);
  g.ca(a, "mousedown", null, function (f) {
    pa(d);
    d.setScale(d.options.Hb.sA);
    g.g.o.rb(d.kb, "blocklyCanvasTransitioning");
    g.g.o.rb(d.zf, "blocklyCanvasTransitioning");
    if (d.Lc()) {
      var h = d.jc(),
        k = (h.jf - h.vb) / 2,
        l = (h.Ld - h.Cb) / 2;
      k = -k - h.Hc;
      l = -l - h.tc;
      d.scroll(k, l);
    } else console.warn("Tried to move a non-movable workspace. This could result in blocks becoming inaccessible.");
    setTimeout(d.LE.bind(d), 500);
    g.Touch.Dh();
    f.stopPropagation();
    f.preventDefault();
  });
}
g.Tc.register([
  ".blocklyZoom>image, .blocklyZoom>svg>image {",
  "opacity: .4;",
  "}",
  ".blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {",
  "opacity: .6;",
  "}",
  ".blocklyZoom>image:active, .blocklyZoom>svg>image:active {",
  "opacity: .8;",
  "}",
]);
g.Nv = function (a) {
  this.pm = a;
  this.Ja();
};
b = g.Nv.prototype;
b.bb = null;
b.lf = null;
b.pm = null;
b.ii = 1;
b.On = null;
b.Ja = function () {
  this.bb ||
    ((this.bb = g.g.o.K(
      "svg",
      {
        xmlns: g.g.o.Yl,
        "xmlns:html": g.g.o.ak,
        "xmlns:xlink": g.g.o.ef,
        version: "1.1",
        class: "blocklyBlockDragSurface",
      },
      this.pm
    )),
    (this.lf = g.g.o.K("g", {}, this.bb)));
};
function hb(a, c) {
  if (a.lf.childNodes.length) throw Error("Already dragging a block.");
  a.lf.appendChild(c);
  a.bb.style.display = "block";
  a.On = new g.g.V(0, 0);
}
b.Mj = function (a, c) {
  this.On = new g.g.V(a * this.ii, c * this.ii);
  a = this.On.x;
  c = this.On.y;
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.bb.style.display = "block";
  g.g.o.Gn(this.bb, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.At = function () {
  var a = g.g.Oe(this.bb);
  return new g.g.V(a.x / this.ii, a.y / this.ii);
};
b.cc = function () {
  return this.lf;
};
b.jp = function (a) {
  a
    ? a.appendChild(this.lf.firstChild)
    : this.lf.removeChild(this.lf.firstChild);
  this.bb.style.display = "none";
  if (this.lf.childNodes.length) throw Error("Drag group was not cleared.");
  this.On = null;
};
g.Rh = function (a, c) {
  g.SD();
  "string" == typeof a &&
    (a = document.getElementById(a) || document.querySelector(a));
  if (!g.g.o.containsNode(document, a))
    throw Error("Error: container is not in current document.");
  c = new g.Fe(c || {});
  var d = document.createElement("div");
  d.className = "injectionDiv";
  a.appendChild(d);
  a = g.rm(d, c);
  var e = new g.Nv(d);
  d = new g.Qw(d);
  d = g.hE(a, c, e, d);
  g.xb.tb.iH(c.tb);
  g.KF(d);
  g.fn = d;
  g.rl(d);
  return d;
};
g.rm = function (a, c) {
  a.setAttribute("dir", "LTR");
  g.Dc.Gx = c.G;
  g.Tc.Rh(c.AF, c.wf);
  a = g.g.o.K(
    "svg",
    {
      xmlns: g.g.o.Yl,
      "xmlns:html": g.g.o.ak,
      "xmlns:xlink": g.g.o.ef,
      version: "1.1",
      class: "blocklySvg",
    },
    a
  );
  var d = g.g.o.K("defs", {}, a),
    e = String(Math.random()).substring(2),
    f = g.g.o.K("filter", { id: "blocklyEmbossFilter" + e }, d);
  g.g.o.K(
    "feGaussianBlur",
    { in: "SourceAlpha", stdDeviation: 1, result: "blur" },
    f
  );
  var h = g.g.o.K(
    "feSpecularLighting",
    {
      in: "blur",
      surfaceScale: 1,
      specularConstant: 0.5,
      specularExponent: 10,
      "lighting-color": "white",
      result: "specOut",
    },
    f
  );
  g.g.o.K("fePointLight", { x: -5e3, y: -1e4, z: 2e4 }, h);
  g.g.o.K(
    "feComposite",
    { in: "specOut", in2: "SourceAlpha", operator: "in", result: "specOut" },
    f
  );
  g.g.o.K(
    "feComposite",
    {
      in: "SourceGraphic",
      in2: "specOut",
      operator: "arithmetic",
      k1: 0,
      k2: 1,
      k3: 1,
      k4: 0,
    },
    f
  );
  c.Xx = f.id;
  f = g.g.o.K(
    "pattern",
    {
      id: "blocklyDisabledPattern" + e,
      patternUnits: "userSpaceOnUse",
      width: 10,
      height: 10,
    },
    d
  );
  g.g.o.K("rect", { width: 10, height: 10, fill: "#aaa" }, f);
  g.g.o.K("path", { d: "M 0 0 L 10 10 M 10 0 L 0 10", stroke: "#cc0" }, f);
  c.Pg = f.id;
  c.Ly = g.xi.Ja(e, c.Ky, d);
  return a;
};
g.hE = function (a, c, d, e) {
  c.Rb = null;
  var f = new g.qb(c, d, e);
  f.scale = c.Hb.sA;
  a.appendChild(f.Ja("blocklyMainBackground"));
  !c.Oy && c.Xk && ((d = fd(f, "svg")), g.g.o.fj(d, a));
  c.Sy && dd(f);
  c.Hb && c.Hb.controls && ed(f);
  f.Zb.subscribe(a, "workspace", "background-color");
  f.translate(0, 0);
  g.fn = f;
  c.readOnly ||
    f.Lc() ||
    Ba(f, function (h) {
      if (!f.lc() && !f.Lc() && -1 != g.i.$A.indexOf(h.type)) {
        var k = Object.create(null),
          l = f.jc(),
          m = f.scale;
        k.G = f.G;
        k.gc = l.gc / m;
        k.pc = l.pc / m;
        k.GA = (l.gc + l.vb) / m;
        k.FA = (l.pc + l.Cb) / m;
        id(f)
          ? ((l = lc(f)),
            (k.Hc = l.left),
            (k.tc = l.top),
            (k.wx = l.right),
            (k.ux = l.bottom))
          : ((k.Hc = l.Hc / m),
            (k.tc = l.tc / m),
            (k.wx = (l.Hc + l.jf) / m),
            (k.ux = (l.tc + l.Ld) / m));
        if (k.tc < k.pc || k.ux > k.FA || k.Hc < k.gc || k.wx > k.GA) {
          l = null;
          h && ((l = g.i.cc()), g.i.aa(h.group));
          switch (h.type) {
            case g.i.Bl:
            case g.i.Jv:
              var n = x(f, h.Gc);
              n = db(n);
              break;
            case g.i.to:
            case g.i.uo:
              n = f.mp[h.Uf] || null;
          }
          if (n) {
            m = Vc(n);
            m.height = m.bottom - m.top;
            m.width = m.right - m.left;
            var t = k.pc,
              v = k.FA - m.height;
            v = Math.max(t, v);
            t = g.g.Rd.zk(t, m.top, v) - m.top;
            v = k.gc;
            var w = k.GA - m.width;
            k.G ? (v = Math.min(w, v)) : (w = Math.max(v, w));
            n.moveBy(g.g.Rd.zk(v, m.left, w) - m.left, t);
          }
          h &&
            (h.group ||
              console.log(
                "WARNING: Moved object in bounds but there was no event group. This may break undo."
              ),
            null !== l && g.i.aa(l));
        }
      }
    });
  g.rl(f);
  g.ba.Ja();
  g.D.Ja();
  g.J.Ja();
  return f;
};
g.KF = function (a) {
  var c = a.options,
    d = r(a);
  g.ca(d.parentNode, "contextmenu", null, function (e) {
    g.g.$p(e) || e.preventDefault();
  });
  d = g.ca(window, "resize", null, function () {
    g.wc(!0);
    g.rl(a);
  });
  a.Aq = d;
  g.Rh.FD();
  c.Xk &&
    (a.sa
      ? a.sa.Z(a)
      : a.O && (a.O.Z(a), a.O.show(c.Xk.childNodes), a.O.yc.set(0)));
  d = g.La.xc;
  c.Sy && (d = a.cd.Z(d));
  c.Hb && c.Hb.controls && a.Tj.Z(d);
  c.Nc && c.Nc.scrollbars
    ? ((a.Xb = new g.nk(a)), a.Xb.resize())
    : a.ki({ x: 0.5, y: 0.5 });
  c.CF && g.Rh.XF(c.wf, a);
};
g.Rh.FD = function () {
  g.FE ||
    (g.ca(document, "scroll", null, function () {
      for (var a = g.Nb.getAll(), c = 0, d; (d = a[c]); c++) d.Yn && d.Yn();
    }),
    g.ca(document, "keydown", null, g.Eu),
    g.jd(document, "touchend", null, g.Zh),
    g.jd(document, "touchcancel", null, g.Zh),
    g.g.userAgent.ck &&
      g.ca(window, "orientationchange", document, function () {
        g.rl(g.Gb());
      }));
  g.FE = !0;
};
g.Rh.XF = function (a, c) {
  function d() {
    for (; f.length; ) g.Ua(f.pop());
    e.preload();
  }
  var e = c.Rf;
  e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
  e.load(
    [a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"],
    "disconnect"
  );
  e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
  var f = [];
  f.push(g.ca(document, "mousemove", null, d, !0));
  f.push(g.ca(document, "touchstart", null, d, !0));
};
g.fe = function (a, c) {
  this.EA = c || "";
  this.cA = Object.create(null);
  if (a) for (a = a.split(","), c = 0; c < a.length; c++) this.cA[a[c]] = !0;
  this.reset();
};
g.fe.ir = "DEVELOPER_VARIABLE";
g.fe.prototype.reset = function () {
  this.Xf = Object.create(null);
  this.Fx = Object.create(null);
  this.Va = null;
};
function rd(a, c) {
  var d = g.j.Gd;
  if (c == g.N.Eb) {
    var e = a;
    d.Va
      ? (e = (e = d.Va.pf(e)) ? e.name : null)
      : (console.log(
          "Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the folowing code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"
        ),
        (e = null));
    e && (a = e);
  }
  e = a.toLowerCase() + "_" + c;
  var f = c == g.N.Eb || c == g.fe.ir ? d.EA : "";
  if (e in d.Xf) return f + d.Xf[e];
  a = sd(d, a, c);
  d.Xf[e] = a.substr(f.length);
  return a;
}
function sd(a, c, d) {
  c
    ? ((c = encodeURI(c.replace(/ /g, "_")).replace(/[^\w]/g, "_")),
      -1 != "0123456789".indexOf(c[0]) && (c = "my_" + c))
    : (c = g.h.UNNAMED_KEY || "unnamed");
  for (var e = ""; a.Fx[c + e] || c + e in a.cA; ) e = e ? e + 1 : 2;
  c += e;
  a.Fx[c] = !0;
  return (d == g.N.Eb || d == g.fe.ir ? a.EA : "") + c;
}
g.fe.Le = function (a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
g.Ka = {};
g.Ka.Eb = g.tw;
g.Ka.CD = function (a) {
  a = y(a, !1);
  for (var c = [], d = [], e = 0; e < a.length; e++)
    if (a[e].Mh) {
      var f = a[e].Mh();
      f && (f[2] ? c.push(f) : d.push(f));
    }
  d.sort(g.Ka.Xz);
  c.sort(g.Ka.Xz);
  return [d, c];
};
g.Ka.Xz = function (a, c) {
  return a[0].toLowerCase().localeCompare(c[0].toLowerCase());
};
g.Ka.QE = function (a, c) {
  if (c.ec) return a;
  for (a = a || g.h.UNNAMED_KEY || "unnamed"; !g.Ka.PF(a, c.v, c); ) {
    var d = a.match(/^(.*?)(\d+)$/);
    a = d ? d[1] + (parseInt(d[2], 10) + 1) : a + "2";
  }
  return a;
};
g.Ka.PF = function (a, c, d) {
  return !g.Ka.RF(a, c, d);
};
g.Ka.RF = function (a, c, d) {
  c = y(c, !1);
  for (var e = 0; e < c.length; e++)
    if (c[e] != d && c[e].Mh) {
      var f = c[e].Mh();
      if (g.fe.Le(f[0], a)) return !0;
    }
  return !1;
};
g.Ka.bA = function (a) {
  a = a.trim();
  var c = g.Ka.QE(a, this.B),
    d = this.getValue();
  if (d != a && d != c) {
    a = y(this.B.v, !1);
    for (var e = 0; e < a.length; e++) a[e].Cn && a[e].Cn(d, c);
  }
  return c;
};
g.Ka.Yi = function (a) {
  function c(h, k) {
    for (var l = 0; l < h.length; l++) {
      var m = h[l][0],
        n = h[l][1],
        t = g.g.xml.createElement("block");
      t.setAttribute("type", k);
      t.setAttribute("gap", 16);
      var v = g.g.xml.createElement("mutation");
      v.setAttribute("name", m);
      t.appendChild(v);
      for (m = 0; m < n.length; m++) {
        var w = g.g.xml.createElement("arg");
        w.setAttribute("name", n[m]);
        v.appendChild(w);
      }
      d.push(t);
    }
  }
  var d = [];
  if (g.S.procedures_defnoreturn) {
    var e = g.g.xml.createElement("block");
    e.setAttribute("type", "procedures_defnoreturn");
    e.setAttribute("gap", 16);
    var f = g.g.xml.createElement("field");
    f.setAttribute("name", "NAME");
    f.appendChild(g.g.xml.createTextNode(g.h.PROCEDURES_DEFNORETURN_PROCEDURE));
    e.appendChild(f);
    d.push(e);
  }
  g.S.procedures_defreturn &&
    ((e = g.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_defreturn"),
    e.setAttribute("gap", 16),
    (f = g.g.xml.createElement("field")),
    f.setAttribute("name", "NAME"),
    f.appendChild(g.g.xml.createTextNode(g.h.PROCEDURES_DEFRETURN_PROCEDURE)),
    e.appendChild(f),
    d.push(e));
  g.S.procedures_ifreturn &&
    ((e = g.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_ifreturn"),
    e.setAttribute("gap", 16),
    d.push(e));
  d.length && d[d.length - 1].setAttribute("gap", 24);
  a = g.Ka.CD(a);
  c(a[0], "procedures_callnoreturn");
  c(a[1], "procedures_callreturn");
  return d;
};
g.Ka.$E = function (a, c) {
  var d = [];
  c = y(c, !1);
  for (var e = 0; e < c.length; e++)
    if (c[e].ne) {
      var f = c[e].ne();
      f && g.fe.Le(f, a) && d.push(c[e]);
    }
  return d;
};
g.Ka.on = function (a) {
  var c = g.i.Pc,
    d = a.Mh()[0],
    e = a.Pa(!0);
  a = g.Ka.$E(d, a.v);
  d = 0;
  for (var f; (f = a[d]); d++) {
    var h = f.Pa();
    h = h && g.R.Nd(h);
    f.lb(e);
    var k = f.Pa();
    k = k && g.R.Nd(k);
    h != k &&
      ((g.i.Pc = !1),
      g.i.Oa(new g.i.sg(f, "mutation", null, h, k)),
      (g.i.Pc = c));
  }
};
g.Ka.Jm = function (a, c) {
  c = A(c, !1);
  for (var d = 0; d < c.length; d++)
    if (c[d].Mh) {
      var e = c[d].Mh();
      if (e && g.fe.Le(e[0], a)) return c[d];
    }
  return null;
};
g.bm = function (a, c, d, e) {
  this.v = a;
  this.name = c;
  this.type = d || "";
  this.Qk = e || g.g.Tg();
  g.i.Oa(new g.i.He(this));
};
g.bm.prototype.va = function () {
  return this.Qk;
};
g.bm.ox = function (a, c) {
  a = a.name.toLowerCase();
  c = c.name.toLowerCase();
  return a < c ? -1 : a == c ? 0 : 1;
};
g.N = {};
g.N.Eb = g.Kw;
g.N.Vw = function (a) {
  var c = y(a, !1);
  a = Object.create(null);
  for (var d = 0; d < c.length; d++) {
    var e = c[d].Xg();
    if (e)
      for (var f = 0; f < e.length; f++) {
        var h = e[f],
          k = h.va();
        k && (a[k] = h);
      }
  }
  c = [];
  for (k in a) c.push(a[k]);
  return c;
};
g.N.NL = function () {
  console.warn(
    "Deprecated call to Blockly.Variables.allUsedVariables. Use Blockly.Variables.allUsedVarModels instead.\nIf this is a major issue please file a bug on GitHub."
  );
};
g.N.Ev = {};
g.N.AD = function (a) {
  a = y(a, !1);
  for (var c = Object.create(null), d = 0, e; (e = a[d]); d++) {
    var f = e.ZL;
    !f &&
      e.fF &&
      ((f = e.fF),
      g.N.Ev[e.type] ||
        (console.warn(
          "Function getDeveloperVars() deprecated. Use getDeveloperVariables() (block type '" +
            e.type +
            "')"
        ),
        (g.N.Ev[e.type] = !0)));
    if (f) for (e = f(), f = 0; f < e.length; f++) c[e[f]] = !0;
  }
  return Object.keys(c);
};
g.N.Yi = function (a) {
  var c = [],
    d = document.createElement("button");
  d.setAttribute("text", "%{BKY_NEW_VARIABLE}");
  d.setAttribute("callbackKey", "CREATE_VARIABLE");
  kd(a, function (e) {
    g.N.zx(e.ub);
  });
  c.push(d);
  a = g.N.TE(a);
  return (c = c.concat(a));
};
g.N.TE = function (a) {
  a = a.Om("");
  var c = [];
  if (0 < a.length) {
    var d = a[a.length - 1];
    if (g.S.variables_set) {
      var e = g.g.xml.createElement("block");
      e.setAttribute("type", "variables_set");
      e.setAttribute("gap", g.S.math_change ? 8 : 24);
      e.appendChild(g.N.Hm(d));
      c.push(e);
    }
    g.S.math_change &&
      ((e = g.g.xml.createElement("block")),
      e.setAttribute("type", "math_change"),
      e.setAttribute("gap", g.S.variables_get ? 20 : 8),
      e.appendChild(g.N.Hm(d)),
      (d = g.R.mi(
        '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'
      )),
      e.appendChild(d),
      c.push(e));
    if (g.S.variables_get) {
      a.sort(g.bm.ox);
      d = 0;
      for (var f; (f = a[d]); d++)
        (e = g.g.xml.createElement("block")),
          e.setAttribute("type", "variables_get"),
          e.setAttribute("gap", 8),
          e.appendChild(g.N.Hm(f)),
          c.push(e);
    }
  }
  return c;
};
g.N.oy = function (a) {
  a = a.Ug();
  var c = "";
  if (a.length)
    for (var d = 1, e = 0, f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e); !c; ) {
      for (var h = !1, k = 0; k < a.length; k++)
        if (a[k].name.toLowerCase() == f) {
          h = !0;
          break;
        }
      h
        ? (e++,
          25 == e && ((e = 0), d++),
          (f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e)),
          1 < d && (f += d))
        : (c = f);
    }
  else c = "i";
  return c;
};
g.N.zx = function (a, c, d) {
  function e(h) {
    g.N.Zz(g.h.NEW_VARIABLE_TITLE, h, function (k) {
      if (k) {
        var l = g.N.mG(k, a);
        if (l) {
          var m = k.toLowerCase();
          if (l.type == f) var n = g.h.VARIABLE_ALREADY_EXISTS.replace("%1", m);
          else
            (n = g.h.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE),
              (n = n.replace("%1", m).replace("%2", l.type));
          g.alert(n, function () {
            e(k);
          });
        } else a.Md(k, f), c && c(k);
      } else c && c(null);
    });
  }
  var f = d || "";
  e("");
};
g.N.Md = g.N.zx;
g.N.yq = function (a, c) {
  function d(e) {
    var f = g.h.RENAME_VARIABLE_TITLE.replace("%1", c.name);
    g.N.Zz(f, e, function (h) {
      if (h) {
        var k = g.N.nG(h, c.type, a);
        k
          ? ((k = g.h.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace(
              "%1",
              h.toLowerCase()
            ).replace("%2", k.type)),
            g.alert(k, function () {
              d(h);
            }))
          : a.gi(c.va(), h);
      }
    });
  }
  d("");
};
g.N.Zz = function (a, c, d) {
  g.prompt(a, c, function (e) {
    e &&
      ((e = e.replace(/[\s\xa0]+/g, " ").trim()),
      e == g.h.RENAME_VARIABLE || e == g.h.NEW_VARIABLE) &&
      (e = null);
    d(e);
  });
};
g.N.nG = function (a, c, d) {
  d = d.Va.Ug();
  a = a.toLowerCase();
  for (var e = 0, f; (f = d[e]); e++)
    if (f.name.toLowerCase() == a && f.type != c) return f;
  return null;
};
g.N.mG = function (a, c) {
  c = c.Va.Ug();
  a = a.toLowerCase();
  for (var d = 0, e; (e = c[d]); d++) if (e.name.toLowerCase() == a) return e;
  return null;
};
g.N.Hm = function (a) {
  var c = g.g.xml.createElement("field");
  c.setAttribute("name", "VAR");
  c.setAttribute("id", a.va());
  c.setAttribute("variabletype", a.type);
  a = g.g.xml.createTextNode(a.name);
  c.appendChild(a);
  return c;
};
g.N.Hp = function (a, c, d, e) {
  var f = g.N.Zc(a, c, d, e);
  f || (f = g.N.jE(a, c, d, e));
  return f;
};
g.N.Zc = function (a, c, d, e) {
  var f = a.ci;
  if (c) {
    var h = a.pf(c);
    !h && f && (h = f.pf(c));
    if (h) return h;
  }
  if (d) {
    if (void 0 == e)
      throw Error("Tried to look up a variable by name without a type");
    h = a.Zc(d, e);
    !h && f && (h = f.Zc(d, e));
  }
  return h;
};
g.N.jE = function (a, c, d, e) {
  var f = a.ci;
  d || (d = g.N.oy(a.re ? a.Jj : a));
  return f ? f.Md(d, e, c) : a.Md(d, e, c);
};
g.N.py = function (a, c) {
  a = a.Ug();
  var d = [];
  if (c.length != a.length)
    for (var e = 0; e < a.length; e++) {
      var f = a[e];
      -1 == c.indexOf(f) && d.push(f);
    }
  return d;
};
g.VERSION = "uncompiled";
g.fn = null;
g.selected = null;
g.cursor = null;
g.Se = !1;
g.Am = [];
g.km = null;
g.lp = null;
g.Cs = null;
g.QL = null;
g.vA = function (a) {
  return { width: a.$w, height: a.Yw };
};
g.oM = function (a) {
  ic(a);
};
g.rl = function (a) {
  for (; a.options.Rb; ) a = a.options.Rb;
  var c = r(a),
    d = c.parentNode;
  if (d) {
    var e = d.offsetWidth;
    d = d.offsetHeight;
    c.$w != e && (c.setAttribute("width", e + "px"), (c.$w = e));
    c.Yw != d && (c.setAttribute("height", d + "px"), (c.Yw = d));
    a.resize();
  }
};
g.Eu = function (a) {
  var c = g.fn;
  if (!(g.g.$p(a) || (c.ga && !c.isVisible())))
    if (c.options.readOnly) g.navigation.Kz(a);
    else {
      var d = !1;
      if (a.keyCode == g.g.ya.jr) g.wc(), g.navigation.gg(g.navigation.Tq);
      else {
        if (g.navigation.Kz(a)) return;
        if (a.keyCode == g.g.ya.XA || a.keyCode == g.g.ya.El) {
          a.preventDefault();
          if (g.$j.Mt()) return;
          g.selected && g.selected.qe() && (d = !0);
        } else if (a.altKey || a.ctrlKey || a.metaKey) {
          if (g.$j.Mt()) return;
          g.selected &&
            g.selected.qe() &&
            g.selected.Lc() &&
            (a.keyCode == g.g.ya.bB
              ? (g.wc(), g.Gs(g.selected))
              : a.keyCode != g.g.ya.Rw ||
                g.selected.v.re ||
                (g.Gs(g.selected), (d = !0)));
          a.keyCode == g.g.ya.kD
            ? g.km &&
              ((a = g.lp),
              a.re && (a = a.Jj),
              g.Cs && za(a, g.Cs) && (g.i.aa(!0), gd(a), g.i.aa(!1)))
            : a.keyCode == g.g.ya.uD && (g.wc(), c.yv(a.shiftKey));
        }
      }
      d &&
        !g.selected.v.re &&
        (g.i.aa(!0), g.wc(), g.selected.I(!0, !0), g.i.aa(!1));
    }
};
g.Gs = function (a) {
  if (a.fz) var c = a.tv();
  else {
    c = g.R.Bh(a, !0);
    g.R.vE(c);
    var d = a.Sa();
    c.setAttribute("x", a.G ? -d.x : d.x);
    c.setAttribute("y", d.y);
  }
  g.km = c;
  g.lp = a.v;
  g.Cs = a.fz ? null : g.g.rt(a, !0);
};
g.Vx = function (a) {
  var c = g.km,
    d = g.lp;
  g.Gs(a);
  gd(a.v);
  g.km = c;
  g.lp = d;
};
g.mM = function (a) {
  g.g.$p(a) || a.preventDefault();
};
g.wc = function (a) {
  g.J.Ha();
  g.ba.Ha();
  g.D.bj();
  a ||
    ((a = g.Gb()),
    a.cd && a.cd.O && a.cd.O.Ha(),
    a.sa && a.sa.O && a.sa.O.vk && Bb(a.sa.Fd, null));
};
g.Gb = function () {
  return g.fn;
};
g.alert = function (a, c) {
  alert(a);
  c && c();
};
g.confirm = function (a, c) {
  c(confirm(a));
};
g.prompt = function (a, c, d) {
  d(prompt(a, c));
};
g.TF = function (a) {
  return function () {
    yc(this, a);
  };
};
g.Gh = function (a) {
  for (var c = 0; c < a.length; c++) {
    var d = a[c];
    if (d) {
      var e = d.type;
      null == e || "" === e
        ? console.warn(
            "Block definition #" +
              c +
              " in JSON array is missing a type attribute. Skipping."
          )
        : (g.S[e] &&
            console.warn(
              "Block definition #" +
                c +
                ' in JSON array overwrites prior definition of "' +
                e +
                '".'
            ),
          (g.S[e] = { Z: g.TF(d) }));
    } else
      console.warn(
        "Block definition #" + c + " in JSON array is " + d + ". Skipping."
      );
  }
};
g.ca = function (a, c, d, e, f, h) {
  function k(w) {
    var I = !f;
    w = g.Touch.nH(w);
    for (var ca = 0, fa; (fa = w[ca]); ca++)
      if (!I || g.Touch.hv(fa))
        g.Touch.gH(fa), d ? e.call(d, fa) : e(fa), (l = !0);
  }
  var l = !1,
    m = [];
  if (g.g.global.PointerEvent && c in g.Touch.Nf)
    for (var n = 0, t; (t = g.Touch.Nf[c][n]); n++)
      a.addEventListener(t, k, !1), m.push([a, t, k]);
  else if ((a.addEventListener(c, k, !1), m.push([a, c, k]), c in g.Touch.Nf)) {
    var v = function (w) {
      k(w);
      var I = !h;
      l && I && w.preventDefault();
    };
    for (n = 0; (t = g.Touch.Nf[c][n]); n++)
      a.addEventListener(t, v, !1), m.push([a, t, v]);
  }
  return m;
};
g.jd = function (a, c, d, e) {
  function f(n) {
    d ? e.call(d, n) : e(n);
  }
  var h = [];
  if (g.g.global.PointerEvent && c in g.Touch.Nf)
    for (var k = 0, l; (l = g.Touch.Nf[c][k]); k++)
      a.addEventListener(l, f, !1), h.push([a, l, f]);
  else if ((a.addEventListener(c, f, !1), h.push([a, c, f]), c in g.Touch.Nf)) {
    var m = function (n) {
      if (n.changedTouches && 1 == n.changedTouches.length) {
        var t = n.changedTouches[0];
        n.clientX = t.clientX;
        n.clientY = t.clientY;
      }
      f(n);
      n.preventDefault();
    };
    for (k = 0; (l = g.Touch.Nf[c][k]); k++)
      a.addEventListener(l, m, !1), h.push([a, l, m]);
  }
  return h;
};
g.Ua = function (a) {
  for (; a.length; ) {
    var c = a.pop();
    c[0].removeEventListener(c[1], c[2], !1);
  }
};
g.Wh = function (a) {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(a);
};
g.Zy = function (a) {
  return g.g.Ab.EF(a);
};
g.SD = function () {
  g.kd("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
  g.kd("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
  g.kd("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
  g.kd("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
  g.kd("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
  g.kd("MATH_HUE", ["Constants", "Math", "HUE"], 230);
  g.kd("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
  g.kd("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
  g.kd("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
  g.kd("LISTS_HUE", ["Constants", "Lists", "HUE"], 260);
  g.kd("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
  g.kd("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
  g.kd("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
  g.kd("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
  g.kd("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
  g.kd("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0);
};
g.kd = function (a, c, d) {
  for (var e = "Blockly", f = g, h = 0; h < c.length; ++h)
    (e += "." + c[h]), f && (f = f[c[h]]);
  f &&
    f !== d &&
    ((a = (
      void 0 === d
        ? '%1 has been removed. Use Blockly.Msg["%2"].'
        : '%1 is deprecated and unused. Override Blockly.Msg["%2"].'
    )
      .replace("%1", e)
      .replace("%2", a)),
    console.warn(a));
};
var td = {
    ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
    be: "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0456",
    "be-tarask": "Tara\u0161kievica",
    bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
    bn: "\u09ac\u09be\u0982\u09b2\u09be",
    br: "Brezhoneg",
    cs: "\u010cesky",
    da: "Dansk",
    de: "Deutsch",
    el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
    en: "English",
    es: "Espa\u00f1ol",
    eu: "Euskara",
    fa: "\u0641\u0627\u0631\u0633\u06cc",
    fi: "Suomi",
    fr: "Fran\u00e7ais",
    gl: "Galego",
    ha: "Hausa",
    he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
    hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
    hu: "Magyar",
    hy: "\u0570\u0561\u0575\u0565\u0580\u0567\u0576",
    ia: "Interlingua",
    id: "Bahasa Indonesia",
    ig: "As\u1ee5s\u1ee5 Igbo",
    is: "\u00cdslenska",
    it: "Italiano",
    ja: "\u65e5\u672c\u8a9e",
    kab: "Taqbaylit",
    ko: "\ud55c\uad6d\uc5b4",
    lt: "Lietuvi\u0173",
    lv: "Latvie\u0161u",
    ms: "Bahasa Melayu",
    my: "\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",
    nb: "Norsk Bokm\u00e5l",
    nl: "Nederlands, Vlaams",
    pl: "Polski",
    pms: "Piemont\u00e8is",
    pt: "Portugu\u00eas",
    "pt-br": "Portugu\u00eas Brasileiro",
    ro: "Rom\u00e2n\u0103",
    ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
    sc: "Sardu",
    sk: "Sloven\u010dina",
    sl: "Sloven\u0161\u010dina",
    sq: "Shqip",
    sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
    sv: "Svenska",
    th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
    tr: "T\u00fcrk\u00e7e",
    uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
    ur: "\u0627\u064f\u0631\u062f\u064f\u0648\u202c",
    vi: "Ti\u1ebfng Vi\u1ec7t",
    yo: "\u00c8d\u00e8 Yor\u00f9b\u00e1",
    "zh-hans": "\u7b80\u4f53\u4e2d\u6587",
    "zh-hant": "\u6b63\u9ad4\u4e2d\u6587",
  },
  ud = "ace ar fa he mzn ps ur".split(" "),
  vd = window.BlocklyGamesLang,
  wd = window.BlocklyGamesLanguages,
  xd = ".html" == window.location.pathname.substr(-5),
  G = null;
function yd() {
  return -1 != ud.indexOf(vd);
}
var O,
  zd = Number,
  Ad,
  Bd = window.location.search.match(/[?&]level=([^&]+)/);
Ad = Bd ? decodeURIComponent(Bd[1].replace(/\+/g, "%20")) : "NaN";
var Cd = zd(Ad);
O = isNaN(Cd) ? 1 : g.g.Rd.zk(1, Cd, 10);
function Dd() {
  document.title = document.getElementById("title").textContent;
  document.dir = yd() ? "rtl" : "ltr";
  document.head.parentElement.setAttribute("lang", vd);
  var a = document.getElementById("languageMenu");
  if (a) {
    for (var c = [], d = 0; d < wd.length; d++) {
      var e = wd[d];
      c.push([td[e], e]);
    }
    c.sort(function (h, k) {
      return h[0] > k[0] ? 1 : h[0] < k[0] ? -1 : 0;
    });
    for (d = a.options.length = 0; d < c.length; d++) {
      var f = c[d];
      e = f[1];
      f = new Option(f[0], e);
      e == vd && (f.selected = !0);
      a.options.add(f);
    }
    1 >= a.options.length && (a.style.display = "none");
  }
  for (d = 1; 10 >= d; d++)
    (a = document.getElementById("level" + d)),
      (c = !!Ed(d)),
      a && c && (a.className += " level_done");
  (d = document.querySelector('meta[name="viewport"]')) &&
    725 > screen.availWidth &&
    d.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
  setTimeout(Fd, 1);
}
function Ed(a) {
  var c = Gd;
  try {
    var d = window.localStorage[c + a];
  } catch (e) {}
  return d;
}
function P(a) {
  var c;
  (c = document.getElementById(a))
    ? ((c = c.textContent), (c = c.replace(/\\n/g, "\n")))
    : (c = null);
  return null === c ? "[Unknown message: " + a + "]" : c;
}
function Hd(a, c) {
  if (!a) throw TypeError("Element not found: " + a);
  "string" == typeof a && (a = document.getElementById(a));
  a.addEventListener("click", c, !0);
  a.addEventListener("touchend", c, !0);
}
function Fd() {
  if (!xd) {
    window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
    var a = function (d) {
      (a.q = a.q || []).push(arguments);
    };
    window.GoogleAnalyticsFunction = a;
    a.l = 1 * new Date();
    var c = document.createElement("script");
    c.async = 1;
    c.src = "//www.google-analytics.com/analytics.js";
    document.head.appendChild(c);
    a("create", "UA-50448074-1", "auto");
    a("send", "pageview");
  }
}
g.g.A = {};
g.g.A.Za = function (a, c) {
  return " " + a + "," + c + " ";
};
g.g.A.curve = function (a, c) {
  return " " + a + c.join("");
};
g.g.A.moveTo = function (a, c) {
  return " M " + a + "," + c + " ";
};
g.g.A.moveBy = function (a, c) {
  return " m " + a + "," + c + " ";
};
g.g.A.lineTo = function (a, c) {
  return " l " + a + "," + c + " ";
};
g.g.A.line = function (a) {
  return " l" + a.join("");
};
g.g.A.ea = function (a, c) {
  return " " + a + " " + c + " ";
};
g.g.A.arc = function (a, c, d, e) {
  return a + " " + d + " " + d + " " + c + e;
};
g.m.ui = function () {
  this.Jf = 0;
  this.SC = 3;
  this.If = 5;
  this.mw = 8;
  this.vd = 10;
  this.Gw = this.If;
  this.Sr = 15;
  this.Zl = 5;
  this.zh = 8;
  this.zC = 15;
  this.yC = 4;
  this.vC = 12;
  this.AB = 16;
  this.Db = 8;
  this.Po = 15;
  this.XC = 0;
  this.YC = 20;
  this.YA = 4;
  this.VC = 15;
  this.WC = 100;
  this.UC = 15;
  this.xr = 24;
  this.CB = 14.5;
  this.BB = this.Sr + 11;
  this.EB = 2;
  this.DB = this.xr;
  this.Cw = g.g.A.moveBy(0, 0);
  this.$B = 12;
  this.aC = 6;
};
b = g.m.ui.prototype;
b.Z = function () {
  this.fk = this.cu();
  this.hk = this.du();
  this.Dg = this.gu();
  this.Bi = this.fu();
  var a = this.Db,
    c = g.g.A.arc("a", "0 0,0", a, g.g.A.Za(-a, a)),
    d = g.g.A.arc("a", "0 0,0", a, g.g.A.Za(a, a));
  this.Nl = { width: a, height: a, Lu: c, pq: d };
  c = this.Db;
  a = g.g.A.moveBy(0, c) + g.g.A.arc("a", "0 0,1", c, g.g.A.Za(c, -c));
  c = g.g.A.arc("a", "0 0,1", c, g.g.A.Za(-c, -c));
  this.qw = { wv: a, us: c };
};
b.cu = function () {
  var a = this.$B,
    c = this.aC,
    d = g.g.A.line([g.g.A.Za(6, 3), g.g.A.Za(-12, 6), g.g.A.Za(6, 3)]);
  return { height: a, width: c, path: d };
};
b.gu = function () {
  var a = this.VC,
    c = this.WC,
    d = g.g.A.curve("c", [g.g.A.Za(30, -a), g.g.A.Za(70, -a), g.g.A.Za(c, 0)]);
  return { height: a, width: c, path: d };
};
b.fu = function () {
  function a(h) {
    h = h ? -1 : 1;
    var k = -h,
      l = d / 2,
      m = g.g.A.Za(c, h * l);
    return (
      g.g.A.curve("c", [
        g.g.A.Za(0, h * (l + 2.5)),
        g.g.A.Za(-c, k * (l + 0.5)),
        g.g.A.Za(-c, h * l),
      ]) + g.g.A.curve("s", [g.g.A.Za(c, 2.5 * k), m])
    );
  }
  var c = this.zh,
    d = this.Sr,
    e = a(!0),
    f = a(!1);
  return { width: c, height: d, Ve: f, sn: e };
};
b.du = function () {
  function a(k) {
    return g.g.A.line([
      g.g.A.Za(k * e, d),
      g.g.A.Za(3 * k, 0),
      g.g.A.Za(k * e, -d),
    ]);
  }
  var c = this.zC,
    d = this.yC,
    e = (c - 3) / 2,
    f = a(1),
    h = a(-1);
  return { width: c, height: d, bi: f, Qz: h };
};
g.m.u = {
  NONE: 0,
  ze: 1,
  Zv: 2,
  aw: 4,
  Or: 8,
  Iv: 16,
  ew: 32,
  Xv: 64,
  zg: 128,
  cw: 256,
  Dw: 512,
  jB: 1024,
  Gr: 2048,
  zr: 4096,
  DC: 8192,
  gr: 16384,
  qr: 32768,
  pr: 65536,
  Lr: 131072,
  Kr: 262144,
  iw: 524288,
  Uo: 1048576,
  Vr: 2097152,
  $q: 4194304,
  dw: 8388608,
};
g.m.u.uJ = g.m.u.qr | g.m.u.pr;
g.m.u.ZK = g.m.u.Lr | g.m.u.Kr;
g.m.u.uu = 16777216;
g.m.u.Qb = function () {
  g.m.u.hasOwnProperty(void 0) ||
    ((g.m.u[void 0] = g.m.u.uu), (g.m.u.uu <<= 1));
  return g.m.u[void 0];
};
g.m.u.Ym = function (a) {
  return a.type & g.m.u.ze;
};
g.m.u.jj = function (a) {
  return a.type & g.m.u.Zv;
};
g.m.u.Tk = function (a) {
  return a.type & g.m.u.aw;
};
g.m.u.uf = function (a) {
  return a.type & g.m.u.Or;
};
g.m.u.dM = function (a) {
  return a.type & g.m.u.ew;
};
g.m.u.tf = function (a) {
  return a.type & g.m.u.zg;
};
g.m.u.Xm = function (a) {
  return a.type & g.m.u.Xv;
};
g.m.u.Sh = function (a) {
  return a.type & g.m.u.cw;
};
g.m.u.an = function (a) {
  return a.type & g.m.u.Dw;
};
g.m.u.Vk = function (a) {
  return a.type & g.m.u.Gr;
};
g.m.u.Vh = function (a) {
  return a.type & g.m.u.zr;
};
g.m.u.SF = function (a) {
  return a.type & (g.m.u.Gr | g.m.u.zr);
};
g.m.u.Uh = function (a) {
  return a.type & g.m.u.pr;
};
g.m.u.fM = function (a) {
  return a.type & g.m.u.Kr;
};
g.m.u.$m = function (a) {
  return a.type & g.m.u.qr;
};
g.m.u.gM = function (a) {
  return a.type & g.m.u.Lr;
};
g.m.u.cM = function (a) {
  return a.type & g.m.u.gr;
};
g.m.u.gz = function (a) {
  return a.type & g.m.u.iw;
};
g.m.u.hM = function (a) {
  return a.type & g.m.u.Uo;
};
g.m.u.bM = function (a) {
  return a.type & g.m.u.Iv;
};
g.m.u.bq = function (a) {
  return a.type & g.m.u.Vr;
};
g.m.u.Up = function (a) {
  return a.type & g.m.u.$q;
};
g.m.u.iM = function (a) {
  return a.type & (g.m.u.Vr | g.m.u.$q);
};
g.m.u.eM = function (a) {
  return a.type & g.m.u.dw;
};
g.m.vh = function (a) {
  this.height = this.width = 0;
  this.type = g.m.u.NONE;
  this.Ch = this.Wa = 0;
  this.C = a;
  this.Te = this.C.Po;
};
g.m.ta = function (a, c) {
  g.m.ta.w.constructor.call(this, a);
  this.Fs = c;
  a: switch (((a = this.C), c.type)) {
    case g.Ra:
    case g.bf:
      c = a.Bi;
      break a;
    case g.cf:
    case g.Xa:
      c = a.hk;
      break a;
    default:
      throw Error("Unknown connection type");
  }
  this.shape = c;
  this.type |= g.m.u.jB;
};
g.g.object.X(g.m.ta, g.m.vh);
g.m.Er = function (a, c) {
  g.m.Er.w.constructor.call(this, a, c);
  this.type |= g.m.u.DC;
  this.height = this.shape.height;
  this.width = this.shape.width;
  this.Ke = this.C.Zl;
  this.we = this.width;
};
g.g.object.X(g.m.Er, g.m.ta);
g.m.Hr = function (a, c) {
  g.m.Hr.w.constructor.call(this, a, c);
  this.type |= g.m.u.Gr;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
g.g.object.X(g.m.Hr, g.m.ta);
g.m.Ar = function (a, c) {
  g.m.Ar.w.constructor.call(this, a, c);
  this.type |= g.m.u.zr;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
g.g.object.X(g.m.Ar, g.m.ta);
g.m.Pl = function (a, c) {
  g.m.Pl.w.constructor.call(this, a, c.connection);
  this.type |= g.m.u.zg;
  this.input = c;
  this.align = c.align;
  (this.Oi = c.connection && C(c.connection) ? C(c.connection) : null)
    ? ((a = Ra(this.Oi)), (this.nm = a.width), (this.np = a.height))
    : (this.np = this.nm = 0);
  this.connection = c.connection;
  this.Ke = 0;
};
g.g.object.X(g.m.Pl, g.m.ta);
g.m.sh = function (a, c) {
  g.m.sh.w.constructor.call(this, a, c);
  this.type |= g.m.u.cw;
  this.Oi
    ? ((this.width = this.nm), (this.height = this.np))
    : ((this.height = this.C.BB), (this.width = this.shape.width + this.C.CB));
  this.Ke = this.C.Zl;
  this.om = this.shape.height;
  this.Fh = this.shape.width;
};
g.g.object.X(g.m.sh, g.m.Pl);
g.m.yh = function (a, c) {
  g.m.yh.w.constructor.call(this, a, c);
  this.type |= g.m.u.Dw;
  this.height = this.Oi ? this.np + this.C.XC : this.C.DB;
  this.width = this.C.Po + this.shape.width;
};
g.g.object.X(g.m.yh, g.m.Pl);
g.m.Eo = function (a, c) {
  g.m.Eo.w.constructor.call(this, a, c);
  this.type |= g.m.u.Xv;
  this.height = this.Oi ? this.np - 2 * this.C.Zl : this.shape.height;
  this.width = this.shape.width + this.C.EB;
  this.Ke = this.C.Zl;
  this.om = this.shape.height;
  this.Fh = this.shape.width;
};
g.g.object.X(g.m.Eo, g.m.Pl);
g.m.Hd = function (a, c) {
  g.m.Hd.w.constructor.call(this, a);
  this.icon = c;
  this.isVisible = c.isVisible();
  this.type |= g.m.u.aw;
  a = new g.g.ge(g.Hd.prototype.Wo, g.Hd.prototype.Wo - 2);
  this.height = a.height;
  this.width = a.width;
};
g.g.object.X(g.m.Hd, g.m.vh);
g.m.nr = function (a) {
  g.m.nr.w.constructor.call(this, a);
  this.type |= g.m.u.iw;
  this.height = this.C.fk.height;
  this.width = this.C.fk.width;
};
g.g.object.X(g.m.nr, g.m.vh);
g.m.oa = function (a, c) {
  g.m.oa.w.constructor.call(this, a);
  this.$x = c;
  this.nd = c.Gf && !!c.B && c.B.nd();
  this.SE = c.wy();
  this.type |= g.m.u.ze;
  a = this.$x.Wg();
  this.height = a.height;
  this.width = a.width;
};
g.g.object.X(g.m.oa, g.m.vh);
g.m.lr = function (a) {
  g.m.lr.w.constructor.call(this, a);
  this.type |= g.m.u.Zv;
  this.height = this.C.Dg.height;
  this.width = this.C.Dg.width;
  this.tk = this.height;
};
g.g.object.X(g.m.lr, g.m.vh);
g.m.Zo = function (a, c) {
  g.m.Zo.w.constructor.call(this, a);
  this.type = (c && "left" != c ? g.m.u.Lr : g.m.u.qr) | g.m.u.gr;
  this.width = this.height = this.C.Jf;
};
g.g.object.X(g.m.Zo, g.m.vh);
g.m.Vo = function (a, c) {
  g.m.Vo.w.constructor.call(this, a);
  this.type = (c && "left" != c ? g.m.u.Kr : g.m.u.pr) | g.m.u.gr;
  this.width = this.C.Db;
  this.height = this.C.Db / 2;
};
g.g.object.X(g.m.Vo, g.m.vh);
g.m.dk = function (a, c) {
  g.m.dk.w.constructor.call(this, a);
  this.type = this.type | g.m.u.Or | g.m.u.ew;
  this.width = c;
  this.height = this.C.UC;
};
g.g.object.X(g.m.dk, g.m.vh);
g.m.Di = function (a) {
  this.type = g.m.u.Uo;
  this.elements = [];
  this.Wa =
    this.Sc =
    this.qg =
    this.minWidth =
    this.minHeight =
    this.width =
    this.height =
      0;
  this.Qy = this.Np = this.It = this.Ad = this.$i = !1;
  this.C = a;
  this.Te = this.C.Po;
};
g.m.Di.prototype.measure = function () {
  throw Error("Unexpected attempt to measure a base Row.");
};
function Id(a) {
  for (var c = a.elements.length - 1, d; (d = a.elements[c]); c--)
    if (g.m.u.tf(d)) return d;
  return null;
}
g.m.Di.prototype.nv = function () {
  return !0;
};
g.m.Di.prototype.Yx = function () {
  return !0;
};
function Jd(a) {
  for (var c = a.elements.length - 1, d; (d = a.elements[c]); c--)
    if (g.m.u.uf(d)) return d;
  return null;
}
g.m.pk = function (a) {
  g.m.pk.w.constructor.call(this, a);
  this.type |= g.m.u.Vr;
  this.tk = this.Jg = 0;
  this.BF = !1;
  this.connection = null;
};
g.g.object.X(g.m.pk, g.m.Di);
g.m.pk.prototype.Jt = function (a) {
  var c = a.Yg ? "cap" === a.Yg : g.xa.Dg,
    d = a.$ && C(a.$);
  return !!a.L || c || (d ? q(d) == a : !1);
};
g.m.pk.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      g.m.u.uf(f) ||
        (g.m.u.jj(f) ? (d = Math.max(d, f.tk)) : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.Jg = this.tk = d;
  this.qg = this.width;
};
g.m.pk.prototype.nv = function () {
  return !1;
};
g.m.Uj = function (a) {
  g.m.Uj.w.constructor.call(this, a);
  this.type |= g.m.u.$q;
  this.Ry = !1;
  this.connection = null;
  this.Li = this.ym = 0;
};
g.g.object.X(g.m.Uj, g.m.Di);
g.m.Uj.prototype.Jt = function (a) {
  return !!a.L || !!q(a);
};
g.m.Uj.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      g.m.u.uf(f) ||
        (g.m.u.Vh(f)
          ? (d = Math.max(d, f.height))
          : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.ym = d;
  this.qg = this.width;
};
g.m.Uj.prototype.nv = function () {
  return !1;
};
g.m.Yo = function (a, c, d) {
  g.m.Yo.w.constructor.call(this, a);
  this.type = this.type | g.m.u.Or | g.m.u.Iv;
  this.width = d;
  this.height = c;
  this.ly = !1;
  this.qg = 0;
  this.elements = [new g.m.dk(this.C, d)];
};
g.g.object.X(g.m.Yo, g.m.Di);
g.m.Yo.prototype.measure = function () {};
g.m.ek = function (a) {
  g.m.ek.w.constructor.call(this, a);
  this.type |= g.m.u.dw;
  this.sx = 0;
};
g.g.object.X(g.m.ek, g.m.Di);
g.m.ek.prototype.measure = function () {
  this.width = this.minWidth;
  this.height = this.minHeight;
  for (var a = 0, c = 0, d; (d = this.elements[c]); c++)
    (this.width += d.width),
      g.m.u.tf(d) &&
        (g.m.u.an(d)
          ? (a += d.nm)
          : g.m.u.Xm(d) && 0 != d.nm && (a += d.nm - d.Fh)),
      g.m.u.uf(d) || (this.height = Math.max(this.height, d.height));
  this.sx = a;
  this.qg = this.width + a;
};
g.m.ek.prototype.Yx = function () {
  return !this.$i && !this.Ad;
};
g.m.wh = function (a, c) {
  this.T = c;
  this.hh = a;
  this.C = this.hh.C;
  this.L = c.L ? new g.m.Er(this.C, c.L) : null;
  this.Rt = qc(c) && !c.isCollapsed();
  this.isCollapsed = c.isCollapsed();
  this.Th = c.Th();
  this.G = c.G;
  this.Gj = this.width = this.xl = this.height = 0;
  this.rows = [];
  this.Vy = [];
  this.oc = new g.m.pk(this.C);
  this.Ob = new g.m.Uj(this.C);
  this.Fq = this.we = 0;
};
b = g.m.wh.prototype;
b.measure = function () {
  var a = this.T.Yg ? "cap" === this.T.Yg : g.xa.Dg,
    c = !!this.T.$;
  this.oc.Jt(this.T)
    ? this.oc.elements.push(new g.m.Zo(this.C))
    : this.oc.elements.push(new g.m.Vo(this.C));
  a
    ? ((a = new g.m.lr(this.C)), this.oc.elements.push(a), (this.oc.Jg = a.tk))
    : c &&
      ((this.oc.BF = !0),
      (this.oc.connection = new g.m.Hr(this.C, this.T.$)),
      this.oc.elements.push(this.oc.connection));
  this.T.P.length && this.T.P[0].type == g.Xa && !this.T.isCollapsed()
    ? (this.oc.minHeight = this.C.vd)
    : (this.oc.minHeight = this.C.If);
  this.rows.push(this.oc);
  a = new g.m.ek(this.C);
  var d = Wa(this.T);
  if (d.length) {
    c = 0;
    for (var e; (e = d[c]); c++) {
      var f = new g.m.Hd(this.C, e);
      this.isCollapsed && e.lx ? this.Vy.push(f) : a.elements.push(f);
    }
  }
  e = null;
  for (c = 0; (d = this.T.P[c]); c++)
    if (d.isVisible()) {
      !e ||
        (d.type != g.Xa &&
          e.type != g.Xa &&
          ((d.type != g.Ra && d.type != g.xg) || this.Rt)) ||
        (this.rows.push(a), (a = new g.m.ek(this.C)));
      for (e = 0; (f = d.Na[e]); e++) a.elements.push(new g.m.oa(this.C, f, d));
      this.Uw(d, a);
      e = d;
    }
  this.isCollapsed && ((a.Qy = !0), a.elements.push(new g.m.nr(this.C)));
  (a.elements.length || a.Np) && this.rows.push(a);
  this.Ob.Ry = !!this.T.U;
  this.Ob.minHeight =
    this.T.P.length && this.T.P[this.T.P.length - 1].type == g.Xa
      ? this.C.vd
      : this.C.If - 1;
  this.Ob.Jt(this.T)
    ? this.Ob.elements.push(new g.m.Zo(this.C))
    : this.Ob.elements.push(new g.m.Vo(this.C));
  this.Ob.Ry &&
    ((this.Ob.connection = new g.m.Ar(this.C, this.T.U)),
    this.Ob.elements.push(this.Ob.connection));
  this.rows.push(this.Ob);
  for (a = 0; (c = this.rows[a]); a++) {
    d = c.elements;
    c.elements = [];
    c.nv() && c.elements.push(new g.m.dk(this.C, this.Fp(null, d[0])));
    for (e = 0; e < d.length - 1; e++)
      c.elements.push(d[e]),
        c.elements.push(new g.m.dk(this.C, this.Fp(d[e], d[e + 1])));
    c.elements.push(d[d.length - 1]);
    c.Yx() &&
      c.elements.push(new g.m.dk(this.C, this.Fp(d[d.length - 1], null)));
  }
  for (e = d = c = a = 0; (f = this.rows[e]); e++)
    f.measure(),
      (c = Math.max(c, f.width)),
      f.Ad && (a = Math.max(a, f.width - Id(f).width)),
      (d = Math.max(d, f.qg));
  this.Gj = a;
  this.width = c;
  for (e = 0; (f = this.rows[e]); e++) f.Ad && (f.Gj = this.Gj);
  this.xl = Math.max(c, d);
  this.L &&
    ((this.we = this.L.width),
    (this.width += this.L.width),
    (this.xl += this.L.width));
  for (a = 0; (c = this.rows[a]); a++)
    c.Ad
      ? ((d = Id(c)),
        (e = c.width - d.width),
        (f = this.Gj - this.we),
        (e = f - e) && this.fs(c, e),
        (e = c.width),
        (f = this.width - this.we - (this.C.Nl.pM || 0)),
        (d.width += f - e),
        (c.width += f - e),
        (c.qg = Math.max(c.width, this.Gj + c.sx)))
      : (d = this.width - this.we - c.width) && this.fs(c, d);
  a = this.rows;
  this.rows = [];
  for (c = 0; c < a.length; c++)
    this.rows.push(a[c]),
      c != a.length - 1 && this.rows.push(Kd(this, a[c], a[c + 1]));
  this.ay();
};
b.Uw = function (a, c) {
  this.Rt && a.type == g.Ra
    ? (c.elements.push(new g.m.sh(this.C, a)), (c.It = !0))
    : a.type == g.Xa
    ? (c.elements.push(new g.m.yh(this.C, a)), (c.Ad = !0))
    : a.type == g.Ra
    ? (c.elements.push(new g.m.Eo(this.C, a)), (c.$i = !0))
    : a.type == g.xg && (c.Np = !0);
};
b.Fp = function (a, c) {
  if (a && g.m.u.tf(a) && !c) {
    if (g.m.u.Xm(a)) return this.C.Jf;
    if (g.m.u.Sh(a)) return this.C.vd;
    if (g.m.u.an(a)) return this.C.Jf;
  }
  return a && g.m.u.$m(a) && c && (g.m.u.Vk(c) || g.m.u.Vh(c))
    ? c.Te
    : a && g.m.u.Uh(a) && c && (g.m.u.Vk(c) || g.m.u.Vh(c))
    ? c.Te - this.C.Db
    : this.C.If;
};
b.fs = function (a, c) {
  var d = Jd(a);
  d && ((d.width += c), (a.width += c));
};
function Kd(a, c, d) {
  a = new g.m.Yo(a.C, a.Ey(c, d), a.width - a.we);
  c.Ad && (a.ly = !0);
  return a;
}
b.Ey = function () {
  return this.C.If;
};
b.vy = function (a, c) {
  return g.m.u.uf(c)
    ? a.Sc + c.height / 2
    : g.m.u.Up(a)
    ? ((a = a.Sc + a.height - a.ym),
      g.m.u.Vh(c) ? a + c.height / 2 : a - c.height / 2)
    : g.m.u.bq(a)
    ? g.m.u.jj(c)
      ? a.Jg - c.height / 2
      : a.Jg + c.height / 2
    : a.Sc + a.height / 2;
};
function Ld(a, c) {
  for (var d = c.Wa, e = 0, f; (f = c.elements[e]); e++)
    g.m.u.uf(f) && (f.height = c.height),
      (f.Wa = d),
      (f.Ch = a.vy(c, f)),
      (d += f.width);
}
b.ay = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++)
    (e.Sc = c),
      (e.Wa = this.we),
      (c += e.height),
      (a = Math.max(a, e.qg)),
      Ld(this, e);
  this.xl = a + this.we;
  this.height = c;
  this.Fq = this.oc.Jg;
  this.Ob.Li = c - this.Ob.ym;
};
g.m.hd = function (a, c) {
  this.T = a;
  this.qa = c;
  a.Sa();
  this.Tp = this.Qa = "";
  this.C = c.hh.C;
};
b = g.m.hd.prototype;
b.draw = function () {
  Md(this);
  Nd(this);
  Od(this);
  this.T.wj.cv(this.Qa + "\n" + this.Tp);
  this.qa.G && this.T.wj.mt();
  g.m.$n && this.T.Tu.JE(this.T, this.qa);
  Pd(this);
};
function Pd(a) {
  a.T.height = a.qa.height;
  a.T.width = a.qa.xl;
}
function Md(a) {
  for (var c = 0, d; (d = a.qa.Vy[c]); c++)
    d.icon.Pd.setAttribute("display", "none");
}
function Nd(a) {
  a.dt();
  for (var c = 1; c < a.qa.rows.length - 1; c++) {
    var d = a.qa.rows[c];
    d.Qy ? a.Bm(d) : d.Ad ? a.ct(d) : d.$i ? a.et(d) : a.bt(d);
  }
  a.Ys();
  a.at();
}
b.dt = function () {
  var a = this.qa.oc,
    c = a.elements,
    d = this.qa.oc;
  if (d.connection) {
    var e = d.Wa + d.Te;
    Pc(d.connection.Fs, this.qa.G ? -e : e, 0);
  }
  this.Qa += g.g.A.moveBy(a.Wa, this.qa.Fq);
  for (d = 0; (e = c[d]); d++)
    g.m.u.Uh(e)
      ? (this.Qa += this.C.qw.wv)
      : g.m.u.Vk(e)
      ? (this.Qa += e.shape.bi)
      : g.m.u.jj(e)
      ? (this.Qa += this.C.Dg.path)
      : g.m.u.uf(e) && (this.Qa += g.g.A.ea("h", e.width));
  this.Qa += g.g.A.ea("v", a.height);
};
b.Bm = function (a) {
  this.Qa += this.C.fk.path + g.g.A.ea("v", a.height - this.C.fk.height);
};
b.et = function (a) {
  var c = Id(a);
  this.Sz(a);
  var d = "function" == typeof c.shape.Ve ? c.shape.Ve(c.height) : c.shape.Ve;
  this.Qa += g.g.A.ea("H", c.Wa + c.width) + d + g.g.A.ea("v", a.height - c.om);
};
b.ct = function (a) {
  var c = Id(a);
  this.Qa +=
    g.g.A.ea("H", c.Wa + c.Te + c.shape.width) +
    (c.shape.Qz + g.g.A.ea("h", -(c.Te - this.C.Nl.width)) + this.C.Nl.Lu) +
    g.g.A.ea("v", a.height - 2 * this.C.Nl.height) +
    this.C.Nl.pq +
    g.g.A.ea("H", a.Wa + a.width);
  this.Vz(a);
};
b.bt = function (a) {
  this.Qa += g.g.A.ea("V", a.Sc + a.height);
};
b.Ys = function () {
  var a = this.qa.Ob,
    c = a.elements;
  this.Uz();
  this.Qa += g.g.A.ea("V", a.Li);
  for (var d = c.length - 1, e; (e = c[d]); d--)
    g.m.u.Vh(e)
      ? (this.Qa += e.shape.Qz)
      : g.m.u.$m(e)
      ? (this.Qa += g.g.A.ea("H", a.Wa))
      : g.m.u.Uh(e)
      ? (this.Qa += this.C.qw.us)
      : g.m.u.uf(e) && (this.Qa += g.g.A.ea("h", -1 * e.width));
};
b.at = function () {
  var a = this.qa.L;
  if (this.qa.L) {
    var c = this.qa.we;
    Pc(this.T.L, this.qa.G ? -c : c, this.qa.L.Ke);
  }
  a &&
    ((c = a.Ke + a.height),
    (a = "function" == typeof a.shape.sn ? a.shape.sn(a.height) : a.shape.sn),
    (this.Qa += g.g.A.ea("V", c) + a));
  this.Qa += "z";
};
function Od(a) {
  for (var c = 0, d; (d = a.qa.rows[c]); c++)
    for (var e = 0, f; (f = d.elements[e]); e++)
      if (g.m.u.Sh(f)) a.$s(f);
      else if (g.m.u.Tk(f) || g.m.u.Ym(f)) {
        var h = a;
        if (g.m.u.Ym(f)) var k = f.$x.za();
        else g.m.u.Tk(f) && (k = f.icon.Pd);
        var l = f.Ch - f.height / 2,
          m = f.Wa,
          n = "";
        h.qa.G &&
          ((m = -(m + f.width)), f.SE && ((m += f.width), (n = "scale(-1 1)")));
        g.m.u.Tk(f)
          ? (k.setAttribute("display", "block"),
            k.setAttribute("transform", "translate(" + m + "," + l + ")"),
            La(f.icon))
          : k.setAttribute("transform", "translate(" + m + "," + l + ")" + n);
        h.qa.Th && k.setAttribute("display", "none");
      }
}
b.$s = function (a) {
  var c = a.width,
    d = a.height,
    e = a.Ke,
    f = a.om + e;
  this.Tp +=
    g.g.A.moveTo(a.Wa + a.Fh, a.Ch - d / 2) +
    g.g.A.ea("v", e) +
    a.shape.Ve +
    g.g.A.ea("v", d - f) +
    g.g.A.ea("h", c - a.Fh) +
    g.g.A.ea("v", -d) +
    "z";
  this.Tz(a);
};
b.Tz = function (a) {
  var c = a.Ch - a.height / 2;
  if (a.connection) {
    var d = a.Wa + a.Fh;
    this.qa.G && (d *= -1);
    Pc(a.connection, d, c + a.Ke);
  }
};
b.Vz = function (a) {
  var c = Id(a);
  if (c.connection) {
    var d = a.Wa + a.Gj + c.Te;
    this.qa.G && (d *= -1);
    Pc(c.connection, d, a.Sc);
  }
};
b.Sz = function (a) {
  var c = Id(a);
  if (c.connection) {
    var d = a.Wa + a.width;
    this.qa.G && (d *= -1);
    Pc(c.connection, d, a.Sc);
  }
};
b.Uz = function () {
  var a = this.qa.Ob;
  if (a.connection) {
    a = a.connection;
    var c = a.Wa;
    Pc(a.Fs, this.qa.G ? -c : c, a.Ch - a.height / 2);
  }
};
g.Ba = function (a, c) {
  this.s = a;
  this.Yp = c;
  this.Td = null;
  this.C = a.hh.C;
};
g.Ba.Ao = 5;
g.Ba.Vj = 100;
g.Ba.RJ = 24;
g.Ba.FL = 5;
g.Ba.Xo = 10;
g.Ba.Kv = 2;
g.Ba.QB = 0.75;
g.Ba.zo = "#cc0a0a";
g.Ba.qC = "#4286f4";
g.Ba.oB = "blocklyCursor";
g.Ba.pC = "blocklyMarker";
b = g.Ba.prototype;
b.wm = null;
b.za = function () {
  return this.H;
};
b.Ja = function () {
  this.H = g.g.o.K("g", { class: this.Yp ? g.Ba.pC : g.Ba.oB }, null);
  var a = this.Yp ? g.Ba.qC : g.Ba.zo;
  this.Yc = g.g.o.K("g", { width: g.Ba.Vj, height: g.Ba.Ao }, this.H);
  this.Ck = g.g.o.K(
    "rect",
    {
      x: "0",
      y: "0",
      fill: a,
      width: g.Ba.Vj,
      height: g.Ba.Ao,
      style: "display: none;",
    },
    this.Yc
  );
  this.Dk = g.g.o.K(
    "rect",
    {
      class: "blocklyVerticalCursor",
      x: "0",
      y: "0",
      rx: "10",
      ry: "10",
      style: "display: none;",
      stroke: a,
    },
    this.Yc
  );
  this.xm = g.g.o.K(
    "path",
    {
      width: g.Ba.Vj,
      height: g.Ba.Ao,
      transform: "",
      style: "display: none;",
      fill: a,
    },
    this.Yc
  );
  this.Ti = g.g.o.K(
    "path",
    {
      width: g.Ba.Vj,
      height: g.Ba.Ao,
      transform: "",
      style: "display: none;",
      fill: "none",
      stroke: a,
      "stroke-width": "4",
    },
    this.Yc
  );
  this.Yp ||
    (g.g.o.K(
      "animate",
      {
        attributeType: "XML",
        attributeName: "fill",
        dur: "1s",
        values: g.Ba.zo + ";transparent;transparent;",
        repeatCount: "indefinite",
      },
      this.Ck
    ),
    g.g.o.K(
      "animate",
      {
        attributeType: "XML",
        attributeName: "fill",
        dur: "1s",
        values: g.Ba.zo + ";transparent;transparent;",
        repeatCount: "indefinite",
      },
      this.xm
    ),
    g.g.o.K(
      "animate",
      {
        attributeType: "XML",
        attributeName: "stroke",
        dur: "1s",
        values: g.Ba.zo + ";transparent;transparent;",
        repeatCount: "indefinite",
      },
      this.Ti
    ));
  return this.H;
};
function Qd(a, c) {
  a.Yp
    ? (a.Td && a.Td.In(null), c.In(a.za()))
    : (a.Td && a.Td.Hn(null), c.Hn(a.za()));
  a.Td = c;
}
function Rd(a, c) {
  if (c) {
    var d = c.width,
      e = c.height,
      f = e * g.Ba.QB;
    c.$
      ? ((e = g.Ba.Kv),
        (d =
          g.g.A.moveBy(-1 * e, f) +
          g.g.A.ea("V", -1 * e) +
          g.g.A.ea("H", a.C.Po) +
          a.C.hk.bi +
          g.g.A.ea("H", d + 2 * e) +
          g.g.A.ea("V", f)),
        a.Ti.setAttribute("d", d))
      : c.L
      ? ((d =
          g.g.A.moveBy(d, 0) +
          g.g.A.ea("h", -1 * (d - a.C.Bi.width)) +
          g.g.A.ea("v", a.C.Zl) +
          a.C.Bi.Ve +
          g.g.A.ea("V", e) +
          g.g.A.ea("H", d)),
        a.Ti.setAttribute("d", d))
      : ((e = g.Ba.Kv),
        (d =
          g.g.A.moveBy(-1 * e, f) +
          g.g.A.ea("V", -1 * e) +
          g.g.A.ea("H", d + 2 * e) +
          g.g.A.ea("V", f)),
        a.Ti.setAttribute("d", d));
    a.s.G && a.Em(a.Ti);
    a.wm = a.Ti;
    Qd(a, c);
    Sd(a);
  }
}
function Sd(a) {
  a.Ha();
  a.wm.style.display = "";
}
function Td(a, c, d, e) {
  a.Ck.setAttribute("x", c);
  a.Ck.setAttribute("y", d);
  a.Ck.setAttribute("width", e);
  a.wm = a.Ck;
}
function Ud(a, c, d, e, f) {
  a.Dk.setAttribute("x", c);
  a.Dk.setAttribute("y", d);
  a.Dk.setAttribute("width", e);
  a.Dk.setAttribute("height", f);
  a.wm = a.Dk;
}
b.Em = function (a) {
  a.setAttribute("transform", "scale(-1 1)");
};
b.Ha = function () {
  this.Ck.style.display = "none";
  this.Dk.style.display = "none";
  this.xm.style.display = "none";
  this.Ti.style.display = "none";
};
b.draw = function (a) {
  if (a)
    if (a.Qb() === g.F.types.ae) Rd(this, a.ra);
    else if (a.Qb() === g.F.types.lk) Rd(this, a.ra.B);
    else if (a.ra.type === g.Ra) {
      var c = a.ra;
      a = c.B;
      var d = c.tj.x;
      c = c.tj.y;
      var e = g.g.A.moveTo(0, 0) + this.C.Bi.Ve;
      this.xm.setAttribute("d", e);
      this.xm.setAttribute(
        "transform",
        "translate(" + d + "," + c + ")" + (this.s.G ? " scale(-1 1)" : "")
      );
      this.wm = this.xm;
      Qd(this, a);
      Sd(this);
    } else if (a.ra.type === g.Xa)
      (c = a.ra),
        (a = c.B),
        (d = 0),
        (c = c.tj.y),
        (e = Ra(a).width),
        this.s.G && (d = -e),
        Td(this, d, c, e),
        Qd(this, a),
        Sd(this);
    else if (a.Qb() === g.F.types.Ge) Rd(this, a.ra.B);
    else if (a.Qb() === g.F.types.ze)
      (a = a.ra),
        (d = a.Wg().width),
        (c = a.Wg().height),
        Ud(this, 0, 0, d, c),
        Qd(this, a),
        Sd(this);
    else if (a.Qb() === g.F.types.Ki)
      (d = a.LA),
        (a = d.x),
        (d = d.y),
        this.s.G && (a -= g.Ba.Vj),
        Td(this, a, d, g.Ba.Vj),
        Qd(this, this.s),
        Sd(this);
    else {
      if (a.Qb() === g.F.types.Lf) {
        a = a.ra;
        c = Ra(a);
        d = c.width + g.Ba.Xo;
        c = c.height + g.Ba.Xo;
        var f = (e = (-1 * g.Ba.Xo) / 2),
          h = (-1 * g.Ba.Xo) / 2;
        this.s.G && (f = -(d + e));
        Ud(this, f, h, d, c);
        Qd(this, a);
        Sd(this);
      }
    }
  else this.Ha();
};
b.I = function () {
  this.H && g.g.o.removeNode(this.H);
};
g.m.xh = function () {
  this.C = null;
};
b = g.m.xh.prototype;
b.Z = function () {
  this.C = this.rz();
  this.C.Z();
};
b.rz = function () {
  return new g.m.ui();
};
b.vz = function (a) {
  return new g.m.wh(this, a);
};
b.sz = function (a, c) {
  return new g.m.hd(a, c);
};
b.uz = function (a) {
  return new g.m.Ci(a);
};
b.Ea = function (a) {
  if (g.m.$n && !a.Tu) {
    if (!g.m.zB)
      throw Error("Missing require for Blockly.blockRendering.Debug");
    var c = new g.m.zB();
    a.Tu = c;
  }
  c = this.vz(a);
  c.measure();
  this.sz(a, c).draw();
};
g.ma = {};
g.ma.ui = function () {
  g.ma.ui.w.constructor.call(this);
  this.td = 1;
};
g.g.object.X(g.ma.ui, g.m.ui);
g.ma.$v = function (a) {
  this.qa = a;
  this.Tm = this.la = "";
  this.Vc = this.qa.G;
  a = a.hh;
  this.C = a.C;
  this.qf = a.qf;
  this.Bd = this.qf.ik;
  this.Iu = this.qf.EC;
  this.Rk = this.qf.XB;
  this.xn = this.qf.Bi;
  this.rG = this.qf.hk;
  this.qH = this.qf.Dg;
  this.iz = this.qf.fk;
};
g.ma.$v.prototype.Bm = function (a) {
  this.qa.G &&
    ((this.la += g.g.A.ea("H", a.width - this.Bd)),
    (this.la += this.iz.bi),
    (this.la += g.g.A.ea("v", a.height - this.iz.height - this.Bd)));
};
function Vd(a, c) {
  var d = c.Wa + c.width - a.Bd;
  c.ly && (a.la += g.g.A.ea("H", d));
  a.Vc &&
    ((a.la += g.g.A.ea("H", d)),
    c.height > a.Bd && (a.la += g.g.A.ea("V", c.Sc + c.height - a.Bd)));
}
g.ma.Ci = function (a) {
  this.Ij = a;
  this.Qn = g.g.o.K(
    "path",
    { class: "blocklyPathDark", transform: "translate(1,1)" },
    this.Ij
  );
  this.ql = g.g.o.K("path", { class: "blocklyPath" }, this.Ij);
  this.Sn = g.g.o.K("path", { class: "blocklyPathLight" }, this.Ij);
};
g.ma.Ci.prototype.cv = function (a, c) {
  this.ql.setAttribute("d", a);
  this.Qn.setAttribute("d", a);
  this.Sn.setAttribute("d", c);
};
g.ma.Ci.prototype.mt = function () {
  this.ql.setAttribute("transform", "scale(-1 1)");
  this.Sn.setAttribute("transform", "scale(-1 1)");
  this.Qn.setAttribute("transform", "translate(1,1) scale(-1 1)");
};
g.ma.sh = function (a, c) {
  g.ma.sh.w.constructor.call(this, a, c);
  this.Oi && ((this.width += this.C.td), (this.height += this.C.td));
};
g.g.object.X(g.ma.sh, g.m.sh);
g.ma.yh = function (a, c) {
  g.ma.yh.w.constructor.call(this, a, c);
  this.Oi && (this.height += this.C.td);
};
g.g.object.X(g.ma.yh, g.m.yh);
g.ma.wh = function (a, c) {
  g.ma.wh.w.constructor.call(this, a, c);
};
g.g.object.X(g.ma.wh, g.m.wh);
b = g.ma.wh.prototype;
b.Uw = function (a, c) {
  this.Rt && a.type == g.Ra
    ? (c.elements.push(new g.ma.sh(this.C, a)), (c.It = !0))
    : a.type == g.Xa
    ? (c.elements.push(new g.ma.yh(this.C, a)), (c.Ad = !0))
    : a.type == g.Ra
    ? (c.elements.push(new g.m.Eo(this.C, a)), (c.$i = !0))
    : a.type == g.xg && (c.Np = !0);
};
b.Fp = function (a, c) {
  if (!a)
    return c && g.m.u.Ym(c) && c.nd
      ? this.C.If
      : c && g.m.u.Sh(c)
      ? this.C.mw
      : c && g.m.u.an(c)
      ? this.C.YC
      : this.C.vd;
  if (!g.m.u.tf(a) && !c)
    return g.m.u.Ym(a) && a.nd
      ? this.C.If
      : g.m.u.Tk(a)
      ? 2 * this.C.vd + 1
      : g.m.u.jj(a)
      ? this.C.Jf
      : g.m.u.SF(a)
      ? this.C.vd
      : g.m.u.Uh(a)
      ? this.C.vC
      : g.m.u.gz(a)
      ? this.C.Jf
      : this.C.vd;
  if (g.m.u.tf(a) && !c) {
    if (g.m.u.Xm(a)) return this.C.Jf;
    if (g.m.u.Sh(a)) return this.C.vd;
    if (g.m.u.an(a)) return this.C.Jf;
  }
  if (!g.m.u.tf(a) && c && g.m.u.tf(c)) {
    if (a.nd) {
      if (g.m.u.Sh(c) || g.m.u.Xm(c)) return this.C.SC;
    } else {
      if (g.m.u.Sh(c) || g.m.u.Xm(c)) return this.C.mw;
      if (g.m.u.an(c)) return this.C.vd;
    }
    return this.C.vd - 1;
  }
  if (g.m.u.Tk(a) && c && !g.m.u.tf(c)) return this.C.vd;
  if (g.m.u.Sh(a) && c && !g.m.u.tf(c)) return c.nd ? this.C.If : this.C.vd;
  if (g.m.u.$m(a) && c) {
    if (g.m.u.jj(c)) return this.C.Jf;
    if (g.m.u.Vk(c)) return c.Te;
    if (g.m.u.Vh(c)) return (a = ((this.G ? 1 : -1) * this.C.td) / 2), c.Te + a;
  }
  if (g.m.u.Uh(a) && c) {
    if (g.m.u.Vk(c)) return c.Te - this.C.Db;
    if (g.m.u.Vh(c))
      return (a = ((this.G ? 1 : -1) * this.C.td) / 2), c.Te - this.C.Db + a;
  }
  return (!g.m.u.tf(a) && c && !g.m.u.tf(c) && a.nd == c.nd) ||
    (c && g.m.u.gz(c))
    ? this.C.vd
    : this.C.If;
};
b.fs = function (a, c) {
  a: {
    var d = 0;
    for (var e; (e = a.elements[d]); d++)
      if (g.m.u.uf(e)) {
        d = e;
        break a;
      }
    d = null;
  }
  e = Jd(a);
  if (a.$i || a.Ad) a.qg += c;
  var f = Id(a);
  f
    ? f.align == g.Xq
      ? (e.width += c)
      : f.align == g.Dv
      ? ((d.width += c / 2), (e.width += c / 2))
      : f.align == g.fd && (d.width += c)
    : (e.width += c);
  a.width += c;
};
b.Ey = function (a, c) {
  return g.m.u.bq(a) && g.m.u.Up(c)
    ? this.C.AB
    : g.m.u.bq(a) || g.m.u.Up(c)
    ? this.C.Jf
    : a.$i && c.$i
    ? this.C.vd
    : !a.Ad && c.Ad
    ? this.C.YA
    : (a.Ad && c.Ad) || (!a.Ad && c.Np)
    ? this.C.vd
    : this.C.If;
};
b.vy = function (a, c) {
  if (g.m.u.uf(c)) return a.Sc + c.height / 2;
  if (g.m.u.Up(a))
    return (
      (a = a.Sc + a.height - a.ym),
      g.m.u.Vh(c) ? a + c.height / 2 : a - c.height / 2
    );
  if (g.m.u.bq(a))
    return g.m.u.jj(c) ? a.Jg - c.height / 2 : a.Jg + c.height / 2;
  var d = a.Sc;
  g.m.u.Ym(c) || g.m.u.Tk(c)
    ? ((d += c.height / 2),
      (a.It || a.Ad) && c.height + this.C.Gw <= a.height && (d += this.C.Gw))
    : (d = g.m.u.Sh(c) ? d + c.height / 2 : d + a.height / 2);
  return d;
};
b.ay = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++) {
    e.Sc = c;
    e.Wa = this.we;
    c += e.height;
    a = Math.max(a, e.qg);
    var f = c - this.oc.tk;
    e == this.Ob &&
      f < this.C.xr &&
      ((f = this.C.xr - f), (this.Ob.height += f), (c += f));
    Ld(this, e);
  }
  this.Ob.Li = c - this.Ob.ym;
  this.xl = a + this.we + this.C.td;
  this.width += this.C.td;
  this.height = c + this.C.td;
  this.Fq = this.oc.Jg;
};
g.ma.hd = function (a, c) {
  g.ma.hd.w.constructor.call(this, a, c);
  this.dg = new g.ma.$v(c);
};
g.g.object.X(g.ma.hd, g.m.hd);
b = g.ma.hd.prototype;
b.draw = function () {
  Md(this);
  Nd(this);
  Od(this);
  var a = this.dg;
  this.T.wj.cv(this.Qa + "\n" + this.Tp, a.la + "\n" + a.Tm);
  this.qa.G && this.T.wj.mt();
  g.m.$n && this.T.Tu.JE(this.T, this.qa);
  Pd(this);
};
b.dt = function () {
  var a = this.dg,
    c = this.qa.oc;
  a.la += g.g.A.moveBy(c.Wa, a.qa.Fq);
  for (var d = 0, e; (e = c.elements[d]); d++)
    g.m.u.$m(e)
      ? (a.la += a.qf.Cw)
      : g.m.u.Uh(e)
      ? (a.la += a.Iu.wv(a.Vc))
      : g.m.u.Vk(e)
      ? (a.la += a.rG.bi)
      : g.m.u.jj(e)
      ? (a.la += a.qH.path(a.Vc))
      : g.m.u.uf(e) &&
        0 != e.width &&
        (a.la += g.g.A.ea("H", e.Wa + e.width - a.Bd));
  a.la += g.g.A.ea("H", c.Wa + c.width - a.Bd);
  Vd(this.dg, this.qa.oc);
  g.ma.hd.w.dt.call(this);
};
b.Bm = function (a) {
  this.dg.Bm(a);
  g.ma.hd.w.Bm.call(this, a);
};
b.et = function (a) {
  var c = this.dg,
    d = Id(a);
  if (c.Vc) {
    var e = a.height - d.om;
    c.la +=
      g.g.A.moveTo(d.Wa + d.width - c.Bd, a.Sc) +
      c.xn.Ve(c.Vc) +
      g.g.A.ea("v", e);
  } else c.la += g.g.A.moveTo(d.Wa + d.width, a.Sc) + c.xn.Ve(c.Vc);
  g.ma.hd.w.et.call(this, a);
};
b.ct = function (a) {
  var c = this.dg,
    d = Id(a);
  if (c.Vc) {
    var e = a.height - 2 * c.Rk.height;
    c.la +=
      g.g.A.moveTo(d.Wa, a.Sc) +
      c.Rk.Lu(c.Vc) +
      g.g.A.ea("v", e) +
      c.Rk.pq(c.Vc) +
      g.g.A.lineTo(a.width - d.Wa - c.Rk.width, 0);
  } else
    c.la +=
      g.g.A.moveTo(d.Wa, a.Sc + a.height) +
      c.Rk.pq(c.Vc) +
      g.g.A.lineTo(a.width - d.Wa - c.Rk.width, 0);
  g.ma.hd.w.ct.call(this, a);
};
b.bt = function (a) {
  Vd(this.dg, a);
  g.ma.hd.w.bt.call(this, a);
};
b.Ys = function () {
  var a = this.dg,
    c = this.qa.Ob;
  if (a.Vc) a.la += g.g.A.ea("V", c.Li - a.Bd);
  else {
    var d = a.qa.Ob.elements[0];
    g.m.u.$m(d)
      ? (a.la += g.g.A.moveTo(c.Wa + a.Bd, c.Li - a.Bd))
      : g.m.u.Uh(d) &&
        ((a.la += g.g.A.moveTo(c.Wa, c.Li)), (a.la += a.Iu.us()));
  }
  g.ma.hd.w.Ys.call(this);
};
b.at = function () {
  var a = this.dg,
    c = a.qa.L;
  c &&
    ((c = c.Ke + c.height),
    a.Vc
      ? (a.la += g.g.A.moveTo(a.qa.we, c))
      : ((a.la += g.g.A.moveTo(a.qa.we + a.Bd, a.qa.Ob.Li - a.Bd)),
        (a.la += g.g.A.ea("V", c))),
    (a.la += a.xn.sn(a.Vc)));
  a.Vc ||
    ((c = a.qa.oc),
    (a.la = g.m.u.Uh(c.elements[0])
      ? a.la + g.g.A.ea("V", a.Iu.height)
      : a.la + g.g.A.ea("V", c.Jg + a.Bd)));
  g.ma.hd.w.at.call(this);
};
b.$s = function (a) {
  var c = this.dg,
    d = c.Bd,
    e = a.Wa + a.Fh,
    f = a.Ch - a.height / 2,
    h = a.width - a.Fh,
    k = f + d;
  if (c.Vc) {
    f = a.Ke - d;
    var l = a.height - (a.Ke + a.om) + d;
    c.Tm +=
      g.g.A.moveTo(e - d, k) +
      g.g.A.ea("v", f) +
      c.xn.Ve(c.Vc) +
      g.g.A.ea("v", l) +
      g.g.A.ea("h", h);
  } else
    c.Tm +=
      g.g.A.moveTo(a.Wa + a.width + d, k) +
      g.g.A.ea("v", a.height) +
      g.g.A.ea("h", -h) +
      g.g.A.moveTo(e, f + a.Ke) +
      c.xn.Ve(c.Vc);
  g.ma.hd.w.$s.call(this, a);
};
b.Tz = function (a) {
  var c = a.Ch - a.height / 2;
  if (a.connection) {
    var d = a.Wa + a.Fh + this.C.td;
    this.qa.G && (d *= -1);
    Pc(a.connection, d, c + a.Ke + this.C.td);
  }
};
b.Vz = function (a) {
  var c = Id(a);
  if (c.connection) {
    var d = a.Wa + a.Gj + c.Te;
    d = this.qa.G ? -1 * d : d + this.C.td;
    Pc(c.connection, d, a.Sc + this.C.td);
  }
};
b.Sz = function (a) {
  var c = Id(a);
  if (c.connection) {
    var d = a.Wa + a.width + this.C.td;
    this.qa.G && (d *= -1);
    Pc(c.connection, d, a.Sc);
  }
};
b.Uz = function () {
  var a = this.qa.Ob;
  if (a.connection) {
    a = a.connection;
    var c = a.Wa;
    Pc(
      a.Fs,
      (this.qa.G ? -c : c) + this.C.td / 2,
      a.Ch - a.height / 2 + this.C.td
    );
  }
};
g.ma.Ll = function (a) {
  this.Bk = a;
  this.ik = 0.5;
  this.Cw = g.g.A.moveBy(this.ik, this.ik);
  this.XB = Wd(this);
  this.EC = Xd(this);
  this.Bi = this.fu();
  this.hk = this.du();
  this.fk = this.cu();
  this.Dg = this.gu();
};
function Wd(a) {
  var c = a.Bk.Db;
  a = a.ik;
  var d = (1 - Math.SQRT1_2) * (c + a) - a,
    e =
      g.g.A.moveBy(d, d) + g.g.A.arc("a", "0 0,0", c, g.g.A.Za(-d - a, c - d)),
    f = g.g.A.arc("a", "0 0,0", c + a, g.g.A.Za(c + a, c + a)),
    h =
      g.g.A.moveBy(d, -d) +
      g.g.A.arc("a", "0 0,0", c + a, g.g.A.Za(c - d, d + a));
  return {
    width: c + a,
    height: c,
    Lu: function (k) {
      return k ? e : "";
    },
    pq: function (k) {
      return k ? f : h;
    },
  };
}
function Xd(a) {
  var c = a.Bk.Db;
  a = a.ik;
  var d = (1 - Math.SQRT1_2) * (c - a) + a,
    e =
      g.g.A.moveBy(d, d) +
      g.g.A.arc("a", "0 0,1", c - a, g.g.A.Za(c - d, -d + a)),
    f =
      g.g.A.moveBy(a, c) + g.g.A.arc("a", "0 0,1", c - a, g.g.A.Za(c, -c + a)),
    h = -d,
    k =
      g.g.A.moveBy(d, h) +
      g.g.A.arc("a", "0 0,1", c - a, g.g.A.Za(-d + a, -h - c));
  return {
    height: c,
    wv: function (l) {
      return l ? e : f;
    },
    us: function () {
      return k;
    },
  };
}
g.ma.Ll.prototype.fu = function () {
  var a = this.Bk.zh,
    c = this.Bk.Sr,
    d = g.g.A.moveBy(-2, -c + 3.4) + g.g.A.lineTo(-0.45 * a, -2.1),
    e =
      g.g.A.ea("v", 2.5) +
      g.g.A.moveBy(0.97 * -a, 2.5) +
      g.g.A.curve("q", [g.g.A.Za(0.05 * -a, 10), g.g.A.Za(0.3 * a, 9.5)]) +
      g.g.A.moveBy(0.67 * a, -1.9) +
      g.g.A.ea("v", 2.5),
    f =
      g.g.A.ea("v", -1.5) +
      g.g.A.moveBy(-0.92 * a, -0.5) +
      g.g.A.curve("q", [g.g.A.Za(-0.19 * a, -5.5), g.g.A.Za(0, -11)]) +
      g.g.A.moveBy(0.92 * a, 1),
    h = g.g.A.moveBy(-5, c - 0.7) + g.g.A.lineTo(0.46 * a, -2.1);
  return {
    width: a,
    height: c,
    sn: function (k) {
      return k ? d : f;
    },
    Ve: function (k) {
      return k ? e : h;
    },
  };
};
g.ma.Ll.prototype.du = function () {
  return { bi: g.g.A.ea("h", this.ik) + this.Bk.hk.bi };
};
g.ma.Ll.prototype.cu = function () {
  return {
    bi:
      g.g.A.lineTo(5.1, 2.6) +
      g.g.A.moveBy(-10.2, 6.8) +
      g.g.A.lineTo(5.1, 2.6),
  };
};
g.ma.Ll.prototype.gu = function () {
  var a = this.Bk.Dg.height,
    c =
      g.g.A.moveBy(25, -8.7) +
      g.g.A.curve("c", [
        g.g.A.Za(29.7, -6.2),
        g.g.A.Za(57.2, -0.5),
        g.g.A.Za(75, 8.7),
      ]),
    d =
      g.g.A.curve("c", [
        g.g.A.Za(17.8, -9.2),
        g.g.A.Za(45.3, -14.9),
        g.g.A.Za(75, -8.7),
      ]) + g.g.A.moveTo(100.5, a + 0.5);
  return {
    path: function (e) {
      return e ? c : d;
    },
  };
};
g.ma.xh = function () {
  g.ma.xh.w.constructor.call(this);
  this.qf = null;
};
g.g.object.X(g.ma.xh, g.m.xh);
b = g.ma.xh.prototype;
b.Z = function () {
  g.ma.xh.w.Z.call(this);
  this.qf = new g.ma.Ll(this.C);
};
b.rz = function () {
  return new g.ma.ui();
};
b.vz = function (a) {
  return new g.ma.wh(this, a);
};
b.sz = function (a, c) {
  return new g.ma.hd(a, c);
};
b.uz = function (a) {
  return new g.ma.Ci(a);
};
g.m.register("geras", g.ma.xh);
g.h.ADD_COMMENT = "Tambahkan Komentar";
g.h.CANNOT_DELETE_VARIABLE_PROCEDURE =
  "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
g.h.CHANGE_VALUE_TITLE = "Ubah nilai:";
g.h.CLEAN_UP = "Bersihkan Blok";
g.h.COLLAPSED_WARNINGS_WARNING = "Collapsed blocks contain warnings.";
g.h.COLLAPSE_ALL = "Ciutkan Blok";
g.h.COLLAPSE_BLOCK = "Ciutkan Blok";
g.h.COLOUR_BLEND_COLOUR1 = "warna 1";
g.h.COLOUR_BLEND_COLOUR2 = "warna 2";
g.h.COLOUR_BLEND_HELPURL = "http://meyerweb.com/eric/tools/color-blend/";
g.h.COLOUR_BLEND_RATIO = "rasio";
g.h.COLOUR_BLEND_TITLE = "campur";
g.h.COLOUR_BLEND_TOOLTIP =
  "Campur dua warna secara bersamaan dengan perbandingan (0.0 - 1.0).";
g.h.COLOUR_PICKER_HELPURL = "https://en.wikipedia.org/wiki/Color";
g.h.COLOUR_PICKER_TOOLTIP = "Pilih warna dari daftar warna.";
g.h.COLOUR_RANDOM_HELPURL = "http://randomcolour.com";
g.h.COLOUR_RANDOM_TITLE = "Warna acak";
g.h.COLOUR_RANDOM_TOOLTIP = "Pilih warna secara acak.";
g.h.COLOUR_RGB_BLUE = "biru";
g.h.COLOUR_RGB_GREEN = "hijau";
g.h.COLOUR_RGB_HELPURL = "http://www.december.com/html/spec/colorper.html";
g.h.COLOUR_RGB_RED = "merah";
g.h.COLOUR_RGB_TITLE = "Dengan warna";
g.h.COLOUR_RGB_TOOLTIP =
  "Buatlah warna dengan jumlah yang ditentukan dari merah, hijau dan biru. Semua nilai harus antarai 0 sampai 100.";
g.h.CONTROLS_FLOW_STATEMENTS_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
g.h.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "keluar dari perulangan";
g.h.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE =
  "lanjutkan dengan langkah perulangan berikutnya";
g.h.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Keluar dari perulangan.";
g.h.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE =
  "Abaikan sisa dari perulangan ini, dan lanjutkan dengan langkah berikutnya.";
g.h.CONTROLS_FLOW_STATEMENTS_WARNING =
  "Peringatan: Blok ini hanya dapat digunakan dalam perulangan.";
g.h.CONTROLS_FOREACH_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#for-each";
g.h.CONTROLS_FOREACH_TITLE = "untuk setiap item %1 di dalam list %2";
g.h.CONTROLS_FOREACH_TOOLTIP =
  "Untuk tiap-tiap item di dalam list, tetapkan variabel '%1' ke dalam item, selanjutnya kerjakan beberapa statement.";
g.h.CONTROLS_FOR_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#count-with";
g.h.CONTROLS_FOR_TITLE =
  "Cacah dengan %1 dari %2 ke %3 dengan step / penambahan %4";
g.h.CONTROLS_FOR_TOOLTIP =
  'Menggunakan variabel "%1" dengan mengambil nilai dari batas awal hingga ke batas akhir, dengan interval tertentu, dan mengerjakan block tertentu.';
g.h.CONTROLS_IF_ELSEIF_TOOLTIP = "Tambahkan prasyarat ke dalam blok IF.";
g.h.CONTROLS_IF_ELSE_TOOLTIP =
  "Terakhir, tambahkan kondisi tangkap-semua kedalam blok IF.";
g.h.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
g.h.CONTROLS_IF_IF_TOOLTIP =
  "Tambahkan, hapus, atau susun kembali bagian untuk mengkonfigurasi blok IF ini.";
g.h.CONTROLS_IF_MSG_ELSE = "lainnya";
g.h.CONTROLS_IF_MSG_ELSEIF = "atau jika";
g.h.CONTROLS_IF_MSG_IF = "jika";
g.h.CONTROLS_IF_TOOLTIP_1 =
  "Jika nilainya benar, maka lakukan beberapa perintah.";
g.h.CONTROLS_IF_TOOLTIP_2 =
  "Jika nilainya benar, maka kerjakan perintah blok pertama. Jika tidak, kerjakan perintah blok kedua.";
g.h.CONTROLS_IF_TOOLTIP_3 =
  "Jika nilai pertama benar, maka kerjakan perintah blok pertama. Sebaliknya, jika nilai kedua benar, kerjakan perintah blok kedua.";
g.h.CONTROLS_IF_TOOLTIP_4 =
  "Jika nilai pertama benar, maka kerjakan perintah blok pertama. Sebaliknya, jika nilai kedua benar, kerjakan perintah blok kedua. Jika dua-duanya tidak benar, kerjakan perintah blok terakhir.";
g.h.CONTROLS_REPEAT_HELPURL = "https://en.wikipedia.org/wiki/For_loop";
g.h.CONTROLS_REPEAT_INPUT_DO = "kerjakan";
g.h.CONTROLS_REPEAT_TITLE = "ulangi %1 kali";
g.h.CONTROLS_REPEAT_TOOLTIP = "Lakukan beberapa perintah beberapa kali.";
g.h.CONTROLS_WHILEUNTIL_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#repeat";
g.h.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "ulangi sampai";
g.h.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "ulangi jika";
g.h.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL =
  "Selagi nilainya salah, maka lakukan beberapa perintah.";
g.h.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE =
  "Selagi nilainya benar, maka lakukan beberapa perintah.";
g.h.DELETE_ALL_BLOCKS = "Hapus semua %1 blok?";
g.h.DELETE_BLOCK = "Hapus Blok";
g.h.DELETE_VARIABLE = "Hapus variabel '%1'";
g.h.DELETE_VARIABLE_CONFIRMATION =
  "Hapus %1 yang digunakan pada variabel '%2'?";
g.h.DELETE_X_BLOCKS = "Hapus %1 Blok";
g.h.DISABLE_BLOCK = "Nonaktifkan Blok";
g.h.DUPLICATE_BLOCK = "Duplikat";
g.h.DUPLICATE_COMMENT = "Duplicate Comment";
g.h.ENABLE_BLOCK = "Aktifkan Blok";
g.h.EXPAND_ALL = "Kembangkan Blok";
g.h.EXPAND_BLOCK = "Kembangkan Blok";
g.h.EXTERNAL_INPUTS = "Input Eksternal";
g.h.HELP = "Bantuan";
g.h.INLINE_INPUTS = "Input Inline";
g.h.IOS_CANCEL = "Cancel";
g.h.IOS_ERROR = "Error";
g.h.IOS_OK = "OK";
g.h.IOS_PROCEDURES_ADD_INPUT = "+ Add Input";
g.h.IOS_PROCEDURES_ALLOW_STATEMENTS = "Allow statements";
g.h.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR =
  "This function has duplicate inputs.";
g.h.IOS_PROCEDURES_INPUTS = "INPUTS";
g.h.IOS_VARIABLES_ADD_BUTTON = "Add";
g.h.IOS_VARIABLES_ADD_VARIABLE = "+ Add Variable";
g.h.IOS_VARIABLES_DELETE_BUTTON = "Delete";
g.h.IOS_VARIABLES_EMPTY_NAME_ERROR = "You can't use an empty variable name.";
g.h.IOS_VARIABLES_RENAME_BUTTON = "Rename";
g.h.IOS_VARIABLES_VARIABLE_NAME = "Variable name";
g.h.LISTS_CREATE_EMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-empty-list";
g.h.LISTS_CREATE_EMPTY_TITLE = "buat list kosong";
g.h.LISTS_CREATE_EMPTY_TOOLTIP =
  "Kembalikan list, dengan panjang 0, tidak berisi data";
g.h.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "list";
g.h.LISTS_CREATE_WITH_CONTAINER_TOOLTIP =
  "Tambahkan, hapus, atau susun ulang bagian untuk mengkonfigurasi blok list ini.";
g.h.LISTS_CREATE_WITH_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-list-with";
g.h.LISTS_CREATE_WITH_INPUT_WITH = "buat list dengan";
g.h.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Tambahkan sebuah item ke list.";
g.h.LISTS_CREATE_WITH_TOOLTIP = "Buat sebuah list dengan sejumlah item.";
g.h.LISTS_GET_INDEX_FIRST = "pertama";
g.h.LISTS_GET_INDEX_FROM_END = "# dari akhir";
g.h.LISTS_GET_INDEX_FROM_START = "#";
g.h.LISTS_GET_INDEX_GET = "dapatkan";
g.h.LISTS_GET_INDEX_GET_REMOVE = "dapatkan dan hapus";
g.h.LISTS_GET_INDEX_LAST = "terakhir";
g.h.LISTS_GET_INDEX_RANDOM = "acak";
g.h.LISTS_GET_INDEX_REMOVE = "Hapus";
g.h.LISTS_GET_INDEX_TAIL = "";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Kembalikan item pertama dalam list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_FROM =
  "Kembalikan item di posisi tertentu dalam list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Kembalikan item terakhir dalam list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Kembalikan item acak dalam list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST =
  "Hapus dan kembalikan item pertama dalam list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM =
  "Hapus dan kembalikan item di posisi tertentu dalam list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST =
  "Hapus dan kembalikan item terakhir dalam list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM =
  "Hapus dan kembalikan item acak dalam list.";
g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Hapus item pertama dalam list.";
g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM =
  "Hapus item di posisi tertentu dalam list.";
g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Hapus item terakhir dalam list.";
g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM =
  "Hapus sebuah item acak dalam list.";
g.h.LISTS_GET_SUBLIST_END_FROM_END = "ke # dari akhir";
g.h.LISTS_GET_SUBLIST_END_FROM_START = "ke #";
g.h.LISTS_GET_SUBLIST_END_LAST = "ke yang paling akhir";
g.h.LISTS_GET_SUBLIST_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
g.h.LISTS_GET_SUBLIST_START_FIRST = "dapatkan sub-list dari pertama";
g.h.LISTS_GET_SUBLIST_START_FROM_END =
  "dapatkan sub-list dari nomor # dari akhir";
g.h.LISTS_GET_SUBLIST_START_FROM_START = "dapatkan sub-list dari #";
g.h.LISTS_GET_SUBLIST_TAIL = "";
g.h.LISTS_GET_SUBLIST_TOOLTIP = "Buat salinan bagian tertentu dari list.";
g.h.LISTS_INDEX_FROM_END_TOOLTIP = "%1 adalah item terakhir.";
g.h.LISTS_INDEX_FROM_START_TOOLTIP = "%1 adalah item pertama.";
g.h.LISTS_INDEX_OF_FIRST = "cari kejadian pertama item";
g.h.LISTS_INDEX_OF_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
g.h.LISTS_INDEX_OF_LAST = "cari kejadian terakhir item";
g.h.LISTS_INDEX_OF_TOOLTIP =
  "Kembalikan indeks dari item pertama/terakhir kali muncul dalam list. Kembalikan %1 jika item tidak ditemukan.";
g.h.LISTS_INLIST = "dalam list";
g.h.LISTS_ISEMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#is-empty";
g.h.LISTS_ISEMPTY_TITLE = "%1 kosong";
g.h.LISTS_ISEMPTY_TOOLTIP = "Kembalikan benar jika list kosong.";
g.h.LISTS_LENGTH_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#length-of";
g.h.LISTS_LENGTH_TITLE = "panjang dari %1";
g.h.LISTS_LENGTH_TOOLTIP = "Kembalikan panjang list.";
g.h.LISTS_REPEAT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-list-with";
g.h.LISTS_REPEAT_TITLE = "buat list dengan item %1 diulang %2 kali";
g.h.LISTS_REPEAT_TOOLTIP =
  "Buat sebuah list yang terdiri dari nilai yang diberikan diulang sebanyak jumlah yang ditentukan.";
g.h.LISTS_REVERSE_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
g.h.LISTS_REVERSE_MESSAGE0 = "reverse %1";
g.h.LISTS_REVERSE_TOOLTIP = "Reverse a copy of a list.";
g.h.LISTS_SET_INDEX_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#in-list--set";
g.h.LISTS_SET_INDEX_INPUT_TO = "sebagai";
g.h.LISTS_SET_INDEX_INSERT = "sisipkan di";
g.h.LISTS_SET_INDEX_SET = "tetapkan";
g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST =
  "Sisipkan item di bagian awal dari list.";
g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM =
  "Sisipkan item ke dalam posisi yang telah ditentukan di dalam list.";
g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST =
  "Tambahkan item ke bagian akhir list.";
g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM =
  "Sisipkan item secara acak ke dalam list.";
g.h.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Tetapkan item pertama di dalam list.";
g.h.LISTS_SET_INDEX_TOOLTIP_SET_FROM =
  "Tetapkan item ke dalam posisi yang telah ditentukan di dalam list.";
g.h.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Menetapkan item terakhir dalam list.";
g.h.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM =
  "Tetapkan secara acak sebuah item dalam list.";
g.h.LISTS_SORT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
g.h.LISTS_SORT_ORDER_ASCENDING = "menaik";
g.h.LISTS_SORT_ORDER_DESCENDING = "menurun";
g.h.LISTS_SORT_TITLE = "urutkan %1 %2 %3";
g.h.LISTS_SORT_TOOLTIP = "Urutkan salinan dari daftar";
g.h.LISTS_SORT_TYPE_IGNORECASE = "sesuai abjad, abaikan kasus";
g.h.LISTS_SORT_TYPE_NUMERIC = "sesuai nomor";
g.h.LISTS_SORT_TYPE_TEXT = "sesuai abjad";
g.h.LISTS_SPLIT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
g.h.LISTS_SPLIT_LIST_FROM_TEXT = "buat list dari teks";
g.h.LISTS_SPLIT_TEXT_FROM_LIST = "buat teks dari list";
g.h.LISTS_SPLIT_TOOLTIP_JOIN =
  "Gabung daftar teks menjadi satu teks, yang dipisahkan oleh pembatas.";
g.h.LISTS_SPLIT_TOOLTIP_SPLIT =
  "Membagi teks ke dalam daftar teks, pisahkan pada setiap pembatas.";
g.h.LISTS_SPLIT_WITH_DELIMITER = "dengan pembatas";
g.h.LOGIC_BOOLEAN_FALSE = "salah";
g.h.LOGIC_BOOLEAN_HELPURL =
  "https://github.com/google/blockly/wiki/Logic#values";
g.h.LOGIC_BOOLEAN_TOOLTIP = "Kembalikan benar atau salah.";
g.h.LOGIC_BOOLEAN_TRUE = "benar";
g.h.LOGIC_COMPARE_HELPURL =
  "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
g.h.LOGIC_COMPARE_TOOLTIP_EQ =
  "Kembalikan benar jika kedua input sama satu dengan lainnya.";
g.h.LOGIC_COMPARE_TOOLTIP_GT =
  "Kembalikan benar jika input pertama lebih besar dari input kedua.";
g.h.LOGIC_COMPARE_TOOLTIP_GTE =
  "Kembalikan benar jika input pertama lebih besar dari atau sama dengan input kedua.";
g.h.LOGIC_COMPARE_TOOLTIP_LT =
  "Kembalikan benar jika input pertama lebih kecil dari input kedua.";
g.h.LOGIC_COMPARE_TOOLTIP_LTE =
  "Kembalikan benar jika input pertama lebih kecil atau sama dengan input kedua .";
g.h.LOGIC_COMPARE_TOOLTIP_NEQ =
  "Kembalikan benar jika kedua input tidak sama satu dengan lainnya.";
g.h.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
g.h.LOGIC_NEGATE_TITLE = "bukan (not) %1";
g.h.LOGIC_NEGATE_TOOLTIP =
  "Kembalikan benar jika input salah. Kembalikan salah jika input benar.";
g.h.LOGIC_NULL = "null";
g.h.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
g.h.LOGIC_NULL_TOOLTIP = "Kembalikan null.";
g.h.LOGIC_OPERATION_AND = "dan";
g.h.LOGIC_OPERATION_HELPURL =
  "https://github.com/google/blockly/wiki/Logic#logical-operations";
g.h.LOGIC_OPERATION_OR = "atau";
g.h.LOGIC_OPERATION_TOOLTIP_AND =
  "Kembalikan benar jika kedua input adalah benar.";
g.h.LOGIC_OPERATION_TOOLTIP_OR =
  "Kembalikan benar jika minimal satu input nilainya benar.";
g.h.LOGIC_TERNARY_CONDITION = "test";
g.h.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
g.h.LOGIC_TERNARY_IF_FALSE = "jika salah";
g.h.LOGIC_TERNARY_IF_TRUE = "jika benar";
g.h.LOGIC_TERNARY_TOOLTIP =
  "Periksa kondisi di 'test'. Jika kondisi benar, kembalikan nilai 'if true'; jika sebaliknya kembalikan nilai 'if false'.";
g.h.MATH_ADDITION_SYMBOL = "+";
g.h.MATH_ARITHMETIC_HELPURL = "https://id.wikipedia.org/wiki/Aritmetika";
g.h.MATH_ARITHMETIC_TOOLTIP_ADD = "Kembalikan jumlah dari kedua angka.";
g.h.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Kembalikan hasil bagi dari kedua angka.";
g.h.MATH_ARITHMETIC_TOOLTIP_MINUS = "Kembalikan selisih dari kedua angka.";
g.h.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Kembalikan perkalian dari kedua angka.";
g.h.MATH_ARITHMETIC_TOOLTIP_POWER =
  "Kembalikan angka pertama pangkat angka kedua.";
g.h.MATH_ATAN2_HELPURL = "https://en.wikipedia.org/wiki/Atan2";
g.h.MATH_ATAN2_TITLE = "atan2 of X:%1 Y:%2";
g.h.MATH_ATAN2_TOOLTIP =
  "Return the arctangent of point (X, Y) in degrees from -180 to 180.";
g.h.MATH_CHANGE_HELPURL =
  "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
g.h.MATH_CHANGE_TITLE = "ubah %1 oleh %2";
g.h.MATH_CHANGE_TOOLTIP = "Tambahkan angka kedalam variabel '%1'.";
g.h.MATH_CONSTANT_HELPURL =
  "https://en.wikipedia.org/wiki/Mathematical_constant";
g.h.MATH_CONSTANT_TOOLTIP =
  "Kembalikan salah satu konstanta: \u03c0 (3,141\u2026), e (2,718\u2026), \u03c6 (1,618\u2026), akar(2) (1,414\u2026), akar(\u00bd) (0.707\u2026), atau \u221e (tak terhingga).";
g.h.MATH_CONSTRAIN_HELPURL =
  "https://en.wikipedia.org/wiki/Clamping_(graphics)";
g.h.MATH_CONSTRAIN_TITLE = "Batasi %1 rendah %2 tinggi %3";
g.h.MATH_CONSTRAIN_TOOLTIP =
  "Batasi angka antara batas yang ditentukan (inklusif).";
g.h.MATH_DIVISION_SYMBOL = "\u00f7";
g.h.MATH_IS_DIVISIBLE_BY = "dapat dibagi oleh";
g.h.MATH_IS_EVEN = "adalah bilangan genap";
g.h.MATH_IS_NEGATIVE = "adalah bilangan negatif";
g.h.MATH_IS_ODD = "adalah bilangan ganjil";
g.h.MATH_IS_POSITIVE = "adalah bilangan positif";
g.h.MATH_IS_PRIME = "adalah bilangan pokok";
g.h.MATH_IS_TOOLTIP =
  "Periksa apakah angka adalah bilangan genap, bilangan ganjil, bilangan pokok, bilangan bulat, bilangan positif, bilangan negatif, atau apakan bisa dibagi oleh angka tertentu. Kembalikan benar atau salah.";
g.h.MATH_IS_WHOLE = "adalah bilangan bulat";
g.h.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
g.h.MATH_MODULO_TITLE = "sisa dari %1 \u00f7 %2";
g.h.MATH_MODULO_TOOLTIP = "Kembalikan sisa dari pembagian ke dua angka.";
g.h.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
g.h.MATH_NUMBER_HELPURL = "https://en.wikipedia.org/wiki/Number";
g.h.MATH_NUMBER_TOOLTIP = "Suatu angka.";
g.h.MATH_ONLIST_HELPURL = "";
g.h.MATH_ONLIST_OPERATOR_AVERAGE = "rata-rata dari list";
g.h.MATH_ONLIST_OPERATOR_MAX = "maksimum dari list";
g.h.MATH_ONLIST_OPERATOR_MEDIAN = "median dari list";
g.h.MATH_ONLIST_OPERATOR_MIN = "minimum dari list";
g.h.MATH_ONLIST_OPERATOR_MODE = "mode-mode dari list";
g.h.MATH_ONLIST_OPERATOR_RANDOM = "item acak dari list";
g.h.MATH_ONLIST_OPERATOR_STD_DEV = "deviasi standar dari list";
g.h.MATH_ONLIST_OPERATOR_SUM = "jumlah dari list";
g.h.MATH_ONLIST_TOOLTIP_AVERAGE =
  "Kembalikan rata-rata (mean aritmetik) dari nilai numerik dari list.";
g.h.MATH_ONLIST_TOOLTIP_MAX = "Kembalikan angka terbesar dari list.";
g.h.MATH_ONLIST_TOOLTIP_MEDIAN = "Kembalikan median dari list.";
g.h.MATH_ONLIST_TOOLTIP_MIN = "Kembalikan angka terkecil dari list.";
g.h.MATH_ONLIST_TOOLTIP_MODE =
  "Kembalikan list berisi item yang paling umum dari dalam list.";
g.h.MATH_ONLIST_TOOLTIP_RANDOM = "Kembalikan elemen acak dari list.";
g.h.MATH_ONLIST_TOOLTIP_STD_DEV = "Kembalikan standard deviasi dari list.";
g.h.MATH_ONLIST_TOOLTIP_SUM =
  "Kembalikan jumlah dari seluruh bilangan dari list.";
g.h.MATH_POWER_SYMBOL = "^";
g.h.MATH_RANDOM_FLOAT_HELPURL =
  "https://en.wikipedia.org/wiki/Random_number_generation";
g.h.MATH_RANDOM_FLOAT_TITLE_RANDOM = "nilai pecahan acak";
g.h.MATH_RANDOM_FLOAT_TOOLTIP =
  "Kembalikan nilai pecahan acak antara 0.0 (inklusif) dan 1.0 (eksklusif).";
g.h.MATH_RANDOM_INT_HELPURL =
  "https://en.wikipedia.org/wiki/Random_number_generation";
g.h.MATH_RANDOM_INT_TITLE = "acak bulat dari %1 sampai %2";
g.h.MATH_RANDOM_INT_TOOLTIP =
  "Kembalikan bilangan acak antara dua batas yang ditentukan, inklusif.";
g.h.MATH_ROUND_HELPURL = "https://en.wikipedia.org/wiki/Rounding";
g.h.MATH_ROUND_OPERATOR_ROUND = "membulatkan";
g.h.MATH_ROUND_OPERATOR_ROUNDDOWN = "membulatkan kebawah";
g.h.MATH_ROUND_OPERATOR_ROUNDUP = "membulatkan keatas";
g.h.MATH_ROUND_TOOLTIP = "Bulatkan suatu bilangan naik atau turun.";
g.h.MATH_SINGLE_HELPURL = "https://en.wikipedia.org/wiki/Square_root";
g.h.MATH_SINGLE_OP_ABSOLUTE = "mutlak";
g.h.MATH_SINGLE_OP_ROOT = "akar";
g.h.MATH_SINGLE_TOOLTIP_ABS = "Kembalikan nilai absolut angka.";
g.h.MATH_SINGLE_TOOLTIP_EXP = "Kembalikan 10 pangkat angka.";
g.h.MATH_SINGLE_TOOLTIP_LN = "Kembalikan logaritma natural dari angka.";
g.h.MATH_SINGLE_TOOLTIP_LOG10 = "Kembalikan dasar logaritma 10 dari angka.";
g.h.MATH_SINGLE_TOOLTIP_NEG = "Kembalikan penyangkalan terhadap angka.";
g.h.MATH_SINGLE_TOOLTIP_POW10 = "Kembalikan 10 pangkat angka.";
g.h.MATH_SINGLE_TOOLTIP_ROOT = "Kembalikan akar dari angka.";
g.h.MATH_SUBTRACTION_SYMBOL = "-";
g.h.MATH_TRIG_ACOS = "acos";
g.h.MATH_TRIG_ASIN = "asin";
g.h.MATH_TRIG_ATAN = "atan";
g.h.MATH_TRIG_COS = "cos";
g.h.MATH_TRIG_HELPURL = "https://en.wikipedia.org/wiki/Trigonometric_functions";
g.h.MATH_TRIG_SIN = "sin";
g.h.MATH_TRIG_TAN = "tan";
g.h.MATH_TRIG_TOOLTIP_ACOS = "Kembalikan acosine dari angka.";
g.h.MATH_TRIG_TOOLTIP_ASIN = "Kembalikan asin dari angka.";
g.h.MATH_TRIG_TOOLTIP_ATAN = "Kembalikan atan dari angka.";
g.h.MATH_TRIG_TOOLTIP_COS = "Kembalikan cosinus dari derajat (bukan radian).";
g.h.MATH_TRIG_TOOLTIP_SIN = "Kembalikan sinus dari derajat (bukan radian).";
g.h.MATH_TRIG_TOOLTIP_TAN = "Kembalikan tangen dari derajat (bukan radian).";
g.h.NEW_COLOUR_VARIABLE = "Create colour variable...";
g.h.NEW_NUMBER_VARIABLE = "Create number variable...";
g.h.NEW_STRING_VARIABLE = "Create string variable...";
g.h.NEW_VARIABLE = "Buat variabel...";
g.h.NEW_VARIABLE_TITLE = "Nama variabel baru:";
g.h.NEW_VARIABLE_TYPE_TITLE = "New variable type:";
g.h.ORDINAL_NUMBER_SUFFIX = "";
g.h.PROCEDURES_ALLOW_STATEMENTS = "memungkinkan pernyataan";
g.h.PROCEDURES_BEFORE_PARAMS = "dengan:";
g.h.PROCEDURES_CALLNORETURN_HELPURL =
  "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
g.h.PROCEDURES_CALLNORETURN_TOOLTIP =
  "Menjalankan fungsi '%1' yang ditetapkan pengguna.";
g.h.PROCEDURES_CALLRETURN_HELPURL =
  "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
g.h.PROCEDURES_CALLRETURN_TOOLTIP =
  "Menjalankan fungsi  '%1' yang ditetapkan pengguna dan menggunakan outputnya.";
g.h.PROCEDURES_CALL_BEFORE_PARAMS = "dengan:";
g.h.PROCEDURES_CREATE_DO = "Buat '%1'";
g.h.PROCEDURES_DEFNORETURN_COMMENT = "Jelaskan fungsi ini...";
g.h.PROCEDURES_DEFNORETURN_DO = "";
g.h.PROCEDURES_DEFNORETURN_HELPURL =
  "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
g.h.PROCEDURES_DEFNORETURN_PROCEDURE = "buat sesuatu";
g.h.PROCEDURES_DEFNORETURN_TITLE = "untuk";
g.h.PROCEDURES_DEFNORETURN_TOOLTIP = "Buat sebuah fungsi tanpa output.";
g.h.PROCEDURES_DEFRETURN_HELPURL =
  "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
g.h.PROCEDURES_DEFRETURN_RETURN = "kembali";
g.h.PROCEDURES_DEFRETURN_TOOLTIP = "Buat sebuah fungsi dengan satu output.";
g.h.PROCEDURES_DEF_DUPLICATE_WARNING =
  "Peringatan: Fungsi ini memiliki parameter duplikat.";
g.h.PROCEDURES_HIGHLIGHT_DEF = "Sorot definisi fungsi";
g.h.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
g.h.PROCEDURES_IFRETURN_TOOLTIP =
  "Jika nilai yang benar, kemudian kembalikan nilai kedua.";
g.h.PROCEDURES_IFRETURN_WARNING =
  "Peringatan: Blok ini dapat digunakan hanya dalam definisi fungsi.";
g.h.PROCEDURES_MUTATORARG_TITLE = "masukan Nama:";
g.h.PROCEDURES_MUTATORARG_TOOLTIP = "Tambahkan masukan ke fungsi.";
g.h.PROCEDURES_MUTATORCONTAINER_TITLE = "input";
g.h.PROCEDURES_MUTATORCONTAINER_TOOLTIP =
  "Menambah, menghapus, atau menyusun ulang masukan untuk fungsi ini.";
g.h.REDO = "Lakukan ulang";
g.h.REMOVE_COMMENT = "Hapus Komentar";
g.h.RENAME_VARIABLE = "Ubah nama variabel...";
g.h.RENAME_VARIABLE_TITLE = "Ubah nama semua variabel '%1' menjadi:";
g.h.TEXT_APPEND_HELPURL =
  "https://github.com/google/blockly/wiki/Text#text-modification";
g.h.TEXT_APPEND_TITLE = "untuk %1 tambahkan teks %2";
g.h.TEXT_APPEND_TOOLTIP = "Tambahkan beberapa teks ke variabel '%1'.";
g.h.TEXT_CHANGECASE_HELPURL =
  "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
g.h.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "menjadi huruf kecil";
g.h.TEXT_CHANGECASE_OPERATOR_TITLECASE = "menjadi huruf pertama kapital";
g.h.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "menjadi huruf kapital";
g.h.TEXT_CHANGECASE_TOOLTIP =
  "Kembalikan kopi dari text dengan kapitalisasi yang berbeda.";
g.h.TEXT_CHARAT_FIRST = "ambil  huruf pertama";
g.h.TEXT_CHARAT_FROM_END = "ambil  huruf nomor # dari belakang";
g.h.TEXT_CHARAT_FROM_START = "ambil huruf ke #";
g.h.TEXT_CHARAT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#extracting-text";
g.h.TEXT_CHARAT_LAST = "ambil  huruf terakhir";
g.h.TEXT_CHARAT_RANDOM = "ambil huruf secara acak";
g.h.TEXT_CHARAT_TAIL = "";
g.h.TEXT_CHARAT_TITLE = "in text %1 %2";
g.h.TEXT_CHARAT_TOOLTIP = "Kembalikan karakter dari posisi tertentu.";
g.h.TEXT_COUNT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#counting-substrings";
g.h.TEXT_COUNT_MESSAGE0 = "count %1 in %2";
g.h.TEXT_COUNT_TOOLTIP =
  "Count how many times some text occurs within some other text.";
g.h.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Tambahkan suatu item ke dalam teks.";
g.h.TEXT_CREATE_JOIN_TITLE_JOIN = "join";
g.h.TEXT_CREATE_JOIN_TOOLTIP = "Tambah, ambil, atau susun ulang teks blok.";
g.h.TEXT_GET_SUBSTRING_END_FROM_END = "pada huruf nomer # dari terakhir";
g.h.TEXT_GET_SUBSTRING_END_FROM_START = "pada huruf #";
g.h.TEXT_GET_SUBSTRING_END_LAST = "pada huruf terakhir";
g.h.TEXT_GET_SUBSTRING_HELPURL =
  "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
g.h.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "in teks";
g.h.TEXT_GET_SUBSTRING_START_FIRST =
  "ambil bagian teks (substring) dari huruf pertama";
g.h.TEXT_GET_SUBSTRING_START_FROM_END =
  "ambil bagian teks (substring) dari huruf ke # dari terakhir";
g.h.TEXT_GET_SUBSTRING_START_FROM_START =
  "ambil bagian teks (substring) dari huruf no #";
g.h.TEXT_GET_SUBSTRING_TAIL = "";
g.h.TEXT_GET_SUBSTRING_TOOLTIP = "Kembalikan spesifik bagian dari teks.";
g.h.TEXT_INDEXOF_HELPURL =
  "https://github.com/google/blockly/wiki/Text#finding-text";
g.h.TEXT_INDEXOF_OPERATOR_FIRST = "temukan kejadian pertama dalam teks";
g.h.TEXT_INDEXOF_OPERATOR_LAST = "temukan kejadian terakhir dalam teks";
g.h.TEXT_INDEXOF_TITLE = "dalam teks %1 %2 %3";
g.h.TEXT_INDEXOF_TOOLTIP =
  "Kembalikan indeks pertama dan terakhir dari kejadian pertama/terakhir dari teks pertama dalam teks kedua.  Kembalikan %1 jika teks tidak ditemukan.";
g.h.TEXT_ISEMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
g.h.TEXT_ISEMPTY_TITLE = "%1 kosong";
g.h.TEXT_ISEMPTY_TOOLTIP = "Kembalikan benar jika teks yang disediakan kosong.";
g.h.TEXT_JOIN_HELPURL =
  "https://github.com/google/blockly/wiki/Text#text-creation";
g.h.TEXT_JOIN_TITLE_CREATEWITH = "buat teks dengan";
g.h.TEXT_JOIN_TOOLTIP = "Buat teks dengan cara gabungkan sejumlah item.";
g.h.TEXT_LENGTH_HELPURL =
  "https://github.com/google/blockly/wiki/Text#text-modification";
g.h.TEXT_LENGTH_TITLE = "panjang dari %1";
g.h.TEXT_LENGTH_TOOLTIP =
  "Kembalikan sejumlah huruf (termasuk spasi) dari teks yang disediakan.";
g.h.TEXT_PRINT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#printing-text";
g.h.TEXT_PRINT_TITLE = "cetak %1";
g.h.TEXT_PRINT_TOOLTIP =
  "Cetak teks yant ditentukan, angka atau ninlai lainnya.";
g.h.TEXT_PROMPT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
g.h.TEXT_PROMPT_TOOLTIP_NUMBER = "Meminta pengguna untuk memberi sebuah angka.";
g.h.TEXT_PROMPT_TOOLTIP_TEXT = "Meminta pengguna untuk memberi beberapa teks.";
g.h.TEXT_PROMPT_TYPE_NUMBER = "Meminta angka dengan pesan";
g.h.TEXT_PROMPT_TYPE_TEXT = "meminta teks dengan pesan";
g.h.TEXT_REPLACE_HELPURL =
  "https://github.com/google/blockly/wiki/Text#replacing-substrings";
g.h.TEXT_REPLACE_MESSAGE0 = "replace %1 with %2 in %3";
g.h.TEXT_REPLACE_TOOLTIP =
  "Replace all occurances of some text within some other text.";
g.h.TEXT_REVERSE_HELPURL =
  "https://github.com/google/blockly/wiki/Text#reversing-text";
g.h.TEXT_REVERSE_MESSAGE0 = "reverse %1";
g.h.TEXT_REVERSE_TOOLTIP = "Reverses the order of the characters in the text.";
g.h.TEXT_TEXT_HELPURL =
  "https://en.wikipedia.org/wiki/String_(computer_science)";
g.h.TEXT_TEXT_TOOLTIP = "Huruf, kata atau baris teks.";
g.h.TEXT_TRIM_HELPURL =
  "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
g.h.TEXT_TRIM_OPERATOR_BOTH = "pangkas ruang dari kedua belah sisi";
g.h.TEXT_TRIM_OPERATOR_LEFT = "pangkas ruang dari sisi kiri";
g.h.TEXT_TRIM_OPERATOR_RIGHT = "pangkas ruang dari sisi kanan";
g.h.TEXT_TRIM_TOOLTIP =
  "Kembali salinan teks dengan spasi dihapus dari satu atau kedua ujungnya.";
g.h.TODAY = "Hari ini";
g.h.UNDO = "Urungkan";
g.h.UNNAMED_KEY = "unnamed";
g.h.VARIABLES_DEFAULT_NAME = "item";
g.h.VARIABLES_GET_CREATE_SET = "Buat 'set %1'";
g.h.VARIABLES_GET_HELPURL =
  "https://github.com/google/blockly/wiki/Variables#get";
g.h.VARIABLES_GET_TOOLTIP = "Kembalikan nilai variabel ini.";
g.h.VARIABLES_SET = "tetapkan %1 untuk %2";
g.h.VARIABLES_SET_CREATE_GET = "Buat 'get %1'";
g.h.VARIABLES_SET_HELPURL =
  "https://github.com/google/blockly/wiki/Variables#set";
g.h.VARIABLES_SET_TOOLTIP = "tetapkan variabel ini dengan input yang sama.";
g.h.VARIABLE_ALREADY_EXISTS = "Sebuah variabel dengan nama '%1' sudah ada.";
g.h.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE =
  "A variable named '%1' already exists for another type: '%2'.";
g.h.WORKSPACE_COMMENT_DEFAULT_TEXT = "Say something...";
g.h.CONTROLS_FOREACH_INPUT_DO = g.h.CONTROLS_REPEAT_INPUT_DO;
g.h.CONTROLS_FOR_INPUT_DO = g.h.CONTROLS_REPEAT_INPUT_DO;
g.h.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = g.h.CONTROLS_IF_MSG_ELSEIF;
g.h.CONTROLS_IF_ELSE_TITLE_ELSE = g.h.CONTROLS_IF_MSG_ELSE;
g.h.CONTROLS_IF_IF_TITLE_IF = g.h.CONTROLS_IF_MSG_IF;
g.h.CONTROLS_IF_MSG_THEN = g.h.CONTROLS_REPEAT_INPUT_DO;
g.h.CONTROLS_WHILEUNTIL_INPUT_DO = g.h.CONTROLS_REPEAT_INPUT_DO;
g.h.LISTS_CREATE_WITH_ITEM_TITLE = g.h.VARIABLES_DEFAULT_NAME;
g.h.LISTS_GET_INDEX_HELPURL = g.h.LISTS_INDEX_OF_HELPURL;
g.h.LISTS_GET_INDEX_INPUT_IN_LIST = g.h.LISTS_INLIST;
g.h.LISTS_GET_SUBLIST_INPUT_IN_LIST = g.h.LISTS_INLIST;
g.h.LISTS_INDEX_OF_INPUT_IN_LIST = g.h.LISTS_INLIST;
g.h.LISTS_SET_INDEX_INPUT_IN_LIST = g.h.LISTS_INLIST;
g.h.MATH_CHANGE_TITLE_ITEM = g.h.VARIABLES_DEFAULT_NAME;
g.h.PROCEDURES_DEFRETURN_COMMENT = g.h.PROCEDURES_DEFNORETURN_COMMENT;
g.h.PROCEDURES_DEFRETURN_DO = g.h.PROCEDURES_DEFNORETURN_DO;
g.h.PROCEDURES_DEFRETURN_PROCEDURE = g.h.PROCEDURES_DEFNORETURN_PROCEDURE;
g.h.PROCEDURES_DEFRETURN_TITLE = g.h.PROCEDURES_DEFNORETURN_TITLE;
g.h.TEXT_APPEND_VARIABLE = g.h.VARIABLES_DEFAULT_NAME;
g.h.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = g.h.VARIABLES_DEFAULT_NAME;
g.h.MATH_HUE = "230";
g.h.LOOPS_HUE = "120";
g.h.LISTS_HUE = "260";
g.h.LOGIC_HUE = "210";
g.h.VARIABLES_HUE = "330";
g.h.TEXTS_HUE = "160";
g.h.PROCEDURES_HUE = "290";
g.h.COLOUR_HUE = "20";
g.h.VARIABLES_DYNAMIC_HUE = "310";
var R = {
  Gk: null,
  Z: function () {
    Dd();
    var a = document.getElementById("linkButton");
    "BlocklyStorage" in window
      ? ((BlocklyStorage.HTTPREQUEST_ERROR = P("Games_httpRequestError")),
        (BlocklyStorage.LINK_ALERT = P("Games_linkAlert")),
        (BlocklyStorage.HASH_ERROR = P("Games_hashError")),
        (BlocklyStorage.XML_ERROR = P("Games_xmlError")),
        (BlocklyStorage.alert = Q.uA.bind(Q, a)),
        a && Hd(a, BlocklyStorage.link))
      : a && (a.style.display = "none");
    (a = document.getElementById("languageMenu")) &&
      a.addEventListener("change", R.RD, !0);
    g.S && (g.S.AC = !1);
    g.j && (g.j.AC = !1);
  },
  WF: function (a, c) {
    if ("BlocklyStorage" in window && 1 < window.location.hash.length)
      BlocklyStorage.retrieveXml(window.location.hash.substring(1));
    else {
      var d = null;
      try {
        d = window.sessionStorage.qz;
      } catch (h) {}
      d && delete window.sessionStorage.qz;
      var e = Ed(O),
        f = c && Ed(O - 1);
      f && "function" == typeof c && (f = c(f));
      (a = d || e || f || a) && R.jA(a);
    }
  },
  jA: function (a) {
    R.Gk
      ? R.Gk.setValue(a, -1)
      : ((a = g.R.mi(a)),
        G.clear(),
        g.R.Hh(a, G),
        (a = G),
        (a.Nj.length = 0),
        (a.yn.length = 0),
        g.i.ZD());
  },
  ut: function () {
    if (R.Gk) var a = R.Gk.getValue();
    else {
      a = g.R.HA(!0);
      if (1 == A(G, !1).length && a.querySelector) {
        var c = a.querySelector("block");
        c && (c.removeAttribute("x"), c.removeAttribute("y"));
      }
      a = g.R.Nd(a);
    }
    return a;
  },
  Lk: function () {
    return G;
  },
  cH: function () {
    window.localStorage && (window.localStorage[Gd + O] = R.ut());
  },
  Pp: function () {
    window.location = (xd ? "index.html" : "./") + "?lang=" + vd;
  },
  RD: function () {
    if (window.sessionStorage) {
      if (R.Gk) var a = R.Gk.getValue();
      else (a = g.R.HA()), (a = g.R.Nd(a));
      window.sessionStorage.qz = a;
    }
    a = document.getElementById("languageMenu");
    a = encodeURIComponent(a.options[a.selectedIndex].value);
    var c = window.location.search;
    c =
      1 >= c.length
        ? "?lang=" + a
        : c.match(/[?&]lang=[^&]*/)
        ? c.replace(/([?&]lang=)[^&]*/, "$1" + a)
        : c.replace(/\?/, "?lang=" + a + "&");
    window.location =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      c;
  },
  su: function () {
    10 > O
      ? (window.location =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "?lang=" +
          vd +
          "&level=" +
          (O + 1))
      : R.Pp();
  },
  Xy: function (a, c) {
    if (a) {
      var d = a.match(/^block_id_([^']+)$/);
      d && (a = d[1]);
    }
    var e = a;
    a = G;
    if (void 0 === c) {
      for (var f = 0; (d = a.Rm[f]); f++) d.lh(!1);
      a.Rm.length = 0;
    }
    if ((d = e ? x(a, e) : null))
      (c = void 0 === c || c)
        ? -1 == a.Rm.indexOf(d) && a.Rm.push(d)
        : g.g.cp(a.Rm, d),
        d.lh(c);
  },
  LF: function (a, c) {
    a = document.getElementById(a);
    a.firstChild ||
      ((a = g.Rh(a, { rtl: yd(), readOnly: !0 })),
      "string" != typeof c && (c = c.join("")),
      g.R.Hh(g.R.mi(c), a));
  },
  sH: function (a) {
    a = a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")");
    return a.replace(/\s+$/, "");
  },
  Sg: function (a) {
    if (
      ("click" == a.type &&
        "touchend" == R.Sg.Ru &&
        R.Sg.Pu + 2e3 > Date.now()) ||
      (R.Sg.Ru == a.type && R.Sg.Pu + 400 > Date.now())
    )
      return a.preventDefault(), a.stopPropagation(), !0;
    R.Sg.Ru = a.type;
    R.Sg.Pu = Date.now();
    return !1;
  },
};
R.Sg.Ru = null;
R.Sg.Pu = 0;
R.HF = function () {
  var a = document.createElement("script");
  a.type = "text/javascript";
  a.src = "third-party/JS-Interpreter/compressed.js";
  document.head.appendChild(a);
};
R.IF = function () {
  var a = document.createElement("link");
  a.rel = "stylesheet";
  a.type = "text/css";
  a.href = "common/prettify.css";
  document.head.appendChild(a);
  a = document.createElement("script");
  a.type = "text/javascript";
  a.src = "common/prettify.js";
  document.head.appendChild(a);
};
window.BlocklyInterface = R;
R.setCode = R.jA;
R.getCode = R.ut;
R.getWorkspace = R.Lk;
var Q = {
  hj: !1,
  Kx: null,
  sp: null,
  ml: function (a, c, d, e, f, h) {
    function k() {
      Q.hj &&
        ((l.style.visibility = "visible"),
        (l.style.zIndex = 10),
        (m.style.visibility = "hidden"));
    }
    if (!a) throw TypeError("Content not found: " + a);
    Q.hj && Q.pe(!1);
    g.Gb() && g.wc(!0);
    Q.hj = !0;
    Q.Kx = c;
    Q.sp = h;
    var l = document.getElementById("dialog");
    h = document.getElementById("dialogShadow");
    var m = document.getElementById("dialogBorder"),
      n;
    for (n in f) l.style[n] = f[n];
    e &&
      ((h.style.visibility = "visible"),
      (h.style.opacity = 0.3),
      (h.style.zIndex = 9),
      (e = document.createElement("div")),
      (e.id = "dialogHeader"),
      l.appendChild(e),
      (Q.Os = g.jd(e, "mousedown", null, Q.wE)));
    l.appendChild(a);
    a.className = a.className.replace("dialogHiddenContent", "");
    d && c ? (Q.fq(c, !1, 0.2), Q.fq(l, !0, 0.8), setTimeout(k, 175)) : k();
  },
  Lx: 0,
  Mx: 0,
  wE: function (a) {
    Q.Rs();
    if (!g.g.lj(a)) {
      var c = document.getElementById("dialog");
      Q.Lx = c.offsetLeft - a.clientX;
      Q.Mx = c.offsetTop - a.clientY;
      Q.Qs = g.jd(document, "mouseup", null, Q.Rs);
      Q.Ps = g.jd(document, "mousemove", null, Q.xE);
      a.stopPropagation();
    }
  },
  xE: function (a) {
    var c = document.getElementById("dialog"),
      d = Q.Lx + a.clientX;
    a = Q.Mx + a.clientY;
    a = Math.max(a, 0);
    a = Math.min(a, window.innerHeight - c.offsetHeight);
    d = Math.max(d, 0);
    d = Math.min(d, window.innerWidth - c.offsetWidth);
    c.style.left = d + "px";
    c.style.top = a + "px";
  },
  Rs: function () {
    Q.Qs && (g.Ua(Q.Qs), (Q.Qs = null));
    Q.Ps && (g.Ua(Q.Ps), (Q.Ps = null));
  },
  pe: function (a) {
    function c() {
      e.style.zIndex = -1;
      e.style.visibility = "hidden";
      document.getElementById("dialogBorder").style.visibility = "hidden";
    }
    if (Q.hj) {
      Q.Rs();
      Q.Os && (g.Ua(Q.Os), (Q.Os = null));
      Q.hj = !1;
      Q.sp && Q.sp();
      Q.sp = null;
      var d = !1 === a ? null : Q.Kx;
      a = document.getElementById("dialog");
      var e = document.getElementById("dialogShadow");
      e.style.opacity = 0;
      d && a ? (Q.fq(a, !1, 0.8), Q.fq(d, !0, 0.2), setTimeout(c, 175)) : c();
      a.style.visibility = "hidden";
      a.style.zIndex = -1;
      for (
        (d = document.getElementById("dialogHeader")) &&
        d.parentNode.removeChild(d);
        a.firstChild;

      )
        (d = a.firstChild),
          (d.className += " dialogHiddenContent"),
          document.body.appendChild(d);
    }
  },
  fq: function (a, c, d) {
    function e() {
      f.style.width = h.width + "px";
      f.style.height = h.height + "px";
      f.style.left = h.x + "px";
      f.style.top = h.y + "px";
      f.style.opacity = d;
    }
    if (a) {
      var f = document.getElementById("dialogBorder"),
        h = Q.XE(a);
      c
        ? ((f.className = "dialogAnimate"), setTimeout(e, 1))
        : ((f.className = ""), e());
      f.style.visibility = "visible";
    }
  },
  XE: function (a) {
    var c = g.g.style.Mm(a);
    c = { x: c.x, y: c.y };
    a.getBBox
      ? ((a = a.getBBox()), (c.height = a.height), (c.width = a.width))
      : ((c.height = a.offsetHeight), (c.width = a.offsetWidth));
    return c;
  },
  uA: function (a, c) {
    var d = document.getElementById("containerStorage");
    d.textContent = "";
    c = c.split("\n");
    for (var e = 0; e < c.length; e++) {
      var f = document.createElement("p");
      f.appendChild(document.createTextNode(c[e]));
      d.appendChild(f);
    }
    d = document.getElementById("dialogStorage");
    Q.ml(d, a, !0, !0, { width: "50%", left: "25%", top: "5em" }, Q.ov);
    Q.kv();
  },
  xD: function () {
    if (!Ed(O))
      if (Q.hj || G.lc()) setTimeout(Q.xD, 15e3);
      else {
        var a = document.getElementById("dialogAbort"),
          c = document.getElementById("abortCancel");
        c.addEventListener("click", Q.pe, !0);
        c.addEventListener("touchend", Q.pe, !0);
        c = document.getElementById("abortOk");
        c.addEventListener("click", R.Pp, !0);
        c.addEventListener("touchend", R.Pp, !0);
        Q.ml(
          a,
          null,
          !1,
          !0,
          { width: "40%", left: "30%", top: "3em" },
          function () {
            document.body.removeEventListener("keydown", Q.Sw, !0);
          }
        );
        document.body.addEventListener("keydown", Q.Sw, !0);
      }
  },
  iv: function () {
    document.getElementById("galleryXml").value = R.ut();
    var a = document.getElementById("galleryDialog");
    if (!Q.iv.bH) {
      var c = document.getElementById("galleryCancel");
      c.addEventListener("click", Q.pe, !0);
      c.addEventListener("touchend", Q.pe, !0);
      c = document.getElementById("galleryOk");
      c.addEventListener("click", Q.qt, !0);
      c.addEventListener("touchend", Q.qt, !0);
      Q.iv.bH = !0;
    }
    c = document.getElementById("submitButton");
    Q.ml(a, c, !0, !0, { width: "40%", left: "30%", top: "3em" }, function () {
      document.body.removeEventListener("keydown", Q.ny, !0);
    });
    document.body.addEventListener("keydown", Q.ny, !0);
    setTimeout(function () {
      document.getElementById("galleryTitle").focus();
    }, 250);
  },
  cE: function () {
    var a = document.getElementById("dialogDone");
    if (G) {
      var c = document.getElementById("dialogLinesText");
      c.textContent = "";
      var d = Yd();
      d = R.sH(d);
      var e = d.replace(/\/\/[^\n]*/g, "");
      e = e.replace(/\/\*.*\*\//g, "");
      e = e.replace(/[ \t]+\n/g, "\n");
      e = e.replace(/\n+/g, "\n");
      e = e.trim();
      e = e.split("\n").length;
      var f = document.getElementById("containerCode");
      f.textContent = d;
      "function" == typeof prettyPrintOne &&
        ((d = f.innerHTML), (d = prettyPrintOne(d, "js")), (f.innerHTML = d));
      d =
        1 == e
          ? P("Games_linesOfCode1")
          : P("Games_linesOfCode2").replace("%1", String(e));
      c.appendChild(document.createTextNode(d));
    }
    d =
      10 > O
        ? P("Games_nextLevel").replace("%1", String(O + 1))
        : P("Games_finalLevel");
    c = document.getElementById("doneCancel");
    c.addEventListener("click", Q.pe, !0);
    c.addEventListener("touchend", Q.pe, !0);
    c = document.getElementById("doneOk");
    c.addEventListener("click", R.su, !0);
    c.addEventListener("touchend", R.su, !0);
    Q.ml(
      a,
      null,
      !1,
      !0,
      { width: "40%", left: "30%", top: "3em" },
      function () {
        document.body.removeEventListener("keydown", Q.qx, !0);
      }
    );
    document.body.addEventListener("keydown", Q.qx, !0);
    document.getElementById("dialogDoneText").textContent = d;
  },
  Jx: function (a) {
    !Q.hj ||
      (13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode) ||
      (Q.pe(!0), a.stopPropagation(), a.preventDefault());
  },
  kv: function () {
    document.body.addEventListener("keydown", Q.Jx, !0);
  },
  ov: function () {
    document.body.removeEventListener("keydown", Q.Jx, !0);
  },
  qx: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      Q.pe(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && R.su();
  },
  Sw: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      Q.pe(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && R.Pp();
  },
  ny: function (a) {
    27 == a.keyCode ? Q.pe(!0) : 13 == a.keyCode && Q.qt();
  },
  qt: function () {
    var a = document.getElementById("galleryTitle");
    if (a.value.trim()) {
      a = document.getElementById("galleryForm");
      for (var c = [], d = 0, e; (e = a.elements[d]); d++)
        e.name &&
          (c[d] =
            encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value));
      var f = new XMLHttpRequest();
      f.open("POST", a.action);
      f.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      f.onload = function () {
        if (4 == f.readyState) {
          var h =
            200 == f.status
              ? P("Games_submitted")
              : P("Games_httpRequestError") + "\nStatus: " + f.status;
          Q.uA(null, h);
        }
      };
      f.send(c.join("&"));
      Q.pe(!0);
    } else (a.value = ""), a.focus();
  },
};
window.BlocklyDialogs = Q;
Q.hideDialog = Q.pe;
var Zd, S;
function $d() {
  if (10 == O) return 1 < y(G).length;
  for (var a = 0; a <= ae; a++)
    if (50 != a) {
      if (void 0 === be[a]) return !1;
      if (100 < be[a])
        return console.log("Pixel errors (frame " + a + "): " + be[a]), !1;
    }
  if (9 == O) {
    a = y(G, !0);
    for (var c = 0, d; (d = a[c]); c++)
      if ("movie_circle" == d.type) {
        if ("math_arithmetic" != N(d, "RADIUS").type)
          return (
            (a = document.getElementById("helpLayer")),
            Q.ml(
              a,
              null,
              !1,
              !0,
              { width: "30%", left: "35%", top: "12em" },
              Q.ov
            ),
            Q.kv(),
            !1
          );
        break;
      }
  }
  return !0;
}
g.S.Ab = {};
g.W = {};
g.W.rB = {};
g.W.rB.bk = 20;
g.Gh([
  {
    type: "colour_picker",
    message0: "%1",
    args0: [{ type: "field_colour", name: "COLOUR", colour: "#ff0000" }],
    output: "Colour",
    helpUrl: "%{BKY_COLOUR_PICKER_HELPURL}",
    style: "colour_blocks",
    tooltip: "%{BKY_COLOUR_PICKER_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"],
  },
  {
    type: "colour_random",
    message0: "%{BKY_COLOUR_RANDOM_TITLE}",
    output: "Colour",
    helpUrl: "%{BKY_COLOUR_RANDOM_HELPURL}",
    style: "colour_blocks",
    tooltip: "%{BKY_COLOUR_RANDOM_TOOLTIP}",
  },
  {
    type: "colour_rgb",
    message0:
      "%{BKY_COLOUR_RGB_TITLE} %{BKY_COLOUR_RGB_RED} %1 %{BKY_COLOUR_RGB_GREEN} %2 %{BKY_COLOUR_RGB_BLUE} %3",
    args0: [
      { type: "input_value", name: "RED", check: "Number", align: "RIGHT" },
      { type: "input_value", name: "GREEN", check: "Number", align: "RIGHT" },
      { type: "input_value", name: "BLUE", check: "Number", align: "RIGHT" },
    ],
    output: "Colour",
    helpUrl: "%{BKY_COLOUR_RGB_HELPURL}",
    style: "colour_blocks",
    tooltip: "%{BKY_COLOUR_RGB_TOOLTIP}",
  },
  {
    type: "colour_blend",
    message0:
      "%{BKY_COLOUR_BLEND_TITLE} %{BKY_COLOUR_BLEND_COLOUR1} %1 %{BKY_COLOUR_BLEND_COLOUR2} %2 %{BKY_COLOUR_BLEND_RATIO} %3",
    args0: [
      { type: "input_value", name: "COLOUR1", check: "Colour", align: "RIGHT" },
      { type: "input_value", name: "COLOUR2", check: "Colour", align: "RIGHT" },
      { type: "input_value", name: "RATIO", check: "Number", align: "RIGHT" },
    ],
    output: "Colour",
    helpUrl: "%{BKY_COLOUR_BLEND_HELPURL}",
    style: "colour_blocks",
    tooltip: "%{BKY_COLOUR_BLEND_TOOLTIP}",
  },
]);
g.Da = function (a, c, d) {
  "function" != typeof a && g.Da.DA(a);
  this.pj = a;
  this.Cp = null;
  this.En = 0;
  this.pv = this.Ou = null;
  a = this.pj;
  if (Array.isArray(a)) {
    for (var e = !1, f = 0; f < a.length; f++) {
      var h = a[f][0];
      "string" == typeof h
        ? (a[f][0] = g.g.nc(h))
        : (null != h.alt && (a[f][0].alt = g.g.nc(h.alt)), (e = !0));
    }
    if (!(e || 2 > a.length)) {
      e = [];
      for (f = 0; f < a.length; f++) e.push(a[f][0]);
      f = g.g.jb.gv(e);
      h = g.g.jb.$D(e, f);
      var k = g.g.jb.aE(e, f);
      (!h && !k) ||
        f <= h + k ||
        (h && (this.Ou = e[0].substring(0, h - 1)),
        k && (this.pv = e[0].substr(1 - k)),
        (this.pj = g.Da.DD(a, h, k)));
    }
  }
  a = this.getOptions(!1)[0];
  g.Da.w.constructor.call(this, a[1], c, d);
  this.il = this.Re = null;
};
g.g.object.X(g.Da, g.oa);
g.Da.pa = function (a) {
  return new g.Da(a.options, void 0, a);
};
g.Da.prototype.Ei = !0;
g.Da.fI = 25;
g.Da.JJ = 0.45;
g.Da.bw = 5;
g.Da.VB = 2 * g.Da.bw;
g.Da.Gv = g.g.userAgent.Al ? "\u25bc" : "\u25be";
b = g.Da.prototype;
b.xo = "default";
b.Zg = function () {
  g.Da.w.Zg.call(this);
  this.Re = g.g.o.K("image", { y: g.Da.bw }, this.me);
  this.ff = g.g.o.K("tspan", {}, this.Bc);
  this.ff.appendChild(
    document.createTextNode(this.B.G ? g.Da.Gv + " " : " " + g.Da.Gv)
  );
  this.B.G
    ? this.Bc.insertBefore(this.ff, this.Kj)
    : this.Bc.appendChild(this.ff);
};
b.yf = function () {
  this.bh = this.ft();
  this.bh.Ea(g.D.sy());
  g.g.o.rb(this.bh.ua(), "blocklyDropdownMenu");
  g.D.oA(this, this.gt.bind(this));
  this.bh.focus();
  this.il && g.g.style.Zu(this.il.ua(), this.bh.ua());
};
b.ft = function () {
  var a = new g.yi();
  Nb(a, this.B.G);
  a.ue("listbox");
  var c = this.getOptions(!1);
  this.il = null;
  for (var d = 0; d < c.length; d++) {
    var e = c[d][0],
      f = c[d][1];
    if ("object" == typeof e) {
      var h = new Image(e.width, e.height);
      h.src = e.src;
      h.alt = e.alt || "";
      e = h;
    }
    e = new g.No(e);
    e.ue("option");
    Nb(e, this.B.G);
    e.setValue(f);
    e.im = !0;
    a.em(e, a.ob.length, !0);
    Jc(e, f == this.$a);
    f == this.$a && (this.il = e);
    Kc(e, this.tF, this);
  }
  g.g.M.eb(a.ua(), g.g.M.State.Wq, this.il ? this.il.va() : "");
  return a;
};
b.gt = function () {
  this.bh.I();
  this.bh = null;
};
b.tF = function (a) {
  g.D.Ok(this, !0);
  this.Jz(a);
};
b.Jz = function (a) {
  this.setValue(a.getValue());
};
g.Da.DD = function (a, c, d) {
  for (var e = [], f = 0; f < a.length; f++) {
    var h = a[f][0],
      k = a[f][1];
    h = h.substring(c, h.length - d);
    e[f] = [h, k];
  }
  return e;
};
b = g.Da.prototype;
b.getOptions = function (a) {
  return "function" == typeof this.pj
    ? ((this.Cp && a) || ((this.Cp = this.pj.call(this)), g.Da.DA(this.Cp)),
      this.Cp)
    : this.pj;
};
b.Qg = function (a) {
  for (var c = !1, d = this.getOptions(!0), e = 0, f; (f = d[e]); e++)
    if (f[1] == a) {
      c = !0;
      break;
    }
  return c
    ? a
    : (this.B &&
        console.warn(
          "Cannot set the dropdown's value to an unavailable option. Block type: " +
            this.B.type +
            ", Field name: " +
            this.name +
            ", Value: " +
            a
        ),
      null);
};
b.Rg = function (a) {
  g.Da.w.Rg.call(this, a);
  a = this.getOptions(!0);
  for (var c = 0, d; (d = a[c]); c++) d[1] == this.$a && (this.En = c);
};
b.Xe = function () {
  this.B &&
    this.ff &&
    (this.ff.style.fill = this.B.ib ? vc(this.B) : this.B.Ni);
};
b.fh = function () {
  this.Kj.nodeValue = "";
  this.Re.style.display = "none";
  var a = this.getOptions(!0),
    c = 0 <= this.En && a[this.En][0];
  if (c && "object" == typeof c) {
    this.Re.style.display = "";
    this.Re.setAttributeNS(g.g.o.ef, "xlink:href", c.src);
    this.Re.setAttribute("height", c.height);
    this.Re.setAttribute("width", c.width);
    a = g.g.o.Nm(this.ff);
    var d = Number(c.width);
    this.Bb.height = Number(c.height) + g.Da.VB;
    this.Bb.width = d + a + g.oa.rk;
    this.B.G
      ? ((c = g.oa.wg - 1),
        this.Re.setAttribute("x", g.oa.wg + a),
        this.Bc.setAttribute("x", c))
      : ((c = d + a + g.oa.wg + 1),
        this.Bc.setAttribute("text-anchor", "end"),
        this.Bc.setAttribute("x", c),
        this.Re.setAttribute("x", g.oa.wg));
  } else
    (this.Kj.nodeValue = this.Ep()),
      this.Bc.setAttribute("text-anchor", "start"),
      this.Bc.setAttribute("x", g.oa.wg),
      (this.Bb.height = g.oa.lo),
      (this.Bb.width = g.g.o.Nm(this.Bc) + g.oa.rk);
  this.Kd.setAttribute("height", this.Bb.height);
  this.Kd.setAttribute("width", this.Bb.width);
};
b.Jp = function () {
  if (0 > this.En) return null;
  var a = this.getOptions(!0)[this.En][0];
  return "object" == typeof a ? a.alt : a;
};
g.Da.DA = function (a) {
  if (!Array.isArray(a))
    throw TypeError("FieldDropdown options must be an array.");
  if (!a.length)
    throw TypeError("FieldDropdown options must not be an empty array.");
  for (var c = !1, d = 0; d < a.length; ++d) {
    var e = a[d];
    Array.isArray(e)
      ? "string" != typeof e[1]
        ? ((c = !0),
          console.error(
            "Invalid option[" +
              d +
              "]: Each FieldDropdown option id must be a string. Found " +
              e[1] +
              " in: ",
            e
          ))
        : e[0] &&
          "string" != typeof e[0] &&
          "string" != typeof e[0].src &&
          ((c = !0),
          console.error(
            "Invalid option[" +
              d +
              "]: Each FieldDropdown option must have a string label or image description. Found" +
              e[0] +
              " in: ",
            e
          ))
      : ((c = !0),
        console.error(
          "Invalid option[" +
            d +
            "]: Each FieldDropdown option must be an array. Found: ",
          e
        ));
  }
  if (c) throw TypeError("Found invalid FieldDropdown options.");
};
g.Da.prototype.gg = function (a) {
  if (this.bh) {
    if (a === g.navigation.fo) return Fc(this.bh), !0;
    if (a === g.navigation.eo) return Dc(this.bh), !0;
  }
  return g.Da.w.gg.call(this, a);
};
g.vc.register("field_dropdown", g.Da);
g.ac = function (a) {
  g.ac.w.constructor.call(this, null);
  this.$z = a;
};
g.g.object.X(g.ac, g.Hd);
b = g.ac.prototype;
b.yl = 0;
b.co = 0;
b.Zs = function (a) {
  g.g.o.K(
    "rect",
    { class: "blocklyIconShape", rx: "4", ry: "4", height: "16", width: "16" },
    a
  );
  g.g.o.K(
    "path",
    {
      class: "blocklyIconSymbol",
      d: "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z",
    },
    a
  );
  g.g.o.K(
    "circle",
    { class: "blocklyIconShape", r: "2.7", cx: "8", cy: "8" },
    a
  );
};
b.Lt = function (a) {
  this.T.nd() && g.Hd.prototype.Lt.call(this, a);
};
b.Hs = function () {
  this.Pn = g.g.o.K("svg", { x: g.na.gd, y: g.na.gd }, null);
  if (this.$z.length)
    for (
      var a = g.g.xml.createElement("xml"), c = 0, d;
      (d = this.$z[c]);
      c++
    ) {
      var e = g.g.xml.createElement("block");
      e.setAttribute("type", d);
      a.appendChild(e);
    }
  else a = null;
  a = {
    disable: !1,
    Pg: this.T.v.options.Pg,
    Xk: a,
    Rb: this.T.v,
    wf: this.T.v.options.wf,
    G: this.T.G,
    Ia: this.T.G ? g.Eg : g.Jd,
    Od: !1,
    jc: this.hF.bind(this),
    ki: null,
    gh: this.T.v.options.gh,
  };
  this.s = new g.qb(a);
  this.s.kj = !0;
  Ba(this.s, g.i.zE);
  a = fd(this.s, "g");
  c = this.s.Ja("blocklyMutatorBackground");
  c.insertBefore(a, this.s.kb);
  this.Pn.appendChild(c);
  return this.Pn;
};
b.ph = function () {
  g.ac.w.ph.call(this);
  this.T.ec ||
    (this.T.nd()
      ? this.Pd && g.g.o.Sb(this.Pd, "blocklyIconGroupReadonly")
      : (this.Yb(!1),
        this.Pd && g.g.o.rb(this.Pd, "blocklyIconGroupReadonly")));
};
function ce(a) {
  var c = 2 * g.na.gd,
    d = a.s.kb.getBBox();
  var e = a.T.G ? -d.x : d.width + d.x;
  d = d.height + 3 * c;
  if (a.s.O) {
    var f = a.s.O.Lm();
    d = Math.max(d, f.Ld + 20);
  }
  e += 3 * c;
  if (Math.abs(a.yl - e) > c || Math.abs(a.co - d) > c)
    (a.yl = e),
      (a.co = d),
      a.Ub.Fn(e + c, d + c),
      a.Pn.setAttribute("width", a.yl),
      a.Pn.setAttribute("height", a.co);
  a.T.G && a.s.kb.setAttribute("transform", "translate(" + a.yl + ",0)");
  a.s.resize();
}
b.Yb = function (a) {
  if (a != this.isVisible())
    if ((g.i.Oa(new g.i.yd(this.T, "mutatorOpen", !a, a)), a)) {
      this.Ub = new g.na(this.T.v, this.Hs(), this.T.Yd, this.dj, null, null);
      Ga(this.Ub, this.T.id);
      if ((a = this.s.options.Xk))
        this.s.O.Z(this.s), this.s.O.show(a.childNodes);
      this.jh = this.T.Yf(this.s);
      a = p(this.jh, !1);
      for (var c = 0, d; (d = a[c]); c++) d.Ea();
      this.jh.Dq(!1);
      this.jh.Ls = !1;
      this.s.O
        ? ((a = 2 * this.s.O.Db), (c = Cb(this.s).cg() + a))
        : (c = a = 16);
      this.T.G && (c = -c);
      this.jh.moveBy(c, a);
      if (this.T.Dn) {
        var e = this;
        this.T.Dn(this.jh);
        this.Eq = function () {
          e.T.Dn(e.jh);
        };
        Ba(this.T.v, this.Eq);
      }
      ce(this);
      Ba(this.s, this.KH.bind(this));
      this.Xe();
    } else
      (this.Pn = null),
        this.s.I(),
        (this.jh = this.s = null),
        this.Ub.I(),
        (this.Ub = null),
        (this.co = this.yl = 0),
        this.Eq && (Ca(this.T.v, this.Eq), (this.Eq = null));
};
b.KH = function (a) {
  if (a.type != g.i.$o && (a.type != g.i.si || "disabled" != a.element)) {
    if (!this.s.lc()) {
      a = A(this.s, !1);
      for (var c = 0, d; (d = a[c]); c++) {
        var e = d.Sa(),
          f = Ra(d);
        20 > e.y + f.height && d.moveBy(0, 20 - f.height - e.y);
      }
    }
    if (this.jh.v == this.s) {
      g.i.aa(!0);
      d = this.T;
      a = (a = d.Pa()) && g.R.Nd(a);
      c = d.ga;
      d.ga = !1;
      d.Vf(this.jh);
      d.ga = c;
      d.Qd();
      c = (c = d.Pa()) && g.R.Nd(c);
      if (a != c) {
        g.i.Oa(new g.i.sg(d, "mutation", null, a, c));
        var h = g.i.cc();
        setTimeout(function () {
          g.i.aa(h);
          d.Pb();
          g.i.aa(!1);
        }, g.mo);
      }
      d.ga && d.Ea();
      a != c && g.Se && g.navigation.jG(d);
      this.s.lc() || ce(this);
      g.i.aa(!1);
    }
  }
};
b.hF = function () {
  return {
    Cb: this.co,
    vb: this.yl - Cb(this.s).cg(),
    Fc: 0,
    qc: this.s.G ? 0 : Cb(this.s).cg(),
  };
};
b.I = function () {
  this.T.Sd = null;
  g.Hd.prototype.I.call(this);
};
g.ac.yj = function (a, c, d) {
  if (!a || !a.B.v) return !1;
  d = E(c, d).connection;
  var e = C(a);
  return (e && e != c) || d.ka == a
    ? !1
    : (d.isConnected() && d.disconnect(), d.connect(a), !0);
};
g.ac.by = function (a) {
  var c = null;
  if (a && a.options) {
    var d = a.options.Rb;
    a.re ? d && d.options && (c = d.options.Rb) : d && (c = d);
  }
  return c;
};
g.S.au = {};
g.W.nC = {};
g.W.nC.bk = 260;
g.Gh([
  {
    type: "lists_create_empty",
    message0: "%{BKY_LISTS_CREATE_EMPTY_TITLE}",
    output: "Array",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_CREATE_EMPTY_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_CREATE_EMPTY_HELPURL}",
  },
  {
    type: "lists_repeat",
    message0: "%{BKY_LISTS_REPEAT_TITLE}",
    args0: [
      { type: "input_value", name: "ITEM" },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
    output: "Array",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_REPEAT_HELPURL}",
  },
  {
    type: "lists_reverse",
    message0: "%{BKY_LISTS_REVERSE_MESSAGE0}",
    args0: [{ type: "input_value", name: "LIST", check: "Array" }],
    output: "Array",
    inputsInline: !0,
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_REVERSE_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_REVERSE_HELPURL}",
  },
  {
    type: "lists_isEmpty",
    message0: "%{BKY_LISTS_ISEMPTY_TITLE}",
    args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }],
    output: "Boolean",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_ISEMPTY_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_ISEMPTY_HELPURL}",
  },
  {
    type: "lists_length",
    message0: "%{BKY_LISTS_LENGTH_TITLE}",
    args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }],
    output: "Number",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_LENGTH_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_LENGTH_HELPURL}",
  },
]);
g.S.lists_create_with = {
  Z: function () {
    this.Wb = g.h.LISTS_CREATE_WITH_HELPURL;
    K(this, "list_blocks");
    this.Lb = 3;
    this.dd();
    this.bd(!0, "Array");
    this.jl(new g.ac(["lists_create_with_item"]));
    this.Ta(g.h.LISTS_CREATE_WITH_TOOLTIP);
  },
  Pa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("items", this.Lb);
    return a;
  },
  lb: function (a) {
    this.Lb = parseInt(a.getAttribute("items"), 10);
    this.dd();
  },
  Yf: function (a) {
    var c = a.fg("lists_create_with_container");
    c.Qd();
    for (var d = E(c, "STACK").connection, e = 0; e < this.Lb; e++) {
      var f = a.fg("lists_create_with_item");
      f.Qd();
      d.connect(f.$);
      d = f.U;
    }
    return c;
  },
  Vf: function (a) {
    var c = N(a, "STACK");
    for (a = []; c; ) a.push(c.bo), (c = c.U && C(c.U));
    for (c = 0; c < this.Lb; c++) {
      var d = E(this, "ADD" + c).connection.ka;
      d && -1 == a.indexOf(d) && d.disconnect();
    }
    this.Lb = a.length;
    this.dd();
    for (c = 0; c < this.Lb; c++) g.ac.yj(a[c], this, "ADD" + c);
  },
  Dn: function (a) {
    a = N(a, "STACK");
    for (var c = 0; a; ) {
      var d = E(this, "ADD" + c);
      a.bo = d && d.connection.ka;
      c++;
      a = a.U && C(a.U);
    }
  },
  dd: function () {
    this.Lb && E(this, "EMPTY")
      ? this.pb("EMPTY")
      : this.Lb ||
        E(this, "EMPTY") ||
        H(M(this, "EMPTY"), g.h.LISTS_CREATE_EMPTY_TITLE);
    for (var a = 0; a < this.Lb; a++)
      if (!E(this, "ADD" + a)) {
        var c = L(this, "ADD" + a);
        0 == a && H(c, g.h.LISTS_CREATE_WITH_INPUT_WITH);
      }
    for (; E(this, "ADD" + a); ) this.pb("ADD" + a), a++;
  },
};
g.S.lists_create_with_container = {
  Z: function () {
    K(this, "list_blocks");
    H(M(this), g.h.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
    this.Qf(g.Xa, "STACK");
    this.Ta(g.h.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.S.lists_create_with_item = {
  Z: function () {
    K(this, "list_blocks");
    H(M(this), g.h.LISTS_CREATE_WITH_ITEM_TITLE);
    this.Wd(!0);
    this.Vd(!0);
    this.Ta(g.h.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.S.lists_indexOf = {
  Z: function () {
    var a = [
      [g.h.LISTS_INDEX_OF_FIRST, "FIRST"],
      [g.h.LISTS_INDEX_OF_LAST, "LAST"],
    ];
    this.Wb = g.h.LISTS_INDEX_OF_HELPURL;
    K(this, "list_blocks");
    this.bd(!0, "Number");
    H(L(this, "VALUE").wa("Array"), g.h.LISTS_INDEX_OF_INPUT_IN_LIST);
    H(L(this, "FIND"), new g.Da(a), "END");
    this.te(!0);
    var c = this;
    this.Ta(function () {
      return g.h.LISTS_INDEX_OF_TOOLTIP.replace(
        "%1",
        c.v.options.Dd ? "0" : "-1"
      );
    });
  },
};
g.S.lists_getIndex = {
  Z: function () {
    var a = [
      [g.h.LISTS_GET_INDEX_GET, "GET"],
      [g.h.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"],
      [g.h.LISTS_GET_INDEX_REMOVE, "REMOVE"],
    ];
    this.$r = [
      [g.h.LISTS_GET_INDEX_FROM_START, "FROM_START"],
      [g.h.LISTS_GET_INDEX_FROM_END, "FROM_END"],
      [g.h.LISTS_GET_INDEX_FIRST, "FIRST"],
      [g.h.LISTS_GET_INDEX_LAST, "LAST"],
      [g.h.LISTS_GET_INDEX_RANDOM, "RANDOM"],
    ];
    this.Wb = g.h.LISTS_GET_INDEX_HELPURL;
    K(this, "list_blocks");
    a = new g.Da(a, function (d) {
      this.B.CA("REMOVE" == d);
    });
    H(L(this, "VALUE").wa("Array"), g.h.LISTS_GET_INDEX_INPUT_IN_LIST);
    H(H(M(this), a, "MODE"), "", "SPACE");
    M(this, "AT");
    g.h.LISTS_GET_INDEX_TAIL && H(M(this, "TAIL"), g.h.LISTS_GET_INDEX_TAIL);
    this.te(!0);
    this.bd(!0);
    this.Tb(!0);
    var c = this;
    this.Ta(function () {
      var d = z(c, "MODE"),
        e = z(c, "WHERE"),
        f = "";
      switch (d + " " + e) {
        case "GET FROM_START":
        case "GET FROM_END":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_FROM;
          break;
        case "GET FIRST":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;
          break;
        case "GET LAST":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_LAST;
          break;
        case "GET RANDOM":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;
          break;
        case "GET_REMOVE FROM_START":
        case "GET_REMOVE FROM_END":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;
          break;
        case "GET_REMOVE FIRST":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;
          break;
        case "GET_REMOVE LAST":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;
          break;
        case "GET_REMOVE RANDOM":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;
          break;
        case "REMOVE FROM_START":
        case "REMOVE FROM_END":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;
          break;
        case "REMOVE FIRST":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;
          break;
        case "REMOVE LAST":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;
          break;
        case "REMOVE RANDOM":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM;
      }
      if ("FROM_START" == e || "FROM_END" == e)
        f +=
          "  " +
          ("FROM_START" == e
            ? g.h.LISTS_INDEX_FROM_START_TOOLTIP
            : g.h.LISTS_INDEX_FROM_END_TOOLTIP
          ).replace("%1", c.v.options.Dd ? "#1" : "#0");
      return f;
    });
  },
  Pa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("statement", !this.L);
    a.setAttribute("at", E(this, "AT").type == g.Ra);
    return a;
  },
  lb: function (a) {
    var c = "true" == a.getAttribute("statement");
    this.CA(c);
    a = "false" != a.getAttribute("at");
    this.Tb(a);
  },
  CA: function (a) {
    a != !this.L &&
      (D(this, !0),
      a
        ? (this.bd(!1), this.Wd(!0), this.Vd(!0))
        : (this.Wd(!1), this.Vd(!1), this.bd(!0)));
  },
  Tb: function (a) {
    this.pb("AT");
    this.pb("ORDINAL", !0);
    a
      ? (L(this, "AT").wa("Number"),
        g.h.ORDINAL_NUMBER_SUFFIX &&
          H(M(this, "ORDINAL"), g.h.ORDINAL_NUMBER_SUFFIX))
      : M(this, "AT");
    var c = new g.Da(this.$r, function (d) {
      var e = "FROM_START" == d || "FROM_END" == d;
      if (e != a) {
        var f = this.B;
        f.Tb(e);
        wc(f, d, "WHERE");
        return null;
      }
    });
    H(E(this, "AT"), c, "WHERE");
    g.h.LISTS_GET_INDEX_TAIL && zc(this, "TAIL", null);
  },
};
g.S.lists_setIndex = {
  Z: function () {
    var a = [
      [g.h.LISTS_SET_INDEX_SET, "SET"],
      [g.h.LISTS_SET_INDEX_INSERT, "INSERT"],
    ];
    this.$r = [
      [g.h.LISTS_GET_INDEX_FROM_START, "FROM_START"],
      [g.h.LISTS_GET_INDEX_FROM_END, "FROM_END"],
      [g.h.LISTS_GET_INDEX_FIRST, "FIRST"],
      [g.h.LISTS_GET_INDEX_LAST, "LAST"],
      [g.h.LISTS_GET_INDEX_RANDOM, "RANDOM"],
    ];
    this.Wb = g.h.LISTS_SET_INDEX_HELPURL;
    K(this, "list_blocks");
    H(L(this, "LIST").wa("Array"), g.h.LISTS_SET_INDEX_INPUT_IN_LIST);
    H(H(M(this), new g.Da(a), "MODE"), "", "SPACE");
    M(this, "AT");
    H(L(this, "TO"), g.h.LISTS_SET_INDEX_INPUT_TO);
    this.te(!0);
    this.Wd(!0);
    this.Vd(!0);
    this.Ta(g.h.LISTS_SET_INDEX_TOOLTIP);
    this.Tb(!0);
    var c = this;
    this.Ta(function () {
      var d = z(c, "MODE"),
        e = z(c, "WHERE"),
        f = "";
      switch (d + " " + e) {
        case "SET FROM_START":
        case "SET FROM_END":
          f = g.h.LISTS_SET_INDEX_TOOLTIP_SET_FROM;
          break;
        case "SET FIRST":
          f = g.h.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;
          break;
        case "SET LAST":
          f = g.h.LISTS_SET_INDEX_TOOLTIP_SET_LAST;
          break;
        case "SET RANDOM":
          f = g.h.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;
          break;
        case "INSERT FROM_START":
        case "INSERT FROM_END":
          f = g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;
          break;
        case "INSERT FIRST":
          f = g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;
          break;
        case "INSERT LAST":
          f = g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;
          break;
        case "INSERT RANDOM":
          f = g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM;
      }
      if ("FROM_START" == e || "FROM_END" == e)
        f +=
          "  " +
          g.h.LISTS_INDEX_FROM_START_TOOLTIP.replace(
            "%1",
            c.v.options.Dd ? "#1" : "#0"
          );
      return f;
    });
  },
  Pa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at", E(this, "AT").type == g.Ra);
    return a;
  },
  lb: function (a) {
    a = "false" != a.getAttribute("at");
    this.Tb(a);
  },
  Tb: function (a) {
    this.pb("AT");
    this.pb("ORDINAL", !0);
    a
      ? (L(this, "AT").wa("Number"),
        g.h.ORDINAL_NUMBER_SUFFIX &&
          H(M(this, "ORDINAL"), g.h.ORDINAL_NUMBER_SUFFIX))
      : M(this, "AT");
    var c = new g.Da(this.$r, function (d) {
      var e = "FROM_START" == d || "FROM_END" == d;
      if (e != a) {
        var f = this.B;
        f.Tb(e);
        wc(f, d, "WHERE");
        return null;
      }
    });
    zc(this, "AT", "TO");
    E(this, "ORDINAL") && zc(this, "ORDINAL", "TO");
    H(E(this, "AT"), c, "WHERE");
  },
};
g.S.lists_getSublist = {
  Z: function () {
    this.WHERE_OPTIONS_1 = [
      [g.h.LISTS_GET_SUBLIST_START_FROM_START, "FROM_START"],
      [g.h.LISTS_GET_SUBLIST_START_FROM_END, "FROM_END"],
      [g.h.LISTS_GET_SUBLIST_START_FIRST, "FIRST"],
    ];
    this.WHERE_OPTIONS_2 = [
      [g.h.LISTS_GET_SUBLIST_END_FROM_START, "FROM_START"],
      [g.h.LISTS_GET_SUBLIST_END_FROM_END, "FROM_END"],
      [g.h.LISTS_GET_SUBLIST_END_LAST, "LAST"],
    ];
    this.Wb = g.h.LISTS_GET_SUBLIST_HELPURL;
    K(this, "list_blocks");
    H(L(this, "LIST").wa("Array"), g.h.LISTS_GET_SUBLIST_INPUT_IN_LIST);
    M(this, "AT1");
    M(this, "AT2");
    g.h.LISTS_GET_SUBLIST_TAIL &&
      H(M(this, "TAIL"), g.h.LISTS_GET_SUBLIST_TAIL);
    this.te(!0);
    this.bd(!0, "Array");
    this.Tb(1, !0);
    this.Tb(2, !0);
    this.Ta(g.h.LISTS_GET_SUBLIST_TOOLTIP);
  },
  Pa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at1", E(this, "AT1").type == g.Ra);
    a.setAttribute("at2", E(this, "AT2").type == g.Ra);
    return a;
  },
  lb: function (a) {
    var c = "true" == a.getAttribute("at1");
    a = "true" == a.getAttribute("at2");
    this.Tb(1, c);
    this.Tb(2, a);
  },
  Tb: function (a, c) {
    this.pb("AT" + a);
    this.pb("ORDINAL" + a, !0);
    c
      ? (L(this, "AT" + a).wa("Number"),
        g.h.ORDINAL_NUMBER_SUFFIX &&
          H(M(this, "ORDINAL" + a), g.h.ORDINAL_NUMBER_SUFFIX))
      : M(this, "AT" + a);
    var d = new g.Da(this["WHERE_OPTIONS_" + a], function (e) {
      var f = "FROM_START" == e || "FROM_END" == e;
      if (f != c) {
        var h = this.B;
        h.Tb(a, f);
        wc(h, e, "WHERE" + a);
        return null;
      }
    });
    H(E(this, "AT" + a), d, "WHERE" + a);
    1 == a &&
      (zc(this, "AT1", "AT2"),
      E(this, "ORDINAL1") && zc(this, "ORDINAL1", "AT2"));
    g.h.LISTS_GET_SUBLIST_TAIL && zc(this, "TAIL", null);
  },
};
g.S.lists_sort = {
  Z: function () {
    yc(this, {
      message0: g.h.LISTS_SORT_TITLE,
      args0: [
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [
            [g.h.LISTS_SORT_TYPE_NUMERIC, "NUMERIC"],
            [g.h.LISTS_SORT_TYPE_TEXT, "TEXT"],
            [g.h.LISTS_SORT_TYPE_IGNORECASE, "IGNORE_CASE"],
          ],
        },
        {
          type: "field_dropdown",
          name: "DIRECTION",
          options: [
            [g.h.LISTS_SORT_ORDER_ASCENDING, "1"],
            [g.h.LISTS_SORT_ORDER_DESCENDING, "-1"],
          ],
        },
        { type: "input_value", name: "LIST", check: "Array" },
      ],
      output: "Array",
      style: "list_blocks",
      tooltip: g.h.LISTS_SORT_TOOLTIP,
      helpUrl: g.h.LISTS_SORT_HELPURL,
    });
  },
};
g.S.lists_split = {
  Z: function () {
    var a = this,
      c = new g.Da(
        [
          [g.h.LISTS_SPLIT_LIST_FROM_TEXT, "SPLIT"],
          [g.h.LISTS_SPLIT_TEXT_FROM_LIST, "JOIN"],
        ],
        function (d) {
          a.Cf(d);
        }
      );
    this.Wb = g.h.LISTS_SPLIT_HELPURL;
    K(this, "list_blocks");
    H(L(this, "INPUT").wa("String"), c, "MODE");
    H(L(this, "DELIM").wa("String"), g.h.LISTS_SPLIT_WITH_DELIMITER);
    this.te(!0);
    this.bd(!0, "Array");
    this.Ta(function () {
      var d = z(a, "MODE");
      if ("SPLIT" == d) return g.h.LISTS_SPLIT_TOOLTIP_SPLIT;
      if ("JOIN" == d) return g.h.LISTS_SPLIT_TOOLTIP_JOIN;
      throw Error("Unknown mode: " + d);
    });
  },
  Cf: function (a) {
    if (z(this, "MODE") != a) {
      var c = E(this, "INPUT").connection;
      c.xf = null;
      var d = C(c);
      d && (c.disconnect(), d.ib ? d.I() : this.Pb());
    }
    "SPLIT" == a
      ? (this.L.wa("Array"), E(this, "INPUT").wa("String"))
      : (this.L.wa("String"), E(this, "INPUT").wa("Array"));
  },
  Pa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("mode", z(this, "MODE"));
    return a;
  },
  lb: function (a) {
    this.Cf(a.getAttribute("mode"));
  },
};
g.S.YF = {};
g.W.ee = {};
g.W.ee.bk = 210;
g.Gh([
  {
    type: "logic_boolean",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "BOOL",
        options: [
          ["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"],
          ["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"],
        ],
      },
    ],
    output: "Boolean",
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_BOOLEAN_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_BOOLEAN_HELPURL}",
  },
  {
    type: "controls_if",
    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
    args0: [{ type: "input_value", name: "IF0", check: "Boolean" }],
    message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    args1: [{ type: "input_statement", name: "DO0" }],
    previousStatement: null,
    nextStatement: null,
    style: "logic_blocks",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    mutator: "controls_if_mutator",
    extensions: ["controls_if_tooltip"],
  },
  {
    type: "controls_ifelse",
    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
    args0: [{ type: "input_value", name: "IF0", check: "Boolean" }],
    message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    args1: [{ type: "input_statement", name: "DO0" }],
    message2: "%{BKY_CONTROLS_IF_MSG_ELSE} %1",
    args2: [{ type: "input_statement", name: "ELSE" }],
    previousStatement: null,
    nextStatement: null,
    style: "logic_blocks",
    tooltip: "%{BKYCONTROLS_IF_TOOLTIP_2}",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    extensions: ["controls_if_tooltip"],
  },
  {
    type: "logic_compare",
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["=", "EQ"],
          ["\u2260", "NEQ"],
          ["\u200f<", "LT"],
          ["\u200f\u2264", "LTE"],
          ["\u200f>", "GT"],
          ["\u200f\u2265", "GTE"],
        ],
      },
      { type: "input_value", name: "B" },
    ],
    inputsInline: !0,
    output: "Boolean",
    style: "logic_blocks",
    helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}",
    extensions: ["logic_compare", "logic_op_tooltip"],
  },
  {
    type: "logic_operation",
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A", check: "Boolean" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_LOGIC_OPERATION_AND}", "AND"],
          ["%{BKY_LOGIC_OPERATION_OR}", "OR"],
        ],
      },
      { type: "input_value", name: "B", check: "Boolean" },
    ],
    inputsInline: !0,
    output: "Boolean",
    style: "logic_blocks",
    helpUrl: "%{BKY_LOGIC_OPERATION_HELPURL}",
    extensions: ["logic_op_tooltip"],
  },
  {
    type: "logic_negate",
    message0: "%{BKY_LOGIC_NEGATE_TITLE}",
    args0: [{ type: "input_value", name: "BOOL", check: "Boolean" }],
    output: "Boolean",
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_NEGATE_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_NEGATE_HELPURL}",
  },
  {
    type: "logic_null",
    message0: "%{BKY_LOGIC_NULL}",
    output: null,
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_NULL_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_NULL_HELPURL}",
  },
  {
    type: "logic_ternary",
    message0: "%{BKY_LOGIC_TERNARY_CONDITION} %1",
    args0: [{ type: "input_value", name: "IF", check: "Boolean" }],
    message1: "%{BKY_LOGIC_TERNARY_IF_TRUE} %1",
    args1: [{ type: "input_value", name: "THEN" }],
    message2: "%{BKY_LOGIC_TERNARY_IF_FALSE} %1",
    args2: [{ type: "input_value", name: "ELSE" }],
    output: null,
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_TERNARY_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_TERNARY_HELPURL}",
    extensions: ["logic_ternary"],
  },
]);
g.Gh([
  {
    type: "controls_if_if",
    message0: "%{BKY_CONTROLS_IF_IF_TITLE_IF}",
    nextStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_IF_TOOLTIP}",
  },
  {
    type: "controls_if_elseif",
    message0: "%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}",
    previousStatement: null,
    nextStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}",
  },
  {
    type: "controls_if_else",
    message0: "%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}",
    previousStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_ELSE_TOOLTIP}",
  },
]);
g.W.ee.Ur = {
  EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",
  NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",
  LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",
  LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",
  GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",
  GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",
  AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",
  OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}",
};
g.Y.register("logic_op_tooltip", g.Y.ep("OP", g.W.ee.Ur));
g.W.ee.lB = {
  le: 0,
  mf: 0,
  li: !0,
  Pa: function () {
    if (!this.le && !this.mf) return null;
    var a = g.g.xml.createElement("mutation");
    this.le && a.setAttribute("elseif", this.le);
    this.mf && a.setAttribute("else", 1);
    return a;
  },
  lb: function (a) {
    this.le = parseInt(a.getAttribute("elseif"), 10) || 0;
    this.mf = parseInt(a.getAttribute("else"), 10) || 0;
    this.WG();
  },
  Yf: function (a) {
    var c = a.fg("controls_if_if");
    c.Qd();
    for (var d = c.U, e = 1; e <= this.le; e++) {
      var f = a.fg("controls_if_elseif");
      f.Qd();
      d.connect(f.$);
      d = f.U;
    }
    this.mf && ((a = a.fg("controls_if_else")), a.Qd(), d.connect(a.$));
    return c;
  },
  Vf: function (a) {
    a = C(a.U);
    this.mf = this.le = 0;
    for (var c = [null], d = [null], e = null; a; ) {
      switch (a.type) {
        case "controls_if_elseif":
          this.le++;
          c.push(a.bo);
          d.push(a.nh);
          break;
        case "controls_if_else":
          this.mf++;
          e = a.nh;
          break;
        default:
          throw TypeError("Unknown block type: " + a.type);
      }
      a = a.U && C(a.U);
    }
    this.dd();
    this.aA(c, d, e);
  },
  Dn: function (a) {
    a = C(a.U);
    for (var c = 1; a; ) {
      switch (a.type) {
        case "controls_if_elseif":
          var d = E(this, "IF" + c),
            e = E(this, "DO" + c);
          a.bo = d && d.connection.ka;
          a.nh = e && e.connection.ka;
          c++;
          break;
        case "controls_if_else":
          e = E(this, "ELSE");
          a.nh = e && e.connection.ka;
          break;
        default:
          throw TypeError("Unknown block type: " + a.type);
      }
      a = a.U && C(a.U);
    }
  },
  WG: function () {
    var a = [null],
      c = [null],
      d = null;
    E(this, "ELSE") && (d = E(this, "ELSE").connection.ka);
    for (var e = 1; E(this, "IF" + e); ) {
      var f = E(this, "DO" + e);
      a.push(E(this, "IF" + e).connection.ka);
      c.push(f.connection.ka);
      e++;
    }
    this.dd();
    this.aA(a, c, d);
  },
  dd: function () {
    E(this, "ELSE") && this.pb("ELSE");
    for (var a = 1; E(this, "IF" + a); )
      this.pb("IF" + a), this.pb("DO" + a), a++;
    for (a = 1; a <= this.le; a++)
      H(L(this, "IF" + a).wa("Boolean"), g.h.CONTROLS_IF_MSG_ELSEIF),
        H(this.Qf(g.Xa, "DO" + a), g.h.CONTROLS_IF_MSG_THEN);
    this.mf && H(this.Qf(g.Xa, "ELSE"), g.h.CONTROLS_IF_MSG_ELSE);
  },
  aA: function (a, c, d) {
    for (var e = 1; e <= this.le; e++)
      g.ac.yj(a[e], this, "IF" + e), g.ac.yj(c[e], this, "DO" + e);
    g.ac.yj(d, this, "ELSE");
  },
};
g.Y.An("controls_if_mutator", g.W.ee.lB, null, [
  "controls_if_elseif",
  "controls_if_else",
]);
g.W.ee.mB = function () {
  this.Ta(
    function () {
      if (this.le || this.mf) {
        if (!this.le && this.mf) return g.h.CONTROLS_IF_TOOLTIP_2;
        if (this.le && !this.mf) return g.h.CONTROLS_IF_TOOLTIP_3;
        if (this.le && this.mf) return g.h.CONTROLS_IF_TOOLTIP_4;
      } else return g.h.CONTROLS_IF_TOOLTIP_1;
      return "";
    }.bind(this)
  );
};
g.Y.register("controls_if_tooltip", g.W.ee.mB);
g.W.ee.jC = {
  onchange: function (a) {
    this.vn || (this.vn = [null, null]);
    var c = N(this, "A"),
      d = N(this, "B");
    c &&
      d &&
      !oc(c.L, d.L) &&
      (g.i.aa(a.group),
      (a = this.vn[0]),
      a !== c && (D(c), a && !a.ib && E(this, "A").connection.connect(a.L)),
      (c = this.vn[1]),
      c !== d && (D(d), c && !c.ib && E(this, "B").connection.connect(c.L)),
      this.Pb(),
      g.i.aa(!1));
    this.vn[0] = N(this, "A");
    this.vn[1] = N(this, "B");
  },
};
g.W.ee.iC = function () {
  this.eg(g.W.ee.jC);
};
g.Y.register("logic_compare", g.W.ee.iC);
g.W.ee.kC = {
  Wz: null,
  onchange: function (a) {
    var c = N(this, "THEN"),
      d = N(this, "ELSE"),
      e = this.L.ka;
    if ((c || d) && e)
      for (var f = 0; 2 > f; f++) {
        var h = 1 == f ? c : d;
        h &&
          !oc(h.L, e) &&
          (g.i.aa(a.group),
          e === this.Wz ? (D(this), e.B.Pb()) : (D(h), h.Pb()),
          g.i.aa(!1));
      }
    this.Wz = e;
  },
};
g.Y.wq("logic_ternary", g.W.ee.kC);
g.zb = function (a, c, d) {
  this.ol = !0;
  null == a && (a = "");
  g.zb.w.constructor.call(this, a, c, d);
};
g.g.object.X(g.zb, g.oa);
g.zb.pa = function (a) {
  var c = g.g.nc(a.text);
  return new g.zb(c, void 0, a);
};
g.zb.prototype.Ei = !0;
g.zb.Yv = 11;
g.zb.Lv = 4;
b = g.zb.prototype;
b.xo = "text";
b.ld = function (a) {
  g.zb.w.ld.call(this, a);
  "boolean" == typeof a.spellcheck && (this.ol = a.spellcheck);
};
b.Qg = function (a) {
  return null === a || void 0 === a ? null : String(a);
};
b.Tx = function () {
  if (this.Sk) {
    this.aq = !1;
    var a = this.$a;
    this.$a = this.kc.BA;
    this.B &&
      g.i.isEnabled() &&
      g.i.Oa(new g.i.sg(this.B, "field", this.name || null, a, this.$a));
  }
};
b.Rg = function (a) {
  this.aq = !0;
  this.$a = a;
  this.Sk || (this.sf = !0);
};
b.fh = function () {
  g.zb.w.fh.call(this);
  this.Sk &&
    (this.B.G ? setTimeout(this.ih.bind(this), 0) : this.ih(),
    this.aq
      ? (g.g.o.Sb(this.kc, "blocklyInvalidInput"),
        g.g.M.eb(this.kc, "invalid", !1))
      : (g.g.o.rb(this.kc, "blocklyInvalidInput"),
        g.g.M.eb(this.kc, "invalid", !0)));
};
function de(a) {
  0 != a.ol && ((a.ol = !1), a.kc && a.kc.setAttribute("spellcheck", a.ol));
}
b.yf = function (a) {
  this.s = this.B.v;
  a = a || !1;
  !a && (g.g.userAgent.wC || g.g.userAgent.Al || g.g.userAgent.ck)
    ? ee(this)
    : (g.ba.show(this, this.B.G, this.JH.bind(this)),
      (this.kc = this.Pq()),
      (this.Sk = !0),
      a || (this.kc.focus(), this.kc.select()));
};
function ee(a) {
  g.prompt(g.h.CHANGE_VALUE_TITLE, a.dc(), function (c) {
    a.setValue(c);
  });
}
b.Pq = function () {
  var a = g.ba.Ca,
    c = document.createElement("input");
  c.className = "blocklyHtmlInput";
  c.setAttribute("spellcheck", this.ol);
  var d = g.zb.Yv * this.s.scale + "pt";
  a.style.fontSize = d;
  c.style.fontSize = d;
  c.style.borderRadius = g.zb.Lv * this.s.scale + "px";
  a.appendChild(c);
  c.value = c.defaultValue = String(this.$a);
  c.BA = this.$a;
  c.yu = null;
  g.g.userAgent.Go ? setTimeout(this.ih.bind(this), 0) : this.ih();
  fe(this, c);
  return c;
};
b.JH = function () {
  this.Sk = !1;
  this.aq = !0;
  xb(this);
  this.Bu && this.Bu(this.$a);
  g.Ua(this.pn);
  g.Ua(this.zG);
  var a = g.ba.Ca.style;
  a.width = "auto";
  a.height = "auto";
  a.fontSize = "";
};
function fe(a, c) {
  a.pn = g.ca(c, "keydown", a, a.Cu);
  a.zG = g.ca(c, "input", a, a.yG);
}
b.Cu = function (a) {
  a.keyCode == g.g.ya.Gl
    ? (g.ba.Ha(), g.D.bj())
    : a.keyCode == g.g.ya.jr
    ? ((this.kc.value = this.kc.defaultValue), g.ba.Ha(), g.D.bj())
    : a.keyCode == g.g.ya.Fw &&
      (g.ba.Ha(), g.D.bj(), Wc(this.B, this, !a.shiftKey), a.preventDefault());
};
b.yG = function () {
  var a = this.kc.value;
  a !== this.kc.yu &&
    ((this.kc.yu = a), g.i.aa(!0), this.setValue(a), xb(this), g.i.aa(!1));
};
b.ih = function () {
  var a = g.ba.Ca,
    c = wb(this);
  a.style.width = c.right - c.left + "px";
  a.style.height = c.bottom - c.top + "px";
  c = new g.g.V(this.B.G ? c.right - a.offsetWidth : c.left, c.top);
  c.y += 1;
  g.g.userAgent.Go && g.ba.Ca.style.top && (--c.x, --c.y);
  g.g.userAgent.Zr && (c.y -= 3);
  a.style.left = c.x + "px";
  a.style.top = c.y + "px";
};
g.zb.sG = function (a) {
  console.warn(
    "Blockly.FieldTextInput.numberValidator is deprecated. Use Blockly.FieldNumber instead."
  );
  if (null === a) return null;
  a = String(a);
  a = a.replace(/O/gi, "0");
  a = a.replace(/,/g, "");
  a = Number(a || 0);
  return isNaN(a) ? null : String(a);
};
g.zb.lM = function (a) {
  (a = g.zb.sG(a)) && (a = String(Math.max(0, Math.floor(a))));
  return a;
};
g.zb.prototype.hz = function () {
  return !0;
};
g.zb.prototype.Jp = function () {
  return this.Sk && this.kc ? this.kc.value : null;
};
g.vc.register("field_input", g.zb);
g.Ze = function (a, c, d, e, f, h) {
  this.mn = -Infinity;
  this.kn = Infinity;
  this.dl = 0;
  this.Js = null;
  g.Ze.w.constructor.call(this, a || 0, f, h);
  h || (ge(this, c), he(this, d), ie(this, e), this.setValue(this.getValue()));
};
g.g.object.X(g.Ze, g.zb);
g.Ze.pa = function (a) {
  return new g.Ze(a.value, void 0, void 0, void 0, void 0, a);
};
g.Ze.prototype.Ei = !0;
g.Ze.prototype.ld = function (a) {
  g.Ze.w.ld.call(this, a);
  ge(this, a.min);
  he(this, a.max);
  ie(this, a.precision);
};
function ge(a, c) {
  null == c ? (a.mn = -Infinity) : ((c = Number(c)), isNaN(c) || (a.mn = c));
}
function he(a, c) {
  null == c ? (a.kn = Infinity) : ((c = Number(c)), isNaN(c) || (a.kn = c));
}
function ie(a, c) {
  null == c ? (a.dl = 0) : ((c = Number(c)), isNaN(c) || (a.dl = c));
  var d = a.dl.toString(),
    e = d.indexOf(".");
  a.Js = -1 == e ? (c ? 0 : null) : d.length - e - 1;
}
g.Ze.prototype.Qg = function (a) {
  if (null === a) return null;
  a = String(a);
  a = a.replace(/O/gi, "0");
  a = a.replace(/,/g, "");
  a = Number(a || 0);
  if (isNaN(a)) return null;
  a = Math.min(Math.max(a, this.mn), this.kn);
  this.dl && isFinite(a) && (a = Math.round(a / this.dl) * this.dl);
  null != this.Js && (a = Number(a.toFixed(this.Js)));
  return a;
};
g.Ze.prototype.Pq = function () {
  var a = g.Ze.w.Pq.call(this);
  -Infinity < this.mn && g.g.M.eb(a, g.g.M.State.mD, this.mn);
  Infinity > this.kn && g.g.M.eb(a, g.g.M.State.lD, this.kn);
  return a;
};
g.vc.register("field_number", g.Ze);
g.Be = function (a, c, d, e, f) {
  this.pj = g.Be.KE;
  this.tE = a || "";
  this.Bb = new g.g.ge(0, g.xa.yr);
  f && this.ld(f);
  c && (this.Oj = c);
  f || je(this, d, e);
};
g.g.object.X(g.Be, g.Da);
g.Be.pa = function (a) {
  var c = g.g.nc(a.variable);
  return new g.Be(c, void 0, void 0, void 0, a);
};
b = g.Be.prototype;
b.s = null;
b.Ei = !0;
b.ld = function (a) {
  g.Be.w.ld.call(this, a);
  je(this, a.variableTypes, a.defaultType);
};
b.ej = function () {
  if (!this.Zd) {
    var a = g.N.Hp(this.B.v, null, this.tE, this.sE);
    g.i.disable();
    this.setValue(a.va());
    g.i.enable();
  }
};
b.Gm = function (a) {
  var c = a.getAttribute("id"),
    d = a.textContent,
    e = a.getAttribute("variabletype") || a.getAttribute("variableType") || "";
  c = g.N.Hp(this.B.v, c, d, e);
  if (null != e && e !== c.type)
    throw Error(
      "Serialized variable type with id '" +
        c.va() +
        "' had type " +
        c.type +
        ", and does not match variable field that references it: " +
        g.R.Nd(a) +
        "."
    );
  this.setValue(c.va());
};
b.xA = function (a) {
  this.ej();
  a.id = this.Zd.va();
  a.textContent = this.Zd.name;
  this.Zd.type && a.setAttribute("variabletype", this.Zd.type);
  return a;
};
b.fv = function (a) {
  if (a.ib)
    throw Error("Variable fields are not allowed to exist on shadow blocks.");
  g.Be.w.fv.call(this, a);
};
b.getValue = function () {
  return this.Zd ? this.Zd.va() : null;
};
b.dc = function () {
  return this.Zd ? this.Zd.name : "";
};
b.Zc = function () {
  return this.Zd;
};
b.Iy = function () {
  return this.Zd ? this.Oj : null;
};
b.Qg = function (a) {
  if (null === a) return null;
  var c = g.N.Zc(this.B.v, a);
  if (!c)
    return (
      console.warn("Variable id doesn't point to a real variable! ID was " + a),
      null
    );
  c = c.type;
  var d;
  a: if ((d = ke(this))) {
    for (var e = 0; e < d.length; e++)
      if (c == d[e]) {
        d = !0;
        break a;
      }
    d = !1;
  } else d = !0;
  return d
    ? a
    : (console.warn("Variable type doesn't match this field!  Type was " + c),
      null);
};
b.Rg = function (a) {
  this.Zd = g.N.Zc(this.B.v, a);
  g.Be.w.Rg.call(this, a);
};
function ke(a) {
  var c = a.FH;
  if (null === c && a.B && a.B.v) return a.B.v.Ct();
  c = c || [""];
  if (0 == c.length)
    throw (
      ((a = a.dc()),
      Error("'variableTypes' of field variable " + a + " was an empty list"))
    );
  return c;
}
function je(a, c, d) {
  d = d || "";
  if (null == c || void 0 == c) c = null;
  else if (Array.isArray(c)) {
    for (var e = !1, f = 0; f < c.length; f++) c[f] == d && (e = !0);
    if (!e)
      throw Error(
        "Invalid default type '" + d + "' in the definition of a FieldVariable"
      );
  } else
    throw Error(
      "'variableTypes' was not an array in the definition of a FieldVariable"
    );
  a.sE = d;
  a.FH = c;
}
g.Be.KE = function () {
  if (!this.Zd)
    throw Error(
      "Tried to call dropdownCreate on a variable field with no variable selected."
    );
  var a = this.dc(),
    c = [];
  if (this.B && this.B.v)
    for (var d = ke(this), e = 0; e < d.length; e++)
      c = c.concat(this.B.v.Om(d[e]));
  c.sort(g.bm.ox);
  d = [];
  for (e = 0; e < c.length; e++) d[e] = [c[e].name, c[e].va()];
  d.push([g.h.RENAME_VARIABLE, g.Aw]);
  g.h.DELETE_VARIABLE && d.push([g.h.DELETE_VARIABLE.replace("%1", a), g.Vv]);
  return d;
};
g.Be.prototype.Jz = function (a) {
  a = a.getValue();
  if (this.B && this.B.v) {
    if (a == g.Aw) {
      g.N.yq(this.B.v, this.Zd);
      return;
    }
    if (a == g.Vv) {
      this.B.v.Zf(this.Zd.va());
      return;
    }
  }
  this.setValue(a);
};
g.Be.prototype.zn = function () {
  return !0;
};
g.vc.register("field_variable", g.Be);
g.S.$F = {};
g.W.Ce = {};
g.W.Ce.bk = 120;
g.Gh([
  {
    type: "controls_repeat_ext",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [{ type: "input_value", name: "TIMES", check: "Number" }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}",
  },
  {
    type: "controls_repeat",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [
      { type: "field_number", name: "TIMES", value: 10, min: 0, precision: 1 },
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}",
  },
  {
    type: "controls_whileUntil",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "MODE",
        options: [
          ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}", "WHILE"],
          ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}", "UNTIL"],
        ],
      },
      { type: "input_value", name: "BOOL", check: "Boolean" },
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_WHILEUNTIL_HELPURL}",
    extensions: ["controls_whileUntil_tooltip"],
  },
  {
    type: "controls_for",
    message0: "%{BKY_CONTROLS_FOR_TITLE}",
    args0: [
      { type: "field_variable", name: "VAR", variable: null },
      { type: "input_value", name: "FROM", check: "Number", align: "RIGHT" },
      { type: "input_value", name: "TO", check: "Number", align: "RIGHT" },
      { type: "input_value", name: "BY", check: "Number", align: "RIGHT" },
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FOR_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_for_tooltip"],
  },
  {
    type: "controls_forEach",
    message0: "%{BKY_CONTROLS_FOREACH_TITLE}",
    args0: [
      { type: "field_variable", name: "VAR", variable: null },
      { type: "input_value", name: "LIST", check: "Array" },
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FOREACH_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_forEach_tooltip"],
  },
  {
    type: "controls_flow_statements",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "FLOW",
        options: [
          ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK}", "BREAK"],
          ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE}", "CONTINUE"],
        ],
      },
    ],
    previousStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FLOW_STATEMENTS_HELPURL}",
    extensions: ["controls_flow_tooltip", "controls_flow_in_loop_check"],
  },
]);
g.W.Ce.pD = {
  WHILE: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}",
  UNTIL: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}",
};
g.Y.register("controls_whileUntil_tooltip", g.Y.ep("MODE", g.W.Ce.pD));
g.W.Ce.ZA = {
  BREAK: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}",
  CONTINUE: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}",
};
g.Y.register("controls_flow_tooltip", g.Y.ep("FLOW", g.W.Ce.ZA));
g.W.Ce.pB = {
  Og: function (a) {
    if (!this.ec) {
      var c = B(this, "VAR").Zc(),
        d = c.name;
      if (!this.isCollapsed() && null != d) {
        var e = { enabled: !0 };
        e.text = g.h.VARIABLES_SET_CREATE_GET.replace("%1", d);
        c = g.N.Hm(c);
        d = g.g.xml.createElement("block");
        d.setAttribute("type", "variables_get");
        d.appendChild(c);
        e.Fb = g.Ga.gp(this, d);
        a.push(e);
      }
    }
  },
};
g.Y.wq("contextMenu_newGetVariableBlock", g.W.Ce.pB);
g.Y.register("controls_for_tooltip", g.Y.fp("%{BKY_CONTROLS_FOR_TOOLTIP}"));
g.Y.register(
  "controls_forEach_tooltip",
  g.Y.fp("%{BKY_CONTROLS_FOREACH_TOOLTIP}")
);
g.W.Ce.vo = {
  mC: [
    "controls_repeat",
    "controls_repeat_ext",
    "controls_forEach",
    "controls_for",
    "controls_whileUntil",
  ],
  li: !0,
  Hy: function (a) {
    do {
      if (-1 != g.W.Ce.vo.mC.indexOf(a.type)) return a;
      a = uc(a);
    } while (a);
    return null;
  },
  onchange: function () {
    this.v.lc &&
      !this.v.lc() &&
      (g.W.Ce.vo.Hy(this)
        ? (this.mh(null), this.ec || this.qd(!0))
        : (this.mh(g.h.CONTROLS_FLOW_STATEMENTS_WARNING),
          this.ec || xc(this) || this.qd(!1)));
  },
};
g.Y.wq("controls_flow_in_loop_check", g.W.Ce.vo);
g.S.Rd = {};
g.W.Math = {};
g.W.Math.bk = 230;
g.Gh([
  {
    type: "math_number",
    message0: "%1",
    args0: [{ type: "field_number", name: "NUM", value: 0 }],
    output: "Number",
    helpUrl: "%{BKY_MATH_NUMBER_HELPURL}",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_NUMBER_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"],
  },
  {
    type: "math_arithmetic",
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A", check: "Number" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"],
          ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"],
          ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"],
          ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"],
          ["%{BKY_MATH_POWER_SYMBOL}", "POWER"],
        ],
      },
      { type: "input_value", name: "B", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
    extensions: ["math_op_tooltip"],
  },
  {
    type: "math_single",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_SINGLE_OP_ROOT}", "ROOT"],
          ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", "ABS"],
          ["-", "NEG"],
          ["ln", "LN"],
          ["log10", "LOG10"],
          ["e^", "EXP"],
          ["10^", "POW10"],
        ],
      },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_SINGLE_HELPURL}",
    extensions: ["math_op_tooltip"],
  },
  {
    type: "math_trig",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_TRIG_SIN}", "SIN"],
          ["%{BKY_MATH_TRIG_COS}", "COS"],
          ["%{BKY_MATH_TRIG_TAN}", "TAN"],
          ["%{BKY_MATH_TRIG_ASIN}", "ASIN"],
          ["%{BKY_MATH_TRIG_ACOS}", "ACOS"],
          ["%{BKY_MATH_TRIG_ATAN}", "ATAN"],
        ],
      },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_TRIG_HELPURL}",
    extensions: ["math_op_tooltip"],
  },
  {
    type: "math_constant",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "CONSTANT",
        options: [
          ["\u03c0", "PI"],
          ["e", "E"],
          ["\u03c6", "GOLDEN_RATIO"],
          ["sqrt(2)", "SQRT2"],
          ["sqrt(\u00bd)", "SQRT1_2"],
          ["\u221e", "INFINITY"],
        ],
      },
    ],
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_CONSTANT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTANT_HELPURL}",
  },
  {
    type: "math_number_property",
    message0: "%1 %2",
    args0: [
      { type: "input_value", name: "NUMBER_TO_CHECK", check: "Number" },
      {
        type: "field_dropdown",
        name: "PROPERTY",
        options: [
          ["%{BKY_MATH_IS_EVEN}", "EVEN"],
          ["%{BKY_MATH_IS_ODD}", "ODD"],
          ["%{BKY_MATH_IS_PRIME}", "PRIME"],
          ["%{BKY_MATH_IS_WHOLE}", "WHOLE"],
          ["%{BKY_MATH_IS_POSITIVE}", "POSITIVE"],
          ["%{BKY_MATH_IS_NEGATIVE}", "NEGATIVE"],
          ["%{BKY_MATH_IS_DIVISIBLE_BY}", "DIVISIBLE_BY"],
        ],
      },
    ],
    inputsInline: !0,
    output: "Boolean",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_IS_TOOLTIP}",
    mutator: "math_is_divisibleby_mutator",
  },
  {
    type: "math_change",
    message0: "%{BKY_MATH_CHANGE_TITLE}",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_MATH_CHANGE_TITLE_ITEM}",
      },
      { type: "input_value", name: "DELTA", check: "Number" },
    ],
    previousStatement: null,
    nextStatement: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_MATH_CHANGE_HELPURL}",
    extensions: ["math_change_tooltip"],
  },
  {
    type: "math_round",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_ROUND_OPERATOR_ROUND}", "ROUND"],
          ["%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}", "ROUNDUP"],
          ["%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}", "ROUNDDOWN"],
        ],
      },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ROUND_HELPURL}",
    tooltip: "%{BKY_MATH_ROUND_TOOLTIP}",
  },
  {
    type: "math_on_list",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_ONLIST_OPERATOR_SUM}", "SUM"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MIN}", "MIN"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MAX}", "MAX"],
          ["%{BKY_MATH_ONLIST_OPERATOR_AVERAGE}", "AVERAGE"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MEDIAN}", "MEDIAN"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MODE}", "MODE"],
          ["%{BKY_MATH_ONLIST_OPERATOR_STD_DEV}", "STD_DEV"],
          ["%{BKY_MATH_ONLIST_OPERATOR_RANDOM}", "RANDOM"],
        ],
      },
      { type: "input_value", name: "LIST", check: "Array" },
    ],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ONLIST_HELPURL}",
    mutator: "math_modes_of_list_mutator",
    extensions: ["math_op_tooltip"],
  },
  {
    type: "math_modulo",
    message0: "%{BKY_MATH_MODULO_TITLE}",
    args0: [
      { type: "input_value", name: "DIVIDEND", check: "Number" },
      { type: "input_value", name: "DIVISOR", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_MODULO_TOOLTIP}",
    helpUrl: "%{BKY_MATH_MODULO_HELPURL}",
  },
  {
    type: "math_constrain",
    message0: "%{BKY_MATH_CONSTRAIN_TITLE}",
    args0: [
      { type: "input_value", name: "VALUE", check: "Number" },
      { type: "input_value", name: "LOW", check: "Number" },
      { type: "input_value", name: "HIGH", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_CONSTRAIN_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTRAIN_HELPURL}",
  },
  {
    type: "math_random_int",
    message0: "%{BKY_MATH_RANDOM_INT_TITLE}",
    args0: [
      { type: "input_value", name: "FROM", check: "Number" },
      { type: "input_value", name: "TO", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_RANDOM_INT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_INT_HELPURL}",
  },
  {
    type: "math_random_float",
    message0: "%{BKY_MATH_RANDOM_FLOAT_TITLE_RANDOM}",
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_RANDOM_FLOAT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_FLOAT_HELPURL}",
  },
  {
    type: "math_atan2",
    message0: "%{BKY_MATH_ATAN2_TITLE}",
    args0: [
      { type: "input_value", name: "X", check: "Number" },
      { type: "input_value", name: "Y", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_ATAN2_TOOLTIP}",
    helpUrl: "%{BKY_MATH_ATAN2_HELPURL}",
  },
]);
g.W.Math.Ur = {
  ADD: "%{BKY_MATH_ARITHMETIC_TOOLTIP_ADD}",
  MINUS: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MINUS}",
  MULTIPLY: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MULTIPLY}",
  DIVIDE: "%{BKY_MATH_ARITHMETIC_TOOLTIP_DIVIDE}",
  POWER: "%{BKY_MATH_ARITHMETIC_TOOLTIP_POWER}",
  ROOT: "%{BKY_MATH_SINGLE_TOOLTIP_ROOT}",
  ABS: "%{BKY_MATH_SINGLE_TOOLTIP_ABS}",
  NEG: "%{BKY_MATH_SINGLE_TOOLTIP_NEG}",
  LN: "%{BKY_MATH_SINGLE_TOOLTIP_LN}",
  LOG10: "%{BKY_MATH_SINGLE_TOOLTIP_LOG10}",
  EXP: "%{BKY_MATH_SINGLE_TOOLTIP_EXP}",
  POW10: "%{BKY_MATH_SINGLE_TOOLTIP_POW10}",
  SIN: "%{BKY_MATH_TRIG_TOOLTIP_SIN}",
  COS: "%{BKY_MATH_TRIG_TOOLTIP_COS}",
  TAN: "%{BKY_MATH_TRIG_TOOLTIP_TAN}",
  ASIN: "%{BKY_MATH_TRIG_TOOLTIP_ASIN}",
  ACOS: "%{BKY_MATH_TRIG_TOOLTIP_ACOS}",
  ATAN: "%{BKY_MATH_TRIG_TOOLTIP_ATAN}",
  SUM: "%{BKY_MATH_ONLIST_TOOLTIP_SUM}",
  MIN: "%{BKY_MATH_ONLIST_TOOLTIP_MIN}",
  MAX: "%{BKY_MATH_ONLIST_TOOLTIP_MAX}",
  AVERAGE: "%{BKY_MATH_ONLIST_TOOLTIP_AVERAGE}",
  MEDIAN: "%{BKY_MATH_ONLIST_TOOLTIP_MEDIAN}",
  MODE: "%{BKY_MATH_ONLIST_TOOLTIP_MODE}",
  STD_DEV: "%{BKY_MATH_ONLIST_TOOLTIP_STD_DEV}",
  RANDOM: "%{BKY_MATH_ONLIST_TOOLTIP_RANDOM}",
};
g.Y.register("math_op_tooltip", g.Y.ep("OP", g.W.Math.Ur));
g.W.Math.YB = {
  Pa: function () {
    var a = g.g.xml.createElement("mutation"),
      c = "DIVISIBLE_BY" == z(this, "PROPERTY");
    a.setAttribute("divisor_input", c);
    return a;
  },
  lb: function (a) {
    a = "true" == a.getAttribute("divisor_input");
    this.dd(a);
  },
  dd: function (a) {
    var c = E(this, "DIVISOR");
    a ? c || L(this, "DIVISOR").wa("Number") : c && this.pb("DIVISOR");
  },
};
g.W.Math.ZB = function () {
  vb(B(this, "PROPERTY"), function (a) {
    this.B.dd("DIVISIBLE_BY" == a);
  });
};
g.Y.An("math_is_divisibleby_mutator", g.W.Math.YB, g.W.Math.ZB);
g.Y.register("math_change_tooltip", g.Y.fp("%{BKY_MATH_CHANGE_TOOLTIP}"));
g.W.Math.hC = {
  Cf: function (a) {
    "MODE" == a ? this.L.wa("Array") : this.L.wa("Number");
  },
  Pa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("op", z(this, "OP"));
    return a;
  },
  lb: function (a) {
    this.Cf(a.getAttribute("op"));
  },
};
g.W.Math.gC = function () {
  vb(
    B(this, "OP"),
    function (a) {
      this.Cf(a);
    }.bind(this)
  );
};
g.Y.An("math_modes_of_list_mutator", g.W.Math.hC, g.W.Math.gC);
g.Uc = function (a, c, d) {
  this.gx = null;
  null == a && (a = "FALSE");
  g.Uc.w.constructor.call(this, a, c, d);
  this.Bb.width = g.Uc.qD;
};
g.g.object.X(g.Uc, g.oa);
g.Uc.pa = function (a) {
  return new g.Uc(a.checked, void 0, a);
};
g.Uc.qD = 15;
g.Uc.cB = "\u2713";
g.Uc.dB = g.oa.wg - 3;
g.Uc.eB = 14;
b = g.Uc.prototype;
b.Ei = !0;
b.xo = "default";
b.sf = !1;
b.ld = function (a) {
  g.Uc.w.ld.call(this, a);
  a.checkCharacter && (this.gx = a.checkCharacter);
};
b.Zg = function () {
  g.Uc.w.Zg.call(this);
  this.Bc.setAttribute("x", g.Uc.dB);
  this.Bc.setAttribute("y", g.Uc.eB);
  g.g.o.rb(this.Bc, "blocklyCheckbox");
  this.Kj.nodeValue = this.gx || g.Uc.cB;
  this.Bc.style.display = this.$a ? "block" : "none";
};
b.yf = function () {
  this.setValue(!this.$a);
};
b.Qg = function (a) {
  return !0 === a || "TRUE" === a
    ? "TRUE"
    : !1 === a || "FALSE" === a
    ? "FALSE"
    : null;
};
b.Rg = function (a) {
  this.$a = le(a);
  this.Bc && (this.Bc.style.display = this.$a ? "block" : "none");
};
b.getValue = function () {
  return this.$a ? "TRUE" : "FALSE";
};
b.dc = function () {
  return String(le(this.$a));
};
function le(a) {
  return "string" == typeof a ? "TRUE" == a : !!a;
}
g.vc.register("field_checkbox", g.Uc);
g.S.UG = {};
g.S.procedures_defnoreturn = {
  Z: function () {
    var a = new g.zb("", g.Ka.bA);
    de(a);
    H(H(H(M(this), g.h.PROCEDURES_DEFNORETURN_TITLE), a, "NAME"), "", "PARAMS");
    this.jl(new g.ac(["procedures_mutatorarg"]));
    (this.v.options.mm ||
      (this.v.options.Rb && this.v.options.Rb.options.mm)) &&
      g.h.PROCEDURES_DEFNORETURN_COMMENT &&
      this.ji(g.h.PROCEDURES_DEFNORETURN_COMMENT);
    K(this, "procedure_blocks");
    this.Ta(g.h.PROCEDURES_DEFNORETURN_TOOLTIP);
    this.Wb = g.h.PROCEDURES_DEFNORETURN_HELPURL;
    this.Ma = [];
    this.rc = [];
    this.Dj(!0);
    this.nh = null;
  },
  Dj: function (a) {
    this.Op !== a &&
      (a
        ? (H(this.Qf(g.Xa, "STACK"), g.h.PROCEDURES_DEFNORETURN_DO),
          E(this, "RETURN") && zc(this, "STACK", "RETURN"))
        : this.pb("STACK", !0),
      (this.Op = a));
  },
  Zn: function () {
    var a = "";
    this.Ma.length &&
      (a = g.h.PROCEDURES_BEFORE_PARAMS + " " + this.Ma.join(", "));
    g.i.disable();
    try {
      wc(this, a, "PARAMS");
    } finally {
      g.i.enable();
    }
  },
  Pa: function (a) {
    var c = g.g.xml.createElement("mutation");
    a && c.setAttribute("name", z(this, "NAME"));
    for (var d = 0; d < this.rc.length; d++) {
      var e = g.g.xml.createElement("arg"),
        f = this.rc[d];
      e.setAttribute("name", f.name);
      e.setAttribute("varid", f.va());
      a && this.Ju && e.setAttribute("paramId", this.Ju[d]);
      c.appendChild(e);
    }
    this.Op || c.setAttribute("statements", "false");
    return c;
  },
  lb: function (a) {
    this.Ma = [];
    this.rc = [];
    for (var c = 0, d; (d = a.childNodes[c]); c++)
      if ("arg" == d.nodeName.toLowerCase()) {
        var e = d.getAttribute("name");
        d = d.getAttribute("varid") || d.getAttribute("varId");
        this.Ma.push(e);
        d = g.N.Hp(this.v, d, e, "");
        null != d
          ? this.rc.push(d)
          : console.log(
              "Failed to create a variable with name " + e + ", ignoring."
            );
      }
    this.Zn();
    g.Ka.on(this);
    this.Dj("false" !== a.getAttribute("statements"));
  },
  Yf: function (a) {
    var c = g.g.xml.createElement("block");
    c.setAttribute("type", "procedures_mutatorcontainer");
    var d = g.g.xml.createElement("statement");
    d.setAttribute("name", "STACK");
    c.appendChild(d);
    for (var e = 0; e < this.Ma.length; e++) {
      var f = g.g.xml.createElement("block");
      f.setAttribute("type", "procedures_mutatorarg");
      var h = g.g.xml.createElement("field");
      h.setAttribute("name", "NAME");
      var k = g.g.xml.createTextNode(this.Ma[e]);
      h.appendChild(k);
      f.appendChild(h);
      h = g.g.xml.createElement("next");
      f.appendChild(h);
      d.appendChild(f);
      d = h;
    }
    a = g.R.Wi(c, a);
    "procedures_defreturn" == this.type
      ? wc(a, this.Op, "STATEMENTS")
      : a.pb("STATEMENT_INPUT");
    g.Ka.on(this);
    return a;
  },
  Vf: function (a) {
    this.Ma = [];
    this.Ju = [];
    this.rc = [];
    for (var c = N(a, "STACK"); c; ) {
      var d = z(c, "NAME");
      this.Ma.push(d);
      d = this.v.Zc(d, "");
      this.rc.push(d);
      this.Ju.push(c.id);
      c = c.U && C(c.U);
    }
    this.Zn();
    g.Ka.on(this);
    a = z(a, "STATEMENTS");
    if (null !== a && ((a = "TRUE" == a), this.Op != a))
      if (a) this.Dj(!0), g.ac.yj(this.nh, this, "STACK"), (this.nh = null);
      else {
        a = E(this, "STACK").connection;
        if ((this.nh = a.ka)) (a = C(a)), D(a), a.Pb();
        this.Dj(!1);
      }
  },
  Mh: function () {
    return [z(this, "NAME"), this.Ma, !1];
  },
  Et: function () {
    return this.Ma;
  },
  Xg: function () {
    return this.rc;
  },
  xq: function (a, c) {
    var d = this.v.pf(a);
    if ("" == d.type) {
      d = d.name;
      c = this.v.pf(c);
      for (var e = !1, f = 0; f < this.rc.length; f++)
        this.rc[f].va() == a &&
          ((this.Ma[f] = c.name), (this.rc[f] = c), (e = !0));
      e && (this.up(d, c.name), g.Ka.on(this));
    }
  },
  Nq: function (a) {
    for (var c = a.name, d = !1, e = 0; e < this.rc.length; e++)
      if (this.rc[e].va() == a.va()) {
        var f = this.Ma[e];
        this.Ma[e] = c;
        d = !0;
      }
    d && (this.up(f, c), g.Ka.on(this));
  },
  up: function (a, c) {
    this.Zn();
    if (this.Sd && this.Sd.isVisible())
      for (var d = y(this.Sd.s, !1), e = 0, f; (f = d[e]); e++)
        "procedures_mutatorarg" == f.type &&
          g.fe.Le(a, z(f, "NAME")) &&
          wc(f, c, "NAME");
  },
  Og: function (a) {
    if (!this.ec) {
      var c = { enabled: !0 },
        d = z(this, "NAME");
      c.text = g.h.PROCEDURES_CREATE_DO.replace("%1", d);
      var e = g.g.xml.createElement("mutation");
      e.setAttribute("name", d);
      for (d = 0; d < this.Ma.length; d++) {
        var f = g.g.xml.createElement("arg");
        f.setAttribute("name", this.Ma[d]);
        e.appendChild(f);
      }
      d = g.g.xml.createElement("block");
      d.setAttribute("type", this.ax);
      d.appendChild(e);
      c.Fb = g.Ga.gp(this, d);
      a.push(c);
      if (!this.isCollapsed())
        for (d = 0; d < this.rc.length; d++)
          (c = { enabled: !0 }),
            (e = this.rc[d]),
            (c.text = g.h.VARIABLES_SET_CREATE_GET.replace("%1", e.name)),
            (e = g.N.Hm(e)),
            (f = g.g.xml.createElement("block")),
            f.setAttribute("type", "variables_get"),
            f.appendChild(e),
            (c.Fb = g.Ga.gp(this, f)),
            a.push(c);
    }
  },
  ax: "procedures_callnoreturn",
};
g.S.procedures_defreturn = {
  Z: function () {
    var a = new g.zb("", g.Ka.bA);
    de(a);
    H(H(H(M(this), g.h.PROCEDURES_DEFRETURN_TITLE), a, "NAME"), "", "PARAMS");
    H(J(L(this, "RETURN"), g.fd), g.h.PROCEDURES_DEFRETURN_RETURN);
    this.jl(new g.ac(["procedures_mutatorarg"]));
    (this.v.options.mm ||
      (this.v.options.Rb && this.v.options.Rb.options.mm)) &&
      g.h.PROCEDURES_DEFRETURN_COMMENT &&
      this.ji(g.h.PROCEDURES_DEFRETURN_COMMENT);
    K(this, "procedure_blocks");
    this.Ta(g.h.PROCEDURES_DEFRETURN_TOOLTIP);
    this.Wb = g.h.PROCEDURES_DEFRETURN_HELPURL;
    this.Ma = [];
    this.rc = [];
    this.Dj(!0);
    this.nh = null;
  },
  Dj: g.S.procedures_defnoreturn.Dj,
  Zn: g.S.procedures_defnoreturn.Zn,
  Pa: g.S.procedures_defnoreturn.Pa,
  lb: g.S.procedures_defnoreturn.lb,
  Yf: g.S.procedures_defnoreturn.Yf,
  Vf: g.S.procedures_defnoreturn.Vf,
  Mh: function () {
    return [z(this, "NAME"), this.Ma, !0];
  },
  Et: g.S.procedures_defnoreturn.Et,
  Xg: g.S.procedures_defnoreturn.Xg,
  xq: g.S.procedures_defnoreturn.xq,
  Nq: g.S.procedures_defnoreturn.Nq,
  up: g.S.procedures_defnoreturn.up,
  Og: g.S.procedures_defnoreturn.Og,
  ax: "procedures_callreturn",
};
g.S.procedures_mutatorcontainer = {
  Z: function () {
    H(M(this), g.h.PROCEDURES_MUTATORCONTAINER_TITLE);
    this.Qf(g.Xa, "STACK");
    H(
      H(M(this, "STATEMENT_INPUT"), g.h.PROCEDURES_ALLOW_STATEMENTS),
      new g.Uc("TRUE"),
      "STATEMENTS"
    );
    K(this, "procedure_blocks");
    this.Ta(g.h.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
    this.contextMenu = !1;
  },
  onchange: function (a) {
    if (this.v && !this.v.re && (a.type == g.i.io || a.type == g.i.Bl)) {
      var c = y(this.v),
        d = this.v.Ug();
      if (a.type == g.i.io) {
        a = [];
        for (var e = 0; e < c.length; e += 1)
          z(c[e], "NAME") && a.push(z(c[e], "NAME"));
        for (c = 0; c < d.length; c += 1)
          -1 == a.indexOf(d[c].name) && this.v.Zf(d[c].va());
      } else if (
        a.type == g.i.Bl &&
        ((d = x(this.v, a.Gc)),
        B(d, "NAME") &&
          ((e = z(d, "NAME")),
          (a = this.v.Zc(e)) || (a = this.v.Md(e)),
          !d.$.isConnected() && !d.U.isConnected()))
      )
        for (e = 0; e < c.length; e += 1)
          if (d.id != c[e].id && z(c[e], "NAME") == a.name) {
            e = g.N.oy(this.v);
            a = this.v.Md(e);
            wc(d, a.name, "NAME");
            break;
          }
    }
  },
};
g.S.procedures_mutatorarg = {
  Z: function () {
    var a = new g.zb("x", this.Oj);
    a.tG = a.yf;
    a.yf = function () {
      this.vm = [];
      this.tG();
    };
    H(H(M(this), g.h.PROCEDURES_MUTATORARG_TITLE), a, "NAME");
    this.Wd(!0);
    this.Vd(!0);
    K(this, "procedure_blocks");
    this.Ta(g.h.PROCEDURES_MUTATORARG_TOOLTIP);
    this.contextMenu = !1;
    a.Bu = this.uE;
    a.vm = [];
    a.Bu("x");
  },
  Oj: function (a) {
    var c = this.B,
      d = g.ac.by(c.v);
    a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
    if (!a) return null;
    c = y(c.v);
    for (var e = 0; e < c.length; e++)
      if (c[e].id != this.B.id && z(c[e], "NAME") == a) return null;
    (c = d.Zc(a, "")) && c.name != a && d.gi(c.va(), a);
    c || ((c = d.Md(a, "")) && this.vm && this.vm.push(c));
    return a;
  },
  uE: function (a) {
    var c = g.ac.by(this.B.v);
    if (c)
      for (var d = 0; d < this.vm.length; d++) {
        var e = this.vm[d];
        e.name != a && c.Zf(e.va());
      }
  },
};
g.S.procedures_callnoreturn = {
  Z: function () {
    H(M(this, "TOPROW"), this.id, "NAME");
    this.Wd(!0);
    this.Vd(!0);
    K(this, "procedure_blocks");
    this.Wb = g.h.PROCEDURES_CALLNORETURN_HELPURL;
    this.Ma = [];
    this.rc = [];
    this.xj = {};
    this.mg = null;
    this.Qu = !0;
  },
  ne: function () {
    return z(this, "NAME");
  },
  Cn: function (a, c) {
    g.fe.Le(a, this.ne()) &&
      (wc(this, c, "NAME"),
      this.Ta(
        (this.L
          ? g.h.PROCEDURES_CALLRETURN_TOOLTIP
          : g.h.PROCEDURES_CALLNORETURN_TOOLTIP
        ).replace("%1", c)
      ));
  },
  dv: function (a, c) {
    var d = g.Ka.Jm(this.ne(), this.v),
      e = d && d.Sd && d.Sd.isVisible();
    e || ((this.xj = {}), (this.mg = null));
    if (c)
      if (a.join("\n") == this.Ma.join("\n")) this.mg = c;
      else {
        if (c.length != a.length)
          throw RangeError("paramNames and paramIds must be the same length.");
        this.kh(!1);
        this.mg || ((this.xj = {}), (this.mg = []));
        d = this.ga;
        this.ga = !1;
        for (var f = 0; f < this.Ma.length; f++) {
          var h = E(this, "ARG" + f);
          h &&
            ((h = h.connection.ka),
            (this.xj[this.mg[f]] = h),
            e &&
              h &&
              -1 == c.indexOf(this.mg[f]) &&
              (h.disconnect(), h.B.Pb()));
        }
        this.Ma = [].concat(a);
        this.rc = [];
        for (f = 0; f < this.Ma.length; f++)
          (a = g.N.Hp(this.v, null, this.Ma[f], "")), this.rc.push(a);
        this.dd();
        if ((this.mg = c))
          for (f = 0; f < this.Ma.length; f++)
            (c = this.mg[f]),
              c in this.xj &&
                ((h = this.xj[c]),
                g.ac.yj(h, this, "ARG" + f) || delete this.xj[c]);
        (this.ga = d) && this.Ea();
      }
  },
  dd: function () {
    for (var a = 0; a < this.Ma.length; a++) {
      var c = B(this, "ARGNAME" + a);
      if (c) {
        g.i.disable();
        try {
          c.setValue(this.Ma[a]);
        } finally {
          g.i.enable();
        }
      } else
        (c = new g.ce(this.Ma[a])),
          H(J(L(this, "ARG" + a), g.fd), c, "ARGNAME" + a).Z();
    }
    for (; E(this, "ARG" + a); ) this.pb("ARG" + a), a++;
    if ((a = E(this, "TOPROW")))
      if (this.Ma.length)
        B(this, "WITH") ||
          (H(a, g.h.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"), a.Z());
      else if (B(this, "WITH"))
        a: {
          c = 0;
          for (var d; (d = a.Na[c]); c++)
            if ("WITH" === d.name) {
              d.I();
              a.Na.splice(c, 1);
              a.B.ga && (a.B.Ea(), a.B.Pb());
              break a;
            }
          throw Error('Field "%s" not found.', "WITH");
        }
  },
  Pa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("name", this.ne());
    for (var c = 0; c < this.Ma.length; c++) {
      var d = g.g.xml.createElement("arg");
      d.setAttribute("name", this.Ma[c]);
      a.appendChild(d);
    }
    return a;
  },
  lb: function (a) {
    var c = a.getAttribute("name");
    this.Cn(this.ne(), c);
    c = [];
    for (var d = [], e = 0, f; (f = a.childNodes[e]); e++)
      "arg" == f.nodeName.toLowerCase() &&
        (c.push(f.getAttribute("name")), d.push(f.getAttribute("paramId")));
    this.dv(c, d);
  },
  Xg: function () {
    return this.rc;
  },
  onchange: function (a) {
    if (this.v && !this.v.re && a.Pc)
      if (a.type == g.i.Bl && -1 != a.Ph.indexOf(this.id)) {
        var c = this.ne();
        c = g.Ka.Jm(c, this.v);
        !c ||
          (c.type == this.Ks &&
            JSON.stringify(c.Ma) == JSON.stringify(this.Ma)) ||
          (c = null);
        if (!c) {
          g.i.aa(a.group);
          a = g.g.xml.createElement("xml");
          c = g.g.xml.createElement("block");
          c.setAttribute("type", this.Ks);
          var d = this.Sa(),
            e = d.y + 2 * g.wd;
          c.setAttribute("x", d.x + g.wd * (this.G ? -1 : 1));
          c.setAttribute("y", e);
          d = this.Pa();
          c.appendChild(d);
          d = g.g.xml.createElement("field");
          d.setAttribute("name", "NAME");
          d.appendChild(g.g.xml.createTextNode(this.ne()));
          c.appendChild(d);
          a.appendChild(c);
          g.R.Hh(a, this.v);
          g.i.aa(!1);
        }
      } else
        a.type == g.i.io
          ? ((c = this.ne()),
            (c = g.Ka.Jm(c, this.v)),
            c || (g.i.aa(a.group), this.I(!0, !1), g.i.aa(!1)))
          : a.type == g.i.si &&
            "disabled" == a.element &&
            ((c = this.ne()),
            (c = g.Ka.Jm(c, this.v)) &&
              c.id == a.Gc &&
              ((c = g.i.cc()) &&
                console.log(
                  "Saw an existing group while responding to a definition change"
                ),
              g.i.aa(a.group),
              a.newValue
                ? ((this.Qu = this.isEnabled()), this.qd(!1))
                : this.qd(this.Qu),
              g.i.aa(c)));
  },
  Og: function (a) {
    if (this.v.Lc()) {
      var c = { enabled: !0 };
      c.text = g.h.PROCEDURES_HIGHLIGHT_DEF;
      var d = this.ne(),
        e = this.v;
      c.Fb = function () {
        var f = g.Ka.Jm(d, e);
        if (f) {
          if (e.Lc()) {
            var h = x(e, f.id);
            if (h) {
              var k = h.Sa(),
                l = Ra(h),
                m = e.scale;
              h = (k.x + ((e.G ? -1 : 1) * l.width) / 2) * m;
              k = (k.y + l.height / 2) * m;
              l = e.jc();
              h = -(h - l.Hc - l.vb / 2) - l.Hc;
              k = -(k - l.tc - l.Cb / 2) - l.tc;
              g.wc();
              e.scroll(h, k);
            }
          } else
            console.warn(
              "Tried to move a non-movable workspace. This could result in blocks becoming inaccessible."
            );
          f.select();
        }
      };
      a.push(c);
    }
  },
  Ks: "procedures_defnoreturn",
};
g.S.procedures_callreturn = {
  Z: function () {
    H(M(this, "TOPROW"), "", "NAME");
    this.bd(!0);
    K(this, "procedure_blocks");
    this.Wb = g.h.PROCEDURES_CALLRETURN_HELPURL;
    this.Ma = [];
    this.xj = {};
    this.mg = null;
    this.Qu = !0;
  },
  ne: g.S.procedures_callnoreturn.ne,
  Cn: g.S.procedures_callnoreturn.Cn,
  dv: g.S.procedures_callnoreturn.dv,
  dd: g.S.procedures_callnoreturn.dd,
  Pa: g.S.procedures_callnoreturn.Pa,
  lb: g.S.procedures_callnoreturn.lb,
  Xg: g.S.procedures_callnoreturn.Xg,
  onchange: g.S.procedures_callnoreturn.onchange,
  Og: g.S.procedures_callnoreturn.Og,
  Ks: "procedures_defreturn",
};
g.S.procedures_ifreturn = {
  Z: function () {
    H(L(this, "CONDITION").wa("Boolean"), g.h.CONTROLS_IF_MSG_IF);
    H(L(this, "VALUE"), g.h.PROCEDURES_DEFRETURN_RETURN);
    this.te(!0);
    this.Wd(!0);
    this.Vd(!0);
    K(this, "procedure_blocks");
    this.Ta(g.h.PROCEDURES_IFRETURN_TOOLTIP);
    this.Wb = g.h.PROCEDURES_IFRETURN_HELPURL;
    this.Oh = !0;
  },
  Pa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("value", Number(this.Oh));
    return a;
  },
  lb: function (a) {
    this.Oh = 1 == a.getAttribute("value");
    this.Oh ||
      (this.pb("VALUE"), H(M(this, "VALUE"), g.h.PROCEDURES_DEFRETURN_RETURN));
  },
  onchange: function () {
    if (this.v.lc && !this.v.lc()) {
      var a = !1,
        c = this;
      do {
        if (-1 != this.JB.indexOf(c.type)) {
          a = !0;
          break;
        }
        c = uc(c);
      } while (c);
      a
        ? ("procedures_defnoreturn" == c.type && this.Oh
            ? (this.pb("VALUE"),
              H(M(this, "VALUE"), g.h.PROCEDURES_DEFRETURN_RETURN),
              (this.Oh = !1))
            : "procedures_defreturn" != c.type ||
              this.Oh ||
              (this.pb("VALUE"),
              H(L(this, "VALUE"), g.h.PROCEDURES_DEFRETURN_RETURN),
              (this.Oh = !0)),
          this.mh(null),
          this.ec || this.qd(!0))
        : (this.mh(g.h.PROCEDURES_IFRETURN_WARNING),
          this.ec || xc(this) || this.qd(!1));
    }
  },
  JB: ["procedures_defnoreturn", "procedures_defreturn"],
};
g.Hf = function (a, c, d, e, f, h, k) {
  if (!a) throw Error("Src value of an image field is required");
  a = g.g.nc(a);
  d = Number(g.g.nc(d));
  c = Number(g.g.nc(c));
  if (isNaN(d) || isNaN(c))
    throw Error(
      "Height and width values of an image field must cast to numbers."
    );
  if (0 >= d || 0 >= c)
    throw Error(
      "Height and width values of an image field must be greater than 0."
    );
  this.Em = !1;
  this.bp = "";
  g.Hf.w.constructor.call(this, a || "", null, k);
  k || ((this.Em = !!h), (this.bp = g.g.nc(e) || ""));
  this.Bb = new g.g.ge(c, d + g.Hf.bs);
  this.GF = d;
  this.jm = null;
  "function" == typeof f && (this.jm = f);
};
g.g.object.X(g.Hf, g.oa);
g.Hf.pa = function (a) {
  return new g.Hf(a.src, a.width, a.height, void 0, void 0, void 0, a);
};
g.Hf.bs = 1;
b = g.Hf.prototype;
b.Gf = !1;
b.sf = !1;
b.ld = function (a) {
  g.Hf.w.ld.call(this, a);
  this.Em = !!a.flipRtl;
  this.bp = g.g.nc(a.alt) || "";
};
b.Zg = function () {
  this.Re = g.g.o.K(
    "image",
    { height: this.GF + "px", width: this.Bb.width + "px", alt: this.bp },
    this.me
  );
  this.Re.setAttributeNS(g.g.o.ef, "xlink:href", this.$a);
};
b.Qg = function (a) {
  return "string" != typeof a ? null : a;
};
b.Rg = function (a) {
  this.$a = a;
  this.Re && this.Re.setAttributeNS(g.g.o.ef, "xlink:href", this.$a || "");
};
b.wy = function () {
  return this.Em;
};
b.yf = function () {
  this.jm && this.jm(this);
};
b.Jp = function () {
  return this.bp;
};
g.vc.register("field_image", g.Hf);
g.Ae = function (a, c, d) {
  null == a && (a = "");
  g.Ae.w.constructor.call(this, a, c, d);
};
g.g.object.X(g.Ae, g.zb);
g.Ae.Lo = 20;
g.Ae.pa = function (a) {
  var c = g.g.nc(a.text);
  return new g.Ae(c, void 0, a);
};
b = g.Ae.prototype;
b.Zg = function () {
  tb(this);
  this.Iq = g.g.o.K("g", { class: "blocklyEditableText" }, this.me);
};
b.Ep = function () {
  var a = this.$a;
  if (!a) return g.oa.Oo;
  var c = a.split("\n");
  a = "";
  for (var d = 0; d < c.length; d++) {
    var e = c[d];
    e.length > this.hq && (e = e.substring(0, this.hq - 4) + "...");
    e = e.replace(/\s/g, g.oa.Oo);
    a += e;
    d !== c.length - 1 && (a += "\n");
  }
  this.B.G && (a += "\u200f");
  return a;
};
b.fh = function () {
  for (var a; (a = this.Iq.firstChild); ) this.Iq.removeChild(a);
  a = this.Ep().split("\n");
  for (var c = g.oa.bs / 2, d = 0, e = 0; e < a.length; e++)
    g.g.o
      .K(
        "text",
        {
          class: "blocklyText blocklyMultilineText",
          x: g.oa.wg,
          y: d + c,
          dy: g.Ae.Lo / 2,
        },
        this.Iq
      )
      .appendChild(document.createTextNode(a[e])),
      (d += g.Ae.Lo);
  this.zv();
  this.Sk &&
    (this.B.G ? setTimeout(this.ih.bind(this), 0) : this.ih(),
    this.aq
      ? (g.g.o.Sb(this.kc, "blocklyInvalidInput"),
        g.g.M.eb(this.kc, "invalid", !1))
      : (g.g.o.rb(this.kc, "blocklyInvalidInput"),
        g.g.M.eb(this.kc, "invalid", !0)));
};
b.zv = function () {
  for (var a = this.Iq.childNodes, c = 0, d = 0, e = 0; e < a.length; e++) {
    var f = g.g.o.Nm(a[e]);
    f > c && (c = f);
    d += g.Ae.Lo;
  }
  this.Kd &&
    ((c += g.oa.rk),
    this.Kd.setAttribute("width", c),
    this.Kd.setAttribute("height", d));
  this.Bb.width = c;
  this.Bb.height = d;
};
b.ih = function () {
  var a = g.ba.Ca,
    c = wb(this);
  a.style.width = c.right - c.left + "px";
  a.style.height = c.bottom - c.top + "px";
  c = new g.g.V(this.B.G ? c.right - a.offsetWidth : c.left, c.top);
  a.style.left = c.x + "px";
  a.style.top = c.y + "px";
};
b.Pq = function () {
  var a = g.ba.Ca,
    c = this.s.scale,
    d = document.createElement("textarea");
  d.className = "blocklyHtmlInput blocklyHtmlTextAreaInput";
  d.setAttribute("spellcheck", this.ol);
  var e = g.zb.Yv * c + "pt";
  a.style.fontSize = e;
  d.style.fontSize = e;
  d.style.borderRadius = g.zb.Lv * c + "px";
  e = g.oa.wg * c;
  d.style.paddingLeft = e + "px";
  d.style.width = "calc(100% - " + e + "px)";
  d.style.lineHeight = g.Ae.Lo * c + "px";
  a.appendChild(d);
  d.value = d.defaultValue = String(this.$a);
  d.BA = this.$a;
  d.yu = null;
  g.g.userAgent.Go ? setTimeout(this.ih.bind(this), 0) : this.ih();
  fe(this, d);
  return d;
};
b.Cu = function (a) {
  a.keyCode !== g.g.ya.Gl && g.Ae.w.Cu.call(this, a);
};
g.Tc.register(
  ".blocklyHtmlTextAreaInput {,font-family: monospace;,resize: none;,overflow: hidden;,height: 100%;,text-align: left;,}".split(
    ","
  )
);
g.vc.register("field_multilinetext", g.Ae);
g.S.xH = {};
g.W.Text = {};
g.W.Text.bk = 160;
g.Gh([
  {
    type: "text",
    message0: "%1",
    args0: [{ type: "field_input", name: "TEXT", text: "" }],
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
    tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
    extensions: ["text_quotes", "parent_tooltip_when_inline"],
  },
  {
    type: "text_multiline",
    message0: "%1 %2",
    args0: [
      {
        type: "field_image",
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAdhgAAHYYBXaITgQAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMS42/U4J6AAAAP1JREFUOE+Vks0KQUEYhjmRIja4ABtZ2dm5A3t3Ia6AUm7CylYuQRaUhZSlLZJiQbFAyRnPN33y01HOW08z8873zpwzM4F3GWOCruvGIE4/rLaV+Nq1hVGMBqzhqlxgCys4wJA65xnogMHsQ5lujnYHTejBBCK2mE4abjCgMGhNxHgDFWjDSG07kdfVa2pZMf4ZyMAdWmpZMfYOsLiDMYMjlMB+K613QISRhTnITnsYg5yUd0DETmEoMlkFOeIT/A58iyK5E18BuTBfgYXfwNJv4P9/oEBerLylOnRhygmGdPpTTBZAPkde61lbQe4moWUvYUZYLfUNftIY4zwA5X2Z9AYnQrEAAAAASUVORK5CYII=",
        width: 12,
        height: 17,
        alt: "\u00b6",
      },
      { type: "field_multilinetext", name: "TEXT", text: "" },
    ],
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
    tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"],
  },
  {
    type: "text_join",
    message0: "",
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_JOIN_HELPURL}",
    tooltip: "%{BKY_TEXT_JOIN_TOOLTIP}",
    mutator: "text_join_mutator",
  },
  {
    type: "text_create_join_container",
    message0: "%{BKY_TEXT_CREATE_JOIN_TITLE_JOIN} %1 %2",
    args0: [
      { type: "input_dummy" },
      { type: "input_statement", name: "STACK" },
    ],
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_CREATE_JOIN_TOOLTIP}",
    enableContextMenu: !1,
  },
  {
    type: "text_create_join_item",
    message0: "%{BKY_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM}",
    previousStatement: null,
    nextStatement: null,
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_CREATE_JOIN_ITEM_TOOLTIP}",
    enableContextMenu: !1,
  },
  {
    type: "text_append",
    message0: "%{BKY_TEXT_APPEND_TITLE}",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_TEXT_APPEND_VARIABLE}",
      },
      { type: "input_value", name: "TEXT" },
    ],
    previousStatement: null,
    nextStatement: null,
    style: "text_blocks",
    extensions: ["text_append_tooltip"],
  },
  {
    type: "text_length",
    message0: "%{BKY_TEXT_LENGTH_TITLE}",
    args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }],
    output: "Number",
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_LENGTH_TOOLTIP}",
    helpUrl: "%{BKY_TEXT_LENGTH_HELPURL}",
  },
  {
    type: "text_isEmpty",
    message0: "%{BKY_TEXT_ISEMPTY_TITLE}",
    args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }],
    output: "Boolean",
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_ISEMPTY_TOOLTIP}",
    helpUrl: "%{BKY_TEXT_ISEMPTY_HELPURL}",
  },
  {
    type: "text_indexOf",
    message0: "%{BKY_TEXT_INDEXOF_TITLE}",
    args0: [
      { type: "input_value", name: "VALUE", check: "String" },
      {
        type: "field_dropdown",
        name: "END",
        options: [
          ["%{BKY_TEXT_INDEXOF_OPERATOR_FIRST}", "FIRST"],
          ["%{BKY_TEXT_INDEXOF_OPERATOR_LAST}", "LAST"],
        ],
      },
      { type: "input_value", name: "FIND", check: "String" },
    ],
    output: "Number",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_INDEXOF_HELPURL}",
    inputsInline: !0,
    extensions: ["text_indexOf_tooltip"],
  },
  {
    type: "text_charAt",
    message0: "%{BKY_TEXT_CHARAT_TITLE}",
    args0: [
      { type: "input_value", name: "VALUE", check: "String" },
      {
        type: "field_dropdown",
        name: "WHERE",
        options: [
          ["%{BKY_TEXT_CHARAT_FROM_START}", "FROM_START"],
          ["%{BKY_TEXT_CHARAT_FROM_END}", "FROM_END"],
          ["%{BKY_TEXT_CHARAT_FIRST}", "FIRST"],
          ["%{BKY_TEXT_CHARAT_LAST}", "LAST"],
          ["%{BKY_TEXT_CHARAT_RANDOM}", "RANDOM"],
        ],
      },
    ],
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_CHARAT_HELPURL}",
    inputsInline: !0,
    mutator: "text_charAt_mutator",
  },
]);
g.S.text_getSubstring = {
  Z: function () {
    this.WHERE_OPTIONS_1 = [
      [g.h.TEXT_GET_SUBSTRING_START_FROM_START, "FROM_START"],
      [g.h.TEXT_GET_SUBSTRING_START_FROM_END, "FROM_END"],
      [g.h.TEXT_GET_SUBSTRING_START_FIRST, "FIRST"],
    ];
    this.WHERE_OPTIONS_2 = [
      [g.h.TEXT_GET_SUBSTRING_END_FROM_START, "FROM_START"],
      [g.h.TEXT_GET_SUBSTRING_END_FROM_END, "FROM_END"],
      [g.h.TEXT_GET_SUBSTRING_END_LAST, "LAST"],
    ];
    this.Wb = g.h.TEXT_GET_SUBSTRING_HELPURL;
    K(this, "text_blocks");
    H(L(this, "STRING").wa("String"), g.h.TEXT_GET_SUBSTRING_INPUT_IN_TEXT);
    M(this, "AT1");
    M(this, "AT2");
    g.h.TEXT_GET_SUBSTRING_TAIL &&
      H(M(this, "TAIL"), g.h.TEXT_GET_SUBSTRING_TAIL);
    this.te(!0);
    this.bd(!0, "String");
    this.Tb(1, !0);
    this.Tb(2, !0);
    this.Ta(g.h.TEXT_GET_SUBSTRING_TOOLTIP);
  },
  Pa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at1", E(this, "AT1").type == g.Ra);
    a.setAttribute("at2", E(this, "AT2").type == g.Ra);
    return a;
  },
  lb: function (a) {
    var c = "true" == a.getAttribute("at1");
    a = "true" == a.getAttribute("at2");
    this.Tb(1, c);
    this.Tb(2, a);
  },
  Tb: function (a, c) {
    this.pb("AT" + a);
    this.pb("ORDINAL" + a, !0);
    c
      ? (L(this, "AT" + a).wa("Number"),
        g.h.ORDINAL_NUMBER_SUFFIX &&
          H(M(this, "ORDINAL" + a), g.h.ORDINAL_NUMBER_SUFFIX))
      : M(this, "AT" + a);
    2 == a &&
      g.h.TEXT_GET_SUBSTRING_TAIL &&
      (this.pb("TAIL", !0), H(M(this, "TAIL"), g.h.TEXT_GET_SUBSTRING_TAIL));
    var d = new g.Da(this["WHERE_OPTIONS_" + a], function (e) {
      var f = "FROM_START" == e || "FROM_END" == e;
      if (f != c) {
        var h = this.B;
        h.Tb(a, f);
        wc(h, e, "WHERE" + a);
        return null;
      }
    });
    H(E(this, "AT" + a), d, "WHERE" + a);
    1 == a &&
      (zc(this, "AT1", "AT2"),
      E(this, "ORDINAL1") && zc(this, "ORDINAL1", "AT2"));
  },
};
g.S.text_changeCase = {
  Z: function () {
    var a = [
      [g.h.TEXT_CHANGECASE_OPERATOR_UPPERCASE, "UPPERCASE"],
      [g.h.TEXT_CHANGECASE_OPERATOR_LOWERCASE, "LOWERCASE"],
      [g.h.TEXT_CHANGECASE_OPERATOR_TITLECASE, "TITLECASE"],
    ];
    this.Wb = g.h.TEXT_CHANGECASE_HELPURL;
    K(this, "text_blocks");
    H(L(this, "TEXT").wa("String"), new g.Da(a), "CASE");
    this.bd(!0, "String");
    this.Ta(g.h.TEXT_CHANGECASE_TOOLTIP);
  },
};
g.S.text_trim = {
  Z: function () {
    var a = [
      [g.h.TEXT_TRIM_OPERATOR_BOTH, "BOTH"],
      [g.h.TEXT_TRIM_OPERATOR_LEFT, "LEFT"],
      [g.h.TEXT_TRIM_OPERATOR_RIGHT, "RIGHT"],
    ];
    this.Wb = g.h.TEXT_TRIM_HELPURL;
    K(this, "text_blocks");
    H(L(this, "TEXT").wa("String"), new g.Da(a), "MODE");
    this.bd(!0, "String");
    this.Ta(g.h.TEXT_TRIM_TOOLTIP);
  },
};
g.S.text_print = {
  Z: function () {
    yc(this, {
      message0: g.h.TEXT_PRINT_TITLE,
      args0: [{ type: "input_value", name: "TEXT" }],
      previousStatement: null,
      nextStatement: null,
      style: "text_blocks",
      tooltip: g.h.TEXT_PRINT_TOOLTIP,
      helpUrl: g.h.TEXT_PRINT_HELPURL,
    });
  },
};
g.S.text_prompt_ext = {
  Z: function () {
    var a = [
      [g.h.TEXT_PROMPT_TYPE_TEXT, "TEXT"],
      [g.h.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"],
    ];
    this.Wb = g.h.TEXT_PROMPT_HELPURL;
    K(this, "text_blocks");
    var c = this;
    a = new g.Da(a, function (d) {
      c.Cf(d);
    });
    H(L(this, "TEXT"), a, "TYPE");
    this.bd(!0, "String");
    this.Ta(function () {
      return "TEXT" == z(c, "TYPE")
        ? g.h.TEXT_PROMPT_TOOLTIP_TEXT
        : g.h.TEXT_PROMPT_TOOLTIP_NUMBER;
    });
  },
  Cf: function (a) {
    this.L.wa("NUMBER" == a ? "Number" : "String");
  },
  Pa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("type", z(this, "TYPE"));
    return a;
  },
  lb: function (a) {
    this.Cf(a.getAttribute("type"));
  },
};
g.S.text_prompt = {
  Z: function () {
    this.eg(g.W.Text.Ir);
    var a = [
        [g.h.TEXT_PROMPT_TYPE_TEXT, "TEXT"],
        [g.h.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"],
      ],
      c = this;
    this.Wb = g.h.TEXT_PROMPT_HELPURL;
    K(this, "text_blocks");
    a = new g.Da(a, function (d) {
      c.Cf(d);
    });
    H(
      H(H(H(M(this), a, "TYPE"), this.$k(!0)), new g.zb(""), "TEXT"),
      this.$k(!1)
    );
    this.bd(!0, "String");
    this.Ta(function () {
      return "TEXT" == z(c, "TYPE")
        ? g.h.TEXT_PROMPT_TOOLTIP_TEXT
        : g.h.TEXT_PROMPT_TOOLTIP_NUMBER;
    });
  },
  Cf: g.S.text_prompt_ext.Cf,
  Pa: g.S.text_prompt_ext.Pa,
  lb: g.S.text_prompt_ext.lb,
};
g.S.text_count = {
  Z: function () {
    yc(this, {
      message0: g.h.TEXT_COUNT_MESSAGE0,
      args0: [
        { type: "input_value", name: "SUB", check: "String" },
        { type: "input_value", name: "TEXT", check: "String" },
      ],
      output: "Number",
      inputsInline: !0,
      style: "text_blocks",
      tooltip: g.h.TEXT_COUNT_TOOLTIP,
      helpUrl: g.h.TEXT_COUNT_HELPURL,
    });
  },
};
g.S.text_replace = {
  Z: function () {
    yc(this, {
      message0: g.h.TEXT_REPLACE_MESSAGE0,
      args0: [
        { type: "input_value", name: "FROM", check: "String" },
        { type: "input_value", name: "TO", check: "String" },
        { type: "input_value", name: "TEXT", check: "String" },
      ],
      output: "String",
      inputsInline: !0,
      style: "text_blocks",
      tooltip: g.h.TEXT_REPLACE_TOOLTIP,
      helpUrl: g.h.TEXT_REPLACE_HELPURL,
    });
  },
};
g.S.text_reverse = {
  Z: function () {
    yc(this, {
      message0: g.h.TEXT_REVERSE_MESSAGE0,
      args0: [{ type: "input_value", name: "TEXT", check: "String" }],
      output: "String",
      inputsInline: !0,
      style: "text_blocks",
      tooltip: g.h.TEXT_REVERSE_TOOLTIP,
      helpUrl: g.h.TEXT_REVERSE_HELPURL,
    });
  },
};
g.W.Text.Ir = {
  IC: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC",
  JC: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==",
  KC: 12,
  HC: 12,
  VG: function (a) {
    for (var c = 0, d; (d = this.P[c]); c++)
      for (var e = 0, f; (f = d.Na[e]); e++)
        if (a == f.name) {
          rc(d, e, this.$k(!0));
          rc(d, e + 2, this.$k(!1));
          return;
        }
    console.warn('field named "' + a + '" not found in ' + pc(this));
  },
  $k: function (a) {
    a = this.G ? !a : a;
    return new g.Hf(
      a ? this.IC : this.JC,
      this.KC,
      this.HC,
      a ? "\u201c" : "\u201d"
    );
  },
};
g.W.Text.fD = function () {
  this.eg(g.W.Text.Ir);
  this.VG("TEXT");
};
g.W.Text.eD = {
  Pa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("items", this.Lb);
    return a;
  },
  lb: function (a) {
    this.Lb = parseInt(a.getAttribute("items"), 10);
    this.dd();
  },
  Yf: function (a) {
    var c = a.fg("text_create_join_container");
    c.Qd();
    for (var d = E(c, "STACK").connection, e = 0; e < this.Lb; e++) {
      var f = a.fg("text_create_join_item");
      f.Qd();
      d.connect(f.$);
      d = f.U;
    }
    return c;
  },
  Vf: function (a) {
    var c = N(a, "STACK");
    for (a = []; c; ) a.push(c.bo), (c = c.U && C(c.U));
    for (c = 0; c < this.Lb; c++) {
      var d = E(this, "ADD" + c).connection.ka;
      d && -1 == a.indexOf(d) && d.disconnect();
    }
    this.Lb = a.length;
    this.dd();
    for (c = 0; c < this.Lb; c++) g.ac.yj(a[c], this, "ADD" + c);
  },
  Dn: function (a) {
    a = N(a, "STACK");
    for (var c = 0; a; ) {
      var d = E(this, "ADD" + c);
      a.bo = d && d.connection.ka;
      c++;
      a = a.U && C(a.U);
    }
  },
  dd: function () {
    this.Lb && E(this, "EMPTY")
      ? this.pb("EMPTY")
      : this.Lb ||
        E(this, "EMPTY") ||
        H(H(M(this, "EMPTY"), this.$k(!0)), this.$k(!1));
    for (var a = 0; a < this.Lb; a++)
      if (!E(this, "ADD" + a)) {
        var c = L(this, "ADD" + a);
        0 == a && H(c, g.h.TEXT_JOIN_TITLE_CREATEWITH);
      }
    for (; E(this, "ADD" + a); ) this.pb("ADD" + a), a++;
  },
};
g.W.Text.dD = function () {
  this.eg(g.W.Text.Ir);
  this.Lb = 2;
  this.dd();
  this.jl(new g.ac(["text_create_join_item"]));
};
g.Y.register("text_append_tooltip", g.Y.fp("%{BKY_TEXT_APPEND_TOOLTIP}"));
g.W.Text.cD = function () {
  var a = this;
  this.Ta(function () {
    return g.h.TEXT_INDEXOF_TOOLTIP.replace("%1", a.v.options.Dd ? "0" : "-1");
  });
};
g.W.Text.bD = {
  Pa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at", !!this.dz);
    return a;
  },
  lb: function (a) {
    a = "false" != a.getAttribute("at");
    this.Tb(a);
  },
  Tb: function (a) {
    this.pb("AT", !0);
    this.pb("ORDINAL", !0);
    a &&
      (L(this, "AT").wa("Number"),
      g.h.ORDINAL_NUMBER_SUFFIX &&
        H(M(this, "ORDINAL"), g.h.ORDINAL_NUMBER_SUFFIX));
    g.h.TEXT_CHARAT_TAIL &&
      (this.pb("TAIL", !0), H(M(this, "TAIL"), g.h.TEXT_CHARAT_TAIL));
    this.dz = a;
  },
};
g.W.Text.aD = function () {
  vb(B(this, "WHERE"), function (c) {
    c = "FROM_START" == c || "FROM_END" == c;
    c != this.dz && this.B.Tb(c);
  });
  this.Tb(!0);
  var a = this;
  this.Ta(function () {
    var c = z(a, "WHERE"),
      d = g.h.TEXT_CHARAT_TOOLTIP;
    ("FROM_START" == c || "FROM_END" == c) &&
      (c =
        "FROM_START" == c
          ? g.h.LISTS_INDEX_FROM_START_TOOLTIP
          : g.h.LISTS_INDEX_FROM_END_TOOLTIP) &&
      (d += "  " + c.replace("%1", a.v.options.Dd ? "#1" : "#0"));
    return d;
  });
};
g.Y.register("text_indexOf_tooltip", g.W.Text.cD);
g.Y.register("text_quotes", g.W.Text.fD);
g.Y.An("text_join_mutator", g.W.Text.eD, g.W.Text.dD);
g.Y.An("text_charAt_mutator", g.W.Text.bD, g.W.Text.aD);
g.S.GH = {};
g.W.N = {};
g.W.N.bk = 330;
g.Gh([
  {
    type: "variables_get",
    message0: "%1",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}",
      },
    ],
    output: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
    tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
    extensions: ["contextMenu_variableSetterGetter"],
  },
  {
    type: "variables_set",
    message0: "%{BKY_VARIABLES_SET}",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}",
      },
      { type: "input_value", name: "VALUE" },
    ],
    previousStatement: null,
    nextStatement: null,
    style: "variable_blocks",
    tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
    helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
    extensions: ["contextMenu_variableSetterGetter"],
  },
]);
g.W.N.qB = {
  Og: function (a) {
    if (!this.ec) {
      if ("variables_get" == this.type)
        var c = "variables_set",
          d = g.h.VARIABLES_GET_CREATE_SET;
      else (c = "variables_get"), (d = g.h.VARIABLES_SET_CREATE_GET);
      var e = { enabled: 0 < ya(this.v) },
        f = B(this, "VAR").dc();
      e.text = d.replace("%1", f);
      d = g.g.xml.createElement("field");
      d.setAttribute("name", "VAR");
      d.appendChild(g.g.xml.createTextNode(f));
      f = g.g.xml.createElement("block");
      f.setAttribute("type", c);
      f.appendChild(d);
      e.Fb = g.Ga.gp(this, f);
      a.push(e);
    } else if (
      "variables_get" == this.type ||
      "variables_get_reporter" == this.type
    )
      (c = { text: g.h.XK, enabled: !0, Fb: g.W.N.NC(this) }),
        (f = B(this, "VAR").dc()),
        (e = {
          text: g.h.uI.replace("%1", f),
          enabled: !0,
          Fb: g.W.N.wB(this),
        }),
        a.unshift(c),
        a.unshift(e);
  },
};
g.W.N.NC = function (a) {
  return function () {
    var c = a.v,
      d = B(a, "VAR").Zc();
    g.N.yq(c, d);
  };
};
g.W.N.wB = function (a) {
  return function () {
    var c = a.v,
      d = B(a, "VAR").Zc();
    c.Zf(d.va());
    hd(c);
  };
};
g.Y.wq("contextMenu_variableSetterGetter", g.W.N.qB);
g.Generator = function (a) {
  this.oG = a;
  this.IB = new RegExp(this.hc, "g");
};
g.Generator.Eb = "generated_function";
b = g.Generator.prototype;
b.Io = null;
b.Id = null;
b.Wc = null;
b.ud = "  ";
b.hB = 60;
b.Ro = [];
function Yd() {
  var a = g.j,
    c = G;
  c ||
    (console.warn("No workspace specified in workspaceToCode call.  Guessing."),
    (c = g.Gb()));
  var d = [];
  a.Z(c);
  c = A(c, !0);
  for (var e = 0, f; (f = c[e]); e++) {
    var h = me(a, f);
    Array.isArray(h) && (h = h[0]);
    h &&
      (f.L &&
        ((h = a.hA(h)),
        a.Id && !f.li && (h = T(a.Id, f) + h),
        a.Wc && !f.li && (h += T(a.Wc, f))),
      d.push(h));
  }
  d = d.join("\n");
  d = a.finish(d);
  d = d.replace(/^\s+\n/, "");
  d = d.replace(/\n\s+$/, "\n");
  return (d = d.replace(/[ \t]+\n/g, "\n"));
}
function ne(a, c) {
  return c + a.replace(/(?!\n$)\n/g, "\n" + c);
}
function me(a, c) {
  if (!c) return "";
  if (!c.isEnabled()) return me(a, q(c));
  var d = a[c.type];
  if ("function" != typeof d)
    throw Error(
      'Language "' +
        a.oG +
        '" does not know how to generate  code for block type "' +
        c.type +
        '".'
    );
  d = d.call(c, c);
  if (Array.isArray(d)) {
    if (!c.L)
      throw TypeError("Expecting string from statement block: " + c.type);
    return [a.Bq(c, d[0], void 0), d[1]];
  }
  if ("string" == typeof d)
    return (
      a.Id && !c.li && (d = T(a.Id, c) + d),
      a.Wc && !c.li && (d += T(a.Wc, c)),
      a.Bq(c, d, void 0)
    );
  if (null === d) return "";
  throw SyntaxError("Invalid code generated: " + d);
}
function U(a, c, d) {
  var e = g.j;
  if (isNaN(d)) throw TypeError("Expecting valid order from block: " + a.type);
  var f = N(a, c);
  if (!f) return "";
  c = me(e, f);
  if ("" === c) return "";
  if (!Array.isArray(c))
    throw TypeError("Expecting tuple from value block: " + f.type);
  a = c[0];
  c = c[1];
  if (isNaN(c))
    throw TypeError("Expecting valid order from value block: " + f.type);
  if (!a) return "";
  f = !1;
  var h = Math.floor(d),
    k = Math.floor(c);
  if (h <= k && (h != k || (0 != h && 99 != h)))
    for (f = !0, h = 0; h < e.Ro.length; h++)
      if (e.Ro[h][0] == d && e.Ro[h][1] == c) {
        f = !1;
        break;
      }
  f && (a = "(" + a + ")");
  return a;
}
function oe(a, c) {
  var d = g.j;
  a = N(a, c);
  c = me(d, a);
  if ("string" != typeof c)
    throw TypeError("Expecting code from statement block: " + (a && a.type));
  c && (c = ne(c, d.ud));
  return c;
}
function pe(a, c) {
  var d = g.j;
  d.Io && (a = ne(T(d.Io, c), d.ud) + a);
  d.Wc && !c.li && (a = ne(T(d.Wc, c), d.ud) + a);
  d.Id && !c.li && (a += ne(T(d.Id, c), d.ud));
  return a;
}
function T(a, c) {
  c = c.id.replace(/\$/g, "$$$$");
  return a.replace(/%1/g, "'" + c + "'");
}
b.Jr = "";
function qe(a) {
  var c = g.j;
  c.Jr += a + ",";
}
b.hc = "{leCUI8hutHZI4480Dc}";
function V(a, c) {
  var d = g.j;
  if (!d.Ui[a]) {
    var e = sd(d.Gd, a, g.Ka.Eb);
    d.ot[a] = e;
    c = c.join("\n").replace(d.IB, e);
    for (var f; f != c; )
      (f = c), (c = c.replace(/^(( {2})*) {2}/gm, "$1\x00"));
    c = c.replace(/\0/g, d.ud);
    d.Ui[a] = c;
  }
  return d.ot[a];
}
b.Z = function () {};
b.Bq = function (a, c) {
  return c;
};
b.finish = function (a) {
  return a;
};
b.hA = function (a) {
  return a;
};
g.j = new g.Generator("JavaScript");
qe(
  "Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan"
);
g.j.Ee = 0;
g.j.zK = 1.1;
g.j.ab = 1.2;
g.j.Aa = 2;
g.j.xK = 3;
g.j.tK = 3;
g.j.pK = 4.1;
g.j.BK = 4.2;
g.j.Vl = 4.3;
g.j.kk = 4.4;
g.j.AK = 4.5;
g.j.CK = 4.6;
g.j.uK = 4.7;
g.j.nK = 4.8;
g.j.vK = 5;
g.j.Dr = 5.1;
g.j.Tl = 5.2;
g.j.Ul = 5.3;
g.j.Bg = 6.1;
g.j.Ag = 6.2;
g.j.rK = 7;
g.j.BC = 8;
g.j.wK = 8;
g.j.yK = 8;
g.j.pw = 9;
g.j.oK = 10;
g.j.sK = 11;
g.j.qK = 12;
g.j.Br = 13;
g.j.Cr = 14;
g.j.Qo = 15;
g.j.Ai = 16;
g.j.DK = 17;
g.j.Ya = 18;
g.j.wb = 99;
g.j.Ro = [
  [g.j.Aa, g.j.ab],
  [g.j.Aa, g.j.Aa],
  [g.j.ab, g.j.ab],
  [g.j.ab, g.j.Aa],
  [g.j.kk, g.j.kk],
  [g.j.Dr, g.j.Dr],
  [g.j.Ag, g.j.Ag],
  [g.j.Br, g.j.Br],
  [g.j.Cr, g.j.Cr],
];
g.j.Z = function (a) {
  g.j.Ui = Object.create(null);
  g.j.ot = Object.create(null);
  g.j.Gd ? g.j.Gd.reset() : (g.j.Gd = new g.fe(g.j.Jr));
  g.j.Gd.Va = a.Va;
  for (var c = [], d = g.N.AD(a), e = 0; e < d.length; e++)
    c.push(rd(d[e], g.fe.ir));
  a = g.N.Vw(a);
  for (e = 0; e < a.length; e++) c.push(rd(a[e].va(), g.N.Eb));
  c.length && (g.j.Ui.variables = "var " + c.join(", ") + ";");
};
g.j.finish = function (a) {
  var c = [],
    d;
  for (d in g.j.Ui) c.push(g.j.Ui[d]);
  delete g.j.Ui;
  delete g.j.ot;
  g.j.Gd.reset();
  return c.join("\n\n") + "\n\n\n" + a;
};
g.j.hA = function (a) {
  return a + ";\n";
};
g.j.uq = function (a) {
  a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
  return "'" + a + "'";
};
g.j.kG = function (a) {
  return a.split(/\n/g).map(g.j.uq).join(" + '\\n' +\n");
};
g.j.Bq = function (a, c, d) {
  var e = "";
  if (!a.L || !a.L.ka) {
    var f = a.Je.text;
    f && ((f = g.g.jb.IA(f, g.j.hB - 3)), (e += ne(f + "\n", "// ")));
    for (var h = 0; h < a.P.length; h++)
      if (a.P[h].type == g.Ra) {
        var k = C(a.P[h].connection);
        if (k) {
          f = [];
          k = p(k, !0);
          for (var l = 0; l < k.length; l++) {
            var m = k[l].Je.text;
            m && f.push(m);
          }
          f.length && f.push("");
          (f = f.join("\n")) && (e += ne(f, "// "));
        }
      }
  }
  a = a.U && C(a.U);
  d = d ? "" : me(g.j, a);
  return e + c + d;
};
g.j.Kc = function (a, c, d, e, f) {
  d = d || 0;
  f = f || g.j.wb;
  a.v.options.Dd && d--;
  var h = a.v.options.Dd ? "1" : "0";
  a =
    0 < d
      ? U(a, c, g.j.Ag) || h
      : 0 > d
      ? U(a, c, g.j.Bg) || h
      : e
      ? U(a, c, g.j.Vl) || h
      : U(a, c, f) || h;
  if (g.Wh(a)) (a = Number(a) + d), e && (a = -a);
  else {
    if (0 < d) {
      a = a + " + " + d;
      var k = g.j.Ag;
    } else 0 > d && ((a = a + " - " + -d), (k = g.j.Bg));
    e && ((a = d ? "-(" + a + ")" : "-" + a), (k = g.j.Vl));
    k = Math.floor(k);
    f = Math.floor(f);
    k && f >= k && (a = "(" + a + ")");
  }
  return a;
};
g.j.Ab = {};
g.j.colour_picker = function (a) {
  return [g.j.uq(z(a, "COLOUR")), g.j.Ee];
};
g.j.colour_random = function () {
  return [
    V("colourRandom", [
      "function " + g.j.hc + "() {",
      "  var num = Math.floor(Math.random() * Math.pow(2, 24));",
      "  return '#' + ('00000' + num.toString(16)).substr(-6);",
      "}",
    ]) + "()",
    g.j.Aa,
  ];
};
g.j.colour_rgb = function (a) {
  var c = U(a, "RED", g.j.Ya) || 0,
    d = U(a, "GREEN", g.j.Ya) || 0;
  a = U(a, "BLUE", g.j.Ya) || 0;
  return [
    V("colourRgb", [
      "function " + g.j.hc + "(r, g, b) {",
      "  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;",
      "  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;",
      "  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;",
      "  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);",
      "  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);",
      "  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);",
      "  return '#' + r + g + b;",
      "}",
    ]) +
      "(" +
      c +
      ", " +
      d +
      ", " +
      a +
      ")",
    g.j.Aa,
  ];
};
g.j.colour_blend = function (a) {
  var c = U(a, "COLOUR1", g.j.Ya) || "'#000000'",
    d = U(a, "COLOUR2", g.j.Ya) || "'#000000'";
  a = U(a, "RATIO", g.j.Ya) || 0.5;
  return [
    V("colourBlend", [
      "function " + g.j.hc + "(c1, c2, ratio) {",
      "  ratio = Math.max(Math.min(Number(ratio), 1), 0);",
      "  var r1 = parseInt(c1.substring(1, 3), 16);",
      "  var g1 = parseInt(c1.substring(3, 5), 16);",
      "  var b1 = parseInt(c1.substring(5, 7), 16);",
      "  var r2 = parseInt(c2.substring(1, 3), 16);",
      "  var g2 = parseInt(c2.substring(3, 5), 16);",
      "  var b2 = parseInt(c2.substring(5, 7), 16);",
      "  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);",
      "  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);",
      "  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);",
      "  r = ('0' + (r || 0).toString(16)).slice(-2);",
      "  g = ('0' + (g || 0).toString(16)).slice(-2);",
      "  b = ('0' + (b || 0).toString(16)).slice(-2);",
      "  return '#' + r + g + b;",
      "}",
    ]) +
      "(" +
      c +
      ", " +
      d +
      ", " +
      a +
      ")",
    g.j.Aa,
  ];
};
g.j.au = {};
g.j.lists_create_empty = function () {
  return ["[]", g.j.Ee];
};
g.j.lists_create_with = function (a) {
  for (var c = Array(a.Lb), d = 0; d < a.Lb; d++)
    c[d] = U(a, "ADD" + d, g.j.Ya) || "null";
  return ["[" + c.join(", ") + "]", g.j.Ee];
};
g.j.lists_repeat = function (a) {
  var c = V("listsRepeat", [
      "function " + g.j.hc + "(value, n) {",
      "  var array = [];",
      "  for (var i = 0; i < n; i++) {",
      "    array[i] = value;",
      "  }",
      "  return array;",
      "}",
    ]),
    d = U(a, "ITEM", g.j.Ya) || "null";
  a = U(a, "NUM", g.j.Ya) || "0";
  return [c + "(" + d + ", " + a + ")", g.j.Aa];
};
g.j.lists_length = function (a) {
  return [(U(a, "VALUE", g.j.ab) || "[]") + ".length", g.j.ab];
};
g.j.lists_isEmpty = function (a) {
  return ["!" + (U(a, "VALUE", g.j.ab) || "[]") + ".length", g.j.kk];
};
g.j.lists_indexOf = function (a) {
  var c = "FIRST" == z(a, "END") ? "indexOf" : "lastIndexOf",
    d = U(a, "FIND", g.j.wb) || "''";
  c = (U(a, "VALUE", g.j.ab) || "[]") + "." + c + "(" + d + ")";
  return a.v.options.Dd ? [c + " + 1", g.j.Ag] : [c, g.j.Aa];
};
g.j.lists_getIndex = function (a) {
  var c = z(a, "MODE") || "GET",
    d = z(a, "WHERE") || "FROM_START",
    e = U(a, "VALUE", "RANDOM" == d ? g.j.Ya : g.j.ab) || "[]";
  switch (d) {
    case "FIRST":
      if ("GET" == c) return [e + "[0]", g.j.ab];
      if ("GET_REMOVE" == c) return [e + ".shift()", g.j.ab];
      if ("REMOVE" == c) return e + ".shift();\n";
      break;
    case "LAST":
      if ("GET" == c) return [e + ".slice(-1)[0]", g.j.ab];
      if ("GET_REMOVE" == c) return [e + ".pop()", g.j.ab];
      if ("REMOVE" == c) return e + ".pop();\n";
      break;
    case "FROM_START":
      a = g.j.Kc(a, "AT");
      if ("GET" == c) return [e + "[" + a + "]", g.j.ab];
      if ("GET_REMOVE" == c) return [e + ".splice(" + a + ", 1)[0]", g.j.Aa];
      if ("REMOVE" == c) return e + ".splice(" + a + ", 1);\n";
      break;
    case "FROM_END":
      a = g.j.Kc(a, "AT", 1, !0);
      if ("GET" == c) return [e + ".slice(" + a + ")[0]", g.j.Aa];
      if ("GET_REMOVE" == c) return [e + ".splice(" + a + ", 1)[0]", g.j.Aa];
      if ("REMOVE" == c) return e + ".splice(" + a + ", 1);";
      break;
    case "RANDOM":
      e =
        V("listsGetRandomItem", [
          "function " + g.j.hc + "(list, remove) {",
          "  var x = Math.floor(Math.random() * list.length);",
          "  if (remove) {",
          "    return list.splice(x, 1)[0];",
          "  } else {",
          "    return list[x];",
          "  }",
          "}",
        ]) +
        "(" +
        e +
        ", " +
        ("GET" != c) +
        ")";
      if ("GET" == c || "GET_REMOVE" == c) return [e, g.j.Aa];
      if ("REMOVE" == c) return e + ";\n";
  }
  throw Error("Unhandled combination (lists_getIndex).");
};
g.j.lists_setIndex = function (a) {
  function c() {
    if (d.match(/^\w+$/)) return "";
    var k = sd(g.j.Gd, "tmpList", g.N.Eb),
      l = "var " + k + " = " + d + ";\n";
    d = k;
    return l;
  }
  var d = U(a, "LIST", g.j.ab) || "[]",
    e = z(a, "MODE") || "GET",
    f = z(a, "WHERE") || "FROM_START",
    h = U(a, "TO", g.j.Ai) || "null";
  switch (f) {
    case "FIRST":
      if ("SET" == e) return d + "[0] = " + h + ";\n";
      if ("INSERT" == e) return d + ".unshift(" + h + ");\n";
      break;
    case "LAST":
      if ("SET" == e)
        return (a = c()), a + (d + "[" + d + ".length - 1] = " + h + ";\n");
      if ("INSERT" == e) return d + ".push(" + h + ");\n";
      break;
    case "FROM_START":
      f = g.j.Kc(a, "AT");
      if ("SET" == e) return d + "[" + f + "] = " + h + ";\n";
      if ("INSERT" == e) return d + ".splice(" + f + ", 0, " + h + ");\n";
      break;
    case "FROM_END":
      f = g.j.Kc(a, "AT", 1, !1, g.j.Bg);
      a = c();
      if ("SET" == e)
        return a + (d + "[" + d + ".length - " + f + "] = " + h + ";\n");
      if ("INSERT" == e)
        return (
          a + (d + ".splice(" + d + ".length - " + f + ", 0, " + h + ");\n")
        );
      break;
    case "RANDOM":
      a = c();
      f = sd(g.j.Gd, "tmpX", g.N.Eb);
      a += "var " + f + " = Math.floor(Math.random() * " + d + ".length);\n";
      if ("SET" == e) return a + (d + "[" + f + "] = " + h + ";\n");
      if ("INSERT" == e) return a + (d + ".splice(" + f + ", 0, " + h + ");\n");
  }
  throw Error("Unhandled combination (lists_setIndex).");
};
g.j.au.wt = function (a, c, d) {
  return "FIRST" == c
    ? "0"
    : "FROM_END" == c
    ? a + ".length - 1 - " + d
    : "LAST" == c
    ? a + ".length - 1"
    : d;
};
g.j.lists_getSublist = function (a) {
  var c = U(a, "LIST", g.j.ab) || "[]",
    d = z(a, "WHERE1"),
    e = z(a, "WHERE2");
  if ("FIRST" == d && "LAST" == e) c += ".slice(0)";
  else if (c.match(/^\w+$/) || ("FROM_END" != d && "FROM_START" == e)) {
    switch (d) {
      case "FROM_START":
        var f = g.j.Kc(a, "AT1");
        break;
      case "FROM_END":
        f = g.j.Kc(a, "AT1", 1, !1, g.j.Bg);
        f = c + ".length - " + f;
        break;
      case "FIRST":
        f = "0";
        break;
      default:
        throw Error("Unhandled option (lists_getSublist).");
    }
    switch (e) {
      case "FROM_START":
        a = g.j.Kc(a, "AT2", 1);
        break;
      case "FROM_END":
        a = g.j.Kc(a, "AT2", 0, !1, g.j.Bg);
        a = c + ".length - " + a;
        break;
      case "LAST":
        a = c + ".length";
        break;
      default:
        throw Error("Unhandled option (lists_getSublist).");
    }
    c = c + ".slice(" + f + ", " + a + ")";
  } else {
    f = g.j.Kc(a, "AT1");
    a = g.j.Kc(a, "AT2");
    var h = g.j.au.wt,
      k = {
        FIRST: "First",
        LAST: "Last",
        FROM_START: "FromStart",
        FROM_END: "FromEnd",
      };
    c =
      V("subsequence" + k[d] + k[e], [
        "function " +
          g.j.hc +
          "(sequence" +
          ("FROM_END" == d || "FROM_START" == d ? ", at1" : "") +
          ("FROM_END" == e || "FROM_START" == e ? ", at2" : "") +
          ") {",
        "  var start = " + h("sequence", d, "at1") + ";",
        "  var end = " + h("sequence", e, "at2") + " + 1;",
        "  return sequence.slice(start, end);",
        "}",
      ]) +
      "(" +
      c +
      ("FROM_END" == d || "FROM_START" == d ? ", " + f : "") +
      ("FROM_END" == e || "FROM_START" == e ? ", " + a : "") +
      ")";
  }
  return [c, g.j.Aa];
};
g.j.lists_sort = function (a) {
  var c = U(a, "LIST", g.j.Aa) || "[]",
    d = "1" === z(a, "DIRECTION") ? 1 : -1;
  a = z(a, "TYPE");
  var e = V("listsGetSortCompare", [
    "function " + g.j.hc + "(type, direction) {",
    "  var compareFuncs = {",
    '    "NUMERIC": function(a, b) {',
    "        return Number(a) - Number(b); },",
    '    "TEXT": function(a, b) {',
    "        return a.toString() > b.toString() ? 1 : -1; },",
    '    "IGNORE_CASE": function(a, b) {',
    "        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },",
    "  };",
    "  var compare = compareFuncs[type];",
    "  return function(a, b) { return compare(a, b) * direction; }",
    "}",
  ]);
  return [c + ".slice().sort(" + e + '("' + a + '", ' + d + "))", g.j.Aa];
};
g.j.lists_split = function (a) {
  var c = U(a, "INPUT", g.j.ab),
    d = U(a, "DELIM", g.j.wb) || "''";
  a = z(a, "MODE");
  if ("SPLIT" == a) c || (c = "''"), (a = "split");
  else if ("JOIN" == a) c || (c = "[]"), (a = "join");
  else throw Error("Unknown mode: " + a);
  return [c + "." + a + "(" + d + ")", g.j.Aa];
};
g.j.lists_reverse = function (a) {
  return [(U(a, "LIST", g.j.Aa) || "[]") + ".slice().reverse()", g.j.Aa];
};
g.j.YF = {};
g.j.controls_if = function (a) {
  var c = 0,
    d = "";
  g.j.Id && (d += T(g.j.Id, a));
  do {
    var e = U(a, "IF" + c, g.j.wb) || "false";
    var f = oe(a, "DO" + c);
    g.j.Wc && (f = ne(T(g.j.Wc, a), g.j.ud) + f);
    d += (0 < c ? " else " : "") + "if (" + e + ") {\n" + f + "}";
    ++c;
  } while (E(a, "IF" + c));
  if (E(a, "ELSE") || g.j.Wc)
    (f = oe(a, "ELSE")),
      g.j.Wc && (f = ne(T(g.j.Wc, a), g.j.ud) + f),
      (d += " else {\n" + f + "}");
  return d + "\n";
};
g.j.controls_ifelse = g.j.controls_if;
g.j.logic_compare = function (a) {
  var c = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" }[
      z(a, "OP")
    ],
    d = "==" == c || "!=" == c ? g.j.pw : g.j.BC,
    e = U(a, "A", d) || "0";
  a = U(a, "B", d) || "0";
  return [e + " " + c + " " + a, d];
};
g.j.logic_operation = function (a) {
  var c = "AND" == z(a, "OP") ? "&&" : "||",
    d = "&&" == c ? g.j.Br : g.j.Cr,
    e = U(a, "A", d);
  a = U(a, "B", d);
  if (e || a) {
    var f = "&&" == c ? "true" : "false";
    e || (e = f);
    a || (a = f);
  } else a = e = "false";
  return [e + " " + c + " " + a, d];
};
g.j.logic_negate = function (a) {
  var c = g.j.kk;
  return ["!" + (U(a, "BOOL", c) || "true"), c];
};
g.j.logic_boolean = function (a) {
  return ["TRUE" == z(a, "BOOL") ? "true" : "false", g.j.Ee];
};
g.j.logic_null = function () {
  return ["null", g.j.Ee];
};
g.j.logic_ternary = function (a) {
  var c = U(a, "IF", g.j.Qo) || "false",
    d = U(a, "THEN", g.j.Qo) || "null";
  a = U(a, "ELSE", g.j.Qo) || "null";
  return [c + " ? " + d + " : " + a, g.j.Qo];
};
g.j.$F = {};
g.j.controls_repeat_ext = function (a) {
  var c = B(a, "TIMES")
      ? String(Number(z(a, "TIMES")))
      : U(a, "TIMES", g.j.Ai) || "0",
    d = oe(a, "DO");
  d = pe(d, a);
  a = "";
  var e = sd(g.j.Gd, "count", g.N.Eb),
    f = c;
  c.match(/^\w+$/) ||
    g.Wh(c) ||
    ((f = sd(g.j.Gd, "repeat_end", g.N.Eb)),
    (a += "var " + f + " = " + c + ";\n"));
  return (
    a +
    ("for (var " +
      e +
      " = 0; " +
      e +
      " < " +
      f +
      "; " +
      e +
      "++) {\n" +
      d +
      "}\n")
  );
};
g.j.controls_repeat = g.j.controls_repeat_ext;
g.j.controls_whileUntil = function (a) {
  var c = "UNTIL" == z(a, "MODE"),
    d = U(a, "BOOL", c ? g.j.kk : g.j.wb) || "false",
    e = oe(a, "DO");
  e = pe(e, a);
  c && (d = "!" + d);
  return "while (" + d + ") {\n" + e + "}\n";
};
g.j.controls_for = function (a) {
  var c = rd(z(a, "VAR"), g.N.Eb),
    d = U(a, "FROM", g.j.Ai) || "0",
    e = U(a, "TO", g.j.Ai) || "0",
    f = U(a, "BY", g.j.Ai) || "1",
    h = oe(a, "DO");
  h = pe(h, a);
  if (g.Wh(d) && g.Wh(e) && g.Wh(f)) {
    var k = Number(d) <= Number(e);
    a =
      "for (" + c + " = " + d + "; " + c + (k ? " <= " : " >= ") + e + "; " + c;
    c = Math.abs(Number(f));
    a =
      (1 == c ? a + (k ? "++" : "--") : a + ((k ? " += " : " -= ") + c)) +
      (") {\n" + h + "}\n");
  } else
    (a = ""),
      (k = d),
      d.match(/^\w+$/) ||
        g.Wh(d) ||
        ((k = sd(g.j.Gd, c + "_start", g.N.Eb)),
        (a += "var " + k + " = " + d + ";\n")),
      (d = e),
      e.match(/^\w+$/) ||
        g.Wh(e) ||
        ((d = sd(g.j.Gd, c + "_end", g.N.Eb)),
        (a += "var " + d + " = " + e + ";\n")),
      (e = sd(g.j.Gd, c + "_inc", g.N.Eb)),
      (a += "var " + e + " = "),
      (a = g.Wh(f)
        ? a + (Math.abs(f) + ";\n")
        : a + ("Math.abs(" + f + ");\n")),
      (a =
        a +
        ("if (" + k + " > " + d + ") {\n") +
        (g.j.ud + e + " = -" + e + ";\n")),
      (a += "}\n"),
      (a +=
        "for (" +
        c +
        " = " +
        k +
        "; " +
        e +
        " >= 0 ? " +
        c +
        " <= " +
        d +
        " : " +
        c +
        " >= " +
        d +
        "; " +
        c +
        " += " +
        e +
        ") {\n" +
        h +
        "}\n");
  return a;
};
g.j.controls_forEach = function (a) {
  var c = rd(z(a, "VAR"), g.N.Eb),
    d = U(a, "LIST", g.j.Ai) || "[]",
    e = oe(a, "DO");
  e = pe(e, a);
  a = "";
  var f = d;
  d.match(/^\w+$/) ||
    ((f = sd(g.j.Gd, c + "_list", g.N.Eb)),
    (a += "var " + f + " = " + d + ";\n"));
  d = sd(g.j.Gd, c + "_index", g.N.Eb);
  e = g.j.ud + c + " = " + f + "[" + d + "];\n" + e;
  return a + ("for (var " + d + " in " + f + ") {\n" + e + "}\n");
};
g.j.controls_flow_statements = function (a) {
  var c = "";
  g.j.Id && (c += T(g.j.Id, a));
  g.j.Wc && (c += T(g.j.Wc, a));
  if (g.j.Id) {
    var d = g.W.Ce.vo.Hy(a);
    d && !d.li && (c += T(g.j.Id, d));
  }
  switch (z(a, "FLOW")) {
    case "BREAK":
      return c + "break;\n";
    case "CONTINUE":
      return c + "continue;\n";
  }
  throw Error("Unknown flow statement.");
};
g.j.Rd = {};
g.j.math_number = function (a) {
  a = Number(z(a, "NUM"));
  return [a, 0 <= a ? g.j.Ee : g.j.Vl];
};
g.j.math_arithmetic = function (a) {
  var c = {
      ADD: [" + ", g.j.Ag],
      MINUS: [" - ", g.j.Bg],
      MULTIPLY: [" * ", g.j.Dr],
      DIVIDE: [" / ", g.j.Tl],
      POWER: [null, g.j.Ya],
    }[z(a, "OP")],
    d = c[0];
  c = c[1];
  var e = U(a, "A", c) || "0";
  a = U(a, "B", c) || "0";
  return d ? [e + d + a, c] : ["Math.pow(" + e + ", " + a + ")", g.j.Aa];
};
g.j.math_single = function (a) {
  var c = z(a, "OP");
  if ("NEG" == c)
    return (
      (a = U(a, "NUM", g.j.Vl) || "0"),
      "-" == a[0] && (a = " " + a),
      ["-" + a, g.j.Vl]
    );
  a =
    "SIN" == c || "COS" == c || "TAN" == c
      ? U(a, "NUM", g.j.Tl) || "0"
      : U(a, "NUM", g.j.wb) || "0";
  switch (c) {
    case "ABS":
      var d = "Math.abs(" + a + ")";
      break;
    case "ROOT":
      d = "Math.sqrt(" + a + ")";
      break;
    case "LN":
      d = "Math.log(" + a + ")";
      break;
    case "EXP":
      d = "Math.exp(" + a + ")";
      break;
    case "POW10":
      d = "Math.pow(10," + a + ")";
      break;
    case "ROUND":
      d = "Math.round(" + a + ")";
      break;
    case "ROUNDUP":
      d = "Math.ceil(" + a + ")";
      break;
    case "ROUNDDOWN":
      d = "Math.floor(" + a + ")";
      break;
    case "SIN":
      d = "Math.sin(" + a + " / 180 * Math.PI)";
      break;
    case "COS":
      d = "Math.cos(" + a + " / 180 * Math.PI)";
      break;
    case "TAN":
      d = "Math.tan(" + a + " / 180 * Math.PI)";
  }
  if (d) return [d, g.j.Aa];
  switch (c) {
    case "LOG10":
      d = "Math.log(" + a + ") / Math.log(10)";
      break;
    case "ASIN":
      d = "Math.asin(" + a + ") / Math.PI * 180";
      break;
    case "ACOS":
      d = "Math.acos(" + a + ") / Math.PI * 180";
      break;
    case "ATAN":
      d = "Math.atan(" + a + ") / Math.PI * 180";
      break;
    default:
      throw Error("Unknown math operator: " + c);
  }
  return [d, g.j.Tl];
};
g.j.math_constant = function (a) {
  return {
    PI: ["Math.PI", g.j.ab],
    E: ["Math.E", g.j.ab],
    GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", g.j.Tl],
    SQRT2: ["Math.SQRT2", g.j.ab],
    SQRT1_2: ["Math.SQRT1_2", g.j.ab],
    INFINITY: ["Infinity", g.j.Ee],
  }[z(a, "CONSTANT")];
};
g.j.math_number_property = function (a) {
  var c = U(a, "NUMBER_TO_CHECK", g.j.Ul) || "0",
    d = z(a, "PROPERTY");
  if ("PRIME" == d) {
    var e =
      V("mathIsPrime", [
        "function " + g.j.hc + "(n) {",
        "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods",
        "  if (n == 2 || n == 3) {",
        "    return true;",
        "  }",
        "  // False if n is NaN, negative, is 1, or not whole.",
        "  // And false if n is divisible by 2 or 3.",
        "  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {",
        "    return false;",
        "  }",
        "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
        "  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {",
        "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {",
        "      return false;",
        "    }",
        "  }",
        "  return true;",
        "}",
      ]) +
      "(" +
      c +
      ")";
    return [e, g.j.Aa];
  }
  switch (d) {
    case "EVEN":
      e = c + " % 2 == 0";
      break;
    case "ODD":
      e = c + " % 2 == 1";
      break;
    case "WHOLE":
      e = c + " % 1 == 0";
      break;
    case "POSITIVE":
      e = c + " > 0";
      break;
    case "NEGATIVE":
      e = c + " < 0";
      break;
    case "DIVISIBLE_BY":
      (a = U(a, "DIVISOR", g.j.Ul) || "0"), (e = c + " % " + a + " == 0");
  }
  return [e, g.j.pw];
};
g.j.math_change = function (a) {
  var c = U(a, "DELTA", g.j.Ag) || "0";
  a = rd(z(a, "VAR"), g.N.Eb);
  return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + c + ";\n";
};
g.j.math_round = g.j.math_single;
g.j.math_trig = g.j.math_single;
g.j.math_on_list = function (a) {
  var c = z(a, "OP");
  switch (c) {
    case "SUM":
      a = U(a, "LIST", g.j.ab) || "[]";
      a += ".reduce(function(x, y) {return x + y;})";
      break;
    case "MIN":
      a = U(a, "LIST", g.j.Ya) || "[]";
      a = "Math.min.apply(null, " + a + ")";
      break;
    case "MAX":
      a = U(a, "LIST", g.j.Ya) || "[]";
      a = "Math.max.apply(null, " + a + ")";
      break;
    case "AVERAGE":
      c = V("mathMean", [
        "function " + g.j.hc + "(myList) {",
        "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;",
        "}",
      ]);
      a = U(a, "LIST", g.j.wb) || "[]";
      a = c + "(" + a + ")";
      break;
    case "MEDIAN":
      c = V("mathMedian", [
        "function " + g.j.hc + "(myList) {",
        "  var localList = myList.filter(function (x) {return typeof x == 'number';});",
        "  if (!localList.length) return null;",
        "  localList.sort(function(a, b) {return b - a;});",
        "  if (localList.length % 2 == 0) {",
        "    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;",
        "  } else {",
        "    return localList[(localList.length - 1) / 2];",
        "  }",
        "}",
      ]);
      a = U(a, "LIST", g.j.wb) || "[]";
      a = c + "(" + a + ")";
      break;
    case "MODE":
      c = V("mathModes", [
        "function " + g.j.hc + "(values) {",
        "  var modes = [];",
        "  var counts = [];",
        "  var maxCount = 0;",
        "  for (var i = 0; i < values.length; i++) {",
        "    var value = values[i];",
        "    var found = false;",
        "    var thisCount;",
        "    for (var j = 0; j < counts.length; j++) {",
        "      if (counts[j][0] === value) {",
        "        thisCount = ++counts[j][1];",
        "        found = true;",
        "        break;",
        "      }",
        "    }",
        "    if (!found) {",
        "      counts.push([value, 1]);",
        "      thisCount = 1;",
        "    }",
        "    maxCount = Math.max(thisCount, maxCount);",
        "  }",
        "  for (var j = 0; j < counts.length; j++) {",
        "    if (counts[j][1] == maxCount) {",
        "        modes.push(counts[j][0]);",
        "    }",
        "  }",
        "  return modes;",
        "}",
      ]);
      a = U(a, "LIST", g.j.wb) || "[]";
      a = c + "(" + a + ")";
      break;
    case "STD_DEV":
      c = V("mathStandardDeviation", [
        "function " + g.j.hc + "(numbers) {",
        "  var n = numbers.length;",
        "  if (!n) return null;",
        "  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;",
        "  var variance = 0;",
        "  for (var j = 0; j < n; j++) {",
        "    variance += Math.pow(numbers[j] - mean, 2);",
        "  }",
        "  variance = variance / n;",
        "  return Math.sqrt(variance);",
        "}",
      ]);
      a = U(a, "LIST", g.j.wb) || "[]";
      a = c + "(" + a + ")";
      break;
    case "RANDOM":
      c = V("mathRandomList", [
        "function " + g.j.hc + "(list) {",
        "  var x = Math.floor(Math.random() * list.length);",
        "  return list[x];",
        "}",
      ]);
      a = U(a, "LIST", g.j.wb) || "[]";
      a = c + "(" + a + ")";
      break;
    default:
      throw Error("Unknown operator: " + c);
  }
  return [a, g.j.Aa];
};
g.j.math_modulo = function (a) {
  var c = U(a, "DIVIDEND", g.j.Ul) || "0";
  a = U(a, "DIVISOR", g.j.Ul) || "0";
  return [c + " % " + a, g.j.Ul];
};
g.j.math_constrain = function (a) {
  var c = U(a, "VALUE", g.j.Ya) || "0",
    d = U(a, "LOW", g.j.Ya) || "0";
  a = U(a, "HIGH", g.j.Ya) || "Infinity";
  return ["Math.min(Math.max(" + c + ", " + d + "), " + a + ")", g.j.Aa];
};
g.j.math_random_int = function (a) {
  var c = U(a, "FROM", g.j.Ya) || "0";
  a = U(a, "TO", g.j.Ya) || "0";
  return [
    V("mathRandomInt", [
      "function " + g.j.hc + "(a, b) {",
      "  if (a > b) {",
      "    // Swap a and b to ensure a is smaller.",
      "    var c = a;",
      "    a = b;",
      "    b = c;",
      "  }",
      "  return Math.floor(Math.random() * (b - a + 1) + a);",
      "}",
    ]) +
      "(" +
      c +
      ", " +
      a +
      ")",
    g.j.Aa,
  ];
};
g.j.math_random_float = function () {
  return ["Math.random()", g.j.Aa];
};
g.j.math_atan2 = function (a) {
  var c = U(a, "X", g.j.Ya) || "0";
  return [
    "Math.atan2(" + (U(a, "Y", g.j.Ya) || "0") + ", " + c + ") / Math.PI * 180",
    g.j.Tl,
  ];
};
g.j.UG = {};
g.j.procedures_defreturn = function (a) {
  var c = rd(z(a, "NAME"), g.Ka.Eb),
    d = "";
  g.j.Id && (d += T(g.j.Id, a));
  g.j.Wc && (d += T(g.j.Wc, a));
  d && (d = ne(d, g.j.ud));
  var e = "";
  g.j.Io && (e = ne(T(g.j.Io, a), g.j.ud));
  var f = oe(a, "STACK"),
    h = U(a, "RETURN", g.j.wb) || "",
    k = "";
  f && h && (k = d);
  h && (h = g.j.ud + "return " + h + ";\n");
  for (var l = [], m = 0; m < a.Ma.length; m++) l[m] = rd(a.Ma[m], g.N.Eb);
  d = "function " + c + "(" + l.join(", ") + ") {\n" + d + e + f + k + h + "}";
  d = g.j.Bq(a, d);
  g.j.Ui["%" + c] = d;
  return null;
};
g.j.procedures_defnoreturn = g.j.procedures_defreturn;
g.j.procedures_callreturn = function (a) {
  for (var c = rd(z(a, "NAME"), g.Ka.Eb), d = [], e = 0; e < a.Ma.length; e++)
    d[e] = U(a, "ARG" + e, g.j.Ya) || "null";
  return [c + "(" + d.join(", ") + ")", g.j.Aa];
};
g.j.procedures_callnoreturn = function (a) {
  return g.j.procedures_callreturn(a)[0] + ";\n";
};
g.j.procedures_ifreturn = function (a) {
  var c = "if (" + (U(a, "CONDITION", g.j.wb) || "false") + ") {\n";
  g.j.Wc && (c += ne(T(g.j.Wc, a), g.j.ud));
  a.Oh
    ? ((a = U(a, "VALUE", g.j.wb) || "null"),
      (c += g.j.ud + "return " + a + ";\n"))
    : (c += g.j.ud + "return;\n");
  return c + "}\n";
};
g.j.xH = {};
g.j.text = function (a) {
  return [g.j.uq(z(a, "TEXT")), g.j.Ee];
};
g.j.text_multiline = function (a) {
  a = g.j.kG(z(a, "TEXT"));
  a.includes("\n") && (a = "(" + a + ")");
  return [a, g.j.Ee];
};
g.j.text.Ik = function (a) {
  return g.j.text.Ik.rH.test(a) ? a : "String(" + a + ")";
};
g.j.text.Ik.rH = /^\s*'([^']|\\')*'\s*$/;
g.j.text_join = function (a) {
  switch (a.Lb) {
    case 0:
      return ["''", g.j.Ee];
    case 1:
      return (
        (a = U(a, "ADD0", g.j.wb) || "''"), (a = g.j.text.Ik(a)), [a, g.j.Aa]
      );
    case 2:
      var c = U(a, "ADD0", g.j.wb) || "''";
      a = U(a, "ADD1", g.j.wb) || "''";
      a = g.j.text.Ik(c) + " + " + g.j.text.Ik(a);
      return [a, g.j.Ag];
    default:
      c = Array(a.Lb);
      for (var d = 0; d < a.Lb; d++) c[d] = U(a, "ADD" + d, g.j.Ya) || "''";
      a = "[" + c.join(",") + "].join('')";
      return [a, g.j.Aa];
  }
};
g.j.text_append = function (a) {
  var c = rd(z(a, "VAR"), g.N.Eb);
  a = U(a, "TEXT", g.j.wb) || "''";
  return c + " += " + g.j.text.Ik(a) + ";\n";
};
g.j.text_length = function (a) {
  return [(U(a, "VALUE", g.j.Aa) || "''") + ".length", g.j.ab];
};
g.j.text_isEmpty = function (a) {
  return ["!" + (U(a, "VALUE", g.j.ab) || "''") + ".length", g.j.kk];
};
g.j.text_indexOf = function (a) {
  var c = "FIRST" == z(a, "END") ? "indexOf" : "lastIndexOf",
    d = U(a, "FIND", g.j.wb) || "''";
  c = (U(a, "VALUE", g.j.ab) || "''") + "." + c + "(" + d + ")";
  return a.v.options.Dd ? [c + " + 1", g.j.Ag] : [c, g.j.Aa];
};
g.j.text_charAt = function (a) {
  var c = z(a, "WHERE") || "FROM_START",
    d = U(a, "VALUE", "RANDOM" == c ? g.j.wb : g.j.ab) || "''";
  switch (c) {
    case "FIRST":
      return [d + ".charAt(0)", g.j.Aa];
    case "LAST":
      return [d + ".slice(-1)", g.j.Aa];
    case "FROM_START":
      return (a = g.j.Kc(a, "AT")), [d + ".charAt(" + a + ")", g.j.Aa];
    case "FROM_END":
      return (
        (a = g.j.Kc(a, "AT", 1, !0)),
        [d + ".slice(" + a + ").charAt(0)", g.j.Aa]
      );
    case "RANDOM":
      return (
        (d =
          V("textRandomLetter", [
            "function " + g.j.hc + "(text) {",
            "  var x = Math.floor(Math.random() * text.length);",
            "  return text[x];",
            "}",
          ]) +
          "(" +
          d +
          ")"),
        [d, g.j.Aa]
      );
  }
  throw Error("Unhandled option (text_charAt).");
};
g.j.text.wt = function (a, c, d) {
  return "FIRST" == c
    ? "0"
    : "FROM_END" == c
    ? a + ".length - 1 - " + d
    : "LAST" == c
    ? a + ".length - 1"
    : d;
};
g.j.text_getSubstring = function (a) {
  var c = U(a, "STRING", g.j.Aa) || "''",
    d = z(a, "WHERE1"),
    e = z(a, "WHERE2");
  if ("FIRST" != d || "LAST" != e)
    if (
      c.match(/^'?\w+'?$/) ||
      ("FROM_END" != d && "LAST" != d && "FROM_END" != e && "LAST" != e)
    ) {
      switch (d) {
        case "FROM_START":
          var f = g.j.Kc(a, "AT1");
          break;
        case "FROM_END":
          f = g.j.Kc(a, "AT1", 1, !1, g.j.Bg);
          f = c + ".length - " + f;
          break;
        case "FIRST":
          f = "0";
          break;
        default:
          throw Error("Unhandled option (text_getSubstring).");
      }
      switch (e) {
        case "FROM_START":
          a = g.j.Kc(a, "AT2", 1);
          break;
        case "FROM_END":
          a = g.j.Kc(a, "AT2", 0, !1, g.j.Bg);
          a = c + ".length - " + a;
          break;
        case "LAST":
          a = c + ".length";
          break;
        default:
          throw Error("Unhandled option (text_getSubstring).");
      }
      c = c + ".slice(" + f + ", " + a + ")";
    } else {
      f = g.j.Kc(a, "AT1");
      a = g.j.Kc(a, "AT2");
      var h = g.j.text.wt,
        k = {
          FIRST: "First",
          LAST: "Last",
          FROM_START: "FromStart",
          FROM_END: "FromEnd",
        };
      c =
        V("subsequence" + k[d] + k[e], [
          "function " +
            g.j.hc +
            "(sequence" +
            ("FROM_END" == d || "FROM_START" == d ? ", at1" : "") +
            ("FROM_END" == e || "FROM_START" == e ? ", at2" : "") +
            ") {",
          "  var start = " + h("sequence", d, "at1") + ";",
          "  var end = " + h("sequence", e, "at2") + " + 1;",
          "  return sequence.slice(start, end);",
          "}",
        ]) +
        "(" +
        c +
        ("FROM_END" == d || "FROM_START" == d ? ", " + f : "") +
        ("FROM_END" == e || "FROM_START" == e ? ", " + a : "") +
        ")";
    }
  return [c, g.j.Aa];
};
g.j.text_changeCase = function (a) {
  var c = {
    UPPERCASE: ".toUpperCase()",
    LOWERCASE: ".toLowerCase()",
    TITLECASE: null,
  }[z(a, "CASE")];
  a = U(a, "TEXT", c ? g.j.ab : g.j.wb) || "''";
  return [
    c
      ? a + c
      : V("textToTitleCase", [
          "function " + g.j.hc + "(str) {",
          "  return str.replace(/\\S+/g,",
          "      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});",
          "}",
        ]) +
        "(" +
        a +
        ")",
    g.j.Aa,
  ];
};
g.j.text_trim = function (a) {
  var c = {
    LEFT: ".replace(/^[\\s\\xa0]+/, '')",
    RIGHT: ".replace(/[\\s\\xa0]+$/, '')",
    BOTH: ".trim()",
  }[z(a, "MODE")];
  return [(U(a, "TEXT", g.j.ab) || "''") + c, g.j.Aa];
};
g.j.text_print = function (a) {
  return "window.alert(" + (U(a, "TEXT", g.j.wb) || "''") + ");\n";
};
g.j.text_prompt_ext = function (a) {
  var c =
    "window.prompt(" +
    (B(a, "TEXT") ? g.j.uq(z(a, "TEXT")) : U(a, "TEXT", g.j.wb) || "''") +
    ")";
  "NUMBER" == z(a, "TYPE") && (c = "Number(" + c + ")");
  return [c, g.j.Aa];
};
g.j.text_prompt = g.j.text_prompt_ext;
g.j.text_count = function (a) {
  var c = U(a, "TEXT", g.j.ab) || "''";
  a = U(a, "SUB", g.j.wb) || "''";
  return [
    V("textCount", [
      "function " + g.j.hc + "(haystack, needle) {",
      "  if (needle.length === 0) {",
      "    return haystack.length + 1;",
      "  } else {",
      "    return haystack.split(needle).length - 1;",
      "  }",
      "}",
    ]) +
      "(" +
      c +
      ", " +
      a +
      ")",
    g.j.Bg,
  ];
};
g.j.text_replace = function (a) {
  var c = U(a, "TEXT", g.j.ab) || "''",
    d = U(a, "FROM", g.j.wb) || "''";
  a = U(a, "TO", g.j.wb) || "''";
  return [
    V("textReplace", [
      "function " + g.j.hc + "(haystack, needle, replacement) {",
      '  needle = needle.replace(/([-()\\[\\]{}+?*.$\\^|,:#<!\\\\])/g,"\\\\$1")',
      '                 .replace(/\\x08/g,"\\\\x08");',
      "  return haystack.replace(new RegExp(needle, 'g'), replacement);",
      "}",
    ]) +
      "(" +
      c +
      ", " +
      d +
      ", " +
      a +
      ")",
    g.j.ab,
  ];
};
g.j.text_reverse = function (a) {
  return [
    (U(a, "TEXT", g.j.ab) || "''") + ".split('').reverse().join('')",
    g.j.ab,
  ];
};
g.j.GH = {};
g.j.variables_get = function (a) {
  return [rd(z(a, "VAR"), g.N.Eb), g.j.Ee];
};
g.j.variables_set = function (a) {
  var c = U(a, "VALUE", g.j.Ai) || "0";
  return rd(z(a, "VAR"), g.N.Eb) + " = " + c + ";\n";
};
g.S.movie_circle = {
  Z: function () {
    this.se(160);
    H(
      H(J(L(this, "X").wa("Number"), g.fd), P("Movie_circleDraw")),
      P("Movie_x")
    );
    H(J(L(this, "Y").wa("Number"), g.fd), P("Movie_y"));
    H(J(L(this, "RADIUS").wa("Number"), g.fd), P("Movie_radius"));
    this.Wd(!0);
    this.Vd(!0);
    this.Ta(P("Movie_circleTooltip"));
  },
};
g.j.movie_circle = function (a) {
  var c = U(a, "X", g.j.Ya) || "0",
    d = U(a, "Y", g.j.Ya) || "0";
  a = U(a, "RADIUS", g.j.Ya) || "0";
  return "circle(" + c + ", " + d + ", " + a + ");\n";
};
g.S.movie_rect = {
  Z: function () {
    this.se(160);
    H(H(J(L(this, "X").wa("Number"), g.fd), P("Movie_rectDraw")), P("Movie_x"));
    H(J(L(this, "Y").wa("Number"), g.fd), P("Movie_y"));
    H(J(L(this, "WIDTH").wa("Number"), g.fd), P("Movie_width"));
    H(J(L(this, "HEIGHT").wa("Number"), g.fd), P("Movie_height"));
    this.Wd(!0);
    this.Vd(!0);
    this.Ta(P("Movie_rectTooltip"));
  },
};
g.j.movie_rect = function (a) {
  var c = U(a, "X", g.j.Ya) || "0",
    d = U(a, "Y", g.j.Ya) || "0",
    e = U(a, "WIDTH", g.j.Ya) || "0";
  a = U(a, "HEIGHT", g.j.Ya) || "0";
  return "rect(" + c + ", " + d + ", " + e + ", " + a + ");\n";
};
g.S.movie_line = {
  Z: function () {
    this.se(160);
    H(
      H(J(L(this, "X1").wa("Number"), g.fd), P("Movie_lineDraw")),
      P("Movie_x1")
    );
    H(J(L(this, "Y1").wa("Number"), g.fd), P("Movie_y1"));
    H(J(L(this, "X2").wa("Number"), g.fd), P("Movie_x2"));
    H(J(L(this, "Y2").wa("Number"), g.fd), P("Movie_y2"));
    H(J(L(this, "WIDTH").wa("Number"), g.fd), P("Movie_width"));
    this.Wd(!0);
    this.Vd(!0);
    this.Ta(P("Movie_rectTooltip"));
  },
};
g.j.movie_line = function (a) {
  var c = U(a, "X1", g.j.Ya) || "0",
    d = U(a, "Y1", g.j.Ya) || "0",
    e = U(a, "X2", g.j.Ya) || "0",
    f = U(a, "Y2", g.j.Ya) || "0";
  a = U(a, "WIDTH", g.j.Ya) || "0";
  return "line(" + c + ", " + d + ", " + e + ", " + f + ", " + a + ");\n";
};
g.S.movie_time = {
  Z: function () {
    this.se(g.h.VARIABLES_HUE);
    H(M(this), "time (0\u2192100)");
    this.bd(!0, "Number");
    this.Ta(P("Movie_timeTooltip"));
  },
};
g.j.movie_time = function () {
  return ["time()", g.j.Ee];
};
g.S.movie_colour = {
  Z: function () {
    this.se(g.h.COLOUR_HUE);
    H(L(this, "COLOUR").wa("Colour"), P("Movie_setColour"));
    this.Wd(!0);
    this.Vd(!0);
    this.Ta(P("Movie_colourTooltip"));
  },
};
g.j.movie_colour = function (a) {
  return "penColour(" + (U(a, "COLOUR", g.j.wb) || "'#000000'") + ");\n";
};
var re = re || {};
function se(a, c) {
  function d() {}
  d.prototype = c.prototype;
  a.w = c.prototype;
  a.prototype = new d();
  a.prototype.constructor = a;
  a.PL = function (e, f, h) {
    return c.prototype[f].apply(e, Array.prototype.slice.call(arguments, 2));
  };
}
if (!te) {
  var te,
    ue = "";
  "undefined" !== typeof navigator &&
    navigator &&
    "string" == typeof navigator.userAgent &&
    (ue = navigator.userAgent);
  var ve = 0 == ue.indexOf("Opera");
  te = {
    jM: { jJ: "ScriptEngine" in window },
    lK: ve,
    yg: !ve && -1 != ue.indexOf("MSIE"),
    Zr: !ve && -1 != ue.indexOf("WebKit"),
  };
}
if (!we) var we = {};
if (!xe) var xe = {};
if (!ye) var ye = {};
if (!ze) var ze = {};
if (!Ae) var Ae = {};
if (!De) var De = {};
var Ee = re.rI ? { qM: !0 } : {};
function Fe() {
  throw Error("Do not instantiate directly");
}
Fe.prototype.vx = null;
Fe.prototype.toString = function () {
  return this.content;
};
function Ge(a) {
  if (null != a)
    switch (a.vx) {
      case 1:
        return 1;
      case -1:
        return -1;
      case 0:
        return 0;
    }
  return null;
}
function He() {
  Fe.call(this);
}
se(He, Fe);
He.prototype.fE = Ee;
function W(a) {
  return null != a && a.fE === Ee
    ? a
    : Ie(String(String(a)).replace(Je, Ke), Ge(a));
}
var Ie = (function (a) {
    function c() {}
    c.prototype = a.prototype;
    return function (d, e) {
      var f = new c();
      f.content = String(d);
      void 0 !== e && (f.vx = e);
      return f;
    };
  })(He),
  Le = {
    "\x00": "&#0;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;",
  };
function Ke(a) {
  return Le[a];
}
var Je = /[\x00\x22\x26\x27\x3c\x3e]/g;
function Me() {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
}
function Ne() {
  for (
    var a =
        '<div style="display: none"><span id="Games_name">Permainan Blockly</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Labirin</span><span id="Games_bird">Burung</span><span id="Games_turtle">Kura-kura</span><span id="Games_movie">Film</span><span id="Games_music">Music</span><span id="Games_pondTutor">Kolam Pembimbing</span><span id="Games_pond">Kolam</span><span id="Games_genetics">Genetik</span><span id="Games_linesOfCode1">Anda menyelesaikan level ini dengan 1 baris JavaScript:</span><span id="Games_linesOfCode2">Anda menyelesaikan level ini dengan %1 baris JavaScript:</span><span id="Games_nextLevel">Apakah Anda siap untuk level\u00a0%1?</span><span id="Games_finalLevel">Apakah Anda siap untuk tantangan berikutnya?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Simpan dan link ke blok.</span><span id="Games_runTooltip">Jalankan program yang Anda tulis.</span><span id="Games_runProgram">Jalankan Program</span><span id="Games_resetTooltip">Hentikan program dan me-reset level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Bantuan</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Batal</span><span id="Games_catLogic">Logika</span><span id="Games_catLoops">Perulangan</span><span id="Games_catMath">Matematika</span><span id="Games_catText">Teks</span><span id="Games_catLists">Daftar</span><span id="Games_catColour">Warna</span><span id="Games_catVariables">Variabel</span><span id="Games_catProcedures">Fungsi</span><span id="Games_httpRequestError">Ada masalah dengan permintaan.</span><span id="Games_linkAlert">Bagikan blok Anda dengan link ini:\n\n%1</span><span id="Games_hashError">Maaf, \'%1\' tidak sesuai dengan program yang tersimpan.</span><span id="Games_xmlError">Tidak dapat memuat file Anda yang tersimpan. Mungkin itu dibuat dengan versi yang berbeda dari Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list</span><span id="Games_textVariable">teks</span><span id="Games_breakLink">Sekali Anda mengedit JavaScript, Anda tidak dapat kembali mengedit blok. OK?</span><span id="Games_blocks">Blok</div></div><div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">start x</span><span id="Movie_y1">start y</span><span id="Movie_x2">end x</span><span id="Movie_y2">end y</span><span id="Movie_radius">radius</span><span id="Movie_width">lebar</span><span id="Movie_height">tinggi</span><span id="Movie_circleTooltip">Gambar lingkaran pada lokasi tertentu dan dengan \\nradius tertentu. </span><span id="Movie_circleDraw">lingkaran</span><span id="Movie_rectTooltip">Gambar empat persegi panjang pada lokasi \\ntertentu dan dengan lebar dan tinggi \\ntertentu. </span><span id="Movie_rectDraw">persegi panjang</span><span id="Movie_lineTooltip">Gambar garis dari satu titik ke lainnya dengan \\nlebar tertentu. </span><span id="Movie_lineDraw">garis</span><span id="Movie_timeTooltip">Kembalikan waktu saat ini dalam animasi (0-100).</span><span id="Movie_colourTooltip">Ubah warna pena.</span><span id="Movie_setColour">set warna ke</span><span id="Movie_submitDisabled">Film Anda tidak bergerak. Gunakan blok untuk membuat sesuatu yang menarik. Kemudian Anda dapat mengirimkan film Anda ke galeri.</span></div><table width="100%"><tr><td><h1><span id="title">' +
        ((xd
          ? '<a href="">'
          : '<a href="./?lang=' + W(vd) + '">') +
          "EXPLORE </a> : " +
          W({ appName: "Movie Game" }.appName) +
          "</span>"),
      c = " &nbsp; ",
      d = 1;
    11 > d;
    d++
  )
    c +=
      " " +
      (d == O
        ? '<span class="level_number level_done" id="level' +
          W(d) +
          '">' +
          W(d) +
          "</span>"
        : 10 == d
        ? '<a class="level_number" id="level' +
          W(d) +
          '" href="?lang=' +
          W(vd) +
          "&level=" +
          W(d) +
          W("") +
          '">' +
          W(d) +
          "</a>"
        : '<a class="level_dot" id="level' +
          W(d) +
          '" href="?lang=' +
          W(vd) +
          "&level=" +
          W(d) +
          W("") +
          '"></a>');
  return (
    a +
    c +
    '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Simpan dan link ke blok."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Bantuan</button></td></tr></table><div id="visualization"><div id="coordinates"><span id="x"></span><span id="y"></span></div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none" dir="ltr"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' +
    (10 != O || xd
      ? ""
      : '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="movie-gallery"><input type="hidden" name="app" value="movie"><input type="hidden" name="lang" value="' +
        W(vd) +
        '"><button type="submit" title="Tampilkan galeri film di Reddit."><img src="common/1x1.gif" class="gallery icon21"> Lihat Galeri</button></form></td><td style="text-align: center;"><button id="submitButton" title="Kirim film Anda ke Reddit."><img src="common/1x1.gif" class="camera icon21"> Kirim ke Galeri</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Kirim film Anda ke Reddit.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="movie"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Title: <input id="galleryTitle" type="text" name="title" required></div><footer>\x3c!--Legal disclaimer goes here if needed.--\x3e</footer><div class="farSide"><button id="galleryCancel" type="button">Batal</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>') +
    ('<xml id="toolbox" style="display: none" xmlns="https://developers.google.com/blockly/xml"><category name="Film"><block type="movie_circle"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="RADIUS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_rect"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="HEIGHT"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_line"><value name="X1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' +
      (1 < O ? '<block type="movie_time"></block>' : "") +
      '</category><category name="Warna"><block type="movie_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block>' +
      (10 == O
        ? '<block type="colour_picker"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>'
        : "") +
      "</category>" +
      (6 < O
        ? '<category name="Logika"><block type="controls_if">' +
          (10 > O ? '<mutation else="1"></mutation>' : "") +
          '</block><block type="logic_compare"></block>' +
          (10 == O
            ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>'
            : "") +
          "</category>"
        : "") +
      (10 == O
        ? '<category name="Perulangan"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category>'
        : "") +
      (2 < O
        ? '<category name="Matematika"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' +
          (10 == O
            ? '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>'
            : "") +
          "</category>"
        : "") +
      (10 == O
        ? '<category name="Daftar"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Variabel" custom="VARIABLE"></category><category name="Fungsi" custom="PROCEDURE"></category>'
        : "") +
      '</xml><div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Selamat!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Batal</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">Tingkat ini sangat sulit. Apakah Anda ingin melewatkannya dan melanjutkan ke permainan berikutnya? Anda selalu bisa kembali lagi nanti.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Batal</button><button id="abortOk" class="secondary">OK</button></div></div><div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>') +
    (Me() + "</div>") +
    (9 == O
      ? '<div id="helpLayer" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Move the background circle to the top of your program.  Then it will appear behind the person.</div>' +
        Me() +
        "</div>"
      : "") +
    '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' +
    (1 == O
      ? "🎨 Yuk, kita gambar orang dengan cara yang gampang!<br><br>Gunakan bentuk-bentuk sederhana seperti <b>lingkaran</b> untuk kepala, <b>persegi panjang</b> untuk badan, dan <b>garis-garis</b> untuk tangan dan kaki.<br><br>Mudah dan seru, kan? Ayo kita mulai menggambar bersama!"
      : 2 == O
      ? "🎥 Level ini seperti nonton film animasi!<br><br>Tugasmu adalah membuat <b>bola merah</b> menggelinding dari kiri ke kanan.<br><br>Tekan tombol ▶️ <b>Play</b> untuk melihat pergerakannya.<div id='sampleHelp2' class='readonly'></div><br>Sambil film berjalan, nilai blok <b>'time'</b> akan berubah dari 0 sampai 100. Nah, kamu bisa pakai angka ini untuk mengatur posisi bola secara tepat!"
      : 3 == O
      ? "🔁 Sekarang tantangannya dibalik!<br><br>Blok <b>'time'</b> tetap berjalan dari 0 ke 100, tapi kamu perlu membuat <b>bola merah</b> bergerak dari 100 ke 0!<br><br>Bisa nggak kamu pikirkan rumus sederhana untuk membalik arahnya?"
      : 4 == O
      ? "🟢 Yuk lanjut ke tantangan selanjutnya!<br><br>Gunakan teknik dari level sebelumnya untuk membuat <b>empat bola hijau</b> bergerak ke <b>empat arah berbeda</b>.<br><br>Siap uji kreatifitasmu?"
      : 5 == O
      ? "🐭 Saatnya menghidupkan tikus lucu ini!<br><br>Membuat kepalanya bergerak itu gampang, tapi... bisakah kamu membuat <b>telinganya ikut goyang?</b><br><br><code class='ltr'>y = ((time - 50) &divide; 5) ^ 2</code><br><code class='rtl'>&lrm;2 ^ (5 &divide; (50 - time)) = y&lrm;</code>"
      : 6 == O
      ? "🧩 Di sini kamu hanya perlu <b>dua baris kode</b>.<br><br>Keliatannya sih sederhana... Tapi coba tebak hasilnya akan seperti apa? 🤔"
      : 7 == O
      ? "⚽ Sekarang kita simulasikan bola jatuh!<br><br>Rumusnya sedikit rumit, tapi seru banget melihat hasilnya nanti.<br><br>Siap coba?"
      : 8 == O
      ? "🔴🔵🟢 Saatnya bermain warna!<br><br>Gunakan blok <b>'if'</b> untuk menggambar:<br>- Bola merah dan biru di <b>paruh pertama</b> film<br>- Bola hijau di <b>paruh kedua</b><br><br>Ayo warnai layarmu!"
      : 9 == O
      ? "🔌 Tantangan spesial!<br><br>Buat bola mengikuti <b>jalur kabel</b> yang sudah digambarkan untukmu.<br><br>Kalau kamu berhasil, itu tandanya kamu jago banget! 💪"
      : 10 == O
      ? "🎬 Buat filmmu sendiri!<br><br>Kamu bebas berkreasi sesuka hati!<br><br>Ada banyak blok baru yang bisa kamu coba. <br><br>Jadi... Selamat bermain dan berkarya ya! 🧠✨" +
        (xd
          ? ""
          : '<br><br><b>Tips:</b> Gunakan tombol <b>"Lihat Galeri"</b> untuk melihat film seru buatan teman-temanmu.<br>Kalau kamu sudah buat film keren juga, klik <b>"Kirim ke Galeri"</b> supaya bisa dipamerkan!')
      : "") +
    "</div>" +
    Me() +
    "</div>"
  );
}
function Oe(a) {
  var c = Pe;
  this.$e = 42;
  this.Ql = 328;
  this.Kl = 11.5;
  this.Mf = 12;
  this.$a = 0;
  this.ex = c;
  this.ks = [];
  this.Yz = [];
  c = g.g.o.Yl;
  var d = document.createElementNS(c, "text");
  d.setAttribute("style", "font-size: 10pt");
  d.setAttribute("x", this.Ql + 9);
  d.setAttribute("y", 16);
  yd() && d.setAttribute("text-anchor", "end");
  a.appendChild(d);
  this.Ed = d;
  d = "#ff3333 #f72f2f #ef2a2a #e72727 #df2222 #d71f1f #cf1a1a".split(" ");
  for (var e = 0; e < d.length; e++) {
    var f = document.createElementNS(c, "rect");
    f.setAttribute("style", "fill: " + d[e]);
    f.setAttribute("x", this.$e);
    f.setAttribute("y", 8 + e);
    f.setAttribute("height", 1);
    a.appendChild(f);
    this.Yz[e] = f;
  }
  d = document.createElementNS(c, "rect");
  d.setAttribute("style", "opacity: 0");
  d.setAttribute("x", this.$e - this.Mf);
  d.setAttribute("y", this.Kl - this.Mf);
  d.setAttribute("width", this.Ql - this.$e + 2 * this.Mf);
  d.setAttribute("height", 2 * this.Mf);
  d.setAttribute("rx", this.Mf);
  d.setAttribute("ry", this.Mf);
  a.appendChild(d);
  f = document.createElementNS(c, "clipPath");
  f.id = "knobClipPath";
  a.appendChild(f);
  e = document.createElementNS(c, "rect");
  e.setAttribute("width", "16");
  e.setAttribute("height", "16");
  e.setAttribute("y", "3");
  f.appendChild(e);
  this.UF = e;
  f = document.createElementNS(c, "image");
  f.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    "movie/icons.png"
  );
  f.setAttribute("clip-path", "url(#knobClipPath)");
  f.setAttribute("width", "63");
  f.setAttribute("height", "42");
  f.setAttribute("y", "3");
  a.appendChild(f);
  this.kz = f;
  f = document.createElementNS(c, "rect");
  f.setAttribute("style", "opacity: 0");
  f.setAttribute("width", 2 * this.Mf);
  f.setAttribute("height", 2 * this.Mf);
  f.setAttribute("y", this.Kl - this.Mf);
  a.appendChild(f);
  this.Ut = f;
  this.setValue(0);
  f = document.createElementNS(c, "clipPath");
  f.id = "playClipPath";
  a.appendChild(f);
  e = document.createElementNS(c, "rect");
  e.setAttribute("width", "21");
  e.setAttribute("height", "21");
  e.setAttribute("x", "4");
  e.setAttribute("y", "1");
  f.appendChild(e);
  c = document.createElementNS(c, "image");
  c.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    "movie/icons.png"
  );
  c.setAttribute("clip-path", "url(#playClipPath)");
  c.setAttribute("width", "63");
  c.setAttribute("height", "42");
  c.setAttribute("x", -17);
  c.setAttribute("y", "-20");
  a.appendChild(c);
  for (this.qq = c; a && "svg" != a.nodeName.toLowerCase(); )
    a = a.parentElement;
  this.bb = a;
  Qe(this.Ut, "mousedown", this, this.jz);
  Qe(this.Ut, "touchstart", this, this.jz);
  Qe(d, "mousedown", this, this.XG);
  Qe(this.bb, "mouseup", null, Re);
  Qe(this.bb, "touchend", null, Re);
  Qe(this.bb, "mousemove", null, Se);
  Qe(this.bb, "touchmove", null, Se);
  Qe(this.qq, "click", this, this.tn);
  Qe(this.qq, "touchend", this, this.tn);
}
var Te = null,
  Ue = 0,
  Ve = 0;
b = Oe.prototype;
b.jz = function (a) {
  this.cl && this.tn();
  if ("touchstart" == a.type) {
    if (1 != a.changedTouches.length) return;
    We(a);
  }
  Te = this;
  Ue = Xe(this, a).x;
  Ve = Number(this.kz.getAttribute("x")) + this.$e + 8;
  a.preventDefault();
};
function Re() {
  Te = null;
}
function Se(a) {
  var c = Te;
  if (c) {
    if ("touchmove" == a.type) {
      if (1 != a.changedTouches.length) return;
      We(a);
    }
    a = Xe(c, a).x - Ue + Ve;
    c.setValue((a - c.$e) / (c.Ql - c.$e));
  }
}
b.XG = function (a) {
  this.cl && this.tn();
  if ("touchstart" == a.type) {
    if (1 != a.changedTouches.length) return;
    We(a);
  }
  a = Xe(this, a).x;
  Ye(this, (a - this.$e) / (this.Ql - this.$e));
};
b.cl = 0;
b.tn = function (a) {
  (a && R.Sg(a)) ||
    (this.cl
      ? (this.qq.setAttribute("x", -17),
        clearTimeout(this.cl),
        (this.cl = 0),
        Ze())
      : (this.qq.setAttribute("x", 4),
        1 <= this.getValue() && this.setValue(0),
        $e(this)));
};
b.nz = 0;
b.mz = 0;
b.HB = 25;
function $e(a) {
  var c = a.getValue();
  if (1 <= c) a.tn();
  else {
    a.setValue(c + 0.01);
    c = Date.now();
    var d = Math.max(1, 1e3 / a.HB - (c - a.nz - a.mz));
    a.cl = setTimeout(function () {
      $e(a);
    }, d);
    a.nz = c;
    a.mz = d;
  }
}
b.getValue = function () {
  return this.$a;
};
function Ye(a, c) {
  function d(h) {
    return function () {
      a.setValue((h * (c - e)) / 9 + e);
    };
  }
  for (; a.ks.length; ) clearTimeout(a.ks.pop());
  for (var e = a.getValue(), f = 0; 10 > f; f++)
    a.ks.push(setTimeout(d(f), (200 * f) / 10));
}
b.setValue = function (a) {
  this.$a = g.g.Rd.zk(a, 0, 1);
  a = this.$e + (this.Ql - this.$e) * this.$a;
  this.UF.setAttribute("x", a - 8);
  this.kz.setAttribute("x", a - 42 - 8);
  this.Ut.setAttribute("x", a - this.Mf);
  for (var c = 0, d; (d = this.Yz[c]); c++)
    d.setAttribute("width", a - this.$e);
  for (; this.Ed.firstChild; ) this.Ed.removeChild(this.Ed.firstChild);
  a = Math.round(100 * this.$a);
  c = document.createTextNode("time = " + a);
  this.Ed.appendChild(c);
  this.ex && this.ex(a);
};
function Xe(a, c) {
  var d = a.bb.createSVGPoint();
  d.x = c.clientX;
  d.y = c.clientY;
  a = a.bb.getScreenCTM().inverse();
  return d.matrixTransform(a);
}
function Qe(a, c, d, e) {
  a.addEventListener(
    c,
    function (f) {
      e.apply(d, arguments);
    },
    !1
  );
}
function We(a) {
  var c = a.changedTouches[0];
  a.clientX = c.clientX;
  a.clientY = c.clientY;
}
var Gd = "movie",
  ae = 1 == O ? 0 : 100,
  be = Array(ae),
  af = !1,
  bf = 0;
function cf() {
  document.getElementById("coordinates").style.display = "block";
}
function df() {
  document.getElementById("coordinates").style.display = "none";
}
function ef(a) {
  var c = yd(),
    d = a.clientX;
  a = a.clientY;
  c && (d -= window.innerWidth);
  var e = document.getElementById("visualization");
  e = g.g.style.Mm(e);
  e = g.g.V.Ek(e, g.g.style.Ft());
  d += c ? e.x : -e.x;
  a -= e.y;
  d /= 4;
  a = 100 - a / 4;
  c && (d += 100);
  10 == O
    ? ((d = Math.round(d)), (a = Math.round(a)))
    : ((d = 10 * Math.round(d / 10)), (a = 10 * Math.round(a / 10)));
  0 <= d && 100 >= d && 0 <= a && 100 >= a
    ? ((document.getElementById("x").textContent = "x = " + d),
      (document.getElementById("y").textContent = "y = " + a))
    : df();
}
function ff() {
  var a = document.getElementById("help"),
    c = document.getElementById("helpButton");
  2 == O &&
    R.LF(
      "sampleHelp2",
      '<xml><block type="movie_time" x="15" y="10"></block></xml>'
    );
  Q.ml(a, c, !0, !0, { width: "50%", left: "25%", top: "5em" }, gf);
  Q.kv();
}
function gf() {
  Q.ov();
}
function hf(a) {
  var c = document.getElementById("visualization");
  S.strokeStyle = "#000";
  S.fillStyle = "#000";
  var d = document.createElement("canvas");
  d.id = "answer" + a;
  d.width = 400;
  d.height = 400;
  d.style.display = "none";
  c.appendChild(d);
  S.canvas.width = S.canvas.width;
  switch (O) {
    case 1:
      X("#ff0000");
      Y(50, 70, 10);
      X("#3333ff");
      jf(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 70, 5);
      Z(60, 50, 80, 70, 5);
      break;
    case 2:
      X("#ff0000");
      Y(50, 70, 10);
      X("#3333ff");
      jf(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 70, 5);
      Z(60, 50, 80, a, 5);
      break;
    case 3:
      X("#ff0000");
      Y(50, 70, 10);
      X("#3333ff");
      jf(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 100 - a, 5);
      Z(60, 50, 80, a, 5);
      break;
    case 4:
      X("#ff0000");
      Y(50, 70, 10);
      X("#3333ff");
      jf(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 100 - a, 5);
      Z(60, 50, 80, a, 5);
      Z(40, 20, a, 0, 5);
      Z(60, 20, 100 - a, 0, 5);
      break;
    case 5:
      X("#ff0000");
      Y(50, 70, 10);
      X("#3333ff");
      jf(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 100 - a, 5);
      Z(60, 50, 80, Math.pow((a - 50) / 5, 2), 5);
      Z(40, 20, a, 0, 5);
      Z(60, 20, 100 - a, 0, 5);
      break;
    case 6:
      X("#ff0000");
      Y(50, 70, 10);
      X("#3333ff");
      jf(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 100 - a, 5);
      Z(60, 50, 80, Math.pow((a - 50) / 5, 2), 5);
      Z(40, 20, a, 0, 5);
      Z(60, 20, 100 - a, 0, 5);
      X("#ff0000");
      Y(20, 100 - a, 5);
      Y(80, Math.pow((a - 50) / 5, 2), 5);
      break;
    case 7:
      X("#ff0000");
      50 > a ? Y(50, 70, 10) : Y(50, 80, 20);
      X("#3333ff");
      jf(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 100 - a, 5);
      Z(60, 50, 80, Math.pow((a - 50) / 5, 2), 5);
      Z(40, 20, a, 0, 5);
      Z(60, 20, 100 - a, 0, 5);
      X("#ff0000");
      Y(20, 100 - a, 5);
      Y(80, Math.pow((a - 50) / 5, 2), 5);
      break;
    case 8:
      X("#ff0000");
      50 > a ? Y(50, 70, 10) : Y(50, 80, 20);
      X("#3333ff");
      jf(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 100 - a, 5);
      Z(60, 50, 80, Math.pow((a - 50) / 5, 2), 5);
      50 > a
        ? (Z(40, 20, a, 0, 5), Z(60, 20, 100 - a, 0, 5))
        : (Z(40, 20, 100 - a, 0, 5), Z(60, 20, a, 0, 5));
      X("#ff0000");
      Y(20, 100 - a, 5);
      Y(80, Math.pow((a - 50) / 5, 2), 5);
      break;
    case 9:
      X("#00ff00"),
        Y(50, a / 2, a / 2),
        X("#ff0000"),
        50 > a ? Y(50, 70, 10) : Y(50, 80, 20),
        X("#3333ff"),
        jf(50, 40, 20, 40),
        X("#000000"),
        Z(40, 50, 20, 100 - a, 5),
        Z(60, 50, 80, Math.pow((a - 50) / 5, 2), 5),
        50 > a
          ? (Z(40, 20, a, 0, 5), Z(60, 20, 100 - a, 0, 5))
          : (Z(40, 20, 100 - a, 0, 5), Z(60, 20, a, 0, 5)),
        X("#ff0000"),
        Y(20, 100 - a, 5),
        Y(80, Math.pow((a - 50) / 5, 2), 5);
  }
  a = d.getContext("2d");
  a.globalCompositeOperation = "copy";
  a.drawImage(S.canvas, 0, 0);
}
function kf() {
  var a = document.getElementById("hatching").getContext("2d");
  a.strokeStyle = "#fff";
  a.lineWidth = 1;
  for (var c = -400; 400 > c; c += 4)
    a.beginPath(), a.moveTo(c, -c), a.lineTo(c + 400, -c + 400), a.stroke();
}
function lf() {
  var a = document.getElementById("axies").getContext("2d");
  a.lineWidth = 1;
  a.strokeStyle = "#bba";
  a.fillStyle = "#bba";
  a.font = "normal 14px sans-serif";
  for (var c = 1, d = 0.1; 0.9 > d; d += 0.1)
    a.beginPath(),
      a.moveTo(400 * d, 400),
      a.lineTo(400 * d, 400 - 9 * c),
      a.stroke(),
      a.beginPath(),
      a.moveTo(0, 400 * d),
      a.lineTo(9 * c, 400 * d),
      a.stroke(),
      2 == c &&
        (a.fillText(Math.round(100 * d), 400 * d + 2, 396),
        a.fillText(Math.round(100 - 100 * d), 3, 400 * d - 2)),
      (c = 1 == c ? 2 : 1);
}
function mf(a) {
  S.canvas.width = S.canvas.width;
  S.strokeStyle = "#000";
  S.fillStyle = "#000";
  S.globalAlpha = 10 == O ? 1 : 0.9;
  for (var c = !0, d = 0; c && 1e4 > d; d++)
    try {
      c = a.step();
    } catch (e) {
      alert(e), (c = !1);
    }
}
function Pe(a) {
  if ("Interpreter" in window) {
    "number" == typeof a && (bf = a);
    var c = bf;
    Zd.beginPath();
    Zd.rect(0, 0, Zd.canvas.width, Zd.canvas.height);
    Zd.fillStyle = "#ffffff";
    Zd.fill();
    if ((c = document.getElementById("answer" + c)))
      (Zd.globalAlpha = 0.2), Zd.drawImage(c, 0, 0), (Zd.globalAlpha = 1);
    c = document.getElementById("hatching");
    Zd.drawImage(c, 0, 0);
    c = Yd();
    try {
      var d = new Interpreter(c, nf);
    } catch (e) {
      console.error(e);
    }
    d ? mf(d) : (S.canvas.width = S.canvas.width);
    Zd.drawImage(S.canvas, 0, 0);
    Zd.drawImage(document.getElementById("axies"), 0, 0);
    of();
    1 == O && setTimeout(Ze, 1e3);
  } else
    setTimeout(function () {
      Pe(a);
    }, 250);
}
function nf(a, c) {
  var d = function (e, f, h) {
    Y(e, f, h);
  };
  a.setProperty(c, "circle", a.createNativeFunction(d));
  d = function (e, f, h, k) {
    jf(e, f, h, k);
  };
  a.setProperty(c, "rect", a.createNativeFunction(d));
  d = function (e, f, h, k, l) {
    Z(e, f, h, k, l);
  };
  a.setProperty(c, "line", a.createNativeFunction(d));
  d = function (e) {
    X(e);
  };
  a.setProperty(c, "penColour", a.createNativeFunction(d));
  a.setProperty(
    c,
    "time",
    a.createNativeFunction(function () {
      return bf;
    })
  );
}
function Y(a, c, d) {
  a *= 4;
  c = 4 * (100 - c);
  d = Math.max(4 * d, 0);
  S.beginPath();
  S.arc(a, c, d, 0, 2 * Math.PI, !1);
  S.fill();
}
function jf(a, c, d, e) {
  a *= 4;
  c = 4 * (100 - c);
  d = Math.max(4 * d, 0);
  e = Math.max(4 * e, 0);
  S.beginPath();
  S.rect(a - d / 2, c - e / 2, d, e);
  S.fill();
}
function Z(a, c, d, e, f) {
  a *= 4;
  c = 4 * (100 - c);
  d *= 4;
  e = 4 * (100 - e);
  f *= 4;
  S.beginPath();
  S.moveTo(a, c);
  S.lineTo(d, e);
  S.lineWidth = Math.max(f, 0);
  S.stroke();
}
function X(a) {
  S.strokeStyle = a;
  S.fillStyle = a;
}
function of() {
  var a = document.getElementById("answer" + bf);
  if (a) {
    a = a.getContext("2d").getImageData(0, 0, 400, 400);
    for (
      var c = S.getImageData(0, 0, 400, 400),
        d = Math.min(c.data.length, a.data.length),
        e = 0,
        f = 3;
      f < d;
      f += 4
    )
      96 < Math.abs(c.data[f] - a.data[f]) && e++;
    be[bf] = e;
  }
}
function Ze() {
  (1 < O && bf != ae) ||
    !$d() ||
    af ||
    ((af = !0), R.cH(), 10 > O && (G.Rf.play("win", 0.5), Q.cE()));
}
function pf() {
  var a = y(G).length,
    c = Yd();
  if (4 > a || -1 == c.indexOf("time()")) alert(P("Movie_submitDisabled"));
  else {
    a = new Interpreter(c, nf);
    c = bf;
    try {
      (bf = Math.round(ae / 2)), mf(a);
    } finally {
      bf = c;
    }
    a = document.getElementById("thumbnail");
    c = a.getContext("2d");
    c.globalCompositeOperation = "copy";
    c.drawImage(S.canvas, 0, 0, 200, 200);
    a = a.toDataURL("image/png");
    document.getElementById("galleryThumb").value = a;
    Q.iv();
  }
}
window.addEventListener("load", function () {
  function a() {
    d.style.top = Math.max(10, e.offsetTop - window.pageYOffset) + "px";
    d.style.left = c ? "10px" : "420px";
    d.style.width = window.innerWidth - 440 + "px";
  }
  document.body.innerHTML = Ne();
  R.Z();
  var c = yd(),
    d = document.getElementById("blockly"),
    e = document.getElementById("visualization");
  window.addEventListener("scroll", function () {
    a(null);
    g.rl(G);
  });
  window.addEventListener("resize", a);
  a(null);
  10 > O &&
    ((g.Ib.so = 3),
    (g.Ib.qo =
      "#ff0000 #ffcc33 #ffff00 #009900 #3333ff #cc33cc #ffffff #999999 #000000".split(
        " "
      )));
  var f = document.getElementById("toolbox");
  G = g.Rh("blockly", {
    media: "third-party/blockly/media/",
    rtl: c,
    toolbox: f,
    trashcan: !0,
    zoom: 10 == O ? { controls: !0, wheel: !0 } : null,
  });
  qe("circle,rect,line,penColour,time");
  document.getElementById("submitButton") && Hd("submitButton", pf);
  R.WF("<xml></xml>", !0);
  Zd = document.getElementById("display").getContext("2d");
  Zd.globalCompositeOperation = "source-over";
  S = document.getElementById("scratch").getContext("2d");
  kf();
  hf(0);
  setTimeout(function () {
    for (var h = 1; h <= ae; h++) hf(h);
  }, 1);
  lf();
  Pe();
  Ba(G, Pe);
  f = document.getElementById("scrubber");
  new Oe(f);
  1 == O && (f.style.display = "none");
  G.Rf.load(["movie/win.mp3", "movie/win.ogg"], "win");
  setTimeout(R.HF, 3);
  setTimeout(R.IF, 3);
  Hd("helpButton", ff);
  2 > location.hash.length && !Ed(O) && setTimeout(ff, 1e3);
  e.addEventListener("mouseover", cf);
  e.addEventListener("mouseout", df);
  e.addEventListener("mousemove", ef);
});
