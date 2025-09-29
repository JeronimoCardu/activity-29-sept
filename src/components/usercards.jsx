import React from 'react';

function UserCard({ name, email, age, isOnline }) {
    const statusClass = isOnline ? 'online' : 'offline';
    const statusText = isOnline ? 'En línea' : 'Desconectado';
    return (
    <div className="user-card">
        <div className="user-header">
            <h3>{name}</h3>
            <span className={statusClass} title={statusText}>●</span>
        </div>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Edad:</strong> {age} años</p>
    </div>
    );
}

export default UserCard;


