import { useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'
import { getRecipeFromMistral } from './ai'

export default function Main() {
  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState('')

  async function getRecipe() {
    const recipeResponse = await getRecipeFromMistral(ingredients)
    setRecipe(recipeResponse)
  }

  const addIngredient = (formData) => {
    const newIngredient = formData.get('ingredient')
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
  }
  return (
    <main>
      <form className='add-ingredient-form' action={addIngredient}>
        <input
          type='text'
          placeholder='e.g. oregano'
          aria-label='Add Ingredient'
          name='ingredient'
        />
        <button>Add Ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  )
}
