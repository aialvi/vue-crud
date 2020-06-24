<template>
  <div>
      <br>
    <h4>All Categories</h4>
    <br>

    <table class="table table-hover">
      <thead>
        <tr>
          
          
         
        </tr>
      </thead>

      <tbody>
        <tr v-for="category in categories" :key="category._id">
          <td>{{ category.name }}</td>
        
        
        </tr>
      </tbody>
    </table>
    <Create />
  </div>
</template>

<script>
import Create from "./Create";

export default {
  components: {
    Create,
  },
  data() {
    return {
      categories: [],
    };
  },

  created: function() {
    this.fetchCategories();
  },

  methods: {
    fetchCategories() {
      let uri = "http://localhost:4000/categories";
      this.axios.get(uri).then((response) => {
        this.categories = response.data;
      });
    }
  }
};
</script>
