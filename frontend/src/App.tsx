import Home from "./views/Home";

function App() {
  return (
    <>
      <Home />
      <main>
        <section className="section2">
          <h1>STRIPEY.CSS</h1>
          <p>Steal the meta for this.</p>
        </section>
      </main>
      <section>
        <h2>Text Content</h2>
      </section>
      <div>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </div>
      <div>
        <h3>Paragraph (h3)</h3>
        <p>
          This is a test page filled with common HTML elements to be used to
          provide visual feedback whilst building CSS systems and frameworks.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
          rutrum tellus pellentesque eu tincidunt. Aliquet nec ullamcorper sit
          amet risus nullam eget felis eget. Lacinia quis vel eros donec ac
          odio. Orci porta non pulvinar neque laoreet suspendisse interdum
          consectetur libero. Nulla pellentesque dignissim enim sit amet
          venenatis urna cursus. Vulputate eu scelerisque felis imperdiet.
          Tortor condimentum lacinia quis vel eros donec ac. Turpis egestas
          maecenas pharetra convallis posuere morbi leo urna molestie. Sed nisi
          lacus sed viverra tellus in hac habitasse platea.
        </p>
        <p> Single Lines</p>
        <p> Single Lines</p>
        <p> Single Lines</p>
      </div>

      <div>
        <h3>Inline Styles (h3) </h3>
        <p>
          <a href="#!">This is a text link - hover for different states</a>.
        </p>
      </div>
      <h2>INPUTS </h2>
      <div>
        <h3> p tag version </h3>
        <p>
          <label>Text Input</label>
          <input id="input_p__text" placeholder="Text Input" type="text" />
        </p>

        <p>
          <label>Password</label>
          <input
            id="input_p__password"
            placeholder="Type your Password"
            type="password"
          />
        </p>

        <p>
          <label>URL Address</label>
          <input
            id="input_p__webaddress"
            placeholder="http://yoursite.com"
            type="url"
          />
        </p>

        <p>
          <label>Email Address</label>
          <input
            id="input_p__emailaddress"
            placeholder="name@email.com"
            type="email"
          />
        </p>

        <p>
          <label>Phone Number</label>
          <input id="input_p__phone" placeholder="(999) 999-9999" type="tel" />
        </p>

        <p>
          <label>Search</label>
          <input
            id="input_p__search"
            placeholder="Enter Search Term"
            type="search"
          />
        </p>

        <p>
          <label>Number Input</label>
          <input
            id="input_p__text2"
            placeholder="Enter a Number"
            type="number"
          />
        </p>

        <p>
          <label>Error</label>
          <input id="input_p__text3" placeholder="Text Input" type="text" />
        </p>

        <p>
          <label>Valid</label>
          <input id="input_p__text4" placeholder="Text Input" type="text" />
        </p>
        <p>
          <label>Textarea</label>
          <textarea placeholder="Enter your message here"></textarea>
        </p>
      </div>
    </>
  );
}

export default App;
