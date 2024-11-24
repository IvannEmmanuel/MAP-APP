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
    image: require("../../Images/Botanical Garden/Botanical Garden.jpg"),
    image2: require("../../Images/Botanical Garden/Botanical Garden (1).jpg"),
    image3: require("../../Images/Botanical Garden/Botanical Garden (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Botanical Garden",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
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
  {
    name: "EAC - 103 (EAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 103 (EAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 201 (EAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 201 (EAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 202 (EAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 202 (EAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 203 (EAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 203 (EAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 301 (EAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 301 (EAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 302 (EAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 302 (EAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 303 (EAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 303 (EAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 304 (EAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 304 (EAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 305 (EAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 305 (EAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 306 (EAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 306 (EAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 307 (EAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 307 (EAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 308 (EAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 308 (EAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 401 (EAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 401 (EAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 402 (EAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 402 (EAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 403 (EAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 403 (EAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 404 (EAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 404 (EAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 405 (EAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 405 (EAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 406 (EAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 406 (EAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 407 (EAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 407 (EAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 408 (EAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 408 (EAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 501 (EAC 5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 501 (EAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 503 (EAC 5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 503 (EAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 504 (EAC 5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 504 (EAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "School Library (Rodelsa Grounds)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/Library/Building/School Library (Rodelsa Grounds).jpg"),
    image2: require("../../Images/Library/Building/School Library (Rodelsa Grounds) (1).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Audio Visual Room of Library (2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/Library/Rooms/Audio Visual Room of Library (2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "School Library (1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/Library/Rooms/School Library (1st Floor).jpg"),
    image2: require("../../Images/Library/Rooms/School Library (1st Floor) (1).jpg"),
    image3: require("../../Images/Library/Rooms/School Library (1st Floor) (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "School Library (2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "Wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/Library/Rooms/School Library (2nd Floor).jpg"),
    image2: require("../../Images/Library/Rooms/School Library (2nd Floor) (1).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Alumni Office (Hallway outside LCC)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED AT THE HALLWAY OUTSIDE THE LCC.",
    fullDescription:
      "The Alumni Office at Liceo de Cagayan University serves as the central hub for maintaining connections with graduates and supporting alumni engagement. The office organizes reunions, events, and networking opportunities, fostering a strong alumni community. It also offers resources for career development, including job placement assistance and professional mentorship programs. Through its services, the Alumni Office helps create lasting bonds between former students and the university, contributing to the growth and success of both the alumni and the institution.",
    image: require("../../Images/Liceo Civic Center/Alumni Office (Hallway outside LCC).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Book Center (Hallway outside LCC)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED AT THE HALLWAY OUTSIDE THE LCC.",
    fullDescription:
      "The Book Center at Liceo de Cagayan University provides students, faculty, and staff with a wide range of academic textbooks, reference materials, and school supplies. It serves as a convenient on-campus resource for purchasing required course materials, study guides, and educational tools. The center also offers stationery and other essential items for academic and personal use. By supporting the academic needs of the campus community, the Book Center plays a key role in enhancing the overall learning experience at the university.",
    image: require("../../Images/Liceo Civic Center/Book Center (Hallway outside LCC).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Criminology Martial Arts Hall (Hallway outside LCC)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED AT THE HALLWAY OUTSIDE THE LCC.",
    fullDescription:
      "The Criminology Martial Arts Hall at Liceo de Cagayan University is a specialized facility designed to train criminology students in self-defense, martial arts, and physical fitness. The hall is equipped with mats, training equipment, and safety gear to support practical learning in combat techniques, law enforcement tactics, and personal protection skills. It serves as a hands-on environment where students can develop physical discipline and gain practical skills relevant to their criminology studies and future careers in law enforcement and security.",
    image: require("../../Images/Liceo Civic Center/Criminology Martial Arts Hall (Hallway outside LCC).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Department of Military Science and Tactics ROTC (Outside LCC)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED OUTSIDE THE LCC BESIDE TRAINING CORPS HEADQUARTERS.",
    fullDescription:
      "The Department of Military Science and Tactics – Reserve Officers' Training Corps (ROTC) at Liceo de Cagayan University offers a comprehensive training program aimed at developing students' leadership, discipline, and military skills. The ROTC program prepares students for future service as officers in the Armed Forces of the Philippines (AFP) while promoting patriotism, civic responsibility, and national defense awareness. Through structured military drills, physical training, and leadership development, the department equips students with the knowledge and skills needed to serve their country and lead with integrity.",
    image: require("../../Images/Liceo Civic Center/Department of Military Science and Tactics Reserve Officers Training Corps (Outside LCC).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Hallway (Outside LCC)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/Liceo Civic Center/Hallway (Outside LCC).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Liceo Civic Center or LCC (Entrance)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED IN FRONT OF SAC BUILDING AND BESIDE HALLWAY.",
    fullDescription:
      "The Liceo Civic Center (LCC) at Liceo de Cagayan University is a covered basketball court gym primarily used for sports events, including basketball games and athletic competitions. It also serves as a versatile venue for various campus activities, such as concerts, cultural performances, and university-wide events. With its spacious and multifunctional layout, the LCC provides a dynamic setting for both recreational and institutional activities, fostering school spirit and community engagement.",
    image: require("../../Images/Liceo Civic Center/Liceo Civic Center or LCC (Entrance).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Liceo Civic Center or LCC Canteen, Exit and Comfort Room (CR)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED IN FRONT OF SAC BUILDING AND BESIDE HALLWAY.",
    fullDescription:
      "The Liceo Civic Center (LCC) at Liceo de Cagayan University is a covered basketball court gym primarily used for sports events, including basketball games and athletic competitions. It also serves as a versatile venue for various campus activities, such as concerts, cultural performances, and university-wide events. With its spacious and multifunctional layout, the LCC provides a dynamic setting for both recreational and institutional activities, fostering school spirit and community engagement.",
    image: require("../../Images/Liceo Civic Center/Liceo Civic Center or LCC Canteen, Exit and Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Medical Clinic (Hallway outside LCC)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED AT THE HALLWAY OUTSIDE THE LCC.",
    fullDescription:
      "The Medical Clinic at Liceo de Cagayan University provides essential healthcare services to students, faculty, and staff. It is staffed with licensed medical professionals who offer first aid, routine check-ups, health counseling, and emergency care. The clinic also provides basic medications, medical referrals, and health education to promote well-being within the campus community. Its goal is to ensure the health and safety of everyone on campus, supporting a productive and healthy learning environment.",
    image: require("../../Images/Liceo Civic Center/Medical Clinic (Hallway outside LCC).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Sports and Athletics Office (Outside LCC)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED OUTSIDE THE LCC BESIDE TRAINING CORPS HEADQUARTERS.",
    fullDescription:
      "The Sports and Athletics Office at Liceo de Cagayan University is responsible for promoting physical fitness, organizing athletic events, and supporting student athletes. The office manages various sports programs, from intramural competitions to intercollegiate tournaments, providing students with opportunities to engage in sports and develop their athletic skills. It also oversees training, coaching, and the overall well-being of student athletes. By fostering school spirit and physical wellness, the Sports and Athletics Office plays a key role in the holistic development of students.",
    image: require("../../Images/Liceo Civic Center/Sports and Athletics Office (Outside LCC).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
];

export default locations;
