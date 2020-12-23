function search(input) {
    input = input.toLowerCase();
    
    $(".command").each(function() {
        $(this).hide();
    });

    if(input.length < 1) {
        $(".command").show();
    }else {
        commands.filter(cmd => cmd.name.startsWith(input) || cmd.name.includes(input)).map(cmd => $(`#command-${cmd.name}`).show());
    }
}

$("#searchButton").on("click", function() {
    search($("#searchInput").val());
});

$("#search").on("change", (e) => {
    console.log(e);
});