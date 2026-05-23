<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Coding Conventions

## Spacing — gap replaces margin, padding stays
- **Between siblings** inside a `flex` / `grid` container: use `gap-*` on the parent. Never use `mt-*`, `mb-*`, `space-y-*` to push sibling elements apart — that's what gap is for.
- **Inside an element**: `p-*` / `px-*` / `py-*` is required and encouraged for breathing room — cards, sections, buttons, form fields all need internal padding.
- Cards should have at least `p-6` or `p-8` of internal padding. Sections need `py-20 px-6` or more.
- The rule is: **replace margin with gap**, not "remove all padding". Padding and gap serve different purposes — both are necessary.

## HTML elements
- **Semantic sectioning**: `<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`, `<main>`, `<aside>` for major structural areas.
- **Layout wrappers and styled text blocks**: use `<div>` — not `<p>` for display/UI labels, not `<h1>`–`<h6>` when the text is decorative.
- **Never** nest a block element (`<div>`) inside a heading (`<h1>`–`<h6>`). Break them into sibling elements.
- **`<span>`** for inline text variation within a line of text.
- Reserve `<h1>`–`<h6>` only when the heading must appear in the document outline (SEO-critical, screen-reader context).

## Reusable UI
- Any visual pattern repeated ≥ 2 times → extract it to `components/ui/<Name>.tsx`.
- Section-level components *consume* primitives (`Badge`, `SectionTitle`, `GlassCard`); they don't re-implement the same class strings inline.
- A component accepts only the props it renders. No unused forwarded options.
- No copy-pasted JSX blocks — identical structure in two places means a component is missing.

## Tailwind class order (within a `className` string)
1. Layout (`flex`, `grid`, `block`, `relative`, `absolute`, `z-*`, `overflow-*`)
2. Spacing (`gap-*`, `p-*`, `px-*`, `py-*`)
3. Sizing (`w-*`, `h-*`, `size-*`, `max-w-*`, `min-h-*`)
4. Typography (`text-*` size, `font-*`, `leading-*`, `tracking-*`)
5. Color (`text-*` color, `bg-*`, `from-*`, `via-*`, `to-*`)
6. Borders (`border`, `border-*`, `rounded-*`)
7. Effects (`shadow-*`, `blur-*`, `backdrop-blur-*`, `opacity-*`)
8. Transitions / animations (`transition-*`, `duration-*`, `animate-*`, `hover:*`, `focus:*`)

## No arbitrary values
- Use Tailwind scale values. Avoid `text-[14px]` or `h-[42px]` unless no scale step fits.
- One-off pixel values belong in a CSS custom property or `@layer utilities`, not inline.
