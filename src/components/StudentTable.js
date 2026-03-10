import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function StudentTable({ students, deleteStudent, editStudent }) {

  const exportExcel = () => {

    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });

    const data = new Blob([excelBuffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });

    saveAs(data, "students.xlsx");
  };

  return (

    <div>

      <button className="download-btn" onClick={exportExcel}>Download Excel</button>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {students.map((s) => (

            <tr key={s.id}>

              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.age}</td>

              <td>

                <button onClick={() => editStudent(s)}>
                  Edit
                </button>

                <button onClick={() => deleteStudent(s.id)}>
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default StudentTable;