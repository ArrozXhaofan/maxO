export function getStaticPaths(id:any){
    const url = `https://apimaxv2.apexmaicol.online/VPsublimacion/${id}`
    return fetch(url)
      .then(res => res.json())
      .then(data => data[0])
  }

async function page({params}:any) {

    const {id} = params
    const datos = await  getStaticPaths(id)

  return (
    <div className='pt-40'>

        {
            datos.MODELO
        }

    </div>
  )
}

export default page