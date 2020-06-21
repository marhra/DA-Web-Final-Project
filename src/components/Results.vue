<template>
    <div class="results">
        <div class="mb-5" v-for="(item, index) in items" v-bind:key="index">
            <h2>{{ item.day }}</h2>
            <div>
                <h4>{{item.breakfast.label}}</h4>
                <p><small>{{ Math.round(item.breakfast.caloriesPerPortion) }} kCal</small></p>
    
                <ul>
                    <li v-for="(ingredient, index) in item.breakfast.ingredients" v-bind:key="index">
                        <strong>{{ingredient.text}}</strong>
                    </li>
                </ul>
                
                <h4>{{item.lunch.label}}</h4>
                <p><small>{{ Math.round(item.lunch.caloriesPerPortion) }} kCal</small></p>
                <ul>
                    <li v-for="(ingredient, index) in item.lunch.ingredients" v-bind:key="index">
                        <strong>{{ingredient.text}}</strong>
                    </li>
                </ul>
                
                <h4>{{item.dinner.label}}</h4>
                <p><small>{{ Math.round(item.dinner.caloriesPerPortion) }} kCal</small></p>
                <ul>
                    <li v-for="(ingredient, index) in item.dinner.ingredients" v-bind:key="index">
                        <strong>{{ingredient.text}}</strong>
                    </li>
                </ul>
            </div>
        </div>
        
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Results",
        data: function() {
            return {
                items: JSON.parse(localStorage.getItem('currentMenu'))
            }
        }
    };
</script>
