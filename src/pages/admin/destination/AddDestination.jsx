import React from 'react';
import { Button } from '../../../components/ui/Button';
import { useNavigate } from "react-router-dom";

const AddDestination = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/destination');
    };
    const handleCancel = () => {
        navigate('/destination');
    };
    return (
        <>
        <section className="my-52">
            <div className="container mx-auto px-4 lg:max-w-7xl flex items-center justify-center">
                <div className="grid gap-5">
                    <div className="font-semibold text-primary text-xs mb-2">
                        <a href="/destination" className="hover:text-primary">Destination List</a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        <span className="text-slate-400">Destination Information Form</span>
                    </div>
                    <h1 className="text-sm text-primary text-center">
                        <span className="block font-bold text-dark text-4xl lg:text-5xl">Destination Information Form</span>
                    </h1>
                    <h2 className="text-slate-400 text-sm text-center">Please fill up the blank fields below</h2>
                    <form action="" className="flex gap-x-8 gap-y-4 grid-cols-2">
                        <div className="text-left w-full">
                            <div className="mb-5">
                                <label for="title" className="block mb-2 text-sm font-medium text-navy">Title</label>
                                <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" placeholder="Please type here ..." required />
                            </div>
                            <div className="mb-5">
                                <label for="category" className="block mb-2 text-sm font-medium text-navy">Category</label>
                                <input type="text" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" placeholder="Please type here ..." required />
                            </div>
                            <div className="mb-5">
                                <label for="description" className="block mb-2 text-sm font-medium text-navy">Description</label>
                                <input type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" placeholder="Please type here ..." required />
                            </div>
                            <div className="mb-5">
                                <label for="price" className="block mb-2 text-sm font-medium text-navy">Price</label>
                                <input type="number" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" placeholder="Please type here ..." required />
                            </div>
                        </div>
                        <div className="text-left w-full">
                            <div className="mb-5">
                                <label for="location" className="block mb-2 text-sm font-medium text-navy">Location</label>
                                <input type="text" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" placeholder="Please type here ..." required />
                            </div>
                            <div className="mb-5">
                                <label for="duration" className="block mb-2 text-sm font-medium text-navy">Duration</label>
                                <input type="number" id="duration" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" placeholder="Please type here ..." required />
                            </div>
                            <div className="mb-5">
                                <label for="thumbnail" className="block mb-2 text-sm font-medium text-navy">Thumbnail</label>
                                <input type="file" id="thumbnail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg cursor-pointer focus:ring-primary focus:border-primary block w-full p-2.5" placeholder="Please type here ..." aria-describedby="thumbnail" />
                            </div>
                        </div>
                    </form>
                    <div className="grid items-center justify-center gap-4 mt-48">
                        <Button onClick={handleSubmit} title={"Submit"} style={"text-sm bg-primary border-primary text-white hover:border-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"}/>
                        <Button onClick={handleCancel} title={"Cancel"} style={"text-sm bg-pureGray hover:bg-pink border-pureGray hover:border-pink text-navy hover:text-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"}/>
                    </div>
                </div>
            </div>
        </section>
        </>
    
    )
}

export default AddDestination