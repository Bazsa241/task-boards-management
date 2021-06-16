import { useSelector,  } from 'react-redux'
import BoardTab from './BoardTab'


function Navbar() {

  const boards = useSelector(state => state.boardsReducer.myBoards)

  return (
    <aside className='Navbar'>
      <div className='Navbar__heading'>
        <h3>Boards</h3>
        <button>+</button>
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
