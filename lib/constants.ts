export const portfolioData = {
  name: 'Shriballabh Bhatt',
  role: 'Full-Stack Software Engineer',
  email: 'shriballabhbhatt1234@gmail.com',
  phone: '+91 72480 78992',
  location: 'Bengaluru, India',

  social: [
    {
      name: 'GitHub',
      url: 'https://github.com/valli0321',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shriballabh-bhatt-2462571b1',
      icon: 'linkedin',
    },
    {
      name: 'Email',
      url: 'mailto:shriballabhbhatt1234@gmail.com',
      icon: 'mail',
    },
  ],

  hero: {
    title: 'Full-Stack Developer',
    description:
      'I craft beautiful, performant web experiences using modern technologies. Specialized in React, Node.js, and cloud architecture.',
    cta1: 'View My Projects',
    cta2: 'Download Resume',
  },

  about: {
    title: 'About Me',
    intro:
      'I\'m a passionate full-stack developer with 1+ years of experience building scalable web applications. I love turning complex problems into simple, elegant solutions.',
    content: [
      'Started my journey with web development during my college years, building small projects and learning from the developer community.',
      'Specialized in full-stack development with a focus on frontend technologies. I enjoy creating beautiful UIs that are also highly functional and accessible.',
      'Currently focused on building enterprise-level applications with React, Node.js, and cloud technologies.',
      // 'When not coding, you can find me contributing to open source, writing technical articles, or exploring new technologies.',
    ],
    skills_overview: 'Proficient in modern JavaScript/TypeScript, React ecosystem, backend development, and cloud deployment.',
  },

  skills: {
    title: 'Skills & Expertise',
    categories: [
      {
        name: 'Frontend',
        skills: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux',],
      },
      {
        name: 'Backend',
        skills: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'API Design',],
      },
      // {
      //   name: 'DevOps & Cloud',
      //   skills: ['Docker', 'AWS', 'GitHub Actions', 'Linux'],
      // },
      {
        name: 'Tools & Databases',
        skills: ['Git', 'MySQL', 'MongoDB', 'Firebase', 'Webpack'],
      },
    ],
  },

  projects: [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management and payment processing.',
      image: '/project1.png',
      category: 'Full-Stack',
      tech: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'Sequelize', 'MySQL', 'Razorpay', 'Tailwind CSS'],
      features: ['Real-time inventory', 'Payment processing', 'Admin dashboard', 'Analytics'],
      github: 'https://github.com/valli0321/ecommerce-project',
      live: 'https://example.com',
    },
    {
      id: 2,
      title: 'Expense Tracker',
      description: 'Track income and expenses, categorize transactions, and monitor spending easily in one place.',
      image: 'project2.png',
      category: 'Full-Stack',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      features: ['Real-time updates', 'Custom dashboards', 'Data export', 'Team collaboration'],
      github: 'https://github.com/valli0321/expense-tracker',
      live: 'https://example.com',
    },
  ],

  experience: [
    {
      id: 1,
      company: 'Aeonx Digital Technology Pvt. Ltd.',
      position: 'Trainee - Web Developer',
      duration: 'May 2024 - Sept 2025',
      description: 'Built and maintained inventory monitoring workflows.',
      achievements: [
        'Developed real-time monitoring dashboard for inventory and production tracking reducing manual tracking by 40%',
        'Integrated REST APIs to streamline backend data flow and improve response times',
        'Implemented WebSockets for live production updates and instant system visibility',
      ],
    },
    {
      id: 2,
      company: 'Codeji Infotech Pvt. Ltd.',
      position: 'Software Engineer Intern',
      duration: 'Oct 2023 - Apr 2024',
      description: 'Full-stack development internship focused on building scalable MERN applications.',
      achievements: [
        'Developed responsive interfaces using React.js, HTML5, CSS3, JavaScript, and Bootstrap',
        'Built and integrated REST APIs with MongoDB and Node.js for seamless data flow',
        'Created React SPAs using Hooks and Context API, improving performance and scalability',
      ],
    },
  ],

  education: [
    {
      id: 1,
      school: 'Govind Ballabh Pant Institute of Engineering & Technology',
      degree: 'Bachelor of Science in Computer Science',
      duration: 'Aug 2019 - June 2023',
      achievements: [
        // 'GPA: 3.8/4.0',
        // 'Scholarship recipient',
        // 'President of Computer Science Club',
        // 'Published research on web optimization',
      ],
    },
  ],

  certifications: [
    {
      id: 1,
      title: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: '2025',
      credentialUrl: "https://aws.amazon.com/verification",
      credentialId: "10d42eaa7adb4d9aaa8630c23b465917",
    },
  ],

  awards: [
    // {
    //   id: 1,
    //   title: 'Developer of the Year',
    //   organization: 'Tech Innovators Inc.',
    //   year: 2023,
    // },
    // {
    //   id: 2,
    //   title: 'Innovation Award',
    //   organization: 'Annual Tech Summit',
    //   year: 2023,
    // },
  ],

  testimonials: [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Product Manager at Tech Corp',
      content:
        'Alex delivered our project ahead of schedule with exceptional code quality. A true professional and great team player.',
      image: '/testimonial-1.jpg',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      title: 'Founder of Startup Hub',
      content:
        'Working with Alex was a game-changer for our startup. His technical expertise and problem-solving skills are unmatched.',
      image: '/testimonial-2.jpg',
    },
    {
      id: 3,
      name: 'Emma Williams',
      title: 'CTO at Digital Solutions',
      content:
        'Alex consistently delivers high-quality work. His mentoring has helped our team grow significantly. Highly recommended!',
      image: '/testimonial-3.jpg',
    },
  ],

  blogs: [
    {
      id: 1,
      title: 'Building Scalable React Applications',
      description: 'Learn best practices for building large-scale React applications with proper architecture.',
      date: '2024-01-15',
      readTime: '8 min read',
      url: 'https://medium.com/@alexjohnson',
    },
    {
      id: 2,
      title: 'Modern DevOps with Docker and Kubernetes',
      description: 'A comprehensive guide to containerization and orchestration for modern applications.',
      date: '2024-01-10',
      readTime: '12 min read',
      url: 'https://medium.com/@alexjohnson',
    },
    {
      id: 3,
      title: 'TypeScript Tips and Tricks',
      description: 'Advanced TypeScript techniques to write safer, more maintainable code.',
      date: '2024-01-05',
      readTime: '6 min read',
      url: 'https://medium.com/@alexjohnson',
    },
  ],
}

export const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]
