const express = require('express');
const studentRoutes = express.Router();
const {
     addStudents,
    getSinglestudent,
    getAllStudent,
    updatestudents,
    deletestudents
} = require('../controllers/studentController');
const checkAdmin = require('../middleware/checkRole');
const { verifyToken } = require('../middleware/token');

// studentRoutes.use(verifyToken);

studentRoutes.post('/add',verifyToken,checkAdmin,addStudents);  
studentRoutes.get('/students',verifyToken, checkAdmin,getAllStudent);
studentRoutes.get('/student/:id',verifyToken, checkAdmin,getSinglestudent);
studentRoutes.put('/update/:id',verifyToken, checkAdmin,updatestudents);
studentRoutes.delete('/delete/:id',verifyToken, checkAdmin,deletestudents);

module.exports = studentRoutes;