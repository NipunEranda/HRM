<template>
    <br />
    <div class="custom-select mt-2" :tabindex="tabindex" @blur="open = false">
        <div class="selected" :class="{ open: open }" @click="open = !open">
            {{ options[selected] }}
        </div>
        <div class="items" :class="{ selectHide: !open }">
            <div class="item" :class="{ 'selected-item': selected == o }" v-for="(option, o) of options" :key="o" @click="
                selected = o;
            open = false;
            $emit('output', o);
            ">
                {{ option }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ["output"],
    props: {
        options: {
            type: Array,
            required: true,
        },
        selected: {
            type: Number,
            required: false,
            default: 0,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    data() {
        return {
            open: false,
        };
    },
    mounted() {
        this.$emit('output', this.selected);
    },
};
</script>

<style>
.custom-select {
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;
}

.custom-select .selected {
    background-color: var(--card-body-color);
    border-radius: 4px;
    border: 1px solid var(--searchBar-border-color);
    color: #fff;
    cursor: pointer;
    user-select: none;
    min-height: calc(1.5em + (0.5rem + 2px));
    padding: 0.25rem 0.5rem;
    color: var(--primary-text-color);
}

.custom-select .selected.open {
    /* border: 1px solid var(--primary); */
    box-shadow: 0 0 0 2px var(--primary-transparent) !important;
    border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
    position: absolute;
    content: "";
    top: 1rem;
    right: 1em;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: #fff transparent transparent transparent;
}

.custom-select .items {
    color: var(--primary-text-color);
    border-radius: 0px 0px 6px 6px;
    margin-top: 3px;
    overflow: hidden;
    position: absolute;
    background-color: var(--card-body-color);
    left: 0;
    right: 0;
    z-index: 1;
    max-height: 134px;
    overflow: scroll;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    overflow-x: hidden;
    color-scheme: var(--color-scheme);
    color-scheme: var(--color-scheme);
}

.custom-select .items .item {
    padding: 0.25rem 0.5rem;
    border-bottom: 1px solid var(--searchBar-border-color);
}

.custom-select .items div {
    color: var(--primary-text-color);
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
}

.custom-select .items div:hover {
    background-color: var(--primary);
}

.selectHide {
    display: none;
}

.selected-item{
    background-color: var(--primary);
}
</style>