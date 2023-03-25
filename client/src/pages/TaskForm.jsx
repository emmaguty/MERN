import { Form, Formik } from 'formik'
import { createTaskRequest } from '../api/task.api'

function TaskForm () {
    return (
        <div>
            <Formik
                initialValues={{
                    title: "",
                    description: ""
                }}
                onSubmit={async (values, actions) => {
                    console.log(values)
                    try {
                        const response = await createTaskRequest(values)
                        console.log(response)
                        actions.resetForm()
                    } catch (error) {
                        console.error(error)
                    }
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