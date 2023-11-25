document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var element = document.querySelector('.content-wrapper.-embed .watermark');
        if (element) {
            element.style.display = 'none !important';
        }
    }, 5000); // 5000 milliseconds = 5 seconds
});
