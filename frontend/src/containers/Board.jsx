import List from './List'

function Board({title, todo, id}) {



  return (
    <div>
      <h2>{title}</h2>

      <List
        title='TODO'
        category='todo'
        todoList={todo}
        boardId={id}
      />
      {/*
      <List title='In Progress' />
      <List title='DONE' />
      */}
    </div>
  )
}

export default Board
