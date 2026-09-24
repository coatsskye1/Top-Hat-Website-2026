// ============================================================
// MUSIC TUTOR DATA
// ============================================================
// Same idea as js/tutors-data.js, but for the separate "Music
// Tutors" section on tutors.html. This list is NOT filtered by
// the subject/town/search controls above it — it's always shown
// in full, so there's nothing else to wire up.
//
// To add a music tutor: copy one of the objects below and paste
// it into the MUSIC_TUTORS array, then fill in the fields.
// To remove one, delete their object from the array.
//
// Fields (same as tutors-data.js):
//   name     - Tutor's full name (string)
//   photo    - Path to a photo, e.g. "assets/tutors/jane.jpg".
//              Leave as "" to show an auto-generated initials avatar.
//   subjects - Array of instruments/areas taught, e.g. ["Piano", "Voice"]
//   towns    - Array of towns this tutor is willing to teach in
//   grades   - Grade range or level, e.g. "Grades 3-12" or "Beginner-Advanced"
//   bio      - 1-2 sentence bio (hidden behind the "View Bio" dropdown)
//   online   - true if this tutor also offers online lessons
// ============================================================

const MUSIC_TUTORS = [
  {
    name: "Teya Ozgen",
    photo: "assets/tutors/teya-ozgen.jpg",
    subjects: ["Violin"],
    towns: ["Westport", "Weston", "Wilton", "Fairfield", "Norwalk"],
    grades: "Grades K-12",
    bio: "Hi! My name is Teya and I am a rising senior at Staples. I have been playing the violin for 12 years and started at Suzuki Music Schools. I now take private lessons with Darwin Shen. I have been in Stradivarius Chamber Orchestra for three years of high school and also participated in Freshman, Sophomore, and Symphonic Orchestra. I also auditioned for and was accepted to the Western Regionals Festival and participated in the orchestra there.",
    online: true
  },
  {
    name: "Gretchen Zabicki",
    photo: "assets/tutors/gretchen-zabicki.jpg",
    subjects: ["Flute"],
    towns: ["Westport", "Weston", "Wilton", "Norwalk", "New Canaan"],
    grades: "Grades K-12",
    bio: "Hi! My name is Gretchen Zabicki, and I've been playing the flute for 6 years. I was a part of band all throughout middle school at Weston Middle School, and have performed in many concerts and parades. I love to play the flute during my free time and love challenging myself to learn new music pieces. I can't wait to spread the joy of music!",
    online: true
  },
  {
    name: "Leya Chaves",
    photo: "assets/tutors/leya-chaves.jpg",
    subjects: ["Piano"],
    towns: ["Westport"],
    grades: "Grades 9-12",
    bio: "Hi! My name is Leya Chaves and I'm a senior at Staples High School. I have been playing the piano for 10 years, both competitively and casually. I've performed at Carnegie Hall, played at various festivals, and have won 2nd in my age category regionally at The Steinway Piano Competition. I don't currently attend piano competitions, but I still play for fun! I teach both in-person and virtually, depending on my availability. I can't wait to help you learn and love piano!",
    online: true
  },
  {
    name: "Josie Caricato",
    photo: "assets/tutors/josie-caricato.jpg",
    subjects: ["Voice"],
    towns: ["Westport", "Weston"],
    grades: "Grades K-12",
    bio: "Hi! I'm Josie Caricato and I've been singing in choirs for about 10 years. I sing in the Orphenians and Wreckappellas groups and am a president of choir at Staples. I especially excel at classical singing and have been taking classical voice lessons for four years. I have been accepted to sing in the CMEA Western Region and All-State festivals for all years of high school, and was accepted to sing in the ACDA Eastern Region festival this past year. I am so excited to share my love of music and singing!",
    online: true
  },
  {
    name: "Amina Ibrahim",
    photo: "assets/tutors/amina-ibrahim.jpg",
    subjects: ["Cello", "Voice"],
    towns: ["Westport", "Fairfield", "Norwalk"],
    grades: "Grades K-12",
    bio: "Hi! My name is Amina Ibrahim, and I have been playing the cello as well as singing for 8 years. I am a junior at Staples High School. I am a member of both Symphonic Orchestra, and the Fairfield County Children's Chamber Choir. Music is such an important aspect of my life and I can't wait to share it with others!",
    online: true
  }
];
