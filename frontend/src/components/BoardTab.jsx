import { useDispatch } from 'react-redux'
import { changeBoard } from '../store/reducers/boards'


const BoardTab = ({title, id}) => {

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(changeBoard(id))
  }

  return (
    <li className='BoardTab'>
      <button
        className='btn btn--board'
        onClick={handleClick}
      >
        {title}
      </button>
    </li>
  )
}

export default BoardTab
