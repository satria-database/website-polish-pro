<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Share portfolio section components between the home page and dedicated content routes to preserve consistent content and presentation.
- Keep reference images in CDN asset pointers and portfolio content in a browser-safe data module so page rendering does not depend on Canva.
- The contact form opens an email draft rather than claiming server-side delivery, because this portfolio has no connected mail service.
