import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const StudentForm = () => {

    const [student, setStudent] = useState({
        name: "",
        age: "",
        email: "",
        course: "",
    });

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
          const token = localStorage.getItem("token");

            const response = await axios.post(
                "http://localhost:7001/api/student/add",
                student, {
                  
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                }
            );
            console.log("Student added successfully", response);
            navigate("/students");
            resetData();
        }catch (error) {
        if (error.response) {
            alert(error.response.data.message);
        } else {
            console.error("Unexpected Error:", error);
        }
    }
    }

    const resetData = () => {
        setStudent({
            name : "",
            email : "",
            age : "",
            course : ""
        });
    }

    const handleChange = (e) => {
        const { name, value} = e.target;
        setStudent((prevData) => ({
            ...prevData,
            [name] : value
        }));
    }
  return (
    <div>
        <div className="flex items-center justify-center min-h-screen ">
  <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
    <h1 className="text-2xl font-semibold mb-4 text-gray-800">
      Enter Student Information
    </h1>
    <form action="#" method="POST" onSubmit={onSubmit}>

      <div className="mb-4">
        <label
          htmlFor="student-name"
          className="block text-sm font-medium text-gray-700"
        >
          Student Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
          className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          required=""
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="Student Email"
          className="block text-sm font-medium text-gray-700"
        >
          Student Email 
        </label>
        <input
          type="email"
          name="email"
          placeholder="demo@gmail.com"
          value={student.email}
          onChange={handleChange}
          className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          required=""
          maxLength={19}
        />
      </div>
      <div className="flex gap-4">
        <div className="mb-4 w-1/2">
          <label
            htmlFor="Student Age"
            className="block text-sm font-medium text-gray-700"
          >
            Age
          </label>
          <input
            type="text"
            name="age"
            placeholder="Student Age"
            value={student.age}
            onChange={handleChange}
            className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            required=""
          />
        </div>
        <div className="mb-4 w-1/2">
          <label
            htmlFor="Course"
            className="block text-sm font-medium text-gray-700"
          >
            Course
          </label>
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={student.course}
            onChange={handleChange}
            className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            required=""
          />
        </div>
      </div>
      {/* Submit Button */}
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
    </div>
  )
}

export default StudentForm