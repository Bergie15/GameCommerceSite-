<script>
    import { cart } from './store.js';

    $: cartNumber = $cart.length;
</script>
<nav>
    <a class = "homePage" href=home>
        Home
    </a>

    <!-- grabbing the length of the array from the data store to provide how many items are in your cart -->
    <a class = "checkoutLink" href=checkout>
        Cart ({cartNumber})
    </a>
</nav>

<style>
nav {
    background-color: rgba(0, 0, 0, 0.8);
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    height: 45px;
    margin-left: -10px;
    margin-right: -10px;
    margin-top: -10px;
}
.checkoutLink{
    float: right;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;

}
.homePage{
    float: left;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;

}
.checkoutLink:hover, .homePage:hover{
    color: black;
    background-color: white;
}
</style>