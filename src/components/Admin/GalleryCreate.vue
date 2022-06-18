<template>
    <section id="gallery-Create_Section">

        <div @dragover.prevent @drop.prevent>
            <label class="form-label" for="customFile">Default file input example</label>
            <input @change="upload" type="file" class="form-control" id="customFile" />
            <div class="box" @drop="upload"></div>
        </div>
    </section>
</template>

<script>
import { uploadImage } from "@/firebase.js";
export default {
    setup() {

        const upload = async (img) => {
            await uploadImage(img);
        };
        return upload
    }
}
</script>

<style lang="scss" scoped>
</style>