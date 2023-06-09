if (window.location.href === "https://www.modycore.com/upgrade-account/") {
    var style = document.createElement("style");
    style.innerHTML = '[data-pagemodule="store"] .ipsType_pageTitle { visibility: hidden !important; }' +
                      '[data-pagemodule="store"] .ipsType_pageTitle:before { content: "Modycore Store" !important; visibility: visible !important; }';
    document.head.appendChild(style);
}
