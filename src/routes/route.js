import add_tasks from "../modules/add_tasks";
import Add_job from "../modules/add_job";

import Error404 from "../modules/error404";

let content = document.getElementById("navbar");

const router = (route) => {
  content.innerHTML = "";

  switch (route) {
    case "": {
      return content.appendChild(Add_job());
    }
    default: {
      return content.appendChild(Error404());
    }
  }
};

export default router;
