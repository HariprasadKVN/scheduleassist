import './App.css';
import HOCA from './component/HOCA';
import HOCB from './component/HOCB';
import Schedule from './pages/Schedule/page';

function App() {
  const user = localStorage.getItem("user");

  return (
    <div className="App">
      {/* <HOCA></HOCA> 
      <HOCB></HOCB> */}
      <Schedule></Schedule>
    </div>
  );
}

const HOC = (component: React.ReactNode) => {
  return component
}



const B: React.FC<{ authorized: boolean }> = ({ authorized }) => {
  return (<div>
    {authorized ? "I am B" : "B Not Authorized"}
  </div>)
}

export default App;
