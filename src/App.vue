<template>
    <router-view/>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&family=Kumbh+Sans:wght@400;700&family=Manrope:wght@600;800&family=Overpass:wght@400;700&family=Poppins:wght@400;500;600;700&family=Rubik:wght@400;500;700&family=Space+Mono:wght@700&display=swap');

$Orange: hsl(26, 100%, 55%);
$PaleOrange: hsl(25, 100%, 94%);
$VeryDarkBlue: hsl(220, 13%, 13%);
$DarkGrayishBlue: hsl(219, 9%, 45%);
$GrayishBlue: hsl(220, 14%, 75%);
$LightGrayishBlue: hsl(223, 64%, 98%);
$White: white;
$Black: black;

@mixin flex-container($flexDirection: row, $justify: center, $align: center) {
    display: flex;
    justify-content: $justify;
    align-items: $align;
    flex-direction: $flexDirection;
}

@mixin btnMove {
    z-index: 20;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    background-color: #f0f1f2;
}

@mixin heading-font() {
    font-weight: 700;
    font-size: 4.2rem;
    color: $VeryDarkBlue;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}

html {
    font-size: 62.5%;

}

body {
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 400;
    line-height: 1;
    font-size: 1.6rem;
    min-height: 125;
    position: relative;
    z-index: -100;

}

</style>
