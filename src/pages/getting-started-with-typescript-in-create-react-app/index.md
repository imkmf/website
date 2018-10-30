---
title: 'Getting started with Typescript in Create React App'
date: 2018-10-29T09:12:58-05:00
location: 'Seattle'
tags: [javascript]
---

I'm hyped about this one. [Create React App](https://github.com/facebook/create-react-app), the de-facto tool for creating greenfield React applications, now has built-in support for working with [TypeScript](https://www.typescriptlang.org/).

Up until now, using TypeScript with a CRA app required either _ejecting_ your application and [manually configuring](https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Integrating%20with%20Build%20Tools.md) the TypeScript compilation process yourself, or using a forked version of CRA like Will Monk's [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript) repo on GitHub. With [version 2.1](https://github.com/facebook/create-react-app/releases/tag/v2.1.0) of Create React App released this evening, support for TypeScript is built right into the framework, no forks or manual configuration required.

With a new project, using TypeScript is as simple as passing the `--typescript` flag when creating a new project:

```
npx create-react-app hello-tsx --typescript
```

Create React App will create a new application (check out the ["What's Included?"](https://github.com/facebook/create-react-app#whats-included) section of the README to understand what all is being created) and, with the addition of the `typescript` flag, set the default filetype for your components to `.tsx`.

For existing applications, opting in to TypeScript is surprisingly simple: just add the appropriate types, and the `typescript` package itself, and CRA will begin picking up any `.tsx` files as part of the development + compilation process:

```
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

It's still pretty fresh, but the Create React App documentation has info about [using TypeScript](https://facebook.github.io/create-react-app/docs/adding-typescript), too. I expect this to be updated in the future.

For now, I'm _hyped_ about this. I'm a long-time TypeScript and React user, and the addition of TypeScript as an option for CRA apps, it's a no-brainer to generate new React applications with CRA for the time being. Nice job, React team!

---

Hey! If you're here and into JavaScript, you should check out my project [Byteconf](https://byteconf.com) - we're creating developer conferences for anyone and everyone, streamed for free on Twitch. [Join our Discord](https://byteconf.com/discord) to learn more about what events we have coming up next.
