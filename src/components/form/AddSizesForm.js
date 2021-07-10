import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { GenderFormStep, CategoriesFormStep } from 'src/pages'

const AddSizesForm = () => {
  return (
    <Switch>
      <Route path="/categories">
        <CategoriesFormStep></CategoriesFormStep>
      </Route>
      <Route path="/gender">
        <GenderFormStep></GenderFormStep>
      </Route>
      <Route path="/">
        <GenderFormStep></GenderFormStep>
      </Route>
    </Switch>
  )
}

export default AddSizesForm
