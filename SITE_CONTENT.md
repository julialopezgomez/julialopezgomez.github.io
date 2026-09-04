# Current website content (inventory)

Auto-generated from the live HTML. This is everything the site says today.

## About (homepage)  (`index.html`)

PhD Student · Robotics & AI

I'm a second-year PhD student in Robotics and AI at the Edinburgh Centre for Robotics (CDT-D2AIR), supervised by Dr Steve Tonneau across the University of Edinburgh and Heriot-Watt University. Before this I graduated from Edinburgh with an Integrated Master of Informatics (MInf), First-Class Honours.

### Research

Thesis: Representations of Reachable Behaviour for Planning in Long-Horizon Robotics Tasks

I work on long-horizon robot manipulation. A robot may already have controllers, policies, and skills that work well on their own, but it still has to work out when each one can be used and how to chain them together into a longer task. My thesis asks how to represent what each behaviour can actually reach, so that a planner can reuse and compose them.

Research interests: long-horizon manipulation planning, reachability representations, reusing and composing controllers and learned skills, and optimisation-based planning.


### News

- 7–11 September 2026 Selected to attend the 1st IEEE RAS Summer School: Decision-Making for Cognitive Robots in Germany.
- September 2026 Started my second year of the PhD program, CDT-D2AIR.
- 13 August 2026 Presented "Manipulation Planning with Convex Decompositions of C-free and NLP-Sampling" at a School of Informatics IPAB workshop.
- 9–13 February 2026 Presented a poster and project pitch at the ROMANDIC Winter School in Kranjska Gora, Slovenia, with workshops and mini-projects on robot learning and manipulation.
- September 2025 Started my Robotics and AI PhD within CDT-D2AIR, Edinburgh Centre for Robotics.
- 11 July 2025 Graduated from the University of Edinburgh with an Integrated Master of Informatics, First-Class Honours.
- April–May 2025 Completed the MCTS for Robotics Manipulation voluntary project with LAAS-CNRS and NYU.

## Publications  (`publications.html`)

### Publications

Peer-reviewed publications are coming soon.


### Talks & Posters

- **Manipulation Planning with Convex Decompositions of C-free and NLP-Sampling** — 13 August 2026 · IPAB Workshop, University of Edinburgh
  - Manipulation planning requires robots to navigate high-dimensional configuration spaces shaped by collision avoidance, kinematic limits, contacts, and task constraints, which make the feasible space narrow, disconnected, and hard to describe.
  - Presented a global manipulation-planning framework that decomposes the collision-free configuration space (C-free) into a union of convex sets, computing trajectories via convex optimisation over a graph of convex sets (GCS).
  - Extended these algorithms beyond collision-free motion to also represent feasible grasping configurations as convex sets, scaling toward higher-dimensional systems through recent advances in NLP sampling.
  - The resulting planner is complete within the convex decomposition, and optimises grasp selection and motion under their respective costs without assuming global optimality for the original non-convex problem.
  - [link] Download Slides: files/IPAB_workshop_slides.pdf

- **Poster and project pitch on long-horizon manipulation planning** — 9–13 February 2026 · ROMANDIC Winter School, Kranjska Gora, Slovenia
  - Presented a poster and a short project pitch on my PhD research.
  - [link] Download Poster: files/ROMANDIC_poster.pdf


### Research Projects

- **Manipulation Planning with Convex Decompositions of C-free and NLP Sampling** — 2025 - present · Continuing my MInf work, University of Edinburgh
  - Extending the convex-decomposition planner from my MInf dissertations beyond collision-free motion, toward grasp, placement, kinematic, and task-constrained feasible sets.
  - Combining Drake inverse kinematics and SceneGraph collision checking with nonlinear hit-and-run (NHR) sampling to generate diverse full-arm feasible configurations.
  - Fitting mode- and submode-specific convex regions and studying the transition sets between them: grasp and placement feasibility produce disconnected modes, motivating further decomposition into submodes.
  - Planning over these regions with Graphs of Convex Sets (GCS), so motion can be computed by convex optimisation rather than re-solving the original non-convex problem from scratch.
  - In a 4-DoF comparison of collision-free-space decompositions, IRIS-NP produced 8 regions, IRIS-NP2 17, and IRIS-ZO 39, with NP2 and ZO giving more conservative decompositions.
  - [link] GitHub: https://github.com/julialopezgomez/optimisation-based-manipulation-planner

