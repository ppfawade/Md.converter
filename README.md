# Md.converter
A private-first dual-way editor for markdown ↔ rich text sync with one file, zero complexity, and instant results.

# MVP Document: Markdown to Formatted Text Converter

## Product Overview

A minimalist, single-page web tool for dual-way editing between markdown and rich text. Users can work in either pane and keep content aligned through live sync or explicit manual sync controls. The experience remains privacy-first by default, with optional anonymous analytics only after opt-in. Designed with Jony Ive-inspired aesthetics: clean, precise, and focused on the essential.

---

## Core Features

### 1. Dual-Way Markdown ↔ Rich Text Editing
- **Two editable panes**: Work in markdown or rich text at any time
- **Model-based conversion**: Content stays structurally aligned across both formats
- **Rich formatting support**: Headings, bold, italic, lists, links, code blocks, blockquotes, and rules

### 2. Sync Controls: Live + Manual
- **Live sync toggle**: Keep both panes in continuous sync while typing
- **Manual sync buttons**: Push updates Rich → Markdown or Markdown → Rich on demand
- **Conflict signaling**: Warns when rapid edits happen in both panes
- **Large-document workflow**: Manual sync remains available when users prefer explicit control

### 3. Privacy-First by Default
- **Local-first behavior**: Editing and conversion happen in-browser
- **Optional analytics opt-in**: Anonymous usage metrics are disabled unless explicitly enabled
- **User-visible telemetry summary**: Shows what counters are tracked when opt-in is on

