import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Justas Tit',
    email: 'justas@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Tomas Tom',
    email: 'tomas@example.com',
    password: bcrypt.hashSync('123456', 10)
  }
];

export default users;
