import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";
import React, { Dispatch, SetStateAction } from 'react';

type UpsellModalProps = {
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const UpsellModal: React.FC<UpsellModalProps> = ({ setShowModal }) => {
    const imgURL = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80";
    const cardData = [
        { title: "Early Check-in", image: imgURL },
        { title: "Late Check-out", image: imgURL},
            { title: "Trip Protection", image: imgURL },
            { title: "Damage Waiver", image: imgURL },
            { title: "Parking", image: imgURL },
            { title: "Pet Fee", image: imgURL },
        ];
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h4 className="text-3xl font-semibold">
                        Create Upsell
                        </h4>
                        <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => handleCloseModal()}
                        >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                        </span>
                        </button>
                    </div>
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
                            <Link to="/upsell/add" className="inline-block">
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
                            </Link>
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
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => handleCloseModal()}
                        >
                        Close
                        </button>
                    </div>
                    </div>
                </div>
            </div>
    );
}

export default UpsellModal;