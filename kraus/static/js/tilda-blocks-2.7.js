function t401_showMore(recid) {
    var el = $('#rec' + recid).find(".t401");
    el.find(".t401__col").hide();
    var cards_size = el.find(".t401__col").size();
    var cards_count = parseInt(el.attr("data-show-count"));
    var x = cards_count;
    var y = cards_count;
    el.find('.t401__col:lt(' + x + ')').show();
    el.find('.t401__showmore').click(function() {
        x = (x + y <= cards_size) ? x + y : cards_size;
        el.find('.t401__col:lt(' + x + ')').show();
        if (x == cards_size) { el.find('.t401__showmore').hide() }
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') { t_onFuncLoad('t_lazyload_update', function() { t_lazyload_update() }) }
    })
}

function t404_unifyHeights(recid) {
    var el = $('#rec' + recid).find(".t404");
    el.find('.t-container').each(function() {
        var highestBox = 0;
        $('.t404__title', this).css('height', '');
        $('.t404__title', this).each(function() { if ($(this).height() > highestBox) highestBox = $(this).height() });
        if ($(window).width() >= 960) { $('.t404__title', this).css('height', highestBox) } else { $('.t404__title', this).css('height', "auto") }
        $('.t404__descr', this).css('height', '');
        var highestBox = 0;
        $('.t404__descr', this).each(function() { if ($(this).height() > highestBox) highestBox = $(this).height() });
        if ($(window).width() >= 960) { $('.t404__descr', this).css('height', highestBox) } else { $('.t404__descr', this).css('height', "auto") }
    })
}

function t404_unifyHeightsTextwrapper(recid) { var el = $('#rec' + recid).find(".t404");
    el.find('.t-container').each(function() { var highestBox = 0;
        $('.t404__textwrapper', this).each(function() { $(this).css("height", "auto"); if ($(this).height() > highestBox) highestBox = $(this).height() }); if ($(window).width() >= 960) { $('.t404__textwrapper', this).css('height', highestBox) } else { $('.t404__textwrapper', this).css('height', "auto") } }) }

function t404_showMore(recid) {
    var el = $('#rec' + recid).find(".t404");
    el.find(".t-col").hide();
    var cards_size = el.find(".t-col").size();
    var cards_count = parseInt(el.attr("data-show-count"));
    if (cards_count > 500) { cards_count = 500 }
    var x = cards_count;
    var y = cards_count;
    el.find('.t-col:lt(' + x + ')').show();
    el.find('.t404__showmore').click(function() {
        x = (x + y <= cards_size) ? x + y : cards_size;
        el.find('.t-col:lt(' + x + ')').show();
        if (x == cards_size) { el.find('.t404__showmore').hide() }
        $('.t404').trigger('displayChanged');
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') { t_onFuncLoad('t_lazyload_update', function() { t_lazyload_update() }) }
    })
}

function t446_init(recid) {
    var el = $('#rec' + recid);
    var mobile = el.find('.t446__mobile');
    var fixedBlock = mobile.css('position') === 'fixed' && mobile.css('display') === 'block';
    setTimeout(function() {
        el.find('.t-menu__link-item:not(.t-menusub__target-link):not(.tooltipstered):not(.t794__tm-link)').on('click', function() {
            if ($(this).is(".t-menu__link-item.tooltipstered, .t-menu__link-item.t-menusub__target-link, .t-menu__link-item.t794__tm-link, .t-menu__link-item.t966__tm-link, .t-menu__link-item.t978__tm-link")) { return }
            if (fixedBlock) { mobile.trigger('click') }
        });
        el.find('.t-menusub__link-item').on('click', function() { if (fixedBlock) { mobile.trigger('click') } })
    }, 500)
}

function t446_setLogoPadding(recid) { if ($(window).width() > 980) { var t446__menu = $('#rec' + recid + ' .t446'); var t446__logo = t446__menu.find('.t446__logowrapper'); var t446__leftpart = t446__menu.find('.t446__leftwrapper'); var t446__rightpart = t446__menu.find('.t446__rightwrapper');
        t446__leftpart.css("padding-right", t446__logo.width() / 2 + 50);
        t446__rightpart.css("padding-left", t446__logo.width() / 2 + 50) } }

