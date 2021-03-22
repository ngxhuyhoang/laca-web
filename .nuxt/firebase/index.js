import createApp from './app.js'

import authService from './service.auth.js'
import messagingService from './service.messaging.js'
import analyticsService from './service.analytics.js'

const appConfig = {"apiKey":"AIzaSyDZkNb0MHANylBAfwY9RHDtnvQlG0H_uGg","authDomain":"laca-12bc3.firebaseapp.com","projectId":"laca-12bc3","storageBucket":"laca-12bc3.appspot.com","messagingSenderId":"741972781859","appId":"1:741972781859:web:a656e6dffa06977401ba96","measurementId":"G-9C38NH91WK"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
      messagingService(session, firebase, ctx, inject),
      analyticsService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth,
    messaging,
    analytics
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth,
    messaging: messaging,
    analytics: analytics
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}