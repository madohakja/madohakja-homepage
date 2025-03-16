import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_CzGQMyQf.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DJ8iLASj.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$History = createComponent(($$result, $$props, $$slots) => {
  const preTitle = "Story";
  const title = "\uC2A4\uD1A0\uB9AC";
  const subTitle = "\uB9C8\uB3C4\uD559\uC790 \uC8FC\uC2DD\uD68C\uC0AC\uAC00 \uAC78\uC5B4\uC628 \uAE38";
  const compareLink = "editions";
  const compareLinkAriaLabel = "Explore the detailed feature comparison of the Essential and Advanced Editions of DataNova Core.";
  const largeInfoSection = {
    olderReleases: {
      title: "\uB9C8\uB3C4\uD559\uC790 \uC8FC\uC2DD\uD68C\uC0AC",
      content: "",
      versions: [
        {
          version: "2025.01 - \uB9C8\uB3C4\uD559\uC790 \uC8FC\uC2DD\uD68C\uC0AC \uBC95\uC778 \uC124\uB9BD",
          href: "#"
        },
        {
          version: "2024.12 - \uC138\uC885\uD559\uC220\uB3C4\uC11C \uC120\uC815 <\uD55C\uAD8C\uC73C\uB85C \uBC30\uC6B0\uB294 \uB3C4\uCEE4&\uCFE0\uBC84\uB124\uD2F0\uC2A4>",
          href: "#"
        },
        {
          version: "2023.05 - Yes24 \uC774\uB2EC\uC758 \uAC1C\uBC1C\uC790 \uC120\uC815",
          href: "#"
        },
        {
          version: "2023.03 - <\uBAAC\uD14C\uCE74\uB97C\uB85C \uC2DC\uBBAC\uB808\uC774\uC158\uC73C\uB85C \uBC30\uC6B0\uB294 \uD655\uB960\uD1B5\uACC4 with \uD30C\uC774\uC36C> \uCD9C\uAC04",
          href: "#"
        },
        {
          version: "2022.01 - <\uC6F9 \uD06C\uB864\uB9C1 & \uB370\uC774\uD130 \uBD84\uC11D with \uD30C\uC774\uC36C> \uCD9C\uAC04",
          href: "#"
        },
        {
          version: "2021.12 - <\uC54C\uACE0\uB9AC\uC998 \uAD6C\uD604\uC73C\uB85C \uBC30\uC6B0\uB294 \uC120\uD615\uB300\uC218 with \uD30C\uC774\uC36C> \uCD9C\uAC04",
          href: "#"
        },
        {
          version: "2021.07 - \uB098\uB178\uCFE0\uD0A4 \uAC1C\uC778\uC0AC\uC5C5\uC790 \uC124\uB9BD",
          href: "#"
        },
        {
          version: "2021.01 - <\uC120\uD615\uB300\uC218\uC640 \uD1B5\uACC4\uD559\uC73C\uB85C \uBC30\uC6B0\uB294 \uBA38\uC2E0\uB7EC\uB2DD with \uD30C\uC774\uC36C> \uCD9C\uAC04",
          href: "#"
        }
      ]
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-jhltdope": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 pb-1 pt-40 sm:px-6 lg:px-8 bg-linear-to-br/oklch from-yellow-200 via-transparent to-white" data-astro-cid-jhltdope> <div class="max-w-7xl" data-astro-cid-jhltdope> <div class="mx-auto max-w-2xl lg:mx-0" data-astro-cid-jhltdope> <p class="text-base/7 font-medium text-slate-400" data-astro-cid-jhltdope>${preTitle}</p> <h1 class="mt-1 text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl" data-astro-cid-jhltdope> ${title} </h1> <p class="mt-8 max-w-xl text-pretty text-lg font-medium text-slate-700 sm:text-xl/8" data-astro-cid-jhltdope> ${subTitle} </p> <a class="group mt-5 inline-flex items-center justify-center gap-x-2 text-center font-medium text-slate-700 shadow-lg shadow-transparent transition duration-300 hover:text-slate-400 focus:outline-hidden"${addAttribute(compareLink, "href")} target="_blank"${addAttribute(compareLinkAriaLabel, "aria-label")} data-astro-cid-jhltdope></a> </div> </div> </section>  <section class="mx-auto max-w-[85rem] px-4 pb-10 sm:px-6 md:py-14 lg:px-8 lg:py-20" data-astro-cid-jhltdope> <div class="rounded-3xl bg-yellow-100 px-5 py-5 shadow-xl" data-astro-cid-jhltdope> <div class="py-5 sm:p-5" data-astro-cid-jhltdope> <h3 class="text-balance text-2xl font-bold tracking-tight text-slate-800" data-astro-cid-jhltdope> ${largeInfoSection.olderReleases.title} </h3> <p class="mt-6 text-pretty text-lg/8 text-slate-700" data-astro-cid-jhltdope> ${largeInfoSection.olderReleases.content} </p> <ul class="mt-6 list-inside list-none px-5 text-slate-700" data-astro-cid-jhltdope> ${largeInfoSection.olderReleases.versions.map((release, index) => renderTemplate`<li${addAttribute(`${index % 1 === 1 ? "mb-6" : ""}`, "class")} data-astro-cid-jhltdope> <a${addAttribute(release.href, "href")} class="transition duration-300 hover:text-slate-400 hover:underline" data-astro-cid-jhltdope> ${release.version} </a> </li>`)} </ul> </div> </div> </section>  ` })}`;
}, "C:/Users/stoic/Documents/work/8_dev/homepage_madohakja/themes/Madohakja/src/pages/company/history.astro", void 0);

const $$file = "C:/Users/stoic/Documents/work/8_dev/homepage_madohakja/themes/Madohakja/src/pages/company/history.astro";
const $$url = "/company/history";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$History,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
