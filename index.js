const getObj = (url) => {
  return new Promise((resolve, reject) => {
  
    if(!url)
    reject(
      console.log("error! Please enter url")
    )
    resolve(fetch(url))

  })
}


getObj("https://reqres.in/api/users").then((response)=>{
  return response.json()
}).then((res) => {
  console.log(res)
  getUrlValues(res)
})



const getUrlValues = (res) => {
  const resArray = res.data
  console.log(resArray)
  
  let usersList = document.createElement("div")
  usersList.classList.add("users-list")
  document.body.appendChild(usersList)
  
  resArray.map((user) => {
    let userDiv = document.createElement("div")
    let userAvatar = document.createElement("img")
    let userName = document.createElement("div")
    let userLastName = document.createElement("div")
    let userEmail = document.createElement("h4")
    
    usersList.appendChild(userDiv)
    userDiv.appendChild(userAvatar)
    userDiv.appendChild(userName)
    userDiv.appendChild(userLastName)
    userDiv.appendChild(userEmail)
    
    userDiv.classList.add("user")
    userAvatar.classList.add("user-avatar")
    
    userAvatar.src = `${user.avatar}`
    userName.innerText = `${user.first_name}`
    userLastName.innerText = `${user.last_name}`
    userEmail.innerText = `${user.email}`
  })
}