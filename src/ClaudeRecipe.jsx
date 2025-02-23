import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe({ recipe }) {
  return (
    <section className='suggested-recipe-container' aria-live='polite'>
      <h2>Chef Mistral Recommends:</h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  )
}
