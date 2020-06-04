import init from "./scripts/init";
import registerSW from "./scripts/SWregistration";

import "./styles.scss";

window.ondragstart = () => false;
window.addEventListener("load", init);

registerSW();
