

const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Create Landing Page",
        description: "Design and implement the company landing page.",
        category: "Design",
        date: "2025-08-01",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Fix responsive issues with the navbar.",
        category: "Bug Fix",
        date: "2025-07-30",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update Logo",
        description: "Replace the old logo on all pages.",
        category: "Design",
        date: "2025-08-02",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Set Up CI/CD",
        description: "Integrate CI/CD pipeline using GitHub Actions.",
        category: "DevOps",
        date: "2025-08-03",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Write API Docs",
        description: "Document all endpoints in the backend API.",
        category: "Documentation",
        date: "2025-07-29",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Dockerize Backend",
        description: "Containerize the backend server with Docker.",
        category: "Development",
        date: "2025-08-01",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix CORS Error",
        description: "Resolve CORS issue in the staging environment.",
        category: "Bug Fix",
        date: "2025-08-02",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Optimize Images",
        description: "Compress images for faster load speed.",
        category: "Performance",
        date: "2025-08-01",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "SEO Improvements",
        description: "Update meta tags and titles for all pages.",
        category: "Marketing",
        date: "2025-07-31",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Add Google Analytics",
        description: "Integrate Google Analytics with event tracking.",
        category: "Analytics",
        date: "2025-08-02",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Mobile Responsiveness",
        description: "Ensure app works smoothly on all devices.",
        category: "UI/UX",
        date: "2025-08-01",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Footer Layout",
        description: "Correct alignment issues in the footer.",
        category: "Bug Fix",
        date: "2025-07-30",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "User Settings Page",
        description: "Implement user profile and settings page.",
        category: "Development",
        date: "2025-08-03",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Failed Build Debug",
        description: "Diagnose failed CI build and resolve the issue.",
        category: "CI/CD",
        date: "2025-07-29",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Create Onboarding Guide",
        description: "Write onboarding documentation for new hires.",
        category: "HR",
        date: "2025-08-01",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Prepare Email Templates",
        description: "Design templates for automated emails.",
        category: "Marketing",
        date: "2025-08-02",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Clean Old Records",
        description: "Purge outdated entries from the database.",
        category: "Database",
        date: "2025-07-28",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];
export const setLocalStorage= ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admin',JSON.stringify(admin))

}
export const getLocalStorage= ()=>{
   const employees= JSON.parse(localStorage.getItem('employees'))
   const admin=JSON.parse(localStorage.getItem('admin'))
   return {employees,admin}

}





