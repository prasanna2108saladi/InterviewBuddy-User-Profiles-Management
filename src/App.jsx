import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import UserList from './components/UserList'
import AddEditUserModal from './components/AddEditUserModal'
import DeleteConfirmationModal from './components/DeleteConfirmationModal'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'

// Sample initial data
const initialUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'User',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    role: 'Manager',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  }
]

function App() {
  // State management
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [userToDelete, setUserToDelete] = useState(null)

  // Load users from localStorage on component mount
  useEffect(() => {
    loadUsers()
  }, [])

  // Filter users based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredUsers(users)
    } else {
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredUsers(filtered)
    }
  }, [searchTerm, users])

  // Load users from localStorage
  const loadUsers = () => {
    setLoading(true)
    setError(null)
    
    try {
      const savedUsers = localStorage.getItem('userProfiles')
      if (savedUsers) {
        const parsedUsers = JSON.parse(savedUsers)
        setUsers(parsedUsers)
      } else {
        // Initialize with sample data if no data exists
        setUsers(initialUsers)
        localStorage.setItem('userProfiles', JSON.stringify(initialUsers))
      }
    } catch (err) {
      setError('Failed to load users from storage')
      console.error('Error loading users:', err)
    } finally {
      setLoading(false)
    }
  }

  // Save users to localStorage
  const saveUsers = (updatedUsers) => {
    try {
      localStorage.setItem('userProfiles', JSON.stringify(updatedUsers))
      setUsers(updatedUsers)
    } catch (err) {
      setError('Failed to save users to storage')
      console.error('Error saving users:', err)
    }
  }

  // Add new user
  const handleAddUser = (userData) => {
    setLoading(true)
    setError(null)
    
    try {
      const newUser = {
        ...userData,
        id: Date.now(), // Simple ID generation
        avatar: userData.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      }
      
      const updatedUsers = [...users, newUser]
      saveUsers(updatedUsers)
      setShowModal(false)
    } catch (err) {
      setError('Failed to add user')
      console.error('Error adding user:', err)
    } finally {
      setLoading(false)
    }
  }

  // Edit existing user
  const handleEditUser = (userData) => {
    setLoading(true)
    setError(null)
    
    try {
      const updatedUsers = users.map(user =>
        user.id === editingUser.id ? { ...user, ...userData } : user
      )
      saveUsers(updatedUsers)
      setShowModal(false)
      setEditingUser(null)
    } catch (err) {
      setError('Failed to update user')
      console.error('Error updating user:', err)
    } finally {
      setLoading(false)
    }
  }

  // Delete user
  const handleDeleteUser = () => {
    setLoading(true)
    setError(null)
    
    try {
      const updatedUsers = users.filter(user => user.id !== userToDelete.id)
      saveUsers(updatedUsers)
      setShowDeleteModal(false)
      setUserToDelete(null)
    } catch (err) {
      setError('Failed to delete user')
      console.error('Error deleting user:', err)
    } finally {
      setLoading(false)
    }
  }

  // Open modal for adding new user
  const openAddModal = () => {
    setEditingUser(null)
    setShowModal(true)
  }

  // Open modal for editing user
  const openEditModal = (user) => {
    setEditingUser(user)
    setShowModal(true)
  }

  // Open delete confirmation modal
  const openDeleteModal = (user) => {
    setUserToDelete(user)
    setShowDeleteModal(true)
  }

  // Close modals
  const closeModal = () => {
    setShowModal(false)
    setEditingUser(null)
  }

  const closeDeleteModal = () => {
    setShowDeleteModal(false)
    setUserToDelete(null)
  }

  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onAddUser={openAddModal}
        onSearch={handleSearch}
        searchTerm={searchTerm}
      />
      
      <main className="container mx-auto px-6 py-12">
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} onRetry={loadUsers} />}
        
        {!loading && !error && (
          <UserList
            users={filteredUsers}
            onEditUser={openEditModal}
            onDeleteUser={openDeleteModal}
          />
        )}
      </main>

      {/* Add/Edit User Modal */}
      {showModal && (
        <AddEditUserModal
          user={editingUser}
          onSave={editingUser ? handleEditUser : handleAddUser}
          onClose={closeModal}
          loading={loading}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && userToDelete && (
        <DeleteConfirmationModal
          user={userToDelete}
          onConfirm={handleDeleteUser}
          onCancel={closeDeleteModal}
          loading={loading}
        />
      )}
    </div>
  )
}

export default App
