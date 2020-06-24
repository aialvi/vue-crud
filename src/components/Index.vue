<template>
  <div>
    <h1>Posts</h1>

    <table class="table table-hover">
      <thead>
        <tr>
          <td>Post Name</td>
          <td>Post Category</td>
          <td>Edit</td>
          <td>Delete</td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Add Post
            </button>
          </td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items" :key="item._id">
          <td>{{ item.name }}</td>
          <td>{{ item.category }}</td>
          <td>
            <router-link
              :to="{ name: 'Edit', params: { id: item._id } }"
              class="btn btn-primary"
              >Edit</router-link
            >
          </td>
          <td>
            <button class="btn btn-danger" v-on:click="deleteItem(item._id)">
              Delete
            </button>
          </td>
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
      items: [],
    };
  },

  created: function() {
    this.fetchItems();
  },

  methods: {
    fetchItems() {
      let uri = "http://localhost:4000/items";
      this.axios.get(uri).then((response) => {
        this.items = response.data;
      });
    },
    deleteItem(id) {
      let uri = "http://localhost:4000/items/delete/" + id;
      this.items.splice(id, 1);
      this.axios.get(uri);
    },
  },
};
</script>
