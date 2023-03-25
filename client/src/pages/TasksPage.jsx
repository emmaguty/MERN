import { useEffect, useState } from "react"

import TaskCard from "../components/TaskCard"
import { getTaskRequest } from "../api/task.api"

const TasksPage = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function loadTask() {
      const response = await getTaskRequest()
      setTasks(response.data)
    }
    loadTask()

  }, [])

  return (
    <div>
      <h1>Tasks</h1>
      {
        tasks.map(task => (
          <TaskCard task={task} key={task.id}/>
        ))
      }
    </div>
  )
}

export default TasksPage