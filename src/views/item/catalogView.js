// import { database } from '../config/firebaseInit.js'
// import { ref,get } from 'firebase/database'
import itemApi from '../../api/itemApi.js';
import { html } from '../../lib/lit-html.js';

const template = (items = []) => html`
<div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      ${items.map(item => html`
        <a href="/catalog/${item.id}/details" class="group">
          <img src=${item.imageUrl} alt="item" class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]">
          <h3 class="mt-4 text-sm text-gray-700">${item.name}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">${item.price} BG.</p>
        </a> 
      `)}
    </div>
  </div>
</div>
`;

export default async function(ctx) {
  try {
    // Извличане на данните
    const items = await itemApi.getAll();
    console.log(items);

    // Проверка, че данните са масив
    if (!Array.isArray(items)) {
      throw new Error('Fetched data is not an array.');
    }

    // Рендиране с получените данни
    ctx.render(template(items));
  } catch (err) {
    console.error('Error fetching items:', err);

    // Рендиране на празен шаблон в случай на грешка
    ctx.render(template([]));
  }
}

