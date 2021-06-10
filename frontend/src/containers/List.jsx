import Task from '../components/Task'
import NewTask from '../components/NewTask'

function List({title, todoList, boardId}) {
  return (
    <div>
      <h4>{title}</h4>
      <NewTask boardId={boardId} />
      {
        todoList.map(todo => <Task key={todo.id} {...todo} boardId={boardId} />)
      }
    </div>
  )
}

export default List
