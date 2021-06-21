const BoardEdit = ({title, id, setIsEdit}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEdit(prevState => !prevState)
  }

  return (
    <form className='Board__edit-form' onSubmit={handleSubmit}>
      <input className='Board__edit-input' type="text" value={title} autoFocus/>
      <button className='btn btn--edit' type='submit'>ok</button>
    </form>
  )
}

export default BoardEdit
