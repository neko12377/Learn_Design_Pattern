import * as path from "path";

export const config = {
    entry: "../src",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js",
        clean: true,
    }
}