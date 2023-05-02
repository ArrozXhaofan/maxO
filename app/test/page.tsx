import Link from "next/link"

function cargarPaises(){
  return fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(res => res.json())
}

interface User {
  userId:number,
  id:number,
  title:string,
  completed:false
}

async function Testers() {

  const users:User[] = await cargarPaises()

  return (
    <div className='pt-40'>
      {
        users.map(user => (
          <li key={user.id}>
            <Link href={`test/${user.id}`}>
              {user.title}
            </Link>
          </li>
        ))
       
       
      }
    </div>
  )
}

export default Testers