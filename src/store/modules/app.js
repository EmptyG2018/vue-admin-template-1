const app = {
  namespaced: true,
  state: {
    layout: {
      layoutSpace: 48, //布局间距
      layoutInner: 1520, //布局安全宽度
      headerHeight: 68, //头部宽度
      asideWidth: 256 //导航宽度
    }
  },
  getters: {
    layout: state => state.layout
  },
  mutations: {
    SET_HEADER_HEIGHT: (state, height) => {
      state.layout.headerHeight = height;
    }
  },
  actions: {}
};
export default app;
