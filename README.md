# ecommerce-mockup
This project is just for practice, a little cooperation with a UX/UI friend.

Considering this is not a big project, I'll use plain `HTML`, `CSS` and `Javascript`, no webpack or libraries, unless I find it necessary.

# Live: https://hectorvilas.github.io/ecommerce-mockup/

# the page
![Page preview](readme/image01.png)
>a screenshot from the original design

[Here](https://www.figma.com/proto/vXQGm1fvXxKtfNDDbsYDC4/LeafyLiving?page-id=0%3A1&node-id=3%3A4&viewport=0%2C0%2C1&scaling=scale-down&starting-point-node-id=3%3A4&show-proto-sidebar=1) is the mockup I'm going to use for this project. It's a landing page and the store section.

I still have to think what kind of approach I'm going to use. I didn't planned anything before creating this repository, so I'm going to scribble a little over the original design to organize everything and find the best way to keep the `CSS` as simple as possible. For the `Javascript` I'm probably going to use modules to prevent repetition, so I'll keep the `HTML` to the minimum.

The page needs to be reponsive. I didn't asked how it should look on mobile devices, so I'm going to try my own solution as a little challenge, then apply any necessary changes depending on the designer's opinion.

## update 1:
I've been scribbling over two screenshots, planning the best approach for this project, but felt a little unnecesary considering the simplicity of the pages. Then I noticed I can open the Figma mockup on the editor to get all the necessary information I need to make it a real page. Oh, well, here's what I did with the screenshots before noticing it:
![](readme/image02.png)
![](readme/image03.png)

Now I can start building the pages. I was considering changing the page's content (keeping the header and footer where they are) instead of loading another page. With modules it's going to be easier this way.

## update 2
Still not completely sure about how to approach some parts of the page, I tried to recreate the `SVG`-like elements on the Figma project, but it was too much work for something so simple like icons. After experimenting with `SVG`'s `path`s and InkScape, I decided to simply export the icons directly from Figma as PNG images (asd SVG got errors). The result feels like the same, so I'll keep it like that unless necessary.

The rest of the `<header>` elements were pretty straightfoward to add, I just checked the properties on Figma, like dimensions, font family and other things, then I had to do very little decisions on how to approach a few things.

I think the header is finished, here's what I got for now:

![](readme/image04.png)

Original at top, my work at bottom. I'm missing a very subtle gradient, the vertical line has the wrong color (for subpixel reasons) and the `font-size` on the left is a little big, but that can be fixed easily.
