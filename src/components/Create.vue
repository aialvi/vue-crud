<template>
  <div class="container">
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="card">
              <div class="card-header">
                <h3>Add Post</h3>
              </div>
              <div class="card-body">
                <form v-on:submit.prevent="addItem">
                  <div class="form-group">
                    <label>Post Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="item.name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <select
                      v-model="selectedCategory"
                      v-on:change="getCategoryName($event)"
                      class="form-control form-control-sm"
                    >
                      <option value="CreateCategory"
                        >Create New Category</option
                      >
                      <option
                        v-for="category in categories"
                        :key="category.id"
                        :value="category.name"
                        >{{ category.name }}</option
                      >
                    </select>
                  </div>

                  

                  <br />

                  <div class="form-group">
                    <input
                      type="submit"
                      class="btn btn-primary"
                      value="Add Item"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="exampleModal2"
      tabindex="0"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="card">
                <div class="card-header">
                  <h3>Add Category</h3>
                </div>
                <div class="card-body">
                  <form v-on:submit.prevent="addCategory">
                    <div class="form-group">
                      <label>Category Name:</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="category.name"
                        required
                      />
                    </div>

                    <div class="form-group">
                      <input
                        type="submit"
                        class="btn btn-primary"
                        value="Add category"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save category</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      item: {},
      categories: {},
      selectedCategory: "",
      category: {},
    };
  },
  methods: {
    addItem() {
      let uri = "http://localhost:4000/items/add";
      this.axios.post(uri, this.item).then((response) => {
        console.log(response.data);
        alert("Post Added Succesfully");
      });
    },
    getCategories() {
      let uri = "http://localhost:4000/categories";
      this.axios.get(uri).then((response) => {
        this.categories = response.data;
        console.log(response);
      });
    },
    addCategory() {
      let uri = "http://localhost:4000/categories/add";
      this.axios.post(uri, this.category).then((response) => {
        console.log(response.data);
        alert("Category Added Succesfully");
        this.getCategories();
      });
    },
    getCategoryName(e) {
      let value = e.target.value;
      if (value == "CreateCategory") {

        console.log(value);
        window.$('#exampleModal2').modal('show')
      }
    },
  },
  mounted() {
    this.getCategories();
  },

};
</script>
