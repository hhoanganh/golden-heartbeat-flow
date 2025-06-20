// src/data/eventsData.ts

export const allEvents = [
  {
    id: 1,
    title: "Weekend Blood Drive - District 3",
    date: "Dec 28, 2024",
    time: "8:00 AM - 5:00 PM",
    location: "Tao Dan Park, District 3",
    address: "123 Nguyen Du Street, District 3, Ho Chi Minh City",
    description: "Join us for our weekend blood drive at beautiful Tao Dan Park. Professional medical staff will be on-site to ensure a safe and comfortable donation experience.",
    image: "https://images.unsplash.com/photo-1652149590094-98093f08509f?q=80&w=1170&auto=format&fit=crop",
    urgentNeeds: ["O-", "AB+"],
    capacity: 150,
    registered: 150, // Updated to 150 for demonstration of full registration
    type: "drive" // Keep type property for consistency, though not displayed
  },
  {
    id: 2,
    title: "New Year Hope Campaign",
    date: "Jan 2, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Nguyen Hue Walking Street",
    address: "Nguyen Hue Walking Street, District 1, Ho Chi Minh City",
    description: "Start the new year by giving the gift of life. Our New Year Hope Campaign aims to collect 200 units to help patients in need during the holiday season.",
    image: "https://images.unsplash.com/photo-1642697552227-ca21f326fe41?q=80&w=1562&auto=format&fit=crop",
    urgentNeeds: ["A+", "O+"],
    capacity: 200,
    registered: 156,
    type: "campaign"
  },
  {
    id: 3,
    title: "University Blood Drive - HCMUS",
    date: "Jan 5, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Ho Chi Minh City University of Science",
    address: "227 Nguyen Van Cu Street, District 5, Ho Chi Minh City",
    description: "Student-organized blood drive focusing on first-time donors. Educational sessions about blood donation will be available throughout the day.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1170&auto=format&fit=crop",
    urgentNeeds: ["B+", "AB-"],
    capacity: 100,
    registered: 45,
    type: "drive"
  },
  {
    id: 4,
    title: "Corporate Partnership Drive",
    date: "Jan 8, 2025",
    time: "8:00 AM - 3:00 PM",
    location: "Landmark 81 Tower",
    address: "720A Dien Bien Phu Street, Binh Thanh District, Ho Chi Minh City",
    description: "Special corporate event partnering with major companies in the financial district. Easy access and convenient scheduling for busy professionals.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1170&auto=format&fit=crop",
    urgentNeeds: ["O-", "A-"],
    capacity: 120,
    registered: 89,
    type: "corporate"
  },
  {
    id: 5,
    title: "Community Health Fair",
    date: "Jan 12, 2025",
    time: "7:00 AM - 6:00 PM",
    location: "District 7 Cultural Center",
    address: "456 Nguyen Thi Thap Street, District 7, Ho Chi Minh City",
    description: "Combined health fair and blood drive offering free health screenings, wellness education, and blood donation opportunities for the whole family.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1170&auto=format&fit=crop",
    urgentNeeds: ["B-", "AB+"],
    capacity: 180,
    registered: 134,
    type: "health-fair"
  },
  {
    id: 6,
    title: "Emergency Response Drive",
    date: "Jan 15, 2025",
    time: "6:00 AM - 8:00 PM",
    location: "Cho Ray Hospital",
    address: "201B Nguyen Chi Thanh Street, District 5, Ho Chi Minh City",
    description: "Urgent blood collection drive in response to increased hospital demand. All blood types needed, with special focus on rare types.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1170&auto=format&fit=crop",
    urgentNeeds: ["O-", "AB-", "B-"],
    capacity: 250,
    registered: 198,
    type: "emergency"
  }
];