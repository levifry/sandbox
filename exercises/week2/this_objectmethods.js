function raiseSalary(amount) {
    this.salary += amount
  };
  
  function promote(title) {
    this.jobTitle = title
  };
  const employees = {
  };
  employees.bob = {
    salary: 60000,
    jobTitle: 'sales rep',
    raiseSalary: raiseSalary,
    promote: promote
  };
  employees.sarah = {
    salary: 80000,
    jobTitle: 'sales supervisor',
    raiseSalary: raiseSalary,
    promote: promote
  }
  employees.alex = {
    salary: 100000,
    jobTitle: 'sales director',
    raiseSalary: raiseSalary,
    promote: promote
  }