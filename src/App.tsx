import { useEffect, useState } from "react";
import Item from "../components/Item";
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
    const random = Math.floor(Math.random() * 2) + 1;
    let weapon = "";
    let offhandItem = "";

    if (random === 1) {
      weapon = randomize("oneHandedWeapon");
      offhandItem = randomize("offhand");
    } else {
      weapon = randomize("twoHandedWeapon");
    }

    setWeapons(weapon);
    setOffhand(offhandItem);
    setChest(randomize("armor"));
    setHelm(randomize("helmet"));
    setBoots(randomize("boot"));
    setCape(randomize("cape"));
  }, [random]);

  return (
    <div className="flex flex-col justify-center items-center bg-slate-900 h-screen">
      <h1 className="font-bold text-3xl text-cyan-400">
        Albion Random Build Generator
      </h1>

      <div className="pt-12 flex flex-row">
        <div className="h-32 w-32"></div>
        <Item src={helm} />
        <Item src={cape} />
      </div>

      <div className="flex flex-row">
        <Item src={weapons} />
        <Item src={chest} />
        <Item
          src={offhand == "" ? weapons : offhand}
          className={offhand == "" ? "opacity-70" : ""}
        />
      </div>
      <div className="flex flex-row">
        <div className="h-32 w-32"></div>
        <Item src={boots} />
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
