// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

var canFinish = function (numCourses, prerequisite) {
    let coursesToPre = {}; //key: course; val: pre
    let preToCourses = {}; //key: pre; val: course
    for (let i = 0; i < prerequisite.length; i++) {
        let [course, prereq] = prerequisite[i];
        if (!coursesToPre[course]) {
            coursesToPre[course] = [];
        }
        coursesToPre[course].push(prereq);
        if (!preToCourses[prereq]) {
            preToCourses[prereq] = [];
        }
        preToCourses[prereq].push(course);
    }

    let availCourses = [];
    for (let i = 0; i < numCourses; i++) {
        if (!coursesToPre[i]) {
            availCourses.push(i);
        }
    }
    let numTaken = 0;
    while (availCourses.length > 0) {
        let course = availCourses.shift();
        numTaken++;
        let courses = preToCourses[course] || [];
        for (let i = 0; i < courses.length; i++) {
            let index = coursesToPre[courses[i]].indexOf(course);
            coursesToPre[courses[i]].splice(index, 1);
            if (!coursesToPre[courses[i]].length) {
                availCourses.push(courses[i]);
            }
        }
    }
    return numTaken === numCourses;
};
