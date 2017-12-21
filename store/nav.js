export const state = () => ({
  navopen: false,
  navbuttontext:'Menu'
})
export const mutations = {
  toggle (state) {
  state.navopen=!state.navopen;
  state.navbuttontext=state.navopen ? 'Close':'Menu';
  }
}

export const getters = {
  navbuttontext(state)
{
  return state.navbuttontext;
}
,
navstate(state)
{
  return state.navopen;
}

}
