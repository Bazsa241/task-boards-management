import { useDispatch } from 'react-redux'
import { removeTask } from '../store/reducers/boards'
import { useState } from 'react'
import NewTask from './NewTask'


function Task({ task, category, boardId }) {

  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState(false)

  const handleDelete = () => {
    dispatch(removeTask({category, id: task.id, boardId}))
  }

  const showEdit = () => {
    setIsEdit(true)
  }

  return (
    <div className='Task'>
      {
        isEdit && <NewTask boardId={boardId} oldTask={task} category={category} setHide={setIsEdit}/>
      }
        <div className="Task__heading">
          <h6>{task.title}</h6>
        </div>
        <div className="Task__body">
          <p>{task.description}</p>
          <div className="Task__body__actions">
            <button className='edit' onClick={showEdit}>edit</button>
            <button className='delete' onClick={handleDelete}>X</button>
          </div>
        </div>
    </div>
  )
}

export default Task
