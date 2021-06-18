import { useSelector, useDispatch } from 'react-redux'
import BoardTab from './BoardTab'
import { addBoard } from '../store/reducers/boards'


function Navbar() {

  const dispatch = useDispatch()
  const boards = useSelector(state => state.boardsReducer.myBoards)
  
  const handleClick = () => {
    dispatch(addBoard())
  }

  return (
    <aside className='Navbar'>
      <div className='Navbar__heading'>
        <h3>Boards</h3>
        <button onClick={handleClick}>+</button>
      </div>
      <ul>
        {
          boards.map(board => <BoardTab key={board.id} {...board} />)
        }
      </ul>
    </aside>
  )
}

export default Navbar
