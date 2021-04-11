<template>
<div>
    <GmapMap 
        :center="{lat: 48.05, lng :1.36}" 
        :zoom="5" 
        style="height:700px;width: 100%"
        map-type-id="terrain">
    </GmapMap>
</div>
</template>


<script>

export default {
    name: "gmaps",
}
</script>
