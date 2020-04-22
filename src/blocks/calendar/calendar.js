$(function () {
  $(".mytest").dateRangePicker({
    language: "ru",
    singleMonth: true,
    customArrowNextSymbol: '<i class="material-icons">arrow_forward</i>',
    customArrowPrevSymbol: '<i class="material-icons">arrow_back</i>',
    stickyMonths: true,
    startDate: "2019-07-10",
    endDate: "2019-09-10",
    startOfWeek: "monday",
    alwaysOpen: true,
    showTopbar: false,
  });

  $(".dinamic-calendar").dateRangePicker({
    separator: " to ",
    getValue: function () {
      if (
        $(".input-field_calendar-one").val() &&
        $(".input-field_calendar-two").val()
      )
        return (
          $(".input-field_calendar-one").val() +
          " to " +
          $(".input-field_calendar-two").val()
        );
      else return "";
    },
    setValue: function (s, s1, s2) {
      $(".input-field_calendar-one").val(s1);
      $(".input-field_calendar-two").val(s2);
    },
    language: "ru",
    singleMonth: true,
    customArrowNextSymbol: '<i class="material-icons">arrow_forward</i>',
    customArrowPrevSymbol: '<i class="material-icons">arrow_back</i>',
    startOfWeek: "monday",
    showTopbar: false,
    format: "DD.MM.GGGG",
  });

  $("#date-range16-close").click(function (evt) {
    evt.stopPropagation();
    $("#date-range16").data("dateRangePicker").close();
  });
  $("#date-range16-clear").click(function (evt) {
    evt.stopPropagation();
    $("#date-range16").data("dateRangePicker").clear();
  });
});
