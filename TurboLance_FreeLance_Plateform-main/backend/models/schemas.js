const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signupSchema = new Schema({
  fname: { type: String },
  lname: { type: String },
  email: { type: String },
  userMode: { type: String },
  devProfession: { type: String },
  password: { type: String },
  hashPassword: { type: String },
  entryDate: { type: Date, default: Date.now },
});

const devAccSchema = new Schema({
  email: { type: String },
  tagline: { type: String },
  skills: { type: [String], default: [] },
  hourlyRate: { type: String },
  entryDate: { type: Date, default: Date.now },
});

const proposalSchema = new Schema({
  cemail: { type: String },
  cfname: { type: String },
  clname: { type: String },
  demail: { type: String },
  cpdescription: { type: String },
  pstatus: { type: String, default: "pending" },
  entryDate: { type: Date, default: Date.now },
  completedDate: { type: Date, default: Date.now },
});

const Signup = mongoose.model("Signup", signupSchema, "signup_accounts");
const DevAcc = mongoose.model("DevAcc", devAccSchema, "dev_acc");
const Proposal = mongoose.model("Proposal", proposalSchema, "dev_proposal");

const mySchemas = { Signup: Signup, DevAcc: DevAcc, Proposal: Proposal };

module.exports = mySchemas;
