
(function ($) {
    //
    // RED LINK FEATURE (Hacky)
    // TODO: filter external links
    $.fn.redLinks = function () {
        $('a').each(function () {
            // avoid red link for external urls
            if (this.hostname != window.location.hostname)
                return;

            var that = this;
            $.ajax({
                type: 'HEAD',
                url: this.href,
                success: function () {

                },
                error: function (xhr, ajaxOptions, thrownError) {
                    if (xhr.status == 404) {
                        $(that).css('color', 'red');
                    }
                }
            });
        });
    };

})(jQuery);
