<template>
  <!-- Footer -->
  <b-footer color="success" class="page-footer font-small pt-0">
    <b-container class="mt-5 mb-4 text-center text-md-left">
      <b-row class="mt-3 justify-content-around">
        <b-col md="3" class="mb-4">
          <h6 class="text-uppercase font-weight-bold">
            <strong>What's for dinner</strong>
          </h6>
          <hr
            class="gray accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px"
          />
          <p>
            We are here to help you with your meal planning. If you have any
            questions about our project, please ask us.
          </p>
        </b-col>

        <b-col md="3" class="mb-4">
          <h6 class="text-uppercase font-weight-bold">
            <strong>Contact</strong>
          </h6>
          <hr
            class="gray accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px"
          />
          <p>
            Prague, Czech Republic <br />
            info@wfd.com<br />
            +420 789 234 00
          </p>
        </b-col>
      </b-row>
    </b-container>
    <div
      class="footer-copyright text-center py-3"
      style="backgroundColor: rgb(23, 201, 100)"
    >
      <b-container fluid>
        &copy; 2020 Copyright: Maru & Lucka
      </b-container>
    </div>
  </b-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="css"></style>
