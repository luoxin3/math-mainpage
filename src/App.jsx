import "./App.css";

function App() {
  return (
    <div className="page">
      <header className="header">
        <h1>Xin Luo</h1>
        <p>Ph.D. Candidate in Mathematics</p>
        {/*<p>School of Mathematical Sciences, Zhejiang University</p>*/}
      </header>

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#research">Research</a>
        <a href="#publications">Publications</a>
        <a href="#blog">Blog</a>
        <a href="#cv">CV</a>
      </nav>

      <main>
        <section id="home" className="section">
          <h2>Home</h2>
          <p>
            Welcome to my academic homepage. My research interests lie in
            differential complexes, conformal geometry, elliptic boundary value
            problems, and related topics in geometric analysis.
          </p>
        </section>

        <section id="research" className="section">
          <h2>Research</h2>
          <p>
            I am interested in the Hodge-type decompositions, elliptic
            boundary value problems, and limiting Sobolev inequalities.
          </p>
        </section>

        <section id="publications" className="section">
          <h2>Publications</h2>
          <ol>
            <li>
              S. Ning and X. Luo, Limiting Sobolev Inequalities for
              k-Cauchy-Fueter Complex (Accepted).
            </li>
          </ol>
        </section>

        <section id="blog" className="section">
          <h2>Blog</h2>
          <p>Coming soon. I plan to write notes on mathematics and research.</p>
        </section>

        <section id="cv" className="section">
          <h2>CV</h2>
          <p>CV will be available here.</p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Xin Luo</p>
      </footer>
    </div>
  );
}

export default App;