- **Neural Network Control and Verification for Tethered Drone Delivery** — 2025 - 2026 · University of Edinburgh
  - Built the full neural-network training pipeline for a tethered drone-delivery controller.
  - Applied Lipschitz-oriented robustness training to the learned controller.
  - Specified vehicle verification properties and verified them using Marabou.
  - Joint work with Calum Arnott and Ruchira Ray.
  - [link] GitHub: https://github.com/julialopezgomez/drone_nn_paper

- **Monte Carlo Tree Search for Robotics Manipulation (Voluntary Project)** — April - May 2025 · LAAS-CNRS and NYU
  - Explored the use of MCTS for manipulation in known benchmarks such as Gymnasium or Metaworld.
  - Focused on understanding the integration of Reinforcement Learning (RL) concepts, Monte-Carlo simulations, and tree search algorithms with discretised manipulation scenarios.
  - Implemented AlphaZero from scratch, achieving policy generation for the selected benchmarks.
  - Supervision: Dr. Nicolas Mansard (LAAS-CNRS) and Prof. Ludovic Righetti (NYU).
  - [link] GitHub: https://github.com/julialopezgomez/monte-carlo-manipulation

- **MINF2 Dissertation: Manipulation Planning in Convex Decompositions of the Free Configuration Space** — 2024 - 2025 · UoE
  - Continued the work of my MINF1 dissertation, developing an algorithm to compute manipulation plans in optimisation-based settings.
  - Developed a manipulation planner capable of operating in optimisation-based settings through convex decomposition techniques (IRIS variants) and Mixed-Integer Quadratic Programming.
  - Used the Drake Robotics Toolbox for implementation and visualization.
  - Supervision: Dr Steve Tonneau.
  - [link] GitHub: https://github.com/julialopezgomez/minf2-repo
  - [link] Download Report: files/MINF2.pdf

- **Object Segmentation Techniques: UNet, Autoencoder, CLIP, and Point-Based Segmentation** — Spring 2025 · Computer Vision Project, UoE
  - Collaborated in a team of two to implement and analyze different object segmentation techniques.
  - Implemented UNet, Autoencoder, CLIP, and Point-Based Segmentation techniques using PyTorch.
  - Utilized Nvidia GPU servers to accelerate model training.
  - Conducted a comparative analysis of the performance of each technique on the Oxford III Pet Dataset.
  - Achieved a Dice score of over 80% for the CLIP model.
  - [link] GitHub: https://github.com/julialopezgomez/computer-vision-project
  - [link] Download Report: files/segmentation.pdf

- **IoT Systems for Live Activity Classification using CNNs** — Fall 2024 · Principles and Design of IoT Systems Research Project, UoE
  - Used Tensorflow and Keras to train different CNN models for activity and respiratory condition classification.
  - Utilised Android Studio to develop an app for data collection and live classification.
  - Achieved an accuracy of over 90% for activity detection (ascending and descending stairs, running, walking, shuffle walking, sitting, standing, lying down -on right, left, back and stomach- , and miscellaneous movements).
  - Achieved an accuracy of over 80% for respiratory condition classification (normal, hyperventillation, coughing, and others - laughing, talking, singing).
  - Leveraged different regularisation techniques to improve validation and real-time performance.
  - Supporting the background on IoT research, investigated the use of IoT devices in healthcare applications for the elderly.
  - [link] Download Report: Human Activity Recognition: files/IoT_cnns_for_HAR.pdf
  - [link] Download Report: IoT for Healthcare in the Elderly: files/IoT_healthcare.pdf

- **MINF1 Dissertation: Manipulation Planning with a Robotic Arm: A Tangent Configuration Space Approach** — 2023 - 2024 · UoE
  - Formalized the use of a tangent parametrization of the robot configuration space (TC-space) in robot manipulation, leveraging the recent advancements of the C-IRIS algorithm in motion planning.
  - Proved the scalability of C-IRIS to robots with universal joints.
  - Utilized the Drake Robotics Toolbox for implementation and visualization.
  - Leveraged the mathematics of motion and manipulation planning, robot kinematics, algebraic rotations (SO(3) group), and optimization techniques.
  - Achieved a 1st Class mark.
  - Supervision: Dr Steve Tonneau.
  - Continued in my MINF2 dissertation, which developed a manipulation planner over convex decompositions of the free configuration space.
  - [link] GitHub: https://github.com/julialopezgomez/MInf1---Dissertation
  - [link] Download Report: files/MINF1.pdf

