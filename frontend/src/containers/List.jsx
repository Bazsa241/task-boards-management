import Task from '../components/Task'
import NewTask from '../components/NewTask'

function List({title, todoList, boardId, category}) {
  return (
    <div>
      <h4>{title}</h4>
      <NewTask boardId={boardId} />
      {
        todoList.map(todo =>
          <Task
            key={todo.id}
            boardId={boardId}
            category={category}
            {...todo}
          />
        )
      }
    </div>
  )
}

export default List
