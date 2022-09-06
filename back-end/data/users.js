import becrypt from "bcryptjs";

const users = [
  {
    firstName: "jason",
    secondName: "Smith",
    email: "admin@example.com",
    password: becrypt.hashSync("password"),
    isAdmin: true,
  },
  {
    firstName: "jimmy",
    secondName: "johnson",
    email: "jimmy@example.com",
    password: becrypt.hashSync("password"),
  },
  {
    firstName: "bob",
    secondName: "ballsack",
    email: "bob@example.com",
    password: becrypt.hashSync("password"),
  },
];

export default users;
