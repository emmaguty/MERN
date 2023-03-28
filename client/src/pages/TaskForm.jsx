import { Form, Formik } from 'formik'
import { useTasks } from '../context/TaskContext'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function TaskForm() {

    const navigate = useNavigate()

    const { createTask, getTask, updateTask } = useTasks()
    const [task, setTask] = useState({
        title: "",
        description: ""
    })
    const params = useParams()

    useEffect(() => {
        const loadTask = async () => {

            if (params.id) {
                const task = await getTask(params.id)
                setTask({
                    title: task.title,
                    description: task.description
                })
            }
        }
        loadTask();
    }, [])

    return (
        <div>

            <h1 className='text-xl font-bold text-white uppercase text center text-center py-2'>
                {
                    params.id ? "Edit Task" : "Create Task"
                }
            </h1>

            <Formik
                initialValues={task}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values)
                    
                    if(params.id) {
                       await updateTask(params.id, values)
                    }else {
                       await createTask(values)
                    }
                    setTask({
                        title: "",
                        description: ""
                    })
                    
                    navigate('/')

                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form 
                    className='bg-slate-400 max-w-md rounded-md p-3 mx-auto'
                    onSubmit={handleSubmit}>
                        <label className='block'>Title</label>
                        <input
                            className='px-2 py-1 rounded-sm w-full'
                            type="text"
                            name="title"
                            placeholder='Write a Title'
                            value={values.title}
                            onChange={handleChange} />

                        <label className='block'>Description</label>
                        <textarea
                            className='w-full px-2 py-1 rounded-sm'
                            name="description"
                            rows="3"
                            placeholder='Write a description'
                            value={values.description}
                            onChange={handleChange}
                        ></textarea>

                        <button 
                        className='block bg-indigo-500 px-2 py-1 text-white w-full rounded-md'
                        type="submit" 
                        disabled={isSubmitting}>
                            {isSubmitting ? "Saving..." : "Save"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default TaskForm