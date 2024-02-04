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

const UpsellTabs = ({ selectedTab, handleTabChange }: { selectedTab: string, handleTabChange: (value: string) => void }) => {
    const onTabChange = (value: string) => {
      handleTabChange(value);
    };
  
    return (
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <TabsHeader className="ml-3 mr-3">
          <Tab value="manage" onClick={() => onTabChange("manage")}>
            <div className="flex items-center gap-2">
              <Square3Stack3DIcon className="w-5 h-5" />
              Manage Upsells
            </div>
          </Tab>
          <Tab value="order" onClick={() => onTabChange("order")}>
            <div className="flex items-center gap-2">
              <ShoppingCartIcon className="w-5 h-5" />
              Upsell Orders
            </div>
          </Tab>
          <Tab value="request" onClick={() => onTabChange("request")}>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5" />
              Upsell Requests
            </div>
          </Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel value="manage">
            <ManageUpsell />
          </TabPanel>
          <TabPanel value="order">
            <UpsellOrders />
          </TabPanel>
          <TabPanel value="request">
            <UpsellRequest/>
          </TabPanel>
        </TabsBody>
      </Tabs>
    );
  }

export default UpsellTabs;