import itemApi from '../../api/itemApi.js';
import { html } from '../../lib/lit-html.js';

const temaplate = (item) => html`

<div class="bg-white">
  <div class="pt-6">
    

    <!-- Image gallery -->
    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <img src=${item.imageUrl} alt="item img" class="aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-auto">
    </div>

    <!-- Product info -->
    <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">${item.name}</h1>
      </div>

     


      <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
        <!-- Description and details -->
        

        <div class="mt-10">
          <h3 class="text-sm font-medium text-gray-900">For the product</h3>

          <div class="mt-4">
            <ul role="list" class="font-medium list-disc space-y-7 pl-4 text-sm">
              <li class="text-gray-400"><span class="text-gray-600">Product price: ${item.price} Lv</span></li>
              <li class="text-gray-400"><span class="text-gray-600">Product size:  ${item.size}</span></li>
              <li class="text-gray-400"><span class="text-gray-600">Contact phone number:  ${item.phoneNumber}</span></li>
            </ul>
          </div>
        </div>

       
        </div>
      </div>
    </div>
  </div>
</div>

`

export default async function(ctx) {
const item = await itemApi.getOne(ctx.params.itemId)

console.log(item);

    ctx.render(temaplate(item))
}