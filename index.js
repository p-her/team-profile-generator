// runs the application

const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const generatePage = require('./src/page-template');
const writeFile = require('./dist/generate-site');
const generateHTML = require('./src/page-template')


const path = require('path');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


const employeeObj = [];



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
                 promptEngineer()
                    .then(engineerData => {
                        const name = engineerData.name;
                        
                        const github = engineerData.github;

                        const engineer = new Engineer(name, github);
                            engineer.id = engineerData.id;
                            engineer.email = engineerData.email;

                        employeeObj.push(engineer);

                    })
                    .then(promptMenu)
            }else if(answer.option === 'Intern'){
                promptIntern()
                    .then(internData => {
                        const school = internData.school;
                        const name = internData.name;

                        const intern = new Intern(name, school);
                        intern.email = internData.email;
                        intern.id = internData.id;

                        employeeObj.push(intern);

                    })
                    
                    .then(promptMenu)
            }else{

                let body = ''
                for(let i = 0; i < employeeObj.length; i++){
                    let name = employeeObj[i].constructor.name;
              
                    if(name === 'Intern'){
                      
                        body += `
                        <div class="card" style="width: 15rem;">
                        <div class="card-body">
                            
                                <div class="title">
                                    <h5 class="card-title">${employeeObj[i].name}</h5>
                                   <h6 class="heading"><i class="fa-solid fa-user-graduate"></i>${name}</h6>
                               </div>
                            </div>
                     
                          
                            <div class="body-info">
                                <p class="same-border">ID: ${employeeObj[i].id} </p>
                                <p class="same-border"> Email:<a href="mailto:${employeeObj[i].email}" >  ${employeeObj[i].email}</a></p>
                                <p class="same-border">School: ${employeeObj[i].school}</a></p>
                            </div>
                        
                      </div>
                        
                        `
                      
                        
                    }else if(name === 'Engineer'){
                        body += `
            
                        <div class="card" style="width: 15rem;">
                        <div class="card-body">
                            
                                <div class="title">
                                    <h5 class="card-title">${employeeObj[i].name}</h5>
                                   <h6 class="heading"><i class="fa-solid fa-glasses"></i>${name}</h6>
                               </div>
                            </div>
                     
                          
                            <div class="body-info">
                                <p class="same-border">ID: ${employeeObj[i].id} </p>
                                <p class="same-border"> Email:<a href="mailto:pher@gmail.com" >  ${employeeObj[i].email}</a></p>
                                <p class="same-border"> Github:<a href="https://www.github.com/${employeeObj[i].github}" > ${employeeObj[i].github}</a></p>
                            </div>
                        
                      </div>
                        
           
                        `
            
                    }else{
                 
                            body += `

                         


                            <div class="card" style="width: 15rem;">
                            <div class="card-body">
                                
                                    <div class="title">
                                        <h5 class="card-title">${employeeObj[i].name}</h5>
                                       <h6 class="heading"><i class="fa-solid fa-mug-hot"></i>${name}</h6>
                                   </div>
                                </div>
                         
                              
                                <div class="body-info">
                                    <p class="same-border">ID: ${employeeObj[i].id} </p>
                                    <p class="same-border">Email: <a href="mailto:pher@gmail.com" >  ${employeeObj[i].email}</a></p>
                                    <p class="same-border" >Office Number: ${employeeObj[i].officeNumber}</href=></p>
                                </div>
                            
                          </div>

                           
                            `
                        
                    }
            
                
                }
                    writeFile(generateHTML(body)) 
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
        ])
       
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
        ])
}


init = () => {
    teamManagerQuestions()
    .then(managerData => {

        const name = managerData.name;
        const officeNumber = managerData.officeNumber;

        const manager = new Manager(name, officeNumber)

        manager.id = managerData.id;
        manager.email = managerData.email;
        employeeObj.push(manager);
    
    })
    .then(promptMenu)
    
}


    
   
   
    
    

init()

   

