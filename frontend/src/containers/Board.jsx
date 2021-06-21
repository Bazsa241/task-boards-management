import List from './List'


function Board({title, todo, inProgress, done, id}) {
  return (
    <div className='Board'>
      <div className='Board__heading'>
        <h3 className='Board__title'>{title}</h3>
      </div>
      <div className='Board__lists'>
        <List
          title='TODO'
          category='todo'
          taskList={todo}
          boardId={id}
        />      
        <List
          title='In Progress'
          category='inProgress'
          taskList={inProgress}
          boardId={id}
        />
        <List
          title='DONE'
          category='done'
          taskList={done}
          boardId={id}
        />
      </div>
    </div>
  )
}

export default Board
