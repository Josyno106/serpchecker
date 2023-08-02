<script>
 import Icon from '@iconify/svelte';

 export let results;
 export let keyword;
</script>

<div class=" absolute top-28 flex flex-col gap-6  bg-blue-50 min-w-full py-4 px-20">
    <h3 class="text-2xl font-bold">Results for "{keyword}"</h3>
    <!-- <p>Here is the data {results.length} </p> -->
    <div class="flex gap-4">

        <div class="flex gap-2 items-center justify-center">
           <Icon icon="carbon:time" /> <p>Realtime Results</p>
        </div>
        <div class="flex gap-2 items-center justify-center">
            <Icon icon="radix-icons:desktop" /> <p class="text-sm">Desktop</p>
        </div>
        <div class="flex gap-2 items-center justify-center">
            <Icon icon="circle-flags:us" /> <p class="text-sm">Google.com (en)</p>
        </div>
        <div class="grow"></div> 
        <div class="flex">
            <div class="bg-white border-1 shadow-sm flex p-2 gap-2 rounded-md ">
                <Icon icon="iconamoon:search-thin" width='24' height='24' class="text-gray-400"/>
                <input type="text" placeholder="filter" class="outline-none text-gray-500 " />
            </div>
            <a href="https://google.com" class="flex items-center justify-center
             gap-1 ml-2 bg-transparent border px-4 border-blue-500 rounded-md
              text-blue-500 hover:border-blue-600 hover:text-blue-500">
                <Icon icon="carbon:view" />
                View on Google 
            </a>
        </div>

    </div>
    <div class="bg-red-500 overflow-x-scroll">
        <table class="border-collapse border border-slate-400 bg-white min-w-full text-left overflow-scroll   ">
            <thead class="h-14">
            <tr>
                <th class="border border-slate-300 px-2 font-semibold w-28">Position</th>
                <th class="border border-slate-300 px-2 font-semibold">URL</th>
                <th class="border border-slate-300 px-2 font-semibold">Title</th>
            </tr>
        </thead>
        <tbody>
            {#each results as result}
            <tr class="hover:bg-blue-300 h-10 hover:cursor-pointer">
            <td class="border border-slate-300 px-2 hover:bg-blue-300">{result.position}</td>
            <td class="border border-slate-300 px-2 hover:bg-blue-300  text-sm">{result.link.replace(/^https?\:\/\//i, "")}</td>
            <td class="border border-slate-300 px-2 hover:bg-blue-300 text-sm">{result.title}</td>
            </tr>
            {/each}
           
            
        </tbody>
        </table>
    </div>
</div>