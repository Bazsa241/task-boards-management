import Board from './containers/Board'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'


function App() {

  const boards = useSelector(state => state.boardsReducer.myBoards)

  return (
    <div className="App">
      <Navbar />
      <h1>Task Boards Management</h1>
      {
        boards.map(board => <Board key={board.id} {...board} />)
      }      
    </div>
  );
}

export default App
