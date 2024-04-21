// The CategoryList component displays a list of categories that can be selected.
// It takes two props: `selectedCategory` to indicate the currently selected category,
// and `setSelectedUseCase`, a function to update the selected category.

const CategoryList = ({ selectedCategory, setSelectedUseCase }) => {
	// Define the list of categories available for selection.
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
		// Container for the category buttons, allowing horizontal scrolling on overflow
		// and no visible scrollbar for a clean look. On larger screens (sm breakpoint and above),
		// the items will wrap to the next line instead of scrolling.
		<div className="flex overflow-x-auto no-scrollbar sm:flex-wrap gap-4 mb-4">
			{/* Map through the categories array and create a button for each category. */}
			{categories.map((category) => (
				// Each button is assigned a key for React's reconciliation process and a click handler.
				<button
					key={category}
					// When a button is clicked, it will call the `setSelectedUseCase` function
					// with the category as the argument to update the selected category.
					onClick={() => setSelectedUseCase(category)}
					// Conditional class names to style the button based on whether it's the selected category.
					// If the button represents the selected category, it will have a different background color.
					// Additionally, all buttons have rounded corners, bold white text, and do not wrap text to the next line.
					className={`py-2 px-4 rounded ${
						selectedCategory === category
							? "bg-teal-500 hover:bg-teal-700" // Styling for the selected category
							: "bg-gray-700 hover:bg-gray-600" // Styling for non-selected categories
					} text-white font-bold whitespace-nowrap`}
				>
					{/* Display the name of the category within the button */}
					{category}
				</button>
			))}
		</div>
	);
};

// Export the CategoryList component so it can be imported and used in other parts of the application.
export default CategoryList;
