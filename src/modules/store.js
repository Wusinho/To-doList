class Store {
  static getJobs() {
    let jobs;
    if (localStorage.getItem('jobs') === null) {
      jobs = [];
    } else {
      jobs = JSON.parse(localStorage.getItem('jobs'));
    }
    return jobs;
  }

  static addJob(job) {
    const jobs = Store.getJobs();
    jobs.push(job);

    localStorage.setItem('jobs', JSON.stringify(jobs));
  }

  static addTask(tasks, index) {
    const jobs = Store.getJobs();
    jobs[index].task.push(tasks);
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }
}

export default Store;
