/* eslint-disable */


class Store {
 

static addInside(name,item) {
  let existing = localStorage.getItem(name);
  existing = existing ? JSON.parse(existing) : [];

  existing.push(item)
  
  localStorage.setItem(name, JSON.stringify(existing));


}



  static addTask(tasks, index) {
    const jobs = Store.getJobs();
    jobs[index].task.push(tasks);
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }
}

export default Store;
