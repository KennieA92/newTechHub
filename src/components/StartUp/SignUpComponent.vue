<template>
    <section id="startup-signup-section ">
        <div class="main-container d-flex flex-wrap col-12 justify-content-center">
            <h1 class="col-12 py-3">Contact Us</h1>

            <form action="submit" class="contact-form d-flex col-10 col-md-6 justify-content-center flex-wrap">
                <div class="content-container d-flex flex-column col-10 col-md-10">
                    <label class="align-self-start " for="Email">Email Adress</label>
                    <input class="my-1 p-2" type="email" id="Email" name="Email" placeholder="Email Adress" required>
                    <label class="align-self-start" for="Name">Name</label>
                    <input class="my-1 p-2" type="text" id="Name" name="Name" placeholder="Name" required>
                    <p class="align-self-start pt-4">For Startups</p>
                    <div class="d-flex align-self-center justify-content-between col-12 flex-wrap">
                        <div class="d-flex col-6 align-items-center my-2">
                            <input type="radio" id="Saas" name="startup" value="SaaS" required>
                            <label class="px-2" for="Saas">SaaS</label>
                        </div>
                        <div class="d-flex col-6 align-items-center my-2">
                            <input type="radio" id="Mobile" name="startup" value="Mobile" required>
                            <label class="px-2" for="Mobile">Mobile App</label>
                        </div>
                        <div class="d-flex col-6 align-items-center my-2">
                            <input type="radio" id="AI/AR/VR" name="startup" value="AI/AR/VR" required>
                            <label class="px-2" for="AI/AR/VR">AI/AR/VR</label>
                        </div>
                        <div class="d-flex col-6 align-items-center my-2">
                            <input type="radio" id="Other" name="startup" value="Other" required>
                            <label class="px-2" for="Other">Other</label>
                        </div>
                    </div>
                </div>
                <div><input type="submit" value="Subscribe" name="subscribe" class="button">
                </div>

            </form>
        </div>
    </section>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main-container {
    .contact-form {
        padding: 5vh 0;
        margin-bottom: 5vh;
        background: rgba(black, 0.4);
        border-radius: 25px;
        backdrop-filter: blur(10px);

        p {
            margin-bottom: 0px;
            font-weight: bold;
        }

        .button {
            width: 145px;
            min-height: 45px;
            background-color: $tertiary-color;
            color: $quaternary-color;
            border-style: none;
            border-radius: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
        }

        .content-container {


            input[type="radio"] {
                width: 32px;
                height: 32px;

                @media only screen and (max-width: 600px) {

                    width: 36px;
                    height: 36px;

                }
            }



            label {
                font-size: 1rem;
                font-weight: bold;
            }
        }
    }
}
</style>