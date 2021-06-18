import { useState } from 'react'
import List from './List'
import BoardHead from '../components/BoardHead'
import BoardEdit from '../components/BoardEdit'


function Board({title, todo, inProgress, done, id}) {

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='Board'>
      <div className='Board__heading'>
        {
          isEdit
          ? <BoardEdit title={title} id={id} setIsEdit={setIsEdit}/>
          : <BoardHead title={title} id={id} setIsEdit={setIsEdit}/>
        }      
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
