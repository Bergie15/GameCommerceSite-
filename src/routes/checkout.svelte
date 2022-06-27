<script>
    import NAV from './navbar.svelte';
    import { cart } from './store.js';

    console.log(cart);
</script>

<!-- Navigation component -->
<NAV/>

<!-- Display items from your cart -->
<!-- TODO: Add Prices, which system it is for -->
{#each $cart as item}
    <figure class="figs">
        <img class ="gameImg" src={item[0]} alt="game cover">
        <figcaption>{item[1]}
        </figcaption>
    </figure>
{/each}

<!-- 
    TODO: Add 3rd party pay API to handle transactions 
-->
<div class="pay">
    <button class="checkoutPay">Checkout</button>
</div>


<style>
        .gameImg{
        width:  20%;
        height: 20%;
        object-fit: cover;
        vertical-align: bottom;
    }
    .figs{
        height: auto;
        flex-grow: 1;
    }
    /*.pay{
        float: right;
    } */
</style>
