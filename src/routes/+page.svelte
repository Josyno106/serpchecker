
<script>
    import {results} from '../components/stores'
    import "./../../src/app.css";
    import Icon from '@iconify/svelte';
    import MenuBar from "./menus/MenuBar.svelte";
    import SearchUi from '../components/SearchUi.svelte';
  import ResultsUi from '../components/ResultsUI.svelte';
    
    let API_KEY = import.meta.env.VITE_API_KEY;

    let keyWord = '';
    export let data;
    // const {results} = data

    // console.log(results)

    //fetch keyword data 
    let searchResults ;
    const getKeyWordData = async(keyWordInput)=>{
        const data = await fetch(
      `https://api.scrape-it.cloud/scrape/google?q=${keyWordInput}&filter=1&domain=google.com&gl=us&hl=en&deviceType=desktop`,
      {
        headers: {
          "x-api-key": API_KEY,
        },
      }
    );

    const resultsData = await data.json();
    const organicResultsData = resultsData['organicResults'];

    results.update((prev)=>[...organicResultsData])
    // searchResults = results['organicResults']

    // console.log(searchResults)

    results.subscribe((value)=>{
        searchResults = value
    })
 
    //console log the results

    console.log(searchResults)

    }

  
</script>



<div class={`flex flex-col 
 items-center ${typeof(searchResults)!=='undefined' ? '' : 'justify-center'} gap-6
p-8 min-h-screen bg-blurry1 bg-cover relative`} 
 >
    <MenuBar />
 

   <!-- Display search bar if no searches are done -->

    {#if typeof(searchResults)==='undefined'}

    <SearchUi getKeyWordData={getKeyWordData} keyWord={keyWord} searchResults={searchResults}  />
  
   {/if}

   {#if typeof(searchResults)!=='undefined'}

    <ResultsUi results={searchResults} keyword  ={keyWord} />
  
   {/if}
  
</div>
