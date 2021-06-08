import jwt from "jsonwebtoken";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("login");
    //console.log("serializedState", serializedState);
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return -1; // -1 to indicate failure
  }
};

export const isLogged = () => {
  const data = loadState();
  if (data === -1 || !data) { // failed to get info from localStorage or there is data
    return false; 
  }
  return data.login;
}

export const isPartner = () => {
    const data = loadState();
    if (data === -1 || !data) { // failed to get info from localStorage or there is data
      return false; 
    }
    const userData = jwt.decode(data.token);
    return userData.partner === 1;
}

export const isMentor = () => {
  const data = loadState();
  if (data === -1 || !data) { // failed to get info from localStorage or there is data
    return false; 
  }
  const userData = jwt.decode(data.token);
  if(!userData.roles){
    return false;
  }
  return userData.roles.includes('MENTOR'); 
}

//for future use
/* export const isMentee = () => {
  const data = loadState();

    return data.login;
}
// ////////////
// if (user.role === ADMIN || user.auth && post.author === user.id) {
//   <button onClick={this.deletePost.bind(this)}>Delete</button>
// }
  if (data === -1 || !data) { // failed to get info from localStorage or there is data
    return false; 
  }
  const userData = jwt.decode(data.token);
  return userData.mentee === 1;
}
 */
