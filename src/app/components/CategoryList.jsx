// components/CategoryList.jsx
const CategoryList = ({ selectedCategory, setSelectedUseCase }) => {
	const categories = [
		"Top Picks",
		"Chatbot",
		"Writing",
		"Academia",
		"Productivity",
		"Programming",
		"Image",
		"Video",
		"Audio",
		"Other",
	];

	return (
		<div className="flex flex-wrap gap-4 mb-4">
			{categories.map((category) => (
				<button
					key={category}
					onClick={() => setSelectedUseCase(category)}
					className={`py-2 px-4 rounded ${
						selectedCategory === category
							? "bg-teal-500 hover:bg-teal-700"
							: "bg-gray-700 hover:bg-gray-600"
					} text-white font-bold`}
				>
					{category}
				</button>
			))}
		</div>
	);
};

export default CategoryList;
