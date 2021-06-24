import Board from './containers/Board'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useCallback } from 'react'
import { getBoards } from './store/reducers/boards'


function App() {

  const dispatch = useDispatch()
  const boards = useSelector(state => state.boardsReducer.myBoards)
  const activeId = useSelector(state => state.boardsReducer.activeBoardId)
  const board = boards.find(board => board.id === activeId)

  const fetchData = useCallback( async () => {
    const response = await fetch('http://localhost:5000/api/boards')
    const data = await response.json()
    console.log(data);
    dispatch(getBoards(data))
  }, [dispatch])

  useEffect(fetchData, [fetchData])

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
