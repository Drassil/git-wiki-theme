(function ($) {
    //
    // RED LINK FEATURE (Hacky)
    // TODO: filter external links
    $.fn.redLinks = function () {
        setTimeout(
            function () {
                $('a').each(function () {
                    // avoid red link for external urls
                    if (this.hostname != window.location.hostname) {
                        if ($(this).parents('#git-wiki-content').length > 0)
                            $(this).addClass("external-link");
                        return;
                    }

                    var ext = this.href.split('.').pop().split(/\#|\?/)[0];

                    // [Performance tip] pessimistic condition based on the fact that
                    // markdown files are automatically converted in html
                    // if they are part of the wiki (the real check is right below)
                    if (ext.toLowerCase() == "md" || ext.toLowerCase() == "markdown")
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