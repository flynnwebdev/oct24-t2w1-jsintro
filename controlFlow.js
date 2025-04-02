console.log('Control Flow')

// If

const noOfStudents = 19

// Python
// if no_of_students == 20:
//     pass

// == is loose equality (will do type coercion)
// === is strict equality (checks type AND value, will not coerce)
if (noOfStudents === "20") {
    console.log('There are 20 students')
} else {
    console.log('There are NOT 20 students')
}

// If..else if
const hour = 18
if (hour < 12) {
    console.log('Good Morning!')
} else if (hour < 17) { // Python: elif <condition>
    console.log('Good Afternoon!')
} else if (hour < 20) {
    console.log('Good Evening')
} else {
    console.log('Good Night')
}

// Switch case
const day = 6

switch (day) {
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
    case 7:
        console.log('It\'s the weekend!')
        break
    default:
        console.log('That\'s not a weekday!')
}

