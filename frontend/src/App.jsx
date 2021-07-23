import Board from './containers/Board'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getUser } from './store/reducers/boards'


function App() {

  const dispatch = useDispatch()
  const boards = useSelector(state => state.boardsReducer.myBoards)
  const activeId = useSelector(state => state.boardsReducer.activeBoardId)
  const board = boards.find(board => board.id === activeId)

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <div className='App'>
      <Navbar />
      <main className='App__main'>
        {
          activeId &&
          <Board key={board.id} {...board} />       
        }
      </main>
    </div>
  );
}

export default App
