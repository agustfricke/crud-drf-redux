import React from "react";

export default function Navbar () {
    return (
        <nav className="flex items-center justify-between px-4 py-6 bg-gray-800">
            <div>
                <a href="" 
                    className="text-xl font-mono font-semibold text-white">CRUD DRF REDUX</a>
            </div>

            <div className="felx pr-11 items-center space-x-4">

                <a href="/"
                    className="px-5 py-3 text-gray-900 font-mono font-semibold rounded-lg bg-gray-300">
                    HOME
                </a>

                <a href="/create/" 
                    className="px-5 py-3 text-gray-900 font-mono font-semibold rounded-lg bg-gray-300">
                    CREATE
                </a>
            
            </div>
        </nav>
    )
}
