// ============================================================
// TUTOR DIRECTORY DATA
// ============================================================
// This is the ONLY file you need to edit to add, remove, or
// update a tutor. The tutors page (tutors.html) reads this
// list and builds the filterable directory automatically —
// no HTML editing required.
//
// To add a tutor: copy one of the objects below (from the
// opening "{" to the closing "}," ) and paste it into the
// TUTORS array, then fill in the fields.
//
// To remove a tutor: delete their whole object from the array.
//
// Fields:
//   name     - Tutor's full name (string)
//   photo    - Path to a photo, e.g. "assets/tutors/jane.jpg".
//              Put the image file in the assets/tutors/ folder
//              (create it if it doesn't exist yet) and reference
//              it here. Photos display in a square frame, so a
//              square or portrait crop works best. Leave as ""
//              (empty string) to show an automatically generated
//              initials avatar instead.
//   subjects - Array of subjects this tutor teaches, e.g.
//              ["Math", "Science"]. Use consistent names across
//              tutors so the subject filter groups them correctly.
//   towns    - Array of towns/areas this tutor is willing to
//              tutor in, e.g. ["Westport", "Fairfield"].
//   grades   - Grade range as a short string, e.g. "Grades 3-8"
//   bio      - 1-2 sentence bio
//   online   - true if this tutor also offers online sessions
// ============================================================

