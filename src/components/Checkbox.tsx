import React, { ChangeEvent } from 'react';

interface CheckBoxProps {
    name: string;
    selectedTab: string;
    setSelectedTab: (value: string) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({name, selectedTab, setSelectedTab}) => {
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newTabValue = event.target.checked ? selectedTab : selectedTab;
        setSelectedTab(selectedTab);
    }
    return (
        <div className="flex items-center">
            <input onChange={handleOnChange} id="default-checkbox" type="checkbox"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label htmlFor="default-checkbox" className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white font-medium text-gray-900 dark:text-gray-300">{name}</label>
        </div>
    )
}

export default CheckBox;