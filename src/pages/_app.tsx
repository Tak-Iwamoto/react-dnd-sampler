import { AppProps } from 'next/app';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { RecoilRoot } from 'recoil';
import "tailwindcss/tailwind.css"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <DndProvider backend={HTML5Backend}>
        <Component {...pageProps} />
      </DndProvider>
    </RecoilRoot>
  );
};

export default App;
