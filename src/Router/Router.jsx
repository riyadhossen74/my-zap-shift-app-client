import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Page/Home/Home/Home";
import Coverage from "../Page/Coverage/Coverage";
import AboutUs from "../Page/AboutUS/AboutUs";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Page/Auth/Login/Login";
import Register from "../Page/Auth/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Rider from "../Page/Rider/Rider";
import Parcel from "../Page/AddParcel/Parcel";
import DashboardLayout from "../Layout/DashboardLayout";
import MyParcel from "../Page/MyDashboard/MyParcel";
import Payment from "../Page/MyDashboard/Payment/Payment";
import PaymentSuccess from "../Page/MyDashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../Page/MyDashboard/Payment/PaymentCancelled";
import PaymentHistory from "../Page/MyDashboard/Payment/PaymentHistory/PaymentHistory";
import ApproveRider from "../Page/MyDashboard/ApproveRider/ApproveRider";
import UsersManagement from "../Page/MyDashboard/UsersManagement/UsersManagement";
import AdminRout from "./AdminRout";
import AssignRider from "../Page/MyDashboard/AssignRider/AssignRider";
import AssignedDeliveries from "../Page/MyDashboard/AssignedDeliveries/AssignedDeliveries";
import RiderRoute from "./RiderRoute";
import CompliedDeliveries from "../Page/MyDashboard/CompliedDeliveries/CompliedDeliveries";
import TrackingParcel from "../Page/Home/Home/TrackingParcel/TrackingParcel";
import DashboardHome from "../Page/MyDashboard/DashboardHome/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/pricing",
        element: (
          <PrivetRoute>
            <Parcel></Parcel>
          </PrivetRoute>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "/rider",
        element: (
          <PrivetRoute>
            <Rider></Rider>
          </PrivetRoute>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: '/parcel-track/:trackingId',
        element: <TrackingParcel></TrackingParcel>
      }
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [
    {
      index: true,
      Component: DashboardHome
    },
      {
        path: "my-parcels",
        Component: MyParcel,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancelled,
      },
      // rider only router
      {
        path: 'assigned-deliveries',
        element: <RiderRoute><AssignedDeliveries></AssignedDeliveries></RiderRoute>
      },
      {
        path: 'complied-deliveries',
        element: <RiderRoute><CompliedDeliveries></CompliedDeliveries></RiderRoute>
      },

      // admin only router
      {
        path: "approveRider",
       element: <AdminRout><ApproveRider></ApproveRider></AdminRout>,
      },
      {
        path: "usersManagement",
       element:<AdminRout><UsersManagement></UsersManagement></AdminRout>
      },
      {
        path: "assignRider",
       element:<AdminRout><AssignRider></AssignRider></AdminRout>
      },
    ],
  },
]);
export default router;
