/* ==========================================================================
   Site behaviour.

   Replaces assets/js/main.min.js (103 KB: jQuery 3.7.1 + the greedy-navigation
   plugin + a Plotly light/dark template payload + Mermaid and Plotly CDN
   loaders). This site has no charts and no diagrams, so all of that shipped on
   every page to do nothing.

   No build step: this file is loaded directly. Keep it dependency-free.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------ theme */

  var root = document.documentElement;
  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function stored() {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  }

  function computedTheme() {
    var t = stored();
    if (t === "dark" || t === "light") return t;
    return media && media.matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    var btn = document.getElementById("theme-toggle");
    var sun = document.getElementById("theme-icon-sun");
    var moon = document.getElementById("theme-icon-moon");
    if (sun && moon) {
      // Show the icon for the theme you would switch TO.
      sun.hidden = theme !== "dark";
      moon.hidden = theme === "dark";
    }
    if (btn) {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
    }
  }

  function toggleTheme() {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* private mode: the choice just will not persist */
    }
    applyTheme(next);
  }

  applyTheme(computedTheme());

  // Follow the OS only while the visitor has not made an explicit choice.
  if (media) {
    var onSchemeChange = function (e) {
      if (!stored()) applyTheme(e.matches ? "dark" : "light");
    };
    if (media.addEventListener) {
      media.addEventListener("change", onSchemeChange);
    } else if (media.addListener) {
      media.addListener(onSchemeChange);
    }
  }

  /* --------------------------------------------------------------- greedy nav

     Same contract as the jquery.greedy-navigation plugin it replaces: items
     that do not fit move from .visible-links into the .hidden-links dropdown.
     Items marked .persist (the site title and the theme toggle) never move.
  */

  function initNav() {
    var nav = document.getElementById("site-nav");
    if (!nav) return;

    var visible = nav.querySelector(".visible-links");
    var hidden = nav.querySelector(".hidden-links");
    var toggle = nav.querySelector(".greedy-nav__toggle");
    if (!visible || !hidden || !toggle) return;

    function closeMenu() {
      hidden.classList.add("hidden");
      toggle.setAttribute("aria-expanded", "false");
    }

    function fits() {
      // Reserve room for the overflow button when it is showing.
      var avail = nav.clientWidth - (hidden.children.length ? toggle.offsetWidth : 0);
      return visible.scrollWidth <= avail;
    }

    function reflow() {
      // Pull everything back, then push out until it fits.
      while (hidden.children.length) {
        visible.appendChild(hidden.children[0]);
      }

      var guard = 0;
      while (!fits() && guard < 50) {
        guard++;
        var movable = null;
        for (var i = visible.children.length - 1; i >= 0; i--) {
          if (!visible.children[i].classList.contains("persist")) {
            movable = visible.children[i];
            break;
          }
        }
        if (!movable) break;
        hidden.insertBefore(movable, hidden.firstChild);
      }

      if (hidden.children.length) {
        toggle.style.display = "";
      } else {
        toggle.style.display = "none";
        closeMenu();
      }
    }

    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      hidden.classList.toggle("hidden", open);
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
    });

    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target)) closeMenu();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        closeMenu();
        toggle.focus();
      }
    });

    var t;
    window.addEventListener("resize", function () {
      clearTimeout(t);
      t = setTimeout(reflow, 150);
    });

    reflow();
    // Re-run once webfonts land, since they change the measured widths.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(reflow);
    }
  }

  /* ------------------------------------------------- sidebar links disclosure */

  function initAuthorLinks() {
    var btn = document.getElementById("author-links-toggle");
    var list = document.getElementById("author-links");
    if (!btn || !list) return;

    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      btn.classList.toggle("open", !open);
      list.classList.toggle("is-open", !open);
    });
  }

  /* -------------------------------------------------------------- copy BibTeX

     One delegated listener. The include used to carry an inline onclick (which
     any future CSP would break) and a hardcoded id="bibtex-entry", so on a page
     listing more than one paper every button copied the first entry.
  */

  function initCopyButtons() {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest ? e.target.closest("[data-copy-target]") : null;
      if (!btn) return;

      var src = document.getElementById(btn.getAttribute("data-copy-target"));
      if (!src) return;

      var text = src.innerText;
      var done = function (msg) {
        var live = btn.parentNode.querySelector("[data-copy-status]");
        if (live) live.textContent = msg;
        var original = btn.getAttribute("data-label") || "Copy BibTeX";
        btn.textContent = msg;
        setTimeout(function () {
          btn.textContent = original;
          if (live) live.textContent = "";
        }, 1800);
      };

      // navigator.clipboard is undefined on insecure origins and rejects in
      // some embedded browsers, so fall back rather than failing silently.
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(
          function () { done("Copied"); },
          function () { legacyCopy(text, done); }
        );
      } else {
        legacyCopy(text, done);
      }
    });
  }

  function legacyCopy(text, done) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand("copy");
      document.body.removeChild(ta);
      done(ok ? "Copied" : "Press Ctrl+C");
    } catch (err) {
      done("Press Ctrl+C");
    }
  }

  /* ------------------------------------------------------------------- boot */

  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  ready(function () {
    var toggle = document.getElementById("theme-toggle");
    if (toggle) toggle.addEventListener("click", toggleTheme);
    initNav();
    initAuthorLinks();
    initCopyButtons();
  });
})();
