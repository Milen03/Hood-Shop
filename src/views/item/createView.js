
import { html,render } from "lit-html";
import itemApi from "../../api/itemApi";
import page from "page";

const template = (onSubmit) => html`
<form @submit=${onSubmit}>
  <div class="space-y-12 mt-30" style="width: 900px;margin: auto">
    <div class="border-b border-gray-900/10 pb-12" style="width: 900px;">
      <h2 class="text-base/7 font-semibold text-gray-900">Here you can upload your clothes</h2>

      <div class="border-b border-gray-900/10 pb-12">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div class="sm:col-span-3">
            <label for="name" class="block text-sm/6 font-medium text-gray-900">Clothes name</label>
            <div class="mt-2">
              <input type="text" name="name" id="name" autocomplete="name" class="max-w-xs block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="size" class="block text-sm font-medium text-gray-900">Size</label>
            <div class="mt-2">
              <select id="size" name="size" autocomplete="size" class="max-w-xs block w-full rounded-md bg-white py-1.5 pl-2 pr-4 text-sm text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="phoneNumber" class="block text-sm/6 font-medium text-gray-900">Phone Number</label>
            <div class="mt-2">
              <input type="number" name="phoneNumber" id="phoneNumber" autocomplete="phoneNumber" class="max-w-xs block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="price" class="block text-sm/6 font-medium text-gray-900">Price</label>
            <div class="mt-2">
              <input type="number" name="price" id="price" autocomplete="price" class="max-w-xs block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="image" class="block text-sm/6 font-medium text-gray-900">Item Image</label>
            <div class="mt-2">
              <input type="text" name="imageUrl" id="image" autocomplete="image" class="max-w-xs block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center gap-x-6">
          <button type="button" class="text-sm/6 font-semibold text-gray-900">Cancel</button>
          <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
      </div>
    </div>
  </div>
</form>

`

export default function(ctx){
ctx.render(template(fromSubmitHandler))
}
async function fromSubmitHandler(e){
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const itemData = Object.fromEntries(formData)

    try{
       await itemApi.create(itemData)
       page.redirect('/catalog')
    }catch(err){
        console.log(err.message);
        
    }

}