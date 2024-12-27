import itemApi from '../../api/itemApi.js';
import { html } from '../../lib/lit-html.js';

const temaplate = (item,onDelete) => html`
<div class="bg-white">
  <div class="pt-6">
    <!-- Main container -->
    <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <!-- Left side (Image gallery) -->
      <div class="lg:col-span-1">
        <img 
          src=${item.imageUrl} 
          alt="item img" 
          class="aspect-[4/5] w-full object-cover sm:rounded-lg lg:aspect-auto">
      </div>

      <!-- Right side (Product info and actions) -->
      <div class="lg:col-span-2 flex flex-col justify-between px-4 pt-6 sm:px-6 lg:px-8">
        <!-- Product Info -->
        <div>
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">${item.name}</h1>
          <div class="mt-6">
            <h3 class="text-sm font-medium text-gray-900">For the product</h3>
            <ul role="list" class="font-medium list-disc space-y-4 pl-4 text-sm">
              <li class="text-gray-400"><span class="text-gray-600">Product price: ${item.price} Lv</span></li>
              <li class="text-gray-400"><span class="text-gray-600">Product size: ${item.size}</span></li>
              <li class="text-gray-400"><span class="text-gray-600">Contact phone number: ${item.phoneNumber}</span></li>
            </ul>
          </div>
        </div>

        <!-- Delete Button -->
        <div class="mt-6">
          <button 
            @click=${onDelete} 
            type="button" 
            class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`;


export default async function (ctx) {
    const item = await itemApi.getOne(ctx.params.itemId)

    async function onDelete() {
        const confirmMessage = confirm('Are you sure you want to delete this item?')
        if (confirmMessage) {
            try {
                await itemApi.remove(ctx.params.itemId)
                alert('Item deleted successfully!')
                ctx.page.redirect('/catalog')
            } catch (err) {
                console.log(err.message);

            }
        }
    }


    console.log(item);

    ctx.render(temaplate(item,onDelete))
}