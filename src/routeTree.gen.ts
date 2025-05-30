/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as OpholdImport } from './routes/ophold'
import { Route as BackofficeImport } from './routes/backoffice'
import { Route as AktiviteterImport } from './routes/aktiviteter'
import { Route as IndexImport } from './routes/index'
import { Route as BackofficeReviewsImport } from './routes/backoffice/reviews'
import { Route as BackofficeActivitiesImport } from './routes/backoffice/activities'

// Create/Update Routes

const OpholdRoute = OpholdImport.update({
  id: '/ophold',
  path: '/ophold',
  getParentRoute: () => rootRoute,
} as any)

const BackofficeRoute = BackofficeImport.update({
  id: '/backoffice',
  path: '/backoffice',
  getParentRoute: () => rootRoute,
} as any)

const AktiviteterRoute = AktiviteterImport.update({
  id: '/aktiviteter',
  path: '/aktiviteter',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const BackofficeReviewsRoute = BackofficeReviewsImport.update({
  id: '/reviews',
  path: '/reviews',
  getParentRoute: () => BackofficeRoute,
} as any)

const BackofficeActivitiesRoute = BackofficeActivitiesImport.update({
  id: '/activities',
  path: '/activities',
  getParentRoute: () => BackofficeRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/aktiviteter': {
      id: '/aktiviteter'
      path: '/aktiviteter'
      fullPath: '/aktiviteter'
      preLoaderRoute: typeof AktiviteterImport
      parentRoute: typeof rootRoute
    }
    '/backoffice': {
      id: '/backoffice'
      path: '/backoffice'
      fullPath: '/backoffice'
      preLoaderRoute: typeof BackofficeImport
      parentRoute: typeof rootRoute
    }
    '/ophold': {
      id: '/ophold'
      path: '/ophold'
      fullPath: '/ophold'
      preLoaderRoute: typeof OpholdImport
      parentRoute: typeof rootRoute
    }
    '/backoffice/activities': {
      id: '/backoffice/activities'
      path: '/activities'
      fullPath: '/backoffice/activities'
      preLoaderRoute: typeof BackofficeActivitiesImport
      parentRoute: typeof BackofficeImport
    }
    '/backoffice/reviews': {
      id: '/backoffice/reviews'
      path: '/reviews'
      fullPath: '/backoffice/reviews'
      preLoaderRoute: typeof BackofficeReviewsImport
      parentRoute: typeof BackofficeImport
    }
  }
}

// Create and export the route tree

interface BackofficeRouteChildren {
  BackofficeActivitiesRoute: typeof BackofficeActivitiesRoute
  BackofficeReviewsRoute: typeof BackofficeReviewsRoute
}

const BackofficeRouteChildren: BackofficeRouteChildren = {
  BackofficeActivitiesRoute: BackofficeActivitiesRoute,
  BackofficeReviewsRoute: BackofficeReviewsRoute,
}

const BackofficeRouteWithChildren = BackofficeRoute._addFileChildren(
  BackofficeRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/aktiviteter': typeof AktiviteterRoute
  '/backoffice': typeof BackofficeRouteWithChildren
  '/ophold': typeof OpholdRoute
  '/backoffice/activities': typeof BackofficeActivitiesRoute
  '/backoffice/reviews': typeof BackofficeReviewsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/aktiviteter': typeof AktiviteterRoute
  '/backoffice': typeof BackofficeRouteWithChildren
  '/ophold': typeof OpholdRoute
  '/backoffice/activities': typeof BackofficeActivitiesRoute
  '/backoffice/reviews': typeof BackofficeReviewsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/aktiviteter': typeof AktiviteterRoute
  '/backoffice': typeof BackofficeRouteWithChildren
  '/ophold': typeof OpholdRoute
  '/backoffice/activities': typeof BackofficeActivitiesRoute
  '/backoffice/reviews': typeof BackofficeReviewsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/aktiviteter'
    | '/backoffice'
    | '/ophold'
    | '/backoffice/activities'
    | '/backoffice/reviews'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/aktiviteter'
    | '/backoffice'
    | '/ophold'
    | '/backoffice/activities'
    | '/backoffice/reviews'
  id:
    | '__root__'
    | '/'
    | '/aktiviteter'
    | '/backoffice'
    | '/ophold'
    | '/backoffice/activities'
    | '/backoffice/reviews'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AktiviteterRoute: typeof AktiviteterRoute
  BackofficeRoute: typeof BackofficeRouteWithChildren
  OpholdRoute: typeof OpholdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AktiviteterRoute: AktiviteterRoute,
  BackofficeRoute: BackofficeRouteWithChildren,
  OpholdRoute: OpholdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/aktiviteter",
        "/backoffice",
        "/ophold"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/aktiviteter": {
      "filePath": "aktiviteter.jsx"
    },
    "/backoffice": {
      "filePath": "backoffice.tsx",
      "children": [
        "/backoffice/activities",
        "/backoffice/reviews"
      ]
    },
    "/ophold": {
      "filePath": "ophold.jsx"
    },
    "/backoffice/activities": {
      "filePath": "backoffice/activities.tsx",
      "parent": "/backoffice"
    },
    "/backoffice/reviews": {
      "filePath": "backoffice/reviews.tsx",
      "parent": "/backoffice"
    }
  }
}
ROUTE_MANIFEST_END */
