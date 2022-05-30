<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>About</h6>
          <p class="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            maiores atque. Commodi repellendus nisi aliquid similique quaerat
            sapiente magnam, eaque, inventore eos itaque exercitationem
            consequatur explicabo. Quaerat deserunt vitae ex?
          </p>
        </div>

        <div class="col-xs-6 col-md-3"></div>

        <div class="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul class="footer-links">
            <li>
              <router-link to="/techStartUp">Start Ups</router-link>
            </li>
            <li>
              <router-link to="/events">Events</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact Us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/gallery">Gallery</router-link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p class="copyright-text">
            Copyright &copy; 2022 All Rights Reserved by
            <a href="#">TechHubSyd</a>.
          </p>
        </div>

        <div class="col-12 pt-3 d-flex justify-content-center">
          <ul class="social-icons">
            <li>
              <a class="facebook" href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
              <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
            </li>
            <li>
              <a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a>
            </li>
            <li>
              <a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.site-footer {
  background-color: rgba($primary-color, 1);
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: $quaternary-color;

  a {
    color: $quaternary-color;
    font-size: 1.3rem;
    font-weight: bold;

  }

  .site-footer hr {
    border-top-color: #bbb;
    opacity: 0.5;

    .site-footer hr.small {
      margin: 20px 0;
    }
  }
}

.site-footer h6 {
  color: $quaternary-color;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
}

.site-footer a:hover {
  color: $primary-color;
  text-decoration: none;
}

.footer-links {
  padding-left: 0;
  list-style: none;
}

.footer-links a {
  color: $quaternary-color;

}

.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: $primary-color;
  text-decoration: none;
}

.footer-links.inline li {
  display: inline-block;
}

.site-footer .social-icons {
  text-align: right;
}

.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: $secondary-color;
}

.copyright-text {
  margin: 0;
}

@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}

@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }

  .site-footer .copyright-text,
  .site-footer .social-icons {
    text-align: center;
  }
}

.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
}

.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: $quaternary-color;
  font-weight: 700;
  font-size: 13px;
}

.social-icons a {
  background-color: $quaternary-color;
  color: $quaternary-color;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: $primary-color;
}

.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}

.social-icons a.facebook:hover {
  background-color: #3b5998;
}

.social-icons a.twitter:hover {
  background-color: #00aced;
}

.social-icons a.linkedin:hover {
  background-color: #007bb6;
}

.social-icons a.dribbble:hover {
  background-color: #ea4c89;
}

@media (max-width: 767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}
</style>