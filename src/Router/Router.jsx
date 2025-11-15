import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index:true,
        }
    ]
  },
]);
export default router;
