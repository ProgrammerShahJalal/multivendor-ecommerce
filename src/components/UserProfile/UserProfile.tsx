import React from 'react'
import UseAuth from '../../hooks/UseAuth';

export default function UserProfile() {
  const { user, logout } = UseAuth();
    return (
      <div>
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
<div className="min-h-screen flex flex-row bg-gray-100">
  <div className="flex flex-col w-56 bg-white overflow-hidden">
    <ul className="flex flex-col py-4">
      <li>
        <a href="/profile" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
          <span className="text-sm font-medium">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="/profile" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
          <span className="text-sm font-medium">Shopping</span>
        </a>
      </li>
      <li>
        <a href="/profile" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
          <span className="text-sm font-medium">Chat</span>
        </a>
      </li>
      <li>
        <a href="/profile" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
          <span className="text-sm font-medium">Profile</span>
        </a>
      </li>
      <li>
        <a href="/profile" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
          <span className="text-sm font-medium">Notifications</span>
          <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
        </a>
      </li>
      <li>
        <a href="/login" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
          <button onClick={logout}>Logout</button>
        </a>
      </li>
      
    </ul>
  </div>
</div>
      </div>
    )
  }
