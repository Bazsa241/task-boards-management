import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask, modifyTask } from '../store/reducers/boards'
import changeHandler from '../utils/changeHandler'
import StyledSmall from '../styles/StyledSmall'


function NewTask({ boardId, category, oldTask, setHide }) {

  const dispatch = useDispatch()
  const [newItem, setNewItem] = useState(oldTask || {
    title: '',
    description: '',
  })
  const [itemError, setItemError] = useState({
    // true if has error
    title: false,
    description: false,
  })

  const handleOnChange = changeHandler(newItem, setNewItem)

  const validation = () => {
    const title = newItem.title.trim() ? false : true
    const description = newItem.description.trim() ? false : true 
    setItemError({
      title,
      description,
    })
    return !title && !description
  }

  const hideModal = () => {
    setHide(prevState => !prevState)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(validation()) {
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
      hideModal()
    }
  }

  return (
    <div className="NewTask">
      <form className='NewTask__form' onSubmit={handleSubmit}>

        <div className="NewTask__input-container">
          <label className='NewTask__input-title'>Title</label>
          <input
            className='NewTask__input-field'
            type="text"
            name='title'
            autoFocus
            value={newItem.title}
            onChange={handleOnChange}
          />
          <StyledSmall hide={itemError.title}>Required!</StyledSmall>
        </div>

        <div className="NewTask__input-container">
          <label className='NewTask__input-title'>Description</label>
          <input
            className='NewTask__input-field'
            type="text"
            name='description'
            value={newItem.description}
            onChange={handleOnChange}
          />
          <StyledSmall hide={itemError.description}>Required!</StyledSmall>
        </div>

        <button
          className='btn NewTask__btn'
          type='submit'
        >
          Submit
        </button>
        <button
          className='btn NewTask__btn'
          onClick={hideModal}
        >
          Cancel
        </button>

      </form>
    </div>
  )
}

export default NewTask