- **Enhancing Sheep Detection Techniques with Deep Learning** — Spring 2024 · Machine Learning Practical Group Project, UoE
  - Collaborated in a team of three to enhance sheep counting accuracy using PyTorch.
  - Identified challenges of existing literature in detecting occluded sheep and selected a more comprehensive dataset to improve performance in such scenarios.
  - Implemented transfer learning techniques to adapt pre-trained models for sheep detection, such as SSD and Faster R-CNN.
  - Utilized Nvidia GPU servers to accelerate model training.
  - [link] Download Report: files/sheep.pdf


## Education / Experience  (`education.html`)

### Education & Experience


#### Education

- **PhD in Robotics and AI** — September 2025 - 2029 (expected) · CDT-D2AIR, University of Edinburgh & Heriot-Watt University
  - Thesis: Representations of Reachable Behaviour for Planning in Long-Horizon Robotics Tasks.
  - Supervisor: Dr Steve Tonneau.
  - Based at the Edinburgh Centre for Robotics, within the Centre for Doctoral Training in Deployable and Dependable Artificial Intelligence Robotics (CDT-D2AIR).
  - Affiliated with IPAB, School of Informatics, University of Edinburgh; additionally a member of the MARBLE group.
  - Funded by an EPSRC (UKRI) CDT studentship, covering fees and a UKRI-rate stipend.

- **Integrated Master of Informatics (MInf)** — September 2020 - July 2025 · University of Edinburgh
  - First-Class Honours; graduated 11 July 2025.
  - MInf Project Part 2 (2024 - 2025): Manipulation Planning in Convex Decompositions of the Free Configuration Space. Supervised by Dr Steve Tonneau.
  - MInf Project Part 1 (2023 - 2024): Manipulation Planning with a Robotic Arm: A Tangent Configuration Space Approach. Supervised by Dr Steve Tonneau; awarded a 1st Class mark.
  - Relevant coursework: Machine Learning Practical, Computer Vision, Principles and Design of IoT Systems, Mobile Robotics, System Design Project, and Informatics Large Practical.


#### Schools & Research Training

- **1st IEEE RAS Summer School: Decision-Making for Cognitive Robots** — 7–11 September 2026 · Germany · Upcoming
  - Selected to attend this IEEE Robotics and Automation Society summer school.
  - The programme covers learned planning models, robot learning, skill adaptation, and constrained sampling for cognitive robots.

- **ROMANDIC Winter School on Robotic Manipulation of Deformable Objects** — 9–13 February 2026 · Kranjska Gora, Slovenia
  - Presented a poster and a short project pitch on my PhD research.
  - Took part in workshops and mini-projects on learning for manipulation, and discussed my work with researchers including Prof. Tamim Asfour.
  - Week-long school on robot handling of deformable objects, with a focus on textiles, covering perception, simulation, control, benchmarking, and real-world applications.
  - Organised within the ROMANDIC project, an EU Horizon Europe Network of Excellence in Robot Manipulation of Deformables.


#### Work Experience

- **Makerspace Student Technician** — Spring 2024 - 2025 · School of Informatics, UoE
  - Learning ROS2 and creating student guides from scratch.
  - Delivered workshops on Raspberry Pi and Arduino to Computer Science students.
  - Maintained 3D printers, prepared electronic kits, and supported student projects.
  - Received The Edinburgh Award for my contributions as a Makerspace Student Technician.

- **Payload Software and Electrical Lead** — Sep. 2022 - Sep. 2024 · Endeavour Rockets
  - Developed a CanSat and a 3-unit CubeSat as payloads for a student-assembled rocket.
  - Learned and designed the circuit schematics and PCBs of the payload with Altium Designer.
  - 2nd position in Combined 3km Launch Vehicle and CanSat category at Mach-23 competition.
  - Key skills: Python, Raspberry Pi, embedded programming, parafoil design, etc.
  - From August 2023: Co-leading the team, mentoring 1st and 3rd Year students.
  - Research Experiments: Microbial Air Sampler, Simulated Life Search, Albedo Detection, etc.
  - Invited to Airbus CubeSat day to present our project to other UK satellite student teams.

