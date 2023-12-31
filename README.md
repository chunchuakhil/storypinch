This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Project Name : StoryPinch

- The main idea of this project is to learn nextjs & react concepts, along with whole eco-system of the web development.

### Initially planned User Stories:

1. User should able to see Story section with multiple geners, able to select a story and read it in a new page.
2. User should able to see Quiz section with multiple topics, select a topic and play with it.

### Initially planned App Features:

1. All pages should render on Server Side.
2. App should be Responsive
3. All static data must be generated by AI models. Ex: chatGPT, Bard etc...
4. App Data must be stored in CDN, to reduce frequent deployments.
5. Must connect to adsense.
6. Implement Search Engine Optimization ( SEO ).
7. Dark mode & Light mode.
8. Should support Internationalization i18n.
9. Google Analytics or any other free tool.
10. PWA ( optional )
11. Web Accessibility ( optional )
12. implement next auth.
13. role based features.
14. role based features on dev, prod environment.
15. feature flag

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Understanding folder & file structure:

1. page.tsx -> It is only responsible for gathering routes info, routePaths & route props. or any page translations.
2. View folder -> It is just a compose functionaliites ( just gather all functionality in one place), not to implement any functionality directly.
3. components folder -> Is should have main feature, like form implementation, table, filter section etc...
