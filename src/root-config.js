import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@app3/navbar",
  () => System.import("@app3/navbar"),
  isActive.navbar
);

start();