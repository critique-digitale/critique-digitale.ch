<script>

</script>

<slot></slot>

<style>
:global(a.lightbox.active:hover) {
    filter: none;
}
:global(a.lightbox.active img) {
    max-width: 100vw;
    width: 100vw;
    height: auto;
    margin-left: calc((100vw - var(--width-content) - 1rem)/2 * -1);
}
</style>