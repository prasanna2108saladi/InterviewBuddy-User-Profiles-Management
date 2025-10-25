import React from 'react'

const Header = ({ onAddUser, onSearch, searchTerm }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Title and Add Button */}
          <div className="flex items-center justify-between lg:justify-start gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">User Profiles</h1>
              <p className="text-gray-600 text-base mt-2">Manage your team members efficiently</p>
            </div>
            
            <button
              onClick={onAddUser}
              className="btn-primary flex items-center gap-3 whitespace-nowrap px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 4v16m8-8H4" 
                />
              </svg>
              Add User
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg 
                className="h-5 w-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search users by name, email, or role..."
              value={searchTerm}
              onChange={(e) => onSearch(e.target.value)}
              className="input-field pl-12 pr-12 py-3 text-base border-2 focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
            />
            {searchTerm && (
              <button
                onClick={() => onSearch('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
