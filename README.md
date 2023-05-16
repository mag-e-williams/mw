![GitHub version](https://badgen.net/github/release/mag-e-williams/mw?cache=600) [![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=dg)](https://vercel.com/mag-e-williams/mw)
# Margret (Maggie) Williams

Welcome to my portfolio site. It's a fun way for me to show off my portfolio + try out some new technology in a lightweight and mobile-friendly React + TypeScript web-app. This site is created with [Next](https://nextjs.org/docs/getting-started) and hosted on [Vercel](https://vercel.com). 

It's using [Contentful](https://www.contentful.com/) for some of the content management and also utilizes the AWS SDK, PlanetScale, MapboxGL, and GraphQL to deliver the features.

## Commands

- `pnpm install` installs all dependencies for the project
- `pnpm dev` starts the development server.
- `pnpm build` runs a prod build
- `pnpm build:analyze` builds bundle analysis for a production version of the site to see what it'll look like when deployed
- `pnpm serve` runs a server with the built site
- `pnpm format` runs Prettier to format the files
- `pnpm codegen` generates new GraphQL APIs from Github/Contentful
- `pnpm db:connect <optional branch>` connects you to the DB branch specified on port 3306 (requires `pscale` installed locally)
- `pnpm db:migrate` uses Sequelize to run migrations, and you can list the status of migrations with `pnpm db:migrate:status`. Undo with `pnpm db:migrate:undo`
- `pnpm db:generate` uses Sequelize to generate a new migration file ready to be populated
- `pnpm release` bumps the site version, run via Github Action

## Initial Setup

Required Node 18+ and pnpm 7+ installed. Run `pnpm install` to get started once you have those two installed.

### Integrations

- [Next](https://nextjs.org/docs/getting-started) is the framework that wraps React. It adds great lazy loading/speed/build time static generation/global CDN/etc to make the site fast + easy to build by default. Notably, there's a "client" + a "server", and client requests to `/api/X` hit the server via `pages/api/X.tsx` and it makes requests directly from the host, enabling use of DB/etc.

- [Vercel](https://vercel.com) hosts + builds the site. Every commit to `main` triggers a new deploy & publish on Vercel.

- [Contentful](https://www.contentful.com) handles a large amount the content, minus a few things that come from Github, AWS, and other APIs. I'm using their GraphQL endpoint to fetch site component data + create components around it.

- [useSWR](https://swr.vercel.app) HTTP cache invalidation strategy popularized by HTTP RFC 5861. SWR is my strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.

- [AWS SDK](https://aws.amazon.com/sdk-for-javascript/) my photography portfolio is stored and accessed through S3. I'm using the AWS SDK to retrieve and process these images.

- [Adobe PDF Embed API](https://developer.adobe.com/document-services/apis/pdf-embed/) JS API to embed high-fidelity PDFs.

- [Spotify Web API](https://developer.spotify.com/documentation/web-api).

- [Letterboxd RSS](https://letterboxd.com/magoo_willems/rss/) The Letterboxd API is not Public, so I'm using the letterboxd RSS feed to access my account's movie review history for a homepage widget.

- [Mapbox GL](https://docs.mapbox.com/mapbox-gl-js/api/) shows the map on the homepage.

- [MUI System](https://mui.com/system/getting-started/overview/) provides the styling system.

- [GraphQL Codegen](https://www.graphql-code-generator.com) makes all the `generated` files. It reads Github + Contentful's API schema + creates types out of them automatically

- [PlanetScale](https://planetscale.com) This DB is used to persist auth tokens for Spotify beyond the lifetime of a deploy + refresh the token as needed.

### API

- All Next client and server endpoints are synchronized and strongly typed using `/src/api/endpoints.ts`. No endpoint should be directly accessed from the client side. However, the types defined in this file can be utilized.

- The presence of strong typing enables the usage of `useData` with an `EndpointKey` as the standard approach for components and hooks to access data through useSWR.

### Versioning

Standard semver versioning is done via `semantic-release` and Conventional Commits for the commit messages

- **Major**: bumped if "!" appears after the subject of the commit message
- **Minor**: bumped if "feat:" appears in the message
- **Patch**: bumped by default in all other cases ("chore:"/"fix:"/etc)

[gh]: https://github.com/mag-e-williams/mw
