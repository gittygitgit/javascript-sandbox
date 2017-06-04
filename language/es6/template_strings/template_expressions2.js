var doc = {
  title: "My doc",
  body: "Hello World!",
  tags: ["funny", "foo", "bar"],
}

var { title, body, tags } = doc;

var html = `<article>
  <header>
    <h1>${title}</h1>
  </header>
  <section>
    <div>${body}</div>
  </section>
  <footer>
    <ul>
      ${tags.map(tag => `<li>${tag}</li>`).join('\n      ')}
    </ul>
  </footer
</article>`

console.log(html);
