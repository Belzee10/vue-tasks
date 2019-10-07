import axios from 'axios';

/**
 * get all tasks
 */
export const getTasks = async () => {
  try {
    const res = await axios.get('http://localhost:3100/tasks');
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

/**
 * create a Task
 * @param {*} data
 */
export const addTask = async data => {
  try {
    const res = await axios.post('http://localhost:3100/tasks', {
      ...data
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

/**
 * mark a task as complete
 * @param {*} id
 * @param {*} data
 */
export const completeTask = async (id, data) => {
  try {
    const res = await axios.put(`http://localhost:3100/tasks/${id}`, {
      data: {
        ...data
      }
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

/**
 * delete a task
 * @param {*} id
 */
export const deleteTask = async id => {
  try {
    const res = await axios.delete(`http://localhost:3100/tasks/${id}`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
