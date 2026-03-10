import React, { useState, useEffect } from "react";

function StudentForm({ addStudent, editingStudent, updateStudent }) {

  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingStudent) {
      setStudent(editingStudent);
    }
  }, [editingStudent]);

  const validate = () => {

    let newErrors = {};

    if (!student.name) newErrors.name = "Name required";

    if (!student.email) {
      newErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(student.email)) {
      newErrors.email = "Invalid Email";
    }

    if (!student.age) newErrors.age = "Age required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (editingStudent) {
      updateStudent(student);
    } else {
      addStudent(student);
    }

    setStudent({ name: "", email: "", age: "" });
  };

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  return (

    <form onSubmit={handleSubmit} className="form">

      <input
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
      />
      <span>{errors.name}</span>

      <input
        name="email"
        placeholder="Email"
        value={student.email}
        onChange={handleChange}
      />
      <span>{errors.email}</span>

      <input
        name="age"
        placeholder="Age"
        type="number"
        value={student.age}
        onChange={handleChange}
      />
      <span>{errors.age}</span>

      <button type="submit">
        {editingStudent ? "Update Student" : "Add Student"}
      </button>

    </form>
  );
}

export default StudentForm;