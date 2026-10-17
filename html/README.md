# HTML — pages with a purpose

Open `html/profile.html`, then `html/recipe.html` in a modern browser.
No server, JavaScript, or packages are required. The CSS lives inside each page.

## 1. Learning garden (10 minutes)

You should see a profile with a plant illustration, goals, and navigation links.

1. Read the `header`, `nav`, `main`, `section`, and `footer` elements. They describe
   meaning, while CSS controls appearance.
2. Change `Alex` and the paragraph below it, save, and reload.
3. Add a new goal inside the `ul`. Each goal needs its own `li`.
4. Change the background color in `:root`.

**Challenge:** add a hobbies section and a navigation link to its `id`.
Check that the link jumps to it. Keep one `h1` and use `h2` for sections.
The plant is a local, original SVG, with meaningful alternative text on the image.

## 2. Breakfast bowl (10 minutes)

You should see ingredients, ordered steps, and an editable practice form.

1. Read `caption`, `thead`, `tbody`, and the row/column `th` elements.
2. Add one ingredient row, preserving the two-column layout.
3. Change a `label`, keeping its `for` value matched to the input's `id`.
4. Edit the form, then press **Reset choices**. Native HTML handles the reset.

**Challenge:** add a radio-button group for bowl size with `fieldset` and `legend`.
The form intentionally does not submit or persist information. HTML alone can
display controls; processing a submission needs a destination or script.

## Check your work

Use Tab to visit links and controls. Confirm the image loads and both pages link
to each other. Resize the browser to a narrow width. Neither page needs the internet
except when you choose the external product link.
