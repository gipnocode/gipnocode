$(function() {
  $(".mytest").dateRangePicker({
    separator: " to ",

    getValue: function() {
      if ($(".mytest1").val() && $(".mytest2").val())
        return $(".mytest1").val() + " to " + $(".mytest2").val();
      else return "";
    },
    setValue: function(s, s1, s2) {
      $(".mytest1").val(s1);
      $(".mytest2").val(s2);
    },
    language: "ru",
    singleMonth: true,
    format: "DD.MM.YYYY",
    customArrowNextSymbol: '<i class="material-icons">arrow_forward</i>',
    customArrowPrevSymbol: '<i class="material-icons">arrow_back</i>',
    showButtonPanel: true
  });
  $(".date-range16-clear").click(function(evt) {
    evt.stopPropagation();
    $(".mytest")
      .data("dateRangePicker")
      .clear();
  });
});
