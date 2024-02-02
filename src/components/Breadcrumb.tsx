// import { Link } from 'react-router-dom';
import { useState } from "react";
import TableThree from "./TableThree";
import TableOne from "./TableOne";
import TableTwo from "./TableTwo";
import SearchComponent from "./Search";
import FilterComponent from "./Filter";
import { UpsellRequest } from "./UpsellRequest";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel
} from "@material-tailwind/react";

import {
  Square3Stack3DIcon,
  ShoppingCartIcon,
  CheckCircleIcon
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

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
          <UpsellRequest/>
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
  const [showModal, setShowModal] = useState(false);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };
  const imgURL = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
  const cardData = [
    { title: "Early Check-in", image: imgURL },
    { title: "Late Check-out", image: imgURL},
    { title: "Trip Protection", image: imgURL },
    { title: "Damage Waiver", image: imgURL },
    { title: "Parking", image: imgURL },
    { title: "Pet Fee", image: imgURL },
  ];

  return (
    <>
     <div style={{marginLeft: "100px", marginRight: "100px"}}>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex">
            <SearchComponent/>
            <FilterComponent/>
            {selectedTab !== "dashboard" && (
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-gray-800 px-3 border border-blue-500 rounded-full ml-3 mt-2">
                <div className="inline-flex">
                  <svg className="fill-current w-4 h-4 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                  <span>Export</span>
                </div>
              </button>
          )}
          </div>

          {selectedTab === "dashboard" && (
              <button onClick={() => setShowModal(true)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-gray-800 py-1 px-4 border border-blue-500 rounded-full mr-3">
                <div className="inline-flex">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                </svg>
                  <span>Create Upsell</span>
                </div>
              </button>
          )}

          {showModal ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h4 className="text-3xl font-semibold">
                          Create Upsell
                        </h4>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <Card className="w-full h-30 max-w-[58rem] flex-row">
                          <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0 w-2/5 shrink-0 rounded-r-none"
                          >
                            <img
                              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                              alt="card-image"
                              className="h-full w-full object-cover"
                            />
                          </CardHeader>
                          <CardBody>
                            <Typography variant="h6" color="gray" className="mb-1">
                              Build your own Upsell
                            </Typography>
                            <a href="#" className="inline-block">
                              <Button variant="text" className="flex gap-2 px-0">
                                Start from blank
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  className="h-4 w-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                  />
                                </svg>
                              </Button>
                            </a>
                          </CardBody>
                        </Card>
                        <h5 className="text-l font-semibold mt-3">Upsell Templates</h5>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", marginTop: "20px", overflow: "auto", maxHeight: "250px"}}>
                          {cardData.map((card, index) => (
                            <Card key={index} className="w-full h-20 max-w-[58rem] flex-row">
                              <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-2/5 shrink-0 rounded-r-none"
                              >
                                <img
                                  src={card.image}
                                  alt="card-image"
                                  className="h-full w-full object-cover"
                                />
                              </CardHeader>
                              <CardBody>
                                <Typography variant="h6" color="gray" className="mb-1">
                                  {card.title}
                                </Typography>
                              </CardBody>
                            </Card>
                          ))}
                        </div> 
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
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
    </>
  );
};

export default Breadcrumb;
