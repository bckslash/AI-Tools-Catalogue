// app/components/FeaturedCards.tsx
const Card = ({ card }) => (
	<div key={card.id} className="bg-gray-800 p-6 rounded-lg">
		<a
			href={card.url}
			target="_blank"
			rel="noopener noreferrer"
			className="flex"
		>
			<h3 className="text-lg font-semibold mb-2 hover:opacity-60">
				{card.name}
			</h3>
		</a>
		<p className="text-gray-400 text-sm mb-4">{card.description}</p>
		<p className="text-teal-400 text-xs mb-1">Use Case: {card.useCase}</p>
		<div className="text-gray-500 text-xs">
			Tags: {card.tags.join(", ")}
		</div>
	</div>
);

export default Card;
