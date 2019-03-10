class Students {
  studentName: string;
  rollNo: number;
  classs: number;
  subjects: string[];
  city: string;
  isCbse: boolean;

  constructor(
    names: string,
    roll: number,
    clas: number,
    subject: string[],
    city: string,
    isCbs: boolean
  ) {
    this.studentName = names;
    this.rollNo = roll;
    this.classs = clas;
    this.subjects = subject;
    this.city = city;
    this.isCbse = isCbs;
  }
}

var subjectsArray = ["maths", "science", "social"];
var obj = new Students("Sai", 12, 15, subjectsArray, "Hyderabad", true);
console.log(obj.studentName);
console.log(obj.rollNo);
console.log(obj.classs);
console.log(obj.subjects);
console.log(obj.city);
console.log(obj.subjects[0]);
console.log(obj.subjects[1]);
console.log(obj.subjects[2]);
