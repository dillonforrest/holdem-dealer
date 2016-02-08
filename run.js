try {
    require("source-map-support").install();
} catch(err) {
}
require("./js/goog/bootstrap/nodejs")
require("./holdem-dealer")
require("./js/holdem_dealer/core")
holdem_dealer.core._main(); // TODO: fix this assumption
