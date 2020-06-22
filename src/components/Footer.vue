<template>
  <div class="footer">
    <!--Footer-->
    <footer class="page-footer text-center text-md-left pt-4">
      <!--Footer Links-->
      <div class="container-fluid">
        <div class="row">
          <!--First column-->
          <div class="col-md-4">
            <h5 class="text-uppercase font-weight-bold mb-4">What's for dinner</h5>
            <p>
              We are here to help you with your meal planning. If you have any
              questions about our project, please ask us.
            </p>
          </div>

          <!--Second column-->
          <div class="col-md-4">
            <h5 class="text-uppercase font-weight-bold mb-4">CONTACTS</h5>
            <ul class="list-unstyled">
              <li>Prague, Czech Republic</li>
              <li>info@wfd.com</li>
              <li>+420 789 234 000</li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <!--Copyright-->
      <div class="footer-copyright py-3 text-center">
        <div class="container-fluid">© 2018 Copyright: Maru & Lucka</div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="css">
.container-fluid {
  padding: 0;
}
.row {
  padding: 60px 80px 0px 40px;
  justify-content: space-around;
}
</style>
