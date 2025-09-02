import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: ${(props) => props.theme.fonts.artnoova}, sans-serif;
  font-size: 1.4rem;

  background: 
    radial-gradient(circle at 20% 20%, red, transparent 60%),
    radial-gradient(circle at 80% 30%, orange, transparent 60%),
    radial-gradient(circle at 40% 70%, yellow, transparent 60%),
    radial-gradient(circle at 70% 80%, green, transparent 60%),
    radial-gradient(circle at 30% 40%, blue, transparent 60%),
    radial-gradient(circle at 60% 60%, indigo, transparent 60%),
    radial-gradient(circle at 50% 90%, violet, transparent 60%),
    radial-gradient(circle at 10% 80%, red, transparent 70%),
    radial-gradient(circle at 90% 60%, blue, transparent 70%),
    radial-gradient(circle at 60% 20%, violet, transparent 70%);
    
  background-blend-mode: screen;
  background-size: 300% 300%;
  animation: fireFlowSlow 20s ease-in-out infinite alternate,
             fireFlowFast 5s ease-in-out infinite alternate;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

@keyframes fireFlowSlow {
  0%   { background-position: 0% 0%; }
  50%  { background-position: 80% 80%; }
  100% { background-position: 0% 100%; }
}

@keyframes fireFlowFast {
  0%   { background-position: 20% 30%; }
  25%  { background-position: 60% 70%; }
  50%  { background-position: 100% 40%; }
  75%  { background-position: 30% 90%; }
  100% { background-position: 20% 30%; }
}

html,
body,
#root {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

html {
  scroll-behavior: smooth;
  @media (prefers-reduced-motion: reduce) {
    scroll-behavior:auto;
  }
}
`;
