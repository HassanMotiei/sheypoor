"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import Link from "next/link";

const Page = () => {
	const [loading, setLoading] = useState(false);
	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setFormValues({ name: "", email: "", password: "" });

		try {
			const res = await fetch("/api/register", {
				method: "POST",
				body: JSON.stringify(formValues),
				headers: {
					"Content-Type": "application/json",
				},
			});

			setLoading(false);
			if (!res.ok) {
				setError((await res.json()).message);
				return;
			}

			signIn(undefined, { callbackUrl: "/" });
		} catch (error: any) {
			setLoading(false);
			setError(error);
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};

	return (
		<>
			<div className="flex min-h-full flex-col justify-center py-8 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-base-content">
						Create Account
					</h2>
				</div>

				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-base-300 py-8 px-4 shadow sm:rounded-lg sm:px-10">
						<form
							className="space-y-6"
							action="#"
							method="POST"
							onSubmit={onSubmit}
						>
							{error && (
								<p className="text-center bg-red-300 py-4 mb-6 rounded">
									{error}
								</p>
							)}
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-base-content"
								>
									First name and Last name
								</label>
								<div className="mt-1">
									<input
										id="name"
										name="name"
										type="name"
										autoComplete="name"
										required
										value={formValues.name}
										onChange={handleChange}
										className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-base-content"
								>
									Email address
								</label>
								<div className="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										value={formValues.email}
										onChange={handleChange}
										className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-base-content"
								>
									Password
								</label>
								<div className="mt-1">
									<input
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										required
										value={formValues.password}
										onChange={handleChange}
										className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									/>
								</div>
							</div>

							<div>
								<button
									type="submit"
									style={{
										backgroundColor: `${
											loading ? "#ccc" : "#3446eb"
										}`,
									}}
									className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									disabled={loading}
								>
									{loading ? "loading..." : "Sign Up"}
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="mt-2 mx-auto">
					Already have an account?{" "}
					<Link
						href="/auth/signin"
						className="btn btn-outline btn-info btn-sm"
					>
						Sign In
					</Link>
				</div>
			</div>
		</>
	);
};

export default Page;
