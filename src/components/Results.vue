<template>
    <div class="results">
        <div class="mb-5" v-for="(item, index) in items" v-bind:key="index">
            <h2>{{ item.day }}</h2>
            <div>
                <h4>{{item.breakfast.label}}</h4>
                <p><small>{{ Math.round(item.breakfast.caloriesPerPortion) }} kCal</small></p>
                
                <h4>{{item.lunch.label}}</h4>
                <p><small>{{ Math.round(item.lunch.caloriesPerPortion) }} kCal</small></p>
                
                <h4>{{item.dinner.label}}</h4>
                <p><small>{{ Math.round(item.dinner.caloriesPerPortion) }} kCal</small></p>
            </div>
        </div>
        
        <router-view></router-view>
    </div>
</template>

<script>
    import createMenu from '../vypocet';
    
    let obj = [];
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    for (let i = 0; i < 7; i++) {
        console.log(i, createMenu());
        let item = {
            day: days[i],
            breakfast: createMenu().breakfast,
            lunch: createMenu().lunch,
            dinner: createMenu().dinner
        };
        
        obj.push(item);
    }
    
    export default {
        name: "Results",
        data: function() {
            return {
                items: obj
            }
        }
    };
</script>
