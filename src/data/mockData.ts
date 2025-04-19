// Mock data for the EduPulse application

// Student data
export const studentData = {
  id: 's1',
  name: 'Emma Johnson',
  grade: '4th Grade',
  className: 'Ms. Wilson\'s Class',
  image: 'https://images.pexels.com/photos/3662847/pexels-photo-3662847.jpeg?auto=compress&cs=tinysrgb&w=150',
  attendance: {
    today: true,
    thisWeek: [true, true, true, false, true],
    thisMonth: 0.95
  }
};

// Class data
export const classData = {
  id: 'c1',
  name: '4th Grade - Room 112',
  teacher: 'Ms. Wilson',
  students: [
    { id: 's1', name: 'Emma Johnson', present: true },
    { id: 's2', name: 'Michael Brown', present: true },
    { id: 's3', name: 'Sophia Davis', present: false },
    { id: 's4', name: 'Jacob Miller', present: true },
    { id: 's5', name: 'Olivia Wilson', present: true },
    { id: 's6', name: 'William Moore', present: true },
    { id: 's7', name: 'Ava Taylor', present: true },
    { id: 's8', name: 'James Anderson', present: true },
    { id: 's9', name: 'Isabella Thomas', present: true },
    { id: 's10', name: 'Logan Jackson', present: false },
    { id: 's11', name: 'Charlotte White', present: true },
    { id: 's12', name: 'Benjamin Harris', present: true },
    { id: 's13', name: 'Mia Martin', present: true },
    { id: 's14', name: 'Mason Thompson', present: true },
    { id: 's15', name: 'Amelia Garcia', present: true },
  ]
};

// Homework data
export const homeworkData = [
  {
    id: 'h1',
    title: 'Math: Fractions Practice',
    description: 'Complete worksheet pages 12-14 on equivalent fractions.',
    subject: 'Mathematics',
    dueDate: '2025-06-15',
    assignedDate: '2025-06-10',
    hasAttachment: true,
    isNew: true,
    attachment: 'fractions_worksheet.pdf'
  },
  {
    id: 'h2',
    title: 'Reading: Book Report',
    description: 'Read chapters 5-7 and write a one-page summary of the key events.',
    subject: 'English',
    dueDate: '2025-06-18',
    assignedDate: '2025-06-11',
    hasAttachment: false,
    isNew: true
  },
  {
    id: 'h3',
    title: 'Science: Plant Life Cycles',
    description: 'Draw and label the life cycle of a flowering plant.',
    subject: 'Science',
    dueDate: '2025-06-17',
    assignedDate: '2025-06-09',
    hasAttachment: true,
    isNew: false,
    attachment: 'plant_lifecycle_example.jpg'
  },
  {
    id: 'h4',
    title: 'History: Local Community',
    description: 'Research and write 3 interesting facts about our city\'s history.',
    subject: 'Social Studies',
    dueDate: '2025-06-16',
    assignedDate: '2025-06-08',
    hasAttachment: false,
    isNew: false
  },
  {
    id: 'h5',
    title: 'Art: Self Portrait',
    description: 'Create a self-portrait using the techniques we learned in class.',
    subject: 'Art',
    dueDate: '2025-06-20',
    assignedDate: '2025-06-10',
    hasAttachment: true,
    isNew: false,
    attachment: 'self_portrait_instructions.pdf'
  }
];

// Gallery photos
export const galleryData = [
  {
    id: 'g1',
    title: 'Science Fair',
    date: '2025-05-20',
    images: [
      {
        id: 'img1',
        url: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Emma presenting her volcano project'
      },
      {
        id: 'img2',
        url: 'https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Group science projects'
      },
      {
        id: 'img3',
        url: 'https://images.pexels.com/photos/8535214/pexels-photo-8535214.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Award ceremony'
      }
    ]
  },
  {
    id: 'g2',
    title: 'Field Trip to Museum',
    date: '2025-05-15',
    images: [
      {
        id: 'img4',
        url: 'https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Class outside the museum'
      },
      {
        id: 'img5',
        url: 'https://images.pexels.com/photos/3076514/pexels-photo-3076514.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Interactive exhibits'
      }
    ]
  },
  {
    id: 'g3',
    title: 'Sports Day',
    date: '2025-05-10',
    images: [
      {
        id: 'img6',
        url: 'https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Relay race'
      },
      {
        id: 'img7',
        url: 'https://images.pexels.com/photos/8363151/pexels-photo-8363151.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Long jump competition'
      },
      {
        id: 'img8',
        url: 'https://images.pexels.com/photos/8612929/pexels-photo-8612929.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Team games'
      },
      {
        id: 'img9',
        url: 'https://images.pexels.com/photos/8363149/pexels-photo-8363149.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Award ceremony'
      }
    ]
  },
  {
    id: 'g4',
    title: 'Art Class Projects',
    date: '2025-05-05',
    images: [
      {
        id: 'img10',
        url: 'https://images.pexels.com/photos/159579/crayons-coloring-book-coloring-book-159579.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Painting session'
      },
      {
        id: 'img11',
        url: 'https://images.pexels.com/photos/8612889/pexels-photo-8612889.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Clay modeling'
      }
    ]
  }
];

// Announcements data
export const announcementsData = [
  {
    id: 'a1',
    title: 'Parent-Teacher Conferences',
    content: 'Parent-teacher conferences will be held next week on Thursday (June 20) and Friday (June 21). Please sign up for a time slot using the link sent to your email.',
    date: '2025-06-10',
    isPriority: true,
    author: 'Principal Roberts'
  },
  {
    id: 'a2',
    title: 'School Picnic - Save the Date!',
    content: 'Our annual school picnic will be held on Saturday, June 25th from 11am to 3pm at Riverside Park. All families are welcome to join for food, games, and fun!',
    date: '2025-06-08',
    isPriority: false,
    author: 'Events Committee'
  },
  {
    id: 'a3',
    title: 'Summer Reading Program',
    content: 'Registration for the summer reading program is now open. Students who participate can earn prizes and certificates based on the number of books they read over the summer break.',
    date: '2025-06-07',
    isPriority: false,
    author: 'Ms. Lewis, Librarian'
  },
  {
    id: 'a4',
    title: 'End of Year Testing Schedule',
    content: 'Final assessments will be conducted during the week of June 15-19. Please ensure your child gets plenty of rest and arrives at school on time.',
    date: '2025-06-05',
    isPriority: true,
    author: 'Ms. Wilson, 4th Grade Teacher'
  },
  {
    id: 'a5',
    title: 'Book Fair Next Week',
    content: 'Our spring book fair will be held in the school library from June 13-17. Students will visit during their regular library periods. Parents are welcome to shop before or after school.',
    date: '2025-06-04',
    isPriority: false,
    author: 'Ms. Lewis, Librarian'
  }
];

// Weekly summary data
export const weeklySummaryData = {
  attendance: {
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: false,
    friday: true
  },
  behaviorNote: 'Emma had a great week! She participated actively in class discussions and completed all her assignments on time. She was particularly helpful with new students in class.',
  homeworkCompleted: 4,
  totalHomework: 5,
  highlights: [
    'Scored 92% on math test',
    'Excellent presentation on ocean conservation',
    'Selected for reading competition'
  ]
};