import { Beer } from '../pages/Beer'
import { Dashboard } from '../pages/Dashboard'
import { Whiskey } from '../pages/Whiskey';
import { Wine } from '../pages/Wine';
import { Contact } from '../pages/Contact'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: Beer,
      name: "Beer ",
    },
    {
        path: "/whiskey",
        component: Whiskey,
        name: "whiskey"
    },
    {
        path: "/wine",
        component: Wine,
        name: "Wine",
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
    }, 
    {
        path: "/contact",
        component: Contact,
        name: "Contact",
      }  
];

export default routes