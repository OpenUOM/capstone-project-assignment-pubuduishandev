//Database connection 
const dbConnection = require("./sqlite");

dbConnection
  .getDbConnection()
  .then((db) => {
    init(db);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

let _db;

function init(db) {
    _db = db;
}

//Database configuration
const knex_db = require("./db-config");

//Database initialization
const dbinitialize = async () => {
    testBase.resetDatabase(knex_db);
}

// ============== Teacher Related endpoints ==============

//Get all teachers list from the database
const readTeachers = async () => {
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

//Retrieve selected teacher information
const readTeacherInfo = async (id) => {
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

//Add new teacher to the database
const addTeacher = async (id, name, age) => {
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

//Update existing teacher information
const updateTeacher = async (name, age, id) => {
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

//Delete exixting teacher from the database
const deleteTeacher = async (id) => {
    const sql = `SELECT * FROM dummyData`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}


// ============== Student Related endpoints ==============

//Get all students list from the database
//Backend task01 - Update the readStudents function to read all student data.
const readStudents = async () => {
    const sql = `SELECT * FROM student`               
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

// Retrieve selected student information by ID
//Backend task02 - Update the readStudentInfo function to read the information of a specified student.
const readStudentInfo = async (id) => {
    const sql = `SELECT * FROM student WHERE id = ?`;
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])  // Use parameterized query to prevent SQL injection
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

//Add new student to the database
//Backend task03 - Update the addStudent function to add a student.
const addStudent = async (id, name, age, hometown) => {
    const sql = `INSERT INTO student(id, name, age, hometown) values (?, ?, ?, ?)`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id, name, age, hometown])
            .then((data) => {
                resolve({status: "Successfully inserted Student"});
            })
            .catch((error) => {
                reject(error);
            });
    });
}

//Update existing student information
//Backend task04 - Update the updateStudent function to update details of a specific student.
const updateStudent = async (name, age, hometown, id) => {
    const sql = `UPDATE student SET name=?, age=?, hometown=? WHERE id=?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [name, age, hometown, id])
            .then((data) => {
                resolve({status: "Successfully updated Student"});
            })
            .catch((error) => {
                reject(error);
            });
    });
} 

//Delete exixting student from the database
//Backend task05 - Update the deleteStudent function to delete a specified student.
const deleteStudent = async (id) => {
    const sql = `DELETE FROM student WHERE id=?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then(() => {
                resolve({status: "Successfully deleted Student"});
            })
            .catch((error) => {
                reject(error);
            });
    });
}

module.exports = {
    readTeachers,
    readStudents,
    addStudent,
    addTeacher,
    deleteTeacher,
    deleteStudent,
    readStudentInfo,
    readTeacherInfo,
    updateStudent,
    updateTeacher
};
