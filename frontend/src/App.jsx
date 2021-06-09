import Board from './containers/Board'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Task Boards Management</h1>
      <Board title='Main Project' />
    </div>
  );
}

export default App
