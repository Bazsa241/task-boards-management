const BoardHead = ({title, id, setIsEdit}) => {

  const handleEdit = () => {
    setIsEdit(prevState => !prevState)
  }

  const handleDelete = () => {

  }

  return (
    <>
      <h3>{title}</h3>
      <div className="Board__heading__actions">
        <button className='edit' onClick={handleEdit}>edit</button>
        <button className='delete' onClick={handleDelete}>X</button>
      </div>
    </>
  )
}

export default BoardHead
