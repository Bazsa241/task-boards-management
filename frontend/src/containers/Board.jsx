import List from './List'
import NewTask from '../components/NewTask'

function Board({title, todo, inProgress, done, id}) {



  return (
    <div>
      <h2>{title}</h2>
      <NewTask boardId={id}/>
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
  )
}

export default Board
