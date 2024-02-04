import React, { Dispatch, SetStateAction } from 'react';

type CreateButtonProps = {
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const CreateButton : React.FC<CreateButtonProps> = ({ setShowModal }) => {
    return (
        <button onClick={() => setShowModal(true)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-gray-800 py-1 px-4 border border-blue-500 rounded-full mr-3">
            <div className="inline-flex">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
            </svg>
            <span>Create Upsell</span>
            </div>
      </button>
    )
}

export default CreateButton;