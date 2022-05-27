<template>
    <section id="subscription-section">
        <div id="mc_embed_signup" class="d-flex col-12 justify-content-center">
            <form action="https://gmail.us14.list-manage.com/subscribe/post?u=e6613a5cf963b9588e538fb6f&id=cafafab6dc"
                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                class="validate d-flex col-10 col-sm-8 pt-3 justify-content-center align-items-center flex-column"
                target="_blank" novalidate>
                <h2 class="pt-3">Subscribe for News!</h2>
                <div class="d-flex col-10 justify-content-md-start"><img class="subscription-logo col-2 col-md-1"
                        src="@/assets/logo.svg" alt="">
                </div>
                <div class="subscription-container col-11 d-flex flex-column align-items-center justify-content-center">


                    <div class="col-11">
                        <label for="mce-FNAME">First Name</label>
                        <input type="text" name="FNAME" id="mce-FNAME" placeholder="Write your name">
                    </div>
                    <div class="col-11">
                        <label for="mce-EMAIL">Email Address</label>
                        <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="Write your email">
                    </div>
                    <div><input type="submit" value="SUBSCRIBE" name="subscribe" id="mc-embedded-subscribe"
                            class="button">
                    </div>
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
#mc_embed_signup {
    margin-top: 10vh;
    padding-bottom: 5vh;

    #mc-embedded-subscribe-form {
        padding: 0;
        background: linear-gradient(to bottom right, $primary-color 0%, $primary-color 50%, $secondary-color 50%, $secondary-color 100%);
        padding-bottom: 6vh;

        .subscription-logo {
            margin-bottom: 1.2vw;
            height: 100%;
        }

        .subscription-container {
            padding: 2vw 0;



            background: rgba(black, 0.3);
            backdrop-filter: blur(10px);

            input[type=text],
            input[type=email] {

                text-align: center;
                background: rgba($quaternary-color, 0.8);

                &:focus {
                    outline: 3px solid $tertiary-color;
                    border: none;
                }

            }

        }

        label {
            display: block;
            font-weight: bold;
            margin-bottom: 0.5em;
        }

        .label-normal {
            font-weight: normal;
        }

        .pattern {
            color: #808080;
            font-size: 0.8em;
            font-weight: normal;
        }

        .supports-color .color,
        .supports-date .date,
        .supports-time .time,
        .supports-month .mont {
            display: none;
        }

        input,
        select {
            display: inline-block;
            font-size: 1em;
            margin-bottom: 1em;
            padding: 0.4em 0.6em;
            width: 100%;
        }

        [type="checkbox"],
        [type="radio"] {
            margin-bottom: 0.5em;
            width: auto;
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

        .button:active,
        .button:focus,
        .button:hover {
            background-color: #005580;
            border-color: #005580;
            color: #ffffff;
            text-decoration: none;
        }

        .button:active {
            box-shadow: inset 0 0.15625em 0.25em rgba(0, 0, 0, 0.15), 0 1px 0.15625em rgba(0, 0, 0, 0.05);
        }
    }
}
</style>