import List from './List'

function Board({title}) {
  return (
    <div>
      <h2>{title} Board</h2>
      <List title='TODO' />
      <List title='In Progress' />
      <List title='DONE' />
    </div>
  )
}

export default Board