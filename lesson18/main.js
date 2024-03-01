fetchUsers()
async function fetchUsers (){
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users.",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const users = await response.json()
    const usersList = users.map(user => {
        return {
            id: user.id,
            name: user.name
        }
    })
  } catch (err) {
    console.error(err);
  }
};


function renderUsersList(usersList) {
    const 
}
