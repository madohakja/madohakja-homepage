import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_CzGQMyQf.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DJ8iLASj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Corevalue = createComponent(($$result, $$props, $$slots) => {
  const preTitle = "Core Value";
  const title = "\uD575\uC2EC\uAC00\uCE58";
  const subTitle = "\uB9C8\uB3C4\uD559\uC790 \uC8FC\uC2DD\uD68C\uC0AC\uC758 \uD575\uC2EC\uAC00\uCE58";
  const compareLink = "editions";
  const compareLinkAriaLabel = "\uB9C8\uB3C4\uD559\uC790 \uC8FC\uC2DD\uD68C\uC0AC";
  const features = [
    {
      title: "Exploration",
      description: "\uB04A\uC784\uC5C6\uB294 \uD0D0\uAD6C \uC815\uC2E0\uC73C\uB85C \uC18C\uD504\uD2B8\uC6E8\uC5B4\uC758 \uD488\uC9C8\uC744 \uB192\uC774\uACE0, \uACE0\uAC1D\uC5D0\uAC8C \uB354 \uB098\uC740 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.",
      className: "value-exploration"
    },
    {
      title: "Fusion",
      description: "\uCC3D\uC758\uC131\uC744 \uBC14\uD0D5\uC73C\uB85C \uAE30\uC874\uC758 \uAE30\uC220\uACFC \uC544\uC774\uB514\uC5B4\uB97C \uC735\uD569\uD558\uC5EC, \uC0C8\uB85C\uC6B4 \uAC00\uCE58\uB97C \uCC3D\uC870\uD569\uB2C8\uB2E4.",
      className: "value-fusion"
    },
    {
      title: "Practicality",
      description: "\uC2E4\uC6A9\uC131\uC774 \uC5C6\uB294 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB294 \uC758\uBBF8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uACE0\uAC1D\uC774 \uC2E4\uC81C\uB85C \uD65C\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uB9CC\uB4E4\uC5B4, \uC138\uC0C1\uC744 \uB354 \uB098\uC740 \uACF3\uC73C\uB85C \uBCC0\uD654\uC2DC\uD0B5\uB2C8\uB2E4.",
      className: "value-practicality"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 pb-12 pt-40 sm:px-6 lg:px-8 bg-linear-to-br/oklch from-yellow-200 via-transparent to-white"> <div class="max-w-7xl"> <div class="mx-auto max-w-xl lg:mx-0"> <p class="text-base/7 font-medium text-slate-400">${preTitle}</p> <h1 class="mt-1 text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl"> ${title} </h1> <p class="mt-8 text-pretty text-lg font-medium text-slate-700 sm:text-xl/8"> ${subTitle} </p> <a${addAttribute(compareLink, "href")} target="_blank" class="group mt-5 inline-flex items-center justify-center gap-x-2 text-center font-medium text-slate-700 shadow-lg shadow-transparent transition duration-300 hover:text-slate-400 focus:outline-hidden"${addAttribute(compareLinkAriaLabel, "aria-label")}></a> </div> </div> </section> <section class="py-20 sm:py-20"> <div class="mx-auto max-w-7xl px-6 lg:px-8"> <dl class="grid grid-cols-1 gap-x-3 gap-y-16 text-center lg:grid-cols-3"> ${features.map(({ title: title2, description, className }) => renderTemplate`<div${addAttribute(`flex flex-col gap-y-4 bg-yellow-100 p-10 ${className}`, "class")}> <dt class="text-base/7 text-slate-600">${description}</dt> <dd class="order-first text-3xl font-medium tracking-tight text-slate-900"> <h3>${title2}</h3> </dd> </div>`)} </dl> <br> <br> <br> <br> <br> </div> </section> ` })}`;
}, "C:/Users/stoic/Documents/work/8_dev/homepage_madohakja/themes/Madohakja/src/pages/company/corevalue.astro", void 0);

const $$file = "C:/Users/stoic/Documents/work/8_dev/homepage_madohakja/themes/Madohakja/src/pages/company/corevalue.astro";
const $$url = "/company/corevalue";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Corevalue,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
