import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  private apiUrl = 'http://localhost:3000/preguntes';

  constructor() { }

  async getPreguntes(): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}`);
      let preguntes = await response.json();
      return preguntes;
    } catch (error) {
      console.error(error);
    }
  }

  async getPreguntaDataByCategories(categories: string): Promise<any> {

    try{
        const response = await fetch(`${this.apiUrl}/categoria`, {
          method: "POST",
          body: JSON.stringify({
            categoria: [categories]
          }),
          headers: {
            'Content-Type': 'application/json'

          },
        });
        const preguntaData = await response.json();
        return preguntaData;
    }catch(error){
      console.log(error);
    }
  }

}
