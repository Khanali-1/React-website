import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './component/layout.jsx';
import Home from './home.jsx';
import Review from './review.jsx';
import Sign from './sign.jsx';
import Signup from './signup.jsx';
import Job from './job.jsx';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout></Layout>,

      children:[
         {
          path:"/",
          element: <Home></Home>
        },
        {
          path:"/review",
          element: <Review></Review>
        },
        {
          path: "job",
          element: <Job></Job>
        }
      ]

    },

    {
      path:"/sign",
      element: <Sign></Sign>
    },
    {
      path:"/signup",
      element: <Signup></Signup>
    }
  
  ])
 

  return (
  <>
  <RouterProvider router={router}></RouterProvider>
  
  </>
  )
}

export default App
