/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{424:function(e,t,n){"use strict";n.r(t);n(342);var r,o,c=n(310),l=n(303),d=n(297),f=n(343),h=n(295),v=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["only-available-in-window"]="This method is available in a Window context.",r["only-available-in-sw"]="This method is available in a service worker context.",r["permission-default"]="The notification permission was not granted and dismissed instead.",r["permission-blocked"]="The notification permission was not granted and blocked instead.",r["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",r["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",r["token-subscribe-failed"]="A problem occurred while subscribing the user to FCM: {$errorInfo}",r["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",r["token-unsubscribe-failed"]="A problem occurred while unsubscribing the user from FCM: {$errorInfo}",r["token-update-failed"]="A problem occurred while updating the user from FCM: {$errorInfo}",r["token-update-no-token"]="FCM returned no token when updating the user to push.",r["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",r["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",r["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",r["invalid-vapid-key"]="The public VAPID key must be a string.",r["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",r),w=new l.b("messaging","Messaging",v),y="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",m="google.c.a.c_id";function k(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,Object(d.f)([],Object(d.e)(t)))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function O(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),i=0;i<n.length;++i)r[i]=n.charCodeAt(i);return r}!function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(o||(o={}));var j="fcm_token_details_db",S="fcm_token_object_Store";function M(e){return Object(d.b)(this,void 0,void 0,(function(){var t,n,r=this;return Object(d.d)(this,(function(o){switch(o.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=o.sent(),!t.map((function(e){return e.name})).includes(j))return[2,null];o.label=2;case 2:return n=null,[4,Object(f.openDb)(j,5,(function(t){return Object(d.b)(r,void 0,void 0,(function(){var r,o,c,l;return Object(d.d)(this,(function(d){switch(d.label){case 0:return t.oldVersion<2?[2]:t.objectStoreNames.contains(S)?[4,(r=t.transaction.objectStore(S)).index("fcmSenderId").get(e)]:[2];case 1:return o=d.sent(),[4,r.clear()];case 2:if(d.sent(),!o)return[2];if(2===t.oldVersion){if(!(c=o).auth||!c.p256dh||!c.endpoint)return[2];n={token:c.fcmToken,createTime:null!==(l=c.createTime)&&void 0!==l?l:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:"string"==typeof c.vapidKey?c.vapidKey:k(c.vapidKey)}}}else(3===t.oldVersion||4===t.oldVersion)&&(n={token:(c=o).fcmToken,createTime:c.createTime,subscriptionOptions:{auth:k(c.auth),p256dh:k(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:k(c.vapidKey)}});return[2]}}))}))}))];case 3:return o.sent().close(),[4,Object(f.deleteDb)(j)];case 4:return o.sent(),[4,Object(f.deleteDb)("fcm_vapid_details_db")];case 5:return o.sent(),[4,Object(f.deleteDb)("undefined")];case 6:return o.sent(),[2,T(n)?n:null]}}))}))}function T(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}var I="firebase-messaging-store",K=null;function C(){return K||(K=Object(f.openDb)("firebase-messaging-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(I)}}))),K}function D(e){return Object(d.b)(this,void 0,void 0,(function(){var t,n,r;return Object(d.d)(this,(function(o){switch(o.label){case 0:return t=E(e),[4,C()];case 1:return[4,o.sent().transaction(I).objectStore(I).get(t)];case 2:return(n=o.sent())?[2,n]:[3,3];case 3:return[4,M(e.appConfig.senderId)];case 4:return(r=o.sent())?[4,P(e,r)]:[3,6];case 5:return o.sent(),[2,r];case 6:return[2]}}))}))}function P(e,t){return Object(d.b)(this,void 0,void 0,(function(){var n,r,o;return Object(d.d)(this,(function(c){switch(c.label){case 0:return n=E(e),[4,C()];case 1:return r=c.sent(),[4,(o=r.transaction(I,"readwrite")).objectStore(I).put(t,n)];case 2:return c.sent(),[4,o.complete];case 3:return c.sent(),[2,t]}}))}))}function _(e){return Object(d.b)(this,void 0,void 0,(function(){var t,n,r;return Object(d.d)(this,(function(o){switch(o.label){case 0:return t=E(e),[4,C()];case 1:return n=o.sent(),[4,(r=n.transaction(I,"readwrite")).objectStore(I).delete(t)];case 2:return o.sent(),[4,r.complete];case 3:return o.sent(),[2]}}))}))}function E(e){return e.appConfig.appId}function N(e,t){return Object(d.b)(this,void 0,void 0,(function(){var n,body,r,o,c,l;return Object(d.d)(this,(function(d){switch(d.label){case 0:return[4,W(e)];case 1:n=d.sent(),body=H(t),r={method:"POST",headers:n,body:JSON.stringify(body)},d.label=2;case 2:return d.trys.push([2,5,,6]),[4,fetch(A(e.appConfig),r)];case 3:return[4,d.sent().json()];case 4:return o=d.sent(),[3,6];case 5:throw c=d.sent(),w.create("token-subscribe-failed",{errorInfo:c});case 6:if(o.error)throw l=o.error.message,w.create("token-subscribe-failed",{errorInfo:l});if(!o.token)throw w.create("token-subscribe-no-token");return[2,o.token]}}))}))}function R(e,t){return Object(d.b)(this,void 0,void 0,(function(){var n,body,r,o,c,l;return Object(d.d)(this,(function(d){switch(d.label){case 0:return[4,W(e)];case 1:n=d.sent(),body=H(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(body)},d.label=2;case 2:return d.trys.push([2,5,,6]),[4,fetch(A(e.appConfig)+"/"+t.token,r)];case 3:return[4,d.sent().json()];case 4:return o=d.sent(),[3,6];case 5:throw c=d.sent(),w.create("token-update-failed",{errorInfo:c});case 6:if(o.error)throw l=o.error.message,w.create("token-update-failed",{errorInfo:l});if(!o.token)throw w.create("token-update-no-token");return[2,o.token]}}))}))}function x(e,t){return Object(d.b)(this,void 0,void 0,(function(){var n,r,o,c,l;return Object(d.d)(this,(function(d){switch(d.label){case 0:return[4,W(e)];case 1:n=d.sent(),r={method:"DELETE",headers:n},d.label=2;case 2:return d.trys.push([2,5,,6]),[4,fetch(A(e.appConfig)+"/"+t,r)];case 3:return[4,d.sent().json()];case 4:if((o=d.sent()).error)throw c=o.error.message,w.create("token-unsubscribe-failed",{errorInfo:c});return[3,6];case 5:throw l=d.sent(),w.create("token-unsubscribe-failed",{errorInfo:l});case 6:return[2]}}))}))}function A(e){return"https://fcmregistrations.googleapis.com/v1/projects/"+e.projectId+"/registrations"}function W(e){var t=e.appConfig,n=e.installations;return Object(d.b)(this,void 0,void 0,(function(){var e;return Object(d.d)(this,(function(r){switch(r.label){case 0:return[4,n.getToken()];case 1:return e=r.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+e})]}}))}))}function H(e){var t=e.p256dh,n=e.auth,r=e.endpoint,o=e.vapidKey,body={web:{endpoint:r,auth:n,p256dh:t}};return o!==y&&(body.web.applicationPubKey=o),body}function U(e,t,n){return Object(d.b)(this,void 0,void 0,(function(){var r,o,c,l;return Object(d.d)(this,(function(d){switch(d.label){case 0:if("granted"!==Notification.permission)throw w.create("permission-blocked");return[4,L(t,n)];case 1:return r=d.sent(),[4,D(e)];case 2:return o=d.sent(),c={vapidKey:n,swScope:t.scope,endpoint:r.endpoint,auth:k(r.getKey("auth")),p256dh:k(r.getKey("p256dh"))},o?[3,3]:[2,F(e,c)];case 3:if(f=o.subscriptionOptions,v=(h=c).vapidKey===f.vapidKey,y=h.endpoint===f.endpoint,m=h.auth===f.auth,O=h.p256dh===f.p256dh,v&&y&&m&&O)return[3,8];d.label=4;case 4:return d.trys.push([4,6,,7]),[4,x(e,o.token)];case 5:return d.sent(),[3,7];case 6:return l=d.sent(),console.warn(l),[3,7];case 7:return[2,F(e,c)];case 8:return Date.now()>=o.createTime+6048e5?[2,B({token:o.token,createTime:Date.now(),subscriptionOptions:c},e,t)]:[2,o.token];case 9:return[2]}var f,h,v,y,m,O}))}))}function V(e,t){return Object(d.b)(this,void 0,void 0,(function(){var n,r;return Object(d.d)(this,(function(o){switch(o.label){case 0:return[4,D(e)];case 1:return(n=o.sent())?[4,x(e,n.token)]:[3,4];case 2:return o.sent(),[4,_(e)];case 3:o.sent(),o.label=4;case 4:return[4,t.pushManager.getSubscription()];case 5:return(r=o.sent())?[2,r.unsubscribe()]:[2,!0]}}))}))}function B(e,t,n){return Object(d.b)(this,void 0,void 0,(function(){var r,o,c;return Object(d.d)(this,(function(l){switch(l.label){case 0:return l.trys.push([0,3,,5]),[4,R(t,e)];case 1:return r=l.sent(),o=Object(d.a)(Object(d.a)({},e),{token:r,createTime:Date.now()}),[4,P(t,o)];case 2:return l.sent(),[2,r];case 3:return c=l.sent(),[4,V(t,n)];case 4:throw l.sent(),c;case 5:return[2]}}))}))}function F(e,t){return Object(d.b)(this,void 0,void 0,(function(){var n,r;return Object(d.d)(this,(function(o){switch(o.label){case 0:return[4,N(e,t)];case 1:return n=o.sent(),r={token:n,createTime:Date.now(),subscriptionOptions:t},[4,P(e,r)];case 2:return o.sent(),[2,r.token]}}))}))}function L(e,t){return Object(d.b)(this,void 0,void 0,(function(){var n;return Object(d.d)(this,(function(r){switch(r.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return(n=r.sent())?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:O(t)})]}}))}))}function G(data){return"object"==typeof data&&!!data&&m in data}function J(e){return new Promise((function(t){setTimeout(t,e)}))}var $=function(){function e(e){var t=this;this.firebaseDependencies=e,this.isOnBackgroundMessageUsed=null,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",(function(e){e.waitUntil(t.onPush(e))})),self.addEventListener("pushsubscriptionchange",(function(e){e.waitUntil(t.onSubChange(e))})),self.addEventListener("notificationclick",(function(e){e.waitUntil(t.onNotificationClick(e))}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(e){if(this.isOnBackgroundMessageUsed=!1,!e||"function"!=typeof e)throw w.create("invalid-bg-handler");this.bgMessageHandler=e},e.prototype.onBackgroundMessage=function(e){var t=this;return this.isOnBackgroundMessageUsed=!0,this.bgMessageHandler=e,function(){t.bgMessageHandler=null}},e.prototype.getToken=function(){var e,t;return Object(d.b)(this,void 0,void 0,(function(){var n;return Object(d.d)(this,(function(r){switch(r.label){case 0:return this.vapidKey?[3,2]:[4,D(this.firebaseDependencies)];case 1:n=r.sent(),this.vapidKey=null!==(t=null===(e=null==n?void 0:n.subscriptionOptions)||void 0===e?void 0:e.vapidKey)&&void 0!==t?t:y,r.label=2;case 2:return[2,U(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return V(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw w.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw w.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw w.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(){throw w.create("only-available-in-window")},e.prototype.onMessage=function(){throw w.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw w.create("only-available-in-window")},e.prototype.onPush=function(e){return Object(d.b)(this,void 0,void 0,(function(){var t,n,r,o;return Object(d.d)(this,(function(c){switch(c.label){case 0:return(t=function(e){var data=e.data;if(!data)return null;try{return data.json()}catch(e){return null}}(e))?[4,Y()]:(console.debug("FirebaseMessaging: failed to get parsed MessagePayload from the PushEvent. Skip handling the push."),[2]);case 1:return function(e){return e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))}(n=c.sent())?[2,X(n,t)]:(r=!1,t.notification?[4,Z(z(t))]:[3,3]);case 2:c.sent(),r=!0,c.label=3;case 3:return!0===r&&!1===this.isOnBackgroundMessageUsed?[2]:(this.bgMessageHandler&&(o=function(e){var t={from:e.from,collapseKey:e.collapse_key};return function(e,t){if(t.notification){e.notification={};var title=t.notification.title;title&&(e.notification.title=title);var body=t.notification.body;body&&(e.notification.body=body);var image=t.notification.image;image&&(e.notification.image=image)}}(t,e),function(e,t){t.data&&(e.data=t.data)}(t,e),function(e,t){if(t.fcmOptions){e.fcmOptions={};var link=t.fcmOptions.link;link&&(e.fcmOptions.link=link);var n=t.fcmOptions.analytics_label;n&&(e.fcmOptions.analyticsLabel=n)}}(t,e),t}(t),"function"==typeof this.bgMessageHandler?this.bgMessageHandler(o):this.bgMessageHandler.next(o)),[4,J(1e3)]);case 4:return c.sent(),[2]}}))}))},e.prototype.onSubChange=function(e){var t,n;return Object(d.b)(this,void 0,void 0,(function(){var r;return Object(d.d)(this,(function(o){switch(o.label){case 0:return e.newSubscription?[3,2]:[4,V(this.firebaseDependencies,self.registration)];case 1:return o.sent(),[2];case 2:return[4,D(this.firebaseDependencies)];case 3:return r=o.sent(),[4,V(this.firebaseDependencies,self.registration)];case 4:return o.sent(),[4,U(this.firebaseDependencies,self.registration,null!==(n=null===(t=null==r?void 0:r.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:y)];case 5:return o.sent(),[2]}}))}))},e.prototype.onNotificationClick=function(e){var t,n;return Object(d.b)(this,void 0,void 0,(function(){var r,link,c,l,f;return Object(d.d)(this,(function(d){switch(d.label){case 0:return(r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n.FCM_MSG)?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(link=function(e){var t,n,r,link=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;if(link)return link;return G(e.data)?self.location.origin:null}(r))?(c=new URL(link,self.location.href),l=new URL(self.location.origin),c.host!==l.host?[2]:[4,Q(c)]):[2]):[2];case 1:return(f=d.sent())?[3,4]:[4,self.clients.openWindow(link)];case 2:return f=d.sent(),[4,J(3e3)];case 3:return d.sent(),[3,6];case 4:return[4,f.focus()];case 5:f=d.sent(),d.label=6;case 6:return f?(r.messageType=o.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,[2,f.postMessage(r)]):[2]}}))}))},e}();function z(e){var t,n=Object(d.a)({},e.notification);return n.data=((t={}).FCM_MSG=e,t),n}function Q(e){return Object(d.b)(this,void 0,void 0,(function(){var t,n,r,o,c,l,f;return Object(d.d)(this,(function(h){switch(h.label){case 0:return[4,Y()];case 1:t=h.sent();try{for(n=Object(d.g)(t),r=n.next();!r.done;r=n.next())if(o=r.value,c=new URL(o.url,self.location.href),e.host===c.host)return[2,o]}catch(e){l={error:e}}finally{try{r&&!r.done&&(f=n.return)&&f.call(n)}finally{if(l)throw l.error}}return[2,null]}}))}))}function X(e,t){var n,r;t.isFirebaseMessaging=!0,t.messageType=o.PUSH_RECEIVED;try{for(var c=Object(d.g)(e),l=c.next();!l.done;l=c.next()){l.value.postMessage(t)}}catch(e){n={error:e}}finally{try{l&&!l.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}}function Y(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Z(e){var t,n=e.actions,r=Notification.maxActions;return n&&r&&n.length>r&&console.warn("This browser only supports "+r+" actions. The remaining actions will not be displayed."),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}var ee=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",(function(e){return t.messageEventListener(e)}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.messageEventListener=function(e){return Object(d.b)(this,void 0,void 0,(function(){var t,n;return Object(d.d)(this,(function(r){switch(r.label){case 0:return(t=e.data).isFirebaseMessaging?(this.onMessageCallback&&t.messageType===o.PUSH_RECEIVED&&("function"==typeof this.onMessageCallback?this.onMessageCallback(function(e){return delete e.messageType,delete e.isFirebaseMessaging,e}(Object.assign({},t))):this.onMessageCallback.next(Object.assign({},t))),G(n=t.data)&&"1"===n["google.c.a.e"]?[4,this.logEvent(t.messageType,n)]:[3,2]):[2];case 1:r.sent(),r.label=2;case 2:return[2]}}))}))},e.prototype.getVapidKey=function(){return this.vapidKey},e.prototype.getSwReg=function(){return this.swRegistration},e.prototype.getToken=function(e){return Object(d.b)(this,void 0,void 0,(function(){return Object(d.d)(this,(function(t){switch(t.label){case 0:return"default"!==Notification.permission?[3,2]:[4,Notification.requestPermission()];case 1:t.sent(),t.label=2;case 2:if("granted"!==Notification.permission)throw w.create("permission-blocked");return[4,this.updateVapidKey(null==e?void 0:e.vapidKey)];case 3:return t.sent(),[4,this.updateSwReg(null==e?void 0:e.serviceWorkerRegistration)];case 4:return t.sent(),[2,U(this.firebaseDependencies,this.swRegistration,this.vapidKey)]}}))}))},e.prototype.updateVapidKey=function(e){return Object(d.b)(this,void 0,void 0,(function(){return Object(d.d)(this,(function(t){return e?this.vapidKey=e:this.vapidKey||(this.vapidKey=y),[2]}))}))},e.prototype.updateSwReg=function(e){return Object(d.b)(this,void 0,void 0,(function(){return Object(d.d)(this,(function(t){switch(t.label){case 0:return e||this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:t.sent(),t.label=2;case 2:if(!e&&this.swRegistration)return[2];if(!(e instanceof ServiceWorkerRegistration))throw w.create("invalid-sw-registration");return this.swRegistration=e,[2]}}))}))},e.prototype.registerDefaultSw=function(){return Object(d.b)(this,void 0,void 0,(function(){var e,t;return Object(d.d)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=this,[4,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"})];case 1:return e.swRegistration=n.sent(),this.swRegistration.update().catch((function(){})),[3,3];case 2:throw t=n.sent(),w.create("failed-service-worker-registration",{browserErrorMessage:t.message});case 3:return[2]}}))}))},e.prototype.deleteToken=function(){return Object(d.b)(this,void 0,void 0,(function(){return Object(d.d)(this,(function(e){switch(e.label){case 0:return this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:e.sent(),e.label=2;case 2:return[2,V(this.firebaseDependencies,this.swRegistration)]}}))}))},e.prototype.requestPermission=function(){return Object(d.b)(this,void 0,void 0,(function(){var e;return Object(d.d)(this,(function(t){switch(t.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(e=t.sent()))return[2];throw"denied"===e?w.create("permission-blocked"):w.create("permission-default")}}))}))},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw w.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw w.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw w.create("invalid-sw-registration");if(this.swRegistration)throw w.create("use-sw-after-get-token");this.swRegistration=e},e.prototype.onMessage=function(e){var t=this;return this.onMessageCallback=e,function(){t.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw w.create("only-available-in-sw")},e.prototype.onBackgroundMessage=function(){throw w.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.logEvent=function(e,data){return Object(d.b)(this,void 0,void 0,(function(){var t;return Object(d.d)(this,(function(n){switch(n.label){case 0:return t=function(e){switch(e){case o.NOTIFICATION_CLICKED:return"notification_open";case o.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(e),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return n.sent().logEvent(t,{message_id:data["google.c.a.c_id"],message_name:data["google.c.a.c_l"],message_time:data["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)}),[2]}}))}))},e}();function te(e){return w.create("missing-app-config-values",{valueName:e})}var ne={isSupported:ie};function ie(){return self&&"ServiceWorkerGlobalScope"in self?"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}h.a.INTERNAL.registerComponent(new c.a("messaging",(function(e){var t=e.getProvider("app").getImmediate(),n={app:t,appConfig:function(e){var t,n;if(!e||!e.options)throw te("App Configuration Object");if(!e.name)throw te("App Name");var r=e.options;try{for(var o=Object(d.g)(["projectId","apiKey","appId","messagingSenderId"]),c=o.next();!c.done;c=o.next()){var l=c.value;if(!r[l])throw te(l)}}catch(e){t={error:e}}finally{try{c&&!c.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return{appName:e.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}(t),installations:e.getProvider("installations").getImmediate(),analyticsProvider:e.getProvider("analytics-internal")};if(!ie())throw w.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new $(n):new ee(n)}),"PUBLIC").setServiceProps(ne))}}]);