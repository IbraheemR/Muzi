---
title: Customizing Muzi
permalink: /customize/
redirect_from: /customisse/
---


1. [Installing Muzi](#1-installing-muzi)
2. [Recommended Stuff](#2-recommended-stuff)
3. [Editing the Logo](#3-editing-the-logo)
4. [Editing the Menu & Footer](#4-editing-the-menu--footer)
5. [Post Indexer Widget](#5-post-indexer-widget)
6. [Adding your own theme colors and styles](#6-adding-your-own-theme-colors-and-styles)
7. [Cookie Consent](#7-cookie-consent)
8. [Google Analytics](#8-google-analytics)
9. [SEO](https://jekyll.github.io/jekyll-seo-tag/)

## 1. Installing Muzi

To install Muzi, simply add

```yaml
remote_theme: IbraheemR/Muzi
```

to your `_config.yml` file.
Make sure no other `theme` or `remote_theme` value is set

## 2. Recommended Stuff

These are a few things we recommend you do to make Muzi easier to use

### 2.1 `.gitignore`

If you haven't got one already, we'd recommend you have a [`.gitignore`](https://help.github.com/articles/ignoring-files/) file to tell Git which files don't need to be in your site's repository:

```
_site/
.sass-cache/
.jekyll-cache/
.jekyll-metadata
```

### 2.2 Page defaults

By default Muzi only includes a `default` theme. To automatically use this for all your pages add the following lines to your `_config.yml` file, or merge them with your [existing front matter defaults](https://jekyllrb.com/docs/configuration/front-matter-defaults/):

```yaml
defaults:
  -
    scope:
      path: ""
    values:
      layout: "default"
```


## 3. Editing the Logo & Favicon

- To edit the logo add the to the `/assets/` directory and define the following options in `_config.yml`:

```yaml
logo: /assets/<your logo>
banner_logo: /assets/<your logo>
favicon: /assets/<you favicon>
```

- `logo` is for SEO and should include your logo and a solid background, propably whatever you set as [the theme color](#5-adding-your-own-theme-colors-and-styles)
- `banner_logo` is displayed on the page and should ideally be vector, white with a transparent background
- `favicon` shoud be a bitmap in balck with a white background

## 4. Editing the Menu & Footer

### 4.1 To edit the menu override the `menu.html` include. 

1. If you don't have one already create an `/_includes/` folder in your site's root.
2. Create a file called `menu.html`
3. Add your links in the following format:

{% raw %}
```html
<!-- Left (Top on mobile) aligned links -->
<a href="/" class="menuitem">Home</a>
<a href="/blog/" class="menuitem">Blog</a>
<a href="https://muzi.ibraheemrodrigues.com/customize/" class="menuitem">Customize</a>
<a href="https://github.com/IbraheemR/Muzi" class="menuitem">GitHub</a>

<!-- Right (Bottom on mobile) aligned links -->
<span class="right">
  <a href="https://ibraheemrodrigues.com" class="menuitem">by Ibraheem Rodrigues</a>
  <a href="https://ibraheemrodrigues.com/donate" class="menuitem">Donate</a>
</span>
```
{% endraw %}

  You do not need to specify any other HTML (`<html>`, `<head>`, `<body>`, etc.), only what is in th example above. Refer to the [source](https://github.com/IbraheemR/Muzi/blob/master/_includes/menu.html) for an example

### 4.2 To edit the footer override the `footer.html` include. 

1. If you don't have one already create an `/_includes/` folder in your site's root.
2. Create a file called `footer.html`
3. Add your text in the following format

{% raw %}
```html
<!-- Left aligned text -->
<span class="left">
  &copy; Ibraheem Rodrigues 2018
</span>

<!-- Right aligned text -->
<span class="right">
  P.S Thanks Miller
</span>
```
{% endraw %}

## 5. Post Indexer Widget

TODO IMAGE

Muzi comes with a widget to index posts, or anything else from a [collection](https://jekyllrb.com/docs/collections/). If a `title`, `description`, `pubdate` or `image` is present in the page's front matter this will be displayed

{% raw %}

1. Add the following code to the page (`.md` or `.html`)
    ```html
    {% include post_indexer.html %}
    ```
2. By default the indexer will display all posts from the `_posts` directory. If you want to display a different collection use the following code:
    ```html
    {% include post_indexer.html group=site.{{collection here}}%}
    ```
    This can also be used to only display a certain subset of posts, using the [slice filter](https://shopify.github.io/liquid/filters/slice/) or [pagination](https://jekyllrb.com/docs/pagination/).

{% endraw %}

## 6. Adding your own theme colors and styles

1. Create a file called `/assets/css/style.scss` in your site's repository.
2. Add the following code to the file:

    {% raw %}

    ```sass
    ---
    ---

    // Config variables here

    // e.g.
    $theme-color: red;

    @import "{{ site.theme }}";

    // New styles or anything else here
    ```

    {% endraw %}

3. Add your desired new theme colors or other customization variables (see [the source](https://github.com/IbraheemR/Muzi/blob/master/_sass/variables.scss) for help) below the two front matter lines and above the `@import` statement.
    - We'd recommend you choose a high saturation color for your theme color. `royalblue`, `red`, `violet` and `green` work well.
4. Add you new styles or anything else (`@import` statements, mixins, etc) below the `@import` statement. See the [SASS guide](https://sass-lang.com/guide) for help.

## 7. Cookie Consent

If your site serves cookies to viewers in the EU, its a legal requirement that you notify your users of this ([see more](https://cookiesandyou.com/)). Muzi makes this easy for you, using the [cookie consent tool by Insites](https://cookieconsent.insites.com/). Simply add the following line to your `_config.yml` file:

```yaml
cookie_consent: true
```

If you wish to change the displayed message or `Learn more` link add the following lines as well:
```yaml
cookie_message: We use cookies to feed everyone # Disclaimer: Don't actually put something like this
cookie_link: /cookie_policy/
```

## 8. Google Analytics

Using Google Analytics? We've got you covered!

Just add your tracking id to `_config.yml`:

```yaml
analytics_id: UA-294620-2
```

If you use analytics, Muzi will automatically display a [cookie consent message](#6-cookie-consent).
