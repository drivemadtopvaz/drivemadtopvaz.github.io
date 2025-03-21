!function(e) {
    function t(i) {
        if (n[i])
            return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t),
        o.l = !0,
        o.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "",
    t(t.s = 1)
}([function(e, t, n) {
    "use strict";
    function i() {
        r.style.display = "block",
        s.style.display = "none",
        a(),
        PokiSDK.gameLoadingFinished(),
        window.removeSlideshowEventListeners()
    }
    function o() {
        if (!w) {
            w = !0;
            var e = document.createElement("script");
            e.src = window.config.unityWebglLoaderUrl,
            e.addEventListener("load", function() {
                window.unityGame = window.UnityLoader.instantiate("game", window.config.unityWebglBuildUrl, {
                    onProgress: d,
                    Module: {
                        onRuntimeInitialized: i
                    }
                })
            }),
            PokiSDK.gameLoadingStart(),
            document.body.appendChild(e)
        }
    }
    function a() {
        var e = window.innerWidth
          , t = window.innerHeight
          , n = e / t;
        n > window.config.maxRatio ? (r.style.height = t + "px",
        r.style.width = t * window.config.maxRatio + "px") : n < window.config.minRatio ? (r.style.width = e + "px",
        r.style.height = e / window.config.minRatio + "px") : (r.style.width = e + "px",
        r.style.height = t + "px");
        var i = r.getBoundingClientRect();
        r.style.marginLeft = -.5 * i.width + "px",
        r.style.marginTop = -.5 * i.height + "px"
    }
    function d(e, t) {
        if (e.Module) {
            var n = 100 * t;
            l.style.width = n + "%",
            u.innerHTML = (n << 0) + "%";
            var i = {
                percentageDone: n
            };
            PokiSDK.gameLoadingProgress(i),
            t >= 1 && (c.className = "done")
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.startLoadingGame = o;
    var r = document.getElementById("game-container")
      , s = document.getElementById("loader")
      , c = document.getElementById("progress-container")
      , l = document.getElementById("progress-fill")
      , u = document.getElementById("progress-amount")
      , w = !1;
    window.addEventListener("resize", a),
    window.addEventListener("focus", a),
    window.PokiSDK.init().then(function() {
        window.pokiBridge ? window.unityGame.SendMessage(window.pokiBridge, "ready") : window.pokiReady = !0
    }).catch(function() {
        window.pokiBridge ? window.unityGame.SendMessage(window.pokiBridge, "adblock") : window.pokiAdBlock = !0,
        console.log("AdBlocker active")
    }),
    window.PokiSDK.setDebug(window.config && window.config.debug)
}
, function(e, t, n) {
    e.exports = n(2)
}
, function(e, t, n) {
    "use strict";
    n(0),
    n(3),
    n(4)
}
, function(e, t, n) {
    "use strict";
    function i() {
        var e = 1e3 * p
          , t = S.querySelector("#slideshow-images .right")
          , n = t.getAttribute("data-idx") << 0;
        if (t.getAttribute("fullImageLoaded"))
            window.setTimeout(o, e);
        else {
            var i = Date.now();
            r("screenshots/" + (n + 1) + ".jpg")(function(n) {
                t.querySelector("img").src = n.src,
                t.setAttribute("fullImageLoaded", !0);
                var a = Date.now() - i;
                a > e ? o() : window.setTimeout(o, e - a)
            })
        }
    }
    function o() {
        if (!N) {
            var e = x + 1;
            e > v - 1 && (e = 0),
            a(e)
        }
    }
    function a(e) {
        x = e << 0;
        var t = x > 0 ? x - 1 : v - 1
          , n = x < v - 1 ? x + 1 : 0;
        S.querySelectorAll(".image").forEach(function(e) {
            e.className === b + " left" && (e.className = b + " fromLeft"),
            e.className === b + " right" && (e.className = b + " fromRight"),
            -1 === e.className.indexOf("inactive") && (e.className += " inactive")
        }),
        S.querySelector('[data-idx="' + x + '"]').className = b + " middle",
        S.querySelector('[data-idx="' + t + '"]').className = b + " left",
        S.querySelector('[data-idx="' + n + '"]').className = b + " right",
        B.querySelectorAll(".bullet").forEach(function(e, t) {
            e.className = "bullet",
            t === x && (e.className += " active")
        }),
        window.setTimeout(function() {
            S.querySelectorAll(".inactive").forEach(function(e) {
                e.className = b + " inactive fromRight"
            })
        }, 1e3 * h),
        i()
    }
    function d() {
        var e = window.innerWidth / window.innerHeight
          , t = u / E * e
          , n = u;
        t > w && (t = w,
        n = t * E / e);
        var i = n * m
          , o = .5 - n / 2
          , a = n * g
          , d = -2 * a
          , r = 1 + a
          , s = (1 - n) / 4 - n / 2
          , c = .5 - .5 * n - (i + n) / 2 - f
          , l = 1 - (1 - n) / 4 - n / 2
          , p = .5 + .5 * i + f
          , v = Math.min(s, c)
          , y = Math.max(l, p);
        L.innerHTML = "\n\t\t#slideshow-images {\n\t\t\theight: " + 100 * t + "vh;\n\t\t}\n\t\t#slideshow-images .image {\n\t\t\ttransition-duration: " + h + "s;\n\t\t\twidth: " + 100 * n + "vw;\n\t\t\theight: " + 100 * t + "vh;\n\t\t}\n\t\t#slideshow-images .middle {\n\t\t\ttransform: translateX(" + 100 * o + "vw);\n\t\t}\n\t\t#slideshow-images .left {\n\t\t\ttransform: translateX(" + 100 * v + "vw) scale(" + m + ");\n\t\t}\n\t\t#slideshow-images .right {\n\t\t\ttransform: translateX(" + 100 * y + "vw) scale(" + m + ");\n\t\t}\n\t\t#slideshow-images .inactive.fromLeft {\n\t\t\ttransform: translateX(" + 100 * d + "vw) scale(" + m * g + ");\n\t\t}\n\t\t#slideshow-images .inactive.fromRight {\n\t\t\ttransform: translateX(" + 100 * r + "vw) scale(" + m * g + ");\n\t\t}\n\t"
    }
    function r(e) {
        return function(t) {
            var n = new Image;
            return "function" == typeof t && (n.onload = function() {
                t(n),
                n.onload = null
            }
            ),
            n.src = e,
            n
        }
    }
    function s(e, t) {
        var n = e.slice()
          , i = []
          , o = n.length
          , a = function(e) {
            i.push(e(function() {
                0 == --o && t(i)
            }))
        };
        n.forEach(a)
    }
    function c() {
        var e = document.createElement("div");
        return e.className = b,
        e
    }
    var l = n(0)
      , u = .6
      , w = .7
      , m = .8
      , g = .5
      , f = 0
      , h = .5
      , p = 5
      , v = window.config.numScreenshots
      , y = document.getElementById("slideshow")
      , k = document.getElementById("slideshow-top")
      , B = document.getElementById("slideshow-nav")
      , S = document.getElementById("slideshow-images")
      , b = "image"
      , x = 0
      , E = void 0
      , L = void 0
      , N = !1;
    r("screenshots/1-small.jpg")(function(e) {
        E = e.width / e.height,
        L = document.createElement("style"),
        d(),
        document.body.appendChild(L),
        window.addEventListener("resize", d);
        for (var t = 0; t <= v - 1; t++) {
            var n = document.createElement("div");
            n.className = "bullet" + (0 === t ? " active" : ""),
            n.setAttribute("data-idx", t),
            B.appendChild(n)
        }
        r("thumbnail.jpg")(function() {
            k.className = "active",
            r("screenshots/1.jpg")(function(e) {
                var t = c();
                t.className = b + " middle",
                t.setAttribute("fullImageLoaded", !0),
                t.setAttribute("data-idx", 0),
                t.appendChild(e),
                S.appendChild(t);
                for (var n = [], o = 1; o <= v - 1; o++)
                    n.push(r("screenshots/" + (o + 1) + "-small.jpg"));
                s(n, function(e) {
                    e.forEach(function(e) {
                        var t = (e.src.match(/screenshots\/([0-9]+)[-.]/)[1] << 0) - 1
                          , n = c();
                        n.appendChild(e),
                        n.setAttribute("data-idx", t),
                        n.className = 1 === t ? b + " right" : t === v - 1 ? b + " left" : b + " inactive",
                        S.appendChild(n)
                    }),
                    y.className = "active",
                    i()
                }),
                (0,
                l.startLoadingGame)()
            })
        })
    }),
    window.removeSlideshowEventListeners = function() {
        N = !0
    }
}
, function(e, t, n) {
    "use strict";
    window.initPokiBridge = function(e) {
        window.pokiReady || window.pokiAdBlock ? window.pokiReady ? window.unityGame.SendMessage(e, "ready") : window.pokiAdBlock && window.unityGame.SendMessage(e, "adblock") : window.pokiBridge = e,
        window.commercialBreak = function() {
            PokiSDK.commercialBreak().then(function() {
                window.unityGame.SendMessage(e, "commercialBreakCompleted")
            })
        }
        ,
        window.rewardedBreak = function() {
            PokiSDK.rewardedBreak().then(function(t) {
                window.unityGame.SendMessage(e, "rewardedBreakCompleted", t.toString())
            })
        }
    }
}
]);
