import "./plugins/jquery-date-range-picker-master/src/jquery.daterangepicker";
import "./plugins/jquery.maskedinput/jquery.maskedinput";
import "item-quantity-dropdown/lib/item-quantity-dropdown.min";
import "./plugins/ion.rangeSlider-master/js/ion.rangeSlider.min";
import "./plugins/ion.rangeSlider-master/css/ion.rangeSlider.min.css";
function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(require.context("./blocks/", true, /\.js$|\.scss$/));
importAll(require.context("./pages/", true, /\.js$|\.scss$/));
importAll(require.context("./layout/", true, /\.js$|\.scss$/));
importAll(require.context("./theme/", true, /\.js$|\.scss$/));
