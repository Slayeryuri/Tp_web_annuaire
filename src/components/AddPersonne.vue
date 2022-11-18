<template>
  <div class="submit-form">

    <div v-if="!submitted">
     

      <h2>Ajouter une nouvelle Personne</h2>
      <div class="form-group">
         <label for="name"> ID </label>  
         <input type="number" class="form-control" id="id" v-model="personne.id">
      </div>
      <div class="form-group">
         <label for="name"> Nom </label>  
         <input type="text" class="form-control" id="name" v-model="personne.name">
      </div>
      <div class="form-group">
         <label for="name"> Prénom </label>  
         <input type="text" class="form-control" id="surname" v-model="personne.surname">
      </div>
      <div class="form-group">
         <label for="name"> Téléphone </label>  
         <input type="number" class="form-control" id="phone" v-model="personne.phone">
      </div>
      <div class="form-group">
         <label for="name"> Ville </label>  
         <input type="text" class="form-control" id="city" v-model="personne.city">
      </div>


      <button @click="creerPersonne" class="btn btn-success">Ajouter</button>
      <p>{{ message }}</p>
    </div>
        
    <div v-else>
      <h4>Personne ajoutée avec succès!</h4>
      <button class="btn btn-success" @click="resetForm">Ajouter une nouvelle personne</button>
      <a href="/personnes/" class="badge badge-warning">Revenir à l'annuaire général</a>
    </div>   
  </div>
</template>

<script>
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "add-personne",
  data() {
    return {
      personne: {
        id: null,
        name: "",
        surname: "",
        phone: "",
        city: ""
      },
      submitted: false,
      message: "",
    };
  },
  methods: {
    creerPersonne() {
      var data = {
        id: this.personne.id,
        name: this.personne.name,
        surname: this.personne.surname,
        phone: this.personne.phone,
        city: this.personne.city,
      };

      // A COMPLETER
      PersonneDataService.create(data)
      .then(response => {
          console.log(response.data);
          console.log("oui");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
          console.log("non");
          this.message = 'Id déja existant!';
       
      });
    },
    
    resetForm() {
      this.submitted = false;
      this.personne = {};
    }
  }
};
</script>

<style>
.submit-form {
  /*max-width: 300px;*/
  max-width: 400px;
  margin: auto;
}
</style>
