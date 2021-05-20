import Home from "../modules/home";
import Post from "../modules/post";
import About from "../modules/about";
import Error404 from "../modules/error404";

let content = document.getElementById("root");

const router = (route) => {
  content.innerHTML = "";

  switch (route) {
    case "#/": {
      return content.appendChild(Home());
    }
    case "#/posts": {
      return content.appendChild(Post());
    }

    case "#/about": {
      return content.appendChild(About());
    }
    default: {
      return content.appendChild(Error404());
    }
  }
};

export default router;
