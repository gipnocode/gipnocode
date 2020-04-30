import "./plugins/jquery.maskedinput/jquery.maskedinput";
import "./plugins/slick-1.8.1/slick/slick";
import "./plugins/slick-1.8.1/slick/slick.scss";
import "./plugins/slick-1.8.1/slick/slick-theme.scss";

function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(require.context("./blocks/", true, /\.js$|\.scss$/));
importAll(require.context("./pages/", true, /\.js$|\.scss$/));
importAll(require.context("./layout/", true, /\.js$|\.scss$/));
importAll(require.context("./theme/", true, /\.js$|\.scss$/));