- **Software Engineering Summer Intern** — Summer 2023 · J.P. Morgan Chase & Co.
  - Contributed to agile product development using Java, Maven, SQL, and Spring Boot.
  - Developed backend solutions integrating with Oracle Databases.
  - Utilized React.js for frontend development in a collaborative environment.


#### Earlier Projects & Competitions

- **Earlier projects and competitions** — Pre-university and undergraduate, kept for the full record
  - Spring 2023 · Electronic Laundry Folder (System Design Project, UoE): Designed and manufactured an assistive laundry-folding robot; used Raspberry Pi, Arduino, and Python; utilized CAD software (Fusion360) and 3D printing for prototyping; collaborated in a team of eight and presented the results to industry professionals.
  - Fall 2022 · PizzaDronz: Drone-Based Pizza Delivery System (Informatics Large Practical, UoE): Designed and implemented a drone-based delivery system simulating the entire process of delivering pizzas using a RESTful server for data retrieval; implemented a comprehensive software architecture consisting of 17 classes, including key components like the App, Drone, and SearchAlgorithm classes; developed a drone control algorithm utilizing the Weighted A* search algorithm to optimize delivery routes while adhering to constraints like no-fly zones and battery limitations; integrated RESTful API for dynamic data retrieval, including restaurant locations, no-fly zones, and delivery orders; technologies used: Java, JSON, GeoJSON, Maven.
  - Summer 2022 · Student-Led Individually-Created Course (UoE): Opportunity to create your own extra 20-credit course; focused on learning C++, SQL, and Fusion 360; reported progress, challenges, and solutions in a reflective work style.
  - 2018 - 2020 · CanSat Competition (European Space Agency): Assembled a micro-satellite of the size of a soda can for the ESA CanSat Competition; manufactured Yagi Antenna for telecommunications with a LoRa system at 868MHz RF; achieved a national finalist position twice.
  - February 2020 · Mathematic Olympiads and Barcelona Tech Math Contest: Finalist of the Spanish Mathematic Olympiads and participated in the Barcelona Tech Math Contest; competed against finalists from across the country for selection in the European Female Mathematics Olympiad.
  - Spring 2020 · Canarias Masterclass: Participated in a mentoring program focused on data analysis; gained insights from a Data Analyst project manager at a local business in Tenerife.
  - November 2019 · Oshwden Coruña: Presented a project of a network of meteorological stations at a technological congress in Galicia; detected levels of polluting gases in different locations across Spain; worked with my high-school robotics team.
  - Fall 2019 · Jóvenes Puntales: Finalist in a regional contest focused on recognizing and supporting young talents in various fields; participated in projects related to a network of meteorological stations and an app for sharing information about endemic species; awarded on the top 15 projects with two projects, amongst 300+ participants.
  - Summer 2019 · National Summer Scientific Campus: Selected at a national level to participate in this campus; worked with the robot Pepper and delved into Virtual Reality game development.
  - 2017 - 2019 · Canary Islands Scientific Campus and Scientific Challenges: Participated in Scientific Summer Programs in 2017 and 2019; developed projects in Mathematics, Physics, and Chemistry; won the Scientific Challenges Campus in 2019 with a group of three; developed an outreach project to identify endemic species in the Canary Islands and their properties; built an app using the MIT App Inventor; presented the project to University of La Laguna professors and students.
  - 2017 - 2019 · Mathematical Kangaroo: Participated in the Mathematical Kangaroo, an international mathematical competition for school students; ranked in the top 5% of participants three consecutive years at a national level, amongst 3K+ students.
  - 2018 - 2019 · Bionic Arm Project: Worked for a year on building a bionic arm for a colleague in high school; introduced to 3D printing and CAD design.
  - 2016 - 2018 · EsTalMat Canarias: Selected for the EsTalMat (Estímulo del Talento Matemático) Canarias program, a national initiative aimed at nurturing young mathematical talent; EsTalMat selects 15 regional students annually to develop their skills in advanced mathematics and logic; engaged in intensive mathematical training beyond the standard curriculum; collaborated with peers on complex mathematical challenges, fostering teamwork and critical thinking abilities.


#### Skills

- Programming Languages: Python (PyTorch, SkLearn), Java (Maven, Spring Boot), C/C++ (Memory Management, Linux, Embedded Programming), Haskell, SQL.
- Robotics & Machine Learning: Deep Neural Networks, Convolutional Neural Networks, Motion and Manipulation Planning, Robot Kinematics, Computer Vision, Visual Odometry.
- Tools & Software: Altium Designer (PCB Design), Autodesk Fusion 360 (CAD), Git, JSON, Matplotlib, NumPy, Pandas, OpenCV.
- Mathematics: Linear and Non-linear Optimization, Multivariable Calculus and Differential Equations, Numerical Linear Algebra.
- Practical: Raspberry Pi, Arduino, 3D Printing, Laser Cutting, Soldering.

