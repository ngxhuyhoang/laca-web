import { getPostList } from '~/services/post'

export const state = () => ({
  postList: {
    data: [],
    meta: {},
  },
})

export const getters = {}

export const mutations = {
  storePostList(state, data) {
    state.postList = data
  },
}

export const actions: any = {
  async getPostList(context) {
    try {
      const result = await getPostList()
      context.commit('storePostList', result.data)
    } catch (e) {
      console.log(e)
    }
  },
}
