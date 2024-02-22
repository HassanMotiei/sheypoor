"use client";

import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Page = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");

	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl") || "/auth/profile";

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			setLoading(true);
			setFormValues({ email: "", password: "" });

			const res = await signIn("credentials", {
				redirect: false,
				email: formValues.email,
				password: formValues.password,
				callbackUrl,
			});

			setLoading(false);

			console.log(res);
			if (!res?.error) {
				router.push(callbackUrl);
			} else {
				setError("invalid email or password");
			}
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
						Sign in to your Account
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

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
									/>
									<label
										htmlFor="remember-me"
										className="ml-2 block text-sm text-base-content"
									>
										Remember me
									</label>
								</div>

								<div className="text-sm">
									<a
										href="#"
										className="font-medium text-indigo-600 hover:text-indigo-500"
									>
										Forgot your password?
									</a>
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
									{loading ? "loading..." : "Sign In"}
								</button>
							</div>
						</form>

						<div className="mt-6">
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-t border-gray-300" />
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="bg-base-300 px-2 text-base-content">
										Or continue with
									</span>
								</div>
							</div>

							<div className="mt-6 grid grid-cols-2 gap-3">
								<div>
									<a
										className="btn inline-flex w-full justify-center"
										onClick={() =>
											signIn("google", { callbackUrl })
										}
										role="button"
									>
										<span className="sr-only">
											Sign in with Google
										</span>
										<FcGoogle size="1.5rem" />
									</a>
								</div>

								<div>
									<a
										className="btn inline-flex w-full justify-center"
										onClick={() =>
											signIn("github", { callbackUrl })
										}
										role="button"
									>
										<span className="sr-only">
											Sign in with Github
										</span>
										<FaGithub size="1.5rem" color="black" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-2 mx-auto">
					Already have not an account?{" "}
					<Link
						href="/auth/signup"
						className="btn btn-outline btn-info btn-sm"
					>
						Create Account
					</Link>
				</div>
			</div>
		</>
	);
};

export default Page;
