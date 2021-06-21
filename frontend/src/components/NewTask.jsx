import { useDispatch } from 'react-redux'
import { addTask, modifyTask } from '../store/reducers/boards'
import StyledSmall from '../styles/StyledSmall'
import { useFormik } from 'formik'


function NewTask({ boardId, category, oldTask, setHide }) {

  const dispatch = useDispatch()

  const initialValues = oldTask ? oldTask : {
    title: '',
    description: ''
  }

  const hideModal = () => {
    setHide(prevState => !prevState)
  }

  const formik = useFormik({
    
    initialValues,

    validate: values => {
      const error = {}

      if(!values.title.trim())
        error.title = 'Required!'
      else if(values.title.length < 3)
        error.title = 'Must be at least 3 characters long'
      if(!values.description.trim())
        error.description = 'Required!'
      else if(values.description.length < 3)
        error.description = 'Must be at least 3 characters long'

      return error
    },
    
    onSubmit: values => {
      const task = {
        ...values,
        id: values.id || Date.now(),
      }
      dispatch(
        oldTask
        ? modifyTask({ boardId, task, category })
        : addTask({ boardId, task, category })
      )
      hideModal()
    },

  })

  return (
    <div className="NewTask">
      <form className='NewTask__form' onSubmit={formik.handleSubmit}>

        <div className="NewTask__input-container">
          <label className='NewTask__input-title'>Title</label>
          <input
            className='NewTask__input-field'
            type="text"
            name='title'
            autoFocus
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <StyledSmall
            hide={formik.errors.description && formik.touched.title}
          >
            {formik.errors.title}
          </StyledSmall>
        </div>

        <div className="NewTask__input-container">
          <label className='NewTask__input-title'>Description</label>
          <input
            className='NewTask__input-field'
            type="text"
            name='description'
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <StyledSmall
            hide={formik.errors.description && formik.touched.description}
          >
            {formik.errors.description}
          </StyledSmall>
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
