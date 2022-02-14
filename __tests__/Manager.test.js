const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

//jest.mock('../lib/Employee');

test("create the manager object", () => {
    const manager = new Manager('John', 2);
    manager.id = 3;
    manager.email = 'john@email.com';
    
    expect(manager.name).toBe('John');
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('john@email.com'));
})

test("get the manager's role", () => {
    const manager = new Manager('John', 2);

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})

test("get manager's name", () => {
    const manager = new Manager('Ashe', 2);

    expect(manager.getName()).toEqual(expect.stringContaining('Ashe'));
})


test("get manager's id ", () => {
    const manager = new Manager('John', 2);
    manager.id = 3;

    expect(manager.getId()).toEqual(expect.any(Number));

})


test("get manager's email", () => {
    const manager = new Manager('John', 2);
    manager.email = "john@email.com";

    expect(manager.getEmail()).toEqual(expect.stringContaining('john@email.com'));
})

