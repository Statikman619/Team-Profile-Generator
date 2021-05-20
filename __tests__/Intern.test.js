const Intern = require("../Classes/Intern");

describe("InternTest", () => {
  it("can create an intern object", () => {
    const employee = new Intern("mike", 28, "mike@gmail.com", "mit");
    expect(typeof employee).toBe("object");
    expect(employee.name).toBe("mike");
    expect(employee.id).toBe(28);
    expect(employee.email).toBe("mike@gmail.com");
    expect(employee.school).toBe("mit");
  });
  it("returns correct employee values with methods", () => {
    const employee = new Intern("mike", 28, "mike@gmail.com", "mit");
    expect(employee.getName()).toBe("mike");
    expect(employee.getID()).toBe(28);
    expect(employee.getEmail()).toBe("mike@gmail.com");
    expect(employee.getSchool()).toBe("mit");
  });
});
