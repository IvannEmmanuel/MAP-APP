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
  {
    name: "North Academic Cluster (NAC Building)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Building/North Academic Cluster (NAC Building).jpg"),
    image2: require("../../Images/North Academic Clutser/Building/North Academic Cluster (NAC Building) (1).jpg"),
    image3: require("../../Images/North Academic Clutser/Building/North Academic Cluster (NAC Building) (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC 1st Floor Comfort Room (CR)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/CR/NAC 1st Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC 2nd Floor Comfort Room (CR)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/CR/NAC 2nd Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC 3rd Floor Comfort Room (CR)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/CR/NAC 3rd Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC 4th Floor Comfort Room (CR)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/CR/NAC 4th Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC 5th Floor Comfort Room (CR)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/CR/NAC 5th Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "North Academic Cluster (1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (1st Floor).jpg"),
    image2: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (1st Floor) (1).jpg"),
    image3: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (1st Floor) (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "North Academic Cluster (2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (2nd Floor).jpg"),
    image2: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (2nd Floor) (1).jpg"),
    image3: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (2nd Floor) (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "North Academic Cluster (3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (3rd Floor).jpg"),
    image2: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (3rd Floor) (1).jpg"),
    image3: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (3rd Floor) (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "North Academic Cluster (4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (4th Floor).jpg"),
    image2: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (4th Floor) (1).jpg"),
    image3: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (4th Floor) (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "North Academic Cluster (5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (5th Floor).jpg"),
    image2: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (5th Floor) (1).jpg"),
    image3: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (5th Floor) (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Central Supply Room (NAC 5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Office/Central Supply Room (NAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "ETEEAP Office (NAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Office/ETEEAP Office (NAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Internationalization Office (NAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Office/Internationalization Office (NAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "LEB Office (NAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Office/LEB Office (NAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Marketing and Communications Office (NAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Office/Marketing and Communications Office (NAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 101 University Research and Publication Office (NAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Office/NAC - 101 University Research and Publication Office (NAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 200 Conference Room (NAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Office/NAC - 200 Conference Room (NAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 201 Conservatory of Music, Theater and Dance (NAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Office/NAC - 201 Conservatory of Music, Theater and Dance (NAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 301 MAPEH 2 and S.O. Department (NAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Office/NAC - 301 MAPEH 2 and S.O. Department (NAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 302 MAPEH 1 and S.O. Department (NAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Office/NAC - 302 MAPEH 1 and S.O. Department (NAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 406 Departmento ng Filipino (NAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Office/NAC - 406 Departmento ng Filipino (NAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Office of the Principal Senior High School (NAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Office/Office of the Principal Senior High School (NAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Social Sciences Department (NAC 5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Office/Social Sciences Department (NAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Audio Visual Room 3 or AVR 3 (NAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/Audio Visual Room 3 or AVR 3 (NAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 103 (NAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 103 (NAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 104 Engineering Lecture Room (NAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 104 Engineering Lecture Room (NAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 202 Discussion Room 2 Graduate Studies (NAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 202 Discussion Room 2 Graduate Studies (NAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 203 Discussion Room 3 (NAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 203 Discussion Room 3 (NAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 204 (NAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 204 (NAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 303 (NAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 303 (NAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 304 (NAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 304 (NAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 305 (NAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 305 (NAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 306 (NAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 306 (NAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 307 (NAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 307 (NAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 401 (NAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 401 (NAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 402 Biology Laboratory (NAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 402 Biology Laboratory (NAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 403 Physics Laboratory (NAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 403 Physics Laboratory (NAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 404 Chemistry Lab (NAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 404 Chemistry Lab (NAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 405 Crime Scene Room (NAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 405 Crime Scene Room (NAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 407 Criminalistics Laboratory (NAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 407 Criminalistics Laboratory (NAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 505 (NAC 5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 505 (NAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 506 (NAC 5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 506 (NAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 507 (NAC 5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 507 (NAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Parking Lot",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED IN FRONT OF WAC BUILDING AND EAC BUILDING, BESIDE CAR ENTRANCE.",
    fullDescription:
      "The Parking Lot at Liceo de Cagayan University provides secure and organized spaces for students, faculty, and visitors to park their vehicles. Strategically located within the campus, it is designed to accommodate cars, motorcycles, and bicycles, ensuring convenient access to university facilities. Monitored by security personnel, the parking lot maintains safety and order, contributing to a smooth campus experience.",
    image: require("../../Images/Parking Lot/Parking Lot.jpg"),
    image2: require("../../Images/Parking Lot/Parking Lot (1).jpg"),
    image3: require("../../Images/Parking Lot/Parking Lot (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Riverside",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED IN FRONT OF RIVERSIDE CHAPEL, IN FRONT OF SAC BUILDING.",
    fullDescription:
      "The Riverside area at Liceo de Cagayan University offers a peaceful and scenic environment for relaxation and outdoor activities. Located along the riverbank, it provides students and visitors with a tranquil space to unwind, enjoy nature, or engage in recreational events. The area also serves as a valuable setting for environmental studies and sustainability initiatives, promoting a connection to nature and fostering ecological awareness.",
    image: require("../../Images/Riverside/River Side.jpg"),
    image2: require("../../Images/Riverside/River Side (1).jpg"),
    image3: require("../../Images/Riverside/River Side (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Riverside Canteen",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED BEHIND EAC BUILDING, RIVERSIDE AREA.",
    fullDescription:
      "The Riverside Canteen at Liceo de Cagayan University is a popular dining spot offering a variety of affordable and delicious meals for students, faculty, and staff. Located near the riverside, it provides a relaxing atmosphere for casual meals, social gatherings, or quick breaks between classes. The canteen serves as a convenient and refreshing option for nourishment and relaxation in the heart of the campus.",
    image: require("../../Images/Riverside Canteen/Riverside Canteen.jpg"),
    image2: require("../../Images/Riverside Canteen/Riverside Canteen (1).jpg"),
    image3: require("../../Images/Riverside Canteen/Riverside Canteen (2).jpg"),
    image4: require("../../Images/Riverside Canteen/Riverside Canteen (3).jpg"),
  },
  {
    name: "Riverside Chapel",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/Riverside Chapel/Riverside Chapel.jpg"),
    image2: require("../../Images/Riverside Chapel/Riverside Chapel (1).jpg"),
    image3: require("../../Images/Riverside Chapel/Riverside Chapel (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Rodelsa Grounds",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED IN FRONT OF RODELSA HALL AND THE SCHOOL LIBRARY.",
    fullDescription:
      "Rodelsa Grounds at Liceo de Cagayan University is a spacious outdoor area designed for various recreational, sports, and cultural activities. Named in honor of a notable figure, the grounds provide an ideal venue for events such as athletic competitions, student gatherings, and campus festivals. With its open space and well-maintained facilities, Rodelsa Grounds serves as a hub for student engagement, physical fitness, and community-building activities.",
    image: require("../../Images/Rodelsa Grounds/Rodelsa Grounds.jpg"),
    image2: require("../../Images/Rodelsa Grounds/Rodelsa Grounds (1).jpg"),
    image3: require("../../Images/Rodelsa Grounds/Rodelsa Grounds (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Rodelsa Hall",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED IN FRONT OF RODELSA GROUNDS AND THE SCHOOL LIBRARY.",
    fullDescription:
      "Rodelsa Hall at Liceo de Cagayan University is a central administrative building that houses key offices such as the University Registrar, School Cashier, and other essential administrative services. It also serves as a historical and symbolic space, featuring the statue of the university’s founder. The hall plays a pivotal role in campus operations, providing students and faculty with vital services and fostering a sense of tradition and pride within the university community.",
    image: require("../../Images/Rodelsa Hall/Building/Rodelsa Hall.jpg"),
    image2: require("../../Images/Rodelsa Hall/Building/Rodelsa Hall (1).jpg"),
    image3: require("../../Images/Rodelsa Hall/Building/Rodelsa Hall (2).jpg"),
    image4: require("../../Images/Rodelsa Hall/Building/Rodelsa Hall (3).jpg"),
  },
  {
    name: "Rodelsa Hall Faculty Comfort Room (CR)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED IN THE RIGHT-SIDE INTERIOR OF THE RODELSA HALL, CAN ONLY BE USED BY FACULTY MEMBERS AND STAFF.",
    fullDescription:
      "LOCATED IN THE RIGHT-SIDE INTERIOR OF THE RODELSA HALL, CAN ONLY BE USED BY FACULTY MEMBERS AND STAFF.",
    image: require("../../Images/Rodelsa Hall/CR/Rodelsa Hall Faculty Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Budget Office (Rodelsa Hall)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED INSIDE RODELSA HALL.",
    fullDescription:
      "The Budget Office at Liceo de Cagayan University is responsible for the planning, allocation, and management of the university's financial resources. It ensures that funds are distributed efficiently across various departments, programs, and initiatives to support the institution's goals. The office works closely with other administrative units to prepare and monitor budgets, track expenditures, and ensure compliance with financial policies. By overseeing the university's financial planning, the Budget Office plays a crucial role in maintaining fiscal responsibility and supporting the institution’s long-term growth and sustainability.",
    image: require("../../Images/Rodelsa Hall/Office/Budget Office (Rodelsa Hall).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Guidance and Counseling Center (Rodelsa Hall)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED INSIDE RODELSA HALL.",
    fullDescription:
      "The Guidance and Counseling Center at Liceo de Cagayan University provides a supportive environment for students' personal, academic, and career development. The center offers professional counseling services, guidance on mental health and well-being, and assistance with academic challenges. It also organizes workshops, seminars, and activities aimed at enhancing students' emotional resilience, decision-making skills, and overall personal growth. Dedicated to fostering a positive campus experience, the center ensures students have the resources to succeed both inside and outside the classroom.",
    image: require("../../Images/Rodelsa Hall/Office/Guidance and Counseling Center (Rodelsa Hall).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "University Registrar (Rodelsa Hall)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED AT RODELSA HALL.",
    fullDescription:
      "The University Registrar at Liceo de Cagayan University is responsible for maintaining academic records, managing student enrollment, and overseeing registration processes. It serves as a vital office for students, handling tasks such as transcript requests, course registration, schedule adjustments, and academic certifications. The Registrar also ensures compliance with university policies and academic standards, playing a key role in students' academic journeys from admission to graduation.",
    image: require("../../Images/Rodelsa Hall/Office/Office of the Registrar (Rodelsa Hall).jpg"),
    image2: require("../../Images/Rodelsa Hall/Office/University Registrar (Rodelsa Hall).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "University Cashier (Rodelsa Hall)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED AT RODELSA HALL.",
    fullDescription:
      "The University Cashier at Liceo de Cagayan University handles all financial transactions related to student accounts. This includes processing tuition payments, fees, fines, and refunds. The office ensures that financial records are accurately maintained and provides assistance to students and parents regarding billing inquiries. The Cashier’s office is also responsible for issuing official receipts and supporting financial matters to ensure smooth academic operations for students and staff.",
    image: require("../../Images/Rodelsa Hall/Office/University Cashier (Rodelsa Hall).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "South Academic Cluster (SAC Building)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED AT RODELSA HALL.",
    fullDescription:
      "The University Cashier at Liceo de Cagayan University handles all financial transactions related to student accounts. This includes processing tuition payments, fees, fines, and refunds. The office ensures that financial records are accurately maintained and provides assistance to students and parents regarding billing inquiries. The Cashier’s office is also responsible for issuing official receipts and supporting financial matters to ensure smooth academic operations for students and staff.",
    image: require("../../Images/South Academic Cluster/Building/South Academic Cluster (SAC Building).jpg"),
    image2: require("../../Images/South Academic Cluster/Building/South Academic Cluster (SAC Building) (1).jpg"),
    image3: require("../../Images/South Academic Cluster/Building/South Academic Cluster (SAC Building) (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC 1st Floor Comfort Room (CR)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/CR/SAC 1st Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC 2nd Floor Comfort Room (CR)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/CR/SAC 2nd Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC 3rd Floor Comfort Room (CR)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/CR/SAC 3rd Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC 4th Floor Comfort Room (CR)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/CR/SAC 4th Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC 5th Floor Comfort Room (CR)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/CR/SAC 5th Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "South Academic Cluster (1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (1st Floor).jpg"),
    image2: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (1st Floor)(1).jpg"),
    image3: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (1st Floor)(2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "South Academic Cluster (2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (2nd Floor).jpg"),
    image2: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (2nd Floor)(1).jpg"),
    image3: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (2nd Floor)(2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "South Academic Cluster (3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (3rd Floor).jpg"),
    image2: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (3rd Floor)(1).jpg"),
    image3: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (3rd Floor)(2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "South Academic Cluster (4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (4th Floor).jpg"),
    image2: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (4th Floor)(1).jpg"),
    image3: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (4th Floor)(2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "South Academic Cluster (5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (5th Floor).jpg"),
    image2: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (5th Floor)(1).jpg"),
    image3: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (5th Floor)(2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "College of Business and Accountancy Office (SAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Office/College of Business and Accountancy Office (SAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "College of Engineering Office (SAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Office/College of Engineering Office (SAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Kitchen (SAC 5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Office/Kitchen (SAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "LICEO PRESS (SAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Office/LICEO PRESS (SAC 1st Floor).jpg"),
    image2: require("../../Images/South Academic Cluster/Office/LICEO PRESS (SAC 1st Floor)(1).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Muslim Prayer Room (SAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Office/Muslim Prayer Room (SAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 508 Travel Bureau (SAC 5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Office/SAC - 508 Travel Bureau (SAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SBMA Faculty Room (SAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Office/SBMA Faculty Room (SAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SBMA Graduate School (SAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Office/SBMA Graduate School (SAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Speech Enhancement Center or SEC (SAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Office/Speech Enhancement Center or SEC (SAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Tourism Faculty Room, and Mini Hotel (SAC 5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Office/Tourism Faculty Room, and Mini Hotel (SAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 101 (SAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 101 (SAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 102 (SAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 102 (SAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 201 (SAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 201 (SAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 202 (SAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 202 (SAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 203 (SAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 203 (SAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 204 (SAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 204 (SAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 205 (SAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 205 (SAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 206 (SAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 206 (SAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 301 (SAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 301 (SAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 302 (SAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 302 (SAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 303 (SAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 303 (SAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 304 (SAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 304 (SAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 305 (SAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 305 (SAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 306 (SAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 306 (SAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 307 (SAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 307 (SAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 308 (SAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 308 (SAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 401 (SAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 401 (SAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 402 (SAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 402 (SAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 403 (SAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 403 (SAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 404 (SAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 404 (SAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 405 (SAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 405 (SAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 406 (SAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 406 (SAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 407 (SAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 407 (SAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 408 (SAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 408 (SAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 507 (SAC 5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 507 (SAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "South Academic Cluster Canteen",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "LOCATED AT THE LEFT SIDE OF SAC BUILDING FACING THE LCC.",
    fullDescription:
      "The South Academic Cluster Canteen at Liceo de Cagayan University is a popular dining venue offering a variety of affordable meals and snacks for students, faculty, and staff. Located beside the South Academic Cluster, it provides a convenient spot for quick meals or socializing during breaks. The canteen serves a diverse selection of food, catering to different tastes and dietary needs, ensuring a satisfying and accessible option for the campus community throughout the day.",
    image: require("../../Images/South Academic Cluster Canteen/South Academic Cluster Canteen.jpg"),
    image2: require("../../Images/South Academic Cluster Canteen/South Academic Cluster Canteen(1).jpg"),
    image3: require("../../Images/South Academic Cluster Canteen/South Academic Cluster Canteen(2).jpg"),
    image4: require("../../Images/South Academic Cluster Canteen/South Academic Cluster Canteen(3).jpg"),
  },
  {
    name: "West Academic Cluster (WAC Building)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Building/West Academic Cluster (WAC Building).jpg"),
    image2: require("../../Images/West Academic Cluster/Building/West Academic Cluster (WAC Building)(1).jpg"),
    image3: require("../../Images/West Academic Cluster/Building/West Academic Cluster (WAC Building)(2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC 1st Floor Comfort Room (CR)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/CR/WAC 1st Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/West Academic Cluster/CR/WAC 2nd Floor Comfort Room (CR).jpg"),
    image3: require("../../Images/West Academic Cluster/CR/WAC 3rd Floor Comfort Room (CR).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "West Academic Cluster (2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Floors/West Academic Cluster (2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Alumni Affairs Office (WAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Office/Alumni Affairs Office (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "College of Arts and Sciences Faculty Office (WAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Office/College of Arts and Sciences Faculty Office (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "College of Information Technology Office (WAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Office/College of Information Technology Office (WAC 3rd Floor).jpg"),
    image2: require("../../Images/West Academic Cluster/Office/College of Information Technology Office (WAC 3rd Floor)(1).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "IT Storage 1 (WAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Office/IT Storage 1 (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "IT Storage 2 (WAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Office/IT Storage 2 (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "LICEONET Office (WAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Office/LICEONET Office (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Natural Science Department (WAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Office/Natural Science Department (WAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Office of the Alumni Affairs (WAC 1st Floor beside Car Entrance)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Office/Office of the Alumni Affairs (WAC 1st Floor beside Car Entrance).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Office of the Physical Plant and Activities (WAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Office/Office of the Physical Plant and Activities (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Office of the PDSA (WAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Office/Office of the Prefecture of Discipline and Student Affairs (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SIKAP Office (WAC 1st Floor beside Car Entrance)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Office/SIKAP Office (WAC 1st Floor beside Car Entrance).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 202 Office of the Vice President for ICT (WAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Office/WAC - 202 Office of the Vice President for ICT (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 210 MIS Office (WAC 2nd Floor Behind Botanical Garden)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Office/WAC - 210 MIS Office (WAC 2nd Floor Behind Botanical Garden)).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 211 Conservatory of Music (WAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Office/WAC - 211 Conservatory of Music (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Audio Visual Room 1 or AVR 1 (WAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/Audio Visual Room 1 or AVR 1 (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Biology Laboratory (WAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/Biology Laboratory (WAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "CAS Students Lounge (WAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/CAS Students Lounge (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Chemistry Laboratory 1 (WAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/Chemistry Laboratory 1 (WAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Chemistry Laboratory 2 (WAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/Chemistry Laboratory 2 (WAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Chemistry Laboratory 3 (WAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/Chemistry Laboratory 3 (WAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Herbarium (WAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/Herbarium (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Music Room 1 (WAC 1st Floor Behind Botanical Garden)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/Music Room 1 (WAC 1st Floor Behind Botanical Garden).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Music Room 2 (WAC 1st Floor Behind Botanical Garden)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/Music Room 2 (WAC 1st Floor Behind Botanical Garden).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Music Room 3 (WAC 1st Floor Behind Botanical Garden)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/Music Room 3 (WAC 1st Floor Behind Botanical Garden).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Natural Science Lecture Room (WAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/Natural Science Lecture Room (WAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 201 (WAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 201 (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 203 IT Laboratory 3 CISCO (WAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 203 IT Laboratory 3 CISCO (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 204 Psychology Laboratory 2 (WAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 204 Psychology Laboratory 2 (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 205 Physics Laboratory (WAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 205 Physics Laboratory (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 206 (WAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 206 (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 207 Biochemistry Laboratory (WAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 207 Biochemistry Laboratory (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 208 Microbiology Laboratory (WAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 208 Microbiology Laboratory (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 209 Psychology Laboratory (WAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 209 Psychology Laboratory (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 213 (WAC 2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 213 (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 301 IT Laboratory 2 (WAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 301 IT Laboratory 2 (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 302 IT Laboratory 1 (WAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 302 IT Laboratory 1 (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 303 (WAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 303 (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 304 (WAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 304 (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 305 Computer Laboratory (WAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 305 Computer Laboratory (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 306 (WAC 3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 306 (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 401 Communication Laboratory (WAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 401 Communication Laboratory (WAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 402 (WAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 402 (WAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 403 (WAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 403 (WAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 404 (WAC 4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 404 (WAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Zoology Laboratory (WAC 1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,
    description:
      "wala pa",
    fullDescription:
      "wala pa",
    image: require("../../Images/West Academic Cluster/Rooms/Zoology Laboratory (WAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
];

export default locations;