function t446_checkOverflow(recid, menuheight) {
    var t446__menu = $('#rec' + recid + ' .t446');
    var t446__rightwr = t446__menu.find('.t446__rightwrapper');
    var t446__rightmenuwr = t446__rightwr.find('.t446__rightmenuwrapper');
    var t446__rightadditionalwr = t446__rightwr.find('.t446__additionalwrapper');
    var t446__burgeroverflow = t446__rightwr.find('.t446__burgerwrapper_overflow');
    var t446__burgerwithoutoverflow = t446__rightwr.find('.t446__burgerwrapper_withoutoverflow');
    if (menuheight > 0) { var t446__height = menuheight } else { var t446__height = 80 }
    if ($(window).width() > 980 && (t446__rightmenuwr.width() + t446__rightadditionalwr.width()) > t446__rightwr.width()) { t446__menu.css("height", t446__height * 2);
        t446__rightadditionalwr.css("float", "right");
        t446__burgeroverflow.css("display", "table-cell");
        t446__burgerwithoutoverflow.css("display", "none") } else {
        if (t446__menu.height() > t446__height) { t446__menu.css("height", t446__height) }
        if (t446__rightadditionalwr.css("float") == "right") { t446__rightadditionalwr.css("float", "none") }
        t446__burgeroverflow.css("display", "none");
        t446__burgerwithoutoverflow.css("display", "table-cell")
    }
}

function t446_highlight() {
    var url = window.location.href;
    var pathname = window.location.pathname;
    if (url.substr(url.length - 1) == "/") { url = url.slice(0, -1) }
    if (pathname.substr(pathname.length - 1) == "/") { pathname = pathname.slice(0, -1) }
    if (pathname.charAt(0) == "/") { pathname = pathname.slice(1) }
    if (pathname == "") { pathname = "/" }
    $(".t446__list_item a[href='" + url + "']").addClass("t-active");
    $(".t446__list_item a[href='" + url + "/']").addClass("t-active");
    $(".t446__list_item a[href='" + pathname + "']").addClass("t-active");
    $(".t446__list_item a[href='/" + pathname + "']").addClass("t-active");
    $(".t446__list_item a[href='" + pathname + "/']").addClass("t-active");
    $(".t446__list_item a[href='/" + pathname + "/']").addClass("t-active")
}

function t446_checkAnchorLinks(recid) { if ($(window).width() >= 960) { var t446_navLinks = $("#rec" + recid + " .t446__list_item a:not(.tooltipstered)[href*='#']"); if (t446_navLinks.length > 0) { t446_catchScroll(t446_navLinks) } } }

function t446_catchScroll(t446_navLinks) {
    var t446_clickedSectionId = null,
        t446_sections = new Array(),
        t446_sectionIdTonavigationLink = [],
        t446_interval = 100,
        t446_lastCall, t446_timeoutId;
    t446_navLinks = $(t446_navLinks.get().reverse());
    t446_navLinks.each(function() {
        var t446_cursection = t446_getSectionByHref($(this));
        if (typeof t446_cursection.attr("id") != "undefined") { t446_sections.push(t446_cursection) }
        t446_sectionIdTonavigationLink[t446_cursection.attr("id")] = $(this)
    });
    t446_updateSectionsOffsets(t446_sections);
    t446_sections.sort(function(a, b) { return b.attr("data-offset-top") - a.attr("data-offset-top") });
    $(window).bind('resize', t_throttle(function() { t446_updateSectionsOffsets(t446_sections) }, 200));
    $('.t446').bind('displayChanged', function() { t446_updateSectionsOffsets(t446_sections) });
    setInterval(function() { t446_updateSectionsOffsets(t446_sections) }, 5000);
    t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId);
    t446_navLinks.click(function() { var t446_clickedSection = t446_getSectionByHref($(this)); if (!$(this).hasClass("tooltipstered") && typeof t446_clickedSection.attr("id") != "undefined") { t446_navLinks.removeClass('t-active');
            $(this).addClass('t-active');
            t446_clickedSectionId = t446_getSectionByHref($(this)).attr("id") } });
    $(window).scroll(function() { var t446_now = new Date().getTime(); if (t446_lastCall && t446_now < (t446_lastCall + t446_interval)) { clearTimeout(t446_timeoutId);
            t446_timeoutId = setTimeout(function() { t446_lastCall = t446_now;
                t446_clickedSectionId = t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId) }, t446_interval - (t446_now - t446_lastCall)) } else { t446_lastCall = t446_now;
            t446_clickedSectionId = t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId) } })
}

function t446_updateSectionsOffsets(sections) { $(sections).each(function() { var t446_curSection = $(this);
        t446_curSection.attr("data-offset-top", t446_curSection.offset().top) }) }

