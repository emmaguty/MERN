import { Form, Formik } from 'formik'
import { useTasks } from '../context/TaskContext'

function TaskForm() {

    const { createTask } = useTasks()

    return (
        <div>
            <Formik
                initialValues={{
                    title: "",
                    description: ""
                }}
                onSubmit={async (values, actions) => {
                    console.log(values)
                    createTask(values)
                    actions.resetForm()
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