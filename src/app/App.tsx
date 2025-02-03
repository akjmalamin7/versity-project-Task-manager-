import useAuthCheck from "@/hooks/useAtuhChecked"
import { RouterProvider } from "react-router-dom"
import { router } from "./router/routes"

const App = () => {
  const authCheced = useAuthCheck()
  if(!authCheced){
    return <h1>Loading...</h1>
  }
  return (
    <>
    <RouterProvider router={router} />
  </>
  )
}

export default App