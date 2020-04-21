$(function () {
  $(".mytest").dateRangePicker({
    separator: " to ",

    getValue: function () {
      if ($(".mytest1").val() && $(".mytest2").val())
        return $(".mytest1").val() + " to " + $(".mytest2").val();
      else return "";
    },
    setValue: function (s, s1, s2) {
      $(".mytest1").val(s1);
      $(".mytest2").val(s2);
    },

    getValue: function () {
      return this.innerHTML;
    },
    setValue: function (s) {
      this.innerHTML = s;
    },
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
  $("#date-range16-close").click(function (evt) {
    evt.stopPropagation();
    $("#date-range16").data("dateRangePicker").close();
  });
  $("#date-range16-clear").click(function (evt) {
    evt.stopPropagation();
    $("#date-range16").data("dateRangePicker").clear();
  });
});
