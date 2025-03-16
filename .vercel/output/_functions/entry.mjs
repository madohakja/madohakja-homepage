import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_DPee1V-t.mjs';
import { manifest } from './manifest_CyYOOtBl.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/feedback.astro.mjs');
const _page3 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page4 = () => import('./pages/company/about.astro.mjs');
const _page5 = () => import('./pages/company/corevalue.astro.mjs');
const _page6 = () => import('./pages/company/history.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/hire.astro.mjs');
const _page9 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page10 = () => import('./pages/robots.txt.astro.mjs');
const _page11 = () => import('./pages/service/articles/_id_.astro.mjs');
const _page12 = () => import('./pages/service/articles.astro.mjs');
const _page13 = () => import('./pages/service/book.astro.mjs');
const _page14 = () => import('./pages/service/consulting.astro.mjs');
const _page15 = () => import('./pages/service/education.astro.mjs');
const _page16 = () => import('./pages/service/reference/_id_.astro.mjs');
const _page17 = () => import('./pages/service/reference.astro.mjs');
const _page18 = () => import('./pages/service/software.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/feedback.ts", _page2],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page3],
    ["src/pages/company/about.astro", _page4],
    ["src/pages/company/corevalue.astro", _page5],
    ["src/pages/company/history.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/hire.astro", _page8],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page9],
    ["src/pages/robots.txt.ts", _page10],
    ["src/pages/service/articles/[id].astro", _page11],
    ["src/pages/service/articles/index.astro", _page12],
    ["src/pages/service/book.astro", _page13],
    ["src/pages/service/consulting.astro", _page14],
    ["src/pages/service/education.astro", _page15],
    ["src/pages/service/reference/[id].astro", _page16],
    ["src/pages/service/reference/index.astro", _page17],
    ["src/pages/service/software.astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "455d523f-5f20-4884-b8ab-84a4ef53bfc9",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
