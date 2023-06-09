import React, { Children } from "react";
import Main from "./components/AppContainer";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import { PostsProvider } from "./context/PostsContext";
const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<AuthProvider>
				<PostsProvider>
					<Main />
				</PostsProvider>
			</AuthProvider>
		),
		children: [
			{
				path: "",
				element: <ProtectedRoute />,
				children: [
					{
						path: "",
						element: <Home />,
					},
					{
						path: "/dashboard",
						element: (
							<div>
								Dashboard <Link to="/">Home</Link>
							</div>
						),
					},
				],
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "signup",
				element: <SignUp />,
			},
		],
	},
]);

const App: React.FC = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
