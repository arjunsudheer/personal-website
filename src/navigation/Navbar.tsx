import { NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import classNames from "classnames";

const Navbar = () => {
	const [navbarShow, setNavbarShow] = useState("none");
	const location = useLocation();

	const toggleNavbar = () => {
		if (navbarShow === "block") {
			setNavbarShow("none");
		} else {
			setNavbarShow("block");
		}
	};

	// Function to get the title based on the current path
	const getCurrentPageTitle = () => {
		switch (location.pathname) {
			case "/":
				return "Home";
			case "/experience":
				return "Experience";
			case "/research":
				return "Research";
			case "/projects":
				return "Projects";
			case "/courses":
				return "Courses";
			case "/certifications":
				return "Certifications";
			default:
				return "Information Page";
		}
	};

	return (
		<>
			<div className='w-full border-b p-2 border-black dark:border-white md:hidden bg-gray-200 dark:bg-slate-500 dark:text-white relative'>
				<div className='flex justify-center items-center relative'>
					{/* Displays the current active page in the mobile view */}
					<div className='text-center font-bold underline'>{getCurrentPageTitle()}</div>
					<RxHamburgerMenu className='h-10 absolute right-5' onClick={toggleNavbar} />
				</div>
			</div>
			<nav
				className={classNames(
					"grid grid-cols-1 text-center md:flex md:justify-evenly bg-gray-200 dark:bg-slate-500 dark:text-white",
					{ hidden: navbarShow === "none" }
				)}
			>
				<NavLink to='/' className={({ isActive }) => (isActive ? "font-bold" : "font-normal")}>
					<span
						className='block py-3 min-h-[44px] md:min-h-0 md:cursor-pointer md:hover:underline'
						onClick={() => setNavbarShow("none")}
					>
						Home
					</span>
					<hr className='block md:hidden' />
				</NavLink>
				<NavLink
					to='/experience'
					className={({ isActive }) => (isActive ? "font-bold" : "font-normal")}
				>
					<span
						className='block py-3 min-h-[44px] md:min-h-0 md:cursor-pointer md:hover:underline'
						onClick={() => setNavbarShow("none")}
					>
						Experience
					</span>
					<hr className='block md:hidden' />
				</NavLink>
				<NavLink
					to='/research'
					className={({ isActive }) => (isActive ? "font-bold" : "font-normal")}
				>
					<span
						className='block py-3 min-h-[44px] md:min-h-0 md:cursor-pointer md:hover:underline'
						onClick={() => setNavbarShow("none")}
					>
						Research
					</span>
					<hr className='block md:hidden' />
				</NavLink>
				<NavLink
					to='/projects'
					className={({ isActive }) => (isActive ? "font-bold" : "font-normal")}
				>
					<span
						className='block py-3 min-h-[44px] md:min-h-0 md:cursor-pointer md:hover:underline'
						onClick={() => setNavbarShow("none")}
					>
						Projects
					</span>
					<hr className='block md:hidden' />
				</NavLink>
				<NavLink
					to='/courses'
					className={({ isActive }) => (isActive ? "font-bold" : "font-normal")}
				>
					<span
						className='block py-3 min-h-[44px] md:min-h-0 md:cursor-pointer md:hover:underline'
						onClick={() => setNavbarShow("none")}
					>
						Courses
					</span>
					<hr className='block md:hidden' />
				</NavLink>
				<NavLink
					to='/certifications'
					className={({ isActive }) => (isActive ? "font-bold" : "font-normal")}
				>
					<span
						className='block py-3 min-h-[44px] md:min-h-0 md:cursor-pointer md:hover:underline'
						onClick={() => setNavbarShow("none")}
					>
						Certifications
					</span>
					<hr className='block md:hidden' />
				</NavLink>
			</nav>
		</>
	);
};

export default Navbar;
