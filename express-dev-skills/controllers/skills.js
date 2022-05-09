var skills = require("../models/skill.js");

const create = (req, res) => {
 console.log(req.body);
 // The model is responsible for creating data
 skills.create(req.body);

 // Do a redirect anytime data is changed
 res.redirect("/skills");
};

const deleteSkill = (req, res) => {
 skills.deleteOne(req.params.id);
 res.redirect("/skills");
};

const editForm = (req, res, next) => {
 res.render("skills/edit", { skill: getSkill(skills.skillsArray, req.params.id) });
};
const editSkill = (req, res) => {
 skills.update(req.body, req.params.id);
 res.redirect("/skills");
};

const getSkill = (skills, id) => {
 for (let i = 0; i < skills.length; i++) {
  x = skills[i];
  if (1 * x.id == 1 * id) {
   return x;
  }
 }
 return { name: "No Skills", level: 0 };
};

const index = (req, res, next) => {
 res.render("skills-index", { skills: skills.skillsArray, time: req.time });
};

const newSkill = (req, res, next) => {
 res.render("skills/new");
};

const show = (req, res, next) => {
 res.render("skills-show", { skill: getSkill(skills.skillsArray, req.params.id) });
};

module.exports = { create, deleteSkill, editForm, editSkill, getSkill, index, newSkill, show };
