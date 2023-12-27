import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Users } from './contexts/UsersContext';
import { Clubs } from './contexts/ClubsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Clubs>
        <Users>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Users>
    </Clubs>
);