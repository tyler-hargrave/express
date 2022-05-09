let skillsArray = [
 {
  id: 1,
  name: "eating",
  level: 8,
 },
 {
  id: 2,
  name: "sleeping",
  level: 10,
 },
 {
  id: 3,
  name: "babysitting",
  level: 6,
 },
];

const create = (skill) => {
 skill.id = Date.now() % 100000;
 skillsArray.push(skill);
};

const deleteOne = (id) => {
 const idx = skillsArray.findIndex((skill) => skill.id === parseInt(id));
 skillsArray.splice(idx, 1);
};

const update = (x, y) => {
 const idx = skillsArray.findIndex((skill) => {
  return skill.id === parseInt(y);
 });
 skillsArray[idx] = x;
};

module.exports = { create, deleteOne, skillsArray, update };
