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
import TableThree from "./TableThree";
import TableThreeDeclined from "./TableThreeDeclined";

export function UpsellRequest() {
  const data = [
    {
      label: "Pending",
      value: "dashboard",
      icon: CheckCircleIcon,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Declined",
      value: "profile",
      icon: XCircleIcon,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    }
  ];
  return (
    <Tabs style={{marginTop: "30px"}}>
      <TabsHeader className="ml-3 mr-3">
        <Tab value="dashboard">
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5" />
            Pending
          </div>
        </Tab>
        <Tab value="profile">
          <div className="flex items-center gap-2">
            <XCircleIcon className="w-5 h-5" />
            Declined
          </div>
        </Tab>
      </TabsHeader>
      <TabsBody>
        <TabPanel value="dashboard">
          <TableThree />
        </TabPanel>
        <TabPanel value="profile">
          <TableThreeDeclined/>
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}