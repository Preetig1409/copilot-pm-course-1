import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { ModuleContent } from './components/Course/ModuleContent'
import { ResourceContent } from './components/Course/ResourceContent'
import { HomePage } from './components/Landing/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Landing page */}
        <Route index element={<HomePage />} />

        {/* Module routes */}
        <Route path="module/:moduleId" element={<ModuleContent />} />

        {/* Resource routes - using * to capture full path */}
        <Route path="resource/*" element={<ResourceContent />} />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
