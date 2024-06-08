import React from "react";
import './ScrapingPage.css';

export default function ScrapingPage() {
    return (
        <div className="pt-20 text-black scraping-page-background h-full">
            {/* <p className="mx-5 text-2xl">Scraping Page</p> */}
            <div className="ml-36 flex flex-col gap-8 mt-20 font-bold text-xl">
                <div className="grid grid-cols-4"><p>Website</p><p>Description</p><div className="flex justify-center"><button className="bg-gray-600 w-36 rounded-lg">Start</button></div><button>Results</button></div>
                <div className="grid grid-cols-4"><p>Tugo</p><p>Description</p><div className="flex justify-center"><button className="bg-gray-600 w-36 rounded-lg">Start</button></div><button>Results</button></div>
                <div className="grid grid-cols-4"><p>Aristas</p><p>Description</p><div className="flex justify-center"><button className="bg-gray-600 w-36 rounded-lg">Start</button></div><button>Results</button></div>
                <div className="grid grid-cols-4"><p>Jamar</p><p>Description</p><div className="flex justify-center"><button className="bg-gray-600 w-36 rounded-lg">Start</button></div><button>Results</button></div>
                <div className="grid grid-cols-4"><p>Spring</p><p>Description</p><div className="flex justify-center"><button className="bg-gray-600 w-36 rounded-lg">Start</button></div><button>Results</button></div>
                <div className="grid grid-cols-4"><p>Homecenter</p><p>Description</p><div className="flex justify-center"><button className="bg-gray-600 w-36 rounded-lg">Start</button></div><button>Results</button></div>
            </div>
        </div>
    );
}