<script>
	import { count } from './stores.js';
	import { user } from './stores.js';

	function decrement() {
		// TODO decrement the count
        count.update((n) => n - 1);
	}

    function addUser(){
        //TODO Add a new User to store
        user.update((prev)=>[...prev,{name:'Joshua',salary:2000}])
    }
</script>

<button on:click={decrement}> - </button>
<button on:click={addUser}> add user </button>
