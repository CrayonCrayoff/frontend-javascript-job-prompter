// console.log(departments);
//
// // Opdracht 1a
// console.log(`De afdeling Sales heeft ${departments.sales.numberOfEmployees} medewerkers.`);
//
// // Opdracht 1b
// console.log(`Marketing is een leuke afdeling om te werken. ${departments.marketing.description}`);
//
// // Opdracht 1c
// console.log(`De afdeling Customer Service heeft ${departments["customer-service"].numberOfEmployees} medewerkers.`);
//
// // Opdracht 1d
// console.log(`Sales is een uitdagende afdeling om te werken als Verkoopmanager. ${departments.sales.jobs[1].description}`);

// // Opdracht 2a
// const userInput = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]");
// console.log(userInput);
//
// // Opdracht 2b
// let response = `Je koos ${userInput}. `;
// switch (userInput) {
//     case "marketing":
//     case "sales":
//     case "customer-service":
//         response += `${departments[userInput].description}`;
//         console.log(response);
//         break;
//     // Opdracht 2c
//     default:
//         response = "Ongeldige keuze. Probeer het opnieuw door de pagina te verversen";
//         console.error(response);
// }

// // Opdracht 3a
// let jobChoicePrompt = `Je koos marketing. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.`
//
// for (let i = 0; i < 4; i++) {
//     jobChoicePrompt += ` ${i}: [${departments.marketing.jobs[i].title}]`;
//     if (i < 3) {
//         jobChoicePrompt += ", "
//     }
// }
//
// const jobChoice = Number(prompt(jobChoicePrompt));
//
// // Opdracht 3b
// // Opdracht 3c
//
// switch (jobChoice) {
//     case "0":
//     case "1":
//     case "2":
//     case "3":
//         console.log(
//             `Je koos ${departments.marketing.jobs[jobChoice].title}. Een uitdagende rol! ${departments.marketing.jobs[jobChoice].description}`
//         )
//         break;
//     default:
//         console.error("Ongeldige input. Probeer het opnieuw door de pagina te verversen.")
// }

// // Opdracht 4a
// const departmentChoice = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]");
// let departmentChoiceTitle;
//
// switch (departmentChoice) {
//     case "marketing":
//         departmentChoiceTitle = "Marketing";
//         break;
//     case "sales":
//         departmentChoiceTitle = "Sales";
//         break;
//     case "customer-service":
//         departmentChoiceTitle = "Customer Service"
//         break;
//     default:
//         console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen")
// }
//
// if (departments[departmentChoice] !== undefined) {
//     console.log(`${departmentChoiceTitle} is een leuke afdeling om te werken. Er werken op dit moment ${departments[departmentChoice].numberOfEmployees} medewerkers.`)
//
//     // Opdracht 4b
//     // Opdracht 4c
//     const jobs = departments[departmentChoice].jobs;
//
//     let jobChoicePrompt = `Je koos ${departmentChoiceTitle}. Over welke functie wil je meer weten? Voer een getal tussen 0 en ${jobs.length - 1} in.`;
//
//     for (let i = 0; i < jobs.length; i++) {
//         jobChoicePrompt += ` ${i}: [${jobs[i].title}]`;
//         if (i < jobs.length - 1) {
//             jobChoicePrompt += ", ";
//         }
//     }
//
//     const jobChoice = prompt(jobChoicePrompt);
//     console.log(`jobChoice is ${jobChoice}`)
//
//     if (jobChoice !== "") {
//         const jobIdx = Number(jobChoice)
//         if ((!isNaN(jobIdx)) || (jobIdx >= 0) && (jobIdx < jobs.length)) {
//             console.log(
//                 `Je koos ${jobs[jobIdx].title}. Een uitdagende rol! ${jobs[jobIdx].description}`);
//         } else {
//             console.error("Ongeldige input. Probeer het opnieuw door de pagina te verversen.");
//         }
//     } else {
//         console.error("Ongeldige input. Probeer het opnieuw door de pagina te verversen.");
//     }
// }


// Opdracht 5a
// document.getElementsByTagName("title")[0].textContent = "Tjerk Hoekstra";
// document.getElementById("role-title").textContent = "Noedelsoep";

// Opdracht 5b

// herbruikbare functie om de error message content te laten zien
function displayError() {
    document.getElementById("error-message").textContent = "Ongeldige keuze. Probeer het opnieuw door de pagina te verversen";
}

const departmentChoice = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]");

let jobChoice;

// als ongeldige keuze, dan is departments[userDepartmentChoice] undefined
if (departments[departmentChoice] === undefined) {
    displayError();
} else {
    const jobs = departments[departmentChoice].jobs;
    let userJobChoicePrompt = `Je koos ${departmentChoice}. Over welke functie wil je meer weten? Voer een getal tussen 0 en ${jobs.length - 1} in.`;

    for (let i = 0; i < jobs.length; i++) {
        userJobChoicePrompt += ` ${i}: [${departments[departmentChoice].jobs[i].title}]`;
        if (i < jobs.length - 1) {
            userJobChoicePrompt += ", ";
        }
    }

    jobChoice = prompt(userJobChoicePrompt);

    if (jobChoice === "") {
        displayError();
    } else {
        const jobIdx = Number(jobChoice);

        // als Number(jobChoice) NaN teruggeeft, heeft de gebruiker iets ingevoerd wat geen nummer is. Een te klein of te groot getal mag natuurlijk ook niet
        if (
            (isNaN(jobIdx)) ||
            (jobIdx < 0) ||
            (jobIdx >= jobs.length)
        ) {
            displayError();
        } else {
            document.getElementById("role-title").textContent = jobs[jobIdx].title;
            document.getElementById("department-description").textContent = departments[departmentChoice].description;
            document.getElementById("role-description").textContent = jobs[jobIdx].description;
        }
    }
}