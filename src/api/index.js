import axios from 'axios';

/**
 * get all tasks
 */
export const getTasks = async () => {
  try {
    const tasks = await axios.get('http://localhost:3000/tasks');
    return tasks;
  } catch (error) {
    console.log(error);
    return error;
  }
};
