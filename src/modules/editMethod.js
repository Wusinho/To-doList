const afterInputChore = (e ) => {
    changeChore(localStorage.getItem('+realName'), e.target.value)
  }
  
  const afterInputDate = (e ) => {
    changeDate(localStorage.getItem('+realName'), e.target.value)
  }
  const afterInputImportance = (e ) => {
    changeImportance(localStorage.getItem('+realName'), e.target.value)
  }

var changeChore = (name, newChore) =>{
    var existing
      var existing = localStorage.getItem(name);
    existing = existing ? JSON.parse(existing) : {};
      existing[0].chore = newChore
    
      localStorage.setItem(name, JSON.stringify(existing));
  
  };
  
  var changeDate = (name, newDate) =>{
    var existing
      var existing = localStorage.getItem(name);
    existing = existing ? JSON.parse(existing) : {};
      existing[0].date = newDate
    
      localStorage.setItem(name, JSON.stringify(existing));
  
  };
  
  
  var changeImportance = (name, newImportance) =>{
    var existing
      var existing = localStorage.getItem(name);
    existing = existing ? JSON.parse(existing) : {};
      existing[0].importance = newImportance
    
      localStorage.setItem(name, JSON.stringify(existing));
  
  };
  


export {
    afterInputChore,
    afterInputDate,
    afterInputImportance,
    changeChore,
    changeDate,
    changeImportance,
  };