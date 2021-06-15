import { useSelector,  } from 'react-redux'
import BoardTab from './BoardTab'
import Nav from '../styles/Nav'

function Navbar() {

  const boards = useSelector(state => state.boardsReducer.myBoards)

  return (
    <Nav>
      <ul>
        {
          boards.map(board => <BoardTab key={board.id} {...board} />)
        }
      </ul>
    </Nav>
  )
}

export default Navbar
