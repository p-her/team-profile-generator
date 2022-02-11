const Intern = require('../lib/Intern');

test("create intern object", () => {
    const intern = new Intern('Jack', 'Golden Valley');
    intern.id = 10;
    intern.email = 'jack@email.com';
    

    expect(intern.name).toBe('Jack');
    expect(intern.school).toEqual(expect.stringContaining('Golden Valley'));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('jack@email.com'));

})


test("get the intern's school", () => {
    const intern = new Intern('Jack', 'Golden Valley');

    expect(intern.getSchool()).toEqual(expect.stringContaining('Golden Valley'));
})



test("get the intern's role", () => {
    const intern = new Intern('Jack', 'Golden Valley');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
})

test("get intern's name", () => {
    const intern = new Intern('Jack', 'Golden Valley');

    expect(intern.getName()).toEqual(expect.stringContaining('Jack'));
})


test("get inter's id ", () => {
    const intern = new Intern('Jack', 'Golden Valley');
    intern.id = 10;

    expect(intern.getId()).toEqual(expect.any(Number));

})


test("get intern's email", () => {
    const intern = new Intern('Jack', 'Golden Valley');
    intern.email = "jack@email.com";

    expect(intern.getEmail()).toEqual(expect.stringContaining('jack@email.com'));
})

