import jsCookie from "js-cookie";
import jsHttpCookie from "cookie";

export default class AuthService {
  loggedIn = req => {
    const token = this.getToken(req);
    return !!token;
  };

  setUser = user => {
    jsCookie.set("user", JSON.stringify(user), { expires: 7 });
  };

  getUser = req => {
    return process.browser
      ? this.getUserFromBrowser()
      : this.getUserFromServer(req);
  };

  getUserFromBrowser = () => jsCookie.get("user");

  getUserFromServer = req => {
    if (req && req.headers) {
      const cookies = req.headers.cookie;
      if (typeof cookies === "string") {
        const cookiesData = jsHttpCookie.parse(cookies);

        return cookiesData.user ? JSON.parse(cookiesData.user) : {};
      }
      return;
    }
    return;
  };

  setToken = token => {
    if (process.browser) {
      jsCookie.set("Token", token, { expires: 7 });
    }
  };

  getToken = req => {
    return process.browser
      ? this.getTokenFromBrowser()
      : this.getTokenFromServer(req);
  };

  getTokenFromBrowser = () => {
    return jsCookie.get("Token");
  };

  getTokenFromServer = req => {
    if (req && req.headers) {
      const cookies = req.headers.cookie;

      if (typeof cookies === "string") {
        const cookiesData = jsHttpCookie.parse(cookies);
        return cookiesData.Token;
      }
      return;
    }
    return;
  };

  getCsrfToken = req => {
    return process.browser
      ? this.getCsrfFromBrowser()
      : this.getCsrfFromServer(req);
  };

  getCsrfFromBrowser = () => {
    return jsCookie.get("csrftoken");
  };

  getCsrfFromServer = req => {
    if (req && req.headers) {
      const cookies = req.headers.cookie;

      if (typeof cookies === "string") {
        const cookiesData = jsHttpCookie.parse(cookies);
        return cookiesData.csrftoken;
      }
      return;
    }
    return;
  };

  removeToken = () => {
    jsCookie.remove("Token");
    jsCookie.remove("user");
    jsCookie.remove("csrftoken");
  };
}
