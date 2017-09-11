export default function view (component) {
  return function viewComponent (state) {
    return component(state)
  }
}
