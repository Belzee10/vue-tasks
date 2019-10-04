var faker = require('faker');

module.exports = () => {
  const data = { tasks: [] };
  for (let i = 0; i < 5; i++) {
    data.tasks.push({
      id: i,
      title: faker.name.title(),
      description: faker.lorem.text(),
      isComplete: faker.random.boolean()
    });
  }
  return data;
};
