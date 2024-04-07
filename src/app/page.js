"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import CategoryList from "./components/CategoryList";
import cardsData from "./data/cardsData.json";
import Card from "./components/Card";

const Home = () => {
	const [selectedCategory, setSelectedCategory] = useState("Top Picks"); // Default to "Top Picks"
	const [searchText, setSearchText] = useState("");
	const [filteredCards, setFilteredCards] = useState(cardsData.slice(0, 4)); // Default to first 4 cards

	useEffect(() => {
		let updatedCards = cardsData;

		// If "Top Picks" is selected, show the first 4 cards
		if (selectedCategory === "Top Picks") {
			updatedCards = searchText
				? cardsData.filter((card) =>
						card.name
							.toLowerCase()
							.includes(searchText.toLowerCase())
				  )
				: cardsData.slice(0, 4);
		} else {
			updatedCards = updatedCards.filter(
				(card) => card.useCase === selectedCategory
			);
			if (searchText) {
				updatedCards = updatedCards.filter((card) =>
					card.name.toLowerCase().includes(searchText.toLowerCase())
				);
			}
		}

		// Apply additional filtering by search text if provided
		if (searchText) {
			updatedCards = updatedCards.filter(
				(card) =>
					card.name
						.toLowerCase()
						.includes(searchText.toLowerCase()) ||
					card.tags.some((tag) =>
						tag.toLowerCase().includes(searchText.toLowerCase())
					)
			);
		}

		setFilteredCards(updatedCards);
	}, [selectedCategory, searchText]);

	return (
		<div className="container mx-auto px-12 md:px-32 mt-6 sm:mt-12 md:mt-18 lg:mt-22">
			<Header />
			<SearchBar setSearchText={setSearchText} />
			<CategoryList
				selectedCategory={selectedCategory}
				setSelectedUseCase={setSelectedCategory}
			/>

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
				{filteredCards.length > 0 ? (
					filteredCards.map((card) => <Card card={card} />)
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
