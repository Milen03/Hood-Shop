import { render, html } from '../lib/lit-html.js'
import page from '../lib/page.js';

const rootElement = document.getElementById('root')

const layoutTemplate = (body, ctx) => html`<div class="h-full bg-white">
<header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="">
            </a>
        </div>
        <div class="flex lg:hidden">
            <button id="menuButton" type="button"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Open main menu</span>
                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
            <a href="/" class="text-sm/6 font-semibold text-gray-900">Home Page</a>
            <a href="/catalog" class="text-sm/6 font-semibold text-gray-900">Catalog</a>
            <a href="/login" class="text-sm/6 font-semibold text-gray-900">Login</a>
            <a href="/register" class="text-sm/6 font-semibold text-gray-900">Register</a>
        </div>

        ${ctx.isAuthenticated
            ? html`        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/logout" class="text-sm/6 font-semibold text-gray-900">Log out <span
                    aria-hidden="true">&rarr;</span></a>
        </div>
        `
        : html`<div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/login" class="text-sm/6 font-semibold text-gray-900">Log in <span
                    aria-hidden="true">&rarr;</span></a>
        </div>
        `
        }


    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div id="mobileMenu" class="lg:hidden" role="dialog" aria-modal="true">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0 z-50"></div>
        <div
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
                <a href="/" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 w-auto"
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="">
                </a>
                <button id="closeButton" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Close menu</span>
                    <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                        <a @click="${() => page.redirect('/')}"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Home Page</a>
                        <a @click="${() => page('/catalog')}"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Catalog</a>
                        <a @click="${() => page('/login')}"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Login</a>
                            <a @click="${() => page('/register')}"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Register</a>
                    </div>
                    ${ctx.isAuthenticated
                        ? html`<div class="py-6">
                        <a href="/logout"
                            class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log
                            out</a>
                    </div>
                    `
                    : html`<div class="py-6">
                        <a href="/login"
                            class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log
                            in</a>
                    </div>
                    `
                    }
                    
                </div>
            </div>
        </div>
    </div>
</header>

<div class="relative isolate px-6 pt-14 lg:px-8">
${body}
  </div>

  <footer>Hood Shop made Milen Atanasov</footer>
</div>
`
document.addEventListener('DOMContentLoaded', () => {
    // Селектиране на елементите по `id`
    const menuButton = document.getElementById('menuButton'); // Бутон за отваряне
    const closeButton = document.getElementById('closeButton'); // Бутон за затваряне
    const mobileMenu = document.getElementById('mobileMenu'); // Мобилно меню

    // Отваряне на менюто
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden'); // Премахване на класа `hidden`
    });

    // Затваряне на менюто
    closeButton.addEventListener('click', () => {
        mobileMenu.classList.add('hidden'); // Добавяне на класа `hidden`
    });
});


export default function (ctx, next) {
console.log(ctx.user);
console.log(ctx.isAuthenticated)


    ctx.render = (templateResult) => {
        render(layoutTemplate(templateResult, ctx),rootElement)
    }

    next()
}