<template>
      <header>

        <div class="container-header" :class="{'nav-open':open}">
            <div class="mobile-nav">
                <ul class="mobile-nav__list">
                    <li class="link"> <a class="link-tag" href="#">Collections</a> </li>
                       
                    <li class="link"><a class="link-tag" href="#">Men</a> </li>

                    <li class="link"><a class="link-tag" href="#">Women</a> </li>

                    <li class="link"> <a class="link-tag" href="#">About</a></li>

                    <li class="link"><a class="link-tag" href="#">Contact</a> </li>
                </ul>
            </div>

            <button class="btn-mobile-nav">
                <img class="icon-mobile-nav" name="menu" :src="require('@/assets/images/icon-menu.svg')" alt="menu" @click="handleMobileNav">

                <img class="icon-mobile-nav" name="close" :src="require('@/assets/images/icon-close.svg')" alt="close" @click="handleMobileNav">

            </button>

            <nav>
                <div class="logo">
                    <img  :src="require('@/assets/images/logo.svg')" alt="logo">
                </div>

                <div class="links-container ">
                    <ul class="links">
                        <li class="link">  
                           <router-link :to="{name:'collections'}"> Collection</router-link>
                        </li>

                        <li class="link"> 
                                <router-link :to="{name:'Men'}"> Men</router-link> 
                        </li>

                        <li class="link"> 
                                <router-link :to="{name:'Women'}"> Woman</router-link> 
                        </li>

                        <li class="link"> 
                                <router-link :to="{name:'About'}"> About</router-link> 
                        </li>

                        <li class="link"> 
                                <router-link :to="{name:'Contact'}"> Contact</router-link> 
                        </li>

                    </ul>
                </div>
            </nav>

            <div class="basket">
                <div class="basket-icon-container">
                    <img :src="require('@/assets/images/icon-cart.svg')" alt="cartIcon">

                    <span class="product-number "></span>

                </div>

                <div class="avatar">

                </div>
            </div>
        </div>

    </header>
</template>

<script>

export default {
        data(){
                return{
                        open:false
                }
        },
        methods:{
                handleMobileNav(){
                        this.open = !this.open
                }
        }
}
</script>

<style scoped lang="scss">
$VeryDarkBlue: hsl(220, 13%, 13%);
$Orange: hsl(26, 100%, 55%);
$Black: black;

@mixin flex-container($flexDirection: row, $justify: center, $align: center) {
    display: flex;
    justify-content: $justify;
    align-items: $align;
    flex-direction: $flexDirection;
}

header {
    padding-block: 3rem;
    padding-inline: 12rem;

    .container-header {
        display: flex;
        align-items: center;
        padding-bottom: 4rem;
        border-bottom: 1px solid #f0f1f2;
        position: relative;

        .mobile-nav {
            display: none;
        }

        .btn-mobile-nav {
            border: none;
            background: none;
            cursor: pointer;
            display: none;
            margin-top: 5px;
            margin-right: 2rem;
            position: relative;
            z-index: 100;

            .icon-mobile-nav[name="close"] {
                display: none;
            }
        }

        ///////////////////nav////////////
        nav {
            @include flex-container($justify: flex-start);
            gap: 4rem;
            flex: 1;

            .links {
                list-style: none;
                @include flex-container();
                gap: 3.5rem;

                .link {
                    a {
                        text-decoration: none;
                        position: relative;
                        color: $VeryDarkBlue;
                    }

                    a::after {
                        position: absolute;
                        content: "";
                        height: 2px;
                        bottom: -51px;
                        right: 0;
                        width: 100%;
                        background: $Orange;
                        visibility: hidden;
                        opacity: 0;
                        transition: visibility 0s, opacity 0.3s linear;
                    }

                    a:hover::after {
                        visibility: visible;
                        opacity: 1;
                    }
                }
            }
        }

        ////////////////////basket///////////////

        .basket {
            @include flex-container($justify: flex-end);
            gap: 4rem;

            .avatar {
                width: 4rem;
                height: 4rem;
                background-image: url("@/assets/images/image-avatar.png");
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
            }

            .basket-icon-container {
                position: relative;

                .product-number {
                    height: 1.8rem;
                    width: 2.2rem;
                    border-radius: 45%;
                    background-color: $Orange;
                    @include flex-container();
                    padding: 1rem;
                    color: white;
                    font-size: 1rem;
                    padding: 0.5rem;
                    position: absolute;
                    top: -12px;
                    left: 7px;
                    visibility: hidden;
                }
            }

            .active-basket {
                visibility: visible !important;
            }
        }
    }
}

////////////////////responsive//////////////////////
@media (max-width: 768px) {

        header {
        padding: 1rem;

        .container-header {
            margin-top: 1rem;

            .btn-mobile-nav {
                display: block;
            }

            nav {

                .links-container {
                   display: none;
                }
            }
        }

        .container-header.nav-open {
            .icon-mobile-nav[name="close"] {
                display: block;
                position: relative;
                z-index: 900;
                margin-left: 2rem;
            }

            .icon-mobile-nav[name="menu"] {
                display: none;
            }

             .mobile-nav {
                        position: absolute;
                        top: 0;
                        left: 0;
                        min-height: 120vh;
                        width: 50%;
                        z-index: 30;
                        background-color: white;
                        display: block;

                        .mobile-nav__list {
                                display: flex;
                                flex-direction: column;
                                gap: 3rem;
                                list-style: none;
                                padding-left: 2rem;
                                padding-top: 8rem;

                                        .link {
                                        .link-tag {
                                                text-decoration: none;
                                                position: relative;
                                                color: $VeryDarkBlue;
                                                font-weight: 700;
                                        }

                                }
                        }

                  }
        }
    }
}

</style>