# ReactJS + Tailwind CSS To-Do Application Build Guide

## 1. Project Goal

Build a clean, responsive, beginner-friendly **To-Do Application** using **ReactJS**, **Vite**, and **Tailwind CSS**.

The app will allow users to:

- Add new tasks
- Mark tasks as completed
- Edit existing tasks
- Delete tasks
- Filter tasks by status
- Clear all completed tasks
- Save tasks in browser `localStorage`
- View total, completed, and pending task counts

---

## 2. Tech Stack

| Tool | Purpose |
| ---- | ------- |
| ReactJS | Build the interactive user interface using components and state |
| Vite | Create and run the React project quickly |
| Tailwind CSS | Style the application using utility classes |
| JavaScript | Application logic |
| localStorage | Save tasks in the browser after page refresh |

---

## 3. Prerequisites

Before building the app, install:

- Node.js
- npm
- Code editor such as VS Code
- Modern browser such as Chrome, Edge, or Firefox

Check your Node and npm versions:

```bash
node -v
npm -v
```

---

## 4. Create the React Project

Create a new React project using Vite:

```bash
npm create vite@latest todo-app -- --template react
```

Move into the project folder:

```bash
cd todo-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

---

## 5. Install Tailwind CSS

Install Tailwind CSS and the Tailwind Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## 6. Configure Vite for Tailwind CSS

Open `vite.config.js` and replace the content with:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

---

## 7. Add Tailwind to CSS

Open `src/index.css` and replace everything with:

```css
@import "tailwindcss";

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: #f8fafc;
}
```

---

## 8. Recommended Folder Structure

Use this structure:

```text
todo-app/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   ├── TodoItem.jsx
│   │   ├── TodoFilters.jsx
│   │   └── TodoStats.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

Create the components folder:

```bash
mkdir src/components
```

---

## 9. Build the App Component

Open `src/App.jsx` and replace the content with:

```jsx
import { useEffect, useMemo, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import TodoFilters from './components/TodoFilters'
import TodoStats from './components/TodoStats'

const STORAGE_KEY = 'react-tailwind-todos'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(STORAGE_KEY)
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const addTodo = (title) => {
    const trimmedTitle = title.trim()

    if (!trimmedTitle) return

    const newTodo = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      completed: false,
      createdAt: new Date().toISOString(),
    }

    setTodos((currentTodos) => [newTodo, ...currentTodos])
  }

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const editTodo = (id, updatedTitle) => {
    const trimmedTitle = updatedTitle.trim()

    if (!trimmedTitle) return

    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, title: trimmedTitle } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))
  }

  const clearCompletedTodos = () => {
    setTodos((currentTodos) => currentTodos.filter((todo) => !todo.completed))
  }

  const filteredTodos = useMemo(() => {
    if (filter === 'active') {
      return todos.filter((todo) => !todo.completed)
    }

    if (filter === 'completed') {
      return todos.filter((todo) => todo.completed)
    }

    return todos
  }, [todos, filter])

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <section className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
            React + Tailwind CSS
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            To-Do Application
          </h1>
          <p className="mt-3 text-slate-600">
            Organize tasks, track progress, and keep your list saved in the browser.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-xl shadow-slate-200 sm:p-8">
          <TodoForm onAddTodo={addTodo} />

          <TodoStats todos={todos} />

          <TodoFilters
            currentFilter={filter}
            onChangeFilter={setFilter}
            onClearCompleted={clearCompletedTodos}
            hasCompletedTodos={todos.some((todo) => todo.completed)}
          />

          <div className="mt-6 space-y-3">
            {filteredTodos.length > 0 ? (
              filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggleTodo={toggleTodo}
                  onEditTodo={editTodo}
                  onDeleteTodo={deleteTodo}
                />
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center">
                <p className="text-lg font-semibold text-slate-700">No tasks found</p>
                <p className="mt-1 text-sm text-slate-500">
                  Add a new task or switch to another filter.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
```

---

## 10. Create the Todo Form Component

Create `src/components/TodoForm.jsx`:

```jsx
import { useState } from 'react'

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onAddTodo(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Add a new task..."
        className="min-h-12 flex-1 rounded-2xl border border-slate-300 px-4 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
      />

      <button
        type="submit"
        className="min-h-12 rounded-2xl bg-indigo-600 px-6 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
      >
        Add Task
      </button>
    </form>
  )
}

export default TodoForm
```

---

## 11. Create the Todo Item Component

Create `src/components/TodoItem.jsx`:

