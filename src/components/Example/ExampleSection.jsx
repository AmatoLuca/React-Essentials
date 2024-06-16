export default function ExampleSection({ title, children }) {
  return (
    <section id="examples">
      <h2>{title}</h2>
      {children}
    </section>
  );
}