// The Card component is used to display information about a single card item.
// It expects a 'card' object as a prop that contains details like id, url, name, etc.

const Card = ({ card }) => (
	// Each card is contained within a div with a dark background and rounded corners.
	<div key={card.id} className="bg-gray-800 p-6 rounded-lg">
		{/* The card's name is displayed as a heading and is clickable.
        Clicking it will open the card's URL in a new tab. */}
		<a
			href={card.url}
			target="_blank"
			rel="noopener noreferrer"
			className="flex"
		>
			{/* The card's name uses a larger and bold font.
          It has a hover effect that lowers the opacity for visual feedback on interaction. */}
			<h3 className="text-lg font-semibold mb-2 hover:opacity-60">
				{card.name}
			</h3>
		</a>
		{/* Below the card's name, its description is displayed in a smaller, lighter font. */}
		<p className="text-gray-400 text-sm mb-4">{card.description}</p>
		{/* The card's use case is displayed in a smaller font, colored to stand out. */}
		<p className="text-teal-400 text-xs mb-1">Use Case: {card.useCase}</p>
		{/* The card's tags are listed in an even smaller font, joined by commas. */}
		<div className="text-gray-500 text-xs">
			Tags: {card.tags.join(", ")}
		</div>
	</div>
);

// The Card component is exported so it can be used in other parts of the application.
export default Card;
