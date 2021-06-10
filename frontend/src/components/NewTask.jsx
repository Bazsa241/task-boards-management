import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/reducers/boards'
import changeHandler from '../utils/changeHandler'

function NewTask({ boardId }) {

  const dispatch = useDispatch()
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
  })

  const handleOnChange = changeHandler(newItem, setNewItem)

  const handleSubmit = () => {
    const todoItem = {
      id: Date.now(),
      title: newItem.title,
      description: newItem.description,
    }
    dispatch(addTodo({ boardId, todoItem }))
    setNewItem({ title: '', description: '' })
  }

  return (
    <div>
      <input
        type="text"
        placeholder='Title'
        name='title'
        value={newItem.title}
        onChange={handleOnChange}
      />
      <input
        type="text"
        placeholder='Description'
        name='description'
        value={newItem.description}
        onChange={handleOnChange}
      />
      <button onClick={handleSubmit}>+</button>
    </div>
  )
}

export default NewTask
