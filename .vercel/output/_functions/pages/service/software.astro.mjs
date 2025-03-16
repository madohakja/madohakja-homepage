import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_CzGQMyQf.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DJ8iLASj.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Software = createComponent(($$result, $$props, $$slots) => {
  const preTitle = "\uC18C\uD504\uD2B8\uC6E8\uC5B4";
  const title = "\uC778\uACF5\uC9C0\uB2A5 \uC18C\uD504\uD2B8\uC6E8\uC5B4";
  const subTitle = "\uAE30\uC220\uACFC \uB9C8\uBC95\uC774 \uB9CC\uB098\uB294 \uC18C\uD504\uD2B8\uC6E8\uC5B4";
  const compareLink = "editions";
  const compareLinkAriaLabel = "Explore the detailed feature comparison of the Essential and Advanced Editions of DataNova Core.";
  const essentialTier = {
    title: "New Project",
    description: "\uAC1C\uBC1C \uC911 \uC785\uB2C8\uB2E4..",
    cta: {
      text: "\uC870\uAE08\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694.",
      link: "#"
    }
  };
  const advancedTier = {
    title: "\uB85C\uC2A4\uCE74\uCE20\uC758 AI \uBA38\uC2E0\uB7EC\uB2DD",
    description: "\uD655\uB960\uD1B5\uACC4, \uC120\uD615\uB300\uC218, \uBA38\uC2E0\uB7EC\uB2DD, \uB525\uB7EC\uB2DD \uB4F1 \uC778\uACF5\uC9C0\uB2A5 \uC5F0\uAD6C\uC5D0 \uD544\uC694\uD55C \uBAA8\uB4E0 \uC9C0\uC2DD\uC744 \uB2F4\uACE0 \uC788\uB294 \uACF3\uC785\uB2C8\uB2E4. \uCD08\uBCF4\uC790\uBD80\uD130 \uC911\uACE0\uAE09\uC790\uAE4C\uC9C0 \uBAA8\uB450 \uD65C\uC6A9\uD560 \uC218 \uC788\uB294 \uC0AC\uC774\uD2B8\uC785\uB2C8\uB2E4.",
    cta: {
      text: "\uBC29\uBB38\uD558\uAE30",
      link: "https://losskatsu.github.io/"
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-ry4k3xyq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 pb-12 pt-40 sm:px-6 lg:px-8 bg-linear-to-br/oklch from-yellow-200 via-transparent to-white" data-astro-cid-ry4k3xyq> <div class="max-w-7xl" data-astro-cid-ry4k3xyq> <div class="mx-auto max-w-2xl lg:mx-0" data-astro-cid-ry4k3xyq> <p class="text-base/7 font-medium text-slate-400" data-astro-cid-ry4k3xyq>${preTitle}</p> <h1 class="mt-1 text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl" data-astro-cid-ry4k3xyq> ${title} </h1> <p class="mt-8 max-w-xl text-pretty text-lg font-medium text-slate-700 sm:text-xl/8" data-astro-cid-ry4k3xyq> ${subTitle} </p> <a class="group mt-5 inline-flex items-center justify-center gap-x-2 text-center font-medium text-slate-700 shadow-lg shadow-transparent transition duration-300 hover:text-slate-400 focus:outline-hidden"${addAttribute(compareLink, "href")} target="_blank"${addAttribute(compareLinkAriaLabel, "aria-label")} data-astro-cid-ry4k3xyq></a> </div> </div> </section> <section class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 px-4 sm:mt-20 md:px-0 lg:max-w-4xl lg:grid-cols-2 lg:gap-y-0" data-astro-cid-ry4k3xyq> <div class="rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-slate-900/10 sm:p-10 lg:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none" data-astro-cid-ry4k3xyq> <h3 class="text-3xl font-semibold text-slate-600" data-astro-cid-ry4k3xyq> ${essentialTier.title} </h3> <p class="mt-8 text-base/6 text-slate-600 sm:mt-10" data-astro-cid-ry4k3xyq> ${essentialTier.description} </p> <a${addAttribute(essentialTier.cta.link, "href")}${addAttribute(essentialTier.title, "aria-describedby")} class="mt-8 block rounded-lg px-3.5 py-2.5 text-center text-sm font-semibold ring-1 ring-inset ring-yellow-700 transition duration-300 hover:bg-yellow-700/80 hover:text-white focus:bg-yellow-700 focus:text-white focus:outline-hidden sm:mt-10" data-astro-cid-ry4k3xyq>${essentialTier.cta.text}</a> </div> <div class="relative flex flex-col justify-evenly rounded-3xl bg-yellow-400 p-8 shadow-2xl ring-1 ring-yellow-900/10 sm:p-10 lg:h-[120%]" data-astro-cid-ry4k3xyq> <h3 class="text-4xl/7 font-semibold text-yellow-100" data-astro-cid-ry4k3xyq> ${advancedTier.title} </h3> <p class="mt-8 text-lg/6 text-yellow-50 sm:mt-10" data-astro-cid-ry4k3xyq> ${advancedTier.description} </p> <a${addAttribute(advancedTier.cta.link, "href")}${addAttribute(advancedTier.title, "aria-describedby")} class="mt-8 block rounded-lg bg-yellow-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs transition-colors duration-300 hover:bg-yellow-600/80 focus:bg-yellow-600/80 focus:outline-hidden sm:mt-10" data-astro-cid-ry4k3xyq>${advancedTier.cta.text}</a> </div> <br data-astro-cid-ry4k3xyq> <br data-astro-cid-ry4k3xyq> <br data-astro-cid-ry4k3xyq> <br data-astro-cid-ry4k3xyq> <br data-astro-cid-ry4k3xyq> <br data-astro-cid-ry4k3xyq> <br data-astro-cid-ry4k3xyq> </section>  ` })}`;
}, "C:/Users/stoic/Documents/work/8_dev/homepage_madohakja/themes/Madohakja/src/pages/service/software.astro", void 0);

const $$file = "C:/Users/stoic/Documents/work/8_dev/homepage_madohakja/themes/Madohakja/src/pages/service/software.astro";
const $$url = "/service/software";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Software,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
