// components/SearchBar.jsx
const SearchBar = ({ setSearchText }) => {
	return (
		<div className="my-4">
			<input
				type="text"
				placeholder="Search..."
				onChange={(e) => setSearchText(e.target.value)} // The onChange event updates the search text state whenever the user types in the input.
				className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none"
			/>
		</div>
	);
};

export default SearchBar;
