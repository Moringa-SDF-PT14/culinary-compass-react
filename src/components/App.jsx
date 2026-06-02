import { useState } from 'react'
import RecipeListPage from './recipe-list/RecipeListPage'
import RecipeDetailsPage from './recipe-details/RecipeDetailsPage'
import { BrowserRouter, Routes, Route } from 'react-router'

const TEST_DATA = {
  name: "RnB",
  country: "Kenya",
  instructions: "Some good old rice and beans"
}

// TODO: Remove all TEST_DATA, and clean up UI

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} element={<RecipeListPage />} />  
        <Route path='/details/:recipe_id' element={<RecipeDetailsPage recipe={TEST_DATA} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
