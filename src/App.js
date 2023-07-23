import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Tracy Jardine,{" "}
            <em>
              <a
                href="https://github.com/tcjardine/dictionary-project"
                target="_blank"
                rel="noreferrer"
              >
                open-sourced on GitHub
              </a>
            </em>
          </small>
        </footer>
      </div>
    </div>
  );
}
