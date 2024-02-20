import Link from 'next/link'

export default function page() {
	return (
		<section className="max-w-[26.875rem] md:max-w-[57rem] mx-auto flex flex-col md:flex-row md:gap-x-[6.4rem]">
			<article className="flex flex-col max-w-[23.563rem]">
				<h2 className="heading-2">Welcome back</h2>
				<p className="mt-[.5rem] lg:mt-[1rem] text-main text-xl">
					Enter your email and password to sign in to the website.
				</p>
				<p className="mt-[.7rem] lg:mt-[1.5rem] text-main">
					Not signed up yet?{' '}
					<Link
						className="underline decoration-accent underline-offset-8"
						href="/registration"
					>
						Sign up
					</Link>
				</p>
			</article>
			<form className="max-w-[26.875rem] w-full mt-[2.5rem] md:mt-[2.2rem]">
				<div className="flex flex-col gap-y-[2rem] lg:gap-y-[4rem]">
					<input
						className="input-primary"
						placeholder="Email Address"
						type="email"
					/>
					<input
						className="input-primary"
						placeholder="Your Password"
						type="password"
					/>
				</div>
				<label className="mt-[1rem] lg:mt-[1.7rem] flex items-center gap-x-[.625rem] text-sm text-primary">
					<input type="checkbox" />
					Keep me logged in
				</label>
				<button className="w-full mt-[2rem] lg:mt-[4rem] button-primary">
					Sign in
				</button>
				<Link
					className="mt-[.7rem] lg:mt-[1.5rem] block w-max mx-auto text-sm text-primary underline decoration-accent underline-offset-8"
					href="/recovery"
				>
					Forgot Password?
				</Link>
			</form>
		</section>
	)
}
