class Job {
  constructor(job, chore, date, importance) {
    let countconst = 0;
    this._job = job;
    this.id = job.slice(0, 2) + countconst;
    this._chore = chore;
    this._date = date;
    this._importance = importance;
  }

  get job() {
    return this._job;
  }

  get chore() {
    return this._chore;
  }

  get date() {
    return this._date;
  }

  get importance() {
    return this._importance;
  }

  set job(job) {
    this.job = job;
  }

  set chore(chore) {
    this.chore = chore;
  }

  set date(date) {
    this._date = date;
  }

  set importance(importance) {
    this.importance = importance;
  }
}
export default Job;
