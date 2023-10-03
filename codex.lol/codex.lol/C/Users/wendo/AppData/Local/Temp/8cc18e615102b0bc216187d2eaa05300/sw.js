import {registerRoute as workbox_routing_registerRoute} from 'D:/vs/websites/codex/node_modules/workbox-routing/registerRoute.mjs';
import {NetworkFirst as workbox_strategies_NetworkFirst} from 'D:/vs/websites/codex/node_modules/workbox-strategies/NetworkFirst.mjs';
import {NetworkOnly as workbox_strategies_NetworkOnly} from 'D:/vs/websites/codex/node_modules/workbox-strategies/NetworkOnly.mjs';
import {clientsClaim as workbox_core_clientsClaim} from 'D:/vs/websites/codex/node_modules/workbox-core/clientsClaim.mjs';/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */


importScripts(
  
);







self.skipWaiting();

workbox_core_clientsClaim();



workbox_routing_registerRoute("/", new workbox_strategies_NetworkFirst({ "cacheName":"start-url", plugins: [{ cacheWillUpdate: async ({ request, response, event, state }) => { if (response && response.type === 'opaqueredirect') { return new Response(response.body, { status: 200, statusText: 'OK', headers: response.headers }) } return response } }] }), 'GET');
workbox_routing_registerRoute(/.*/i, new workbox_strategies_NetworkOnly({ "cacheName":"dev", plugins: [] }), 'GET');




