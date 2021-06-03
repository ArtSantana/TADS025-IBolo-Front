import axios from 'axios'
import Faker from 'faker'
import { RecipeModel } from '@models'
import { RecipeService } from '.'
import { API_URL } from '@constants'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockResultData: Array<RecipeModel> = []

const mockedAxiosResult = {
  data: mockResultData,
  status: Faker.datatype.number(),
}

mockedAxios.get.mockResolvedValue(mockedAxiosResult)

const makeSut = (): RecipeService => {
  return new RecipeService()
}

describe('Cake Service', () => {
  test('Should call get with the correctly URL', async () => {
    const sut = makeSut()
    await sut.get()

    expect(mockedAxios.get).toHaveBeenCalledWith(`${API_URL}/recipes`)
  })

  test('Should call put with the correctly URL', async () => {
    const id = Faker.datatype.number()
    const sut = makeSut()
    await sut.update(id)

    expect(mockedAxios.put).toHaveBeenCalledWith(`${API_URL}/recipes/${id}`)
  })

  test('Should return cake list in response data', async () => {
    const sut = makeSut()
    const response = await sut.get()
    expect(response).toEqual(mockedAxiosResult)
  })

  test('Should call delete with the correctly URL and id', async () => {
    const id = Faker.datatype.number()
    const sut = makeSut()
    await sut.delete(id)

    expect(mockedAxios.delete).toHaveBeenCalledWith(`${API_URL}/recipes/${id}`)
  })
})
