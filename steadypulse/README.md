# SteadyPulse hosted pages (App Store metadata)

Two static, self-contained pages for the App Store Connect required URL fields,
styled to match the SteadyPulse dark/amber theme. No build step, no assets, no
external CSS — just upload the HTML.

## Files

- `privacy.html` — Privacy Policy (required because the app has an IAP / uses RevenueCat).
- `support.html` — Support page with contact + FAQ (required Support URL).

## Suggested hosting on cadance.music

Host under a SteadyPulse path, e.g.:

- Privacy Policy URL: `https://cadance.music/steadypulse/privacy`
- Support URL:        `https://cadance.music/steadypulse/support`

If the host serves files by exact name, you can instead use
`/steadypulse/privacy.html` and `/steadypulse/support.html`. `support.html`
links to `./privacy.html`, so keep the two pages in the same directory (or
update that relative link if you flatten the paths).

## Before publishing — replace the placeholders

Search both files for `TODO` and confirm/replace:

- The contact email (`support@cadance.music`) in both pages.
- The "Last updated" date in `privacy.html`.

Everything else (no-data-collected stance, RevenueCat/Apple purchase wording,
non-medical disclaimer) is written to match the app's actual behavior and the
App Review notes.
