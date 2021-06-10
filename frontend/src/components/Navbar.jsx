import { useSelector } from 'react-redux'

function Navbar() {

  const boards = useSelector(state => state.boardsReducer.myBoards)

  return (
    <ul>
      {
        boards.map(board => <li key={board.id}>{board.title}</li> )
      }
    </ul>
  )
}

export default Navbar
