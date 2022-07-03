import { offhands } from "../models/offhands";
import { capes } from "../models/capes";
import { boots } from "../models/boots";
import { armors } from "../models/armors";
import { helmets } from "../models/helmets";
import { oneHandedWeapons, twoHandedWeapons } from "../models/weapons";

export default function randomize(item: string): string {
  const itemQuality = Math.floor(Math.random() * 6);
  const itemLevelRandom = Math.floor(Math.random() * 4);
  const itemLevel = itemLevelRandom === 0 ? "" : `@${itemLevelRandom}`;
  const itemTier = Math.floor(Math.random() * 5) + 4;
  let itemType = "";

  switch (item) {
    case "twoHandedWeapon":
      itemType =
        twoHandedWeapons[Math.floor(Math.random() * twoHandedWeapons.length)];
      break;
    case "oneHandedWeapon":
      itemType =
        oneHandedWeapons[Math.floor(Math.random() * oneHandedWeapons.length)];
      break;
    case "offhand":
      itemType = offhands[Math.floor(Math.random() * offhands.length)];
      break;
    case "cape":
      itemType = capes[Math.floor(Math.random() * capes.length)];
      break;
    case "boot":
      itemType = boots[Math.floor(Math.random() * boots.length)];
      break;
    case "armor":
      itemType = armors[Math.floor(Math.random() * armors.length)];
      break;
    case "helmet":
      itemType = helmets[Math.floor(Math.random() * helmets.length)];
      break;
    default:
      break;
  }

  return `https://render.albiononline.com/v1/item/T${itemTier}_${itemType}${itemLevel}.png?count=1&quality=${itemQuality}`;
}
