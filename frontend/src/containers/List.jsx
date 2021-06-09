import Task from '../components/Task'

function List({title}) {
  return (
    <div>
      <h4>{title} List</h4>
      <Task title='first' />
      <Task title='second' />
      <Task title='third' />
    </div>
  )
}

export default List
