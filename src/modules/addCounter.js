/* eslint-disable */


export default () => {
    
    let counter = new Date()

    let timeToMilli = counter.getMilliseconds();
    localStorage.setItem('+Counter', timeToMilli)
    return timeToMilli
    };
    
  
    