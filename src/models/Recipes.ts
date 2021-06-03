import { IngredientModel } from '.'

export interface RecipeModel {
  id: number
  name: string
  ingredients: Array<IngredientModel>
}
