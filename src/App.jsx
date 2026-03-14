
import Counter from '../Counter';

import Batsman from '../Batsman';
import './App.css'

function App() {
  {/*step-2 */}
 function handleClick(){
  alert('I am clicked.')
 }
{/*step-3 */}
 const handleClick3 =() =>{
    alert('clicked 3')
 }



{/*step-5 */}   
 const handleAdd5 = (num) => {
   const newNum = num + 5;
   alert(newNum);
 }

  return (
    <>
     
      <h3>Vite + React</h3>
<Batsman></Batsman>
<Counter></Counter>



{/*step-1 */}
     <button onClick={handleClick}>Click Me</button>
{/*step-2 */}
     <button onClick={function handleClick2(){
       alert('clicked 2')
     }}>Click Me2</button>
  {/*step-3 */}   
     <button onClick={handleClick3}>Click Me3</button>
 {/*step-4 */}   
    <button onClick={() => alert('click 4')}>Click Me 4</button>
  {/*step-5 */}     
    <button onClick={() => handleAdd5(10)}>Click Me 5</button>
      
    </>
  )
}

export default App
