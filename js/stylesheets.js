var mqMd, mqLg, mq992, mq1840;

if (typeof window.matchMedia !== 'undefined') {
    mqMd = window.matchMedia('(min-width: 768px)');
    mq992 = window.matchMedia('(min-width: 992px)');
    mqLg = window.matchMedia('(min-width: 1200px)');
    mq1840 = window.matchMedia('(min-width: 1840px)');

    adjustStyle();
    window.onresize = adjustStyle;
}

function adjustStyle() {
    if (mqMd.matches) addStyle('style-768.min.css', mqMd.media);
    if (mq992.matches) addStyle('style-992.min.css', mq992.media);
    if (mqLg.matches) addStyle('style-1200.min.css', mqLg.media);
    if (mq1840.matches) addStyle('style-1840.min.css', mq1840.media);
}

function addStyle(src, media) {
    (function (d, t) {
        var id = src.match(/^[^\.]+/)[0]; var g = d.createElement(t);
        if (d.getElementById(id)) return;
        g.id = id; g.rel = 'stylesheet'; g.href = [baseUrl + 'Content/build/css/', src].join('');
        g.media = media;
        document.head.appendChild(g);
    }(document, 'link'));
}