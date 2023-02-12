(() => {
    var t = {
            5248: (t, n, e) => {
                "use strict";
                t.exports = e(9976);
            },
            517: (t) => {
                "use strict";
                t.exports = function () {
                    var t = Object.create(Math);
                    return (
                        (t.factory = function (t) {
                            if ("number" != typeof t)
                                throw new TypeError(
                                    "built-in math factory only accepts numbers"
                                );
                            return Number(t);
                        }),
                        (t.add = function (t, n) {
                            return t + n;
                        }),
                        (t.sub = function (t, n) {
                            return t - n;
                        }),
                        (t.mul = function (t, n) {
                            return t * n;
                        }),
                        (t.div = function (t, n) {
                            return t / n;
                        }),
                        (t.mod = function (t, n) {
                            return t % n;
                        }),
                        (t.factorial = function (t) {
                            for (var n = 1, e = 2; e <= t; e += 1) n *= e;
                            return n;
                        }),
                        (t.nthRoot = function (t, n) {
                            var e = n < 0;
                            if ((e && (n = -n), 0 === n))
                                throw new Error("Root must be non-zero");
                            if (t < 0 && Math.abs(n) % 2 != 1)
                                throw new Error(
                                    "Root must be odd when a is negative."
                                );
                            if (0 === t) return 0;
                            if (!isFinite(t)) return e ? 0 : t;
                            var i = Math.pow(Math.abs(t), 1 / n);
                            return (i = t < 0 ? -i : i), e ? 1 / i : i;
                        }),
                        (t.logicalOR = function (t, n) {
                            return t || n;
                        }),
                        (t.logicalXOR = function (t, n) {
                            return t != n;
                        }),
                        (t.logicalAND = function (t, n) {
                            return t && n;
                        }),
                        (t.bitwiseOR = function (t, n) {
                            return t | n;
                        }),
                        (t.bitwiseXOR = function (t, n) {
                            return t ^ n;
                        }),
                        (t.bitwiseAND = function (t, n) {
                            return t & n;
                        }),
                        (t.lessThan = function (t, n) {
                            return t < n;
                        }),
                        (t.lessEqualThan = function (t, n) {
                            return t <= n;
                        }),
                        (t.greaterThan = function (t, n) {
                            return t > n;
                        }),
                        (t.greaterEqualThan = function (t, n) {
                            return t >= n;
                        }),
                        (t.equal = function (t, n) {
                            return t == n;
                        }),
                        (t.strictlyEqual = function (t, n) {
                            return t === n;
                        }),
                        (t.notEqual = function (t, n) {
                            return t != n;
                        }),
                        (t.strictlyNotEqual = function (t, n) {
                            return t !== n;
                        }),
                        (t.shiftRight = function (t, n) {
                            return t >> n;
                        }),
                        (t.shiftLeft = function (t, n) {
                            return t << n;
                        }),
                        (t.unsignedRightShift = function (t, n) {
                            return t >>> n;
                        }),
                        (t.negative = function (t) {
                            return -t;
                        }),
                        (t.positive = function (t) {
                            return t;
                        }),
                        t
                    );
                };
            },
            9976: (t, n, e) => {
                "use strict";
                var i = e(2223),
                    r = e(517)();
                function o(t) {
                    Object.keys(t).forEach(function (n) {
                        var e = t[n];
                        t[n] = r.factory(e);
                    });
                }
                (t.exports = function (t) {
                    return new i()
                        .setDefs({ $$processScope: o })
                        .parse(t)
                        .compile(r);
                }),
                    (t.exports.math = r);
            },
            5627: (t) => {
                t.exports = function (t, n, e) {
                    return n < e
                        ? t < n
                            ? n
                            : t > e
                            ? e
                            : t
                        : t < e
                        ? e
                        : t > n
                        ? n
                        : t;
                };
            },
            6216: (t, n, e) => {
                "use strict";
                e.r(n),
                    e.d(n, {
                        axisBottom: () => d,
                        axisLeft: () => y,
                        axisRight: () => p,
                        axisTop: () => f,
                    });
                var i = Array.prototype.slice;
                function r(t) {
                    return t;
                }
                var o = 1e-6;
                function s(t) {
                    return "translate(" + t + ",0)";
                }
                function a(t) {
                    return "translate(0," + t + ")";
                }
                function u(t) {
                    return (n) => +t(n);
                }
                function c(t, n) {
                    return (
                        (n = Math.max(0, t.bandwidth() - 2 * n) / 2),
                        t.round() && (n = Math.round(n)),
                        (e) => +t(e) + n
                    );
                }
                function l() {
                    return !this.__axis;
                }
                function h(t, n) {
                    var e = [],
                        h = null,
                        f = null,
                        p = 6,
                        d = 6,
                        y = 3,
                        v =
                            "undefined" != typeof window &&
                            window.devicePixelRatio > 1
                                ? 0
                                : 0.5,
                        m = 1 === t || 4 === t ? -1 : 1,
                        g = 4 === t || 2 === t ? "x" : "y",
                        _ = 1 === t || 3 === t ? s : a;
                    function x(i) {
                        var s =
                                null == h
                                    ? n.ticks
                                        ? n.ticks.apply(n, e)
                                        : n.domain()
                                    : h,
                            a =
                                null == f
                                    ? n.tickFormat
                                        ? n.tickFormat.apply(n, e)
                                        : r
                                    : f,
                            x = Math.max(p, 0) + y,
                            w = n.range(),
                            b = +w[0] + v,
                            M = +w[w.length - 1] + v,
                            T = (n.bandwidth ? c : u)(n.copy(), v),
                            E = i.selection ? i.selection() : i,
                            S = E.selectAll(".domain").data([null]),
                            k = E.selectAll(".tick").data(s, n).order(),
                            N = k.exit(),
                            A = k.enter().append("g").attr("class", "tick"),
                            P = k.select("line"),
                            L = k.select("text");
                        (S = S.merge(
                            S.enter()
                                .insert("path", ".tick")
                                .attr("class", "domain")
                                .attr("stroke", "currentColor")
                        )),
                            (k = k.merge(A)),
                            (P = P.merge(
                                A.append("line")
                                    .attr("stroke", "currentColor")
                                    .attr(g + "2", m * p)
                            )),
                            (L = L.merge(
                                A.append("text")
                                    .attr("fill", "currentColor")
                                    .attr(g, m * x)
                                    .attr(
                                        "dy",
                                        1 === t
                                            ? "0em"
                                            : 3 === t
                                            ? "0.71em"
                                            : "0.32em"
                                    )
                            )),
                            i !== E &&
                                ((S = S.transition(i)),
                                (k = k.transition(i)),
                                (P = P.transition(i)),
                                (L = L.transition(i)),
                                (N = N.transition(i)
                                    .attr("opacity", o)
                                    .attr("transform", function (t) {
                                        return isFinite((t = T(t)))
                                            ? _(t + v)
                                            : this.getAttribute("transform");
                                    })),
                                A.attr("opacity", o).attr(
                                    "transform",
                                    function (t) {
                                        var n = this.parentNode.__axis;
                                        return _(
                                            (n && isFinite((n = n(t)))
                                                ? n
                                                : T(t)) + v
                                        );
                                    }
                                )),
                            N.remove(),
                            S.attr(
                                "d",
                                4 === t || 2 === t
                                    ? d
                                        ? "M" +
                                          m * d +
                                          "," +
                                          b +
                                          "H" +
                                          v +
                                          "V" +
                                          M +
                                          "H" +
                                          m * d
                                        : "M" + v + "," + b + "V" + M
                                    : d
                                    ? "M" +
                                      b +
                                      "," +
                                      m * d +
                                      "V" +
                                      v +
                                      "H" +
                                      M +
                                      "V" +
                                      m * d
                                    : "M" + b + "," + v + "H" + M
                            ),
                            k
                                .attr("opacity", 1)
                                .attr("transform", function (t) {
                                    return _(T(t) + v);
                                }),
                            P.attr(g + "2", m * p),
                            L.attr(g, m * x).text(a),
                            E.filter(l)
                                .attr("fill", "none")
                                .attr("font-size", 10)
                                .attr("font-family", "sans-serif")
                                .attr(
                                    "text-anchor",
                                    2 === t
                                        ? "start"
                                        : 4 === t
                                        ? "end"
                                        : "middle"
                                ),
                            E.each(function () {
                                this.__axis = T;
                            });
                    }
                    return (
                        (x.scale = function (t) {
                            return arguments.length ? ((n = t), x) : n;
                        }),
                        (x.ticks = function () {
                            return (e = i.call(arguments)), x;
                        }),
                        (x.tickArguments = function (t) {
                            return arguments.length
                                ? ((e = null == t ? [] : i.call(t)), x)
                                : e.slice();
                        }),
                        (x.tickValues = function (t) {
                            return arguments.length
                                ? ((h = null == t ? null : i.call(t)), x)
                                : h && h.slice();
                        }),
                        (x.tickFormat = function (t) {
                            return arguments.length ? ((f = t), x) : f;
                        }),
                        (x.tickSize = function (t) {
                            return arguments.length ? ((p = d = +t), x) : p;
                        }),
                        (x.tickSizeInner = function (t) {
                            return arguments.length ? ((p = +t), x) : p;
                        }),
                        (x.tickSizeOuter = function (t) {
                            return arguments.length ? ((d = +t), x) : d;
                        }),
                        (x.tickPadding = function (t) {
                            return arguments.length ? ((y = +t), x) : y;
                        }),
                        (x.offset = function (t) {
                            return arguments.length ? ((v = +t), x) : v;
                        }),
                        x
                    );
                }
                function f(t) {
                    return h(1, t);
                }
                function p(t) {
                    return h(2, t);
                }
                function d(t) {
                    return h(3, t);
                }
                function y(t) {
                    return h(4, t);
                }
            },
            6372: (t, n, e) => {
                "use strict";
                e.d(n, {
                    B8: () => T,
                    Il: () => r,
                    J5: () => s,
                    SU: () => M,
                    Ss: () => E,
                    Ym: () => L,
                    ZP: () => x,
                    xV: () => o,
                });
                var i = e(4087);
                function r() {}
                var o = 0.7,
                    s = 1 / o,
                    a = "\\s*([+-]?\\d+)\\s*",
                    u = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
                    c = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
                    l = /^#([0-9a-f]{3,8})$/,
                    h = new RegExp("^rgb\\(" + [a, a, a] + "\\)$"),
                    f = new RegExp("^rgb\\(" + [c, c, c] + "\\)$"),
                    p = new RegExp("^rgba\\(" + [a, a, a, u] + "\\)$"),
                    d = new RegExp("^rgba\\(" + [c, c, c, u] + "\\)$"),
                    y = new RegExp("^hsl\\(" + [u, c, c] + "\\)$"),
                    v = new RegExp("^hsla\\(" + [u, c, c, u] + "\\)$"),
                    m = {
                        aliceblue: 15792383,
                        antiquewhite: 16444375,
                        aqua: 65535,
                        aquamarine: 8388564,
                        azure: 15794175,
                        beige: 16119260,
                        bisque: 16770244,
                        black: 0,
                        blanchedalmond: 16772045,
                        blue: 255,
                        blueviolet: 9055202,
                        brown: 10824234,
                        burlywood: 14596231,
                        cadetblue: 6266528,
                        chartreuse: 8388352,
                        chocolate: 13789470,
                        coral: 16744272,
                        cornflowerblue: 6591981,
                        cornsilk: 16775388,
                        crimson: 14423100,
                        cyan: 65535,
                        darkblue: 139,
                        darkcyan: 35723,
                        darkgoldenrod: 12092939,
                        darkgray: 11119017,
                        darkgreen: 25600,
                        darkgrey: 11119017,
                        darkkhaki: 12433259,
                        darkmagenta: 9109643,
                        darkolivegreen: 5597999,
                        darkorange: 16747520,
                        darkorchid: 10040012,
                        darkred: 9109504,
                        darksalmon: 15308410,
                        darkseagreen: 9419919,
                        darkslateblue: 4734347,
                        darkslategray: 3100495,
                        darkslategrey: 3100495,
                        darkturquoise: 52945,
                        darkviolet: 9699539,
                        deeppink: 16716947,
                        deepskyblue: 49151,
                        dimgray: 6908265,
                        dimgrey: 6908265,
                        dodgerblue: 2003199,
                        firebrick: 11674146,
                        floralwhite: 16775920,
                        forestgreen: 2263842,
                        fuchsia: 16711935,
                        gainsboro: 14474460,
                        ghostwhite: 16316671,
                        gold: 16766720,
                        goldenrod: 14329120,
                        gray: 8421504,
                        green: 32768,
                        greenyellow: 11403055,
                        grey: 8421504,
                        honeydew: 15794160,
                        hotpink: 16738740,
                        indianred: 13458524,
                        indigo: 4915330,
                        ivory: 16777200,
                        khaki: 15787660,
                        lavender: 15132410,
                        lavenderblush: 16773365,
                        lawngreen: 8190976,
                        lemonchiffon: 16775885,
                        lightblue: 11393254,
                        lightcoral: 15761536,
                        lightcyan: 14745599,
                        lightgoldenrodyellow: 16448210,
                        lightgray: 13882323,
                        lightgreen: 9498256,
                        lightgrey: 13882323,
                        lightpink: 16758465,
                        lightsalmon: 16752762,
                        lightseagreen: 2142890,
                        lightskyblue: 8900346,
                        lightslategray: 7833753,
                        lightslategrey: 7833753,
                        lightsteelblue: 11584734,
                        lightyellow: 16777184,
                        lime: 65280,
                        limegreen: 3329330,
                        linen: 16445670,
                        magenta: 16711935,
                        maroon: 8388608,
                        mediumaquamarine: 6737322,
                        mediumblue: 205,
                        mediumorchid: 12211667,
                        mediumpurple: 9662683,
                        mediumseagreen: 3978097,
                        mediumslateblue: 8087790,
                        mediumspringgreen: 64154,
                        mediumturquoise: 4772300,
                        mediumvioletred: 13047173,
                        midnightblue: 1644912,
                        mintcream: 16121850,
                        mistyrose: 16770273,
                        moccasin: 16770229,
                        navajowhite: 16768685,
                        navy: 128,
                        oldlace: 16643558,
                        olive: 8421376,
                        olivedrab: 7048739,
                        orange: 16753920,
                        orangered: 16729344,
                        orchid: 14315734,
                        palegoldenrod: 15657130,
                        palegreen: 10025880,
                        paleturquoise: 11529966,
                        palevioletred: 14381203,
                        papayawhip: 16773077,
                        peachpuff: 16767673,
                        peru: 13468991,
                        pink: 16761035,
                        plum: 14524637,
                        powderblue: 11591910,
                        purple: 8388736,
                        rebeccapurple: 6697881,
                        red: 16711680,
                        rosybrown: 12357519,
                        royalblue: 4286945,
                        saddlebrown: 9127187,
                        salmon: 16416882,
                        sandybrown: 16032864,
                        seagreen: 3050327,
                        seashell: 16774638,
                        sienna: 10506797,
                        silver: 12632256,
                        skyblue: 8900331,
                        slateblue: 6970061,
                        slategray: 7372944,
                        slategrey: 7372944,
                        snow: 16775930,
                        springgreen: 65407,
                        steelblue: 4620980,
                        tan: 13808780,
                        teal: 32896,
                        thistle: 14204888,
                        tomato: 16737095,
                        turquoise: 4251856,
                        violet: 15631086,
                        wheat: 16113331,
                        white: 16777215,
                        whitesmoke: 16119285,
                        yellow: 16776960,
                        yellowgreen: 10145074,
                    };
                function g() {
                    return this.rgb().formatHex();
                }
                function _() {
                    return this.rgb().formatRgb();
                }
                function x(t) {
                    var n, e;
                    return (
                        (t = (t + "").trim().toLowerCase()),
                        (n = l.exec(t))
                            ? ((e = n[1].length),
                              (n = parseInt(n[1], 16)),
                              6 === e
                                  ? w(n)
                                  : 3 === e
                                  ? new E(
                                        ((n >> 8) & 15) | ((n >> 4) & 240),
                                        ((n >> 4) & 15) | (240 & n),
                                        ((15 & n) << 4) | (15 & n),
                                        1
                                    )
                                  : 8 === e
                                  ? b(
                                        (n >> 24) & 255,
                                        (n >> 16) & 255,
                                        (n >> 8) & 255,
                                        (255 & n) / 255
                                    )
                                  : 4 === e
                                  ? b(
                                        ((n >> 12) & 15) | ((n >> 8) & 240),
                                        ((n >> 8) & 15) | ((n >> 4) & 240),
                                        ((n >> 4) & 15) | (240 & n),
                                        (((15 & n) << 4) | (15 & n)) / 255
                                    )
                                  : null)
                            : (n = h.exec(t))
                            ? new E(n[1], n[2], n[3], 1)
                            : (n = f.exec(t))
                            ? new E(
                                  (255 * n[1]) / 100,
                                  (255 * n[2]) / 100,
                                  (255 * n[3]) / 100,
                                  1
                              )
                            : (n = p.exec(t))
                            ? b(n[1], n[2], n[3], n[4])
                            : (n = d.exec(t))
                            ? b(
                                  (255 * n[1]) / 100,
                                  (255 * n[2]) / 100,
                                  (255 * n[3]) / 100,
                                  n[4]
                              )
                            : (n = y.exec(t))
                            ? A(n[1], n[2] / 100, n[3] / 100, 1)
                            : (n = v.exec(t))
                            ? A(n[1], n[2] / 100, n[3] / 100, n[4])
                            : m.hasOwnProperty(t)
                            ? w(m[t])
                            : "transparent" === t
                            ? new E(NaN, NaN, NaN, 0)
                            : null
                    );
                }
                function w(t) {
                    return new E((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
                }
                function b(t, n, e, i) {
                    return i <= 0 && (t = n = e = NaN), new E(t, n, e, i);
                }
                function M(t) {
                    return (
                        t instanceof r || (t = x(t)),
                        t
                            ? new E((t = t.rgb()).r, t.g, t.b, t.opacity)
                            : new E()
                    );
                }
                function T(t, n, e, i) {
                    return 1 === arguments.length
                        ? M(t)
                        : new E(t, n, e, null == i ? 1 : i);
                }
                function E(t, n, e, i) {
                    (this.r = +t),
                        (this.g = +n),
                        (this.b = +e),
                        (this.opacity = +i);
                }
                function S() {
                    return "#" + N(this.r) + N(this.g) + N(this.b);
                }
                function k() {
                    var t = this.opacity;
                    return (
                        (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
                            ? "rgb("
                            : "rgba(") +
                        Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
                        ", " +
                        Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
                        ", " +
                        Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
                        (1 === t ? ")" : ", " + t + ")")
                    );
                }
                function N(t) {
                    return (
                        ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) <
                        16
                            ? "0"
                            : "") + t.toString(16)
                    );
                }
                function A(t, n, e, i) {
                    return (
                        i <= 0
                            ? (t = n = e = NaN)
                            : e <= 0 || e >= 1
                            ? (t = n = NaN)
                            : n <= 0 && (t = NaN),
                        new O(t, n, e, i)
                    );
                }
                function P(t) {
                    if (t instanceof O) return new O(t.h, t.s, t.l, t.opacity);
                    if ((t instanceof r || (t = x(t)), !t)) return new O();
                    if (t instanceof O) return t;
                    var n = (t = t.rgb()).r / 255,
                        e = t.g / 255,
                        i = t.b / 255,
                        o = Math.min(n, e, i),
                        s = Math.max(n, e, i),
                        a = NaN,
                        u = s - o,
                        c = (s + o) / 2;
                    return (
                        u
                            ? ((a =
                                  n === s
                                      ? (e - i) / u + 6 * (e < i)
                                      : e === s
                                      ? (i - n) / u + 2
                                      : (n - e) / u + 4),
                              (u /= c < 0.5 ? s + o : 2 - s - o),
                              (a *= 60))
                            : (u = c > 0 && c < 1 ? 0 : a),
                        new O(a, u, c, t.opacity)
                    );
                }
                function L(t, n, e, i) {
                    return 1 === arguments.length
                        ? P(t)
                        : new O(t, n, e, null == i ? 1 : i);
                }
                function O(t, n, e, i) {
                    (this.h = +t),
                        (this.s = +n),
                        (this.l = +e),
                        (this.opacity = +i);
                }
                function C(t, n, e) {
                    return (
                        255 *
                        (t < 60
                            ? n + ((e - n) * t) / 60
                            : t < 180
                            ? e
                            : t < 240
                            ? n + ((e - n) * (240 - t)) / 60
                            : n)
                    );
                }
                (0, i.Z)(r, x, {
                    copy: function (t) {
                        return Object.assign(new this.constructor(), this, t);
                    },
                    displayable: function () {
                        return this.rgb().displayable();
                    },
                    hex: g,
                    formatHex: g,
                    formatHsl: function () {
                        return P(this).formatHsl();
                    },
                    formatRgb: _,
                    toString: _,
                }),
                    (0, i.Z)(
                        E,
                        T,
                        (0, i.l)(r, {
                            brighter: function (t) {
                                return (
                                    (t = null == t ? s : Math.pow(s, t)),
                                    new E(
                                        this.r * t,
                                        this.g * t,
                                        this.b * t,
                                        this.opacity
                                    )
                                );
                            },
                            darker: function (t) {
                                return (
                                    (t = null == t ? o : Math.pow(o, t)),
                                    new E(
                                        this.r * t,
                                        this.g * t,
                                        this.b * t,
                                        this.opacity
                                    )
                                );
                            },
                            rgb: function () {
                                return this;
                            },
                            displayable: function () {
                                return (
                                    -0.5 <= this.r &&
                                    this.r < 255.5 &&
                                    -0.5 <= this.g &&
                                    this.g < 255.5 &&
                                    -0.5 <= this.b &&
                                    this.b < 255.5 &&
                                    0 <= this.opacity &&
                                    this.opacity <= 1
                                );
                            },
                            hex: S,
                            formatHex: S,
                            formatRgb: k,
                            toString: k,
                        })
                    ),
                    (0, i.Z)(
                        O,
                        L,
                        (0, i.l)(r, {
                            brighter: function (t) {
                                return (
                                    (t = null == t ? s : Math.pow(s, t)),
                                    new O(
                                        this.h,
                                        this.s,
                                        this.l * t,
                                        this.opacity
                                    )
                                );
                            },
                            darker: function (t) {
                                return (
                                    (t = null == t ? o : Math.pow(o, t)),
                                    new O(
                                        this.h,
                                        this.s,
                                        this.l * t,
                                        this.opacity
                                    )
                                );
                            },
                            rgb: function () {
                                var t = (this.h % 360) + 360 * (this.h < 0),
                                    n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                                    e = this.l,
                                    i = e + (e < 0.5 ? e : 1 - e) * n,
                                    r = 2 * e - i;
                                return new E(
                                    C(t >= 240 ? t - 240 : t + 120, r, i),
                                    C(t, r, i),
                                    C(t < 120 ? t + 240 : t - 120, r, i),
                                    this.opacity
                                );
                            },
                            displayable: function () {
                                return (
                                    ((0 <= this.s && this.s <= 1) ||
                                        isNaN(this.s)) &&
                                    0 <= this.l &&
                                    this.l <= 1 &&
                                    0 <= this.opacity &&
                                    this.opacity <= 1
                                );
                            },
                            formatHsl: function () {
                                var t = this.opacity;
                                return (
                                    (1 ===
                                    (t = isNaN(t)
                                        ? 1
                                        : Math.max(0, Math.min(1, t)))
                                        ? "hsl("
                                        : "hsla(") +
                                    (this.h || 0) +
                                    ", " +
                                    100 * (this.s || 0) +
                                    "%, " +
                                    100 * (this.l || 0) +
                                    "%" +
                                    (1 === t ? ")" : ", " + t + ")")
                                );
                            },
                        })
                    );
            },
            8218: (t, n, e) => {
                "use strict";
                e.d(n, { Z: () => y });
                var i = e(4087),
                    r = e(6372),
                    o = e(1144),
                    s = -0.14861,
                    a = 1.78277,
                    u = -0.29227,
                    c = -0.90649,
                    l = 1.97294,
                    h = l * c,
                    f = l * a,
                    p = a * u - c * s;
                function d(t) {
                    if (t instanceof v) return new v(t.h, t.s, t.l, t.opacity);
                    t instanceof r.Ss || (t = (0, r.SU)(t));
                    var n = t.r / 255,
                        e = t.g / 255,
                        i = t.b / 255,
                        s = (p * i + h * n - f * e) / (p + h - f),
                        a = i - s,
                        d = (l * (e - s) - u * a) / c,
                        y = Math.sqrt(d * d + a * a) / (l * s * (1 - s)),
                        m = y ? Math.atan2(d, a) * o.R - 120 : NaN;
                    return new v(m < 0 ? m + 360 : m, y, s, t.opacity);
                }
                function y(t, n, e, i) {
                    return 1 === arguments.length
                        ? d(t)
                        : new v(t, n, e, null == i ? 1 : i);
                }
                function v(t, n, e, i) {
                    (this.h = +t),
                        (this.s = +n),
                        (this.l = +e),
                        (this.opacity = +i);
                }
                (0, i.Z)(
                    v,
                    y,
                    (0, i.l)(r.Il, {
                        brighter: function (t) {
                            return (
                                (t = null == t ? r.J5 : Math.pow(r.J5, t)),
                                new v(this.h, this.s, this.l * t, this.opacity)
                            );
                        },
                        darker: function (t) {
                            return (
                                (t = null == t ? r.xV : Math.pow(r.xV, t)),
                                new v(this.h, this.s, this.l * t, this.opacity)
                            );
                        },
                        rgb: function () {
                            var t = isNaN(this.h) ? 0 : (this.h + 120) * o.u,
                                n = +this.l,
                                e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                                i = Math.cos(t),
                                h = Math.sin(t);
                            return new r.Ss(
                                255 * (n + e * (s * i + a * h)),
                                255 * (n + e * (u * i + c * h)),
                                255 * (n + e * (l * i)),
                                this.opacity
                            );
                        },
                    })
                );
            },
            4087: (t, n, e) => {
                "use strict";
                function i(t, n, e) {
                    (t.prototype = n.prototype = e), (e.constructor = t);
                }
                function r(t, n) {
                    var e = Object.create(t.prototype);
                    for (var i in n) e[i] = n[i];
                    return e;
                }
                e.d(n, { Z: () => i, l: () => r });
            },
            6404: (t, n, e) => {
                "use strict";
                e.r(n),
                    e.d(n, {
                        color: () => i.ZP,
                        cubehelix: () => o.Z,
                        gray: () => r.MA,
                        hcl: () => r.Uc,
                        hsl: () => i.Ym,
                        lab: () => r.ZP,
                        lch: () => r.tW,
                        rgb: () => i.B8,
                    });
                var i = e(6372),
                    r = e(241),
                    o = e(8218);
            },
            241: (t, n, e) => {
                "use strict";
                e.d(n, { MA: () => f, Uc: () => w, ZP: () => p, tW: () => x });
                var i = e(4087),
                    r = e(6372),
                    o = e(1144);
                const s = 0.96422,
                    a = 0.82521,
                    u = 4 / 29,
                    c = 6 / 29,
                    l = 3 * c * c;
                function h(t) {
                    if (t instanceof d) return new d(t.l, t.a, t.b, t.opacity);
                    if (t instanceof b) return M(t);
                    t instanceof r.Ss || (t = (0, r.SU)(t));
                    var n,
                        e,
                        i = g(t.r),
                        o = g(t.g),
                        u = g(t.b),
                        c = y(
                            (0.2225045 * i + 0.7168786 * o + 0.0606169 * u) / 1
                        );
                    return (
                        i === o && o === u
                            ? (n = e = c)
                            : ((n = y(
                                  (0.4360747 * i +
                                      0.3850649 * o +
                                      0.1430804 * u) /
                                      s
                              )),
                              (e = y(
                                  (0.0139322 * i +
                                      0.0971045 * o +
                                      0.7141733 * u) /
                                      a
                              ))),
                        new d(
                            116 * c - 16,
                            500 * (n - c),
                            200 * (c - e),
                            t.opacity
                        )
                    );
                }
                function f(t, n) {
                    return new d(t, 0, 0, null == n ? 1 : n);
                }
                function p(t, n, e, i) {
                    return 1 === arguments.length
                        ? h(t)
                        : new d(t, n, e, null == i ? 1 : i);
                }
                function d(t, n, e, i) {
                    (this.l = +t),
                        (this.a = +n),
                        (this.b = +e),
                        (this.opacity = +i);
                }
                function y(t) {
                    return t > 0.008856451679035631
                        ? Math.pow(t, 1 / 3)
                        : t / l + u;
                }
                function v(t) {
                    return t > c ? t * t * t : l * (t - u);
                }
                function m(t) {
                    return (
                        255 *
                        (t <= 0.0031308
                            ? 12.92 * t
                            : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
                    );
                }
                function g(t) {
                    return (t /= 255) <= 0.04045
                        ? t / 12.92
                        : Math.pow((t + 0.055) / 1.055, 2.4);
                }
                function _(t) {
                    if (t instanceof b) return new b(t.h, t.c, t.l, t.opacity);
                    if ((t instanceof d || (t = h(t)), 0 === t.a && 0 === t.b))
                        return new b(
                            NaN,
                            0 < t.l && t.l < 100 ? 0 : NaN,
                            t.l,
                            t.opacity
                        );
                    var n = Math.atan2(t.b, t.a) * o.R;
                    return new b(
                        n < 0 ? n + 360 : n,
                        Math.sqrt(t.a * t.a + t.b * t.b),
                        t.l,
                        t.opacity
                    );
                }
                function x(t, n, e, i) {
                    return 1 === arguments.length
                        ? _(t)
                        : new b(e, n, t, null == i ? 1 : i);
                }
                function w(t, n, e, i) {
                    return 1 === arguments.length
                        ? _(t)
                        : new b(t, n, e, null == i ? 1 : i);
                }
                function b(t, n, e, i) {
                    (this.h = +t),
                        (this.c = +n),
                        (this.l = +e),
                        (this.opacity = +i);
                }
                function M(t) {
                    if (isNaN(t.h)) return new d(t.l, 0, 0, t.opacity);
                    var n = t.h * o.u;
                    return new d(
                        t.l,
                        Math.cos(n) * t.c,
                        Math.sin(n) * t.c,
                        t.opacity
                    );
                }
                (0, i.Z)(
                    d,
                    p,
                    (0, i.l)(r.Il, {
                        brighter: function (t) {
                            return new d(
                                this.l + 18 * (null == t ? 1 : t),
                                this.a,
                                this.b,
                                this.opacity
                            );
                        },
                        darker: function (t) {
                            return new d(
                                this.l - 18 * (null == t ? 1 : t),
                                this.a,
                                this.b,
                                this.opacity
                            );
                        },
                        rgb: function () {
                            var t = (this.l + 16) / 116,
                                n = isNaN(this.a) ? t : t + this.a / 500,
                                e = isNaN(this.b) ? t : t - this.b / 200;
                            return (
                                (n = s * v(n)),
                                (t = 1 * v(t)),
                                (e = a * v(e)),
                                new r.Ss(
                                    m(
                                        3.1338561 * n -
                                            1.6168667 * t -
                                            0.4906146 * e
                                    ),
                                    m(
                                        -0.9787684 * n +
                                            1.9161415 * t +
                                            0.033454 * e
                                    ),
                                    m(
                                        0.0719453 * n -
                                            0.2289914 * t +
                                            1.4052427 * e
                                    ),
                                    this.opacity
                                )
                            );
                        },
                    })
                ),
                    (0, i.Z)(
                        b,
                        w,
                        (0, i.l)(r.Il, {
                            brighter: function (t) {
                                return new b(
                                    this.h,
                                    this.c,
                                    this.l + 18 * (null == t ? 1 : t),
                                    this.opacity
                                );
                            },
                            darker: function (t) {
                                return new b(
                                    this.h,
                                    this.c,
                                    this.l - 18 * (null == t ? 1 : t),
                                    this.opacity
                                );
                            },
                            rgb: function () {
                                return M(this).rgb();
                            },
                        })
                    );
            },
            1144: (t, n, e) => {
                "use strict";
                e.d(n, { R: () => r, u: () => i });
                const i = Math.PI / 180,
                    r = 180 / Math.PI;
            },
            7539: (t, n, e) => {
                "use strict";
                e.d(n, { WU: () => r, ZP: () => a, jH: () => o });
                var i,
                    r,
                    o,
                    s = e(3363);
                function a(t) {
                    return (
                        (i = (0, s.Z)(t)),
                        (r = i.format),
                        (o = i.formatPrefix),
                        i
                    );
                }
                a({ thousands: ",", grouping: [3], currency: ["$", ""] });
            },
            3085: (t, n, e) => {
                "use strict";
                e.d(n, { Z: () => r });
                var i = e(8885);
                function r(t) {
                    return (t = (0, i.V)(Math.abs(t))) ? t[1] : NaN;
                }
            },
            8885: (t, n, e) => {
                "use strict";
                function i(t) {
                    return Math.abs((t = Math.round(t))) >= 1e21
                        ? t.toLocaleString("en").replace(/,/g, "")
                        : t.toString(10);
                }
                function r(t, n) {
                    if (
                        (e = (t = n
                            ? t.toExponential(n - 1)
                            : t.toExponential()).indexOf("e")) < 0
                    )
                        return null;
                    var e,
                        i = t.slice(0, e);
                    return [
                        i.length > 1 ? i[0] + i.slice(2) : i,
                        +t.slice(e + 1),
                    ];
                }
                e.d(n, { V: () => r, Z: () => i });
            },
            6196: (t, n, e) => {
                "use strict";
                e.d(n, { Z: () => r, v: () => o });
                var i =
                    /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
                function r(t) {
                    if (!(n = i.exec(t)))
                        throw new Error("invalid format: " + t);
                    var n;
                    return new o({
                        fill: n[1],
                        align: n[2],
                        sign: n[3],
                        symbol: n[4],
                        zero: n[5],
                        width: n[6],
                        comma: n[7],
                        precision: n[8] && n[8].slice(1),
                        trim: n[9],
                        type: n[10],
                    });
                }
                function o(t) {
                    (this.fill = void 0 === t.fill ? " " : t.fill + ""),
                        (this.align = void 0 === t.align ? ">" : t.align + ""),
                        (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
                        (this.symbol =
                            void 0 === t.symbol ? "" : t.symbol + ""),
                        (this.zero = !!t.zero),
                        (this.width = void 0 === t.width ? void 0 : +t.width),
                        (this.comma = !!t.comma),
                        (this.precision =
                            void 0 === t.precision ? void 0 : +t.precision),
                        (this.trim = !!t.trim),
                        (this.type = void 0 === t.type ? "" : t.type + "");
                }
                (r.prototype = o.prototype),
                    (o.prototype.toString = function () {
                        return (
                            this.fill +
                            this.align +
                            this.sign +
                            this.symbol +
                            (this.zero ? "0" : "") +
                            (void 0 === this.width
                                ? ""
                                : Math.max(1, 0 | this.width)) +
                            (this.comma ? "," : "") +
                            (void 0 === this.precision
                                ? ""
                                : "." + Math.max(0, 0 | this.precision)) +
                            (this.trim ? "~" : "") +
                            this.type
                        );
                    });
            },
            5594: (t, n, e) => {
                "use strict";
                e.r(n),
                    e.d(n, {
                        FormatSpecifier: () => o.v,
                        format: () => i.WU,
                        formatDefaultLocale: () => i.ZP,
                        formatLocale: () => r.Z,
                        formatPrefix: () => i.jH,
                        formatSpecifier: () => o.Z,
                        precisionFixed: () => s.Z,
                        precisionPrefix: () => a.Z,
                        precisionRound: () => u.Z,
                    });
                var i = e(7539),
                    r = e(3363),
                    o = e(6196),
                    s = e(8195),
                    a = e(3726),
                    u = e(7655);
            },
            3363: (t, n, e) => {
                "use strict";
                e.d(n, { Z: () => f });
                var i,
                    r = e(3085),
                    o = e(6196),
                    s = e(8885);
                function a(t, n) {
                    var e = (0, s.V)(t, n);
                    if (!e) return t + "";
                    var i = e[0],
                        r = e[1];
                    return r < 0
                        ? "0." + new Array(-r).join("0") + i
                        : i.length > r + 1
                        ? i.slice(0, r + 1) + "." + i.slice(r + 1)
                        : i + new Array(r - i.length + 2).join("0");
                }
                const u = {
                    "%": (t, n) => (100 * t).toFixed(n),
                    b: (t) => Math.round(t).toString(2),
                    c: (t) => t + "",
                    d: s.Z,
                    e: (t, n) => t.toExponential(n),
                    f: (t, n) => t.toFixed(n),
                    g: (t, n) => t.toPrecision(n),
                    o: (t) => Math.round(t).toString(8),
                    p: (t, n) => a(100 * t, n),
                    r: a,
                    s: function (t, n) {
                        var e = (0, s.V)(t, n);
                        if (!e) return t + "";
                        var r = e[0],
                            o = e[1],
                            a =
                                o -
                                (i =
                                    3 *
                                    Math.max(
                                        -8,
                                        Math.min(8, Math.floor(o / 3))
                                    )) +
                                1,
                            u = r.length;
                        return a === u
                            ? r
                            : a > u
                            ? r + new Array(a - u + 1).join("0")
                            : a > 0
                            ? r.slice(0, a) + "." + r.slice(a)
                            : "0." +
                              new Array(1 - a).join("0") +
                              (0, s.V)(t, Math.max(0, n + a - 1))[0];
                    },
                    X: (t) => Math.round(t).toString(16).toUpperCase(),
                    x: (t) => Math.round(t).toString(16),
                };
                function c(t) {
                    return t;
                }
                var l = Array.prototype.map,
                    h = [
                        "y",
                        "z",
                        "a",
                        "f",
                        "p",
                        "n",
                        "µ",
                        "m",
                        "",
                        "k",
                        "M",
                        "G",
                        "T",
                        "P",
                        "E",
                        "Z",
                        "Y",
                    ];
                function f(t) {
                    var n,
                        e,
                        s =
                            void 0 === t.grouping || void 0 === t.thousands
                                ? c
                                : ((n = l.call(t.grouping, Number)),
                                  (e = t.thousands + ""),
                                  function (t, i) {
                                      for (
                                          var r = t.length,
                                              o = [],
                                              s = 0,
                                              a = n[0],
                                              u = 0;
                                          r > 0 &&
                                          a > 0 &&
                                          (u + a + 1 > i &&
                                              (a = Math.max(1, i - u)),
                                          o.push(t.substring((r -= a), r + a)),
                                          !((u += a + 1) > i));

                                      )
                                          a = n[(s = (s + 1) % n.length)];
                                      return o.reverse().join(e);
                                  }),
                        a = void 0 === t.currency ? "" : t.currency[0] + "",
                        f = void 0 === t.currency ? "" : t.currency[1] + "",
                        p = void 0 === t.decimal ? "." : t.decimal + "",
                        d =
                            void 0 === t.numerals
                                ? c
                                : (function (t) {
                                      return function (n) {
                                          return n.replace(
                                              /[0-9]/g,
                                              function (n) {
                                                  return t[+n];
                                              }
                                          );
                                      };
                                  })(l.call(t.numerals, String)),
                        y = void 0 === t.percent ? "%" : t.percent + "",
                        v = void 0 === t.minus ? "−" : t.minus + "",
                        m = void 0 === t.nan ? "NaN" : t.nan + "";
                    function g(t) {
                        var n = (t = (0, o.Z)(t)).fill,
                            e = t.align,
                            r = t.sign,
                            c = t.symbol,
                            l = t.zero,
                            g = t.width,
                            _ = t.comma,
                            x = t.precision,
                            w = t.trim,
                            b = t.type;
                        "n" === b
                            ? ((_ = !0), (b = "g"))
                            : u[b] ||
                              (void 0 === x && (x = 12), (w = !0), (b = "g")),
                            (l || ("0" === n && "=" === e)) &&
                                ((l = !0), (n = "0"), (e = "="));
                        var M =
                                "$" === c
                                    ? a
                                    : "#" === c && /[boxX]/.test(b)
                                    ? "0" + b.toLowerCase()
                                    : "",
                            T = "$" === c ? f : /[%p]/.test(b) ? y : "",
                            E = u[b],
                            S = /[defgprs%]/.test(b);
                        function k(t) {
                            var o,
                                a,
                                u,
                                c = M,
                                f = T;
                            if ("c" === b) (f = E(t) + f), (t = "");
                            else {
                                var y = (t = +t) < 0 || 1 / t < 0;
                                if (
                                    ((t = isNaN(t) ? m : E(Math.abs(t), x)),
                                    w &&
                                        (t = (function (t) {
                                            t: for (
                                                var n,
                                                    e = t.length,
                                                    i = 1,
                                                    r = -1;
                                                i < e;
                                                ++i
                                            )
                                                switch (t[i]) {
                                                    case ".":
                                                        r = n = i;
                                                        break;
                                                    case "0":
                                                        0 === r && (r = i),
                                                            (n = i);
                                                        break;
                                                    default:
                                                        if (!+t[i]) break t;
                                                        r > 0 && (r = 0);
                                                }
                                            return r > 0
                                                ? t.slice(0, r) + t.slice(n + 1)
                                                : t;
                                        })(t)),
                                    y && 0 == +t && "+" !== r && (y = !1),
                                    (c =
                                        (y
                                            ? "(" === r
                                                ? r
                                                : v
                                            : "-" === r || "(" === r
                                            ? ""
                                            : r) + c),
                                    (f =
                                        ("s" === b ? h[8 + i / 3] : "") +
                                        f +
                                        (y && "(" === r ? ")" : "")),
                                    S)
                                )
                                    for (o = -1, a = t.length; ++o < a; )
                                        if (
                                            48 > (u = t.charCodeAt(o)) ||
                                            u > 57
                                        ) {
                                            (f =
                                                (46 === u
                                                    ? p + t.slice(o + 1)
                                                    : t.slice(o)) + f),
                                                (t = t.slice(0, o));
                                            break;
                                        }
                            }
                            _ && !l && (t = s(t, 1 / 0));
                            var k = c.length + t.length + f.length,
                                N = k < g ? new Array(g - k + 1).join(n) : "";
                            switch (
                                (_ &&
                                    l &&
                                    ((t = s(
                                        N + t,
                                        N.length ? g - f.length : 1 / 0
                                    )),
                                    (N = "")),
                                e)
                            ) {
                                case "<":
                                    t = c + t + f + N;
                                    break;
                                case "=":
                                    t = c + N + t + f;
                                    break;
                                case "^":
                                    t =
                                        N.slice(0, (k = N.length >> 1)) +
                                        c +
                                        t +
                                        f +
                                        N.slice(k);
                                    break;
                                default:
                                    t = N + c + t + f;
                            }
                            return d(t);
                        }
                        return (
                            (x =
                                void 0 === x
                                    ? 6
                                    : /[gprs]/.test(b)
                                    ? Math.max(1, Math.min(21, x))
                                    : Math.max(0, Math.min(20, x))),
                            (k.toString = function () {
                                return t + "";
                            }),
                            k
                        );
                    }
                    return {
                        format: g,
                        formatPrefix: function (t, n) {
                            var e = g((((t = (0, o.Z)(t)).type = "f"), t)),
                                i =
                                    3 *
                                    Math.max(
                                        -8,
                                        Math.min(8, Math.floor((0, r.Z)(n) / 3))
                                    ),
                                s = Math.pow(10, -i),
                                a = h[8 + i / 3];
                            return function (t) {
                                return e(s * t) + a;
                            };
                        },
                    };
                }
            },
            8195: (t, n, e) => {
                "use strict";
                e.d(n, { Z: () => r });
                var i = e(3085);
                function r(t) {
                    return Math.max(0, -(0, i.Z)(Math.abs(t)));
                }
            },
            3726: (t, n, e) => {
                "use strict";
                e.d(n, { Z: () => r });
                var i = e(3085);
                function r(t, n) {
                    return Math.max(
                        0,
                        3 *
                            Math.max(
                                -8,
                                Math.min(8, Math.floor((0, i.Z)(n) / 3))
                            ) -
                            (0, i.Z)(Math.abs(t))
                    );
                }
            },
            7655: (t, n, e) => {
                "use strict";
                e.d(n, { Z: () => r });
                var i = e(3085);
                function r(t, n) {
                    return (
                        (t = Math.abs(t)),
                        (n = Math.abs(n) - t),
                        Math.max(0, (0, i.Z)(n) - (0, i.Z)(t)) + 1
                    );
                }
            },
            8122: (t, n, e) => {
                "use strict";
                e.d(n, { M: () => s, Z: () => o });
                var i = e(1265),
                    r = e(7896);
                function o(t, n) {
                    return ((0, r.v)(n) ? r.Z : s)(t, n);
                }
                function s(t, n) {
                    var e,
                        r = n ? n.length : 0,
                        o = t ? Math.min(r, t.length) : 0,
                        s = new Array(o),
                        a = new Array(r);
                    for (e = 0; e < o; ++e) s[e] = (0, i.Z)(t[e], n[e]);
                    for (; e < r; ++e) a[e] = n[e];
                    return function (t) {
                        for (e = 0; e < o; ++e) a[e] = s[e](t);
                        return a;
                    };
                }
            },
            9885: (t, n, e) => {
                "use strict";
                function i(t, n, e, i, r) {
                    var o = t * t,
                        s = o * t;
                    return (
                        ((1 - 3 * t + 3 * o - s) * n +
                            (4 - 6 * o + 3 * s) * e +
                            (1 + 3 * t + 3 * o - 3 * s) * i +
                            s * r) /
                        6
                    );
                }
                function r(t) {
                    var n = t.length - 1;
                    return function (e) {
                        var r =
                                e <= 0
                                    ? (e = 0)
                                    : e >= 1
                                    ? ((e = 1), n - 1)
                                    : Math.floor(e * n),
                            o = t[r],
                            s = t[r + 1],
                            a = r > 0 ? t[r - 1] : 2 * o - s,
                            u = r < n - 1 ? t[r + 2] : 2 * s - o;
                        return i((e - r / n) * n, a, o, s, u);
                    };
                }
                e.d(n, { Z: () => r, t: () => i });
            },
            5692: (t, n, e) => {
                "use strict";
                e.d(n, { Z: () => r });
                var i = e(9885);
                function r(t) {
                    var n = t.length;
                    return function (e) {
                        var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                            o = t[(r + n - 1) % n],
                            s = t[r % n],
                            a = t[(r + 1) % n],
                            u = t[(r + 2) % n];
                        return (0, i.t)((e - r / n) * n, o, s, a, u);
                    };
                }
            },
            5910: (t, n, e) => {
                "use strict";
                e.d(n, { ZP: () => a, wx: () => o, yi: () => s });
                var i = e(5302);
                function r(t, n) {
                    return function (e) {
                        return t + e * n;
                    };
                }
                function o(t, n) {
                    var e = n - t;
                    return e
                        ? r(
                              t,
                              e > 180 || e < -180
                                  ? e - 360 * Math.round(e / 360)
                                  : e
                          )
                        : (0, i.Z)(isNaN(t) ? n : t);
                }
                function s(t) {
                    return 1 == (t = +t)
                        ? a
                        : function (n, e) {
                              return e - n
                                  ? (function (t, n, e) {
                                        return (
                                            (t = Math.pow(t, e)),
                                            (n = Math.pow(n, e) - t),
                                            (e = 1 / e),
                                            function (i) {
                                                return Math.pow(t + i * n, e);
                                            }
                                        );
                                    })(n, e, t)
                                  : (0, i.Z)(isNaN(n) ? e : n);
                          };
                }
                function a(t, n) {
                    var e = n - t;
                    return e ? r(t, e) : (0, i.Z)(isNaN(t) ? n : t);
                }
            },
            5302: (t, n, e) => {
                "use strict";
                e.d(n, { Z: () => i });
                const i = (t) => () => t;
            },
            88: (t, n, e) => {
                "use strict";
                function i(t, n) {
                    var e = new Date();
                    return (
                        (t = +t),
                        (n = +n),
                        function (i) {
                            return e.setTime(t * (1 - i) + n * i), e;
                        }
                    );
                }
                e.d(n, { Z: () => i });
            },
            8641: (t, n, e) => {
                "use strict";
                e.r(n),
                    e.d(n, {
                        interpolate: () => i.Z,
                        interpolateArray: () => r.Z,
                        interpolateBasis: () => o.Z,
                        interpolateBasisClosed: () => s.Z,
                        interpolateCubehelix: () => P,
                        interpolateCubehelixLong: () => L,
                        interpolateDate: () => a.Z,
                        interpolateDiscrete: () => u,
                        interpolateHcl: () => S,
                        interpolateHclLong: () => k,
                        interpolateHsl: () => w,
                        interpolateHslLong: () => b,
                        interpolateHue: () => l,
                        interpolateLab: () => T,
                        interpolateNumber: () => h.Z,
                        interpolateNumberArray: () => f.Z,
                        interpolateObject: () => p.Z,
                        interpolateRgb: () => g.ZP,
                        interpolateRgbBasis: () => g.hD,
                        interpolateRgbBasisClosed: () => g.YD,
                        interpolateRound: () => d.Z,
                        interpolateString: () => y.Z,
                        interpolateTransformCss: () => v.Y,
                        interpolateTransformSvg: () => v.w,
                        interpolateZoom: () => m.Z,
                        piecewise: () => O.Z,
                        quantize: () => C,
                    });
                var i = e(1265),
                    r = e(8122),
                    o = e(9885),
                    s = e(5692),
                    a = e(88);
                function u(t) {
                    var n = t.length;
                    return function (e) {
                        return t[
                            Math.max(0, Math.min(n - 1, Math.floor(e * n)))
                        ];
                    };
                }
                var c = e(5910);
                function l(t, n) {
                    var e = (0, c.wx)(+t, +n);
                    return function (t) {
                        var n = e(t);
                        return n - 360 * Math.floor(n / 360);
                    };
                }
                var h = e(3626),
                    f = e(7896),
                    p = e(8528),
                    d = e(5720),
                    y = e(9843),
                    v = e(3636),
                    m = e(588),
                    g = e(3414),
                    _ = e(6372);
                function x(t) {
                    return function (n, e) {
                        var i = t((n = (0, _.Ym)(n)).h, (e = (0, _.Ym)(e)).h),
                            r = (0, c.ZP)(n.s, e.s),
                            o = (0, c.ZP)(n.l, e.l),
                            s = (0, c.ZP)(n.opacity, e.opacity);
                        return function (t) {
                            return (
                                (n.h = i(t)),
                                (n.s = r(t)),
                                (n.l = o(t)),
                                (n.opacity = s(t)),
                                n + ""
                            );
                        };
                    };
                }
                const w = x(c.wx);
                var b = x(c.ZP),
                    M = e(241);
                function T(t, n) {
                    var e = (0, c.ZP)(
                            (t = (0, M.ZP)(t)).l,
                            (n = (0, M.ZP)(n)).l
                        ),
                        i = (0, c.ZP)(t.a, n.a),
                        r = (0, c.ZP)(t.b, n.b),
                        o = (0, c.ZP)(t.opacity, n.opacity);
                    return function (n) {
                        return (
                            (t.l = e(n)),
                            (t.a = i(n)),
                            (t.b = r(n)),
                            (t.opacity = o(n)),
                            t + ""
                        );
                    };
                }
                function E(t) {
                    return function (n, e) {
                        var i = t((n = (0, M.Uc)(n)).h, (e = (0, M.Uc)(e)).h),
                            r = (0, c.ZP)(n.c, e.c),
                            o = (0, c.ZP)(n.l, e.l),
                            s = (0, c.ZP)(n.opacity, e.opacity);
                        return function (t) {
                            return (
                                (n.h = i(t)),
                                (n.c = r(t)),
                                (n.l = o(t)),
                                (n.opacity = s(t)),
                                n + ""
                            );
                        };
                    };
                }
                const S = E(c.wx);
                var k = E(c.ZP),
                    N = e(8218);
                function A(t) {
                    return (function n(e) {
                        function i(n, i) {
                            var r = t((n = (0, N.Z)(n)).h, (i = (0, N.Z)(i)).h),
                                o = (0, c.ZP)(n.s, i.s),
                                s = (0, c.ZP)(n.l, i.l),
                                a = (0, c.ZP)(n.opacity, i.opacity);
                            return function (t) {
                                return (
                                    (n.h = r(t)),
                                    (n.s = o(t)),
                                    (n.l = s(Math.pow(t, e))),
                                    (n.opacity = a(t)),
                                    n + ""
                                );
                            };
                        }
                        return (e = +e), (i.gamma = n), i;
                    })(1);
                }
                const P = A(c.wx);
                var L = A(c.ZP),
                    O = e(108);
                function C(t, n) {
                    for (var e = new Array(n), i = 0; i < n; ++i)
                        e[i] = t(i / (n - 1));
                    return e;
                }
            },
            3626: (t, n, e) => {
                "use strict";
                function i(t, n) {
                    return (
                        (t = +t),
                        (n = +n),
                        function (e) {
                            return t * (1 - e) + n * e;
                        }
                    );
                }
                e.d(n, { Z: () => i });
            },
            7896: (t, n, e) => {
                "use strict";
                function i(t, n) {
                    n || (n = []);
                    var e,
                        i = t ? Math.min(n.length, t.length) : 0,
                        r = n.slice();
                    return function (o) {
                        for (e = 0; e < i; ++e)
                            r[e] = t[e] * (1 - o) + n[e] * o;
                        return r;
                    };
                }
                function r(t) {
                    return ArrayBuffer.isView(t) && !(t instanceof DataView);
                }
                e.d(n, { Z: () => i, v: () => r });
            },
            8528: (t, n, e) => {
                "use strict";
                e.d(n, { Z: () => r });
                var i = e(1265);
                function r(t, n) {
                    var e,
                        r = {},
                        o = {};
                    for (e in ((null !== t && "object" == typeof t) || (t = {}),
                    (null !== n && "object" == typeof n) || (n = {}),
                    n))
                        e in t ? (r[e] = (0, i.Z)(t[e], n[e])) : (o[e] = n[e]);
                    return function (t) {
                        for (e in r) o[e] = r[e](t);
                        return o;
                    };
                }
            },
            108: (t, n, e) => {
                "use strict";
                e.d(n, { Z: () => r });
                var i = e(1265);
                function r(t, n) {
                    void 0 === n && ((n = t), (t = i.Z));
                    for (
                        var e = 0,
                            r = n.length - 1,
                            o = n[0],
                            s = new Array(r < 0 ? 0 : r);
                        e < r;

                    )
                        s[e] = t(o, (o = n[++e]));
                    return function (t) {
                        var n = Math.max(
                            0,
                            Math.min(r - 1, Math.floor((t *= r)))
                        );
                        return s[n](t - n);
                    };
                }
            },
            3414: (t, n, e) => {
                "use strict";
                e.d(n, { YD: () => l, ZP: () => a, hD: () => c });
                var i = e(6372),
                    r = e(9885),
                    o = e(5692),
                    s = e(5910);
                const a = (function t(n) {
                    var e = (0, s.yi)(n);
                    function r(t, n) {
                        var r = e((t = (0, i.B8)(t)).r, (n = (0, i.B8)(n)).r),
                            o = e(t.g, n.g),
                            a = e(t.b, n.b),
                            u = (0, s.ZP)(t.opacity, n.opacity);
                        return function (n) {
                            return (
                                (t.r = r(n)),
                                (t.g = o(n)),
                                (t.b = a(n)),
                                (t.opacity = u(n)),
                                t + ""
                            );
                        };
                    }
                    return (r.gamma = t), r;
                })(1);
                function u(t) {
                    return function (n) {
                        var e,
                            r,
                            o = n.length,
                            s = new Array(o),
                            a = new Array(o),
                            u = new Array(o);
                        for (e = 0; e < o; ++e)
                            (r = (0, i.B8)(n[e])),
                                (s[e] = r.r || 0),
                                (a[e] = r.g || 0),
                                (u[e] = r.b || 0);
                        return (
                            (s = t(s)),
                            (a = t(a)),
                            (u = t(u)),
                            (r.opacity = 1),
                            function (t) {
                                return (
                                    (r.r = s(t)),
                                    (r.g = a(t)),
                                    (r.b = u(t)),
                                    r + ""
                                );
                            }
                        );
                    };
                }
                var c = u(r.Z),
                    l = u(o.Z);
            },
            5720: (t, n, e) => {
                "use strict";
                function i(t, n) {
                    return (
                        (t = +t),
                        (n = +n),
                        function (e) {
                            return Math.round(t * (1 - e) + n * e);
                        }
                    );
                }
                e.d(n, { Z: () => i });
            },
            9843: (t, n, e) => {
                "use strict";
                e.d(n, { Z: () => s });
                var i = e(3626),
                    r = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                    o = new RegExp(r.source, "g");
                function s(t, n) {
                    var e,
                        s,
                        a,
                        u = (r.lastIndex = o.lastIndex = 0),
                        c = -1,
                        l = [],
                        h = [];
                    for (t += "", n += ""; (e = r.exec(t)) && (s = o.exec(n)); )
                        (a = s.index) > u &&
                            ((a = n.slice(u, a)),
                            l[c] ? (l[c] += a) : (l[++c] = a)),
                            (e = e[0]) === (s = s[0])
                                ? l[c]
                                    ? (l[c] += s)
                                    : (l[++c] = s)
                                : ((l[++c] = null),
                                  h.push({ i: c, x: (0, i.Z)(e, s) })),
                            (u = o.lastIndex);
                    return (
                        u < n.length &&
                            ((a = n.slice(u)),
                            l[c] ? (l[c] += a) : (l[++c] = a)),
                        l.length < 2
                            ? h[0]
                                ? (function (t) {
                                      return function (n) {
                                          return t(n) + "";
                                      };
                                  })(h[0].x)
                                : (function (t) {
                                      return function () {
                                          return t;
                                      };
                                  })(n)
                            : ((n = h.length),
                              function (t) {
                                  for (var e, i = 0; i < n; ++i)
                                      l[(e = h[i]).i] = e.x(t);
                                  return l.join("");
                              })
                    );
                }
            },
            3636: (t, n, e) => {
                "use strict";
                e.d(n, { Y: () => c, w: () => l });
                var i,
                    r = e(3626),
                    o = 180 / Math.PI,
                    s = {
                        translateX: 0,
                        translateY: 0,
                        rotate: 0,
                        skewX: 0,
                        scaleX: 1,
                        scaleY: 1,
                    };
                function a(t, n, e, i, r, s) {
                    var a, u, c;
                    return (
                        (a = Math.sqrt(t * t + n * n)) && ((t /= a), (n /= a)),
                        (c = t * e + n * i) && ((e -= t * c), (i -= n * c)),
                        (u = Math.sqrt(e * e + i * i)) &&
                            ((e /= u), (i /= u), (c /= u)),
                        t * i < n * e &&
                            ((t = -t), (n = -n), (c = -c), (a = -a)),
                        {
                            translateX: r,
                            translateY: s,
                            rotate: Math.atan2(n, t) * o,
                            skewX: Math.atan(c) * o,
                            scaleX: a,
                            scaleY: u,
                        }
                    );
                }
                function u(t, n, e, i) {
                    function o(t) {
                        return t.length ? t.pop() + " " : "";
                    }
                    return function (s, a) {
                        var u = [],
                            c = [];
                        return (
                            (s = t(s)),
                            (a = t(a)),
                            (function (t, i, o, s, a, u) {
                                if (t !== o || i !== s) {
                                    var c = a.push(
                                        "translate(",
                                        null,
                                        n,
                                        null,
                                        e
                                    );
                                    u.push(
                                        { i: c - 4, x: (0, r.Z)(t, o) },
                                        { i: c - 2, x: (0, r.Z)(i, s) }
                                    );
                                } else
                                    (o || s) &&
                                        a.push("translate(" + o + n + s + e);
                            })(
                                s.translateX,
                                s.translateY,
                                a.translateX,
                                a.translateY,
                                u,
                                c
                            ),
                            (function (t, n, e, s) {
                                t !== n
                                    ? (t - n > 180
                                          ? (n += 360)
                                          : n - t > 180 && (t += 360),
                                      s.push({
                                          i:
                                              e.push(
                                                  o(e) + "rotate(",
                                                  null,
                                                  i
                                              ) - 2,
                                          x: (0, r.Z)(t, n),
                                      }))
                                    : n && e.push(o(e) + "rotate(" + n + i);
                            })(s.rotate, a.rotate, u, c),
                            (function (t, n, e, s) {
                                t !== n
                                    ? s.push({
                                          i:
                                              e.push(o(e) + "skewX(", null, i) -
                                              2,
                                          x: (0, r.Z)(t, n),
                                      })
                                    : n && e.push(o(e) + "skewX(" + n + i);
                            })(s.skewX, a.skewX, u, c),
                            (function (t, n, e, i, s, a) {
                                if (t !== e || n !== i) {
                                    var u = s.push(
                                        o(s) + "scale(",
                                        null,
                                        ",",
                                        null,
                                        ")"
                                    );
                                    a.push(
                                        { i: u - 4, x: (0, r.Z)(t, e) },
                                        { i: u - 2, x: (0, r.Z)(n, i) }
                                    );
                                } else
                                    (1 === e && 1 === i) ||
                                        s.push(
                                            o(s) + "scale(" + e + "," + i + ")"
                                        );
                            })(s.scaleX, s.scaleY, a.scaleX, a.scaleY, u, c),
                            (s = a = null),
                            function (t) {
                                for (var n, e = -1, i = c.length; ++e < i; )
                                    u[(n = c[e]).i] = n.x(t);
                                return u.join("");
                            }
                        );
                    };
                }
                var c = u(
                        function (t) {
                            const n = new (
                                "function" == typeof DOMMatrix
                                    ? DOMMatrix
                                    : WebKitCSSMatrix
                            )(t + "");
                            return n.isIdentity
                                ? s
                                : a(n.a, n.b, n.c, n.d, n.e, n.f);
                        },
                        "px, ",
                        "px)",
                        "deg)"
                    ),
                    l = u(
                        function (t) {
                            return null == t
                                ? s
                                : (i ||
                                      (i = document.createElementNS(
                                          "http://www.w3.org/2000/svg",
                                          "g"
                                      )),
                                  i.setAttribute("transform", t),
                                  (t = i.transform.baseVal.consolidate())
                                      ? a(
                                            (t = t.matrix).a,
                                            t.b,
                                            t.c,
                                            t.d,
                                            t.e,
                                            t.f
                                        )
                                      : s);
                        },
                        ", ",
                        ")",
                        ")"
                    );
            },
            1265: (t, n, e) => {
                "use strict";
                e.d(n, { Z: () => f });
                var i = e(6372),
                    r = e(3414),
                    o = e(8122),
                    s = e(88),
                    a = e(3626),
                    u = e(8528),
                    c = e(9843),
                    l = e(5302),
                    h = e(7896);
                function f(t, n) {
                    var e,
                        f = typeof n;
                    return null == n || "boolean" === f
                        ? (0, l.Z)(n)
                        : ("number" === f
                              ? a.Z
                              : "string" === f
                              ? (e = (0, i.ZP)(n))
                                  ? ((n = e), r.ZP)
                                  : c.Z
                              : n instanceof i.ZP
                              ? r.ZP
                              : n instanceof Date
                              ? s.Z
                              : (0, h.v)(n)
                              ? h.Z
                              : Array.isArray(n)
                              ? o.M
                              : ("function" != typeof n.valueOf &&
                                    "function" != typeof n.toString) ||
                                isNaN(n)
                              ? u.Z
                              : a.Z)(t, n);
                }
            },
            588: (t, n, e) => {
                "use strict";
                function i(t) {
                    return ((t = Math.exp(t)) + 1 / t) / 2;
                }
                e.d(n, { Z: () => r });
                const r = (function t(n, e, r) {
                    function o(t, o) {
                        var s,
                            a,
                            u = t[0],
                            c = t[1],
                            l = t[2],
                            h = o[0],
                            f = o[1],
                            p = o[2],
                            d = h - u,
                            y = f - c,
                            v = d * d + y * y;
                        if (v < 1e-12)
                            (a = Math.log(p / l) / n),
                                (s = function (t) {
                                    return [
                                        u + t * d,
                                        c + t * y,
                                        l * Math.exp(n * t * a),
                                    ];
                                });
                        else {
                            var m = Math.sqrt(v),
                                g = (p * p - l * l + r * v) / (2 * l * e * m),
                                _ = (p * p - l * l - r * v) / (2 * p * e * m),
                                x = Math.log(Math.sqrt(g * g + 1) - g),
                                w = Math.log(Math.sqrt(_ * _ + 1) - _);
                            (a = (w - x) / n),
                                (s = function (t) {
                                    var r,
                                        o = t * a,
                                        s = i(x),
                                        h =
                                            (l / (e * m)) *
                                            (s *
                                                ((r = n * o + x),
                                                ((r = Math.exp(2 * r)) - 1) /
                                                    (r + 1)) -
                                                (function (t) {
                                                    return (
                                                        ((t = Math.exp(t)) -
                                                            1 / t) /
                                                        2
                                                    );
                                                })(x));
                                    return [
                                        u + h * d,
                                        c + h * y,
                                        (l * s) / i(n * o + x),
                                    ];
                                });
                        }
                        return (s.duration = (1e3 * a * n) / Math.SQRT2), s;
                    }
                    return (
                        (o.rho = function (n) {
                            var e = Math.max(0.001, +n),
                                i = e * e;
                            return t(e, i, i * i);
                        }),
                        o
                    );
                })(Math.SQRT2, 2, 4);
            },
            7673: (t, n, e) => {
                "use strict";
                function i(t, n, e) {
                    (t = +t),
                        (n = +n),
                        (e =
                            (r = arguments.length) < 2
                                ? ((n = t), (t = 0), 1)
                                : r < 3
                                ? 1
                                : +e);
                    for (
                        var i = -1,
                            r = 0 | Math.max(0, Math.ceil((n - t) / e)),
                            o = new Array(r);
                        ++i < r;

                    )
                        o[i] = t + i * e;
                    return o;
                }
                function r(t, n) {
                    switch (arguments.length) {
                        case 0:
                            break;
                        case 1:
                            this.range(t);
                            break;
                        default:
                            this.range(n).domain(t);
                    }
                    return this;
                }
                function o(t, n) {
                    switch (arguments.length) {
                        case 0:
                            break;
                        case 1:
                            "function" == typeof t
                                ? this.interpolator(t)
                                : this.range(t);
                            break;
                        default:
                            this.domain(t),
                                "function" == typeof n
                                    ? this.interpolator(n)
                                    : this.range(n);
                    }
                    return this;
                }
                e.r(n),
                    e.d(n, {
                        scaleBand: () => u,
                        scaleDiverging: () => si,
                        scaleDivergingLog: () => ai,
                        scaleDivergingPow: () => ci,
                        scaleDivergingSqrt: () => li,
                        scaleDivergingSymlog: () => ui,
                        scaleIdentity: () => R,
                        scaleImplicit: () => s,
                        scaleLinear: () => Y,
                        scaleLog: () => Q,
                        scaleOrdinal: () => a,
                        scalePoint: () => l,
                        scalePow: () => at,
                        scaleQuantile: () => gt,
                        scaleQuantize: () => _t,
                        scaleRadial: () => ht,
                        scaleSequential: () => Qe,
                        scaleSequentialLog: () => Ke,
                        scaleSequentialPow: () => ni,
                        scaleSequentialQuantile: () => ii,
                        scaleSequentialSqrt: () => ei,
                        scaleSequentialSymlog: () => ti,
                        scaleSqrt: () => ut,
                        scaleSymlog: () => et,
                        scaleThreshold: () => xt,
                        scaleTime: () => Xe,
                        scaleUtc: () => $e,
                        tickFormat: () => z,
                    });
                const s = Symbol("implicit");
                function a() {
                    var t = new Map(),
                        n = [],
                        e = [],
                        i = s;
                    function o(r) {
                        var o = r + "",
                            a = t.get(o);
                        if (!a) {
                            if (i !== s) return i;
                            t.set(o, (a = n.push(r)));
                        }
                        return e[(a - 1) % e.length];
                    }
                    return (
                        (o.domain = function (e) {
                            if (!arguments.length) return n.slice();
                            (n = []), (t = new Map());
                            for (const i of e) {
                                const e = i + "";
                                t.has(e) || t.set(e, n.push(i));
                            }
                            return o;
                        }),
                        (o.range = function (t) {
                            return arguments.length
                                ? ((e = Array.from(t)), o)
                                : e.slice();
                        }),
                        (o.unknown = function (t) {
                            return arguments.length ? ((i = t), o) : i;
                        }),
                        (o.copy = function () {
                            return a(n, e).unknown(i);
                        }),
                        r.apply(o, arguments),
                        o
                    );
                }
                function u() {
                    var t,
                        n,
                        e = a().unknown(void 0),
                        o = e.domain,
                        s = e.range,
                        c = 0,
                        l = 1,
                        h = !1,
                        f = 0,
                        p = 0,
                        d = 0.5;
                    function y() {
                        var e = o().length,
                            r = l < c,
                            a = r ? l : c,
                            u = r ? c : l;
                        (t = (u - a) / Math.max(1, e - f + 2 * p)),
                            h && (t = Math.floor(t)),
                            (a += (u - a - t * (e - f)) * d),
                            (n = t * (1 - f)),
                            h && ((a = Math.round(a)), (n = Math.round(n)));
                        var y = i(e).map(function (n) {
                            return a + t * n;
                        });
                        return s(r ? y.reverse() : y);
                    }
                    return (
                        delete e.unknown,
                        (e.domain = function (t) {
                            return arguments.length ? (o(t), y()) : o();
                        }),
                        (e.range = function (t) {
                            return arguments.length
                                ? (([c, l] = t), (c = +c), (l = +l), y())
                                : [c, l];
                        }),
                        (e.rangeRound = function (t) {
                            return (
                                ([c, l] = t), (c = +c), (l = +l), (h = !0), y()
                            );
                        }),
                        (e.bandwidth = function () {
                            return n;
                        }),
                        (e.step = function () {
                            return t;
                        }),
                        (e.round = function (t) {
                            return arguments.length ? ((h = !!t), y()) : h;
                        }),
                        (e.padding = function (t) {
                            return arguments.length
                                ? ((f = Math.min(1, (p = +t))), y())
                                : f;
                        }),
                        (e.paddingInner = function (t) {
                            return arguments.length
                                ? ((f = Math.min(1, t)), y())
                                : f;
                        }),
                        (e.paddingOuter = function (t) {
                            return arguments.length ? ((p = +t), y()) : p;
                        }),
                        (e.align = function (t) {
                            return arguments.length
                                ? ((d = Math.max(0, Math.min(1, t))), y())
                                : d;
                        }),
                        (e.copy = function () {
                            return u(o(), [c, l])
                                .round(h)
                                .paddingInner(f)
                                .paddingOuter(p)
                                .align(d);
                        }),
                        r.apply(y(), arguments)
                    );
                }
                function c(t) {
                    var n = t.copy;
                    return (
                        (t.padding = t.paddingOuter),
                        delete t.paddingInner,
                        delete t.paddingOuter,
                        (t.copy = function () {
                            return c(n());
                        }),
                        t
                    );
                }
                function l() {
                    return c(u.apply(null, arguments).paddingInner(1));
                }
                var h = Math.sqrt(50),
                    f = Math.sqrt(10),
                    p = Math.sqrt(2);
                function d(t, n, e) {
                    var i,
                        r,
                        o,
                        s,
                        a = -1;
                    if (((e = +e), (t = +t) == (n = +n) && e > 0)) return [t];
                    if (
                        ((i = n < t) && ((r = t), (t = n), (n = r)),
                        0 === (s = y(t, n, e)) || !isFinite(s))
                    )
                        return [];
                    if (s > 0) {
                        let e = Math.round(t / s),
                            i = Math.round(n / s);
                        for (
                            e * s < t && ++e,
                                i * s > n && --i,
                                o = new Array((r = i - e + 1));
                            ++a < r;

                        )
                            o[a] = (e + a) * s;
                    } else {
                        s = -s;
                        let e = Math.round(t * s),
                            i = Math.round(n * s);
                        for (
                            e / s < t && ++e,
                                i / s > n && --i,
                                o = new Array((r = i - e + 1));
                            ++a < r;

                        )
                            o[a] = (e + a) / s;
                    }
                    return i && o.reverse(), o;
                }
                function y(t, n, e) {
                    var i = (n - t) / Math.max(0, e),
                        r = Math.floor(Math.log(i) / Math.LN10),
                        o = i / Math.pow(10, r);
                    return r >= 0
                        ? (o >= h ? 10 : o >= f ? 5 : o >= p ? 2 : 1) *
                              Math.pow(10, r)
                        : -Math.pow(10, -r) /
                              (o >= h ? 10 : o >= f ? 5 : o >= p ? 2 : 1);
                }
                function v(t, n, e) {
                    var i = Math.abs(n - t) / Math.max(0, e),
                        r = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)),
                        o = i / r;
                    return (
                        o >= h
                            ? (r *= 10)
                            : o >= f
                            ? (r *= 5)
                            : o >= p && (r *= 2),
                        n < t ? -r : r
                    );
                }
                function m(t, n) {
                    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
                }
                function g(t) {
                    let n = t,
                        e = t;
                    function i(t, n, i, r) {
                        for (
                            null == i && (i = 0), null == r && (r = t.length);
                            i < r;

                        ) {
                            const o = (i + r) >>> 1;
                            e(t[o], n) < 0 ? (i = o + 1) : (r = o);
                        }
                        return i;
                    }
                    return (
                        1 === t.length &&
                            ((n = (n, e) => t(n) - e),
                            (e = (function (t) {
                                return (n, e) => m(t(n), e);
                            })(t))),
                        {
                            left: i,
                            center: function (t, e, r, o) {
                                null == r && (r = 0),
                                    null == o && (o = t.length);
                                const s = i(t, e, r, o - 1);
                                return s > r && n(t[s - 1], e) > -n(t[s], e)
                                    ? s - 1
                                    : s;
                            },
                            right: function (t, n, i, r) {
                                for (
                                    null == i && (i = 0),
                                        null == r && (r = t.length);
                                    i < r;

                                ) {
                                    const o = (i + r) >>> 1;
                                    e(t[o], n) > 0 ? (r = o) : (i = o + 1);
                                }
                                return i;
                            },
                        }
                    );
                }
                function _(t) {
                    return null === t ? NaN : +t;
                }
                const x = g(m),
                    w = x.right,
                    b = (x.left, g(_).center, w);
                var M = e(1265),
                    T = e(3626),
                    E = e(5720);
                function S(t) {
                    return +t;
                }
                var k = [0, 1];
                function N(t) {
                    return t;
                }
                function A(t, n) {
                    return (n -= t = +t)
                        ? function (e) {
                              return (e - t) / n;
                          }
                        : ((e = isNaN(n) ? NaN : 0.5),
                          function () {
                              return e;
                          });
                    var e;
                }
                function P(t, n, e) {
                    var i = t[0],
                        r = t[1],
                        o = n[0],
                        s = n[1];
                    return (
                        r < i
                            ? ((i = A(r, i)), (o = e(s, o)))
                            : ((i = A(i, r)), (o = e(o, s))),
                        function (t) {
                            return o(i(t));
                        }
                    );
                }
                function L(t, n, e) {
                    var i = Math.min(t.length, n.length) - 1,
                        r = new Array(i),
                        o = new Array(i),
                        s = -1;
                    for (
                        t[i] < t[0] &&
                        ((t = t.slice().reverse()), (n = n.slice().reverse()));
                        ++s < i;

                    )
                        (r[s] = A(t[s], t[s + 1])), (o[s] = e(n[s], n[s + 1]));
                    return function (n) {
                        var e = b(t, n, 1, i) - 1;
                        return o[e](r[e](n));
                    };
                }
                function O(t, n) {
                    return n
                        .domain(t.domain())
                        .range(t.range())
                        .interpolate(t.interpolate())
                        .clamp(t.clamp())
                        .unknown(t.unknown());
                }
                function C() {
                    var t,
                        n,
                        e,
                        i,
                        r,
                        o,
                        s = k,
                        a = k,
                        u = M.Z,
                        c = N;
                    function l() {
                        var t,
                            n,
                            e,
                            u = Math.min(s.length, a.length);
                        return (
                            c !== N &&
                                ((t = s[0]),
                                (n = s[u - 1]),
                                t > n && ((e = t), (t = n), (n = e)),
                                (c = function (e) {
                                    return Math.max(t, Math.min(n, e));
                                })),
                            (i = u > 2 ? L : P),
                            (r = o = null),
                            h
                        );
                    }
                    function h(n) {
                        return null == n || isNaN((n = +n))
                            ? e
                            : (r || (r = i(s.map(t), a, u)))(t(c(n)));
                    }
                    return (
                        (h.invert = function (e) {
                            return c(n((o || (o = i(a, s.map(t), T.Z)))(e)));
                        }),
                        (h.domain = function (t) {
                            return arguments.length
                                ? ((s = Array.from(t, S)), l())
                                : s.slice();
                        }),
                        (h.range = function (t) {
                            return arguments.length
                                ? ((a = Array.from(t)), l())
                                : a.slice();
                        }),
                        (h.rangeRound = function (t) {
                            return (a = Array.from(t)), (u = E.Z), l();
                        }),
                        (h.clamp = function (t) {
                            return arguments.length
                                ? ((c = !!t || N), l())
                                : c !== N;
                        }),
                        (h.interpolate = function (t) {
                            return arguments.length ? ((u = t), l()) : u;
                        }),
                        (h.unknown = function (t) {
                            return arguments.length ? ((e = t), h) : e;
                        }),
                        function (e, i) {
                            return (t = e), (n = i), l();
                        }
                    );
                }
                function I() {
                    return C()(N, N);
                }
                var Z = e(6196),
                    D = e(3726),
                    F = e(7539),
                    H = e(7655),
                    j = e(8195);
                function z(t, n, e, i) {
                    var r,
                        o = v(t, n, e);
                    switch ((i = (0, Z.Z)(null == i ? ",f" : i)).type) {
                        case "s":
                            var s = Math.max(Math.abs(t), Math.abs(n));
                            return (
                                null != i.precision ||
                                    isNaN((r = (0, D.Z)(o, s))) ||
                                    (i.precision = r),
                                (0, F.jH)(i, s)
                            );
                        case "":
                        case "e":
                        case "g":
                        case "p":
                        case "r":
                            null != i.precision ||
                                isNaN(
                                    (r = (0, H.Z)(
                                        o,
                                        Math.max(Math.abs(t), Math.abs(n))
                                    ))
                                ) ||
                                (i.precision = r - ("e" === i.type));
                            break;
                        case "f":
                        case "%":
                            null != i.precision ||
                                isNaN((r = (0, j.Z)(o))) ||
                                (i.precision = r - 2 * ("%" === i.type));
                    }
                    return (0, F.WU)(i);
                }
                function U(t) {
                    var n = t.domain;
                    return (
                        (t.ticks = function (t) {
                            var e = n();
                            return d(e[0], e[e.length - 1], null == t ? 10 : t);
                        }),
                        (t.tickFormat = function (t, e) {
                            var i = n();
                            return z(
                                i[0],
                                i[i.length - 1],
                                null == t ? 10 : t,
                                e
                            );
                        }),
                        (t.nice = function (e) {
                            null == e && (e = 10);
                            var i,
                                r,
                                o = n(),
                                s = 0,
                                a = o.length - 1,
                                u = o[s],
                                c = o[a],
                                l = 10;
                            for (
                                c < u &&
                                ((r = u),
                                (u = c),
                                (c = r),
                                (r = s),
                                (s = a),
                                (a = r));
                                l-- > 0;

                            ) {
                                if ((r = y(u, c, e)) === i)
                                    return (o[s] = u), (o[a] = c), n(o);
                                if (r > 0)
                                    (u = Math.floor(u / r) * r),
                                        (c = Math.ceil(c / r) * r);
                                else {
                                    if (!(r < 0)) break;
                                    (u = Math.ceil(u * r) / r),
                                        (c = Math.floor(c * r) / r);
                                }
                                i = r;
                            }
                            return t;
                        }),
                        t
                    );
                }
                function Y() {
                    var t = I();
                    return (
                        (t.copy = function () {
                            return O(t, Y());
                        }),
                        r.apply(t, arguments),
                        U(t)
                    );
                }
                function R(t) {
                    var n;
                    function e(t) {
                        return null == t || isNaN((t = +t)) ? n : t;
                    }
                    return (
                        (e.invert = e),
                        (e.domain = e.range =
                            function (n) {
                                return arguments.length
                                    ? ((t = Array.from(n, S)), e)
                                    : t.slice();
                            }),
                        (e.unknown = function (t) {
                            return arguments.length ? ((n = t), e) : n;
                        }),
                        (e.copy = function () {
                            return R(t).unknown(n);
                        }),
                        (t = arguments.length ? Array.from(t, S) : [0, 1]),
                        U(e)
                    );
                }
                function q(t, n) {
                    var e,
                        i = 0,
                        r = (t = t.slice()).length - 1,
                        o = t[i],
                        s = t[r];
                    return (
                        s < o &&
                            ((e = i),
                            (i = r),
                            (r = e),
                            (e = o),
                            (o = s),
                            (s = e)),
                        (t[i] = n.floor(o)),
                        (t[r] = n.ceil(s)),
                        t
                    );
                }
                function B(t) {
                    return Math.log(t);
                }
                function V(t) {
                    return Math.exp(t);
                }
                function W(t) {
                    return -Math.log(-t);
                }
                function X(t) {
                    return -Math.exp(-t);
                }
                function $(t) {
                    return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
                }
                function G(t) {
                    return function (n) {
                        return -t(-n);
                    };
                }
                function J(t) {
                    var n,
                        e,
                        i = t(B, V),
                        r = i.domain,
                        o = 10;
                    function s() {
                        return (
                            (n = (function (t) {
                                return t === Math.E
                                    ? Math.log
                                    : (10 === t && Math.log10) ||
                                          (2 === t && Math.log2) ||
                                          ((t = Math.log(t)),
                                          function (n) {
                                              return Math.log(n) / t;
                                          });
                            })(o)),
                            (e = (function (t) {
                                return 10 === t
                                    ? $
                                    : t === Math.E
                                    ? Math.exp
                                    : function (n) {
                                          return Math.pow(t, n);
                                      };
                            })(o)),
                            r()[0] < 0
                                ? ((n = G(n)), (e = G(e)), t(W, X))
                                : t(B, V),
                            i
                        );
                    }
                    return (
                        (i.base = function (t) {
                            return arguments.length ? ((o = +t), s()) : o;
                        }),
                        (i.domain = function (t) {
                            return arguments.length ? (r(t), s()) : r();
                        }),
                        (i.ticks = function (t) {
                            var i,
                                s = r(),
                                a = s[0],
                                u = s[s.length - 1];
                            (i = u < a) && ((f = a), (a = u), (u = f));
                            var c,
                                l,
                                h,
                                f = n(a),
                                p = n(u),
                                y = null == t ? 10 : +t,
                                v = [];
                            if (!(o % 1) && p - f < y) {
                                if (
                                    ((f = Math.floor(f)),
                                    (p = Math.ceil(p)),
                                    a > 0)
                                ) {
                                    for (; f <= p; ++f)
                                        for (l = 1, c = e(f); l < o; ++l)
                                            if (!((h = c * l) < a)) {
                                                if (h > u) break;
                                                v.push(h);
                                            }
                                } else
                                    for (; f <= p; ++f)
                                        for (l = o - 1, c = e(f); l >= 1; --l)
                                            if (!((h = c * l) < a)) {
                                                if (h > u) break;
                                                v.push(h);
                                            }
                                2 * v.length < y && (v = d(a, u, y));
                            } else v = d(f, p, Math.min(p - f, y)).map(e);
                            return i ? v.reverse() : v;
                        }),
                        (i.tickFormat = function (t, r) {
                            if (
                                (null == r && (r = 10 === o ? ".0e" : ","),
                                "function" != typeof r && (r = (0, F.WU)(r)),
                                t === 1 / 0)
                            )
                                return r;
                            null == t && (t = 10);
                            var s = Math.max(1, (o * t) / i.ticks().length);
                            return function (t) {
                                var i = t / e(Math.round(n(t)));
                                return (
                                    i * o < o - 0.5 && (i *= o),
                                    i <= s ? r(t) : ""
                                );
                            };
                        }),
                        (i.nice = function () {
                            return r(
                                q(r(), {
                                    floor: function (t) {
                                        return e(Math.floor(n(t)));
                                    },
                                    ceil: function (t) {
                                        return e(Math.ceil(n(t)));
                                    },
                                })
                            );
                        }),
                        i
                    );
                }
                function Q() {
                    var t = J(C()).domain([1, 10]);
                    return (
                        (t.copy = function () {
                            return O(t, Q()).base(t.base());
                        }),
                        r.apply(t, arguments),
                        t
                    );
                }
                function K(t) {
                    return function (n) {
                        return Math.sign(n) * Math.log1p(Math.abs(n / t));
                    };
                }
                function tt(t) {
                    return function (n) {
                        return Math.sign(n) * Math.expm1(Math.abs(n)) * t;
                    };
                }
                function nt(t) {
                    var n = 1,
                        e = t(K(n), tt(n));
                    return (
                        (e.constant = function (e) {
                            return arguments.length ? t(K((n = +e)), tt(n)) : n;
                        }),
                        U(e)
                    );
                }
                function et() {
                    var t = nt(C());
                    return (
                        (t.copy = function () {
                            return O(t, et()).constant(t.constant());
                        }),
                        r.apply(t, arguments)
                    );
                }
                function it(t) {
                    return function (n) {
                        return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
                    };
                }
                function rt(t) {
                    return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
                }
                function ot(t) {
                    return t < 0 ? -t * t : t * t;
                }
                function st(t) {
                    var n = t(N, N),
                        e = 1;
                    function i() {
                        return 1 === e
                            ? t(N, N)
                            : 0.5 === e
                            ? t(rt, ot)
                            : t(it(e), it(1 / e));
                    }
                    return (
                        (n.exponent = function (t) {
                            return arguments.length ? ((e = +t), i()) : e;
                        }),
                        U(n)
                    );
                }
                function at() {
                    var t = st(C());
                    return (
                        (t.copy = function () {
                            return O(t, at()).exponent(t.exponent());
                        }),
                        r.apply(t, arguments),
                        t
                    );
                }
                function ut() {
                    return at.apply(null, arguments).exponent(0.5);
                }
                function ct(t) {
                    return Math.sign(t) * t * t;
                }
                function lt(t) {
                    return Math.sign(t) * Math.sqrt(Math.abs(t));
                }
                function ht() {
                    var t,
                        n = I(),
                        e = [0, 1],
                        i = !1;
                    function o(e) {
                        var r = lt(n(e));
                        return isNaN(r) ? t : i ? Math.round(r) : r;
                    }
                    return (
                        (o.invert = function (t) {
                            return n.invert(ct(t));
                        }),
                        (o.domain = function (t) {
                            return arguments.length
                                ? (n.domain(t), o)
                                : n.domain();
                        }),
                        (o.range = function (t) {
                            return arguments.length
                                ? (n.range((e = Array.from(t, S)).map(ct)), o)
                                : e.slice();
                        }),
                        (o.rangeRound = function (t) {
                            return o.range(t).round(!0);
                        }),
                        (o.round = function (t) {
                            return arguments.length ? ((i = !!t), o) : i;
                        }),
                        (o.clamp = function (t) {
                            return arguments.length
                                ? (n.clamp(t), o)
                                : n.clamp();
                        }),
                        (o.unknown = function (n) {
                            return arguments.length ? ((t = n), o) : t;
                        }),
                        (o.copy = function () {
                            return ht(n.domain(), e)
                                .round(i)
                                .clamp(n.clamp())
                                .unknown(t);
                        }),
                        r.apply(o, arguments),
                        U(o)
                    );
                }
                function ft(t, n) {
                    let e;
                    if (void 0 === n)
                        for (const n of t)
                            null != n &&
                                (e < n || (void 0 === e && n >= n)) &&
                                (e = n);
                    else {
                        let i = -1;
                        for (let r of t)
                            null != (r = n(r, ++i, t)) &&
                                (e < r || (void 0 === e && r >= r)) &&
                                (e = r);
                    }
                    return e;
                }
                function pt(t, n) {
                    let e;
                    if (void 0 === n)
                        for (const n of t)
                            null != n &&
                                (e > n || (void 0 === e && n >= n)) &&
                                (e = n);
                    else {
                        let i = -1;
                        for (let r of t)
                            null != (r = n(r, ++i, t)) &&
                                (e > r || (void 0 === e && r >= r)) &&
                                (e = r);
                    }
                    return e;
                }
                function dt(t, n, e = 0, i = t.length - 1, r = m) {
                    for (; i > e; ) {
                        if (i - e > 600) {
                            const o = i - e + 1,
                                s = n - e + 1,
                                a = Math.log(o),
                                u = 0.5 * Math.exp((2 * a) / 3),
                                c =
                                    0.5 *
                                    Math.sqrt((a * u * (o - u)) / o) *
                                    (s - o / 2 < 0 ? -1 : 1);
                            dt(
                                t,
                                n,
                                Math.max(e, Math.floor(n - (s * u) / o + c)),
                                Math.min(
                                    i,
                                    Math.floor(n + ((o - s) * u) / o + c)
                                ),
                                r
                            );
                        }
                        const o = t[n];
                        let s = e,
                            a = i;
                        for (
                            yt(t, e, n), r(t[i], o) > 0 && yt(t, e, i);
                            s < a;

                        ) {
                            for (yt(t, s, a), ++s, --a; r(t[s], o) < 0; ) ++s;
                            for (; r(t[a], o) > 0; ) --a;
                        }
                        0 === r(t[e], o) ? yt(t, e, a) : (++a, yt(t, a, i)),
                            a <= n && (e = a + 1),
                            n <= a && (i = a - 1);
                    }
                    return t;
                }
                function yt(t, n, e) {
                    const i = t[n];
                    (t[n] = t[e]), (t[e] = i);
                }
                function vt(t, n, e) {
                    if (
                        ((t = Float64Array.from(
                            (function* (t, n) {
                                if (void 0 === n)
                                    for (let n of t)
                                        null != n && (n = +n) >= n && (yield n);
                                else {
                                    let e = -1;
                                    for (let i of t)
                                        null != (i = n(i, ++e, t)) &&
                                            (i = +i) >= i &&
                                            (yield i);
                                }
                            })(t, e)
                        )),
                        (i = t.length))
                    ) {
                        if ((n = +n) <= 0 || i < 2) return pt(t);
                        if (n >= 1) return ft(t);
                        var i,
                            r = (i - 1) * n,
                            o = Math.floor(r),
                            s = ft(dt(t, o).subarray(0, o + 1));
                        return s + (pt(t.subarray(o + 1)) - s) * (r - o);
                    }
                }
                function mt(t, n, e = _) {
                    if ((i = t.length)) {
                        if ((n = +n) <= 0 || i < 2) return +e(t[0], 0, t);
                        if (n >= 1) return +e(t[i - 1], i - 1, t);
                        var i,
                            r = (i - 1) * n,
                            o = Math.floor(r),
                            s = +e(t[o], o, t);
                        return s + (+e(t[o + 1], o + 1, t) - s) * (r - o);
                    }
                }
                function gt() {
                    var t,
                        n = [],
                        e = [],
                        i = [];
                    function o() {
                        var t = 0,
                            r = Math.max(1, e.length);
                        for (i = new Array(r - 1); ++t < r; )
                            i[t - 1] = mt(n, t / r);
                        return s;
                    }
                    function s(n) {
                        return null == n || isNaN((n = +n)) ? t : e[b(i, n)];
                    }
                    return (
                        (s.invertExtent = function (t) {
                            var r = e.indexOf(t);
                            return r < 0
                                ? [NaN, NaN]
                                : [
                                      r > 0 ? i[r - 1] : n[0],
                                      r < i.length ? i[r] : n[n.length - 1],
                                  ];
                        }),
                        (s.domain = function (t) {
                            if (!arguments.length) return n.slice();
                            n = [];
                            for (let e of t)
                                null == e || isNaN((e = +e)) || n.push(e);
                            return n.sort(m), o();
                        }),
                        (s.range = function (t) {
                            return arguments.length
                                ? ((e = Array.from(t)), o())
                                : e.slice();
                        }),
                        (s.unknown = function (n) {
                            return arguments.length ? ((t = n), s) : t;
                        }),
                        (s.quantiles = function () {
                            return i.slice();
                        }),
                        (s.copy = function () {
                            return gt().domain(n).range(e).unknown(t);
                        }),
                        r.apply(s, arguments)
                    );
                }
                function _t() {
                    var t,
                        n = 0,
                        e = 1,
                        i = 1,
                        o = [0.5],
                        s = [0, 1];
                    function a(n) {
                        return null != n && n <= n ? s[b(o, n, 0, i)] : t;
                    }
                    function u() {
                        var t = -1;
                        for (o = new Array(i); ++t < i; )
                            o[t] = ((t + 1) * e - (t - i) * n) / (i + 1);
                        return a;
                    }
                    return (
                        (a.domain = function (t) {
                            return arguments.length
                                ? (([n, e] = t), (n = +n), (e = +e), u())
                                : [n, e];
                        }),
                        (a.range = function (t) {
                            return arguments.length
                                ? ((i = (s = Array.from(t)).length - 1), u())
                                : s.slice();
                        }),
                        (a.invertExtent = function (t) {
                            var r = s.indexOf(t);
                            return r < 0
                                ? [NaN, NaN]
                                : r < 1
                                ? [n, o[0]]
                                : r >= i
                                ? [o[i - 1], e]
                                : [o[r - 1], o[r]];
                        }),
                        (a.unknown = function (n) {
                            return arguments.length ? ((t = n), a) : a;
                        }),
                        (a.thresholds = function () {
                            return o.slice();
                        }),
                        (a.copy = function () {
                            return _t().domain([n, e]).range(s).unknown(t);
                        }),
                        r.apply(U(a), arguments)
                    );
                }
                function xt() {
                    var t,
                        n = [0.5],
                        e = [0, 1],
                        i = 1;
                    function o(r) {
                        return null != r && r <= r ? e[b(n, r, 0, i)] : t;
                    }
                    return (
                        (o.domain = function (t) {
                            return arguments.length
                                ? ((n = Array.from(t)),
                                  (i = Math.min(n.length, e.length - 1)),
                                  o)
                                : n.slice();
                        }),
                        (o.range = function (t) {
                            return arguments.length
                                ? ((e = Array.from(t)),
                                  (i = Math.min(n.length, e.length - 1)),
                                  o)
                                : e.slice();
                        }),
                        (o.invertExtent = function (t) {
                            var i = e.indexOf(t);
                            return [n[i - 1], n[i]];
                        }),
                        (o.unknown = function (n) {
                            return arguments.length ? ((t = n), o) : t;
                        }),
                        (o.copy = function () {
                            return xt().domain(n).range(e).unknown(t);
                        }),
                        r.apply(o, arguments)
                    );
                }
                const wt = 1e3,
                    bt = 6e4,
                    Mt = 36e5,
                    Tt = 864e5,
                    Et = 6048e5,
                    St = 31536e6;
                var kt = new Date(),
                    Nt = new Date();
                function At(t, n, e, i) {
                    function r(n) {
                        return (
                            t(
                                (n =
                                    0 === arguments.length
                                        ? new Date()
                                        : new Date(+n))
                            ),
                            n
                        );
                    }
                    return (
                        (r.floor = function (n) {
                            return t((n = new Date(+n))), n;
                        }),
                        (r.ceil = function (e) {
                            return t((e = new Date(e - 1))), n(e, 1), t(e), e;
                        }),
                        (r.round = function (t) {
                            var n = r(t),
                                e = r.ceil(t);
                            return t - n < e - t ? n : e;
                        }),
                        (r.offset = function (t, e) {
                            return (
                                n(
                                    (t = new Date(+t)),
                                    null == e ? 1 : Math.floor(e)
                                ),
                                t
                            );
                        }),
                        (r.range = function (e, i, o) {
                            var s,
                                a = [];
                            if (
                                ((e = r.ceil(e)),
                                (o = null == o ? 1 : Math.floor(o)),
                                !(e < i && o > 0))
                            )
                                return a;
                            do {
                                a.push((s = new Date(+e))), n(e, o), t(e);
                            } while (s < e && e < i);
                            return a;
                        }),
                        (r.filter = function (e) {
                            return At(
                                function (n) {
                                    if (n >= n)
                                        for (; t(n), !e(n); ) n.setTime(n - 1);
                                },
                                function (t, i) {
                                    if (t >= t)
                                        if (i < 0)
                                            for (; ++i <= 0; )
                                                for (; n(t, -1), !e(t); );
                                        else
                                            for (; --i >= 0; )
                                                for (; n(t, 1), !e(t); );
                                }
                            );
                        }),
                        e &&
                            ((r.count = function (n, i) {
                                return (
                                    kt.setTime(+n),
                                    Nt.setTime(+i),
                                    t(kt),
                                    t(Nt),
                                    Math.floor(e(kt, Nt))
                                );
                            }),
                            (r.every = function (t) {
                                return (
                                    (t = Math.floor(t)),
                                    isFinite(t) && t > 0
                                        ? t > 1
                                            ? r.filter(
                                                  i
                                                      ? function (n) {
                                                            return (
                                                                i(n) % t == 0
                                                            );
                                                        }
                                                      : function (n) {
                                                            return (
                                                                r.count(0, n) %
                                                                    t ==
                                                                0
                                                            );
                                                        }
                                              )
                                            : r
                                        : null
                                );
                            })),
                        r
                    );
                }
                var Pt = At(
                    function () {},
                    function (t, n) {
                        t.setTime(+t + n);
                    },
                    function (t, n) {
                        return n - t;
                    }
                );
                Pt.every = function (t) {
                    return (
                        (t = Math.floor(t)),
                        isFinite(t) && t > 0
                            ? t > 1
                                ? At(
                                      function (n) {
                                          n.setTime(Math.floor(n / t) * t);
                                      },
                                      function (n, e) {
                                          n.setTime(+n + e * t);
                                      },
                                      function (n, e) {
                                          return (e - n) / t;
                                      }
                                  )
                                : Pt
                            : null
                    );
                };
                const Lt = Pt;
                Pt.range;
                var Ot = At(
                    function (t) {
                        t.setTime(t - t.getMilliseconds());
                    },
                    function (t, n) {
                        t.setTime(+t + n * wt);
                    },
                    function (t, n) {
                        return (n - t) / wt;
                    },
                    function (t) {
                        return t.getUTCSeconds();
                    }
                );
                const Ct = Ot;
                Ot.range;
                var It = At(
                    function (t) {
                        t.setTime(
                            t - t.getMilliseconds() - t.getSeconds() * wt
                        );
                    },
                    function (t, n) {
                        t.setTime(+t + n * bt);
                    },
                    function (t, n) {
                        return (n - t) / bt;
                    },
                    function (t) {
                        return t.getMinutes();
                    }
                );
                const Zt = It;
                It.range;
                var Dt = At(
                    function (t) {
                        t.setTime(
                            t -
                                t.getMilliseconds() -
                                t.getSeconds() * wt -
                                t.getMinutes() * bt
                        );
                    },
                    function (t, n) {
                        t.setTime(+t + n * Mt);
                    },
                    function (t, n) {
                        return (n - t) / Mt;
                    },
                    function (t) {
                        return t.getHours();
                    }
                );
                const Ft = Dt;
                Dt.range;
                var Ht = At(
                    (t) => t.setHours(0, 0, 0, 0),
                    (t, n) => t.setDate(t.getDate() + n),
                    (t, n) =>
                        (n -
                            t -
                            (n.getTimezoneOffset() - t.getTimezoneOffset()) *
                                bt) /
                        Tt,
                    (t) => t.getDate() - 1
                );
                const jt = Ht;
                function zt(t) {
                    return At(
                        function (n) {
                            n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)),
                                n.setHours(0, 0, 0, 0);
                        },
                        function (t, n) {
                            t.setDate(t.getDate() + 7 * n);
                        },
                        function (t, n) {
                            return (
                                (n -
                                    t -
                                    (n.getTimezoneOffset() -
                                        t.getTimezoneOffset()) *
                                        bt) /
                                Et
                            );
                        }
                    );
                }
                Ht.range;
                var Ut = zt(0),
                    Yt = zt(1),
                    Rt = zt(2),
                    qt = zt(3),
                    Bt = zt(4),
                    Vt = zt(5),
                    Wt = zt(6),
                    Xt =
                        (Ut.range,
                        Yt.range,
                        Rt.range,
                        qt.range,
                        Bt.range,
                        Vt.range,
                        Wt.range,
                        At(
                            function (t) {
                                t.setDate(1), t.setHours(0, 0, 0, 0);
                            },
                            function (t, n) {
                                t.setMonth(t.getMonth() + n);
                            },
                            function (t, n) {
                                return (
                                    n.getMonth() -
                                    t.getMonth() +
                                    12 * (n.getFullYear() - t.getFullYear())
                                );
                            },
                            function (t) {
                                return t.getMonth();
                            }
                        ));
                const $t = Xt;
                Xt.range;
                var Gt = At(
                    function (t) {
                        t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
                    },
                    function (t, n) {
                        t.setFullYear(t.getFullYear() + n);
                    },
                    function (t, n) {
                        return n.getFullYear() - t.getFullYear();
                    },
                    function (t) {
                        return t.getFullYear();
                    }
                );
                Gt.every = function (t) {
                    return isFinite((t = Math.floor(t))) && t > 0
                        ? At(
                              function (n) {
                                  n.setFullYear(
                                      Math.floor(n.getFullYear() / t) * t
                                  ),
                                      n.setMonth(0, 1),
                                      n.setHours(0, 0, 0, 0);
                              },
                              function (n, e) {
                                  n.setFullYear(n.getFullYear() + e * t);
                              }
                          )
                        : null;
                };
                const Jt = Gt;
                Gt.range;
                var Qt = At(
                    function (t) {
                        t.setUTCSeconds(0, 0);
                    },
                    function (t, n) {
                        t.setTime(+t + n * bt);
                    },
                    function (t, n) {
                        return (n - t) / bt;
                    },
                    function (t) {
                        return t.getUTCMinutes();
                    }
                );
                const Kt = Qt;
                Qt.range;
                var tn = At(
                    function (t) {
                        t.setUTCMinutes(0, 0, 0);
                    },
                    function (t, n) {
                        t.setTime(+t + n * Mt);
                    },
                    function (t, n) {
                        return (n - t) / Mt;
                    },
                    function (t) {
                        return t.getUTCHours();
                    }
                );
                const nn = tn;
                tn.range;
                var en = At(
                    function (t) {
                        t.setUTCHours(0, 0, 0, 0);
                    },
                    function (t, n) {
                        t.setUTCDate(t.getUTCDate() + n);
                    },
                    function (t, n) {
                        return (n - t) / Tt;
                    },
                    function (t) {
                        return t.getUTCDate() - 1;
                    }
                );
                const rn = en;
                function on(t) {
                    return At(
                        function (n) {
                            n.setUTCDate(
                                n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)
                            ),
                                n.setUTCHours(0, 0, 0, 0);
                        },
                        function (t, n) {
                            t.setUTCDate(t.getUTCDate() + 7 * n);
                        },
                        function (t, n) {
                            return (n - t) / Et;
                        }
                    );
                }
                en.range;
                var sn = on(0),
                    an = on(1),
                    un = on(2),
                    cn = on(3),
                    ln = on(4),
                    hn = on(5),
                    fn = on(6),
                    pn =
                        (sn.range,
                        an.range,
                        un.range,
                        cn.range,
                        ln.range,
                        hn.range,
                        fn.range,
                        At(
                            function (t) {
                                t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
                            },
                            function (t, n) {
                                t.setUTCMonth(t.getUTCMonth() + n);
                            },
                            function (t, n) {
                                return (
                                    n.getUTCMonth() -
                                    t.getUTCMonth() +
                                    12 *
                                        (n.getUTCFullYear() -
                                            t.getUTCFullYear())
                                );
                            },
                            function (t) {
                                return t.getUTCMonth();
                            }
                        ));
                const dn = pn;
                pn.range;
                var yn = At(
                    function (t) {
                        t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
                    },
                    function (t, n) {
                        t.setUTCFullYear(t.getUTCFullYear() + n);
                    },
                    function (t, n) {
                        return n.getUTCFullYear() - t.getUTCFullYear();
                    },
                    function (t) {
                        return t.getUTCFullYear();
                    }
                );
                yn.every = function (t) {
                    return isFinite((t = Math.floor(t))) && t > 0
                        ? At(
                              function (n) {
                                  n.setUTCFullYear(
                                      Math.floor(n.getUTCFullYear() / t) * t
                                  ),
                                      n.setUTCMonth(0, 1),
                                      n.setUTCHours(0, 0, 0, 0);
                              },
                              function (n, e) {
                                  n.setUTCFullYear(n.getUTCFullYear() + e * t);
                              }
                          )
                        : null;
                };
                const vn = yn;
                function mn(t, n, e, i, r, o) {
                    const s = [
                        [Ct, 1, wt],
                        [Ct, 5, 5e3],
                        [Ct, 15, 15e3],
                        [Ct, 30, 3e4],
                        [o, 1, bt],
                        [o, 5, 3e5],
                        [o, 15, 9e5],
                        [o, 30, 18e5],
                        [r, 1, Mt],
                        [r, 3, 108e5],
                        [r, 6, 216e5],
                        [r, 12, 432e5],
                        [i, 1, Tt],
                        [i, 2, 1728e5],
                        [e, 1, Et],
                        [n, 1, 2592e6],
                        [n, 3, 7776e6],
                        [t, 1, St],
                    ];
                    function a(n, e, i) {
                        const r = Math.abs(e - n) / i,
                            o = g(([, , t]) => t).right(s, r);
                        if (o === s.length)
                            return t.every(v(n / St, e / St, i));
                        if (0 === o) return Lt.every(Math.max(v(n, e, i), 1));
                        const [a, u] =
                            s[r / s[o - 1][2] < s[o][2] / r ? o - 1 : o];
                        return a.every(u);
                    }
                    return [
                        function (t, n, e) {
                            const i = n < t;
                            i && ([t, n] = [n, t]);
                            const r =
                                    e && "function" == typeof e.range
                                        ? e
                                        : a(t, n, e),
                                o = r ? r.range(t, +n + 1) : [];
                            return i ? o.reverse() : o;
                        },
                        a,
                    ];
                }
                yn.range;
                const [gn, _n] = mn(vn, dn, sn, rn, nn, Kt),
                    [xn, wn] = mn(Jt, $t, Ut, jt, Ft, Zt);
                function bn(t) {
                    if (0 <= t.y && t.y < 100) {
                        var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                        return n.setFullYear(t.y), n;
                    }
                    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
                }
                function Mn(t) {
                    if (0 <= t.y && t.y < 100) {
                        var n = new Date(
                            Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L)
                        );
                        return n.setUTCFullYear(t.y), n;
                    }
                    return new Date(
                        Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
                    );
                }
                function Tn(t, n, e) {
                    return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
                }
                var En,
                    Sn,
                    kn,
                    Nn = { "-": "", _: " ", 0: "0" },
                    An = /^\s*\d+/,
                    Pn = /^%/,
                    Ln = /[\\^$*+?|[\]().{}]/g;
                function On(t, n, e) {
                    var i = t < 0 ? "-" : "",
                        r = (i ? -t : t) + "",
                        o = r.length;
                    return i + (o < e ? new Array(e - o + 1).join(n) + r : r);
                }
                function Cn(t) {
                    return t.replace(Ln, "\\$&");
                }
                function In(t) {
                    return new RegExp("^(?:" + t.map(Cn).join("|") + ")", "i");
                }
                function Zn(t) {
                    return new Map(t.map((t, n) => [t.toLowerCase(), n]));
                }
                function Dn(t, n, e) {
                    var i = An.exec(n.slice(e, e + 1));
                    return i ? ((t.w = +i[0]), e + i[0].length) : -1;
                }
                function Fn(t, n, e) {
                    var i = An.exec(n.slice(e, e + 1));
                    return i ? ((t.u = +i[0]), e + i[0].length) : -1;
                }
                function Hn(t, n, e) {
                    var i = An.exec(n.slice(e, e + 2));
                    return i ? ((t.U = +i[0]), e + i[0].length) : -1;
                }
                function jn(t, n, e) {
                    var i = An.exec(n.slice(e, e + 2));
                    return i ? ((t.V = +i[0]), e + i[0].length) : -1;
                }
                function zn(t, n, e) {
                    var i = An.exec(n.slice(e, e + 2));
                    return i ? ((t.W = +i[0]), e + i[0].length) : -1;
                }
                function Un(t, n, e) {
                    var i = An.exec(n.slice(e, e + 4));
                    return i ? ((t.y = +i[0]), e + i[0].length) : -1;
                }
                function Yn(t, n, e) {
                    var i = An.exec(n.slice(e, e + 2));
                    return i
                        ? ((t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3)),
                          e + i[0].length)
                        : -1;
                }
                function Rn(t, n, e) {
                    var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(
                        n.slice(e, e + 6)
                    );
                    return i
                        ? ((t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00"))),
                          e + i[0].length)
                        : -1;
                }
                function qn(t, n, e) {
                    var i = An.exec(n.slice(e, e + 1));
                    return i ? ((t.q = 3 * i[0] - 3), e + i[0].length) : -1;
                }
                function Bn(t, n, e) {
                    var i = An.exec(n.slice(e, e + 2));
                    return i ? ((t.m = i[0] - 1), e + i[0].length) : -1;
                }
                function Vn(t, n, e) {
                    var i = An.exec(n.slice(e, e + 2));
                    return i ? ((t.d = +i[0]), e + i[0].length) : -1;
                }
                function Wn(t, n, e) {
                    var i = An.exec(n.slice(e, e + 3));
                    return i ? ((t.m = 0), (t.d = +i[0]), e + i[0].length) : -1;
                }
                function Xn(t, n, e) {
                    var i = An.exec(n.slice(e, e + 2));
                    return i ? ((t.H = +i[0]), e + i[0].length) : -1;
                }
                function $n(t, n, e) {
                    var i = An.exec(n.slice(e, e + 2));
                    return i ? ((t.M = +i[0]), e + i[0].length) : -1;
                }
                function Gn(t, n, e) {
                    var i = An.exec(n.slice(e, e + 2));
                    return i ? ((t.S = +i[0]), e + i[0].length) : -1;
                }
                function Jn(t, n, e) {
                    var i = An.exec(n.slice(e, e + 3));
                    return i ? ((t.L = +i[0]), e + i[0].length) : -1;
                }
                function Qn(t, n, e) {
                    var i = An.exec(n.slice(e, e + 6));
                    return i
                        ? ((t.L = Math.floor(i[0] / 1e3)), e + i[0].length)
                        : -1;
                }
                function Kn(t, n, e) {
                    var i = Pn.exec(n.slice(e, e + 1));
                    return i ? e + i[0].length : -1;
                }
                function te(t, n, e) {
                    var i = An.exec(n.slice(e));
                    return i ? ((t.Q = +i[0]), e + i[0].length) : -1;
                }
                function ne(t, n, e) {
                    var i = An.exec(n.slice(e));
                    return i ? ((t.s = +i[0]), e + i[0].length) : -1;
                }
                function ee(t, n) {
                    return On(t.getDate(), n, 2);
                }
                function ie(t, n) {
                    return On(t.getHours(), n, 2);
                }
                function re(t, n) {
                    return On(t.getHours() % 12 || 12, n, 2);
                }
                function oe(t, n) {
                    return On(1 + jt.count(Jt(t), t), n, 3);
                }
                function se(t, n) {
                    return On(t.getMilliseconds(), n, 3);
                }
                function ae(t, n) {
                    return se(t, n) + "000";
                }
                function ue(t, n) {
                    return On(t.getMonth() + 1, n, 2);
                }
                function ce(t, n) {
                    return On(t.getMinutes(), n, 2);
                }
                function le(t, n) {
                    return On(t.getSeconds(), n, 2);
                }
                function he(t) {
                    var n = t.getDay();
                    return 0 === n ? 7 : n;
                }
                function fe(t, n) {
                    return On(Ut.count(Jt(t) - 1, t), n, 2);
                }
                function pe(t) {
                    var n = t.getDay();
                    return n >= 4 || 0 === n ? Bt(t) : Bt.ceil(t);
                }
                function de(t, n) {
                    return (
                        (t = pe(t)),
                        On(Bt.count(Jt(t), t) + (4 === Jt(t).getDay()), n, 2)
                    );
                }
                function ye(t) {
                    return t.getDay();
                }
                function ve(t, n) {
                    return On(Yt.count(Jt(t) - 1, t), n, 2);
                }
                function me(t, n) {
                    return On(t.getFullYear() % 100, n, 2);
                }
                function ge(t, n) {
                    return On((t = pe(t)).getFullYear() % 100, n, 2);
                }
                function _e(t, n) {
                    return On(t.getFullYear() % 1e4, n, 4);
                }
                function xe(t, n) {
                    var e = t.getDay();
                    return On(
                        (t =
                            e >= 4 || 0 === e
                                ? Bt(t)
                                : Bt.ceil(t)).getFullYear() % 1e4,
                        n,
                        4
                    );
                }
                function we(t) {
                    var n = t.getTimezoneOffset();
                    return (
                        (n > 0 ? "-" : ((n *= -1), "+")) +
                        On((n / 60) | 0, "0", 2) +
                        On(n % 60, "0", 2)
                    );
                }
                function be(t, n) {
                    return On(t.getUTCDate(), n, 2);
                }
                function Me(t, n) {
                    return On(t.getUTCHours(), n, 2);
                }
                function Te(t, n) {
                    return On(t.getUTCHours() % 12 || 12, n, 2);
                }
                function Ee(t, n) {
                    return On(1 + rn.count(vn(t), t), n, 3);
                }
                function Se(t, n) {
                    return On(t.getUTCMilliseconds(), n, 3);
                }
                function ke(t, n) {
                    return Se(t, n) + "000";
                }
                function Ne(t, n) {
                    return On(t.getUTCMonth() + 1, n, 2);
                }
                function Ae(t, n) {
                    return On(t.getUTCMinutes(), n, 2);
                }
                function Pe(t, n) {
                    return On(t.getUTCSeconds(), n, 2);
                }
                function Le(t) {
                    var n = t.getUTCDay();
                    return 0 === n ? 7 : n;
                }
                function Oe(t, n) {
                    return On(sn.count(vn(t) - 1, t), n, 2);
                }
                function Ce(t) {
                    var n = t.getUTCDay();
                    return n >= 4 || 0 === n ? ln(t) : ln.ceil(t);
                }
                function Ie(t, n) {
                    return (
                        (t = Ce(t)),
                        On(ln.count(vn(t), t) + (4 === vn(t).getUTCDay()), n, 2)
                    );
                }
                function Ze(t) {
                    return t.getUTCDay();
                }
                function De(t, n) {
                    return On(an.count(vn(t) - 1, t), n, 2);
                }
                function Fe(t, n) {
                    return On(t.getUTCFullYear() % 100, n, 2);
                }
                function He(t, n) {
                    return On((t = Ce(t)).getUTCFullYear() % 100, n, 2);
                }
                function je(t, n) {
                    return On(t.getUTCFullYear() % 1e4, n, 4);
                }
                function ze(t, n) {
                    var e = t.getUTCDay();
                    return On(
                        (t =
                            e >= 4 || 0 === e
                                ? ln(t)
                                : ln.ceil(t)).getUTCFullYear() % 1e4,
                        n,
                        4
                    );
                }
                function Ue() {
                    return "+0000";
                }
                function Ye() {
                    return "%";
                }
                function Re(t) {
                    return +t;
                }
                function qe(t) {
                    return Math.floor(+t / 1e3);
                }
                function Be(t) {
                    return new Date(t);
                }
                function Ve(t) {
                    return t instanceof Date ? +t : +new Date(+t);
                }
                function We(t, n, e, i, r, o, s, a, u, c) {
                    var l = I(),
                        h = l.invert,
                        f = l.domain,
                        p = c(".%L"),
                        d = c(":%S"),
                        y = c("%I:%M"),
                        v = c("%I %p"),
                        m = c("%a %d"),
                        g = c("%b %d"),
                        _ = c("%B"),
                        x = c("%Y");
                    function w(t) {
                        return (
                            u(t) < t
                                ? p
                                : a(t) < t
                                ? d
                                : s(t) < t
                                ? y
                                : o(t) < t
                                ? v
                                : i(t) < t
                                ? r(t) < t
                                    ? m
                                    : g
                                : e(t) < t
                                ? _
                                : x
                        )(t);
                    }
                    return (
                        (l.invert = function (t) {
                            return new Date(h(t));
                        }),
                        (l.domain = function (t) {
                            return arguments.length
                                ? f(Array.from(t, Ve))
                                : f().map(Be);
                        }),
                        (l.ticks = function (n) {
                            var e = f();
                            return t(e[0], e[e.length - 1], null == n ? 10 : n);
                        }),
                        (l.tickFormat = function (t, n) {
                            return null == n ? w : c(n);
                        }),
                        (l.nice = function (t) {
                            var e = f();
                            return (
                                (t && "function" == typeof t.range) ||
                                    (t = n(
                                        e[0],
                                        e[e.length - 1],
                                        null == t ? 10 : t
                                    )),
                                t ? f(q(e, t)) : l
                            );
                        }),
                        (l.copy = function () {
                            return O(l, We(t, n, e, i, r, o, s, a, u, c));
                        }),
                        l
                    );
                }
                function Xe() {
                    return r.apply(
                        We(xn, wn, Jt, $t, Ut, jt, Ft, Zt, Ct, Sn).domain([
                            new Date(2e3, 0, 1),
                            new Date(2e3, 0, 2),
                        ]),
                        arguments
                    );
                }
                function $e() {
                    return r.apply(
                        We(gn, _n, vn, dn, sn, rn, nn, Kt, Ct, kn).domain([
                            Date.UTC(2e3, 0, 1),
                            Date.UTC(2e3, 0, 2),
                        ]),
                        arguments
                    );
                }
                function Ge() {
                    var t,
                        n,
                        e,
                        i,
                        r,
                        o = 0,
                        s = 1,
                        a = N,
                        u = !1;
                    function c(n) {
                        return null == n || isNaN((n = +n))
                            ? r
                            : a(
                                  0 === e
                                      ? 0.5
                                      : ((n = (i(n) - t) * e),
                                        u ? Math.max(0, Math.min(1, n)) : n)
                              );
                    }
                    function l(t) {
                        return function (n) {
                            var e, i;
                            return arguments.length
                                ? (([e, i] = n), (a = t(e, i)), c)
                                : [a(0), a(1)];
                        };
                    }
                    return (
                        (c.domain = function (r) {
                            return arguments.length
                                ? (([o, s] = r),
                                  (t = i((o = +o))),
                                  (n = i((s = +s))),
                                  (e = t === n ? 0 : 1 / (n - t)),
                                  c)
                                : [o, s];
                        }),
                        (c.clamp = function (t) {
                            return arguments.length ? ((u = !!t), c) : u;
                        }),
                        (c.interpolator = function (t) {
                            return arguments.length ? ((a = t), c) : a;
                        }),
                        (c.range = l(M.Z)),
                        (c.rangeRound = l(E.Z)),
                        (c.unknown = function (t) {
                            return arguments.length ? ((r = t), c) : r;
                        }),
                        function (r) {
                            return (
                                (i = r),
                                (t = r(o)),
                                (n = r(s)),
                                (e = t === n ? 0 : 1 / (n - t)),
                                c
                            );
                        }
                    );
                }
                function Je(t, n) {
                    return n
                        .domain(t.domain())
                        .interpolator(t.interpolator())
                        .clamp(t.clamp())
                        .unknown(t.unknown());
                }
                function Qe() {
                    var t = U(Ge()(N));
                    return (
                        (t.copy = function () {
                            return Je(t, Qe());
                        }),
                        o.apply(t, arguments)
                    );
                }
                function Ke() {
                    var t = J(Ge()).domain([1, 10]);
                    return (
                        (t.copy = function () {
                            return Je(t, Ke()).base(t.base());
                        }),
                        o.apply(t, arguments)
                    );
                }
                function ti() {
                    var t = nt(Ge());
                    return (
                        (t.copy = function () {
                            return Je(t, ti()).constant(t.constant());
                        }),
                        o.apply(t, arguments)
                    );
                }
                function ni() {
                    var t = st(Ge());
                    return (
                        (t.copy = function () {
                            return Je(t, ni()).exponent(t.exponent());
                        }),
                        o.apply(t, arguments)
                    );
                }
                function ei() {
                    return ni.apply(null, arguments).exponent(0.5);
                }
                function ii() {
                    var t = [],
                        n = N;
                    function e(e) {
                        if (null != e && !isNaN((e = +e)))
                            return n((b(t, e, 1) - 1) / (t.length - 1));
                    }
                    return (
                        (e.domain = function (n) {
                            if (!arguments.length) return t.slice();
                            t = [];
                            for (let e of n)
                                null == e || isNaN((e = +e)) || t.push(e);
                            return t.sort(m), e;
                        }),
                        (e.interpolator = function (t) {
                            return arguments.length ? ((n = t), e) : n;
                        }),
                        (e.range = function () {
                            return t.map((e, i) => n(i / (t.length - 1)));
                        }),
                        (e.quantiles = function (n) {
                            return Array.from({ length: n + 1 }, (e, i) =>
                                vt(t, i / n)
                            );
                        }),
                        (e.copy = function () {
                            return ii(n).domain(t);
                        }),
                        o.apply(e, arguments)
                    );
                }
                (En = (function (t) {
                    var n = t.dateTime,
                        e = t.date,
                        i = t.time,
                        r = t.periods,
                        o = t.days,
                        s = t.shortDays,
                        a = t.months,
                        u = t.shortMonths,
                        c = In(r),
                        l = Zn(r),
                        h = In(o),
                        f = Zn(o),
                        p = In(s),
                        d = Zn(s),
                        y = In(a),
                        v = Zn(a),
                        m = In(u),
                        g = Zn(u),
                        _ = {
                            a: function (t) {
                                return s[t.getDay()];
                            },
                            A: function (t) {
                                return o[t.getDay()];
                            },
                            b: function (t) {
                                return u[t.getMonth()];
                            },
                            B: function (t) {
                                return a[t.getMonth()];
                            },
                            c: null,
                            d: ee,
                            e: ee,
                            f: ae,
                            g: ge,
                            G: xe,
                            H: ie,
                            I: re,
                            j: oe,
                            L: se,
                            m: ue,
                            M: ce,
                            p: function (t) {
                                return r[+(t.getHours() >= 12)];
                            },
                            q: function (t) {
                                return 1 + ~~(t.getMonth() / 3);
                            },
                            Q: Re,
                            s: qe,
                            S: le,
                            u: he,
                            U: fe,
                            V: de,
                            w: ye,
                            W: ve,
                            x: null,
                            X: null,
                            y: me,
                            Y: _e,
                            Z: we,
                            "%": Ye,
                        },
                        x = {
                            a: function (t) {
                                return s[t.getUTCDay()];
                            },
                            A: function (t) {
                                return o[t.getUTCDay()];
                            },
                            b: function (t) {
                                return u[t.getUTCMonth()];
                            },
                            B: function (t) {
                                return a[t.getUTCMonth()];
                            },
                            c: null,
                            d: be,
                            e: be,
                            f: ke,
                            g: He,
                            G: ze,
                            H: Me,
                            I: Te,
                            j: Ee,
                            L: Se,
                            m: Ne,
                            M: Ae,
                            p: function (t) {
                                return r[+(t.getUTCHours() >= 12)];
                            },
                            q: function (t) {
                                return 1 + ~~(t.getUTCMonth() / 3);
                            },
                            Q: Re,
                            s: qe,
                            S: Pe,
                            u: Le,
                            U: Oe,
                            V: Ie,
                            w: Ze,
                            W: De,
                            x: null,
                            X: null,
                            y: Fe,
                            Y: je,
                            Z: Ue,
                            "%": Ye,
                        },
                        w = {
                            a: function (t, n, e) {
                                var i = p.exec(n.slice(e));
                                return i
                                    ? ((t.w = d.get(i[0].toLowerCase())),
                                      e + i[0].length)
                                    : -1;
                            },
                            A: function (t, n, e) {
                                var i = h.exec(n.slice(e));
                                return i
                                    ? ((t.w = f.get(i[0].toLowerCase())),
                                      e + i[0].length)
                                    : -1;
                            },
                            b: function (t, n, e) {
                                var i = m.exec(n.slice(e));
                                return i
                                    ? ((t.m = g.get(i[0].toLowerCase())),
                                      e + i[0].length)
                                    : -1;
                            },
                            B: function (t, n, e) {
                                var i = y.exec(n.slice(e));
                                return i
                                    ? ((t.m = v.get(i[0].toLowerCase())),
                                      e + i[0].length)
                                    : -1;
                            },
                            c: function (t, e, i) {
                                return T(t, n, e, i);
                            },
                            d: Vn,
                            e: Vn,
                            f: Qn,
                            g: Yn,
                            G: Un,
                            H: Xn,
                            I: Xn,
                            j: Wn,
                            L: Jn,
                            m: Bn,
                            M: $n,
                            p: function (t, n, e) {
                                var i = c.exec(n.slice(e));
                                return i
                                    ? ((t.p = l.get(i[0].toLowerCase())),
                                      e + i[0].length)
                                    : -1;
                            },
                            q: qn,
                            Q: te,
                            s: ne,
                            S: Gn,
                            u: Fn,
                            U: Hn,
                            V: jn,
                            w: Dn,
                            W: zn,
                            x: function (t, n, i) {
                                return T(t, e, n, i);
                            },
                            X: function (t, n, e) {
                                return T(t, i, n, e);
                            },
                            y: Yn,
                            Y: Un,
                            Z: Rn,
                            "%": Kn,
                        };
                    function b(t, n) {
                        return function (e) {
                            var i,
                                r,
                                o,
                                s = [],
                                a = -1,
                                u = 0,
                                c = t.length;
                            for (
                                e instanceof Date || (e = new Date(+e));
                                ++a < c;

                            )
                                37 === t.charCodeAt(a) &&
                                    (s.push(t.slice(u, a)),
                                    null != (r = Nn[(i = t.charAt(++a))])
                                        ? (i = t.charAt(++a))
                                        : (r = "e" === i ? " " : "0"),
                                    (o = n[i]) && (i = o(e, r)),
                                    s.push(i),
                                    (u = a + 1));
                            return s.push(t.slice(u, a)), s.join("");
                        };
                    }
                    function M(t, n) {
                        return function (e) {
                            var i,
                                r,
                                o = Tn(1900, void 0, 1);
                            if (T(o, t, (e += ""), 0) != e.length) return null;
                            if ("Q" in o) return new Date(o.Q);
                            if ("s" in o)
                                return new Date(
                                    1e3 * o.s + ("L" in o ? o.L : 0)
                                );
                            if (
                                (n && !("Z" in o) && (o.Z = 0),
                                "p" in o && (o.H = (o.H % 12) + 12 * o.p),
                                void 0 === o.m && (o.m = "q" in o ? o.q : 0),
                                "V" in o)
                            ) {
                                if (o.V < 1 || o.V > 53) return null;
                                "w" in o || (o.w = 1),
                                    "Z" in o
                                        ? ((r = (i = Mn(
                                              Tn(o.y, 0, 1)
                                          )).getUTCDay()),
                                          (i =
                                              r > 4 || 0 === r
                                                  ? an.ceil(i)
                                                  : an(i)),
                                          (i = rn.offset(i, 7 * (o.V - 1))),
                                          (o.y = i.getUTCFullYear()),
                                          (o.m = i.getUTCMonth()),
                                          (o.d =
                                              i.getUTCDate() + ((o.w + 6) % 7)))
                                        : ((r = (i = bn(
                                              Tn(o.y, 0, 1)
                                          )).getDay()),
                                          (i =
                                              r > 4 || 0 === r
                                                  ? Yt.ceil(i)
                                                  : Yt(i)),
                                          (i = jt.offset(i, 7 * (o.V - 1))),
                                          (o.y = i.getFullYear()),
                                          (o.m = i.getMonth()),
                                          (o.d =
                                              i.getDate() + ((o.w + 6) % 7)));
                            } else
                                ("W" in o || "U" in o) &&
                                    ("w" in o ||
                                        (o.w =
                                            "u" in o
                                                ? o.u % 7
                                                : "W" in o
                                                ? 1
                                                : 0),
                                    (r =
                                        "Z" in o
                                            ? Mn(Tn(o.y, 0, 1)).getUTCDay()
                                            : bn(Tn(o.y, 0, 1)).getDay()),
                                    (o.m = 0),
                                    (o.d =
                                        "W" in o
                                            ? ((o.w + 6) % 7) +
                                              7 * o.W -
                                              ((r + 5) % 7)
                                            : o.w + 7 * o.U - ((r + 6) % 7)));
                            return "Z" in o
                                ? ((o.H += (o.Z / 100) | 0),
                                  (o.M += o.Z % 100),
                                  Mn(o))
                                : bn(o);
                        };
                    }
                    function T(t, n, e, i) {
                        for (
                            var r, o, s = 0, a = n.length, u = e.length;
                            s < a;

                        ) {
                            if (i >= u) return -1;
                            if (37 === (r = n.charCodeAt(s++))) {
                                if (
                                    ((r = n.charAt(s++)),
                                    !(o = w[r in Nn ? n.charAt(s++) : r]) ||
                                        (i = o(t, e, i)) < 0)
                                )
                                    return -1;
                            } else if (r != e.charCodeAt(i++)) return -1;
                        }
                        return i;
                    }
                    return (
                        (_.x = b(e, _)),
                        (_.X = b(i, _)),
                        (_.c = b(n, _)),
                        (x.x = b(e, x)),
                        (x.X = b(i, x)),
                        (x.c = b(n, x)),
                        {
                            format: function (t) {
                                var n = b((t += ""), _);
                                return (
                                    (n.toString = function () {
                                        return t;
                                    }),
                                    n
                                );
                            },
                            parse: function (t) {
                                var n = M((t += ""), !1);
                                return (
                                    (n.toString = function () {
                                        return t;
                                    }),
                                    n
                                );
                            },
                            utcFormat: function (t) {
                                var n = b((t += ""), x);
                                return (
                                    (n.toString = function () {
                                        return t;
                                    }),
                                    n
                                );
                            },
                            utcParse: function (t) {
                                var n = M((t += ""), !0);
                                return (
                                    (n.toString = function () {
                                        return t;
                                    }),
                                    n
                                );
                            },
                        }
                    );
                })({
                    dateTime: "%x, %X",
                    date: "%-m/%-d/%Y",
                    time: "%-I:%M:%S %p",
                    periods: ["AM", "PM"],
                    days: [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                    ],
                    shortDays: [
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat",
                    ],
                    months: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                    ],
                    shortMonths: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                    ],
                })),
                    (Sn = En.format),
                    En.parse,
                    (kn = En.utcFormat),
                    En.utcParse;
                var ri = e(108);
                function oi() {
                    var t,
                        n,
                        e,
                        i,
                        r,
                        o,
                        s,
                        a = 0,
                        u = 0.5,
                        c = 1,
                        l = 1,
                        h = N,
                        f = !1;
                    function p(t) {
                        return isNaN((t = +t))
                            ? s
                            : ((t =
                                  0.5 +
                                  ((t = +o(t)) - n) * (l * t < l * n ? i : r)),
                              h(f ? Math.max(0, Math.min(1, t)) : t));
                    }
                    function d(t) {
                        return function (n) {
                            var e, i, r;
                            return arguments.length
                                ? (([e, i, r] = n),
                                  (h = (0, ri.Z)(t, [e, i, r])),
                                  p)
                                : [h(0), h(0.5), h(1)];
                        };
                    }
                    return (
                        (p.domain = function (s) {
                            return arguments.length
                                ? (([a, u, c] = s),
                                  (t = o((a = +a))),
                                  (n = o((u = +u))),
                                  (e = o((c = +c))),
                                  (i = t === n ? 0 : 0.5 / (n - t)),
                                  (r = n === e ? 0 : 0.5 / (e - n)),
                                  (l = n < t ? -1 : 1),
                                  p)
                                : [a, u, c];
                        }),
                        (p.clamp = function (t) {
                            return arguments.length ? ((f = !!t), p) : f;
                        }),
                        (p.interpolator = function (t) {
                            return arguments.length ? ((h = t), p) : h;
                        }),
                        (p.range = d(M.Z)),
                        (p.rangeRound = d(E.Z)),
                        (p.unknown = function (t) {
                            return arguments.length ? ((s = t), p) : s;
                        }),
                        function (s) {
                            return (
                                (o = s),
                                (t = s(a)),
                                (n = s(u)),
                                (e = s(c)),
                                (i = t === n ? 0 : 0.5 / (n - t)),
                                (r = n === e ? 0 : 0.5 / (e - n)),
                                (l = n < t ? -1 : 1),
                                p
                            );
                        }
                    );
                }
                function si() {
                    var t = U(oi()(N));
                    return (
                        (t.copy = function () {
                            return Je(t, si());
                        }),
                        o.apply(t, arguments)
                    );
                }
                function ai() {
                    var t = J(oi()).domain([0.1, 1, 10]);
                    return (
                        (t.copy = function () {
                            return Je(t, ai()).base(t.base());
                        }),
                        o.apply(t, arguments)
                    );
                }
                function ui() {
                    var t = nt(oi());
                    return (
                        (t.copy = function () {
                            return Je(t, ui()).constant(t.constant());
                        }),
                        o.apply(t, arguments)
                    );
                }
                function ci() {
                    var t = st(oi());
                    return (
                        (t.copy = function () {
                            return Je(t, ci()).exponent(t.exponent());
                        }),
                        o.apply(t, arguments)
                    );
                }
                function li() {
                    return ci.apply(null, arguments).exponent(0.5);
                }
            },
            4313: (t, n, e) => {
                "use strict";
                function i(t) {
                    return "object" == typeof t && "length" in t
                        ? t
                        : Array.from(t);
                }
                e.d(n, { Z: () => i });
            },
            789: (t, n, e) => {
                "use strict";
                e.d(n, { Z: () => a });
                var i = e(3888),
                    r = e(1986);
                function o(t) {
                    return function () {
                        var n = this.ownerDocument,
                            e = this.namespaceURI;
                        return e === r.P &&
                            n.documentElement.namespaceURI === r.P
                            ? n.createElement(t)
                            : n.createElementNS(e, t);
                    };
                }
                function s(t) {
                    return function () {
                        return this.ownerDocument.createElementNS(
                            t.space,
                            t.local
                        );
                    };
                }
                function a(t) {
                    var n = (0, i.Z)(t);
                    return (n.local ? s : o)(n);
                }
            },
            6811: (t, n, e) => {
                "use strict";
                e.r(n),
                    e.d(n, {
                        create: () => o,
                        creator: () => i.Z,
                        local: () => a,
                        matcher: () => c.Z,
                        namespace: () => l.Z,
                        namespaces: () => h.Z,
                        pointer: () => f.Z,
                        pointers: () => d,
                        select: () => r.Z,
                        selectAll: () => m,
                        selection: () => v.ZP,
                        selector: () => g.Z,
                        selectorAll: () => _.Z,
                        style: () => x.S,
                        window: () => w.Z,
                    });
                var i = e(789),
                    r = e(4017);
                function o(t) {
                    return (0, r.Z)((0, i.Z)(t).call(document.documentElement));
                }
                var s = 0;
                function a() {
                    return new u();
                }
                function u() {
                    this._ = "@" + (++s).toString(36);
                }
                u.prototype = a.prototype = {
                    constructor: u,
                    get: function (t) {
                        for (var n = this._; !(n in t); )
                            if (!(t = t.parentNode)) return;
                        return t[n];
                    },
                    set: function (t, n) {
                        return (t[this._] = n);
                    },
                    remove: function (t) {
                        return this._ in t && delete t[this._];
                    },
                    toString: function () {
                        return this._;
                    },
                };
                var c = e(3083),
                    l = e(3888),
                    h = e(1986),
                    f = e(3172),
                    p = e(5553);
                function d(t, n) {
                    return (
                        t.target &&
                            ((t = (0, p.Z)(t)),
                            void 0 === n && (n = t.currentTarget),
                            (t = t.touches || [t])),
                        Array.from(t, (t) => (0, f.Z)(t, n))
                    );
                }
                var y = e(4313),
                    v = e(3434);
                function m(t) {
                    return "string" == typeof t
                        ? new v.Y1(
                              [document.querySelectorAll(t)],
                              [document.documentElement]
                          )
                        : new v.Y1([null == t ? [] : (0, y.Z)(t)], v.Jz);
                }
                var g = e(2634),
                    _ = e(3545),
                    x = e(9986),
                    w = e(5021);
            },
            3083: (t, n, e) => {
                "use strict";
                function i(t) {
                    return function () {
                        return this.matches(t);
                    };
                }
                function r(t) {
                    return function (n) {
                        return n.matches(t);
                    };
                }
                e.d(n, { P: () => r, Z: () => i });
            },
            3888: (t, n, e) => {
                "use strict";
                e.d(n, { Z: () => r });
                var i = e(1986);
                function r(t) {
                    var n = (t += ""),
                        e = n.indexOf(":");
                    return (
                        e >= 0 &&
                            "xmlns" !== (n = t.slice(0, e)) &&
                            (t = t.slice(e + 1)),
                        i.Z.hasOwnProperty(n) ? { space: i.Z[n], local: t } : t
                    );
                }
            },
            1986: (t, n, e) => {
                "use strict";
                e.d(n, { P: () => i, Z: () => r });
                var i = "http://www.w3.org/1999/xhtml";
                const r = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: i,
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/",
                };
            },
            3172: (t, n, e) => {
                "use strict";
                e.d(n, { Z: () => r });
                var i = e(5553);
                function r(t, n) {
                    if (
                        ((t = (0, i.Z)(t)),
                        void 0 === n && (n = t.currentTarget),
                        n)
                    ) {
                        var e = n.ownerSVGElement || n;
                        if (e.createSVGPoint) {
                            var r = e.createSVGPoint();
                            return (
                                (r.x = t.clientX),
                                (r.y = t.clientY),
                                [
                                    (r = r.matrixTransform(
                                        n.getScreenCTM().inverse()
                                    )).x,
                                    r.y,
                                ]
                            );
                        }
                        if (n.getBoundingClientRect) {
                            var o = n.getBoundingClientRect();
                            return [
                                t.clientX - o.left - n.clientLeft,
                                t.clientY - o.top - n.clientTop,
                            ];
                        }
                    }
                    return [t.pageX, t.pageY];
                }
            },
            4017: (t, n, e) => {
                "use strict";
                e.d(n, { Z: () => r });
                var i = e(3434);
                function r(t) {
                    return "string" == typeof t
                        ? new i.Y1(
                              [[document.querySelector(t)]],
                              [document.documentElement]
                          )
                        : new i.Y1([[t]], i.Jz);
                }
            },
            3434: (t, n, e) => {
                "use strict";
                e.d(n, { Y1: () => rt, ZP: () => st, Jz: () => it });
                var i = e(2634),
                    r = e(4313),
                    o = e(3545),
                    s = e(3083),
                    a = Array.prototype.find;
                function u() {
                    return this.firstElementChild;
                }
                var c = Array.prototype.filter;
                function l() {
                    return this.children;
                }
                function h(t) {
                    return new Array(t.length);
                }
                function f(t, n) {
                    (this.ownerDocument = t.ownerDocument),
                        (this.namespaceURI = t.namespaceURI),
                        (this._next = null),
                        (this._parent = t),
                        (this.__data__ = n);
                }
                function p(t) {
                    return function () {
                        return t;
                    };
                }
                function d(t, n, e, i, r, o) {
                    for (var s, a = 0, u = n.length, c = o.length; a < c; ++a)
                        (s = n[a])
                            ? ((s.__data__ = o[a]), (i[a] = s))
                            : (e[a] = new f(t, o[a]));
                    for (; a < u; ++a) (s = n[a]) && (r[a] = s);
                }
                function y(t, n, e, i, r, o, s) {
                    var a,
                        u,
                        c,
                        l = new Map(),
                        h = n.length,
                        p = o.length,
                        d = new Array(h);
                    for (a = 0; a < h; ++a)
                        (u = n[a]) &&
                            ((d[a] = c = s.call(u, u.__data__, a, n) + ""),
                            l.has(c) ? (r[a] = u) : l.set(c, u));
                    for (a = 0; a < p; ++a)
                        (c = s.call(t, o[a], a, o) + ""),
                            (u = l.get(c))
                                ? ((i[a] = u), (u.__data__ = o[a]), l.delete(c))
                                : (e[a] = new f(t, o[a]));
                    for (a = 0; a < h; ++a)
                        (u = n[a]) && l.get(d[a]) === u && (r[a] = u);
                }
                function v(t) {
                    return t.__data__;
                }
                function m(t, n) {
                    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
                }
                f.prototype = {
                    constructor: f,
                    appendChild: function (t) {
                        return this._parent.insertBefore(t, this._next);
                    },
                    insertBefore: function (t, n) {
                        return this._parent.insertBefore(t, n);
                    },
                    querySelector: function (t) {
                        return this._parent.querySelector(t);
                    },
                    querySelectorAll: function (t) {
                        return this._parent.querySelectorAll(t);
                    },
                };
                var g = e(3888);
                function _(t) {
                    return function () {
                        this.removeAttribute(t);
                    };
                }
                function x(t) {
                    return function () {
                        this.removeAttributeNS(t.space, t.local);
                    };
                }
                function w(t, n) {
                    return function () {
                        this.setAttribute(t, n);
                    };
                }
                function b(t, n) {
                    return function () {
                        this.setAttributeNS(t.space, t.local, n);
                    };
                }
                function M(t, n) {
                    return function () {
                        var e = n.apply(this, arguments);
                        null == e
                            ? this.removeAttribute(t)
                            : this.setAttribute(t, e);
                    };
                }
                function T(t, n) {
                    return function () {
                        var e = n.apply(this, arguments);
                        null == e
                            ? this.removeAttributeNS(t.space, t.local)
                            : this.setAttributeNS(t.space, t.local, e);
                    };
                }
                var E = e(9986);
                function S(t) {
                    return function () {
                        delete this[t];
                    };
                }
                function k(t, n) {
                    return function () {
                        this[t] = n;
                    };
                }
                function N(t, n) {
                    return function () {
                        var e = n.apply(this, arguments);
                        null == e ? delete this[t] : (this[t] = e);
                    };
                }
                function A(t) {
                    return t.trim().split(/^|\s+/);
                }
                function P(t) {
                    return t.classList || new L(t);
                }
                function L(t) {
                    (this._node = t),
                        (this._names = A(t.getAttribute("class") || ""));
                }
                function O(t, n) {
                    for (var e = P(t), i = -1, r = n.length; ++i < r; )
                        e.add(n[i]);
                }
                function C(t, n) {
                    for (var e = P(t), i = -1, r = n.length; ++i < r; )
                        e.remove(n[i]);
                }
                function I(t) {
                    return function () {
                        O(this, t);
                    };
                }
                function Z(t) {
                    return function () {
                        C(this, t);
                    };
                }
                function D(t, n) {
                    return function () {
                        (n.apply(this, arguments) ? O : C)(this, t);
                    };
                }
                function F() {
                    this.textContent = "";
                }
                function H(t) {
                    return function () {
                        this.textContent = t;
                    };
                }
                function j(t) {
                    return function () {
                        var n = t.apply(this, arguments);
                        this.textContent = null == n ? "" : n;
                    };
                }
                function z() {
                    this.innerHTML = "";
                }
                function U(t) {
                    return function () {
                        this.innerHTML = t;
                    };
                }
                function Y(t) {
                    return function () {
                        var n = t.apply(this, arguments);
                        this.innerHTML = null == n ? "" : n;
                    };
                }
                function R() {
                    this.nextSibling && this.parentNode.appendChild(this);
                }
                function q() {
                    this.previousSibling &&
                        this.parentNode.insertBefore(
                            this,
                            this.parentNode.firstChild
                        );
                }
                L.prototype = {
                    add: function (t) {
                        this._names.indexOf(t) < 0 &&
                            (this._names.push(t),
                            this._node.setAttribute(
                                "class",
                                this._names.join(" ")
                            ));
                    },
                    remove: function (t) {
                        var n = this._names.indexOf(t);
                        n >= 0 &&
                            (this._names.splice(n, 1),
                            this._node.setAttribute(
                                "class",
                                this._names.join(" ")
                            ));
                    },
                    contains: function (t) {
                        return this._names.indexOf(t) >= 0;
                    },
                };
                var B = e(789);
                function V() {
                    return null;
                }
                function W() {
                    var t = this.parentNode;
                    t && t.removeChild(this);
                }
                function X() {
                    var t = this.cloneNode(!1),
                        n = this.parentNode;
                    return n ? n.insertBefore(t, this.nextSibling) : t;
                }
                function $() {
                    var t = this.cloneNode(!0),
                        n = this.parentNode;
                    return n ? n.insertBefore(t, this.nextSibling) : t;
                }
                function G(t) {
                    return t
                        .trim()
                        .split(/^|\s+/)
                        .map(function (t) {
                            var n = "",
                                e = t.indexOf(".");
                            return (
                                e >= 0 &&
                                    ((n = t.slice(e + 1)), (t = t.slice(0, e))),
                                { type: t, name: n }
                            );
                        });
                }
                function J(t) {
                    return function () {
                        var n = this.__on;
                        if (n) {
                            for (var e, i = 0, r = -1, o = n.length; i < o; ++i)
                                (e = n[i]),
                                    (t.type && e.type !== t.type) ||
                                    e.name !== t.name
                                        ? (n[++r] = e)
                                        : this.removeEventListener(
                                              e.type,
                                              e.listener,
                                              e.options
                                          );
                            ++r ? (n.length = r) : delete this.__on;
                        }
                    };
                }
                function Q(t, n, e) {
                    return function () {
                        var i,
                            r = this.__on,
                            o = (function (t) {
                                return function (n) {
                                    t.call(this, n, this.__data__);
                                };
                            })(n);
                        if (r)
                            for (var s = 0, a = r.length; s < a; ++s)
                                if (
                                    (i = r[s]).type === t.type &&
                                    i.name === t.name
                                )
                                    return (
                                        this.removeEventListener(
                                            i.type,
                                            i.listener,
                                            i.options
                                        ),
                                        this.addEventListener(
                                            i.type,
                                            (i.listener = o),
                                            (i.options = e)
                                        ),
                                        void (i.value = n)
                                    );
                        this.addEventListener(t.type, o, e),
                            (i = {
                                type: t.type,
                                name: t.name,
                                value: n,
                                listener: o,
                                options: e,
                            }),
                            r ? r.push(i) : (this.__on = [i]);
                    };
                }
                var K = e(5021);
                function tt(t, n, e) {
                    var i = (0, K.Z)(t),
                        r = i.CustomEvent;
                    "function" == typeof r
                        ? (r = new r(n, e))
                        : ((r = i.document.createEvent("Event")),
                          e
                              ? (r.initEvent(n, e.bubbles, e.cancelable),
                                (r.detail = e.detail))
                              : r.initEvent(n, !1, !1)),
                        t.dispatchEvent(r);
                }
                function nt(t, n) {
                    return function () {
                        return tt(this, t, n);
                    };
                }
                function et(t, n) {
                    return function () {
                        return tt(this, t, n.apply(this, arguments));
                    };
                }
                var it = [null];
                function rt(t, n) {
                    (this._groups = t), (this._parents = n);
                }
                function ot() {
                    return new rt([[document.documentElement]], it);
                }
                rt.prototype = ot.prototype = {
                    constructor: rt,
                    select: function (t) {
                        "function" != typeof t && (t = (0, i.Z)(t));
                        for (
                            var n = this._groups,
                                e = n.length,
                                r = new Array(e),
                                o = 0;
                            o < e;
                            ++o
                        )
                            for (
                                var s,
                                    a,
                                    u = n[o],
                                    c = u.length,
                                    l = (r[o] = new Array(c)),
                                    h = 0;
                                h < c;
                                ++h
                            )
                                (s = u[h]) &&
                                    (a = t.call(s, s.__data__, h, u)) &&
                                    ("__data__" in s &&
                                        (a.__data__ = s.__data__),
                                    (l[h] = a));
                        return new rt(r, this._parents);
                    },
                    selectAll: function (t) {
                        t =
                            "function" == typeof t
                                ? (function (t) {
                                      return function () {
                                          var n = t.apply(this, arguments);
                                          return null == n ? [] : (0, r.Z)(n);
                                      };
                                  })(t)
                                : (0, o.Z)(t);
                        for (
                            var n = this._groups,
                                e = n.length,
                                i = [],
                                s = [],
                                a = 0;
                            a < e;
                            ++a
                        )
                            for (
                                var u, c = n[a], l = c.length, h = 0;
                                h < l;
                                ++h
                            )
                                (u = c[h]) &&
                                    (i.push(t.call(u, u.__data__, h, c)),
                                    s.push(u));
                        return new rt(i, s);
                    },
                    selectChild: function (t) {
                        return this.select(
                            null == t
                                ? u
                                : (function (t) {
                                      return function () {
                                          return a.call(this.children, t);
                                      };
                                  })("function" == typeof t ? t : (0, s.P)(t))
                        );
                    },
                    selectChildren: function (t) {
                        return this.selectAll(
                            null == t
                                ? l
                                : (function (t) {
                                      return function () {
                                          return c.call(this.children, t);
                                      };
                                  })("function" == typeof t ? t : (0, s.P)(t))
                        );
                    },
                    filter: function (t) {
                        "function" != typeof t && (t = (0, s.Z)(t));
                        for (
                            var n = this._groups,
                                e = n.length,
                                i = new Array(e),
                                r = 0;
                            r < e;
                            ++r
                        )
                            for (
                                var o,
                                    a = n[r],
                                    u = a.length,
                                    c = (i[r] = []),
                                    l = 0;
                                l < u;
                                ++l
                            )
                                (o = a[l]) &&
                                    t.call(o, o.__data__, l, a) &&
                                    c.push(o);
                        return new rt(i, this._parents);
                    },
                    data: function (t, n) {
                        if (!arguments.length) return Array.from(this, v);
                        var e = n ? y : d,
                            i = this._parents,
                            o = this._groups;
                        "function" != typeof t && (t = p(t));
                        for (
                            var s = o.length,
                                a = new Array(s),
                                u = new Array(s),
                                c = new Array(s),
                                l = 0;
                            l < s;
                            ++l
                        ) {
                            var h = i[l],
                                f = o[l],
                                m = f.length,
                                g = (0, r.Z)(t.call(h, h && h.__data__, l, i)),
                                _ = g.length,
                                x = (u[l] = new Array(_)),
                                w = (a[l] = new Array(_)),
                                b = (c[l] = new Array(m));
                            e(h, f, x, w, b, g, n);
                            for (var M, T, E = 0, S = 0; E < _; ++E)
                                if ((M = x[E])) {
                                    for (
                                        E >= S && (S = E + 1);
                                        !(T = w[S]) && ++S < _;

                                    );
                                    M._next = T || null;
                                }
                        }
                        return (
                            ((a = new rt(a, i))._enter = u), (a._exit = c), a
                        );
                    },
                    enter: function () {
                        return new rt(
                            this._enter || this._groups.map(h),
                            this._parents
                        );
                    },
                    exit: function () {
                        return new rt(
                            this._exit || this._groups.map(h),
                            this._parents
                        );
                    },
                    join: function (t, n, e) {
                        var i = this.enter(),
                            r = this,
                            o = this.exit();
                        return (
                            (i =
                                "function" == typeof t
                                    ? t(i)
                                    : i.append(t + "")),
                            null != n && (r = n(r)),
                            null == e ? o.remove() : e(o),
                            i && r ? i.merge(r).order() : r
                        );
                    },
                    merge: function (t) {
                        if (!(t instanceof rt))
                            throw new Error("invalid merge");
                        for (
                            var n = this._groups,
                                e = t._groups,
                                i = n.length,
                                r = e.length,
                                o = Math.min(i, r),
                                s = new Array(i),
                                a = 0;
                            a < o;
                            ++a
                        )
                            for (
                                var u,
                                    c = n[a],
                                    l = e[a],
                                    h = c.length,
                                    f = (s[a] = new Array(h)),
                                    p = 0;
                                p < h;
                                ++p
                            )
                                (u = c[p] || l[p]) && (f[p] = u);
                        for (; a < i; ++a) s[a] = n[a];
                        return new rt(s, this._parents);
                    },
                    selection: function () {
                        return this;
                    },
                    order: function () {
                        for (
                            var t = this._groups, n = -1, e = t.length;
                            ++n < e;

                        )
                            for (
                                var i, r = t[n], o = r.length - 1, s = r[o];
                                --o >= 0;

                            )
                                (i = r[o]) &&
                                    (s &&
                                        4 ^ i.compareDocumentPosition(s) &&
                                        s.parentNode.insertBefore(i, s),
                                    (s = i));
                        return this;
                    },
                    sort: function (t) {
                        function n(n, e) {
                            return n && e ? t(n.__data__, e.__data__) : !n - !e;
                        }
                        t || (t = m);
                        for (
                            var e = this._groups,
                                i = e.length,
                                r = new Array(i),
                                o = 0;
                            o < i;
                            ++o
                        ) {
                            for (
                                var s,
                                    a = e[o],
                                    u = a.length,
                                    c = (r[o] = new Array(u)),
                                    l = 0;
                                l < u;
                                ++l
                            )
                                (s = a[l]) && (c[l] = s);
                            c.sort(n);
                        }
                        return new rt(r, this._parents).order();
                    },
                    call: function () {
                        var t = arguments[0];
                        return (
                            (arguments[0] = this),
                            t.apply(null, arguments),
                            this
                        );
                    },
                    nodes: function () {
                        return Array.from(this);
                    },
                    node: function () {
                        for (
                            var t = this._groups, n = 0, e = t.length;
                            n < e;
                            ++n
                        )
                            for (
                                var i = t[n], r = 0, o = i.length;
                                r < o;
                                ++r
                            ) {
                                var s = i[r];
                                if (s) return s;
                            }
                        return null;
                    },
                    size: function () {
                        let t = 0;
                        for (const n of this) ++t;
                        return t;
                    },
                    empty: function () {
                        return !this.node();
                    },
                    each: function (t) {
                        for (
                            var n = this._groups, e = 0, i = n.length;
                            e < i;
                            ++e
                        )
                            for (
                                var r, o = n[e], s = 0, a = o.length;
                                s < a;
                                ++s
                            )
                                (r = o[s]) && t.call(r, r.__data__, s, o);
                        return this;
                    },
                    attr: function (t, n) {
                        var e = (0, g.Z)(t);
                        if (arguments.length < 2) {
                            var i = this.node();
                            return e.local
                                ? i.getAttributeNS(e.space, e.local)
                                : i.getAttribute(e);
                        }
                        return this.each(
                            (null == n
                                ? e.local
                                    ? x
                                    : _
                                : "function" == typeof n
                                ? e.local
                                    ? T
                                    : M
                                : e.local
                                ? b
                                : w)(e, n)
                        );
                    },
                    style: E.Z,
                    property: function (t, n) {
                        return arguments.length > 1
                            ? this.each(
                                  (null == n
                                      ? S
                                      : "function" == typeof n
                                      ? N
                                      : k)(t, n)
                              )
                            : this.node()[t];
                    },
                    classed: function (t, n) {
                        var e = A(t + "");
                        if (arguments.length < 2) {
                            for (
                                var i = P(this.node()), r = -1, o = e.length;
                                ++r < o;

                            )
                                if (!i.contains(e[r])) return !1;
                            return !0;
                        }
                        return this.each(
                            ("function" == typeof n ? D : n ? I : Z)(e, n)
                        );
                    },
                    text: function (t) {
                        return arguments.length
                            ? this.each(
                                  null == t
                                      ? F
                                      : ("function" == typeof t ? j : H)(t)
                              )
                            : this.node().textContent;
                    },
                    html: function (t) {
                        return arguments.length
                            ? this.each(
                                  null == t
                                      ? z
                                      : ("function" == typeof t ? Y : U)(t)
                              )
                            : this.node().innerHTML;
                    },
                    raise: function () {
                        return this.each(R);
                    },
                    lower: function () {
                        return this.each(q);
                    },
                    append: function (t) {
                        var n = "function" == typeof t ? t : (0, B.Z)(t);
                        return this.select(function () {
                            return this.appendChild(n.apply(this, arguments));
                        });
                    },
                    insert: function (t, n) {
                        var e = "function" == typeof t ? t : (0, B.Z)(t),
                            r =
                                null == n
                                    ? V
                                    : "function" == typeof n
                                    ? n
                                    : (0, i.Z)(n);
                        return this.select(function () {
                            return this.insertBefore(
                                e.apply(this, arguments),
                                r.apply(this, arguments) || null
                            );
                        });
                    },
                    remove: function () {
                        return this.each(W);
                    },
                    clone: function (t) {
                        return this.select(t ? $ : X);
                    },
                    datum: function (t) {
                        return arguments.length
                            ? this.property("__data__", t)
                            : this.node().__data__;
                    },
                    on: function (t, n, e) {
                        var i,
                            r,
                            o = G(t + ""),
                            s = o.length;
                        if (!(arguments.length < 2)) {
                            for (a = n ? Q : J, i = 0; i < s; ++i)
                                this.each(a(o[i], n, e));
                            return this;
                        }
                        var a = this.node().__on;
                        if (a)
                            for (var u, c = 0, l = a.length; c < l; ++c)
                                for (i = 0, u = a[c]; i < s; ++i)
                                    if (
                                        (r = o[i]).type === u.type &&
                                        r.name === u.name
                                    )
                                        return u.value;
                    },
                    dispatch: function (t, n) {
                        return this.each(
                            ("function" == typeof n ? et : nt)(t, n)
                        );
                    },
                    [Symbol.iterator]: function* () {
                        for (
                            var t = this._groups, n = 0, e = t.length;
                            n < e;
                            ++n
                        )
                            for (
                                var i, r = t[n], o = 0, s = r.length;
                                o < s;
                                ++o
                            )
                                (i = r[o]) && (yield i);
                    },
                };
                const st = ot;
            },
            9986: (t, n, e) => {
                "use strict";
                e.d(n, { S: () => u, Z: () => a });
                var i = e(5021);
                function r(t) {
                    return function () {
                        this.style.removeProperty(t);
                    };
                }
                function o(t, n, e) {
                    return function () {
                        this.style.setProperty(t, n, e);
                    };
                }
                function s(t, n, e) {
                    return function () {
                        var i = n.apply(this, arguments);
                        null == i
                            ? this.style.removeProperty(t)
                            : this.style.setProperty(t, i, e);
                    };
                }
                function a(t, n, e) {
                    return arguments.length > 1
                        ? this.each(
                              (null == n ? r : "function" == typeof n ? s : o)(
                                  t,
                                  n,
                                  null == e ? "" : e
                              )
                          )
                        : u(this.node(), t);
                }
                function u(t, n) {
                    return (
                        t.style.getPropertyValue(n) ||
                        (0, i.Z)(t)
                            .getComputedStyle(t, null)
                            .getPropertyValue(n)
                    );
                }
            },
            2634: (t, n, e) => {
                "use strict";
                function i() {}
                function r(t) {
                    return null == t
                        ? i
                        : function () {
                              return this.querySelector(t);
                          };
                }
                e.d(n, { Z: () => r });
            },
            3545: (t, n, e) => {
                "use strict";
                function i() {
                    return [];
                }
                function r(t) {
                    return null == t
                        ? i
                        : function () {
                              return this.querySelectorAll(t);
                          };
                }
                e.d(n, { Z: () => r });
            },
            5553: (t, n, e) => {
                "use strict";
                function i(t) {
                    let n;
                    for (; (n = t.sourceEvent); ) t = n;
                    return t;
                }
                e.d(n, { Z: () => i });
            },
            5021: (t, n, e) => {
                "use strict";
                function i(t) {
                    return (
                        (t.ownerDocument && t.ownerDocument.defaultView) ||
                        (t.document && t) ||
                        t.defaultView
                    );
                }
                e.d(n, { Z: () => i });
            },
            9852: (t, n, e) => {
                "use strict";
                e.r(n),
                    e.d(n, {
                        arc: () => L,
                        area: () => j,
                        areaRadial: () => X,
                        curveBasis: () => kt,
                        curveBasisClosed: () => At,
                        curveBasisOpen: () => Lt,
                        curveBumpX: () => Ct,
                        curveBumpY: () => It,
                        curveBundle: () => Dt,
                        curveCardinal: () => jt,
                        curveCardinalClosed: () => Ut,
                        curveCardinalOpen: () => Rt,
                        curveCatmullRom: () => Vt,
                        curveCatmullRomClosed: () => Xt,
                        curveCatmullRomOpen: () => Gt,
                        curveLinear: () => Z,
                        curveLinearClosed: () => Qt,
                        curveMonotoneX: () => an,
                        curveMonotoneY: () => un,
                        curveNatural: () => hn,
                        curveStep: () => pn,
                        curveStepAfter: () => yn,
                        curveStepBefore: () => dn,
                        line: () => H,
                        lineRadial: () => W,
                        linkHorizontal: () => et,
                        linkRadial: () => rt,
                        linkVertical: () => it,
                        pie: () => Y,
                        pointRadial: () => $,
                        radialArea: () => X,
                        radialLine: () => W,
                        stack: () => xn,
                        stackOffsetDiverging: () => bn,
                        stackOffsetExpand: () => wn,
                        stackOffsetNone: () => vn,
                        stackOffsetSilhouette: () => Mn,
                        stackOffsetWiggle: () => Tn,
                        stackOrderAppearance: () => En,
                        stackOrderAscending: () => kn,
                        stackOrderDescending: () => An,
                        stackOrderInsideOut: () => Pn,
                        stackOrderNone: () => mn,
                        stackOrderReverse: () => Ln,
                        symbol: () => Mt,
                        symbolCircle: () => ot,
                        symbolCross: () => st,
                        symbolDiamond: () => ct,
                        symbolSquare: () => dt,
                        symbolStar: () => pt,
                        symbolTriangle: () => vt,
                        symbolWye: () => wt,
                        symbols: () => bt,
                    });
                const i = Math.PI,
                    r = 2 * i,
                    o = 1e-6,
                    s = r - o;
                function a() {
                    (this._x0 = this._y0 = this._x1 = this._y1 = null),
                        (this._ = "");
                }
                function u() {
                    return new a();
                }
                a.prototype = u.prototype = {
                    constructor: a,
                    moveTo: function (t, n) {
                        this._ +=
                            "M" +
                            (this._x0 = this._x1 = +t) +
                            "," +
                            (this._y0 = this._y1 = +n);
                    },
                    closePath: function () {
                        null !== this._x1 &&
                            ((this._x1 = this._x0),
                            (this._y1 = this._y0),
                            (this._ += "Z"));
                    },
                    lineTo: function (t, n) {
                        this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
                    },
                    quadraticCurveTo: function (t, n, e, i) {
                        this._ +=
                            "Q" +
                            +t +
                            "," +
                            +n +
                            "," +
                            (this._x1 = +e) +
                            "," +
                            (this._y1 = +i);
                    },
                    bezierCurveTo: function (t, n, e, i, r, o) {
                        this._ +=
                            "C" +
                            +t +
                            "," +
                            +n +
                            "," +
                            +e +
                            "," +
                            +i +
                            "," +
                            (this._x1 = +r) +
                            "," +
                            (this._y1 = +o);
                    },
                    arcTo: function (t, n, e, r, s) {
                        (t = +t), (n = +n), (e = +e), (r = +r), (s = +s);
                        var a = this._x1,
                            u = this._y1,
                            c = e - t,
                            l = r - n,
                            h = a - t,
                            f = u - n,
                            p = h * h + f * f;
                        if (s < 0) throw new Error("negative radius: " + s);
                        if (null === this._x1)
                            this._ +=
                                "M" + (this._x1 = t) + "," + (this._y1 = n);
                        else if (p > o)
                            if (Math.abs(f * c - l * h) > o && s) {
                                var d = e - a,
                                    y = r - u,
                                    v = c * c + l * l,
                                    m = d * d + y * y,
                                    g = Math.sqrt(v),
                                    _ = Math.sqrt(p),
                                    x =
                                        s *
                                        Math.tan(
                                            (i -
                                                Math.acos(
                                                    (v + p - m) / (2 * g * _)
                                                )) /
                                                2
                                        ),
                                    w = x / _,
                                    b = x / g;
                                Math.abs(w - 1) > o &&
                                    (this._ +=
                                        "L" + (t + w * h) + "," + (n + w * f)),
                                    (this._ +=
                                        "A" +
                                        s +
                                        "," +
                                        s +
                                        ",0,0," +
                                        +(f * d > h * y) +
                                        "," +
                                        (this._x1 = t + b * c) +
                                        "," +
                                        (this._y1 = n + b * l));
                            } else
                                this._ +=
                                    "L" + (this._x1 = t) + "," + (this._y1 = n);
                    },
                    arc: function (t, n, e, a, u, c) {
                        (t = +t), (n = +n), (c = !!c);
                        var l = (e = +e) * Math.cos(a),
                            h = e * Math.sin(a),
                            f = t + l,
                            p = n + h,
                            d = 1 ^ c,
                            y = c ? a - u : u - a;
                        if (e < 0) throw new Error("negative radius: " + e);
                        null === this._x1
                            ? (this._ += "M" + f + "," + p)
                            : (Math.abs(this._x1 - f) > o ||
                                  Math.abs(this._y1 - p) > o) &&
                              (this._ += "L" + f + "," + p),
                            e &&
                                (y < 0 && (y = (y % r) + r),
                                y > s
                                    ? (this._ +=
                                          "A" +
                                          e +
                                          "," +
                                          e +
                                          ",0,1," +
                                          d +
                                          "," +
                                          (t - l) +
                                          "," +
                                          (n - h) +
                                          "A" +
                                          e +
                                          "," +
                                          e +
                                          ",0,1," +
                                          d +
                                          "," +
                                          (this._x1 = f) +
                                          "," +
                                          (this._y1 = p))
                                    : y > o &&
                                      (this._ +=
                                          "A" +
                                          e +
                                          "," +
                                          e +
                                          ",0," +
                                          +(y >= i) +
                                          "," +
                                          d +
                                          "," +
                                          (this._x1 = t + e * Math.cos(u)) +
                                          "," +
                                          (this._y1 = n + e * Math.sin(u))));
                    },
                    rect: function (t, n, e, i) {
                        this._ +=
                            "M" +
                            (this._x0 = this._x1 = +t) +
                            "," +
                            (this._y0 = this._y1 = +n) +
                            "h" +
                            +e +
                            "v" +
                            +i +
                            "h" +
                            -e +
                            "Z";
                    },
                    toString: function () {
                        return this._;
                    },
                };
                const c = u;
                function l(t) {
                    return function () {
                        return t;
                    };
                }
                var h = Math.abs,
                    f = Math.atan2,
                    p = Math.cos,
                    d = Math.max,
                    y = Math.min,
                    v = Math.sin,
                    m = Math.sqrt,
                    g = 1e-12,
                    _ = Math.PI,
                    x = _ / 2,
                    w = 2 * _;
                function b(t) {
                    return t > 1 ? 0 : t < -1 ? _ : Math.acos(t);
                }
                function M(t) {
                    return t >= 1 ? x : t <= -1 ? -x : Math.asin(t);
                }
                function T(t) {
                    return t.innerRadius;
                }
                function E(t) {
                    return t.outerRadius;
                }
                function S(t) {
                    return t.startAngle;
                }
                function k(t) {
                    return t.endAngle;
                }
                function N(t) {
                    return t && t.padAngle;
                }
                function A(t, n, e, i, r, o, s, a) {
                    var u = e - t,
                        c = i - n,
                        l = s - r,
                        h = a - o,
                        f = h * u - l * c;
                    if (!(f * f < g))
                        return [
                            t + (f = (l * (n - o) - h * (t - r)) / f) * u,
                            n + f * c,
                        ];
                }
                function P(t, n, e, i, r, o, s) {
                    var a = t - e,
                        u = n - i,
                        c = (s ? o : -o) / m(a * a + u * u),
                        l = c * u,
                        h = -c * a,
                        f = t + l,
                        p = n + h,
                        y = e + l,
                        v = i + h,
                        g = (f + y) / 2,
                        _ = (p + v) / 2,
                        x = y - f,
                        w = v - p,
                        b = x * x + w * w,
                        M = r - o,
                        T = f * v - y * p,
                        E = (w < 0 ? -1 : 1) * m(d(0, M * M * b - T * T)),
                        S = (T * w - x * E) / b,
                        k = (-T * x - w * E) / b,
                        N = (T * w + x * E) / b,
                        A = (-T * x + w * E) / b,
                        P = S - g,
                        L = k - _,
                        O = N - g,
                        C = A - _;
                    return (
                        P * P + L * L > O * O + C * C && ((S = N), (k = A)),
                        {
                            cx: S,
                            cy: k,
                            x01: -l,
                            y01: -h,
                            x11: S * (r / M - 1),
                            y11: k * (r / M - 1),
                        }
                    );
                }
                function L() {
                    var t = T,
                        n = E,
                        e = l(0),
                        i = null,
                        r = S,
                        o = k,
                        s = N,
                        a = null;
                    function u() {
                        var u,
                            l,
                            d = +t.apply(this, arguments),
                            T = +n.apply(this, arguments),
                            E = r.apply(this, arguments) - x,
                            S = o.apply(this, arguments) - x,
                            k = h(S - E),
                            N = S > E;
                        if (
                            (a || (a = u = c()),
                            T < d && ((l = T), (T = d), (d = l)),
                            T > g)
                        )
                            if (k > w - g)
                                a.moveTo(T * p(E), T * v(E)),
                                    a.arc(0, 0, T, E, S, !N),
                                    d > g &&
                                        (a.moveTo(d * p(S), d * v(S)),
                                        a.arc(0, 0, d, S, E, N));
                            else {
                                var L,
                                    O,
                                    C = E,
                                    I = S,
                                    Z = E,
                                    D = S,
                                    F = k,
                                    H = k,
                                    j = s.apply(this, arguments) / 2,
                                    z =
                                        j > g &&
                                        (i
                                            ? +i.apply(this, arguments)
                                            : m(d * d + T * T)),
                                    U = y(
                                        h(T - d) / 2,
                                        +e.apply(this, arguments)
                                    ),
                                    Y = U,
                                    R = U;
                                if (z > g) {
                                    var q = M((z / d) * v(j)),
                                        B = M((z / T) * v(j));
                                    (F -= 2 * q) > g
                                        ? ((Z += q *= N ? 1 : -1), (D -= q))
                                        : ((F = 0), (Z = D = (E + S) / 2)),
                                        (H -= 2 * B) > g
                                            ? ((C += B *= N ? 1 : -1), (I -= B))
                                            : ((H = 0), (C = I = (E + S) / 2));
                                }
                                var V = T * p(C),
                                    W = T * v(C),
                                    X = d * p(D),
                                    $ = d * v(D);
                                if (U > g) {
                                    var G,
                                        J = T * p(I),
                                        Q = T * v(I),
                                        K = d * p(Z),
                                        tt = d * v(Z);
                                    if (
                                        k < _ &&
                                        (G = A(V, W, K, tt, J, Q, X, $))
                                    ) {
                                        var nt = V - G[0],
                                            et = W - G[1],
                                            it = J - G[0],
                                            rt = Q - G[1],
                                            ot =
                                                1 /
                                                v(
                                                    b(
                                                        (nt * it + et * rt) /
                                                            (m(
                                                                nt * nt +
                                                                    et * et
                                                            ) *
                                                                m(
                                                                    it * it +
                                                                        rt * rt
                                                                ))
                                                    ) / 2
                                                ),
                                            st = m(G[0] * G[0] + G[1] * G[1]);
                                        (Y = y(U, (d - st) / (ot - 1))),
                                            (R = y(U, (T - st) / (ot + 1)));
                                    }
                                }
                                H > g
                                    ? R > g
                                        ? ((L = P(K, tt, V, W, T, R, N)),
                                          (O = P(J, Q, X, $, T, R, N)),
                                          a.moveTo(L.cx + L.x01, L.cy + L.y01),
                                          R < U
                                              ? a.arc(
                                                    L.cx,
                                                    L.cy,
                                                    R,
                                                    f(L.y01, L.x01),
                                                    f(O.y01, O.x01),
                                                    !N
                                                )
                                              : (a.arc(
                                                    L.cx,
                                                    L.cy,
                                                    R,
                                                    f(L.y01, L.x01),
                                                    f(L.y11, L.x11),
                                                    !N
                                                ),
                                                a.arc(
                                                    0,
                                                    0,
                                                    T,
                                                    f(
                                                        L.cy + L.y11,
                                                        L.cx + L.x11
                                                    ),
                                                    f(
                                                        O.cy + O.y11,
                                                        O.cx + O.x11
                                                    ),
                                                    !N
                                                ),
                                                a.arc(
                                                    O.cx,
                                                    O.cy,
                                                    R,
                                                    f(O.y11, O.x11),
                                                    f(O.y01, O.x01),
                                                    !N
                                                )))
                                        : (a.moveTo(V, W),
                                          a.arc(0, 0, T, C, I, !N))
                                    : a.moveTo(V, W),
                                    d > g && F > g
                                        ? Y > g
                                            ? ((L = P(X, $, J, Q, d, -Y, N)),
                                              (O = P(V, W, K, tt, d, -Y, N)),
                                              a.lineTo(
                                                  L.cx + L.x01,
                                                  L.cy + L.y01
                                              ),
                                              Y < U
                                                  ? a.arc(
                                                        L.cx,
                                                        L.cy,
                                                        Y,
                                                        f(L.y01, L.x01),
                                                        f(O.y01, O.x01),
                                                        !N
                                                    )
                                                  : (a.arc(
                                                        L.cx,
                                                        L.cy,
                                                        Y,
                                                        f(L.y01, L.x01),
                                                        f(L.y11, L.x11),
                                                        !N
                                                    ),
                                                    a.arc(
                                                        0,
                                                        0,
                                                        d,
                                                        f(
                                                            L.cy + L.y11,
                                                            L.cx + L.x11
                                                        ),
                                                        f(
                                                            O.cy + O.y11,
                                                            O.cx + O.x11
                                                        ),
                                                        N
                                                    ),
                                                    a.arc(
                                                        O.cx,
                                                        O.cy,
                                                        Y,
                                                        f(O.y11, O.x11),
                                                        f(O.y01, O.x01),
                                                        !N
                                                    )))
                                            : a.arc(0, 0, d, D, Z, N)
                                        : a.lineTo(X, $);
                            }
                        else a.moveTo(0, 0);
                        if ((a.closePath(), u))
                            return (a = null), u + "" || null;
                    }
                    return (
                        (u.centroid = function () {
                            var e =
                                    (+t.apply(this, arguments) +
                                        +n.apply(this, arguments)) /
                                    2,
                                i =
                                    (+r.apply(this, arguments) +
                                        +o.apply(this, arguments)) /
                                        2 -
                                    _ / 2;
                            return [p(i) * e, v(i) * e];
                        }),
                        (u.innerRadius = function (n) {
                            return arguments.length
                                ? ((t = "function" == typeof n ? n : l(+n)), u)
                                : t;
                        }),
                        (u.outerRadius = function (t) {
                            return arguments.length
                                ? ((n = "function" == typeof t ? t : l(+t)), u)
                                : n;
                        }),
                        (u.cornerRadius = function (t) {
                            return arguments.length
                                ? ((e = "function" == typeof t ? t : l(+t)), u)
                                : e;
                        }),
                        (u.padRadius = function (t) {
                            return arguments.length
                                ? ((i =
                                      null == t
                                          ? null
                                          : "function" == typeof t
                                          ? t
                                          : l(+t)),
                                  u)
                                : i;
                        }),
                        (u.startAngle = function (t) {
                            return arguments.length
                                ? ((r = "function" == typeof t ? t : l(+t)), u)
                                : r;
                        }),
                        (u.endAngle = function (t) {
                            return arguments.length
                                ? ((o = "function" == typeof t ? t : l(+t)), u)
                                : o;
                        }),
                        (u.padAngle = function (t) {
                            return arguments.length
                                ? ((s = "function" == typeof t ? t : l(+t)), u)
                                : s;
                        }),
                        (u.context = function (t) {
                            return arguments.length
                                ? ((a = null == t ? null : t), u)
                                : a;
                        }),
                        u
                    );
                }
                var O = Array.prototype.slice;
                function C(t) {
                    return "object" == typeof t && "length" in t
                        ? t
                        : Array.from(t);
                }
                function I(t) {
                    this._context = t;
                }
                function Z(t) {
                    return new I(t);
                }
                function D(t) {
                    return t[0];
                }
                function F(t) {
                    return t[1];
                }
                function H(t, n) {
                    var e = l(!0),
                        i = null,
                        r = Z,
                        o = null;
                    function s(s) {
                        var a,
                            u,
                            l,
                            h = (s = C(s)).length,
                            f = !1;
                        for (
                            null == i && (o = r((l = c()))), a = 0;
                            a <= h;
                            ++a
                        )
                            !(a < h && e((u = s[a]), a, s)) === f &&
                                ((f = !f) ? o.lineStart() : o.lineEnd()),
                                f && o.point(+t(u, a, s), +n(u, a, s));
                        if (l) return (o = null), l + "" || null;
                    }
                    return (
                        (t =
                            "function" == typeof t
                                ? t
                                : void 0 === t
                                ? D
                                : l(t)),
                        (n =
                            "function" == typeof n
                                ? n
                                : void 0 === n
                                ? F
                                : l(n)),
                        (s.x = function (n) {
                            return arguments.length
                                ? ((t = "function" == typeof n ? n : l(+n)), s)
                                : t;
                        }),
                        (s.y = function (t) {
                            return arguments.length
                                ? ((n = "function" == typeof t ? t : l(+t)), s)
                                : n;
                        }),
                        (s.defined = function (t) {
                            return arguments.length
                                ? ((e = "function" == typeof t ? t : l(!!t)), s)
                                : e;
                        }),
                        (s.curve = function (t) {
                            return arguments.length
                                ? ((r = t), null != i && (o = r(i)), s)
                                : r;
                        }),
                        (s.context = function (t) {
                            return arguments.length
                                ? (null == t
                                      ? (i = o = null)
                                      : (o = r((i = t))),
                                  s)
                                : i;
                        }),
                        s
                    );
                }
                function j(t, n, e) {
                    var i = null,
                        r = l(!0),
                        o = null,
                        s = Z,
                        a = null;
                    function u(u) {
                        var l,
                            h,
                            f,
                            p,
                            d,
                            y = (u = C(u)).length,
                            v = !1,
                            m = new Array(y),
                            g = new Array(y);
                        for (
                            null == o && (a = s((d = c()))), l = 0;
                            l <= y;
                            ++l
                        ) {
                            if (!(l < y && r((p = u[l]), l, u)) === v)
                                if ((v = !v))
                                    (h = l), a.areaStart(), a.lineStart();
                                else {
                                    for (
                                        a.lineEnd(), a.lineStart(), f = l - 1;
                                        f >= h;
                                        --f
                                    )
                                        a.point(m[f], g[f]);
                                    a.lineEnd(), a.areaEnd();
                                }
                            v &&
                                ((m[l] = +t(p, l, u)),
                                (g[l] = +n(p, l, u)),
                                a.point(
                                    i ? +i(p, l, u) : m[l],
                                    e ? +e(p, l, u) : g[l]
                                ));
                        }
                        if (d) return (a = null), d + "" || null;
                    }
                    function h() {
                        return H().defined(r).curve(s).context(o);
                    }
                    return (
                        (t =
                            "function" == typeof t
                                ? t
                                : void 0 === t
                                ? D
                                : l(+t)),
                        (n =
                            "function" == typeof n
                                ? n
                                : l(void 0 === n ? 0 : +n)),
                        (e =
                            "function" == typeof e
                                ? e
                                : void 0 === e
                                ? F
                                : l(+e)),
                        (u.x = function (n) {
                            return arguments.length
                                ? ((t = "function" == typeof n ? n : l(+n)),
                                  (i = null),
                                  u)
                                : t;
                        }),
                        (u.x0 = function (n) {
                            return arguments.length
                                ? ((t = "function" == typeof n ? n : l(+n)), u)
                                : t;
                        }),
                        (u.x1 = function (t) {
                            return arguments.length
                                ? ((i =
                                      null == t
                                          ? null
                                          : "function" == typeof t
                                          ? t
                                          : l(+t)),
                                  u)
                                : i;
                        }),
                        (u.y = function (t) {
                            return arguments.length
                                ? ((n = "function" == typeof t ? t : l(+t)),
                                  (e = null),
                                  u)
                                : n;
                        }),
                        (u.y0 = function (t) {
                            return arguments.length
                                ? ((n = "function" == typeof t ? t : l(+t)), u)
                                : n;
                        }),
                        (u.y1 = function (t) {
                            return arguments.length
                                ? ((e =
                                      null == t
                                          ? null
                                          : "function" == typeof t
                                          ? t
                                          : l(+t)),
                                  u)
                                : e;
                        }),
                        (u.lineX0 = u.lineY0 =
                            function () {
                                return h().x(t).y(n);
                            }),
                        (u.lineY1 = function () {
                            return h().x(t).y(e);
                        }),
                        (u.lineX1 = function () {
                            return h().x(i).y(n);
                        }),
                        (u.defined = function (t) {
                            return arguments.length
                                ? ((r = "function" == typeof t ? t : l(!!t)), u)
                                : r;
                        }),
                        (u.curve = function (t) {
                            return arguments.length
                                ? ((s = t), null != o && (a = s(o)), u)
                                : s;
                        }),
                        (u.context = function (t) {
                            return arguments.length
                                ? (null == t
                                      ? (o = a = null)
                                      : (a = s((o = t))),
                                  u)
                                : o;
                        }),
                        u
                    );
                }
                function z(t, n) {
                    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
                }
                function U(t) {
                    return t;
                }
                function Y() {
                    var t = U,
                        n = z,
                        e = null,
                        i = l(0),
                        r = l(w),
                        o = l(0);
                    function s(s) {
                        var a,
                            u,
                            c,
                            l,
                            h,
                            f = (s = C(s)).length,
                            p = 0,
                            d = new Array(f),
                            y = new Array(f),
                            v = +i.apply(this, arguments),
                            m = Math.min(
                                w,
                                Math.max(-w, r.apply(this, arguments) - v)
                            ),
                            g = Math.min(
                                Math.abs(m) / f,
                                o.apply(this, arguments)
                            ),
                            _ = g * (m < 0 ? -1 : 1);
                        for (a = 0; a < f; ++a)
                            (h = y[(d[a] = a)] = +t(s[a], a, s)) > 0 &&
                                (p += h);
                        for (
                            null != n
                                ? d.sort(function (t, e) {
                                      return n(y[t], y[e]);
                                  })
                                : null != e &&
                                  d.sort(function (t, n) {
                                      return e(s[t], s[n]);
                                  }),
                                a = 0,
                                c = p ? (m - f * _) / p : 0;
                            a < f;
                            ++a, v = l
                        )
                            (u = d[a]),
                                (l = v + ((h = y[u]) > 0 ? h * c : 0) + _),
                                (y[u] = {
                                    data: s[u],
                                    index: a,
                                    value: h,
                                    startAngle: v,
                                    endAngle: l,
                                    padAngle: g,
                                });
                        return y;
                    }
                    return (
                        (s.value = function (n) {
                            return arguments.length
                                ? ((t = "function" == typeof n ? n : l(+n)), s)
                                : t;
                        }),
                        (s.sortValues = function (t) {
                            return arguments.length
                                ? ((n = t), (e = null), s)
                                : n;
                        }),
                        (s.sort = function (t) {
                            return arguments.length
                                ? ((e = t), (n = null), s)
                                : e;
                        }),
                        (s.startAngle = function (t) {
                            return arguments.length
                                ? ((i = "function" == typeof t ? t : l(+t)), s)
                                : i;
                        }),
                        (s.endAngle = function (t) {
                            return arguments.length
                                ? ((r = "function" == typeof t ? t : l(+t)), s)
                                : r;
                        }),
                        (s.padAngle = function (t) {
                            return arguments.length
                                ? ((o = "function" == typeof t ? t : l(+t)), s)
                                : o;
                        }),
                        s
                    );
                }
                I.prototype = {
                    areaStart: function () {
                        this._line = 0;
                    },
                    areaEnd: function () {
                        this._line = NaN;
                    },
                    lineStart: function () {
                        this._point = 0;
                    },
                    lineEnd: function () {
                        (this._line ||
                            (0 !== this._line && 1 === this._point)) &&
                            this._context.closePath(),
                            (this._line = 1 - this._line);
                    },
                    point: function (t, n) {
                        switch (((t = +t), (n = +n), this._point)) {
                            case 0:
                                (this._point = 1),
                                    this._line
                                        ? this._context.lineTo(t, n)
                                        : this._context.moveTo(t, n);
                                break;
                            case 1:
                                this._point = 2;
                            default:
                                this._context.lineTo(t, n);
                        }
                    },
                };
                var R = B(Z);
                function q(t) {
                    this._curve = t;
                }
                function B(t) {
                    function n(n) {
                        return new q(t(n));
                    }
                    return (n._curve = t), n;
                }
                function V(t) {
                    var n = t.curve;
                    return (
                        (t.angle = t.x),
                        delete t.x,
                        (t.radius = t.y),
                        delete t.y,
                        (t.curve = function (t) {
                            return arguments.length ? n(B(t)) : n()._curve;
                        }),
                        t
                    );
                }
                function W() {
                    return V(H().curve(R));
                }
                function X() {
                    var t = j().curve(R),
                        n = t.curve,
                        e = t.lineX0,
                        i = t.lineX1,
                        r = t.lineY0,
                        o = t.lineY1;
                    return (
                        (t.angle = t.x),
                        delete t.x,
                        (t.startAngle = t.x0),
                        delete t.x0,
                        (t.endAngle = t.x1),
                        delete t.x1,
                        (t.radius = t.y),
                        delete t.y,
                        (t.innerRadius = t.y0),
                        delete t.y0,
                        (t.outerRadius = t.y1),
                        delete t.y1,
                        (t.lineStartAngle = function () {
                            return V(e());
                        }),
                        delete t.lineX0,
                        (t.lineEndAngle = function () {
                            return V(i());
                        }),
                        delete t.lineX1,
                        (t.lineInnerRadius = function () {
                            return V(r());
                        }),
                        delete t.lineY0,
                        (t.lineOuterRadius = function () {
                            return V(o());
                        }),
                        delete t.lineY1,
                        (t.curve = function (t) {
                            return arguments.length ? n(B(t)) : n()._curve;
                        }),
                        t
                    );
                }
                function $(t, n) {
                    return [
                        (n = +n) * Math.cos((t -= Math.PI / 2)),
                        n * Math.sin(t),
                    ];
                }
                function G(t) {
                    return t.source;
                }
                function J(t) {
                    return t.target;
                }
                function Q(t) {
                    var n = G,
                        e = J,
                        i = D,
                        r = F,
                        o = null;
                    function s() {
                        var s,
                            a = O.call(arguments),
                            u = n.apply(this, a),
                            l = e.apply(this, a);
                        if (
                            (o || (o = s = c()),
                            t(
                                o,
                                +i.apply(this, ((a[0] = u), a)),
                                +r.apply(this, a),
                                +i.apply(this, ((a[0] = l), a)),
                                +r.apply(this, a)
                            ),
                            s)
                        )
                            return (o = null), s + "" || null;
                    }
                    return (
                        (s.source = function (t) {
                            return arguments.length ? ((n = t), s) : n;
                        }),
                        (s.target = function (t) {
                            return arguments.length ? ((e = t), s) : e;
                        }),
                        (s.x = function (t) {
                            return arguments.length
                                ? ((i = "function" == typeof t ? t : l(+t)), s)
                                : i;
                        }),
                        (s.y = function (t) {
                            return arguments.length
                                ? ((r = "function" == typeof t ? t : l(+t)), s)
                                : r;
                        }),
                        (s.context = function (t) {
                            return arguments.length
                                ? ((o = null == t ? null : t), s)
                                : o;
                        }),
                        s
                    );
                }
                function K(t, n, e, i, r) {
                    t.moveTo(n, e),
                        t.bezierCurveTo((n = (n + i) / 2), e, n, r, i, r);
                }
                function tt(t, n, e, i, r) {
                    t.moveTo(n, e),
                        t.bezierCurveTo(n, (e = (e + r) / 2), i, e, i, r);
                }
                function nt(t, n, e, i, r) {
                    var o = $(n, e),
                        s = $(n, (e = (e + r) / 2)),
                        a = $(i, e),
                        u = $(i, r);
                    t.moveTo(o[0], o[1]),
                        t.bezierCurveTo(s[0], s[1], a[0], a[1], u[0], u[1]);
                }
                function et() {
                    return Q(K);
                }
                function it() {
                    return Q(tt);
                }
                function rt() {
                    var t = Q(nt);
                    return (
                        (t.angle = t.x),
                        delete t.x,
                        (t.radius = t.y),
                        delete t.y,
                        t
                    );
                }
                q.prototype = {
                    areaStart: function () {
                        this._curve.areaStart();
                    },
                    areaEnd: function () {
                        this._curve.areaEnd();
                    },
                    lineStart: function () {
                        this._curve.lineStart();
                    },
                    lineEnd: function () {
                        this._curve.lineEnd();
                    },
                    point: function (t, n) {
                        this._curve.point(n * Math.sin(t), n * -Math.cos(t));
                    },
                };
                const ot = {
                        draw: function (t, n) {
                            var e = Math.sqrt(n / _);
                            t.moveTo(e, 0), t.arc(0, 0, e, 0, w);
                        },
                    },
                    st = {
                        draw: function (t, n) {
                            var e = Math.sqrt(n / 5) / 2;
                            t.moveTo(-3 * e, -e),
                                t.lineTo(-e, -e),
                                t.lineTo(-e, -3 * e),
                                t.lineTo(e, -3 * e),
                                t.lineTo(e, -e),
                                t.lineTo(3 * e, -e),
                                t.lineTo(3 * e, e),
                                t.lineTo(e, e),
                                t.lineTo(e, 3 * e),
                                t.lineTo(-e, 3 * e),
                                t.lineTo(-e, e),
                                t.lineTo(-3 * e, e),
                                t.closePath();
                        },
                    };
                var at = Math.sqrt(1 / 3),
                    ut = 2 * at;
                const ct = {
                    draw: function (t, n) {
                        var e = Math.sqrt(n / ut),
                            i = e * at;
                        t.moveTo(0, -e),
                            t.lineTo(i, 0),
                            t.lineTo(0, e),
                            t.lineTo(-i, 0),
                            t.closePath();
                    },
                };
                var lt = Math.sin(_ / 10) / Math.sin((7 * _) / 10),
                    ht = Math.sin(w / 10) * lt,
                    ft = -Math.cos(w / 10) * lt;
                const pt = {
                        draw: function (t, n) {
                            var e = Math.sqrt(0.8908130915292852 * n),
                                i = ht * e,
                                r = ft * e;
                            t.moveTo(0, -e), t.lineTo(i, r);
                            for (var o = 1; o < 5; ++o) {
                                var s = (w * o) / 5,
                                    a = Math.cos(s),
                                    u = Math.sin(s);
                                t.lineTo(u * e, -a * e),
                                    t.lineTo(a * i - u * r, u * i + a * r);
                            }
                            t.closePath();
                        },
                    },
                    dt = {
                        draw: function (t, n) {
                            var e = Math.sqrt(n),
                                i = -e / 2;
                            t.rect(i, i, e, e);
                        },
                    };
                var yt = Math.sqrt(3);
                const vt = {
                    draw: function (t, n) {
                        var e = -Math.sqrt(n / (3 * yt));
                        t.moveTo(0, 2 * e),
                            t.lineTo(-yt * e, -e),
                            t.lineTo(yt * e, -e),
                            t.closePath();
                    },
                };
                var mt = -0.5,
                    gt = Math.sqrt(3) / 2,
                    _t = 1 / Math.sqrt(12),
                    xt = 3 * (_t / 2 + 1);
                const wt = {
                    draw: function (t, n) {
                        var e = Math.sqrt(n / xt),
                            i = e / 2,
                            r = e * _t,
                            o = i,
                            s = e * _t + e,
                            a = -o,
                            u = s;
                        t.moveTo(i, r),
                            t.lineTo(o, s),
                            t.lineTo(a, u),
                            t.lineTo(mt * i - gt * r, gt * i + mt * r),
                            t.lineTo(mt * o - gt * s, gt * o + mt * s),
                            t.lineTo(mt * a - gt * u, gt * a + mt * u),
                            t.lineTo(mt * i + gt * r, mt * r - gt * i),
                            t.lineTo(mt * o + gt * s, mt * s - gt * o),
                            t.lineTo(mt * a + gt * u, mt * u - gt * a),
                            t.closePath();
                    },
                };
                var bt = [ot, st, ct, dt, pt, vt, wt];
                function Mt(t, n) {
                    var e = null;
                    function i() {
                        var i;
                        if (
                            (e || (e = i = c()),
                            t
                                .apply(this, arguments)
                                .draw(e, +n.apply(this, arguments)),
                            i)
                        )
                            return (e = null), i + "" || null;
                    }
                    return (
                        (t = "function" == typeof t ? t : l(t || ot)),
                        (n =
                            "function" == typeof n
                                ? n
                                : l(void 0 === n ? 64 : +n)),
                        (i.type = function (n) {
                            return arguments.length
                                ? ((t = "function" == typeof n ? n : l(n)), i)
                                : t;
                        }),
                        (i.size = function (t) {
                            return arguments.length
                                ? ((n = "function" == typeof t ? t : l(+t)), i)
                                : n;
                        }),
                        (i.context = function (t) {
                            return arguments.length
                                ? ((e = null == t ? null : t), i)
                                : e;
                        }),
                        i
                    );
                }
                function Tt() {}
                function Et(t, n, e) {
                    t._context.bezierCurveTo(
                        (2 * t._x0 + t._x1) / 3,
                        (2 * t._y0 + t._y1) / 3,
                        (t._x0 + 2 * t._x1) / 3,
                        (t._y0 + 2 * t._y1) / 3,
                        (t._x0 + 4 * t._x1 + n) / 6,
                        (t._y0 + 4 * t._y1 + e) / 6
                    );
                }
                function St(t) {
                    this._context = t;
                }
                function kt(t) {
                    return new St(t);
                }
                function Nt(t) {
                    this._context = t;
                }
                function At(t) {
                    return new Nt(t);
                }
                function Pt(t) {
                    this._context = t;
                }
                function Lt(t) {
                    return new Pt(t);
                }
                (St.prototype = {
                    areaStart: function () {
                        this._line = 0;
                    },
                    areaEnd: function () {
                        this._line = NaN;
                    },
                    lineStart: function () {
                        (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
                            (this._point = 0);
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 3:
                                Et(this, this._x1, this._y1);
                            case 2:
                                this._context.lineTo(this._x1, this._y1);
                        }
                        (this._line ||
                            (0 !== this._line && 1 === this._point)) &&
                            this._context.closePath(),
                            (this._line = 1 - this._line);
                    },
                    point: function (t, n) {
                        switch (((t = +t), (n = +n), this._point)) {
                            case 0:
                                (this._point = 1),
                                    this._line
                                        ? this._context.lineTo(t, n)
                                        : this._context.moveTo(t, n);
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                (this._point = 3),
                                    this._context.lineTo(
                                        (5 * this._x0 + this._x1) / 6,
                                        (5 * this._y0 + this._y1) / 6
                                    );
                            default:
                                Et(this, t, n);
                        }
                        (this._x0 = this._x1),
                            (this._x1 = t),
                            (this._y0 = this._y1),
                            (this._y1 = n);
                    },
                }),
                    (Nt.prototype = {
                        areaStart: Tt,
                        areaEnd: Tt,
                        lineStart: function () {
                            (this._x0 =
                                this._x1 =
                                this._x2 =
                                this._x3 =
                                this._x4 =
                                this._y0 =
                                this._y1 =
                                this._y2 =
                                this._y3 =
                                this._y4 =
                                    NaN),
                                (this._point = 0);
                        },
                        lineEnd: function () {
                            switch (this._point) {
                                case 1:
                                    this._context.moveTo(this._x2, this._y2),
                                        this._context.closePath();
                                    break;
                                case 2:
                                    this._context.moveTo(
                                        (this._x2 + 2 * this._x3) / 3,
                                        (this._y2 + 2 * this._y3) / 3
                                    ),
                                        this._context.lineTo(
                                            (this._x3 + 2 * this._x2) / 3,
                                            (this._y3 + 2 * this._y2) / 3
                                        ),
                                        this._context.closePath();
                                    break;
                                case 3:
                                    this.point(this._x2, this._y2),
                                        this.point(this._x3, this._y3),
                                        this.point(this._x4, this._y4);
                            }
                        },
                        point: function (t, n) {
                            switch (((t = +t), (n = +n), this._point)) {
                                case 0:
                                    (this._point = 1),
                                        (this._x2 = t),
                                        (this._y2 = n);
                                    break;
                                case 1:
                                    (this._point = 2),
                                        (this._x3 = t),
                                        (this._y3 = n);
                                    break;
                                case 2:
                                    (this._point = 3),
                                        (this._x4 = t),
                                        (this._y4 = n),
                                        this._context.moveTo(
                                            (this._x0 + 4 * this._x1 + t) / 6,
                                            (this._y0 + 4 * this._y1 + n) / 6
                                        );
                                    break;
                                default:
                                    Et(this, t, n);
                            }
                            (this._x0 = this._x1),
                                (this._x1 = t),
                                (this._y0 = this._y1),
                                (this._y1 = n);
                        },
                    }),
                    (Pt.prototype = {
                        areaStart: function () {
                            this._line = 0;
                        },
                        areaEnd: function () {
                            this._line = NaN;
                        },
                        lineStart: function () {
                            (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
                                (this._point = 0);
                        },
                        lineEnd: function () {
                            (this._line ||
                                (0 !== this._line && 3 === this._point)) &&
                                this._context.closePath(),
                                (this._line = 1 - this._line);
                        },
                        point: function (t, n) {
                            switch (((t = +t), (n = +n), this._point)) {
                                case 0:
                                    this._point = 1;
                                    break;
                                case 1:
                                    this._point = 2;
                                    break;
                                case 2:
                                    this._point = 3;
                                    var e = (this._x0 + 4 * this._x1 + t) / 6,
                                        i = (this._y0 + 4 * this._y1 + n) / 6;
                                    this._line
                                        ? this._context.lineTo(e, i)
                                        : this._context.moveTo(e, i);
                                    break;
                                case 3:
                                    this._point = 4;
                                default:
                                    Et(this, t, n);
                            }
                            (this._x0 = this._x1),
                                (this._x1 = t),
                                (this._y0 = this._y1),
                                (this._y1 = n);
                        },
                    });
                class Ot {
                    constructor(t, n) {
                        (this._context = t), (this._x = n);
                    }
                    areaStart() {
                        this._line = 0;
                    }
                    areaEnd() {
                        this._line = NaN;
                    }
                    lineStart() {
                        this._point = 0;
                    }
                    lineEnd() {
                        (this._line ||
                            (0 !== this._line && 1 === this._point)) &&
                            this._context.closePath(),
                            (this._line = 1 - this._line);
                    }
                    point(t, n) {
                        switch (((t = +t), (n = +n), this._point)) {
                            case 0:
                                (this._point = 1),
                                    this._line
                                        ? this._context.lineTo(t, n)
                                        : this._context.moveTo(t, n);
                                break;
                            case 1:
                                this._point = 2;
                            default:
                                this._x
                                    ? this._context.bezierCurveTo(
                                          (this._x0 = (this._x0 + t) / 2),
                                          this._y0,
                                          this._x0,
                                          n,
                                          t,
                                          n
                                      )
                                    : this._context.bezierCurveTo(
                                          this._x0,
                                          (this._y0 = (this._y0 + n) / 2),
                                          t,
                                          this._y0,
                                          t,
                                          n
                                      );
                        }
                        (this._x0 = t), (this._y0 = n);
                    }
                }
                function Ct(t) {
                    return new Ot(t, !0);
                }
                function It(t) {
                    return new Ot(t, !1);
                }
                function Zt(t, n) {
                    (this._basis = new St(t)), (this._beta = n);
                }
                Zt.prototype = {
                    lineStart: function () {
                        (this._x = []), (this._y = []), this._basis.lineStart();
                    },
                    lineEnd: function () {
                        var t = this._x,
                            n = this._y,
                            e = t.length - 1;
                        if (e > 0)
                            for (
                                var i,
                                    r = t[0],
                                    o = n[0],
                                    s = t[e] - r,
                                    a = n[e] - o,
                                    u = -1;
                                ++u <= e;

                            )
                                (i = u / e),
                                    this._basis.point(
                                        this._beta * t[u] +
                                            (1 - this._beta) * (r + i * s),
                                        this._beta * n[u] +
                                            (1 - this._beta) * (o + i * a)
                                    );
                        (this._x = this._y = null), this._basis.lineEnd();
                    },
                    point: function (t, n) {
                        this._x.push(+t), this._y.push(+n);
                    },
                };
                const Dt = (function t(n) {
                    function e(t) {
                        return 1 === n ? new St(t) : new Zt(t, n);
                    }
                    return (
                        (e.beta = function (n) {
                            return t(+n);
                        }),
                        e
                    );
                })(0.85);
                function Ft(t, n, e) {
                    t._context.bezierCurveTo(
                        t._x1 + t._k * (t._x2 - t._x0),
                        t._y1 + t._k * (t._y2 - t._y0),
                        t._x2 + t._k * (t._x1 - n),
                        t._y2 + t._k * (t._y1 - e),
                        t._x2,
                        t._y2
                    );
                }
                function Ht(t, n) {
                    (this._context = t), (this._k = (1 - n) / 6);
                }
                Ht.prototype = {
                    areaStart: function () {
                        this._line = 0;
                    },
                    areaEnd: function () {
                        this._line = NaN;
                    },
                    lineStart: function () {
                        (this._x0 =
                            this._x1 =
                            this._x2 =
                            this._y0 =
                            this._y1 =
                            this._y2 =
                                NaN),
                            (this._point = 0);
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 2:
                                this._context.lineTo(this._x2, this._y2);
                                break;
                            case 3:
                                Ft(this, this._x1, this._y1);
                        }
                        (this._line ||
                            (0 !== this._line && 1 === this._point)) &&
                            this._context.closePath(),
                            (this._line = 1 - this._line);
                    },
                    point: function (t, n) {
                        switch (((t = +t), (n = +n), this._point)) {
                            case 0:
                                (this._point = 1),
                                    this._line
                                        ? this._context.lineTo(t, n)
                                        : this._context.moveTo(t, n);
                                break;
                            case 1:
                                (this._point = 2),
                                    (this._x1 = t),
                                    (this._y1 = n);
                                break;
                            case 2:
                                this._point = 3;
                            default:
                                Ft(this, t, n);
                        }
                        (this._x0 = this._x1),
                            (this._x1 = this._x2),
                            (this._x2 = t),
                            (this._y0 = this._y1),
                            (this._y1 = this._y2),
                            (this._y2 = n);
                    },
                };
                const jt = (function t(n) {
                    function e(t) {
                        return new Ht(t, n);
                    }
                    return (
                        (e.tension = function (n) {
                            return t(+n);
                        }),
                        e
                    );
                })(0);
                function zt(t, n) {
                    (this._context = t), (this._k = (1 - n) / 6);
                }
                zt.prototype = {
                    areaStart: Tt,
                    areaEnd: Tt,
                    lineStart: function () {
                        (this._x0 =
                            this._x1 =
                            this._x2 =
                            this._x3 =
                            this._x4 =
                            this._x5 =
                            this._y0 =
                            this._y1 =
                            this._y2 =
                            this._y3 =
                            this._y4 =
                            this._y5 =
                                NaN),
                            (this._point = 0);
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 1:
                                this._context.moveTo(this._x3, this._y3),
                                    this._context.closePath();
                                break;
                            case 2:
                                this._context.lineTo(this._x3, this._y3),
                                    this._context.closePath();
                                break;
                            case 3:
                                this.point(this._x3, this._y3),
                                    this.point(this._x4, this._y4),
                                    this.point(this._x5, this._y5);
                        }
                    },
                    point: function (t, n) {
                        switch (((t = +t), (n = +n), this._point)) {
                            case 0:
                                (this._point = 1),
                                    (this._x3 = t),
                                    (this._y3 = n);
                                break;
                            case 1:
                                (this._point = 2),
                                    this._context.moveTo(
                                        (this._x4 = t),
                                        (this._y4 = n)
                                    );
                                break;
                            case 2:
                                (this._point = 3),
                                    (this._x5 = t),
                                    (this._y5 = n);
                                break;
                            default:
                                Ft(this, t, n);
                        }
                        (this._x0 = this._x1),
                            (this._x1 = this._x2),
                            (this._x2 = t),
                            (this._y0 = this._y1),
                            (this._y1 = this._y2),
                            (this._y2 = n);
                    },
                };
                const Ut = (function t(n) {
                    function e(t) {
                        return new zt(t, n);
                    }
                    return (
                        (e.tension = function (n) {
                            return t(+n);
                        }),
                        e
                    );
                })(0);
                function Yt(t, n) {
                    (this._context = t), (this._k = (1 - n) / 6);
                }
                Yt.prototype = {
                    areaStart: function () {
                        this._line = 0;
                    },
                    areaEnd: function () {
                        this._line = NaN;
                    },
                    lineStart: function () {
                        (this._x0 =
                            this._x1 =
                            this._x2 =
                            this._y0 =
                            this._y1 =
                            this._y2 =
                                NaN),
                            (this._point = 0);
                    },
                    lineEnd: function () {
                        (this._line ||
                            (0 !== this._line && 3 === this._point)) &&
                            this._context.closePath(),
                            (this._line = 1 - this._line);
                    },
                    point: function (t, n) {
                        switch (((t = +t), (n = +n), this._point)) {
                            case 0:
                                this._point = 1;
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                (this._point = 3),
                                    this._line
                                        ? this._context.lineTo(
                                              this._x2,
                                              this._y2
                                          )
                                        : this._context.moveTo(
                                              this._x2,
                                              this._y2
                                          );
                                break;
                            case 3:
                                this._point = 4;
                            default:
                                Ft(this, t, n);
                        }
                        (this._x0 = this._x1),
                            (this._x1 = this._x2),
                            (this._x2 = t),
                            (this._y0 = this._y1),
                            (this._y1 = this._y2),
                            (this._y2 = n);
                    },
                };
                const Rt = (function t(n) {
                    function e(t) {
                        return new Yt(t, n);
                    }
                    return (
                        (e.tension = function (n) {
                            return t(+n);
                        }),
                        e
                    );
                })(0);
                function qt(t, n, e) {
                    var i = t._x1,
                        r = t._y1,
                        o = t._x2,
                        s = t._y2;
                    if (t._l01_a > g) {
                        var a =
                                2 * t._l01_2a +
                                3 * t._l01_a * t._l12_a +
                                t._l12_2a,
                            u = 3 * t._l01_a * (t._l01_a + t._l12_a);
                        (i =
                            (i * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) /
                            u),
                            (r =
                                (r * a -
                                    t._y0 * t._l12_2a +
                                    t._y2 * t._l01_2a) /
                                u);
                    }
                    if (t._l23_a > g) {
                        var c =
                                2 * t._l23_2a +
                                3 * t._l23_a * t._l12_a +
                                t._l12_2a,
                            l = 3 * t._l23_a * (t._l23_a + t._l12_a);
                        (o = (o * c + t._x1 * t._l23_2a - n * t._l12_2a) / l),
                            (s =
                                (s * c + t._y1 * t._l23_2a - e * t._l12_2a) /
                                l);
                    }
                    t._context.bezierCurveTo(i, r, o, s, t._x2, t._y2);
                }
                function Bt(t, n) {
                    (this._context = t), (this._alpha = n);
                }
                Bt.prototype = {
                    areaStart: function () {
                        this._line = 0;
                    },
                    areaEnd: function () {
                        this._line = NaN;
                    },
                    lineStart: function () {
                        (this._x0 =
                            this._x1 =
                            this._x2 =
                            this._y0 =
                            this._y1 =
                            this._y2 =
                                NaN),
                            (this._l01_a =
                                this._l12_a =
                                this._l23_a =
                                this._l01_2a =
                                this._l12_2a =
                                this._l23_2a =
                                this._point =
                                    0);
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 2:
                                this._context.lineTo(this._x2, this._y2);
                                break;
                            case 3:
                                this.point(this._x2, this._y2);
                        }
                        (this._line ||
                            (0 !== this._line && 1 === this._point)) &&
                            this._context.closePath(),
                            (this._line = 1 - this._line);
                    },
                    point: function (t, n) {
                        if (((t = +t), (n = +n), this._point)) {
                            var e = this._x2 - t,
                                i = this._y2 - n;
                            this._l23_a = Math.sqrt(
                                (this._l23_2a = Math.pow(
                                    e * e + i * i,
                                    this._alpha
                                ))
                            );
                        }
                        switch (this._point) {
                            case 0:
                                (this._point = 1),
                                    this._line
                                        ? this._context.lineTo(t, n)
                                        : this._context.moveTo(t, n);
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                this._point = 3;
                            default:
                                qt(this, t, n);
                        }
                        (this._l01_a = this._l12_a),
                            (this._l12_a = this._l23_a),
                            (this._l01_2a = this._l12_2a),
                            (this._l12_2a = this._l23_2a),
                            (this._x0 = this._x1),
                            (this._x1 = this._x2),
                            (this._x2 = t),
                            (this._y0 = this._y1),
                            (this._y1 = this._y2),
                            (this._y2 = n);
                    },
                };
                const Vt = (function t(n) {
                    function e(t) {
                        return n ? new Bt(t, n) : new Ht(t, 0);
                    }
                    return (
                        (e.alpha = function (n) {
                            return t(+n);
                        }),
                        e
                    );
                })(0.5);
                function Wt(t, n) {
                    (this._context = t), (this._alpha = n);
                }
                Wt.prototype = {
                    areaStart: Tt,
                    areaEnd: Tt,
                    lineStart: function () {
                        (this._x0 =
                            this._x1 =
                            this._x2 =
                            this._x3 =
                            this._x4 =
                            this._x5 =
                            this._y0 =
                            this._y1 =
                            this._y2 =
                            this._y3 =
                            this._y4 =
                            this._y5 =
                                NaN),
                            (this._l01_a =
                                this._l12_a =
                                this._l23_a =
                                this._l01_2a =
                                this._l12_2a =
                                this._l23_2a =
                                this._point =
                                    0);
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 1:
                                this._context.moveTo(this._x3, this._y3),
                                    this._context.closePath();
                                break;
                            case 2:
                                this._context.lineTo(this._x3, this._y3),
                                    this._context.closePath();
                                break;
                            case 3:
                                this.point(this._x3, this._y3),
                                    this.point(this._x4, this._y4),
                                    this.point(this._x5, this._y5);
                        }
                    },
                    point: function (t, n) {
                        if (((t = +t), (n = +n), this._point)) {
                            var e = this._x2 - t,
                                i = this._y2 - n;
                            this._l23_a = Math.sqrt(
                                (this._l23_2a = Math.pow(
                                    e * e + i * i,
                                    this._alpha
                                ))
                            );
                        }
                        switch (this._point) {
                            case 0:
                                (this._point = 1),
                                    (this._x3 = t),
                                    (this._y3 = n);
                                break;
                            case 1:
                                (this._point = 2),
                                    this._context.moveTo(
                                        (this._x4 = t),
                                        (this._y4 = n)
                                    );
                                break;
                            case 2:
                                (this._point = 3),
                                    (this._x5 = t),
                                    (this._y5 = n);
                                break;
                            default:
                                qt(this, t, n);
                        }
                        (this._l01_a = this._l12_a),
                            (this._l12_a = this._l23_a),
                            (this._l01_2a = this._l12_2a),
                            (this._l12_2a = this._l23_2a),
                            (this._x0 = this._x1),
                            (this._x1 = this._x2),
                            (this._x2 = t),
                            (this._y0 = this._y1),
                            (this._y1 = this._y2),
                            (this._y2 = n);
                    },
                };
                const Xt = (function t(n) {
                    function e(t) {
                        return n ? new Wt(t, n) : new zt(t, 0);
                    }
                    return (
                        (e.alpha = function (n) {
                            return t(+n);
                        }),
                        e
                    );
                })(0.5);
                function $t(t, n) {
                    (this._context = t), (this._alpha = n);
                }
                $t.prototype = {
                    areaStart: function () {
                        this._line = 0;
                    },
                    areaEnd: function () {
                        this._line = NaN;
                    },
                    lineStart: function () {
                        (this._x0 =
                            this._x1 =
                            this._x2 =
                            this._y0 =
                            this._y1 =
                            this._y2 =
                                NaN),
                            (this._l01_a =
                                this._l12_a =
                                this._l23_a =
                                this._l01_2a =
                                this._l12_2a =
                                this._l23_2a =
                                this._point =
                                    0);
                    },
                    lineEnd: function () {
                        (this._line ||
                            (0 !== this._line && 3 === this._point)) &&
                            this._context.closePath(),
                            (this._line = 1 - this._line);
                    },
                    point: function (t, n) {
                        if (((t = +t), (n = +n), this._point)) {
                            var e = this._x2 - t,
                                i = this._y2 - n;
                            this._l23_a = Math.sqrt(
                                (this._l23_2a = Math.pow(
                                    e * e + i * i,
                                    this._alpha
                                ))
                            );
                        }
                        switch (this._point) {
                            case 0:
                                this._point = 1;
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                (this._point = 3),
                                    this._line
                                        ? this._context.lineTo(
                                              this._x2,
                                              this._y2
                                          )
                                        : this._context.moveTo(
                                              this._x2,
                                              this._y2
                                          );
                                break;
                            case 3:
                                this._point = 4;
                            default:
                                qt(this, t, n);
                        }
                        (this._l01_a = this._l12_a),
                            (this._l12_a = this._l23_a),
                            (this._l01_2a = this._l12_2a),
                            (this._l12_2a = this._l23_2a),
                            (this._x0 = this._x1),
                            (this._x1 = this._x2),
                            (this._x2 = t),
                            (this._y0 = this._y1),
                            (this._y1 = this._y2),
                            (this._y2 = n);
                    },
                };
                const Gt = (function t(n) {
                    function e(t) {
                        return n ? new $t(t, n) : new Yt(t, 0);
                    }
                    return (
                        (e.alpha = function (n) {
                            return t(+n);
                        }),
                        e
                    );
                })(0.5);
                function Jt(t) {
                    this._context = t;
                }
                function Qt(t) {
                    return new Jt(t);
                }
                function Kt(t) {
                    return t < 0 ? -1 : 1;
                }
                function tn(t, n, e) {
                    var i = t._x1 - t._x0,
                        r = n - t._x1,
                        o = (t._y1 - t._y0) / (i || (r < 0 && -0)),
                        s = (e - t._y1) / (r || (i < 0 && -0)),
                        a = (o * r + s * i) / (i + r);
                    return (
                        (Kt(o) + Kt(s)) *
                            Math.min(
                                Math.abs(o),
                                Math.abs(s),
                                0.5 * Math.abs(a)
                            ) || 0
                    );
                }
                function nn(t, n) {
                    var e = t._x1 - t._x0;
                    return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
                }
                function en(t, n, e) {
                    var i = t._x0,
                        r = t._y0,
                        o = t._x1,
                        s = t._y1,
                        a = (o - i) / 3;
                    t._context.bezierCurveTo(
                        i + a,
                        r + a * n,
                        o - a,
                        s - a * e,
                        o,
                        s
                    );
                }
                function rn(t) {
                    this._context = t;
                }
                function on(t) {
                    this._context = new sn(t);
                }
                function sn(t) {
                    this._context = t;
                }
                function an(t) {
                    return new rn(t);
                }
                function un(t) {
                    return new on(t);
                }
                function cn(t) {
                    this._context = t;
                }
                function ln(t) {
                    var n,
                        e,
                        i = t.length - 1,
                        r = new Array(i),
                        o = new Array(i),
                        s = new Array(i);
                    for (
                        r[0] = 0, o[0] = 2, s[0] = t[0] + 2 * t[1], n = 1;
                        n < i - 1;
                        ++n
                    )
                        (r[n] = 1),
                            (o[n] = 4),
                            (s[n] = 4 * t[n] + 2 * t[n + 1]);
                    for (
                        r[i - 1] = 2,
                            o[i - 1] = 7,
                            s[i - 1] = 8 * t[i - 1] + t[i],
                            n = 1;
                        n < i;
                        ++n
                    )
                        (e = r[n] / o[n - 1]),
                            (o[n] -= e),
                            (s[n] -= e * s[n - 1]);
                    for (r[i - 1] = s[i - 1] / o[i - 1], n = i - 2; n >= 0; --n)
                        r[n] = (s[n] - r[n + 1]) / o[n];
                    for (
                        o[i - 1] = (t[i] + r[i - 1]) / 2, n = 0;
                        n < i - 1;
                        ++n
                    )
                        o[n] = 2 * t[n + 1] - r[n + 1];
                    return [r, o];
                }
                function hn(t) {
                    return new cn(t);
                }
                function fn(t, n) {
                    (this._context = t), (this._t = n);
                }
                function pn(t) {
                    return new fn(t, 0.5);
                }
                function dn(t) {
                    return new fn(t, 0);
                }
                function yn(t) {
                    return new fn(t, 1);
                }
                function vn(t, n) {
                    if ((r = t.length) > 1)
                        for (
                            var e, i, r, o = 1, s = t[n[0]], a = s.length;
                            o < r;
                            ++o
                        )
                            for (i = s, s = t[n[o]], e = 0; e < a; ++e)
                                s[e][1] += s[e][0] = isNaN(i[e][1])
                                    ? i[e][0]
                                    : i[e][1];
                }
                function mn(t) {
                    for (var n = t.length, e = new Array(n); --n >= 0; )
                        e[n] = n;
                    return e;
                }
                function gn(t, n) {
                    return t[n];
                }
                function _n(t) {
                    const n = [];
                    return (n.key = t), n;
                }
                function xn() {
                    var t = l([]),
                        n = mn,
                        e = vn,
                        i = gn;
                    function r(r) {
                        var o,
                            s,
                            a = Array.from(t.apply(this, arguments), _n),
                            u = a.length,
                            c = -1;
                        for (const t of r)
                            for (o = 0, ++c; o < u; ++o)
                                (a[o][c] = [0, +i(t, a[o].key, c, r)]).data = t;
                        for (o = 0, s = C(n(a)); o < u; ++o) a[s[o]].index = o;
                        return e(a, s), a;
                    }
                    return (
                        (r.keys = function (n) {
                            return arguments.length
                                ? ((t =
                                      "function" == typeof n
                                          ? n
                                          : l(Array.from(n))),
                                  r)
                                : t;
                        }),
                        (r.value = function (t) {
                            return arguments.length
                                ? ((i = "function" == typeof t ? t : l(+t)), r)
                                : i;
                        }),
                        (r.order = function (t) {
                            return arguments.length
                                ? ((n =
                                      null == t
                                          ? mn
                                          : "function" == typeof t
                                          ? t
                                          : l(Array.from(t))),
                                  r)
                                : n;
                        }),
                        (r.offset = function (t) {
                            return arguments.length
                                ? ((e = null == t ? vn : t), r)
                                : e;
                        }),
                        r
                    );
                }
                function wn(t, n) {
                    if ((i = t.length) > 0) {
                        for (var e, i, r, o = 0, s = t[0].length; o < s; ++o) {
                            for (r = e = 0; e < i; ++e) r += t[e][o][1] || 0;
                            if (r) for (e = 0; e < i; ++e) t[e][o][1] /= r;
                        }
                        vn(t, n);
                    }
                }
                function bn(t, n) {
                    if ((a = t.length) > 0)
                        for (
                            var e, i, r, o, s, a, u = 0, c = t[n[0]].length;
                            u < c;
                            ++u
                        )
                            for (o = s = 0, e = 0; e < a; ++e)
                                (r = (i = t[n[e]][u])[1] - i[0]) > 0
                                    ? ((i[0] = o), (i[1] = o += r))
                                    : r < 0
                                    ? ((i[1] = s), (i[0] = s += r))
                                    : ((i[0] = 0), (i[1] = r));
                }
                function Mn(t, n) {
                    if ((e = t.length) > 0) {
                        for (
                            var e, i = 0, r = t[n[0]], o = r.length;
                            i < o;
                            ++i
                        ) {
                            for (var s = 0, a = 0; s < e; ++s)
                                a += t[s][i][1] || 0;
                            r[i][1] += r[i][0] = -a / 2;
                        }
                        vn(t, n);
                    }
                }
                function Tn(t, n) {
                    if ((r = t.length) > 0 && (i = (e = t[n[0]]).length) > 0) {
                        for (var e, i, r, o = 0, s = 1; s < i; ++s) {
                            for (var a = 0, u = 0, c = 0; a < r; ++a) {
                                for (
                                    var l = t[n[a]],
                                        h = l[s][1] || 0,
                                        f = (h - (l[s - 1][1] || 0)) / 2,
                                        p = 0;
                                    p < a;
                                    ++p
                                ) {
                                    var d = t[n[p]];
                                    f += (d[s][1] || 0) - (d[s - 1][1] || 0);
                                }
                                (u += h), (c += f * h);
                            }
                            (e[s - 1][1] += e[s - 1][0] = o), u && (o -= c / u);
                        }
                        (e[s - 1][1] += e[s - 1][0] = o), vn(t, n);
                    }
                }
                function En(t) {
                    var n = t.map(Sn);
                    return mn(t).sort(function (t, e) {
                        return n[t] - n[e];
                    });
                }
                function Sn(t) {
                    for (
                        var n, e = -1, i = 0, r = t.length, o = -1 / 0;
                        ++e < r;

                    )
                        (n = +t[e][1]) > o && ((o = n), (i = e));
                    return i;
                }
                function kn(t) {
                    var n = t.map(Nn);
                    return mn(t).sort(function (t, e) {
                        return n[t] - n[e];
                    });
                }
                function Nn(t) {
                    for (var n, e = 0, i = -1, r = t.length; ++i < r; )
                        (n = +t[i][1]) && (e += n);
                    return e;
                }
                function An(t) {
                    return kn(t).reverse();
                }
                function Pn(t) {
                    var n,
                        e,
                        i = t.length,
                        r = t.map(Nn),
                        o = En(t),
                        s = 0,
                        a = 0,
                        u = [],
                        c = [];
                    for (n = 0; n < i; ++n)
                        (e = o[n]),
                            s < a
                                ? ((s += r[e]), u.push(e))
                                : ((a += r[e]), c.push(e));
                    return c.reverse().concat(u);
                }
                function Ln(t) {
                    return mn(t).reverse();
                }
                (Jt.prototype = {
                    areaStart: Tt,
                    areaEnd: Tt,
                    lineStart: function () {
                        this._point = 0;
                    },
                    lineEnd: function () {
                        this._point && this._context.closePath();
                    },
                    point: function (t, n) {
                        (t = +t),
                            (n = +n),
                            this._point
                                ? this._context.lineTo(t, n)
                                : ((this._point = 1),
                                  this._context.moveTo(t, n));
                    },
                }),
                    (rn.prototype = {
                        areaStart: function () {
                            this._line = 0;
                        },
                        areaEnd: function () {
                            this._line = NaN;
                        },
                        lineStart: function () {
                            (this._x0 =
                                this._x1 =
                                this._y0 =
                                this._y1 =
                                this._t0 =
                                    NaN),
                                (this._point = 0);
                        },
                        lineEnd: function () {
                            switch (this._point) {
                                case 2:
                                    this._context.lineTo(this._x1, this._y1);
                                    break;
                                case 3:
                                    en(this, this._t0, nn(this, this._t0));
                            }
                            (this._line ||
                                (0 !== this._line && 1 === this._point)) &&
                                this._context.closePath(),
                                (this._line = 1 - this._line);
                        },
                        point: function (t, n) {
                            var e = NaN;
                            if (
                                ((n = +n),
                                (t = +t) !== this._x1 || n !== this._y1)
                            ) {
                                switch (this._point) {
                                    case 0:
                                        (this._point = 1),
                                            this._line
                                                ? this._context.lineTo(t, n)
                                                : this._context.moveTo(t, n);
                                        break;
                                    case 1:
                                        this._point = 2;
                                        break;
                                    case 2:
                                        (this._point = 3),
                                            en(
                                                this,
                                                nn(this, (e = tn(this, t, n))),
                                                e
                                            );
                                        break;
                                    default:
                                        en(
                                            this,
                                            this._t0,
                                            (e = tn(this, t, n))
                                        );
                                }
                                (this._x0 = this._x1),
                                    (this._x1 = t),
                                    (this._y0 = this._y1),
                                    (this._y1 = n),
                                    (this._t0 = e);
                            }
                        },
                    }),
                    ((on.prototype = Object.create(rn.prototype)).point =
                        function (t, n) {
                            rn.prototype.point.call(this, n, t);
                        }),
                    (sn.prototype = {
                        moveTo: function (t, n) {
                            this._context.moveTo(n, t);
                        },
                        closePath: function () {
                            this._context.closePath();
                        },
                        lineTo: function (t, n) {
                            this._context.lineTo(n, t);
                        },
                        bezierCurveTo: function (t, n, e, i, r, o) {
                            this._context.bezierCurveTo(n, t, i, e, o, r);
                        },
                    }),
                    (cn.prototype = {
                        areaStart: function () {
                            this._line = 0;
                        },
                        areaEnd: function () {
                            this._line = NaN;
                        },
                        lineStart: function () {
                            (this._x = []), (this._y = []);
                        },
                        lineEnd: function () {
                            var t = this._x,
                                n = this._y,
                                e = t.length;
                            if (e)
                                if (
                                    (this._line
                                        ? this._context.lineTo(t[0], n[0])
                                        : this._context.moveTo(t[0], n[0]),
                                    2 === e)
                                )
                                    this._context.lineTo(t[1], n[1]);
                                else
                                    for (
                                        var i = ln(t), r = ln(n), o = 0, s = 1;
                                        s < e;
                                        ++o, ++s
                                    )
                                        this._context.bezierCurveTo(
                                            i[0][o],
                                            r[0][o],
                                            i[1][o],
                                            r[1][o],
                                            t[s],
                                            n[s]
                                        );
                            (this._line || (0 !== this._line && 1 === e)) &&
                                this._context.closePath(),
                                (this._line = 1 - this._line),
                                (this._x = this._y = null);
                        },
                        point: function (t, n) {
                            this._x.push(+t), this._y.push(+n);
                        },
                    }),
                    (fn.prototype = {
                        areaStart: function () {
                            this._line = 0;
                        },
                        areaEnd: function () {
                            this._line = NaN;
                        },
                        lineStart: function () {
                            (this._x = this._y = NaN), (this._point = 0);
                        },
                        lineEnd: function () {
                            0 < this._t &&
                                this._t < 1 &&
                                2 === this._point &&
                                this._context.lineTo(this._x, this._y),
                                (this._line ||
                                    (0 !== this._line && 1 === this._point)) &&
                                    this._context.closePath(),
                                this._line >= 0 &&
                                    ((this._t = 1 - this._t),
                                    (this._line = 1 - this._line));
                        },
                        point: function (t, n) {
                            switch (((t = +t), (n = +n), this._point)) {
                                case 0:
                                    (this._point = 1),
                                        this._line
                                            ? this._context.lineTo(t, n)
                                            : this._context.moveTo(t, n);
                                    break;
                                case 1:
                                    this._point = 2;
                                default:
                                    if (this._t <= 0)
                                        this._context.lineTo(this._x, n),
                                            this._context.lineTo(t, n);
                                    else {
                                        var e =
                                            this._x * (1 - this._t) +
                                            t * this._t;
                                        this._context.lineTo(e, this._y),
                                            this._context.lineTo(e, n);
                                    }
                            }
                            (this._x = t), (this._y = n);
                        },
                    });
            },
            4446: (t, n, e) => {
                "use strict";
                e.r(n),
                    e.d(n, {
                        zoom: () => Rt,
                        zoomIdentity: () => Ct,
                        zoomTransform: () => It,
                    });
                var i = { value: () => {} };
                function r() {
                    for (
                        var t, n = 0, e = arguments.length, i = {};
                        n < e;
                        ++n
                    ) {
                        if (
                            !(t = arguments[n] + "") ||
                            t in i ||
                            /[\s.]/.test(t)
                        )
                            throw new Error("illegal type: " + t);
                        i[t] = [];
                    }
                    return new o(i);
                }
                function o(t) {
                    this._ = t;
                }
                function s(t, n) {
                    return t
                        .trim()
                        .split(/^|\s+/)
                        .map(function (t) {
                            var e = "",
                                i = t.indexOf(".");
                            if (
                                (i >= 0 &&
                                    ((e = t.slice(i + 1)), (t = t.slice(0, i))),
                                t && !n.hasOwnProperty(t))
                            )
                                throw new Error("unknown type: " + t);
                            return { type: t, name: e };
                        });
                }
                function a(t, n) {
                    for (var e, i = 0, r = t.length; i < r; ++i)
                        if ((e = t[i]).name === n) return e.value;
                }
                function u(t, n, e) {
                    for (var r = 0, o = t.length; r < o; ++r)
                        if (t[r].name === n) {
                            (t[r] = i),
                                (t = t.slice(0, r).concat(t.slice(r + 1)));
                            break;
                        }
                    return null != e && t.push({ name: n, value: e }), t;
                }
                o.prototype = r.prototype = {
                    constructor: o,
                    on: function (t, n) {
                        var e,
                            i = this._,
                            r = s(t + "", i),
                            o = -1,
                            c = r.length;
                        if (!(arguments.length < 2)) {
                            if (null != n && "function" != typeof n)
                                throw new Error("invalid callback: " + n);
                            for (; ++o < c; )
                                if ((e = (t = r[o]).type))
                                    i[e] = u(i[e], t.name, n);
                                else if (null == n)
                                    for (e in i) i[e] = u(i[e], t.name, null);
                            return this;
                        }
                        for (; ++o < c; )
                            if ((e = (t = r[o]).type) && (e = a(i[e], t.name)))
                                return e;
                    },
                    copy: function () {
                        var t = {},
                            n = this._;
                        for (var e in n) t[e] = n[e].slice();
                        return new o(t);
                    },
                    call: function (t, n) {
                        if ((e = arguments.length - 2) > 0)
                            for (var e, i, r = new Array(e), o = 0; o < e; ++o)
                                r[o] = arguments[o + 2];
                        if (!this._.hasOwnProperty(t))
                            throw new Error("unknown type: " + t);
                        for (o = 0, e = (i = this._[t]).length; o < e; ++o)
                            i[o].value.apply(n, r);
                    },
                    apply: function (t, n, e) {
                        if (!this._.hasOwnProperty(t))
                            throw new Error("unknown type: " + t);
                        for (var i = this._[t], r = 0, o = i.length; r < o; ++r)
                            i[r].value.apply(n, e);
                    },
                };
                const c = r;
                var l = e(4017);
                function h(t) {
                    t.preventDefault(), t.stopImmediatePropagation();
                }
                function f(t) {
                    var n = t.document.documentElement,
                        e = (0, l.Z)(t).on("dragstart.drag", h, !0);
                    "onselectstart" in n
                        ? e.on("selectstart.drag", h, !0)
                        : ((n.__noselect = n.style.MozUserSelect),
                          (n.style.MozUserSelect = "none"));
                }
                function p(t, n) {
                    var e = t.document.documentElement,
                        i = (0, l.Z)(t).on("dragstart.drag", null);
                    n &&
                        (i.on("click.drag", h, !0),
                        setTimeout(function () {
                            i.on("click.drag", null);
                        }, 0)),
                        "onselectstart" in e
                            ? i.on("selectstart.drag", null)
                            : ((e.style.MozUserSelect = e.__noselect),
                              delete e.__noselect);
                }
                var d,
                    y,
                    v = e(588),
                    m = e(3172),
                    g = e(3434),
                    _ = 0,
                    x = 0,
                    w = 0,
                    b = 0,
                    M = 0,
                    T = 0,
                    E =
                        "object" == typeof performance && performance.now
                            ? performance
                            : Date,
                    S =
                        "object" == typeof window &&
                        window.requestAnimationFrame
                            ? window.requestAnimationFrame.bind(window)
                            : function (t) {
                                  setTimeout(t, 17);
                              };
                function k() {
                    return M || (S(N), (M = E.now() + T));
                }
                function N() {
                    M = 0;
                }
                function A() {
                    this._call = this._time = this._next = null;
                }
                function P(t, n, e) {
                    var i = new A();
                    return i.restart(t, n, e), i;
                }
                function L() {
                    (M = (b = E.now()) + T), (_ = x = 0);
                    try {
                        !(function () {
                            k(), ++_;
                            for (var t, n = d; n; )
                                (t = M - n._time) >= 0 && n._call.call(null, t),
                                    (n = n._next);
                            --_;
                        })();
                    } finally {
                        (_ = 0),
                            (function () {
                                for (var t, n, e = d, i = 1 / 0; e; )
                                    e._call
                                        ? (i > e._time && (i = e._time),
                                          (t = e),
                                          (e = e._next))
                                        : ((n = e._next),
                                          (e._next = null),
                                          (e = t ? (t._next = n) : (d = n)));
                                (y = t), C(i);
                            })(),
                            (M = 0);
                    }
                }
                function O() {
                    var t = E.now(),
                        n = t - b;
                    n > 1e3 && ((T -= n), (b = t));
                }
                function C(t) {
                    _ ||
                        (x && (x = clearTimeout(x)),
                        t - M > 24
                            ? (t < 1 / 0 &&
                                  (x = setTimeout(L, t - E.now() - T)),
                              w && (w = clearInterval(w)))
                            : (w || ((b = E.now()), (w = setInterval(O, 1e3))),
                              (_ = 1),
                              S(L)));
                }
                function I(t, n, e) {
                    var i = new A();
                    return (
                        (n = null == n ? 0 : +n),
                        i.restart(
                            (e) => {
                                i.stop(), t(e + n);
                            },
                            n,
                            e
                        ),
                        i
                    );
                }
                A.prototype = P.prototype = {
                    constructor: A,
                    restart: function (t, n, e) {
                        if ("function" != typeof t)
                            throw new TypeError("callback is not a function");
                        (e = (null == e ? k() : +e) + (null == n ? 0 : +n)),
                            this._next ||
                                y === this ||
                                (y ? (y._next = this) : (d = this), (y = this)),
                            (this._call = t),
                            (this._time = e),
                            C();
                    },
                    stop: function () {
                        this._call &&
                            ((this._call = null), (this._time = 1 / 0), C());
                    },
                };
                var Z = c("start", "end", "cancel", "interrupt"),
                    D = [];
                function F(t, n, e, i, r, o) {
                    var s = t.__transition;
                    if (s) {
                        if (e in s) return;
                    } else t.__transition = {};
                    !(function (t, n, e) {
                        var i,
                            r = t.__transition;
                        function o(u) {
                            var c, l, h, f;
                            if (1 !== e.state) return a();
                            for (c in r)
                                if ((f = r[c]).name === e.name) {
                                    if (3 === f.state) return I(o);
                                    4 === f.state
                                        ? ((f.state = 6),
                                          f.timer.stop(),
                                          f.on.call(
                                              "interrupt",
                                              t,
                                              t.__data__,
                                              f.index,
                                              f.group
                                          ),
                                          delete r[c])
                                        : +c < n &&
                                          ((f.state = 6),
                                          f.timer.stop(),
                                          f.on.call(
                                              "cancel",
                                              t,
                                              t.__data__,
                                              f.index,
                                              f.group
                                          ),
                                          delete r[c]);
                                }
                            if (
                                (I(function () {
                                    3 === e.state &&
                                        ((e.state = 4),
                                        e.timer.restart(s, e.delay, e.time),
                                        s(u));
                                }),
                                (e.state = 2),
                                e.on.call(
                                    "start",
                                    t,
                                    t.__data__,
                                    e.index,
                                    e.group
                                ),
                                2 === e.state)
                            ) {
                                for (
                                    e.state = 3,
                                        i = new Array((h = e.tween.length)),
                                        c = 0,
                                        l = -1;
                                    c < h;
                                    ++c
                                )
                                    (f = e.tween[c].value.call(
                                        t,
                                        t.__data__,
                                        e.index,
                                        e.group
                                    )) && (i[++l] = f);
                                i.length = l + 1;
                            }
                        }
                        function s(n) {
                            for (
                                var r =
                                        n < e.duration
                                            ? e.ease.call(null, n / e.duration)
                                            : (e.timer.restart(a),
                                              (e.state = 5),
                                              1),
                                    o = -1,
                                    s = i.length;
                                ++o < s;

                            )
                                i[o].call(t, r);
                            5 === e.state &&
                                (e.on.call(
                                    "end",
                                    t,
                                    t.__data__,
                                    e.index,
                                    e.group
                                ),
                                a());
                        }
                        function a() {
                            for (var i in ((e.state = 6),
                            e.timer.stop(),
                            delete r[n],
                            r))
                                return;
                            delete t.__transition;
                        }
                        (r[n] = e),
                            (e.timer = P(
                                function (t) {
                                    (e.state = 1),
                                        e.timer.restart(o, e.delay, e.time),
                                        e.delay <= t && o(t - e.delay);
                                },
                                0,
                                e.time
                            ));
                    })(t, e, {
                        name: n,
                        index: i,
                        group: r,
                        on: Z,
                        tween: D,
                        time: o.time,
                        delay: o.delay,
                        duration: o.duration,
                        ease: o.ease,
                        timer: null,
                        state: 0,
                    });
                }
                function H(t, n) {
                    var e = z(t, n);
                    if (e.state > 0)
                        throw new Error("too late; already scheduled");
                    return e;
                }
                function j(t, n) {
                    var e = z(t, n);
                    if (e.state > 3)
                        throw new Error("too late; already running");
                    return e;
                }
                function z(t, n) {
                    var e = t.__transition;
                    if (!e || !(e = e[n]))
                        throw new Error("transition not found");
                    return e;
                }
                function U(t, n) {
                    var e,
                        i,
                        r,
                        o = t.__transition,
                        s = !0;
                    if (o) {
                        for (r in ((n = null == n ? null : n + ""), o))
                            (e = o[r]).name === n
                                ? ((i = e.state > 2 && e.state < 5),
                                  (e.state = 6),
                                  e.timer.stop(),
                                  e.on.call(
                                      i ? "interrupt" : "cancel",
                                      t,
                                      t.__data__,
                                      e.index,
                                      e.group
                                  ),
                                  delete o[r])
                                : (s = !1);
                        s && delete t.__transition;
                    }
                }
                var Y = e(3636),
                    R = e(3888);
                function q(t, n) {
                    var e, i;
                    return function () {
                        var r = j(this, t),
                            o = r.tween;
                        if (o !== e)
                            for (var s = 0, a = (i = e = o).length; s < a; ++s)
                                if (i[s].name === n) {
                                    (i = i.slice()).splice(s, 1);
                                    break;
                                }
                        r.tween = i;
                    };
                }
                function B(t, n, e) {
                    var i, r;
                    if ("function" != typeof e) throw new Error();
                    return function () {
                        var o = j(this, t),
                            s = o.tween;
                        if (s !== i) {
                            r = (i = s).slice();
                            for (
                                var a = { name: n, value: e },
                                    u = 0,
                                    c = r.length;
                                u < c;
                                ++u
                            )
                                if (r[u].name === n) {
                                    r[u] = a;
                                    break;
                                }
                            u === c && r.push(a);
                        }
                        o.tween = r;
                    };
                }
                function V(t, n, e) {
                    var i = t._id;
                    return (
                        t.each(function () {
                            var t = j(this, i);
                            (t.value || (t.value = {}))[n] = e.apply(
                                this,
                                arguments
                            );
                        }),
                        function (t) {
                            return z(t, i).value[n];
                        }
                    );
                }
                var W = e(6372),
                    X = e(3626),
                    $ = e(3414),
                    G = e(9843);
                function J(t, n) {
                    var e;
                    return (
                        "number" == typeof n
                            ? X.Z
                            : n instanceof W.ZP
                            ? $.ZP
                            : (e = (0, W.ZP)(n))
                            ? ((n = e), $.ZP)
                            : G.Z
                    )(t, n);
                }
                function Q(t) {
                    return function () {
                        this.removeAttribute(t);
                    };
                }
                function K(t) {
                    return function () {
                        this.removeAttributeNS(t.space, t.local);
                    };
                }
                function tt(t, n, e) {
                    var i,
                        r,
                        o = e + "";
                    return function () {
                        var s = this.getAttribute(t);
                        return s === o
                            ? null
                            : s === i
                            ? r
                            : (r = n((i = s), e));
                    };
                }
                function nt(t, n, e) {
                    var i,
                        r,
                        o = e + "";
                    return function () {
                        var s = this.getAttributeNS(t.space, t.local);
                        return s === o
                            ? null
                            : s === i
                            ? r
                            : (r = n((i = s), e));
                    };
                }
                function et(t, n, e) {
                    var i, r, o;
                    return function () {
                        var s,
                            a,
                            u = e(this);
                        if (null != u)
                            return (s = this.getAttribute(t)) === (a = u + "")
                                ? null
                                : s === i && a === r
                                ? o
                                : ((r = a), (o = n((i = s), u)));
                        this.removeAttribute(t);
                    };
                }
                function it(t, n, e) {
                    var i, r, o;
                    return function () {
                        var s,
                            a,
                            u = e(this);
                        if (null != u)
                            return (s = this.getAttributeNS(
                                t.space,
                                t.local
                            )) === (a = u + "")
                                ? null
                                : s === i && a === r
                                ? o
                                : ((r = a), (o = n((i = s), u)));
                        this.removeAttributeNS(t.space, t.local);
                    };
                }
                function rt(t, n) {
                    return function (e) {
                        this.setAttribute(t, n.call(this, e));
                    };
                }
                function ot(t, n) {
                    return function (e) {
                        this.setAttributeNS(t.space, t.local, n.call(this, e));
                    };
                }
                function st(t, n) {
                    var e, i;
                    function r() {
                        var r = n.apply(this, arguments);
                        return r !== i && (e = (i = r) && ot(t, r)), e;
                    }
                    return (r._value = n), r;
                }
                function at(t, n) {
                    var e, i;
                    function r() {
                        var r = n.apply(this, arguments);
                        return r !== i && (e = (i = r) && rt(t, r)), e;
                    }
                    return (r._value = n), r;
                }
                function ut(t, n) {
                    return function () {
                        H(this, t).delay = +n.apply(this, arguments);
                    };
                }
                function ct(t, n) {
                    return (
                        (n = +n),
                        function () {
                            H(this, t).delay = n;
                        }
                    );
                }
                function lt(t, n) {
                    return function () {
                        j(this, t).duration = +n.apply(this, arguments);
                    };
                }
                function ht(t, n) {
                    return (
                        (n = +n),
                        function () {
                            j(this, t).duration = n;
                        }
                    );
                }
                function ft(t, n) {
                    if ("function" != typeof n) throw new Error();
                    return function () {
                        j(this, t).ease = n;
                    };
                }
                var pt = e(3083);
                function dt(t, n, e) {
                    var i,
                        r,
                        o = (function (t) {
                            return (t + "")
                                .trim()
                                .split(/^|\s+/)
                                .every(function (t) {
                                    var n = t.indexOf(".");
                                    return (
                                        n >= 0 && (t = t.slice(0, n)),
                                        !t || "start" === t
                                    );
                                });
                        })(n)
                            ? H
                            : j;
                    return function () {
                        var s = o(this, t),
                            a = s.on;
                        a !== i && (r = (i = a).copy()).on(n, e), (s.on = r);
                    };
                }
                var yt = e(2634),
                    vt = e(3545),
                    mt = g.ZP.prototype.constructor,
                    gt = e(9986);
                function _t(t) {
                    return function () {
                        this.style.removeProperty(t);
                    };
                }
                function xt(t, n, e) {
                    return function (i) {
                        this.style.setProperty(t, n.call(this, i), e);
                    };
                }
                function wt(t, n, e) {
                    var i, r;
                    function o() {
                        var o = n.apply(this, arguments);
                        return o !== r && (i = (r = o) && xt(t, o, e)), i;
                    }
                    return (o._value = n), o;
                }
                function bt(t) {
                    return function (n) {
                        this.textContent = t.call(this, n);
                    };
                }
                function Mt(t) {
                    var n, e;
                    function i() {
                        var i = t.apply(this, arguments);
                        return i !== e && (n = (e = i) && bt(i)), n;
                    }
                    return (i._value = t), i;
                }
                var Tt = 0;
                function Et(t, n, e, i) {
                    (this._groups = t),
                        (this._parents = n),
                        (this._name = e),
                        (this._id = i);
                }
                function St() {
                    return ++Tt;
                }
                var kt = g.ZP.prototype;
                Et.prototype = function (t) {
                    return (0, g.ZP)().transition(t);
                }.prototype = {
                    constructor: Et,
                    select: function (t) {
                        var n = this._name,
                            e = this._id;
                        "function" != typeof t && (t = (0, yt.Z)(t));
                        for (
                            var i = this._groups,
                                r = i.length,
                                o = new Array(r),
                                s = 0;
                            s < r;
                            ++s
                        )
                            for (
                                var a,
                                    u,
                                    c = i[s],
                                    l = c.length,
                                    h = (o[s] = new Array(l)),
                                    f = 0;
                                f < l;
                                ++f
                            )
                                (a = c[f]) &&
                                    (u = t.call(a, a.__data__, f, c)) &&
                                    ("__data__" in a &&
                                        (u.__data__ = a.__data__),
                                    (h[f] = u),
                                    F(h[f], n, e, f, h, z(a, e)));
                        return new Et(o, this._parents, n, e);
                    },
                    selectAll: function (t) {
                        var n = this._name,
                            e = this._id;
                        "function" != typeof t && (t = (0, vt.Z)(t));
                        for (
                            var i = this._groups,
                                r = i.length,
                                o = [],
                                s = [],
                                a = 0;
                            a < r;
                            ++a
                        )
                            for (
                                var u, c = i[a], l = c.length, h = 0;
                                h < l;
                                ++h
                            )
                                if ((u = c[h])) {
                                    for (
                                        var f,
                                            p = t.call(u, u.__data__, h, c),
                                            d = z(u, e),
                                            y = 0,
                                            v = p.length;
                                        y < v;
                                        ++y
                                    )
                                        (f = p[y]) && F(f, n, e, y, p, d);
                                    o.push(p), s.push(u);
                                }
                        return new Et(o, s, n, e);
                    },
                    filter: function (t) {
                        "function" != typeof t && (t = (0, pt.Z)(t));
                        for (
                            var n = this._groups,
                                e = n.length,
                                i = new Array(e),
                                r = 0;
                            r < e;
                            ++r
                        )
                            for (
                                var o,
                                    s = n[r],
                                    a = s.length,
                                    u = (i[r] = []),
                                    c = 0;
                                c < a;
                                ++c
                            )
                                (o = s[c]) &&
                                    t.call(o, o.__data__, c, s) &&
                                    u.push(o);
                        return new Et(i, this._parents, this._name, this._id);
                    },
                    merge: function (t) {
                        if (t._id !== this._id) throw new Error();
                        for (
                            var n = this._groups,
                                e = t._groups,
                                i = n.length,
                                r = e.length,
                                o = Math.min(i, r),
                                s = new Array(i),
                                a = 0;
                            a < o;
                            ++a
                        )
                            for (
                                var u,
                                    c = n[a],
                                    l = e[a],
                                    h = c.length,
                                    f = (s[a] = new Array(h)),
                                    p = 0;
                                p < h;
                                ++p
                            )
                                (u = c[p] || l[p]) && (f[p] = u);
                        for (; a < i; ++a) s[a] = n[a];
                        return new Et(s, this._parents, this._name, this._id);
                    },
                    selection: function () {
                        return new mt(this._groups, this._parents);
                    },
                    transition: function () {
                        for (
                            var t = this._name,
                                n = this._id,
                                e = St(),
                                i = this._groups,
                                r = i.length,
                                o = 0;
                            o < r;
                            ++o
                        )
                            for (
                                var s, a = i[o], u = a.length, c = 0;
                                c < u;
                                ++c
                            )
                                if ((s = a[c])) {
                                    var l = z(s, n);
                                    F(s, t, e, c, a, {
                                        time: l.time + l.delay + l.duration,
                                        delay: 0,
                                        duration: l.duration,
                                        ease: l.ease,
                                    });
                                }
                        return new Et(i, this._parents, t, e);
                    },
                    call: kt.call,
                    nodes: kt.nodes,
                    node: kt.node,
                    size: kt.size,
                    empty: kt.empty,
                    each: kt.each,
                    on: function (t, n) {
                        var e = this._id;
                        return arguments.length < 2
                            ? z(this.node(), e).on.on(t)
                            : this.each(dt(e, t, n));
                    },
                    attr: function (t, n) {
                        var e = (0, R.Z)(t),
                            i = "transform" === e ? Y.w : J;
                        return this.attrTween(
                            t,
                            "function" == typeof n
                                ? (e.local ? it : et)(
                                      e,
                                      i,
                                      V(this, "attr." + t, n)
                                  )
                                : null == n
                                ? (e.local ? K : Q)(e)
                                : (e.local ? nt : tt)(e, i, n)
                        );
                    },
                    attrTween: function (t, n) {
                        var e = "attr." + t;
                        if (arguments.length < 2)
                            return (e = this.tween(e)) && e._value;
                        if (null == n) return this.tween(e, null);
                        if ("function" != typeof n) throw new Error();
                        var i = (0, R.Z)(t);
                        return this.tween(e, (i.local ? st : at)(i, n));
                    },
                    style: function (t, n, e) {
                        var i = "transform" == (t += "") ? Y.Y : J;
                        return null == n
                            ? this.styleTween(
                                  t,
                                  (function (t, n) {
                                      var e, i, r;
                                      return function () {
                                          var o = (0, gt.S)(this, t),
                                              s =
                                                  (this.style.removeProperty(t),
                                                  (0, gt.S)(this, t));
                                          return o === s
                                              ? null
                                              : o === e && s === i
                                              ? r
                                              : (r = n((e = o), (i = s)));
                                      };
                                  })(t, i)
                              ).on("end.style." + t, _t(t))
                            : "function" == typeof n
                            ? this.styleTween(
                                  t,
                                  (function (t, n, e) {
                                      var i, r, o;
                                      return function () {
                                          var s = (0, gt.S)(this, t),
                                              a = e(this),
                                              u = a + "";
                                          return (
                                              null == a &&
                                                  (this.style.removeProperty(t),
                                                  (u = a = (0, gt.S)(this, t))),
                                              s === u
                                                  ? null
                                                  : s === i && u === r
                                                  ? o
                                                  : ((r = u),
                                                    (o = n((i = s), a)))
                                          );
                                      };
                                  })(t, i, V(this, "style." + t, n))
                              ).each(
                                  (function (t, n) {
                                      var e,
                                          i,
                                          r,
                                          o,
                                          s = "style." + n,
                                          a = "end." + s;
                                      return function () {
                                          var u = j(this, t),
                                              c = u.on,
                                              l =
                                                  null == u.value[s]
                                                      ? o || (o = _t(n))
                                                      : void 0;
                                          (c === e && r === l) ||
                                              (i = (e = c).copy()).on(
                                                  a,
                                                  (r = l)
                                              ),
                                              (u.on = i);
                                      };
                                  })(this._id, t)
                              )
                            : this.styleTween(
                                  t,
                                  (function (t, n, e) {
                                      var i,
                                          r,
                                          o = e + "";
                                      return function () {
                                          var s = (0, gt.S)(this, t);
                                          return s === o
                                              ? null
                                              : s === i
                                              ? r
                                              : (r = n((i = s), e));
                                      };
                                  })(t, i, n),
                                  e
                              ).on("end.style." + t, null);
                    },
                    styleTween: function (t, n, e) {
                        var i = "style." + (t += "");
                        if (arguments.length < 2)
                            return (i = this.tween(i)) && i._value;
                        if (null == n) return this.tween(i, null);
                        if ("function" != typeof n) throw new Error();
                        return this.tween(i, wt(t, n, null == e ? "" : e));
                    },
                    text: function (t) {
                        return this.tween(
                            "text",
                            "function" == typeof t
                                ? (function (t) {
                                      return function () {
                                          var n = t(this);
                                          this.textContent = null == n ? "" : n;
                                      };
                                  })(V(this, "text", t))
                                : (function (t) {
                                      return function () {
                                          this.textContent = t;
                                      };
                                  })(null == t ? "" : t + "")
                        );
                    },
                    textTween: function (t) {
                        var n = "text";
                        if (arguments.length < 1)
                            return (n = this.tween(n)) && n._value;
                        if (null == t) return this.tween(n, null);
                        if ("function" != typeof t) throw new Error();
                        return this.tween(n, Mt(t));
                    },
                    remove: function () {
                        return this.on(
                            "end.remove",
                            (function (t) {
                                return function () {
                                    var n = this.parentNode;
                                    for (var e in this.__transition)
                                        if (+e !== t) return;
                                    n && n.removeChild(this);
                                };
                            })(this._id)
                        );
                    },
                    tween: function (t, n) {
                        var e = this._id;
                        if (((t += ""), arguments.length < 2)) {
                            for (
                                var i,
                                    r = z(this.node(), e).tween,
                                    o = 0,
                                    s = r.length;
                                o < s;
                                ++o
                            )
                                if ((i = r[o]).name === t) return i.value;
                            return null;
                        }
                        return this.each((null == n ? q : B)(e, t, n));
                    },
                    delay: function (t) {
                        var n = this._id;
                        return arguments.length
                            ? this.each(
                                  ("function" == typeof t ? ut : ct)(n, t)
                              )
                            : z(this.node(), n).delay;
                    },
                    duration: function (t) {
                        var n = this._id;
                        return arguments.length
                            ? this.each(
                                  ("function" == typeof t ? lt : ht)(n, t)
                              )
                            : z(this.node(), n).duration;
                    },
                    ease: function (t) {
                        var n = this._id;
                        return arguments.length
                            ? this.each(ft(n, t))
                            : z(this.node(), n).ease;
                    },
                    easeVarying: function (t) {
                        if ("function" != typeof t) throw new Error();
                        return this.each(
                            (function (t, n) {
                                return function () {
                                    var e = n.apply(this, arguments);
                                    if ("function" != typeof e)
                                        throw new Error();
                                    j(this, t).ease = e;
                                };
                            })(this._id, t)
                        );
                    },
                    end: function () {
                        var t,
                            n,
                            e = this,
                            i = e._id,
                            r = e.size();
                        return new Promise(function (o, s) {
                            var a = { value: s },
                                u = {
                                    value: function () {
                                        0 == --r && o();
                                    },
                                };
                            e.each(function () {
                                var e = j(this, i),
                                    r = e.on;
                                r !== t &&
                                    ((n = (t = r).copy())._.cancel.push(a),
                                    n._.interrupt.push(a),
                                    n._.end.push(u)),
                                    (e.on = n);
                            }),
                                0 === r && o();
                        });
                    },
                    [Symbol.iterator]: kt[Symbol.iterator],
                };
                var Nt = {
                    time: null,
                    delay: 0,
                    duration: 250,
                    ease: function (t) {
                        return (
                            ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) /
                            2
                        );
                    },
                };
                function At(t, n) {
                    for (var e; !(e = t.__transition) || !(e = e[n]); )
                        if (!(t = t.parentNode))
                            throw new Error(`transition ${n} not found`);
                    return e;
                }
                (g.ZP.prototype.interrupt = function (t) {
                    return this.each(function () {
                        U(this, t);
                    });
                }),
                    (g.ZP.prototype.transition = function (t) {
                        var n, e;
                        t instanceof Et
                            ? ((n = t._id), (t = t._name))
                            : ((n = St()),
                              ((e = Nt).time = k()),
                              (t = null == t ? null : t + ""));
                        for (
                            var i = this._groups, r = i.length, o = 0;
                            o < r;
                            ++o
                        )
                            for (
                                var s, a = i[o], u = a.length, c = 0;
                                c < u;
                                ++c
                            )
                                (s = a[c]) && F(s, t, n, c, a, e || At(s, n));
                        return new Et(i, this._parents, t, n);
                    });
                const Pt = (t) => () => t;
                function Lt(
                    t,
                    { sourceEvent: n, target: e, transform: i, dispatch: r }
                ) {
                    Object.defineProperties(this, {
                        type: { value: t, enumerable: !0, configurable: !0 },
                        sourceEvent: {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                        },
                        target: { value: e, enumerable: !0, configurable: !0 },
                        transform: {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                        },
                        _: { value: r },
                    });
                }
                function Ot(t, n, e) {
                    (this.k = t), (this.x = n), (this.y = e);
                }
                Ot.prototype = {
                    constructor: Ot,
                    scale: function (t) {
                        return 1 === t
                            ? this
                            : new Ot(this.k * t, this.x, this.y);
                    },
                    translate: function (t, n) {
                        return (0 === t) & (0 === n)
                            ? this
                            : new Ot(
                                  this.k,
                                  this.x + this.k * t,
                                  this.y + this.k * n
                              );
                    },
                    apply: function (t) {
                        return [t[0] * this.k + this.x, t[1] * this.k + this.y];
                    },
                    applyX: function (t) {
                        return t * this.k + this.x;
                    },
                    applyY: function (t) {
                        return t * this.k + this.y;
                    },
                    invert: function (t) {
                        return [
                            (t[0] - this.x) / this.k,
                            (t[1] - this.y) / this.k,
                        ];
                    },
                    invertX: function (t) {
                        return (t - this.x) / this.k;
                    },
                    invertY: function (t) {
                        return (t - this.y) / this.k;
                    },
                    rescaleX: function (t) {
                        return t
                            .copy()
                            .domain(
                                t
                                    .range()
                                    .map(this.invertX, this)
                                    .map(t.invert, t)
                            );
                    },
                    rescaleY: function (t) {
                        return t
                            .copy()
                            .domain(
                                t
                                    .range()
                                    .map(this.invertY, this)
                                    .map(t.invert, t)
                            );
                    },
                    toString: function () {
                        return (
                            "translate(" +
                            this.x +
                            "," +
                            this.y +
                            ") scale(" +
                            this.k +
                            ")"
                        );
                    },
                };
                var Ct = new Ot(1, 0, 0);
                function It(t) {
                    for (; !t.__zoom; ) if (!(t = t.parentNode)) return Ct;
                    return t.__zoom;
                }
                function Zt(t) {
                    t.stopImmediatePropagation();
                }
                function Dt(t) {
                    t.preventDefault(), t.stopImmediatePropagation();
                }
                function Ft(t) {
                    return !((t.ctrlKey && "wheel" !== t.type) || t.button);
                }
                function Ht() {
                    var t = this;
                    return t instanceof SVGElement
                        ? (t = t.ownerSVGElement || t).hasAttribute("viewBox")
                            ? [
                                  [(t = t.viewBox.baseVal).x, t.y],
                                  [t.x + t.width, t.y + t.height],
                              ]
                            : [
                                  [0, 0],
                                  [
                                      t.width.baseVal.value,
                                      t.height.baseVal.value,
                                  ],
                              ]
                        : [
                              [0, 0],
                              [t.clientWidth, t.clientHeight],
                          ];
                }
                function jt() {
                    return this.__zoom || Ct;
                }
                function zt(t) {
                    return (
                        -t.deltaY *
                        (1 === t.deltaMode ? 0.05 : t.deltaMode ? 1 : 0.002) *
                        (t.ctrlKey ? 10 : 1)
                    );
                }
                function Ut() {
                    return navigator.maxTouchPoints || "ontouchstart" in this;
                }
                function Yt(t, n, e) {
                    var i = t.invertX(n[0][0]) - e[0][0],
                        r = t.invertX(n[1][0]) - e[1][0],
                        o = t.invertY(n[0][1]) - e[0][1],
                        s = t.invertY(n[1][1]) - e[1][1];
                    return t.translate(
                        r > i ? (i + r) / 2 : Math.min(0, i) || Math.max(0, r),
                        s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s)
                    );
                }
                function Rt() {
                    var t,
                        n,
                        e,
                        i = Ft,
                        r = Ht,
                        o = Yt,
                        s = zt,
                        a = Ut,
                        u = [0, 1 / 0],
                        h = [
                            [-1 / 0, -1 / 0],
                            [1 / 0, 1 / 0],
                        ],
                        d = 250,
                        y = v.Z,
                        g = c("start", "zoom", "end"),
                        _ = 500,
                        x = 0,
                        w = 10;
                    function b(t) {
                        t.property("__zoom", jt)
                            .on("wheel.zoom", A)
                            .on("mousedown.zoom", P)
                            .on("dblclick.zoom", L)
                            .filter(a)
                            .on("touchstart.zoom", O)
                            .on("touchmove.zoom", C)
                            .on("touchend.zoom touchcancel.zoom", I)
                            .style(
                                "-webkit-tap-highlight-color",
                                "rgba(0,0,0,0)"
                            );
                    }
                    function M(t, n) {
                        return (n = Math.max(u[0], Math.min(u[1], n))) === t.k
                            ? t
                            : new Ot(n, t.x, t.y);
                    }
                    function T(t, n, e) {
                        var i = n[0] - e[0] * t.k,
                            r = n[1] - e[1] * t.k;
                        return i === t.x && r === t.y ? t : new Ot(t.k, i, r);
                    }
                    function E(t) {
                        return [
                            (+t[0][0] + +t[1][0]) / 2,
                            (+t[0][1] + +t[1][1]) / 2,
                        ];
                    }
                    function S(t, n, e, i) {
                        t.on("start.zoom", function () {
                            k(this, arguments).event(i).start();
                        })
                            .on("interrupt.zoom end.zoom", function () {
                                k(this, arguments).event(i).end();
                            })
                            .tween("zoom", function () {
                                var t = this,
                                    o = arguments,
                                    s = k(t, o).event(i),
                                    a = r.apply(t, o),
                                    u =
                                        null == e
                                            ? E(a)
                                            : "function" == typeof e
                                            ? e.apply(t, o)
                                            : e,
                                    c = Math.max(
                                        a[1][0] - a[0][0],
                                        a[1][1] - a[0][1]
                                    ),
                                    l = t.__zoom,
                                    h =
                                        "function" == typeof n
                                            ? n.apply(t, o)
                                            : n,
                                    f = y(
                                        l.invert(u).concat(c / l.k),
                                        h.invert(u).concat(c / h.k)
                                    );
                                return function (t) {
                                    if (1 === t) t = h;
                                    else {
                                        var n = f(t),
                                            e = c / n[2];
                                        t = new Ot(
                                            e,
                                            u[0] - n[0] * e,
                                            u[1] - n[1] * e
                                        );
                                    }
                                    s.zoom(null, t);
                                };
                            });
                    }
                    function k(t, n, e) {
                        return (!e && t.__zooming) || new N(t, n);
                    }
                    function N(t, n) {
                        (this.that = t),
                            (this.args = n),
                            (this.active = 0),
                            (this.sourceEvent = null),
                            (this.extent = r.apply(t, n)),
                            (this.taps = 0);
                    }
                    function A(t, ...n) {
                        if (i.apply(this, arguments)) {
                            var e = k(this, n).event(t),
                                r = this.__zoom,
                                a = Math.max(
                                    u[0],
                                    Math.min(
                                        u[1],
                                        r.k *
                                            Math.pow(
                                                2,
                                                s.apply(this, arguments)
                                            )
                                    )
                                ),
                                c = (0, m.Z)(t);
                            if (e.wheel)
                                (e.mouse[0][0] === c[0] &&
                                    e.mouse[0][1] === c[1]) ||
                                    (e.mouse[1] = r.invert((e.mouse[0] = c))),
                                    clearTimeout(e.wheel);
                            else {
                                if (r.k === a) return;
                                (e.mouse = [c, r.invert(c)]),
                                    U(this),
                                    e.start();
                            }
                            Dt(t),
                                (e.wheel = setTimeout(l, 150)),
                                e.zoom(
                                    "mouse",
                                    o(
                                        T(M(r, a), e.mouse[0], e.mouse[1]),
                                        e.extent,
                                        h
                                    )
                                );
                        }
                        function l() {
                            (e.wheel = null), e.end();
                        }
                    }
                    function P(t, ...n) {
                        if (!e && i.apply(this, arguments)) {
                            var r = k(this, n, !0).event(t),
                                s = (0, l.Z)(t.view)
                                    .on("mousemove.zoom", y, !0)
                                    .on("mouseup.zoom", v, !0),
                                a = (0, m.Z)(t, u),
                                u = t.currentTarget,
                                c = t.clientX,
                                d = t.clientY;
                            f(t.view),
                                Zt(t),
                                (r.mouse = [a, this.__zoom.invert(a)]),
                                U(this),
                                r.start();
                        }
                        function y(t) {
                            if ((Dt(t), !r.moved)) {
                                var n = t.clientX - c,
                                    e = t.clientY - d;
                                r.moved = n * n + e * e > x;
                            }
                            r.event(t).zoom(
                                "mouse",
                                o(
                                    T(
                                        r.that.__zoom,
                                        (r.mouse[0] = (0, m.Z)(t, u)),
                                        r.mouse[1]
                                    ),
                                    r.extent,
                                    h
                                )
                            );
                        }
                        function v(t) {
                            s.on("mousemove.zoom mouseup.zoom", null),
                                p(t.view, r.moved),
                                Dt(t),
                                r.event(t).end();
                        }
                    }
                    function L(t, ...n) {
                        if (i.apply(this, arguments)) {
                            var e = this.__zoom,
                                s = (0, m.Z)(
                                    t.changedTouches ? t.changedTouches[0] : t,
                                    this
                                ),
                                a = e.invert(s),
                                u = e.k * (t.shiftKey ? 0.5 : 2),
                                c = o(T(M(e, u), s, a), r.apply(this, n), h);
                            Dt(t),
                                d > 0
                                    ? (0, l.Z)(this)
                                          .transition()
                                          .duration(d)
                                          .call(S, c, s, t)
                                    : (0, l.Z)(this).call(b.transform, c, s, t);
                        }
                    }
                    function O(e, ...r) {
                        if (i.apply(this, arguments)) {
                            var o,
                                s,
                                a,
                                u,
                                c = e.touches,
                                l = c.length,
                                h = k(
                                    this,
                                    r,
                                    e.changedTouches.length === l
                                ).event(e);
                            for (Zt(e), s = 0; s < l; ++s)
                                (a = c[s]),
                                    (u = [
                                        (u = (0, m.Z)(a, this)),
                                        this.__zoom.invert(u),
                                        a.identifier,
                                    ]),
                                    h.touch0
                                        ? h.touch1 ||
                                          h.touch0[2] === u[2] ||
                                          ((h.touch1 = u), (h.taps = 0))
                                        : ((h.touch0 = u),
                                          (o = !0),
                                          (h.taps = 1 + !!t));
                            t && (t = clearTimeout(t)),
                                o &&
                                    (h.taps < 2 &&
                                        ((n = u[0]),
                                        (t = setTimeout(function () {
                                            t = null;
                                        }, _))),
                                    U(this),
                                    h.start());
                        }
                    }
                    function C(t, ...n) {
                        if (this.__zooming) {
                            var e,
                                i,
                                r,
                                s,
                                a = k(this, n).event(t),
                                u = t.changedTouches,
                                c = u.length;
                            for (Dt(t), e = 0; e < c; ++e)
                                (i = u[e]),
                                    (r = (0, m.Z)(i, this)),
                                    a.touch0 && a.touch0[2] === i.identifier
                                        ? (a.touch0[0] = r)
                                        : a.touch1 &&
                                          a.touch1[2] === i.identifier &&
                                          (a.touch1[0] = r);
                            if (((i = a.that.__zoom), a.touch1)) {
                                var l = a.touch0[0],
                                    f = a.touch0[1],
                                    p = a.touch1[0],
                                    d = a.touch1[1],
                                    y =
                                        (y = p[0] - l[0]) * y +
                                        (y = p[1] - l[1]) * y,
                                    v =
                                        (v = d[0] - f[0]) * v +
                                        (v = d[1] - f[1]) * v;
                                (i = M(i, Math.sqrt(y / v))),
                                    (r = [
                                        (l[0] + p[0]) / 2,
                                        (l[1] + p[1]) / 2,
                                    ]),
                                    (s = [
                                        (f[0] + d[0]) / 2,
                                        (f[1] + d[1]) / 2,
                                    ]);
                            } else {
                                if (!a.touch0) return;
                                (r = a.touch0[0]), (s = a.touch0[1]);
                            }
                            a.zoom("touch", o(T(i, r, s), a.extent, h));
                        }
                    }
                    function I(t, ...i) {
                        if (this.__zooming) {
                            var r,
                                o,
                                s = k(this, i).event(t),
                                a = t.changedTouches,
                                u = a.length;
                            for (
                                Zt(t),
                                    e && clearTimeout(e),
                                    e = setTimeout(function () {
                                        e = null;
                                    }, _),
                                    r = 0;
                                r < u;
                                ++r
                            )
                                (o = a[r]),
                                    s.touch0 && s.touch0[2] === o.identifier
                                        ? delete s.touch0
                                        : s.touch1 &&
                                          s.touch1[2] === o.identifier &&
                                          delete s.touch1;
                            if (
                                (s.touch1 &&
                                    !s.touch0 &&
                                    ((s.touch0 = s.touch1), delete s.touch1),
                                s.touch0)
                            )
                                s.touch0[1] = this.__zoom.invert(s.touch0[0]);
                            else if (
                                (s.end(),
                                2 === s.taps &&
                                    ((o = (0, m.Z)(o, this)),
                                    Math.hypot(n[0] - o[0], n[1] - o[1]) < w))
                            ) {
                                var c = (0, l.Z)(this).on("dblclick.zoom");
                                c && c.apply(this, arguments);
                            }
                        }
                    }
                    return (
                        (b.transform = function (t, n, e, i) {
                            var r = t.selection ? t.selection() : t;
                            r.property("__zoom", jt),
                                t !== r
                                    ? S(t, n, e, i)
                                    : r.interrupt().each(function () {
                                          k(this, arguments)
                                              .event(i)
                                              .start()
                                              .zoom(
                                                  null,
                                                  "function" == typeof n
                                                      ? n.apply(this, arguments)
                                                      : n
                                              )
                                              .end();
                                      });
                        }),
                        (b.scaleBy = function (t, n, e, i) {
                            b.scaleTo(
                                t,
                                function () {
                                    var t = this.__zoom.k,
                                        e =
                                            "function" == typeof n
                                                ? n.apply(this, arguments)
                                                : n;
                                    return t * e;
                                },
                                e,
                                i
                            );
                        }),
                        (b.scaleTo = function (t, n, e, i) {
                            b.transform(
                                t,
                                function () {
                                    var t = r.apply(this, arguments),
                                        i = this.__zoom,
                                        s =
                                            null == e
                                                ? E(t)
                                                : "function" == typeof e
                                                ? e.apply(this, arguments)
                                                : e,
                                        a = i.invert(s),
                                        u =
                                            "function" == typeof n
                                                ? n.apply(this, arguments)
                                                : n;
                                    return o(T(M(i, u), s, a), t, h);
                                },
                                e,
                                i
                            );
                        }),
                        (b.translateBy = function (t, n, e, i) {
                            b.transform(
                                t,
                                function () {
                                    return o(
                                        this.__zoom.translate(
                                            "function" == typeof n
                                                ? n.apply(this, arguments)
                                                : n,
                                            "function" == typeof e
                                                ? e.apply(this, arguments)
                                                : e
                                        ),
                                        r.apply(this, arguments),
                                        h
                                    );
                                },
                                null,
                                i
                            );
                        }),
                        (b.translateTo = function (t, n, e, i, s) {
                            b.transform(
                                t,
                                function () {
                                    var t = r.apply(this, arguments),
                                        s = this.__zoom,
                                        a =
                                            null == i
                                                ? E(t)
                                                : "function" == typeof i
                                                ? i.apply(this, arguments)
                                                : i;
                                    return o(
                                        Ct.translate(a[0], a[1])
                                            .scale(s.k)
                                            .translate(
                                                "function" == typeof n
                                                    ? -n.apply(this, arguments)
                                                    : -n,
                                                "function" == typeof e
                                                    ? -e.apply(this, arguments)
                                                    : -e
                                            ),
                                        t,
                                        h
                                    );
                                },
                                i,
                                s
                            );
                        }),
                        (N.prototype = {
                            event: function (t) {
                                return t && (this.sourceEvent = t), this;
                            },
                            start: function () {
                                return (
                                    1 == ++this.active &&
                                        ((this.that.__zooming = this),
                                        this.emit("start")),
                                    this
                                );
                            },
                            zoom: function (t, n) {
                                return (
                                    this.mouse &&
                                        "mouse" !== t &&
                                        (this.mouse[1] = n.invert(
                                            this.mouse[0]
                                        )),
                                    this.touch0 &&
                                        "touch" !== t &&
                                        (this.touch0[1] = n.invert(
                                            this.touch0[0]
                                        )),
                                    this.touch1 &&
                                        "touch" !== t &&
                                        (this.touch1[1] = n.invert(
                                            this.touch1[0]
                                        )),
                                    (this.that.__zoom = n),
                                    this.emit("zoom"),
                                    this
                                );
                            },
                            end: function () {
                                return (
                                    0 == --this.active &&
                                        (delete this.that.__zooming,
                                        this.emit("end")),
                                    this
                                );
                            },
                            emit: function (t) {
                                var n = (0, l.Z)(this.that).datum();
                                g.call(
                                    t,
                                    this.that,
                                    new Lt(t, {
                                        sourceEvent: this.sourceEvent,
                                        target: b,
                                        type: t,
                                        transform: this.that.__zoom,
                                        dispatch: g,
                                    }),
                                    n
                                );
                            },
                        }),
                        (b.wheelDelta = function (t) {
                            return arguments.length
                                ? ((s = "function" == typeof t ? t : Pt(+t)), b)
                                : s;
                        }),
                        (b.filter = function (t) {
                            return arguments.length
                                ? ((i = "function" == typeof t ? t : Pt(!!t)),
                                  b)
                                : i;
                        }),
                        (b.touchable = function (t) {
                            return arguments.length
                                ? ((a = "function" == typeof t ? t : Pt(!!t)),
                                  b)
                                : a;
                        }),
                        (b.extent = function (t) {
                            return arguments.length
                                ? ((r =
                                      "function" == typeof t
                                          ? t
                                          : Pt([
                                                [+t[0][0], +t[0][1]],
                                                [+t[1][0], +t[1][1]],
                                            ])),
                                  b)
                                : r;
                        }),
                        (b.scaleExtent = function (t) {
                            return arguments.length
                                ? ((u[0] = +t[0]), (u[1] = +t[1]), b)
                                : [u[0], u[1]];
                        }),
                        (b.translateExtent = function (t) {
                            return arguments.length
                                ? ((h[0][0] = +t[0][0]),
                                  (h[1][0] = +t[1][0]),
                                  (h[0][1] = +t[0][1]),
                                  (h[1][1] = +t[1][1]),
                                  b)
                                : [
                                      [h[0][0], h[0][1]],
                                      [h[1][0], h[1][1]],
                                  ];
                        }),
                        (b.constrain = function (t) {
                            return arguments.length ? ((o = t), b) : o;
                        }),
                        (b.duration = function (t) {
                            return arguments.length ? ((d = +t), b) : d;
                        }),
                        (b.interpolate = function (t) {
                            return arguments.length ? ((y = t), b) : y;
                        }),
                        (b.on = function () {
                            var t = g.on.apply(g, arguments);
                            return t === g ? b : t;
                        }),
                        (b.clickDistance = function (t) {
                            return arguments.length
                                ? ((x = (t = +t) * t), b)
                                : Math.sqrt(x);
                        }),
                        (b.tapDistance = function (t) {
                            return arguments.length ? ((w = +t), b) : w;
                        }),
                        b
                    );
                }
                It.prototype = Ot.prototype;
            },
            4635: (t) => {
                var n = !1;
                if ("undefined" != typeof Float64Array) {
                    var e = new Float64Array(1),
                        i = new Uint32Array(e.buffer);
                    (e[0] = 1),
                        (n = !0),
                        1072693248 === i[1]
                            ? ((t.exports = function (t) {
                                  return (e[0] = t), [i[0], i[1]];
                              }),
                              (t.exports.pack = function (t, n) {
                                  return (i[0] = t), (i[1] = n), e[0];
                              }),
                              (t.exports.lo = function (t) {
                                  return (e[0] = t), i[0];
                              }),
                              (t.exports.hi = function (t) {
                                  return (e[0] = t), i[1];
                              }))
                            : 1072693248 === i[0]
                            ? ((t.exports = function (t) {
                                  return (e[0] = t), [i[1], i[0]];
                              }),
                              (t.exports.pack = function (t, n) {
                                  return (i[1] = t), (i[0] = n), e[0];
                              }),
                              (t.exports.lo = function (t) {
                                  return (e[0] = t), i[1];
                              }),
                              (t.exports.hi = function (t) {
                                  return (e[0] = t), i[0];
                              }))
                            : (n = !1);
                }
                if (!n) {
                    var r = new Buffer(8);
                    (t.exports = function (t) {
                        return (
                            r.writeDoubleLE(t, 0, !0),
                            [r.readUInt32LE(0, !0), r.readUInt32LE(4, !0)]
                        );
                    }),
                        (t.exports.pack = function (t, n) {
                            return (
                                r.writeUInt32LE(t, 0, !0),
                                r.writeUInt32LE(n, 4, !0),
                                r.readDoubleLE(0, !0)
                            );
                        }),
                        (t.exports.lo = function (t) {
                            return (
                                r.writeDoubleLE(t, 0, !0), r.readUInt32LE(0, !0)
                            );
                        }),
                        (t.exports.hi = function (t) {
                            return (
                                r.writeDoubleLE(t, 0, !0), r.readUInt32LE(4, !0)
                            );
                        });
                }
                (t.exports.sign = function (n) {
                    return t.exports.hi(n) >>> 31;
                }),
                    (t.exports.exponent = function (n) {
                        return ((t.exports.hi(n) << 1) >>> 21) - 1023;
                    }),
                    (t.exports.fraction = function (n) {
                        var e = t.exports.lo(n),
                            i = t.exports.hi(n),
                            r = 1048575 & i;
                        return 2146435072 & i && (r += 1 << 20), [e, r];
                    }),
                    (t.exports.denormalized = function (n) {
                        return !(2146435072 & t.exports.hi(n));
                    });
            },
            7187: (t) => {
                "use strict";
                var n,
                    e = "object" == typeof Reflect ? Reflect : null,
                    i =
                        e && "function" == typeof e.apply
                            ? e.apply
                            : function (t, n, e) {
                                  return Function.prototype.apply.call(t, n, e);
                              };
                n =
                    e && "function" == typeof e.ownKeys
                        ? e.ownKeys
                        : Object.getOwnPropertySymbols
                        ? function (t) {
                              return Object.getOwnPropertyNames(t).concat(
                                  Object.getOwnPropertySymbols(t)
                              );
                          }
                        : function (t) {
                              return Object.getOwnPropertyNames(t);
                          };
                var r =
                    Number.isNaN ||
                    function (t) {
                        return t != t;
                    };
                function o() {
                    o.init.call(this);
                }
                (t.exports = o),
                    (t.exports.once = function (t, n) {
                        return new Promise(function (e, i) {
                            function r(e) {
                                t.removeListener(n, o), i(e);
                            }
                            function o() {
                                "function" == typeof t.removeListener &&
                                    t.removeListener("error", r),
                                    e([].slice.call(arguments));
                            }
                            y(t, n, o, { once: !0 }),
                                "error" !== n &&
                                    (function (t, n, e) {
                                        "function" == typeof t.on &&
                                            y(t, "error", n, { once: !0 });
                                    })(t, r);
                        });
                    }),
                    (o.EventEmitter = o),
                    (o.prototype._events = void 0),
                    (o.prototype._eventsCount = 0),
                    (o.prototype._maxListeners = void 0);
                var s = 10;
                function a(t) {
                    if ("function" != typeof t)
                        throw new TypeError(
                            'The "listener" argument must be of type Function. Received type ' +
                                typeof t
                        );
                }
                function u(t) {
                    return void 0 === t._maxListeners
                        ? o.defaultMaxListeners
                        : t._maxListeners;
                }
                function c(t, n, e, i) {
                    var r, o, s, c;
                    if (
                        (a(e),
                        void 0 === (o = t._events)
                            ? ((o = t._events = Object.create(null)),
                              (t._eventsCount = 0))
                            : (void 0 !== o.newListener &&
                                  (t.emit(
                                      "newListener",
                                      n,
                                      e.listener ? e.listener : e
                                  ),
                                  (o = t._events)),
                              (s = o[n])),
                        void 0 === s)
                    )
                        (s = o[n] = e), ++t._eventsCount;
                    else if (
                        ("function" == typeof s
                            ? (s = o[n] = i ? [e, s] : [s, e])
                            : i
                            ? s.unshift(e)
                            : s.push(e),
                        (r = u(t)) > 0 && s.length > r && !s.warned)
                    ) {
                        s.warned = !0;
                        var l = new Error(
                            "Possible EventEmitter memory leak detected. " +
                                s.length +
                                " " +
                                String(n) +
                                " listeners added. Use emitter.setMaxListeners() to increase limit"
                        );
                        (l.name = "MaxListenersExceededWarning"),
                            (l.emitter = t),
                            (l.type = n),
                            (l.count = s.length),
                            (c = l),
                            console && console.warn && console.warn(c);
                    }
                    return t;
                }
                function l() {
                    if (!this.fired)
                        return (
                            this.target.removeListener(this.type, this.wrapFn),
                            (this.fired = !0),
                            0 === arguments.length
                                ? this.listener.call(this.target)
                                : this.listener.apply(this.target, arguments)
                        );
                }
                function h(t, n, e) {
                    var i = {
                            fired: !1,
                            wrapFn: void 0,
                            target: t,
                            type: n,
                            listener: e,
                        },
                        r = l.bind(i);
                    return (r.listener = e), (i.wrapFn = r), r;
                }
                function f(t, n, e) {
                    var i = t._events;
                    if (void 0 === i) return [];
                    var r = i[n];
                    return void 0 === r
                        ? []
                        : "function" == typeof r
                        ? e
                            ? [r.listener || r]
                            : [r]
                        : e
                        ? (function (t) {
                              for (
                                  var n = new Array(t.length), e = 0;
                                  e < n.length;
                                  ++e
                              )
                                  n[e] = t[e].listener || t[e];
                              return n;
                          })(r)
                        : d(r, r.length);
                }
                function p(t) {
                    var n = this._events;
                    if (void 0 !== n) {
                        var e = n[t];
                        if ("function" == typeof e) return 1;
                        if (void 0 !== e) return e.length;
                    }
                    return 0;
                }
                function d(t, n) {
                    for (var e = new Array(n), i = 0; i < n; ++i) e[i] = t[i];
                    return e;
                }
                function y(t, n, e, i) {
                    if ("function" == typeof t.on)
                        i.once ? t.once(n, e) : t.on(n, e);
                    else {
                        if ("function" != typeof t.addEventListener)
                            throw new TypeError(
                                'The "emitter" argument must be of type EventEmitter. Received type ' +
                                    typeof t
                            );
                        t.addEventListener(n, function r(o) {
                            i.once && t.removeEventListener(n, r), e(o);
                        });
                    }
                }
                Object.defineProperty(o, "defaultMaxListeners", {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                    set: function (t) {
                        if ("number" != typeof t || t < 0 || r(t))
                            throw new RangeError(
                                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                                    t +
                                    "."
                            );
                        s = t;
                    },
                }),
                    (o.init = function () {
                        (void 0 !== this._events &&
                            this._events !==
                                Object.getPrototypeOf(this)._events) ||
                            ((this._events = Object.create(null)),
                            (this._eventsCount = 0)),
                            (this._maxListeners = this._maxListeners || void 0);
                    }),
                    (o.prototype.setMaxListeners = function (t) {
                        if ("number" != typeof t || t < 0 || r(t))
                            throw new RangeError(
                                'The value of "n" is out of range. It must be a non-negative number. Received ' +
                                    t +
                                    "."
                            );
                        return (this._maxListeners = t), this;
                    }),
                    (o.prototype.getMaxListeners = function () {
                        return u(this);
                    }),
                    (o.prototype.emit = function (t) {
                        for (var n = [], e = 1; e < arguments.length; e++)
                            n.push(arguments[e]);
                        var r = "error" === t,
                            o = this._events;
                        if (void 0 !== o) r = r && void 0 === o.error;
                        else if (!r) return !1;
                        if (r) {
                            var s;
                            if (
                                (n.length > 0 && (s = n[0]), s instanceof Error)
                            )
                                throw s;
                            var a = new Error(
                                "Unhandled error." +
                                    (s ? " (" + s.message + ")" : "")
                            );
                            throw ((a.context = s), a);
                        }
                        var u = o[t];
                        if (void 0 === u) return !1;
                        if ("function" == typeof u) i(u, this, n);
                        else {
                            var c = u.length,
                                l = d(u, c);
                            for (e = 0; e < c; ++e) i(l[e], this, n);
                        }
                        return !0;
                    }),
                    (o.prototype.addListener = function (t, n) {
                        return c(this, t, n, !1);
                    }),
                    (o.prototype.on = o.prototype.addListener),
                    (o.prototype.prependListener = function (t, n) {
                        return c(this, t, n, !0);
                    }),
                    (o.prototype.once = function (t, n) {
                        return a(n), this.on(t, h(this, t, n)), this;
                    }),
                    (o.prototype.prependOnceListener = function (t, n) {
                        return (
                            a(n), this.prependListener(t, h(this, t, n)), this
                        );
                    }),
                    (o.prototype.removeListener = function (t, n) {
                        var e, i, r, o, s;
                        if ((a(n), void 0 === (i = this._events))) return this;
                        if (void 0 === (e = i[t])) return this;
                        if (e === n || e.listener === n)
                            0 == --this._eventsCount
                                ? (this._events = Object.create(null))
                                : (delete i[t],
                                  i.removeListener &&
                                      this.emit(
                                          "removeListener",
                                          t,
                                          e.listener || n
                                      ));
                        else if ("function" != typeof e) {
                            for (r = -1, o = e.length - 1; o >= 0; o--)
                                if (e[o] === n || e[o].listener === n) {
                                    (s = e[o].listener), (r = o);
                                    break;
                                }
                            if (r < 0) return this;
                            0 === r
                                ? e.shift()
                                : (function (t, n) {
                                      for (; n + 1 < t.length; n++)
                                          t[n] = t[n + 1];
                                      t.pop();
                                  })(e, r),
                                1 === e.length && (i[t] = e[0]),
                                void 0 !== i.removeListener &&
                                    this.emit("removeListener", t, s || n);
                        }
                        return this;
                    }),
                    (o.prototype.off = o.prototype.removeListener),
                    (o.prototype.removeAllListeners = function (t) {
                        var n, e, i;
                        if (void 0 === (e = this._events)) return this;
                        if (void 0 === e.removeListener)
                            return (
                                0 === arguments.length
                                    ? ((this._events = Object.create(null)),
                                      (this._eventsCount = 0))
                                    : void 0 !== e[t] &&
                                      (0 == --this._eventsCount
                                          ? (this._events = Object.create(null))
                                          : delete e[t]),
                                this
                            );
                        if (0 === arguments.length) {
                            var r,
                                o = Object.keys(e);
                            for (i = 0; i < o.length; ++i)
                                "removeListener" !== (r = o[i]) &&
                                    this.removeAllListeners(r);
                            return (
                                this.removeAllListeners("removeListener"),
                                (this._events = Object.create(null)),
                                (this._eventsCount = 0),
                                this
                            );
                        }
                        if ("function" == typeof (n = e[t]))
                            this.removeListener(t, n);
                        else if (void 0 !== n)
                            for (i = n.length - 1; i >= 0; i--)
                                this.removeListener(t, n[i]);
                        return this;
                    }),
                    (o.prototype.listeners = function (t) {
                        return f(this, t, !0);
                    }),
                    (o.prototype.rawListeners = function (t) {
                        return f(this, t, !1);
                    }),
                    (o.listenerCount = function (t, n) {
                        return "function" == typeof t.listenerCount
                            ? t.listenerCount(n)
                            : p.call(t, n);
                    }),
                    (o.prototype.listenerCount = p),
                    (o.prototype.eventNames = function () {
                        return this._eventsCount > 0 ? n(this._events) : [];
                    });
            },
            4470: (t) => {
                "use strict";
                var n = Object.prototype.hasOwnProperty,
                    e = Object.prototype.toString,
                    i = function (t) {
                        return "function" == typeof Array.isArray
                            ? Array.isArray(t)
                            : "[object Array]" === e.call(t);
                    },
                    r = function (t) {
                        if (!t || "[object Object]" !== e.call(t)) return !1;
                        var i,
                            r = n.call(t, "constructor"),
                            o =
                                t.constructor &&
                                t.constructor.prototype &&
                                n.call(
                                    t.constructor.prototype,
                                    "isPrototypeOf"
                                );
                        if (t.constructor && !r && !o) return !1;
                        for (i in t);
                        return void 0 === i || n.call(t, i);
                    };
                t.exports = function t() {
                    var n,
                        e,
                        o,
                        s,
                        a,
                        u,
                        c = arguments[0],
                        l = 1,
                        h = arguments.length,
                        f = !1;
                    for (
                        "boolean" == typeof c
                            ? ((f = c), (c = arguments[1] || {}), (l = 2))
                            : (("object" != typeof c &&
                                  "function" != typeof c) ||
                                  null == c) &&
                              (c = {});
                        l < h;
                        ++l
                    )
                        if (null != (n = arguments[l]))
                            for (e in n)
                                (o = c[e]),
                                    c !== (s = n[e]) &&
                                        (f && s && (r(s) || (a = i(s)))
                                            ? (a
                                                  ? ((a = !1),
                                                    (u = o && i(o) ? o : []))
                                                  : (u = o && r(o) ? o : {}),
                                              (c[e] = t(f, u, s)))
                                            : void 0 !== s && (c[e] = s));
                    return c;
                };
            },
            5625: (t, n) => {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }),
                    (n.default = function (t) {
                        return (
                            "graphType" in t || (t.graphType = "interval"),
                            "sampler" in t ||
                                (t.sampler =
                                    "interval" !== t.graphType
                                        ? "builtIn"
                                        : "interval"),
                            "fnType" in t || (t.fnType = "linear"),
                            t
                        );
                    });
            },
            9242: function (t, n, e) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(n, "__esModule", { value: !0 });
                const r = i(e(5860)),
                    o = e(4811),
                    s = { interval: o.interval, builtIn: o.builtIn };
                n.default = function (t, n) {
                    const e = (function (t, n) {
                            const e = n.range || [-1 / 0, 1 / 0];
                            return [
                                Math.max(t.domain()[0], e[0]),
                                Math.min(t.domain()[1], e[1]),
                            ];
                        })(t.meta.xScale, n),
                        i = (0, s[n.sampler])(
                            t,
                            n,
                            e,
                            n.nSamples ||
                                Math.min(
                                    r.default.MAX_ITERATIONS,
                                    r.default.DEFAULT_ITERATIONS ||
                                        2 * t.meta.width
                                )
                        );
                    return t.emit("eval", i, n.index, n.isHelper), i;
                };
            },
            5860: (t, n, e) => {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                const i = e(6404),
                    r = {
                        COLORS: [
                            "steelblue",
                            "red",
                            "#05b378",
                            "orange",
                            "#4040e8",
                            "yellow",
                            "brown",
                            "magenta",
                            "cyan",
                        ].map(function (t) {
                            return (0, i.hsl)(t);
                        }),
                        DEFAULT_WIDTH: 550,
                        DEFAULT_HEIGHT: 350,
                        TIP_X_EPS: 1,
                        DEFAULT_ITERATIONS: null,
                        MAX_ITERATIONS: 0,
                    };
                (r.MAX_ITERATIONS = 10 * r.DEFAULT_WIDTH), (n.default = r);
            },
            4407: function (t, n, e) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(n, "__esModule", { value: !0 }),
                    (n.scatter = n.interval = n.polyline = void 0);
                const r = i(e(7505));
                n.polyline = r.default;
                const o = i(e(5345));
                n.interval = o.default;
                const s = i(e(2078));
                n.scatter = s.default;
            },
            5345: function (t, n, e) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(n, "__esModule", { value: !0 });
                const r = e(6811),
                    o = i(e(9242)),
                    s = i(e(5170));
                n.default = function (t) {
                    let n;
                    const e = t.meta.xScale,
                        i = t.meta.yScale;
                    function a(t, e, i, r) {
                        if (i > r) {
                            const t = i;
                            (i = r), (r = t);
                        }
                        const o = Math.min(e, r),
                            s = Math.max(t, i);
                        return s > o ? [-n, 0] : [s, o];
                    }
                    return function u(c) {
                        c.each(function (c) {
                            const l = (u.el = (0, r.select)(this)),
                                h = c.index,
                                f = c.closed,
                                p = (0, o.default)(t, c),
                                d = l.selectAll(":scope > path.line").data(p);
                            n = Math.max(p[0].scaledDx, 1);
                            const y = d
                                    .enter()
                                    .append("path")
                                    .attr("class", "line line-" + h)
                                    .attr("fill", "none"),
                                v = d
                                    .merge(y)
                                    .attr("stroke-width", n)
                                    .attr("stroke", s.default.color(c, h))
                                    .attr("opacity", f ? 0.5 : 1)
                                    .attr("d", function (t) {
                                        return (function (t, r) {
                                            let o = "";
                                            const s = i.range(),
                                                u = Math.min.apply(Math, s),
                                                c = Math.max.apply(Math, s);
                                            for (
                                                let s = 0, l = t.length;
                                                s < l;
                                                s += 1
                                            )
                                                if (t[s]) {
                                                    const l = t[s][0],
                                                        h = t[s][1];
                                                    let f = h.lo,
                                                        p = h.hi;
                                                    r &&
                                                        ((f = Math.min(f, 0)),
                                                        (p = Math.max(p, 0)));
                                                    const d =
                                                            e(l.lo) +
                                                            t.scaledDx / 2,
                                                        y = a(
                                                            u,
                                                            c,
                                                            isFinite(p)
                                                                ? i(p)
                                                                : -1 / 0,
                                                            isFinite(f)
                                                                ? i(f)
                                                                : 1 / 0
                                                        ),
                                                        v = y[0],
                                                        m = y[1];
                                                    (o += " M " + d + " " + v),
                                                        (o +=
                                                            " v " +
                                                            Math.max(m - v, n));
                                                }
                                            return o;
                                        })(t, f);
                                    });
                            if (c.attr)
                                for (let t in c.attr)
                                    c.attr.hasOwnProperty(t) &&
                                        v.attr(t, c.attr[t]);
                            d.exit().remove();
                        });
                    };
                };
            },
            7505: function (t, n, e) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(n, "__esModule", { value: !0 });
                const r = e(6811),
                    o = e(9852),
                    s = i(e(5627)),
                    a = i(e(5170)),
                    u = i(e(9242));
                n.default = function (t) {
                    return function n(e) {
                        e.each(function (e) {
                            const i = (n.el = (0, r.select)(this)),
                                c = e.index,
                                l = (0, u.default)(t, e),
                                h = a.default.color(e, c),
                                f = i.selectAll(":scope > path.line").data(l),
                                p = t.meta.yScale.range();
                            let d = p[0],
                                y = p[1];
                            const v = d - y;
                            function m(n) {
                                return (0,
                                s.default)(t.meta.yScale(n[1]), y, d);
                            }
                            (d += 1e6 * v),
                                (y -= 1e6 * v),
                                e.skipBoundsCheck &&
                                    ((d = 1 / 0), (y = -1 / 0));
                            const g = (0, o.line)()
                                    .curve(o.curveLinear)
                                    .x(function (n) {
                                        return t.meta.xScale(n[0]);
                                    })
                                    .y(m),
                                _ = (0, o.area)()
                                    .x(function (n) {
                                        return t.meta.yScale(n[0]);
                                    })
                                    .y0(t.meta.yScale(0))
                                    .y1(m),
                                x = f
                                    .enter()
                                    .append("path")
                                    .attr("class", "line line-" + c)
                                    .attr("stroke-width", 1)
                                    .attr("stroke-linecap", "round");
                            f.merge(x).each(function () {
                                const n = (0, r.select)(this);
                                let i;
                                if (
                                    (e.closed
                                        ? (n.attr("fill", h),
                                          n.attr("fill-opacity", 0.3),
                                          (i = _))
                                        : (n.attr("fill", "none"), (i = g)),
                                    n
                                        .attr("stroke", h)
                                        .attr("marker-end", function () {
                                            return "vector" === e.fnType
                                                ? "url(#" + t.markerId + ")"
                                                : null;
                                        })
                                        .attr("d", i),
                                    e.attr)
                                )
                                    for (let t in e.attr)
                                        e.attr.hasOwnProperty(t) &&
                                            n.attr(t, e.attr[t]);
                            }),
                                f.exit().remove();
                        });
                    };
                };
            },
            2078: function (t, n, e) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(n, "__esModule", { value: !0 });
                const r = e(6811),
                    o = e(6404),
                    s = i(e(5170)),
                    a = i(e(9242));
                n.default = function (t) {
                    const n = t.meta.xScale,
                        e = t.meta.yScale;
                    return function (i) {
                        i.each(function (i) {
                            let u, c;
                            const l = i.index,
                                h = s.default.color(i, l),
                                f = (0, a.default)(t, i),
                                p = [];
                            for (u = 0; u < f.length; u += 1)
                                for (c = 0; c < f[u].length; c += 1)
                                    p.push(f[u][c]);
                            const d = (0, r.select)(this)
                                    .selectAll(":scope > circle")
                                    .data(p),
                                y = d.enter().append("circle"),
                                v = d
                                    .merge(y)
                                    .attr(
                                        "fill",
                                        (0, o.hsl)(h.toString())
                                            .brighter(1.5)
                                            .hex()
                                    )
                                    .attr("stroke", h)
                                    .attr("opacity", 0.7)
                                    .attr("r", 1)
                                    .attr("cx", function (t) {
                                        return n(t[0]);
                                    })
                                    .attr("cy", function (t) {
                                        return e(t[1]);
                                    });
                            if (i.attr)
                                for (let t in i.attr)
                                    i.attr.hasOwnProperty(t) &&
                                        v.attr(t, i.attr[t]);
                            d.exit().remove();
                        });
                    };
                };
            },
            2586: (t, n, e) => {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                const i = e(9852),
                    r = e(6811);
                n.default = function (t) {
                    const n = t.owner.meta.xScale,
                        e = t.owner.meta.yScale,
                        o = (0, i.line)()
                            .x(function (t) {
                                return t[0];
                            })
                            .y(function (t) {
                                return t[1];
                            });
                    return function (t) {
                        t.each(function () {
                            const t = (0, r.select)(this)
                                    .selectAll("g.annotations")
                                    .data(function (t) {
                                        return t.annotations || [];
                                    }),
                                i = t
                                    .enter()
                                    .append("g")
                                    .attr("class", "annotations"),
                                s = e.range(),
                                a = n.range(),
                                u = t
                                    .merge(i)
                                    .selectAll("path")
                                    .data(function (t) {
                                        return "x" in t
                                            ? [
                                                  [
                                                      [0, s[0]],
                                                      [0, s[1]],
                                                  ],
                                              ]
                                            : [
                                                  [
                                                      [a[0], 0],
                                                      [a[1], 0],
                                                  ],
                                              ];
                                    });
                            u
                                .enter()
                                .append("path")
                                .attr("stroke", "#eee")
                                .attr("d", o),
                                u.exit().remove();
                            const c = t
                                .merge(i)
                                .selectAll("text")
                                .data(function (t) {
                                    return [
                                        { text: t.text || "", hasX: "x" in t },
                                    ];
                                });
                            c
                                .enter()
                                .append("text")
                                .attr("y", function (t) {
                                    return t.hasX ? 3 : 0;
                                })
                                .attr("x", function (t) {
                                    return t.hasX ? 0 : 3;
                                })
                                .attr("dy", function (t) {
                                    return t.hasX ? 5 : -5;
                                })
                                .attr("text-anchor", function (t) {
                                    return t.hasX ? "end" : "";
                                })
                                .attr("transform", function (t) {
                                    return t.hasX ? "rotate(-90)" : "";
                                })
                                .text(function (t) {
                                    return t.text;
                                }),
                                c.exit().remove(),
                                t.merge(i).attr("transform", function (t) {
                                    return "x" in t
                                        ? "translate(" + n(t.x) + ", 0)"
                                        : "translate(0, " + e(t.y) + ")";
                                }),
                                t.exit().remove();
                        });
                    };
                };
            },
            8877: function (t, n, e) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(n, "__esModule", { value: !0 });
                const r = e(6811),
                    o = e(4407),
                    s = e(4945),
                    a = i(e(5625));
                n.default = function (t) {
                    const n = (0, a.default)({
                        isHelper: !0,
                        skipTip: !0,
                        skipBoundsCheck: !0,
                        nSamples: 2,
                        graphType: "polyline",
                    });
                    function e(t) {
                        if (!t.derivative) return [];
                        const e =
                            "number" == typeof t.derivative.x0
                                ? t.derivative.x0
                                : 1 / 0;
                        return (
                            (n.index = t.index),
                            (n.scope = {
                                m: (0, s.builtIn)(t.derivative, "fn", { x: e }),
                                x0: e,
                                y0: (0, s.builtIn)(t, "fn", { x: e }),
                            }),
                            (n.fn = "m * (x - x0) + y0"),
                            [n]
                        );
                    }
                    function i(n) {
                        const e = this;
                        n.derivative &&
                            n.derivative.updateOnMouseMove &&
                            !n.derivative.$$mouseListener &&
                            ((n.derivative.$$mouseListener = function ({
                                x: t,
                            }) {
                                n.derivative && (n.derivative.x0 = t), u(e);
                            }),
                            t.on("tip:update", n.derivative.$$mouseListener));
                    }
                    const u = function (n) {
                        n.each(function (s) {
                            const a = (0, r.select)(this),
                                u = e.call(n, s);
                            i.call(n, s);
                            const c = a.selectAll("g.derivative").data(u),
                                l = c
                                    .enter()
                                    .append("g")
                                    .attr("class", "derivative");
                            c.merge(l).call((0, o.polyline)(t)),
                                c
                                    .merge(l)
                                    .selectAll("path")
                                    .attr("opacity", 0.5),
                                c.exit().remove();
                        });
                    };
                    return u;
                };
            },
            4945: function (t, n, e) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(n, "__esModule", { value: !0 }),
                    (n.interval = n.builtIn = void 0);
                const r = i(e(5248)),
                    o = { interval: i(e(8867)).default, builtIn: r.default };
                function s(t) {
                    return function (n, i, r) {
                        return (
                            (function (n, i) {
                                const r = n[i],
                                    s = t + "_Expression_" + i,
                                    a = t + "_Compiled_" + i;
                                r !== n[s] &&
                                    ((n[s] = r),
                                    (n[a] = (function (n) {
                                        if ("string" == typeof n) {
                                            const i = o[t](n);
                                            return e.g.math && "builtIn" === t
                                                ? { eval: i.evaluate || i.eval }
                                                : i;
                                        }
                                        if ("function" == typeof n)
                                            return { eval: n };
                                        throw Error(
                                            "expression must be a string or a function"
                                        );
                                    })(r)));
                            })(n, i),
                            (function (n, e) {
                                return n[t + "_Compiled_" + e];
                            })(n, i).eval(Object.assign({}, n.scope || {}, r))
                        );
                    };
                }
                e.g.math && (o.builtIn = e.g.math.compile);
                const a = s("builtIn");
                n.builtIn = a;
                const u = s("interval");
                n.interval = u;
            },
            2736: function (t, n, e) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(n, "__esModule", { value: !0 });
                const r = e(6811),
                    o = i(e(8877)),
                    s = i(e(3814));
                n.default = function (t) {
                    return function (n) {
                        n.each(function () {
                            const n = (0, r.select)(this);
                            n.call((0, o.default)(t)),
                                n.call((0, s.default)(t));
                        });
                    };
                };
            },
            3814: function (t, n, e) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(n, "__esModule", { value: !0 });
                const r = e(6811),
                    o = e(4945),
                    s = i(e(5625)),
                    a = e(4407);
                n.default = function (t) {
                    const n = (0, s.default)({
                        isHelper: !0,
                        skipTip: !0,
                        skipBoundsCheck: !0,
                        nSamples: 2,
                        graphType: "polyline",
                    });
                    function e(t, n) {
                        if (!("x0" in n))
                            throw Error(
                                "secant must have the property `x0` defined"
                            );
                        n.scope = n.scope || {};
                        const e = n.x0,
                            i = "number" == typeof n.x1 ? n.x1 : 1 / 0;
                        var r;
                        Object.assign(n.scope, {
                            x0: e,
                            x1: i,
                            y0: (0, o.builtIn)(t, "fn", { x: e }),
                            y1: (0, o.builtIn)(t, "fn", { x: i }),
                        }),
                            ((r = n.scope).m = (r.y1 - r.y0) / (r.x1 - r.x0));
                    }
                    function i(t, n) {
                        e(t, n), (n.fn = "m * (x - x0) + y0");
                    }
                    function u(n, i) {
                        const r = this;
                        i.updateOnMouseMove &&
                            !i.$$mouseListener &&
                            ((i.$$mouseListener = function ({ x: t }) {
                                (i.x1 = t), e(n, i), l(r);
                            }),
                            t.on("tip:update", i.$$mouseListener));
                    }
                    function c(t) {
                        const e = this,
                            r = [];
                        t.secants = t.secants || [];
                        for (let o = 0; o < t.secants.length; o += 1) {
                            const s = (t.secants[o] = Object.assign(
                                {},
                                n,
                                t.secants[o]
                            ));
                            (s.index = t.index),
                                s.fn || (i.call(e, t, s), u.call(e, t, s)),
                                r.push(s);
                        }
                        return r;
                    }
                    const l = function (n) {
                        n.each(function (e) {
                            const i = (0, r.select)(this),
                                o = c.call(n, e),
                                s = i.selectAll("g.secant").data(o),
                                u = s
                                    .enter()
                                    .append("g")
                                    .attr("class", "secant");
                            s.merge(u).call((0, a.polyline)(t)),
                                s
                                    .merge(u)
                                    .selectAll("path")
                                    .attr("opacity", 0.5),
                                s.exit().remove();
                        });
                    };
                    return l;
                };
            },
            2572: function (t, n, e) {
                "use strict";
                var i =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (t, n, e, i) {
                                  void 0 === i && (i = e);
                                  var r = Object.getOwnPropertyDescriptor(n, e);
                                  (r &&
                                      !("get" in r
                                          ? !n.__esModule
                                          : r.writable || r.configurable)) ||
                                      (r = {
                                          enumerable: !0,
                                          get: function () {
                                              return n[e];
                                          },
                                      }),
                                      Object.defineProperty(t, i, r);
                              }
                            : function (t, n, e, i) {
                                  void 0 === i && (i = e), (t[i] = n[e]);
                              }),
                    r =
                        (this && this.__setModuleDefault) ||
                        (Object.create
                            ? function (t, n) {
                                  Object.defineProperty(t, "default", {
                                      enumerable: !0,
                                      value: n,
                                  });
                              }
                            : function (t, n) {
                                  t.default = n;
                              }),
                    o =
                        (this && this.__importStar) ||
                        function (t) {
                            if (t && t.__esModule) return t;
                            var n = {};
                            if (null != t)
                                for (var e in t)
                                    "default" !== e &&
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            e
                                        ) &&
                                        i(n, t, e);
                            return r(n, t), n;
                        },
                    s =
                        (this && this.__importDefault) ||
                        function (t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                Object.defineProperty(n, "__esModule", { value: !0 }),
                    (n.Chart = void 0);
                const a = e(9852),
                    u = e(5594),
                    c = e(7673),
                    l = e(6216),
                    h = e(4446),
                    f = e(6811),
                    p = e(8641),
                    d = s(e(7187)),
                    y = s(e(2586)),
                    v = s(e(9126)),
                    m = s(e(2736)),
                    g = s(e(5625)),
                    _ = s(e(5860)),
                    x = o(e(4407)),
                    w = o(e(4945));
                e(8781);
                const b = { linear: c.scaleLinear, log: c.scaleLog };
                class M extends d.default.EventEmitter {
                    constructor(t) {
                        super();
                        const n = Math.random(),
                            e = String.fromCharCode(Math.floor(26 * n) + 97);
                        (this.options = t),
                            (this.id = e + n.toString(16).substr(2)),
                            (this.options.id = this.id),
                            (this.markerId = this.id + "-marker"),
                            (M.cache[this.id] = this),
                            (this.linkedGraphs = [this]),
                            (this.meta = {}),
                            this.setUpEventListeners();
                    }
                    build() {
                        return (
                            this.internalVars(), this.drawGraphWrapper(), this
                        );
                    }
                    getDraggableNode() {
                        return (0, f.select)(this.options.target)
                            .select(".zoom-and-drag")
                            .node();
                    }
                    getEmitInstance() {
                        let t = this;
                        const n = this.getDraggableNode();
                        return n && (t = n.instance), t;
                    }
                    internalVars() {
                        const t = (this.meta.margin = {
                            left: 40,
                            right: 20,
                            top: 20,
                            bottom: 20,
                        });
                        this.options.title && (this.meta.margin.top = 40),
                            (this.meta.width =
                                (this.options.width ||
                                    _.default.DEFAULT_WIDTH) -
                                t.left -
                                t.right),
                            (this.meta.height =
                                (this.options.height ||
                                    _.default.DEFAULT_HEIGHT) -
                                t.top -
                                t.bottom),
                            this.initializeAxes();
                    }
                    initializeAxes() {
                        const t = this,
                            n = (0, u.format)("~s");
                        function e(t) {
                            return Math.abs(t) - Math.floor(Math.abs(t)) > 0
                                ? t.toString()
                                : n(t);
                        }
                        (0, u.format)("~e"),
                            (this.options.xAxis = this.options.xAxis || {}),
                            (this.options.xAxis.type =
                                this.options.xAxis.type || "linear"),
                            (this.options.yAxis = this.options.yAxis || {}),
                            (this.options.yAxis.type =
                                this.options.yAxis.type || "linear");
                        const i = (this.meta.xDomain = (function (t) {
                                if (t.domain) return t.domain;
                                if ("linear" === t.type) {
                                    const t = 12;
                                    return [-t / 2, t / 2];
                                }
                                if ("log" === t.type) return [1, 10];
                                throw Error(
                                    "axis type " + t.type + " unsupported"
                                );
                            })(this.options.xAxis)),
                            r = (this.meta.yDomain = (function (n) {
                                if (n.domain) return n.domain;
                                const e = (function (n) {
                                    const e = n[1] - n[0];
                                    return (t.meta.height * e) / t.meta.width;
                                })(i);
                                if ("linear" === n.type) return [-e / 2, e / 2];
                                if ("log" === n.type) return [1, 10];
                                throw Error(
                                    "axis type " + n.type + " unsupported"
                                );
                            })(this.options.yAxis));
                        this.meta.xScale ||
                            (this.meta.xScale = b[this.options.xAxis.type]()),
                            this.meta.xScale
                                .domain(i)
                                .range(
                                    this.options.xAxis.invert
                                        ? [this.meta.width, 0]
                                        : [0, this.meta.width]
                                ),
                            this.meta.yScale ||
                                (this.meta.yScale =
                                    b[this.options.yAxis.type]()),
                            this.meta.yScale
                                .domain(r)
                                .range(
                                    this.options.yAxis.invert
                                        ? [0, this.meta.height]
                                        : [this.meta.height, 0]
                                ),
                            this.meta.xAxis ||
                                (this.meta.xAxis = (0, l.axisBottom)(
                                    this.meta.xScale
                                )),
                            this.meta.xAxis
                                .tickSize(
                                    this.options.grid ? -this.meta.height : 0
                                )
                                .tickFormat(e),
                            this.meta.yAxis ||
                                (this.meta.yAxis = (0, l.axisLeft)(
                                    this.meta.yScale
                                )),
                            this.meta.yAxis
                                .tickSize(
                                    this.options.grid ? -this.meta.width : 0
                                )
                                .tickFormat(e),
                            (this.line = (0, a.line)()
                                .x(function (n) {
                                    return t.meta.xScale(n[0]);
                                })
                                .y(function (n) {
                                    return t.meta.yScale(n[1]);
                                }));
                    }
                    drawGraphWrapper() {
                        const t = (this.root = (0, f.select)(
                            this.options.target
                        )
                            .selectAll("svg")
                            .data([this.options]));
                        (this.root.enter = t
                            .enter()
                            .append("svg")
                            .attr("class", "function-plot")
                            .attr("font-size", this.getFontSize())),
                            t
                                .merge(this.root.enter)
                                .attr(
                                    "width",
                                    this.meta.width +
                                        this.meta.margin.left +
                                        this.meta.margin.right
                                )
                                .attr(
                                    "height",
                                    this.meta.height +
                                        this.meta.margin.top +
                                        this.meta.margin.bottom
                                ),
                            this.buildTitle(),
                            this.buildLegend(),
                            this.buildCanvas(),
                            this.buildClip(),
                            this.buildAxis(),
                            this.buildAxisLabel(),
                            this.draw();
                        const n = (this.tip = (0, v.default)(
                            Object.assign(this.options.tip || {}, {
                                owner: this,
                            })
                        ));
                        this.canvas.merge(this.canvas.enter).call(n),
                            this.buildZoomHelper(),
                            this.setUpPlugins();
                    }
                    buildTitle() {
                        const t = this.root
                            .merge(this.root.enter)
                            .selectAll("text.title")
                            .data(function (t) {
                                return [t.title].filter(Boolean);
                            });
                        t
                            .enter()
                            .append("text")
                            .merge(t)
                            .attr("class", "title")
                            .attr("y", this.meta.margin.top / 2)
                            .attr(
                                "x",
                                this.meta.margin.left + this.meta.width / 2
                            )
                            .attr("font-size", 25)
                            .attr("text-anchor", "middle")
                            .attr("alignment-baseline", "middle")
                            .text(this.options.title),
                            t.exit().remove();
                    }
                    buildLegend() {
                        this.root.enter
                            .append("text")
                            .attr("class", "top-right-legend")
                            .attr("text-anchor", "end"),
                            this.root
                                .merge(this.root.enter)
                                .select(".top-right-legend")
                                .attr("y", this.meta.margin.top / 2)
                                .attr(
                                    "x",
                                    this.meta.width + this.meta.margin.left
                                );
                    }
                    buildCanvas() {
                        const t = (this.canvas = this.root
                            .merge(this.root.enter)
                            .selectAll(".canvas")
                            .data(function (t) {
                                return [t];
                            }));
                        this.canvas.enter = t
                            .enter()
                            .append("g")
                            .attr("class", "canvas");
                    }
                    buildClip() {
                        const t = this.id,
                            n = this.canvas.enter.append("defs");
                        n
                            .append("clipPath")
                            .attr("id", "function-plot-clip-" + t)
                            .append("rect")
                            .attr("class", "clip static-clip"),
                            this.canvas
                                .merge(this.canvas.enter)
                                .selectAll(".clip")
                                .attr("width", this.meta.width)
                                .attr("height", this.meta.height),
                            n
                                .append("clipPath")
                                .append("marker")
                                .attr("id", this.markerId)
                                .attr("viewBox", "0 -5 10 10")
                                .attr("refX", 10)
                                .attr("markerWidth", 5)
                                .attr("markerHeight", 5)
                                .attr("orient", "auto")
                                .append("svg:path")
                                .attr("d", "M0,-5L10,0L0,5L0,0")
                                .attr("stroke-width", "0px")
                                .attr("fill-opacity", 1)
                                .attr("fill", "#777");
                    }
                    buildAxis() {
                        const t = this.canvas.enter;
                        t.append("g").attr("class", "x axis"),
                            t.append("g").attr("class", "y axis"),
                            this.canvas
                                .merge(this.canvas.enter)
                                .select(".x.axis")
                                .attr(
                                    "transform",
                                    "translate(0," + this.meta.height + ")"
                                )
                                .call(this.meta.xAxis),
                            this.canvas
                                .merge(this.canvas.enter)
                                .select(".y.axis")
                                .call(this.meta.yAxis);
                    }
                    buildAxisLabel() {
                        const t = this.canvas,
                            n = t
                                .merge(t.enter)
                                .selectAll("text.x.axis-label")
                                .data(function (t) {
                                    return [t.xAxis.label].filter(Boolean);
                                }),
                            e = n
                                .enter()
                                .append("text")
                                .attr("class", "x axis-label")
                                .attr("text-anchor", "end");
                        n
                            .merge(e)
                            .attr("x", this.meta.width)
                            .attr("y", this.meta.height - 6)
                            .text(function (t) {
                                return t;
                            }),
                            n.exit().remove();
                        const i = t
                                .merge(t.enter)
                                .selectAll("text.y.axis-label")
                                .data(function (t) {
                                    return [t.yAxis.label].filter(Boolean);
                                }),
                            r = i
                                .enter()
                                .append("text")
                                .attr("class", "y axis-label")
                                .attr("y", 6)
                                .attr("dy", ".75em")
                                .attr("text-anchor", "end")
                                .attr("transform", "rotate(-90)");
                        i.merge(r).text(function (t) {
                            return t;
                        }),
                            i.exit().remove();
                    }
                    buildContent() {
                        const t = this,
                            n = this.canvas;
                        n.merge(n.enter).attr(
                            "transform",
                            "translate(" +
                                this.meta.margin.left +
                                "," +
                                this.meta.margin.top +
                                ")"
                        );
                        const e = (this.content = n
                                .merge(n.enter)
                                .selectAll(":scope > g.content")
                                .data(function (t) {
                                    return [t];
                                })),
                            i = e
                                .enter()
                                .append("g")
                                .attr(
                                    "clip-path",
                                    "url(#function-plot-clip-" + this.id + ")"
                                )
                                .attr("class", "content");
                        if ("linear" === this.options.xAxis.type) {
                            const t = e
                                    .merge(i)
                                    .selectAll(":scope > path.y.origin")
                                    .data([
                                        [
                                            [0, this.meta.yScale.domain()[0]],
                                            [0, this.meta.yScale.domain()[1]],
                                        ],
                                    ]),
                                n = t
                                    .enter()
                                    .append("path")
                                    .attr("class", "y origin")
                                    .attr("stroke", "black")
                                    .attr("opacity", 0.2);
                            t.merge(n).attr("d", this.line);
                        }
                        if ("linear" === this.options.yAxis.type) {
                            const t = e
                                    .merge(i)
                                    .selectAll(":scope > path.x.origin")
                                    .data([
                                        [
                                            [this.meta.xScale.domain()[0], 0],
                                            [this.meta.xScale.domain()[1], 0],
                                        ],
                                    ]),
                                n = t
                                    .enter()
                                    .append("path")
                                    .attr("class", "x origin")
                                    .attr("stroke", "black")
                                    .attr("opacity", 0.2);
                            t.merge(n).attr("d", this.line);
                        }
                        e.merge(i).call((0, y.default)({ owner: t }));
                        const r = e
                                .merge(i)
                                .selectAll(":scope > g.graph")
                                .data((t) => t.data.map(g.default)),
                            o = r.enter().append("g").attr("class", "graph");
                        r.merge(o).each(function (n, e) {
                            n.index = e;
                            const i = (0, f.select)(this);
                            i.call(x[n.graphType](t)),
                                i.call((0, m.default)(t));
                        });
                    }
                    buildZoomHelper() {
                        const t = this;
                        this.meta.zoomBehavior ||
                            ((this.meta.zoomBehavior = (0, h.zoom)().on(
                                "zoom",
                                function (n) {
                                    t.getEmitInstance().emit("all:zoom", n);
                                }
                            )),
                            (t.meta.zoomBehavior.xScale = t.meta.xScale.copy()),
                            (t.meta.zoomBehavior.yScale =
                                t.meta.yScale.copy())),
                            t.meta.zoomBehavior.xScale.range(
                                t.meta.xScale.range()
                            ),
                            t.meta.zoomBehavior.yScale.range(
                                t.meta.yScale.range()
                            ),
                            this.canvas.enter
                                .append("rect")
                                .call(this.meta.zoomBehavior)
                                .attr("class", "zoom-and-drag")
                                .style("fill", "none")
                                .style("pointer-events", "all")
                                .on("mouseover", function (n) {
                                    t.getEmitInstance().emit(
                                        "all:mouseover",
                                        n
                                    );
                                })
                                .on("mouseout", function (n) {
                                    t.getEmitInstance().emit("all:mouseout", n);
                                })
                                .on("mousemove", function (n) {
                                    t.getEmitInstance().emit(
                                        "all:mousemove",
                                        n
                                    );
                                }),
                            (this.draggable = this.canvas
                                .merge(this.canvas.enter)
                                .select(".zoom-and-drag")
                                .call((n) => {
                                    n.node() && (n.node().instance = t);
                                })
                                .attr("width", this.meta.width)
                                .attr("height", this.meta.height));
                    }
                    setUpPlugins() {
                        const t = this.options.plugins || [],
                            n = this;
                        t.forEach(function (t) {
                            t(n);
                        });
                    }
                    addLink() {
                        for (let t = 0; t < arguments.length; t += 1)
                            this.linkedGraphs.push(arguments[t]);
                    }
                    updateAxes() {
                        const t = this,
                            n = t.canvas.merge(t.canvas.enter);
                        n.select(".x.axis").call(t.meta.xAxis),
                            n.select(".y.axis").call(t.meta.yAxis),
                            n
                                .selectAll(".axis path, .axis line")
                                .attr("fill", "none")
                                .attr("stroke", "black")
                                .attr("shape-rendering", "crispedges")
                                .attr("opacity", 0.1);
                    }
                    syncOptions() {
                        (this.options.xAxis.domain = this.meta.xScale.domain()),
                            (this.options.yAxis.domain =
                                this.meta.yScale.domain());
                    }
                    getFontSize() {
                        return Math.max(
                            Math.max(this.meta.width, this.meta.height) / 50,
                            8
                        );
                    }
                    draw() {
                        const t = this;
                        t.emit("before:draw"),
                            t.syncOptions(),
                            t.updateAxes(),
                            t.buildContent(),
                            t.emit("after:draw");
                    }
                    setUpEventListeners() {
                        const t = this,
                            n = this.getEmitInstance();
                        n && n.removeAllListeners();
                        const e = {
                                mousemove: function (n) {
                                    t.tip.move(n);
                                },
                                mouseover: function () {
                                    t.tip.show();
                                },
                                mouseout: function () {
                                    t.tip.hide();
                                },
                                zoom: function ({ transform: n }) {
                                    if (t.options.disableZoom) return;
                                    const e = n
                                            .rescaleX(
                                                t.meta.zoomBehavior.xScale
                                            )
                                            .interpolate(p.interpolateRound),
                                        i = n
                                            .rescaleY(
                                                t.meta.zoomBehavior.yScale
                                            )
                                            .interpolate(p.interpolateRound);
                                    t.meta.xScale
                                        .domain(e.domain())
                                        .range(e.range()),
                                        t.meta.yScale
                                            .domain(i.domain())
                                            .range(i.range());
                                },
                                "tip:update": function ({
                                    x: n,
                                    y: e,
                                    index: i,
                                }) {
                                    const r = t.root.merge(t.root.enter).datum()
                                            .data[i],
                                        o = r.title || "",
                                        s =
                                            r.renderer ||
                                            function (t, n) {
                                                return (
                                                    t.toFixed(3) +
                                                    ", " +
                                                    n.toFixed(3)
                                                );
                                            },
                                        a = [];
                                    o && a.push(o),
                                        a.push(s(n, e)),
                                        t.root
                                            .select(".top-right-legend")
                                            .attr("fill", _.default.COLORS[i])
                                            .text(a.join(" "));
                                },
                            },
                            i = {
                                mousemove: function (n) {
                                    const e = (0, f.pointer)(
                                            n,
                                            t.draggable.node()
                                        ),
                                        i = {
                                            x: t.meta.xScale.invert(e[0]),
                                            y: t.meta.yScale.invert(e[1]),
                                        };
                                    t.linkedGraphs.forEach(function (t) {
                                        t.emit("before:mousemove", i),
                                            t.emit("mousemove", i);
                                    });
                                },
                                zoom: function (n) {
                                    t.linkedGraphs.forEach(function (e) {
                                        (e.draggable.node().__zoom =
                                            t.draggable.node().__zoom),
                                            e.emit("zoom", n),
                                            e.draw();
                                    }),
                                        t.emit("all:mousemove", n);
                                },
                            };
                        Object.keys(e).forEach(function (n) {
                            !i[n] &&
                                t.on("all:" + n, function () {
                                    const e =
                                        Array.prototype.slice.call(arguments);
                                    t.linkedGraphs.forEach(function (t) {
                                        const i = e.slice();
                                        i.unshift(n), t.emit.apply(t, i);
                                    });
                                }),
                                t.on(n, e[n]);
                        }),
                            Object.keys(i).forEach(function (n) {
                                t.on("all:" + n, i[n]);
                            });
                    }
                }
                function T(t = { target: null }) {
                    t.data = t.data || [];
                    let n = M.cache[t.id];
                    return n || (n = new M(t)), n.build();
                }
                (n.Chart = M),
                    (M.cache = {}),
                    (T.globals = _.default),
                    (T.$eval = w),
                    (T.graphTypes = x),
                    (n.default = T);
            },
            8781: () => {
                "undefined" != typeof window &&
                    (function (t, n) {
                        try {
                            t.querySelector(":scope body");
                        } catch (e) {
                            ["querySelector", "querySelectorAll"].forEach(
                                function (e) {
                                    const i = n[e];
                                    n[e] = function (n) {
                                        if (/(^|,)\s*:scope/.test(n)) {
                                            const i = this.id;
                                            (this.id = "ID_" + Date.now()),
                                                (n = n.replace(
                                                    /((^|,)\s*):scope/g,
                                                    "$1#" + this.id
                                                ));
                                            const r = t[e](n);
                                            return (this.id = i), r;
                                        }
                                        return i.call(this, n);
                                    };
                                }
                            );
                        }
                    })(window.document, Element.prototype);
            },
            1296: function (t, n, e) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(n, "__esModule", { value: !0 });
                const r = i(e(5627)),
                    o = i(e(5170)),
                    s = e(4945);
                function a(t, n, e, i, r) {
                    if (!r) return { asymptote: !0, d0: t, d1: n };
                    const u = t[0],
                        c = n[0],
                        l = o.default.linspace(u, c, 10);
                    let h, f;
                    for (let t = 0; t < 10; t += 1) {
                        const n = l[t],
                            u = (0, s.builtIn)(e, "fn", { x: n });
                        if (t && h) {
                            const t = u - h;
                            if (o.default.sgn(t) === i)
                                return a([f, h], [n, u], e, i, r - 1);
                        }
                        (h = u), (f = n);
                    }
                    return { asymptote: !1, d0: t, d1: n };
                }
                function u(t, n, e, i) {
                    const u = o.default.space(t, e, i),
                        c = t.meta.yScale.domain(),
                        l = c[1] - c[0],
                        h = c[0] - 1e5 * l,
                        f = c[1] + 1e5 * l;
                    let p = [];
                    for (let t = 0; t < u.length; t += 1) {
                        const e = u[t],
                            i = (0, s.builtIn)(n, "fn", { x: e });
                        o.default.isValidNumber(e) &&
                            o.default.isValidNumber(i) &&
                            p.push([e, (0, r.default)(i, h, f)]);
                    }
                    return (
                        (p = (function (t, n, e) {
                            let i,
                                r,
                                s,
                                u = [];
                            const c = [],
                                l = t.meta.yScale.domain(),
                                h = l[0],
                                f = l[1];
                            function p(t) {
                                return (
                                    (t[1] = Math.min(t[1], f)),
                                    (t[1] = Math.max(t[1], h)),
                                    t
                                );
                            }
                            for (
                                e[0] &&
                                    (u.push(e[0]),
                                    (s = e[1][0] - e[0][0]),
                                    (r = o.default.sgn(e[1][1] - e[0][1]))),
                                    i = 1;
                                i < e.length;

                            ) {
                                const t = e[i - 1][1],
                                    l = e[i][1] - t,
                                    h = o.default.sgn(l);
                                if (r !== h && Math.abs(l / s) > 1) {
                                    const t = a(e[i - 1], e[i], n, h, 3);
                                    t.asymptote &&
                                        (u.push(p(t.d0)),
                                        c.push(u),
                                        (u = [p(t.d1)]));
                                }
                                (r = h), u.push(e[i]), ++i;
                            }
                            return u.length && c.push(u), c;
                        })(t, n, p)),
                        p
                    );
                }
                function c(t, n, e, i) {
                    const r = n.range || [0, 2 * Math.PI],
                        a = o.default.space(t, r, i),
                        u = [];
                    for (let t = 0; t < a.length; t += 1) {
                        const e = a[t],
                            i = (0, s.builtIn)(n, "x", { t: e }),
                            r = (0, s.builtIn)(n, "y", { t: e });
                        u.push([i, r]);
                    }
                    return [u];
                }
                function l(t, n, e, i) {
                    const r = n.range || [-Math.PI, Math.PI],
                        a = o.default.space(t, r, i),
                        u = [];
                    for (let t = 0; t < a.length; t += 1) {
                        const e = a[t],
                            i = (0, s.builtIn)(n, "r", { theta: e }),
                            r = i * Math.cos(e),
                            o = i * Math.sin(e);
                        u.push([r, o]);
                    }
                    return [u];
                }
                function h(t, n, e, i) {
                    return [n.points];
                }
                function f(t, n, e, i) {
                    return (
                        (n.offset = n.offset || [0, 0]),
                        [
                            [
                                n.offset,
                                [
                                    n.vector[0] + n.offset[0],
                                    n.vector[1] + n.offset[1],
                                ],
                            ],
                        ]
                    );
                }
                n.default = function (t, n, e, i) {
                    const r = {
                        parametric: c,
                        polar: l,
                        points: h,
                        vector: f,
                        linear: u,
                    };
                    if (!(n.fnType in r))
                        throw Error(
                            n.fnType +
                                " is not supported in the `builtIn` sampler"
                        );
                    return r[n.fnType].apply(null, arguments);
                };
            },
            4811: function (t, n, e) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(n, "__esModule", { value: !0 }),
                    (n.interval = n.builtIn = void 0);
                const r = i(e(1296));
                n.builtIn = r.default;
                const o = i(e(528));
                n.interval = o.default;
            },
            528: function (t, n, e) {
                "use strict";
                var i =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (t, n, e, i) {
                                  void 0 === i && (i = e);
                                  var r = Object.getOwnPropertyDescriptor(n, e);
                                  (r &&
                                      !("get" in r
                                          ? !n.__esModule
                                          : r.writable || r.configurable)) ||
                                      (r = {
                                          enumerable: !0,
                                          get: function () {
                                              return n[e];
                                          },
                                      }),
                                      Object.defineProperty(t, i, r);
                              }
                            : function (t, n, e, i) {
                                  void 0 === i && (i = e), (t[i] = n[e]);
                              }),
                    r =
                        (this && this.__setModuleDefault) ||
                        (Object.create
                            ? function (t, n) {
                                  Object.defineProperty(t, "default", {
                                      enumerable: !0,
                                      value: n,
                                  });
                              }
                            : function (t, n) {
                                  t.default = n;
                              }),
                    o =
                        (this && this.__importStar) ||
                        function (t) {
                            if (t && t.__esModule) return t;
                            var n = {};
                            if (null != t)
                                for (var e in t)
                                    "default" !== e &&
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            e
                                        ) &&
                                        i(n, t, e);
                            return r(n, t), n;
                        },
                    s =
                        (this && this.__importDefault) ||
                        function (t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                Object.defineProperty(n, "__esModule", { value: !0 });
                const a = o(e(8867)),
                    u = e(4945),
                    c = s(e(5170));
                function l(t, n, e, i) {
                    const r = c.default.space(t, e, i),
                        o = t.meta.xScale,
                        s = t.meta.yScale,
                        l = s.domain()[0],
                        h = s.domain()[1],
                        f = [];
                    let p;
                    for (p = 0; p < r.length - 1; p += 1) {
                        const t = { lo: r[p], hi: r[p + 1] },
                            e = (0, u.interval)(n, "fn", { x: t });
                        a.Interval.isEmpty(e) ||
                            a.Interval.isWhole(e) ||
                            f.push([t, e]),
                            a.Interval.isWhole(e) && f.push(null);
                    }
                    for (p = 1; p < f.length - 1; p += 1)
                        if (!f[p]) {
                            const t = f[p - 1],
                                n = f[p + 1];
                            t &&
                                n &&
                                !a.Interval.intervalsOverlap(t[1], n[1]) &&
                                (t[1].lo > n[1].hi &&
                                    ((t[1].hi = Math.max(h, t[1].hi)),
                                    (n[1].lo = Math.min(l, n[1].lo))),
                                t[1].hi < n[1].lo &&
                                    ((t[1].lo = Math.min(l, t[1].lo)),
                                    (n[1].hi = Math.max(h, n[1].hi))));
                        }
                    return (f.scaledDx = o(r[1]) - o(r[0])), [f];
                }
                let h;
                function f(t, n, e) {
                    const i = (0, u.interval)(e, "fn", { x: t, y: n });
                    if (!a.Interval.zeroIn(i)) return this;
                    if (
                        (function (t, n) {
                            return a.Interval.width(t) < h;
                        })(t)
                    )
                        return this.push([t, n]), this;
                    const r = t.lo + (t.hi - t.lo) / 2,
                        o = n.lo + (n.hi - n.lo) / 2,
                        s = { lo: r, hi: t.hi },
                        c = { lo: t.lo, hi: r },
                        l = { lo: o, hi: n.hi },
                        p = { lo: n.lo, hi: o };
                    f.call(this, s, l, e),
                        f.call(this, s, p, e),
                        f.call(this, c, l, e),
                        f.call(this, c, p, e);
                }
                function p(t, n) {
                    const e = t.meta.xScale,
                        i = t.meta.xScale.domain(),
                        r = t.meta.yScale.domain(),
                        o = { lo: i[0], hi: i[1] },
                        s = { lo: r[0], hi: r[1] },
                        a = [];
                    return (
                        (h = e.invert(1) - e.invert(0)),
                        f.call(a, o, s, n),
                        (a.scaledDx = 1),
                        [a]
                    );
                }
                a.default.policies.disableRounding(),
                    (n.default = function (t, n, e, i) {
                        const r = { implicit: p, linear: l };
                        if (!r.hasOwnProperty(n.fnType))
                            throw Error(
                                n.fnType +
                                    " is not supported in the `interval` sampler"
                            );
                        return r[n.fnType].apply(null, arguments);
                    });
            },
            9126: function (t, n, e) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(n, "__esModule", { value: !0 });
                const r = e(9852),
                    o = e(6811),
                    s = i(e(5627)),
                    a = i(e(5170)),
                    u = i(e(5860)),
                    c = e(4945);
                n.default = function (t) {
                    t = Object.assign(
                        {
                            xLine: !1,
                            yLine: !1,
                            renderer: function (t, n) {
                                return (
                                    "(" +
                                    t.toFixed(3) +
                                    ", " +
                                    n.toFixed(3) +
                                    ")"
                                );
                            },
                            owner: null,
                        },
                        t
                    );
                    const n = 20,
                        e = (0, r.line)()
                            .x(function (t) {
                                return t[0];
                            })
                            .y(function (t) {
                                return t[1];
                            });
                    function i(t, n) {
                        return t
                            .append("path")
                            .datum(n)
                            .attr("stroke", "grey")
                            .attr("stroke-dasharray", "5,5")
                            .attr("opacity", 0.5)
                            .attr("d", e);
                    }
                    let l, h;
                    function f(e) {
                        const r = e.selectAll("g.tip").data(function (t) {
                                return [t];
                            }),
                            s = r
                                .enter()
                                .append("g")
                                .attr("class", "tip")
                                .attr(
                                    "clip-path",
                                    "url(#function-plot-clip-" +
                                        t.owner.id +
                                        ")"
                                );
                        (l = r
                            .merge(s)
                            .selectAll("g.inner-tip")
                            .data(function (t) {
                                return [t];
                            })),
                            (h = l
                                .enter()
                                .append("g")
                                .attr("class", "inner-tip")
                                .style("display", "none")
                                .each(function () {
                                    const e = (0, o.select)(this);
                                    i(e, [
                                        [0, -t.owner.meta.height - n],
                                        [0, t.owner.meta.height + n],
                                    ])
                                        .attr("class", "tip-x-line")
                                        .style("display", "none"),
                                        i(e, [
                                            [-t.owner.meta.width - n, 0],
                                            [t.owner.meta.width + n, 0],
                                        ])
                                            .attr("class", "tip-y-line")
                                            .style("display", "none"),
                                        e.append("circle").attr("r", 3),
                                        e
                                            .append("text")
                                            .attr(
                                                "transform",
                                                "translate(5,-5)"
                                            );
                                })),
                            l
                                .merge(h)
                                .selectAll(".tip-x-line")
                                .style("display", t.xLine ? null : "none"),
                            l
                                .merge(h)
                                .selectAll(".tip-y-line")
                                .style("display", t.yLine ? null : "none");
                    }
                    return (
                        (f.move = function (e) {
                            let i,
                                r,
                                o,
                                p = 1 / 0,
                                d = -1;
                            const y = l.merge(h),
                                v = 1e8,
                                m = t.owner.meta,
                                g = y.datum().data,
                                _ = m.xScale,
                                x = m.yScale,
                                w = m.width,
                                b = m.height,
                                M = e.x,
                                T = e.y;
                            for (i = 0; i < g.length; i += 1) {
                                if (g[i].skipTip || "linear" !== g[i].fnType)
                                    continue;
                                const t = g[i].range || [-v, v];
                                let n;
                                if (
                                    M > t[0] - u.default.TIP_X_EPS &&
                                    M < t[1] + u.default.TIP_X_EPS
                                ) {
                                    try {
                                        n = (0, c.builtIn)(g[i], "fn", {
                                            x: M,
                                        });
                                    } catch (t) {}
                                    if (a.default.isValidNumber(n)) {
                                        const t = Math.abs(n - T);
                                        t < p && ((p = t), (d = i));
                                    }
                                }
                            }
                            if (-1 !== d) {
                                (r = M),
                                    g[d].range &&
                                        ((r = Math.max(r, g[d].range[0])),
                                        (r = Math.min(r, g[d].range[1]))),
                                    (o = (0, c.builtIn)(g[d], "fn", { x: r })),
                                    f.show(),
                                    t.owner.emit("tip:update", {
                                        x: r,
                                        y: o,
                                        index: d,
                                    });
                                const e = (0, s.default)(
                                        r,
                                        _.invert(-20),
                                        _.invert(w + n)
                                    ),
                                    i = (0, s.default)(
                                        o,
                                        x.invert(b + n),
                                        x.invert(-20)
                                    ),
                                    u = a.default.color(g[d], d);
                                y.style("color", "red"),
                                    y.attr(
                                        "transform",
                                        "translate(" + _(e) + "," + x(i) + ")"
                                    ),
                                    y.select("circle").attr("fill", u),
                                    y
                                        .select("text")
                                        .attr("fill", u)
                                        .text(t.renderer(r, o, d));
                            } else f.hide();
                        }),
                        (f.show = function () {
                            l.merge(h).style("display", null);
                        }),
                        (f.hide = function () {
                            l.merge(h).style("display", "none");
                        }),
                        Object.keys(t).forEach(function (n) {
                            a.default.getterSetter.call(f, t, n);
                        }),
                        f
                    );
                };
            },
            5170: function (t, n, e) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(n, "__esModule", { value: !0 });
                const r = i(e(5860)),
                    o = {
                        linspace: function (t, n, e) {
                            const i = (n - t) / (e - 1);
                            return Array.from(
                                { length: e },
                                (n, e) => t + i * e
                            );
                        },
                        logspace: function (t, n, e) {
                            return this.linspace(t, n, e).map((t) =>
                                Math.pow(10, t)
                            );
                        },
                        isValidNumber: function (t) {
                            return "number" == typeof t && !isNaN(t);
                        },
                        space: function (t, n, e) {
                            const i = n[0],
                                r = n[1];
                            return "log" === t.options.xAxis.type
                                ? this.logspace(Math.log10(i), Math.log10(r), e)
                                : this.linspace(i, r, e);
                        },
                        getterSetter: function (t, n) {
                            const e = this;
                            this[n] = function (i) {
                                return arguments.length
                                    ? ((t[n] = i), e)
                                    : t[n];
                            };
                        },
                        sgn: function (t) {
                            return t < 0 ? -1 : t > 0 ? 1 : 0;
                        },
                        color: function (t, n) {
                            return t.color || r.default.COLORS[n].hex();
                        },
                    };
                n.default = o;
            },
            8867: (t, n, e) => {
                "use strict";
                t.exports = e(2320);
            },
            3380: (t) => {
                "use strict";
                t.exports = function (t) {
                    (t.mod = t.fmod),
                        (t.lessThan = t.lt),
                        (t.lessEqualThan = t.leq),
                        (t.greaterThan = t.gt),
                        (t.greaterEqualThan = t.geq),
                        (t.strictlyEqual = t.equal),
                        (t.strictlyNotEqual = t.notEqual),
                        (t.logicalAND = function (t, n) {
                            return t && n;
                        }),
                        (t.logicalXOR = function (t, n) {
                            return t ^ n;
                        }),
                        (t.logicalOR = function (t, n) {
                            return t || n;
                        });
                };
            },
            2320: (t, n, e) => {
                "use strict";
                const i = e(813),
                    r = e(9851).ZP;
                function o(t) {
                    Object.keys(t).forEach(function (n) {
                        const e = t[n];
                        "number" == typeof e || Array.isArray(e)
                            ? (t[n] = r.factory(e))
                            : "object" == typeof e &&
                              "lo" in e &&
                              "hi" in e &&
                              (t[n] = r.factory(e.lo, e.hi));
                    });
                }
                e(3380)(r),
                    (t.exports = function (t) {
                        return new i()
                            .setDefs({ $$processScope: o })
                            .parse(t)
                            .compile(r);
                    }),
                    (t.exports.policies = e(4186)(r)),
                    (t.exports.Interval = r);
            },
            4186: (t) => {
                "use strict";
                t.exports = function (t) {
                    return {
                        disableRounding: function () {
                            t.round.disable();
                        },
                        enableRounding: function () {
                            t.round.enable();
                        },
                    };
                };
            },
            813: (t, n, e) => {
                "use strict";
                t.exports = e(7076);
            },
            7076: (t, n, e) => {
                "use strict";
                var i = e(9213).Parser,
                    r = e(1046),
                    o = e(4470);
                function s(t, n) {
                    (this.statements = []),
                        (this.defs = n || {}),
                        (this.interpreter = new r(this, t));
                }
                (s.prototype.setDefs = function (t) {
                    return (this.defs = o(this.defs, t)), this;
                }),
                    (s.prototype.compile = function (t) {
                        var n = this;
                        if (
                            !t ||
                            ("object" != typeof t && "function" != typeof t)
                        )
                            throw TypeError("namespace must be an object");
                        if ("function" != typeof t.factory)
                            throw TypeError(
                                "namespace.factory must be a function"
                            );
                        (this.defs.ns = t),
                            (this.defs.$$mathCodegen = {
                                getProperty: function (t, e, i) {
                                    function r(t) {
                                        return n.interpreter.options
                                            .applyFactoryToScope &&
                                            "function" != typeof t
                                            ? i.factory(t)
                                            : t;
                                    }
                                    if (t in e) return r(e[t]);
                                    if (t in i) return r(i[t]);
                                    throw SyntaxError(
                                        'symbol "' + t + '" is undefined'
                                    );
                                },
                                functionProxy: function (t, n) {
                                    if ("function" != typeof t)
                                        throw SyntaxError(
                                            'symbol "' +
                                                n +
                                                '" must be a function'
                                        );
                                    return t;
                                },
                            }),
                            (this.defs.$$processScope =
                                this.defs.$$processScope || function () {});
                        var e = Object.keys(this.defs).map(function (t) {
                            return "var " + t + ' = defs["' + t + '"]';
                        });
                        if (!this.statements.length)
                            throw Error(
                                "there are no statements saved in this generator, make sure you parse an expression before compiling it"
                            );
                        this.statements[this.statements.length - 1] =
                            "return " +
                            this.statements[this.statements.length - 1];
                        var i = this.statements.join(";"),
                            r =
                                e.join("\n") +
                                "\n" +
                                [
                                    "return {",
                                    "  eval: function (scope) {",
                                    "    scope = scope || {}",
                                    "    $$processScope(scope)",
                                    "    " + i,
                                    "  },",
                                    "  code: '" + i + "'",
                                    "}",
                                ].join("\n");
                        return new Function("defs", r)(this.defs);
                    }),
                    (s.prototype.parse = function (t) {
                        var n = this,
                            e = new i().parse(t);
                        return (
                            (this.statements = e.blocks.map(function (t) {
                                return n.interpreter.next(t);
                            })),
                            this
                        );
                    }),
                    (t.exports = s);
            },
            1046: (t, n, e) => {
                "use strict";
                var i = e(4470),
                    r = {
                        ArrayNode: e(5483),
                        AssignmentNode: e(446),
                        ConditionalNode: e(3865),
                        ConstantNode: e(9094),
                        FunctionNode: e(73),
                        OperatorNode: e(1715),
                        SymbolNode: e(5835),
                        UnaryNode: e(74),
                    },
                    o = function (t, n) {
                        (this.owner = t),
                            (this.options = i(
                                {
                                    factory: "ns.factory",
                                    raw: !1,
                                    rawArrayExpressionElements: !0,
                                    rawCallExpressionElements: !1,
                                    applyFactoryToScope: !1,
                                },
                                n
                            ));
                    };
                i(o.prototype, r),
                    (o.prototype.next = function (t) {
                        if (!(t.type in this))
                            throw new TypeError(
                                "the node type " +
                                    t.type +
                                    " is not implemented"
                            );
                        return this[t.type](t);
                    }),
                    (o.prototype.rawify = function (t, n) {
                        var e = this.options.raw;
                        t && (this.options.raw = !0),
                            n(),
                            t && (this.options.raw = e);
                    }),
                    (t.exports = o);
            },
            8684: (t) => {
                "use strict";
                t.exports = {
                    "+": "add",
                    "-": "sub",
                    "*": "mul",
                    "/": "div",
                    "^": "pow",
                    "%": "mod",
                    "!": "factorial",
                    "|": "bitwiseOR",
                    "^|": "bitwiseXOR",
                    "&": "bitwiseAND",
                    "||": "logicalOR",
                    xor: "logicalXOR",
                    "&&": "logicalAND",
                    "<": "lessThan",
                    ">": "greaterThan",
                    "<=": "lessEqualThan",
                    ">=": "greaterEqualThan",
                    "===": "strictlyEqual",
                    "==": "equal",
                    "!==": "strictlyNotEqual",
                    "!=": "notEqual",
                    ">>": "shiftRight",
                    "<<": "shiftLeft",
                    ">>>": "unsignedRightShift",
                };
            },
            1681: (t) => {
                "use strict";
                t.exports = {
                    "+": "positive",
                    "-": "negative",
                    "~": "oneComplement",
                };
            },
            5483: (t) => {
                "use strict";
                t.exports = function (t) {
                    var n = this,
                        e = [];
                    this.rawify(
                        this.options.rawArrayExpressionElements,
                        function () {
                            e = t.nodes.map(function (t) {
                                return n.next(t);
                            });
                        }
                    );
                    var i = "[" + e.join(",") + "]";
                    return this.options.raw
                        ? i
                        : this.options.factory + "(" + i + ")";
                };
            },
            446: (t) => {
                "use strict";
                t.exports = function (t) {
                    return 'scope["' + t.name + '"] = ' + this.next(t.expr);
                };
            },
            3865: (t) => {
                "use strict";
                t.exports = function (t) {
                    return (
                        "(!!(" +
                        this.next(t.condition) +
                        ") ? (" +
                        this.next(t.trueExpr) +
                        ") : (" +
                        this.next(t.falseExpr) +
                        ") )"
                    );
                };
            },
            9094: (t) => {
                "use strict";
                t.exports = function (t) {
                    return this.options.raw
                        ? t.value
                        : this.options.factory + "(" + t.value + ")";
                };
            },
            73: (t, n, e) => {
                "use strict";
                var i = e(9213).nodeTypes.SymbolNode,
                    r = function (t) {
                        return (
                            "$$mathCodegen.functionProxy(" +
                            this.next(new i(t.name)) +
                            ', "' +
                            t.name +
                            '")'
                        );
                    };
                (t.exports = function (t) {
                    var n = this,
                        e = r.call(this, t),
                        i = [];
                    return (
                        this.rawify(
                            this.options.rawCallExpressionElements,
                            function () {
                                i = t.args.map(function (t) {
                                    return n.next(t);
                                });
                            }
                        ),
                        e + "(" + i.join(", ") + ")"
                    );
                }),
                    (t.exports.functionProxy = r);
            },
            1715: (t, n, e) => {
                "use strict";
                var i = e(8684);
                t.exports = function (t) {
                    if (this.options.raw)
                        return [
                            "(" + this.next(t.args[0]),
                            t.op,
                            this.next(t.args[1]) + ")",
                        ].join(" ");
                    var n = i[t.op];
                    if (!n) throw TypeError("unidentified operator");
                    return this.FunctionNode({ name: n, args: t.args });
                };
            },
            5835: (t) => {
                "use strict";
                t.exports = function (t) {
                    return (
                        '$$mathCodegen.getProperty("' + t.name + '", scope, ns)'
                    );
                };
            },
            74: (t, n, e) => {
                "use strict";
                var i = e(1681);
                t.exports = function (t) {
                    if (this.options.raw) return t.op + this.next(t.argument);
                    if (!(t.op in i))
                        throw new SyntaxError(t.op + " not implemented");
                    var n = i[t.op];
                    return this.FunctionNode({ name: n, args: [t.argument] });
                };
            },
            9851: (t, n, e) => {
                "use strict";
                e.d(n, { ZP: () => It });
                var i = {};
                e.r(i),
                    e.d(i, {
                        hasInterval: () => y,
                        hasValue: () => d,
                        intervalsOverlap: () => v,
                        isEmpty: () => l,
                        isInterval: () => c,
                        isSingleton: () => f,
                        isWhole: () => h,
                        zeroIn: () => p,
                    });
                var r = {};
                e.r(r),
                    e.d(r, {
                        almostEqual: () => Z,
                        assertIncludes: () => D,
                        equal: () => O,
                        geq: () => B,
                        greaterEqualThan: () => q,
                        greaterThan: () => z,
                        gt: () => U,
                        leq: () => R,
                        lessEqualThan: () => Y,
                        lessThan: () => H,
                        lt: () => j,
                        notEqual: () => F,
                    });
                var o = {};
                e.r(o),
                    e.d(o, {
                        add: () => V,
                        div: () => Q,
                        divide: () => J,
                        mul: () => G,
                        multiply: () => $,
                        negative: () => tt,
                        positive: () => K,
                        sub: () => X,
                        subtract: () => W,
                    });
                var s = {};
                e.r(s),
                    e.d(s, {
                        fmod: () => nt,
                        multiplicativeInverse: () => et,
                        nthRoot: () => ot,
                        pow: () => it,
                        sqrt: () => rt,
                    });
                var a = {};
                e.r(a),
                    e.d(a, {
                        LOG_EXP_10: () => ct,
                        LOG_EXP_2: () => ht,
                        abs: () => _t,
                        clone: () => bt,
                        difference: () => vt,
                        exp: () => st,
                        hull: () => pt,
                        intersection: () => dt,
                        ln: () => ut,
                        log: () => at,
                        log10: () => lt,
                        log2: () => ft,
                        max: () => xt,
                        min: () => wt,
                        union: () => yt,
                        wid: () => gt,
                        width: () => mt,
                    });
                var u = {};
                function c(t) {
                    return (
                        "object" == typeof t &&
                        "number" == typeof t.lo &&
                        "number" == typeof t.hi
                    );
                }
                function l(t) {
                    return t.lo > t.hi;
                }
                function h(t) {
                    return t.lo === -1 / 0 && t.hi === 1 / 0;
                }
                function f(t) {
                    return t.lo === t.hi;
                }
                function p(t) {
                    return d(t, 0);
                }
                function d(t, n) {
                    return !l(t) && t.lo <= n && n <= t.hi;
                }
                function y(t, n) {
                    return !!l(t) || (!l(n) && n.lo <= t.lo && t.hi <= n.hi);
                }
                function v(t, n) {
                    return (
                        !l(t) &&
                        !l(n) &&
                        ((t.lo <= n.lo && n.lo <= t.hi) ||
                            (n.lo <= t.lo && t.lo <= n.hi))
                    );
                }
                e.r(u),
                    e.d(u, {
                        acos: () => At,
                        asin: () => Nt,
                        atan: () => Pt,
                        cos: () => Et,
                        cosh: () => Ot,
                        sin: () => St,
                        sinh: () => Lt,
                        tan: () => kt,
                        tanh: () => Ct,
                    });
                var m = e(3093),
                    g = e.n(m);
                function _(t) {
                    return t;
                }
                function x(t) {
                    return t === 1 / 0 ? t : g()(t, -1 / 0);
                }
                function w(t) {
                    return t === -1 / 0 ? t : g()(t, 1 / 0);
                }
                function b(t) {
                    return t < 0 ? Math.ceil(t) : Math.floor(t);
                }
                const M = { prev: x, next: w },
                    T = {
                        safePrev: x,
                        safeNext: w,
                        prev: (t) => M.prev(t),
                        next: (t) => M.next(t),
                        addLo: (t, n) => T.prev(t + n),
                        addHi: (t, n) => T.next(t + n),
                        subLo: (t, n) => T.prev(t - n),
                        subHi: (t, n) => T.next(t - n),
                        mulLo: (t, n) => T.prev(t * n),
                        mulHi: (t, n) => T.next(t * n),
                        divLo: (t, n) => T.prev(t / n),
                        divHi: (t, n) => T.next(t / n),
                        intLo: (t) => b(T.prev(t)),
                        intHi: (t) => b(T.next(t)),
                        logLo: (t) => T.prev(Math.log(t)),
                        logHi: (t) => T.next(Math.log(t)),
                        expLo: (t) => T.prev(Math.exp(t)),
                        expHi: (t) => T.next(Math.exp(t)),
                        sinLo: (t) => T.prev(Math.sin(t)),
                        sinHi: (t) => T.next(Math.sin(t)),
                        cosLo: (t) => T.prev(Math.cos(t)),
                        cosHi: (t) => T.next(Math.cos(t)),
                        tanLo: (t) => T.prev(Math.tan(t)),
                        tanHi: (t) => T.next(Math.tan(t)),
                        asinLo: (t) => T.prev(Math.asin(t)),
                        asinHi: (t) => T.next(Math.asin(t)),
                        acosLo: (t) => T.prev(Math.acos(t)),
                        acosHi: (t) => T.next(Math.acos(t)),
                        atanLo: (t) => T.prev(Math.atan(t)),
                        atanHi: (t) => T.next(Math.atan(t)),
                        sinhLo: (t) => T.prev(Math.sinh(t)),
                        sinhHi: (t) => T.next(Math.sinh(t)),
                        coshLo: (t) => T.prev(Math.cosh(t)),
                        coshHi: (t) => T.next(Math.cosh(t)),
                        tanhLo: (t) => T.prev(Math.tanh(t)),
                        tanhHi: (t) => T.next(Math.tanh(t)),
                        powLo(t, n) {
                            if (n % 1 != 0) return T.prev(Math.pow(t, n));
                            let e = 1 == (1 & n) ? t : 1;
                            for (n >>= 1; n > 0; )
                                (t = T.mulLo(t, t)),
                                    1 == (1 & n) && (e = T.mulLo(t, e)),
                                    (n >>= 1);
                            return e;
                        },
                        powHi(t, n) {
                            if (n % 1 != 0) return T.next(Math.pow(t, n));
                            let e = 1 == (1 & n) ? t : 1;
                            for (n >>= 1; n > 0; )
                                (t = T.mulHi(t, t)),
                                    1 == (1 & n) && (e = T.mulHi(t, e)),
                                    (n >>= 1);
                            return e;
                        },
                        sqrtLo: (t) => T.prev(Math.sqrt(t)),
                        sqrtHi: (t) => T.next(Math.sqrt(t)),
                        disable() {
                            M.next = M.prev = _;
                        },
                        enable() {
                            (M.next = w), (M.prev = x);
                        },
                    },
                    E = T;
                class S {
                    constructor(t, n) {
                        if (
                            ((this.lo = 0), (this.hi = 0), !(this instanceof S))
                        )
                            return (
                                console.log("calling with new"),
                                console.log(t, n),
                                new S(t, n)
                            );
                        if (void 0 !== t && void 0 !== n) {
                            if (c(t)) {
                                if (!f(t))
                                    throw new TypeError(
                                        "Interval: interval `lo` must be a singleton"
                                    );
                                t = t.lo;
                            }
                            if (c(n)) {
                                if (!f(n))
                                    throw TypeError(
                                        "Interval: interval `hi` must be a singleton"
                                    );
                                n = n.hi;
                            }
                        } else {
                            if (void 0 !== t)
                                return Array.isArray(t)
                                    ? new k(t[0], t[1])
                                    : new k(t, t);
                            t = n = 0;
                        }
                        this.assign(t, n);
                    }
                    singleton(t) {
                        return this.set(t, t);
                    }
                    bounded(t, n) {
                        return this.set(E.prev(t), E.next(n));
                    }
                    boundedSingleton(t) {
                        return this.bounded(t, t);
                    }
                    set(t, n) {
                        return (this.lo = t), (this.hi = n), this;
                    }
                    assign(t, n) {
                        if ("number" != typeof t || "number" != typeof n)
                            throw TypeError(
                                "Interval#assign: arguments must be numbers"
                            );
                        return isNaN(t) || isNaN(n) || t > n
                            ? this.setEmpty()
                            : this.set(t, n);
                    }
                    setEmpty() {
                        return this.set(
                            Number.POSITIVE_INFINITY,
                            Number.NEGATIVE_INFINITY
                        );
                    }
                    setWhole() {
                        return this.set(
                            Number.NEGATIVE_INFINITY,
                            Number.POSITIVE_INFINITY
                        );
                    }
                    open(t, n) {
                        return this.assign(E.safeNext(t), E.safePrev(n));
                    }
                    halfOpenLeft(t, n) {
                        return this.assign(E.safeNext(t), n);
                    }
                    halfOpenRight(t, n) {
                        return this.assign(t, E.safePrev(n));
                    }
                    toArray() {
                        return [this.lo, this.hi];
                    }
                    clone() {
                        return new k().set(this.lo, this.hi);
                    }
                }
                const k = (function (t) {
                    function n() {
                        for (
                            var n = arguments.length, e = Array(n), i = 0;
                            i < n;
                            i++
                        )
                            e[i] = arguments[i];
                        return new (Function.prototype.bind.apply(
                            t,
                            [null].concat(e)
                        ))();
                    }
                    return (n.prototype = t.prototype), n;
                })(S);
                k.factory = k;
                const N = 3.141592653589793,
                    A = 3.1415926535897936,
                    P = {
                        PI_LOW: N,
                        PI_HIGH: A,
                        PI_HALF_LOW: N / 2,
                        PI_HALF_HIGH: A / 2,
                        PI_TWICE_LOW: 2 * N,
                        PI_TWICE_HIGH: 2 * A,
                        get PI() {
                            return new k(N, A);
                        },
                        get PI_HALF() {
                            return new k(P.PI_HALF_LOW, P.PI_HALF_HIGH);
                        },
                        get PI_TWICE() {
                            return new k(P.PI_TWICE_LOW, P.PI_TWICE_HIGH);
                        },
                        get ZERO() {
                            return new k(0);
                        },
                        get ONE() {
                            return new k(1);
                        },
                        get WHOLE() {
                            return new k().setWhole();
                        },
                        get EMPTY() {
                            return new k().setEmpty();
                        },
                    },
                    L = P;
                function O(t, n) {
                    return l(t)
                        ? l(n)
                        : !l(n) && t.lo === n.lo && t.hi === n.hi;
                }
                function C(t, n) {
                    if (!t) throw new Error(n || "assertion failed");
                }
                function I(t, n) {
                    if (!isFinite(t))
                        return C(
                            t === n,
                            `[Infinity] expected ${t} to be ${n}`
                        );
                    C(
                        Math.abs(t - n) < 1e-7,
                        `expected ${t} to be close to ${n}`
                    );
                }
                function Z(t, n) {
                    (t = Array.isArray(t) ? t : t.toArray()),
                        (n = Array.isArray(n) ? n : n.toArray()),
                        I(t[0], n[0]),
                        I(t[1], n[1]);
                }
                function D(t, n) {
                    Z(t, n),
                        (t = Array.isArray(t) ? t : t.toArray()),
                        (n = Array.isArray(n) ? n : n.toArray()),
                        C(
                            t[0] <= n[0],
                            `${t[0]} should be less/equal than ${n[0]}`
                        ),
                        C(
                            n[1] <= t[1],
                            `${n[1]} should be less/equal than ${t[1]}`
                        );
                }
                function F(t, n) {
                    return l(t) ? !l(n) : l(n) || t.hi < n.lo || t.lo > n.hi;
                }
                function H(t, n) {
                    return !l(t) && !l(n) && t.hi < n.lo;
                }
                const j = H;
                function z(t, n) {
                    return !l(t) && !l(n) && t.lo > n.hi;
                }
                const U = z;
                function Y(t, n) {
                    return !l(t) && !l(n) && t.hi <= n.lo;
                }
                const R = Y;
                function q(t, n) {
                    return !l(t) && !l(n) && t.lo >= n.hi;
                }
                const B = q;
                function V(t, n) {
                    return new k(E.addLo(t.lo, n.lo), E.addHi(t.hi, n.hi));
                }
                function W(t, n) {
                    return new k(E.subLo(t.lo, n.hi), E.subHi(t.hi, n.lo));
                }
                const X = W;
                function $(t, n) {
                    if (l(t) || l(n)) return L.EMPTY;
                    const e = t.lo,
                        i = t.hi,
                        r = n.lo,
                        o = n.hi,
                        s = new k();
                    return (
                        e < 0
                            ? i > 0
                                ? r < 0
                                    ? o > 0
                                        ? ((s.lo = Math.min(
                                              E.mulLo(e, o),
                                              E.mulLo(i, r)
                                          )),
                                          (s.hi = Math.max(
                                              E.mulHi(e, r),
                                              E.mulHi(i, o)
                                          )))
                                        : ((s.lo = E.mulLo(i, r)),
                                          (s.hi = E.mulHi(e, r)))
                                    : o > 0
                                    ? ((s.lo = E.mulLo(e, o)),
                                      (s.hi = E.mulHi(i, o)))
                                    : ((s.lo = 0), (s.hi = 0))
                                : r < 0
                                ? o > 0
                                    ? ((s.lo = E.mulLo(e, o)),
                                      (s.hi = E.mulHi(e, r)))
                                    : ((s.lo = E.mulLo(i, o)),
                                      (s.hi = E.mulHi(e, r)))
                                : o > 0
                                ? ((s.lo = E.mulLo(e, o)),
                                  (s.hi = E.mulHi(i, r)))
                                : ((s.lo = 0), (s.hi = 0))
                            : i > 0
                            ? r < 0
                                ? o > 0
                                    ? ((s.lo = E.mulLo(i, r)),
                                      (s.hi = E.mulHi(i, o)))
                                    : ((s.lo = E.mulLo(i, r)),
                                      (s.hi = E.mulHi(e, o)))
                                : o > 0
                                ? ((s.lo = E.mulLo(e, r)),
                                  (s.hi = E.mulHi(i, o)))
                                : ((s.lo = 0), (s.hi = 0))
                            : ((s.lo = 0), (s.hi = 0)),
                        s
                    );
                }
                const G = $;
                function J(t, n) {
                    return l(t) || l(n)
                        ? L.EMPTY
                        : p(n)
                        ? 0 !== n.lo
                            ? 0 !== n.hi
                                ? (function (t) {
                                      return 0 === t.lo && 0 === t.hi
                                          ? t
                                          : L.WHOLE;
                                  })(t)
                                : (function (t, n) {
                                      return 0 === t.lo && 0 === t.hi
                                          ? t
                                          : p(t)
                                          ? L.WHOLE
                                          : t.hi < 0
                                          ? new k(
                                                E.divLo(t.hi, n),
                                                Number.POSITIVE_INFINITY
                                            )
                                          : new k(
                                                Number.NEGATIVE_INFINITY,
                                                E.divHi(t.lo, n)
                                            );
                                  })(t, n.lo)
                            : 0 !== n.hi
                            ? (function (t, n) {
                                  return 0 === t.lo && 0 === t.hi
                                      ? t
                                      : p(t)
                                      ? L.WHOLE
                                      : t.hi < 0
                                      ? new k(
                                            Number.NEGATIVE_INFINITY,
                                            E.divHi(t.hi, n)
                                        )
                                      : new k(
                                            E.divLo(t.lo, n),
                                            Number.POSITIVE_INFINITY
                                        );
                              })(t, n.hi)
                            : L.EMPTY
                        : (function (t, n) {
                              const e = t.lo,
                                  i = t.hi,
                                  r = n.lo,
                                  o = n.hi,
                                  s = new k();
                              return (
                                  i < 0
                                      ? o < 0
                                          ? ((s.lo = E.divLo(i, r)),
                                            (s.hi = E.divHi(e, o)))
                                          : ((s.lo = E.divLo(e, r)),
                                            (s.hi = E.divHi(i, o)))
                                      : e < 0
                                      ? o < 0
                                          ? ((s.lo = E.divLo(i, o)),
                                            (s.hi = E.divHi(e, o)))
                                          : ((s.lo = E.divLo(e, r)),
                                            (s.hi = E.divHi(i, r)))
                                      : o < 0
                                      ? ((s.lo = E.divLo(i, o)),
                                        (s.hi = E.divHi(e, r)))
                                      : ((s.lo = E.divLo(e, o)),
                                        (s.hi = E.divHi(i, r))),
                                  s
                              );
                          })(t, n);
                }
                const Q = J;
                function K(t) {
                    return new k(t.lo, t.hi);
                }
                function tt(t) {
                    return new k(-t.hi, -t.lo);
                }
                function nt(t, n) {
                    if (l(t) || l(n)) return L.EMPTY;
                    const e = t.lo < 0 ? n.lo : n.hi;
                    let i = t.lo / e;
                    return (
                        (i = i < 0 ? Math.ceil(i) : Math.floor(i)),
                        X(t, G(n, new k(i)))
                    );
                }
                function et(t) {
                    return l(t)
                        ? L.EMPTY
                        : p(t)
                        ? 0 !== t.lo
                            ? 0 !== t.hi
                                ? L.WHOLE
                                : new k(
                                      Number.NEGATIVE_INFINITY,
                                      E.divHi(1, t.lo)
                                  )
                            : 0 !== t.hi
                            ? new k(E.divLo(1, t.hi), Number.POSITIVE_INFINITY)
                            : L.EMPTY
                        : new k(E.divLo(1, t.hi), E.divHi(1, t.lo));
                }
                function it(t, n) {
                    if (l(t)) return L.EMPTY;
                    if ("object" == typeof n) {
                        if (!f(n)) return L.EMPTY;
                        n = n.lo;
                    }
                    if (0 === n)
                        return 0 === t.lo && 0 === t.hi ? L.EMPTY : L.ONE;
                    if (n < 0) return it(et(t), -n);
                    if (Number.isSafeInteger(n)) {
                        if (t.hi < 0) {
                            const e = E.powLo(-t.hi, n),
                                i = E.powHi(-t.lo, n);
                            return 1 == (1 & n) ? new k(-i, -e) : new k(e, i);
                        }
                        return t.lo < 0
                            ? 1 == (1 & n)
                                ? new k(-E.powLo(-t.lo, n), E.powHi(t.hi, n))
                                : new k(0, E.powHi(Math.max(-t.lo, t.hi), n))
                            : new k(E.powLo(t.lo, n), E.powHi(t.hi, n));
                    }
                    return (
                        console.warn(
                            "power is not an integer, you should use nth-root instead, returning an empty interval"
                        ),
                        L.EMPTY
                    );
                }
                function rt(t) {
                    return ot(t, 2);
                }
                function ot(t, n) {
                    if (l(t) || n < 0) return L.EMPTY;
                    if ("object" == typeof n) {
                        if (!f(n)) return L.EMPTY;
                        n = n.lo;
                    }
                    const e = 1 / n;
                    if (t.hi < 0) {
                        if (Number.isSafeInteger(n) && 1 == (1 & n)) {
                            const n = E.powHi(-t.lo, e),
                                i = E.powLo(-t.hi, e);
                            return new k(-n, -i);
                        }
                        return L.EMPTY;
                    }
                    if (t.lo < 0) {
                        const i = E.powHi(t.hi, e);
                        if (Number.isSafeInteger(n) && 1 == (1 & n)) {
                            const n = -E.powHi(-t.lo, e);
                            return new k(n, i);
                        }
                        return new k(0, i);
                    }
                    return new k(E.powLo(t.lo, e), E.powHi(t.hi, e));
                }
                function st(t) {
                    return l(t) ? L.EMPTY : new k(E.expLo(t.lo), E.expHi(t.hi));
                }
                function at(t) {
                    if (l(t)) return L.EMPTY;
                    const n =
                        t.lo <= 0 ? Number.NEGATIVE_INFINITY : E.logLo(t.lo);
                    return new k(n, E.logHi(t.hi));
                }
                const ut = at,
                    ct = at(new k(10, 10));
                function lt(t) {
                    return l(t) ? L.EMPTY : Q(at(t), ct);
                }
                const ht = at(new k(2, 2));
                function ft(t) {
                    return l(t) ? L.EMPTY : Q(at(t), ht);
                }
                function pt(t, n) {
                    const e = l(t),
                        i = l(n);
                    return e && i
                        ? L.EMPTY
                        : e
                        ? n.clone()
                        : i
                        ? t.clone()
                        : new k(Math.min(t.lo, n.lo), Math.max(t.hi, n.hi));
                }
                function dt(t, n) {
                    if (l(t) || l(n)) return L.EMPTY;
                    const e = Math.max(t.lo, n.lo),
                        i = Math.min(t.hi, n.hi);
                    return e <= i ? new k(e, i) : L.EMPTY;
                }
                function yt(t, n) {
                    if (!v(t, n))
                        throw Error("Interval#union: intervals do not overlap");
                    return new k(Math.min(t.lo, n.lo), Math.max(t.hi, n.hi));
                }
                function vt(t, n) {
                    if (l(t) || h(n)) return L.EMPTY;
                    if (v(t, n)) {
                        if (t.lo < n.lo && n.hi < t.hi)
                            throw Error(
                                "Interval.difference: difference creates multiple intervals"
                            );
                        return (n.lo <= t.lo && n.hi === 1 / 0) ||
                            (n.hi >= t.hi && n.lo === -1 / 0)
                            ? L.EMPTY
                            : n.lo <= t.lo
                            ? new k().halfOpenLeft(n.hi, t.hi)
                            : new k().halfOpenRight(t.lo, n.lo);
                    }
                    return t.clone();
                }
                function mt(t) {
                    return l(t) ? 0 : E.subHi(t.hi, t.lo);
                }
                const gt = mt;
                function _t(t) {
                    return l(t) || h(t)
                        ? L.EMPTY
                        : t.lo >= 0
                        ? t.clone()
                        : t.hi <= 0
                        ? tt(t)
                        : new k(0, Math.max(-t.lo, t.hi));
                }
                function xt(t, n) {
                    const e = l(t),
                        i = l(n);
                    return e && i
                        ? L.EMPTY
                        : e
                        ? n.clone()
                        : i
                        ? t.clone()
                        : new k(Math.max(t.lo, n.lo), Math.max(t.hi, n.hi));
                }
                function wt(t, n) {
                    const e = l(t),
                        i = l(n);
                    return e && i
                        ? L.EMPTY
                        : e
                        ? n.clone()
                        : i
                        ? t.clone()
                        : new k(Math.min(t.lo, n.lo), Math.min(t.hi, n.hi));
                }
                function bt(t) {
                    return new k().set(t.lo, t.hi);
                }
                function Mt(t) {
                    return !isFinite(t.lo) && t.lo === t.hi;
                }
                function Tt(t) {
                    if (t.lo < 0)
                        if (t.lo === -1 / 0) (t.lo = 0), (t.hi = 1 / 0);
                        else {
                            const n = Math.ceil(-t.lo / L.PI_TWICE_LOW);
                            (t.lo += L.PI_TWICE_LOW * n),
                                (t.hi += L.PI_TWICE_LOW * n);
                        }
                    return t;
                }
                function Et(t) {
                    if (l(t) || Mt(t)) return L.EMPTY;
                    const n = new k().set(t.lo, t.hi);
                    Tt(n);
                    const e = L.PI_TWICE,
                        i = nt(n, e);
                    if (mt(i) >= e.lo) return new k(-1, 1);
                    if (i.lo >= L.PI_HIGH) return tt(Et(X(i, L.PI)));
                    const r = i.lo,
                        o = i.hi,
                        s = E.cosLo(o),
                        a = E.cosHi(r);
                    return o <= L.PI_LOW
                        ? new k(s, a)
                        : o <= e.lo
                        ? new k(-1, Math.max(s, a))
                        : new k(-1, 1);
                }
                function St(t) {
                    return l(t) || Mt(t) ? L.EMPTY : Et(X(t, L.PI_HALF));
                }
                function kt(t) {
                    if (l(t) || Mt(t)) return L.EMPTY;
                    const n = new k().set(t.lo, t.hi);
                    Tt(n);
                    const e = L.PI;
                    let i = nt(n, e);
                    return (
                        i.lo >= L.PI_HALF_LOW && (i = X(i, e)),
                        i.lo <= -L.PI_HALF_LOW || i.hi >= L.PI_HALF_LOW
                            ? L.WHOLE
                            : new k(E.tanLo(i.lo), E.tanHi(i.hi))
                    );
                }
                function Nt(t) {
                    if (l(t) || t.hi < -1 || t.lo > 1) return L.EMPTY;
                    const n = t.lo <= -1 ? -L.PI_HALF_HIGH : E.asinLo(t.lo),
                        e = t.hi >= 1 ? L.PI_HALF_HIGH : E.asinHi(t.hi);
                    return new k(n, e);
                }
                function At(t) {
                    if (l(t) || t.hi < -1 || t.lo > 1) return L.EMPTY;
                    const n = t.hi >= 1 ? 0 : E.acosLo(t.hi),
                        e = t.lo <= -1 ? L.PI_HIGH : E.acosHi(t.lo);
                    return new k(n, e);
                }
                function Pt(t) {
                    return l(t)
                        ? L.EMPTY
                        : new k(E.atanLo(t.lo), E.atanHi(t.hi));
                }
                function Lt(t) {
                    return l(t)
                        ? L.EMPTY
                        : new k(E.sinhLo(t.lo), E.sinhHi(t.hi));
                }
                function Ot(t) {
                    return l(t)
                        ? L.EMPTY
                        : t.hi < 0
                        ? new k(E.coshLo(t.hi), E.coshHi(t.lo))
                        : t.lo >= 0
                        ? new k(E.coshLo(t.lo), E.coshHi(t.hi))
                        : new k(1, E.coshHi(-t.lo > t.hi ? t.lo : t.hi));
                }
                function Ct(t) {
                    return l(t)
                        ? L.EMPTY
                        : new k(E.tanhLo(t.lo), E.tanhHi(t.hi));
                }
                const It = Object.assign(k, L, E, a, i, r, o, s, u, {
                    round: E,
                });
            },
            2223: (t, n, e) => {
                "use strict";
                t.exports = e(3829);
            },
            3829: (t, n, e) => {
                "use strict";
                var i = e(9213).Parser,
                    r = e(6009),
                    o = e(2010);
                function s(t, n) {
                    (this.statements = []),
                        (this.defs = n || {}),
                        (this.interpreter = new r(this, t));
                }
                (s.prototype.setDefs = function (t) {
                    return (this.defs = o(this.defs, t)), this;
                }),
                    (s.prototype.compile = function (t) {
                        if (
                            !t ||
                            ("object" != typeof t && "function" != typeof t)
                        )
                            throw TypeError("namespace must be an object");
                        if ("function" != typeof t.factory)
                            throw TypeError(
                                "namespace.factory must be a function"
                            );
                        (this.defs.ns = t),
                            (this.defs.$$mathCodegen = {
                                getProperty: function (t, n, e) {
                                    if (t in n) return n[t];
                                    if (t in e) return e[t];
                                    throw SyntaxError(
                                        'symbol "' + t + '" is undefined'
                                    );
                                },
                                functionProxy: function (t, n) {
                                    if ("function" != typeof t)
                                        throw SyntaxError(
                                            'symbol "' +
                                                n +
                                                '" must be a function'
                                        );
                                    return t;
                                },
                            }),
                            (this.defs.$$processScope =
                                this.defs.$$processScope || function () {});
                        var n = Object.keys(this.defs).map(function (t) {
                            return "var " + t + ' = defs["' + t + '"]';
                        });
                        if (!this.statements.length)
                            throw Error(
                                "there are no statements saved in this generator, make sure you parse an expression before compiling it"
                            );
                        this.statements[this.statements.length - 1] =
                            "return " +
                            this.statements[this.statements.length - 1];
                        var e = this.statements.join(";"),
                            i =
                                n.join("\n") +
                                "\n" +
                                [
                                    "return {",
                                    "  eval: function (scope) {",
                                    "    scope = scope || {}",
                                    "    $$processScope(scope)",
                                    "    " + e,
                                    "  },",
                                    "  code: '" + e + "'",
                                    "}",
                                ].join("\n");
                        return new Function("defs", i)(this.defs);
                    }),
                    (s.prototype.parse = function (t) {
                        var n = this,
                            e = new i().parse(t);
                        return (
                            (this.statements = e.blocks.map(function (t) {
                                return n.interpreter.next(t);
                            })),
                            this
                        );
                    }),
                    (t.exports = s);
            },
            6009: (t, n, e) => {
                "use strict";
                var i = e(2010),
                    r = {
                        ArrayNode: e(5476),
                        AssignmentNode: e(6408),
                        ConditionalNode: e(9907),
                        ConstantNode: e(2341),
                        FunctionNode: e(7850),
                        OperatorNode: e(305),
                        SymbolNode: e(6656),
                        UnaryNode: e(2386),
                    },
                    o = function (t, n) {
                        (this.owner = t),
                            (this.options = i(
                                {
                                    factory: "ns.factory",
                                    raw: !1,
                                    rawArrayExpressionElements: !0,
                                    rawCallExpressionElements: !1,
                                },
                                n
                            ));
                    };
                i(o.prototype, r),
                    (o.prototype.next = function (t) {
                        if (!(t.type in this))
                            throw new TypeError(
                                "the node type " +
                                    t.type +
                                    " is not implemented"
                            );
                        return this[t.type](t);
                    }),
                    (o.prototype.rawify = function (t, n) {
                        var e = this.options.raw;
                        t && (this.options.raw = !0),
                            n(),
                            t && (this.options.raw = e);
                    }),
                    (t.exports = o);
            },
            2576: (t) => {
                "use strict";
                t.exports = {
                    "+": "add",
                    "-": "sub",
                    "*": "mul",
                    "/": "div",
                    "^": "pow",
                    "%": "mod",
                    "!": "factorial",
                    "|": "bitwiseOR",
                    "^|": "bitwiseXOR",
                    "&": "bitwiseAND",
                    "||": "logicalOR",
                    xor: "logicalXOR",
                    "&&": "logicalAND",
                    "<": "lessThan",
                    ">": "greaterThan",
                    "<=": "lessEqualThan",
                    ">=": "greaterEqualThan",
                    "===": "strictlyEqual",
                    "==": "equal",
                    "!==": "strictlyNotEqual",
                    "!=": "notEqual",
                    ">>": "shiftRight",
                    "<<": "shiftLeft",
                    ">>>": "unsignedRightShift",
                };
            },
            6104: (t) => {
                "use strict";
                t.exports = {
                    "+": "positive",
                    "-": "negative",
                    "~": "oneComplement",
                };
            },
            5476: (t) => {
                "use strict";
                t.exports = function (t) {
                    var n = this,
                        e = [];
                    this.rawify(
                        this.options.rawArrayExpressionElements,
                        function () {
                            e = t.nodes.map(function (t) {
                                return n.next(t);
                            });
                        }
                    );
                    var i = "[" + e.join(",") + "]";
                    return this.options.raw
                        ? i
                        : this.options.factory + "(" + i + ")";
                };
            },
            6408: (t) => {
                "use strict";
                t.exports = function (t) {
                    return 'scope["' + t.name + '"] = ' + this.next(t.expr);
                };
            },
            9907: (t) => {
                "use strict";
                t.exports = function (t) {
                    return (
                        "(!!(" +
                        this.next(t.condition) +
                        ") ? (" +
                        this.next(t.trueExpr) +
                        ") : (" +
                        this.next(t.falseExpr) +
                        ") )"
                    );
                };
            },
            2341: (t) => {
                "use strict";
                t.exports = function (t) {
                    return this.options.raw
                        ? t.value
                        : this.options.factory + "(" + t.value + ")";
                };
            },
            7850: (t, n, e) => {
                "use strict";
                var i = e(9213).nodeTypes.SymbolNode,
                    r = function (t) {
                        return (
                            "$$mathCodegen.functionProxy(" +
                            this.next(new i(t.name)) +
                            ', "' +
                            t.name +
                            '")'
                        );
                    };
                (t.exports = function (t) {
                    var n = this,
                        e = r.call(this, t),
                        i = [];
                    return (
                        this.rawify(
                            this.options.rawCallExpressionElements,
                            function () {
                                i = t.args.map(function (t) {
                                    return n.next(t);
                                });
                            }
                        ),
                        e + "(" + i.join(", ") + ")"
                    );
                }),
                    (t.exports.functionProxy = r);
            },
            305: (t, n, e) => {
                "use strict";
                var i = e(2576);
                t.exports = function (t) {
                    if (this.options.raw)
                        return [
                            "(" + this.next(t.args[0]),
                            t.op,
                            this.next(t.args[1]) + ")",
                        ].join(" ");
                    var n = i[t.op];
                    if (!n) throw TypeError("unidentified operator");
                    return this.FunctionNode({ name: n, args: t.args });
                };
            },
            6656: (t) => {
                "use strict";
                t.exports = function (t) {
                    return (
                        '$$mathCodegen.getProperty("' + t.name + '", scope, ns)'
                    );
                };
            },
            2386: (t, n, e) => {
                "use strict";
                var i = e(6104);
                t.exports = function (t) {
                    if (this.options.raw) return t.op + this.next(t.argument);
                    if (!(t.op in i))
                        throw new SyntaxError(t.op + " not implemented");
                    var n = i[t.op];
                    return this.FunctionNode({ name: n, args: [t.argument] });
                };
            },
            2010: (t) => {
                "use strict";
                var n = Object.prototype.hasOwnProperty,
                    e = Object.prototype.toString,
                    i = Object.defineProperty,
                    r = Object.getOwnPropertyDescriptor,
                    o = function (t) {
                        return "function" == typeof Array.isArray
                            ? Array.isArray(t)
                            : "[object Array]" === e.call(t);
                    },
                    s = function (t) {
                        if (!t || "[object Object]" !== e.call(t)) return !1;
                        var i,
                            r = n.call(t, "constructor"),
                            o =
                                t.constructor &&
                                t.constructor.prototype &&
                                n.call(
                                    t.constructor.prototype,
                                    "isPrototypeOf"
                                );
                        if (t.constructor && !r && !o) return !1;
                        for (i in t);
                        return void 0 === i || n.call(t, i);
                    },
                    a = function (t, n) {
                        i && "__proto__" === n.name
                            ? i(t, n.name, {
                                  enumerable: !0,
                                  configurable: !0,
                                  value: n.newValue,
                                  writable: !0,
                              })
                            : (t[n.name] = n.newValue);
                    },
                    u = function (t, e) {
                        if ("__proto__" === e) {
                            if (!n.call(t, e)) return;
                            if (r) return r(t, e).value;
                        }
                        return t[e];
                    };
                t.exports = function t() {
                    var n,
                        e,
                        i,
                        r,
                        c,
                        l,
                        h = arguments[0],
                        f = 1,
                        p = arguments.length,
                        d = !1;
                    for (
                        "boolean" == typeof h &&
                            ((d = h), (h = arguments[1] || {}), (f = 2)),
                            (null == h ||
                                ("object" != typeof h &&
                                    "function" != typeof h)) &&
                                (h = {});
                        f < p;
                        ++f
                    )
                        if (null != (n = arguments[f]))
                            for (e in n)
                                (i = u(h, e)),
                                    h !== (r = u(n, e)) &&
                                        (d && r && (s(r) || (c = o(r)))
                                            ? (c
                                                  ? ((c = !1),
                                                    (l = i && o(i) ? i : []))
                                                  : (l = i && s(i) ? i : {}),
                                              a(h, {
                                                  name: e,
                                                  newValue: t(d, l, r),
                                              }))
                                            : void 0 !== r &&
                                              a(h, { name: e, newValue: r }));
                    return h;
                };
            },
            9213: (t, n, e) => {
                "use strict";
                e(1668),
                    (t.exports.Parser = e(5438)),
                    (t.exports.nodeTypes = e(3450));
            },
            1668: (t, n, e) => {
                var i = e(5054),
                    r = {
                        n: "\n",
                        f: "\f",
                        r: "\r",
                        t: "\t",
                        v: "\v",
                        "'": "'",
                        '"': '"',
                    },
                    o = {
                        ",": !0,
                        "(": !0,
                        ")": !0,
                        "[": !0,
                        "]": !0,
                        ";": !0,
                        "~": !0,
                        "!": !0,
                        "+": !0,
                        "-": !0,
                        "*": !0,
                        "/": !0,
                        "%": !0,
                        "^": !0,
                        "**": !0,
                        "|": !0,
                        "&": !0,
                        "^|": !0,
                        "=": !0,
                        ":": !0,
                        "?": !0,
                        "||": !0,
                        "&&": !0,
                        xor: !0,
                        "==": !0,
                        "!=": !0,
                        "===": !0,
                        "!==": !0,
                        "<": !0,
                        ">": !0,
                        ">=": !0,
                        "<=": !0,
                        ">>>": !0,
                        "<<": !0,
                        ">>": !0,
                    };
                function s(t) {
                    return t >= "0" && t <= "9";
                }
                function a(t) {
                    return (
                        (t >= "a" && t <= "z") ||
                        (t >= "A" && t <= "Z") ||
                        "$" === t ||
                        "_" === t
                    );
                }
                function u(t) {
                    return (
                        " " === t ||
                        "\r" === t ||
                        "\t" === t ||
                        "\n" === t ||
                        "\v" === t ||
                        " " === t
                    );
                }
                function c(t) {
                    return o[t];
                }
                function l(t) {
                    return "'" === t || '"' === t;
                }
                function h() {}
                (h.prototype.throwError = function (t, n) {
                    n = void 0 === n ? this.index : n;
                    var e = new Error(t + " at index " + n);
                    throw ((e.index = n), (e.description = t), e);
                }),
                    (h.prototype.lex = function (t) {
                        for (
                            this.text = t, this.index = 0, this.tokens = [];
                            this.index < this.text.length;

                        ) {
                            for (; u(this.peek()); ) this.consume();
                            var n = this.peek(),
                                e = n + this.peek(1),
                                r = e + this.peek(2);
                            c(r)
                                ? (this.tokens.push({
                                      type: i.DELIMITER,
                                      value: r,
                                  }),
                                  this.consume(),
                                  this.consume(),
                                  this.consume())
                                : c(e)
                                ? (this.tokens.push({
                                      type: i.DELIMITER,
                                      value: e,
                                  }),
                                  this.consume(),
                                  this.consume())
                                : c(n)
                                ? (this.tokens.push({
                                      type: i.DELIMITER,
                                      value: n,
                                  }),
                                  this.consume())
                                : s(n) || ("." === n && s(this.peek(1)))
                                ? this.tokens.push({
                                      type: i.NUMBER,
                                      value: this.readNumber(),
                                  })
                                : l(n)
                                ? this.tokens.push({
                                      type: i.STRING,
                                      value: this.readString(),
                                  })
                                : a(n)
                                ? this.tokens.push({
                                      type: i.SYMBOL,
                                      value: this.readIdentifier(),
                                  })
                                : this.throwError("unexpected character " + n);
                        }
                        return this.tokens.push({ type: i.EOF }), this.tokens;
                    }),
                    (h.prototype.peek = function (t) {
                        if (
                            ((t = t || 0),
                            !(this.index + t >= this.text.length))
                        )
                            return this.text.charAt(this.index + t);
                    }),
                    (h.prototype.consume = function () {
                        var t = this.peek();
                        return (this.index += 1), t;
                    }),
                    (h.prototype.readNumber = function () {
                        var t = "";
                        if ("." === this.peek())
                            (t += this.consume()),
                                s(this.peek()) ||
                                    this.throwError("number expected");
                        else {
                            for (; s(this.peek()); ) t += this.consume();
                            "." === this.peek() && (t += this.consume());
                        }
                        for (; s(this.peek()); ) t += this.consume();
                        if ("e" === this.peek() || "E" === this.peek())
                            for (
                                t += this.consume(),
                                    s(this.peek()) ||
                                        "+" === this.peek() ||
                                        "-" === this.peek() ||
                                        this.throwError(),
                                    ("+" !== this.peek() &&
                                        "-" !== this.peek()) ||
                                        (t += this.consume()),
                                    s(this.peek()) ||
                                        this.throwError("number expected");
                                s(this.peek());

                            )
                                t += this.consume();
                        return t;
                    }),
                    (h.prototype.readIdentifier = function () {
                        for (var t = ""; a(this.peek()) || s(this.peek()); )
                            t += this.consume();
                        return t;
                    }),
                    (h.prototype.readString = function () {
                        for (var t, n = this.consume(), e = ""; ; ) {
                            var i = this.consume();
                            if (
                                (i || this.throwError("string is not closed"),
                                t)
                            ) {
                                if ("u" === i) {
                                    var o = this.text.substring(
                                        this.index + 1,
                                        this.index + 5
                                    );
                                    o.match(/[\da-f]{4}/i) ||
                                        this.throwError(
                                            "invalid unicode escape"
                                        ),
                                        (this.index += 4),
                                        (e += String.fromCharCode(
                                            parseInt(o, 16)
                                        ));
                                } else {
                                    e += r[i] || i;
                                }
                                t = !1;
                            } else {
                                if (i === n) break;
                                "\\" === i ? (t = !0) : (e += i);
                            }
                        }
                        return e;
                    }),
                    (t.exports = h);
            },
            5438: (t, n, e) => {
                var i = e(5054),
                    r = e(1668),
                    o = e(6311),
                    s = e(6565),
                    a = e(5543),
                    u = e(2514),
                    c = e(8935),
                    l = e(3862),
                    h = e(9322),
                    f = e(3262),
                    p = e(2962);
                function d() {
                    (this.lexer = new r()), (this.tokens = null);
                }
                (d.prototype.current = function () {
                    return this.tokens[0];
                }),
                    (d.prototype.next = function () {
                        return this.tokens[1];
                    }),
                    (d.prototype.peek = function () {
                        if (this.tokens.length)
                            for (
                                var t = this.tokens[0], n = 0;
                                n < arguments.length;
                                n += 1
                            )
                                if (t.value === arguments[n]) return !0;
                    }),
                    (d.prototype.consume = function (t) {
                        return this.tokens.shift();
                    }),
                    (d.prototype.expect = function (t) {
                        if (!this.peek(t)) throw Error("expected " + t);
                        return this.consume();
                    }),
                    (d.prototype.isEOF = function () {
                        return this.current().type === i.EOF;
                    }),
                    (d.prototype.parse = function (t) {
                        return (
                            (this.tokens = this.lexer.lex(t)), this.program()
                        );
                    }),
                    (d.prototype.program = function () {
                        for (var t = []; !this.isEOF(); )
                            t.push(this.assignment()),
                                this.peek(";") && this.consume();
                        return this.end(), new p(t);
                    }),
                    (d.prototype.assignment = function () {
                        var t = this.ternary();
                        return t instanceof u && this.peek("=")
                            ? (this.consume(), new f(t.name, this.assignment()))
                            : t;
                    }),
                    (d.prototype.ternary = function () {
                        var t = this.logicalOR();
                        if (this.peek("?")) {
                            this.consume();
                            var n = this.ternary();
                            this.expect(":");
                            var e = this.ternary();
                            return new h(t, n, e);
                        }
                        return t;
                    }),
                    (d.prototype.logicalOR = function () {
                        var t = this.logicalXOR();
                        if (this.peek("||")) {
                            var n = this.consume(),
                                e = this.logicalOR();
                            return new s(n.value, [t, e]);
                        }
                        return t;
                    }),
                    (d.prototype.logicalXOR = function () {
                        var t = this.logicalAND();
                        if ("xor" === this.current().value) {
                            var n = this.consume(),
                                e = this.logicalXOR();
                            return new s(n.value, [t, e]);
                        }
                        return t;
                    }),
                    (d.prototype.logicalAND = function () {
                        var t = this.bitwiseOR();
                        if (this.peek("&&")) {
                            var n = this.consume(),
                                e = this.logicalAND();
                            return new s(n.value, [t, e]);
                        }
                        return t;
                    }),
                    (d.prototype.bitwiseOR = function () {
                        var t = this.bitwiseXOR();
                        if (this.peek("|")) {
                            var n = this.consume(),
                                e = this.bitwiseOR();
                            return new s(n.value, [t, e]);
                        }
                        return t;
                    }),
                    (d.prototype.bitwiseXOR = function () {
                        var t = this.bitwiseAND();
                        if (this.peek("^|")) {
                            var n = this.consume(),
                                e = this.bitwiseXOR();
                            return new s(n.value, [t, e]);
                        }
                        return t;
                    }),
                    (d.prototype.bitwiseAND = function () {
                        var t = this.relational();
                        if (this.peek("&")) {
                            var n = this.consume(),
                                e = this.bitwiseAND();
                            return new s(n.value, [t, e]);
                        }
                        return t;
                    }),
                    (d.prototype.relational = function () {
                        var t = this.shift();
                        if (
                            this.peek(
                                "==",
                                "===",
                                "!=",
                                "!==",
                                ">=",
                                "<=",
                                ">",
                                "<"
                            )
                        ) {
                            var n = this.consume(),
                                e = this.shift();
                            return new s(n.value, [t, e]);
                        }
                        return t;
                    }),
                    (d.prototype.shift = function () {
                        var t = this.additive();
                        if (this.peek(">>", "<<", ">>>")) {
                            var n = this.consume(),
                                e = this.shift();
                            return new s(n.value, [t, e]);
                        }
                        return t;
                    }),
                    (d.prototype.additive = function () {
                        for (
                            var t = this.multiplicative();
                            this.peek("+", "-");

                        ) {
                            var n = this.consume();
                            t = new s(n.value, [t, this.multiplicative()]);
                        }
                        return t;
                    }),
                    (d.prototype.multiplicative = function () {
                        for (
                            var t, n, e = this.unary();
                            this.peek("*", "/", "%");

                        )
                            (t = this.consume()),
                                (e = new s(t.value, [e, this.unary()]));
                        return this.current().type === i.SYMBOL ||
                            this.peek("(") ||
                            (!(e.type instanceof o) &&
                                this.current().type === i.NUMBER)
                            ? ((n = this.multiplicative()), new s("*", [e, n]))
                            : e;
                    }),
                    (d.prototype.unary = function () {
                        if (this.peek("-", "+", "~")) {
                            var t = this.consume(),
                                n = this.unary();
                            return new a(t.value, n);
                        }
                        return this.pow();
                    }),
                    (d.prototype.pow = function () {
                        var t = this.factorial();
                        if (this.peek("^", "**")) {
                            var n = this.consume(),
                                e = this.unary();
                            return new s(n.value, [t, e]);
                        }
                        return t;
                    }),
                    (d.prototype.factorial = function () {
                        var t = this.symbol();
                        if (this.peek("!")) {
                            var n = this.consume();
                            return new s(n.value, [t]);
                        }
                        return t;
                    }),
                    (d.prototype.symbol = function () {
                        if (this.current().type === i.SYMBOL) {
                            var t = this.consume();
                            return this.functionCall(t);
                        }
                        return this.string();
                    }),
                    (d.prototype.functionCall = function (t) {
                        var n = t.value;
                        if (this.peek("(")) {
                            this.consume();
                            for (var e = []; !this.peek(")") && !this.isEOF(); )
                                e.push(this.assignment()),
                                    this.peek(",") && this.consume();
                            return this.expect(")"), new c(n, e);
                        }
                        return new u(n);
                    }),
                    (d.prototype.string = function () {
                        return this.current().type === i.STRING
                            ? new o(this.consume().value, "string")
                            : this.array();
                    }),
                    (d.prototype.array = function () {
                        if (this.peek("[")) {
                            this.consume();
                            for (var t = []; !this.peek("]") && !this.isEOF(); )
                                t.push(this.assignment()),
                                    this.peek(",") && this.consume();
                            return this.expect("]"), new l(t);
                        }
                        return this.number();
                    }),
                    (d.prototype.number = function () {
                        return this.current().type === i.NUMBER
                            ? new o(this.consume().value, "number")
                            : this.parentheses();
                    }),
                    (d.prototype.parentheses = function () {
                        if ("(" === this.current().value) {
                            this.consume();
                            var t = this.assignment();
                            return this.expect(")"), t;
                        }
                        return this.end();
                    }),
                    (d.prototype.end = function () {
                        if (this.current().type !== i.EOF)
                            throw Error("unexpected end of expression");
                    }),
                    (t.exports = d);
            },
            3862: (t, n, e) => {
                var i = e(7111);
                function r(t) {
                    this.nodes = t;
                }
                (r.prototype = Object.create(i.prototype)),
                    (r.prototype.type = "ArrayNode"),
                    (t.exports = r);
            },
            3262: (t, n, e) => {
                var i = e(7111);
                function r(t, n) {
                    (this.name = t), (this.expr = n);
                }
                (r.prototype = Object.create(i.prototype)),
                    (r.prototype.type = "AssignmentNode"),
                    (t.exports = r);
            },
            2962: (t, n, e) => {
                var i = e(7111);
                function r(t) {
                    this.blocks = t;
                }
                (r.prototype = Object.create(i.prototype)),
                    (r.prototype.type = "BlockNode"),
                    (t.exports = r);
            },
            9322: (t, n, e) => {
                var i = e(7111);
                function r(t, n, e) {
                    (this.condition = t),
                        (this.trueExpr = n),
                        (this.falseExpr = e);
                }
                (r.prototype = Object.create(i.prototype)),
                    (r.prototype.type = "ConditionalNode"),
                    (t.exports = r);
            },
            6311: (t, n, e) => {
                var i = e(7111),
                    r = {
                        number: !0,
                        string: !0,
                        boolean: !0,
                        undefined: !0,
                        null: !0,
                    };
                function o(t, n) {
                    if (!r[n]) throw Error("unsupported type '" + n + "'");
                    (this.value = t), (this.valueType = n);
                }
                (o.prototype = Object.create(i.prototype)),
                    (o.prototype.type = "ConstantNode"),
                    (t.exports = o);
            },
            8935: (t, n, e) => {
                var i = e(7111);
                function r(t, n) {
                    (this.name = t), (this.args = n);
                }
                (r.prototype = Object.create(i.prototype)),
                    (r.prototype.type = "FunctionNode"),
                    (t.exports = r);
            },
            7111: (t) => {
                function n() {}
                (n.prototype.type = "Node"), (t.exports = n);
            },
            6565: (t, n, e) => {
                var i = e(7111);
                function r(t, n) {
                    (this.op = t), (this.args = n || []);
                }
                (r.prototype = Object.create(i.prototype)),
                    (r.prototype.type = "OperatorNode"),
                    (t.exports = r);
            },
            2514: (t, n, e) => {
                var i = e(7111);
                function r(t) {
                    this.name = t;
                }
                (r.prototype = Object.create(i.prototype)),
                    (r.prototype.type = "SymbolNode"),
                    (t.exports = r);
            },
            5543: (t, n, e) => {
                var i = e(7111);
                function r(t, n) {
                    (this.op = t), (this.argument = n);
                }
                (r.prototype = Object.create(i.prototype)),
                    (r.prototype.type = "UnaryNode"),
                    (t.exports = r);
            },
            3450: (t, n, e) => {
                t.exports = {
                    ArrayNode: e(3862),
                    AssignmentNode: e(3262),
                    BlockNode: e(2962),
                    ConditionalNode: e(9322),
                    ConstantNode: e(6311),
                    FunctionNode: e(8935),
                    Node: e(7111),
                    OperatorNode: e(6565),
                    SymbolNode: e(2514),
                    UnaryNode: e(5543),
                };
            },
            5054: (t) => {
                t.exports = {
                    EOF: 0,
                    DELIMITER: 1,
                    NUMBER: 2,
                    STRING: 3,
                    SYMBOL: 4,
                };
            },
            3093: (t, n, e) => {
                "use strict";
                var i = e(4635),
                    r = Math.pow(2, -1074),
                    o = -1 >>> 0;
                t.exports = function (t, n) {
                    if (isNaN(t) || isNaN(n)) return NaN;
                    if (t === n) return t;
                    if (0 === t) return n < 0 ? -r : r;
                    var e = i.hi(t),
                        s = i.lo(t);
                    return (
                        n > t == t > 0
                            ? s === o
                                ? ((e += 1), (s = 0))
                                : (s += 1)
                            : 0 === s
                            ? ((s = o), (e -= 1))
                            : (s -= 1),
                        i.pack(s, e)
                    );
                };
            },
            6643: function (t, n, e) {
                "use strict";
                var i,
                    r =
                        (this && this.__extends) ||
                        ((i = function (t, n) {
                            return (
                                (i =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, n) {
                                            t.__proto__ = n;
                                        }) ||
                                    function (t, n) {
                                        for (var e in n)
                                            Object.prototype.hasOwnProperty.call(
                                                n,
                                                e
                                            ) && (t[e] = n[e]);
                                    }),
                                i(t, n)
                            );
                        }),
                        function (t, n) {
                            if ("function" != typeof n && null !== n)
                                throw new TypeError(
                                    "Class extends value " +
                                        String(n) +
                                        " is not a constructor or null"
                                );
                            function e() {
                                this.constructor = t;
                            }
                            i(t, n),
                                (t.prototype =
                                    null === n
                                        ? Object.create(n)
                                        : ((e.prototype = n.prototype),
                                          new e()));
                        }),
                    o =
                        (this && this.__awaiter) ||
                        function (t, n, e, i) {
                            return new (e || (e = Promise))(function (r, o) {
                                function s(t) {
                                    try {
                                        u(i.next(t));
                                    } catch (t) {
                                        o(t);
                                    }
                                }
                                function a(t) {
                                    try {
                                        u(i.throw(t));
                                    } catch (t) {
                                        o(t);
                                    }
                                }
                                function u(t) {
                                    var n;
                                    t.done
                                        ? r(t.value)
                                        : ((n = t.value),
                                          n instanceof e
                                              ? n
                                              : new e(function (t) {
                                                    t(n);
                                                })).then(s, a);
                                }
                                u((i = i.apply(t, n || [])).next());
                            });
                        },
                    s =
                        (this && this.__generator) ||
                        function (t, n) {
                            var e,
                                i,
                                r,
                                o,
                                s = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & r[0]) throw r[1];
                                        return r[1];
                                    },
                                    trys: [],
                                    ops: [],
                                };
                            return (
                                (o = { next: a(0), throw: a(1), return: a(2) }),
                                "function" == typeof Symbol &&
                                    (o[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                o
                            );
                            function a(o) {
                                return function (a) {
                                    return (function (o) {
                                        if (e)
                                            throw new TypeError(
                                                "Generator is already executing."
                                            );
                                        for (; s; )
                                            try {
                                                if (
                                                    ((e = 1),
                                                    i &&
                                                        (r =
                                                            2 & o[0]
                                                                ? i.return
                                                                : o[0]
                                                                ? i.throw ||
                                                                  ((r =
                                                                      i.return) &&
                                                                      r.call(i),
                                                                  0)
                                                                : i.next) &&
                                                        !(r = r.call(i, o[1]))
                                                            .done)
                                                )
                                                    return r;
                                                switch (
                                                    ((i = 0),
                                                    r &&
                                                        (o = [
                                                            2 & o[0],
                                                            r.value,
                                                        ]),
                                                    o[0])
                                                ) {
                                                    case 0:
                                                    case 1:
                                                        r = o;
                                                        break;
                                                    case 4:
                                                        return (
                                                            s.label++,
                                                            {
                                                                value: o[1],
                                                                done: !1,
                                                            }
                                                        );
                                                    case 5:
                                                        s.label++,
                                                            (i = o[1]),
                                                            (o = [0]);
                                                        continue;
                                                    case 7:
                                                        (o = s.ops.pop()),
                                                            s.trys.pop();
                                                        continue;
                                                    default:
                                                        if (
                                                            !(
                                                                (r =
                                                                    (r = s.trys)
                                                                        .length >
                                                                        0 &&
                                                                    r[
                                                                        r.length -
                                                                            1
                                                                    ]) ||
                                                                (6 !== o[0] &&
                                                                    2 !== o[0])
                                                            )
                                                        ) {
                                                            s = 0;
                                                            continue;
                                                        }
                                                        if (
                                                            3 === o[0] &&
                                                            (!r ||
                                                                (o[1] > r[0] &&
                                                                    o[1] <
                                                                        r[3]))
                                                        ) {
                                                            s.label = o[1];
                                                            break;
                                                        }
                                                        if (
                                                            6 === o[0] &&
                                                            s.label < r[1]
                                                        ) {
                                                            (s.label = r[1]),
                                                                (r = o);
                                                            break;
                                                        }
                                                        if (
                                                            r &&
                                                            s.label < r[2]
                                                        ) {
                                                            (s.label = r[2]),
                                                                s.ops.push(o);
                                                            break;
                                                        }
                                                        r[2] && s.ops.pop(),
                                                            s.trys.pop();
                                                        continue;
                                                }
                                                o = n.call(t, s);
                                            } catch (t) {
                                                (o = [6, t]), (i = 0);
                                            } finally {
                                                e = r = 0;
                                            }
                                        if (5 & o[0]) throw o[1];
                                        return {
                                            value: o[0] ? o[1] : void 0,
                                            done: !0,
                                        };
                                    })([o, a]);
                                };
                            }
                        };
                n.__esModule = !0;
                var a = e(5144),
                    u = e(9699),
                    c = e(8519),
                    l = (function (t) {
                        function n(n, e, i) {
                            var r = t.call(this, n) || this;
                            return (r.plugin = e), (r.onSubmit = i), r;
                        }
                        return (
                            r(n, t),
                            (n.prototype.reloadPreview = function () {
                                return o(this, void 0, void 0, function () {
                                    return s(this, function (t) {
                                        if (!this.plot) return [2];
                                        (this.plot.options.title =
                                            this.options.title),
                                            (this.plot.options.xAxis.label =
                                                this.options.xLabel),
                                            (this.plot.options.yAxis.label =
                                                this.options.yLabel),
                                            (this.plot.options.xAxis.domain =
                                                this.options.bounds.slice(
                                                    0,
                                                    2
                                                )),
                                            (this.plot.options.yAxis.domain =
                                                this.options.bounds.slice(
                                                    2,
                                                    4
                                                )),
                                            (this.plot.options.grid =
                                                this.options.grid),
                                            (this.plot.options.data =
                                                this.options.functions.map(
                                                    function (t) {
                                                        return {
                                                            fn: t.split("=")[1],
                                                            graphType:
                                                                "polyline",
                                                        };
                                                    }
                                                ));
                                        try {
                                            this.plot.build();
                                        } catch (t) {
                                            console.debug(t);
                                        }
                                        return [2];
                                    });
                                });
                            }),
                            (n.prototype.onOpen = function () {
                                return o(this, void 0, void 0, function () {
                                    var t,
                                        n,
                                        e,
                                        i,
                                        r,
                                        l = this;
                                    return s(this, function (h) {
                                        switch (h.label) {
                                            case 0:
                                                return (
                                                    (this.options =
                                                        Object.assign(
                                                            {},
                                                            u.DEFAULT_PLOT_OPTIONS
                                                        )),
                                                    (t =
                                                        this.contentEl).empty(),
                                                    t.createEl("h1", {
                                                        text: "Plot a function",
                                                    }),
                                                    (n = t.createDiv({
                                                        attr: {
                                                            style: "display: flex; align-items: center",
                                                        },
                                                    })),
                                                    (e = n.createDiv()),
                                                    (i = n.createDiv({
                                                        attr: {
                                                            style: "padding: 1em",
                                                        },
                                                    })),
                                                    (r = this),
                                                    [
                                                        4,
                                                        (0, c.createPlot)(
                                                            Object.assign(
                                                                {},
                                                                this.options,
                                                                {
                                                                    disableZoom:
                                                                        !0,
                                                                }
                                                            ),
                                                            i.createDiv(),
                                                            this.plugin
                                                        ),
                                                    ]
                                                );
                                            case 1:
                                                return (
                                                    (r.plot = h.sent()),
                                                    i.createEl("p", {
                                                        text: "Preview - Zoom is disabled while in preview",
                                                        attr: {
                                                            style: "margin: 0 3em; font-size: 0.8em; color: var(--text-faint)",
                                                        },
                                                    }),
                                                    new a.Setting(e)
                                                        .setName("Title")
                                                        .addText(function (t) {
                                                            t.onChange(
                                                                function (t) {
                                                                    return o(
                                                                        l,
                                                                        void 0,
                                                                        void 0,
                                                                        function () {
                                                                            return s(
                                                                                this,
                                                                                function (
                                                                                    n
                                                                                ) {
                                                                                    switch (
                                                                                        n.label
                                                                                    ) {
                                                                                        case 0:
                                                                                            return (
                                                                                                (this.options.title =
                                                                                                    t),
                                                                                                [
                                                                                                    4,
                                                                                                    this.reloadPreview(),
                                                                                                ]
                                                                                            );
                                                                                        case 1:
                                                                                            return (
                                                                                                n.sent(),
                                                                                                [
                                                                                                    2,
                                                                                                ]
                                                                                            );
                                                                                    }
                                                                                }
                                                                            );
                                                                        }
                                                                    );
                                                                }
                                                            );
                                                        }),
                                                    new a.Setting(e)
                                                        .setName("Label X")
                                                        .addText(function (t) {
                                                            t.onChange(
                                                                function (t) {
                                                                    return o(
                                                                        l,
                                                                        void 0,
                                                                        void 0,
                                                                        function () {
                                                                            return s(
                                                                                this,
                                                                                function (
                                                                                    n
                                                                                ) {
                                                                                    switch (
                                                                                        n.label
                                                                                    ) {
                                                                                        case 0:
                                                                                            return (
                                                                                                (this.options.xLabel =
                                                                                                    t),
                                                                                                [
                                                                                                    4,
                                                                                                    this.reloadPreview(),
                                                                                                ]
                                                                                            );
                                                                                        case 1:
                                                                                            return (
                                                                                                n.sent(),
                                                                                                [
                                                                                                    2,
                                                                                                ]
                                                                                            );
                                                                                    }
                                                                                }
                                                                            );
                                                                        }
                                                                    );
                                                                }
                                                            );
                                                        }),
                                                    new a.Setting(e)
                                                        .setName("Label Y")
                                                        .addText(function (t) {
                                                            t.onChange(
                                                                function (t) {
                                                                    return o(
                                                                        l,
                                                                        void 0,
                                                                        void 0,
                                                                        function () {
                                                                            return s(
                                                                                this,
                                                                                function (
                                                                                    n
                                                                                ) {
                                                                                    switch (
                                                                                        n.label
                                                                                    ) {
                                                                                        case 0:
                                                                                            return (
                                                                                                (this.options.yLabel =
                                                                                                    t),
                                                                                                [
                                                                                                    4,
                                                                                                    this.reloadPreview(),
                                                                                                ]
                                                                                            );
                                                                                        case 1:
                                                                                            return (
                                                                                                n.sent(),
                                                                                                [
                                                                                                    2,
                                                                                                ]
                                                                                            );
                                                                                    }
                                                                                }
                                                                            );
                                                                        }
                                                                    );
                                                                }
                                                            );
                                                        }),
                                                    new a.Setting(e)
                                                        .setName("Bounds")
                                                        .setDesc(
                                                            "Bounds must be written in this format: minX, maxX, minY, maxY"
                                                        )
                                                        .addText(function (t) {
                                                            t.setPlaceholder(
                                                                u.DEFAULT_PLOT_OPTIONS.bounds.join(
                                                                    ", "
                                                                )
                                                            ),
                                                                t.onChange(
                                                                    function (
                                                                        n
                                                                    ) {
                                                                        return o(
                                                                            l,
                                                                            void 0,
                                                                            void 0,
                                                                            function () {
                                                                                var n,
                                                                                    e;
                                                                                return s(
                                                                                    this,
                                                                                    function (
                                                                                        i
                                                                                    ) {
                                                                                        switch (
                                                                                            i.label
                                                                                        ) {
                                                                                            case 0:
                                                                                                return (
                                                                                                    (n =
                                                                                                        t
                                                                                                            .getValue()
                                                                                                            .split(
                                                                                                                ","
                                                                                                            )
                                                                                                            .map(
                                                                                                                function (
                                                                                                                    t
                                                                                                                ) {
                                                                                                                    return parseFloat(
                                                                                                                        t
                                                                                                                    );
                                                                                                                }
                                                                                                            )),
                                                                                                    0 ===
                                                                                                        (e =
                                                                                                            n.filter(
                                                                                                                function (
                                                                                                                    t
                                                                                                                ) {
                                                                                                                    return !isNaN(
                                                                                                                        t
                                                                                                                    );
                                                                                                                }
                                                                                                            ).length) &&
                                                                                                        (n =
                                                                                                            u
                                                                                                                .DEFAULT_PLOT_OPTIONS
                                                                                                                .bounds),
                                                                                                    e >=
                                                                                                        4 ||
                                                                                                    0 ===
                                                                                                        e
                                                                                                        ? ((this.options.bounds =
                                                                                                              n),
                                                                                                          [
                                                                                                              4,
                                                                                                              this.reloadPreview(),
                                                                                                          ])
                                                                                                        : [
                                                                                                              3,
                                                                                                              2,
                                                                                                          ]
                                                                                                );
                                                                                            case 1:
                                                                                                i.sent(),
                                                                                                    (i.label = 2);
                                                                                            case 2:
                                                                                                return [
                                                                                                    2,
                                                                                                ];
                                                                                        }
                                                                                    }
                                                                                );
                                                                            }
                                                                        );
                                                                    }
                                                                );
                                                        }),
                                                    new a.Setting(e)
                                                        .setName("Disable Zoom")
                                                        .addToggle(function (
                                                            t
                                                        ) {
                                                            t.setValue(
                                                                l.options
                                                                    .disableZoom
                                                            ),
                                                                t.onChange(
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        return o(
                                                                            l,
                                                                            void 0,
                                                                            void 0,
                                                                            function () {
                                                                                return s(
                                                                                    this,
                                                                                    function (
                                                                                        n
                                                                                    ) {
                                                                                        switch (
                                                                                            n.label
                                                                                        ) {
                                                                                            case 0:
                                                                                                return (
                                                                                                    (this.options.disableZoom =
                                                                                                        t),
                                                                                                    [
                                                                                                        4,
                                                                                                        this.reloadPreview(),
                                                                                                    ]
                                                                                                );
                                                                                            case 1:
                                                                                                return (
                                                                                                    n.sent(),
                                                                                                    [
                                                                                                        2,
                                                                                                    ]
                                                                                                );
                                                                                        }
                                                                                    }
                                                                                );
                                                                            }
                                                                        );
                                                                    }
                                                                );
                                                        }),
                                                    new a.Setting(e)
                                                        .setName("Enable Grid")
                                                        .addToggle(function (
                                                            t
                                                        ) {
                                                            t.setValue(
                                                                l.options.grid
                                                            ),
                                                                t.onChange(
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        return o(
                                                                            l,
                                                                            void 0,
                                                                            void 0,
                                                                            function () {
                                                                                return s(
                                                                                    this,
                                                                                    function (
                                                                                        n
                                                                                    ) {
                                                                                        switch (
                                                                                            n.label
                                                                                        ) {
                                                                                            case 0:
                                                                                                return (
                                                                                                    (this.options.grid =
                                                                                                        t),
                                                                                                    [
                                                                                                        4,
                                                                                                        this.reloadPreview(),
                                                                                                    ]
                                                                                                );
                                                                                            case 1:
                                                                                                return (
                                                                                                    n.sent(),
                                                                                                    [
                                                                                                        2,
                                                                                                    ]
                                                                                                );
                                                                                        }
                                                                                    }
                                                                                );
                                                                            }
                                                                        );
                                                                    }
                                                                );
                                                        }),
                                                    new a.Setting(e)
                                                        .setName("Functions")
                                                        .setDesc(
                                                            "Specify functions to plot. Must be in format: <name>(x) = <expression>"
                                                        )
                                                        .addTextArea(function (
                                                            t
                                                        ) {
                                                            t.onChange(
                                                                function (t) {
                                                                    return o(
                                                                        l,
                                                                        void 0,
                                                                        void 0,
                                                                        function () {
                                                                            return s(
                                                                                this,
                                                                                function (
                                                                                    n
                                                                                ) {
                                                                                    switch (
                                                                                        n.label
                                                                                    ) {
                                                                                        case 0:
                                                                                            return t.trim()
                                                                                                ? ((this.options.functions =
                                                                                                      t
                                                                                                          .split(
                                                                                                              "\n"
                                                                                                          )
                                                                                                          .map(
                                                                                                              function (
                                                                                                                  t
                                                                                                              ) {
                                                                                                                  return (
                                                                                                                      t.trim() ||
                                                                                                                      void 0
                                                                                                                  );
                                                                                                              }
                                                                                                          )),
                                                                                                  [
                                                                                                      4,
                                                                                                      this.reloadPreview(),
                                                                                                  ])
                                                                                                : [
                                                                                                      2,
                                                                                                  ];
                                                                                        case 1:
                                                                                            return (
                                                                                                n.sent(),
                                                                                                [
                                                                                                    2,
                                                                                                ]
                                                                                            );
                                                                                    }
                                                                                }
                                                                            );
                                                                        }
                                                                    );
                                                                }
                                                            );
                                                        }),
                                                    new a.Setting(t).addButton(
                                                        function (t) {
                                                            t.setButtonText(
                                                                "Plot"
                                                            )
                                                                .setCta()
                                                                .onClick(
                                                                    function () {
                                                                        l.close(),
                                                                            l.onSubmit(
                                                                                {
                                                                                    title: l
                                                                                        .options
                                                                                        .title,
                                                                                    xLabel: l
                                                                                        .options
                                                                                        .xLabel,
                                                                                    yLabel: l
                                                                                        .options
                                                                                        .yLabel,
                                                                                    bounds: l
                                                                                        .options
                                                                                        .bounds,
                                                                                    disableZoom:
                                                                                        l
                                                                                            .options
                                                                                            .disableZoom,
                                                                                    grid: l
                                                                                        .options
                                                                                        .grid,
                                                                                    functions:
                                                                                        l
                                                                                            .options
                                                                                            .functions,
                                                                                }
                                                                            );
                                                                    }
                                                                );
                                                        }
                                                    ),
                                                    [2]
                                                );
                                        }
                                    });
                                });
                            }),
                            (n.prototype.onClose = function () {
                                return o(this, void 0, void 0, function () {
                                    return s(this, function (t) {
                                        return (
                                            this.contentEl.empty(),
                                            (this.plot = null),
                                            [2]
                                        );
                                    });
                                });
                            }),
                            n
                        );
                    })(a.Modal);
                n.default = l;
            },
            831: function (t, n, e) {
                "use strict";
                var i,
                    r =
                        (this && this.__extends) ||
                        ((i = function (t, n) {
                            return (
                                (i =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, n) {
                                            t.__proto__ = n;
                                        }) ||
                                    function (t, n) {
                                        for (var e in n)
                                            Object.prototype.hasOwnProperty.call(
                                                n,
                                                e
                                            ) && (t[e] = n[e]);
                                    }),
                                i(t, n)
                            );
                        }),
                        function (t, n) {
                            if ("function" != typeof n && null !== n)
                                throw new TypeError(
                                    "Class extends value " +
                                        String(n) +
                                        " is not a constructor or null"
                                );
                            function e() {
                                this.constructor = t;
                            }
                            i(t, n),
                                (t.prototype =
                                    null === n
                                        ? Object.create(n)
                                        : ((e.prototype = n.prototype),
                                          new e()));
                        }),
                    o =
                        (this && this.__awaiter) ||
                        function (t, n, e, i) {
                            return new (e || (e = Promise))(function (r, o) {
                                function s(t) {
                                    try {
                                        u(i.next(t));
                                    } catch (t) {
                                        o(t);
                                    }
                                }
                                function a(t) {
                                    try {
                                        u(i.throw(t));
                                    } catch (t) {
                                        o(t);
                                    }
                                }
                                function u(t) {
                                    var n;
                                    t.done
                                        ? r(t.value)
                                        : ((n = t.value),
                                          n instanceof e
                                              ? n
                                              : new e(function (t) {
                                                    t(n);
                                                })).then(s, a);
                                }
                                u((i = i.apply(t, n || [])).next());
                            });
                        },
                    s =
                        (this && this.__generator) ||
                        function (t, n) {
                            var e,
                                i,
                                r,
                                o,
                                s = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & r[0]) throw r[1];
                                        return r[1];
                                    },
                                    trys: [],
                                    ops: [],
                                };
                            return (
                                (o = { next: a(0), throw: a(1), return: a(2) }),
                                "function" == typeof Symbol &&
                                    (o[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                o
                            );
                            function a(o) {
                                return function (a) {
                                    return (function (o) {
                                        if (e)
                                            throw new TypeError(
                                                "Generator is already executing."
                                            );
                                        for (; s; )
                                            try {
                                                if (
                                                    ((e = 1),
                                                    i &&
                                                        (r =
                                                            2 & o[0]
                                                                ? i.return
                                                                : o[0]
                                                                ? i.throw ||
                                                                  ((r =
                                                                      i.return) &&
                                                                      r.call(i),
                                                                  0)
                                                                : i.next) &&
                                                        !(r = r.call(i, o[1]))
                                                            .done)
                                                )
                                                    return r;
                                                switch (
                                                    ((i = 0),
                                                    r &&
                                                        (o = [
                                                            2 & o[0],
                                                            r.value,
                                                        ]),
                                                    o[0])
                                                ) {
                                                    case 0:
                                                    case 1:
                                                        r = o;
                                                        break;
                                                    case 4:
                                                        return (
                                                            s.label++,
                                                            {
                                                                value: o[1],
                                                                done: !1,
                                                            }
                                                        );
                                                    case 5:
                                                        s.label++,
                                                            (i = o[1]),
                                                            (o = [0]);
                                                        continue;
                                                    case 7:
                                                        (o = s.ops.pop()),
                                                            s.trys.pop();
                                                        continue;
                                                    default:
                                                        if (
                                                            !(
                                                                (r =
                                                                    (r = s.trys)
                                                                        .length >
                                                                        0 &&
                                                                    r[
                                                                        r.length -
                                                                            1
                                                                    ]) ||
                                                                (6 !== o[0] &&
                                                                    2 !== o[0])
                                                            )
                                                        ) {
                                                            s = 0;
                                                            continue;
                                                        }
                                                        if (
                                                            3 === o[0] &&
                                                            (!r ||
                                                                (o[1] > r[0] &&
                                                                    o[1] <
                                                                        r[3]))
                                                        ) {
                                                            s.label = o[1];
                                                            break;
                                                        }
                                                        if (
                                                            6 === o[0] &&
                                                            s.label < r[1]
                                                        ) {
                                                            (s.label = r[1]),
                                                                (r = o);
                                                            break;
                                                        }
                                                        if (
                                                            r &&
                                                            s.label < r[2]
                                                        ) {
                                                            (s.label = r[2]),
                                                                s.ops.push(o);
                                                            break;
                                                        }
                                                        r[2] && s.ops.pop(),
                                                            s.trys.pop();
                                                        continue;
                                                }
                                                o = n.call(t, s);
                                            } catch (t) {
                                                (o = [6, t]), (i = 0);
                                            } finally {
                                                e = r = 0;
                                            }
                                        if (5 & o[0]) throw o[1];
                                        return {
                                            value: o[0] ? o[1] : void 0,
                                            done: !0,
                                        };
                                    })([o, a]);
                                };
                            }
                        };
                n.__esModule = !0;
                var a = e(5144),
                    u = e(9699),
                    c = (function (t) {
                        function n(n, e) {
                            var i = t.call(this, n, e) || this;
                            return (i.plugin = e), i;
                        }
                        return (
                            r(n, t),
                            (n.prototype.display = function () {
                                var t = this;
                                this.settingsInputs = new Map();
                                var n = this.containerEl;
                                n.empty(),
                                    n.createEl("h1", { text: "Settings" }),
                                    n.createEl("h3", { text: "Font Sizes" }),
                                    new a.Setting(n)
                                        .setName("Title Font Size")
                                        .setDesc(
                                            "Font size used for the title."
                                        )
                                        .addSlider(function (n) {
                                            t.settingsInputs.set(
                                                "titleFontSize",
                                                n
                                            ),
                                                n
                                                    .setLimits(8, 40, 2)
                                                    .setValue(
                                                        t.plugin.settings
                                                            .titleFontSize
                                                    )
                                                    .onChange(function (n) {
                                                        return o(
                                                            t,
                                                            void 0,
                                                            void 0,
                                                            function () {
                                                                return s(
                                                                    this,
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        switch (
                                                                            t.label
                                                                        ) {
                                                                            case 0:
                                                                                return (
                                                                                    (this.plugin.settings.titleFontSize =
                                                                                        n),
                                                                                    [
                                                                                        4,
                                                                                        this.plugin.saveSettings(),
                                                                                    ]
                                                                                );
                                                                            case 1:
                                                                                return (
                                                                                    t.sent(),
                                                                                    [
                                                                                        2,
                                                                                    ]
                                                                                );
                                                                        }
                                                                    }
                                                                );
                                                            }
                                                        );
                                                    })
                                                    .setDynamicTooltip();
                                        }),
                                    new a.Setting(n)
                                        .setName("Scale Font Size")
                                        .setDesc(
                                            "Font size used for the axis scales."
                                        )
                                        .addSlider(function (n) {
                                            t.settingsInputs.set(
                                                "scaleFontSize",
                                                n
                                            ),
                                                n
                                                    .setLimits(4, 20, 1)
                                                    .setValue(
                                                        t.plugin.settings
                                                            .scaleFontSize
                                                    )
                                                    .onChange(function (n) {
                                                        return o(
                                                            t,
                                                            void 0,
                                                            void 0,
                                                            function () {
                                                                return s(
                                                                    this,
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        switch (
                                                                            t.label
                                                                        ) {
                                                                            case 0:
                                                                                return (
                                                                                    (this.plugin.settings.scaleFontSize =
                                                                                        n),
                                                                                    [
                                                                                        4,
                                                                                        this.plugin.saveSettings(),
                                                                                    ]
                                                                                );
                                                                            case 1:
                                                                                return (
                                                                                    t.sent(),
                                                                                    [
                                                                                        2,
                                                                                    ]
                                                                                );
                                                                        }
                                                                    }
                                                                );
                                                            }
                                                        );
                                                    })
                                                    .setDynamicTooltip();
                                        }),
                                    new a.Setting(n)
                                        .setName("Label Font Size")
                                        .setDesc(
                                            "Font size used for the axis labels."
                                        )
                                        .addSlider(function (n) {
                                            t.settingsInputs.set(
                                                "labelFontSize",
                                                n
                                            ),
                                                n
                                                    .setLimits(4, 20, 1)
                                                    .setValue(
                                                        t.plugin.settings
                                                            .labelFontSize
                                                    )
                                                    .onChange(function (n) {
                                                        return o(
                                                            t,
                                                            void 0,
                                                            void 0,
                                                            function () {
                                                                return s(
                                                                    this,
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        switch (
                                                                            t.label
                                                                        ) {
                                                                            case 0:
                                                                                return (
                                                                                    (this.plugin.settings.labelFontSize =
                                                                                        n),
                                                                                    [
                                                                                        4,
                                                                                        this.plugin.saveSettings(),
                                                                                    ]
                                                                                );
                                                                            case 1:
                                                                                return (
                                                                                    t.sent(),
                                                                                    [
                                                                                        2,
                                                                                    ]
                                                                                );
                                                                        }
                                                                    }
                                                                );
                                                            }
                                                        );
                                                    })
                                                    .setDynamicTooltip();
                                        }),
                                    n.createEl("h3", { text: "Line Widths" }),
                                    new a.Setting(n)
                                        .setName("Line Width")
                                        .setDesc(
                                            "Line width used for the domain- and origin-lines."
                                        )
                                        .addSlider(function (n) {
                                            t.settingsInputs.set(
                                                "lineWidth",
                                                n
                                            ),
                                                n
                                                    .setLimits(1, 4, 1)
                                                    .setValue(
                                                        t.plugin.settings
                                                            .lineWidth
                                                    )
                                                    .onChange(function (n) {
                                                        return o(
                                                            t,
                                                            void 0,
                                                            void 0,
                                                            function () {
                                                                return s(
                                                                    this,
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        switch (
                                                                            t.label
                                                                        ) {
                                                                            case 0:
                                                                                return (
                                                                                    (this.plugin.settings.lineWidth =
                                                                                        n),
                                                                                    [
                                                                                        4,
                                                                                        this.plugin.saveSettings(),
                                                                                    ]
                                                                                );
                                                                            case 1:
                                                                                return (
                                                                                    t.sent(),
                                                                                    [
                                                                                        2,
                                                                                    ]
                                                                                );
                                                                        }
                                                                    }
                                                                );
                                                            }
                                                        );
                                                    })
                                                    .setDynamicTooltip();
                                        }),
                                    new a.Setting(n)
                                        .setName("Grid Line Width")
                                        .setDesc(
                                            "Line width used for the gridlines."
                                        )
                                        .addSlider(function (n) {
                                            t.settingsInputs.set(
                                                "gridWidth",
                                                n
                                            ),
                                                n
                                                    .setLimits(1, 4, 1)
                                                    .setValue(
                                                        t.plugin.settings
                                                            .gridWidth
                                                    )
                                                    .onChange(function (n) {
                                                        return o(
                                                            t,
                                                            void 0,
                                                            void 0,
                                                            function () {
                                                                return s(
                                                                    this,
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        switch (
                                                                            t.label
                                                                        ) {
                                                                            case 0:
                                                                                return (
                                                                                    (this.plugin.settings.gridWidth =
                                                                                        n),
                                                                                    [
                                                                                        4,
                                                                                        this.plugin.saveSettings(),
                                                                                    ]
                                                                                );
                                                                            case 1:
                                                                                return (
                                                                                    t.sent(),
                                                                                    [
                                                                                        2,
                                                                                    ]
                                                                                );
                                                                        }
                                                                    }
                                                                );
                                                            }
                                                        );
                                                    })
                                                    .setDynamicTooltip();
                                        }),
                                    n.createEl("h3", {
                                        attr: { style: "margin-bottom: 0" },
                                        text: "Colors",
                                    }),
                                    n.createEl("p", {
                                        attr: {
                                            style: "margin-top: 8px; font-size: 0.8em; color: var(--text-faint)",
                                        },
                                        text: "Use any of the web formats (name, hex, rgb, rgba, ...) or css variables.",
                                    }),
                                    new a.Setting(n)
                                        .setName("Font Color")
                                        .setDesc(
                                            "Color used for the title and labels. "
                                        )
                                        .addText(function (n) {
                                            t.settingsInputs.set(
                                                "fontColor",
                                                n
                                            ),
                                                n
                                                    .setValue(
                                                        t.plugin.settings
                                                            .fontColor
                                                    )
                                                    .onChange(function (n) {
                                                        return o(
                                                            t,
                                                            void 0,
                                                            void 0,
                                                            function () {
                                                                return s(
                                                                    this,
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        switch (
                                                                            t.label
                                                                        ) {
                                                                            case 0:
                                                                                return (
                                                                                    (this.plugin.settings.fontColor =
                                                                                        n),
                                                                                    [
                                                                                        4,
                                                                                        this.plugin.saveSettings(),
                                                                                    ]
                                                                                );
                                                                            case 1:
                                                                                return (
                                                                                    t.sent(),
                                                                                    [
                                                                                        2,
                                                                                    ]
                                                                                );
                                                                        }
                                                                    }
                                                                );
                                                            }
                                                        );
                                                    });
                                        }),
                                    new a.Setting(n)
                                        .setName("Line Color")
                                        .setDesc(
                                            "Color used for the domain- and origin-lines. "
                                        )
                                        .addText(function (n) {
                                            t.settingsInputs.set(
                                                "lineColor",
                                                n
                                            ),
                                                n
                                                    .setValue(
                                                        t.plugin.settings
                                                            .lineColor
                                                    )
                                                    .onChange(function (n) {
                                                        return o(
                                                            t,
                                                            void 0,
                                                            void 0,
                                                            function () {
                                                                return s(
                                                                    this,
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        switch (
                                                                            t.label
                                                                        ) {
                                                                            case 0:
                                                                                return (
                                                                                    (this.plugin.settings.lineColor =
                                                                                        n),
                                                                                    [
                                                                                        4,
                                                                                        this.plugin.saveSettings(),
                                                                                    ]
                                                                                );
                                                                            case 1:
                                                                                return (
                                                                                    t.sent(),
                                                                                    [
                                                                                        2,
                                                                                    ]
                                                                                );
                                                                        }
                                                                    }
                                                                );
                                                            }
                                                        );
                                                    });
                                        }),
                                    new a.Setting(n)
                                        .setName("Grid Color")
                                        .setDesc(
                                            "Color used for the gridlines. "
                                        )
                                        .addText(function (n) {
                                            t.settingsInputs.set(
                                                "gridColor",
                                                n
                                            ),
                                                n
                                                    .setValue(
                                                        t.plugin.settings
                                                            .gridColor
                                                    )
                                                    .onChange(function (n) {
                                                        return o(
                                                            t,
                                                            void 0,
                                                            void 0,
                                                            function () {
                                                                return s(
                                                                    this,
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        switch (
                                                                            t.label
                                                                        ) {
                                                                            case 0:
                                                                                return (
                                                                                    (this.plugin.settings.gridColor =
                                                                                        n),
                                                                                    [
                                                                                        4,
                                                                                        this.plugin.saveSettings(),
                                                                                    ]
                                                                                );
                                                                            case 1:
                                                                                return (
                                                                                    t.sent(),
                                                                                    [
                                                                                        2,
                                                                                    ]
                                                                                );
                                                                        }
                                                                    }
                                                                );
                                                            }
                                                        );
                                                    });
                                        }),
                                    new a.Setting(n)
                                        .addButton(function (n) {
                                            n.setButtonText(
                                                "Reset Settings to Default"
                                            )
                                                .setWarning()
                                                .onClick(function (n) {
                                                    Object.assign(
                                                        t.plugin.settings,
                                                        u.DEFAULT_PLOT_PLUGIN_SETTINGS
                                                    ),
                                                        t.settingsInputs.forEach(
                                                            function (n, e) {
                                                                n.setValue(
                                                                    t.plugin
                                                                        .settings[
                                                                        e
                                                                    ]
                                                                );
                                                            }
                                                        ),
                                                        t.plugin.saveSettings(),
                                                        new a.Notice(
                                                            "Obsidian Functionplot: Settings reset to default."
                                                        );
                                                });
                                        })
                                        .addButton(function (t) {
                                            t.setButtonText("Save")
                                                .setCta()
                                                .onClick(function (t) {
                                                    new a.Notice(
                                                        "Obsidian Functionplot: Settings saved."
                                                    );
                                                });
                                        });
                            }),
                            n
                        );
                    })(a.PluginSettingTab);
                n.default = c;
            },
            8519: function (t, n, e) {
                "use strict";
                var i,
                    r =
                        (this && this.__extends) ||
                        ((i = function (t, n) {
                            return (
                                (i =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, n) {
                                            t.__proto__ = n;
                                        }) ||
                                    function (t, n) {
                                        for (var e in n)
                                            Object.prototype.hasOwnProperty.call(
                                                n,
                                                e
                                            ) && (t[e] = n[e]);
                                    }),
                                i(t, n)
                            );
                        }),
                        function (t, n) {
                            if ("function" != typeof n && null !== n)
                                throw new TypeError(
                                    "Class extends value " +
                                        String(n) +
                                        " is not a constructor or null"
                                );
                            function e() {
                                this.constructor = t;
                            }
                            i(t, n),
                                (t.prototype =
                                    null === n
                                        ? Object.create(n)
                                        : ((e.prototype = n.prototype),
                                          new e()));
                        }),
                    o =
                        (this && this.__awaiter) ||
                        function (t, n, e, i) {
                            return new (e || (e = Promise))(function (r, o) {
                                function s(t) {
                                    try {
                                        u(i.next(t));
                                    } catch (t) {
                                        o(t);
                                    }
                                }
                                function a(t) {
                                    try {
                                        u(i.throw(t));
                                    } catch (t) {
                                        o(t);
                                    }
                                }
                                function u(t) {
                                    var n;
                                    t.done
                                        ? r(t.value)
                                        : ((n = t.value),
                                          n instanceof e
                                              ? n
                                              : new e(function (t) {
                                                    t(n);
                                                })).then(s, a);
                                }
                                u((i = i.apply(t, n || [])).next());
                            });
                        },
                    s =
                        (this && this.__generator) ||
                        function (t, n) {
                            var e,
                                i,
                                r,
                                o,
                                s = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & r[0]) throw r[1];
                                        return r[1];
                                    },
                                    trys: [],
                                    ops: [],
                                };
                            return (
                                (o = { next: a(0), throw: a(1), return: a(2) }),
                                "function" == typeof Symbol &&
                                    (o[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                o
                            );
                            function a(o) {
                                return function (a) {
                                    return (function (o) {
                                        if (e)
                                            throw new TypeError(
                                                "Generator is already executing."
                                            );
                                        for (; s; )
                                            try {
                                                if (
                                                    ((e = 1),
                                                    i &&
                                                        (r =
                                                            2 & o[0]
                                                                ? i.return
                                                                : o[0]
                                                                ? i.throw ||
                                                                  ((r =
                                                                      i.return) &&
                                                                      r.call(i),
                                                                  0)
                                                                : i.next) &&
                                                        !(r = r.call(i, o[1]))
                                                            .done)
                                                )
                                                    return r;
                                                switch (
                                                    ((i = 0),
                                                    r &&
                                                        (o = [
                                                            2 & o[0],
                                                            r.value,
                                                        ]),
                                                    o[0])
                                                ) {
                                                    case 0:
                                                    case 1:
                                                        r = o;
                                                        break;
                                                    case 4:
                                                        return (
                                                            s.label++,
                                                            {
                                                                value: o[1],
                                                                done: !1,
                                                            }
                                                        );
                                                    case 5:
                                                        s.label++,
                                                            (i = o[1]),
                                                            (o = [0]);
                                                        continue;
                                                    case 7:
                                                        (o = s.ops.pop()),
                                                            s.trys.pop();
                                                        continue;
                                                    default:
                                                        if (
                                                            !(
                                                                (r =
                                                                    (r = s.trys)
                                                                        .length >
                                                                        0 &&
                                                                    r[
                                                                        r.length -
                                                                            1
                                                                    ]) ||
                                                                (6 !== o[0] &&
                                                                    2 !== o[0])
                                                            )
                                                        ) {
                                                            s = 0;
                                                            continue;
                                                        }
                                                        if (
                                                            3 === o[0] &&
                                                            (!r ||
                                                                (o[1] > r[0] &&
                                                                    o[1] <
                                                                        r[3]))
                                                        ) {
                                                            s.label = o[1];
                                                            break;
                                                        }
                                                        if (
                                                            6 === o[0] &&
                                                            s.label < r[1]
                                                        ) {
                                                            (s.label = r[1]),
                                                                (r = o);
                                                            break;
                                                        }
                                                        if (
                                                            r &&
                                                            s.label < r[2]
                                                        ) {
                                                            (s.label = r[2]),
                                                                s.ops.push(o);
                                                            break;
                                                        }
                                                        r[2] && s.ops.pop(),
                                                            s.trys.pop();
                                                        continue;
                                                }
                                                o = n.call(t, s);
                                            } catch (t) {
                                                (o = [6, t]), (i = 0);
                                            } finally {
                                                e = r = 0;
                                            }
                                        if (5 & o[0]) throw o[1];
                                        return {
                                            value: o[0] ? o[1] : void 0,
                                            done: !0,
                                        };
                                    })([o, a]);
                                };
                            }
                        },
                    a =
                        (this && this.__importDefault) ||
                        function (t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                (n.__esModule = !0), (n.createPlot = void 0);
                var u = a(e(2572)),
                    c = e(5144),
                    l = a(e(6643)),
                    h = a(e(831)),
                    f = e(8593),
                    p = a(e(9551)),
                    d = e(9699),
                    y = (function (t) {
                        function n() {
                            return (
                                (null !== t && t.apply(this, arguments)) || this
                            );
                        }
                        return (
                            r(n, t),
                            (n.prototype.onload = function () {
                                return o(this, void 0, void 0, function () {
                                    var t = this;
                                    return s(this, function (n) {
                                        switch (n.label) {
                                            case 0:
                                                return [4, this.loadSettings()];
                                            case 1:
                                                return (
                                                    n.sent(),
                                                    this.addSettingTab(
                                                        new h.default(
                                                            this.app,
                                                            this
                                                        )
                                                    ),
                                                    this.addCommand({
                                                        id: "insert-functionplot",
                                                        name: "Plot a function",
                                                        editorCallback:
                                                            function (n) {
                                                                new l.default(
                                                                    t.app,
                                                                    t,
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        var e =
                                                                            n.getCursor()
                                                                                .line;
                                                                        n.setLine(
                                                                            e,
                                                                            (0,
                                                                            f.parseToPlot)(
                                                                                t
                                                                            )
                                                                        );
                                                                    }
                                                                ).open();
                                                            },
                                                    }),
                                                    this.registerMarkdownCodeBlockProcessor(
                                                        "functionplot",
                                                        this.createFunctionPlotHandler(
                                                            this
                                                        )
                                                    ),
                                                    [2]
                                                );
                                        }
                                    });
                                });
                            }),
                            (n.prototype.loadSettings = function () {
                                return o(this, void 0, void 0, function () {
                                    var t, n, e, i;
                                    return s(this, function (r) {
                                        switch (r.label) {
                                            case 0:
                                                return (
                                                    (t = this),
                                                    (e = (n = Object).assign),
                                                    (i = [
                                                        {},
                                                        d.DEFAULT_PLOT_PLUGIN_SETTINGS,
                                                    ]),
                                                    [4, this.loadData()]
                                                );
                                            case 1:
                                                return (
                                                    (t.settings = e.apply(
                                                        n,
                                                        i.concat([r.sent()])
                                                    )),
                                                    [2]
                                                );
                                        }
                                    });
                                });
                            }),
                            (n.prototype.saveSettings = function () {
                                return o(this, void 0, void 0, function () {
                                    return s(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return [
                                                    4,
                                                    this.saveData(
                                                        this.settings
                                                    ),
                                                ];
                                            case 1:
                                                return t.sent(), [2];
                                        }
                                    });
                                });
                            }),
                            (n.prototype.createFunctionPlotHandler = function (
                                t
                            ) {
                                var n = this;
                                return function (e, i, r) {
                                    return o(n, void 0, void 0, function () {
                                        var n, r;
                                        return s(this, function (o) {
                                            switch (o.label) {
                                                case 0:
                                                    return (
                                                        (n = (e.match(
                                                            /-{3}[^]*-{3}/
                                                        ) || [null])[0]),
                                                        (r = (
                                                            n
                                                                ? e.substring(
                                                                      n.length
                                                                  )
                                                                : e
                                                        )
                                                            .split("\n")
                                                            .map(function (t) {
                                                                return t.trim();
                                                            })
                                                            .filter(function (
                                                                t
                                                            ) {
                                                                return (
                                                                    t.length > 0
                                                                );
                                                            })),
                                                        [
                                                            4,
                                                            v(
                                                                Object.assign(
                                                                    {},
                                                                    d.DEFAULT_PLOT_OPTIONS,
                                                                    n
                                                                        ? (0,
                                                                          c.parseYaml)(
                                                                              n.match(
                                                                                  /-{3,}([^]*?)-{3,}/
                                                                              )[1]
                                                                          )
                                                                        : {},
                                                                    {
                                                                        functions:
                                                                            r,
                                                                    }
                                                                ),
                                                                i,
                                                                t
                                                            ),
                                                        ]
                                                    );
                                                case 1:
                                                    return o.sent(), [2];
                                            }
                                        });
                                    });
                                };
                            }),
                            n
                        );
                    })(c.Plugin);
                function v(t, n, e) {
                    return o(this, void 0, void 0, function () {
                        var i;
                        return s(this, function (r) {
                            try {
                                return (
                                    (i = {
                                        target: n,
                                        plugins: [(0, p.default)(e)],
                                        title: t.title,
                                        grid: t.grid,
                                        disableZoom: t.disableZoom,
                                        xAxis: {
                                            domain: t.bounds.slice(0, 2),
                                            label: t.xLabel,
                                        },
                                        yAxis: {
                                            domain: t.bounds.slice(2, 4),
                                            label: t.yLabel,
                                        },
                                        data: t.functions.map(function (t) {
                                            return {
                                                fn: t.split("=")[1],
                                                graphType: "polyline",
                                            };
                                        }),
                                    }),
                                    [2, (0, u.default)(i)]
                                );
                            } catch (t) {
                                console.debug(t);
                            }
                            return [2];
                        });
                    });
                }
                (n.default = y), (n.createPlot = v);
            },
            9551: (t, n) => {
                "use strict";
                (n.__esModule = !0),
                    (n.default = function (t) {
                        return function (n) {
                            n.listenerCount("after:draw") ||
                                (n.on("after:draw", function () {
                                    console.log("after:draw");
                                    var e = n.root.merge(n.root.enter);
                                    e
                                        .select(".title")
                                        .style(
                                            "font-size",
                                            "".concat(
                                                t.settings.titleFontSize,
                                                "px"
                                            )
                                        )
                                        .style("fill", t.settings.fontColor),
                                        e
                                            .selectAll(".axis-label")
                                            .style(
                                                "font-size",
                                                "".concat(
                                                    t.settings.labelFontSize,
                                                    "px"
                                                )
                                            )
                                            .style(
                                                "fill",
                                                t.settings.fontColor
                                            ),
                                        e
                                            .selectAll(".origin")
                                            .style(
                                                "stroke",
                                                t.settings.lineColor
                                            )
                                            .style(
                                                "stroke-width",
                                                "".concat(
                                                    t.settings.lineWidth,
                                                    "px"
                                                )
                                            )
                                            .style("opacity", 1),
                                        e
                                            .selectAll(".tick line")
                                            .style(
                                                "stroke",
                                                t.settings.gridColor
                                            )
                                            .style(
                                                "stroke-width",
                                                "".concat(
                                                    t.settings.gridWidth,
                                                    "px"
                                                )
                                            )
                                            .style("opacity", 1),
                                        e
                                            .selectAll("line.text")
                                            .style("fill", t.settings.fontColor)
                                            .style(
                                                "font-size",
                                                "".concat(
                                                    t.settings.scaleFontSize,
                                                    "px"
                                                )
                                            ),
                                        e
                                            .selectAll(".domain")
                                            .style(
                                                "stroke",
                                                t.settings.gridColor
                                            )
                                            .style(
                                                "stroke-width",
                                                "".concat(
                                                    t.settings.gridWidth,
                                                    "px"
                                                )
                                            )
                                            .style("opacity", 1),
                                        n.root.merge(e);
                                }),
                                n.emit("after:draw"));
                        };
                    });
            },
            9699: (t, n) => {
                "use strict";
                (n.__esModule = !0),
                    (n.DEFAULT_PLOT_PLUGIN_SETTINGS = n.DEFAULT_PLOT_OPTIONS =
                        void 0),
                    (n.DEFAULT_PLOT_OPTIONS = {
                        title: "",
                        xLabel: "",
                        yLabel: "",
                        bounds: [-10, 10, -10, 10],
                        disableZoom: !1,
                        grid: !0,
                        functions: [],
                    }),
                    (n.DEFAULT_PLOT_PLUGIN_SETTINGS = {
                        titleFontSize: 24,
                        scaleFontSize: 12,
                        labelFontSize: 12,
                        lineWidth: 2,
                        gridWidth: 1,
                        fontColor: "var(--text-normal)",
                        lineColor: "gray",
                        gridColor: "var(--interactive-hover)",
                    });
            },
            8593: (t, n) => {
                "use strict";
                (n.__esModule = !0),
                    (n.parseToPlot = void 0),
                    (n.parseToPlot = function (t) {
                        var n;
                        return "\n```functionplot\n---\ntitle: "
                            .concat(t.title, "\nxLabel: ")
                            .concat(t.xLabel, "\nyLabel: ")
                            .concat(t.yLabel, "\nbounds: [")
                            .concat(t.bounds, "]\ndisableZoom: ")
                            .concat(t.disableZoom, "\ngrid: ")
                            .concat(t.grid, "\n---\n")
                            .concat(
                                (null !== (n = t.functions) && void 0 !== n
                                    ? n
                                    : []
                                ).join("\n"),
                                "\n```\n"
                            );
                    });
            },
            5144: (t) => {
                "use strict";
                t.exports = require("obsidian");
            },
        },
        n = {};
    function e(i) {
        var r = n[i];
        if (void 0 !== r) return r.exports;
        var o = (n[i] = { exports: {} });
        return t[i].call(o.exports, o, o.exports, e), o.exports;
    }
    (e.n = (t) => {
        var n = t && t.__esModule ? () => t.default : () => t;
        return e.d(n, { a: n }), n;
    }),
        (e.d = (t, n) => {
            for (var i in n)
                e.o(n, i) &&
                    !e.o(t, i) &&
                    Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
        }),
        (e.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (t) {
                if ("object" == typeof window) return window;
            }
        })()),
        (e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
        (e.r = (t) => {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        });
    var i = e(8519),
        r = exports;
    for (var o in i) r[o] = i[o];
    i.__esModule && Object.defineProperty(r, "__esModule", { value: !0 });
})();
