
import './App.css';

function App() {
  return (
    <div>
      <input type="file" id="" name="" onChange={e => console.log(e.target.files[0]["name"])}/>
    </div>
  );
}

export default App;
