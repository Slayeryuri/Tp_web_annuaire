  <template>
   <div class="container bg-secondary">
    <!--
    <ul>
      <li class=""
        :class="{ active: id == currentIndex }"
        v-for="(personne, id) in personnes"
        :key="id"
        @click="setActivePersonne(personne, id)"
      >
        {{ personne.surname }} {{ personne.name }} 
      </li>
    </ul>
  -->
</div>
  <div class="dropdown-menu d-block position-static pt-0 mx-0 rounded-3 shadow overflow-hidden w-280px">    
    <ul class="list-unstyled mb-0">   

        <li><a class="dropdown-item d-flex align-items-center gap-2 py-2"
        :class="{ active: id == currentIndex }"
        v-for="(personne, id) in personnes"
        :key="id"
        @click="setActivePersonne(personne, id)">
      
        {{ personne.surname }} {{ personne.name }} 
      </a></li>
    </ul>
  </div>


    <div v-if="currentPersonne">
      {{ currentPersonne.id }}
      {{ currentPersonne.name }}
      {{ currentPersonne.surname }}
      {{ currentPersonne.phone }}
      {{ currentPersonne.city }}
      

      <router-link :to="'/personnes/' + currentPersonne.id" class="badge badge-warning">Modifier</router-link>
    </div>
    <div v-else>
      <br />
      <p>Cliquez sur une des personnes pour afficher les détails.</p>
    </div>

  </template>

  <script>
  import PersonneDataService from "../services/PersonneDataService";

  export default {
    name: "personnes",
    data() {
      return {
        personnes: [],
        currentPersonne: null,
        currentIndex: -1,
      };
    },
    methods: {
      getPersonnes() {
        PersonneDataService.getAll()
          .then(response => {
            this.personnes = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },

      setActivePersonne(personne, index) {
        this.currentPersonne = personne;
        this.currentIndex = personne ? index : -1;
      },
    },
    mounted() {
      this.getPersonnes();
    }
  };
  </script>
