import Axios, { AxiosResponse } from 'axios'
import { API_URL } from '@constants'
import { RecipeModel } from '@models'

export class RecipeService {
  async get(): Promise<AxiosResponse<Array<RecipeModel>>> {
    return Axios.get(`${API_URL}/recipes`)
  }

  async update(id: number): Promise<AxiosResponse> {
    return Axios.put(`${API_URL}/recipes/${id}`)
  }

  async delete(id: number): Promise<AxiosResponse> {
    return await Axios.delete(`${API_URL}/recipes/${id}`)
  }
}
