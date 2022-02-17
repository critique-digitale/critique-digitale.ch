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
:global(.float) {
    margin: auto;
    display: block;
}
@media (min-width: 500px) {
    :global(.float) {
        float: left;
        margin: 0 1em 1em 0;
    }
}
:global(table) {
    white-space: break-spaces;
}
:global(.first-center table thead th:first-child, table tr td:first-child) {
    text-align: center;
}
:global(.first-center table td, table th, table tr) {
    text-align: left;
}
</style>