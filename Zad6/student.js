const getStudentFullName = (id) => {
  switch (id) {
    case 0:
      return "Mikhail Ramanchyk";
    case 1:
      return "Kacper Nowak";
    case 2:
      return "Maja Kowalska";
    default:
      return "Michał Wiśniewski";
  }
};

const getStudentId = (id) => {
  switch (id) {
    case 0:
      return "46469";
    case 1:
      return "111222";
    case 2:
      return "222333";
    default:
      return "333444";
  }
};

module.exports = {
  getStudentFullName,
  getStudentId,
};