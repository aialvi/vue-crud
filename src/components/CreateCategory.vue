<template>
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
            <input type="submit" class="btn btn-primary" value="Add category" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      category: {}
    };
  },
  methods: {
    addCategory() {
      let uri = "http://localhost:4000/categories/add";
      this.axios.post(uri, this.category).then(response => {
        console.log(response.data);
        alert("Category Added Succesfully");
      });
    }
  }
};
</script>
