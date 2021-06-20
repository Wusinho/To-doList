/* eslint-disable */
import createId from "./createId";
class Project {
  constructor(name) {
    this.chore = name;
    this.id = createId();
  }
}
export default Project;
