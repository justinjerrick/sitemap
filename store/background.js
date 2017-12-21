export const state = () => ({
    active_bmodel : { type:"color", color:"#F1F1F1" }
  })

export const mutations =  {
  SET_BACKGROUND_MODEL(state, bmodel)  {
    state.active_bmodel = bmodel
  }
}

export const getters =  {
  url(state){
    if (state.active_bmodel.type === 'picture ') { return state.active_bmodel.url }
  },
  color(state){
    if (state.active_bmodel.type === 'color') { return state.active_bmodel.color }
  },
  video(state){
    if (state.active_bmodel.type === 'video') { return state.active_bmodel.video }
  },
  type(state){
    return state.active_bmodel.type
  }
}
