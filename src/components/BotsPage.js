import React,{useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [collection, setCollection] = useState([]);
  
  useEffect(()=> {
    fetch("http://localhost:8002/bots")
    .then((response)=> response.json())
    .then((collection) => setCollection(collection))
    .catch((error) => {
      console.log(error.message)
    });
  }, []);

  function updateBot(bot){
    setCollection(collection.map(machine => machine.id === bot.id? {...machine, army:true} : machine));
  }

  function removeBot(bot){
    setCollection(collection.map(machine => machine.id === bot.id ? {...machine, army:false}: machine));
  }

  

  function handleDeleteClick(id) {
    fetch(`http://localhost:8002/bots/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updateBot = collection.filter(machine => machine.id !== id);
        setCollection(updateBot);
      });
  }
  
  return (
    <div>
      <YourBotArmy removeBot={removeBot} collection={collection.filter(machine => machine.army)}s/>
      <BotCollection collection={collection} updateBot={updateBot} handleDeleteClick={handleDeleteClick}/>
    </div>
  )
}

export default BotsPage;
