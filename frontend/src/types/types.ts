export type Program = {
    _id: String;
    name: String;
    department: Number;
    requiredCourses?: Array<Number>;
    otherRequirements?: String;
    defaultSequence?: Object;
}

export type Statistics = {
    programCount: number;
    departmentCount: number;
    courseCount: number;
}