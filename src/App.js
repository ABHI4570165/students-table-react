import React, { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import "./App.css";

function App() {

  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem("students")) || [];
      setStudents(data);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((s) =>
        s.id === updatedStudent.id ? updatedStudent : s
      )
    );
    setEditingStudent(null);
  };

  const deleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  const editStudent = (student) => {
    setEditingStudent(student);
  };

  if (loading) return <h2>Loading Students...</h2>;

  return (
    <div className="container">

      <h1>Students Management</h1>

      <StudentForm
        addStudent={addStudent}
        editingStudent={editingStudent}
        updateStudent={updateStudent}
      />

      <StudentTable
        students={students}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      />

    </div>
  );
}

export default App;