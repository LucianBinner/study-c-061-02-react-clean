import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '@/main/adapters/current-account-adapter'
import { makeLogin, makeSignUp, makeSurveyList } from '@/main/factories/pages'
import { ApiContext } from '@/presentation/contexts'
import { PrivateRoute } from '@/presentation/components'

const Router: React.FC = () => {
  return (
    <>
      <ApiContext.Provider value={{
        setCurrentAccount: setCurrentAccountAdapter,
        getCurrentAccount: getCurrentAccountAdapter
      }}>
        <BrowserRouter >
          <Switch>
            <Route path='/login' exact component={makeLogin} />
            <Route path='/signup' exact component={makeSignUp} />
            <PrivateRoute path='/' exact component={makeSurveyList} />
          </Switch>
        </BrowserRouter>
      </ApiContext.Provider>
    </>
  )
}

export default Router
