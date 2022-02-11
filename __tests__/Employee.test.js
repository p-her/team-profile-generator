const Employee = require('../lib/Employee');

test('create an employee object', () => {
    const employee = new Employee('Jhin', 4, 'jhin@email.com');

    expect(employee.name).toBe('Jhin');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('jhin@email.com'));

})


test("get an employee's name", () => {
    const employee = new Employee('Jhin', 4, 'jhin@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Jhin'));
})

test("get an employee's id", () => {
    const employee = new Employee('Jhin', 4, 'jhin@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
})

test("get an employee's email", () => {
    const employee = new Employee('Jhin', 4, 'jhin@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('jhin@email.com'));
})


test("get an employee's role", () => {
    const employee = new Employee('Jhin', 4, 'jhin@email.com');
    
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})