import React from "react";
import BotCard from "./BotCard"

function BotCollection({collection, updateBot, onDeleteBot}) {
const myBots = collection.map(bot => 
<BotCard 
key={bot.id} 
bot={bot} 
botEvent={updateBot}
onDeleteBot={onDeleteBot}
/>)
 
  return (
    <div className="ui four column grid">
      <div className="row">
      {myBots}
      
        {/*...and here..*/}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
