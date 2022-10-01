import React from "react";
import BotCard from "./BotCard"
import BotCollection from "./BotCollection";

function YourBotArmy({collection, removeBot, handleDeleteClick}) {
  const myBots = collection.map(bot => 
    <BotCard 
    key={bot.id} 
    bot={bot}
    botEvent={removeBot}
    onDeleteClick={handleDeleteClick} 
    />)
 
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
        {myBots}
        
          {/*...and here...*/}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
