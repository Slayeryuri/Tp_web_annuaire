<template>

  <div v-if="currentPersonne">
    <div class="submit-form">
      <H4>
   <p class="text-success"> #{{ currentPersonne.id }} </p>
    {{ currentPersonne.name }}
    {{ currentPersonne.surname }}
    {{ currentPersonne.phone }}
    {{ currentPersonne.city }}
      </H4>
    <div class="form-group">
       <label for="name"> Nom </label>  
       <input type="text" class="form-control" id="name" v-model="currentPersonne.name">
    </div>
    <div class="form-group">
       <label for="name"> Prénom </label>  
       <input type="text" class="form-control" id="surname" v-model="currentPersonne.surname">
    </div>
    <div class="form-group">
       <label for="name"> Téléphone </label>  
       <input type="number" class="form-control" id="phone" v-model="currentPersonne.phone">
    </div>
    <div class="form-group">
       <label for="name"> Ville </label>  
       <input type="text" class="form-control" id="city" v-model="currentPersonne.city">
    </div>

<!-- <div class="form-group">
       <label for="name"> Ville </label>  
       <input type="text" class="form-control" id="city" v-model="">
     </div>
-->
    <button class="badge badge-danger mr-2"
      @click="deletePersonne">
      Supprimer
    </button> 
    <button type="submit" class="badge badge-success"
      @click="updatePersonne">
      Modifier
    </button>
  </div>
  </div>  

    <p>{{ message }}</p>


    
</template>

<script>
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "personne",
  data() {
    return {
      currentPersonne: null,
      message: ''
    };
  },
  methods: {
    getPersonne(id) {
       PersonneDataService.get(id)
        .then(response => {
          this.currentPersonne = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      
    },

    updatePersonne() {
      PersonneDataService.update(this.currentPersonne)
      .then(response => {
          this.currentPersonne = response.data;
          console.log(response.data);
          this.message = 'Personne modifiée avec succès!';
        })
        .catch(e => {console.log(e);}
          );
    },

    deletePersonne() {
      PersonneDataService.delete(this.currentPersonne.id)
        .then(response => {
          this.currentPersonne = response.data;
          console.log(response.data);
          this.$router.push("/personnes");
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getPersonne(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
