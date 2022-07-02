export const experiences = [
  {
    isCurrent: true,
    summary: "Full-stack developer working with Angular and Java. Working for the iShares platform",
    title: "Associate Software Developer",
    startDate: {
      month: 11,
      year: 2017,
    },
    company: {
      name: "BlackRock",
    },
  },
  {
    isCurrent: false,
    summary:
      "Full-stack developer working with Angular, Node and TypeScript. Working for the iShares platform. Emphasis on Dev-ops and developing the continous integration pipeline.",
    title: "Software Developer",
    endDate: {
      month: 11,
      year: 2017,
    },
    startDate: {
      month: 10,
      year: 2016,
    },
    company: {
      name: "Torch Markets",
    },
  },
  {
    isCurrent: false,
    summary:
      "Used ASP.NET MVC 5 to produce a diversity data collection tool for the future of British television.\n\nUsed AngularJS and C# best practices. Technologies used include JavaScript, ASP.NET MVC 5, SQL, Oracle, SASS, Bootstrap, Grunt.",
    title: "Software Developer",
    endDate: {
      month: 10,
      year: 2016,
    },
    startDate: {
      month: 3,
      year: 2015,
    },
    company: {
      name: "Soundmouse",
    },
  },
  {
    isCurrent: false,
    summary:
      "Develop web commerce platforms for constious high profile clients.\n\nCreated a log analysis web application with the Play Framework in Java, incorporating Test Driven Development. It asynchronously uploads and processes large (2 GB) log files, and outputs meaningful results in context with the problem. \n\nAnalysis  and  development  of  the payment system infrastructure and user accounts section to be used by several clients of the company such as Waitrose, Tally Weijl, DJ Sports, Debenhams, Ann Summers, John Lewis and others.\n\nTechnologies used include WebSphere Commerce, Java, JavaScript and JSP.",
    title: "Java Developer",
    endDate: {
      month: 10,
      year: 2014,
    },
    startDate: {
      month: 3,
      year: 2013,
    },
    company: {
      name: "Soundmouse",
    },
  },
];

export const education = [
  {
    degree: "Master of Science (MSc)",
    fieldOfStudy: "Computer Science",
    notes:
      "Exam Results: 1st Class with Distinction, Dissertation: 1st Class with Distinction\n\nRelevant Courses: Java and C# Programming, Software Engineering, Artificial Intelligence, \nComputational Photography, Algorithmics, Architecture and Hardware.\n\nCreated a Windows 8 game in JavaScript for the dissertation. \n\nCreated an award-winning 3D stereoscopic game in C# using XNA.",
    schoolName: "University College London",
    startDate: {
      year: 2012,
    },
    endDate: {
      year: 2013,
    },
  },
  {
    degree: "Bachelor of Engineering (BEng)",
    fieldOfStudy: "Material Science and Engineering",
    notes:
      "Exam Results: 2:1, Dissertation: 1st Class with Distinction\n\nRelevant courses: C Programming, Mathematics and Business for Engineers.",
    schoolName: "Imperial College London",
    startDate: {
      year: 2009,
    },
    endDate: {
      year: 2012,
    },
  },
];

export const skills = [
  {
    name: "Angular",
  },
  {
    name: "TypeScript",
  },
  {
    name: "JavaScript",
  },
  {
    name: "NodeJS",
  },
];

export const achievements = [
  {
    issuer: "Oracle",
    name: "Oracle Certified Expert",
  },
];

export const identificacion = [
   {
     id: "MAE-CMARG-2020-0099",
     fecha: "2022.02.18",
   }
];

export const solicitante = [
 {
   id: "C7CT8FGCH",
   nombre: "KAI MÜLLER",
 }
];

export const autorizacion = [
  {
    id: "PIB-SENESCTYT-2022-099",
    proyecto: "INVESTIGACIÓN DE DIVERSIDAD DE RANAS EN PELIGRO DE EXTINSIÓN EN LA CUENCA DEL CHACO",
    vigencia: "24 meses",
    patrocinador: "INABIO"
  }
];

export const responsables = [
  {
    id: "1950004109",
    nombre: "MONTAÑO OCAMPO DANING FERNANDO",
    pais: "Ecuador",
    transporta: "NO",
  },
  {
    id: "C7CT8FGCH",
    nombre: "KAI MÜLLER",
    pais: "Alemania",
    transporta: "NO",
  },
  {
    id: "C7C134M44",
    nombre: "DIETMAR QUANDT",
    pais: "Alemania",
    transporta: "NO",
  },
  {
    id: "1756861496",
    nombre: "PEÑUELA MORA MARIA CRISTINA",
    pais: "Ecuador",
    transporta: "SI",
  },
];

export const recursos = [
  {
    id: "1",
    scientificname: "Boa constrictor",
    },
  {
    id: "2",
    scientificname: "Cleistes tamboana",
  } 
];


export const recursosMuestras = [
  {
    id: "1",
    scientificname: "Boa constrictor",
    childNodes: 
    [
      {
        tipo: "MUESTRA",
        submuestra: "SANGRE", 
        descripcion: "orh+",
        cantidadSolicitada: 1
      },
      {
        tipo: "MUESTRA",
        submuestra: "ANCAS", 
        descripcion: "Dos ancas",
        cantidadSolicitada: 20,         
      }
    ]
    },
  {
    id: "2",
    scientificname: "Cleistes tamboana",
    childNodes: 
    [
      {
        tipo: "MUESTRA",
        submuestra: "RAIZ", 
        descripcion: "Raices",
        cantidadSolicitada: 50, 
      },
      {
        tipo: "MUESTRA",
        submuestra: "HOJAS", 
        descripcion: "Hojas",
        cantidadSolicitada: 20,        
      }
    ]
  } 
];


export const muestras = [
      {
        recursoid: "1",
        tipo: "MUESTRA",
        submuestra: "SANGRE", 
        descripcion: "orh+",
        cantidadSolicitada: 10, 
      },
      {
        recursoid: "1",
        tipo: "MUESTRA",
        submuestra: "ANCAS", 
        descripcion: "Dos ancas",
        cantidadSolicitada: 20, 
      },
      {
      recursoid: "2",
       tipo: "MUESTRA",
       submuestra: "RAIZ", 
       descripcion: "Raices",
       cantidadSolicitada: 50, 
     },
     {
       recursoid: "2",
       tipo: "MUESTRA",
       submuestra: "HOJAS", 
       descripcion: "Hojas",
       cantidadSolicitada: 20, 
     }
];

export const zonasUbicaciones = [
  {
    nombreProvincia: "LOJA",
    nombreAreaProtegida: "AMARCOS PÉREZ DE CASTILLA, PODOCARPUS, YACURI",
    nombreBosqueProtector: " "
  }
];

export const laborartoriosOrigen = [
  {
    nombre: "Centro de servicios ambientales y químicos CESAQ PUCE, Pontificia Universidad Católica del Ecuador"
  }
];

export const laboratoriosDestino = [ 
  { 
    nombre: "Laboratorio AMBIGEST gestión ambiental Cía Ltda."
  }
];