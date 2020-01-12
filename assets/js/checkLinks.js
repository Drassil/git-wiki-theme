(function ($) {
    //
    // RED LINK FEATURE (Hacky)
    $.fn.checkLinks = function (staticPages) {
        setTimeout(
            function () {
                $('a').each(function () {
                    // avoid red link for external urls
                    if (this.hostname != window.location.hostname) {
                        if ($(this).parents('#git-wiki-content').length > 0)
                            $(this).addClass("external-link");
                        return;
                    }

                    for (var k in staticPages) {
                        var page = staticPages[k];
                        var link = document.createElement("a");
                        link.href = page;

                        if (this.href === link.href) {
                            return;
                        }
                    }

                    var ext = this.pathname.split('.').pop().split(/\#|\?/)[0];

                    // pessimistic condition based on the fact that
                    // markdown files are automatically converted in html
                    // if they are part of the wiki (the real check is right below)
                    var lExt = ext && ext.toLowerCase();
                    var isRed = lExt == "md" || lExt == "markdown";

                    if (isRed)
                        $(this).css('color', 'red');

                    var that = this;
                    $.ajax({
                        type: 'HEAD',
                        url: this.href,
                        success: function () {
                            $(that).css('color', '');
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            if (xhr.status == 404) {
                                $(that).css('color', 'red');
                            }
                        }
                    });
                });
            }, 0);
    };

})(jQuery);