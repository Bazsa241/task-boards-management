import { useSelector, useDispatch } from 'react-redux'
import BoardTab from './BoardTab'
import { addBoard, setUser } from '../store/reducers/boards'


function Navbar() {

  const dispatch = useDispatch()
  const boards = useSelector(state => state.boardsReducer.myBoards)
  
  const handleClick = () => {
    dispatch(addBoard())
    dispatch(setUser())
  }

  return (
    <aside className='Navbar'>
      <div className='Navbar__heading'>
        <h3 className='Navbar__title'>Boards</h3>
        <button
          className='btn btn--new-item btn--plus'
          onClick={handleClick}
        >
          +
        </button>
      </div>
      <ul className='Navbar__list'>
        {
          boards.map(board => <BoardTab key={board.id} {...board} />)
        }
      </ul>
    </aside>
  )
}

export default Navbar
