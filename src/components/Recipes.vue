<template>
  <div class="recipes">
    <img src="assets/fruit_plate.jpg" alt="fruit_plate" />
    <b-container fluid>
      <!-- User interface filters -->
      <b-row>
        <b-col lg="5" class="my-1">
          <b-form-group
            label="Sort"
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            label-for="sortBySelect"
            class="mb-0"
          >
            <b-input-group size="sm">
              <b-form-select v-model="sortBy" id="sortBySelect" :options="sortOptions" class="w-75">
                <template v-slot:first>
                  <option value>-- none --</option>
                </template>
              </b-form-select>
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col lg="5" class="my-1">
          <b-form-group
            label="Search"
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            label-for="initialSortSelect"
            class="mb-0"
          >
            <b-input-group size="sm">
              <b-form-input
                v-model="filter"
                type="search"
                id="filterInput"
                placeholder="Type to search"
              ></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Main table element -->
      <b-table
        show-empty
        small
        stacked="md"
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :filterIncludedFields="filterOn"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        @filtered="onFiltered"
      >
        <template v-slot:cell(name)="row">{{ row.value.first }} {{ row.value.last }}</template>

        <template v-slot:cell(actions)="row">
          <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">Detail</b-button>
        </template>

        <template v-slot:row-details="row">
          <b-card>
            <ul>
              <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
            </ul>
          </b-card>
        </template>
      </b-table>

      <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>

      <!-- Info modal -->
      <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
        <h4>{{ infoModal.content }}</h4>

        <h6>By: {{ infoModal.source }}</h6>
        <br />

        <img :src="infoModal.image" alt="meal" width="75%" />
        <br />
        <h6>Calories: {{ Math.round(infoModal.calories) }} kcal</h6>
        <h6>Food allergies:</h6>
        <li v-for="(item, index) in this.infoModal.cautions" v-bind:key="index">{{ item }}</li>
        <h6>
          Fat:
          {{ Math.round(this.infoModal.fat) }} g,
          Protein:
          {{ Math.round(this.infoModal.protein) }} g, Carbs: {{ Math.round(this.infoModal.carbs) }} g
        </h6>
        <h6>Ingredients:</h6>
        <li v-for="(item, index) in this.infoModal.ingredientLines" v-bind:key="index">{{ item }}</li>
        <b-button v-on:click="instructions">Full recipe & Instructions</b-button>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
import data from "../json/data.json";

export default {
  data() {
    return {
      items: Object.values(data).map(e => ({
        ...e,
        calories: Math.round(e.calories / e.yield)
      })),
      fields: [
        {
          key: "label",
          label: "Name",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "calories",
          label: "Calories",
          sortable: true,
          class: "text-center"
        },
        {
          key: "mealType",
          label: "Meal type",
          sortable: true,
          class: "text-center"
        },
        { key: "actions", label: "Actions" }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 20, 30, 40],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
        calories: ""
      }
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    info(item, index, button) {
      console.log(item);
      this.infoModal.content = item.label;
      this.infoModal.source = item.source;
      this.infoModal.calories = item.calories;
      this.infoModal.yield = item.yield;
      this.infoModal.image = item.image;
      this.infoModal.cautions = item.cautions;
      this.infoModal.fat = item.totalNutrients.FAT.quantity;
      this.infoModal.carbs = item.totalNutrients.CHOCDF.quantity;
      this.infoModal.protein = item.totalNutrients.PROCNT.quantity;
      this.infoModal.ingredientLines = item.ingredientLines;
      this.infoModal.url = item.url;

      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.source = "";
      this.infoModal.content = "";
      this.infoModal.image = "";
      this.infoModal.cautions = "";
      this.infoModal.fat = "";
      this.infoModal.carbs = "";
      this.infoModal.protein = "";
      this.infoModal.ingredientLines = "";
      this.infoModal.url = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    instructions() {
      window.open = this.infoModal.url;
    }
  }
};
</script>

<style>
.row {
  padding: 60px 0 60px 0 !important;
}

h6 {
  padding-top: 10px;
}

.btn.btn-primary {
  background-color: rgb(23, 201, 100) !important;
  border: none;
}
</style>