function t446_getSectionByHref(curlink) {
    var t446_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
    if (t446_curLinkValue[0] == '/') { t446_curLinkValue = t446_curLinkValue.substring(1) }
    if (curlink.is('[href*="#rec"]')) { return $(".r[id='" + t446_curLinkValue.substring(1) + "']") } else { return $(".r[data-record-type='215']").has("a[name='" + t446_curLinkValue.substring(1) + "']") }
}

function t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId) {
    var t446_scrollPosition = $(window).scrollTop(),
        t446_valueToReturn = t446_clickedSectionId;
    if (t446_sections.length != 0 && t446_clickedSectionId == null && t446_sections[t446_sections.length - 1].attr("data-offset-top") > (t446_scrollPosition + 300)) { t446_navLinks.removeClass('t-active'); return null }
    $(t446_sections).each(function(e) {
        var t446_curSection = $(this),
            t446_sectionTop = t446_curSection.attr("data-offset-top"),
            t446_id = t446_curSection.attr('id'),
            t446_navLink = t446_sectionIdTonavigationLink[t446_id];
        if (((t446_scrollPosition + 300) >= t446_sectionTop) || (t446_sections[0].attr("id") == t446_id && t446_scrollPosition >= $(document).height() - $(window).height())) {
            if (t446_clickedSectionId == null && !t446_navLink.hasClass('t-active')) { t446_navLinks.removeClass('t-active');
                t446_navLink.addClass('t-active');
                t446_valueToReturn = null } else { if (t446_clickedSectionId != null && t446_id == t446_clickedSectionId) { t446_valueToReturn = null } }
            return !1
        }
    });
    return t446_valueToReturn
}

function t446_setPath() {}

function t446_setBg(recid) { var window_width = $(window).width(); if (window_width > 980) { $(".t446").each(function() { var el = $(this); if (el.attr('data-bgcolor-setbyscript') == "yes") { var bgcolor = el.attr("data-bgcolor-rgba");
                el.css("background-color", bgcolor) } }) } else { $(".t446").each(function() { var el = $(this); var bgcolor = el.attr("data-bgcolor-hex");
            el.css("background-color", bgcolor);
            el.attr("data-bgcolor-setbyscript", "yes") }) } }

function t446_appearMenu(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t446").each(function() {
            var el = $(this);
            var appearoffset = el.attr("data-appearoffset");
            if (appearoffset != "") {
                if (appearoffset.indexOf('vh') > -1) { appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100))) }
                appearoffset = parseInt(appearoffset, 10);
                if ($(window).scrollTop() >= appearoffset) { if (el.css('visibility') == 'hidden') { el.finish();
                        el.css("top", "-50px");
                        el.css("visibility", "visible");
                        el.animate({ "opacity": "1", "top": "0px" }, 200, function() {}) } } else { el.stop();
                    el.css("visibility", "hidden") }
            }
        })
    }
}

function t446_changebgopacitymenu(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t446").each(function() {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-rgba");
            var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
            var bgopacityone = el.attr("data-bgopacity");
            var bgopacitytwo = el.attr("data-bgopacity-two");
            var menushadow = el.attr("data-menushadow");
            if (menushadow == '100') { var menushadowvalue = menushadow } else { var menushadowvalue = '0.' + menushadow }
            if ($(window).scrollTop() > 20) { el.css("background-color", bgcolor_afterscroll); if (bgopacitytwo == '0' || menushadow == ' ') { el.css("box-shadow", "none") } else { el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")") } } else { el.css("background-color", bgcolor); if (bgopacityone == '0.0' || menushadow == ' ') { el.css("box-shadow", "none") } else { el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")") } }
        })
    }
}

function t446_createMobileMenu(recid) {
    var window_width = $(window).width(),
        el = $("#rec" + recid),
        menu = el.find(".t446"),
        burger = el.find(".t446__mobile");
    if (menu.hasClass('t446__mobile_burgerhook')) { burger.find('.t446__mobile_burger').wrap('<a href="#menuopen"></a>') } else { burger.click(function(e) { menu.fadeToggle(300);
            $(this).toggleClass("t446_opened") }) }
    $(window).bind('resize', t_throttle(function() { window_width = $(window).width(); if (window_width > 980) { menu.fadeIn(0) } }, 200));
    el.find('.t-menu__link-item').on('click', function() { if (!$(this).hasClass('t966__tm-link') && !$(this).hasClass('t978__tm-link')) { t446_hideMenuOnMobile($(this), el) } });
    el.find('.t446__logowrapper2 a').on('click', function() { t446_hideMenuOnMobile($(this), el) })
}

