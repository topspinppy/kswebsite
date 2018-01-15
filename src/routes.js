import App from './App'
import Intro from './Pages/Intro'
import Regis from './Pages/Regis'

const routes = [{
  path: '/',
  component: App,
  indexRoute: { component: Intro },
  childRoutes: [
    { path: 'regis', component: Regis }
  ]
}]

export default routes
