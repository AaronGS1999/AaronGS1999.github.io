/* ============================================================================
   CONTENIDO DE LA WEB — Aaron Gálvez Salido
   ----------------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar para actualizar la web.
   - Los textos traducibles se escriben así:  { es: "Texto", en: "Text" }
     (si pones un texto simple "Así", se muestra igual en ambos idiomas).
   - Para añadir algo, copia un bloque { ... } de la lista y cambia los datos.
   - El orden no importa en publicaciones, congresos y trayectoria: se
     ordenan solos por fecha (lo más reciente arriba).
   ========================================================================== */

window.SITE = {

  /* ───────────────────────── Perfil ───────────────────────── */
  profile: {
    name: "Aaron Gálvez Salido",
    shortName: "Aaron Gálvez",
    initials: "AG",
    photo: "assets/img/foto.jpg",            // si no existe, se muestran las iniciales
    role: {
      es: "Investigador predoctoral en genómica evolutiva de plantas",
      en: "PhD researcher in plant evolutionary genomics"
    },
    affiliation: {
      es: "Universidad de Almería · Grupo BIO-359 PlantEVOLGEN",
      en: "University of Almería · BIO-359 PlantEVOLGEN group"
    },
    location: { es: "Almería, España", en: "Almería, Spain" },
    bio: {
      es: "Soy biólogo y bioinformático. Me dedico al ensamblaje y la anotación de genomas, así como al análisis de genómica comparada. Me interesa hacer biología aplicando herramientas de computación avanzada.",
      en: "I am a biologist and bioinformatician. I work on genome assembly and annotation, as well as comparative genomics analysis. I am interested in doing biology with advanced computational tools."
    },
    interests: [
      { es: "Ensamblaje y anotación de genomas", en: "Genome assembly & annotation" },
      { es: "Genómica comparada", en: "Comparative genomics" },
      { es: "Genómica de poblaciones", en: "Population genomics" },
      { es: "Genomas organulares y NUPTs", en: "Organellar genomes & NUPTs" },
      { es: "Elementos repetitivos", en: "Repetitive elements" },
      { es: "Aprendizaje automático", en: "Machine learning" },
      { es: "Docencia de la genética", en: "Genetics education" }
    ],
    email: "ags408@ual.es",
    cv: null,  // para mostrar un botón de descarga del CV, pon aquí la ruta del PDF, p. ej. "assets/cv/CV.pdf"
    links: [
      { type: "orcid",    label: "ORCID",    url: "https://orcid.org/0000-0002-1440-8862" },
      { type: "github",   label: "GitHub",   url: "https://github.com/AaronGS1999" },
      { type: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/aaron-g%C3%A1lvez-salido-517474168" }
      // Añade cuando quieras, por ejemplo:
      // { type: "scholar", label: "Google Scholar", url: "https://scholar.google.com/citations?user=XXXX" },
      // { type: "researchgate", label: "ResearchGate", url: "https://www.researchgate.net/profile/XXXX" },
    ]
  },

  /* ───────────────────────── Publicaciones ─────────────────────────
     type: "article" | "review" | "teaching"
     Tu nombre se resalta automáticamente en la lista de autores.        */
  publications: [
    {
      year: 2026,
      title: "Analysis of Biological Images and Quantitative Monitoring Using Deep Learning and Computer Vision",
      authors: "Gálvez-Salido A, Robles F, Gonçalves RJ, de la Herrán R, Ruiz Rejón C, Navajas-Pérez R",
      journal: "Journal of Imaging",
      details: "12(2): 88",
      type: "review",
      openAccess: true,
      doi: "10.3390/jimaging12020088",
      tags: ["Deep learning", "Computer vision"]
    },
    {
      year: 2026,
      title: "Nuclear DNA of plastid origin (NUPTs), neglected driver of genome variation and evolutionary innovation",
      authors: "Carretero-Paulet L, Marczuk-Rojas JP, Gálvez-Salido A",
      journal: "The Plant Journal",
      details: "125(3)",
      type: "review",
      url: "https://scholar.google.com/scholar?q=%22Nuclear+DNA+of+plastid+origin+(NUPTs)%2C+neglected+driver+of+genome+variation%22",
      tags: ["NUPTs", "Genome evolution"]
    },
    {
      year: 2024,
      title: "Automatic counting and identification of two Drosophila melanogaster (Diptera: Drosophilidae) morphs with image-recognition artificial intelligence",
      authors: "Gálvez-Salido A, de la Herrán R, Robles F, Ruiz Rejón C, Navajas-Pérez R",
      journal: "The Canadian Entomologist",
      details: "156: e40",
      type: "article",
      doi: "10.4039/tce.2024.36",
      code: "https://github.com/AaronGS1999/Drosophila_Tensorflow",
      tags: ["TensorFlow", "Object detection"]
    },
    {
      year: 2024,
      title: "The genomic study of repetitive elements in Solea senegalensis reveals multiple impacts of transposable elements in the evolution and architecture of Pleuronectiformes chromosomes",
      authors: "Cross I, Rodríguez ME, Portela-Bens S, Merlo MA, Gálvez-Salido A, Navajas-Pérez R, Rebordinos L",
      journal: "Frontiers in Marine Science",
      details: "11: 1359531",
      type: "article",
      openAccess: true,
      doi: "10.3389/fmars.2024.1359531",
      tags: ["Transposable elements", "Q1"]
    },
    {
      year: 2022,
      title: "Using Excel Mapper to Design Chromosome Idiograms",
      authors: "Gálvez-Salido A, Navajas-Pérez R",
      journal: "The American Biology Teacher",
      details: "84(7): 396–398",
      type: "teaching",
      doi: "10.1525/abt.2022.84.7.396",
      tags: ["Education"]
    },
    {
      year: 2022,
      title: "Una Calculadora de Genes para enseñar mendelismo, interacciones génicas y ligamiento",
      authors: "Gálvez-Salido A, Navajas-Pérez R",
      journal: "Didáctica de las Ciencias Experimentales y Sociales",
      details: "42: 99–118",
      type: "teaching",
      openAccess: true,
      url: "https://turia.uv.es/index.php/dces/article/view/21008",
      tags: ["Education"]
    }
  ],

  /* ───────────────────────── Congresos ───────────────────────── */
  conferences: [
    {
      date: "2026-07-01",
      title: "Uncovering plastid-mitochondria DNA exchange and genome rearrangements in two economically important Moringa species (Moringaceae)",
      authors: "Gálvez-Salido A, Contreras-Saavedra P, Martínez-Padilla C, Ríos-Bravo A, Kassa MT, Olson ME, Odee DW, Carretero-Paulet L",
      event: { es: "XVIII Meeting of Plant Molecular Biology · Póster S6.P16", en: "XVIII Meeting of Plant Molecular Biology · Poster S6.P16" },
      place: { es: "Bilbao, España", en: "Bilbao, Spain" }
    },
    {
      date: "2025-11-13",
      title: "Characterisation of Moringa stenopetala organellar genomes",
      authors: "Gálvez-Salido A, Contreras Saavedra P, Martínez Padilla C, Ríos Bravo A, Regalado González JJ, Carretero-Paulet L",
      event: "XIV Simposio de Investigación en Ciencias Experimentales",
      place: "Almería, España"
    },
    {
      date: "2025-06-04",
      title: "An experimental comparison of Bayesian Network classifiers for duplicability detection",
      authors: "Sáez Ruiz AT, Maldonado AD, Carretero-Paulet L, Gálvez-Salido A, Rumí R",
      event: "13th Workshop on Uncertainty Processing (WUPES '25)",
      place: "Třešť, Czech Republic"
    },
    {
      date: "2023-07-18",
      title: "Caracterización de las regiones centroméricas del lenguado senegalés (Solea senegalensis, Kaup 1858)",
      authors: "Gálvez-Salido A, Jiménez C, Manzanares García I, Zapata M, de la Herrán R, Robles F, Ruiz Rejón C, Navajas-Pérez R",
      event: "Congreso Estatal de Estudiantes de Biociencias (CEEBI)",
      place: "Granada, España"
    },
    {
      date: "2023-05-21",
      title: "Divergence and genomic evolution of repetitive elements in the sole Solea senegalensis",
      authors: "Cross I, Portela-Bens S, Merlo MA, Navajas-Pérez R, Rodríguez ME, Gálvez-Salido A, Arias-Pérez A, Centeno-Cuadros A, Robles F, Ruiz-Rejón C, Rebordinos L",
      event: "XLIII Congreso de la Sociedad Española de Genética (SEG)",
      place: "Valencia, España"
    }
  ],

  /* ───────────────────────── Aplicaciones y software ─────────────────────────
     icon: "map" | "ai" | "cell" | "dna" | "calc" | "chromosome" | "code"
     color: cualquier color CSS para el icono                                    */
  software: [
    {
      name: "AlgarroMap",
      icon: "map", color: "#34c759",
      year: 2025,
      description: {
        es: "Mapa de los algarrobos (Ceratonia siliqua) muestreados por el grupo PlantEVOLGEN para el proyecto de secuenciación, con búsqueda, filtros por origen y una ficha por árbol.",
        en: "Map of the carob trees (Ceratonia siliqua) sampled by the PlantEVOLGEN group for the sequencing project, with search, filters by origin and a data sheet per tree."
      },
      stack: ["JavaScript", "Leaflet", "GitHub Pages"],
      demo: "https://aarongs1999.github.io/AlgarroMapv2/",
      repo: "https://github.com/AaronGS1999/AlgarroMapv2"
    },
    {
      name: "Drosophila & TensorFlow",
      icon: "ai", color: "#ff9f0a",
      year: 2024,
      description: {
        es: "Pasos y scripts para entrenar un modelo de detección que cuenta e identifica moscas silvestres y mutantes white en fotografías. Los cuadernos de Colab sirven para entrenar el modelo y procesar imágenes.",
        en: "Steps and scripts to train a detection model that counts and identifies wild-type and white-mutant flies in photographs. The Colab notebooks train the model and process images."
      },
      stack: ["Python", "TensorFlow Lite", "EfficientDet", "Colab"],
      repo: "https://github.com/AaronGS1999/Drosophila_Tensorflow",
      extra: [
        { label: { es: "Colab · entrenamiento", en: "Colab · training" }, url: "https://colab.research.google.com/drive/1SdoGigd8u9fq0PAgp6AqXftFHUAuaNqb?usp=sharing" },
        { label: { es: "Colab · procesado", en: "Colab · processing" }, url: "https://colab.research.google.com/drive/1yYFuL3nnxHVXfjSvsRz-pFrDTsFPO2Y7?usp=sharing" }
      ]
    },
    {
      name: { es: "Calculadora de potencial de membrana", en: "Membrane potential calculator" },
      icon: "cell", color: "#5e5ce6",
      year: 2024,
      description: {
        es: "Programa para Windows que calcula el potencial de equilibrio de un ion, dibuja su gráfica y calcula el potencial de membrana en reposo.",
        en: "Windows program that calculates the equilibrium potential of an ion, plots it and calculates the resting membrane potential."
      },
      stack: ["Visual Basic", "Windows"],
      repo: "https://github.com/AaronGS1999/fisiologia_animal"
    },
    {
      name: { es: "Calculadora de Genes", en: "Gene Calculator" },
      icon: "dna", color: "#ff375f",
      year: 2022,
      description: {
        es: "Hoja de cálculo para enseñar mendelismo, interacciones génicas y ligamiento.",
        en: "Spreadsheet for teaching Mendelian inheritance, gene interactions and linkage."
      },
      stack: ["Excel", { es: "Docencia", en: "Teaching" }],
      paper: "https://turia.uv.es/index.php/dces/article/view/21008"
    },
    {
      name: "Excel Mapper",
      icon: "chromosome", color: "#0a84ff",
      year: 2022,
      description: {
        es: "Uso de Excel Mapper para dibujar idiogramas cromosómicos en clase.",
        en: "Using Excel Mapper to draw chromosome idiograms in class."
      },
      stack: ["Excel", { es: "Docencia", en: "Teaching" }],
      paper: "https://doi.org/10.1525/abt.2022.84.7.396"
    }
  ],

  /* ───────────────────────── Cuadernos de Google Colab ─────────────────────────
     topic: etiqueta corta (p. ej. "Genómica", "Estadística", "Docencia")           */
  notebooks: [
    { title: { es: "Equilibrio de Hardy-Weinberg", en: "Hardy-Weinberg equilibrium" }, description: { es: "Frecuencias alélicas y genotípicas en una población en equilibrio.", en: "Allele and genotype frequencies in a population at equilibrium." }, topic: { es: "Genética de poblaciones", en: "Population genetics" }, url: "https://colab.research.google.com/drive/1KfMTSLx91fYZYNredrvR-cCd6plNFx9R" },
    { title: { es: "Hardy-Weinberg II", en: "Hardy-Weinberg II" }, description: { es: "Segunda parte del equilibrio de Hardy-Weinberg.", en: "Second part on Hardy-Weinberg equilibrium." }, topic: { es: "Genética de poblaciones", en: "Population genetics" }, url: "https://colab.research.google.com/drive/1jtaay4YPtuhG8_BdLh0YGNhAcJcrI-XH" },
    { title: { es: "Hardy-Weinberg para un gen ligado al sexo", en: "Hardy-Weinberg for a sex-linked gene" }, description: { es: "Frecuencias alélicas y genotípicas de un gen ligado al cromosoma X.", en: "Allele and genotype frequencies for an X-linked gene." }, topic: { es: "Genética de poblaciones", en: "Population genetics" }, url: "https://colab.research.google.com/drive/1ZaJkazophlkr3MMaRgzUKgRD3E008W8a" },
    { title: { es: "Hardy-Weinberg ligado al sexo II", en: "Sex-linked Hardy-Weinberg II" }, description: { es: "Segunda parte de Hardy-Weinberg para genes ligados al cromosoma X.", en: "Second part on Hardy-Weinberg for X-linked genes." }, topic: { es: "Genética de poblaciones", en: "Population genetics" }, url: "https://colab.research.google.com/drive/1R7ZgY9yWLXj9MFq1xNijKhM1wDEBtpP9" },
    { title: { es: "Hardy-Weinberg y selección", en: "Hardy-Weinberg and selection" }, description: { es: "Cambio de las frecuencias alélicas cuando actúa la selección natural.", en: "How allele frequencies change under natural selection." }, topic: { es: "Genética de poblaciones", en: "Population genetics" }, url: "https://colab.research.google.com/drive/1US93snqwcL6pb1X6K5wJCBoXo1ejunL7" },
    { title: { es: "Modelo de Fisher-Wright", en: "Wright-Fisher model" }, description: { es: "Deriva genética en poblaciones finitas.", en: "Genetic drift in finite populations." }, topic: { es: "Genética de poblaciones", en: "Population genetics" }, url: "https://colab.research.google.com/drive/1OdzSpOHi69rBwbsE7TIF1GqMqzbkPTX_" },
    { title: { es: "Selección sobredominante", en: "Overdominant selection" }, description: { es: "Modelo de selección con ventaja del heterocigoto.", en: "Selection model with heterozygote advantage." }, topic: { es: "Genética de poblaciones", en: "Population genetics" }, url: "https://colab.research.google.com/drive/1x-Qhxnt87ahtn7tNpg1wq3vVo3ycaqmP" },
    { title: { es: "Selección subdominante", en: "Underdominant selection" }, description: { es: "Modelo de selección con desventaja del heterocigoto.", en: "Selection model with heterozygote disadvantage." }, topic: { es: "Genética de poblaciones", en: "Population genetics" }, url: "https://colab.research.google.com/drive/1zM8Qo_FFovg_zqavCzXlwmnGy4njV2M8" }
  ],

  /* ───────────────────────── Proyectos de investigación ───────────────────────── */
  projects: [
    {
      title: {
        es: "El modelo agrícola de Almería ante el cambio global. Propuestas desde la genómica de la agrobiodiversidad (OrphanEvolGen)",
        en: "Almería's agricultural model facing global change. Proposals from agrobiodiversity genomics (OrphanEvolGen)"
      },
      code: "PID2023-146207OB-I00",
      funder: { es: "MICIU / AEI · Plan Estatal 2021–2023", en: "MICIU / AEI · Spanish National Plan 2021–2023" },
      institution: { es: "Universidad de Almería", en: "University of Almería" },
      period: "2024 – 2027",
      role: { es: "Miembro del equipo", en: "Team member" },
      current: true
    },
    {
      title: {
        es: "Efecto de la melatonina sobre la maduración y poscosecha de frutos y hortalizas",
        en: "Effect of melatonin on ripening and post-harvest of fruits and vegetables"
      },
      code: "PID2020-113029RB-I00",
      funder: { es: "Agencia Estatal de Investigación", en: "Spanish State Research Agency" },
      institution: { es: "Universidad de Murcia", en: "University of Murcia" },
      period: "2021 – 2024",
      role: { es: "Miembro del equipo", en: "Team member" }
    }
  ],

  /* ───────────────────────── Formación ───────────────────────── */
  education: [
    {
      degree: { es: "Doctorado (en curso)", en: "PhD (in progress)" },
      institution: { es: "Universidad de Almería", en: "University of Almería" },
      period: "2025 –"
    },
    {
      degree: { es: "Máster en Bioinformática y Bioestadística", en: "MSc in Bioinformatics and Biostatistics" },
      institution: { es: "Universitat Oberta de Catalunya", en: "Open University of Catalonia (UOC)" },
      period: "2023 – 2025"
    },
    {
      degree: { es: "Máster en Genética y Evolución", en: "MSc in Genetics and Evolution" },
      institution: { es: "Universidad de Granada", en: "University of Granada" },
      period: "2022 – 2023"
    },
    {
      degree: { es: "Grado en Biología", en: "BSc in Biology" },
      institution: { es: "Universidad de Granada", en: "University of Granada" },
      period: "2017 – 2021"
    }
  ],

  /* ───────────────────────── Docencia, divulgación y revisión ───────────────────────── */
  teaching: [
    {
      title: { es: "Genómica y Proteómica", en: "Genomics and Proteomics" },
      where: { es: "Grado en Biotecnología · Universidad de Almería", en: "BSc Biotechnology · University of Almería" },
      period: "2025 – 2026"
    },
    {
      title: { es: "Biología II · Prácticas de laboratorio", en: "Biology II · Laboratory sessions" },
      where: { es: "Grado en Bioquímica · Universidad de Murcia", en: "BSc Biochemistry · University of Murcia" },
      period: "2023 – 2024"
    },
    {
      title: { es: "Biotecnología Vegetal · Prácticas de laboratorio", en: "Plant Biotechnology · Laboratory sessions" },
      where: { es: "Grado en Biotecnología · Universidad de Murcia", en: "BSc Biotechnology · University of Murcia" },
      period: "2023 – 2024"
    }
  ],
  outreach: [
    {
      title: { es: "Bicentenario del nacimiento de Gregor Mendel (1822–2022)", en: "Bicentenary of Gregor Mendel's birth (1822–2022)" },
      where: { es: "Semana de la Ciencia 2022 · Universidad de Granada", en: "Science Week 2022 · University of Granada" },
      period: "2022"
    }
  ],
  service: [
    {
      title: { es: "Revisor de artículos", en: "Peer reviewer" },
      where: "BMC Genomics",
      period: "2025"
    }
  ],

  /* ───────────────────────── Trayectoria (línea del tiempo) ─────────────────────────
     date: "AAAA-MM"   ·   cat: "research" | "education" | "publication" | "conference" | "course" | "other" */
  timeline: [
    { date: "2026-07", cat: "conference",  text: "Uncovering plastid-mitochondria DNA exchange and genome rearrangements in two economically important Moringa species (Moringaceae) · XVIII Meeting of Plant Molecular Biology (Bilbao)" },
    { date: "2026-02", cat: "other",       text: { es: "Genómica y Proteómica · Grado en Biotecnología (Universidad de Almería)", en: "Genómica y Proteómica · BSc Biotechnology (University of Almería)" } },
    { date: "2026-02", cat: "publication", text: "Analysis of Biological Images and Quantitative Monitoring Using Deep Learning and Computer Vision · Journal of Imaging" },
    { date: "2026-02", cat: "publication", text: "Nuclear DNA of plastid origin (NUPTs), neglected driver of genome variation and evolutionary innovation · The Plant Journal" },
    { date: "2025-11", cat: "conference",  text: "Characterisation of Moringa stenopetala organellar genomes · XIV Simposio de Investigación en Ciencias Experimentales (Almería)" },
    { date: "2025-09", cat: "other",       text: { es: "Revisor para BMC Genomics", en: "Reviewer for BMC Genomics" } },
    { date: "2025-06", cat: "conference",  text: "An experimental comparison of Bayesian Network classifiers for duplicability detection · 13th Workshop on Uncertainty Processing, WUPES '25 (Třešť)" },
    { date: "2025-04", cat: "research",    text: { es: "Contrato predoctoral · Universidad de Almería, grupo BIO-359 PlantEVOLGEN", en: "PhD contract · University of Almería, BIO-359 PlantEVOLGEN group" } },
    { date: "2025-02", cat: "education",   text: { es: "Máster Universitario en Bioinformática y Bioestadística · Universitat Oberta de Catalunya", en: "MSc in Bioinformatics and Biostatistics · Universitat Oberta de Catalunya" } },
    { date: "2024-12", cat: "publication", text: "Automatic counting and identification of two Drosophila melanogaster (Diptera: Drosophilidae) morphs with image-recognition artificial intelligence · The Canadian Entomologist" },
    { date: "2024-10", cat: "research",    text: { es: "Prácticas curriculares · Cognición y Plasticidad Cerebral, IDIBELL", en: "Internship · Cognition and Brain Plasticity, IDIBELL" } },
    { date: "2024-02", cat: "publication", text: "The genomic study of repetitive elements in Solea senegalensis reveals multiple impacts of transposable elements in the evolution and architecture of Pleuronectiformes chromosomes · Frontiers in Marine Science" },
    { date: "2023-11", cat: "research",    text: { es: "Investigador licenciado · Universidad de Murcia", en: "Research graduate · University of Murcia" } },
    { date: "2023-09", cat: "education",   text: { es: "Inicio del Máster Universitario en Bioinformática y Bioestadística · Universitat Oberta de Catalunya", en: "Started MSc in Bioinformatics and Biostatistics · Universitat Oberta de Catalunya" } },
    { date: "2023-07", cat: "conference",  text: "Caracterización de las regiones centroméricas del lenguado senegalés (Solea senegalensis, Kaup 1858) · Congreso Estatal de Estudiantes de Biociencias (Granada)" },
    { date: "2023-07", cat: "education",   text: { es: "Máster Universitario en Genética y Evolución · Universidad de Granada", en: "MSc in Genetics and Evolution · University of Granada" } },
    { date: "2023-05", cat: "conference",  text: "Divergence and genomic evolution of repetitive elements in the sole Solea senegalensis · XLIII Congreso de la Sociedad Española de Genética (Valencia)" },
    { date: "2022-11", cat: "other",       text: { es: "Bicentenario del Nacimiento de Gregor Mendel (1822-2022) · Semana de la Ciencia, Universidad de Granada", en: "Bicentenario del Nacimiento de Gregor Mendel (1822-2022) · Science Week, University of Granada" } },
    { date: "2022-09", cat: "publication", text: "Using Excel Mapper to Design Chromosome Idiograms · The American Biology Teacher" },
    { date: "2022-09", cat: "education",   text: { es: "Inicio del Máster Universitario en Genética y Evolución · Universidad de Granada", en: "Started MSc in Genetics and Evolution · University of Granada" } },
    { date: "2022-08", cat: "course",      text: "PADI Open Water Diver" },
    { date: "2022-07", cat: "publication", text: "Una Calculadora de Genes para enseñar mendelismo, interacciones génicas y ligamiento · Didáctica de las Ciencias Experimentales y Sociales" },
    { date: "2022-04", cat: "course",      text: "MOOC Machine Learning y Big Data para la Bioinformática · Abierta UGR" },
    { date: "2021-11", cat: "other",       text: { es: "Inglés C1 · British Council", en: "English C1 · British Council" } },
    { date: "2021-10", cat: "course",      text: "Especialista en Bioinformática y Biología computacional · Euroinnova" },
    { date: "2021-09", cat: "research",    text: { es: "Colaborador del Departamento de Genética · Universidad de Granada", en: "Collaborator, Department of Genetics · University of Granada" } },
    { date: "2021-07", cat: "education",   text: { es: "Grado en Biología · Universidad de Granada", en: "BSc in Biology · University of Granada" } },
    { date: "2021-04", cat: "course",      text: "Python Aplicado, Nivel Medio · Asociación Darwin Eventur" },
    { date: "2020-07", cat: "course",      text: "Bioinformática de Muestras Biológicas: Bioestadística Univariable y Multivariable Aplicada a Resultados con Muestras de Secuenciación Masiva · Centro Mediterráneo" },
    { date: "2019-11", cat: "course",      text: "Rastreo de Fauna Silvestre: Metodología y Principios Básicos Aplicables · Asociación Darwin Eventur" },
    { date: "2018-09", cat: "research",    text: { es: "Alumno interno del Departamento de Zoología · Universidad de Granada", en: "Undergraduate intern, Department of Zoology · University of Granada" } },
    { date: "2018-05", cat: "course",      text: "Arduino: Conviértete en un experto desde cero · Asociación Darwin Eventur" },
    { date: "2018-05", cat: "course",      text: "Iniciación a la Fotografía Científica · Asociación Darwin Eventur" },
    { date: "2017-09", cat: "education",   text: { es: "Inicio del Grado en Biología · Universidad de Granada", en: "Started BSc in Biology · University of Granada" } }
  ]
};
