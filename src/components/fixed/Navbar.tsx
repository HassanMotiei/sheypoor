"use client";
import React from "react";

import { FaHeart } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	const [theme, setTheme] = React.useState("light");

	React.useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		setTheme(mediaQuery.matches ? "dark" : "light");

		const listener = (event: { matches: any }) => {
			setTheme(event.matches ? "dark" : "light");
		};

		mediaQuery.addListener(listener);
		return () => mediaQuery.removeListener(listener);
	}, []);

	return (
		<div className="border-b">
			<div className="navbar bg-base-100 my-3">
				<div className="flex-1 gap-2">
					<Link href="/">
						<Image
							src="/images/shypoor-logo.png"
							width="60"
							height="60"
							alt="sheypoor-logo"
						/>
					</Link>
					<div className="form-control">
						<input
							type="text"
							placeholder="Search"
							className="input input-bordered w-[30rem] h-[3.5rem]"
						/>
					</div>
				</div>
				<div className="flex-none gap-4">
					<ul className="menu menu-horizontal px-1">
						<li className="flex items-center ">
							<Link href="/">
								<FaHeart />
								Save
							</Link>
						</li>
						<li className="flex items-center ">
							<Link href="/">
								<AiFillMessage />
								Message
							</Link>
						</li>
						<li className="flex items-center ">
							<Link href="/">
								<FaUser />
								My Account
							</Link>
						</li>
					</ul>
					<label className="swap swap-rotate">
						{/* this hidden checkbox controls the state */}
						<input
							type="checkbox"
							className="theme-controller"
							value={theme === "dark" ? "bumblebee" : "night"}
						/>

						{/* sun icon */}
						<svg
							className={`${
								theme === "dark" ? "swap-off" : "swap-on"
							} fill-current w-7 h-7`}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
						</svg>

						{/* moon icon */}
						<svg
							className={`${
								theme === "dark" ? "swap-on" : "swap-off"
							} fill-current w-7 h-7`}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
						</svg>
					</label>
					<Link href="/" className="btn">
						<FaPlus />
						Free ad registration
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
