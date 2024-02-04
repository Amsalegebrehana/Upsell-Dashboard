import ManageUpsell from "./ManageUpsell";
import UpsellOrders from "./UpsellOrders";
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

const UpsellTabs = ({ selectedTab, handleTabChange, setSelectedTab }: { selectedTab: string, handleTabChange: (value: string) => void, setSelectedTab: (value: string) => void }) => {
    const onTabChange = (value: string) => {
      handleTabChange(value);
    };
  
    return (
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <TabsHeader className="ml-3 mr-3">
          <Tab value="manage" onClick={() => onTabChange("manage")}>
            <div className="flex items-center gap-2" style={{position: "relative", zIndex: 1}}>
              <Square3Stack3DIcon className="w-5 h-5" />
              <span className="">Manage Upsells</span>
            </div>
          </Tab>
          <Tab value="order" onClick={() => onTabChange("order")}>
            <div className="flex items-center gap-2" style={{position: "relative", zIndex: 1}}>
              <ShoppingCartIcon className="w-5 h-5" />
              <span>Upsell Orders</span>
            </div>
          </Tab>
          <Tab value="request" onClick={() => onTabChange("request")}>
            <div className="flex items-center gap-2" style={{position: "relative", zIndex: 1}}>
              <CheckCircleIcon className="w-5 h-5" />
              <span>Upsell Requests</span>
            </div>
          </Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel value="manage">
            <ManageUpsell setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
          </TabPanel>
          <TabPanel value="order">
            <UpsellOrders />
          </TabPanel>
          <TabPanel value="request">
            <UpsellRequest setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
          </TabPanel>
        </TabsBody>
      </Tabs>
    );
  }

export default UpsellTabs;