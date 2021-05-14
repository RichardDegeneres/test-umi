// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/a/Documents/exe/test-umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/home",
    "exact": true,
    "component": require('@/pages/home.js').default
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
