import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'
import pl1 from '@/public/pl-1.png'
import pl2 from '@/public/pl-2.png'
import pl3 from '@/public/pl-3.png'
import pl4 from '@/public/pl-4.png'

import { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Sheen | Shop',
	description: 'Shop page',
}
export default function page() {
	return (
		<section>
			<h2 className="heading-2 capitalize">shop</h2>
			<section className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
				{[
					['andrea', '$84', pl1],
					['Exploring a day', '$84', pl2],
					['conceptualize thesaurus', '$87.5', pl3],
					['conceptualize thesaurus', '$125', pl4],
				].map(([item, price, image]) => (
					<article
						className=" flex flex-col"
						key={uuidv4()}
					>
						<Image
							className="max-w-[36.5rem] max-h-[36.5rem]"
							src={image}
							alt="item"
						></Image>
						{/* @ts-ignore */}
						<h3 className="heading-3 lowercase">{item}</h3>
						{/* @ts-ignore */}
						<p className="text-main">{price}</p>
					</article>
				))}
			</section>
		</section>
	)
}
