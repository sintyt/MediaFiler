import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./tailwind.css";

export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <nav>
          <ul>
            <li><NavLink to={`/`}>ホーム</NavLink></li>
            <li><NavLink to={`/`}>メディアファイル</NavLink></li>
            <li><NavLink to={`/`}>メディアファイル</NavLink></li>
          </ul>
        </nav>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
