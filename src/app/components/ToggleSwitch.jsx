// Define the ToggleSwitch functional component with props for 'checked' state and 'onChange' handler.
const ToggleSwitch = ({ checked, onChange }) => {
	return (
		// Container div for the toggle switch with center alignment for its items.
		<div className="flex items-center justify-center">
			{/* Label element associated with the input checkbox. Acts as a clickable area for the checkbox. */}
			<label htmlFor="toggle">
				{/* The container for the visual elements of the toggle switch. It's set to relative to position the inner elements absolutely within it. */}
				<div className="relative cursor-pointer">
					{/* Invisible checkbox input that controls the state of the toggle. It remains hidden as it's visually replaced by custom styling. */}
					<input
						type="checkbox"
						id="toggle"
						className="sr-only" // Hide the checkbox visually but keep it accessible
						checked={checked} // Controlled component: input checked state is controlled by React state
						onChange={(e) => onChange(e.target.checked)} // Call onChange handler passed from the parent component, passing the new checked state
					/>
					{/* Visual representation of the toggle switch background which changes color based on whether it's checked or not. */}
					<div
						className={`block w-20 h-8 rounded-full transition-colors ${
							checked ? "bg-teal-500" : "bg-gray-600"
						}`}
					></div>
					{/* Circle inside the toggle that moves from one end to the other indicating the toggle state. */}
					<div
						className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition-transform ${
							checked ? "transform translate-x-12" : "" // Move the circle to the right when checked
						}`}
					></div>
					{/* Text label inside the toggle that moves slightly based on the state to indicate the active option. */}
					<span
						className={`absolute inset-0 flex items-center justify-center w-full font-medium text-xs transition-opacity ${
							checked ? "-translate-x-2" : "translate-x-2" // Position the text more dynamically depending on the state
						}`}
					>
						{checked ? "FREE" : "PAID"}{" "}
						{/* Display the text based on the checked state */}
					</span>
				</div>
			</label>
		</div>
	);
};

export default ToggleSwitch;
