import { useSelector,  } from 'react-redux'
import BoardTab from './BoardTab'


function Navbar() {

  const boards = useSelector(state => state.boardsReducer.myBoards)

  return (
    <aside className='Navbar'>
      <div className='Navbar__heading'>
        <h3 className='Navbar__title'>Boards</h3>
        <button className='btn btn--new-item btn--plus'>+</button>
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
