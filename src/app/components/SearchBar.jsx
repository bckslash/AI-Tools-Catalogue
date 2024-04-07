// components/SearchBar.jsx
const SearchBar = ({ setSearchText }) => {
	return (
		<div className="my-4">
			<input
				type="text"
				placeholder="Search by title..."
				onChange={(e) => setSearchText(e.target.value)}
				className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none"
			/>
		</div>
	);
};

export default SearchBar;
