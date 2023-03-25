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

  function renderMain() {

    if (tasks.length === 0) return <h1>No Task Yet</h1>

    return tasks.map(task => (
      <TaskCard task={task} key={task.id} />
    ))
  }

  return (
    <div>
      <h1>Tasks</h1>
      {renderMain()}
    </div>
  )
}

export default TasksPage