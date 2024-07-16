const agentes = [
    {
      id: 1,
      photo:"https://i1.rgstatic.net/ii/profile.image/790922941956097-1565582132526_Q512/Laura-Anderson-15.jpg",
      firstName: "Laura",
      lastName: "Stern",
      email: "laura.stern@example.com"
      
    },
    
    /*
    {
      id: 2,
      photo:"https://media.bizj.us/view/img/2253091/evans*1200xx3744-3744-0-234.jpg",
      firstName: "María",
      lastName: "González",
      email: "maria.gonzalez@example.com"
    
    },

    */
    {
      id: 3,
      photo:"https://www.westwooddermatologygroup.com/storage/app/media/Physicians/Kaplan.jpg",
      firstName: "Ilene",
      lastName: "Richads",
      email: "ilene.richards@example.com"
      
    },
    {
      id: 4,
      photo:"https://i1.rgstatic.net/ii/profile.image/725132519673868-1549896473547_Q512/Laura-Patricia-Kaplan-2.jpg",
      firstName: "Ana",
      lastName: "Martínez",
      email: "ana.martinez@example.com"
      
    },
    {
      id: 5,
      photo:"https://i.pinimg.com/550x/c1/79/35/c179350795772e6cb21d32f480700213.jpg",
      firstName: "Luisa",
      lastName: "Burke",
      email: "luisa.burke@example.com"
      
    },
  ];

  //Fcion q devuelve el array completo
  export function getAgentes() {
    return agentes;
  }

  //Fcion. que devuelve un usuario de acuerdo al id
  export function getAgente(id) {
    return agentes.find((user)=> user.id === id);
  }

  //Trae todo pero "borra" el elemento de acuerdo al id
  export function setAgentes(id) {
    return agentes.filter((user)=> user.id !== id);
  }