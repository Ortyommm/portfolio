import React from "react";
import PropTypes from "prop-types";

export default function HTML(props: propTypes) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="og:image:url" content="/images/other/og-image.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossOrigin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          href="/images/icons/favicon.png"
          type="image/x-icon"
        />
        <title>Artem</title>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body.toString() }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

interface propTypes {
  htmlAttributes: Record<string, any>;
  headComponents: [];
  bodyAttributes: Record<string, any>;
  preBodyComponents: [];
  body: Record<string, any>;
  postBodyComponents: [];
}
