# Kevin Wong — Portfolio: Setup & Weekly Editing Guide

This is your personal portfolio website. It has:

- 🌗 **Light & dark mode** (toggle in the top-right)
- 🇬🇧🇫🇷 **English & French** (the `EN / FR` switch in the top-right → `/en` and `/fr`)
- 📝 **An easy admin dashboard** ("Studio") where you edit everything — no code — at `/studio`
- 🖼️ **Image & video uploads**, drag-and-drop
- 📄 Your resume PDFs attached to the **Download Resume** button

Right now it runs in **demo mode** using the content from your resume, so it already
looks complete. To make it editable and put it online, do **Part 1** once. After that,
**Part 2** is all you'll ever need for weekly updates.

---

## Part 1 — One-time setup (make it live & editable)

### 1. Create a free Sanity project (this powers your editing dashboard)

1. Go to **https://www.sanity.io/manage** and sign in (free — use Google/GitHub).
2. Click **Create new project**. Name it `Kevin Wong Portfolio`.
3. When asked for a dataset, keep the default **`production`** and make it **Public**.
4. Open the project → **copy the Project ID** (a short code like `ab12cd34`).

### 2. Tell the website your Project ID

In the project folder, copy `.env.local.example` to `.env.local` and fill it in:

```bash
cp .env.local.example .env.local
```

```
NEXT_PUBLIC_SANITY_PROJECT_ID=ab12cd34        # ← paste your Project ID here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
```

### 3. Load your resume content into the dashboard (so you don't start from blank)

```bash
npm install
npx sanity login          # sign in with the same account as step 1
npm run sanity:import     # uploads all your projects, jobs, skills, education, awards
```

> This fills the dashboard with everything from your resume (EN + FR). You can then
> edit it freely. (Images, logos and the resume PDFs are not imported — you upload
> those once in the Studio, see Part 2.)

### 4. Allow the dashboard to connect (CORS)

In **https://www.sanity.io/manage** → your project → **API → CORS origins → Add origin**:

- Add `http://localhost:3000` (check *Allow credentials*)
- After you deploy (step 5), also add your live URL, e.g. `https://kevinwong.vercel.app`

### 5. Put it online with Vercel (free)

1. Push this repo to GitHub (your `kev-wo/Portfolio-kevwo` repo).
2. Go to **https://vercel.com**, sign in with GitHub, click **Add New → Project**, pick the repo.
3. Under **Environment Variables**, add the same three variables from your `.env.local`.
4. Click **Deploy**. Your site is live in ~1 minute.
5. Copy the live URL and add it to CORS origins (step 4).

(Optional: add a custom domain like `kevinwong.dev` in Vercel → Settings → Domains.)

**Done!** Your site is live, and your editing dashboard is at `yourdomain.com/studio`.

---

## Part 2 — Weekly editing (the easy part)

Go to **`yourdomain.com/studio`** (or `localhost:3000/studio` when running locally) and sign in.

You'll see a menu on the left:

| Section | What it controls |
|---|---|
| **Site Settings** | Your name, hero text, profile photo, stats, contact info, social links, **resume PDFs** |
| **Projects** | Your project cards (title, description, image/video, tags, links) |
| **Work Experience** | Your jobs |
| **Education** | Schools & degrees |
| **Awards** | Honours & certifications |
| **Skills** | Tech/tools grid |

### Every text field has **English and French side by side** — fill in both.

### How to do common things

- **Change any text:** click the item, edit the field, click **Publish** (bottom-right).
- **Add a project/job/award:** open that section → click the pencil/➕ **Create new** → fill it in → **Publish**.
- **Upload a picture:** click the image field → drag a file in (or click to browse) → **Publish**.
- **Add a video to a project:**
  - *Long videos (best):* upload to YouTube or Vimeo (you can set it **Unlisted** so it's private), then paste the link into **Video link**.
  - *Short clips:* drag an `.mp4` straight into **Video upload**.
- **Reorder cards:** each item has an **Order** number — lower numbers appear first.
- **Set your profile photo:** Site Settings → **Profile photo**.
- **Update your resume PDFs:** Site Settings → **Resume (English/French PDF)**.

Changes appear on the live site within about a minute (no re-deploy needed).

---

## Part 3 — Running it on your own computer

```bash
npm install
npm run dev
# open http://localhost:3000   (site)
#      http://localhost:3000/studio   (dashboard)
```

Useful commands:

```bash
npm run build        # production build (what Vercel runs)
npm run seed:ndjson  # regenerate the import file from src/lib/seed.ts
npm run sanity:import  # re-import the seed content into Sanity
```

---

## FAQ

**Do I have to pay anything?** No. Sanity's free plan and Vercel's free plan cover a
personal portfolio comfortably.

**What if I don't set up Sanity?** The site still works — it shows the built-in resume
content (demo mode). You just can't edit it from the dashboard until Part 1 is done.

**The contact form:** it opens the visitor's email app pre-addressed to you (no backend
to maintain). If you'd rather collect messages in a dashboard later, Formspree or
Resend can be dropped in.

**Skill logos:** many show real tech logos automatically. For any that show a colored
2-letter tile, you can upload a logo image in **Skills** if you want.