#### Awards

- June 2024: The Edinburgh Award: Makerspace Student Technician (UoE) — recognized for technical expertise, mentoring, and delivering workshops in the Makerspace.
- April 2023: The Edinburgh Award: Leadership in Student Opportunities (UoE) — awarded for leadership, communication, and digital literacy skills as an Informatics Representative.
- November 2022: 1st Prize Overall · AdaHack Hackathon — Twitter Solves Rubik’s Cube won best overall project, using Twitter's API to gather moves and update a live 3D visualization.
- July 2020: Award of Academic Excellence (University of La Laguna) — recognized as one of the top 10 academic performances in the S/C de Tenerife EBAU district among more than 5,000 students, based on results across the final two years of high school and the EBAU.

#### Certifications

- Public Speaking for Non-Native English Speakers (LinkedIn Learning, Mar 2023)
- Electronics Foundations: Fundamentals (LinkedIn Learning, Jan 2023)
- Memorization and Rehearsal Tips for Public Speaking (LinkedIn Learning, Jan 2023)
- Beginning C++ Programming - From Beginner to Beyond (Udemy, Aug 2022)
- Fusion 360 Beginners Course (Udemy, Jul 2022)
- The Complete SQL Bootcamp 2022: Go from Zero to Hero (Udemy, Jul 2022)

## Teaching & University Involvement  (`teaching.html`)

### Teaching

- **Advanced Robotics (INFR11213)** — Fall 2025 & Fall 2026 · School of Informatics, UoE
  - Teaching Support Provider: teaching assistant, demonstrator, and marker.
  - Assessed coursework covering inverse kinematics, RRT and path planning, collision checking, and related robotics implementation.

- **System Design Project (INFR09032)** — Spring 2026 · School of Informatics, UoE
  - Teaching assistant and marker.

- **Informatics 1 - Introduction to Computation (INFR08025)** — Fall 2022 · School of Informatics, UoE
  - Informatics Teaching Support Provider: demonstrator.
  - Ran weekly labs, helping first-year students in their learning of Haskell and Computational Logic.

### University Involvement

- **Informatics Parent** — 2024–2025 · School of Informatics, UoE
  - Started as an Informatics Parent for incoming first-year students.
  - Mentoring 11 first-year students, providing guidance and support in their transition to university.

- **UG3 and UG5 Informatics Representative** — Student representation · School of Informatics, UoE
  - UG5 Informatics Representative (Sep. 2024 - May 2025).
  - UG3 Informatics Representative (2022 - 2023): gathered weekly feedback from over 300 students and communicated it with faculty.
  - Achieved the transition of a module from online to in-person post-COVID by advocating for student interests with school authorities and professors.
  - Received The Edinburgh Award for Leadership in Student Opportunities.

- **Academic Events & Activities** — Selected university and professional activities
  - November 2024: Attended Board of Studies meeting as student rep to contribute to course and curriculum proposals.
  - October 2024: Attended TUM Dr. Majid Khadiv's talk on optimal control and learning for contact-rich robotics, University of Edinburgh.
  - September 2024: Attended TUM Prof. Gordon Cheng's talk "Towards multi-intelligences: are we there yet?", University of Edinburgh.
  - August 2024: Invited to and attended the Amazon Campus Summer Series Seminar.
  - August 2024: Developed this portfolio website to showcase academic and professional achievements; utilized HTML, CSS, and JavaScript for a responsive and interactive user experience; implemented collapsible sections for organization; integrated particles.js for dynamic visual effect.
  - February 2024: Invited to Airbus CubeSat Day to present our Payload project with Endeavour Rockets to other UK satellite student teams; our project included the 3-unit CubeSat payload, with an experiment to simulate the search of life in Exoplanets; engaged in discussions with industry professionals and other student teams.
  - 2022 and 2023: Participant in HackTheBurgh Hackathon.
  - November 2022: Invited to J.P. Morgan's Women in Technology Event in Glasgow.
  - November 2022: Participant in AdaHack Hackathon, 1st Prize Overall.
