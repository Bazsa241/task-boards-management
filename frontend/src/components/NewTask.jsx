import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask, modifyTask } from '../store/reducers/boards'
import changeHandler from '../utils/changeHandler'

function NewTask({ boardId, category, oldTask, setHide }) {

  const dispatch = useDispatch()
  const [newItem, setNewItem] = useState(oldTask || {
    title: '',
    description: '',
  })
  

  const handleOnChange = changeHandler(newItem, setNewItem)
  const handleModal = () => {
    setHide(prevState => !prevState)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const task = {
      id: newItem.id || Date.now(),
      title: newItem.title,
      description: newItem.description,
    }
    dispatch(
      oldTask
      ? modifyTask({ boardId, task, category })
      : addTask({ boardId, task, category })
    )
    handleModal()
  }

  return (
    <div className="NewTask">
      <form className='NewTask__form' onSubmit={handleSubmit}>

        <div className="NewTask__form__input">
          <label>Title</label>
          <input
            type="text"
            name='title'
            value={newItem.title}
            onChange={handleOnChange}
          />
          <small>Required!</small>
        </div>

        <div className="NewTask__form__input">
          <label>Description</label>
          <input
            type="text"
            name='description'
            value={newItem.description}
            onChange={handleOnChange}
          />
          <small>Required!</small>
        </div>

        <button
          className='NewTask__form__button'
          type='submit'
        >
          Submit
        </button>
        <button
          className='NewTask__form__button'
          onClick={handleModal}
        >
          Cancel
        </button>

      </form>
    </div>
  )
}

export default NewTask
