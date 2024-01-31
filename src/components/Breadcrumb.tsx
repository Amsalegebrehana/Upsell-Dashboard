// import { Link } from 'react-router-dom';
import React from "react";
import TableThree from "./TableThree";
import TableOne from "./TableOne";
import TableTwo from "./TableTwo";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import {
  Square3Stack3DIcon,
  ShoppingCartIcon,
  CheckCircleIcon
} from "@heroicons/react/24/solid";

export function TabsWithIcon() {
  const data = [
    {
      label: "Manage Upsells",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc: <TableOne/>,
    },
    {
      label: "Upsell Orders",
      value: "profile",
      icon: ShoppingCartIcon,
      desc: <TableTwo/>,
    },
    {
      label: "Upsell Requests",
      value: "settings",
      icon: CheckCircleIcon,
      desc: <TableThree/>,
    },
  ];
  return (
    <Tabs value="dashboard">
      <TabsHeader className="ml-3 mr-3">
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({  }: BreadcrumbProps) => {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        </h2>

        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-gray-800 py-2 px-4 border border-blue-500 rounded-full mr-3 mb-5">
          <div className="inline-flex">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
          </svg>
            <span>Create Upsell</span>
          </div>
        </button>

      </div>
      
        <div>
          
          <TabsWithIcon/>

          {/* <nav>
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/">Dashboard /</Link>
              </li>
              <li className="text-primary">{pageName}</li>
            </ol>
          </nav> */}
        </div>
    </div>

  );
};

export default Breadcrumb;
