import { languageItmes } from "./LanguageItems";

const OtherLanguage = () => {
  return (
    <div className="other_language">
      <h2 className="title">BBC IN OTHER LANGUAGE</h2>

      <div className="container">
        <div className="row">
          <b>Persian :</b>
          <a href="#">مکرون می‌خواهد 'میانجی امین' ایران و آمریکا باشد</a>
        </div>

        <div className="row">
          <b>Spanish :</b>
          <a href="#">
            Elecciones en Ecuador: cómo se puede reconstruir la endeudada
            economía y qué papel juega el FMI
          </a>
        </div>

        <div className="row">
          <b>Urdu :</b>
          <a href="#">
            کشمیریوں کو حق ہو گا وہ آزاد رہنا چاہتے ہیں یا پاکستان کا حصہ بن کر:
            عمران خان
          </a>
        </div>

        <div className="row">
          <b>Vietnamese :</b>
          <a href="#">ậu Đại hội 13: Lựa chọn lãnh đạo, sao cứ khép kín?</a>
        </div>

        <div className="row">
          <b>Other Language :</b>
          {languageItmes.map((item, index) => (
            <a href="#" key={index}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherLanguage;
