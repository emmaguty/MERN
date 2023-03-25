import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'

import TasksPage from './pages/TasksPage'
import TaskForm from './pages/TaskForm'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<TasksPage />} />
        <Route path='/new' element={<TaskForm />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
