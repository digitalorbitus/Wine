



"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, MapPin, Wine, Search, RefreshCw } from "lucide-react";







const wineRegions = [
  //============================== Ascheri start  1  ================================================
  {
    id: 1,
    name: "Barolo Coste & Bricco",
    country: "Piedmont, Italy",
    image: "/italy/Ascheri/Barolo Coste & Bricco, DOCG.webp",
    description:
      "Ascheri Barolo Coste & Bricco 2019 — 14.5% ABV. A prestigious DOCG Barolo offering depth, structure and the distinctive character of Piedmont's Nebbiolo vineyards.",
    grapes: ["Nebbiolo"],
    style: "Barolo DOCG",
  },

  {
    id: 2,
    name: "Barolo Sorano",
    country: "Piedmont, Italy",
    image: "/italy/Ascheri/Barolo Sorano, DOCG.webp",
    description:
      "Ascheri Barolo Sorano 2020 — 14.5% ABV. An elegant DOCG Barolo showcasing refined structure and the expressive character associated with Piedmont's finest Nebbiolo wines.",
    grapes: ["Nebbiolo"],
    style: "Barolo DOCG",
  },

  {
    id: 3,
    name: "Barolo Pisapola",
    country: "Piedmont, Italy",
    image: "/italy/Ascheri/Barolo Pisapola, DOCG.webp",
    description:
      "Ascheri Barolo Pisapola 2020 — 14.5% ABV. A beautifully structured DOCG Barolo with classic elegance, complexity and the age-worthy character of Nebbiolo.",
    grapes: ["Nebbiolo"],
    style: "Barolo DOCG",
  },

  {
    id: 4,
    name: "Barolo",
    country: "Piedmont, Italy",
    image: "/italy/Ascheri/Barolo, DOCG.webp",
    description:
      "Ascheri Barolo 2021 — 14.5% ABV. A classic DOCG Barolo expressing the traditional Piedmontese character of Nebbiolo with balance, structure and depth.",
    grapes: ["Nebbiolo"],
    style: "Barolo DOCG",
  },

  {
    id: 5,
    name: "Barbera Langhe",
    country: "Piedmont, Italy",
    image: "/italy/Ascheri/Barbera Langhe.webp",
    description:
      "Ascheri Barbera Langhe 2023 — 14.5% ABV. A vibrant Langhe Barbera with fresh acidity, generous fruit character and the approachable style of this Piedmont classic.",
    grapes: ["Barbera"],
    style: "Langhe Red",
  },

  {
    id: 6,
    name: "Barbera d'Alba",
    country: "Piedmont, Italy",
    image: "/italy/Ascheri/Barbera d'Alba, DOC.webp",
    description:
      "Ascheri Barbera d'Alba 2018 — 14% ABV. A traditional DOC Barbera d'Alba offering bright fruit, balanced acidity and a refined expression of Piedmont's Barbera grape.",
    grapes: ["Barbera"],
    style: "Barbera DOC",
  },

  {
    id: 7,
    name: "Barbera d'Alba",
    country: "Piedmont, Italy",
    image: "/italy/Ascheri/Barbera d'Alba, DOC 2.webp",
    description:
      "Ascheri Barbera d'Alba 2017 — 14.5% ABV. A mature Barbera d'Alba DOC showcasing rich fruit character and the lively acidity characteristic of Piedmont.",
    grapes: ["Barbera"],
    style: "Barbera DOC",
  },

  {
    id: 8,
    name: "Dolcetto Langhe",
    country: "Piedmont, Italy",
    image: "/italy/Ascheri/Dolcetto Langhe.webp",
    description:
      "Ascheri Dolcetto Langhe 2024 — 13% ABV. A fresh and approachable Langhe Dolcetto with expressive fruit character and the easy-drinking style of this traditional Piedmont grape.",
    grapes: ["Dolcetto"],
    style: "Langhe Red",
  },

  {
    id: 9,
    name: "Gavi del Comune di Gavi",
    country: "Piedmont, Italy",
    image: "/italy/Ascheri/Gavi del commnue di Gavi, DOCG.webp",
    description:
      "Ascheri Gavi del Comune di Gavi 2024 — 12.5% ABV. A refreshing DOCG Gavi made from Cortese, known for crisp acidity, delicate aromas and elegant mineral character.",
    grapes: ["Cortese"],
    style: "Gavi DOCG",
  },

  {
    id: 10,
    name: "Arneis",
    country: "Piedmont, Italy",
    image: "/italy/Ascheri/Arneis, DOC.webp",
    description:
      "Ascheri Arneis 2024 — 13% ABV. A graceful Piedmontese white wine with fresh fruit, floral notes and a beautifully balanced mineral finish.",
    grapes: ["Arneis"],
    style: "White Wine",
  },


  //================================================ Ascheri  ---1--- end ==========================================

  // ====================================== Carlo & Sylvia Soc. Agr.  ---2--- start ===========================
  {
    id: 11,
    name: "Moscato d'Asti",
    country: "Piedmont, Italy",
    image: "/italy/Carlo & Sylvia Soc. Agr/Moscato d'Asti.webp",
    description:
      "Carlo & Sylvia Soc. Agr. Moscato d'Asti 2024 — 5% ABV. A lightly sparkling DOCG Moscato d'Asti with aromatic fruit, floral character and refreshing sweetness.",
    grapes: ["Moscato"],
    style: "Moscato DOCG",
  },

  {
    id: 12,
    name: "Chardonnay",
    country: "Piedmont, Italy",
    image: "/italy/Carlo & Sylvia Soc. Agr/Chardonnay, DOC.webp",
    description:
      "Carlo & Sylvia Soc. Agr. Chardonnay 2024 — 12.5% ABV. A fresh and elegant Piedmont Chardonnay offering clean fruit character, balanced acidity and a refined finish.",
    grapes: ["Chardonnay"],
    style: "Italian White",
  },

    // ====================================== Carlo & Sylvia Soc. Agr.  ---2--- end ===========================



  // ============================ FRATELLI FERRERO La Morra  ---3--- start ========================


  {
    id: 13,
    name: "Barolo Manzoni Bricco",
    country: "La Morra, Piedmont, Italy",
    image: "/italy/FRATELLI FERRERO/Barolo Manzoni Bricco.webp",
    description:
      "Fratelli Ferrero Barolo Manzoni Bricco 2017 — 14.5% ABV. A prestigious DOCG Barolo from La Morra, showcasing depth, structure and the elegant character of Piedmont's Nebbiolo vineyards.",
    grapes: ["Nebbiolo"],
    style: "Barolo DOCG",
    winery: "Fratelli Ferrero",
    vintage: "2017",

  },

  {
    id: 14,
    name: "Barolo Gattera",
    country: "La Morra, Piedmont, Italy",
    image: "/italy/FRATELLI FERRERO/Barolo Gattera.webp",
    description:
      "Fratelli Ferrero Barolo Gattera 2019 — 14% ABV. A refined DOCG Barolo from La Morra with classic Nebbiolo character, structure and depth.",
    grapes: ["Nebbiolo"],
    style: "Barolo DOCG",
    winery: "Fratelli Ferrero",
    vintage: "2019",

  },

  {
    id: 15,
    name: "Barolo Pinin",
    country: "La Morra, Piedmont, Italy",
    image: "/italy/FRATELLI FERRERO/Barolo Pinin.webp",
    description:
      "Fratelli Ferrero Barolo Pinin 2020 — 14% ABV. An elegant DOCG Barolo expressing the distinctive character of La Morra and the classic qualities of Nebbiolo.",
    grapes: ["Nebbiolo"],
    style: "Barolo DOCG",
    winery: "Fratelli Ferrero",
    vintage: "2020",
  
  },

  {
    id: 16,
    name: "Nebbiolo Langhe",
    country: "La Morra, Piedmont, Italy",
    image: "/italy/FRATELLI FERRERO/Nebbiolo Langhe.webp",
    description:
      "Fratelli Ferrero Nebbiolo Langhe 2021 — 13.5% ABV. A vibrant Langhe Nebbiolo offering fresh fruit, balanced structure and the distinctive character of Piedmont.",
    grapes: ["Nebbiolo"],
    style: "Langhe Red",
    winery: "Fratelli Ferrero",
    vintage: "2021",

  },

  {
    id: 17,
    name: "Barbera d'Alba",
    country: "La Morra, Piedmont, Italy",
    image: "/italy/FRATELLI FERRERO/Barbera d'Alba.webp",
    description:
      "Fratelli Ferrero Barbera d'Alba 2022 — 13.5% ABV. A classic DOC Barbera d'Alba with lively acidity, fresh fruit character and the approachable style of Piedmont's Barbera.",
    grapes: ["Barbera"],
    style: "Barbera DOC",
    winery: "Fratelli Ferrero",
    vintage: "2022",
 
  },
    // ============================ FRATELLI FERRERO   ---3--- end ========================

  //======================== Punset  ---4--- start  ====================================
{
  id: 18,
  name: "Barbaresco Riserva 'Campo Quadro'",
  country: "Piedmont, Italy",
  image: "/italy/Punset/Barbaresco Riserva 'Campo Quadro.webp",
  description:
    "Punset Barbaresco Riserva 'Campo Quadro' 2016 — 14.5% ABV. A prestigious DOCG Barbaresco Riserva expressing the depth, elegance and complexity of Nebbiolo from Piedmont.",
  grapes: ["Nebbiolo"],
  style: "Barbaresco DOCG",
  winery: "Punset",
  vintage: "2016",
  wholesaleCase: "$559.92",
  wholesaleBottle: "$46.66",
  retailBottle: "$69.99",
},

{
  id: 19,
  name: "Barbaresco Riserva 'Basarin'",
  country: "Piedmont, Italy",
  image: "/italy/Punset/Barbaresco Riserva 'Basarin'.webp",
  description:
    "Punset Barbaresco Riserva 'Basarin' 2017 — 14% ABV. An elegant DOCG Barbaresco Riserva with refined structure, depth and the distinctive character of Piedmont Nebbiolo.",
  grapes: ["Nebbiolo"],
  style: "Barbaresco DOCG",
  winery: "Punset",
  vintage: "2017",
  wholesaleCase: "$495.96",
  wholesaleBottle: "$41.33",
  retailBottle: "$61.99",
},

{
  id: 20,
  name: "Nebbiolo Langhe",
  country: "Piedmont, Italy",
  image: "/italy/Punset/Nebbiolo Langhe.webp",
  description:
    "Punset Nebbiolo Langhe 2022 — 14% ABV. A vibrant Langhe Nebbiolo offering fresh fruit character, balanced structure and the expressive qualities of Piedmont's signature grape.",
  grapes: ["Nebbiolo"],
  style: "Langhe Red",
  winery: "Punset",
  vintage: "2022",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},

{
  id: 21,
  name: "Barbera d'Alba",
  country: "Piedmont, Italy",
  image: "/italy/Punset/Barbera d'Alba.webp",
  description:
    "Punset Barbera d'Alba 2021 — 15% ABV. A full-bodied DOC Barbera d'Alba with vibrant acidity, generous fruit character and the classic expression of Piedmont's Barbera.",
  grapes: ["Barbera"],
  style: "Barbera DOC",
  winery: "Punset",
  vintage: "2021",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 22,
  name: "Dolcetto d'Alba",
  country: "Piedmont, Italy",
  image: "/italy/Punset/Dolcetto d'Alba.webp",
  description:
    "Punset Dolcetto d'Alba 2022 — 12.5% ABV. A fresh and approachable DOC Dolcetto d'Alba with expressive fruit, soft structure and classic Piedmontese character.",
  grapes: ["Dolcetto"],
  style: "Dolcetto DOC",
  winery: "Punset",
  vintage: "2022",
  wholesaleCase: "$175.92",
  wholesaleBottle: "$14.66",
  retailBottle: "$21.99",
},

{
  id: 23,
  name: "Langhe Arneis",
  country: "Piedmont, Italy",
  image: "/italy/Punset/Langhe Arneis.webp",
  description:
    "Punset Langhe Arneis 2023 — 13.5% ABV. An elegant DOC white wine with fresh fruit, floral notes and a refined mineral character typical of Piedmont.",
  grapes: ["Arneis"],
  style: "Langhe White",
  winery: "Punset",
  vintage: "2023",
  wholesaleCase: "$191.88",
  wholesaleBottle: "$15.99",
  retailBottle: "$23.99",
},

{
  id: 24,
  name: "Langhe Bianco",
  country: "Piedmont, Italy",
  image: "/italy/Punset/NE Langhe Bianco.webp",
  description:
    "Punset Langhe Bianco 2023 — 13% ABV. A fresh and elegant DOC white wine showcasing the bright fruit and balanced character of Piedmont's Langhe.",
  grapes: ["White Grapes"],
  style: "Langhe White",
  winery: "Punset",
  vintage: "2023",
  wholesaleCase: "$135.96",
  wholesaleBottle: "$11.33",
  retailBottle: "$16.99",
},
   //============================= Punset ---4--- end =================================

    //============================= Vegis ---5--- start =================================
{
  id: 25,
  name: "Gattinara Riserva",
  country: "Piedmont, Italy",
  image: "/italy/Vegis/Gattinara Riserva.webp",
  description:
    "Vegis Gattinara Riserva 2015 — 13.5% ABV. A distinguished DOCG Gattinara Riserva showcasing the elegant structure, complexity and refined character of Nebbiolo from northern Piedmont.",
  grapes: ["Nebbiolo"],
  style: "Gattinara DOCG",
  winery: "Vegis",
  vintage: "2015",
  wholesaleCase: "$391.92",
  wholesaleBottle: "$32.66",
  retailBottle: "$48.99",
},
    //============================= Vegis ---5--- end =================================

      //============================= Vite Colte ---6--- start =================================
{
  id: 26,
  name: "Barolo Riserva",
  country: "Piedmont, Italy",
  image: "/italy/Vite Colte/Barolo_Riserva_2015_Essenze_by_Vite_Colte.webp",
  description:
    "Vite Colte Barolo Riserva 2015 — 14.5% ABV. JS 93 pts. A prestigious DOCG Barolo Riserva offering depth, structure, complexity and the classic character of Piedmont's Nebbiolo.",
  grapes: ["Nebbiolo"],
  style: "Barolo Riserva DOCG",
  winery: "Vite Colte",
  vintage: "2015",
  rating: "JS 93 pts",
  wholesaleCase: "$519.96",
  wholesaleBottle: "$43.33",
  retailBottle: "$64.99",
},

{
  id: 27,
  name: "Barolo di Serralunga d'Alba",
  country: "Piedmont, Italy",
  image: "/italy/Vite Colte/Barbera d'Asti Superiore.webp",
  description:
    "Vite Colte Barolo di Serralunga d'Alba 2015 — 14.5% ABV. JS 93 pts. A structured DOCG Barolo expressing the distinctive character and depth of Serralunga d'Alba.",
  grapes: ["Nebbiolo"],
  style: "Barolo DOCG",
  winery: "Vite Colte",
  vintage: "2015",
  rating: "JS 93 pts",
  wholesaleCase: "$336.00",
  wholesaleBottle: "$28.00",
  retailBottle: "$42.00",
},

{
  id: 28,
  name: "Barolo di Barolo",
  country: "Piedmont, Italy",
  image: "/italy/Vite Colte/Barolo di Barolo.webp",
  description:
    "Vite Colte Barolo di Barolo 2019 — 14.5% ABV. JS 91 pts. A classic DOCG Barolo with balanced structure, elegant fruit and traditional Nebbiolo character.",
  grapes: ["Nebbiolo"],
  style: "Barolo DOCG",
  winery: "Vite Colte",
  vintage: "2019",
  rating: "JS 91 pts",
  wholesaleCase: "$359.88",
  wholesaleBottle: "$29.99",
  retailBottle: "$44.99",
},

{
  id: 29,
  name: "Barolo di Monforte d'Alba",
  country: "Piedmont, Italy",
  image: "/italy/Vite Colte/Barolo di Monforte.webp",
  description:
    "Vite Colte Barolo di Monforte d'Alba 2013 — 14% ABV. A mature DOCG Barolo showcasing the depth, structure and complexity associated with Monforte d'Alba.",
  grapes: ["Nebbiolo"],
  style: "Barolo DOCG",
  winery: "Vite Colte",
  vintage: "2013",
  wholesaleCase: "$399.96",
  wholesaleBottle: "$33.33",
  retailBottle: "$49.99",
},

{
  id: 30,
  name: "Barolo 'Paesi Tuoi'",
  country: "Piedmont, Italy",
  image: "/italy/Vite Colte/Barolo 'Paesi Tuoi'.webp",
  description:
    "Vite Colte Barolo 'Paesi Tuoi' 2020 — 14% ABV. JS 91 pts. An expressive DOCG Barolo with refined structure, elegant fruit and classic Piedmontese Nebbiolo character.",
  grapes: ["Nebbiolo"],
  style: "Barolo DOCG",
  winery: "Vite Colte",
  vintage: "2020",
  rating: "JS 91 pts",
  wholesaleCase: "$271.92",
  wholesaleBottle: "$22.66",
  retailBottle: "$33.99",
},

{
  id: 31,
  name: "Barbaresco Riserva",
  country: "Piedmont, Italy",
  image: "/italy/Vite Colte/Barolo_Riserva_2015_Essenze_by_Vite_Colte.webp",
  description:
    "Vite Colte Barbaresco Riserva 2015 — 14.5% ABV. JS 93 pts. A refined DOCG Barbaresco Riserva with elegant structure, depth and the distinctive character of Piedmont Nebbiolo.",
  grapes: ["Nebbiolo"],
  style: "Barbaresco Riserva DOCG",
  winery: "Vite Colte",
  vintage: "2015",
  rating: "JS 93 pts",
  wholesaleCase: "$423.96",
  wholesaleBottle: "$35.33",
  retailBottle: "$52.99",
},

{
  id: 32,
  name: "Barbaresco 'La Casa in Collina'",
  country: "Piedmont, Italy",
  image: "/italy/Vite Colte/Barbaresco 'La Casa in Collina.webp",
  description:
    "Vite Colte Barbaresco 'La Casa in Collina' 2021 — 14% ABV. JS 91 pts. An elegant DOCG Barbaresco expressing refined fruit, structure and classic Nebbiolo character.",
  grapes: ["Nebbiolo"],
  style: "Barbaresco DOCG",
  winery: "Vite Colte",
  vintage: "2021",
  rating: "JS 91 pts",
  wholesaleCase: "$279.96",
  wholesaleBottle: "$23.33",
  retailBottle: "$34.99",
},

{
  id: 33,
  name: "Barbera d'Asti Superiore",
  country: "Piedmont, Italy",
  image: "/italy/Vite Colte/Barbera d'Asti Superiore.webp",
  description:
    "Vite Colte Barbera d'Asti Superiore 2022 — 14.5% ABV. A rich and vibrant DOCG Barbera d'Asti with lively acidity, generous fruit and refined structure.",
  grapes: ["Barbera"],
  style: "Barbera d'Asti DOCG",
  winery: "Vite Colte",
  vintage: "2022",
  wholesaleCase: "$167.88",
  wholesaleBottle: "$13.99",
  retailBottle: "$20.99",
},

{
  id: 34,
  name: "Barbera d'Asti 'Rossofuoco'",
  country: "Piedmont, Italy",
  image: "/italy/Vite Colte/Barbera d'Asti 'Rossofuoco.webp",
  description:
    "Vite Colte Barbera d'Asti 'Rossofuoco' 2023 — 13.5% ABV. An expressive DOCG Barbera d'Asti offering fresh fruit, lively acidity and an approachable Piedmontese style.",
  grapes: ["Barbera"],
  style: "Barbera d'Asti DOCG",
  winery: "Vite Colte",
  vintage: "2023",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},

{
  id: 35,
  name: "Surpass - Rosso Passito",
  country: "Piedmont, Italy",
  image: "/italy/Vite Colte/Surpass - Rosso Passito.webp",
  description:
    "Vite Colte Surpass - Rosso Passito 2021 — 15% ABV. Vino Biologico. A late-harvest red passito aged for 6 months in barriques, offering rich fruit character and depth.",
  grapes: ["Barbera"],
  style: "Rosso Passito DOC",
  winery: "Vite Colte",
  vintage: "2021",
  organic: true,
  notes: "Late harvest Barbera, 6 months barriques",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 36,
  name: "Nizza",
  country: "Piedmont, Italy",
  image: "/Nizza, DOCG.webp",
  description:
    "Vite Colte Nizza 2020 — 15% ABV. JS 92 pts. A prestigious DOCG Nizza made from Barbera, offering depth, richness and elegant structure.",
  grapes: ["Barbera"],
  style: "Nizza DOCG",
  winery: "Vite Colte",
  vintage: "2020",
  rating: "JS 92 pts",
  notes: "Barbera Riserva, 12 months barrique, 12 months in barrel",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},

{
  id: 37,
  name: "Nebbiolo d'Alba Valdolmo",
  country: "Piedmont, Italy",
  image: "/italy/Vite Colte/Nebbiolo d'Alba Valdolmo.webp",
  description:
    "Vite Colte Nebbiolo d'Alba Valdolmo 2023 — 13.5% ABV. An elegant DOC Nebbiolo offering fresh fruit, balanced structure and classic Piedmontese character.",
  grapes: ["Nebbiolo"],
  style: "Nebbiolo d'Alba DOC",
  winery: "Vite Colte",
  vintage: "2023",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 38,
  name: "Nebbiolo Langhe",
  country: "Piedmont, Italy",
  image: "/italy/Vite Colte/Nebbiolo Langhe.webp",
  description:
    "Vite Colte Nebbiolo Langhe 2023 — 14% ABV. Vino Biologico. A fresh and expressive organic Langhe Nebbiolo with balanced structure and vibrant fruit character.",
  grapes: ["Nebbiolo"],
  style: "Langhe Red",
  winery: "Vite Colte",
  vintage: "2023",
  organic: true,
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 39,
  name: "Timorasso 'Derthona'",
  country: "Piedmont, Italy",
  image: "/Timorasso Derthona, Colli Tortonesi DOC.webp",
  description:
    "Vite Colte Timorasso 'Derthona' 2023 — 14% ABV. A distinctive Colli Tortonesi DOC white wine with fresh acidity, depth and elegant mineral character.",
  grapes: ["Timorasso"],
  style: "Colli Tortonesi DOC",
  winery: "Vite Colte",
  vintage: "2023",
  wholesaleCase: "$199.92",
  wholesaleBottle: "$16.66",
  retailBottle: "$24.99",
},

{
  id: 40,
  name: "Gavi",
  country: "Piedmont, Italy",
  image: "/italy/Vite Colte/Gavi.jpg",
  description:
    "Vite Colte Gavi 2024 — 11% ABV. A refreshing DOCG Gavi made from Cortese, offering crisp acidity, delicate fruit and elegant mineral character.",
  grapes: ["Cortese"],
  style: "Gavi DOCG",
  winery: "Vite Colte",
  vintage: "2024",
  wholesaleCase: "$135.96",
  wholesaleBottle: "$11.33",
  retailBottle: "$16.99",
},

{
  id: 41,
  name: "Sauvignon 'Tra Donne Sole'",
  country: "Piedmont, Italy",
  image: "/italy/Vite Colte/Sauvignon, DOC 'Tra Donne Sole.webp",
  description:
    "Vite Colte Sauvignon 'Tra Donne Sole' 2022 — 14% ABV. A fresh and expressive DOC Sauvignon offering vibrant fruit, aromatic character and balanced acidity.",
  grapes: ["Sauvignon Blanc"],
  style: "Sauvignon DOC",
  winery: "Vite Colte",
  vintage: "2022",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},

{
  id: 42,
  name: "Roero Arneis",
  country: "Piedmont, Italy",
  image: "/italy/Vite Colte/Roero Arneis.webp",
  description:
    "Vite Colte Roero Arneis 2023 — 13.5% ABV. A refined DOCG Roero Arneis with fresh fruit, floral aromas, crisp acidity and an elegant mineral finish.",
  grapes: ["Arneis"],
  style: "Roero Arneis DOCG",
  winery: "Vite Colte",
  vintage: "2023",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},
       //============================= Vite Colte ---6--- end =================================

   //============================= BellaVista - Franciacorta ---7--- start =================================
{
  id: 43,
  name: "Vittorio Moretti Riserva",
  country: "Lombardy, Italy",
  image: "/Vittorio Moretti Riserva, DOCG.webp",
  description:
    "BellaVista Vittorio Moretti Riserva 2016 — 12.5% ABV. A prestigious DOCG Franciacorta Riserva made only in exceptional harvest years. 62% Chardonnay and 38% Pinot Nero. Manual harvest, soft pressing, fermentation in small oak barrels and long aging on yeasts with cork stopper.",
  grapes: ["Chardonnay", "Pinot Nero"],
  style: "Franciacorta Riserva DOCG",
  winery: "BellaVista",
  vintage: "2016",
  blend: "62% Chardonnay, 38% Pinot Nero",
  notes:
    "Only created in exceptional harvest years. Manual harvest, soft pressing, fermentation in small oak barrels, long aging on yeasts with cork stopper.",
  wholesaleCase: "$1,440.00",
  wholesaleBottle: "$120.00",
  retailBottle: "$180.00",
},

{
  id: 44,
  name: "La Scala",
  country: "Lombardy, Italy",
  image: "/La Scala, DOCG.webp",
  description:
    "BellaVista La Scala 2018 — 12.5% ABV. An elegant DOCG Franciacorta featuring a refined blend of 75% Chardonnay and 25% Pinot Nero.",
  grapes: ["Chardonnay", "Pinot Nero"],
  style: "Franciacorta DOCG",
  winery: "BellaVista",
  vintage: "2018",
  blend: "75% Chardonnay, 25% Pinot Nero",
  wholesaleCase: "$391.92",
  wholesaleBottle: "$32.66",
  retailBottle: "$48.99",
},

{
  id: 45,
  name: "Alma Gran Cuvée",
  country: "Lombardy, Italy",
  image: "/Alma Gran Cuvee, DOCG.webp",
  description:
    "BellaVista Alma Gran Cuvée N/V — 12.5% ABV. A refined DOCG Franciacorta made from 90% Chardonnay and 10% Pinot Nero. JS 90 pts.",
  grapes: ["Chardonnay", "Pinot Nero"],
  style: "Franciacorta DOCG",
  winery: "BellaVista",
  vintage: "N/V",
  rating: "JS 90 pts",
  blend: "90% Chardonnay, 10% Pinot Nero",
  wholesaleCase: "$319.92",
  wholesaleBottle: "$26.66",
  retailBottle: "$39.99",
},

{
  id: 46,
  name: "Satèn Brut",
  country: "Lombardy, Italy",
  image: "/Saten Brut, DOCG.webp",
  description:
    "BellaVista Satèn Brut 2018 — 12.5% ABV. An elegant DOCG Franciacorta crafted from 100% Chardonnay, offering refined freshness and a graceful sparkling character.",
  grapes: ["Chardonnay"],
  style: "Franciacorta Satèn DOCG",
  winery: "BellaVista",
  vintage: "2018",
  blend: "100% Chardonnay",
  wholesaleCase: "$391.92",
  wholesaleBottle: "$32.66",
  retailBottle: "$48.99",
},

{
  id: 47,
  name: "Brut Rosé",
  country: "Lombardy, Italy",
  image: "/Brut Rose, DOCG.webp",
  description:
    "BellaVista Brut Rosé 2020 — 12.5% ABV. A refined DOCG Franciacorta Rosé made from 65% Chardonnay and 35% Pinot Nero, combining fresh fruit character with elegant sparkling structure.",
  grapes: ["Chardonnay", "Pinot Nero"],
  style: "Franciacorta Rosé DOCG",
  winery: "BellaVista",
  vintage: "2020",
  blend: "65% Chardonnay, 35% Pinot Nero",
  wholesaleCase: "$391.92",
  wholesaleBottle: "$32.66",
  retailBottle: "$48.99",
},
  //============================= BellaVista - Franciacorta ---7--- end =================================
  //============================= Caven - Valtellina  ---8--- start =================================
  {
  id: 48,
  name: "Messere - Sforzato di Valtellina",
  country: "Lombardy, Italy",
  image: "/italy/Caven-Valtellina/Messere - Sforzato di Valtellina.png",
  description:
    "Caven Messere - Sforzato di Valtellina 2015 — 15.5% ABV. A prestigious DOCG Sforzato made from 100% Chiavennasca (Nebbiolo). Grapes are dried on mats for 3 months, followed by 15 months in small oak barrels and then large oak barrels.",
  grapes: ["Chiavennasca (Nebbiolo)"],
  style: "Sforzato di Valtellina DOCG",
  winery: "Caven",
  vintage: "2015",
  blend: "100% Chiavennasca (Nebbiolo)",
  notes:
    "Grapes dried on mats for 3 months, 15 months in small oak barrels, then in large oak barrels.",
  wholesaleCase: "$576.00",
  wholesaleBottle: "$48.00",
  retailBottle: "$72.00",
},

{
  id: 49,
  name: "Al Carmine - Valtellina Superiore Inferno Riserva",
  country: "Lombardy, Italy",
  image: "/italy/Caven-Valtellina/Al Carmine - Valtellina Superiore Inferno Riserva.webp",
  description:
    "Caven Al Carmine - Valtellina Superiore Inferno Riserva 2017 — 13.5% ABV. A distinguished DOCG Riserva from the Inferno subzone of Valtellina.",
  grapes: ["Chiavennasca (Nebbiolo)"],
  style: "Valtellina Superiore Inferno Riserva DOCG",
  winery: "Caven",
  vintage: "2017",
  wholesaleCase: "$336.00",
  wholesaleBottle: "$28.00",
  retailBottle: "$42.00",
},

{
  id: 50,
  name: "Al Carmine - Valtellina Superiore Inferno Riserva",
  country: "Lombardy, Italy",
  image: "/italy/Caven-Valtellina/Al Carmine - Valtellina Superiore Inferno Riserva - Copy.webp",
  description:
    "Caven Al Carmine - Valtellina Superiore Inferno Riserva 2015 — 13% ABV. A refined DOCG Riserva from the Inferno subzone of Valtellina, showcasing the distinctive character of the region.",
  grapes: ["Chiavennasca (Nebbiolo)"],
  style: "Valtellina Superiore Inferno Riserva DOCG",
  winery: "Caven",
  vintage: "2015",
  wholesaleCase: "$336.00",
  wholesaleBottle: "$28.00",
  retailBottle: "$42.00",
},

{
  id: 51,
  name: "La Priora - Valtellina Superiore Sassella Riserva",
  country: "Lombardy, Italy",
  image: "/italy/Caven-Valtellina/La Priora - Valtellina Superiore Sassella Riserva.webp",
  description:
    "Caven La Priora - Valtellina Superiore Sassella Riserva 2016 — 13% ABV. A prestigious DOCG Riserva made from 100% Chiavennasca (Nebbiolo). Aged for 18 months in small oak barrels, followed by large oak barrels and 8 months in bottle.",
  grapes: ["Chiavennasca (Nebbiolo)"],
  style: "Valtellina Superiore Sassella Riserva DOCG",
  winery: "Caven",
  vintage: "2016",
  blend: "100% Chiavennasca (Nebbiolo)",
  notes:
    "18 months in small oak barrels, then large oak barrels, followed by 8 months in bottle.",
  wholesaleCase: "$319.92",
  wholesaleBottle: "$26.66",
  retailBottle: "$39.99",
},

{
  id: 52,
  name: "La Martellina Inferno Valtellina Superiore",
  country: "Lombardy, Italy",
  image: "/italy/Caven-Valtellina/La Martellina Inferno Valtellina Superiore - Copy.webp",
  description:
    "Caven La Martellina Inferno Valtellina Superiore 2020 — 13.5% ABV. A DOCG Valtellina Superiore from the Inferno subzone made with Chiavennasca (Nebbiolo), Pignola and Rossola, aged for 12 months in oak barrels.",
  grapes: ["Chiavennasca (Nebbiolo)", "Pignola", "Rossola"],
  style: "Valtellina Superiore Inferno DOCG",
  winery: "Caven",
  vintage: "2020",
  notes: "12 months in oak barrels.",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},

{
  id: 53,
  name: "La Martellina Inferno Valtellina Superiore",
  country: "Lombardy, Italy",
  image: "/italy/Caven-Valtellina/La Martellina Inferno Valtellina Superiore - Copy.webp",
  description:
    "Caven La Martellina Inferno Valtellina Superiore 2019 — 13.5% ABV. A DOCG Valtellina Superiore from the Inferno subzone expressing the distinctive character of Lombardy's alpine vineyards.",
  grapes: ["Chiavennasca (Nebbiolo)", "Pignola", "Rossola"],
  style: "Valtellina Superiore Inferno DOCG",
  winery: "Caven",
  vintage: "2019",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},

{
  id: 54,
  name: "Le Coppelle Sassella Valtellina Superiore",
  country: "Lombardy, Italy",
  image: "/italy/Caven-Valtellina/Le Coppelle Sassella Valtellina Superiore.webp",
  description:
    "Caven Le Coppelle Sassella Valtellina Superiore 2020 — 13.5% ABV. A DOCG Valtellina Superiore from the Sassella subzone made with Chiavennasca (Nebbiolo), Pignola and Rossola, aged for 12 months in oak barrels.",
  grapes: ["Chiavennasca (Nebbiolo)", "Pignola", "Rossola"],
  style: "Valtellina Superiore Sassella DOCG",
  winery: "Caven",
  vintage: "2020",
  notes: "12 months in oak barrels.",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},

{
  id: 55,
  name: "Le Coppelle Sassella Valtellina Superiore",
  country: "Lombardy, Italy",
  image: "/italy/Caven-Valtellina/Le Coppelle Sassella Valtellina Superiore - Copy.webp",
  description:
    "Caven Le Coppelle Sassella Valtellina Superiore 2019 — 13.5% ABV. A DOCG Valtellina Superiore from the Sassella subzone expressing the elegant character of Lombardy's alpine vineyards.",
  grapes: ["Chiavennasca (Nebbiolo)", "Pignola", "Rossola"],
  style: "Valtellina Superiore Sassella DOCG",
  winery: "Caven",
  vintage: "2019",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},
   //============================= Caven-Valtellina  ---8--- end =================================

    //============================= Contadi-Castaldi-Franciacorta  ---9---  Lombardy  start =================================
    {
  id: 56,
  name: "Brut",
  country: "Lombardy, Italy",
  image: "/italy/Contandi-Castaldi-Franciacorta/Brut.webp",
  description:
    "Contadi Castaldi Franciacorta Brut N/V — 12.5% ABV. A refined DOCG Franciacorta made from 80% Chardonnay, 10% Pinot Nero and 10% Pinot Bianco, offering fresh fruit, crisp acidity and elegant sparkling character.",
  grapes: ["Chardonnay", "Pinot Nero", "Pinot Bianco"],
  style: "Franciacorta Brut DOCG",
  winery: "Contadi Castaldi",
  vintage: "N/V",
  blend: "80% Chardonnay, 10% Pinot Nero, 10% Pinot Bianco",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},

{
  id: 57,
  name: "Rosé Brut",
  country: "Lombardy, Italy",
  image: "public/italy/Contandi-Castaldi-Franciacorta/Rosé Brut.webp",
  description:
    "Contadi Castaldi Franciacorta Rosé Brut N/V — 12.5% ABV. A modern DOCG Franciacorta Rosé made from 65% Chardonnay and 35% Pinot Nero. WE 90 pts.",
  grapes: ["Chardonnay", "Pinot Nero"],
  style: "Franciacorta Rosé Brut DOCG",
  winery: "Contadi Castaldi",
  vintage: "N/V",
  rating: "WE 90 pts",
  blend: "65% Chardonnay, 35% Pinot Nero",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},

        //============================= Contadi Castaldi-Franciacorta  ---9---  Lombardy  end =================================
    //============================= Nera - Valtellina ---10---  Lombardy  start =================================
    {
  id: 58,
  name: "Rosso di Valtellina Satiro",
  country: "Lombardy, Italy",
  image: "/italy/Nera-Valtellina/Rosso di Valtellina Satiro.webp",
  description:
    "Nera Rosso di Valtellina Satiro 2021 — 12.5% ABV. A vibrant DOC Valtellina red made from Chiavennasca (Nebbiolo), Pignola and Rossola. Aged for 6 months in medium oak barrels and steel tanks.",
  grapes: ["Chiavennasca (Nebbiolo)", "Pignola", "Rossola"],
  style: "Rosso di Valtellina DOC",
  winery: "Nera",
  vintage: "2021",
  blend: "Chiavennasca (Nebbiolo), Pignola, and Rossola",
  notes:
    "Aged 6 months in medium oak barrels and steel tanks.",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},
        //============================= Nera-Valtellina ---10---  Lombardy  end =================================
          //============================= Torti ---11---  Lombardy start =================================
          {
  id: 59,
  name: "Pinot Noir",
  country: "Lombardy, Italy",
  image: "/italy/Torti/Pinot Noir.webp",
  description:
    "Torti Pinot Noir 2023 — 13% ABV. An elegant Lombardy Pinot Noir from Oltrepò Pavese, offering fresh fruit character, balanced acidity and refined structure.",
  grapes: ["Pinot Nero"],
  style: "Pinot Noir IGP",
  winery: "Torti",
  vintage: "2023",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 60,
  name: "Barbera",
  country: "Lombardy, Italy",
  image: "/italy/Torti/Barbera.webp",
  description:
    "Torti Barbera 2019 — 13% ABV. A traditional DOC Barbera from Lombardy with vibrant fruit, fresh acidity and classic Piedmontese-influenced character.",
  grapes: ["Barbera"],
  style: "Barbera DOC",
  winery: "Torti",
  vintage: "2019",
  wholesaleCase: "$127.92",
  wholesaleBottle: "$10.66",
  retailBottle: "$15.99",
},

{
  id: 61,
  name: "Crotina",
  country: "Lombardy, Italy",
  image: "/italy/Torti/Crotina.webp",
  description:
    "Torti Crotina 2023 — 13% ABV. A vibrant IGP red showcasing the distinctive character of Croatina, an indigenous grape of the Oltrepò Pavese.",
  grapes: ["Croatina"],
  style: "Croatina IGP",
  winery: "Torti",
  vintage: "2023",
  wholesaleCase: "$127.92",
  wholesaleBottle: "$10.66",
  retailBottle: "$15.99",
},

{
  id: 62,
  name: "Blanc de Noir",
  country: "Lombardy, Italy",
  image: "/italy/Torti/Blanc de Noir.webp",
  description:
    "Torti Blanc de Noir 2023 — 12% ABV. A DOC Pinot Nero vinified in white, producing an elegant golden-hued wine with fresh, delicate character.",
  grapes: ["Pinot Nero"],
  style: "Blanc de Noir DOC",
  winery: "Torti",
  vintage: "2023",
  blend: "100% Pinot Nero vinified Bianco",
  notes: "100% Pinot Nero vinified in white.",
  wholesaleCase: "$143.88",
  wholesaleBottle: "$11.99",
  retailBottle: "$17.99",
},

{
  id: 63,
  name: "Rosé Brut 'Casaleggio'",
  country: "Lombardy, Italy",
  image: "/italy/Torti/Rosé Brut 'Casaleggio'.webp",
  description:
    "Torti Rosé Brut 'Casaleggio' N/V — 11.5% ABV. An elegant sparkling rosé combining Pinot Nero and Chardonnay with fresh fruit character and a refined sparkling finish.",
  grapes: ["Pinot Nero", "Chardonnay"],
  style: "Rosé Brut",
  winery: "Torti",
  vintage: "N/V",
  blend: "Pinot Nero & Chardonnay",
  wholesaleCase: "$143.88",
  wholesaleBottle: "$11.99",
  retailBottle: "$17.99",
},
                //============================= Torti ---11---  Lombardy end =================================
 //============================= Cantina-Valle-Isarco ---12---   start =================================
{
  id: 64,
  name: "Pinot Nero",
  country: "Trentino-Alto Adige, Italy",
  image: "/italy/Cantina-Valle-Isarco/Pinot Nero.png",
  description:
    "Cantina Valle Isarco Pinot Nero 2021 — 13% ABV. A refined Alto Adige DOC Pinot Nero made from 100% Pinot Nero, aged on fine lees in large wooden barrels.",
  grapes: ["Pinot Nero"],
  style: "Alto Adige DOC",
  winery: "Cantina Valle Isarco",
  vintage: "2021",
  blend: "100% Pinot Nero",
  notes:
    "Aged on fine lees in large wooden barrels.",
  wholesaleCase: "$199.92",
  wholesaleBottle: "$16.66",
  retailBottle: "$24.99",
},

{
  id: 65,
  name: "Pinot Grigio",
  country: "Trentino-Alto Adige, Italy",
  image: "/italy/Cantina-Valle-Isarco/Pinot Grigio.webp",
  description:
    "Cantina Valle Isarco Pinot Grigio 2023 — 13% ABV. An elegant Alto Adige Valle Isarco DOC white wine with fresh fruit, lively acidity and mineral character.",
  grapes: ["Pinot Grigio"],
  style: "Alto Adige Valle Isarco DOC",
  winery: "Cantina Valle Isarco",
  vintage: "2023",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 66,
  name: "Kerner",
  country: "Trentino-Alto Adige, Italy",
  image: "/italy/Cantina-Valle-Isarco/Kerner.webp",
  description:
    "Cantina Valle Isarco Kerner 2023 — 13.5% ABV. An expressive Alto Adige Valle Isarco DOC white wine with aromatic fruit, fresh acidity and mineral character.",
  grapes: ["Kerner"],
  style: "Alto Adige Valle Isarco DOC",
  winery: "Cantina Valle Isarco",
  vintage: "2023",
  wholesaleCase: "$199.92",
  wholesaleBottle: "$16.66",
  retailBottle: "$24.99",
},

{
  id: 67,
  name: "Sylvaner",
  country: "Trentino-Alto Adige, Italy",
  image: "/italy/Cantina-Valle-Isarco/Sylvaner.webp",
  description:
    "Cantina Valle Isarco Sylvaner — Alto Adige Valle Isarco DOC. A classic white wine of the Isarco Valley, known for its fresh, elegant and mineral character.",
  grapes: ["Sylvaner"],
  style: "Alto Adige Valle Isarco DOC",
  winery: "Cantina Valle Isarco",
},
  //============================= Cantina-Valle-Isarco ---12---   end =================================
    //============================= San-Simone ---13---   start =================================
    {
  id: 68,
  name: "Pinot Grigio Prestige",
  country: "Friuli, Italy",
  image: "/italy/San-Simone/Pinot Grigio Prestige.webp",
  description:
    "San Simone Pinot Grigio Prestige 2024 — 12.5% ABV. An elegant Friuli DOC white wine with fresh fruit, floral notes, balanced acidity and a crisp, refreshing character.",
  grapes: ["Pinot Grigio"],
  style: "Friuli DOC",
  winery: "San Simone",
  vintage: "2024",
  wholesaleCase: "$111.96",
  wholesaleBottle: "$9.33",
  retailBottle: "$13.99",
},

{
  id: 69,
  name: "Rondover Pinot Grigio",
  country: "Friuli, Italy",
  image: "/italy/San-Simone/Rondover Pinot Grigio.webp",
  description:
    "San Simone Rondover Pinot Grigio 2024 — 12.5% ABV. A fresh and elegant Friuli DOC Pinot Grigio showcasing vibrant fruit, freshness and the distinctive character of Friuli.",
  grapes: ["Pinot Grigio"],
  style: "Friuli DOC",
  winery: "San Simone",
  vintage: "2024",
  wholesaleCase: "$111.96",
  wholesaleBottle: "$9.33",
  retailBottle: "$13.99",
},

{
  id: 70,
  name: "Millesimato Prosecco Brut",
  country: "Friuli, Italy",
  image: "/italy/San-Simone/Millesimato Prosecco Brut.jpg",
  description:
    "San Simone Millesimato Prosecco Brut 2024 — 11.5% ABV. An elegant DOC sparkling wine with fresh fruit character, lively bubbles and a crisp, refreshing finish.",
  grapes: ["Glera"],
  style: "Prosecco DOC",
  winery: "San Simone",
  vintage: "2024",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},

{
  id: 71,
  name: "Nexus",
  country: "Friuli, Italy",
  image: "/italy/San-Simone/Nexus.webp",
  description:
    "San Simone Nexus Cabernet Sauvignon Riserva 2022 — 13.5% ABV. Made from 100% Cabernet Sauvignon and aged for 16 months in oak barrels, offering depth, ripe dark fruit and refined structure.",
  grapes: ["Cabernet Sauvignon"],
  style: "Cabernet Sauvignon Riserva DOC",
  winery: "San Simone",
  vintage: "2022",
  blend: "100% Cabernet Sauvignon",
  notes: "16 months in oak barrels.",
  wholesaleCase: "$143.88",
  wholesaleBottle: "$11.99",
  retailBottle: "$17.99",
},

{
  id: 72,
  name: "Evante Riserva Merlot",
  country: "Friuli, Italy",
  image: "public/italy/San-Simone/Evante Riserva Merlot.webp",
  description:
    "San Simone Evante Riserva Merlot 2022 — 13.5% ABV. Made from 100% Merlot and aged for 18 months in oak, offering rich fruit, elegant structure and a smooth, refined finish.",
  grapes: ["Merlot"],
  style: "Merlot Riserva DOC",
  winery: "San Simone",
  vintage: "2022",
  blend: "100% Merlot",
  notes: "18 months in oak.",
  wholesaleCase: "$175.92",
  wholesaleBottle: "$14.66",
  retailBottle: "$21.99",
},
       //============================= San-Simone ---13---   end =================================
        //============================= Schiopetto ---14---   start =================================
        {
  id: 73,
  name: "Friulano 'Mario Schiopetto'",
  country: "Friuli, Italy",
  image: "/italy/Schiopetto/Friulano 'Mario Schiopetto.webp",
  description:
    "Schiopetto Friulano 'Mario Schiopetto' 2021 — 13.5% ABV. A prestigious Collio DOC white wine made from 95% Friulano and 5% Riesling, expressing the distinctive character of the Collio terroir.",
  grapes: ["Friulano", "Riesling"],
  style: "Collio DOC",
  winery: "Schiopetto",
  vintage: "2021",
  blend: "95% Friulano, 5% Riesling",
  wholesaleCase: "$695.88",
  wholesaleBottle: "$57.99",
  retailBottle: "$86.99",
},

{
  id: 74,
  name: "Amrità",
  country: "Friuli, Italy",
  image: "public/italy/Schiopetto/Amrità, Friuli.webp",
  description:
    "Schiopetto Amrità 2021 — 13.5% ABV. A refined Friuli DOC white wine combining Chardonnay and Friulano, created as one of Schiopetto's highest-quality expressions.",
  grapes: ["Chardonnay", "Friulano"],
  style: "Friuli DOC",
  winery: "Schiopetto",
  vintage: "2021",
  blend: "Chardonnay & Friulano",
  wholesaleCase: "$695.88",
  wholesaleBottle: "$57.99",
  retailBottle: "$86.99",
},

{
  id: 75,
  name: "Friulano",
  country: "Friuli, Italy",
  image: "/italy/Schiopetto/Friulano, Collio DOC.jpg",
  description:
    "Schiopetto Friulano 2020 — 13% ABV. A classic Collio DOC Friulano made exclusively from Friulano grapes, with fresh fruit, mineral character and elegant acidity. Gambero Rosso Tre Bicchieri.",
  grapes: ["Friulano"],
  style: "Collio DOC",
  winery: "Schiopetto",
  vintage: "2020",
  rating: "Gambero Rosso Tre Bicchieri",
  wholesaleCase: "$271.92",
  wholesaleBottle: "$22.66",
  retailBottle: "$33.99",
},

{
  id: 76,
  name: "Pinot Grigio",
  country: "Friuli, Italy",
  image: "/italy/Schiopetto/Pinot Grigio, Collio.png",
  description:
    "Schiopetto Pinot Grigio 2021 — 13.5% ABV. An elegant Collio DOC Pinot Grigio with fresh fruit, mineral character and balanced acidity.",
  grapes: ["Pinot Grigio"],
  style: "Collio DOC",
  winery: "Schiopetto",
  vintage: "2021",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
  notes: "Linea del Pompiere (Firefighter Line)",
},

{
  id: 77,
  name: "Pinot Grigio",
  country: "Friuli, Italy",
  image: "/italy/Schiopetto/Pinot Grigio Linea del Pompiere.jpg",
  description:
    "Schiopetto Pinot Grigio 2023 — 12.5% ABV. A fresh and fragrant Friuli DOC Pinot Grigio from the Pompiere Line, showcasing the youthful expression of the grape in Friuli.",
  grapes: ["Pinot Grigio"],
  style: "Friuli DOC",
  winery: "Schiopetto",
  vintage: "2023",
  notes: "Linea del Pompiere (Firefighter Line)",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},
          //============================= Schiopetto ---14---   end =================================

  //============================= Visintini ---15---   start =================================
{
  id: 78,
  name: "Cinzia Bianco",
  country: "Friuli, Italy",
  image: "/italy/Visintini/Cinzia Bianco, IGP.webp",
  description:
    "Visintini Cinzia Bianco N/V — 13% ABV. A fresh and approachable IGP white wine made from 95% Friulano and 5% Pinot Bianco, offering delicate floral aromas, dry character and balanced acidity.",
  grapes: ["Friulano", "Pinot Bianco"],
  style: "IGP",
  winery: "Visintini",
  vintage: "N/V",
  blend: "95% Friulano, 5% Pinot Bianco",
  wholesaleCase: "$87.96",
  wholesaleBottle: "$7.33",
  retailBottle: "$10.99",
},

{
  id: 79,
  name: "Pinot Grigio",
  country: "Friuli, Italy",
  image: "/italy/Visintini/Pinot Grigio, DOP.webp",
  description:
    "Visintini Pinot Grigio 2023 — 13.5% ABV. A refined DOP Friuli Pinot Grigio with fresh fruit, elegant acidity and a crisp, refreshing character.",
  grapes: ["Pinot Grigio"],
  style: "DOP Friuli",
  winery: "Visintini",
  vintage: "2023",
  wholesaleCase: "$143.88",
  wholesaleBottle: "$11.99",
  retailBottle: "$17.99",
},

{
  id: 80,
  name: "Pinot Bianco",
  country: "Friuli, Italy",
  image: "/italy/Visintini/Pinot Bianco, DOP.png",
  description:
    "Visintini Pinot Bianco 2022 — 14.5% ABV. A delicate DOP Friuli white wine made from Pinot Bianco, offering elegant fruit, dry character and a refined finish.",
  grapes: ["Pinot Bianco"],
  style: "DOP Friuli",
  winery: "Visintini",
  vintage: "2022",
  blend: "100% Pinot Bianco",
  wholesaleCase: "$143.88",
  wholesaleBottle: "$11.99",
  retailBottle: "$17.99",
},

{
  id: 81,
  name: "Traminer Aromatico",
  country: "Friuli, Italy",
  image: "/italy/Visintini/Traminer Aromatico, DOP.webp",
  description:
    "Visintini Traminer Aromatico 2022 — 14.5% ABV. An aromatic DOP Friuli white wine with expressive floral character, ripe fruit and an elegant finish.",
  grapes: ["Traminer Aromatico"],
  style: "DOP Friuli",
  winery: "Visintini",
  vintage: "2022",
  wholesaleCase: "$143.88",
  wholesaleBottle: "$11.99",
  retailBottle: "$17.99",
},

{
  id: 82,
  name: "Cabernet",
  country: "Friuli, Italy",
  image: "/italy/Visintini/Cabernet, DOP.png",
  description:
    "Visintini Cabernet 2019 — 12.5% ABV. A structured DOP Friuli red made from 70% Cabernet Franc and 30% Cabernet Sauvignon, combining dark fruit character with refined structure.",
  grapes: ["Cabernet Franc", "Cabernet Sauvignon"],
  style: "DOP Friuli",
  winery: "Visintini",
  vintage: "2019",
  blend: "70% Cabernet Franc, 30% Cabernet Sauvignon",
  wholesaleCase: "$143.88",
  wholesaleBottle: "$11.99",
  retailBottle: "$17.99",
},

{
  id: 83,
  name: "Schioppettino",
  country: "Friuli, Italy",
  image: "/italy/Visintini/Schioppettino, DOP.jpg",
  description:
    "Visintini Schioppettino 2022 — 13.5% ABV. A distinctive DOP Friuli red made from 100% Schioppettino and aged for 8 months in oak, offering depth, spice and elegant structure.",
  grapes: ["Schioppettino"],
  style: "DOP Friuli",
  winery: "Visintini",
  vintage: "2022",
  blend: "100% Schioppettino",
  notes: "8 months in oak.",
  wholesaleCase: "$143.88",
  wholesaleBottle: "$11.99",
  retailBottle: "$17.99",
},
   //============================= Visintini ---15---   end =================================
    //============================= Volpe Pasini ---16---   start =================================
{
  id: 84,
  name: "Sauvignon 'Zuc di Volpe'",
  country: "Friuli, Italy",
  image: "/italy/Volpe-Pasini/Sauvignon 'Zuc di Volpe', DOC.webp",
  description:
    "Volpe Pasini Sauvignon 'Zuc di Volpe' 2021 — 13% ABV. An elegant Friuli DOC Sauvignon with expressive aromatic character, fresh acidity and refined mineral notes. Gambero Rosso Tre Bicchieri.",
  grapes: ["Sauvignon"],
  style: "Friuli DOC",
  winery: "Volpe Pasini",
  vintage: "2021",
  rating: "Gambero Rosso Tre Bicchieri",
  wholesaleCase: "$271.92",
  wholesaleBottle: "$22.66",
  retailBottle: "$33.99",
},

{
  id: 85,
  name: "Pinot Grigio 'GriVò'",
  country: "Friuli, Italy",
  image: "/italy/Volpe-Pasini/Pinot Grigio 'GriVò', DOC.webp",
  description:
    "Volpe Pasini Pinot Grigio 'GriVò' 2023 — 12.5% ABV. A refined Friuli DOC Pinot Grigio offering fresh fruit, elegant acidity and a crisp mineral finish. Gambero Rosso Due Bicchieri.",
  grapes: ["Pinot Grigio"],
  style: "Friuli DOC",
  winery: "Volpe Pasini",
  vintage: "2023",
  rating: "Gambero Rosso Due Bicchieri",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 86,
  name: "Chardonnay",
  country: "Friuli, Italy",
  image: "/italy/Volpe-Pasini/Chardonnay, IGT.webp",
  description:
    "Volpe Pasini Chardonnay 2023 — 12.5% ABV. A fresh and elegant Friuli IGT Chardonnay with clean fruit character, balanced acidity and a smooth finish.",
  grapes: ["Chardonnay"],
  style: "Friuli IGT",
  winery: "Volpe Pasini",
  vintage: "2023",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 87,
  name: "Cabernet",
  country: "Friuli, Italy",
  image: "/italy/Volpe-Pasini/Cabernet, IGT.webp",
  description:
    "Volpe Pasini Cabernet 2022 — 12.5% ABV. A structured Friuli IGT red made from 85% Cabernet Sauvignon and 15% Cabernet Franc, offering dark fruit character and balanced structure.",
  grapes: ["Cabernet Sauvignon", "Cabernet Franc"],
  style: "Friuli IGT",
  winery: "Volpe Pasini",
  vintage: "2022",
  blend: "85% Cabernet Sauvignon, 15% Cabernet Franc",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},
     //============================= Volpe-Pasini---16---   end =================================
          //============================= Ca' de' Rocchi---17--- Veneto   start =================================
          {
  id: 88,
  name: "Dugal",
  country: "Veneto, Italy",
  image: "/italy/Cade-Rocchi/Dugal, IGP.webp",
  description:
    "Ca' de' Rocchi Dugal 2024 — 14% ABV. An expressive Veneto IGP red blend made from 70% Cabernet Sauvignon and 30% Merlot, offering ripe fruit character, balanced structure and a smooth finish.",
  grapes: ["Cabernet Sauvignon", "Merlot"],
  style: "Veneto IGP",
  winery: "Ca' de' Rocchi",
  vintage: "2024",
  blend: "70% Cabernet Sauvignon, 30% Merlot",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},
                 //============================= Ca'de'Rocchi---17---Veneto   end =================================

                  //============================= Giuseppe Campagnola---18---Veneto   start =================================
                  {
  id: 89,
  name: "Missoj Amarone Riserva",
  country: "Veneto, Italy",
  image: "/italy/Giuseppe-Campagnola/Missoj Amarone Riserva, DOCG.webp",
  description:
    "Giuseppe Campagnola Missoj Amarone Riserva 2017 — 17% ABV. A prestigious single-vineyard Amarone Riserva with remarkable concentration, depth and structure. 93 pts James Suckling.",
  grapes: ["Corvina", "Corvinone", "Rondinella"],
  style: "Amarone Riserva DOCG",
  winery: "Giuseppe Campagnola",
  vintage: "2017",
  rating: "93 pts James Suckling",
  notes: "Single Vineyard",
  wholesaleCase: "$1,015.92",
  wholesaleBottle: "$84.66",
  retailBottle: "$126.99",
},

{
  id: 90,
  name: "Amarone Riserva 'Caterina Zardini'",
  country: "Veneto, Italy",
  image: "/italy/Giuseppe-Campagnola/Amarone Riserva, DOCG, Caterina Zardini.png",
  description:
    "Giuseppe Campagnola Amarone Riserva 'Caterina Zardini' 2019 — 16% ABV. A refined Riserva Privata Selezione Amarone showcasing the rich, concentrated character of Veneto's Valpolicella vineyards.",
  grapes: ["Corvina", "Corvinone", "Rondinella"],
  style: "Amarone Riserva DOCG",
  winery: "Giuseppe Campagnola",
  vintage: "2019",
  notes: "Riserva Privata Selezione",
  wholesaleCase: "$551.88",
  wholesaleBottle: "$45.99",
  retailBottle: "$68.99",
},

{
  id: 91,
  name: "Amarone Classico",
  country: "Veneto, Italy",
  image: "/italy/Giuseppe-Campagnola/Amarone, DOCG, Classico.webp",
  description:
    "Giuseppe Campagnola Amarone Classico 2021 — 15.5% ABV. A classic Amarone made from Corvina Veronese and Corvinone Veronese with Rondinella, delivering rich fruit, depth and traditional Valpolicella character.",
  grapes: ["Corvina Veronese", "Corvinone Veronese", "Rondinella"],
  style: "Amarone Classico DOCG",
  winery: "Giuseppe Campagnola",
  vintage: "2021",
  blend: "75% Corvina Veronese & Corvinone Veronese, 25% Rondinella",
  wholesaleCase: "$335.88",
  wholesaleBottle: "$27.99",
  retailBottle: "$41.99",
},

{
  id: 92,
  name: "Missoj Valpolicella Ripasso",
  country: "Veneto, Italy",
  image: "/italy/Giuseppe-Campagnola/Missoj Valpolicella Ripasso,.webp",
  description:
    "Giuseppe Campagnola Missoj Valpolicella Ripasso 2021 — 14% ABV. A single-vineyard Ripasso with rich fruit character, depth and elegant structure. 91 pts James Suckling.",
  grapes: ["Corvina", "Rondinella"],
  style: "Valpolicella Ripasso DOC",
  winery: "Giuseppe Campagnola",
  vintage: "2021",
  rating: "91 pts James Suckling",
  notes: "Single Vineyard",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},

{
  id: 93,
  name: "Caterina Zardini Valpolicella",
  country: "Veneto, Italy",
  image: "/italy/Giuseppe-Campagnola/Caterina Zardini Valpolicella.webp",
  description:
    "Giuseppe Campagnola Caterina Zardini Valpolicella 2022 — 14% ABV. A concentrated Valpolicella made from grapes naturally dried for 20 days, creating a rich 'Baby Amarone' style. 91 pts James Suckling.",
  grapes: ["Corvina", "Rondinella", "Molinara"],
  style: "Valpolicella DOC",
  winery: "Giuseppe Campagnola",
  vintage: "2022",
  rating: "91 pts James Suckling",
  notes: "Grapes naturally dried for 20 days. 'Baby Amarone'.",
  wholesaleCase: "$183.96",
  wholesaleBottle: "$15.33",
  retailBottle: "$22.99",
},

{
  id: 94,
  name: "Valpolicella Ripasso Classico",
  country: "Veneto, Italy",
  image: "/italy/Giuseppe-Campagnola/Valpolicalla Ripasso.webp",
  description:
    "Giuseppe Campagnola Valpolicella Ripasso Classico 2023 — 13.5% ABV. Made from the same traditional grapes used for Amarone, offering generous fruit, freshness and classic Valpolicella character.",
  grapes: ["Corvina", "Rondinella", "Molinara"],
  style: "Valpolicella Ripasso DOC",
  winery: "Giuseppe Campagnola",
  vintage: "2023",
  blend: "60% Corvina, 35% Rondinella, 5% Molinara",
  wholesaleCase: "$135.96",
  wholesaleBottle: "$11.33",
  retailBottle: "$16.99",
},

{
  id: 95,
  name: 'Valpolicella Classico "Le Bine"',
  country: "Veneto, Italy",
  image: '/italy/Giuseppe-Campagnola/Valpolicella Classico Le Bine.webp',
  description:
    'Giuseppe Campagnola Valpolicella Classico "Le Bine" 2024 — 13% ABV. A fresh and approachable expression of classic Valpolicella with vibrant fruit and balanced acidity.',
  grapes: ["Corvina", "Rondinella"],
  style: "Valpolicella Classico DOC",
  winery: "Giuseppe Campagnola",
  vintage: "2024",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},

{
  id: 96,
  name: 'Soave Classico "Le Bine"',
  country: "Veneto, Italy",
  image: '/italy/Giuseppe-Campagnola/Soave Classico Le Bine.webp',
  description:
    'Giuseppe Campagnola Soave Classico "Le Bine" 2024 — 13% ABV. An elegant Veneto white wine with fresh fruit, floral character and crisp acidity.',
  grapes: ["Garganega"],
  style: "Soave Classico DOC",
  winery: "Giuseppe Campagnola",
  vintage: "2024",
  wholesaleCase: "$103.92",
  wholesaleBottle: "$8.66",
  retailBottle: "$12.99",
},

{
  id: 97,
  name: "Lugana",
  country: "Veneto, Italy",
  image: "/italy/Giuseppe-Campagnola/Lugana, DOC.jpg",
  description:
    "Giuseppe Campagnola Lugana 2022 — 13% ABV. A fresh and elegant DOC white wine with delicate fruit, mineral character and refreshing acidity.",
  grapes: ["Trebbiano di Lugana"],
  style: "Lugana DOC",
  winery: "Giuseppe Campagnola",
  vintage: "2022",
  wholesaleCase: "$71.88",
  wholesaleBottle: "$5.99",
  retailBottle: "$8.99",
},

{
  id: 98,
  name: "Custoza",
  country: "Veneto, Italy",
  image: "/italy/Giuseppe-Campagnola/Custoza, DOC.jpg",
  description:
    "Giuseppe Campagnola Custoza 2024 — 12.5% ABV. A lively Veneto white blend combining Trebbiano Toscano, Garganega, Tocai Italico, Riesling and Cortese.",
  grapes: [
    "Trebbiano Toscano",
    "Garganega",
    "Tocai Italico",
    "Riesling",
    "Cortese",
  ],
  style: "Custoza DOC",
  winery: "Giuseppe Campagnola",
  vintage: "2024",
  wholesaleCase: "$79.92",
  wholesaleBottle: "$6.66",
  retailBottle: "$9.99",
},

{
  id: 99,
  name: "Chardonnay",
  country: "Veneto, Italy",
  image: "/italy/Giuseppe-Campagnola/Chardonnay, IGT.jpg",
  description:
    "Giuseppe Campagnola Chardonnay 2024 — 12.5% ABV. A fresh and approachable Veneto IGT Chardonnay with clean fruit character, balanced acidity and a smooth finish.",
  grapes: ["Chardonnay"],
  style: "Italian White",
  winery: "Giuseppe Campagnola",
  vintage: "2024",
  wholesaleCase: "$95.88",
  wholesaleBottle: "$7.99",
  retailBottle: "$11.99",
},

{
  id: 100,
  name: "Fortificato",
  country: "Veneto, Italy",
  image: "/italy/Giuseppe-Campagnola/Fortificato.webp",
  description:
    "Giuseppe Campagnola Fortificato 500 ML — 19% ABV. A rich and concentrated fortified wine presented in a 500 ML bottle.",
  grapes: [],
  style: "Fortified Wine",
  winery: "Giuseppe Campagnola",
  vintage: "N/V",
  bottleSize: "500 ML",
  wholesaleCase: "$319.92",
  wholesaleBottle: "$26.66",
  retailBottle: "$39.99",
},

{
  id: 101,
  name: "Recioto",
  country: "Veneto, Italy",
  image: "/italy/Giuseppe-Campagnola/Recioto, DOCG.webp",
  description:
    "Giuseppe Campagnola Recioto 2022 — 13% ABV. A traditional DOCG sweet wine from Veneto with concentrated fruit character and rich, expressive sweetness.",
  grapes: ["Corvina", "Rondinella"],
  style: "Recioto DOCG",
  winery: "Giuseppe Campagnola",
  vintage: "2022",
  bottleSize: "500 ML",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},

{
  id: 102,
  name: "Prosecco Cantico",
  country: "Veneto, Italy",
  image: "/italy/Giuseppe-Campagnola/Prosecco Cantico, DOC.webp",
  description:
    "Giuseppe Campagnola Prosecco Cantico N/V — 11% ABV. A lively DOC Prosecco with fresh fruit character, delicate bubbles and a crisp, refreshing finish.",
  grapes: ["Glera"],
  style: "Prosecco DOC",
  winery: "Giuseppe Campagnola",
  vintage: "N/V",
  bottleSize: "200 ML",
  casePack: "24 PACK CASE",
  wholesaleCase: "$82.80",
  wholesaleBottle: "$3.45",
  retailBottle: "$5.20",
},
                   //============================= Giuseppe-Campagnola---18---Veneto   end =================================

                          //============================= Ottella  ---19---Veneto   start =================================
                          {
  id: 103,
  name: "'Molceo' Lugana Riserva",
  country: "Veneto, Italy",
  image: "/italy/Ottella/Molceo' Lugana Riserva.webp",
  description:
    "Ottella 'Molceo' Lugana Riserva 2022 — 13% ABV. A refined Lugana Riserva made from 100% Turbiana (Trebbiano di Lugana), aged 18 months on fine lees, mostly in steel with the remainder in barrels and barriques.",
  grapes: ["Turbiana (Trebbiano di Lugana)"],
  style: "Lugana Riserva DOC",
  winery: "Ottella",
  vintage: "2022",
  blend: "100% Turbiana (Trebbiano di Lugana)",
  notes:
    "18 months on fine lees, mostly in steel and the rest in barrels and barriques.",
  wholesaleCase: "$295.92",
  wholesaleBottle: "$24.66",
  retailBottle: "$36.99",
},

{
  id: 104,
  name: "'Le Creete' Lugana",
  country: "Veneto, Italy",
  image: "/italy/Ottella/Le Creete' Lugana.webp",
  description:
    "Ottella 'Le Creete' Lugana 2024 — 13% ABV. A fresh and elegant Lugana made from 100% Turbiana, aged for 6–8 months on fine lees for added texture and complexity.",
  grapes: ["Turbiana"],
  style: "Lugana DOC",
  winery: "Ottella",
  vintage: "2024",
  blend: "100% Turbiana",
  notes: "6–8 months on fine lees.",
  wholesaleCase: "$191.88",
  wholesaleBottle: "$15.99",
  retailBottle: "$23.99",
},

{
  id: 105,
  name: "Lugana",
  country: "Veneto, Italy",
  image: "/italy/Ottella/Lugana, DOC.webp",
  description:
    "Ottella Lugana 2024 — 12.5% ABV. A classic Lugana made from Turbiana, offering fresh fruit, crisp acidity and elegant mineral character after 5 months on fine lees.",
  grapes: ["Turbiana"],
  style: "Lugana DOC",
  winery: "Ottella",
  vintage: "2024",
  blend: "100% Turbiana",
  notes: "5 months on fine lees.",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 106,
  name: "Camposireso",
  country: "Veneto, Italy",
  image: "/italy/Ottella/Camposireso, Vino Rosso.webp",
  description:
    "Ottella Camposireso 2020 — 14.5% ABV. A rich Veneto red blend of Merlot, Cabernet Sauvignon and Corvina Veronese. Partially dried grapes and 24 months of barrique aging create depth and concentration.",
  grapes: ["Merlot", "Cabernet Sauvignon", "Corvina Veronese"],
  style: "Vino Rosso",
  winery: "Ottella",
  vintage: "2020",
  blend: "50% Merlot, 25% Cabernet Sauvignon, 25% Corvina Veronese",
  notes: "Partial drying of grapes; 24 months in barrique.",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},

{
  id: 107,
  name: "Gemei",
  country: "Veneto, Italy",
  image: "/italy/Ottella/Gemei, Vino Rosso.webp",
  description:
    "Ottella Gemei 2023 — 14% ABV. A smooth Veneto red blend combining Corvina Veronese, Cabernet Sauvignon and Merlot, aged for 6 months in large oak barrels.",
  grapes: ["Corvina Veronese", "Cabernet Sauvignon", "Merlot"],
  style: "Vino Rosso",
  winery: "Ottella",
  vintage: "2023",
  blend: "Corvina Veronese, Cabernet Sauvignon, and Merlot",
  notes: "6 months in large oak barrels.",
  wholesaleCase: "$127.92",
  wholesaleBottle: "$10.66",
  retailBottle: "$15.99",
},
                            //============================= Ottella  ---19---Veneto   end =================================

                              //============================= Poderi-Campopian  ---20---Veneto  start =================================

{
  id: 108,
  name: "Amarone della Valpolicella 'Marziale' Riserva",
  country: "Veneto, Italy",
  image: "/italy/poderi-Campopian/Amarone delle Valpolicella 'Marziale' Riserva.webp",
  description:
    "Poderi Campopian Amarone della Valpolicella 'Marziale' Riserva 2017 — 15.5% ABV. A prestigious Amarone Riserva made from Corvina, Corvinone and Rondinella, aged for 12–18 months in French oak.",
  grapes: ["Corvina", "Corvinone", "Rondinella"],
  style: "Amarone Riserva DOCG",
  winery: "Poderi Campopian",
  vintage: "2017",
  blend: "80% Corvina, 15% Corvinone, 5% Rondinella",
  notes: "12–18 months in French oak.",
  wholesaleCase: "$576.00",
  wholesaleBottle: "$48.00",
  retailBottle: "$72.00",
},

{
  id: 109,
  name: "Valpolicella Ripasso 'Lunante'",
  country: "Veneto, Italy",
  image: "/italy/poderi-Campopian/Valpolicella Ripasso.webp",
  description:
    "Poderi Campopian Valpolicella Ripasso 'Lunante' 2021 — 15% ABV. A structured Ripasso made from Corvina, Rondinella and Corvinone, aged for 12–14 months in French and American oak.",
  grapes: ["Corvina", "Rondinella", "Corvinone"],
  style: "Valpolicella Ripasso DOP",
  winery: "Poderi Campopian",
  vintage: "2021",
  blend: "85% Corvina, 10% Rondinella, 5% Corvinone",
  notes: "12–14 months in French and American oak.",
  wholesaleCase: "$223.92",
  wholesaleBottle: "$18.66",
  retailBottle: "$27.99",
},

{
  id: 110,
  name: "Valpolicella Classico Superiore 'Reguso'",
  country: "Veneto, Italy",
  image: "/italy/poderi-Campopian/Valpolicella Classico Superiore.webp",
  description:
    "Poderi Campopian Valpolicella Classico Superiore 'Reguso' 2017 — 14% ABV. A classic Veneto red made from Corvina, Rondinella and Corvinone, expressing the structure and character of Valpolicella Classico.",
  grapes: ["Corvina", "Rondinella", "Corvinone"],
  style: "Valpolicella Classico Superiore DOP",
  winery: "Poderi Campopian",
  vintage: "2017",
  blend: "85% Corvina, 10% Rondinella, 5% Corvinone",
  wholesaleCase: "$311.88",
  wholesaleBottle: "$25.99",
  retailBottle: "$38.99",
},
                           //============================= Poderi-Campopian  ---20---Veneto  end =================================
                            //============================= Roccolo del Lago  ---21---Veneto  start =================================
                            {
  id: 111,
  name: "Bardolino Classico Chiaretto",
  country: "Veneto, Italy",
  image: "/italy/Roccolo-del-Lago/Bardolino Classico Chiaretto, DOC.webp",
  description:
    "Roccolo del Lago Bardolino Classico Chiaretto 2024 — 12.5% ABV. A fresh and elegant DOC rosé from Bardolino Classico, offering bright fruit character, lively acidity and a crisp finish.",
  grapes: ["Corvina", "Rondinella"],
  style: "Bardolino Classico Chiaretto DOC",
  winery: "Roccolo del Lago",
  vintage: "2024",
  wholesaleCase: "$103.92",
  wholesaleBottle: "$8.66",
  retailBottle: "$12.99",
},

{
  id: 112,
  name: "Bardolino Classico",
  country: "Veneto, Italy",
  image: "/italy/Roccolo-del-Lago/Bardolino Classico, DOC.webp",
  description:
    "Roccolo del Lago Bardolino Classico 2023 — 13% ABV. A classic Veneto DOC red with fresh berry fruit, lively acidity and the elegant, approachable character of Bardolino.",
  grapes: ["Corvina", "Rondinella"],
  style: "Bardolino Classico DOC",
  winery: "Roccolo del Lago",
  vintage: "2023",
  wholesaleCase: "$103.92",
  wholesaleBottle: "$8.66",
  retailBottle: "$12.99",
},
                            //============================= Roccolo-del-Lago  ---21---Veneto  end =================================
                                //=============================Tenuta Valleselle  ---22---Veneto  start =================================

                                {
  id: 113,
  name: "Aureum Acinum Amarone della Valpolicella",
  country: "Veneto, Italy",
  image: "/italy/Tenuta-Valleselle/Aureum Acinum Amarone della Valpolicella.webp",
  description:
    "Tenuta Valleselle Aureum Acinum Amarone della Valpolicella 2022 — 15% ABV. A rich and structured Amarone made from 90% Corvina e Corvinone and 10% Rondinella, showcasing the depth and character of Valpolicella.",
  grapes: ["Corvina", "Corvinone", "Rondinella"],
  style: "Amarone della Valpolicella DOCG",
  winery: "Tenuta Valleselle",
  vintage: "2022",
  blend: "90% Corvina e Corvinone, 10% Rondinella",
  wholesaleCase: "$519.96",
  wholesaleBottle: "$43.33",
  retailBottle: "$64.99",
},

{
  id: 114,
  name: "Rovertondo Valpolicella Ripasso",
  country: "Veneto, Italy",
  image: "/italy/Tenuta-Valleselle/Rovertondo Valpolicella Ripasso.webp",
  description:
    "Tenuta Valleselle Rovertondo Valpolicella Ripasso 2021 — 14% ABV. A generous and expressive Valpolicella Ripasso made from 90% Corvina e Corvinone and 10% Rondinella.",
  grapes: ["Corvina", "Corvinone", "Rondinella"],
  style: "Valpolicella Ripasso DOP",
  winery: "Tenuta Valleselle",
  vintage: "2021",
  blend: "90% Corvina e Corvinone, 10% Rondinella",
  wholesaleCase: "$255.96",
  wholesaleBottle: "$21.33",
  retailBottle: "$31.99",
},

{
  id: 115,
  name: "Garda Bianco",
  country: "Veneto, Italy",
  image: "/italy/Tenuta-Valleselle/Garda Bianco.webp",
  description:
    "Tenuta Valleselle Garda Bianco 2024 — 12.5% ABV. A fresh and elegant white blend combining Garganega, Trebbiano and Chardonnay, with bright fruit and refreshing acidity.",
  grapes: ["Garganega", "Trebbiano", "Chardonnay"],
  style: "Garda Bianco DOP",
  winery: "Tenuta Valleselle",
  vintage: "2024",
  blend: "Garganega, Trebbiano, Chardonnay",
  wholesaleCase: "$111.96",
  wholesaleBottle: "$9.33",
  retailBottle: "$13.99",
},
                             //=============================Tenuta-Valleselle  ---22---Veneto  end =================================
                                  //=============================Tinazzi  ---23---Veneto  start =================================
                                  {
  id: 116,
  name: "Amarone della Valpolicella Riserva 'A50'",
  country: "Veneto, Italy",
  image: "/italy/Tinazzi/Amarone della Valpolicella Riserva a50.webp",
  description:
    "Tinazzi Amarone della Valpolicella Riserva 'A50' 2019 — 15.5% ABV. A powerful and refined Amarone Riserva made from 95% Corvina e Corvinone and 5% Rondinella, aged for 12–18 months in French oak barrels.",
  grapes: ["Corvina", "Corvinone", "Rondinella"],
  style: "Amarone Riserva DOCG",
  winery: "Tinazzi",
  vintage: "2019",
  blend: "95% Corvina e Corvinone, 5% Rondinella",
  notes: "12–18 months in French oak barrels.",
  wholesaleCase: "$799.92",
  wholesaleBottle: "$66.66",
  retailBottle: "$99.99",
},

{
  id: 117,
  name: "Valpolicella Ripasso 'G77'",
  country: "Veneto, Italy",
  image: "/italy/Tinazzi/Valpolicella Ripasso 'G77', DOP.webp",
  description:
    "Tinazzi Valpolicella Ripasso 'G77' 2017 — 15% ABV. A rich and expressive Ripasso blend of Corvina, Corvinone and Rondinella, aged for 12 months in French and American oak.",
  grapes: ["Corvina", "Corvinone", "Rondinella"],
  style: "Valpolicella Ripasso DOP",
  winery: "Tinazzi",
  vintage: "2017",
  blend: "80% Corvina, 10% Corvinone, 10% Rondinella",
  notes: "12 months in French and American oak.",
  wholesaleCase: "$447.96",
  wholesaleBottle: "$37.33",
  retailBottle: "$55.99",
},
      //=============================Tinazzi  ---23---Veneto  end =================================
   //=============================Villa-Rocca  ---24---Veneto  start =================================
{
  id: 118,
  name: "Merlot",
  country: "Veneto, Italy",
  image: "/italy/Villa-Rocca/Merlot.png",
  description:
    "Villa Rocca Merlot 2023 — 12% ABV. A smooth and approachable Veneto Merlot with fresh fruit character, balanced acidity and an easy-drinking finish.",
  grapes: ["Merlot"],
  style: "Italian Red",
  winery: "Villa Rocca",
  vintage: "2023",
  wholesaleCase: "$71.88",
  wholesaleBottle: "$5.99",
  retailBottle: "$8.99",
},

{
  id: 119,
  name: "Cabernet Sauvignon",
  country: "Veneto, Italy",
  image: "/italy/Villa-Rocca/Cabernet Sauvignon.png",
  description:
    "Villa Rocca Cabernet Sauvignon 2022 — 12.5% ABV. A classic Veneto Cabernet Sauvignon offering ripe fruit character, gentle structure and a smooth finish.",
  grapes: ["Cabernet Sauvignon"],
  style: "Italian Red",
  winery: "Villa Rocca",
  vintage: "2022",
  wholesaleCase: "$71.88",
  wholesaleBottle: "$5.99",
  retailBottle: "$8.99",
},
   //=============================Villa-Rocca  ---24---Veneto  end =================================
      //=============================Ville D'Arfanta ---25---Veneto  start =================================
      {
  id: 120,
  name: "Conegliano Valdobbiadene Millesimato Extra Brut",
  country: "Veneto, Italy",
  image: "/italy/Ville-D-Arfanta/Conegliano Valdobbiadene Millesimato Extra Brut.webp",
  description:
    "Ville D'Arfanta Conegliano Valdobbiadene Millesimato Extra Brut 2024 — 11% ABV. An elegant DOCG sparkling wine with refined bubbles, fresh fruit character and a crisp, dry finish.",
  grapes: ["Glera"],
  style: "Conegliano Valdobbiadene DOCG",
  winery: "Ville D'Arfanta",
  vintage: "2024",
  wholesaleCase: "$127.92",
  wholesaleBottle: "$10.66",
  retailBottle: "$15.99",
},

{
  id: 121,
  name: "Conegliano Valdobbiadene Millesimato Brut",
  country: "Veneto, Italy",
  image: "/italy/Ville-D-Arfanta/Conegliano Valdobbiadene Millesimato Brut.webp",
  description:
    "Ville D'Arfanta Conegliano Valdobbiadene Millesimato Brut 2024 — 11% ABV. A fresh and elegant DOCG sparkling wine made in the classic Brut style, offering lively bubbles and bright fruit character.",
  grapes: ["Glera"],
  style: "Conegliano Valdobbiadene DOCG",
  winery: "Ville D'Arfanta",
  vintage: "2024",
  wholesaleCase: "$127.92",
  wholesaleBottle: "$10.66",
  retailBottle: "$15.99",
},
         //=============================Ville-D-Arfanta ---25---Veneto  end =================================

  //=============================Vinai-Italiani ---26---Veneto  start =================================
  {
  id: 122,
  name: "Amarone della Valpolicella",
  country: "Veneto, Italy",
  image: "/Vinai-Italiani/Amarone delle Valpolicella, DOCG.png",
  description:
    "Vinai Italiani Amarone della Valpolicella 2019 — 15% ABV. A rich and expressive DOCG Amarone with ripe fruit character, depth and the distinctive style of Valpolicella.",
  grapes: ["Corvina", "Corvinone", "Rondinella"],
  style: "Amarone della Valpolicella DOCG",
  winery: "Vinai Italiani",
  vintage: "2019",
  wholesaleCase: "$287.88",
  wholesaleBottle: "$23.99",
  retailBottle: "$35.99",
},

{
  id: 123,
  name: "Gajardo Rosso Veronese",
  country: "Veneto, Italy",
  image: "/Vinai-Italiani/Gajardo Rosso Veronese.webp",
  description:
    "Vinai Italiani Gajardo Rosso Veronese 2020 — 13.5% ABV. An approachable Veronese red offering fresh fruit character, balanced structure and a smooth finish.",
  grapes: ["Corvina", "Merlot"],
  style: "Rosso Veronese IGT",
  winery: "Vinai Italiani",
  vintage: "2020",
  wholesaleCase: "$103.92",
  wholesaleBottle: "$8.66",
  retailBottle: "$12.99",
},
   //=============================Vinai Italiani ---26---Veneto  end =================================

  //=============================Vinicola Serena---27---Veneto  start =================================
  {
  id: 124,
  name: "Serena Prosecco Treviso",
  country: "Veneto, Italy",
  image: "/italy/Vinicola Serena/Vinicola Serena Extra Dry.webp",
  description:
    "Vinicola Serena Prosecco Treviso DOC — 11% ABV. An elegant Extra Dry Prosecco with lively bubbles, fresh fruit character and a clean, refreshing finish.",
  grapes: ["Glera"],
  style: "Prosecco Treviso DOC",
  winery: "Vinicola Serena",
  vintage: "N/V",
  notes: "Extra Dry",
  wholesaleCase: "$103.92",
  wholesaleBottle: "$8.66",
  retailBottle: "$12.99",
},

{
  id: 125,
  name: "Serena Valdobbiadene Prosecco Superiore",
  country: "Veneto, Italy",
  image: "/italy/Vinicola Serena/Serena Valdobbiadene Prosecco Superiore, DOCG 11%.webp",
  description:
    "Vinicola Serena Valdobbiadene Prosecco Superiore DOCG — 11% ABV. A refined sparkling wine from Valdobbiadene with elegant bubbles, fresh fruit aromas and a crisp, refreshing finish.",
  grapes: ["Glera"],
  style: "Prosecco Superiore DOCG",
  winery: "Vinicola Serena",
  vintage: "N/V",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},
   //=============================Vinicola Serena ---27---Veneto  end ===============================


      //=============================Cantina Settecani---28---Emilia Romagna  start ===============================
      {
  id: 126,
  name: "Vini del Re, Lambrusco di Modena Rosato",
  country: "Emilia-Romagna, Italy",
  image: "/Vini del Re Lambrusco di Modena Rosato, DOC.webp",
  description:
    "Cantina Settecani Vini del Re Lambrusco di Modena Rosato — 11% ABV. A dry sparkling rosé with fresh fruit character and lively bubbles, showcasing the vibrant style of Lambrusco from Emilia-Romagna.",
  grapes: ["Lambrusco"],
  style: "Lambrusco di Modena Rosato DOC",
  winery: "Cantina Settecani",
  vintage: "N/V",
  notes: "Dry Sparkling Rosé",
  wholesaleCase: "$87.96",
  wholesaleBottle: "$7.33",
  retailBottle: "$10.99",
},

{
  id: 127,
  name: "Vini del Re, Lambrusco Grasparossa di Castelvetro Secco",
  country: "Emilia-Romagna, Italy",
  image: "/Vini del Re Lambrusco Grasparossa di Castelvetro Secco, DOP.webp",
  description:
    "Cantina Settecani Vini del Re Lambrusco Grasparossa di Castelvetro Secco — 11% ABV. A dry, frizzante Lambrusco with lively bubbles and expressive fruit character. Awarded Tre Bicchieri recognition.",
  grapes: ["Lambrusco Grasparossa"],
  style: "Lambrusco Grasparossa DOP",
  winery: "Cantina Settecani",
  vintage: "N/V",
  notes: "Dry, Frizzante — Tre Bicchieri",
  wholesaleCase: "$87.96",
  wholesaleBottle: "$7.33",
  retailBottle: "$10.99",
},

{
  id: 128,
  name: "Lambrusco Grasparossa di Castelvetro",
  country: "Emilia-Romagna, Italy",
  image: "/Lambrusco Grasparossa di Castelvetro, DOP.webp",
  description:
    "Cantina Settecani Lambrusco Grasparossa di Castelvetro — 8% ABV. An approachable semi-sweet sparkling Lambrusco with fresh fruit character and gentle effervescence.",
  grapes: ["Lambrusco Grasparossa"],
  style: "Lambrusco Grasparossa DOP",
  winery: "Cantina Settecani",
  vintage: "N/V",
  notes: "Amabile, Semi-sweet Sparkling",
  wholesaleCase: "$71.88",
  wholesaleBottle: "$5.99",
  retailBottle: "$8.99",
},

{
  id: 129,
  name: "'7 Rose' Setterose Spumante Brut",
  country: "Emilia-Romagna, Italy",
  image: "/7 Rose Setterose Spumante Brut, DOP.webp",
  description:
    "Cantina Settecani '7 Rose' Setterose Spumante Brut — 11% ABV. An elegant Brut rosé sparkling wine with delicate fruit character, lively bubbles and a refreshing finish.",
  grapes: ["Lambrusco"],
  style: "Spumante Brut DOP",
  winery: "Cantina Settecani",
  vintage: "N/V",
  notes: "Rosé Spumante Brut",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},

{
  id: 130,
  name: "Settimocielo Rosé Brut",
  country: "Emilia-Romagna, Italy",
  image: "/Settimocielo Rose Brut, DOP.webp",
  description:
    "Cantina Settecani Settimocielo Rosé Brut — 12% ABV. A refined sparkling rosé with elegant bubbles, fresh fruit character and a crisp Brut finish. Made using Metodo Classico.",
  grapes: ["Lambrusco Grasparossa"],
  style: "Rosé Brut DOP",
  winery: "Cantina Settecani",
  vintage: "N/V",
  notes: "Lambrusco Grasparossa Rosé — Metodo Classico",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},
        //=============================Cantina Settecani---28---Emilia Romagna  end ===============================

         //=============================Bindella Tenuta Vallocaia ---29---Tuscany  start ===============================
         {
  id: 131,
  name: "Vino Nobile di Montepulciano 'I Quadri'",
  country: "Tuscany, Italy",
  image: "/Vino Nobile di Montepulciano I Quadri, DOCG.webp",
  description:
    "Bindella Tenuta Vallocaia Vino Nobile di Montepulciano 'I Quadri' 2019 — 15% ABV. A prestigious DOCG wine made from 100% Sangiovese and aged 18–20 months in French tonneaux. Awarded 92 points by James Suckling and Tre Bicchieri recognition.",
  grapes: ["Sangiovese"],
  style: "Vino Nobile di Montepulciano DOCG",
  winery: "Bindella Tenuta Vallocaia",
  vintage: "2019",
  blend: "100% Sangiovese",
  notes: "18–20 months in French tonneaux. 92 points James Suckling, Tre Bicchieri.",
  wholesaleCase: "$359.88",
  wholesaleBottle: "$29.99",
  retailBottle: "$44.99",
},

{
  id: 132,
  name: "Vino Nobile di Montepulciano",
  country: "Tuscany, Italy",
  image: "/Vino Nobile di Montepulciano, DOCG.webp",
  description:
    "Bindella Tenuta Vallocaia Vino Nobile di Montepulciano 2019 — 14% ABV. A classic Tuscan DOCG blend of Sangiovese, Canaiolo, Colorino and Mammolo, aged 20–22 months in large oak casks.",
  grapes: ["Sangiovese", "Canaiolo", "Colorino", "Mammolo"],
  style: "Vino Nobile di Montepulciano DOCG",
  winery: "Bindella Tenuta Vallocaia",
  vintage: "2019",
  blend: "85% Sangiovese, 15% Canaiolo, Colorino, Mammolo",
  notes: "20–22 months in large oak casks. 91 points James Suckling.",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},
             //=============================Bindella Tenuta Vallocaia ---29---Tuscany  end ===============================


             
         //=============================Cantina del Redi ---30---Tuscany  start ===============================
         {
  id: 133,
  name: "Orbaio",
  country: "Tuscany, Italy",
  image: "/Orbaio, IGT.webp",
  description:
    "Cantina del Redi Orbaio 2021 — 14% ABV. A Tuscan red blend combining Sangiovese, Cabernet Sauvignon and Merlot, offering rich fruit character, balanced structure and a smooth finish.",
  grapes: ["Sangiovese", "Cabernet Sauvignon", "Merlot"],
  style: "Toscana IGT",
  winery: "Cantina del Redi",
  vintage: "2021",
  blend: "Sangiovese, Cabernet & Merlot",
  wholesaleCase: "$231.96",
  wholesaleBottle: "$19.33",
  retailBottle: "$28.99",
},

{
  id: 134,
  name: "Vino Nobile di Montepulciano Riserva 'Briareo'",
  country: "Tuscany, Italy",
  image: "/Vino Nobile di Montepulciano Riserva Briareo, DOCG.webp",
  description:
    "Cantina del Redi Vino Nobile di Montepulciano Riserva 'Briareo' 2019 — 14% ABV. A refined DOCG Riserva showcasing the classic character and structure of Tuscan Sangiovese.",
  grapes: ["Sangiovese"],
  style: "Vino Nobile di Montepulciano Riserva DOCG",
  winery: "Cantina del Redi",
  vintage: "2019",
  wholesaleCase: "$287.88",
  wholesaleBottle: "$23.99",
  retailBottle: "$35.99",
},

{
  id: 135,
  name: "Riccio Toscana Bianco",
  country: "Tuscany, Italy",
  image: "/Riccio Toscana Bianco, IGT.webp",
  description:
    "Cantina del Redi Riccio Toscana Bianco 2024 — 12.5% ABV. A fresh and elegant Tuscan white wine with bright fruit character, refreshing acidity and a clean finish.",
  grapes: ["Trebbiano", "Malvasia"],
  style: "Toscana Bianco IGT",
  winery: "Cantina del Redi",
  vintage: "2024",
  wholesaleCase: "$144.00",
  wholesaleBottle: "$12.00",
  retailBottle: "$18.00",
},
            //=============================Cantina del Redi ---30---Tuscany  end ===============================


             //============================Castelli del Grevepesa ---31---Tuscany  start ===============================
             {
  id: 136,
  name: 'Gran Selezione Chianti Classico "Lamole"',
  country: "Tuscany, Italy",
  image: '/Gran Selezione Chianti Classico Lamole, DOCG.webp',
  description:
    'Castelli del Grevepesa Gran Selezione Chianti Classico "Lamole" 2021 — 14% ABV. A prestigious DOCG Gran Selezione expressing the elegant character of Tuscany and Chianti Classico.',
  grapes: ["Sangiovese"],
  style: "Chianti Classico Gran Selezione DOCG",
  winery: "Castelli del Grevepesa",
  vintage: "2021",
  wholesaleCase: "$319.92",
  wholesaleBottle: "$26.66",
  retailBottle: "$39.99",
},

{
  id: 137,
  name: 'Gran Selezione Chianti Classico "Panzano"',
  country: "Tuscany, Italy",
  image: '/Gran Selezione Chianti Classico Panzano, DOCG.webp',
  description:
    'Castelli del Grevepesa Gran Selezione Chianti Classico "Panzano" 2021 — 14% ABV. An elegant and structured DOCG Gran Selezione showcasing the classic Tuscan expression of Chianti Classico.',
  grapes: ["Sangiovese"],
  style: "Chianti Classico Gran Selezione DOCG",
  winery: "Castelli del Grevepesa",
  vintage: "2021",
  wholesaleCase: "$319.92",
  wholesaleBottle: "$26.66",
  retailBottle: "$39.99",
},

{
  id: 138,
  name: "Clemente VII Chianti Classico Riserva",
  country: "Tuscany, Italy",
  image: "/Clemente VII Chianti Classico Riserva, DOCG.webp",
  description:
    "Castelli del Grevepesa Clemente VII Chianti Classico Riserva 2020 — 14% ABV. A refined DOCG Riserva with classic Tuscan character and impressive depth. Rated 94 points by Wine Spectator.",
  grapes: ["Sangiovese"],
  style: "Chianti Classico Riserva DOCG",
  winery: "Castelli del Grevepesa",
  vintage: "2020",
  notes: "94 points Wine Spectator.",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 139,
  name: "Clemente VII Chianti Classico",
  country: "Tuscany, Italy",
  image: "/Clemente VII Chianti Classico, DOCG.webp",
  description:
    "Castelli del Grevepesa Clemente VII Chianti Classico 2021 — 13.5% ABV. A balanced and expressive DOCG Chianti Classico with traditional Tuscan character. Rated 92 points by James Suckling.",
  grapes: ["Sangiovese"],
  style: "Chianti Classico DOCG",
  winery: "Castelli del Grevepesa",
  vintage: "2021",
  notes: "92 points James Suckling.",
  wholesaleCase: "$143.88",
  wholesaleBottle: "$11.99",
  retailBottle: "$17.99",
},

{
  id: 140,
  name: "Giulio de' Medici Chianti Classico Riserva",
  country: "Tuscany, Italy",
  image: "/Giulio de Medici Chianti Classico Riserva, DOCG.webp",
  description:
    "Castelli del Grevepesa Giulio de' Medici Chianti Classico Riserva 2021 — 13.5% ABV. A refined Tuscan Riserva offering structure, fresh fruit and classic Chianti Classico character. Rated 93 points by James Suckling.",
  grapes: ["Sangiovese"],
  style: "Chianti Classico Riserva DOCG",
  winery: "Castelli del Grevepesa",
  vintage: "2021",
  notes: "93 points James Suckling.",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 141,
  name: "Giulio de' Medici Chianti",
  country: "Tuscany, Italy",
  image: "/Giulio de Medici Chianti, DOCG.webp",
  description:
    "Castelli del Grevepesa Giulio de' Medici Chianti 2023 — 12.5% ABV. A fresh and approachable DOCG Chianti with bright fruit character and balanced acidity.",
  grapes: ["Sangiovese"],
  style: "Chianti DOCG",
  winery: "Castelli del Grevepesa",
  vintage: "2023",
  wholesaleCase: "$103.92",
  wholesaleBottle: "$8.66",
  retailBottle: "$12.99",
},

{
  id: 142,
  name: "Collerosso Chianti Colli Fiorentini",
  country: "Tuscany, Italy",
  image: "/Collerosso Chianti Colli Fiorentini, DOCG.webp",
  description:
    "Castelli del Grevepesa Collerosso Chianti Colli Fiorentini 2023 — 13.5% ABV. An elegant Tuscan Chianti offering fresh fruit, lively acidity and a smooth, approachable style.",
  grapes: ["Sangiovese"],
  style: "Chianti Colli Fiorentini DOCG",
  winery: "Castelli del Grevepesa",
  vintage: "2023",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},

{
  id: 143,
  name: "Elianto Vermentino di Toscana",
  country: "Tuscany, Italy",
  image: "/Elianto Vermentino di Toscana, IGT.webp",
  description:
    "Castelli del Grevepesa 'Elianto' Vermentino di Toscana 2022 — 13% ABV. A fresh Tuscan white with bright citrus fruit, refreshing acidity and an elegant mineral finish.",
  grapes: ["Vermentino"],
  style: "Vermentino di Toscana IGT",
  winery: "Castelli del Grevepesa",
  vintage: "2022",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},

{
  id: 144,
  name: "Vermut Rosso",
  country: "Tuscany, Italy",
  image: "/Vermut Rosso.webp",
  description:
    "Castelli del Grevepesa Vermut Rosso — 18% ABV. A rich Italian-style red vermouth with aromatic complexity and a distinctive bittersweet character.",
  grapes: ["Sangiovese"],
  style: "Vermut Rosso",
  winery: "Castelli del Grevepesa",
  vintage: "N/V",
  notes: "750 ML.",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},

{
  id: 145,
  name: "Castelgreve Vin Santo del Chianti",
  country: "Tuscany, Italy",
  image: "/Castelgreve Vin Santo del Chianti, DOC.webp",
  description:
    "Castelli del Grevepesa Castelgreve Vin Santo del Chianti 2020 — 15.5% ABV. A traditional Tuscan Vin Santo DOC offering rich, concentrated character and classic dessert-wine elegance.",
  grapes: ["Trebbiano", "Malvasia"],
  style: "Vin Santo del Chianti DOC",
  winery: "Castelli del Grevepesa",
  vintage: "2020",
  notes: "375 ML.",
  wholesaleCase: "$183.96",
  wholesaleBottle: "$15.33",
  retailBottle: "$22.99",
},

{
  id: 146,
  name: "Clemente VII Vin Santo del Chianti Classico",
  country: "Tuscany, Italy",
  image: "/Clemente VII Vin Santo del Chianti Classico, DOC.webp",
  description:
    "Castelli del Grevepesa Clemente VII Vin Santo del Chianti Classico 2015 — 14% ABV. A traditional Tuscan Vin Santo with concentrated fruit character and refined sweetness.",
  grapes: ["Trebbiano", "Malvasia"],
  style: "Vin Santo del Chianti Classico DOC",
  winery: "Castelli del Grevepesa",
  vintage: "2015",
  notes: "375 ML.",
  wholesaleCase: "$247.92",
  wholesaleBottle: "$20.66",
  retailBottle: "$30.99",
},

{
  id: 147,
  name: "Santa Pazienza Vin Santo del Chianti",
  country: "Tuscany, Italy",
  image: "/Santa Pazienza Vin Santo del Chianti, DOC.webp",
  description:
    "Castelli del Grevepesa Santa Pazienza Vin Santo del Chianti 2013 — 16% ABV. A rich and traditional Tuscan Vin Santo with concentrated character and an elegant, lingering finish.",
  grapes: ["Trebbiano", "Malvasia"],
  style: "Vin Santo del Chianti DOC",
  winery: "Castelli del Grevepesa",
  vintage: "2013",
  notes: "375 ML.",
  wholesaleCase: "$263.88",
  wholesaleBottle: "$21.99",
  retailBottle: "$32.99",
},
    //=============================Castelli del Grevepesa ---31---Tuscany  end ===============================


              //=============================Castello di Bibbione ---32---Tuscany  start ===============================
              {
  id: 148,
  name: "Chianti Classico Riserva",
  country: "Tuscany, Italy",
  image: "/Chianti Classico Riserva, DOCG.webp",
  description:
    "Castello di Bibbione Chianti Classico Riserva 2020 — 13.5% ABV. A refined DOCG Riserva expressing the classic character of Tuscany with elegant fruit, balanced acidity and structured depth.",
  grapes: ["Sangiovese"],
  style: "Chianti Classico Riserva DOCG",
  winery: "Castello di Bibbione",
  vintage: "2020",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},
    //=============================Castello di Bibbione ---32---Tuscany    end ===============================














      //=============================Castello Romitorio---33---Tuscany    start ===============================
      {
  id: 149,
  name: "Brunello di Montalcino Filo di Seta",
  country: "Tuscany, Italy",
  image: "/Brunello di Montalcino, Filo di Seta, DOCG.webp",
  description:
    "Castello Romitorio Brunello di Montalcino Filo di Seta 2020 — 14.5% ABV. A prestigious DOCG Brunello aged 30 months in oak, offering exceptional depth and structure. Rated 98 points by Robert Parker / Wine Advocate.",
  grapes: ["Sangiovese"],
  style: "Brunello di Montalcino DOCG",
  winery: "Castello Romitorio",
  vintage: "2020",
  notes: "30 months in oak. 98 points Robert Parker / Wine Advocate.",
  wholesaleCase: "$1,104.00",
  wholesaleBottle: "$92.00",
  retailBottle: "$138.00",
},

{
  id: 150,
  name: "Romitorio",
  country: "Tuscany, Italy",
  image: "/Romitorio, IGT.webp",
  description:
    "Castello Romitorio Romitorio 2021 — 14% ABV. A Tuscan red blend of Syrah and Petit Verdot with rich fruit character and refined structure. Rated 93 points by James Suckling.",
  grapes: ["Syrah", "Petit Verdot"],
  style: "Toscana IGT",
  winery: "Castello Romitorio",
  vintage: "2021",
  notes: "93 points James Suckling.",
  wholesaleCase: "$207.96",
  wholesaleBottle: "$17.33",
  retailBottle: "$25.99",
},

{
  id: 151,
  name: "Brio Toscano",
  country: "Tuscany, Italy",
  image: "/Brio Toscano, IGT.webp",
  description:
    "Castello Romitorio Brio Toscano 2022 — 13.5% ABV. A 100% Sangiovese Tuscan wine aged for several months in oak, offering vibrant fruit and elegant structure.",
  grapes: ["Sangiovese"],
  style: "Toscana IGT",
  winery: "Castello Romitorio",
  vintage: "2022",
  notes: "Several months in oak.",
  wholesaleCase: "$183.96",
  wholesaleBottle: "$15.33",
  retailBottle: "$22.99",
},

{
  id: 152,
  name: "Brunello di Montalcino Magnum",
  country: "Tuscany, Italy",
  image: "/Brunello di Montalcino, DOCG Magnum.webp",
  description:
    "Castello Romitorio Brunello di Montalcino Magnum 2018 — 14.5% ABV. A classic DOCG Brunello di Montalcino presented in Magnum format, showcasing the elegant and structured character of Sangiovese.",
  grapes: ["Sangiovese"],
  style: "Brunello di Montalcino DOCG",
  winery: "Castello Romitorio",
  vintage: "2018",
  format: "Magnum",
  wholesaleCase: "$132.66",
  wholesaleBottle: "$132.66",
  retailBottle: "$198.99",
},
      //=============================Castello Romitorio ---33---Tuscany    end ===============================





           //=============================Crociani ---34---Tuscany    start ===============================
      {
  id: 153,
  name: "Vino Nobile di Montepulciano",
  country: "Tuscany, Italy",
  image: "/Vino Nobile di Montepulciano, DOCG.webp",
  description:
    "Crociani Vino Nobile di Montepulciano 2020 — 13.5% ABV. Produced from a 20-acre farm in Montepulciano, this DOCG wine showcases the classic Tuscan character of the region.",
  grapes: ["Sangiovese"],
  style: "Vino Nobile di Montepulciano DOCG",
  winery: "Crociani",
  vintage: "2020",
  wholesaleCase: "$183.96",
  wholesaleBottle: "$15.33",
  retailBottle: "$22.99",
},
      //=============================Crociani ---34---Tuscany    end ===============================





          //=============================Donna Olga ---35---Tuscany    start ===============================
      {
  id: 154,
  name: "Brunello di Montalcino",
  country: "Tuscany, Italy",
  image: "/Brunello di Montalcino, DOCG Donna Olga.webp",
  description:
    "Donna Olga Brunello di Montalcino 2020 — 15% ABV. A refined DOCG Brunello showcasing the classic Tuscan character of Sangiovese. Rated 92 points by James Suckling.",
  grapes: ["Sangiovese"],
  style: "Brunello di Montalcino DOCG",
  winery: "Donna Olga",
  vintage: "2020",
  notes: "92 points James Suckling.",
  wholesaleCase: "$519.96",
  wholesaleBottle: "$43.33",
  retailBottle: "$64.99",
},

{
  id: 155,
  name: "Clos degli Amodeo",
  country: "Tuscany, Italy",
  image: "/Clos degli Amodeo, IGT.webp",
  description:
    "Donna Olga Clos degli Amodeo 2019 — 14% ABV. An elegant Tuscan IGT blend of Cabernet Sauvignon and Sangiovese, offering structure, fruit character and refined balance. Rated 92 points by James Suckling.",
  grapes: ["Cabernet Sauvignon", "Sangiovese"],
  style: "Toscana IGT",
  winery: "Donna Olga",
  vintage: "2019",
  notes: "92 points James Suckling.",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},
      //=============================Donna Olga ---35---Tuscany    end ===============================









                //=============================Fattoria Svetoni ---36---Tuscany    start ===============================
      {
  id: 156,
  name: "Valicaïa",
  country: "Tuscany, Italy",
  image: "/Valicaia, IGT.webp",
  description:
    "Fattoria Valacchi Valicaïa 2018 — 14% ABV. A rich Tuscan blend of Sangiovese, Cabernet Sauvignon and Merlot, aged for 18 months in 225 L French barriques.",
  grapes: ["Sangiovese", "Cabernet Sauvignon", "Merlot"],
  style: "Toscana IGT",
  winery: "Fattoria Valacchi",
  vintage: "2018",
  notes: "60% Sangiovese, 20% Cabernet Sauvignon, 20% Merlot. 18 months in 225 L French barriques.",
  wholesaleCase: "$319.92",
  wholesaleBottle: "$26.66",
  retailBottle: "$39.99",
},

{
  id: 157,
  name: "Gelso Chianti Riserva",
  country: "Tuscany, Italy",
  image: "/Gelso Chianti Riserva, DOCG.webp",
  description:
    "Fattoria Valacchi Gelso Chianti Riserva 2020 — 14% ABV. A refined DOCG Chianti Riserva with classic Tuscan character, balanced structure and expressive fruit.",
  grapes: ["Sangiovese"],
  style: "Chianti Riserva DOCG",
  winery: "Fattoria Valacchi",
  vintage: "2020",
  wholesaleCase: "$167.88",
  wholesaleBottle: "$13.99",
  retailBottle: "$20.99",
},

{
  id: 158,
  name: "Gelso Chianti",
  country: "Tuscany, Italy",
  image: "/Gelso Chianti, DOCG.webp",
  description:
    "Fattoria Valacchi Gelso Chianti 2020 — 13% ABV. A fresh and approachable DOCG Chianti expressing the traditional character of Tuscan Sangiovese.",
  grapes: ["Sangiovese"],
  style: "Chianti DOCG",
  winery: "Fattoria Valacchi",
  vintage: "2020",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},
      //============================Fattoria Svetoni ---36---Tuscany    end ===============================








                //=============================La Gerla ---37---Tuscany    start ===============================
      {
  id: 159,
  name: "Brunello di Montalcino - La Pieve",
  country: "Tuscany, Italy",
  image: "/Brunello di Montalcino - La Pieve, DOCG.webp",
  description:
    "La Gerla Brunello di Montalcino - La Pieve 2019 — 14.5% ABV. A prestigious DOCG Brunello showcasing the elegant and structured character of Montalcino.",
  grapes: ["Sangiovese"],
  style: "Brunello di Montalcino DOCG",
  winery: "La Gerla",
  vintage: "2019",
  wholesaleCase: "$919.92",
  wholesaleBottle: "$76.66",
  retailBottle: "$115.00",
},

{
  id: 160,
  name: "Brunello di Montalcino - La Pieve",
  country: "Tuscany, Italy",
  image: "/Brunello di Montalcino - La Pieve, DOCG.webp",
  description:
    "La Gerla Brunello di Montalcino - La Pieve 2017 — 14% ABV. A refined DOCG Brunello with classic Tuscan depth, structure and Sangiovese character.",
  grapes: ["Sangiovese"],
  style: "Brunello di Montalcino DOCG",
  winery: "La Gerla",
  vintage: "2017",
  wholesaleCase: "$919.92",
  wholesaleBottle: "$76.66",
  retailBottle: "$115.00",
},

{
  id: 161,
  name: "Brunello di Montalcino",
  country: "Tuscany, Italy",
  image: "/Brunello di Montalcino, DOCG.webp",
  description:
    "La Gerla Brunello di Montalcino 2019 — 14.5% ABV. An outstanding DOCG Brunello with refined structure and classic Montalcino character. Rated 95 points by James Suckling and 94 points by Robert Parker.",
  grapes: ["Sangiovese"],
  style: "Brunello di Montalcino DOCG",
  winery: "La Gerla",
  vintage: "2019",
  notes: "95 points James Suckling, 94 points Robert Parker.",
  wholesaleCase: "$719.88",
  wholesaleBottle: "$59.99",
  retailBottle: "$89.99",
},

{
  id: 162,
  name: "Birba",
  country: "Tuscany, Italy",
  image: "/Birba, IGT.webp",
  description:
    "La Gerla Birba 2020 — 14% ABV. An expressive Tuscan IGT wine offering rich fruit character, balance and a distinctive regional style.",
  grapes: ["Sangiovese"],
  style: "Toscana IGT",
  winery: "La Gerla",
  vintage: "2020",
  wholesaleCase: "$399.96",
  wholesaleBottle: "$33.33",
  retailBottle: "$49.99",
},

{
  id: 163,
  name: "Rosso di Montalcino",
  country: "Tuscany, Italy",
  image: "/Rosso di Montalcino, DOC.webp",
  description:
    "La Gerla Rosso di Montalcino 2020 — 14% ABV. A vibrant DOC red expressing the fresh, elegant and approachable side of Montalcino's Sangiovese.",
  grapes: ["Sangiovese"],
  style: "Rosso di Montalcino DOC",
  winery: "La Gerla",
  vintage: "2020",
  wholesaleCase: "$319.92",
  wholesaleBottle: "$26.66",
  retailBottle: "$39.99",
},

{
  id: 164,
  name: "Poggio gli Angeli",
  country: "Tuscany, Italy",
  image: "/Poggio gli Angeli, IGT.webp",
  description:
    "La Gerla Poggio gli Angeli 2021 — 14% ABV. An elegant Tuscan IGT wine with expressive fruit, balanced structure and a refined finish.",
  grapes: ["Sangiovese"],
  style: "Toscana IGT",
  winery: "La Gerla",
  vintage: "2021",
  wholesaleCase: "$199.92",
  wholesaleBottle: "$16.66",
  retailBottle: "$24.99",
},
      //=============================La Gerla ---37---Tuscany    end ===============================








                //=============================Le Cacce degli Amodeo ---38---Tuscany    start ===============================
      {
  id: 165,
  name: "Brunello di Montalcino",
  country: "Tuscany, Italy",
  image: "/Brunello di Montalcino, DOCG.webp",
  description:
    "Le Cacce degli Amodeo Brunello di Montalcino 2020 — 15% ABV. A prestigious DOCG Brunello showcasing the rich, structured character of Montalcino's Sangiovese. Rated 93 points by James Suckling.",
  grapes: ["Sangiovese"],
  style: "Brunello di Montalcino DOCG",
  winery: "Le Cacce degli Amodeo",
  vintage: "2020",
  notes: "93 points James Suckling.",
  wholesaleCase: "$383.88",
  wholesaleBottle: "$31.99",
  retailBottle: "$47.99",
},
      //=============================Le Cacce degli Amodeo ---38---Tuscany    end ===============================









                //=============================Nittardi---39---Tuscany    start ===============================
      {
  id: 166,
  name: "Nectar Dei",
  country: "Tuscany, Italy",
  image: "/Nectar Dei, DOC Maremma Toscana.webp",
  description:
    "Nittardi Nectar Dei 2021 — 15% ABV. A powerful Maremma Toscana DOC blend of Cabernet Sauvignon, Merlot, Petit Verdot and Syrah, aged 24 months in French oak barriques, with 30% new oak. Rated 93 points by James Suckling and Robert Parker.",
  grapes: ["Cabernet Sauvignon", "Merlot", "Petit Verdot", "Syrah"],
  style: "Maremma Toscana DOC",
  winery: "Nittardi",
  vintage: "2021",
  notes: "93 JS, 93 RP. 24 months in French oak barriques, 30% new.",
  wholesaleCase: "$591.96",
  wholesaleBottle: "$49.33",
  retailBottle: "$73.99",
},

{
  id: 167,
  name: "Ad Astra",
  country: "Tuscany, Italy",
  image: "/Ad Astra, DOC Maremma Toscana.webp",
  description:
    "Nittardi Ad Astra 2023 — 13.5% ABV. A Tuscan blend of Sangiovese, Cabernet Sauvignon and Cabernet Franc, aged 14 months in new and used barriques and tonneaux.",
  grapes: ["Sangiovese", "Cabernet Sauvignon", "Cabernet Franc"],
  style: "Maremma Toscana DOC",
  winery: "Nittardi",
  vintage: "2023",
  notes: "14 months in new and used barrique and tonneaux.",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},

{
  id: 168,
  name: "Chianti Classico Gran Selezione",
  country: "Tuscany, Italy",
  image: "/Chianti Classico Gran Selezione, DOCG.webp",
  description:
    "Nittardi Chianti Classico Gran Selezione 2020 — 15% ABV. A 100% Sangiovese Gran Selezione aged 28 months in Austrian and French barrels. Rated 94 points by Robert Parker and 93 points by James Suckling.",
  grapes: ["Sangiovese"],
  style: "Chianti Classico Gran Selezione DOCG",
  winery: "Nittardi",
  vintage: "2020",
  notes: "94 RP, 93 JS. 28 months in Austrian and French barrels.",
  wholesaleCase: "$527.88",
  wholesaleBottle: "$43.99",
  retailBottle: "$65.99",
},

{
  id: 169,
  name: "Chianti Classico Riserva",
  country: "Tuscany, Italy",
  image: "/Chianti Classico Riserva, DOCG.webp",
  description:
    "Nittardi Chianti Classico Riserva 2019 — 14.5% ABV. A refined blend of Sangiovese and Merlot aged 24 months in French barriques and tonneaux. Rated 93 points by James Suckling and awarded Tre Bicchieri.",
  grapes: ["Sangiovese", "Merlot"],
  style: "Chianti Classico Riserva DOCG",
  winery: "Nittardi",
  vintage: "2019",
  notes: "95% Sangiovese, 5% Merlot. JS 93 pts, Tre Bicchieri.",
  wholesaleCase: "$399.96",
  wholesaleBottle: "$33.33",
  retailBottle: "$49.99",
},

{
  id: 170,
  name: "Chianti Classico 'Casanuova di Nittardi'",
  country: "Tuscany, Italy",
  image: "/Chianti Classico Casanuova di Nittardi, DOCG.webp",
  description:
    "Nittardi Chianti Classico 'Casanuova di Nittardi' 2021 — 14.5% ABV. A 100% Sangiovese Chianti Classico aged 14 months in new and used French oak barrels. Rated 93 points by Robert Parker and 92 points by James Suckling.",
  grapes: ["Sangiovese"],
  style: "Chianti Classico DOCG",
  winery: "Nittardi",
  vintage: "2021",
  notes: "93 RP, 92 JS. 14 months in new and used French oak barrels.",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},

{
  id: 171,
  name: "Chianti Classico 'Belcanto'",
  country: "Tuscany, Italy",
  image: "/Chianti Classico Belcanto, DOCG.webp",
  description:
    "Nittardi Chianti Classico 'Belcanto' 2022 — 14% ABV. A vibrant Chianti Classico made primarily from Sangiovese with other indigenous Tuscan grapes. Rated 92 points by James Suckling.",
  grapes: ["Sangiovese", "Indigenous Grapes"],
  style: "Chianti Classico DOCG",
  winery: "Nittardi",
  vintage: "2022",
  notes: "90% Sangiovese, 10% other indigenous grapes. 92 JS.",
  wholesaleCase: "$175.92",
  wholesaleBottle: "$14.66",
  retailBottle: "$21.99",
},

{
  id: 172,
  name: "Vermentino 'Ben'",
  country: "Tuscany, Italy",
  image: "/Vermentino Ben, DOC.webp",
  description:
    "Nittardi Vermentino 'Ben' 2024 — 12.5% ABV. A fresh Tuscan Vermentino with bright acidity, elegant fruit character and a refreshing finish.",
  grapes: ["Vermentino"],
  style: "Vermentino DOC",
  winery: "Nittardi",
  vintage: "2024",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 173,
  name: "Cosmo Toscana Bianco",
  country: "Tuscany, Italy",
  image: "/Cosmo Toscana Bianco, IGT.webp",
  description:
    "Nittardi Cosmo Toscana Bianco 2024 — 13% ABV. An elegant Tuscan white made from 100% Roussanne, offering refined fruit character and a fresh, balanced finish.",
  grapes: ["Roussanne"],
  style: "Toscana Bianco IGT",
  winery: "Nittardi",
  vintage: "2024",
  wholesaleCase: "$263.88",
  wholesaleBottle: "$21.99",
  retailBottle: "$32.99",
},
      //=============================Nittardi---39---Tuscany    end ===============================





                //=============================Petra Azienda Agricola ---40---Tuscany    start ===============================
      {
  id: 174,
  name: "Petra",
  country: "Tuscany, Italy",
  image: "/Petra, IGT.webp",
  description:
    "Petra Azienda Agricola Petra 2021 — 14.5% ABV. From organic and sustainable vineyards in Suvereto, Maremma. A structured blend of Cabernet Sauvignon, Merlot and Cabernet Franc.",
  grapes: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc"],
  style: "Toscana IGT",
  winery: "Petra Azienda Agricola",
  vintage: "2021",
  notes: "60% Cabernet Sauvignon, 28% Merlot, 12% Cabernet Franc. Organic and sustainable vineyards.",
  wholesaleCase: "$655.92",
  wholesaleBottle: "$54.66",
  retailBottle: "$81.99",
},

{
  id: 175,
  name: "Potenti",
  country: "Tuscany, Italy",
  image: "/Potenti, IGT.webp",
  description:
    "Petra Azienda Agricola Potenti 2021 — 14.5% ABV. A rich and powerful Tuscan IGT made from 100% Cabernet Sauvignon, expressing the character of Suvereto.",
  grapes: ["Cabernet Sauvignon"],
  style: "Toscana IGT",
  winery: "Petra Azienda Agricola",
  vintage: "2021",
  wholesaleCase: "$359.88",
  wholesaleBottle: "$29.99",
  retailBottle: "$44.99",
},

{
  id: 176,
  name: "Quercegobbe",
  country: "Tuscany, Italy",
  image: "/Quercegobbe, IGT.webp",
  description:
    "Petra Azienda Agricola Quercegobbe 2018 — 14% ABV. A 100% Merlot Tuscan IGT offering generous fruit character, elegance and a refined structure.",
  grapes: ["Merlot"],
  style: "Toscana IGT",
  winery: "Petra Azienda Agricola",
  vintage: "2018",
  wholesaleCase: "$343.92",
  wholesaleBottle: "$28.66",
  retailBottle: "$42.99",
},

{
  id: 177,
  name: "Hebo",
  country: "Tuscany, Italy",
  image: "/Hebo, IGT.webp",
  description:
    "Petra Azienda Agricola Hebo 2020 — 14% ABV. A balanced Tuscan blend of Cabernet Sauvignon, Merlot and Sangiovese with expressive fruit and approachable structure.",
  grapes: ["Cabernet Sauvignon", "Merlot", "Sangiovese"],
  style: "Toscana IGT",
  winery: "Petra Azienda Agricola",
  vintage: "2020",
  notes: "50% Cabernet Sauvignon, 40% Merlot, 10% Sangiovese.",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},

{
  id: 178,
  name: "Zingari",
  country: "Tuscany, Italy",
  image: "/Zingari, IGT.webp",
  description:
    "Petra Azienda Agricola Zingari 2022 — 13.5% ABV. A distinctive Tuscan IGT blend combining Merlot, Sangiovese, Syrah and Petit Verdot for a vibrant and expressive style.",
  grapes: ["Merlot", "Sangiovese", "Syrah", "Petit Verdot"],
  style: "Toscana IGT",
  winery: "Petra Azienda Agricola",
  vintage: "2022",
  notes: "25% Merlot, 25% Sangiovese, 25% Syrah, 25% Petit Verdot.",
  wholesaleCase: "$135.96",
  wholesaleBottle: "$11.33",
  retailBottle: "$16.99",
},
      //=============================Petra Azienda Agricola ---40---Tuscany    end ===============================






                //=============================Pietranera ---41---Tuscany    start ===============================
      {
  id: 179,
  name: "Brunello di Montalcino",
  country: "Tuscany, Italy",
  image: "/Brunello di Montalcino, DOCG Pietranera.webp",
  description:
    "Pietranera Brunello di Montalcino 2020 — 14.5% ABV. A prestigious DOCG Brunello expressing the classic character of Montalcino's Sangiovese, with refined structure and depth. Rated 92 points by James Suckling.",
  grapes: ["Sangiovese"],
  style: "Brunello di Montalcino DOCG",
  winery: "Pietranera",
  vintage: "2020",
  notes: "92 points James Suckling.",
  wholesaleCase: "$423.96",
  wholesaleBottle: "$35.33",
  retailBottle: "$52.99",
},

{
  id: 180,
  name: "Rosso di Montalcino",
  country: "Tuscany, Italy",
  image: "/Rosso di Montalcino, DOC Pietranera.webp",
  description:
    "Pietranera Rosso di Montalcino 2023 — 14.5% ABV. A fresh and elegant DOC red showcasing the approachable and vibrant side of Montalcino's Sangiovese.",
  grapes: ["Sangiovese"],
  style: "Rosso di Montalcino DOC",
  winery: "Pietranera",
  vintage: "2023",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},
      //=============================Pietranera ---41---Tuscany    end ===============================





                      //=============================Poggio Stella ---42---Tuscany    start ===============================
      {
  id: 181,
  name: "Vino Nobile di Montepulciano Riserva",
  country: "Tuscany, Italy",
  image: "/Vino Nobile di Montepulciano Riserva, DOCG.webp",
  description:
    "Poggio Stella Vino Nobile di Montepulciano Riserva 2017 — 13.5% ABV. A refined DOCG Riserva from Montepulciano, offering classic Tuscan character and elegant structure. Rated 94 points by Luca Maroni.",
  grapes: ["Sangiovese"],
  style: "Vino Nobile di Montepulciano Riserva DOCG",
  winery: "Poggio Stella",
  vintage: "2017",
  notes: "94 points Luca Maroni. 6-pack wooden box.",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 182,
  name: "Vino Nobile di Montepulciano",
  country: "Tuscany, Italy",
  image: "/Vino Nobile di Montepulciano, DOCG.webp",
  description:
    "Poggio Stella Vino Nobile di Montepulciano 2019 — 14% ABV. A classic Tuscan DOCG wine with balanced structure and expressive Montepulciano character. Rated 93 points by Luca Maroni.",
  grapes: ["Sangiovese"],
  style: "Vino Nobile di Montepulciano DOCG",
  winery: "Poggio Stella",
  vintage: "2019",
  notes: "93 points Luca Maroni. 6-pack wooden box.",
  wholesaleCase: "$151.92",
  wholesaleBottle: "$12.66",
  retailBottle: "$18.99",
},
      //=============================Poggio Stella ---42---Tuscany    end ===============================






                      //=============================Poggiotondo ---43---Tuscany    start ===============================
      {
  id: 183,
  name: "Brunello di Montalcino",
  country: "Tuscany, Italy",
  image: "/Brunello di Montalcino, DOCG Poggiotondo.webp",
  description:
    "Poggiotondo Brunello di Montalcino 2020 — 14.5% ABV. A prestigious DOCG Brunello expressing the classic character of Montalcino's Sangiovese with refined structure and depth. Rated 92 points by James Suckling.",
  grapes: ["Sangiovese"],
  style: "Brunello di Montalcino DOCG",
  winery: "Poggiotondo",
  vintage: "2020",
  notes: "92 points James Suckling.",
  wholesaleCase: "$407.88",
  wholesaleBottle: "$33.99",
  retailBottle: "$50.99",
},
      //=============================Poggiotondo---43---Tuscany    end ===============================















// Tenuta Ghiaccio Forte
{
  id: 184,
  heading: "TENUTA GHIACCIO FORTE",
  name: "Morellino di Scansano",
  country: "Tuscany, Italy",
  image: "/Morellino di Scansano, DOCG.webp",
  description:
    "Tenuta Ghiaccio Forte Morellino di Scansano 2021 — 14.5% ABV. A classic Tuscan DOCG wine made from 100% Sangiovese, expressing the vibrant character of Maremma.",
  grapes: ["Sangiovese"],
  style: "Morellino di Scansano DOCG",
  winery: "Tenuta Ghiaccio Forte",
  vintage: "2021",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

// Tenuta Friggiali
{
  id: 185,
  heading: "TENUTA FRIGGIALI",
  name: "Brunello di Montalcino",
  country: "Tuscany, Italy",
  image: "/Brunello di Montalcino, DOCG Tenuta Friggiali.webp",
  description:
    "Tenuta Friggiali Brunello di Montalcino 2020 — 14.5% ABV. A prestigious DOCG Brunello showcasing the classic structure and depth of Montalcino's Sangiovese. Rated 92 points by James Suckling.",
  grapes: ["Sangiovese"],
  style: "Brunello di Montalcino DOCG",
  winery: "Tenuta Friggiali",
  vintage: "2020",
  notes: "92 points James Suckling.",
  wholesaleCase: "$423.96",
  wholesaleBottle: "$35.33",
  retailBottle: "$52.99",
},

// Tenuta Pian del Gallo
{
  id: 186,
  heading: "TENUTA PIAN DEL GALLO",
  name: "Chianti Classico Riserva",
  country: "Tuscany, Italy",
  image: "/Chianti Classico Riserva, DOCG Tenuta Pian del Gallo.webp",
  description:
    "Tenuta Pian del Gallo Chianti Classico Riserva 2022 — 14.5% ABV. A 100% Sangiovese Riserva with six months of aging in tonneaux, offering classic Tuscan structure and elegance.",
  grapes: ["Sangiovese"],
  style: "Chianti Classico Riserva DOCG",
  winery: "Tenuta Pian del Gallo",
  vintage: "2022",
  notes: "100% Sangiovese, 6 months in tonneaux.",
  wholesaleCase: "$271.92",
  wholesaleBottle: "$22.66",
  retailBottle: "$33.99",
},

{
  id: 187,
  heading: "TENUTA PIAN DEL GALLO",
  name: "Chianti Classico",
  country: "Tuscany, Italy",
  image: "/Chianti Classico, DOCG Tenuta Pian del Gallo.webp",
  description:
    "Tenuta Pian del Gallo Chianti Classico 2022 — 13% ABV. A traditional 100% Sangiovese Chianti Classico with fresh fruit, balanced acidity and Tuscan character.",
  grapes: ["Sangiovese"],
  style: "Chianti Classico DOCG",
  winery: "Tenuta Pian del Gallo",
  vintage: "2022",
  wholesaleCase: "$199.92",
  wholesaleBottle: "$16.66",
  retailBottle: "$24.99",
},

{
  id: 188,
  heading: "TENUTA PIAN DEL GALLO",
  name: "Merlot Toscana 'Contessa Eletta'",
  country: "Tuscany, Italy",
  image: "/Merlot Toscana Contessa Eletta, IGP.webp",
  description:
    "Tenuta Pian del Gallo Merlot Toscana 'Contessa Eletta' 2022 — 14% ABV. A refined Tuscan IGP made from 100% Merlot, offering generous fruit character and elegant structure.",
  grapes: ["Merlot"],
  style: "Toscana IGP",
  winery: "Tenuta Pian del Gallo",
  vintage: "2022",
  notes: "100% Merlot.",
  wholesaleCase: "$399.96",
  wholesaleBottle: "$33.33",
  retailBottle: "$49.99",
},

// Vecchia Cantina
{
  id: 189,
  heading: "VECCHIA CANTINA",
  name: "Vino Nobile di Montepulciano",
  country: "Tuscany, Italy",
  image: "/Vino Nobile di Montepulciano, DOCG Vecchia Cantina.webp",
  description:
    "Vecchia Cantina Vino Nobile di Montepulciano 2019 — 14% ABV. A classic Tuscan DOCG wine with expressive Sangiovese character and balanced structure. Rated 90 points by James Suckling.",
  grapes: ["Sangiovese"],
  style: "Vino Nobile di Montepulciano DOCG",
  winery: "Vecchia Cantina",
  vintage: "2019",
  notes: "90 points James Suckling.",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 190,
  heading: "VECCHIA CANTINA",
  name: "Rosso di Montepulciano",
  country: "Tuscany, Italy",
  image: "/Rosso di Montepulciano, DOC Vecchia Cantina.webp",
  description:
    "Vecchia Cantina Rosso di Montepulciano 2024 — 12.5% ABV. A fresh and approachable Tuscan red with vibrant fruit character and classic Montepulciano style.",
  grapes: ["Sangiovese"],
  style: "Rosso di Montepulciano DOC",
  winery: "Vecchia Cantina",
  vintage: "2024",
  wholesaleCase: "$95.88",
  wholesaleBottle: "$7.99",
  retailBottle: "$11.99",
},

{
  id: 191,
  heading: "VECCHIA CANTINA",
  name: "Chianti Classico",
  country: "Tuscany, Italy",
  image: "/Chianti Classico, DOCG Vecchia Cantina.webp",
  description:
    "Vecchia Cantina Chianti Classico 2024 — 13% ABV. A traditional Tuscan DOCG red with fresh Sangiovese fruit, balanced acidity and an approachable finish.",
  grapes: ["Sangiovese"],
  style: "Chianti Classico DOCG",
  winery: "Vecchia Cantina",
  vintage: "2024",
  wholesaleCase: "$79.92",
  wholesaleBottle: "$6.66",
  retailBottle: "$9.99",
},

{
  id: 192,
  heading: "VECCHIA CANTINA",
  name: "Campaltino Toscano Rosso",
  country: "Tuscany, Italy",
  image: "/Campaltino Toscano Rosso, IGT.webp",
  description:
    "Vecchia Cantina Campaltino Toscano Rosso 2022 — 13.5% ABV. A Tuscan IGT blend of Sangiovese and Merlot with approachable fruit and balanced structure.",
  grapes: ["Sangiovese", "Merlot"],
  style: "Toscana Rosso IGT",
  winery: "Vecchia Cantina",
  vintage: "2022",
  wholesaleCase: "$63.96",
  wholesaleBottle: "$5.33",
  retailBottle: "$7.99",
},

{
  id: 193,
  heading: "VECCHIA CANTINA",
  name: "Campaltino Toscano Bianco",
  country: "Tuscany, Italy",
  image: "/Campaltino Toscano Bianco, IGT.webp",
  description:
    "Vecchia Cantina Campaltino Toscano Bianco 2022 — 12.5% ABV. A fresh Tuscan white blend of Trebbiano Toscano and Chardonnay.",
  grapes: ["Trebbiano Toscano", "Chardonnay"],
  style: "Toscana Bianco IGT",
  winery: "Vecchia Cantina",
  vintage: "2022",
  wholesaleCase: "$63.96",
  wholesaleBottle: "$5.33",
  retailBottle: "$7.99",
},

// Vicchiomaggio
{
  id: 194,
  heading: "VICCHIOMAGGIO",
  name: "Ripa delle More",
  country: "Tuscany, Italy",
  image: "/Ripa delle More, IGT.webp",
  description:
    "Vicchiomaggio Ripa delle More 2023 — 14% ABV. A refined Tuscan IGT blend of Sangiovese, Cabernet Sauvignon and Merlot.",
  grapes: ["Sangiovese", "Cabernet Sauvignon", "Merlot"],
  style: "Toscana IGT",
  winery: "Vicchiomaggio",
  vintage: "2023",
  wholesaleCase: "$319.92",
  wholesaleBottle: "$26.66",
  retailBottle: "$39.99",
},

{
  id: 195,
  heading: "VICCHIOMAGGIO",
  name: "Le Bolle Chianti Classico Gran Selezione",
  country: "Tuscany, Italy",
  image: "/Le Bolle Chianti Classico Gran Selezione, DOCG.webp",
  description:
    "Vicchiomaggio Le Bolle Chianti Classico Gran Selezione 2019 — 13.5% ABV. A 100% Sangiovese Gran Selezione aged 26 months in new French oak.",
  grapes: ["Sangiovese"],
  style: "Chianti Classico Gran Selezione DOCG",
  winery: "Vicchiomaggio",
  vintage: "2019",
  notes: "100% Sangiovese, 26 months in new French oak.",
  wholesaleCase: "$599.88",
  wholesaleBottle: "$49.99",
  retailBottle: "$74.99",
},

{
  id: 196,
  heading: "VICCHIOMAGGIO",
  name: "Vigna La Prima Chianti Classico Riserva",
  country: "Tuscany, Italy",
  image: "/Vigna La Prima Chianti Classico Riserva, DOCG.webp",
  description:
    "Vicchiomaggio Vigna La Prima Chianti Classico Riserva 2022 — 14% ABV. A 100% Sangiovese wine showcasing the elegant and structured character of Chianti Classico.",
  grapes: ["Sangiovese"],
  style: "Chianti Classico Riserva DOCG",
  winery: "Vicchiomaggio",
  vintage: "2022",
  notes: "Gran Selezione, 100% Sangiovese.",
  wholesaleCase: "$479.88",
  wholesaleBottle: "$39.99",
  retailBottle: "$59.99",
},

{
  id: 197,
  heading: "VICCHIOMAGGIO",
  name: "Agostino Petri Chianti Classico Riserva",
  country: "Tuscany, Italy",
  image: "/Agostino Petri Chianti Classico Riserva, DOCG.webp",
  description:
    "Vicchiomaggio Agostino Petri Chianti Classico Riserva 2022 — 14% ABV. An elegant Tuscan blend of Sangiovese and Cabernet Sauvignon.",
  grapes: ["Sangiovese", "Cabernet Sauvignon"],
  style: "Chianti Classico Riserva DOCG",
  winery: "Vicchiomaggio",
  vintage: "2022",
  wholesaleCase: "$207.96",
  wholesaleBottle: "$17.33",
  retailBottle: "$25.99",
},

{
  id: 198,
  heading: "VICCHIOMAGGIO",
  name: "Guado Alto Chianti Classico",
  country: "Tuscany, Italy",
  image: "/Guado Alto Chianti Classico, DOCG.webp",
  description:
    "Vicchiomaggio Guado Alto Chianti Classico 2023 — 13.5% ABV. A 100% Sangiovese Chianti Classico aged 10 months in oak.",
  grapes: ["Sangiovese"],
  style: "Chianti Classico DOCG",
  winery: "Vicchiomaggio",
  vintage: "2023",
  notes: "100% Sangiovese, 10 months in oak.",
  wholesaleCase: "$199.92",
  wholesaleBottle: "$16.66",
  retailBottle: "$24.99",
},

{
  id: 199,
  heading: "VICCHIOMAGGIO",
  name: "San Jacopo Chianti Classico",
  country: "Tuscany, Italy",
  image: "/San Jacopo Chianti Classico, DOCG.webp",
  description:
    "Vicchiomaggio San Jacopo Chianti Classico 2023 — 13.5% ABV. A classic 100% Sangiovese expression of Chianti Classico with fresh fruit and balanced acidity.",
  grapes: ["Sangiovese"],
  style: "Chianti Classico DOCG",
  winery: "Vicchiomaggio",
  vintage: "2023",
  wholesaleCase: "$151.92",
  wholesaleBottle: "$12.66",
  retailBottle: "$18.99",
},

{
  id: 200,
  heading: "VICCHIOMAGGIO",
  name: "Ripa delle Mandorle",
  country: "Tuscany, Italy",
  image: "/Ripa delle Mandorle, IGT.webp",
  description:
    "Vicchiomaggio Ripa delle Mandorle 2023 — 13% ABV. A Tuscan IGT 'Super Tuscan' blend of Sangiovese and Cabernet Sauvignon.",
  grapes: ["Sangiovese", "Cabernet Sauvignon"],
  style: "Toscana IGT",
  winery: "Vicchiomaggio",
  vintage: "2023",
  notes: "75% Sangiovese, 25% Cabernet Sauvignon.",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},

{
  id: 201,
  heading: "VICCHIOMAGGIO",
  name: "Floreale Toscana Rosato",
  country: "Tuscany, Italy",
  image: "/Floreale Toscana Rosato, IGT.webp",
  description:
    "Vicchiomaggio Floreale Toscana Rosato 2024 — 12.5% ABV. A fresh and elegant Tuscan rosé made from 100% Sangiovese.",
  grapes: ["Sangiovese"],
  style: "Toscana Rosato IGT",
  winery: "Vicchiomaggio",
  vintage: "2024",
  wholesaleCase: "$135.96",
  wholesaleBottle: "$11.33",
  retailBottle: "$16.99",
},

{
  id: 202,
  heading: "VICCHIOMAGGIO",
  name: "Ripa delle More",
  country: "Tuscany, Italy",
  image: "/Ripa delle More, IGT 1.5L.webp",
  description:
    "Vicchiomaggio Ripa delle More 2022 — 14% ABV. Large format 1.5L bottle of the Tuscan IGT blend made from Sangiovese, Cabernet Sauvignon and Merlot.",
  grapes: ["Sangiovese", "Cabernet Sauvignon", "Merlot"],
  style: "Toscana IGT - Large Format",
  winery: "Vicchiomaggio",
  vintage: "2022",
  format: "1.5L",
  wholesaleBottle: "$63.33",
  retailBottle: "$94.99",
},

{
  id: 203,
  heading: "VICCHIOMAGGIO",
  name: "Vigna La Prima Chianti Classico Riserva",
  country: "Tuscany, Italy",
  image: "/Vigna La Prima Chianti Classico Riserva, DOCG 1.5L.webp",
  description:
    "Vicchiomaggio Vigna La Prima Chianti Classico Riserva 2022 — 14% ABV. Large format 1.5L bottle made from 100% Sangiovese.",
  grapes: ["Sangiovese"],
  style: "Chianti Classico Riserva DOCG - Large Format",
  winery: "Vicchiomaggio",
  vintage: "2022",
  format: "1.5L",
  wholesaleBottle: "$86.66",
  retailBottle: "$129.99",
},




// ==================== TUSCANY ====================
// Villa Vallemaggiore
{
  id: 204,
  name: "Poggio Re",
  country: "Maremma, Tuscany, Italy",
  image: "/Poggio Re, IGT.webp",
  description:
    "Villa Vallemaggiore Poggio Re 2022 — 14% ABV. A Tuscan IGT made from 100% Cabernet Sauvignon and aged 14 months in barriques.",
  grapes: ["Cabernet Sauvignon"],
  style: "Toscana IGT",
},

{
  id: 205,
  name: "Colle Alto",
  country: "Maremma, Tuscany, Italy",
  image: "/Colle Alto, IGT.webp",
  description:
    "Villa Vallemaggiore Colle Alto 2016 — 13% ABV. A Tuscan IGT blend of 65% Cabernet Sauvignon and 35% Sangiovese, aged 8 months in barriques and large oak casks.",
  grapes: ["Cabernet Sauvignon", "Sangiovese"],
  style: "Toscana IGT",
},

// ==================== LE MARCHE ====================
// Fattoria Colmone della Marca

{
  id: 206,
  name: "Il Ciarliero",
  country: "Le Marche, Italy",
  image: "/Il Ciarliero.webp",
  description:
    "Fattoria Colmone della Marca Il Ciarliero N/V — 11.5% ABV. A lively Frizzante wine made from 100% Vernaccia Nera using the Charmat method.",
  grapes: ["Vernaccia Nera"],
  style: "Frizzante",
},
// Fattoria Mancini

{
  id: 207,
  name: "Terrazzi di Focara",
  country: "Le Marche, Italy",
  image: "/Terrazzi di Focara, Colli Pesaresi DOC.webp",
  description:
    "Fattoria Mancini Terrazzi di Focara 2020 — 14.5% ABV. A refined Colli Pesaresi DOC made from 100% Pinot Noir and aged 12 months in barriques.",
  grapes: ["Pinot Noir"],
  style: "Colli Pesaresi DOC",
},

{
  id: 208,
  name: "Focara Rive",
  country: "Le Marche, Italy",
  image: "/Focara Rive, Colli Pesaresi DOC.webp",
  description:
    "Fattoria Mancini Focara Rive 2020 — 14% ABV. Made from 100% Pinot Noir and aged 12 months in 228L barrels on lees.",
  grapes: ["Pinot Noir"],
  style: "Colli Pesaresi DOC",
},

{
  id: 209,
  name: "Focara",
  country: "Le Marche, Italy",
  image: "/Focara, Colli Pesaresi DOC.webp",
  description:
    "Fattoria Mancini Focara 2021 — 13.5% ABV. Made from 100% Pinot Noir and aged 12 months in 228L barrels on lees.",
  grapes: ["Pinot Noir"],
  style: "Colli Pesaresi DOC",
},

{
  id: 210,
  name: "JNoir",
  country: "Le Marche, Italy",
  image: "/JNoir, DOC.webp",
  description:
    "Fattoria Mancini JNoir 2022 — 13.5% ABV. An elegant DOC Pinot Noir showcasing the character of the Marche terroir.",
  grapes: ["Pinot Noir"],
  style: "Italian Red",
},

{
  id: 211,
  name: "Blu",
  country: "Le Marche, Italy",
  image: "/Blu, IGT.webp",
  description:
    "Fattoria Mancini Blu 2022 — 14.5% ABV. Made from 100% Ancellotta and aged 14 months in French 228L oak barrels.",
  grapes: ["Ancellotta"],
  style: "Marche IGT",
},

{
  id: 212,
  name: "Sangiovese Rive",
  country: "Le Marche, Italy",
  image: "/Sangiovese Rive, IGT.webp",
  description:
    "Fattoria Mancini Sangiovese Rive 2019 — 14.5% ABV. Made from 100% Sangiovese, with 12 months of aging in stainless steel and French oak barrels on lees.",
  grapes: ["Sangiovese"],
  style: "Marche IGT",
},

{
  id: 213,
  name: "Tenute Quarta - Blanc de Pinot Noir",
  country: "Le Marche, Italy",
  image: "/Tenute Quarta - Blanc de Pinot Noir, IGT.webp",
  description:
    "Tenute Quarta Blanc de Pinot Noir 2021 — 14% ABV. Made from 100% Pinot Noir, fermented in barrique and aged 12 months in oak.",
  grapes: ["Pinot Noir"],
  style: "Marche IGT",
},

{
  id: 214,
  name: "Impero - Blanc de Pinot Noir",
  country: "Le Marche, Italy",
  image: "/Impero - Blanc de Pinot Noir, IGT.webp",
  description:
    "Tenute Quarta Impero Blanc de Pinot Noir 2023 — 14% ABV. Made from 100% Pinot Noir, fermented in barrel and aged 12 months in oak.",
  grapes: ["Pinot Noir"],
  style: "Marche IGT",
},

{
  id: 215,
  name: "Roncaja",
  country: "Le Marche, Italy",
  image: "/Roncaja, Colli Pesaresi DOC.webp",
  description:
    "Tenute Quarta Roncaja 2023 — 12.5% ABV. A Colli Pesaresi DOC blend of 75% Albanella and 25% Pinot Noir.",
  grapes: ["Albanella", "Pinot Noir"],
  style: "Colli Pesaresi DOC",
},

{
  id: 216,
  name: "Impero Brut - Blanc de Pinot Noir",
  country: "Le Marche, Italy",
  image: "/Impero Brut - Blanc de Pinot Noir, VSQ.webp",
  description:
    "Tenute Quarta Impero Brut N/V — 12.5% ABV. A Metodo Classico sparkling wine made from 100% Pinot Noir.",
  grapes: ["Pinot Noir"],
  style: "Metodo Classico",
},

{
  id: 217,
  name: "Focara Magnum",
  country: "Le Marche, Italy",
  image: "/Focara, Colli Pesaresi DOC Magnum.webp",
  description:
    "Fattoria Mancini Focara 2020 — 13% ABV. A large-format 1.5L bottle from the Colli Pesaresi DOC.",
  grapes: ["Pinot Noir"],
  style: "Large Format",
},

{
  id: 218,
  name: "Impero - Blanc de Pinot Noir Magnum",
  country: "Le Marche, Italy",
  image: "/Impero - Blanc de Pinot Noir Magnum.webp",
  description:
    "Tenute Quarta Impero Blanc de Pinot Noir 2021 — 14% ABV. A large-format 1.5L bottle made from 100% Pinot Noir.",
  grapes: ["Pinot Noir"],
  style: "Large Format",
},












          
 

];


const containerVariants = {
  hidden: { opacity: 0 },
  
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function WineRegionsPage() {
  const [activeRegion, setActiveRegion] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

const filteredRegions = wineRegions
  .filter((region) => {
    const term = searchTerm.toLowerCase().trim();

    if (!term) return true;

    const searchableText = [
      region.name,
      region.country,
      region.style,
      region.description,
      region.winery,
      region.vintage,
      ...region.grapes,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(term);
  })
  .filter(
    (region, index, self) =>
      index === self.findIndex((item) => item.id === region.id)
  );


  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#241c1e] selection:bg-[#65002d] selection:text-white">
      {/* HERO SECTION - CENTERED */}
      <section className="relative overflow-hidden border-b border-[#e8dfdb] bg-gradient-to-b from-white via-[#fcfaf8] to-[#fbf9f6] py-20 lg:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-[#65002d]/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-[#8a1c4a]/5 blur-3xl" />

        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-12">
          <div className="flex max-w-3xl flex-col items-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#65002d]/15 bg-[#65002d]/5 px-4 py-1.5 backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#65002d]" />
           <span className="text-[11px] font-philosopher tracking-[0.25em] text-[#65002d]">
  Exclusive Laurentia Wine Collection
</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-great-vibes text-[42px] font-light leading-[1.1] tracking-tight text-[#1c1517] sm:text-6xl md:text-7xl lg:text-8xl text-center"
            >
            Discover Italy <br />
<span className="italic font-normal text-[#65002d]">
  Through Its Wines
</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl text-center font-old-standard leading-relaxed text-[#6d6264] sm:text-lg"
            >
Explore the distinctive wines of Italy.

Discover a curated collection of carefully crafted Italian wines,
featuring prestigious Barolo, expressive Barbera, elegant Arneis,
refreshing Gavi, and classic Moscato d&apos;Asti from the renowned Piedmont region.
            </motion.p>
          </div>

          {/* STATS STRIP - CENTERED */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 rounded-2xl border border-[#ebdcd7] bg-white/70 p-2 font-philosopher shadow-xl shadow-[#65002d]/5 backdrop-blur-md sm:grid-cols-4"
>
  {[

  { val: "218", label: "Wines" },
  { val: "25", label: "Wine Houses" },
  { val: "7", label: "Wine Regions" },
  { val: "1", label: "Country" },

  ].map((stat, idx) => (
    <div
      key={idx}
      className="group rounded-xl border border-transparent p-5 text-center transition-all duration-300 hover:border-[#65002d]/10 hover:bg-white"
    >
      <p className="font-serif text-3xl font-medium text-[#65002d] transition-transform duration-300 group-hover:scale-110 sm:text-4xl">
        {stat.val}
      </p>

      <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a7b7e]">
        {stat.label}
      </p>
    </div>
  ))}
</motion.div>
        </div>
      </section>

      {/* REGION SECTION */}
<section
  className="relative overflow-hidden"
  style={{
  backgroundImage:
  "url('https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=85')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  {/* BACKGROUND OVERLAY */}
  <div className="absolute " />

  {/* EXTRA SOFT OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-[#faf8f5]/20 to-white/50" />

  {/* MAIN CONTENT */}
  <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">

{/* SECTION HEADER & SEARCH BAR */}
<div className="mb-14 flex flex-col items-center gap-6 text-center">

  <div>
    <span className="text-[18px] font-philosopher tracking-[0.3em] text-[#65002d]">
      Curated Terroirs
    </span>

    <h2 className="mt-2 font-great-vibes text-3xl text-[#21181a] sm:text-4xl md:text-5xl">
      Italy Wine Collection
    </h2>

<p className="mx-auto mt-4 max-w-xl font-old-standard text-sm leading-6 text-white">
  Discover exceptional Italian wines from Piedmont&apos;s renowned vineyards,
  featuring prestigious Barolo DOCG, expressive Barbera, elegant Arneis,
  refreshing Gavi, and classic Moscato d&apos;Asti.
</p>
  </div>

  {/* SEARCH BAR */}
  <div className="relative w-full max-w-md">
    <Search
      className="absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-black"
    />

    <input
      type="text"
      placeholder="Search by region, grape, or style..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full rounded-full border border-[#e0d6d3] bg-white/95 py-3.5 pl-11 pr-10 text-xs tracking-wide text-black shadow-lg shadow-[#65002d]/5 backdrop-blur-sm transition-all placeholder:text-[#9e9093] focus:border-[#65002d] focus:outline-none focus:ring-2 focus:ring-[#65002d]/20"
    />

    {searchTerm && (
      <button
        type="button"
        onClick={() => setSearchTerm("")}
        className="absolute right-3.5 top-1/2 z-10 -translate-y-1/2 rounded-full p-1 text-[10px] text-[#8a7c7f] transition-colors hover:bg-[#f3ece9] hover:text-[#241c1e]"
      >
        ✕
      </button>
    )}
  </div>
</div>

    {/* CONTENT AREA */}
    {filteredRegions.length > 0 ? (

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
      >

        <AnimatePresence>

          {filteredRegions.map((region, index) => {

            const number = String(index + 1).padStart(2, "0");

            const isActive = activeRegion === index;

            return (

              <motion.article
                 key={region.id}
                variants={cardVariants}
                layout

                onMouseEnter={() => setActiveRegion(index)}
                onMouseLeave={() => setActiveRegion(null)}

                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#e8dedb]/80 bg-white/95 p-6 shadow-lg shadow-[#3b202b]/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-[#65002d]/40 hover:bg-white hover:shadow-2xl hover:shadow-[#65002d]/10"
              >

                {/* CARD GLOW */}

                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#65002d]/10 transition-all duration-500 blur-2xl ${
                    isActive
                      ? "scale-150 opacity-100"
                      : "scale-50 opacity-0"
                  }`}
                />

                {/* SMALL TOP LINE */}

                <div
                  className={`absolute left-0 top-0 h-1 bg-[#65002d] transition-all duration-500 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />

<div className="mb-5 flex h-52 w-full items-center justify-center overflow-hidden rounded-xl border border-[#eee4e1] bg-[#faf7f6]">
  <img
    src={region.image}
    alt={`${region.style} ${region.name}`}
    className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
  />
</div>

                {/* TOP HEADER */}

                <div>

                  <div className="flex items-start justify-between gap-3">

                    {/* NUMBER */}

                    <span className="font-serif text-4xl font-light text-[#d8cecb] transition-colors duration-300 group-hover:text-[#65002d]">
                      {number}
                    </span>

                    {/* STYLE */}

                    <span className="rounded-full border border-[#ebdcd8] bg-[#faf6f5] px-3 py-1 text-[12px] font-philosopher tracking-[0.15em] text-[#786a6d] transition-colors duration-300 group-hover:border-[#65002d]/20 group-hover:bg-[#65002d]/5 group-hover:text-[#65002d]">
                      {region.style}
                    </span>

                  </div>

                  {/* REGION NAME */}

                  <div className="mt-6">

                    <p className="flex items-center gap-1.5 text-[13px] font-philosopher tracking-[0.2em] text-[#65002d]">

                      <MapPin className="h-3 w-3" />

                      {region.country}

                    </p>

                    <h3 className="mt-1 font-philosopher text-2xl text-[#21191b] transition-colors duration-300 group-hover:text-[#65002d]">
                      {region.name}
                    </h3>

                  </div>

                  {/* DIVIDER */}

                  <div className="my-4 h-px w-full bg-gradient-to-r from-[#ebdcd8] via-[#e8dedb] to-transparent" />

                  {/* DESCRIPTION */}

                  <p className="text-md font-old-standard leading-relaxed text-[#6f6366]">
                    {region.description}
                  </p>

                </div>

                {/* CARD BOTTOM */}

                <div className="mt-6">

                  {/* SIGNATURE GRAPES */}

                  <div className="mb-4 rounded-xl border border-[#f3ece9] bg-[#fcfaf9]/90 p-3">

                    {/* <p className="mb-1.5 flex items-center gap-1 text-[11px] font-old-standard tracking-[0.18em] text-[#9b8f92]">

                      <Wine className="h-3 w-3 text-[#65002d]" />

                      Signature Grapes

                    </p> */}

                    <div className="flex flex-wrap gap-1">

                      {region.grapes.map((grape, idx) => (

                        <span
                          key={idx}
                          className="text-[15px] font-old-standard text-[#42373a] after:ml-1 after:text-[#c4b8bb] after:content-['•'] last:after:content-none"
                        >
                          {grape}
                        </span>

                      ))}

                    </div>

                  </div>

                  {/* ACTION */}

                  <div className="flex items-center justify-between border-t border-[#f0e7e4] pt-3">

                    <span className="text-[13px] font-old-standard tracking-[0.15em] text-[#8a7c7f]">
                      Explore Region
                    </span>

                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "rotate-45 border-[#65002d] bg-[#65002d] text-white shadow-md shadow-[#65002d]/20"
                          : "border-[#e0d5d2] text-[#65002d] group-hover:border-[#65002d]"
                      }`}
                    >

                      <ArrowUpRight className="h-4 w-4" />

                    </div>

                  </div>

                </div>

              </motion.article>

            );

          })}

        </AnimatePresence>

      </motion.div>

    ) : (

      /* NO RESULTS */

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="my-12 flex flex-col items-center justify-center rounded-3xl border border-dashed border-[#e3d7d3] bg-white/80 py-20 text-center shadow-xl backdrop-blur-md"
      >

        {/* SEARCH ICON */}

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#65002d]/5 text-[#65002d]">

          <Search className="h-8 w-8 opacity-60" />

        </div>

        {/* TITLE */}

        <h3 className="mt-6 font-serif text-2xl text-[#241c1e]">
          No Regions Found
        </h3>

        {/* DESCRIPTION */}

        <p className="mt-2 max-w-sm text-xs leading-relaxed text-[#7c6f72]">

          We couldn&apos;t find any wine region matching{" "}

          <span className="font-semibold text-[#65002d]">
            &quot;{searchTerm}&quot;
          </span>

       Try searching for wines like Cabernet Sauvignon, Chardonnay, Riesling,
Pinot Noir, Gewürztraminer, or Vidal Blanc.

        </p>

        {/* RESET */}

        <button
          onClick={() => setSearchTerm("")}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#65002d] bg-[#65002d] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#8a1c4a] hover:shadow-lg"
        >

          <RefreshCw className="h-3.5 w-3.5" />

          Reset Search Filter

        </button>

      </motion.div>

    )}

  </div>
</section>

      {/* FOOTER BANNER */}
{/* PREMIUM FOOTER BANNER */}
<section className="relative isolate overflow-hidden border-t border-[#3a292e] bg-[#160f12] text-white">

  {/* Background Glow */}
  <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#65002d]/20 blur-3xl sm:h-96 sm:w-96" />

  <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#8a1c4a]/10 blur-3xl sm:h-96 sm:w-96" />

  {/* Subtle Center Glow */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#65002d]/10 blur-[100px] sm:h-[420px] sm:w-[420px]" />

  {/* Content */}
  <div className="relative mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20 md:py-24 lg:px-12 lg:py-28">

    {/* Eyebrow */}
    <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8">
      <span className="h-px w-8 bg-[#65002d] sm:w-12" />

      <span className="font-philosopher text-[10px] uppercase tracking-[0.28em] text-[#c9aeb9] sm:text-xs sm:tracking-[0.35em]">
       The Art of Itlay Wine
      </span>

      <span className="h-px w-8 bg-[#65002d] sm:w-12" />
    </div>

    {/* Quote Mark */}
    <span className="block font-serif text-5xl leading-none text-[#65002d] sm:text-6xl md:text-7xl">
      “
    </span>

    {/* Main Quote */}
    <p className="mx-auto mt-3 max-w-4xl font-great-vibes text-3xl font-normal leading-[1.25] text-[#f8f1f3] sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
      Wine is the story of a place,
      <br className="hidden sm:block" />
      expressed through the hands of its people.
    </p>

    {/* Divider */}
    <div className="mx-auto mt-8 flex items-center justify-center gap-3 sm:mt-10">
      <span className="h-px w-10 bg-[#65002d]/60 sm:w-16" />

      <span className="h-1.5 w-1.5 rotate-45 bg-[#65002d]" />

      <span className="h-px w-10 bg-[#65002d]/60 sm:w-16" />
    </div>

    {/* Bottom Text */}
    <p className="mt-7 font-philosopher text-[10px] font-medium uppercase tracking-[0.28em] text-[#a8999d] sm:mt-8 sm:text-xs sm:tracking-[0.4em]">
      Discover
      <span className="mx-2 text-[#65002d]">•</span>
      Taste
      <span className="mx-2 text-[#65002d]">•</span>
      Enjoy
    </p>

    {/* California Label */}
<p className="mt-4 font-old-standard text-xs tracking-wide text-[#716367] sm:text-sm">
  Laurentia • Ohio Wine Collection
</p>

  </div>
</section>
    </main>
  );
}






