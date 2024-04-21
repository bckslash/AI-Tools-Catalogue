// Main import statements for React and other components, as well as the initial data.
"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import CategoryList from "./components/CategoryList";
import cardsData from "./data/cardsData.json";
import Card from "./components/Card";
import ToggleSwitch from "./components/ToggleSwitch";

// The Home component which is the main page of the application.
const Home = () => {
	// State variable for the currently selected category in the category list.
	const [selectedCategory, setSelectedCategory] = useState("Top Picks");

	// State variable for the current search text input by the user.
	const [searchText, setSearchText] = useState("");

	// State variable for the cards filtered by category and search text, defaulting to the first 4 cards.
	const [filteredCards, setFilteredCards] = useState(cardsData.slice(0, 4));

	// State variable to track whether the toggle switch for free tools is on or off.
	const [isFreeOnly, setIsFreeOnly] = useState(false);

	// Effect hook that runs when selectedCategory, searchText, or isFreeOnly changes.
	useEffect(() => {
		// Begin with the full list of cards from the data.
		let updatedCards = cardsData;

		// Filter the cards to show only free tools if the toggle is switched on.
		if (isFreeOnly) {
			updatedCards = updatedCards.filter((card) => card.free === true);
		}

		// Special handling for the "Top Picks" category.
		if (selectedCategory === "Top Picks") {
			updatedCards = searchText
				? // If there is search text, filter cards by name, description, or tags matching the search text.
				  cardsData.filter(
						(card) =>
							card.name
								.toLowerCase()
								.includes(searchText.toLowerCase()) ||
							card.description
								.toLowerCase()
								.includes(searchText.toLowerCase()) ||
							card.tags.some((tag) =>
								tag
									.toLowerCase()
									.includes(searchText.toLowerCase())
							)
				  )
				: // If there is no search text, default to showing the first 4 cards.
				  cardsData.slice(0, 4);
		} else {
			// If a category other than "Top Picks" is selected, filter cards by that category.
			updatedCards = updatedCards.filter(
				(card) => card.useCase === selectedCategory
			);

			// If there is search text, further filter by text matching.
			if (searchText) {
				updatedCards = updatedCards.filter(
					(card) =>
						card.name
							.toLowerCase()
							.includes(searchText.toLowerCase()) ||
						card.description
							.toLowerCase()
							.includes(searchText.toLowerCase()) ||
						card.tags.some((tag) =>
							tag.toLowerCase().includes(searchText.toLowerCase())
						)
				);
			}
		}

		// Update the state with the filtered cards.
		setFilteredCards(updatedCards);
	}, [selectedCategory, searchText, isFreeOnly]);

	// Render the home page layout.
	return (
		<div className="container mx-auto px-12 md:px-32 mt-6 sm:mt-12 md:mt-18 lg:mt-22">
			<Header />

			{/* Toggle switch for filtering free tools */}
			<ToggleSwitch
				checked={isFreeOnly}
				onChange={() => setIsFreeOnly(!isFreeOnly)}
			/>

			{/* Search bar component */}
			<SearchBar setSearchText={setSearchText} />

			{/* Category list which allows selecting a category to filter */}
			<CategoryList
				selectedCategory={selectedCategory}
				setSelectedUseCase={setSelectedCategory}
			/>

			{/* Grid layout for cards. If there are no filtered cards, show a message */}
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
				{filteredCards.length > 0 ? (
					filteredCards.map((card) => (
						<Card key={card.id} card={card} />
					))
				) : (
					<p className="text-center text-gray-500 col-span-full">
						No cards found.
					</p>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default Home;
