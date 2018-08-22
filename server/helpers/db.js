const config = require("../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(config);

const getCourses = () => {
  return knex.select().table("courses");
};

const getCourseById = course_id => {
  return knex("courses").where({ course_id });
};

const checkCourseExist = async name => {
  const response = await knex("courses").where({ name });
  return response.length === 0 ? false : true;
};

const addCourse = async (name, location, organisation_id) => {
  return await knex("courses").insert({
    name,
    location,
    organisation_id
  });
};

const getSingleUser = (email, password) => {
  return knex("users")
    .where({ email, password })
    .first();
};

const getUserProfile = userId => {
  return knex("users")
    .select("user_id", "email", "name")
    .where({ user_id: userId })
    .first();
};

const getOrganisations = () => {
  return knex.select().table("organisations");
};

const getOrganisationsById = course_id => {
  return knex
    .select()
    .from("organisations")
    .where("organisation_id", "=", organisation_id);
};

const checkOrganisationExist = async name => {
  const response = await knex("organisations").where({ name });
  return response.length === 0 ? false : true;
};

const addOrganisation = async name => {
  return await knex("organisations").insert({ name });
};

module.exports = {
  getCourses,
  getCourseById,
  addCourse,
  checkCourseExist,
  getOrganisations,
  getOrganisationsById,
  addOrganisation,
  checkOrganisationExist,
  getSingleUser,
  getUserProfile
};
