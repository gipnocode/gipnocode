$(document).ready(function() {
  $(".no-config").iqDropdown();

  $(".custom").iqDropdown({
    minItems: 0,
    maxItems: 100,
    selectionText: "гостей",
    textPlural: "гость",
    onChange: function(id, count, totalItems) {
      // if (id === "adult" && count === 1) {
      //   $(".adult").text("взрослый");
      // } else {
      //   $(".adult").text("взрослых");
      // }
      // // if (id === "minor" && count === 1) {
      // //   $(".minor").text("детей");
      // // } else {
      // //   $(".minor").text("детей");
      // // }
      // if (id === "infant" && count === 1) {
      //   $(".infant").text("младенец");
      // } else {
      //   $(".infant").text("младенцев");
      // }

      console.log(id, count, totalItems);
    }
  });

  // $(".custom-message").iqDropdown({
  //   minItems: 0,
  //   onChange: function(id, count, totalItems) {
  //     console.log(id, count, totalItems);
  //   },
  //   setSelectionText: function(itemCount, totalItems) {
  //     const items = Object.keys(itemCount)
  //       .map(key => itemCount[key])
  //       .join(" + ");
  //     return items + " = " + totalItems;
  //   }
  // });
});
