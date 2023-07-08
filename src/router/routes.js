import Index from "@/views/Index.vue";
import Dashboard from "@/views/Dashboard.vue";
import Profile from "@/views/Profile.vue";
import Leave from "@/views/Leave/index.vue";
import Staff from "@/views/Staff/index.vue";
import TimeTracking from "@/views/TimeTracking/index.vue";

const routes = [
    {
      path: "/",
      name: "/",
      component: Index,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/leaves",
      name: "leaves",
      component: Leave,
    },
    {
      path: "/timeTracking",
      name: "timetracking",
      component: TimeTracking,
    },
    {
      path: "/staff",
      name: "staff",
      // accessBy: ["admin", "hr"],
      component: Staff,
    },
  ];

  export default routes;