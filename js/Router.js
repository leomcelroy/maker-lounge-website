export class Router {
  routes = {};

  constructor() {
    this.listen();
  }

  add(path, cb) {
    this.routes[path] = cb;
  };

  navigate(path = "") {
    if (path in this.routes) {
      this.routes[path]();
    } else {
      window.location.href = window.location.href.split("#")[0];
    }
  };

  listen() {
    window.addEventListener("hashchange", () => this.getPath());
    window.addEventListener("load", () => this.getPath());
  };

  getPath() {
    const arr = window.location.href.split("#");
    const path = arr.length > 1 ? arr[1] : "";
    this.navigate(path);
  };
}
