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
//              it here. Leave as "" (empty string) to show an
//              automatically generated initials avatar instead.
//   subjects - Array of subjects this tutor teaches, e.g.
//              ["Math", "Science"]. Use consistent names across
//              tutors so the subject filter groups them correctly.
//   towns    - Array of towns/areas this tutor is willing to
//              tutor in, e.g. ["Springfield", "Shelbyville"].
//   grades   - Grade range as a short string, e.g. "Grades 3-8"
//   bio      - 1-2 sentence bio
//   online   - true if this tutor also offers online sessions
// ============================================================

const TUTORS = [
  {
    name: "Jane Smith",
    photo: "",
    subjects: ["Math", "Test Prep"],
    towns: ["Springfield", "Shelbyville"],
    grades: "Grades 6-12",
    bio: "Specializes in Algebra, Geometry, and SAT/ACT math prep. Loves turning math anxiety into math confidence.",
    online: true
  },
  {
    name: "Marcus Lee",
    photo: "",
    subjects: ["Science", "Math"],
    towns: ["Springfield", "Capital City"],
    grades: "Grades 9-12",
    bio: "Background in biology and chemistry, with a focus on helping students prep for AP exams.",
    online: true
  },
  {
    name: "Priya Patel",
    photo: "",
    subjects: ["English/Writing", "College Essays"],
    towns: ["Shelbyville", "Capital City"],
    grades: "Grades 6-12",
    bio: "Helps students find their voice in essays, from weekly English homework to college applications.",
    online: false
  },
  {
    name: "Sam Rivera",
    photo: "",
    subjects: ["All Subjects", "Test Prep"],
    towns: ["Springfield"],
    grades: "Grades K-8",
    bio: "Generalist tutor for elementary and middle school students across all core subjects.",
    online: true
  }
];
