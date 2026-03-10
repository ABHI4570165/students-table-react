# 🎓 Students Table – React Frontend Assignment

A modern **React.js frontend application** that manages student data with full **CRUD operations** using local state and browser storage.
The project includes validation, simulated loading, and Excel export functionality.

This project was built as part of a **Full Stack Assignment (Frontend Mandatory, Backend Optional)**.

---

# 🚀 Live Demo

Deployed Project:
https://your-vercel-link.vercel.app

---

# 📂 GitHub Repository

https://github.com/yourusername/students-table

---

# 🛠️ Tech Stack

* React.js
* JavaScript (ES6)
* CSS (Neon Dark UI)
* XLSX (Excel export)
* File Saver

---

# ✨ Features

### Student Management

* View student list in table format
* Columns: **Name, Email, Age, Actions**

### CRUD Operations

* **Create** new student
* **Read** student list
* **Update** existing student (pre-filled form)
* **Delete** student with confirmation dialog

### Form Validation

* All fields mandatory
* Valid email format required

### UI Features

* Neon Dark themed professional UI
* Responsive layout
* Hover effects
* Clean dashboard design

### Loading Simulation

* Simulated loading state when the application starts

### Excel Export

* Download all student data as an **Excel file**

### Data Persistence

* Data stored using **browser localStorage**
* Data remains after page refresh

---

# 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/yourusername/students-table.git
```

Navigate to the project folder:

```bash
cd students-table
```

Install dependencies:

```bash
npm install
```

Install required libraries:

```bash
npm install xlsx file-saver
```

Start the development server:

```bash
npm start
```

The application will run on:

```
http://localhost:3000
```

---

# 📁 Project Structure

```
students-table
│
├── src
│   ├── components
│   │   ├── StudentForm.js
│   │   └── StudentTable.js
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
└── README.md
```

---

# ⚙️ How the Application Works

The application works **entirely on the frontend**.

Student data is stored in:

```
localStorage
```

This allows:

* Data persistence across refresh
* No backend required
* Fast CRUD operations using React state

---

# 📊 Excel Download

The project uses:

* **xlsx** → to convert JSON data to Excel
* **file-saver** → to download the file

Users can export the entire student table as:

```
students.xlsx
```

---

# 🌐 Deployment

The project can be deployed using **Vercel or Netlify**.

### Deploy using Vercel

1. Push the project to GitHub
2. Go to https://vercel.com
3. Import the GitHub repository
4. Click **Deploy**

Vercel will automatically build and host the React app.

---

# 📌 Assignment Requirements Covered

| Requirement       | Status |
| ----------------- | ------ |
| Student Table     | ✅      |
| Add Student       | ✅      |
| Edit Student      | ✅      |
| Delete Student    | ✅      |
| Form Validation   | ✅      |
| Simulated Loading | ✅      |
| Excel Download    | ✅      |
| Frontend Only     | ✅      |
| Deployment        | ✅      |

---

# ⭐ Optional Backend (Bonus)

The assignment also suggested an optional backend using:

* NestJS
* PostgreSQL

This implementation focuses only on the **mandatory frontend requirement**.

---

# 👨‍💻 Author

**Abhishek Y S**

Tech Stack:

* Java Full Stack
* React
* HTML
* CSS
* JavaScript
* SQL
* Spring Boot

---

# 📜 License

This project is created for **educational and assignment purposes**.
