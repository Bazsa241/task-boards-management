import { useDispatch } from 'react-redux'
import { removeTask, modifyTask } from '../store/reducers/boards'
import { useState } from 'react'
import changeHandler from '../utils/changeHandler'


function Task({ title, description, id, category, boardId }) {

  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState(false)
  const [task, setTask] = useState({
    id,
    title,
    description
  })

  const handleDelete = () => {
    dispatch(removeTask({category, id, boardId}))
  }

  const handleModify = () => {
    dispatch(modifyTask({
      category,
      boardId,
      modifiedTask: task
    }))
    setIsEdit(false)
  }

  const showEdit = () => {
    setIsEdit(true)
  }

  const handleOnChange = changeHandler(task, setTask)

  return (
    <div>
      {
        isEdit ? <>
          <input
            type="text"
            name='title'
            value={task.title}
            onChange={handleOnChange}
          />
          <input
            type="text"
            name='description'
            value={task.description}
            onChange={handleOnChange}
          />
        </> : <>
          <h6>{title}</h6>
          <p>{description}</p>
        </>
      }
      <button onClick={handleDelete}>delete</button>
      {
        isEdit ? <button onClick={handleModify}>ok</button>
               : <button onClick={showEdit}>edit</button>  
      }
      
    </div>
  )
}

export default Task
