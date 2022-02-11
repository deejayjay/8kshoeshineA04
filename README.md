# React With Styled Components

- Sass is built in by default
- library css/js solution for styles

## Check list

- Install the styled-components package

```npm
npm install styled-components
```

- VSCode Install vscode-styled-components
- VSCode Install the styled-components-snippets

## Global Styles

- styles/GlobalStyles.js
- import GlobalStyles.js into the index.js (add a component)
- Write the js component for the global styles

```js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
`;

export { GlobalStyles };
```

## Resources

-[Styled Components Docs](https://styled-components.com/docs/basics)
