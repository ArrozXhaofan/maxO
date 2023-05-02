function cargarPaises(id:any){
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res => res.json())
}

async function page({params}:any) {

  const {id} = params
  const datos = await cargarPaises(id)
  

  return (
    <div className="pt-40">
      <h1>{datos.title}</h1>
      dfd
    </div>
  )
}

export default page