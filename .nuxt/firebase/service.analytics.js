

export default async function (session, firebase) {
  // Can only be initiated on client side
  if (!process.client) {
    return
  }

  await import('firebase/analytics')

  // Only initialize it if the Browser supports it
  const isSupported = await firebase.analytics.isSupported()
  if (!isSupported) {
    console.info('[@nuxtjs/firebase]: Firebase Analytics was not initialized because it is not supported on this browser.')
    return
  }

  const analyticsService = session.analytics()

  return analyticsService
}
