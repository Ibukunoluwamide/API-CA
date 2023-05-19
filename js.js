let endPoint = "https://jsonplaceholder.typicode.com/users"
const getUsers = ()=>{
 fetch(endPoint)
  .then((response)=>{
         return response.json()
      })
     
  .then((convertedResponse)=>{
     displayUsers.innerHTML= `
   <tr>
     <th>ID</th>
     <th>Username</th>
     <th>Email</th>
     <th>Website</th>
   </tr>
     `
     convertedResponse.map((eachUser)=>{
        console.log(eachUser);
         displayUsers.innerHTML += `
         <tr>
         <td>${eachUser.id}</td>
         <td>${eachUser.username}</td>
         <td>${eachUser.email}</td>
         <td>${eachUser.website}</td>
       </tr>
         `
      
     })


      })
}