### 4. Markdown Support
- **Headers**: H1-H6 (`#` to `######`)
- **Text styling**: Bold (`**text**`), Italic (`*text*`)
- **Lists**: Unordered (`-`, `*`) and ordered (`1.`, `2.`)
- **Links**: `[text](url)`
- **Code**: Inline (`` `code` ``) and blocks (`` ``` ``)
- **Blockquotes**: `> quote text`
- **Horizontal rules**: `---` or `***`
- **Strikethrough**: `~~text~~`

### 5. Dark Mode ✨
- **Toggle button**: Instant theme switching
- **Persistent**: Theme preference saved in browser
- **Smooth transition**: Animated color changes
- **Keyboard shortcut**: Ctrl+Shift+D
- **Refined dark palette**: Carefully balanced contrast

### 6. Syntax Guide ✨
- **Interactive modal**: Pop-up reference guide
- **Organized categories**: Headers, text styling, lists, links, code, other
- **Live examples**: Shows markdown and result side-by-side
- **Quick access**: Click button or press `?` key
- **Mobile optimized**: Stacked layout on small screens

### 7. Keyboard Shortcuts ✨
- **Copy output**: Ctrl+Shift+C
- **Paste input**: Ctrl+Shift+V
- **Clear input**: Ctrl+Shift+X
- **Toggle dark mode**: Ctrl+Shift+D
- **Show syntax guide**: `?`
- **Show shortcuts**: Ctrl+?
- **Close modals**: Esc
- **Shortcuts modal**: Dedicated help screen

### 8. Templates ✨
Six professional pre-built templates:
- **Blog Post**: Article structure with intro/points/conclusion
- **README**: Project documentation template
- **Meeting Notes**: Agenda, attendees, action items
- **Email Draft**: Professional email format
- **Task List**: Organized checklist with priorities
- **Tutorial**: Step-by-step guide structure
- **One-click loading**: Click any template to load instantly

---

## Design Philosophy

### Jony Ive-Inspired Aesthetics
- **Minimalism**: Remove everything non-essential
- **Precision**: Perfect spacing, alignment, and proportions
- **Clarity**: Obvious functionality through design alone
- **Materials**: Subtle gradients, soft shadows, frosted glass effects
- **Motion**: Smooth, purposeful transitions
- **Typography**: Clean sans-serif hierarchy

### Visual Elements
- **Color palette**: Neutral grays with subtle blue accents
- **Whitespace**: Generous padding and breathing room
- **Depth**: Layered cards with soft shadows
- **Interactivity**: Smooth hover states and button feedback
- **Responsiveness**: Fluid layout adapting to all screen sizes

---

## Technical Specifications

### Single-Page Architecture
- **Pure HTML/CSS/JavaScript**: No external dependencies
- **Self-contained**: All code in one file
- **Instant loading**: No build process required
- **Copy-paste ready**: Complete standalone file

### Browser Compatibility
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- **Instant conversion**: Sub-10ms rendering
- **Smooth animations**: 60fps transitions
- **Lightweight**: <15KB total file size
- **No dependencies**: Zero external libraries

---

## SEO Optimization

### Meta Tags
- **Title**: "Markdown to Formatted Text Converter - Free Online Tool"
- **Description**: "Convert markdown syntax to beautifully formatted text instantly. Free, simple, and privacy-focused markdown converter with live preview."
- **Keywords**: markdown converter, markdown to text, markdown formatter, online markdown tool
- **Open Graph tags**: For social media sharing
- **Viewport optimization**: Mobile-friendly meta tags

### Semantic HTML
- Proper heading hierarchy (H1 → H2 → H3)
- Descriptive alt text for any icons
- ARIA labels for accessibility
- Schema.org markup for web application

### Performance SEO
- Inline CSS/JS for single request
- Optimized rendering path
- Fast First Contentful Paint (FCP)
- High Lighthouse scores (95+ across all metrics)

---

## User Flow

### First Visit
1. User lands on page
2. Sees clear split-panel interface
3. Example markdown in left panel demonstrates functionality
4. Right panel shows formatted preview

### Conversion Flow
1. **Edit**: User types in either markdown or rich text pane
2. **Sync**: Live sync keeps both panes aligned (or use manual sync buttons)
3. **Review**: User validates output in both representations
4. **Copy**: Click "Copy Markdown" when needed for export

### Edge Cases
- Empty input: Shows placeholder text
- Invalid markdown: Renders as plain text (graceful degradation)
- Large inputs: Smooth scrolling in both panels
- Mobile: Stacked layout, same functionality

---

## Success Metrics

### MVP Launch Criteria
- ✓ Converts all listed markdown syntax
- ✓ Copy/paste buttons functional
- ✓ Responsive on mobile and desktop
- ✓ SEO meta tags implemented
- ✓ Clean, Jony Ive-inspired aesthetic
- ✓ Single HTML file under 15KB
- ✓ Works offline after first load

### Quality Benchmarks
- Lighthouse Performance: 95+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 95+
- Cross-browser compatibility: 100%

---

## Future Enhancements (Post-MVP)

### Phase 2 ✅ COMPLETED
- ✅ Markdown syntax guide toggle
- ✅ Dark mode toggle
- ✅ Keyboard shortcuts
- ✅ Markdown templates (6 pre-built templates)

### Phase 3 (Future)
- Export to HTML/PDF
- Markdown syntax guide toggle
- Dark mode toggle
- Custom theme presets
- Keyboard shortcuts

### Phase 3
- Cloud save (optional account)
- Shareable links
- Markdown templates
- Collaborative editing
- Version history

---

## Privacy & Data Handling

- **Zero server communication**: All processing happens client-side
- **Optional analytics only**: Anonymous usage counters (page load, conversion, copy action) are disabled by default and require explicit opt-in
- **No storage**: Content exists only in browser session
- **GDPR compliant**: By nature of not collecting data
- **Copy-paste only**: User controls all data flow

## Release Checklist

- [ ] Accessibility pass
- [ ] Cross-browser sanity
- [ ] Mobile layout
- [ ] Security checks

---

## Competitive Differentiation

### vs. Other Markdown Tools
- **Simpler**: No account, no installation, no configuration
- **Faster**: Instant loading, no server round-trips
- **Prettier**: Jony Ive-inspired design vs. developer-focused UIs
- **Privacy-first**: Zero data collection vs. analytics-heavy competitors
- **Portable**: Single HTML file vs. web apps requiring internet

### Unique Value Proposition
"A private-first dual-way editor for markdown ↔ rich text sync with one file, zero complexity, and instant results."

---

## Launch Checklist

- [ ] HTML file created with all features
- [ ] Markdown parsing tested for all syntax types
- [ ] Copy/paste functionality verified
- [ ] SEO meta tags complete
- [ ] Responsive design tested on mobile
- [ ] Cross-browser testing passed
- [ ] Lighthouse audit scores 95+
- [ ] File size under 15KB
- [ ] Accessibility audit passed
- [ ] Visual design matches Jony Ive aesthetic

---

## MVP Scope

**IN SCOPE**
- Live markdown conversion
- Copy output button
- Paste input button
- Responsive design
- SEO optimization
- Jony Ive aesthetic
- Single HTML file
- **Dark mode toggle** ✨
- **Markdown syntax guide modal** ✨
- **Keyboard shortcuts (7 shortcuts)** ✨
- **Pre-built templates (6 templates)** ✨

**OUT OF SCOPE (for MVP)**
- File upload/download
- User accounts
- Cloud storage
- Themes beyond default
- Advanced markdown (tables, footnotes)
- Syntax highlighting
- Offline PWA features

---

## File Structure

```html
<!DOCTYPE html>
<html>
<head>
  <!-- SEO meta tags -->
  <!-- Inline CSS with Jony Ive aesthetic -->
</head>
<body>
  <!-- Header with title -->
  <!-- Split panel layout -->
  <!-- Input panel with paste button -->
  <!-- Output panel with copy button -->
  <!-- Inline JavaScript for conversion -->
</body>
</html>
```

**Total deliverable**: One HTML file, ~12-14KB, copy-paste ready

---

## Conclusion

This MVP delivers a focused, beautiful, and functional markdown converter that prioritizes simplicity, privacy, and design excellence. By keeping scope tight and execution precise, we create a tool that does one thing exceptionally well—exactly in the spirit of Jony Ive's design philosophy.

## Deploy on Vercel

1. Import this repository in Vercel.
2. Choose **Framework Preset**: `Other`.
3. Set **Build Command** to `none`.
4. Set **Output Directory** to `.`.
5. Deploy.

### Routing notes

- `vercel.json` explicitly rewrites `/` to `/index.html`.
- A custom `404.html` is included for unknown routes.
- If you later add client-side routing, keep or expand the fallback rewrite (`"/app/:path*" -> "/index.html"`) so app routes load the SPA shell.
- If you are upgrading from older commits, ensure the legacy root file `Markdown converter · HTML` is removed so only `index.html` remains (prevents rename conflicts in PRs).
