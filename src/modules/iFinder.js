/* eslint-disable */


export default () => {
    



        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
            if(key == '+Finder')
            return localStorage.getItem(key)
        }
        








};


