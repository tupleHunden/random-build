import { useEffect, useState } from "react";
import randomize from "./randomize";

function App() {
  const [random, setRandom] = useState(false);
  const [helm, setHelm] = useState("");
  const [cape, setCape] = useState("");
  const [weapons, setWeapons] = useState("");
  const [chest, setChest] = useState("");
  const [boots, setBoots] = useState("");
  const [offhand, setOffhand] = useState("");

  useEffect(() => {
    // random between 1 and 2
    const random = Math.floor(Math.random() * 2) + 1;
    let weapon = "";
    let offhandItem = "";

    if (random === 1) {
      weapon = randomize("oneHandedWeapon");
      offhandItem = randomize("offhands");
    } else {
      weapon = randomize("twoHandedWeapon");
    }

    const armor = randomize("armor");
    const helmet = randomize("helmet");
    const boot = randomize("boots");
    const cape = randomize("capes");
    setWeapons(weapon);
    setChest(armor);
    setHelm(helmet);
    setBoots(boot);
    setCape(cape);
    setOffhand(offhandItem);
  }, [random]);

  return (
    <div className="flex flex-col justify-center items-center bg-slate-900 h-screen">
      <h1 className="font-bold text-3xl text-cyan-400">
        Albion Random Build Generator
      </h1>

      <div className="pt-12 flex flex-row">
        <div className="h-32 w-32"></div>
        <div className="h-32 w-32">
          <img src={helm} alt="Helmet Armor" width="100%" height="100%" />
        </div>
        <div className="h-32 w-32">
          <img src={cape} alt="Cape" width="100%" height="100%" />
        </div>
      </div>

      <div className="flex flex-row">
        <div className="h-32 w-32">
          <img src={weapons} alt="Weapon" width="100%" height="100%" />
        </div>
        <div className="h-32 w-32">
          <img src={chest} alt="Chest Armor" width="100%" height="100%" />
        </div>
        <div className="h-32 w-32">
          <img
            className={offhand == "" ? "opacity-70" : ""}
            src={offhand == "" ? weapons : offhand}
            alt="Offhand Weapon"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="h-32 w-32"></div>
        <div className="h-32 w-32">
          <img src={boots} alt="Boot Armor" width="100%" height="100%" />
        </div>
        <div className="h-32 w-32"></div>
      </div>

      <button
        className="font-bold mt-8 bg-cyan-600 hover:bg-cyan-800 text-white py-2 px-4 rounded"
        onClick={() => {
          setRandom(!random);
        }}
      >
        Randomize
      </button>

      <p className="mt-5 text-cyan-400">
        Message Alchemist8 in-game for feature requests, or Alch#6096 on Discord
      </p>
    </div>
  );
}

export default App;
