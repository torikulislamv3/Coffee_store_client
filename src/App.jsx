
import { useLoaderData } from 'react-router-dom';
import './App.css'
import CoffeCard from './Components/CoffeCard';

function App() {
  const coffes = useLoaderData();
  
  return (
    <>
      <h1 className="text-6xl font-bold underline text-purple-800">
        Coffee Store Management
      </h1>
      <h4 className='mt-10 text-black text-4xl'>product: {coffes.length}</h4>
      {
        coffes.map(coffee=> <CoffeCard key={coffee._id} coffee={coffee}></CoffeCard>)
      }
    </>
  )
}

export default App;
