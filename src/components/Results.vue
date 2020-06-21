<template>
    <div class="results">
        results
    
    
        <li v-for="(item, index) in obj" v-bind:key="index">
            {{ item.breakfast }}
        </li>
        
        <router-view></router-view>
    </div>
</template>

<script>
    import createMenu from '../vypocet';
    
    export default {
        name: "Results",
        data: obj,
        mounted() {}
    };
</script>
