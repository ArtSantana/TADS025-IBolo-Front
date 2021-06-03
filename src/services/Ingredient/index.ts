import Axios, { AxiosResponse } from 'axios'
import { API_URL } from '@constants'
import { IngredientModel } from '@models'

export class IngredientService {
  async get(): Promise<AxiosResponse<Array<IngredientModel>>> {
    return Axios.get(`${API_URL}/ingredients`)
  }

  async update(id: number): Promise<AxiosResponse> {
    return Axios.put(`${API_URL}/ingredients/${id}`)
  }

  async delete(id: number): Promise<AxiosResponse> {
    return await Axios.delete(`${API_URL}/ingredients/${id}`)
  }
}
