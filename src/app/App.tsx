import useAuthCheck from "@/hooks/useAtuhChecked"
import Loader from "@/shared/ui/loader"
import { RouterProvider } from "react-router-dom"
import { router } from "./router/routes"

const App = () => {
  const authChecked = useAuthCheck()
  if(!authChecked){
    return <Loader/>
  }
  return (
    <>
    <RouterProvider router={router} />
  </>
  )
}

export default App