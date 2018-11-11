---
title: Customizing Muzi
permalink: /customize/
---


1. [Installing Muzi](#1-installing-muzi)
2. [Recommended Stuff](#2-recommended-stuff)
3. [Editing the Logo](#3-editing-the-logo)
4. [Editing the Menu](#4-editing-the-menu)
5. [Adding your own theme colors and styles](#5-adding-your-own-theme-colors-and-styles)
6. [Cookie Consent](#6-cookie-consent)
7. [Google Analytics](#7-google-analytics)
8. [SEO](https://jekyll.github.io/jekyll-seo-tag/)

## 1. Installing Muzi

To install Muzi, simply add `remote_theme: IbraheemR/Muzi` to your `_config.yml` file

Make sure no other `theme` or `remote_theme` value is set

## 2. Recommended Stuff

These are a few things we recommend you do to make Muzi easier to use

### 2.2 Page defaults

By default Muzi only includes a `default` theme. To automatically use this for all your pages add the following links to your `_config.yml` file, or merge them with your [existing front matter defaults](https://jekyllrb.com/docs/configuration/front-matter-defaults/):

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

## 4. Editing the Menu

To edit the menu override the `menu.html` include. 

1. If you don't have one already create an `/_includes/` folder in your site's root.
2. Create a file called `menu.html`
3. Add your links in the following format:

{% raw %}
```html

<!-- Left (Top on mobile) aligned link -->
<a href="{{destination page}}" class="menuitem">{{link text}}</a>
<a href="/" class="menuitem">Home</a>
<a href="/about/" class="menuitem">About</a>


<!-- Right (Bottom on mobile) aligned link -->
<a href="{{destination page}}" class="menuitem right">{{link text}}</a>
<a href="http://github.com/IbraheemR" class="menuitem right">My GitHub</a>
```
{% endraw %}

  You do not need to specify any other HTML (`<html>`, `<head>`, `<body>`, etc.), only what is in th example above. Refer to the [source](https://github.com/IbraheemR/Muzi/blob/master/_includes/menu.html) for an example

## 5. Adding your own theme colors and styles

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

## 6. Cookie Consent

If your site serves cookies to viewers in the EU, its a legal requirement that you notify your users of this ([see more](https://cookiesandyou.com/)). Muzi makes this easy for you, using the [cookie consent tool by Insites](https://cookieconsent.insites.com/). Simply add the following line to your `_config.yml` file:

```yaml
cookie_consent: true
```

If you wish to change the displayed message or `Learn more` link add the following lines as well:
```yaml
cookie_message: We use cookies to feed everyone # Disclaimer: Don't actually put something like this
cookie_link: /cookie_policy/
```

## 7. Google Analytics

Using Google Analytics? We've got you covered!

Just add your tracking id to `_config.yml`:

```yaml
analytics_id: UA-294620-2
```

If you use analytics, Muzi will automatically display a [cookie consent message](#6-cookie-consent).
