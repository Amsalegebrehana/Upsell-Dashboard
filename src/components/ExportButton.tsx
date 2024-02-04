const ExportButton = () => {
    return (
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-gray-800 px-3 border border-blue-500 rounded-full ml-3 mt-2">
            <div className="inline-flex">
                <svg className="fill-current w-4 h-4 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Export</span>
            </div>
        </button>
    )
}

export default ExportButton;