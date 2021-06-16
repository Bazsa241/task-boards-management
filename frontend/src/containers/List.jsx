import Task from '../components/Task'
import NewTask from '../components/NewTask'
import { useState } from 'react'


function List({title, taskList, boardId, category}) {

  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className='List'>
      {
      showModal &&
        <NewTask
          boardId={boardId}
          setHide={setShowModal}
          category={category}
        />
      }
      <div className='List__heading'>
        <h4>{title}</h4>
        <button onClick={handleModal}>
          +
        </button>
      </div>
      <div className="List__body">
        {
          taskList.map(task =>
            <Task
              key={task.id}
              boardId={boardId}
              category={category}
              task={task}
            />
          )
        }
      </div>
    </div>
  )
}

export default List
