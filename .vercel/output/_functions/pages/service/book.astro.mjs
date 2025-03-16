import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_CzGQMyQf.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DJ8iLASj.mjs';
import { a as getCollection } from '../../chunks/_astro_content_DDGn-_Di.mjs';
export { renderers } from '../../renderers.mjs';

const pageContent = {
  pageTitle: "\uB9C8\uB3C4\uD559\uC790\uC758 \uC11C\uC7AC",
  tableHeadings: {
    name: "\uB3C4\uC11C \uC774\uB984",
    author: "\uC800\uC790",
    publish: "\uCD9C\uD310\uC0AC",
    year: "\uCD9C\uC2DC\uB144\uB3C4",
    action: "\uB9C1\uD06C"
  },
  actionLabel: "\uAD6C\uB9E4\uB9C1\uD06C"
};
const $$Book = createComponent(async ($$result, $$props, $$slots) => {
  let spreadsheets = await getCollection("spreadsheets");
  spreadsheets = spreadsheets.sort((a, b) => Number(b.data.year) - Number(a.data.year));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 pb-12 pt-48 sm:px-6 lg:px-8 bg-linear-to-br/oklch from-yellow-200 via-transparent to-white"> <div class="max-w-7xl"> <div class="mx-auto max-w-3xl lg:mx-0"> <h1 class="text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl"> ${pageContent.pageTitle} </h1> </div> </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 md:py-14 lg:px-8"> <div class="flex flex-col"> <div class="overflow-x-auto"> <div class="inline-block p-1.5 align-middle lg:w-4/5"> <table class="divide-y divide-slate-200 w-full"> <thead> <tr> <th class="px-6 py-3 text-start text-xs font-medium uppercase text-slate-500"> ${pageContent.tableHeadings.name} </th> <th class="px-6 py-3 text-start text-xs font-medium uppercase text-slate-500"> ${pageContent.tableHeadings.author} </th> <th class="px-6 py-3 text-start text-xs font-medium uppercase text-slate-500"> ${pageContent.tableHeadings.publish} </th> <th class="px-6 py-3 text-start text-xs font-medium uppercase text-slate-500"> ${pageContent.tableHeadings.year} </th> <th class="px-6 py-3 text-end text-xs font-medium uppercase text-slate-500"> ${pageContent.tableHeadings.action} </th> </tr> </thead> <tbody class="divide-y divide-slate-200"> ${spreadsheets.map((item) => renderTemplate`<tr class="transition duration-150 hover:bg-slate-100"> <td class="whitespace-normal px-6 py-4 text-base font-medium text-slate-800"> ${item.data.title} </td> <td class="whitespace-normal px-6 py-4 text-base text-slate-800"> ${item.data.author} </td> <td class="whitespace-normal px-6 py-4 text-base text-slate-800"> ${item.data.publish} </td> <td class="whitespace-nowrap px-6 py-4 text-base text-slate-800"> ${item.data.year} </td> <td class="whitespace-nowrap px-6 py-4 text-end text-sm font-medium"> <a${addAttribute(item.data.url, "href")} class="inline-flex items-center gap-x-2 text-yellow-500 transition-colors duration-300 hover:text-red-700 focus:outline-hidden"> ${pageContent.actionLabel} </a> </td> </tr>`)} </tbody> </table> </div> </div> </div> </section> ` })}`;
}, "C:/Users/stoic/Documents/work/8_dev/homepage_madohakja/themes/Madohakja/src/pages/service/book.astro", void 0);

const $$file = "C:/Users/stoic/Documents/work/8_dev/homepage_madohakja/themes/Madohakja/src/pages/service/book.astro";
const $$url = "/service/book";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Book,
  file: $$file,
  pageContent,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
