import React from 'react'
import UserCard from './UserCard'

const UserList = ({ users, onEditUser, onDeleteUser }) => {
  if (users.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="mx-auto w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mb-8 shadow-lg">
          <svg 
            className="w-16 h-16 text-primary-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" 
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">No users found</h3>
        <p className="text-gray-600 text-lg max-w-md mx-auto">
          {users.length === 0 ? 'Get started by adding your first team member.' : 'Try adjusting your search terms to find what you\'re looking for.'}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Results count */}
      <div className="flex items-center justify-between bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div>
          <p className="text-lg font-semibold text-gray-900">
            {users.length} User{users.length !== 1 ? 's' : ''} Found
          </p>
          <p className="text-gray-600 text-sm mt-1">
            {users.length > 0 ? 'Manage your team members below' : 'No users match your search criteria'}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <span className="text-sm text-gray-600">All Active</span>
        </div>
      </div>

      {/* User Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={() => onEditUser(user)}
            onDelete={() => onDeleteUser(user)}
          />
        ))}
      </div>
    </div>
  )
}

export default UserList
