import React from 'react'

function CardState({ name ,icon ,value ,color}) {
  return (
     <div className="bg-surface rounded-xl p-4 border border-border shadow-custom flex flex-col justify-between hover:-translate-y-1 cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-start mb-4">
        <span className="text-sm font-bold text-text-secondary uppercase tracking-wider">{name}</span>
        <span className="text-xs font-bold text-success flex items-center px-2 py-1 rounded-md">
            +12.5% <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
        </span>
        </div>
        <div className="flex items-center gap-4">
        <div className={`w-12 h-12 p-2 rounded-full ${color} flex items-center justify-center`}>
            {icon}
        </div>
        <span className="text-2xl font-bold text-text">{value}</span>
        </div>
    </div>
  )
}

export default CardState