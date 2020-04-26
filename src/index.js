import "./plugins/jquery-date-range-picker-master/src/jquery.daterangepicker";
import "./plugins/jquery.maskedinput/jquery.maskedinput";
import "item-quantity-dropdown/lib/item-quantity-dropdown.min";
import "./plugins/slick-1.8.1/slick/slick";
import "./plugins/slick-1.8.1/slick/slick.scss";
import "./plugins/slick-1.8.1-shit/slick/slick-theme.scss";
import "./plugins/ion.rangeSlider-master/js/ion.rangeSlider.min";
import "@fortawesome/fontawesome-free/js/all.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(require.context("./blocks/", true, /\.js$|\.scss$/));
importAll(require.context("./pages/", true, /\.js$|\.scss$/));
importAll(require.context("./layout/", true, /\.js$|\.scss$/));
importAll(require.context("./theme/", true, /\.js$|\.scss$/));