function t446_hideMenuOnMobile($this, el) {
    if ($(window).width() < 960) {
        var url = $this.attr('href').trim();
        var menu = el.find('.t446');
        var burger = el.find('.t446__mobile');
        if (url.length && url[0] === '#') {
            burger.removeClass('t446_opened');
            if (menu.is('.t446__positionabsolute') || !burger.is('.t446__positionfixed')) { menu.fadeOut(0) } else { menu.fadeOut(300) }
            return !0
        }
    }
}

function t462_highlight() {
    var url = window.location.href;
    var pathname = window.location.pathname;
    if (url.substr(url.length - 1) == "/") { url = url.slice(0, -1) }
    if (pathname.substr(pathname.length - 1) == "/") { pathname = pathname.slice(0, -1) }
    if (pathname.charAt(0) == "/") { pathname = pathname.slice(1) }
    if (pathname == "") { pathname = "/" }
    $(".t462__list_item a[href='" + url + "']").addClass("t-active");
    $(".t462__list_item a[href='" + url + "/']").addClass("t-active");
    $(".t462__list_item a[href='" + pathname + "']").addClass("t-active");
    $(".t462__list_item a[href='/" + pathname + "']").addClass("t-active");
    $(".t462__list_item a[href='" + pathname + "/']").addClass("t-active");
    $(".t462__list_item a[href='/" + pathname + "/']").addClass("t-active")
}

function t462_checkAnchorLinks(recid) { if ($(window).width() >= 960) { var t462_navLinks = $("#rec" + recid + " .t462__list_item a:not(.tooltipstered)[href*='#']"); if (t462_navLinks.length > 0) { t462_catchScroll(t462_navLinks) } } }

function t462_catchScroll(t462_navLinks) {
    var t462_clickedSectionId = null,
        t462_sections = new Array(),
        t462_sectionIdTonavigationLink = {},
        t462_interval = 100,
        t462_lastCall, t462_timeoutId, t462_offsetTop = $(".t270").attr("data-offset-top");
    if (typeof t462_offsetTop == "undefined") { t462_offsetTop = 0 }
    t462_navLinks = $(t462_navLinks.get().reverse());
    t462_navLinks.each(function() {
        var t462_cursection = t462_getSectionByHref($(this));
        if (typeof t462_cursection.attr("id") != "undefined") { t462_sections.push(t462_cursection) }
        t462_sectionIdTonavigationLink[t462_cursection.attr("id")] = $(this)
    });
    t462_highlightNavLinks(t462_navLinks, t462_sections, t462_sectionIdTonavigationLink, t462_clickedSectionId, t462_offsetTop);
    t462_navLinks.click(function() { if (!$(this).hasClass("tooltipstered")) { t462_navLinks.removeClass('t-active');
            t462_sectionIdTonavigationLink[t462_getSectionByHref($(this)).attr("id")].addClass('t-active');
            t462_clickedSectionId = t462_getSectionByHref($(this)).attr("id") } });
    $(window).scroll(function() { var t462_now = new Date().getTime(); if (t462_lastCall && t462_now < (t462_lastCall + t462_interval)) { clearTimeout(t462_timeoutId);
            t462_timeoutId = setTimeout(function() { t462_lastCall = t462_now;
                t462_clickedSectionId = t462_highlightNavLinks(t462_navLinks, t462_sections, t462_sectionIdTonavigationLink, t462_clickedSectionId, t462_offsetTop) }, t462_interval - (t462_now - t462_lastCall)) } else { t462_lastCall = t462_now;
            t462_clickedSectionId = t462_highlightNavLinks(t462_navLinks, t462_sections, t462_sectionIdTonavigationLink, t462_clickedSectionId, t462_offsetTop) } })
}

function t462_getSectionByHref(curlink) {
    if (curlink.is('[href*="#rec"]')) { return $(".r[id='" + curlink.attr("href").substring(1) + "']") } else { var link = curlink.attr("href").replace('/', '').substring(1); return $(".r[data-record-type='215']").has("a[name='" + link + "']") }
}

function t462_highlightNavLinks(t462_navLinks, t462_sections, t462_sectionIdTonavigationLink, t462_clickedSectionId, offsetTop) {
    var t462_scrollPosition = $(window).scrollTop(),
        t462_valueToReturn = t462_clickedSectionId;
    $(t462_sections).each(function(e) {
        var t462_curSection = $(this),
            t462_sectionTop = t462_curSection.offset().top,
            t462_id = t462_curSection.attr('id'),
            t462_navLink = t462_sectionIdTonavigationLink[t462_id];
        if (t462_scrollPosition >= (t462_sectionTop - offsetTop) || (t462_sections[0].attr("id") == t462_id && $(window).scrollTop() >= $(document).height() - $(window).height())) {
            if (t462_clickedSectionId == null && !t462_navLink.hasClass('t-active')) { t462_navLinks.removeClass('t-active');
                t462_navLink.addClass('t-active');
                t462_valueToReturn = null } else { if (t462_clickedSectionId != null && t462_id == t462_clickedSectionId) { t462_valueToReturn = null } }
            return !1
        }
    });
    return t462_valueToReturn
}

