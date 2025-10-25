import React from 'react'

const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-sm text-gray-600">{message}</p>
    </div>
  )
}

export default LoadingSpinner

