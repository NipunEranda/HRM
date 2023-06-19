<template>
    <div class="form-overlay">
        <div class="form">
            Staff Form
        </div>
    </div>
</template>

<style>
.form-overlay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: var(--form-overlay-background);
}
.form {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    margin: 15px;
    margin-top: 70px;
    min-height: 20vh;
    background-color: var(--white);
}
</style>