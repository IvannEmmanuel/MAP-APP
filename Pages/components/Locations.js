const locations = [
  {
    name: "Anatomy Laboratory",
    latitude: 8.48465698110519,
    longitude: 124.63939273289718,
    description: "LOCATED IN FRONT OF SAC 1ST FLOOR COMFORT ROOM, RIVERSIDE.",
    fullDescription:
      "The Anatomy Laboratory at Liceo de Cagayan University is a state-of-the-art facility designed to enhance the study and understanding of human anatomy. Equipped with advanced models, tools, and digital resources, it provides students with a hands-on learning experience essential for medical, nursing, and allied health programs.",
    image: require("../../Images/AnatomyLaboratory/Anatomy.jpg"),
    image2: require("../../Images/AnatomyLaboratory/Anatomy2.jpg"),
    image3: require("../../Images/AnatomyLaboratory/Anatomy3.jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Botanical Garden",
    latitude: 8.48692026359477,
    longitude: 124.63940057703083,
    description: "LOCATED AT NAC GROUNDS, INFRONT OF NAC BUILDING.",
    fullDescription:
      "The Botanical Garden at Liceo de Cagayan University is a serene and educational space dedicated to the conservation and study of diverse plant species. It serves as a living laboratory for students, promoting environmental awareness and sustainability. The garden showcases a variety of flora, offering opportunities for hands-on learning in botany, ecology, and landscaping while providing a tranquil environment for relaxation and inspiration.",
    image: require("../../Images/Botanical Garden/Botanical Garden.jpg"),
    image2: require("../../Images/Botanical Garden/Botanical Garden (1).jpg"),
    image3: require("../../Images/Botanical Garden/Botanical Garden (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Car Entrance",
    latitude: 8.486301085971983,
    longitude: 124.63900388396772,
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
    latitude: 8.484690776694979,
    longitude: 124.63925929371543,
    description: "LOCATED BEHIND SAC BUILDING, BELOW STAIRCASE.",
    fullDescription:
      "The Electrical Laboratory at Liceo de Cagayan University is a fully equipped facility designed to support hands-on learning in electrical engineering and technology. It provides students with the tools and resources to conduct experiments, design circuits, and develop practical skills in electrical systems and applications. The lab fosters innovation, critical thinking, and problem-solving, preparing students for real-world challenges in the field of electrical engineering.",
    image: require("../../Images/CollegeLectureRoom/Electrical Lab 1.jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Electrical Lab 2 (Behind SAC Building)",
    latitude: 8.484690776694979,
    longitude: 124.63925929371543,
    description: "LOCATED BEHIND SAC BUILDING, BESIDE ANATOMY LABORATORY.",
    fullDescription:
      "The Electrical Laboratory at Liceo de Cagayan University is a fully equipped facility designed to support hands-on learning in electrical engineering and technology. It provides students with the tools and resources to conduct experiments, design circuits, and develop practical skills in electrical systems and applications. The lab fosters innovation, critical thinking, and problem-solving, preparing students for real-world challenges in the field of electrical engineering.",
    image: require("../../Images/CollegeLectureRoom/Electrical Lab 2.jpg"),
    image2: require("../../Images/CollegeLectureRoom/Electrical Lab 2(2).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Electronics Lab 1 (Behind SAC Building)",
    latitude: 8.484690776694979,
    longitude: 124.63925929371543,
    description: "LOCATED BEHIND SAC BUILDING, BESIDE ELECTRICAL LAB 1.",
    fullDescription:
      "The Electronics Laboratory at Liceo de Cagayan University is a cutting-edge facility dedicated to the study and application of electronic systems and devices. Equipped with advanced tools such as oscilloscopes, microcontrollers, and soldering stations, it enables students to design, build, and test electronic circuits and projects. The lab emphasizes hands-on experience, fostering creativity and technical expertise essential for careers in electronics, robotics, and related fields.",
    image: require("../../Images/CollegeLectureRoom/Electronics Lab 1.jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Electronics Lab 2 (Behind SAC Building)",
    latitude: 8.484690776694979,
    longitude: 124.63925929371543,
    description: "LOCATED BEHIND SAC BUILDING, BESIDE ELECTRONICS LAB 1.",
    fullDescription:
      "The Electronics Laboratory at Liceo de Cagayan University is a cutting-edge facility dedicated to the study and application of electronic systems and devices. Equipped with advanced tools such as oscilloscopes, microcontrollers, and soldering stations, it enables students to design, build, and test electronic circuits and projects. The lab emphasizes hands-on experience, fostering creativity and technical expertise essential for careers in electronics, robotics, and related fields.",
    image: require("../../Images/CollegeLectureRoom/Electronics Lab 2.jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Engineering Lecture Room 1 & 2 (Behind SAC Building)",
    latitude: 8.484690776694979,
    longitude: 124.63925929371543,
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
    latitude: 8.484690776694979,
    longitude: 124.63925929371543,
    description: "LOCATED BEHIND SAC BUILDING, BESIDE ELECTRONICS LAB 2.",
    fullDescription: "LOCATED BEHIND SAC BUILDING, BESIDE ELECTRONICS LAB 2.",
    image: require("../../Images/CollegeLectureRoom/Equipment Survey Room.jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Hydraulic Lab (Behind SAC Building)",
    latitude: 8.484690776694979,
    longitude: 124.63925929371543,
    description: "LOCATED BEHIND SAC BUILDING, BESIDE EQUIPMENT SURVEY ROOM.",
    fullDescription:
      "The Hydraulics Laboratory at Liceo de Cagayan University is a dedicated space for studying fluid mechanics and hydraulic systems. Equipped with advanced apparatus such as flow meters, pumps, and pipe networks, it allows students to conduct experiments on fluid behavior, pressure dynamics, and energy transfer. The lab provides hands-on learning opportunities, bridging theoretical concepts with practical applications in civil and mechanical engineering.",
    image: require("../../Images/CollegeLectureRoom/Hydraulic Lab.jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Soil Laboratory (Behind SAC Building)",
    latitude: 8.484690776694979,
    longitude: 124.63925929371543,
    description: "LOCATED BEHIND SAC BUILDING, BESIDE HYDRAULIC LAB.",
    fullDescription:
      "The Soil Laboratory at Liceo de Cagayan University is a specialized facility designed for the analysis and testing of soil properties. Equipped with tools for compaction, permeability, and shear strength testing, it enables students to evaluate soil characteristics critical for construction, agriculture, and environmental studies. The lab offers hands-on experience, enhancing understanding of geotechnical engineering and sustainable land management practices.",
    image: require("../../Images/CollegeLectureRoom/Soil Laboratory.jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "East Academic Cluster Building",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED IN FRONT OF WAC BUILDING, BESIDE THE SCHOOL LIBRARY.",
    fullDescription:
      "The East Academic Cluster at Liceo de Cagayan University is a dedicated area housing classrooms and offices for various academic programs. It is also the latest building constructed on campus, showcasing modern facilities designed to enhance the learning experience and provide a state-of-the-art environment for students and faculty.",
    image: require("../../Images/East Academic Cluster/Building/East Academic Cluster (EAC Building).jpg"),
    image2: require("../../Images/East Academic Cluster/Building/East Academic Cluster (EAC Building)(1).jpg"),
    image3: require("../../Images/East Academic Cluster/Building/East Academic Cluster (EAC Building)(2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC 2nd FLoor Comfort Room",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED AT A SEPARATE HALL BETWEEN ROOMS.",
    fullDescription: "LOCATED AT A SEPARATE HALL BETWEEN ROOMS.",
    image: require("../../Images/East Academic Cluster/CR/EAC 2nd Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC 3rd FLoor Comfort Room",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED AT A SEPARATE HALL BETWEEN ROOMS.",
    fullDescription: "LOCATED AT A SEPARATE HALL BETWEEN ROOMS.",
    image: require("../../Images/East Academic Cluster/CR/EAC 3rd Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC 4th FLoor Comfort Room",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED AT A SEPARATE HALL BETWEEN ROOMS.",
    fullDescription: "LOCATED AT A SEPARATE HALL BETWEEN ROOMS.",
    image: require("../../Images/East Academic Cluster/CR/EAC 4th Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC 5th FLoor Comfort Room",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED AT A SEPARATE HALL BETWEEN ROOMS.",
    fullDescription: "LOCATED AT A SEPARATE HALL BETWEEN ROOMS.",
    image: require("../../Images/East Academic Cluster/CR/EAC 5th Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "East Academic Cluster (1st Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,

    image: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (1st Floor).jpg"),
    image2: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (1st Floor) (1).jpg"),
    image3: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (1st Floor) (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "East Academic Cluster (2nd Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,

    image: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (2nd Floor).jpg"),
    image2: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (2nd Floor) (1).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "East Academic Cluster (3rd Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,

    image: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (3rd Floor).jpg"),
    image2: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (3rd Floor) (1).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "East Academic Cluster (4th Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,

    image: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (4th Floor).jpg"),
    image2: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (4th Floor) (1).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "East Academic Cluster (5th Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,

    image: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (5th Floor).jpg"),
    image2: require("../../Images/East Academic Cluster/Floors/East Academic Cluster (5th Floor) (1).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Academic Affairs Office (EAC 1st Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 1ST FLOOR OF EAC BUILDING, BESIDE COLLEGE OF CRIMINAL JUSTICE OFFICE.",
    fullDescription:
      "The Academic Affairs Office at Liceo de Cagayan University oversees the academic programs and policies of the institution. It is responsible for curriculum development, faculty management, and ensuring the quality of education delivered to students. The office supports students' academic needs, facilitates program accreditation, and coordinates with departments to maintain academic standards. Through its leadership, the Academic Affairs Office fosters an environment of excellence and innovation in teaching and learning.",
    image: require("../../Images/East Academic Cluster/Offices/Academic Affairs Office (EAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "College of Criminal Justice Office (EAC 1st Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 1ST FLOOR OF EAC BUILDING, BESIDE COLLEGE OF LAW OFFICE.",
    fullDescription:
      "The College of Criminal Justice Office at Liceo de Cagayan University serves as the administrative hub for students and faculty within the criminal justice program. It handles academic advising, course scheduling, and program coordination while providing support for student activities and events related to criminology and law enforcement. The office is dedicated to fostering a rigorous and supportive environment that prepares students for careers in criminal justice, law enforcement, and related fields.",
    image: require("../../Images/East Academic Cluster/Offices/College of Criminal Justice Office (EAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "College of Law Office (EAC 1st Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 1ST FLOOR OF EAC BUILDING, BESIDE COLLEGE OF CRIMINAL JUSTICE OFFICE.",
    fullDescription:
      "The College of Law Office at Liceo de Cagayan University is the central administrative unit for law students and faculty. It manages academic affairs such as enrollment, course scheduling, and student records while providing guidance and support for activities like legal research, moot court competitions, and seminars. The office ensures the smooth delivery of the law curriculum and fosters an environment of excellence and professionalism, preparing students for successful careers in the legal profession.",
    image: require("../../Images/East Academic Cluster/Offices/College of Law Office (EAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 502 Campus Ministry Office (EAC 5th Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 5TH FLOOR OF EAC BUILDING, LAST ROOM FACING NAC BUILDING.",
    fullDescription:
      "The Campus Ministry Office at Liceo de Cagayan University serves as a spiritual hub, fostering faith formation and moral development among students, faculty, and staff. It organizes religious activities, retreats, and outreach programs that promote spiritual growth, community service, and values-based living. The office also provides guidance and pastoral care, creating a supportive environment that encourages reflection, prayer, and a deeper connection to faith and community.",
    image: require("../../Images/East Academic Cluster/Offices/EAC - 502 Campus Ministry Office (EAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 505 Robotics Laboratory (EAC 5th Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 5TH FLOOR OF EAC BUILDING, BESIDE STEM DEPARTMENT. ",
    fullDescription:
      "The Robotics Laboratory at Liceo de Cagayan University is a state-of-the-art facility designed for exploring robotics, automation, and artificial intelligence. Equipped with advanced tools such as robotic arms, microcontrollers, sensors, and programming software, the lab provides students with hands-on experience in designing, building, and programming robots. It fosters innovation and problem-solving skills, preparing students for careers in robotics, engineering, and emerging technologies.",
    image: require("../../Images/East Academic Cluster/Offices/EAC - 505 Robotics Laboratory (EAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 506 STEM Department (EAC 5th Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 5TH FLOOR OF EAC BUILDING, BESIDE ROBOTICS LABORATORY. ROOM NUMBER 506 - 507",
    fullDescription:
      "The STEM Department Office at Liceo de Cagayan University serves as the administrative center for the university's Science, Technology, Engineering, and Mathematics programs. It handles academic advising, course scheduling, student records, and departmental activities. The office provides support to students and faculty in pursuing excellence in STEM education and research, coordinating events, workshops, and projects that foster innovation and learning in these fields. It plays a key role in ensuring the smooth operation and development of the STEM programs, creating an environment that encourages academic growth and discovery.",
    image: require("../../Images/East Academic Cluster/Offices/EAC - 506 STEM Department (EAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 507 STEM Department (EAC 5th Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 5TH FLOOR OF EAC BUILDING, BESIDE ROBOTICS LABORATORY. ROOM NUMBER 506 - 507",
    fullDescription:
      "The STEM Department Office at Liceo de Cagayan University serves as the administrative center for the university's Science, Technology, Engineering, and Mathematics programs. It handles academic advising, course scheduling, student records, and departmental activities. The office provides support to students and faculty in pursuing excellence in STEM education and research, coordinating events, workshops, and projects that foster innovation and learning in these fields. It plays a key role in ensuring the smooth operation and development of the STEM programs, creating an environment that encourages academic growth and discovery.",
    image: require("../../Images/East Academic Cluster/Offices/EAC - 507 STEM Department (EAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 508 English Department (EAC 5th Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 5TH FLOOR OF EAC BUILDING, LAST ROOM FACING SAC BUILDING, BESIDE STEM DEPARTMENT.",
    fullDescription:
      "The English Department Office at Liceo de Cagayan University serves as the central hub for all academic and administrative matters related to the English programs. It provides support for students and faculty, including course scheduling, academic advising, and the coordination of department activities. The office also oversees the implementation of curriculum plans and faculty development. By fostering a dynamic environment for learning and literary exploration, the English Department Office plays a key role in shaping students' communication, critical thinking, and writing skills, preparing them for diverse career paths.",
    image: require("../../Images/East Academic Cluster/Offices/EAC - 508 English Department (EAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Office of Cultural Affairs (EAC 1st Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED ON THE 1ST FLOOR OF EAC BUILDING, BESIDE STAIRCASE",
    fullDescription:
      "The Office of Cultural Affairs at Liceo de Cagayan University is dedicated to promoting and preserving the rich cultural heritage of the university and the community. It organizes cultural events, performances, and exhibitions that highlight the arts, traditions, and diverse talents of students and faculty. The office serves as a platform for creative expression, fostering cultural awareness and appreciation while supporting the holistic development of the Liceo community.",
    image: require("../../Images/East Academic Cluster/Offices/Office of Cultural Affairs (EAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Office of Extension and Service Learning (EAC 3rd Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 3RD FLOOR OF EAC BUILDING, LAST ROOM FACING NAC BUILDING.",
    fullDescription:
      "The Office of Extension and Service Learning at Liceo de Cagayan University is dedicated to fostering community engagement and social responsibility among students and faculty. It develops and implements outreach programs, community partnerships, and service-learning initiatives that address societal needs and promote sustainable development. Through hands-on involvement, the office provides opportunities for students to apply their knowledge and skills in real-world settings, contributing to the betterment of the community while enhancing their educational experience.",
    image: require("../../Images/East Academic Cluster/Offices/Office of Extension and Service Learning (EAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Office of Student Affairs (EAC 1st Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 1ST FLOOR OF EAC BUILDING, BESIDE OFFICE OF CULTURAL AFFAIRS.",
    fullDescription:
      "The Office of Student Affairs (OSA) at Liceo de Cagayan University is committed to supporting students' holistic development and enhancing their campus experience. It oversees various student programs, services, and organizations, including leadership development, extracurricular activities, and student welfare initiatives. OSA also addresses student concerns, promotes discipline, and fosters a vibrant and inclusive campus community that empowers students to succeed academically, socially, and personally.",
    image: require("../../Images/East Academic Cluster/Offices/Office of Student Affairs (EAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 101 (EAC 1st Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 1ST FLOOR OF EAC BUILDING, LAST ROOM FACING NAC BUILDING.",
    fullDescription:
      "EAC - 101 is a classroom located in the East Academic Cluster (EAC) at Liceo de Cagayan University. It is primarily used by G11 HUMSS 2 and 8, and G12 HUMSS 3 and 2, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 101 (EAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 102 (EAC 1st Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED ON THE 1ST FLOOR OF EAC BUILDING, BESIDE EAC - 101.",
    fullDescription:
      "EAC - 102 is a classroom located in the East Academic Cluster (EAC) at Liceo de Cagayan University. It is primarily used by G11 HUMSS 3 and 9, and G12 HUMSS 4 and 9, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 102 (EAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 103 (EAC 1st Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED ON THE 1ST FLOOR OF EAC BUILDING, BESIDE EAC - 102.",
    fullDescription:
      "EAC - 103 is a classroom located in the East Academic Cluster (EAC) at Liceo de Cagayan University. It is primarily used by G11 HUMSS 4 and 10, and G12 HUMSS 5 and 10, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 103 (EAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 201 (EAC 2nd Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED ON THE 2ND FLOOR OF EAC BUILDING",
    fullDescription: "LOCATED ON THE 2ND FLOOR OF EAC BUILDING",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 201 (EAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 202 (EAC 2nd Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED ON THE 2ND FLOOR OF EAC BUILDING, BESIDE EAC - 201.",
    fullDescription:
      "LOCATED ON THE 2ND FLOOR OF EAC BUILDING, BESIDE EAC - 201.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 202 (EAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 203 (EAC 2nd Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED ON THE 2ND FLOOR OF EAC BUILDING, BESIDE EAC - 202.",
    fullDescription:
      "LOCATED ON THE 2ND FLOOR OF EAC BUILDING, BESIDE EAC - 202.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 203 (EAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 301 (EAC 3rd Floor)",
    llatitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED ON THE 2ND FLOOR OF EAC BUILDING, BESIDE EAC - 202.",
    fullDescription:
      "EAC - 301 is a classroom located in the East Academic Cluster (EAC) at Liceo de Cagayan University. It is primarily used by G11 HUMSS 5 and 11, and G12 HUMSS 6 and 11, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 301 (EAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 302 (EAC 3rd Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED ON THE 3RD FLOOR OF EAC BUILDING, BESIDE EAC - 301.",
    fullDescription:
      "EAC - 302 is a classroom located in the East Academic Cluster (EAC) at Liceo de Cagayan University. It is primarily used by G11 HUMSS 6, G12 HUMSS 7 and 12, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 302 (EAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 303 (EAC 3rd Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED ON THE 3RD FLOOR OF EAC BUILDING, BESIDE EAC - 302.",
    fullDescription:
      "EAC - 303 is a classroom located in the East Academic Cluster (EAC) at Liceo de Cagayan University. It is primarily used by G11 HUMSS 7, G12 HUMSS 8 and 13, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 303 (EAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 304 (EAC 3rd Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 3RD FLOOR OF EAC BUILDING, BESIDE STAIRCASE FACING NAC BUILDING.",
    fullDescription:
      "EAC - 304 is a classroom located in the East Academic Cluster (EAC) at Liceo de Cagayan University. It is primarily used by G11 ICT 1, G12 ICT 1 and HUMSS 14, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 304 (EAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 305 (EAC 3rd Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 3RD FLOOR OF EAC BUILDING, BESIDE STAIRCASE FACING SAC BUILDING.",
    fullDescription:
      "EAC - 305 is a classroom located in the East Academic Cluster (EAC) at Liceo de Cagayan University. It is primarily used by G11 HE 1 and G12 ICT 3, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 305 (EAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 306 (EAC 3rd Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED ON THE 3RD FLOOR OF EAC BUILDING, BESIDE EAC - 305.",
    fullDescription:
      "EAC - 306 is a classroom located in the East Academic Cluster (EAC) at Liceo de Cagayan University. It is primarily used by G11 ABM 3 and 7, G12 ABM 1 and ABM 6, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 306 (EAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 307 (EAC 3rd Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED ON THE 3RD FLOOR OF EAC BUILDING, BESIDE EAC - 306.",
    fullDescription:
      "EAC - 307 is a classroom located in the East Academic Cluster (EAC) at Liceo de Cagayan University. It is primarily used by G11 ABM 4 and 8, G12 ABM 3 and ABM 8, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 307 (EAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 308 (EAC 3rd Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 3RD FLOOR OF EAC BUILDING, LAST ROOM FACING SAC BUILDING.",
    fullDescription:
      "EAC - 308 is a classroom located in the East Academic Cluster (EAC) at Liceo de Cagayan University. It is primarily used by G11 ABM 5 and 9, G12 ABM 4 and ABM 9, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 308 (EAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 401 (EAC 4th Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 4TH FLOOR OF EAC BUILDING, LAST ROOM FACING NAC BUILDING.",
    fullDescription:
      "LOCATED ON THE 4TH FLOOR OF EAC BUILDING, LAST ROOM FACING NAC BUILDING.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 401 (EAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 402 (EAC 4th Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED ON THE 4TH FLOOR OF EAC BUILDING, BESIDE EAC - 401.",
    fullDescription:
      "LOCATED ON THE 4TH FLOOR OF EAC BUILDING, BESIDE EAC - 401.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 402 (EAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 403 (EAC 4th Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED ON THE 4TH FLOOR OF EAC BUILDING, BESIDE EAC - 402.",
    fullDescription:
      "LOCATED ON THE 4TH FLOOR OF EAC BUILDING, BESIDE EAC - 402.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 403 (EAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 404 (EAC 4th Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 4TH FLOOR OF EAC BUILDING, BESIDE STAIRCASE FACING NAC BUILDING.",
    fullDescription:
      "LOCATED ON THE 4TH FLOOR OF EAC BUILDING, BESIDE STAIRCASE FACING NAC BUILDING.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 404 (EAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 405 (EAC 4th Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 4TH FLOOR OF EAC BUILDING, BESIDE STAIRCASE FACING SAC BUILDING.",
    fullDescription:
      "EAC - 405 is a classroom located in the East Academic Cluster (EAC) at Liceo de Cagayan University. It is primarily used by G11 ICT 3 and 4, G12 ABM 5 and ABM 10, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 405 (EAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 406 (EAC 4th Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED ON THE 4TH FLOOR OF EAC BUILDING, BESIDE EAC - 405.",
    fullDescription:
      "EAC - 406 is a classroom located in the East Academic Cluster (EAC) at Liceo de Cagayan University. It is primarily used by G11 ABM 2 and 6, G12 ABM 2 and ABM 7, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 406 (EAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 407 (EAC 4th Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED ON THE 4TH FLOOR OF EAC BUILDING, BESIDE EAC - 406.",
    fullDescription:
      "LOCATED ON THE 4TH FLOOR OF EAC BUILDING, BESIDE EAC - 406.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 407 (EAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 408 (EAC 4th Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 4TH FLOOR OF EAC BUILDING, LAST ROOM FACING SAC BUILDING.",
    fullDescription:
      "LOCATED ON THE 4TH FLOOR OF EAC BUILDING, LAST ROOM FACING SAC BUILDING.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 408 (EAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 501 (EAC 5th Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 5TH FLOOR OF EAC BUILDING, LAST ROOM FACING NAC BUILDING.",
    fullDescription:
      "LOCATED ON THE 5TH FLOOR OF EAC BUILDING, LAST ROOM FACING NAC BUILDING.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 501 (EAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 503 (EAC 5th Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 5TH FLOOR OF EAC BUILDING, BESIDE CAMPUS MINISTRY OFFICE.",
    fullDescription:
      "LOCATED ON THE 5TH FLOOR OF EAC BUILDING, BESIDE CAMPUS MINISTRY OFFICE.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 503 (EAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "EAC - 504 (EAC 5th Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description:
      "LOCATED ON THE 5TH FLOOR OF EAC BUILDING, BESIDE STAIRCASE FACING NAC BUILDING.",
    fullDescription:
      "LOCATED ON THE 5TH FLOOR OF EAC BUILDING, BESIDE STAIRCASE FACING NAC BUILDING.",
    image: require("../../Images/East Academic Cluster/Rooms/EAC - 504 (EAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "School Library (Rodelsa Grounds)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED IN FRONT OF RODELSA HALL.",
    fullDescription:
      "The School Library at Liceo de Cagayan University is a hub for academic research, reading, and quiet study. It offers a wide range of resources, including books, journals, digital materials, and other educational tools to support students' learning and research needs. The library provides a peaceful and conducive environment for individual study or group work, with dedicated spaces for reading, research, and multimedia access. It is an essential resource for academic excellence, encouraging intellectual curiosity and supporting the university’s educational goals.",
    image: require("../../Images/Library/Building/School Library (Rodelsa Grounds).jpg"),
    image2: require("../../Images/Library/Building/School Library (Rodelsa Grounds) (1).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Audio Visual Room of Library (2nd Floor)",
    latitude: 8.486339618441425,
    longitude: 124.6395091410764,
    description: "LOCATED AT THE SECOND FLOOR OF THE SCHOOL LIBRARY.",
    fullDescription:
      "The Audio-Visual Room of the School Library at Liceo de Cagayan University is a specialized space designed for multimedia learning and presentations. Equipped with modern audio-visual technology, including projectors, screens, and sound systems, it supports both individual and group learning experiences. The room is ideal for viewing educational videos, conducting presentations, and facilitating interactive learning sessions, enhancing the overall academic experience for students and faculty alike. It serves as a versatile resource for educational enrichment and multimedia-based research activities.",
    image: require("../../Images/Library/Rooms/Audio Visual Room of Library (2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "School Library (1st Floor)",
    latitude: 8.485689945372904,
    longitude: 124.63950768318904,

    image: require("../../Images/Library/Rooms/School Library (1st Floor).jpg"),
    image2: require("../../Images/Library/Rooms/School Library (1st Floor) (1).jpg"),
    image3: require("../../Images/Library/Rooms/School Library (1st Floor) (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "School Library (2nd Floor)",
    latitude: 8.485689945372904,
    longitude: 124.63950768318904,

    image: require("../../Images/Library/Rooms/School Library (2nd Floor).jpg"),
    image2: require("../../Images/Library/Rooms/School Library (2nd Floor) (1).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Alumni Office (Hallway outside LCC)",
    latitude: 8.48538,
    longitude: 124.638951,
    description: "LOCATED AT THE HALLWAY OUTSIDE THE LCC.",
    fullDescription:
      "The Alumni Office at Liceo de Cagayan University serves as the central hub for maintaining connections with graduates and supporting alumni engagement. The office organizes reunions, events, and networking opportunities, fostering a strong alumni community. It also offers resources for career development, including job placement assistance and professional mentorship programs. Through its services, the Alumni Office helps create lasting bonds between former students and the university, contributing to the growth and success of both the alumni and the institution.",
    image: require("../../Images/Liceo Civic Center/Alumni Office (Hallway outside LCC).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Book Center (Hallway outside LCC)",
    latitude: 8.48538,
    longitude: 124.638951,
    description: "LOCATED AT THE HALLWAY OUTSIDE THE LCC.",
    fullDescription:
      "The Book Center at Liceo de Cagayan University provides students, faculty, and staff with a wide range of academic textbooks, reference materials, and school supplies. It serves as a convenient on-campus resource for purchasing required course materials, study guides, and educational tools. The center also offers stationery and other essential items for academic and personal use. By supporting the academic needs of the campus community, the Book Center plays a key role in enhancing the overall learning experience at the university.",
    image: require("../../Images/Liceo Civic Center/Book Center (Hallway outside LCC).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Criminology Martial Arts Hall (Hallway outside LCC)",
    latitude: 8.48538,
    longitude: 124.638951,
    description: "LOCATED AT THE HALLWAY OUTSIDE THE LCC.",
    fullDescription:
      "The Criminology Martial Arts Hall at Liceo de Cagayan University is a specialized facility designed to train criminology students in self-defense, martial arts, and physical fitness. The hall is equipped with mats, training equipment, and safety gear to support practical learning in combat techniques, law enforcement tactics, and personal protection skills. It serves as a hands-on environment where students can develop physical discipline and gain practical skills relevant to their criminology studies and future careers in law enforcement and security.",
    image: require("../../Images/Liceo Civic Center/Criminology Martial Arts Hall (Hallway outside LCC).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Department of Military Science and Tactics Reserve Officers' Training Corps (Outside LCC)",
    latitude: 8.48538,
    longitude: 124.638951,
    description: "LOCATED OUTSIDE THE LCC BESIDE TRAINING CORPS HEADQUARTERS.",
    fullDescription:
      "The Department of Military Science and Tactics – Reserve Officers Training Corps (ROTC) at Liceo de Cagayan University offers a comprehensive training program aimed at developing students' leadership, discipline, and military skills. The ROTC program prepares students for future service as officers in the Armed Forces of the Philippines (AFP) while promoting patriotism, civic responsibility, and national defense awareness. Through structured military drills, physical training, and leadership development, the department equips students with the knowledge and skills needed to serve their country and lead with integrity.",
    image: require("../../Images/Liceo Civic Center/Department of Military Science and Tactics Reserve Officers Training Corps (Outside LCC).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Hallway (Outside LCC)",
    latitude: 8.48538,
    longitude: 124.638951,

    image: require("../../Images/Liceo Civic Center/Hallway (Outside LCC).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Liceo Civic Center or LCC (Entrance)",
    latitude: 8.48538,
    longitude: 124.638951,
    description: "LOCATED IN FRONT OF SAC BUILDING AND BESIDE HALLWAY.",
    fullDescription:
      "The Liceo Civic Center (LCC) at Liceo de Cagayan University is a covered basketball court gym primarily used for sports events, including basketball games and athletic competitions. It also serves as a versatile venue for various campus activities, such as concerts, cultural performances, and university-wide events. With its spacious and multifunctional layout, the LCC provides a dynamic setting for both recreational and institutional activities, fostering school spirit and community engagement.",
    image: require("../../Images/Liceo Civic Center/Liceo Civic Center or LCC (Entrance).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Liceo Civic Center or LCC Canteen, Exit and Comfort Room (CR)",
    latitude: 8.48538,
    longitude: 124.638951,
    description: "LOCATED IN FRONT OF SAC BUILDING AND BESIDE HALLWAY.",
    fullDescription:
      "The Liceo Civic Center (LCC) at Liceo de Cagayan University is a covered basketball court gym primarily used for sports events, including basketball games and athletic competitions. It also serves as a versatile venue for various campus activities, such as concerts, cultural performances, and university-wide events. With its spacious and multifunctional layout, the LCC provides a dynamic setting for both recreational and institutional activities, fostering school spirit and community engagement.",
    image: require("../../Images/Liceo Civic Center/Liceo Civic Center or LCC Canteen, Exit and Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Medical Clinic (Hallway outside LCC)",
    latitude: 8.48538,
    longitude: 124.638951,
    description: "LOCATED AT THE HALLWAY OUTSIDE THE LCC.",
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
    description: "LOCATED OUTSIDE THE LCC BESIDE TRAINING CORPS HEADQUARTERS.",
    fullDescription:
      "The Sports and Athletics Office at Liceo de Cagayan University is responsible for promoting physical fitness, organizing athletic events, and supporting student athletes. The office manages various sports programs, from intramural competitions to intercollegiate tournaments, providing students with opportunities to engage in sports and develop their athletic skills. It also oversees training, coaching, and the overall well-being of student athletes. By fostering school spirit and physical wellness, the Sports and Athletics Office plays a key role in the holistic development of students.",
    image: require("../../Images/Liceo Civic Center/Sports and Athletics Office (Outside LCC).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "North Academic Cluster (NAC Building)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description: "LOCATED BESIDE BOTANICAL GARDEN.",
    fullDescription:
      "The North Academic Cluster at Liceo de Cagayan University is a key educational area on campus, housing classrooms and academic offices for various programs. Designed to foster an interactive and engaging learning environment, the cluster is equipped with modern facilities and resources to support students and faculty. It plays a significant role in the academic life of the university, offering a space for lectures, discussions, and collaborative learning, contributing to the overall academic experience for the Liceo community.",
    image: require("../../Images/North Academic Clutser/Building/North Academic Cluster (NAC Building).jpg"),
    image2: require("../../Images/North Academic Clutser/Building/North Academic Cluster (NAC Building) (1).jpg"),
    image3: require("../../Images/North Academic Clutser/Building/North Academic Cluster (NAC Building) (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC 1st Floor Comfort Room (CR)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 1ST FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    fullDescription:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 1ST FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    image: require("../../Images/North Academic Clutser/CR/NAC 1st Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC 2nd Floor Comfort Room (CR)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 2ND FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    fullDescription:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 2ND FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    image: require("../../Images/North Academic Clutser/CR/NAC 2nd Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC 3rd Floor Comfort Room (CR)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 3RD FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    fullDescription:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 3RD FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    image: require("../../Images/North Academic Clutser/CR/NAC 3rd Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC 4th Floor Comfort Room (CR)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 4TH FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    fullDescription:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 4TH FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    image: require("../../Images/North Academic Clutser/CR/NAC 4th Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC 5th Floor Comfort Room (CR)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 5TH FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    fullDescription:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 5TH FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    image: require("../../Images/North Academic Clutser/CR/NAC 5th Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "North Academic Cluster (1st Floor)",
    latitude: 8.504217,
    longitude: 124.644259,

    image: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (1st Floor).jpg"),
    image2: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (1st Floor) (1).jpg"),
    image3: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (1st Floor) (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "North Academic Cluster (2nd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,

    image: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (2nd Floor).jpg"),
    image2: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (2nd Floor) (1).jpg"),
    image3: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (2nd Floor) (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "North Academic Cluster (3rd Floor)",
    latitude: 8.504217,
    longitude: 124.644259,

    image: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (3rd Floor).jpg"),
    image2: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (3rd Floor) (1).jpg"),
    image3: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (3rd Floor) (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "North Academic Cluster (4th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,

    image: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (4th Floor).jpg"),
    image2: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (4th Floor) (1).jpg"),
    image3: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (4th Floor) (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "North Academic Cluster (5th Floor)",
    latitude: 8.504217,
    longitude: 124.644259,

    image: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (5th Floor).jpg"),
    image2: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (5th Floor) (1).jpg"),
    image3: require("../../Images/North Academic Clutser/Floors/North Academic Cluster (5th Floor) (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "ABM and Mathematics Department (NAC 5th Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 5TH FLOOR OF NAC BUILDING, BESIDE RAMP ENTER THE GLASS DOOR, THE FIRST ROOM.",
    fullDescription:
      "The ABM (Accountancy, Business, and Management) and Mathematics Department Office at Liceo de Cagayan University serves as the administrative center for students and faculty within these disciplines. It handles academic advising, course scheduling, faculty coordination, and departmental activities. The office also supports students in their academic journey by providing resources, guidance, and assistance related to their studies in business, accountancy, management, and mathematics. By ensuring smooth operation and fostering academic excellence, the office contributes to the growth and success of students in these fields.",
    image: require("../../Images/North Academic Clutser/Office/ABM and Mathematics Department (NAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Central Supply Room (NAC 5th Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 5TH FLOOR OF NAC BUILDING, BESIDE COMFORT ROOM.",
    fullDescription:
      "LOCATED ON THE 5TH FLOOR OF NAC BUILDING, BESIDE COMFORT ROOM.",
    image: require("../../Images/North Academic Clutser/Office/Central Supply Room (NAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "ETEEAP Office (NAC 1st Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 1ST OF NAC BUILDING, BESIDE INTERNATIONALIZATION OFFICE.",
    fullDescription:
      "The ETEEAP (Expanded Tertiary Education Equivalency and Accreditation Program) Office at Liceo de Cagayan University is responsible for facilitating the ETEEAP process, which provides individuals with the opportunity to earn a college degree based on their prior learning, work experience, and competencies. The office guides prospective students through the application and assessment procedures, ensuring they meet the necessary requirements for admission into undergraduate programs. It plays a crucial role in helping non-traditional students access higher education and earn academic recognition, contributing to lifelong learning and career advancement.",
    image: require("../../Images/North Academic Clutser/Office/ETEEAP Office (NAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Internationalization Office (NAC 1st Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description: "LOCATED ON THE 1ST OF NAC BUILDING, BESIDE ETEEAP OFFICE.",
    fullDescription:
      "The Internationalization Office at Liceo de Cagayan University is dedicated to enhancing the global engagement of the university through various international programs, partnerships, and opportunities. The office coordinates student exchange programs, overseas study opportunities, and collaborative research with international institutions. It also works to promote cultural exchange, global awareness, and the development of skills necessary for students to thrive in a globalized world. By fostering international partnerships and creating global learning experiences, the office plays a key role in broadening the academic horizons of the Liceo community.",
    image: require("../../Images/North Academic Clutser/Office/Internationalization Office (NAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "LEB Office (NAC 1st Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 1ST OF NAC BUILDING, LAST ROOM FACING WAC BUILDING WITH ROOM NUMBER NAC - 101.",
    fullDescription:
      "The Liceo Ethics Board (LEB) Office at Liceo de Cagayan University is responsible for promoting and upholding ethical standards within the university community. The office addresses issues related to academic integrity, student conduct, and the adherence to ethical practices in all aspects of campus life. It ensures that students, faculty, and staff follow established codes of ethics and encourages a culture of responsibility, respect, and fairness. Through guidance, education, and enforcement of ethical policies, the LEB Office plays a key role in fostering a positive and principled environment at the university.",
    image: require("../../Images/North Academic Clutser/Office/LEB Office (NAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Marketing and Communications Office (NAC 2nd Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 2ND OF NAC BUILDING, LAST ROOM FACING WAC BUILDING.",
    fullDescription:
      "The Marketing and Communications Office at Liceo de Cagayan University is responsible for managing the university's public relations, marketing strategies, and communication efforts. The office handles the promotion of university events, programs, and achievements through various channels, including digital platforms, media outreach, and print materials. It works to enhance the university's image, foster strong relationships with internal and external stakeholders, and ensure effective communication across the Liceo community. By creating compelling content and managing communication efforts, the office plays a vital role in advancing the university's goals and visibility.",
    image: require("../../Images/North Academic Clutser/Office/Marketing and Communications Office (NAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 101 University Research and Publication Office (NAC 1st Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 1ST OF NAC BUILDING, LAST ROOM FACING WAC BUILDING WITH ROOM NUMBER NAC - 101.",
    fullDescription:
      "The University Research and Publication Office at Liceo de Cagayan University is responsible for promoting and supporting research activities across all academic disciplines. The office facilitates research funding, assists faculty and students in developing research proposals, and ensures the quality and ethical standards of research projects. It also manages the publication of academic journals, research papers, and other scholarly works, contributing to the dissemination of knowledge and academic excellence. By fostering a research-driven culture, the office helps elevate the university’s role in advancing knowledge and innovation.",
    image: require("../../Images/North Academic Clutser/Office/NAC - 101 University Research and Publication Office (NAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 200 Conference Room (NAC 2nd Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 2ND OF NAC BUILDING, BESIDE MARKETING AND COMMUNICATIONS OFFICE.",
    fullDescription:
      "The NAC - 200 Conference Room at Liceo de Cagayan University is a versatile space designed for meetings, seminars, workshops, and academic discussions. It is equipped with modern audio-visual tools, including projectors, screens, and sound systems, to facilitate presentations and collaborative sessions. The room serves as a professional setting for faculty, students, and external partners to engage in academic, administrative, and organizational activities. Whether for formal conferences, team meetings, or small group discussions, the Conference Room provides a conducive environment for focused dialogue and decision-making.",
    image: require("../../Images/North Academic Clutser/Office/NAC - 200 Conference Room (NAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 201 Conservatory of Music, Theater and Dance (NAC 2nd Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 2ND OF NAC BUILDING, BESIDE NAC - 200 CONFERENCE ROOM.",
    fullDescription:
      "The Conservatory of Music, Theater, and Dance at Liceo de Cagayan University is dedicated to nurturing artistic talent and creativity in the performing arts. Offering programs in music, theater, and dance, the conservatory provides students with specialized training, performances, and opportunities to develop their skills in their chosen discipline. The conservatory is equipped with state-of-the-art facilities, including practice rooms, theaters, and studios, to support the artistic growth of students. It plays a vital role in cultivating a vibrant cultural community, preparing students for careers in the arts and promoting the importance of creative expression.",
    image: require("../../Images/North Academic Clutser/Office/NAC - 201 Conservatory of Music, Theater and Dance (NAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 301 MAPEH 2 and S.O. Department (NAC 3rd Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 3RD OF NAC BUILDING, LAST 2 ROOMS FACING WAC BUILDING.",
    fullDescription:
      "The MAPEH and Social Orientation (SO) Department at Liceo de Cagayan University offers a comprehensive educational experience that combines Music, Arts, Physical Education, Health (MAPEH), and Social Orientation. The Social Orientation component focuses on orienting students about the school's history, rules, and policies, helping them integrate into the academic environment. The department encourages personal development, promoting creativity, physical well-being, and social responsibility, while ensuring students understand their roles and responsibilities within the university community.",
    image: require("../../Images/North Academic Clutser/Office/NAC - 301 MAPEH 2 and S.O. Department (NAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 302 MAPEH 1 and S.O. Department (NAC 3rd Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 3RD OF NAC BUILDING, LAST 2 ROOMS FACING WAC BUILDING.",
    fullDescription:
      "The MAPEH and Social Orientation (SO) Department at Liceo de Cagayan University offers a comprehensive educational experience that combines Music, Arts, Physical Education, Health (MAPEH), and Social Orientation. The Social Orientation component focuses on orienting students about the school's history, rules, and policies, helping them integrate into the academic environment. The department encourages personal development, promoting creativity, physical well-being, and social responsibility, while ensuring students understand their roles and responsibilities within the university community.",
    image: require("../../Images/North Academic Clutser/Office/NAC - 302 MAPEH 1 and S.O. Department (NAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 406 Departmento ng Filipino (NAC 4th Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description: "LOCATED ON THE 4TH OF NAC BUILDING, BESIDE NAC - 405.",
    fullDescription:
      "The Departmento ng Filipino Office at Liceo de Cagayan University manages the academic and administrative activities related to the Filipino language programs. It provides support for students and faculty in the areas of curriculum development, course scheduling, and academic advising. The office also oversees the implementation of initiatives aimed at promoting Filipino language, literature, and culture across the university. By fostering a deeper understanding and appreciation of the Filipino language, the office helps students develop strong communication skills and cultural awareness.",
    image: require("../../Images/North Academic Clutser/Office/NAC - 406 Departmento ng Filipino (NAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Office of the Principal Senior High School (NAC 1st Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 1ST OF NAC BUILDING, BESIDE COMFORT ROOM FACING RIVERSIDE.",
    fullDescription:
      "The Office of the Principal, Senior High School at Liceo de Cagayan University oversees the academic and administrative functions of the Senior High School division. This office ensures the smooth operation of the school, including the implementation of curricula, student discipline, and faculty management. It provides support to students, parents, and staff, addressing academic concerns and promoting a positive learning environment. The Office of the Principal plays a crucial role in shaping the educational experience of Senior High School students, fostering their personal and academic growth.",
    image: require("../../Images/North Academic Clutser/Office/Office of the Principal Senior High School (NAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Social Sciences Department (NAC 5th Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 5TH OF NAC BUILDING, BESIDE ABM AND MATHEMATICS DEPARTMENT OFFICE.",
    fullDescription:
      "The Social Sciences Department Office at Liceo de Cagayan University is responsible for managing the academic programs and activities related to the social sciences disciplines. This includes areas such as sociology, psychology, political science, economics, and history. The office coordinates course scheduling, academic advising, and faculty development while ensuring that students receive a well-rounded education in the social sciences. It also facilitates research opportunities, student projects, and extracurricular activities that promote critical thinking, social awareness, and engagement with contemporary issues.",
    image: require("../../Images/North Academic Clutser/Office/Social Sciences Department (NAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Audio Visual Room 3 or AVR 3 (NAC 3rd Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 2ND FLOOR OF NAC BUILDING, BESIDE RAMP FACING RIVERSIDE.",
    fullDescription:
      "Audio Visual Room 3 or AVR - 3 at Liceo de Cagayan University is a modern facility designed to support multimedia presentations, lectures, and educational activities. Equipped with advanced audio-visual tools such as projectors, screens, and sound systems, the room provides an interactive and engaging space for students and faculty. It is used for various academic purposes, including lectures, seminars, workshops, and multimedia-based learning sessions, enhancing the overall educational experience by integrating technology into teaching and learning.",
    image: require("../../Images/North Academic Clutser/Rooms/Audio Visual Room 3 or AVR 3 (NAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 103 (NAC 1st Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description: "LOCATED ON THE 1ST FLOOR OF NAC BUILDING, BESIDE NAC - 104.",
    fullDescription:
      "NAC - 103 is a classroom located in the North Academic Cluster (NAC) at Liceo de Cagayan University. It is primarily used by G11 ABM 1 and STEM 33, G12 STEM 35 and G12 STEM 33, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 103 (NAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 104 Engineering Lecture Room (NAC 1st Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description: "LOCATED ON THE 1ST FLOOR OF NAC BUILDING, BESIDE NAC - 103.",
    fullDescription:
      "The Engineering Lecture Room at Liceo de Cagayan University is a specialized space designed for the academic needs of engineering students. Equipped with modern teaching aids, including projectors, whiteboards, and audio-visual tools, it provides an optimal environment for lectures, discussions, and hands-on learning in various engineering disciplines. The room supports interactive learning and facilitates the delivery of technical content, helping students develop the necessary skills and knowledge for their engineering studies. It is an essential part of the university's commitment to providing quality education in the field of engineering.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 104 Engineering Lecture Room (NAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 202 Discussion Room 2 Graduate Studies (NAC 2nd Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description: "LOCATED ON THE 2ND FLOOR OF NAC BUILDING, BESIDE NAC - 204.",
    fullDescription:
      "Discussion Rooms 2 and 3 at Liceo de Cagayan University are designed for small group discussions, collaborative learning, and interactive sessions. These rooms are equipped with comfortable seating, whiteboards, and multimedia tools to facilitate effective communication and teamwork among students. Ideal for seminars, group activities, and project-based learning, the rooms provide a focused environment that encourages student engagement, critical thinking, and problem-solving. These spaces support the university's commitment to fostering collaborative learning and enhancing the overall academic experience.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 202 Discussion Room 2 Graduate Studies (NAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 203 Discussion Room 3 (NAC 2nd Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description: "LOCATED ON THE 2ND FLOOR OF NAC BUILDING, BESIDE NAC - 204.",
    fullDescription:
      "Discussion Rooms 2 and 3 at Liceo de Cagayan University are designed for small group discussions, collaborative learning, and interactive sessions. These rooms are equipped with comfortable seating, whiteboards, and multimedia tools to facilitate effective communication and teamwork among students. Ideal for seminars, group activities, and project-based learning, the rooms provide a focused environment that encourages student engagement, critical thinking, and problem-solving. These spaces support the university's commitment to fostering collaborative learning and enhancing the overall academic experience.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 203 Discussion Room 3 (NAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 204 (NAC 2nd Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 2ND FLOOR OF NAC BUILDING, BESIDE RAMP FACING WAC BUILDING.",
    fullDescription:
      "LOCATED ON THE 2ND FLOOR OF NAC BUILDING, BESIDE RAMP FACING WAC BUILDING.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 204 (NAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 303 (NAC 3rd Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description: "LOCATED ON THE 3RD FLOOR OF NAC BUILDING, BESIDE NAC - 304.",
    fullDescription:
      "NAC - 303 is a classroom located in the North Academic Cluster (NAC) at Liceo de Cagayan University. It is primarily used by G11 HUMSS 1 and 13, G12 HUMSS 1 and 15, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 303 (NAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 304 (NAC 3rd Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 3RD FLOOR OF NAC BUILDING, BESIDE RAMP FACING WAC BUILDING.",
    fullDescription:
      "LOCATED ON THE 3RD FLOOR OF NAC BUILDING, BESIDE RAMP FACING WAC BUILDING.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 304 (NAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 305 (NAC 3rd Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 3RD FLOOR OF NAC BUILDING, BESIDE RAMP FACING RIVERSIDE.",
    fullDescription:
      "NAC - 305 is a classroom located in the North Academic Cluster (NAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 34 and 37, G12 STEM 38 and 43, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 305 (NAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 306 (NAC 3rd Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description: "LOCATED ON THE 3RD FLOOR OF NAC BUILDING, BESIDE NAC - 305.",
    fullDescription:
      "NAC - 306 is a classroom located in the North Academic Cluster (NAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 35 and 38, G12 STEM 39 and 41, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 306 (NAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 307 (NAC 3rd Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description: "LOCATED ON THE 3RD FLOOR OF NAC BUILDING, BESIDE NAC - 306.",
    fullDescription:
      "NAC - 307 is a classroom located in the North Academic Cluster (NAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 36 and HUMSS 12, G12 STEM 40 and 42, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 307 (NAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 401 (NAC 4th Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 4TH FLOOR OF NAC BUILDING, LAST ROOM FACING WAC BUILDING.",
    fullDescription:
      "LOCATED ON THE 4TH FLOOR OF NAC BUILDING, LAST ROOM FACING WAC BUILDING.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 401 (NAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 402 Biology Laboratory (NAC 4th Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description: "LOCATED ON THE 4TH FLOOR OF NAC BUILDING, BESIDE NAC - 401.",
    fullDescription:
      "The Biology Lab at Liceo de Cagayan University is a state-of-the-art facility designed for hands-on learning in the field of biological sciences. Equipped with microscopes, specimen samples, and laboratory tools, the lab provides students with the opportunity to conduct experiments, explore biological concepts, and develop practical skills. It supports various courses related to biology, including cell biology, genetics, ecology, and anatomy, offering a conducive environment for scientific discovery and exploration. The Biology Lab plays a vital role in enhancing the learning experience for students pursuing studies in the life sciences.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 402 Biology Laboratory (NAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 403 Physics Laboratory (NAC 4th Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 4TH FLOOR OF NAC BUILDING, BESIDE NAC - 402 BIOLOGY LAB.",
    fullDescription:
      "The Physics Laboratory at Liceo de Cagayan University is a specialized facility designed to provide students with hands-on experience in exploring and understanding physical principles. Equipped with various instruments and tools for experiments in mechanics, electricity, magnetism, optics, and thermodynamics, the lab allows students to test theories, analyze data, and observe physical phenomena in real-time. The Physics Laboratory is an essential part of the academic curriculum, fostering critical thinking and practical application of physics concepts to enhance students' learning and scientific inquiry.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 403 Physics Laboratory (NAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 404 Chemistry Lab (NAC 4th Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 4TH FLOOR OF NAC BUILDING, BESIDE NAC - 403 PHYSICS LAB AND BESIDE RAMP FACING WAC BUILDING.",
    fullDescription:
      "The Chemistry Laboratory at Liceo de Cagayan University is a fully equipped facility designed to support hands-on learning and experimentation in chemistry. It features a wide range of tools, chemicals, and equipment for conducting experiments in organic, inorganic, analytical, and physical chemistry. Students can explore chemical reactions, conduct titrations, and study the properties of various substances in a controlled and safe environment. The Chemistry Lab plays a crucial role in providing students with practical experience, helping them apply theoretical knowledge to real-world scientific scenarios.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 404 Chemistry Lab (NAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 405 Crime Scene Room (NAC 4th Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 4TH FLOOR OF NAC BUILDING, BESIDE RAMP FACING RIVERSIDE.",
    fullDescription:
      "The Crime Scene Room at Liceo de Cagayan University is a specialized facility designed for criminology students to simulate and practice crime scene investigations. The room is equipped with tools and setups that mimic real-life crime scenes, allowing students to engage in forensic analysis, evidence collection, and crime scene documentation. It provides a hands-on learning environment for students to apply theories and techniques related to criminal investigations, forensic science, and law enforcement procedures, preparing them for careers in criminal justice and forensic fields.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 405 Crime Scene Room (NAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 407 Criminalistics Laboratory (NAC 4th Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 4TH FLOOR OF NAC BUILDING, BESIDE FILIPINO DEPARTMENT OFFICE.",
    fullDescription:
      "The Criminalistics Laboratory at Liceo de Cagayan University is a dedicated facility for criminology students to learn and practice forensic science techniques. Equipped with various tools and equipment, the lab allows students to analyze evidence such as fingerprints, hair samples, fibers, and blood, as well as perform ballistics and toxicology tests. The lab provides hands-on experience in criminal investigation processes, helping students develop essential skills for solving crimes, conducting forensic analysis, and supporting law enforcement practices in real-world scenarios.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 407 Criminalistics Laboratory (NAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 505 (NAC 5th Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 5TH FLOOR OF NAC BUILDING, BESIDE RAMP FACING RIVERSIDE.",
    fullDescription:
      "LOCATED ON THE 5TH FLOOR OF NAC BUILDING, BESIDE RAMP FACING RIVERSIDE.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 505 (NAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 506 (NAC 5th Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description: "LOCATED ON THE 5TH FLOOR OF NAC BUILDING, BESIDE NAC - 505.",
    fullDescription:
      "LOCATED ON THE 5TH FLOOR OF NAC BUILDING, BESIDE NAC - 505.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 506 (NAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "NAC - 507 (NAC 5th Floor)",
    latitude: 8.487049621394348,
    longitude: 124.63952585171573,
    description:
      "LOCATED ON THE 5TH FLOOR OF NAC BUILDING, BESIDE NAC - 506, AND THE LAST ROOM FACING RIVERSIDE.",
    fullDescription:
      "LOCATED ON THE 5TH FLOOR OF NAC BUILDING, BESIDE NAC - 506, AND THE LAST ROOM FACING RIVERSIDE.",
    image: require("../../Images/North Academic Clutser/Rooms/NAC - 507 (NAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Parking Lot",
    latitude: 8.486443890790417,
    longitude: 124.63925167070924,
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
    latitude: 8.485117229344848,
    longitude: 124.63958196178598,
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
    latitude: 8.486349640484413,
    longitude: 124.63985574858367,
    description: "LOCATED BEHIND EAC BUILDING, RIVERSIDE AREA.",
    fullDescription:
      "The Riverside Canteen at Liceo de Cagayan University is a popular dining spot offering a variety of affordable and delicious meals for students, faculty, and staff. Located near the riverside, it provides a relaxing atmosphere for casual meals, social gatherings, or quick breaks between classes. The canteen serves as a convenient and refreshing option for nourishment and relaxation in the heart of the campus.",
    image: require("../../Images/Riverside Canteen/Riverside Canteen.jpg"),
    image2: require("../../Images/Riverside Canteen/Riverside Canteen (1).jpg"),
    image3: require("../../Images/Riverside Canteen/Riverside Canteen (2).jpg"),
    image4: require("../../Images/Riverside Canteen/Riverside Canteen (3).jpg"),
  },
  {
    name: "Riverside Chapel",
    latitude: 8.485179967613053,
    longitude: 124.63930668359077,
    description: "LOCATED IN FRONT OF SAC BUILDING, RIVERSIDE AREA.",
    fullDescription:
      "The Riverside Chapel at Liceo de Cagayan University is a serene and spiritual space offering a peaceful environment for reflection, prayer, and religious services. Located by the river, it provides a tranquil setting for students, faculty, and visitors to connect spiritually and seek solace. The chapel is a place of comfort and community, hosting regular masses, and spiritual activities that promote faith and well-being within the universit",
    image: require("../../Images/Riverside Chapel/Riverside Chapel.jpg"),
    image2: require("../../Images/Riverside Chapel/Riverside Chapel (1).jpg"),
    image3: require("../../Images/Riverside Chapel/Riverside Chapel (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Rodelsa Grounds",
    latitude: 8.485919437348306,
    longitude: 124.6393337372668,
    description: "LOCATED IN FRONT OF RODELSA HALL AND THE SCHOOL LIBRARY.",
    fullDescription:
      "Rodelsa Grounds at Liceo de Cagayan University is a spacious outdoor area designed for various recreational, sports, and cultural activities. Named in honor of a notable figure, the grounds provide an ideal venue for events such as athletic competitions, student gatherings, and campus festivals. With its open space and well-maintained facilities, Rodelsa Grounds serves as a hub for student engagement, physical fitness, and community-building activities.",
    image: require("../../Images/Rodelsa Grounds/Rodelsa Grounds.jpg"),
    image2: require("../../Images/Rodelsa Grounds/Rodelsa Grounds (1).jpg"),
    image3: require("../../Images/Rodelsa Grounds/Rodelsa Grounds (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Rodelsa Hall",
    latitude: 8.486014706257214,
    longitude: 124.6390198054039,
    description: "LOCATED IN FRONT OF RODELSA GROUNDS AND THE SCHOOL LIBRARY.",
    fullDescription:
      "Rodelsa Hall at Liceo de Cagayan University is a central administrative building that houses key offices such as the University Registrar, School Cashier, and other essential administrative services. It also serves as a historical and symbolic space, featuring the statue of the university’s founder. The hall plays a pivotal role in campus operations, providing students and faculty with vital services and fostering a sense of tradition and pride within the university community.",
    image: require("../../Images/Rodelsa Hall/Building/Rodelsa Hall.jpg"),
    image2: require("../../Images/Rodelsa Hall/Building/Rodelsa Hall (1).jpg"),
    image3: require("../../Images/Rodelsa Hall/Building/Rodelsa Hall (2).jpg"),
    image4: require("../../Images/Rodelsa Hall/Building/Rodelsa Hall (3).jpg"),
  },
  {
    name: "Rodelsa Hall Faculty Comfort Room (CR)",
    latitude: 8.486059,
    longitude: 124.63915,
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
    latitude: 8.486039,
    longitude: 124.639092,
    description: "LOCATED INSIDE RODELSA HALL.",
    fullDescription:
      "The Budget Office at Liceo de Cagayan University is responsible for the planning, allocation, and management of the university's financial resources. It ensures that funds are distributed efficiently across various departments, programs, and initiatives to support the institution's goals. The office works closely with other administrative units to prepare and monitor budgets, track expenditures, and ensure compliance with financial policies. By overseeing the university's financial planning, the Budget Office plays a crucial role in maintaining fiscal responsibility and supporting the institution’s long-term growth and sustainability.",
    image: require("../../Images/Rodelsa Hall/Office/Budget Office (Rodelsa Hall).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Guidance and Counseling Center (Rodelsa Hall)",
    latitude: 8.486039,
    longitude: 124.639092,
    description: "LOCATED INSIDE RODELSA HALL.",
    fullDescription:
      "The Guidance and Counseling Center at Liceo de Cagayan University provides a supportive environment for students' personal, academic, and career development. The center offers professional counseling services, guidance on mental health and well-being, and assistance with academic challenges. It also organizes workshops, seminars, and activities aimed at enhancing students' emotional resilience, decision-making skills, and overall personal growth. Dedicated to fostering a positive campus experience, the center ensures students have the resources to succeed both inside and outside the classroom.",
    image: require("../../Images/Rodelsa Hall/Office/Guidance and Counseling Center (Rodelsa Hall).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "University Registrar (Rodelsa Hall)",
    latitude: 8.486039,
    longitude: 124.639092,
    description: "LOCATED AT RODELSA HALL.",
    fullDescription:
      "The University Registrar at Liceo de Cagayan University is responsible for maintaining academic records, managing student enrollment, and overseeing registration processes. It serves as a vital office for students, handling tasks such as transcript requests, course registration, schedule adjustments, and academic certifications. The Registrar also ensures compliance with university policies and academic standards, playing a key role in students' academic journeys from admission to graduation.",
    image: require("../../Images/Rodelsa Hall/Office/Office of the Registrar (Rodelsa Hall).jpg"),
    image2: require("../../Images/Rodelsa Hall/Office/University Registrar (Rodelsa Hall).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "University Cashier (Rodelsa Hall)",
    latitude: 8.486039,
    longitude: 124.639092,
    description: "LOCATED AT RODELSA HALL.",
    fullDescription:
      "The University Cashier at Liceo de Cagayan University handles all financial transactions related to student accounts. This includes processing tuition payments, fees, fines, and refunds. The office ensures that financial records are accurately maintained and provides assistance to students and parents regarding billing inquiries. The Cashier’s office is also responsible for issuing official receipts and supporting financial matters to ensure smooth academic operations for students and staff.",
    image: require("../../Images/Rodelsa Hall/Office/University Cashier (Rodelsa Hall).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "South Academic Cluster (SAC Building)",
    latitude: 8.484912,
    longitude: 124.638948,
    description: "LOCATED IN FRONT OF LCC, BESIDE RIVERSIDE.",
    fullDescription:
      "The South Academic Cluster at Liceo de Cagayan University is one of the oldest buildings on campus, housing classrooms and offices for various academic programs. This historic building has been a central part of the university's educational experience, providing a conducive environment for learning and faculty collaboration. With its modern facilities integrated into a rich legacy, the South Academic Cluster continues to play a vital role in supporting the academic growth and development of students, contributing to the university's long-standing tradition of excellence in education.",
    image: require("../../Images/South Academic Cluster/Building/South Academic Cluster (SAC Building).jpg"),
    image2: require("../../Images/South Academic Cluster/Building/South Academic Cluster (SAC Building) (1).jpg"),
    image3: require("../../Images/South Academic Cluster/Building/South Academic Cluster (SAC Building) (2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC 1st Floor Comfort Room (CR)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 1ST FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    fullDescription:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 1ST FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    image: require("../../Images/South Academic Cluster/CR/SAC 1st Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC 2nd Floor Comfort Room (CR)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 2ND FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    fullDescription:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 2ND FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    image: require("../../Images/South Academic Cluster/CR/SAC 2nd Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC 3rd Floor Comfort Room (CR)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 3RD FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    fullDescription:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 3RD FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    image: require("../../Images/South Academic Cluster/CR/SAC 3rd Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC 4th Floor Comfort Room (CR)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 4TH FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    fullDescription:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 4TH FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    image: require("../../Images/South Academic Cluster/CR/SAC 4th Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC 5th Floor Comfort Room (CR)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 5TH FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    fullDescription:
      "LOCATED AT THE LAST ROOM ON EACH FLOOR, FACING THE ROAD AND THE 5TH FLOOR COMFORT ROOM BEING AT THE OPPOSITE SIDE.",
    image: require("../../Images/South Academic Cluster/CR/SAC 5th Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "South Academic Cluster (1st Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    image: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (1st Floor).jpg"),
    image2: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (1st Floor)(1).jpg"),
    image3: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (1st Floor)(2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "South Academic Cluster (2nd Floor)",
    latitude: 8.484912,
    longitude: 124.638948,

    image: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (2nd Floor).jpg"),
    image2: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (2nd Floor)(1).jpg"),
    image3: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (2nd Floor)(2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "South Academic Cluster (3rd Floor)",
    latitude: 8.484912,
    longitude: 124.638948,

    image: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (3rd Floor).jpg"),
    image2: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (3rd Floor)(1).jpg"),
    image3: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (3rd Floor)(2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "South Academic Cluster (4th Floor)",
    latitude: 8.484912,
    longitude: 124.638948,

    image: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (4th Floor).jpg"),
    image2: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (4th Floor)(1).jpg"),
    image3: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (4th Floor)(2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "South Academic Cluster (5th Floor)",
    latitude: 8.484912,
    longitude: 124.638948,

    image: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (5th Floor).jpg"),
    image2: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (5th Floor)(1).jpg"),
    image3: require("../../Images/South Academic Cluster/Floors/South Academic Cluster (5th Floor)(2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "College of Business and Accountancy Office (SAC 1st Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 1ST FLOOR OF SAC BUILDING, BESIDE RAMP FACING THE ROAD.",
    fullDescription:
      "The College of Business and Accountancy Office at Liceo de Cagayan University is responsible for managing the academic and administrative functions of the College of Business and Accountancy. The office handles course scheduling, student advising, faculty coordination, and oversees the implementation of the college's programs in business administration, accountancy, and related fields. It also plays a key role in promoting academic excellence, providing support for student organizations, and facilitating opportunities for internships and industry partnerships, helping prepare students for successful careers in business and finance.",
    image: require("../../Images/South Academic Cluster/Office/College of Business and Accountancy Office (SAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "College of Engineering Office (SAC 1st Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 1ST FLOOR OF SAC BUILDING, BESIDE COLLEGE OF BUSINESS AND ACCOUNTANCY OFFICE.",
    fullDescription:
      "The College of Engineering Office at Liceo de Cagayan University oversees the academic and administrative activities of the College of Engineering. This office is responsible for managing student enrollment, course scheduling, faculty coordination, and the implementation of the engineering curriculum. It also provides academic advising and support services to ensure that students receive quality education and practical training in various engineering disciplines. The College of Engineering Office plays a vital role in shaping the academic experience, preparing students for successful careers in engineering and technology.",
    image: require("../../Images/South Academic Cluster/Office/College of Engineering Office (SAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Kitchen (SAC 5th Floor)",
    latitude: 8.484912,
    longitude: 124.638948,

    image: require("../../Images/South Academic Cluster/Office/Kitchen (SAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "LICEO PRESS (SAC 1st Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 1ST FLOOR OF SAC BUILDING, LAST ROOM FACING THE ROAD.",
    fullDescription:
      "Liceo Press is an office at Liceo de Cagayan University responsible for managing the creation and production of student ID cards. The office ensures that all students have their ID cards processed efficiently, serving as an essential service for campus identification and access. In addition to ID card management, Liceo Press may also handle other related tasks that support university administration and student services.",
    image: require("../../Images/South Academic Cluster/Office/LICEO PRESS (SAC 1st Floor).jpg"),
    image2: require("../../Images/South Academic Cluster/Office/LICEO PRESS (SAC 1st Floor)(1).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Muslim Prayer Room (SAC 1st Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 1ST FLOOR OF SAC BUILDING, BENEATH STAIRCASE AND RAMP.",
    fullDescription:
      "The Muslim Prayer Room at Liceo de Cagayan University provides a designated, peaceful space for Muslim students and faculty to perform their daily prayers and religious practices. The room is designed to offer a quiet, respectful environment that caters to the spiritual needs of the Muslim community on campus. It is equipped with prayer mats and other necessary amenities, ensuring that students can observe their religious duties comfortably and without disruption. The room reflects the university's commitment to fostering an inclusive and respectful environment for students of all faiths.",
    image: require("../../Images/South Academic Cluster/Office/Muslim Prayer Room (SAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 508 Travel Bureau (SAC 5th Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 5TH FLOOR OF SAC BUILDING, BESIDE COMFORT ROOM.",
    fullDescription:
      "The Travel Bureau Office at Liceo de Cagayan University supports the Tourism Program in the College. This office serves as a resource for students studying tourism, providing hands-on experience in the travel and hospitality industry. It offers services related to travel planning, reservations, and coordination for tourism-related academic activities, including field trips, study tours, and internships. The Travel Bureau Office plays a key role in equipping students with practical skills and knowledge necessary for a successful career in the tourism and hospitality industry.",
    image: require("../../Images/South Academic Cluster/Office/SAC - 508 Travel Bureau (SAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SBMA Faculty Room (SAC 1st Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 1ST FLOOR OF SAC BUILDING, BESIDE RAMP FACING RIVERSIDE.",
    fullDescription:
      "The SBMA Faculty Room at Liceo de Cagayan University is a dedicated space for the faculty members of the School of Business and Management and Accounting (SBMA). It serves as a place where instructors can collaborate, prepare lessons, hold meetings, and engage in academic discussions. The room is designed to support the professional needs of the faculty, providing a comfortable and functional environment for them to perform administrative tasks, attend to student concerns, and foster a sense of community among the faculty members.",
    image: require("../../Images/South Academic Cluster/Office/SBMA Faculty Room (SAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SBMA Graduate School (SAC 1st Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 1ST FLOOR OF SAC BUILDING, BESIDE RAMP FACING RIVERSIDE.",
    fullDescription:
      "LOCATED ON THE 1ST FLOOR OF SAC BUILDING, BESIDE RAMP FACING RIVERSIDE.",
    image: require("../../Images/South Academic Cluster/Office/SBMA Graduate School (SAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Speech Enhancement Center or SEC (SAC 2nd Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 2ND FLOOR OF SAC BUILDING, BESIDE COMFORT ROOM.",
    fullDescription:
      "The Speech Enhancement Center at Liceo de Cagayan University is a specialized facility that focuses on improving students' communication and public speaking skills. It offers programs and resources to enhance pronunciation, clarity, and vocal delivery. The center also serves as the residence of the Glee Club, providing a space for the group to practice and refine their vocal performances. Through individual coaching, group workshops, and other activities, the Speech Enhancement Center helps students build confidence in their speaking abilities and develop strong communication skills for academic and professional success.",
    image: require("../../Images/South Academic Cluster/Office/Speech Enhancement Center or SEC (SAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Tourism Faculty Room, and Mini Hotel (SAC 5th Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 5TH FLOOR OF SAC BUILDING, BESIDE RAMP FACING RIVERSIDE.",
    fullDescription:
      "The Tourism Course Faculty Room at Liceo de Cagayan University is a dedicated space for the faculty members teaching in the Tourism program. It provides a collaborative environment where instructors can prepare lessons, conduct meetings, and engage in academic discussions. The room is designed to offer faculty a comfortable area for administrative tasks, student consultations, and professional development. It serves as a central hub for the Tourism faculty, supporting their efforts to deliver quality education and foster an enriching learning experience for students in the Tourism program.",
    image: require("../../Images/South Academic Cluster/Office/Tourism Faculty Room, and Mini Hotel (SAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 101 (SAC 1st Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 1ST FLOOR OF SAC BUILDING, LAST ROOM FACING RIVERSIDE.",
    fullDescription:
      "LOCATED ON THE 1ST FLOOR OF SAC BUILDING, LAST ROOM FACING RIVERSIDE.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 101 (SAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 102 (SAC 1st Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description: "LOCATED ON THE 1ST FLOOR OF SAC BUILDING, BESIDE SAC - 101.",
    fullDescription:
      "LOCATED ON THE 1ST FLOOR OF SAC BUILDING, BESIDE SAC - 101.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 102 (SAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 201 (SAC 2nd Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 2ND FLOOR OF SAC BUILDING, LAST ROOM FACING RIVERSIDE.",
    fullDescription:
      "LOCATED ON THE 2ND FLOOR OF SAC BUILDING, LAST ROOM FACING RIVERSIDE.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 201 (SAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 202 (SAC 2nd Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description: "LOCATED ON THE 2ND FLOOR OF SAC BUILDING, BESIDE SAC - 201.",
    fullDescription:
      "LOCATED ON THE 2ND FLOOR OF SAC BUILDING, BESIDE SAC - 201.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 202 (SAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 203 (SAC 2nd Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description: "LOCATED ON THE 2ND FLOOR OF SAC BUILDING, BESIDE SAC - 202.",
    fullDescription:
      "LOCATED ON THE 2ND FLOOR OF SAC BUILDING, BESIDE SAC - 202.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 203 (SAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 204 (SAC 2nd Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 2ND FLOOR OF SAC BUILDING, BESIDE RAMP FACING RIVERSIDE.",
    fullDescription:
      "LOCATED ON THE 2ND FLOOR OF SAC BUILDING, BESIDE RAMP FACING RIVERSIDE.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 204 (SAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 205 (SAC 2nd Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 2ND FLOOR OF SAC BUILDING, BESIDE RAMP FACING ROAD.",
    fullDescription:
      "LOCATED ON THE 2ND FLOOR OF SAC BUILDING, BESIDE RAMP FACING ROAD.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 205 (SAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 206 (SAC 2nd Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 2ND FLOOR OF SAC BUILDING, IN BETWEEN SPEECH ENHANCEMENT CENTER AND SAC - 205.",
    fullDescription:
      "LOCATED ON THE 2ND FLOOR OF SAC BUILDING, IN BETWEEN SPEECH ENHANCEMENT CENTER AND SAC - 205.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 206 (SAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 301 (SAC 3rd Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 3RD FLOOR OF SAC BUILDING, LAST ROOM FACING RIVERSIDE",
    fullDescription:
      "SAC - 301 is a classroom located in the South Academic Cluster (SAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 1 and 17, G12 STEM 1 and 17, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 301 (SAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 302 (SAC 3rd Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description: "LOCATED ON THE 3RD FLOOR OF SAC BUILDING, BESIDE SAC - 301",
    fullDescription:
      "SAC - 302 is a classroom located in the South Academic Cluster (SAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 2 and 18, G12 STEM 2 and 18, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 302 (SAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 303 (SAC 3rd Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description: "LOCATED ON THE 3RD FLOOR OF SAC BUILDING, BESIDE SAC - 302",
    fullDescription:
      "SAC - 303 is a classroom located in the South Academic Cluster (SAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 3 and 19, G12 STEM 3 and 19, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 303 (SAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 304 (SAC 3rd Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 3RD FLOOR OF SAC BUILDING, BESIDE RAMP FACING RIVERSIDE.",
    fullDescription:
      "SAC - 304 is a classroom located in the South Academic Cluster (SAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 4 and 20, G12 STEM 4 and 20, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 304 (SAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 305 (SAC 3rd Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 3RD FLOOR OF SAC BUILDING, BESIDE RAMP FACING ROAD.",
    fullDescription:
      "SAC - 305 is a classroom located in the South Academic Cluster (SAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 5 and 21, G12 STEM 5 and 21, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 305 (SAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 306 (SAC 3rd Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description: "LOCATED ON THE 3RD FLOOR OF SAC BUILDING, BESIDE SAC - 305.",
    fullDescription:
      "SAC - 306 is a classroom located in the South Academic Cluster (SAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 6 and 22, G12 STEM 6 and 22, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 306 (SAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 307 (SAC 3rd Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description: "LOCATED ON THE 3RD FLOOR OF SAC BUILDING, BESIDE SAC - 306.",
    fullDescription:
      "SAC - 307 is a classroom located in the South Academic Cluster (SAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 7 and 23, G12 STEM 7 and 23, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 307 (SAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 308 (SAC 3rd Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 3RD FLOOR OF SAC BUILDING, BESIDE COMFORT ROOM.",
    fullDescription:
      "SAC - 308 is a classroom located in the South Academic Cluster (SAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 8 and 24, G12 STEM 8 and 24, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 308 (SAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 401 (SAC 4th Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 4TH FLOOR OF SAC BUILDING, LAST ROOM FACING RIVERSIDE.",
    fullDescription:
      "SAC - 401 is a classroom located in the South Academic Cluster (SAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 9 and 25, G12 STEM 9 and 25, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 401 (SAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 402 (SAC 4th Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description: "LOCATED ON THE 4TH FLOOR OF SAC BUILDING, BESIDE SAC - 401.",
    fullDescription:
      "SAC - 402 is a classroom located in the South Academic Cluster (SAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 10 and 26, G12 STEM 10 and 26, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 402 (SAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 403 (SAC 4th Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description: "LOCATED ON THE 4TH FLOOR OF SAC BUILDING, BESIDE SAC - 402.",
    fullDescription:
      "SAC - 403 is a classroom located in the South Academic Cluster (SAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 11 and 27, G12 STEM 11 and 27, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 403 (SAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 404 (SAC 4th Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 4TH FLOOR OF SAC BUILDING, BESIDE RAMP FACING RIVERSIDE.",
    fullDescription:
      "SAC - 404 is a classroom located in the South Academic Cluster (SAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 12 and 28, G12 STEM 12 and 28, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 404 (SAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 405 (SAC 4th Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 4TH FLOOR OF SAC BUILDING, BESIDE RAMP FACING ROAD.",
    fullDescription:
      "SAC - 405 is a classroom located in the South Academic Cluster (SAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 13 and 29, G12 STEM 13 and 29, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 405 (SAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 406 (SAC 4th Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description: "LOCATED ON THE 4TH FLOOR OF SAC BUILDING, BESIDE SAC - 405.",
    fullDescription:
      "SAC - 406 is a classroom located in the South Academic Cluster (SAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 14 and 30, G12 STEM 14 and 30, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 406 (SAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 407 (SAC 4th Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description: "LOCATED ON THE 4TH FLOOR OF SAC BUILDING, BESIDE SAC - 406.",
    fullDescription:
      "SAC - 407 is a classroom located in the South Academic Cluster (SAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 15 and 31, G12 STEM 15 and 31, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 407 (SAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 408 (SAC 4th Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 4TH FLOOR OF SAC BUILDING, BESIDE COMFORT ROOM.",
    fullDescription:
      "SAC - 408 is a classroom located in the South Academic Cluster (SAC) at Liceo de Cagayan University. It is primarily used by G11 STEM 16 and 32, G12 STEM 16 and 32, each with different schedules. The classroom is equipped with modern facilities to support the academic needs of students, providing a conducive environment for lectures and interactive learning.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 408 (SAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SAC - 507 (SAC 5th Floor)",
    latitude: 8.484912,
    longitude: 124.638948,
    description:
      "LOCATED ON THE 5TH FLOOR OF SAC BUILDING, BESIDE SAC - 508 TRAVEL BUREAU OFFICE.",
    fullDescription:
      "LOCATED ON THE 5TH FLOOR OF SAC BUILDING, BESIDE SAC - 508 TRAVEL BUREAU OFFICE.",
    image: require("../../Images/South Academic Cluster/Rooms/SAC - 507 (SAC 5th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "South Academic Cluster Canteen",
    latitude: 8.484912,
    longitude: 124.638948,
    description: "LOCATED AT THE LEFT SIDE OF SAC BUILDING FACING THE LCC.",
    fullDescription:
      "The South Academic Cluster Canteen at Liceo de Cagayan University is a popular dining venue offering a variety of affordable meals and snacks for students, faculty, and staff. Located beside the South Academic Cluster, it provides a convenient spot for quick meals or socializing during breaks. The canteen serves a diverse selection of food, catering to different tastes and dietary needs, ensuring a satisfying and accessible option for the campus community throughout the day.",
    image: require("../../Images/South Academic Cluster Canteen/South Academic Cluster Canteen.jpg"),
    image2: require("../../Images/South Academic Cluster Canteen/South Academic Cluster Canteen(1).jpg"),
    image3: require("../../Images/South Academic Cluster Canteen/South Academic Cluster Canteen(2).jpg"),
    image4: require("../../Images/South Academic Cluster Canteen/South Academic Cluster Canteen(3).jpg"),
  },
  {
    name: "West Academic Cluster (WAC Building)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED IN FRONT OF EAC BUILDING AND BESIDE BOTANICAL GARDEN.",
    fullDescription:
      "The West Academic Cluster at Liceo de Cagayan University is a central academic building that houses most of the science laboratories for college courses, as well as the College of Information Technology. It provides specialized facilities for practical learning in various scientific fields, such as chemistry, biology, and physics, and is equipped with modern resources for students in the Information Technology program. This cluster plays a vital role in fostering academic excellence, scientific inquiry, and technological innovation at the university.",
    image: require("../../Images/West Academic Cluster/Building/West Academic Cluster (WAC Building).jpg"),
    image2: require("../../Images/West Academic Cluster/Building/West Academic Cluster (WAC Building)(1).jpg"),
    image3: require("../../Images/West Academic Cluster/Building/West Academic Cluster (WAC Building)(2).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC 1st Floor Comfort Room (CR)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED IN FRONT OF WAC BUILDING'S RAMP. THE 1ST FLOOR COMFORT ROOM IS LOCATED IN THE LAST ROOM OF THE HALLWAY.",
    fullDescription:
      "LOCATED IN FRONT OF WAC BUILDING'S RAMP. THE 1ST FLOOR COMFORT ROOM IS LOCATED IN THE LAST ROOM OF THE HALLWAY.",
    image: require("../../Images/West Academic Cluster/CR/WAC 1st Floor Comfort Room (CR).jpg"),
    image2: require("../../Images/West Academic Cluster/CR/WAC 2nd Floor Comfort Room (CR).jpg"),
    image3: require("../../Images/West Academic Cluster/CR/WAC 3rd Floor Comfort Room (CR).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "West Academic Cluster (1st Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    image: require("../../Images/West Academic Cluster/Floors/West Academic Cluster (1st Floor Interior).jpg"),
    image2: require("../../Images/West Academic Cluster/Floors/West Academic Cluster (1st Floor).jpg"),
    image3: require("../../Images/West Academic Cluster/Floors/West Academic Cluster (1st Floor)(1).jpg"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "West Academic Cluster (2nd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    image: require("../../Images/West Academic Cluster/Floors/West Academic Cluster (2nd Floor Interior).jpg"),
    image2: require("../../Images/West Academic Cluster/Floors/West Academic Cluster (2nd Floor)(1).jpg"),
    image3: require("../../Images/West Academic Cluster/Floors/West Academic Cluster (2nd Floor)(2).jpg"),
    image4: require("../../Images/West Academic Cluster/Floors/West Academic Cluster (2nd Floor)(3).jpg"),
  },
  {
    name: "West Academic Cluster (3rd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    image: require("../../Images/West Academic Cluster/Floors/West Academic Cluster (3rd Floor Interior).jpg"),
    image2: require("../../Images/West Academic Cluster/Floors/West Academic Cluster (3rd Floor Interior)(1).jpg"),
    image3: require("../../Images/West Academic Cluster/Floors/West Academic Cluster (3rd Floor)(1).jpg"),
    image4: require("../../Images/West Academic Cluster/Floors/West Academic Cluster (3rd Floor).jpg"),
  },
  {
    name: "West Academic Cluster (4th Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    image: require("../../Images/West Academic Cluster/Floors/West Academic Cluster (4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "College of Arts and Sciences Faculty Office (WAC 3rd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, INFRONT OF COLLEGE OF INFORMATION TECHNOLOGY SIGNAGE.",
    fullDescription:
      "The College of Arts and Sciences Office at Liceo de Cagayan University oversees the academic and administrative functions of the College of Arts and Sciences. This office is responsible for course scheduling, student advising, faculty coordination, and implementing the college's programs in various disciplines such as humanities, social sciences, and natural sciences. It plays a key role in supporting students throughout their academic journey, providing guidance, resources, and services to ensure their success and helping to uphold the college’s commitment to academic excellence.",
    image: require("../../Images/West Academic Cluster/Office/College of Arts and Sciences Faculty Office (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "College of Information Technology Office (WAC 3rd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, 1ST ROOM FACING PARKING LOT.",
    fullDescription:
      "The College of Information Technology Office at Liceo de Cagayan University is responsible for managing the academic and administrative affairs of the College of Information Technology. This office oversees course scheduling, student advising, faculty coordination, and the implementation of programs related to information technology, computer science, and other tech-related disciplines. It plays a vital role in supporting students' academic and professional growth, providing resources and guidance to help them succeed in the rapidly evolving field of technology. The office is also instrumental in promoting innovation and fostering a tech-driven learning environment.",
    image: require("../../Images/West Academic Cluster/Office/College of Information Technology Office (WAC 3rd Floor).jpg"),
    image2: require("../../Images/West Academic Cluster/Office/College of Information Technology Office (WAC 3rd Floor)(1).jpg"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "IT Storage 1 (WAC 2nd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, BENEATH RAMP AND THE 1ST ONE BESIDE THE STAIRCASE.",
    fullDescription:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, BENEATH RAMP AND THE 1ST ONE BESIDE THE STAIRCASE.",
    image: require("../../Images/West Academic Cluster/Office/IT Storage 1 (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "IT Storage 2 (WAC 2nd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, BENEATH RAMP AND THE 1ST ONE BESIDE THE STAIRCASE.",
    fullDescription:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, BENEATH RAMP AND THE 1ST ONE BESIDE THE STAIRCASE.",
    image: require("../../Images/West Academic Cluster/Office/IT Storage 2 (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "LICEONET Office (WAC 2nd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, IN FRONT OF RAMP ENTRANCE.",
    fullDescription:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, IN FRONT OF RAMP ENTRANCE.",
    image: require("../../Images/West Academic Cluster/Office/LICEONET Office (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Natural Science Department (WAC 1st Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 1ST FLOOR OF WAC BUILDING, BESIDE COMFORT ROOM.",
    fullDescription:
      "LOCATED ON THE 1ST FLOOR OF WAC BUILDING, BESIDE COMFORT ROOM.",
    image: require("../../Images/West Academic Cluster/Office/Natural Science Department (WAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Office of the Alumni Affairs (WAC 1st Floor beside Car Entrance)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 1ST FLOOR OF WAC BUILDING, FACING PARKING LOT.",
    fullDescription:
      "The Alumni Affairs Office at Liceo de Cagayan University is responsible for maintaining connections with the university's graduates. It manages alumni relations, organizes reunions, and coordinates activities that encourage alumni involvement in the university's ongoing development. The office also supports alumni by providing networking opportunities, career services, and avenues for giving back to the university. Through its programs, the Alumni Affairs Office plays an essential role in strengthening the university's alumni community and fostering a sense of pride and continued engagement among its graduates.",
    image: require("../../Images/West Academic Cluster/Office/Office of the Alumni Affairs (WAC 1st Floor beside Car Entrance).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Office of the Physical Plant and Activities (WAC 2nd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, BESIDE CAS STUDENTS' LOUNGE.",
    fullDescription:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, BESIDE CAS STUDENTS' LOUNGE.",
    image: require("../../Images/West Academic Cluster/Office/Office of the Physical Plant and Activities (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Office of the Prefecture of Discipline and Student Affirs (WAC 3rd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 3RD FLOOR OF WAC BUILDING, BESIDE STAIRCASE FACING BOTANICAL GARDEN.",
    fullDescription:
      "The Office of the Prefecture of Discipline and Student Affairs (PDSA) at Liceo de Cagayan University is responsible for maintaining order and promoting student welfare on campus. This office manages student conduct, enforces university policies, and provides support services to ensure a positive and conducive learning environment. The PDSA is also involved in organizing student activities, addressing student concerns, and offering guidance on personal development and discipline. By fostering a respectful and disciplined campus culture, the office plays a crucial role in supporting students' growth both academically and personally.",
    image: require("../../Images/West Academic Cluster/Office/Office of the Prefecture of Discipline and Student Affairs (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "SIKAP Office (WAC 1st Floor beside Car Entrance)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 1ST FLOOR OF WAC BUILDING, FACING PARKING LOT BESIDE ALUMNI AFFAIRS OFFICE.",
    fullDescription:
      "LOCATED ON THE 1ST FLOOR OF WAC BUILDING, FACING PARKING LOT BESIDE ALUMNI AFFAIRS OFFICE.",
    image: require("../../Images/West Academic Cluster/Office/SIKAP Office (WAC 1st Floor beside Car Entrance).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 202 Office of the Vice President for ICT (WAC 2nd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, FACING PARKING LOT WITH THE ROOM NUMBER WAC - 202.",
    fullDescription:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, FACING PARKING LOT WITH THE ROOM NUMBER WAC - 202.",
    image: require("../../Images/West Academic Cluster/Office/WAC - 202 Office of the Vice President for ICT (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 210 MIS Office (WAC 2nd Floor Behind Botanical Garden)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, FACING BOTANICAL GARDEN WITH THE ROOM NUMBER WAC - 210.",
    fullDescription:
      "The MIS (Management Information System) Office at Liceo de Cagayan University is responsible for managing the university's technology infrastructure, including the development, implementation, and maintenance of information systems used across campus. The office supports various administrative and academic departments by providing IT solutions, data management services, and technical support. The MIS Office plays a crucial role in ensuring that the university's information systems are efficient, secure, and aligned with the institution's goals, contributing to the overall improvement of campus operations and student services.",
    image: require("../../Images/West Academic Cluster/Office/WAC - 210 MIS Office (WAC 2nd Floor Behind Botanical Garden)).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 211 Conservatory of Music (WAC 2nd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, FACING BOTANICAL GARDEN WITH THE ROOM NUMBER WAC - 211.",
    fullDescription:
      "The Conservatory of Music at Liceo de Cagayan University is a premier institution for the study of music, offering programs in various musical disciplines such as performance, music theory, composition, and music education. The conservatory provides students with a comprehensive music education, combining both practical and theoretical training to develop their skills and creativity. It is home to talented musicians and offers opportunities for students to perform, collaborate, and refine their craft. The Conservatory of Music plays a vital role in nurturing future musicians, composers, and music educators, contributing to the cultural and artistic growth of the university and the community.",
    image: require("../../Images/West Academic Cluster/Office/WAC - 211 Conservatory of Music (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Audio Visual Room 1 or AVR 1 (WAC 3rd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, FACING PARKING LOT AND RODELSA HALL.",
    fullDescription:
      "Audio Visual Room 1 (AVR-1) at Liceo de Cagayan University is a modern facility equipped with audiovisual technology to support various academic and extracurricular activities. The room is designed for presentations, lectures, seminars, and events that require multimedia tools such as projectors, sound systems, and video equipment. AVR-1 provides a conducive environment for effective learning and communication, helping to enhance the delivery of lessons, workshops, and student presentations. It plays an important role in the university's efforts to integrate technology into the educational experience.",
    image: require("../../Images/West Academic Cluster/Rooms/Audio Visual Room 1 or AVR 1 (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Biology Laboratory (WAC 1st Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 1ST FLOOR OF WAC BUILDING, LEFT SIDE OF HALLWAY.",
    fullDescription:
      "The Biology Laboratory at Liceo de Cagayan University is a state-of-the-art facility designed for hands-on learning in the field of biology. It is equipped with modern tools and resources to support experiments, research, and practical exercises in various biological disciplines, including cellular biology, genetics, ecology, and microbiology. The lab provides students with the opportunity to apply theoretical knowledge in real-world scenarios, helping to develop critical thinking, scientific inquiry, and problem-solving skills. The Biology Laboratory plays a key role in shaping future biologists, healthcare professionals, and researchers by fostering a deeper understanding of the natural world.",
    image: require("../../Images/West Academic Cluster/Rooms/Biology Laboratory (WAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "CAS Students Lounge (WAC 2nd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description: "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, BEHIND STAIRCASE.",
    fullDescription:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, BEHIND STAIRCASE.",
    image: require("../../Images/West Academic Cluster/Rooms/CAS Students Lounge (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Chemistry Laboratory 1 (WAC 1st Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description: "LOCATED ON THE 1ST FLOOR OF WAC BUILDING, HALLWAY.",
    fullDescription:
      "The Chemistry Laboratories at Liceo de Cagayan University are specialized facilities designed to provide students with practical experience in chemical sciences. Equipped with modern laboratory instruments and safety equipment, the labs support a range of experiments and activities in organic, inorganic, analytical, and physical chemistry. These laboratories allow students to conduct hands-on experiments, apply theoretical concepts, and develop crucial skills in research, analysis, and safety protocols. The Chemistry Laboratories are integral to the academic development of students pursuing careers in chemistry, environmental science, healthcare, and other related fields.",
    image: require("../../Images/West Academic Cluster/Rooms/Chemistry Laboratory 1 (WAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Chemistry Laboratory 2 (WAC 1st Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description: "LOCATED ON THE 1ST FLOOR OF WAC BUILDING, HALLWAY.",
    fullDescription:
      "The Chemistry Laboratories at Liceo de Cagayan University are specialized facilities designed to provide students with practical experience in chemical sciences. Equipped with modern laboratory instruments and safety equipment, the labs support a range of experiments and activities in organic, inorganic, analytical, and physical chemistry. These laboratories allow students to conduct hands-on experiments, apply theoretical concepts, and develop crucial skills in research, analysis, and safety protocols. The Chemistry Laboratories are integral to the academic development of students pursuing careers in chemistry, environmental science, healthcare, and other related fields.",
    image: require("../../Images/West Academic Cluster/Rooms/Chemistry Laboratory 2 (WAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Chemistry Laboratory 3 (WAC 1st Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description: "LOCATED ON THE 1ST FLOOR OF WAC BUILDING, HALLWAY.",
    fullDescription:
      "The Chemistry Laboratories at Liceo de Cagayan University are specialized facilities designed to provide students with practical experience in chemical sciences. Equipped with modern laboratory instruments and safety equipment, the labs support a range of experiments and activities in organic, inorganic, analytical, and physical chemistry. These laboratories allow students to conduct hands-on experiments, apply theoretical concepts, and develop crucial skills in research, analysis, and safety protocols. The Chemistry Laboratories are integral to the academic development of students pursuing careers in chemistry, environmental science, healthcare, and other related fields.",
    image: require("../../Images/West Academic Cluster/Rooms/Chemistry Laboratory 3 (WAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Herbarium (WAC 2nd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description: "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, HALLWAY.",
    fullDescription:
      "The Herbarium at Liceo de Cagayan University is a specialized facility that houses an extensive collection of preserved plant specimens for educational and research purposes. It serves as a resource for students and researchers studying botany, plant science, and environmental studies. The Herbarium provides an opportunity for hands-on learning in plant identification, classification, and preservation techniques. It plays a vital role in supporting scientific research, contributing to the study of biodiversity, and promoting environmental awareness among students, faculty, and the broader community.",
    image: require("../../Images/West Academic Cluster/Rooms/Herbarium (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Music Room 1 (WAC 1st Floor Behind Botanical Garden)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 1ST FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN.",
    fullDescription:
      "LOCATED ON THE 1ST FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN.",
    image: require("../../Images/West Academic Cluster/Rooms/Music Room 1 (WAC 1st Floor Behind Botanical Garden).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Music Room 2 (WAC 1st Floor Behind Botanical Garden)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 1ST FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN.",
    fullDescription:
      "LOCATED ON THE 1ST FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN.",
    image: require("../../Images/West Academic Cluster/Rooms/Music Room 2 (WAC 1st Floor Behind Botanical Garden).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Music Room 3 (WAC 1st Floor Behind Botanical Garden)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 1ST FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN.",
    fullDescription:
      "LOCATED ON THE 1ST FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN.",
    image: require("../../Images/West Academic Cluster/Rooms/Music Room 3 (WAC 1st Floor Behind Botanical Garden).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Natural Science Lecture Room (WAC 1st Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 1ST FLOOR OF WAC BUILDING, HALLWAY, BESIDE NATURAL SCIENCE DEPARTMENT.",
    fullDescription:
      "LOCATED ON THE 1ST FLOOR OF WAC BUILDING, HALLWAY, BESIDE NATURAL SCIENCE DEPARTMENT.",
    image: require("../../Images/West Academic Cluster/Rooms/Natural Science Lecture Room (WAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 201 (WAC 2nd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, BESIDE OFFICE OF THE VICE PRESIDENT FOR ICT.",
    fullDescription:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, BESIDE OFFICE OF THE VICE PRESIDENT FOR ICT.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 201 (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 203 IT Laboratory 3 CISCO (WAC 2nd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, BESIDE OFFICE OF THE VICE PRESIDENT FOR ICT WITH ROOM NUMBER WAC - 203.",
    fullDescription:
      "The IT Laboratory at Liceo de Cagayan University is a dedicated space for students to engage in hands-on learning and practical applications of information technology. Equipped with modern computers, software, and networking tools, the lab provides students in various programs, especially those in the College of Information Technology, with the resources they need to develop skills in areas such as programming, web development, database management, and networking. The IT Laboratory supports both academic coursework and independent projects, helping students gain the technical proficiency required for careers in the rapidly evolving tech industry.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 203 IT Laboratory 3 CISCO (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 204 Psychology Laboratory 2 (WAC 2nd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, HALLWAY WITH ROOM NUMBER WAC - 204.",
    fullDescription:
      "The Psychology Laboratory at Liceo de Cagayan University is a specialized facility designed for students studying psychology. It is equipped with tools and resources to conduct experiments, research, and practical exercises in areas such as behavioral science, cognitive psychology, and social psychology. The lab provides students with the opportunity to apply theoretical knowledge in real-world research scenarios, helping to develop critical thinking, data analysis, and research skills. The Psychology Laboratory plays a key role in supporting students' academic and professional growth, preparing them for careers in counseling, therapy, research, and other psychology-related fields.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 204 Psychology Laboratory 2 (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 205 Physics Laboratory (WAC 2nd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, HALLWAY WITH ROOM NUMBER WAC - 205.",
    fullDescription:
      "The Physics Laboratory at Liceo de Cagayan University is a well-equipped facility designed to support the study and practical application of physics concepts. It provides students with the opportunity to conduct experiments and explore the principles of mechanics, thermodynamics, electricity, magnetism, and other areas of physics. The laboratory is equipped with modern instruments and tools that allow for hands-on learning, helping students to deepen their understanding of physical laws and theories. The Physics Laboratory plays a crucial role in fostering analytical thinking, problem-solving skills, and scientific inquiry, preparing students for careers in engineering, research, and other scientific fields.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 205 Physics Laboratory (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 206 (WAC 2nd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, HALLWAY WITH ROOM NUMBER WAC - 206.",
    fullDescription:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, HALLWAY WITH ROOM NUMBER WAC - 206.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 206 (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 207 Biochemistry Laboratory (WAC 2nd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, HALLWAY WITH ROOM NUMBER WAC - 207.",
    fullDescription:
      "The Biochemistry Laboratory at Liceo de Cagayan University is a state-of-the-art facility designed for the study of chemical processes within and related to living organisms. Equipped with advanced tools and instruments, the lab provides students with the opportunity to conduct experiments in molecular biology, enzymology, protein chemistry, and metabolism. The Biochemistry Laboratory is essential for students in the fields of biochemistry, molecular biology, and related disciplines, offering hands-on experience in techniques such as chromatography, electrophoresis, and spectrophotometry. It plays a crucial role in developing scientific skills and preparing students for careers in healthcare, research, and biotechnology.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 207 Biochemistry Laboratory (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 208 Microbiology Laboratory (WAC 2nd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, HALLWAY WITH ROOM NUMBER WAC - 208.",
    fullDescription:
      "The Microbiology Laboratory at Liceo de Cagayan University is a specialized facility focused on the study of microorganisms, including bacteria, viruses, fungi, and parasites. It is equipped with modern tools and equipment to conduct experiments and research related to microbial growth, identification, and behavior. The lab provides students with practical experience in microbiological techniques such as culturing, staining, microscopy, and aseptic handling. The Microbiology Laboratory plays a key role in educating students pursuing careers in healthcare, environmental science, biotechnology, and research, preparing them with the skills needed to work in laboratories and healthcare settings.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 208 Microbiology Laboratory (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 209 Psychology Laboratory (WAC 2nd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, HALLWAY WITH ROOM NUMBER WAC - 209.",
    fullDescription:
      "The Psychology Laboratory at Liceo de Cagayan University is a specialized facility designed for students studying psychology. It is equipped with tools and resources to conduct experiments, research, and practical exercises in areas such as behavioral science, cognitive psychology, and social psychology. The lab provides students with the opportunity to apply theoretical knowledge in real-world research scenarios, helping to develop critical thinking, data analysis, and research skills. The Psychology Laboratory plays a key role in supporting students' academic and professional growth, preparing them for careers in counseling, therapy, research, and other psychology-related fields.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 209 Psychology Laboratory (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 213 (WAC 2nd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN WITH ROOM NUMBER WAC - 213.",
    fullDescription:
      "LOCATED ON THE 2ND FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN WITH ROOM NUMBER WAC - 213.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 213 (WAC 2nd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 301 IT Laboratory 2 (WAC 3rd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 3RD FLOOR OF WAC BUILDING, FACING PARKING LOT WITH ROOM NUMBER WAC - 301.",
    fullDescription:
      "The IT Laboratory at Liceo de Cagayan University is a dedicated space for students to engage in hands-on learning and practical applications of information technology. Equipped with modern computers, software, and networking tools, the lab provides students in various programs, especially those in the College of Information Technology, with the resources they need to develop skills in areas such as programming, web development, database management, and networking. The IT Laboratory supports both academic coursework and independent projects, helping students gain the technical proficiency required for careers in the rapidly evolving tech industry.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 301 IT Laboratory 2 (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 302 IT Laboratory 1 (WAC 3rd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 3RD FLOOR OF WAC BUILDING, FACING PARKING LOT WITH ROOM NUMBER WAC - 302.",
    fullDescription:
      "The IT Laboratory at Liceo de Cagayan University is a dedicated space for students to engage in hands-on learning and practical applications of information technology. Equipped with modern computers, software, and networking tools, the lab provides students in various programs, especially those in the College of Information Technology, with the resources they need to develop skills in areas such as programming, web development, database management, and networking. The IT Laboratory supports both academic coursework and independent projects, helping students gain the technical proficiency required for careers in the rapidly evolving tech industry.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 302 IT Laboratory 1 (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 303 (WAC 3rd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 3RD FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN WITH ROOM NUMBER WAC - 303.",
    fullDescription:
      "LOCATED ON THE 3RD FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN WITH ROOM NUMBER WAC - 303.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 303 (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 304 (WAC 3rd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 3RD FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN WITH ROOM NUMBER WAC - 304.",
    fullDescription:
      "LOCATED ON THE 3RD FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN WITH ROOM NUMBER WAC - 304.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 304 (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 305 Computer Laboratory (WAC 3rd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 3RD FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN WITH ROOM NUMBER WAC - 305.",
    fullDescription:
      "The Computer Laboratory at Liceo de Cagayan University is a fully-equipped facility designed to support students in various academic programs, particularly those in technology-related fields. It features modern computers, high-speed internet, and a range of software tools essential for tasks such as programming, graphic design, data analysis, and digital media creation. The lab provides students with hands-on experience in using technology for academic work, projects, and research. It serves as a key resource for fostering digital literacy, supporting learning in fields like computer science, engineering, and business, and preparing students for careers in the rapidly advancing tech industry.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 305 Computer Laboratory (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 306 (WAC 3rd Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 3RD FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN WITH ROOM NUMBER WAC - 306.",
    fullDescription:
      "LOCATED ON THE 3RD FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN WITH ROOM NUMBER WAC - 306.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 306 (WAC 3rd Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 401 Communication Laboratory (WAC 4th Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 4TH FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN WITH ROOM NUMBER WAC - 401.",
    fullDescription:
      "The Communications Laboratory at Liceo de Cagayan University is a specialized facility designed to enhance the practical skills of students in the field of communication. Equipped with modern audiovisual tools, editing software, and broadcasting equipment, the lab provides students with hands-on experience in areas such as media production, radio broadcasting, television production, public speaking, and digital content creation. The Communications Laboratory supports students in developing the technical and creative skills needed to succeed in the media, public relations, journalism, and corporate communications industries. It plays a crucial role in preparing students for careers in the dynamic world of communications.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 401 Communication Laboratory (WAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 402 (WAC 4th Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 4TH FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN WITH ROOM NUMBER WAC - 402.",
    fullDescription:
      "LOCATED ON THE 4TH FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN WITH ROOM NUMBER WAC - 402.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 402 (WAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 403 (WAC 4th Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 4TH FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN WITH ROOM NUMBER WAC - 403.",
    fullDescription:
      "LOCATED ON THE 4TH FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN WITH ROOM NUMBER WAC - 403.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 403 (WAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "WAC - 404 (WAC 4th Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description:
      "LOCATED ON THE 4TH FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN WITH ROOM NUMBER WAC - 404.",
    fullDescription:
      "LOCATED ON THE 4TH FLOOR OF WAC BUILDING, BEHIND BOTANICAL GARDEN WITH ROOM NUMBER WAC - 404.",
    image: require("../../Images/West Academic Cluster/Rooms/WAC - 404 (WAC 4th Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
  {
    name: "Zoology Laboratory (WAC 1st Floor)",
    latitude: 8.486716255516576,
    longitude: 124.63938743984524,
    description: "LOCATED ON THE 1ST FLOOR OF WAC BUILDING, HALLWAY.",
    fullDescription:
      "The Zoology Laboratory at Liceo de Cagayan University is a specialized facility designed for the study of animals and their biological processes. It is equipped with tools and resources to support practical learning in areas such as animal anatomy, physiology, taxonomy, and ecology. Students in biology and related programs use the laboratory to conduct experiments, observe live specimens, and analyze animal behaviors. The Zoology Laboratory provides students with valuable hands-on experience, fostering a deeper understanding of the animal kingdom and supporting research in biodiversity and conservation. It plays an essential role in preparing students for careers in wildlife conservation, veterinary science, and biological research.",
    image: require("../../Images/West Academic Cluster/Rooms/Zoology Laboratory (WAC 1st Floor).jpg"),
    image2: require("../../Images/ComingSoon.png"),
    image3: require("../../Images/ComingSoon.png"),
    image4: require("../../Images/ComingSoon.png"),
  },
];

export default locations;
