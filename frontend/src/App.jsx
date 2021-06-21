import Board from './containers/Board'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'


function App() {

  const boards = useSelector(state => state.boardsReducer.myBoards)
  const activeId = useSelector(state => state.boardsReducer.activeBoardId)
  const board = boards.find(board => board.id === activeId)

  return (
    <div className='App'>
      <Navbar />
      <main className='App__main'>
        {/* <h1>Task Boards Management</h1> */}
          {
            activeId &&
            <Board key={board.id} {...board} />       
          }
      </main>
    </div>
  );
}

export default App
