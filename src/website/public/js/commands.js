// $(window).on("turbolinks:load", () => {
//     console.log('true')
// });

// function search(input) {
//     input = input.toLowerCase();
    
//     $(".command").each(function() {
//         $(this).hide();
//     });

//     if(input.length < 1) {
//         $(".command").show();
//     }else {
//         commands.filter(cmd => cmd.name.startsWith(input) || cmd.name.includes(input)).map(cmd => $(`#command-${cmd.name}`).show());
//     }
// }

// $("#searchButton").on("click", function() {
//     search($("#searchInput").val());
// });

// $("#search").on("change", (e) => {
//     console.log(e);
// });

// window._commandsState = () => {
//     return {
//         commands: window._commands,
//         categories: window._categories,
//         filter: "",
//         isTrue(name, category) {
//             return name.startsWith(this.filter.toLowerCase()) || category === this.filter;
//         }
//     }
// }