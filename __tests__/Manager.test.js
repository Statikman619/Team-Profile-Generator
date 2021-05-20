const Manager = require("../Classes/Manager");

describe("ManagerTest", () => {
  it("can create an manager object", () => {
    const employee = new Manager("mike", 28, "mike@gmail.com", 1228);
    expect(typeof employee).toBe("object");
    expect(employee.name).toBe("mike");
    expect(employee.id).toBe(28);
    expect(employee.email).toBe("mike@gmail.com");
    expect(employee.officeNumber).toBe(1228);
  });
});
