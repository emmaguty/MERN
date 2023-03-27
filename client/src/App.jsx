import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'

import TasksPage from './pages/TasksPage'
import TaskForm from './pages/TaskForm'
import NotFound from './pages/NotFound'

// Context
import { TaskContextProvider } from './context/TaskContext'

const App = () => {
  return (
    <TaskContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<TasksPage />} />
        <Route path='/new' element={<TaskForm />} />
        <Route path='/edit/:id' element={<TaskForm />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TaskContextProvider>
  )
}

export default App
