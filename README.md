# Twitter UI practice clone

The goal of this project is to learn about Next JS. My background is a Web Designer with experience in HTML and Tailwind CSS with some basic JavaScript knowledge. I ended up trying to recreate the homepage UI of the Twitter app. It's far from the original and I'm sure there are many flaws. Any suggestions or improvements, please let me know. The main thing is to have fun and learn something new, hopefully you can too.

https://user-images.githubusercontent.com/2366186/213792809-21e54048-91da-4ed0-881e-23544c036891.mp4

## Getting Started

When you git clone the repository
```bash
npm install
npm run dev
```

Checkout storybook to view components in isolation
```bash
npm run storybook
```

## Issues
The right side panel does not follow the same behavior as Twitter. As you scroll, it sticks but you should be able to see the footer links.

## Stack
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix](https://www.radix-ui.com/)
- [Storybook](https://storybook.js.org/)
- [Vercel](https://vercel.com/)


## What is that?
If you checkout the package.json, let me try and explain a few
- class-variance-authority: enables you to create variants for things like buttons. If you are a designer, it is like Figma's component variants.
- classnames: If you style a component such as Radix UI components, you can have a long line of css utility classes when you use Tailwind CSS. You might have hover, animation, responsive, layout and other classes. Now you can group them on separate lines.

## Text component

[Text component youtube video](https://www.youtube.com/watch?v=b1NEj8HG1yU) - currently testing

## Storybook

[Storybook addon next](https://storybook.js.org/addons/storybook-addon-next)


## Author

[Awesome Dev](https://github.com/awesomedev08)



