import Link from 'next/link'

export default function page() {
	return (
		<section className="max-w-[26.875rem] md:max-w-[57rem] mx-auto flex flex-col md:flex-row md:gap-x-[6.4rem]">
			<article className="flex flex-col max-w-[23.563rem]">
				<h2 className="heading-2">Welcome back</h2>
				<p className="mt-[.5rem] lg:mt-[1rem] text-xl">
					Enter your email and password to sign in to the website.
				</p>
				<p className="mt-[.7rem] lg:mt-[1.5rem] text-sm">
					Not signed up yet?{' '}
					<Link
						className="accent-underline"
						href="/registration"
					>
						Sign up
					</Link>
				</p>
			</article>
			<form
				className="max-w-[26.875rem] w-full mt-[2.5rem] md:mt-[2.2rem]"
				method="get"
			>
				<div className="flex flex-col gap-y-[2rem] lg:gap-y-[4rem]">
					<input
						className="input-primary"
						placeholder="Email Address"
						type="email"
						required
					/>
					<input
						className="input-primary"
						placeholder="Your Password"
						type="password"
						required
					/>
				</div>
				<label className="mt-[1rem] lg:mt-[1.7rem] flex items-center gap-x-[.625rem] text-sm">
					<input type="checkbox" />
					Keep me logged in
				</label>
				<input
					className="w-full mt-[2rem] lg:mt-[4rem] button-primary"
					type="submit"
					value="Sign in"
				/>
				<Link
					className="mt-[.7rem] lg:mt-[1.5rem] block w-max mx-auto text-sm accent-underline"
					href="/recovery"
				>
					Forgot Password?
				</Link>
			</form>
		</section>
	)
}
