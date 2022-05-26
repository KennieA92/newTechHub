<template>
    <div class="contact-us d-flex justify-content-center col-12">
        <ContactUsComponent class="col-11 col-md-8" />
    </div>
</template>

<script>
import ContactUsComponent from '@/components/ContactUs/ContactUsComponent.vue';
export default {
    components: { ContactUsComponent }
}
</script>

<style lang="scss" scoped>
.contact-us {
    min-height: 100vh;
    padding-top: 80px;
    background: linear-gradient(to bottom,
            $secondary-color,
            40%,
            $primary-color 100%);
}
</style>