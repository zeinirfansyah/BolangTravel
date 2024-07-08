import React from 'react';
import { Button } from '../../../components/ui/Button';
import { useNavigate } from "react-router-dom";

const DestinationList = () => {
    const navigate = useNavigate();

    const handleAdd = () => {
        navigate('/add-destination');
    };
    const handleUpdate = () => {
        navigate('/update-destination');
    };
    return (
        <>
            <section className="my-52">
                <div className="container mx-auto px-4 lg:max-w-7xl flex items-center justify-center">
                    <div className="text-center grid gap-4">
                        <h1 className="text-sm text-primary">
                            <span className="block font-bold text-dark text-4xl lg:text-5xl">Destination List</span>
                        </h1>
                        <Button onClick={handleAdd} title={"Add Destination"} style={"rounded-lg py-2 px-3 text-sm bg-primary border-primary text-white hover:border-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"}/>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 shadow-lg">
                                <thead className="text-xs text-slate-800 uppercase bg-gray-100 text-center">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Location
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Duration
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b">
                                        <td scope="row" className="px-6 py-4 text-navy whitespace-nowrap">
                                            Pulau Seribu Pesona
                                        </td>
                                        <td className="px-6 py-4">
                                            Home
                                        </td>
                                        <td className="px-6 py-4">
                                            $250
                                        </td>
                                        <td className="px-6 py-4">
                                            Bali
                                        </td>
                                        <td className="px-6 py-4">
                                            3 Days
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <Button onClick={handleUpdate} title={"Update"} style={"rounded-lg py-2 px-3 text-sm bg-slate-200 hover:bg-primary border-slate-200 hover:border-primary text-slate-800 hover:text-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"}/>
                                                <a href="#" className="rounded-lg py-2 px-3 text-sm bg-primary hover:bg-pink border-slate-200 hover:border-pink text-white hover:text-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out">Delete</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td scope="row" className="px-6 py-4 text-navy whitespace-nowrap">
                                            Bali Relaxation
                                        </td>
                                        <td className="px-6 py-4">
                                            Bali Good
                                        </td>
                                        <td className="px-6 py-4">
                                            $300
                                        </td>
                                        <td className="px-6 py-4">
                                            Bali
                                        </td>
                                        <td className="px-6 py-4">
                                            5 Days
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <Button onClick={handleUpdate} title={"Update"} style={"rounded-lg py-2 px-3 text-sm bg-slate-200 hover:bg-primary border-slate-200 hover:border-primary text-slate-800 hover:text-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"}/>
                                                <a href="#" className="rounded-lg py-2 px-3 text-sm bg-primary hover:bg-pink border-slate-200 hover:border-pink text-white hover:text-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out">Delete</a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    
    )
}

export default DestinationList