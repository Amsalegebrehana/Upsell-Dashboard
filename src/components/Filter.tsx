const FilterComponent = () => {
    return (
        <select id="pricingType" name="pricingType"
		className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded-lg px-2 md:px-3 py-0 md:py-1 mt-auto tracking-wider">
            <option value="All">All</option>
            <option value="Freemium">Freemium</option>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
	    </select>
    )
}

export default FilterComponent;