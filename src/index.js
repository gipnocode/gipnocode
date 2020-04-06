import "./blocks/jquery-date-range-picker-master/src/daterangepicker.scss";
import "./blocks/jquery-date-range-picker-master/src/jquery.daterangepicker";

function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(require.context("./blocks/", true, /\.js$|\.scss$/));
importAll(require.context("./pages/", true, /\.js$|\.scss$/));
importAll(require.context("./layout/", true, /\.js$|\.scss$/));
importAll(require.context("./theme/", true, /\.js$|\.scss$/));

// jQuery(document).ready(function($) {
//   $(".adult").text("etr54re5");
// });

// document.querySelectorAll(".pages-header-nav-link");
