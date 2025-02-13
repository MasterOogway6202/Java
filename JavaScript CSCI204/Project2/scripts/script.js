const courses = [
    { name: "Intro to CS", code: "CS101", prereqs: "None" },
    { name: "Data Structures", code: "CS201", prereqs: "CS101" },
    { name: "Algorithms", code: "CS301", prereqs: "CS201" },
    { name: "Databases", code: "CS401", prereqs: "CS201" }
];

function loadCourses() {
    const courseList = document.getElementById("courseList");
    courses.forEach((course, index) => {
        let courseItem = document.createElement("div");
        courseItem.textContent = `${course.code}: ${course.name}`;
        courseItem.className = "course";
        courseItem.draggable = true;
        courseItem.id = `course-${index}`;
        courseItem.ondragstart = drag;
        courseItem.onclick = () => alert(`Course: ${course.name}\nCode: ${course.code}\nPrerequisites: ${course.prereqs}`);
        courseList.appendChild(courseItem);
    });
}

function allowDrop(event) {
    event.preventDefault();
    if (event.target.classList.contains("section")) {
        event.dataTransfer.dropEffect = "move";
    } else {
        event.dataTransfer.dropEffect = "none";
    }
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    let courseId = event.dataTransfer.getData("text");
    let courseElement = document.getElementById(courseId);
    if (event.target.classList.contains("section")) {
        event.target.appendChild(courseElement);
    }
}

function findPrereq(code) {
    let course = courses.find(c => c.code === code);
    return course ? course.prereqs : "Unknown";
}

loadCourses();