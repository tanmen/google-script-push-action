import {setFailed} from "@actions/core";
import {initialize, push} from "./actions";
import {report} from "./report";

initialize()
  .then(() => push())
  .then(result => report(result))
  .catch(e => setFailed(e));
