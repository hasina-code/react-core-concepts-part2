import { useState } from "react"
export default function Batsman(){
  const [runs,SetRuns] = useState(0);
  const [sixes, setSixes] =useState(0);
 const handleSingle = () =>{
   const updateRuns = runs + 1;
   SetRuns(updateRuns);
 }

 const handleSix = () =>{
  const updatedRuns = runs + 6;
  const updatedSixes = sixes + 1;
  setSixes(updatedSixes);
  SetRuns(updatedRuns);
 }

 const handleFour = () =>{
  const updatedRuns = runs + 4;
  SetRuns(updatedRuns);
 }

  return (
    <div>
      <h3>player: Bangla Batsman </h3>
      <p><small>six:{sixes}</small></p>
      {
        runs > 50 && <p>you score:50</p>
      }
      <h1>Score: {runs}</h1>
      <button onClick={handleSingle}>singles</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>six</button> 
    </div>
  )
}