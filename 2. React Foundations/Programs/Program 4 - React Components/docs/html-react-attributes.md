Complete comparison table between **HTML attributes** and **React attributes**:

| **HTML Attribute**             | **React Attribute**               | **Example (HTML)**                               | **Example (React)**                           |
|--------------------------------|-----------------------------------|--------------------------------------------------|-----------------------------------------------|
| `class`                        | `className`                       | `<div class="my-class">Hello</div>`              | `<div className="my-class">Hello</div>`       |
| `for`                          | `htmlFor`                         | `<label for="id">Label</label>`                  | `<label htmlFor="id">Label</label>`           |
| `onclick`                      | `onClick`                         | `<button onclick="alert()">Click</button>`       | `<button onClick={() => alert()}>Click</button>` |
| `onchange`                     | `onChange`                        | `<input type="text" onchange="handleChange()">`  | `<input type="text" onChange={handleChange} />` |
| `oninput`                      | `onInput`                         | `<input type="text" oninput="handleInput()">`    | `<input type="text" onInput={handleInput} />` |
| `style`                        | `style`                           | `<div style="color: red;">Hello</div>`           | `<div style={{ color: 'red' }}>Hello</div>`   |
| `value`                        | `value` / `defaultValue`          | `<input value="text" />`                         | `<input value={value} onChange={...} />`      |
| `checked`                      | `checked`                         | `<input type="checkbox" checked />`              | `<input type="checkbox" checked={true} />`    |
| `disabled`                     | `disabled`                        | `<button disabled>Submit</button>`               | `<button disabled={true}>Submit</button>`     |
| `readonly`                     | `readOnly`                        | `<input type="text" readonly />`                 | `<input type="text" readOnly={true} />`       |
| `tabindex`                     | `tabIndex`                        | `<input tabindex="1" />`                         | `<input tabIndex={1} />`                      |
| `data-*`                       | `data-*`                          | `<div data-id="123"></div>`                      | `<div data-id="123"></div>`                   |
| `id`                           | `id`                              | `<div id="username"></div>`                      | `<div id="username"></div>`                   |
| `innerHTML`                    | `dangerouslySetInnerHTML`         | `<div id="content"></div>`                       | `<div dangerouslySetInnerHTML={{ __html: content }} />` |
| `href`                         | `href`                            | `<a href="https://example.com">Link</a>`         | `<a href="https://example.com">Link</a>`      |
| `src`                          | `src`                             | `<img src="image.jpg" />`                        | `<img src="image.jpg" />`                     |
| `alt`                          | `alt`                             | `<img src="image.jpg" alt="Image" />`            | `<img src="image.jpg" alt="Image" />`         |
| `action`                       | `action`                          | `<form action="/submit"></form>`                  | `<form action="/submit"></form>`               |
| `method`                       | `method`                          | `<form method="POST"></form>`                    | `<form method="POST"></form>`                 |
| `target`                       | `target`                          | `<a href="https://example.com" target="_blank">Link</a>` | `<a href="https://example.com" target="_blank">Link</a>` |
| `align`                        | **Not supported**                 | `<div align="center">Centered</div>`             | **Not supported** (use CSS instead)           |
| `border`                       | **Not supported**                 | `<img src="image.jpg" border="1" />`              | **Not supported** (use CSS instead)           |
| `rowspan`                      | `rowSpan`                         | `<td rowspan="2">Content</td>`                   | `<td rowSpan={2}>Content</td>`                |
| `colspan`                      | `colSpan`                         | `<td colspan="2">Content</td>`                   | `<td colSpan={2}>Content</td>`                |
| `charset`                      | **Not used**                      | `<meta charset="UTF-8">`                         | **Not used** (handled by React's HTML5 support) |
| `accept-charset`               | **Not used**                      | `<form accept-charset="UTF-8">`                  | **Not used** (handled by React's HTML5 support) |
| `autofocus`                    | `autoFocus`                       | `<input type="text" autofocus />`                | `<input type="text" autoFocus />`             |
| `formaction`                   | `formAction`                      | `<button formaction="/submit">Submit</button>`    | `<button formAction="/submit">Submit</button>` |
| `formenctype`                  | `formEncType`                     | `<form enctype="multipart/form-data">`            | `<form encType="multipart/form-data">`        |
| `formmethod`                   | `formMethod`                      | `<button formmethod="POST">Submit</button>`       | `<button formMethod="POST">Submit</button>`   |
| `formnovalidate`               | `formNoValidate`                  | `<button formnovalidate>Submit</button>`          | `<button formNoValidate>Submit</button>`      |
| `formtarget`                   | `formTarget`                      | `<button formtarget="_blank">Submit</button>`     | `<button formTarget="_blank">Submit</button>` |

### Key Notes:
1. **CamelCase**: React follows JavaScript's camelCase convention for many HTML attributes, like `tabindex` → `tabIndex` and `class` → `className`.
2. **Boolean Attributes**: React requires boolean attributes (e.g., `checked`, `disabled`) to be explicitly set to `true` or `false`.
3. **Events**: React uses camelCase for event handlers, like `onclick` → `onClick`, and expects the event handler to be a function rather than a string.