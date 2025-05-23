import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';


const StudentList = () => {
  const [list, setList] = useState([]);
  const [searchStudent, setSearchStudent] = useState('');
  const navigate = useNavigate();

  // ✅ Fetch student list on component mount
  useEffect(() => {
    fetchStudentList();
  }, []);

  const fetchStudentList = () => {
    const token = localStorage.getItem('token'); // or sessionStorage if you stored it there

    axiosInstance.get('http://localhost:7001/api/student/students', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("Student list response:", response.data);
        setList(response.data.data || []);
      })
      .catch((error) => {
        console.log("Error fetching student list:", error);
        alert(error.response?.data?.message || "Failed to fetch students");
      });
  };

  const handleDelete = async (studentId) => {
    const token = localStorage.getItem('token');

    try {
      await axiosInstance.delete(`http://localhost:7001/api/student/delete/${studentId}`);
      setList((prevList) => prevList.filter((student) => student._id !== studentId));
      alert("Student deleted successfully");
    } catch (error) {
      console.error("Error deleting student:", error);
      alert(error.response?.data?.message || "Failed to delete student");
    }
  };


  const filterList = list.filter((student) =>
    student.name.toLowerCase().includes(searchStudent.toLowerCase())||
    student.email.toLowerCase().includes(searchStudent.toLowerCase())||
    student.course.toLowerCase().includes(searchStudent.toLowerCase())||
    student.age.toString().includes(searchStudent.toLowerCase())
  );

  return (
    <div className='p-4'>
      <div className='mb-4 relative text-gray-600'>
        <input
          type="text"
          placeholder='Search student'
          value={searchStudent}
          onChange={(e) => setSearchStudent(e.target.value)}
          className="block w-80 h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          🔍
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Age</th>
              <th className="p-4 text-left">Course</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filterList.length > 0 ? (
              filterList.map((student) => (
                <tr key={student._id} className='hover:bg-gray-50 transition-all'>
                  <td className="p-4">{student._id}</td>
                  <td className="p-4">{student.name}</td>
                  <td className="p-4">{student.email}</td>
                  <td className="p-4">{student.age}</td>
                  <td className="p-4">{student.course}</td>
                  <td className="p-4">
                    <div className='flex gap-2'>
                      <button
                        className="text-blue-600"
                        onClick={() => navigate(`/edit/${student._id}`)}>
                        Edit
                      </button>
                      <button
                        className="text-red-600"
                        onClick={() => handleDelete(student._id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className='p-4 text-center text-gray-600'>
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
