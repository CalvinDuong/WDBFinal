import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5173/login', { username, password });
            console.log(response.data);
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <button type="submit">Log in</button>
        </form>
    );
}

export default LoginPage;