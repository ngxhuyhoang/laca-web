import ConnectionInstance from './connection-instance'

export const getPostList = (params?: any) => {
  return ConnectionInstance.get('v1/post', { params })
}
