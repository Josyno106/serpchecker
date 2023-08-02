<script>    
   
   import Icon from '@iconify/svelte';

   export let keyWord = '';
   export let searchResults;

   export let getKeyWordData; 
</script>


  <h1 class="font-black text-textPrimary text-5xl ">Track Your Rankings</h1>
    <h2 class="text-xl text-gray-600">Check any keywords positions in realtime {#if typeof(searchResults)!=='undefined'} {searchResults.length} {/if}</h2>

    <div class="
           flex 
           outline outline-offset-2 outline-2 rounded-full
           p-2 text-lg 
           outline-blue-500 mt-10
           cursor-pointer" >
         <input type='text' bind:value={keyWord} placeholder="enter keyword" class="outline-none
           p-2 text-lg 
           cursor-pointer
           text-gray-500
           font-semibold
           
           "/>
        <button on:click={getKeyWordData(keyWord)}><Icon icon="gg:arrow-right-o" width="36" height="36" class="text-blue-500 hover:text-blue-600"/></button>
    </div>