import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { modifyBoard } from '../store/reducers/boards'

const BoardEdit = ({title, id, setIsEdit}) => {

  const dispatch = useDispatch()
  const formik = useFormik({
    
    initialValues: {
      title,
      id
    },

    validate: values => {
      const error = {}
      if(!values.title.trim()) {
        error.title = 'Required!'
      }
      return error
    },

    onSubmit: values => {
      const { id, title } = values
      dispatch(modifyBoard({ id, title }))
      setIsEdit(prevState => !prevState)
    },

  })

  return (
    <form
      className='Board__edit-form'
      onSubmit={formik.handleSubmit}
    >
      <div className="Board__edit-container">
        <input
          className='Board__edit-input'
          type="text"
          name='title'
          autoFocus
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label className='Board__edit-error'>
          {formik.errors.title}
        </label>
      </div>
      <button
        className='btn btn--edit'
        type='submit'
      >
        ok
      </button>
    </form>
  )
}

export default BoardEdit
