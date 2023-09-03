import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import Select from "./components/Select.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faWallet,
  faCircleDollarToSlot,
  faChartLine,
  faUserTie,
  faCreditCard,
  faSackDollar,
  faUser,
  faIdBadge,
  faPowerOff,
  faPlus,
  faClose,
  faCoins,
  faMoneyBill,
  faPiggyBank,
  faBuildingColumns,
  faVault,
  faPen,
  faTimes,
  faHome,
  faGear,
  faCalendarCheck,
  faList,
  faArrowTrendUp,
  faCalendarDay,
  faThumbsUp,
  faBell,
  faCircleQuestion,
  faClock,
  faUserGroup,
  faBars,
  faLock,
  faRefresh,
  faMoon,
  faSun,
  faTrash,
  faUsersGear
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faWallet,
  faCircleDollarToSlot,
  faChartLine,
  faUserTie,
  faCreditCard,
  faSackDollar,
  faUser,
  faIdBadge,
  faPowerOff,
  faPlus,
  faClose,
  faCoins,
  faMoneyBill,
  faPiggyBank,
  faBuildingColumns,
  faVault,
  faPen,
  faTimes,
  faHome,
  faGear,
  faCalendarCheck,
  faList,
  faArrowTrendUp,
  faCalendarDay,
  faThumbsUp,
  faBell,
  faCircleQuestion,
  faClock,
  faUserGroup,
  faBars,
  faLock,
  faRefresh,
  faMoon,
  faSun,
  faTrash,
  faUsersGear
);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component('Custom-Select', Select)
  .mount("#app");
