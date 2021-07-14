import HelloWorldContainer from './containers/helloWorld.container'

const routes = [
  {
    title: 'Hello World',
    name: 'hello.world',
    path: '/teste',
    routeBack: '/',
    authenticated: true,
    component: HelloWorldContainer
  }
]

export default routes