function t462_setPath() {}

function t462_setBg(recid) { var window_width = $(window).width(); if (window_width > 980) { $(".t462").each(function() { var el = $(this); if (el.attr('data-bgcolor-setbyscript') == "yes") { var bgcolor = el.attr("data-bgcolor-rgba");
                el.css("background-color", bgcolor) } }) } else { $(".t462").each(function() { var el = $(this); var bgcolor = el.attr("data-bgcolor-hex");
            el.css("background-color", bgcolor);
            el.attr("data-bgcolor-setbyscript", "yes") }) } }

function t462_appearMenu(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t462").each(function() {
            var el = $(this);
            var appearoffset = el.attr("data-appearoffset");
            if (appearoffset != "") {
                if (appearoffset.indexOf('vh') > -1) { appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100))) }
                appearoffset = parseInt(appearoffset, 10);
                if ($(window).scrollTop() >= appearoffset) { if (el.css('visibility') == 'hidden') { el.finish();
                        el.css("top", "-50px");
                        el.css("visibility", "visible");
                        el.animate({ "opacity": "1", "top": "0px" }, 200, function() {}) } } else { el.stop();
                    el.css("visibility", "hidden") }
            }
        })
    }
}

function t462_changebgopacitymenu(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t462").each(function() {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-rgba");
            var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
            var bgopacityone = el.attr("data-bgopacity");
            var bgopacitytwo = el.attr("data-bgopacity-two");
            var menushadow = el.attr("data-menushadow");
            if (menushadow == '100') { var menushadowvalue = menushadow } else { var menushadowvalue = '0.' + menushadow }
            if ($(window).scrollTop() > 20) { el.css("background-color", bgcolor_afterscroll); if (bgopacitytwo == '0' || menushadow == ' ') { el.css("box-shadow", "none") } else { el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")") } } else { el.css("background-color", bgcolor); if (bgopacityone == '0.0' || menushadow == ' ') { el.css("box-shadow", "none") } else { el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")") } }
        })
    }
}

function t462_createMobileMenu(recid) {
    var window_width = $(window).width(),
        el = $("#rec" + recid),
        menu = el.find(".t462"),
        burger = el.find(".t462__mobile");
    burger.click(function(e) { menu.fadeToggle(300);
        $(this).toggleClass("t462_opened") })
    $(window).bind('resize', t_throttle(function() { window_width = $(window).width(); if (window_width > 980) { menu.fadeIn(0) } }, 200))
}

function t582_init(recid) { $(document).ready(function() { var t582__showMenu;
        $(window).bind('scroll', t_throttle(function() { clearTimeout(t582__showMenu);
            t582__showMenu = setTimeout(function() { t582_appearMenu(recid) }, 50) }, 200));
        $('.t582').removeClass('t582__beforeready');
        t582_appearMenu(recid) }) }

function t582_appearMenu(recid) {
    $(".t582").each(function() {
        var el = $(this),
            appearoffset = el.attr("data-appearoffset"),
            window_width = $(window).width(),
            window_scrollTop = $(window).scrollTop(),
            window_height = $(window).height();
        if (window_width <= 980 && appearoffset != "") { appearoffset = "150" }
        if (appearoffset == "") { appearoffset = "0" }
        if (appearoffset.indexOf('vh') > -1) { appearoffset = Math.floor((window_height * (parseInt(appearoffset) / 100))) }
        appearoffset = parseInt(appearoffset, 10);
        if (window_scrollTop >= appearoffset && window_scrollTop + window_height + 70 <= $(document).height()) { if (el.css('visibility') == 'hidden') { el.finish();
                el.css("bottom", "-100px");
                el.css("visibility", "visible");
                el.animate({ "opacity": "1", "bottom": "0" }, 400, function() {}) } } else { el.stop();
            el.css("visibility", "hidden");
            el.css("opacity", "0") }
    })
}

