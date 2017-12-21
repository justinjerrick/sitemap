export const state = () => ({
  theme: {}
})

export const mutations = {
  SET_THEME(state, theme) {
    state.theme = theme
  }
  ,
  SET_THEME_BACKGROUNDMODEL(state,b_model)
  {
    state.theme.background_model=b_model;
  }
,
  SET_THEME_VIDEOSRC(state,b_modelsrcs)
  {
    state.theme.background_model.video.vidsrcs=b_modelsrcs;
  }
}







export const getters = {
  theme(state) {
    {
      return state.theme
    }
  }
}
