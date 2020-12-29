$(window).on("error", () => {
    $("#errorsDetected").show();

    $("#errorsDetected").click(() => {
        $("#errorsDetected").hide();
    });
});