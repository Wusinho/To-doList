import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
router(window.location.hash);
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});
