import { useDispatch } from 'react-redux'
import { removeTask } from '../store/reducers/boards'

function Task({ title, description, id, category, boardId }) {

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(removeTask({category, id, boardId}))
  }

  return (
    <div>
      <h6>{title}</h6>
      <p>{description}</p>
      <button onClick={handleDelete}>delete</button>
    </div>
  )
}

export default Task
