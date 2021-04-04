import * as webpack from "webpack";
import {merge} from "webpack-merge";
import {config} from "./webpack.config";

const devConfig: webpack.Configuration = {
    mode: "development"
}

export default merge(devConfig, config);