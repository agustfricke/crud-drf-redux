import React from "react";

export default function Navbar () {
    return (
        <nav className="flex items-center justify-between px-4 py-6 bg-[#171C2D]">
            <div>
                <a href="" 
                    className="text-xl font-mono font-semibold text-white">CRUD DRF REDUX</a>
            </div>

            <div className="felx pr-11 items-center space-x-4">

                <a href="/home"
                    className="px-5 py-3 text-[#171c2d] font-mono font-semibold rounded-lg bg-[#f9982f]">
                    HOME
                </a>

                <a href="/create" 
                    className="px-5 py-3 text-[#171c2d] font-mono font-semibold rounded-lg bg-[#f9982f]">
                    CREATE
                </a>
            
            </div>
        </nav>
    )
}
