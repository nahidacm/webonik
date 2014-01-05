/// <reference path="libs/jquery-1.10.2.min.js" />

// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function (a) { function b() { } for (var c = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), d; !!(d = c.pop()) ;) { a[d] = a[d] || b; } })
(function () { try { console.log(); return window.console; } catch (a) { return (window.console = {}); } }());


// place any jQuery/helper plugins in here, instead of separate, slower script files.


/*
 * Browser detection...
 *
 * Browser name: BrowserDetect.browser
 * Browser version: BrowserDetect.version
 * OS name: BrowserDetect.OS
*/

var BrowserDetect = {
    init: function () {
    	this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
    	this.version = this.searchVersion(navigator.userAgent)
            || this.searchVersion(navigator.appVersion)
            || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    },
    dataBrowser: [
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        },
        {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        {		// for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "IE",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        { 		// for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ],
    dataOS: [
        {
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        },
        {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        },
        {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        },
        {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }
    ]

};
BrowserDetect.init();




/**
* jquery.placeholder.js
* Requires: jQuery 1.4+
*
*/

(function ($) {
    $('[placeholder]').focus(function () {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function () {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur().parents('form').submit(function () {
        $(this).find('[placeholder]').each(function () {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        })
    });
})(jQuery);


/**
* jquery.align.js
* Version: 1.1
* Requires: jQuery 1.4+
*
* Created by Shihab
*/

; (function ($) {
    $.fn.extend({

        vAlign: function (alignment) {
            return this.each(function () {
                var vAlign_parent, top, elem = $(this);
                vAlign_parent = elem.parent();

                if (alignment.toLowerCase() == "middle") {
                    top = ($(vAlign_parent).height() - elem.outerHeight()) / 2;
                    top = top < 0 ? 0 : top;
                } else if (alignment.toLowerCase() == "bottom") {
                    top = $(vAlign_parent).height() - elem.outerHeight();
                } else {
                    top = 0;
                }

                elem.css("position", "relative").css({
                    "top": top
                }, 200);
            });
        }, // vAlign

        align: function (alignment) {
            return this.each(function () {
                var align_parent, left, elem = $(this);
                align_parent = elem.parent();

                if (alignment.toLowerCase() == "center") {
                    left = ($(align_parent).width() - elem.outerWidth()) / 2;
                    left = left < 0 ? 0 : left;
                } else if (alignment.toLowerCase() == "right") {
                    left = $(align_parent).width() - elem.outerWidth();
                } else {
                    left = 0;
                }

                elem.css("position", "relative").css({
                    "left": left
                }, 200);
            });
        } // align
    });

    $(function () {
        if ($('[data-valign]').length > 0) {
            $('[data-valign]').each(function () {
                var elem = $(this);
                elem.vAlign(elem.attr("data-valign"));

                $(window).resize(function () {
                    elem.vAlign(elem.attr("data-valign"));
                });
            });
        }
        if ($('[data-align]').length > 0) {
            $('[data-align]').each(function () {
                var elem = $(this);
                elem.align(elem.attr("data-align"));

                $(window).resize(function () {
                    elem.align(elem.attr("data-align"));
                });
            });
        }
    });
})(jQuery);


function scrollToTop() {
	jQuery('html, body').animate({
		'scrollTop': 0
	}, {
		duration: 800
	});
}


/**
 * spin.js#v1.2.7
 * http://fgnass.github.io/spin.js/
 */

!function (e, t, n) { function o(e, n) { var r = t.createElement(e || "div"), i; for (i in n) r[i] = n[i]; return r } function u(e) { for (var t = 1, n = arguments.length; t < n; t++) e.appendChild(arguments[t]); return e } function f(e, t, n, r) { var o = ["opacity", t, ~~(e * 100), n, r].join("-"), u = .01 + n / r * 100, f = Math.max(1 - (1 - e) / t * (100 - u), e), l = s.substring(0, s.indexOf("Animation")).toLowerCase(), c = l && "-" + l + "-" || ""; return i[o] || (a.insertRule("@" + c + "keyframes " + o + "{" + "0%{opacity:" + f + "}" + u + "%{opacity:" + e + "}" + (u + .01) + "%{opacity:1}" + (u + t) % 100 + "%{opacity:" + e + "}" + "100%{opacity:" + f + "}" + "}", a.cssRules.length), i[o] = 1), o } function l(e, t) { var i = e.style, s, o; if (i[t] !== n) return t; t = t.charAt(0).toUpperCase() + t.slice(1); for (o = 0; o < r.length; o++) { s = r[o] + t; if (i[s] !== n) return s } } function c(e, t) { for (var n in t) e.style[l(e, n) || n] = t[n]; return e } function h(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var i in r) e[i] === n && (e[i] = r[i]) } return e } function p(e) { var t = { x: e.offsetLeft, y: e.offsetTop }; while (e = e.offsetParent) t.x += e.offsetLeft, t.y += e.offsetTop; return t } var r = ["webkit", "Moz", "ms", "O"], i = {}, s, a = function () { var e = o("style", { type: "text/css" }); return u(t.getElementsByTagName("head")[0], e), e.sheet || e.styleSheet }(), d = { lines: 12, length: 7, width: 5, radius: 10, rotate: 0, corners: 1, color: "#000", speed: 1, trail: 100, opacity: .25, fps: 20, zIndex: 2e9, className: "spinner", top: "auto", left: "auto", position: "relative" }, v = function m(e) { if (!this.spin) return new m(e); this.opts = h(e || {}, m.defaults, d) }; v.defaults = {}, h(v.prototype, { spin: function (e) { this.stop(); var t = this, n = t.opts, r = t.el = c(o(0, { className: n.className }), { position: n.position, width: 0, zIndex: n.zIndex }), i = n.radius + n.length + n.width, u, a; e && (e.insertBefore(r, e.firstChild || null), a = p(e), u = p(r), c(r, { left: (n.left == "auto" ? a.x - u.x + (e.offsetWidth >> 1) : parseInt(n.left, 10) + i) + "px", top: (n.top == "auto" ? a.y - u.y + (e.offsetHeight >> 1) : parseInt(n.top, 10) + i) + "px" })), r.setAttribute("aria-role", "progressbar"), t.lines(r, t.opts); if (!s) { var f = 0, l = n.fps, h = l / n.speed, d = (1 - n.opacity) / (h * n.trail / 100), v = h / n.lines; (function m() { f++; for (var e = n.lines; e; e--) { var i = Math.max(1 - (f + e * v) % h * d, n.opacity); t.opacity(r, n.lines - e, i, n) } t.timeout = t.el && setTimeout(m, ~~(1e3 / l)) })() } return t }, stop: function () { var e = this.el; return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = n), this }, lines: function (e, t) { function i(e, r) { return c(o(), { position: "absolute", width: t.length + t.width + "px", height: t.width + "px", background: e, boxShadow: r, transformOrigin: "left", transform: "rotate(" + ~~(360 / t.lines * n + t.rotate) + "deg) translate(" + t.radius + "px" + ",0)", borderRadius: (t.corners * t.width >> 1) + "px" }) } var n = 0, r; for (; n < t.lines; n++) r = c(o(), { position: "absolute", top: 1 + ~(t.width / 2) + "px", transform: t.hwaccel ? "translate3d(0,0,0)" : "", opacity: t.opacity, animation: s && f(t.opacity, t.trail, n, t.lines) + " " + 1 / t.speed + "s linear infinite" }), t.shadow && u(r, c(i("#000", "0 0 4px #000"), { top: "2px" })), u(e, u(r, i(t.color, "0 0 1px rgba(0,0,0,.1)"))); return e }, opacity: function (e, t, n) { t < e.childNodes.length && (e.childNodes[t].style.opacity = n) } }), function () { function e(e, t) { return o("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', t) } var t = c(o("group"), { behavior: "url(#default#VML)" }); !l(t, "transform") && t.adj ? (a.addRule(".spin-vml", "behavior:url(#default#VML)"), v.prototype.lines = function (t, n) { function s() { return c(e("group", { coordsize: i + " " + i, coordorigin: -r + " " + -r }), { width: i, height: i }) } function l(t, i, o) { u(a, u(c(s(), { rotation: 360 / n.lines * t + "deg", left: ~~i }), u(c(e("roundrect", { arcsize: n.corners }), { width: r, height: n.width, left: n.radius, top: -n.width >> 1, filter: o }), e("fill", { color: n.color, opacity: n.opacity }), e("stroke", { opacity: 0 })))) } var r = n.length + n.width, i = 2 * r, o = -(n.width + n.length) * 2 + "px", a = c(s(), { position: "absolute", top: o, left: o }), f; if (n.shadow) for (f = 1; f <= n.lines; f++) l(f, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)"); for (f = 1; f <= n.lines; f++) l(f); return u(t, a) }, v.prototype.opacity = function (e, t, n, r) { var i = e.firstChild; r = r.shadow && r.lines || 0, i && t + r < i.childNodes.length && (i = i.childNodes[t + r], i = i && i.firstChild, i = i && i.firstChild, i && (i.opacity = n)) }) : s = l(t, "animation") }(), typeof define == "function" && define.amd ? define(function () { return v }) : e.Spinner = v }(window, document);

/**
 * $(selector).spin();
 */
; (function ($) {
    $.fn.spin = function (options) {
        if (Spinner) {
            return this.each(function () {
                var $this = $(this),
					data = $this.data(),
                    _color = $this.css('color');

                var defaultOptions = {
                    lines: 8, // The number of lines to draw
                    length: 0, // The length of each line
                    width: 8, // The line thickness
                    radius: 8, // The radius of the inner circle
                    corners: 1, // Corner roundness (0..1)
                    rotate: 0, // The rotation offset
                    color: (_color ? _color : '#000'), // #rgb or #rrggbb
                    speed: 1, // Rounds per second
                    trail: 60, // Afterglow percentage
                    shadow: false, // Whether to render a shadow
                    hwaccel: false, // Whether to use hardware acceleration
                    className: 'spinner', // The CSS class to assign to the spinner
                    zIndex: 2e9, // The z-index (defaults to 2000000000)
                    top: 'auto', // Top position relative to parent in px
                    left: 'auto' // Left position relative to parent in px
                };

                if (data.spinner) {
                    data.spinner.stop();
                    delete data.spinner;
                }
                data.spinner = new Spinner($.extend(defaultOptions, options)).spin(this);
            });
        } else {
            throw "Spinner class not available.";
        }
    };
})(jQuery);



/**
 * Masked Input plugin for jQuery
 * Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
 * Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
 * Version: 1.3.1
 */
(function (e) { function t() { var e = document.createElement("input"), t = "onpaste"; return e.setAttribute(t, ""), "function" == typeof e[t] ? "paste" : "input" } var n, a = t() + ".mask", r = navigator.userAgent, i = /iphone/i.test(r), o = /android/i.test(r); e.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, dataName: "rawMaskFn", placeholder: "_" }, e.fn.extend({ caret: function (e, t) { var n; if (0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function () { this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && (n = this.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select()) })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), { begin: e, end: t }) }, unmask: function () { return this.trigger("unmask") }, mask: function (t, r) { var c, l, s, u, f, h; return !t && this.length > 0 ? (c = e(this[0]), c.data(e.mask.dataName)()) : (r = e.extend({ placeholder: e.mask.placeholder, completed: null }, r), l = e.mask.definitions, s = [], u = h = t.length, f = null, e.each(t.split(""), function (e, t) { "?" == t ? (h--, u = e) : l[t] ? (s.push(RegExp(l[t])), null === f && (f = s.length - 1)) : s.push(null) }), this.trigger("unmask").each(function () { function c(e) { for (; h > ++e && !s[e];); return e } function d(e) { for (; --e >= 0 && !s[e];); return e } function m(e, t) { var n, a; if (!(0 > e)) { for (n = e, a = c(t) ; h > n; n++) if (s[n]) { if (!(h > a && s[n].test(R[a]))) break; R[n] = R[a], R[a] = r.placeholder, a = c(a) } b(), x.caret(Math.max(f, e)) } } function p(e) { var t, n, a, i; for (t = e, n = r.placeholder; h > t; t++) if (s[t]) { if (a = c(t), i = R[t], R[t] = n, !(h > a && s[a].test(i))) break; n = i } } function g(e) { var t, n, a, r = e.which; 8 === r || 46 === r || i && 127 === r ? (t = x.caret(), n = t.begin, a = t.end, 0 === a - n && (n = 46 !== r ? d(n) : a = c(n - 1), a = 46 === r ? c(a) : a), k(n, a), m(n, a - 1), e.preventDefault()) : 27 == r && (x.val(S), x.caret(0, y()), e.preventDefault()) } function v(t) { var n, a, i, l = t.which, u = x.caret(); t.ctrlKey || t.altKey || t.metaKey || 32 > l || l && (0 !== u.end - u.begin && (k(u.begin, u.end), m(u.begin, u.end - 1)), n = c(u.begin - 1), h > n && (a = String.fromCharCode(l), s[n].test(a) && (p(n), R[n] = a, b(), i = c(n), o ? setTimeout(e.proxy(e.fn.caret, x, i), 0) : x.caret(i), r.completed && i >= h && r.completed.call(x))), t.preventDefault()) } function k(e, t) { var n; for (n = e; t > n && h > n; n++) s[n] && (R[n] = r.placeholder) } function b() { x.val(R.join("")) } function y(e) { var t, n, a = x.val(), i = -1; for (t = 0, pos = 0; h > t; t++) if (s[t]) { for (R[t] = r.placeholder; pos++ < a.length;) if (n = a.charAt(pos - 1), s[t].test(n)) { R[t] = n, i = t; break } if (pos > a.length) break } else R[t] === a.charAt(pos) && t !== u && (pos++, i = t); return e ? b() : u > i + 1 ? (x.val(""), k(0, h)) : (b(), x.val(x.val().substring(0, i + 1))), u ? t : f } var x = e(this), R = e.map(t.split(""), function (e) { return "?" != e ? l[e] ? r.placeholder : e : void 0 }), S = x.val(); x.data(e.mask.dataName, function () { return e.map(R, function (e, t) { return s[t] && e != r.placeholder ? e : null }).join("") }), x.attr("readonly") || x.one("unmask", function () { x.unbind(".mask").removeData(e.mask.dataName) }).bind("focus.mask", function () { clearTimeout(n); var e; S = x.val(), e = y(), n = setTimeout(function () { b(), e == t.length ? x.caret(0, e) : x.caret(e) }, 10) }).bind("blur.mask", function () { y(), x.val() != S && x.change() }).bind("keydown.mask", g).bind("keypress.mask", v).bind(a, function () { setTimeout(function () { var e = y(!0); x.caret(e), r.completed && e == x.val().length && r.completed.call(x) }, 0) }), y() })) } }) })(jQuery);




// Automatic calls to required functions on page init...
; (function ($) {
	$(function () {
		/*$('[data-mask]').each(function () {
			var _this = $(this);
			_this.mask(_this.data("mask") + "");
			//_this.mask((_this.data("mask") + ""), { placeholder: " " });
		});*/

		/*if ($('.datePicker').length > 0) {
			$('.datePicker').datepicker({
				"dateFormat": "mm/dd/yy",
				"changeMonth": true,
				"changeYear": true,
				"yearRange": "1900:c"
			});
		}

		if ($('.timePicker').length > 0) {
			$('.timePicker').timepicker({
				timeFormat: "hh:mm TT",
				defaultValue: (new Date()).formatTime()
			});
		}*/
	});
})(jQuery);

