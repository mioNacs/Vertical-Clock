import React from 'react'

function Vbar({number, value = 0}) {
    const numbers = Array.from({ length: number }, (_, i) => i);
    const currentIndex = value; 
    const itemHeight = 50; // Fixed height for each number item
    const paddingY = 20; // p-5 is 20px

    return (
        <div className="relative h-80 w-24 flex justify-center">
            {/* Circular lens overlay */}
            <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10"
                    style={{
                        boxShadow: '0 0 15px rgba(255,255,255,0.1), inset 0 0 20px rgba(255,255,255,0.05)'
                    }}
                />
            </div>
            
            {/* Sliding Container */}
            <div
                className="absolute w-16 flex flex-col items-center bg-[#2a2a2a] shadow-2xl rounded-2xl transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] p-5"
                style={{
                    top: '50%',
                    transform: `translateY(calc(-${paddingY + currentIndex * itemHeight + itemHeight / 2}px))`,
                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)"
                }}
            >
                {numbers.map((num, index) => (
                    <div 
                        key={num} 
                        className={`flex items-center justify-center w-full transition-all duration-300 ${
                            index === currentIndex 
                                ? 'text-4xl font-black text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]' 
                                : 'text-xl font-medium text-gray-600'
                        }`}
                        style={{ height: `${itemHeight}px` }}
                    >
                        {num}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Vbar
