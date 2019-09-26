<template>
    <div class="background-component">
        	&copy; 2019 {{name}}. All rights reserved. 
    </div>
</template>

<script>
export default {
    props: ['name'],
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
.background-component{
    color: rgba(255, 255, 255, 0.548);
    background-color: #0e052e;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
}
</style>