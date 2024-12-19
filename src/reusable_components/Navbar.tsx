import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import classNames from "classnames";

const Navbar = () => {
	const [navbarShow, setNavbarShow] = useState("none");

	const toggleNavbar = () => {
		if (navbarShow === "block") {
			setNavbarShow("none");
		} else {
			setNavbarShow("block");
		}
	};

	return (
		<>
			<div className='w-full border-b p-2 border-black dark:border-white md:hidden bg-slate-400 dark:bg-slate-500 dark:text-white relative'>
				<div className='py-2 flex justify-center items-center relative'>
					<RxHamburgerMenu className='h-10 absolute right-5' onClick={toggleNavbar} />
				</div>
			</div>
			<nav
				className={classNames(
					"grid grid-cols-1 text-center md:flex md:justify-evenly md:p-2.5 bg-slate-400 dark:bg-slate-500 dark:text-white",
					{ hidden: navbarShow === "none" }
				)}
			>
				<NavLink
					to='/'
					className={({ isActive }) => {
						return isActive ? "font-bold" : "font-normal";
					}}
				>
					<span
						className='py-3 md:cursor-pointer md:hover:underline'
						onClick={() => setNavbarShow("none")}
					>
						Home
					</span>
					<hr className='block md:hidden' />
				</NavLink>
				<NavLink
					to='/experience'
					className={({ isActive }) => {
						return isActive ? "font-bold" : "font-normal";
					}}
				>
					<span
						className='py-3 md:cursor-pointer md:hover:underline'
						onClick={() => setNavbarShow("none")}
					>
						Experience
					</span>
					<hr className='block md:hidden' />
				</NavLink>
				<NavLink
					to='/research'
					className={({ isActive }) => {
						return isActive ? "font-bold" : "font-normal";
					}}
				>
					<span
						className='py-3 md:cursor-pointer md:hover:underline'
						onClick={() => setNavbarShow("none")}
					>
						Research
					</span>
					<hr className='block md:hidden' />
				</NavLink>
				<NavLink
					to='/projects'
					className={({ isActive }) => {
						return isActive ? "font-bold" : "font-normal";
					}}
				>
					<span
						className='py-3 md:cursor-pointer md:hover:underline'
						onClick={() => setNavbarShow("none")}
					>
						Projects
					</span>
					<hr className='block md:hidden' />
				</NavLink>
				<NavLink
					to='/courses'
					className={({ isActive }) => {
						return isActive ? "font-bold" : "font-normal";
					}}
				>
					<span
						className='py-3 md:cursor-pointer md:hover:underline'
						onClick={() => setNavbarShow("none")}
					>
						Courses
					</span>
					<hr className='block md:hidden' />
				</NavLink>
				<NavLink
					to='/certifications'
					className={({ isActive }) => {
						return isActive ? "font-bold" : "font-normal";
					}}
				>
					<span
						className='py-3 md:cursor-pointer md:hover:underline'
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
