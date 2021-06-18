const BoardEdit = ({title, id, setIsEdit}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEdit(prevState => !prevState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} autoFocus/>
      <button className='edit' type='submit'>ok</button>
    </form>
  )
}

export default BoardEdit
