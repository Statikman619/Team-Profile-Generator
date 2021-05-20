const Employee = require("../Classes/Employee");

describe("EmployeeTest", () => {
  it("can create an employee object", () => {
    const employee = new Employee("mike", 28, "mike@gmail.com");
    expect(typeof employee).toBe("object");
    expect(employee.name).toBe("mike");
    expect(employee.id).toBe(28);
    expect(employee.email).toBe("mike@gmail.com");
  });
});
