import {forcePush} from "../config";
import {exec} from "../exec";

export const push = () =>
  exec("clasp push", {f: forcePush});
