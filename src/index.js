// import "./layout/main/main.scss";
function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(require.context("./blocks/", true, /\.js$|\.scss$/));
importAll(require.context("./pages/", true, /\.js$|\.scss$/));
importAll(require.context("./layout/", true, /\.js$|\.scss$/));
importAll(require.context("./theme/", true, /\.js$|\.scss$/));
