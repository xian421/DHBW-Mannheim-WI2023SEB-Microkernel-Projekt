import { pluginManager } from "../../app/pluginManager";
import { IpsumBombPage } from "./Page";

pluginManager.register({
  id: "ipsumPlugin",
  route: "/ipsumPlugin",
  component: IpsumBombPage,
  tile: "Lorem Ipsum Bomb 💥",
  color1: "#f72585",
  color2: "#7209b7",
  spin: 273
});
