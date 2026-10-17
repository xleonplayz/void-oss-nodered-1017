# Node-RED deployment acceptance

Original Node-RED 5.0.8, upstream commit
935b8d3e12ec8be064f3a72ac6547131f778a7b1, from
https://github.com/node-red/node-red/releases/tag/5.0.8.
Full upstream history and Apache-2.0 license are retained.

The original application, dependencies and package-lock.json are unchanged.
The start command selects a normal deployment settings file: the editor lives
at /admin and requires a credential hash supplied through SHIP_ADMIN_HASH.
PORT and SHIP_DATA_DIR select the listener and persistence directory.
No credentials or runtime state are committed. The editor remains protected
when configuration is missing by refusing to start.

Acceptance imports an ordinary HTTP request -> function -> HTTP response flow
through the actual browser editor and Deploy button, then checks data-dependent
responses, validation, reload and a real process restart. A local native bcrypt
addon is only a local control and does not establish the platform's own native
compiler or N-API support.
