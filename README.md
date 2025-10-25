# User Profiles Management

A modern React application for managing user profiles with localStorage persistence. Built with React, Tailwind CSS, and Vite.

## Features

- ✅ **User Management**: Add, edit, and delete user profiles
- ✅ **Search & Filter**: Real-time search by name, email, or role
- ✅ **Responsive Design**: Mobile-first design with Tailwind CSS
- ✅ **Data Persistence**: localStorage integration for data storage
- ✅ **Loading States**: Smooth loading indicators and error handling
- ✅ **Confirmation Dialogs**: Safe deletion with confirmation popups
- ✅ **Modern UI**: Clean, professional interface with hover effects

## Tech Stack

- **React 18** - Functional components with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **localStorage** - Client-side data persistence

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd user-profiles-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Header with search functionality
│   ├── UserList.jsx            # Grid display of users
│   ├── UserCard.jsx            # Individual user card component
│   ├── AddEditUserModal.jsx    # Modal for adding/editing users
│   ├── DeleteConfirmationModal.jsx # Confirmation dialog
│   ├── LoadingSpinner.jsx      # Loading state component
│   └── ErrorMessage.jsx        # Error state component
├── App.jsx                     # Main application component
├── main.jsx                    # Application entry point
└── index.css                   # Global styles and Tailwind imports
```

## Key Features Explained

### 1. Data Management
- Uses `useState` for local state management
- localStorage for data persistence across browser sessions
- Automatic data loading on application startup

### 2. Search Functionality
- Real-time search across name, email, and role fields
- Case-insensitive matching
- Instant results without API calls

### 3. Responsive Design
- Mobile-first approach with Tailwind CSS
- Grid layout that adapts to screen size
- Touch-friendly interface elements

### 4. User Experience
- Loading states during data operations
- Error handling with retry options
- Confirmation dialogs for destructive actions
- Form validation with real-time feedback

## Component Architecture

### App.jsx
- Main application state management
- localStorage integration
- Modal state handling
- CRUD operations

### Header.jsx
- Search input with clear functionality
- Add user button
- Responsive layout

### UserList.jsx
- Grid display of user cards
- Empty state handling
- Results count display

### UserCard.jsx
- Individual user display
- Action buttons (edit/delete)
- Role-based styling
- Hover effects

### AddEditUserModal.jsx
- Form for adding/editing users
- Input validation
- Avatar preview
- Loading states

## Customization

### Styling
The application uses Tailwind CSS with custom configuration in `tailwind.config.js`. You can customize:
- Color scheme
- Typography
- Spacing
- Component styles

### Data Structure
User objects follow this structure:
```javascript
{
  id: number,
  name: string,
  email: string,
  role: 'User' | 'Manager' | 'Admin',
  avatar: string (URL)
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Style

- Functional components with hooks
- Consistent naming conventions
- Clean, readable code with comments
- Responsive design patterns


