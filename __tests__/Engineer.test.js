const Engineer = require('../lib/Engineer');

test("create Engieer object", () => {
    const engineer = new Engineer('Ashe', 'ashegithub');
    engineer.id = 1;
    engineer.email = 'ashe@email.com';

    expect(engineer.name).toBe('Ashe');
    expect(engineer.github).toEqual(expect.stringContaining('ashegithub'));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('ashe@email.com'));


})

test("get engieer's github ", () => {
    const engineer = new Engineer('Ashe', 'ashegithub');
   
    expect(engineer.getGithub()).toEqual(expect.stringContaining('ashegithub'));
})

test("get the engineer's role", () => {
    const engineer = new Engineer('Ashe', 'ashegithub');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})

test("get engineer's name", () => {
    const engieer = new Engineer('Ashe', 'ashegithub');

    expect(engieer.getName()).toEqual(expect.stringContaining('Ashe'));
})

// test getId method
test("get Engineer's id ", () => {
    const engineer = new Engineer('Ashe', 'ashegithub');
    engineer.id = 1;

    expect(engineer.getId()).toEqual(expect.any(Number));

})

test("get engineer's email", () => {
    const engineer = new Engineer('Ashe', 'ashegithub');
    engineer.email = "ashe@email.com";

    expect(engineer.getEmail()).toEqual(expect.stringContaining('ashe@email.com'));
})

