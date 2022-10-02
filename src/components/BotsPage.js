import React,{useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [collection, setCollection] = useState([]);
  const [army,setArmy] = useState([])

  useEffect(()=> {
    fetch("http://localhost:8003/bots")
    .then((response)=> response.json())
    .then((collection) => setCollection(collection))
    .catch((error) => {
      console.log(error.message)
    });
  }, []);

  const updateBot = (armyBot) => {
    if (!army.find((bot) => bot === armyBot)) {
      const newBot = collection.find((bot) => bot === armyBot);
      setArmy([...army, newBot]);
    }
  };

  const removeBot = (armyBot) => {
    const botArmy = army.filter((bot) => bot !== armyBot);
    setArmy(botArmy);
  };

  

  const onDeleteBot = (armyBot) => {
    if (army.find((bot) => bot === armyBot)) {
      const bots = collection.filter((bot) => bot !== armyBot);
      const botArmy = army.filter((bot) => bot !== armyBot);

      setCollection(bots);
      setArmy(botArmy);

      fetch(`http://localhost:8003/bots/${armyBot.id}`, {
        method: "DELETE",
      });
    } else {
      console.log("not even enlisted");
    }
  };
  
  return (
    <div>
      <YourBotArmy removeBot={removeBot} collection={army} onDeleteBot={onDeleteBot}/>
      <BotCollection collection={collection} updateBot={updateBot} onDeleteBot={onDeleteBot}/>
    </div>
  )
}
export default BotsPage;
