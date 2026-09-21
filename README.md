# Top Hat Tutors — Website

A simple, fast static website for Top Hat Tutors, ready to publish on GitHub Pages.
The look is built around the real Top Hat Tutors logo and Instagram branding: a warm
cream background, sage green and brick red accents, and a cozy "corkboard/scrapbook"
feel (pinned cards, polaroid-style photo frames, a rounded accent font).

## Pages

- `index.html` — Home page, including an FAQ accordion section (`#faq`)
- `about.html` — About the tutor
- `tutors.html` — Filterable directory of all tutors (see below)
- `subjects.html` — Subjects covered and rates
- `apply.html` — "Apply to Be a Tutor" page: what the role is like, who
  you're looking for, and a Google Form embed for applications
- `contact.html` — Contact form (Google Form embed) and contact info

Shared styles live in `css/style.css`, shared behavior (mobile nav, active link
highlighting) in `js/main.js`. There's no build step — it's plain HTML/CSS/JS,
so you can edit files directly and refresh the page to see changes.

## Adding tutors to the directory

The tutor directory (`tutors.html`) is data-driven — you never need to touch
its HTML to add, remove, or edit a tutor.

1. Open `js/tutors-data.js`.
2. Copy one of the existing tutor objects in the `TUTORS` array and paste it
   back into the array.
3. Fill in `name`, `subjects`, `towns`, `grades`, and `bio`.
4. For a photo, add the image file to an `assets/tutors/` folder (create it
   if needed) and set `photo` to its path, e.g. `"assets/tutors/jane.jpg"`.
   Photos display large in a square frame, so a square or portrait crop
   works best. Leaving `photo` as `""` automatically shows a colored
   initials avatar instead — handy while you're still collecting headshots.
5. Save and refresh `tutors.html`. The new tutor bio card appears
   immediately, and the subject/town filter dropdowns update automatically
   to include any new values you used.

To remove a tutor, delete their object from the array. There's nothing else
to update — the filters, counts, and cards all regenerate from this one file.
Tutor bio cards are informational only (no "Book Now" button) — visitors
book through the main **Book a Session** button in the nav/footer, which
goes to `contact.html`.

## Editing the FAQ

The FAQ lives directly in `index.html` inside the `<section id="faq">` block.
Each question is a `<details class="faq-item">` element:

```html
<details class="faq-item">
  <summary>Your question here?<span class="faq-icon">+</span></summary>
  <p class="faq-answer">Your answer here.</p>
</details>
```

Copy that block to add a new question, or delete one to remove it. No
JavaScript is required — the dropdown/accordion behavior is native HTML.

## Logo & branding

The real Top Hat Tutors logo lives in `assets/logo/`:

- `badge.png` — the circular badge (top hat, book, apple, "Est. 2013 · Westport").
  Used as the favicon and next to "Top Hat Tutors" in the nav and footer.
- `wordmark.png` — the "TOP HAT TUTORS" text logo with the tilted top hat.
  Used at the top of the homepage hero.

To swap in a higher-resolution version later, just replace these two files
(keep the same filenames) and every page picks it up automatically.

## Adding photos

Photo placeholders only exist in two places now: the About page (the
President and Vice President headshots) and each tutor's bio photo on
`tutors.html`. On the About page, replace the `.photo-placeholder` `<div>`
with an `<img>` tag pointing at your image (see the `EDIT ME` comments next
to each one). For tutors, just set the `photo` field in `js/tutors-data.js`
as described above — no HTML editing needed.

## 1. Things you need to personalize

Search each HTML file for `EDIT ME` comments — those mark every spot with
placeholder content. At minimum, update:

1. **Contact info** — the real email (`tophattutors@gmail.com`) is already
   wired up site-wide. There's no phone number listed yet; add one in the
   footer of every page and in `contact.html` if you'd like to list one.

2. **Google Form embeds** — there are two separate forms, each with its own
   placeholder to swap out:
   - `contact.html` — the booking form for families requesting tutoring.
   - `apply.html` — the application form for prospective tutors (student
     name, grade, school, towns you can tutor in, subjects, availability,
     etc.).

   To connect a real form to either page:
   1. Create a form at [Google Forms](https://forms.google.com) with the
      fields you want.
   2. Click **Send** (top right), then choose the **Embed** tab (`<>` icon).
   3. Copy the `src="..."` URL from the `<iframe>` code shown.
   4. In the matching HTML file, find the `<iframe>` inside `.form-embed`
      and replace its `src` value with the one you copied.

3. **About page** (`about.html`) — replace the "How Top Hat Tutors Got
   Started" placeholder paragraph with your real founding story, and fill
   in the President and Vice President names, roles, bios, and photos in
   the Leadership section.

4. **Rates** (`subjects.html`) — replace the `$XX` placeholders in the rates
   table with your actual pricing.

5. **Testimonials** (`index.html`) — swap in real quotes once you have them
   (or remove the section if you don't have any yet).

6. **Apply page** (`apply.html`) — replace the "What it's like to tutor with
   us" paragraphs and the pay/perks list with your own details, and update
   the "Who we're looking for" list if your requirements change.

## 2. Preview locally

No install needed — just open `index.html` in a browser. For a closer-to-production
preview (so relative links and fonts behave the same as when deployed), you can
also serve it locally, e.g.:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## 3. Publish with GitHub Pages

1. Push this repository to GitHub (if it isn't already).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Pick the branch this site lives on (e.g. `main`) and the folder `/ (root)`.
5. Save. GitHub will give you a URL like
   `https://<your-username>.github.io/<repo-name>/` within a minute or two.

### Using a custom domain (optional)

If you buy a domain (e.g. `tophattutors.com`):

1. Add a `CNAME` file to the repo root containing just your domain, e.g.:
   ```
   tophattutors.com
   ```
2. In your domain registrar's DNS settings, point the domain at GitHub Pages
   (an `A` record to GitHub's IPs, or a `CNAME` record to
   `<your-username>.github.io` for a subdomain like `www`).
3. In **Settings → Pages**, enter your custom domain and enable **Enforce HTTPS**
   once it's verified.

GitHub's official guide has more detail:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## 4. Optional next steps

- Add real photos to `assets/` and reference them with `<img>` tags.
- Add Google Analytics or Plausible if you want visitor stats.
- Add an Open Graph image/meta tags if you plan to share the site on social media.
