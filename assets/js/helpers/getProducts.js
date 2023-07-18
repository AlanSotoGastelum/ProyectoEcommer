 async function getProducts () {
 return window.fetch('data.json')
 .then((res)=> res.json())
 .then((data)=> data)
 .catch((err)=> {console.log(err) })




 

 //try { 
  //  const res = await window.fetch('data(2).json')
 //const data = await res.json()
 //return data
//}catch(error) {
  //  console.log(error)

// }
}



export default getProducts