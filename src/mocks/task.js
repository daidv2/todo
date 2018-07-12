const uuidv4 = require('uuid/v4');
let items = [
  {
    id: uuidv4(),
    name: 'LG',
    level: 0
  },
  {
    id: uuidv4(),
    name: 'Samsung',
    level: 1
  },
  {
    id: uuidv4(),
    name: 'HTC',
    level: 2
  },
  {
    id: uuidv4(),
    name: 'Meizu',
    level: 2
  }
];

export default items;