const TUTORS = [
  {
    name: "Stella DiGeronimo",
    photo: "assets/tutors/stella-digeronimo.jpg",
    subjects: ["Math", "English/Writing", "Social Studies", "World Languages"],
    towns: ["Westport", "Weston", "Wilton", "Fairfield", "Norwalk", "New Canaan"],
    grades: "Grades K-12",
    bio: "Hello everyone! My name is Stella DiGeronimo, and I am a senior at Staples High School. I have taken honors courses in every subject area and have completed AP courses such as AP US History, AP Computer Science Principles, AP Computer Science A, AP Gov (We the People), AP English Lang, AP Spanish Lang, and AP Macro/Micro Economics. This school year, I will build on these classes with AP English Lit, AP Spanish Lit, AP Psych, AP Calc AB, and AP World. I am a member of the English, Math, Social Studies, and World Language honor societies, as well as the National Honor Society. I am the founder of both The Legacy Project at Staples High School and the Democratic Women of Staples, and I hope to work in politics ultimately. Outside of the classroom, I am on the varsity field hockey team and am the captain of the ski and softball teams. I look forward to working with you this year!",
    online: true
  },
  {
    name: "Charles McGillion-Moore",
    photo: "assets/tutors/charles-mcgillion-moore.jpg",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "World Languages", "Test Prep"],
    towns: ["Westport", "Wilton", "Weston", "Fairfield", "Norwalk"],
    grades: "Grades K-12",
    bio: "Hi, I'm Charles McGillion-Moore, and I'm currently a senior at Staples High School. By the end of this year, I will have completed five AP courses and eight honors-level classes. I'm most passionate about math-related courses, and this year I am taking AP Calculus AB, AP Statistics, AP Microeconomics, and AP Macroeconomics. While my favorite subjects tend to be more quantitative, I've also chosen equally rigorous courses in other disciplines, developing a genuine interest in both STEM and the humanities. Outside of school, I row at Maritime Rowing Club in Norwalk, where my crew qualified for and competed at the Youth National Championships this past summer. Locally, I serve as a voting member of the Westport Youth Commission, a Senior Scout in Troop 39, and a frequent volunteer at the Person-to-Person pantry.",
    online: false
  },
  {
    name: "Mateo Riera",
    photo: "",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "World Languages"],
    towns: ["Westport", "Weston", "Wilton", "Fairfield", "Norwalk"],
    grades: "Grades K-12",
    bio: "Hi, my name is Mateo Riera and I am a junior at Staples High School. During my sophomore year, I took AP computer science principles, chemistry honors, pre-calculus honors, U.S. history honors and English 10 honors. This year, I am in AP Macro/Micro Economics, AP Calculus AB and AP Lang. I am mainly interested in math and science, but I also take rigorous language courses like AP Lang as well as for world languages, French 4 Honors. Outside of school, I do volunteer work, I've coached at Peak Performance and at the YMCA, I play soccer at school, and I am a part of clubs like Grow CT and the Robotics club. I look forward to teaching others difficult concepts and connecting with them on both an academic and personal level.",
    online: true
  },
  {
    name: "Teya Ozgen",
    photo: "assets/tutors/teya-ozgen.jpg",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "Test Prep"],
    towns: ["Westport", "Weston", "Wilton", "Fairfield", "Norwalk"],
    grades: "Grades K-12",
    bio: "Hi! My name is Teya and I am a rising senior at Staples. I currently volunteer tutoring the SAT for schoolhouse academy. At school, I have taken AP Statistics, AP US History, AP Language and Composition, AP US Government and Politics, AP Chemistry, AP Calculus BC and self studied AP Psychology and AP Comparative Government. I am a Western Regional Violinist of 12 years and am in both Chamber and Symphonic Orchestra at Staples. I love playing field hockey and also run track. My top hobbies are sewing and listening to music. My favorite subject is government and I hope to study political science. But, I can't wait to help you with any subject!",
    online: true
  },
  {
    name: "Maddie Sine",
    photo: "",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "World Languages", "Test Prep"],
    towns: ["Westport", "Weston", "Fairfield", "New Canaan"],
    grades: "Grades K-12",
    bio: "Hi! My name is Maddie Sine and I am a senior at Staples High School. I'm passionate about healthcare, especially emergency and trauma medicine. I have worked as an EMT in Westport for 2 years, and I am a Compo Beach Lifeguard. I love staying active: I am a 4 year Varsity Track and Field athlete, have my black belt in Karate, and enjoy hiking with my friends. My course load at Staples has included AP Chemistry, AP Biology, AP Calculus AB, AP Calculus BC, AP Lang, and AP Psychology. I have also taken 11 Honors courses. I scored a 35 on the ACT at the end of my freshman year, with perfect scores in the Reading and English sections. I'd love to pass on my knowledge and support students in ACT preparation. My favorite school subjects are math, science, and anatomy, and I am excited to tutor students in these areas. I look forward to working with you!",
    online: true
  },
  {
    name: "Jess Selzer",
    photo: "assets/tutors/jessica-selzer.png",
    subjects: ["Math", "Science", "English/Writing", "World Languages", "Test Prep"],
    towns: ["Westport", "Weston", "Wilton", "Fairfield", "Norwalk"],
    grades: "Grades K-12",
    bio: "Hi! My name is Jess, and I am a junior at Staples High School. I have taken English, Spanish, Geometry, and U.S. History at the honors level and have maintained a 4.0 gpa. This year, I am taking AP Language, AP Computer Science, and AP Environmental Science. Outside of academics, I am president of Creative HeARTs club, VP of Letters to Littles club, a member of the National Art and English Honor Societies, and a hospital volunteer. I am looking forward to tutoring and helping students feel more confident in their schoolwork!",
    online: true
  },
  {
    name: "Dylan Johnson",
    photo: "assets/tutors/dylan-johnson.jpg",
    subjects: ["Math", "Science", "Social Studies"],
    towns: ["Westport"],
    grades: "Grades 9-12",
    bio: "Hi! My name is Dylan Johnson, and I'm a senior at Staples High School. This year, I'm taking courses including AP Physics, AP Calculus, AP Psychology, AP Government and Politics, and AP Language and Composition. Outside of school, I play varsity and club volleyball and am a voting member of the Westport Youth Commission. My favorite subjects are math and science, and I especially enjoy working through challenging problems. I'm looking forward to helping students build their skills and confidence in these subjects this year!",
    online: false
  },
  {
    name: "Avery Kalter",
    photo: "assets/tutors/avery-kalter.jpg",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "World Languages", "Test Prep"],
    towns: ["Westport", "Weston", "Wilton", "Fairfield", "Norwalk"],
    grades: "Grades K-12",
    bio: "Hi! My name is Avery Kalter and I am a senior at Staples High School. Throughout high school, I have taken AP US History, AP Language, AP U.S. Government, AP Spanish Language, and Calculus Honors. This coming year, I am looking forward to taking AP Literature, AP Psychology, AP Biology, and AP Statistics. Although I am more humanities oriented, I am happy to help in any course! Outside of Top Hat, I am a captain for our cross country and track teams, volunteer through NCL, and lead a school-chapter of My TeamTriumph. I look forward to working with you this year!",
    online: true
  },
  {
    name: "Jonah Bomback",
    photo: "",
    subjects: ["Math", "Science", "English/Writing", "World Languages", "Test Prep"],
    towns: ["Westport", "Weston", "Wilton", "Fairfield"],
    grades: "Grades K-12",
    bio: "Hello, My name is Jonah Bomback and I am a senior as at staples high school. I play varsity rugby and am president of Model UN and Future business leaders of America. I am a first honors student and achieved a 1510 on the sat (780 math). At Staples, I have taken AP CSA, AP CSP, AP Calc AB, and AP Econ. This year I am enrolled in AP Calc BC+ and AP stat.",
    online: true
  },
  {
    name: "Jessica DiPrato",
    photo: "assets/tutors/jessica-diprato.jpg",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "World Languages"],
    towns: ["Westport", "Fairfield", "Norwalk"],
    grades: "Grades K-12",
    bio: "Hi, my name is Jessica DiPrato, and I'm a senior at Staples High School. I've enjoyed volunteering with NCL (National Charity League) since 7th grade, where I've been able to do tutoring for math, reading and writing in Bridgeport. I've taken a variety of English and social studies courses and received a five on the AP literature exam. I'd be happy to help with anything, but especially with the humanities. Outside of school, I take art classes, do volunteer work, work at the Toy Post, and work on either an art project or essay to submit to any competition I can find! I'm excited to start working with you, and I'll do my very best to help you succeed.",
    online: true
  },
  {
    name: "Addison Dennett",
    photo: "assets/tutors/addison-dennett.jpg",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "World Languages", "Test Prep"],
    towns: ["Westport", "Weston", "Wilton", "Fairfield", "Norwalk"],
    grades: "Grades K-12",
    bio: "Hi everyone! My name is Addison Dennett and I am a senior at Staples High School. I have taken an advanced class in almost every subject area: Honors Math, AP Statistics, AP Computer Science Principles, AP Microeconomics, AP Macroeconomics, Uconn ECE Seminar English Course, and Honors Spanish (up to Spanish 3 while earning the CT Seal of Biliteracy). I am enrolled in AP Calculus AB, AP Physics 1, and the Uconn ECE Human Rights Course. Outside of school, I am on the varsity volleyball team and a captain for our track teams (indoor and outdoor). I am a big advocate for mental health and intern at a local mental health practice in Westport as well. I look forward to meeting and working with you this year!",
    online: true
  },
  {
    name: "Piper Salik",
    photo: "",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "World Languages"],
    towns: ["Westport", "Fairfield"],
    grades: "Grades K-12",
    bio: "Hi! My name is Piper Salik, and I'm a junior at Staples High School. I'm excited to offer tutoring for students in a variety of subjects! At Staples, I've taken a wide range of challenging courses, including Mandarin 2H & 3H, Global Studies H, English 9H & 10H, Advanced Journalism, U.S. History H, Chemistry H, Geometry, Biology, and Algebra 2. This year, I'm taking AP Language, AP Gov We the People, and AP Biology, among other classes. Outside of the classroom, I'm a member of Inklings and play varsity squash. I especially love the humanities, but I'm happy to tutor across a range of subjects and work with students to find what works best for them. I'm patient and would love to help students feel more confident and successful in school!",
    online: true
  },
  {
    name: "Maadhav Subramanian",
    photo: "",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "World Languages"],
    towns: ["Westport", "Weston", "Wilton", "Fairfield", "Norwalk"],
    grades: "Grades K-12",
    bio: "Hi, my name is Maadhav Subramanian and I'm a junior at Staples High School. I am currently in AP-level math, science, and humanities classes and have completed AP CSA, AP Chem, AP US History, AP Statistics, and Pre-Calculus Honors. I prefer STEM-oriented classes but enjoy humanities subjects as well. I am also a part of the Symphonic Band and the Social Studies, Math, and Music honor societies. Outside of school, I row for Saugatuck Rowing Club and like to read and listen to music. I look forward to working with you this year!",
    online: true
  },
  {
    name: "Lilly Geisler",
    photo: "",
    subjects: ["Math", "Science", "English/Writing", "World Languages"],
    towns: ["Westport", "Weston"],
    grades: "Grades K-12",
    bio: "Hi I'm Lilly, I am a junior at Weston high school. I am currently taking AP chemistry, AP human geography, and AP US history and I have taken honors science and math classes all throughout high school along with honors PLTW. I am on the varsity cross country and track teams. My favorite school subjects are math and science but I am happy to help students in what ever subject I can. I look forward to tutoring and helping students how ever I can!",
    online: false
  },
  {
    name: "Kathryn Donovan",
    photo: "",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "World Languages"],
    towns: ["Fairfield"],
    grades: "Grades K-12",
    bio: "Hello, my name is Kathryn Donovan. I have been a high honor scholar for 3 years in a row. I am a rising senior at Fairfield Warde High School where I am a member of the math team, art club and Art Honor society. In my free time I act at Fairfield College Preparatory School, paint, read, and write. I love math, science, english, and history. In the past I have taken 7 honors courses and 5 AP courses, including, AP European History, AP Statistics, AP Physics 1, AP English Language, and AP United States History.",
    online: true
  },
  {
    name: "Samantha Nori",
    photo: "",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "World Languages"],
    towns: ["Fairfield"],
    grades: "Grades K-12",
    bio: "Hi! My name is Samantha Nori and I am a junior at Fairfield Warde High School. I have taken honors courses in every subject area these past two years. I have taken AP European History, and am currently taking AP Chemistry, AP language and composition, and AP US History. I have a passion for STEM and my favorite subject is science. I also love Spanish and have a strong understanding in the Humanities especially history. Outside of the classroom I volunteer at a cancer center and am part of SASO. I play varsity softball and ran varsity cross country. I am also a part of Best Buddies club and the Thrive club. I love to read and learn new things outside of school. I look forward to working with you this year!",
    online: true
  },
  {
    name: "Luke Filipek",
    photo: "assets/tutors/luke-filipek.jpg",
    subjects: ["Math", "Science", "English/Writing", "Social Studies"],
    towns: ["Westport", "Fairfield", "Norwalk"],
    grades: "Grades K-12",
    bio: "Hi, I'm Luke and I am a rising junior at Fairfield Ludlowe. I have taken AP Chem and AP CSP so far and am taking AP Calc BC, AP Physics 1, and AP CSA this year. I enjoy playing tennis, watching sports, listening to music, working out and spending time with my friends. I'm on the varsity tennis team and also plan on doing track and FBLA this year as well as multiple Honors Societies. I am looking forward helping other students grow and succeed.",
    online: true
  },
  {
    name: "Gretchen Zabicki",
    photo: "assets/tutors/gretchen-zabicki.jpg",
    subjects: ["Math", "Science", "English/Writing", "World Languages"],
    towns: ["Westport", "Weston", "Wilton", "Norwalk", "New Canaan"],
    grades: "Grades K-12",
    bio: "Hi! My name is Gretchen Zabicki, and I'm currently a junior at Lauralton Hall in Milford. As a private school, there are a limited number of AP classes, and both Honors and AP courses require specific prerequisites for enrollment. Despite these limitations, I took classes such as Algebra 2 Honors, Chemistry Honors, and Latin 2 Honors my sophomore year. Junior year, I will be taking AP Chemistry, Pre-Calculus Honors, Latin 3 Honors, and other honors-level courses. Aside from academics, I am part of my school's cheerleading and golf teams, helped co-found my school's Media Team this past year, and participate in clubs such as Model UN and Key Club. This upcoming year, I am looking forward to volunteering with children and being a Peer Mentor at my school. I have a passion for teaching, especially with math, science, and Latin, but I'd love to help with any subject. I also play the flute and would be happy to provide lessons. I'm looking forward to working with students!",
    online: true
  },
  {
    name: "Cassi Kessler",
    photo: "assets/tutors/cassi-kessler.jpg",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "World Languages"],
    towns: ["Westport", "Weston", "Wilton"],
    grades: "Grades K-12",
    bio: "Hello! My name is Cassi Kessler, I'm a Junior at Weston High School, for the past two years I've challenged myself with a new language, Latin, and have found that I have excelled beyond expectations, being asked to join Latin honor society. On top of that, I have been in honors English and Modern world studies, both of which required hard work and dedication. Last year I also challenged myself with two math classes and was able to balance both of them on top of a full schedule and did not receive anything lower than a 90% all four quarters. This year I plan to challenge myself with AP bio, U.S. history and Language composition on top Pre-Calculus, honors Latin, anatomy and physiology, and personal finance. Outside of school I have started my own service club to aid women escaping domestic violence situations and facing homelessness. I busy myself with art and creative writing and have even managed to end up in my school's paper. I do multiple extracurriculars such as Model UN, Mock trial, as well as track and field. I have a deep appreciation for helping and teaching others as I have done before as a camp counselor teaching and helping children from ages four to nine. I look forward to helping anyone with whatever needs they may have!",
    online: true
  },
  {
    name: "Teddy Kushel",
    photo: "assets/tutors/teddy-kushel.jpg",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "World Languages", "Test Prep"],
    towns: ["Westport", "Weston", "Wilton", "Fairfield", "Norwalk", "New Canaan", "Darien"],
    grades: "Grades K-12",
    bio: "Hi! I'm Teddy Kushel, and I'm currently a senior at Fairfield Warde High School. During my sophmore and junior years, I've taken AP European History, AP Micro and Macroeconomics, AP Physics 1 and Calculus BC, AP Statistics, AP Psychology, AP English Language, and APUSH. Outside of school, I run track and field and cross country, where I have had the honor of receiving multiple All-State and All-Conference Awards. In my remaining free time, I work at Firehouse Deli on weekends and in the summer, and volunteer at Operation Hope on weeknights. I'm excited to start assisting students this year!",
    online: true
  },
  {
    name: "Katie Romaniv",
    photo: "assets/tutors/katie-romaniv.jpg",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "World Languages"],
    towns: ["Westport", "Fairfield", "New Canaan"],
    grades: "Grades K-12",
    bio: "Hi! I'm Katie, a high school student (class of 2028) and a learner with a 4.1+ weighted GPA and experience in AP and honors coursework across subjects including chemistry, history, math, and English. As a multilingual student fluent in Ukrainian, Russian, and English, I love helping others understand challenging material, build confidence, and discover that learning can be genuinely rewarding! I have complete/currently taking: AP Chemistry, AP Biology, AP Statistic, AP European History, AP American History, AP Language and Composition, AP Computer Science Principles, AP Psychology + I also complete Ukrainian high school coursework online alongside with my American education.",
    online: false
  },
  {
    name: "Rachel Altieri",
    photo: "assets/tutors/rachel-altieri.jpg",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "World Languages"],
    towns: ["Westport", "Fairfield", "New Canaan"],
    grades: "Grades K-12",
    bio: "Hello! My name is Rachel Altieri, and I am a class of 2028 student at Fairfield Warde High School, hoping for the possibility to help out a few people in need. My main fields of experience and passion are humanities and linguistics, and in my Freshman year I was able to achieve my Seal of Biliteracy in Italian and my Seal of Biliteracy in Spanish. In the past, I have taken AP Modern European History, Spanish 5 Honors, AP Italian, and English 10 Honors. This school year I will be completing AP Spanish, AP U.S. History, and AP Language and Composition. as a trilingual student, fluent in English, Italian, and Spanish, (and knowing some basic levels of Latin and French) I understand that the learning journey can be a difficult one, especially for a young student. That is why I am happy to serve my community in this way! I love helping others build their own confidence, and again, I know from experience that understanding a new topic or subject can be extremely rewarding, especially if it has been a struggle in the past. Ever since I was little. I have been told that I was a great instructor, and I hope that you'll give me a chance to demostrate it and help you succeed!",
    online: true
  },
  {
    name: "Jonathan Frawley",
    photo: "",
    subjects: ["Math", "Science", "Test Prep"],
    towns: ["Westport", "Wilton", "Norwalk", "New Canaan", "Darien"],
    grades: "Grades K-12",
    bio: "Hi, my name is Jonathan Frawley, and I am a senior at Darien High School. I have taken AP courses across a range of subjects, including AP Lang, APUSH, AP CSA and CSP, AP Calculus BC, and AP Physics C: Mechanics, and I scored a 1600 on the SAT. This year, I am taking AP Microeconomics, AP Statistics, AP Physics C: E&M, AP Lit, and AP Gov, as well as Multivariable Calculus. I'd be happy to help in any subject, but I especially enjoy and specialize in STEM. Outside of academics, I run cross country and track and have won first place nationally in TSA's TEAMS competition. I also do freelance coding and enjoy working on programming projects in my free time. I'm looking forward to working with you!",
    online: true
  },
  {
    name: "Riley Caney",
    photo: "",
    subjects: ["Math", "Science", "Social Studies", "Test Prep"],
    towns: ["Westport", "Weston", "Wilton", "Fairfield", "Norwalk"],
    grades: "Grades K-12",
    bio: "Hi everyone! My name is Riley Caney and I am a senior at Staples High School. So far I have completed 5 APs including, AP U.S. History, AP Micro/Macro economics, AP Chemistry, AP Government (We the People) and AP Calc BC. This year I plan to complete AP Literature and Composition, AP European History, AP Physics 1, AP Statistics, Multivariable Calculus and Differential equations. I am part of Math, and Spanish Honor society as well as National Honor society. I am very passionate about mathematics but I would love to help out in any subject. In my free time I play basketball for Staples. I look forward to working with you all!",
    online: true
  },
  {
    name: "Emilie Russell",
    photo: "",
    subjects: ["Math", "Science", "Social Studies"],
    towns: ["Westport"],
    grades: "Grades K-12",
    bio: "Hi! My name is Emilie Russell, and I'm a senior at Staples High School. Throughout high school, I've taken AP courses in US History, Calculus BC, English Language, US Government and Politics, and Environmental Science. This year, I'm taking Differential Equations, Multivariable Calculus, AP English Literature, AP Psychology, AP Micro/Macroeconomics, and AP Chinese. I'm especially passionate about math and history, but I'd be happy to help with any subject! Outside of academics, I'm a four-year Staples Varsity Field Hockey and Softball player and also play competitive club field hockey. At school, I'm involved in Staples Choir and serve as Vice President of Future Business Leaders of America, as I hope to study business in college. In my free time, I enjoy spending time with friends and family and being outdoors. I'm looking forward to working with you this year!",
    online: false
  },
  {
    name: "Cassie Siegner",
    photo: "",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "Test Prep"],
    towns: ["Westport", "Weston", "Wilton", "Fairfield", "Norwalk", "New Canaan", "Darien"],
    grades: "Grades K-12",
    bio: "Hi! My name is Cassie Siegner and I am a senior at Staples. I have taken 7 honors classes, AP U.S. Government & Politics, AP Biology, and am currently taking AP Chemistry, AP Psychology, and AP Statistics. I have also taken the SAT and the ACT. Outside of academics I have been volunteering with NCL for 5 years, am on a feminism advocacy council, am in the Staples Pre-Med club, and work as a swimming instructor and babysitter during the summers. My favorite subject is science, but I am ready to help with anything!",
    online: true
  },
  {
    name: "Leya Chaves",
    photo: "",
    subjects: ["English/Writing", "Social Studies", "Test Prep"],
    towns: ["Westport"],
    grades: "Grades 9-12",
    bio: "Hi! My name is Leya Chaves and I'm a senior at Staples High School. Throughout my time at Staples I've taken honors and/or AP classes in every subject area, and this year I'm taking many honors and AP courses including AP Literature and Composition, AP Micro/Macro Economics, AP Calculus, and AP Psychology. I scored a 35 on the ACT my sophomore year. I play varsity field hockey and squash and in my free time I love to travel, bake, read, and play pickleball and piano. I'm excited to work with you and build your skills and confidence!",
    online: true
  },
  {
    name: "Alex Fetner",
    photo: "",
    subjects: ["Math", "Science", "English/Writing", "World Languages"],
    towns: ["Westport", "Weston", "Fairfield"],
    grades: "Grades K-12",
    bio: "Hi! I'm Alex Fetner and I'm a junior at Staples High School. I have taken or am currently taking AP U.S. History, AP Calculus AB, AP Chemistry, AP U.S. Gov and Politics, and 12 honors classes covering Spanish, math, science, English, and social studies. I am particularly interested in math, science, and Spanish, but would love to tutor any subject! Within Staples, I am on the swim team, I am involved in student council, and I am a member of the English and Science National Honors Societies. Outside of school, I am president of my BBYO chapter and love spending time with friends and family. I'm so excited to work with you this year!",
    online: true
  },
  {
    name: "Elena Nasar",
    photo: "",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "World Languages"],
    towns: ["Westport", "Weston", "Wilton", "Fairfield", "Norwalk"],
    grades: "Grades K-12",
    bio: "Hi! My name is Elena Nasar and I am a senior at Staples High School. Throughout my time at Staples, I have taken 11 honors courses, AP Government, AP Biology, and AP Language. This year, I am taking AP Calculus AB, AP Psychology, AP Chemistry and AP Spanish Language. I am most passionate about the sciences, but I am happy to help with any subject! Outside of school, I am a varsity coxswain at Saugatuck Rowing Club, volunteer at Yale New Haven Hospital, and am a No Place for Hate Leader for our school's chapter. I look forward to working with you this year!",
    online: true
  },
  {
    name: "Nora Finneran",
    photo: "",
    subjects: ["Math", "Science", "English/Writing"],
    towns: ["Westport", "Wilton", "Fairfield", "Norwalk"],
    grades: "Grades K-10",
    bio: "Hello! My name is Nora Finneran and I'm a senior at Warde High School. I am captain of the girl's rugby team, a Life Scout in Troop 188, and part of my high school's highest choir. I tutor grades Kindergarten through Sophmore year specifically in math. I'm so excited to be a part of Top Hat Tutors this year!",
    online: true
  },
  {
    name: "Anita Vinokur",
    photo: "",
    subjects: ["Math", "Science", "World Languages", "Test Prep"],
    towns: ["Westport", "Weston", "Wilton", "Fairfield", "Norwalk"],
    grades: "Grades K-12",
    bio: "Hello, I am Anita Vinokur, a junior at Staples High School. At school, I am currently taking AP Chemistry, Honors Physics, AP Calculus BC, AP Computer Science A, and AP Statistics. I have also taken AP Computer Science Principles. I am involved in Women in STEM and the STEM Journal at Staples. Outside of school, I love fencing and running. I also enjoy traveling and riding my bike. I love challenging myself both academically and athletically, and I'm excited to help you with any subject!",
    online: true
  },
  {
    name: "Josie Caricato",
    photo: "",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "World Languages", "Test Prep"],
    towns: ["Westport", "Weston"],
    grades: "Grades K-12",
    bio: "Hi! I'm Josie Caricato and I am currently a senior at Staples High School. By the end of this year I will have completed 13 AP courses and many honors courses in every subject. My favorites have included AP Calc BC, AP Gov We the People, and AP Statistics. This year I am currently taking courses such as Multivariable Calculus, Differential Equations, AP Physics C, AP English Literature, AP Spanish Literature, AP Macro/Micro Economics, and intro to human rights. Though math is my favorite subject, I would love to help students in any subject area needed! Outside of school, I am a president of the choir program at Staples and sing in the Orphenians and Wreckappellas groups. I am also a captain of the girls cross country and indoor/outdoor track and field teams. I enjoy traveling and volunteering with Builders Beyond Borders, SLOGs, and various honors societies at school. I am so excited to start working with you!",
    online: true
  },
  {
    name: "Amina Ibrahim",
    photo: "",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "World Languages"],
    towns: ["Westport", "Fairfield", "Norwalk"],
    grades: "Grades K-12",
    bio: "Hi! My name is Amina Ibrahim, and I am a junior at Staples High School. I enjoy working with younger students and I have experience as a camp counselor babysitter and through various theater programs. My favorite subjects are English and History, outside of academics. I love music, theater, and I play the cello and enjoy singing. I'm excited to be a top tutor and to help students build their skills and confidence in a supportive, encouraging environment.",
    online: true
  },
  {
    name: "Abigail Copperthite",
    photo: "",
    subjects: ["Math", "Science", "English/Writing", "Social Studies"],
    towns: ["Fairfield"],
    grades: "Grades K-12",
    bio: "Hi! My name is Abigail and I am a rising senior at Fairfield Warde High School. By the end of this year, I will have completed 15 Honors level classes as well as 3 AP level courses - AP Statistics, AP Calculus AB, and AP Government & Politics. I play viola for the Philharmonic Orchestra, sing in the Bel Canto Choir, and sing in Muse A Capella at my school. I am also Captain of the Fairfield Co-Op Varsity Bowling Team, and bowl competitively as a part of the Nutmeg Bowl Junior Program. I love to read, listen to music, and spend time with my family and friends. I am excited to work with you this year in any subject!",
    online: false
  },
  {
    name: "Alexi Dalamagas",
    photo: "",
    subjects: ["Math", "Science", "English/Writing", "Social Studies", "World Languages"],
    towns: ["Westport", "Wilton", "Fairfield", "Norwalk"],
    grades: "Grades K-12",
    bio: "Hi! My name is Alexi Dalamagas, and I am currently a junior at Staples High School. Over the past three years, I have taken nine honors classes and AP U.S. History. This year, I am taking AP Biology, AP Language and Composition, AP Computer Science Principles, and AP Calculus AB. I am most passionate about science, math, and Mandarin, but I would love to help out in any subject where I am needed! Outside of school, I am the founder of my own literacy club, Letters to Littles, an editor for STEM Journal, the founder of a STEM program at the Westport Library, and a member of both the Math and Science National Honor Societies. I'm excited to work with everyone this year!",
    online: true
  }
];
