import { v4 as uuidv4 } from 'uuid'

export default function Contact() {
	return (
		<section className="max-w-[26.875rem] md:max-w-[57rem] mx-auto flex flex-col md:flex-row md:gap-x-[6.4rem]">
			<article className="max-w-[23.563rem]">
				<h2 className="heading-2">Let’s contact me</h2>
				<p className="mt-[1.5rem] text-base lg:mt-[3rem]">
					Feel free to contact me if you have any questions or just want to say
					Hello!
				</p>
				<address className="flex flex-col gap-y-[.25rem] lg:gap-y-[.50rem] mt-[1.5rem] lg:mt-[3rem]">
					{[
						['MY PHONE:', '+87 76898060', 'tel:+8776898060'],
						['FAX:', '+87 76898089', 'tel:+8776898089'],
						[
							'EMAIL:',
							'Info@Brilliance-team.com',
							'mailto:Info@Brilliance-team.com',
						],
					].map(([title, address, link]) => (
						<p
							className="flex flex-col text-base uppercase not-italic"
							key={uuidv4()}
						>
							{title}
							<a
								className="w-max mt-[.125rem] text-base text-gray-light lowercase hover:underline"
								href={link}
							>
								{address}
							</a>
						</p>
					))}
				</address>
			</article>
			<form
				className="max-w-[26.875rem] w-full mt-[2.5rem] lg:mt-[4.5rem]"
				method="post"
			>
				<div className="flex flex-col gap-y-[2rem] lg:gap-y-[4rem]">
					<input
						className="input-primary"
						placeholder="Type Your Name"
						type="text"
						required
					/>
					<input
						className="input-primary"
						placeholder="Type Your E-mail Address"
						type="email"
						required
					/>
					<textarea
						className="input-primary min-h-[6.25rem]"
						placeholder="Type Your Message"
						required
					></textarea>
				</div>
				<input
					className="block mt-[1.2rem] lg:mt-[2.4rem] ml-auto w-min button-primary"
					type="submit"
					value="Send"
				/>
			</form>
		</section>
	)
}
