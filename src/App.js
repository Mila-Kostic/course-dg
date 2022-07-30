import './App.css';
//24.36
function App() {
  // const name = "Mila"
  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  return (
    <div className="App">
      Hello {names}!
      <div> 
      <p>{[1,2,3]}</p>
      </div>
    </div>
  );
}

export default App;
