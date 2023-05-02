import { Carta } from "../models"

export async function getCatalogo():Promise<Carta[]>{
    
    const url = 'https://apimaxv2.apexmaicol.online/VPsublimacion/'

    return fetch(url)
      .then(res => res.json())
  }
  