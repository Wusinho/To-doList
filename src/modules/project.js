class Project {
  constructor(job) {
    this.job = job;
    this.id = job.slice(0, 2);
    this.task = [];
  }
}
export default Project;