function t678_onSuccess(t678_form) {
    var t678_inputsWrapper = t678_form.find('.t-form__inputsbox');
    var t678_inputsHeight = t678_inputsWrapper.height();
    var t678_inputsOffset = t678_inputsWrapper.offset().top;
    var t678_inputsBottom = t678_inputsHeight + t678_inputsOffset;
    var t678_targetOffset = t678_form.find('.t-form__successbox').offset().top;
    if ($(window).width() > 960) { var t678_target = t678_targetOffset - 200 } else { var t678_target = t678_targetOffset - 100 }
    if (t678_targetOffset > $(window).scrollTop() || ($(document).height() - t678_inputsBottom) < ($(window).height() - 100)) { t678_inputsWrapper.addClass('t678__inputsbox_hidden');
        setTimeout(function() { if ($(window).height() > $('.t-body').height()) { $('.t-tildalabel').animate({ opacity: 0 }, 50) } }, 300) } else { $('html, body').animate({ scrollTop: t678_target }, 400);
        setTimeout(function() { t678_inputsWrapper.addClass('t678__inputsbox_hidden') }, 400) }
    var successurl = t678_form.data('success-url');
    if (successurl && successurl.length > 0) { setTimeout(function() { window.location.href = successurl }, 500) }
}

function t706_onSuccessCallback(t706_form) { $(".t706__cartwin-products").slideUp(10, function() {});
    $(".t706__cartwin-bottom").slideUp(10, function() {});
    $(".t706 .t-form__inputsbox").slideUp(700, function() {}); try { tcart__unlockScroll() } catch (e) {} }

function t754__init(recid) {
    setTimeout(function() {
        t_onFuncLoad('t_prod__init', function() { t_prod__init(recid) });
        t754_initPopup(recid);
        t754__updateLazyLoad(recid);
        t754__alignButtons_init(recid);
        if (typeof t_store_addProductQuantityEvents !== 'undefined') { t754_initProductQuantity(recid) }
        $('body').trigger('twishlist_addbtn')
    }, 500)
}

function t754_initProductQuantity(recid) { var el = $('#rec' + recid); var productList = el.find(".t754__col, .t754__product-full");
    productList.each(function(i, product) { t_store_addProductQuantityEvents($(product)) }) }

