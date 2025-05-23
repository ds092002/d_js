const Student = require('../model/StudentModel');

exports.addStudents = async (req, res) => {
    try {
        console.log("Body ==>", req.body)
        const { name, age, email, course } = req.body;
        
        if (!name || !age || !email || !course) {
            return res.status(400).json({
                status: 400,
                message: "All field are required",
                data: {}
            });
        }

        const existingStudent = await Student.findOne({ email, isDelete: false });
        if (existingStudent) {
            return res.status(400).json({
                status: 400,
                message: 'Student already exists',
                data: {}
            });
        }

        const newStudent = await Student.create({
            name,
            age,
            email,
            course
        });
        return res.status(201).json({
            status: 201,
            message: 'Student added successfully',
            data: newStudent
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 500,
            message: 'Internal server error',
            data: {}
        });
    }
};


exports.getSinglestudent = async (req, res) => {
  try {
    const student = await Student.findOne({ _id: req.params.id, isDelete: false });
    if (!student) {
      return res.status(404).json({
        status: 404,
        message: "Student not found",
        data: {},
      });
    }

    return res.status(200).json({
      status: 200,
      message: "Student fetched successfully",
      data: student,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
      data: {},
    });
  }
};


exports.getAllStudent = async (req, res) => {
    try {
        const students = await Student.find({isDelete: false});
        if(students.length === 0){
            return res.status(404).json({
                status: 404,
                message: 'No students found',
                data: {}
            });
        }
        return res.status(200).json({
            status: 200,
            message: 'All students',
            data: students
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 500,
            message: 'Internal server error',
            data: {}
        });
    }
};

exports.updatestudents = async (req, res) => {
    try {
        const studentId = req.params.id;
        let student = await Student.findById(studentId);
        if (!student || student.isDelete) {
            return res.status(404).json({
                status: 404,
                message: "Student not found",
                data: {}
            });
        }

        if (req.body.email) {
            delete req.body.email;
        }

        const updatedStudent = await Student.findByIdAndUpdate(
            studentId,
            { $set: req.body },
            { new: true }
        );

        return res.status(200).json({
            status: 200,
            message: 'Student updated successfully',
            data: updatedStudent
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 500,
            message: 'Internal server error',
            data: {}
        });
    }
};



exports.deletestudents = async (req, res) => {
  try {
    const studentId = req.params.id;

    const student = await Student.findById(studentId);

    if (!student || student.isDelete) {
      return res.status(404).json({
        status: 404,
        message: 'Student not found',
        data: {},
      });
    }

    const deletestudent = await Student.findByIdAndUpdate(
      studentId,
      {
        $set: { isDelete: true },
      },
      { new: true }
    );

    return res.status(200).json({
      status: 200,
      message: 'Student deleted successfully',
      data: deletestudent,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      data: {},
    });
  }
};
