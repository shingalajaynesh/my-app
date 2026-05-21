import './index.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { rootRoute } from './route.js'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={rootRoute} />
)
