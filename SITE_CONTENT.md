# Current website content (inventory)

Auto-generated from the live HTML. This is everything the site says today.

The interface and all page content are available in English and Spanish through the persistent EN/ES navigation toggle. English remains the source language represented below.

When Spanish is selected, a brief notice explains that the translation was generated automatically and may contain inaccuracies.

Site-wide footer: Last updated 4 September 2026.

## About (homepage)  (`index.html`)

PhD Student · Robotics & AI

I'm a second-year PhD student in Robotics and AI at the Edinburgh Centre for Robotics (CDT-D2AIR), supervised by Dr Steve Tonneau across the University of Edinburgh and Heriot-Watt University. Before this I graduated from Edinburgh with an Integrated Master of Informatics (MInf), First-Class Honours.

### Research

Current thesis: Representations of Reachable Behaviour for Planning in Long-Horizon Robotics Tasks

I work on long-horizon robot motion and manipulation planning. A robot may already have controllers, policies, and skills that work well on their own, but it still has to work out when each one can be used and how to chain them together into a longer task. My thesis asks how to represent what each behaviour can actually reach, so that a planner can reuse and compose them.

Research interests:

- Long-horizon manipulation
- Reachability representations
- Controller & skill composition
- Optimisation-based planning


### News

- 7–11 September 2026 Selected to attend the [1st IEEE RAS Summer School: Decision-Making for Cognitive Robots](https://r8.ieee.org/germany-ras/2026/05/11/ieee-ras-german-summer-schools-2026/) in Germany.
- September 2026 Started my second year of the PhD program, CDT-D2AIR.
- 13 August 2026 Presented "Manipulation Planning with Convex Decompositions of C-free and NLP-Sampling" at a School of Informatics IPAB workshop.
- 9–13 February 2026 Presented a poster and project pitch at the [ROMANDIC Winter School](https://project-romandic.eu/winter-school-2026/) in Kranjska Gora, Slovenia, with workshops and mini-projects on robot learning and manipulation.
- September 2025 Started my Robotics and AI PhD within CDT-D2AIR, Edinburgh Centre for Robotics.
- 11 July 2025 Graduated from the University of Edinburgh with an Integrated Master of Informatics, First-Class Honours.
- April–May 2025 Completed the MCTS for Robotics Manipulation voluntary project with LAAS-CNRS and NYU.

## Publications  (`publications.html`)

Papers · Talks · Posters · Projects

### Publications, Talks & Projects

Peer-reviewed work, research talks and posters, and selected projects in robot manipulation, planning, learning, and verification.

### Publications

Peer-reviewed publications are coming soon.


### Talks & Posters

- **Manipulation Planning with Convex Decompositions of C-free and NLP-Sampling** — 13 August 2026 · IPAB Workshop, University of Edinburgh
  - Presented at an [IPAB Workshop](https://informatics.ed.ac.uk/ipab/events), an informal seminar series for IPAB staff and students to share ongoing work with the institute's research community.
  - Introduced my manipulation-planning work: decomposing collision-free space into convex regions, planning with Graphs of Convex Sets, and extending the representation to grasp-feasible configurations with nonlinear-programming sampling.
  - [link] Download Slides: files/IPAB_workshop_slides.pdf

- **Poster and project pitch on long-horizon manipulation planning** — 9–13 February 2026 · ROMANDIC Winter School, Kranjska Gora, Slovenia
  - Presented a poster and a short project pitch on my PhD research.
  - [link] Download Poster: files/ROMANDIC_poster.pdf


### Research Projects

- **Manipulation Planning with Convex Decompositions** — 2023–present · From MInf dissertations to current PhD research, University of Edinburgh
  - **2025–present · PhD research — Reachability representations for long-horizon manipulation:** Extending the planner toward grasp, placement, kinematic, and task-constrained feasible sets; combining Drake inverse kinematics and collision checking with nonlinear hit-and-run sampling; fitting mode-specific convex regions and planning over the resulting Graph of Convex Sets.
  - **2024–2025 · MInf Project Part 2 — Planning over convex decompositions:** Developed a manipulation planner using IRIS variants, Graphs of Convex Sets, Mixed-Integer Quadratic Programming, and Drake; awarded a First-Class mark.
  - **2023–2024 · MInf Project Part 1 — A tangent configuration-space approach:** Formalised tangent parameterisations, applied C-IRIS to manipulation planning, and demonstrated scalability to universal joints; awarded a First-Class mark.
  - [link] Current GitHub: https://github.com/julialopezgomez/optimisation-based-manipulation-planner
  - [link] MInf2 Report: files/MINF2.pdf
  - [link] MInf1 Report: files/MINF1.pdf

- **Neural Network Control and Verification for Tethered Drone Delivery** — 2025 - 2026 · University of Edinburgh
  - Built the full neural-network training pipeline for a tethered drone-delivery controller.
  - Applied Lipschitz-oriented robustness training to the learned controller.
  - Specified vehicle verification properties and verified them using Marabou.
  - Joint work with Calum Arnott and Ruchira Ray.
  - [link] GitHub: https://github.com/julialopezgomez/drone_nn_paper
  - [link] Download Report: files/drone_control_verification_report.pdf

- **Monte Carlo Tree Search for Robotics Manipulation (Voluntary Project)** — April - May 2025 · LAAS-CNRS and NYU
  - Explored the use of MCTS for manipulation in known benchmarks such as Gymnasium or Metaworld.
  - Focused on understanding the integration of Reinforcement Learning (RL) concepts, Monte-Carlo simulations, and tree search algorithms with discretised manipulation scenarios.
  - Implemented AlphaZero from scratch, achieving policy generation for the selected benchmarks.
  - Supervision: Dr. Nicolas Mansard (LAAS-CNRS) and Prof. Ludovic Righetti (NYU).
  - [link] GitHub: https://github.com/julialopezgomez/monte-carlo-manipulation

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

- **Enhancing Sheep Detection Techniques with Deep Learning** — Spring 2024 · Machine Learning Practical Group Project, UoE
  - Collaborated in a team of three to enhance sheep counting accuracy using PyTorch.
  - Identified challenges of existing literature in detecting occluded sheep and selected a more comprehensive dataset to improve performance in such scenarios.
  - Implemented transfer learning techniques to adapt pre-trained models for sheep detection, such as SSD and Faster R-CNN.
  - Utilized Nvidia GPU servers to accelerate model training.
  - [link] Download Report: files/sheep.pdf


## Education / Experience  (`education.html`)

Degrees · Training · Experience · Skills

### Education, Experience & Skills

Degrees and doctoral training, research schools, technical experience, selected projects, skills, and awards.

#### Education

- **PhD in Robotics and AI** — September 2025 - 2029 (expected) · CDT-D2AIR, University of Edinburgh & Heriot-Watt University
  - Thesis: Representations of Reachable Behaviour for Planning in Long-Horizon Robotics Tasks.
  - Supervisor: [Dr Steve Tonneau](https://www.edinburgh-robotics.org/academics/steve-tonneau).
  - Programme: [UKRI AI Centre for Doctoral Training in Dependable and Deployable Artificial Intelligence for Robotics (CDT-D2AIR)](https://www.cdt-d2air.uk/), jointly delivered by the [University of Edinburgh](https://www.ed.ac.uk/) and [Heriot-Watt University](https://www.hw.ac.uk/).
  - Affiliations: [IPAB, School of Informatics, University of Edinburgh](https://informatics.ed.ac.uk/ipab); additionally a member of the MARBLE group.

- **Integrated Master of Informatics (MInf)** — September 2020 - July 2025 · University of Edinburgh
  - First-Class Honours; graduated 11 July 2025. [Official MInf programme](https://study.ed.ac.uk/programmes/undergraduate/430-informatics-5-year-undergraduate-masters-programme).
  - MInf Project Part 2 (2024 - 2025): Manipulation Planning in Convex Decompositions of the Free Configuration Space. Supervised by Dr Steve Tonneau; awarded a First-Class mark.
  - MInf Project Part 1 (2023 - 2024): Manipulation Planning with a Robotic Arm: A Tangent Configuration Space Approach. Supervised by Dr Steve Tonneau; awarded a 1st Class mark.
  - Relevant coursework: Machine Learning Practical, Computer Vision, Principles and Design of IoT Systems, Mobile Robotics, System Design Project, and Informatics Large Practical.


#### Schools & Research Training

- **1st IEEE RAS Summer School: Decision-Making for Cognitive Robots** — 7–11 September 2026 · Germany · Upcoming
  - Selected to attend this IEEE Robotics and Automation Society summer school.
  - The programme covers learned planning models, robot learning, skill adaptation, and constrained sampling for cognitive robots.
  - [link] Official School Page: https://r8.ieee.org/germany-ras/2026/05/11/ieee-ras-german-summer-schools-2026/

- **ROMANDIC Winter School on Robotic Manipulation of Deformable Objects** — 9–13 February 2026 · Kranjska Gora, Slovenia
  - Presented a poster and a short project pitch on my PhD research.
  - Took part in workshops and mini-projects on learning for manipulation.
  - Week-long school on robot handling of deformable objects, with a focus on textiles, covering perception, simulation, control, benchmarking, and real-world applications.
  - Organised within the ROMANDIC project, an EU Horizon Europe Network of Excellence in Robot Manipulation of Deformables.
  - [link] Official School Page: https://project-romandic.eu/winter-school-2026/


#### Work Experience

- **Makerspace Student Technician** — Spring 2024 - 2025 · School of Informatics, UoE
  - Learning ROS2 and creating student guides from scratch.
  - Delivered workshops on Raspberry Pi and Arduino to Computer Science students.
  - Maintained 3D printers, prepared electronic kits, and supported student projects.
  - Received The Edinburgh Award for my contributions as a Makerspace Student Technician.

- **Software Engineering Summer Intern** — Summer 2023 · J.P. Morgan Chase & Co.
  - Contributed to agile product development using Java, Maven, SQL, and Spring Boot.
  - Developed backend solutions integrating with Oracle Databases.
  - Utilized React.js for frontend development in a collaborative environment.


#### Earlier Projects & Competitions

- **Payload Software & Electrical Lead** — 2022–2024 · Endeavour Rockets: Developed software, embedded systems, and PCBs for CanSat and 3U CubeSat payloads; later co-led and mentored the team, achieved second place at Mach-23, and presented the project at Airbus CubeSat Day.
- **Electronic Laundry Folder** — Spring 2023 · UoE: Designed and manufactured an assistive laundry-folding robot in a team of eight using Raspberry Pi, Arduino, Python, Fusion 360, and 3D printing; presented the result to industry professionals.
- **PizzaDronz** — Fall 2022 · UoE: Built a Java drone-delivery simulation with RESTful data retrieval and Weighted A* route planning under no-fly-zone and battery constraints.
- **CanSat** — 2018–2020 · ESA competition: Built a soda-can-sized satellite and a Yagi antenna for 868 MHz LoRa communications; reached the Spanish national final twice.

- **Additional earlier activities** — Pre-university programmes and competitions
  - Summer 2022 · Student-Led Individually-Created Course (UoE): Opportunity to create your own extra 20-credit course; focused on learning C++, SQL, and Fusion 360; reported progress, challenges, and solutions in a reflective work style.
  - February 2020 · Mathematic Olympiads and Barcelona Tech Math Contest: Finalist of the Spanish Mathematic Olympiads and participated in the Barcelona Tech Math Contest; competed against finalists from across the country for selection in the European Female Mathematics Olympiad.
  - Spring 2020 · Canarias Masterclass: Participated in a mentoring program focused on data analysis; gained insights from a Data Analyst project manager at a local business in Tenerife.
  - November 2019 · Oshwden Coruña: Presented a project of a network of meteorological stations at a technological congress in Galicia; detected levels of polluting gases in different locations across Spain; worked with my high-school robotics team.
  - Fall 2019 · Jóvenes Puntales: Finalist in a regional contest focused on recognizing and supporting young talents in various fields; participated in projects related to a network of meteorological stations and an app for sharing information about endemic species; awarded on the top 15 projects with two projects, amongst 300+ participants.
  - Summer 2019 · National Summer Scientific Campus: Selected at a national level to participate in this campus; worked with the robot Pepper and delved into Virtual Reality game development.
  - 2017 - 2019 · Canary Islands Scientific Campus and Scientific Challenges: Participated in Scientific Summer Programs in 2017 and 2019; developed projects in Mathematics, Physics, and Chemistry; won the Scientific Challenges Campus in 2019 with a group of three; developed an outreach project to identify endemic species in the Canary Islands and their properties; built an app using the MIT App Inventor; presented the project to University of La Laguna professors and students.
  - 2017 - 2019 · Mathematical Kangaroo: Participated in the Mathematical Kangaroo, an international mathematical competition for school students; ranked in the top 5% of participants three consecutive years at a national level, amongst 3K+ students.
  - 2016 - 2018 · EsTalMat Canarias: Selected for the EsTalMat (Estímulo del Talento Matemático) Canarias program, a national initiative aimed at nurturing young mathematical talent; EsTalMat selects 15 regional students annually to develop their skills in advanced mathematics and logic; engaged in intensive mathematical training beyond the standard curriculum; collaborated with peers on complex mathematical challenges, fostering teamwork and critical thinking abilities.


#### Skills

- Robotics & Planning: Long-horizon manipulation planning, motion planning, robot kinematics, collision checking, reachability representations, and Graphs of Convex Sets.
- Optimisation & Mathematics: Convex and nonlinear optimisation, numerical linear algebra, multivariable calculus, differential equations, and nonlinear sampling.
- Machine Learning & Vision: PyTorch, deep neural networks, reinforcement learning, computer vision, image segmentation, and visual odometry.
- Programming: Python, C/C++, Java, Haskell, and SQL.
- Research Tools: Drake, Linux, Git, NumPy, Pandas, Matplotlib, and OpenCV.

#### Awards

- June 2024: The Edinburgh Award: Makerspace Student Technician (UoE) — recognized for technical expertise, mentoring, and delivering workshops in the Makerspace.
- April 2023: The Edinburgh Award: Leadership in Student Opportunities (UoE) — awarded for leadership, communication, and digital literacy skills as an Informatics Representative.
- November 2022: 1st Prize Overall · AdaHack Hackathon — Twitter Solves Rubik’s Cube won best overall project, using Twitter's API to gather moves and update a live 3D visualization.
- July 2020: Award of Academic Excellence (University of La Laguna) — recognized as one of the top 10 academic performances in the S/C de Tenerife EBAU district among more than 5,000 students, based on results across the final two years of high school and the EBAU.

## Teaching & University Involvement  (`teaching.html`)

Courses · Mentoring · Representation

Teaching support, student mentoring and representation, and selected contributions to the University of Edinburgh community.

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

- **Selected Contributions & Activities** — Representation, project presentations, and competition outcomes
  - November 2024: Attended Board of Studies meeting as student rep to contribute to course and curriculum proposals.
  - February 2024: Invited to Airbus CubeSat Day to present our Payload project with Endeavour Rockets to other UK satellite student teams; our project included the 3-unit CubeSat payload, with an experiment to simulate the search of life in Exoplanets; engaged in discussions with industry professionals and other student teams.
  - November 2022: Participant in AdaHack Hackathon, 1st Prize Overall.
