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
            type: 'number',
            name: 'id',
            message: "What is the team manager's employee id?"
    
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?"
    
        },
        {
            type: 'number',
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
                choices: ['Engineer', 'Intern', 'Finish']
            },
            {
                name: 'engineer',
                type: 'input',
                message:'Engineer',
                when: answers => {
                    return answers.option === 'Engineer'
                },
                choices: function(){
                    return inquirer
                        .prompt([
                            {
                                
                                    type: 'input',
                                    name: 'name',
                                    message: "What is the engineer's name?"
                                
    
                            }
                        ])
                }
            }
        ])

}


const promptEngineer = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?"
            }
        ])
}
teamManagerQuestions()