```jsx
import { useState } from 'react'

function TodoItem({ todo, onToggleTodo, onEditTodo, onDeleteTodo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(todo.title)

  const handleSave = () => {
    onEditTodo(todo.id, editedTitle)
    setIsEditing(false)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSave()
    }

    if (event.key === 'Escape') {
      setEditedTitle(todo.title)
      setIsEditing(false)
    }
  }

  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
          className="h-5 w-5 rounded border-slate-300 accent-indigo-600"
          aria-label={`Mark ${todo.title} as completed`}
        />

        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(event) => setEditedTitle(event.target.value)}
            onKeyDown={handleKeyDown}
            className="min-h-10 flex-1 rounded-xl border border-slate-300 px-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            autoFocus
          />
        ) : (
          <p
            className={`flex-1 text-base font-medium ${
              todo.completed ? 'text-slate-400 line-through' : 'text-slate-800'
            }`}
          >
            {todo.title}
          </p>
        )}
      </div>

      <div className="flex gap-2 sm:justify-end">
        {isEditing ? (
          <button
            type="button"
            onClick={handleSave}
            className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Save
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-300"
          >
            Edit
          </button>
        )}

        <button
          type="button"
          onClick={() => onDeleteTodo(todo.id)}
          className="rounded-xl bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-200"
        >
          Delete
        </button>
      </div>
    </article>
  )
}

export default TodoItem
```

---

## 12. Create the Todo Filters Component

Create `src/components/TodoFilters.jsx`:

```jsx
const filters = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
]

function TodoFilters({
  currentFilter,
  onChangeFilter,
  onClearCompleted,
  hasCompletedTodos,
}) {
  return (
    <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex rounded-2xl bg-slate-100 p-1">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => onChangeFilter(filter.value)}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              currentFilter === filter.value
                ? 'bg-white text-indigo-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onClearCompleted}
        disabled={!hasCompletedTodos}
        className="rounded-xl px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:text-slate-400 disabled:hover:bg-transparent"
      >
        Clear Completed
      </button>
    </div>
  )
}

export default TodoFilters
```

---

## 13. Create the Todo Stats Component

Create `src/components/TodoStats.jsx`:

```jsx
function TodoStats({ todos }) {
  const totalTasks = todos.length
  const completedTasks = todos.filter((todo) => todo.completed).length
  const activeTasks = totalTasks - completedTasks

  const stats = [
    { label: 'Total', value: totalTasks },
    { label: 'Active', value: activeTasks },
    { label: 'Completed', value: completedTasks },
  ]

  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl bg-slate-100 p-4 text-center">
          <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
          <p className="text-sm font-medium text-slate-500">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

export default TodoStats
```

---

## 14. Check the Entry File

Open `src/main.jsx` and make sure it looks like this:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

---

## 15. Run the Application

Start the development server:

```bash
npm run dev
```

Test the following actions:

- Add a task
- Complete a task
- Edit a task
- Delete a task
- Filter by active tasks
- Filter by completed tasks
- Clear completed tasks
- Refresh the browser and confirm tasks remain saved

---

## 16. Expected User Flow

1. User opens the app.
2. User types a task in the input box.
3. User clicks **Add Task**.
4. Task appears at the top of the list.
5. User can mark it complete using the checkbox.
6. User can edit or delete the task.
7. User can switch between **All**, **Active**, and **Completed** filters.
8. User can clear all completed tasks.
9. Tasks remain available after page refresh because they are stored in `localStorage`.

---

## 17. Common Errors and Fixes

| Problem | Possible Cause | Fix |
| ------- | -------------- | --- |
| Tailwind classes are not working | Tailwind plugin not added to Vite config | Check `vite.config.js` |
| Blank screen | Import path error | Check component file names and imports |
| App does not start | Dependencies not installed | Run `npm install` |
| `localStorage` data looks broken | Invalid old saved data | Clear browser localStorage and refresh |
| Button click does nothing | Function not passed as prop | Check parent-to-child props |

---

## 18. Optional Improvements

After completing the main app, you can improve it with:

- Dark mode
- Due dates
- Priority labels
- Drag-and-drop sorting
- Search bar
- Task categories
- Toast notifications
- Backend database
- User login
- Unit tests

---

## 19. Mini Learning Checklist

After building this app, you should understand:

- How to create a React project with Vite
- How to install and configure Tailwind CSS
- How to create reusable components
- How to use `useState`
- How to use `useEffect`
- How to pass props between components
- How to render lists using `.map()`
- How to filter arrays
- How to update state immutably
- How to save and read data from `localStorage`

---

## 20. Final Project Summary

You have built a complete ReactJS and Tailwind CSS To-Do Application with:

- Component-based architecture
- Responsive UI
- Add, edit, delete, and complete features
- Task filters
- Task statistics
- Browser persistence using `localStorage`

This is a strong beginner-to-intermediate React project and can be added to a portfolio after styling polish and deployment.

---

## 21. Official References

- React documentation: https://react.dev/
- React guide for building an app from scratch: https://react.dev/learn/build-a-react-app-from-scratch
- Vite documentation: https://vite.dev/guide/
- Tailwind CSS Vite installation: https://tailwindcss.com/docs/installation/using-vite
