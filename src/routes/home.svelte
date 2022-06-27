<script>
//    TODO: add more error handling/ edge cases
   import NAV from './navbar.svelte';
    import { cart } from './store.js';
    
    let gameName;

    // TODO: Hide API key
    let API_KEY = '';
    export let games = [];
    
    async function getGames(){
        const response = await fetch('https://www.giantbomb.com/api/search/?api_key='+ API_KEY +'&format=json&query='+gameName+'&resources=game');
        const data = await response.json();

        if(response.ok){
            games = data.results;
        }
    }

    function addToCart(x,y){
        let game = [x,y]
        $cart = [...$cart, game];
    }

</script>

<!-- Navigation component -->
<NAV/>
    
<!-- site logo -->
<img class="gbImg" src="https://upload.wikimedia.org/wikipedia/en/4/4b/Giant_Bomb_logo.png">

<!-- main search functionality -->
<main>
    <!-- search input and button -->
    <form class="gameSearchForm" on:submit|preventDefault={getGames}>
        <input class="gameSearchInput" bind:value={gameName}  type="text" placeholder="Search for a game...">
        <button class="gameSearchButton" on:click={getGames}>search</button>
    </form>
    
    <!-- displays the games found in search -->
    <!-- TODO: add price -->
    <!-- TODO: hover over images to display discription -->
    <div class ="gameLibrary">
        {#each games as game}
            <figure class="figs">
                <img class ="gameImg" src={game.image.super_url} alt="data image">
                <figcaption>
                    {game.name}
                    <button on:click={addToCart(game.image.super_url, game.name)}>Add to cart</button>
                </figcaption>
            </figure>
        {/each}
    </div>

</main>
    
<!-- CSS -->
<!-- TODO: fine tune CSS -->
<style>
    .gameImg{
        width:  100%;
        height: 100%;
        object-fit: cover;
        vertical-align: bottom;
    }
    .gameImg:hover{
        opacity: 0.3;

    }
    .figs{
        height: 40vh;
        flex-grow: 1;
    }
    .gameLibrary{
        display:flex;
        flex-wrap: wrap;
    }
    .gameSearchForm{
        text-align: center;
    }
    .gbImg{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 20%;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    </style>