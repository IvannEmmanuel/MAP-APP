const locations = [
  {
    name: "Pharmacy Office",
    latitude: 8.485858,
    longitude: 124.639341,
    description:
      "Approximate time and distance from your current location. Click the 'LOCATE' button to start navigating.",
    fullDescription:
      "The Pharmacy Office provides essential medical supplies and prescriptions to the local community. Our experienced staff offers professional pharmaceutical services and guidance. We maintain a comprehensive inventory of medications and health-related products to meet your healthcare needs.",
    operatingHours:
      "Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 2:00 PM",
    contact: "(123) 456-7890",
    email: "pharmacy@example.com",
    image: require("../../Images/castle.jpg"),
    image2: require("../../Images/castle2.jpg"),
    image3: require("../../Images/castle3.jpg"),
    image4: require("../../Images/castle4.jpg"),
  },
  {
    name: "Next Moves Dance Company",
    latitude: 8.485452,
    longitude: 124.639237,
    description:
      "Approximate time and distance from your current location. Click the 'LOCATE' button to start navigating.",
    fullDescription:
      "Next Moves Dance Company is a premier dance studio offering various dance styles and classes for all ages and skill levels. Our professional instructors are dedicated to helping you achieve your dancing goals in a fun and supportive environment.",
    operatingHours: "Monday - Saturday: 9:00 AM - 8:00 PM",
    contact: "(123) 456-7891",
    email: "nextmoves@example.com",
    image: require("../../Images/castle.jpg"),
    image2: require("../../Images/castle2.jpg"),
    image3: require("../../Images/castle3.jpg"),
    image4: require("../../Images/castle4.jpg"),
  },
  {
    name: "Kabina",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Approximate time and distance from your current location. Click the 'LOCATE' button to start navigating.",
    fullDescription:
      "Kabina offers a unique dining experience with a blend of traditional and modern cuisine. Our restaurant features locally sourced ingredients and a carefully curated menu that changes seasonally. Enjoy the warm atmosphere and exceptional service.",
    operatingHours: "Daily: 11:00 AM - 10:00 PM",
    contact: "(123) 456-7892",
    email: "kabina@example.com",
    image: require("../../Images/castle.jpg"),
    image2: require("../../Images/castle2.jpg"),
    image3: require("../../Images/castle3.jpg"),
    image4: require("../../Images/castle4.jpg"),
  },
  {
    name: "Anatomy Laboratory",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED IN FRONT OF SAC 1ST FLOOR COMFORT ROOM, RIVERSIDE.",
    fullDescription:
      "The Anatomy Laboratory at Liceo de Cagayan University is a state-of-the-art facility designed to enhance the study and understanding of human anatomy. Equipped with advanced models, tools, and digital resources, it provides students with a hands-on learning experience essential for medical, nursing, and allied health programs.",
    image: require("../../Images/AnatomyLaboratory/Anatomy.jpg"),
    image2: require("../../Images/AnatomyLaboratory/Anatomy2.jpg"),
    image3: require("../../Images/AnatomyLaboratory/Anatomy3.jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Car Entrance",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED BESIDE RODELSA HALL AND WAC BUILDING, ACROSS BASKETBALL COURT FACING THE ROAD.",
    fullDescription:
      "The Car Entrance at Liceo de Cagayan University is the designated access point for vehicles entering the campus. Strategically located for convenience and safety, it ensures smooth traffic flow and efficient parking management. Security personnel are stationed to monitor and assist with entry, ensuring a secure environment for students, staff, and visitors.",
    image: require("../../Images/CarEntrance/car.jpg"),
    image2: require("../../Images/CarEntrance/car2.jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Electrical Lab 1 (Behind SAC Building)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED BEHIND SAC BUILDING, BELOW STAIRCASE.",
    fullDescription:
      "The Electrical Laboratory at Liceo de Cagayan University is a fully equipped facility designed to support hands-on learning in electrical engineering and technology. It provides students with the tools and resources to conduct experiments, design circuits, and develop practical skills in electrical systems and applications. The lab fosters innovation, critical thinking, and problem-solving, preparing students for real-world challenges in the field of electrical engineering.",
    image: require("../../Images/CollegeLectureRoom/Electrical Lab 1.jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Electrical Lab 2 (Behind SAC Building)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED BEHIND SAC BUILDING, BESIDE ANATOMY LABORATORY.",
    fullDescription:
      "The Electrical Laboratory at Liceo de Cagayan University is a fully equipped facility designed to support hands-on learning in electrical engineering and technology. It provides students with the tools and resources to conduct experiments, design circuits, and develop practical skills in electrical systems and applications. The lab fosters innovation, critical thinking, and problem-solving, preparing students for real-world challenges in the field of electrical engineering.",
    image: require("../../Images/CollegeLectureRoom/Electrical Lab 2.jpg"),
    image2:  require("../../Images/CollegeLectureRoom/Electrical Lab 2(2).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Electronics Lab 1 (Behind SAC Building)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED BEHIND SAC BUILDING, BESIDE ELECTRICAL LAB 1.",
    fullDescription:
      "The Electronics Laboratory at Liceo de Cagayan University is a cutting-edge facility dedicated to the study and application of electronic systems and devices. Equipped with advanced tools such as oscilloscopes, microcontrollers, and soldering stations, it enables students to design, build, and test electronic circuits and projects. The lab emphasizes hands-on experience, fostering creativity and technical expertise essential for careers in electronics, robotics, and related fields.",
    image: require("../../Images/CollegeLectureRoom/Electronics Lab 1.jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Electronics Lab 2 (Behind SAC Building)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED BEHIND SAC BUILDING, BESIDE ELECTRONICS LAB 1.",
    fullDescription:
      "The Electronics Laboratory at Liceo de Cagayan University is a cutting-edge facility dedicated to the study and application of electronic systems and devices. Equipped with advanced tools such as oscilloscopes, microcontrollers, and soldering stations, it enables students to design, build, and test electronic circuits and projects. The lab emphasizes hands-on experience, fostering creativity and technical expertise essential for careers in electronics, robotics, and related fields.",
    image: require("../../Images/CollegeLectureRoom/Electronics Lab 2.jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Engineering Lecture Room 1 & 2 (Behind SAC Building)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED BEHING SAC BUILDING, 2ND FLOOR ABOVE ELECTRICAL LAB 1.",
    fullDescription:
      "The Engineering Lecture Rooms 1 and 2 at Liceo de Cagayan University are modern, well-equipped spaces designed to enhance learning for engineering students. Each room features comfortable seating, multimedia presentation tools, and an acoustically optimized environment for effective lectures and discussions. These rooms provide an ideal setting for theoretical learning, collaborative activities, and professional development sessions.",
    image: require("../../Images/CollegeLectureRoom/Engineering Lecture Room 1 and 2.jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Equipment Survey Room (Behind SAC Building)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED BEHIND SAC BUILDING, BESIDE ELECTRONICS LAB 2.",
    fullDescription:
      "LOCATED BEHIND SAC BUILDING, BESIDE ELECTRONICS LAB 2.",
    image: require("../../Images/CollegeLectureRoom/Equipment Survey Room.jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Hydraulic Lab (Behind SAC Building)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED BEHIND SAC BUILDING, BESIDE EQUIPMENT SURVEY ROOM.",
    fullDescription:
      "The Hydraulics Laboratory at Liceo de Cagayan University is a dedicated space for studying fluid mechanics and hydraulic systems. Equipped with advanced apparatus such as flow meters, pumps, and pipe networks, it allows students to conduct experiments on fluid behavior, pressure dynamics, and energy transfer. The lab provides hands-on learning opportunities, bridging theoretical concepts with practical applications in civil and mechanical engineering.",
    image: require("../../Images/CollegeLectureRoom/Hydraulic Lab.jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Soil Laboratory (Behind SAC Building)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED BEHIND SAC BUILDING, BESIDE HYDRAULIC LAB.",
    fullDescription:
      "The Soil Laboratory at Liceo de Cagayan University is a specialized facility designed for the analysis and testing of soil properties. Equipped with tools for compaction, permeability, and shear strength testing, it enables students to evaluate soil characteristics critical for construction, agriculture, and environmental studies. The lab offers hands-on experience, enhancing understanding of geotechnical engineering and sustainable land management practices.",
    image: require("../../Images/CollegeLectureRoom/Soil Laboratory.jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "East Academic Cluster Building",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Building/East Academic Cluster (EAC Building).jpg"),
    image2: require("../../Images/East Academic Cluster/Building/East Academic Cluster (EAC Building)(1).jpg"),
    image3: require("../../Images/East Academic Cluster/Building/East Academic Cluster (EAC Building)(2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC 2nd FLoor Comfort Room",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/CR/EAC 2nd Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC 3rd FLoor Comfort Room",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/CR/EAC 3rd Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC 4th FLoor Comfort Room",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/CR/EAC 4th Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC 5th FLoor Comfort Room",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/CR/EAC 5th Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "East Academic Cluster (1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (1st Floor).jpg"),
    image2: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (1st Floor) (1).jpg"),
    image3: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (1st Floor) (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "East Academic Cluster (2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (2nd Floor).jpg"),
    image2: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (2nd Floor) (1).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "East Academic Cluster (3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (3rd Floor).jpg"),
    image2: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (3rd Floor) (1).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "East Academic Cluster (4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (4th Floor).jpg"),
    image2: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (4th Floor) (1).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "East Academic Cluster (5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (5th Floor).jpg"),
    image2: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (5th Floor) (1).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Academic Affairs Office (EAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Offices/Academic Affairs Office (EAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "College of Criminal Justice Office (EAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Offices/College of Criminal Justice Office (EAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "College of Law Office (EAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Offices/College of Law Office (EAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 502 Campus Ministry Office (EAC 5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Offices/EAC - 502 Campus Ministry Office (EAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 505 Robotics Laboratory (EAC 5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Offices/EAC - 505 Robotics Laboratory (EAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 506 STEM Department (EAC 5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Offices/EAC - 506 STEM Department (EAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 507 STEM Department (EAC 5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Offices/EAC - 507 STEM Department (EAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 508 English Department (EAC 5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Offices/EAC - 508 English Department (EAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Office of Cultural Affairs (EAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Offices/Office of Cultural Affairs (EAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Office of Extension and Service Learning (EAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Offices/Office of Extension and Service Learning (EAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Office of Student Affairs (EAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Offices/Office of Student Affairs (EAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 101 (EAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 101 (EAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 102 (EAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 102 (EAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
];

export default locations;
