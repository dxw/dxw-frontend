---
layout: layouts/component.njk
title: Card
---

{% lastUpdated "card" %}

{% example "/examples/card", 350 %}

## When to use

Use the card component for any single or grouped items which accompany the main contents or article of a page or in relation in another page.

## When not to use

Do not use this component for the purpose of being main content or article area of a page.

## How to use

### Card with decorative image

A card with an image that has no meaningful value should include an empty `alt` property like this to indicate its purpose is decorative.

{% example "/examples/card-decorative-image", 550 %}

### Card with block link

A card linking to a single location should only ever include one hyperlink. So that the entire block is an active clickable areas, apply the class name `js-block` next to `dxw-card`.

{% example "/examples/card-block-link", 650 %}
