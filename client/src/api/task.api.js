import axios from "axios"

//Para cargar tareas
export const getTaskRequest = async () => 
   await axios.get('http://localhost:3002/tasks')


// Para crear tareas
export const createTaskRequest = async (task) => 
    await axios.post('http://localhost:3002/tasks', task);
