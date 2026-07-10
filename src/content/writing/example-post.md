---
title: 'Example post — delete me'
date: 2026-07-10
description: 'A sample article showing the frontmatter format, prose styles, and Java syntax highlighting.'
draft: true
---

This is a sample article. `draft: true` keeps it out of the built site, but it
is visible while running `npm run dev` so you can see how articles look.
Delete this file when you publish your first real post.

## Headings look like this

Regular paragraph text with **bold**, *italics*, a [link](https://astro.build),
and `inline code`. Diacritics render from the latin-ext subset: ăâîșț.

## Code blocks

```java
@Service
public class GreetingService {

    private final GreetingRepository repository;

    public GreetingService(GreetingRepository repository) {
        this.repository = repository;
    }

    public Optional<Greeting> latestFor(String audience) {
        return repository.findByAudience(audience)
                .stream()
                .max(Comparator.comparing(Greeting::createdAt));
    }
}
```

## Lists

- Bullet one
- Bullet two

1. Numbered one
2. Numbered two

> A blockquote, for when you quote someone smarter than the internet.
