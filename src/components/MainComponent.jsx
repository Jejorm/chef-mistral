import { useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'
import { getRecipeFromMistral } from '../ai'
import { useRef } from 'react'
import { useEffect } from 'react'

export default function Main() {
  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState('')
  const recipeSection = useRef(null)

  useEffect(() => {
    if (recipe !== '' && recipeSection.current !== null) {
      console.log('aaaa')
      recipeSection.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [recipe])

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
        <IngredientsList
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  )
}
