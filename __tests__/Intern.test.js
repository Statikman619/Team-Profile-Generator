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
});
