import { removeBoard, changeBoard } from '../store/reducers/boards'
import { useDispatch } from 'react-redux'


const BoardHead = ({title, id, setIsEdit}) => {
  
  const dispatch = useDispatch()

  const handleEdit = () => {
    setIsEdit(prevState => !prevState)
  }

  const handleDelete = () => {
    dispatch(removeBoard(id))
    dispatch(changeBoard(null))
  }

  return (
    <>
      <h3 className='Board__title'>{title}</h3>
      <div className="Board__action-list">
        <button className='btn btn--edit' onClick={handleEdit}>edit</button>
        <button className='btn btn--delete' onClick={handleDelete}>X</button>
      </div>
    </>
  )
}

export default BoardHead
