import React, { useState } from 'react';

export const AnimatedTooltip = ({ items }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {/* Tooltip */}
          <div
            className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg transition-all duration-300 ease-out whitespace-nowrap z-20 ${
              hoveredItem === item.id
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible translate-y-2'
            }`}
          >
            {item.designation}
            {/* Arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
          </div>

          {/* Icon Container */}
          <div className="relative p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-110 hover:-translate-y-2 border border-gray-100 group-hover:border-blue-200">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            
            {/* Icon */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.designation}
                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:rotate-12"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/40x40/4F46E5/FFFFFF?text=${item.designation.charAt(0)}`;
                }}
              />
            </div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="absolute inset-0.5 rounded-xl bg-white -z-10"></div>
          </div>
        </div>
      ))}
    </div>
  );
};