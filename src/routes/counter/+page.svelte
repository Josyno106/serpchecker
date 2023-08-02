<script>
import {count} from '../../components/stores'
import {user} from '../../components/stores'
import Incrementer from '../../components/Incrementer.svelte';
import Decrementer from '../../components/Decrementer.svelte';
import Resetter from '../../components/Resetter.svelte';



let countValue;
let users;

count.subscribe((value) => {
    countValue = value;
});

user.subscribe((value)=>{
    console.log(value); // this will log all user data whenever it changes in any way
})

</script>

<h1>The count is {countValue}</h1>

{#if countValue>4}
<h2>Hurray... the counter is greater than  4</h2>
{/if}

<Incrementer />
<Decrementer />
<Resetter />