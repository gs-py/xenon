import type { Thing, WithContext } from "schema-dts";

export interface SchemaMarkupProps<T extends Thing> {
  schema: WithContext<T>;
}

export function SchemaMarkup<T extends Thing>({ schema }: SchemaMarkupProps<T>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
