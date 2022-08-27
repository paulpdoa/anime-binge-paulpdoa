import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AnimeContextProvider } from './context/AnimeContext'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    // used context to pass a state globally so I will not need to pass props from top to bottom
    <AnimeContextProvider>
        <App />
    </AnimeContextProvider>
)
