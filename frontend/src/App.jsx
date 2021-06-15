import Board from './containers/Board'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'
import Wrapper from './styles/Wrapper'

function App() {

  const boards = useSelector(state => state.boardsReducer.myBoards)
  const activeId = useSelector(state => state.boardsReducer.activeBoardId)
  const board = boards.find(board => board.id === activeId)

  return (
    <Wrapper>
      <Navbar />
        <h1>Task Boards Management</h1>
          {
            activeId &&
            <Board key={board.id} {...board} />       
          }
    </Wrapper>
  );
}

export default App
