// runs the application

const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

const empolyee = [];
const teamManagerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's employee id?"
    
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?"
    
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?"
    
        }

    ])
}

const promptMenu = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'option',
                message: 'Add an engineero or an intern or finish building the team',
                choices: ['Engineer', 'Intern', 'Finish'],

            }
        ]).then(answer => {
            if(answer.option === 'Engineer'){
                 return promptEngineer();
            }else if(answer.option === 'Intern'){
               return promptIntern();
            }else{
                return ;
            }
        })
}


const promptEngineer = () => {
    return inquirer
        .prompt([
            {
                type:'input',
                name: 'name',
                message: "What is the name of the engineer?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's employee id?"
            },
            {
                type:'input',
                name: 'email',
                message: "What is the engineer's email address?"
            },{
                type: 'input',
                name: 'github',
                message: "What is the engineer's github username?"
            }
        ]).then(promptMenu)
       
}



const promptIntern = () => {
    return inquirer
        .prompt([
            {
                type:'input',
                name: 'name',
                message: "What is the name of the intern?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's employee id?"
            },
            {
                type:'input',
                name: 'email',
                message: "What is the intern's email address?"
            },{
                type: 'input',
                name: 'school',
                message: "What is the name of the school the intern go to?"
            }
        ]).then(promptMenu)
       
}



teamManagerQuestions()
    .then(mg => {
        const aa = JSON.stringify(mg)
        console.log('aa ' + aa)
    })
    .then(promptMenu)
    .then(ansswer => {

      
        const ss = JSON.stringify(ansswer);
        
        console.log('manager: ' + ss)
    })
    