import { useNavigate } from "react-router-dom"
import { useTasks } from "../context/TaskContext"

const TaskCard = ({ task }) => {

    const { deleteTask, toggleTaskDone } = useTasks()
    const navigate = useNavigate()

    const handleDone = async (taskDone) => {
        await toggleTaskDone(task.id)
    }

    return (
        <div className="bg-slate-400 rounded-md p-4">
            <header className="flex justify-between">
                <h2 className="text-xl font-bold">{task.title}</h2>
                <span>{task.done == 1 ? "✔️" : "❌"}</span>
            </header>
            <p className="text-xs">{task.description}</p>
            <span>{task.createAt}</span>
            <div className="flex gap-x-2">
                <button 
                className="bg-red-700 px-2 py-1 text-white"
                onClick={() => deleteTask(task.id)}>
                    Delete
                </button>
                <button 
                className="bg-blue-500 px-2 py-1 text-white"
                onClick={() => navigate(`/edit/${task.id}`)}>
                    Edit
                </button>
                <button 
                className="bg-green-400 px-2 py-1 text-white"
                onClick={() => handleDone(task.done)}>
                    Toggle Task
                </button>
            </div>
        </div>
    )
}

export default TaskCard