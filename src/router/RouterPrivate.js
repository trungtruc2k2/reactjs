import Dashboard from "../pages/backend/Dashboard";
import BrandList from "../pages/backend/Brand/BrandList";
import BrandCreate from "../pages/backend/Brand/BrandCreate";
import BrandUpdate from "../pages/backend/Brand/BrandUpdate";
import BrandShow from "../pages/backend/Brand/BrandShow";

import CategoryList from "../pages/backend/Category/CategoryList";
import CategoryCreate from "../pages/backend/Category/CategoryCreate";
import CategoryUpdate from "../pages/backend/Category/CategoryUpdate";
import CategoryShow from "../pages/backend/Category/CategoryShow";

import ContactList from "../pages/backend/Contact/ContactList";
import ContactCreate from "../pages/backend/Contact/ContactCreate";
import ContactUpdate from "../pages/backend/Contact/ContactUpdate";
import ContactShow from "../pages/backend/Contact/ContactShow";

import MenuList from "../pages/backend/Menu/MenuList";
import MenuCreate from "../pages/backend/Menu/MenuCreate";
import MenuUpdate from "../pages/backend/Menu/MenuUpdate";
import MenuShow from "../pages/backend/Menu/MenuShow";

import OrderList from "../pages/backend/Order/OrderList";
import OrderCreate from "../pages/backend/Order/OrderCreate";
import OrderUpdate from "../pages/backend/Order/OrderUpdate";
import OrderShow from "../pages/backend/Order/OrderShow";

import PostList from "../pages/backend/Post/PostList";
import PostCreate from "../pages/backend/Post/PostCreate";
import PostUpdate from "../pages/backend/Post/PostUpdate";
import PostShow from "../pages/backend/Post/PostShow";

import ProductList from "../pages/backend/Product/ProductList";
import ProductCreate from "../pages/backend/Product/ProductCreate";
import ProductUpdate from "../pages/backend/Product/ProductUpdate";
import ProductShow from "../pages/backend/Product/ProductShow";

import SliderList from "../pages/backend/Slider/SliderList";
import SliderCreate from "../pages/backend/Slider/SliderCreate";
import SliderUpdate from "../pages/backend/Slider/SliderUpdate";
import SliderShow from "../pages/backend/Slider/SliderShow";

import TopicList from "../pages/backend/Topic/TopicList";
import TopicCreate from "../pages/backend/Topic/TopicCreate";
import TopicUpdate from "../pages/backend/Topic/TopicUpdate";
import TopicShow from "../pages/backend/Topic/TopicShow";

import UserList from "../pages/backend/User/UserList";
import UserCreate from "../pages/backend/User/UserCreate";
import UserUpdate from "../pages/backend/User/UserUpdate";
import UserShow from "../pages/backend/User/UserShow";

const RouterPrivate = [
  { path: "/admin", component: Dashboard },
  { path: "/admin/brand", component: BrandList },
  { path: "/admin/brand/create", component: BrandCreate },
  { path: "/admin/brand/update/:id", component: BrandUpdate },
  { path: "/admin/brand/show/:id", component: BrandShow },

  { path: "/admin/category", component: CategoryList },
  { path: "/admin/category/create", component: CategoryCreate },
  { path: "/admin/category/update/:id", component: CategoryUpdate },
  { path: "/admin/category/show/:id", component: CategoryShow },

  { path: "/admin/contact", component: ContactList },
  { path: "/admin/contact/create", component: ContactCreate },
  { path: "/admin/contact/update/:id", component: ContactUpdate },
  { path: "/admin/contact/show/:id", component: ContactShow },

  { path: "/admin/menu", component: MenuList },
  { path: "/admin/menu/create", component: MenuCreate },
  { path: "/admin/menu/update/:id", component: MenuUpdate },
  { path: "/admin/menu/show/:id", component: MenuShow },

  { path: "/admin/order", component: OrderList },
  { path: "/admin/order/create", component: OrderCreate },
  { path: "/admin/order/update/:id", component: OrderUpdate },
  { path: "/admin/order/show/:id", component: OrderShow },

  { path: "/admin/post", component: PostList },
  { path: "/admin/post/create", component: PostCreate },
  { path: "/admin/post/update/:id", component: PostUpdate },
  { path: "/admin/post/show/:id", component: PostShow },

  { path: "/admin/product", component: ProductList },
  { path: "/admin/product/create", component: ProductCreate },
  { path: "/admin/product/update/:id", component: ProductUpdate },
  { path: "/admin/product/show/:id", component: ProductShow },

  { path: "/admin/slider", component: SliderList },
  { path: "/admin/slider/create", component: SliderCreate },
  { path: "/admin/slider/update/:id", component: SliderUpdate },
  { path: "/admin/slider/show/:id", component: SliderShow },

  { path: "/admin/topic", component: TopicList },
  { path: "/admin/topic/create", component: TopicCreate },
  { path: "/admin/topic/update/:id", component: TopicUpdate },
  { path: "/admin/topic/show/:id", component: TopicShow },
  
  { path: "/admin/user", component: UserList },
  { path: "/admin/user/create", component: UserCreate },
  { path: "/admin/user/update/:id", component: UserUpdate },
  { path: "/admin/user/show/:id", component: UserShow },

];
export default RouterPrivate;
