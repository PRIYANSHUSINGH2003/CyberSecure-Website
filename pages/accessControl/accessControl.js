import { useState } from 'react';
import { z } from 'zod';
import { create } from 'zustand';
import { FaUser, FaEnvelope, FaUserShield, FaPlus } from 'react-icons/fa';
import { MdAdminPanelSettings, MdOutlineEditNote, MdOutlineVisibility } from 'react-icons/md';

// Schema for input validation
const userSchema = z.object({
    name: z.string().min(1, "Name is required").max(50, "Name too long"),
    email: z.string().email("Invalid email format"),
    role: z.enum(["Admin", "Editor", "Viewer"], "Invalid role"),
});

// Zustand store for managing global state
const useUserStore = create((set) => ({
    users: [],
    addUser: (user) =>
        set((state) => ({
            users: [...state.users, user],
        })),
}));

export default function AccessControl() {
    const [formData, setFormData] = useState({ name: '', email: '', role: 'Viewer' });
    const [errors, setErrors] = useState({});
    const { users, addUser } = useUserStore();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const validatedData = userSchema.parse(formData);
            addUser(validatedData);
            setFormData({ name: '', email: '', role: 'Viewer' });
            setErrors({});
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = error.errors.reduce((acc, curr) => {
                    acc[curr.path[0]] = curr.message;
                    return acc;
                }, {});
                setErrors(fieldErrors);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-8 space-y-12">
            <h1 className="text-5xl font-extrabold text-center pt-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 animate-pulse">
                User Access Control Manager
            </h1>
            <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-xl mx-auto max-w-lg transition-all transform hover:scale-105 hover:shadow-2xl"
            >
                <div className="flex items-center space-x-2">
                    <FaUser className="text-blue-400" />
                    <label className="text-gray-300 font-medium">Name</label>
                </div>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                <div className="flex items-center space-x-2">
                    <FaEnvelope className="text-green-400" />
                    <label className="text-gray-300 font-medium">Email</label>
                </div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                    className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                <div className="flex items-center space-x-2">
                    <FaUserShield className="text-purple-400" />
                    <label className="text-gray-300 font-medium">Role</label>
                </div>
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="Viewer">Viewer</option>
                </select>
                {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded text-white flex items-center justify-center space-x-2 transform transition-transform hover:scale-110 hover:from-blue-600 hover:to-purple-700"
                >
                    <FaPlus className="text-xl" />
                    <span>Add User</span>
                </button>
            </form>

            <div className="mt-12">
                <h2 className="text-3xl font-bold text-center mb-6 text-gradient bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                    User List
                </h2>
                {users.length > 0 ? (
                    <ul className="space-y-4 max-w-2xl mx-auto">
                        {users.map((user, idx) => (
                            <li
                                key={idx}
                                className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-between transform transition-transform hover:scale-105 hover:shadow-xl"
                            >
                                <div>
                                    <p className="font-semibold text-lg">{user.name}</p>
                                    <p className="text-sm text-gray-400">{user.email}</p>
                                    <p className="text-sm text-gray-500 flex items-center space-x-2">
                                        {user.role === "Admin" && <MdAdminPanelSettings className="text-red-500" />}
                                        {user.role === "Editor" && <MdOutlineEditNote className="text-yellow-500" />}
                                        {user.role === "Viewer" && <MdOutlineVisibility className="text-green-500" />}
                                        <span>{user.role}</span>
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-400 text-center">No users added yet.</p>
                )}
            </div>
        </div>
    );
}
