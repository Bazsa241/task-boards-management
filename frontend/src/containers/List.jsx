import Task from '../components/Task'

function List({title, taskList, boardId, category}) {
  return (
    <div>
      <h4>{title}</h4>
      {
        taskList.map(todo =>
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
