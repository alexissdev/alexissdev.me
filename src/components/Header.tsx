import Head from "next/head";
import Script from "next/script";

export default function Header({ title }: { title?: string }) {
  return (
    <div>
      <Head>
        <title>{(!title) ? "Alexis" : title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon-1.jpg" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ"
        crossOrigin="anonymous"
      />
    </div>
  );
}
