import { useState } from 'react'
import RecipeListPage from './recipe-list/RecipeListPage'
import RecipeDetailsPage from './recipe-details/RecipeDetailsPage'

const TEST_DATA = {
  name: "RnB",
  country: "Kenya",
  instructions: "Some good old rice and beans"
}

function App() {
  return (
    <>
      <RecipeListPage />
      <RecipeDetailsPage recipe={TEST_DATA} />
    </>
  )
}

export default App
