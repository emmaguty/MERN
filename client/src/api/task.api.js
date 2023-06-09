import axios from "axios"

//Para cargar tareas
export const getTasksRequest = async () => 
   await axios.get('http://localhost:3002/tasks');


// Para crear tareas
export const createTaskRequest = async (task) => 
    await axios.post('http://localhost:3002/tasks', task);

// Para Eliminar
export const deleteTaskRequest = async (id) =>
   await axios.delete(`http://localhost:3002/tasks/${id}`);

export const getTaskRequest = async (id) =>
   await axios.get(`http://localhost:3002/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
   await axios.put(`http://localhost:3002/tasks/${id}`, newFields)

export const toggleTaskRequest = async (id, done) => 
   await axios.put(`http://localhost:3002/tasks/${id}`, {
      done,
   })