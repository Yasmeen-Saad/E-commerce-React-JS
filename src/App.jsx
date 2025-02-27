import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Layout from './Components/Layout';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';

function App() {
	const routes = createBrowserRouter([
		{
			path: '/',
			element: <Layout/>,
			errorElement: <div>404</div>,
			children: [
				{path: "/", element: <Shop/>},
				{path: "/product/:id", element: <Product/>},
				{path: "/men", element: <ShopCategory banner={men_banner} category="men"/>},
				{path: "/women", element: <ShopCategory banner={women_banner} category="women"/>},
				{path: "/kids", element: <ShopCategory banner={kids_banner} category="kid"/>},
				{path: "/cart", element: <Cart/>},
				{path: "/login", element: <LoginSignup/>},
			]
		}	
	]);

	return (
		<RouterProvider router={routes}/>
	)
}

export default App;
