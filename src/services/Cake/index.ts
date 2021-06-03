import Axios, { AxiosResponse } from 'axios'
import { API_URL } from '@constants'
import { CakeModel } from '@models'

export class CakeService {
  async get(): Promise<AxiosResponse<Array<CakeModel>>> {
    return Axios.get(`${API_URL}/cakes`)
  }

  async update(id: number): Promise<AxiosResponse> {
    return Axios.put(`${API_URL}/cakes/${id}`)
  }

  async delete(id: number): Promise<AxiosResponse> {
    return await Axios.delete(`${API_URL}/cakes/${id}`)
  }
}
