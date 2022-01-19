import React from "react";

export function App() {
  return (
    <>
      <header>
        <nav>
          <p>Navigation:</p>
          <a href="https://linkedin.com">LinkedIn</a>
          &nbsp;
          <a href="https://blog.activenode.de">
            Mein Blog
          </a>
        </nav>

        <img
          width="100%"
          src="https://picsum.photos/id/251/700/300"
          alt=""
        />
      </header>

      <main>
        <article>
          <h1>Beitrag 1</h1>
          <p>
            Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor. Maecenas sed
            diam eget risus varius blandit sit amet non
            magna. Maecenas sed diam eget risus varius
            blandit sit amet non magna. Vivamus
            sagittis lacus vel augue laoreet rutrum
            faucibus dolor auctor. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa justo
            sit amet risus. Aenean lacinia bibendum
            nulla sed consectetur.
          </p>
        </article>
        <article>
          <h1>Beitrag 2</h1>
          <p>
            Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor. Maecenas sed
            diam eget risus varius blandit sit amet non
            magna. Maecenas sed diam eget risus varius
            blandit sit amet non magna. Vivamus
            sagittis lacus vel augue laoreet rutrum
            faucibus dolor auctor. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa justo
            sit amet risus. Aenean lacinia bibendum
            nulla sed consectetur.
          </p>
        </article>
        <article>
          <h1>Beitrag 3</h1>
          <p>
            Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor. Maecenas sed
            diam eget risus varius blandit sit amet non
            magna. Maecenas sed diam eget risus varius
            blandit sit amet non magna. Vivamus
            sagittis lacus vel augue laoreet rutrum
            faucibus dolor auctor. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa justo
            sit amet risus. Aenean lacinia bibendum
            nulla sed consectetur.
          </p>
        </article>
      </main>

      <footer>
        <hr />
        <button type="button">
          Zurück zur Navigation scrollen
        </button>
      </footer>
    </>
  );
}
