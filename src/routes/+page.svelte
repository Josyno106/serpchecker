
<script>
    import "./../../src/app.css";
    import Icon from '@iconify/svelte';
    import MenuBar from "./menus/MenuBar.svelte";
    
  

    let keyWord = '';
    export let data;
    const {organicResultsData} = data

    console.log(organicResultsData)


  
</script>



<div class=" flex flex-col 
justify-center items-center gap-6
p-8 min-h-screen bg-blurry1 bg-cover relative

" >
    <MenuBar />
 
    <!-- Display the results if they are available -->

    {#if true}
   <h2>Here is some data </h2>
   {/if}

   <!-- Display search bar if no searches are done -->

    {#if !true}
    <h1 class="font-black text-textPrimary text-5xl ">Track Your Rankings </h1>
    <h2 class="text-xl text-gray-600">Check any keywords positions in realtime</h2>

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
        <button on:click={''}><Icon icon="gg:arrow-right-o" width="36" height="36" class="text-blue-500 hover:text-blue-600"/></button>
    </div>
   {/if}
  
</div>

<style>
   
</style>