// import { Link } from 'react-router-dom';
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({  }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {/* {pageName} */}
      </h2>

      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-gray-800 py-2 px-4 border border-blue-500 rounded-full">
        <div className="inline-flex">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
        </svg>
          <span>Create Upsell</span>
        </div>
      </button>

      {/* <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link to="/">Dashboard /</Link>
          </li>
          <li className="text-primary">{pageName}</li>
        </ol>
      </nav> */}
    </div>
  );
};

export default Breadcrumb;
