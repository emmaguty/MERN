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

            <h1>
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
                    <Form onSubmit={handleSubmit}>
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder='Write a Title'
                            value={values.title}
                            onChange={handleChange} />

                        <label>Description</label>
                        <textarea
                            name="description"
                            rows="3"
                            placeholder='Write a description'
                            value={values.description}
                            onChange={handleChange}
                        ></textarea>

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Saving..." : "Save"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default TaskForm