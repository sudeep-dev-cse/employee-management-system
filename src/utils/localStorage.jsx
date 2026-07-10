const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@1.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: true,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create UI design for the new landing page.",
        taskDate: "2026-06-25",
        category: "Design"
      },
      {
        active: false,
        newTask: true,
        completed: true,
        failed: false,
        taskTitle: "Logo Update",
        taskDescription: "Redesign company logo.",
        taskDate: "2026-06-20",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Banner Design",
        taskDescription: "Create promotional banner.",
        taskDate: "2026-06-18",
        category: "Marketing"
      }
    ]
  },

  {
    id: 2,
    name: "Priya Verma",
    email: "priya@1.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop Login API",
        taskDescription: "Create authentication endpoints.",
        taskDate: "2026-06-25",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database Optimization",
        taskDescription: "Improve query performance.",
        taskDate: "2026-06-27",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixes",
        taskDescription: "Resolve reported issues.",
        taskDate: "2026-06-21",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Integration",
        taskDescription: "Integrate payment gateway.",
        taskDate: "2026-06-19",
        category: "Backend"
      }
    ]
  },

  {
    id: 3,
    name: "Amit Singh",
    email: "amit@1.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Test Cases",
        taskDescription: "Create unit test cases.",
        taskDate: "2026-06-24",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Regression Testing",
        taskDescription: "Perform regression testing.",
        taskDate: "2026-06-22",
        category: "QA"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Automation Script",
        taskDescription: "Create Selenium scripts.",
        taskDate: "2026-06-28",
        category: "Automation"
      }
    ]
  },
    {
    id: 4,
    name: "Sneha Patel",
    email: "sneha@1.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Content Writing",
        taskDescription: "Write blog content.",
        taskDate: "2026-06-26",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SEO Audit",
        taskDescription: "Audit website SEO.",
        taskDate: "2026-06-20",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Campaign Report",
        taskDescription: "Prepare campaign analytics report.",
        taskDate: "2026-06-18",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Social Media Plan",
        taskDescription: "Plan monthly social media posts.",
        taskDate: "2026-06-29",
        category: "Marketing"
      }
    ]
  },

  {
    id: 5,
    name: "Karan Gupta",
    email: "kara@1.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "React Dashboard",
        taskDescription: "Build employee dashboard UI.",
        taskDate: "2026-06-25",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Tailwind Styling",
        taskDescription: "Improve dashboard styling.",
        taskDate: "2026-06-26",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Navbar Component",
        taskDescription: "Create reusable navbar.",
        taskDate: "2026-06-21",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Dark Mode",
        taskDescription: "Implement dark mode feature.",
        taskDate: "2026-06-17",
        category: "Frontend"
      }
    ]
  }
];

const admin = [
  {
    id: 100,
    name: "Admin",
    email: "admin@me.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};


