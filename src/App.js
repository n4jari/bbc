import {
  EditorPicks,
  Footer,
  HeadLine,
  Navbar,
  NewsList,
  OtherLanguage,
  Reel,
  WorldInPicture,
} from "./Components/Index";
import { NewsItems, SportItems } from "./Components/NewsList/NewsListItems";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeadLine />
        <NewsList title="News" items={NewsItems} />
        <NewsList title="Sport" items={SportItems} />
        <Reel />
        <EditorPicks />
        <WorldInPicture />
      </main>
      <OtherLanguage />
      <Footer />
    </>
  );
};

export default App;
