import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const StudentEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [originalStudent, setOriginalStudent] = useState({});
    const [editStudent, setEditStudent] = useState({
        name: "",
        email: "",
        age: "",
        course: ""
    });

    const [validationErrors, setValidationErrors] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await axios.get(`http://localhost:7001/api/student/student/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const data = res.data;

                setEditStudent({
                    name: data.name || "",
                    email: data.email || "",
                    age: data.age?.toString() || "",
                    course: data.course || ""
                });

                setOriginalStudent({
                    name: data.name || "",
                    email: data.email || "",
                    age: data.age?.toString() || "",
                    course: data.course || ""
                });

            } catch (err) {
                console.error("Error fetching student:", err);
                setError("Failed to fetch student data.");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchStudent();
        } else {
            setError("Student ID is missing.");
            setLoading(false);
        }
    }, [id, token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditStudent((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const onUpdateStudent = async (e) => {
        e.preventDefault();

        const updatedFields = {};
        const errors = {};

        for (let key in editStudent) {
            if (editStudent[key] !== originalStudent[key]) {
                if (!editStudent[key].trim()) {
                    errors[key] = `Please enter ${key}.`;
                } else {
                    updatedFields[key] = editStudent[key];
                }
            }
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        if (Object.keys(updatedFields).length === 0) {
            alert("No changes detected.");
            return;
        }

        try {
            await axios.put(`http://localhost:7001/api/student/update/${id}`, updatedFields, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            alert("Student updated successfully!");
            navigate("/students");
        } catch (err) {
            console.error("Error updating student:", err);
            alert("Failed to update student.");
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-semibold mb-4 text-gray-800">
                    Edit Student Information
                </h1>
                <form onSubmit={onUpdateStudent}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Student Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={editStudent.name}
                            onChange={handleChange}
                            placeholder="Student Name"
                            className="mt-1 block w-full p-2 rounded-lg border border-gray-300 shadow-sm"
                        />
                        {validationErrors.name && (
                            <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Student Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={editStudent.email}
                            readOnly
                            className="mt-1 block w-full p-2 rounded-lg border border-gray-300 shadow-sm bg-gray-100 text-gray-500 cursor-not-allowed"
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="mb-4 w-1/2">
                            <label className="block text-sm font-medium text-gray-700">
                                Age
                            </label>
                            <input
                                type="text"
                                name="age"
                                value={editStudent.age}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 rounded-lg border border-gray-300 shadow-sm"
                            />
                            {validationErrors.age && (
                                <p className="text-red-500 text-sm mt-1">{validationErrors.age}</p>
                            )}
                        </div>

                        <div className="mb-4 w-1/2">
                            <label className="block text-sm font-medium text-gray-700">
                                Course
                            </label>
                            <input
                                type="text"
                                name="course"
                                value={editStudent.course}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 rounded-lg border border-gray-300 shadow-sm"
                            />
                            {validationErrors.course && (
                                <p className="text-red-500 text-sm mt-1">{validationErrors.course}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StudentEdit;                                                                      