function t754__showMore(recid) {
    var el = $('#rec' + recid).find(".t754");
    var showmore = el.find('.t754__showmore');
    var cards_count = parseInt(el.attr('data-show-count'), 10);
    if (cards_count > 0) {
        if (showmore.text() === '') { showmore.find('td').text(t754__dict('loadmore')) }
        showmore.show();
        el.find('.t754__col').hide();
        var cards_size = el.find('.t754__col').size();
        var cards_count = parseInt(el.attr('data-show-count'), 10);
        var x = cards_count;
        var y = cards_count;
        t754__showSeparator(el, x);
        el.find('.t754__col:lt(' + x + ')').show();
        showmore.click(function() {
            x = (x + y <= cards_size) ? x + y : cards_size;
            el.find('.t754__col:lt(' + x + ')').show();
            if (x == cards_size) { showmore.hide() }
            if (typeof $('.t-records').attr('data-tilda-mode') == 'undefined') { if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') { t_onFuncLoad('t_lazyload_update', function() { t_lazyload_update() }) } }
            t754__showSeparator(el, x);
            if ($('#rec' + recid).find('[data-buttons-v-align]')[0]) { t754__alignButtons(recid) }
        })
    }
}

function t754__showSeparator(el, x) { el.find('.t754__separator_number').addClass('t754__separator_hide');
    el.find('.t754__separator_hide').each(function() { if ($(this).attr('data-product-separator-number') <= x) { $(this).removeClass('t754__separator_hide') } }) }

function t754__dict(msg) {
    var dict = [];
    dict.loadmore = { EN: 'Load more', RU: 'Загрузить еще', FR: 'Charger plus', DE: 'Mehr laden', ES: 'Carga más', PT: 'Carregue mais', UK: 'Завантажити ще', JA: 'もっと読み込む', ZH: '裝載更多', };
    var lang = window.browserLang;
    if (typeof dict[msg] !== 'undefined') { if (typeof dict[msg][lang] !== 'undefined' && dict[msg][lang] != '') { return dict[msg][lang] } else { return dict[msg].EN } }
    return 'Text not found "' + msg + '"'
}

function t754__alignButtons_init(recid) {
    var el = $('#rec' + recid);
    if (el.find('[data-buttons-v-align]')[0]) {
        try {
            t754__alignButtons(recid);
            $(window).bind('resize', t_throttle(function() {
                if (typeof window.noAdaptive !== 'undefined' && window.noAdaptive === !0 && $isMobile) { return }
                t754__alignButtons(recid)
            }, 200));
            el.find('.t754').bind('displayChanged', function() { t754__alignButtons(recid) });
            if ($isMobile) { $(window).on('orientationchange', function() { t754__alignButtons(recid) }) }
        } catch (e) { console.log('buttons-v-align error: ' + e.message) }
    }
}

function t754__alignButtons(recid) {
    var rec = $('#rec' + recid);
    var wrappers = rec.find('.t754__textwrapper');
    var maxHeight = 0;
    var itemsInRow = rec.find('.t-container').attr('data-blocks-per-row') * 1;
    var mobileView = $(window).width() <= 480;
    var tableView = $(window).width() <= 960 && $(window).width() > 480;
    var mobileOneRow = $(window).width() <= 960 && rec.find('.t754__container_mobile-flex')[0] ? !0 : !1;
    var mobileTwoItemsInRow = $(window).width() <= 480 && rec.find('.t754 .mobile-two-columns')[0] ? !0 : !1;
    if (mobileView) { itemsInRow = 1 }
    if (tableView) { itemsInRow = 2 }
    if (mobileTwoItemsInRow) { itemsInRow = 2 }
    if (mobileOneRow) { itemsInRow = 999999 }
    var i = 1;
    var wrappersInRow = [];
    $.each(wrappers, function(key, element) {
        element.style.height = 'auto';
        if (itemsInRow === 1) { element.style.height = 'auto' } else {
            wrappersInRow.push(element);
            if (element.offsetHeight > maxHeight) { maxHeight = element.offsetHeight }
            $.each(wrappersInRow, function(key, wrapper) { wrapper.style.height = maxHeight + 'px' });
            if (i === itemsInRow) { i = 0;
                maxHeight = 0;
                wrappersInRow = [] }
            i++
        }
    })
}

function t754__updateLazyLoad(recid) { var scrollContainer = $("#rec" + recid + " .t754__container_mobile-flex"); var curMode = $(".t-records").attr("data-tilda-mode"); if (scrollContainer.length && curMode != "edit" && curMode != "preview") { scrollContainer.bind('scroll', t_throttle(function() { if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') { t_onFuncLoad('t_lazyload_update', function() { t_lazyload_update() }) } })) } }

function t754_initPopup(recid) {
    var rec = $('#rec' + recid);
    rec.find('[href^="#prodpopup"]').one("click", function(e) {
        e.preventDefault();
        var el_popup = rec.find('.t-popup');
        var el_prod = $(this).closest('.js-product');
        var lid_prod = el_prod.attr('data-product-lid');
        t_onFuncLoad('t_sldsInit', function() {
            t_sldsInit(recid + ' #t754__product-' + lid_prod + '')
        })
    });
    rec.find('[href^="#prodpopup"]').click(function(e) {
        e.preventDefault();
        if ($(e.target).hasClass('t1002__addBtn') || $(e.target).parents().hasClass('t1002__addBtn')) { return }
        t754_showPopup($(e.target).closest('.wrapper'));
        var el_popup = rec.find('.t-popup');
        var el_prod = $(this).closest('.js-product');
        var lid_prod = el_prod.attr('data-product-lid');
        el_popup.find('.js-product').css('display', 'none');
        var el_fullprod = el_popup.find('.js-product[data-product-lid="' + lid_prod + '"]');
        el_fullprod.css('display', 'block');
        var analitics = el_popup.attr('data-track-popup');
        if (analitics > '') {
            var virtTitle = el_fullprod.find('.js-product-name').text();
            if (!virtTitle) { virtTitle = 'prod' + lid_prod }
            Tilda.sendEventToStatistics(analitics, virtTitle)
        }
        var curUrl = window.location.href;
        if (curUrl.indexOf('#!/tproduct/') < 0 && curUrl.indexOf('%23!/tproduct/') < 0 && curUrl.indexOf('#%21%2Ftproduct%2F') < 0) { if (typeof history.replaceState != 'undefined') { window.history.replaceState('', '', window.location.href + '#!/tproduct/' + recid + '-' + lid_prod) } }
        t754_updateSlider(recid + ' #t754__product-' + lid_prod + '');
        if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') { t_onFuncLoad('t_lazyload_update', function() { t_lazyload_update() }) }
    });
    if ($('#record' + recid).length == 0) { t754_checkUrl(recid) }
    t754_copyTypography(recid)
}

function t754_checkUrl(recid) {
    var curUrl = window.location.href;
    var tprodIndex = curUrl.indexOf('#!/tproduct/');
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && tprodIndex < 0) { tprodIndex = curUrl.indexOf('%23!/tproduct/'); if (tprodIndex < 0) { tprodIndex = curUrl.indexOf('#%21%2Ftproduct%2F') } }
    if (tprodIndex >= 0) { var curUrl = curUrl.substring(tprodIndex, curUrl.length); var curProdLid = curUrl.substring(curUrl.indexOf('-') + 1, curUrl.length); var rec = $('#rec' + recid); if (curUrl.indexOf(recid) >= 0 && rec.find('[data-product-lid=' + curProdLid + ']').length) { rec.find('[data-product-lid=' + curProdLid + '] [href^="#prodpopup"]').triggerHandler('click') } }
}

function t754_updateSlider(recid) { var el = $('#rec' + recid);
    t_onFuncLoad('t_slds_SliderWidth', function() { t_slds_SliderWidth(recid) }); var sliderWrapper = el.find('.t-slds__items-wrapper'); var sliderWidth = el.find('.t-slds__container').width(); var pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
    sliderWrapper.css({ transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)' });
    t_onFuncLoad('t_slds_UpdateSliderHeight', function() { t_slds_UpdateSliderHeight(recid) });
    t_onFuncLoad('t_slds_UpdateSliderArrowsHeight', function() { t_slds_UpdateSliderArrowsHeight(recid) }) }

function t754_showPopup(parent) {
    var el = parent;
    var popup = el.find('.t-popup');
    popup.css('display', 'block');
    setTimeout(function() { popup.find('.t-popup__container').addClass('t-popup__container-animated');
        popup.addClass('t-popup_show'); if (window.lazy === 'y' || $('#allrecords').attr('data-tilda-lazy') === 'yes') { t_onFuncLoad('t_lazyload_update', function() { t_lazyload_update() }) } }, 50);
    $('body').addClass('t-body_popupshowed');
    $('body').trigger('twishlist_addbtn');
    el.find('.t-popup').mousedown(function(e) {
        var windowWidth = $(window).width();
        var maxScrollBarWidth = 17;
        var windowWithoutScrollBar = windowWidth - maxScrollBarWidth;
        if (e.clientX > windowWithoutScrollBar) { return }
        if (e.target == this) { t754_closePopup() }
    });
    el.find('.t-popup__close, .t754__close-text').click(function(e) { t754_closePopup() });
    $(document).keydown(function(e) { if (e.keyCode == 27) { t754_closePopup() } })
}

function t754_closePopup() {
    $('body').removeClass('t-body_popupshowed');
    $('.t-popup').removeClass('t-popup_show');
    $('body').trigger('twishlist_addbtn');
    var curUrl = window.location.href;
    var indexToRemove = curUrl.indexOf('#!/tproduct/');
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && indexToRemove < 0) { indexToRemove = curUrl.indexOf('%23!/tproduct/'); if (indexToRemove < 0) { indexToRemove = curUrl.indexOf('#%21%2Ftproduct%2F') } }
    curUrl = curUrl.substring(0, indexToRemove);
    setTimeout(function() { $(".t-popup").scrollTop(0);
        $('.t-popup').not('.t-popup_show').css('display', 'none'); if (typeof history.replaceState != 'undefined') { window.history.replaceState('', '', curUrl) } }, 300)
}

function t754_removeSizeStyles(styleStr) {
    if (typeof styleStr != "undefined" && (styleStr.indexOf('font-size') >= 0 || styleStr.indexOf('padding-top') >= 0 || styleStr.indexOf('padding-bottom') >= 0)) {
        var styleStrSplitted = styleStr.split(';');
        styleStr = "";
        for (var i = 0; i < styleStrSplitted.length; i++) {
            if (styleStrSplitted[i].indexOf('font-size') >= 0 || styleStrSplitted[i].indexOf('padding-top') >= 0 || styleStrSplitted[i].indexOf('padding-bottom') >= 0) { styleStrSplitted.splice(i, 1);
                i--; continue }
            if (styleStrSplitted[i] == "") { continue }
            styleStr += styleStrSplitted[i] + ";"
        }
    }
    return styleStr
}

function t754_copyTypography(recid) { var rec = $('#rec' + recid); var titleStyle = rec.find('.t754__title').attr('style'); var descrStyle = rec.find('.t754__descr').attr('style');
    rec.find('.t-popup .t754__title').attr("style", t754_removeSizeStyles(titleStyle));
    rec.find('.t-popup .t754__descr, .t-popup .t754__text').attr("style", t754_removeSizeStyles(descrStyle)) }