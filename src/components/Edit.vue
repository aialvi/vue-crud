<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Edit Post</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateItem">
          <div class="form-group">
            <label>Post Name:</label>
            <input type="text" class="form-control" v-model="item.name" />
          </div>
          <div class="form-group">
            <label>Post Category:</label>
            <input type="text" class="form-control" v-model="item.category" />
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Update Post" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: {}
    };
  },

  created: function() {
    this.getItem();
  },

  methods: {
    getItem() {
      let uri = "http://localhost:4000/items/edit/" + this.$route.params.id;
      this.axios.get(uri).then(response => {
        this.item = response.data;
      });
    },

    updateItem() {
      console.log(this.$route.params.id);
      let uri = "http://localhost:4000/items/update/" + this.$route.params.id;
      this.axios.post(uri, this.item).then(response => {
        this.$router.push({ name: "Index" });
        console.log(response);
      });
    }
  }
};
</script>
