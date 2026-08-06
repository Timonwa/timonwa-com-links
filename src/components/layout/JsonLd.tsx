// Injects one or more schema.org JSON-LD objects as a script tag. The `<` escape
// prevents the serialized JSON from breaking out of the <script> element.
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
