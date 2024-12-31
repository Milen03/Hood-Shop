import itemApi from '../../api/itemApi.js';
import { html } from '../../lib/lit-html.js';

const editTemplate = (item, onSubmit) => html`
<div class="bg-white max-w-2xl mx-auto px-4 py-6">
  <h1 class="text-2xl font-bold text-gray-900">Edit Product</h1>
  <form @submit=${onSubmit} class="mt-6 space-y-4">


  <div>
  <label for="imageUrl" class="block text-sm font-medium text-gray-700">Item Image</label>
  <input
    type="text"
    id="imageUrl"
    name="imageUrl"
    value="${item.imageUrl}"
    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    required />
</div>



    <div>
      <label for="name" class="block text-sm font-medium text-gray-700">Product Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value="${item.name}"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        required />
    </div>

    <div>
      <label for="price" class="block text-sm font-medium text-gray-700">Product Price</label>
      <input
        type="number"
        id="price"
        name="price"
        value="${item.price}"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        required />
    </div>

    <div>
      <label for="size" class="block text-sm font-medium text-gray-700">Product Size</label>
      <input
        type="text"
        id="size"
        name="size"
        value="${item.size}"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        required />
    </div>

    <div>
      <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Phone Number</label>
      <input
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        value="${item.phoneNumber}"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        required />
    </div>

    <div>
      <label for="about" class="block text-sm font-medium text-gray-700">Details</label>
      <textarea
        id="about"
        name="about"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">${item.about}</textarea>
    </div>

    <button
      type="submit"
      class="mt-4 px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg">
      Save Changes
    </button>
  </form>
</div>
`;

export default async function (ctx) {
    const item = await itemApi.getOne(ctx.params.itemId);

    async function onSubmit(e) {
        e.preventDefault();

        // Извличане на данни от формуляра
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        data._ownerId = item._ownerId;

        try {
            // Изпращане на актуализираните данни
            await itemApi.update(ctx.params.itemId, data);
            alert('Product updated successfully!');
            ctx.page.redirect(`/catalog/${ctx.params.itemId}/details`);
        } catch (err) {
            console.error(err.message);
            alert('Failed to update product.');
        }
    }

    ctx.render(editTemplate(item, onSubmit));
}

