import { useState } from "react";
import SearchComponent from "./Search";
import FilterComponent from "./Filter";
import UpsellTabs from "./UpsellTabs";
import UpsellModal from './UpsellModal';
import ExportButton from "./ExportButton";
import CreateButton from "./CreateButton";

interface MainProps {
  pageName: string;
}
const Main = ({  }: MainProps) => {
  const [selectedTab, setSelectedTab] = useState("manage");
  const [showModal, setShowModal] = useState(false);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <>
     <div style={{marginLeft: "100px", marginRight: "100px"}}>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex">
            <SearchComponent/>
            <FilterComponent/>
              <ExportButton/>
          </div>
            <CreateButton setShowModal={setShowModal}/>

          {showModal && <UpsellModal setShowModal={setShowModal} />}
        </div>
      
        <div style={{marginTop: "50px"}}> 
          <UpsellTabs selectedTab={selectedTab} setSelectedTab = {setSelectedTab} handleTabChange={handleTabChange}/>
        </div>
    </div>
    </>
  );
};

export default Main;
