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
    name: "Emma Chen",
    photo: "",
    subjects: ["Piano", "Music Theory"],
    towns: ["Westport", "Fairfield"],
    grades: "Beginner-Advanced",
    bio: "Classically trained pianist who loves helping beginners fall in love with the instrument, and coaching advanced students through recital and audition pieces.",
    online: true
  },
  {
    name: "Jake Morrison",
    photo: "",
    subjects: ["Guitar", "Bass"],
    towns: ["Westport", "Norwalk"],
    grades: "All ages",
    bio: "Plays in a local band and teaches everything from first chords to songwriting, in both acoustic and electric styles.",
    online: true
  },
  {
    name: "Sofia Delgado",
    photo: "",
    subjects: ["Voice", "Music Theory"],
    towns: ["Darien", "Norwalk"],
    grades: "Grades 3-12",
    bio: "Vocal coach with a background in musical theater, helping students build range, breath control, and confidence performing solo.",
    online: false
  }
];
