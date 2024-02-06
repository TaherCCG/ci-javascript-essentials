// This keyword
// The JavaScript this keyword refers to the object it belongs to.
// It has different values depending on where it is used:
// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In an event, this refers to the element that received the event.

let classroom = {
    numOfStudents: 0,
    schoolHours: false,
    playtime: false,
    openSchool: function() {
        this.schoolHours = true;
        this.numOfStudents = 20;
    },
    breakTime: function() {
    if (this.schoolHours) {
      this.playtime = true;
    }
  }
};

classroom.openSchool();
console.log(classroom.numOfStudents);

classroom.breakTime();
console.log(classroom.playtime);
