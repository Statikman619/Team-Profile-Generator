const Engineer = require("../Classes/Engineer");

describe("EngineerTest", () => {
  it("can create an engineer object", () => {
    const employee = new Engineer("mike", 28, "mike@gmail.com", "mikem");
    expect(typeof employee).toBe("object");
    expect(employee.name).toBe("mike");
    expect(employee.id).toBe(28);
    expect(employee.email).toBe("mike@gmail.com");
    expect(employee.git).toBe("mikem");
  });
  it("returns correct employee values with methods", () => {
    const employee = new Engineer("mike", 28, "mike@gmail.com", "mikem");
    expect(employee.getName()).toBe("mike");
    expect(employee.getRole()).toBe("Engineer");
    expect(employee.getGit()).toBe("mikem");
  });
});
