import Bottle from "bottlejs";
import Http from "./http";
import ApiAuth from "./api/apiAuth";

let bottle = new Bottle();

export default bottle;
bottle.service("Http", Http);
bottle.service("ApiAuth", ApiAuth, "Http");

declare module "bottlejs" {
    interface IContainer {
        ApiAuth: ApiAuth;
    }
}
