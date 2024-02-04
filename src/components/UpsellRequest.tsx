import PendingRequests from "./PendingRequests";
import DeclinedRequests from "./DeclinedRequests";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import {
  XCircleIcon,
  CheckCircleIcon
} from "@heroicons/react/24/solid";

export function UpsellRequest({selectedTab, setSelectedTab} : {selectedTab: string, setSelectedTab: (value: string) => void}) {
  
  return (
    <Tabs value="dashboard" style={{marginTop: "30px"}}>
      <TabsHeader className="ml-3 mr-3 !dark:text-black">
        <Tab value="dashboard">
          <div className="flex items-center gap-2" style={{position: "relative", zIndex: 1}}>
            <CheckCircleIcon className="w-5 h-5" />
            Pending
          </div>
        </Tab>
        <Tab value="profile">
          <div className="flex items-center gap-2" style={{position: "relative", zIndex: 1}}>
            <XCircleIcon className="w-5 h-5" />
            Declined
          </div>
        </Tab>
      </TabsHeader>
      <TabsBody>
        <TabPanel value="dashboard">
          <PendingRequests setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
        </TabPanel>
        <TabPanel value="profile">
          <DeclinedRequests setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}