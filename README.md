📋 Employee Management System
A modern React-based Employee Management System that supports role-based login (Admin & Employee), local storage authentication, and a clean, responsive dashboard interface for managing and viewing employee data.

🚀 Features
✅ Role-Based Login

Admin: Login with static credentials.

Employees: Login using dynamic credentials stored in local storage.

👥 User Roles

Admin Dashboard: Access to the full list of employees, add/edit functionalities, etc.

Employee Dashboard: Personalized view showing user info.

💾 LocalStorage Authentication

Stores session info persistently.

Auto-loads logged-in users on page refresh.

🧠 React Context API

Global state management for user data.

⚡ Responsive UI

Built with Tailwind CSS for seamless mobile and desktop experience.

🛠️ Technologies Used
React.js (with functional components & hooks)

React Context API

Tailwind CSS for styling

LocalStorage API for authentication

📁 Project Structure
/src
├── components
│   ├── Auth
│   │   └── Login.jsx
│   ├── Dashboard
│   │   ├── AdminDashboard.jsx
│   │   └── EmployeeDashboard.jsx
│   └── Header.jsx
├── context
│   └── AuthProvider.jsx
├── utils
│   └── localstorage.js
├── App.jsx
└── index.js

🧑‍💻 Admin Credentials
Email: admin@me.com
Password: 123

📦 How to Run the Project
Clone the repo

git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system
Install dependencies

npm install

Start the development server 

💡 Future Improvements
Add employee registration flow.

Store employee data in a real backend (e.g., Firebase, Express.js).

Add JWT-based authentication for production usage.

Implement search, filtering, and sorting for admin panel.

🤝 Contribution
Feel free to fork this repo, improve functionality or UI, and open a pull request!

📄 License
This project is licensed under the MIT License.



