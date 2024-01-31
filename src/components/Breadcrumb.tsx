// import { Link } from 'react-router-dom';
import { useState } from "react";
import TableThree from "./TableThree";
import TableOne from "./TableOne";
import TableTwo from "./TableTwo";
import SearchComponent from "./Search";
import FilterComponent from "./Filter";
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

export function TabsWithIcon({ selectedTab, handleTabChange }: { selectedTab: string, handleTabChange: (value: string) => void }) {
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

  const onTabChange = (value: string) => {
    handleTabChange(value);
  };

  return (
    <Tabs value={selectedTab} onChange={handleTabChange}>
      <TabsHeader className="ml-3 mr-3">
        <Tab value="dashboard" onClick={() => onTabChange("dashboard")}>
          <div className="flex items-center gap-2">
            <Square3Stack3DIcon className="w-5 h-5" />
            Manage Upsells
          </div>
        </Tab>
        <Tab value="profile" onClick={() => onTabChange("profile")}>
          <div className="flex items-center gap-2">
            <ShoppingCartIcon className="w-5 h-5" />
            Upsell Orders
          </div>
        </Tab>
        <Tab value="settings" onClick={() => onTabChange("settings")}>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5" />
            Upsell Requests
          </div>
        </Tab>
      </TabsHeader>
      <TabsBody>
        <TabPanel value="dashboard">
          <TableOne />
        </TabPanel>
        <TabPanel value="profile">
          <TableTwo />
        </TabPanel>
        <TabPanel value="settings">
          <TableThree />
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}

interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({  }: BreadcrumbProps) => {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div style={{marginLeft: "100px", marginRight: "100px"}}>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex">
            <SearchComponent/>
            <FilterComponent/>
            {selectedTab !== "dashboard" && (
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-gray-800 px-3 border border-blue-500 rounded-full ml-3 mt-2">
                <div className="inline-flex">
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                  <span>Export</span>
                </div>
              </button>
          )}
          </div>

          {selectedTab === "dashboard" && (
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-gray-800 py-1 px-4 border border-blue-500 rounded-full mr-3">
                <div className="inline-flex">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                </svg>
                  <span>Create Upsell</span>
                </div>
              </button>
          )}

        </div>
      
        <div style={{marginTop: "50px"}}>
          
          <TabsWithIcon selectedTab={selectedTab} handleTabChange={handleTabChange}/>
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
