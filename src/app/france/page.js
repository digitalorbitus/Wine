"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, MapPin, Wine, Search, RefreshCw } from "lucide-react";


const wineRegions = [
// France

// Champagne

// Marie Clugny
{
  id: 1,
  name: "Champagne Grand Cru",
  country: "Champagne, France",
  image: "/Champagne Grand Cru.webp",
  description:
    "Champagne Grand Cru N/V — 12% ABV. 100% Chardonnay.",
  grapes: ["Chardonnay"],
  style: "Marie Clugny",
  wholesaleCase: "$711.96",
  wholesaleBottle: "$59.33",
  retailBottle: "$88.99",
},

// Veuve Doussot
{
  id: 2,
  name: "Champagne Cuvée L",
  country: "Champagne, France",
  image: "/Champagne Cuvee L.webp",
  description:
    "Champagne Cuvée L N/V — 12.5% ABV. 100% Chardonnay.",
  grapes: ["Chardonnay"],
  style: "Veuve Doussot",
  wholesaleCase: "$503.88",
  wholesaleBottle: "$41.99",
  retailBottle: "$62.99",
},

{
  id: 3,
  name: "Champagne Brut Rosé",
  country: "Champagne, France",
  image: "/Champagne Brut Rose.webp",
  description:
    "Champagne Brut Rosé N/V — 12.5% ABV. 100% Pinot Noir.",
  grapes: ["Pinot Noir"],
  style: "Veuve Doussot",
  wholesaleCase: "$359.88",
  wholesaleBottle: "$29.99",
  retailBottle: "$44.99",
},

{
  id: 4,
  name: "Champagne Brut Tradition",
  country: "Champagne, France",
  image: "/Champagne Brut Tradition.webp",
  description:
    "Champagne Brut Tradition N/V — 12.5% ABV. 85% Pinot Noir, 15% Chardonnay.",
  grapes: ["Pinot Noir", "Chardonnay"],
  style: "Veuve Doussot",
  wholesaleCase: "$359.88",
  wholesaleBottle: "$29.99",
  retailBottle: "$44.99",
},

// Veuve Doussot — Half Bottle
{
  id: 5,
  name: "Champagne Brut Tradition Half Bottle",
  country: "Champagne, France",
  image: "/Champagne Brut Tradition Half Bottle.webp",
  description:
    "Champagne Brut Tradition N/V — 12.5% ABV. 375ML half bottle. 85% Pinot Noir, 15% Chardonnay.",
  grapes: ["Pinot Noir", "Chardonnay"],
  style: "Veuve Doussot - Half Bottle",
  wholesaleCase: "$191.88",
  wholesaleBottle: "$15.99",
  retailBottle: "$23.99",
},

// Loire

// Domaine de la Bretonnière
{
  id: 6,
  name: "Chardonnay",
  country: "Loire, France",
  image: "/Domaine de la Bretonniere Chardonnay.webp",
  description:
    "Chardonnay 2023 — 12% ABV.",
  grapes: ["Chardonnay"],
  style: "Domaine de la Bretonnière",
  wholesaleCase: "$103.92",
  wholesaleBottle: "$8.66",
  retailBottle: "$12.99",
},

{
  id: 7,
  name: "Sauvignon Blanc",
  country: "Loire, France",
  image: "/Domaine de la Bretonniere Sauvignon Blanc.webp",
  description:
    "Sauvignon Blanc 2024 — 11% ABV.",
  grapes: ["Sauvignon Blanc"],
  style: "Domaine de la Bretonnière",
  wholesaleCase: "$103.92",
  wholesaleBottle: "$8.66",
  retailBottle: "$12.99",
},

{
  id: 8,
  name: "Muscadet, Sèvre et Maine",
  country: "Loire, France",
  image: "/Muscadet Sevre et Maine.webp",
  description:
    "Muscadet, Sèvre et Maine 2024 — 11.5% ABV.",
  grapes: ["Muscadet"],
  style: "Domaine de la Bretonnière",
  wholesaleCase: "$103.92",
  wholesaleBottle: "$8.66",
  retailBottle: "$12.99",
},


// Loire

// Domaine Dupré

{
  id: 9,
  name: "So Different! Sauvignon Blanc",
  country: "Loire, France",
  image: "/So Different Sauvignon Blanc.webp",
  description:
    "So Different! Sauvignon Blanc N/V — 11% ABV.",
  grapes: ["Sauvignon Blanc"],
  style: "Domaine Dupré",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},

{
  id: 10,
  name: "So Different! Sparkling Sauvignon Blanc",
  country: "Loire, France",
  image: "/So Different Sparkling Sauvignon Blanc.webp",
  description:
    "So Different! Sparkling Sauvignon Blanc N/V — 11% ABV.",
  grapes: ["Sauvignon Blanc"],
  style: "Domaine Dupré",
  wholesaleCase: "$127.92",
  wholesaleBottle: "$10.66",
  retailBottle: "$15.99",
},

// Jean Montbray

{
  id: 11,
  name: "Chinon",
  country: "Loire, France",
  image: "/Chinon.webp",
  description:
    "Chinon 2023 — 12.5% ABV. 100% Cabernet Franc.",
  grapes: ["Cabernet Franc"],
  style: "Jean Montbray",
  wholesaleCase: "$103.92",
  wholesaleBottle: "$8.66",
  retailBottle: "$12.99",
},

{
  id: 12,
  name: "Vouvray",
  country: "Loire, France",
  image: "/Vouvray.webp",
  description:
    "Vouvray 2022 — 11% ABV.",
  grapes: ["Chenin Blanc"],
  style: "Jean Montbray",
  wholesaleCase: "$103.92",
  wholesaleBottle: "$8.66",
  retailBottle: "$12.99",
},

{
  id: 13,
  name: "Rosé d'Anjou",
  country: "Loire, France",
  image: "/Rose d'Anjou.webp",
  description:
    "Rosé d'Anjou 2022 — 10.5% ABV. 85% Grolleau, 15% Gamay.",
  grapes: ["Grolleau", "Gamay"],
  style: "Jean Montbray",
  wholesaleCase: "$79.92",
  wholesaleBottle: "$6.66",
  retailBottle: "$9.99",
},

// Bordeaux

// Château Le Grand Verdus

{
  id: 14,
  name: "Grande Réserve Bordeaux",
  country: "Bordeaux, France",
  image: "/Grande Reserve Bordeaux.webp",
  description:
    "Grande Réserve Bordeaux 2018 — 14% ABV. 55% Merlot, 27% Cabernet Franc, 18% Cabernet Sauvignon.",
  grapes: ["Merlot", "Cabernet Franc", "Cabernet Sauvignon"],
  style: "Château Le Grand Verdus",
  wholesaleCase: "$303.96",
  wholesaleBottle: "$25.33",
  retailBottle: "$37.99",
},

{
  id: 15,
  name: "\"Generation\" Bordeaux Supérieur",
  country: "Bordeaux, France",
  image: "/Generation Bordeaux Superieur.webp",
  description:
    "\"Generation\" Bordeaux Supérieur 2018 — 13.5% ABV. 45% Merlot, 55% Cabernet Franc. Aged 13 months in barrique.",
  grapes: ["Merlot", "Cabernet Franc"],
  style: "Château Le Grand Verdus",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 16,
  name: "Réserve Bordeaux Supérieur",
  country: "Bordeaux, France",
  image: "/Reserve Bordeaux Superieur.webp",
  description:
    "Réserve Bordeaux Supérieur 2020 — 14% ABV. 60% Merlot, 40% Cabernet Sauvignon. 50% aged in oak and 50% in cement tanks for 12 months.",
  grapes: ["Merlot", "Cabernet Sauvignon"],
  style: "Château Le Grand Verdus",
  wholesaleCase: "$127.92",
  wholesaleBottle: "$10.66",
  retailBottle: "$15.99",
},

{
  id: 17,
  name: "Bordeaux Supérieur Rouge",
  country: "Bordeaux, France",
  image: "/Bordeaux Superieur Rouge.webp",
  description:
    "Bordeaux Supérieur Rouge 2020 — 14% ABV. 70% Merlot, 30% Cabernet Sauvignon.",
  grapes: ["Merlot", "Cabernet Sauvignon"],
  style: "Château Le Grand Verdus",
  wholesaleCase: "$95.88",
  wholesaleBottle: "$7.99",
  retailBottle: "$11.99",
},

{
  id: 18,
  name: "Bordeaux Blanc",
  country: "Bordeaux, France",
  image: "/Bordeaux Blanc.webp",
  description:
    "Bordeaux Blanc 2023 — 12.5% ABV. 60% Sauvignon Blanc, 40% Sémillon.",
  grapes: ["Sauvignon Blanc", "Sémillon"],
  style: "Château Le Grand Verdus",
  wholesaleCase: "$103.92",
  wholesaleBottle: "$8.66",
  retailBottle: "$12.99",
},

{
  id: 19,
  name: "Bordeaux Rosé",
  country: "Bordeaux, France",
  image: "/Bordeaux Rose.webp",
  description:
    "Bordeaux Rosé 2020 — 12.5% ABV. 50% Cabernet Franc, 20% Merlot, 30% Cabernet Sauvignon.",
  grapes: ["Cabernet Franc", "Merlot", "Cabernet Sauvignon"],
  style: "Château Le Grand Verdus",
  wholesaleCase: "$95.88",
  wholesaleBottle: "$7.99",
  retailBottle: "$11.99",
},

// Burgundy

// Agnès du Couëdic

{
  id: 20,
  name: "Mercurey 1er Cru 'Les Veleys' (Rouge)",
  country: "Burgundy, France",
  image: "/Mercurey 1er Cru Les Veleys Rouge.webp",
  description:
    "Mercurey 1er Cru 'Les Veleys' 2023 — 13% ABV.",
  grapes: ["Pinot Noir"],
  style: "Agnès du Couëdic",
  wholesaleCase: "$423.96",
  wholesaleBottle: "$35.33",
  retailBottle: "$52.99",
},

{
  id: 21,
  name: "Mercurey (Rouge)",
  country: "Burgundy, France",
  image: "/Mercurey Rouge.webp",
  description:
    "Mercurey 2023 — 13.5% ABV.",
  grapes: ["Pinot Noir"],
  style: "Agnès du Couëdic",
  wholesaleCase: "$319.92",
  wholesaleBottle: "$26.66",
  retailBottle: "$39.99",
},

{
  id: 22,
  name: "Mercurey (Blanc)",
  country: "Burgundy, France",
  image: "/Mercurey Blanc.webp",
  description:
    "Mercurey 2023 — 13% ABV.",
  grapes: ["Chardonnay"],
  style: "Agnès du Couëdic",
  wholesaleCase: "$351.96",
  wholesaleBottle: "$29.33",
  retailBottle: "$43.99",
},

{
  id: 23,
  name: "Bourgogne Aligoté",
  country: "Burgundy, France",
  image: "/Bourgogne Aligote.webp",
  description:
    "Bourgogne Aligoté 2023 — 12.5% ABV.",
  grapes: ["Aligoté"],
  style: "Agnès du Couëdic",
  wholesaleCase: "$199.92",
  wholesaleBottle: "$16.66",
  retailBottle: "$24.99",
},

// Bachey-Legros et Fils

{
  id: 24,
  name: "Chassagne-Montrachet 1er Cru Morgeot (Blanc)",
  country: "Burgundy, France",
  image: "/Chassagne Montrachet 1er Cru Morgeot Blanc.webp",
  description:
    "Chassagne-Montrachet 1er Cru Morgeot 2023 — 14.5% ABV.",
  grapes: ["Chardonnay"],
  style: "Bachey-Legros et Fils",
  wholesaleCase: "$1,127.88",
  wholesaleBottle: "$93.33",
  retailBottle: "$139.99",
},

{
  id: 25,
  name: "Chassagne-Montrachet 1er Cru Morgeot (Blanc)",
  country: "Burgundy, France",
  image: "/Chassagne Montrachet 1er Cru Morgeot Blanc 2022.webp",
  description:
    "Chassagne-Montrachet 1er Cru Morgeot 2022 — 14% ABV.",
  grapes: ["Chardonnay"],
  style: "Bachey-Legros et Fils",
  wholesaleCase: "$1,039.92",
  wholesaleBottle: "$86.66",
  retailBottle: "$129.99",
},

{
  id: 26,
  name: "Chassagne-Montrachet (Blanc)",
  country: "Burgundy, France",
  image: "/Chassagne Montrachet Blanc.webp",
  description:
    "Chassagne-Montrachet 2023 — 14% ABV.",
  grapes: ["Chardonnay"],
  style: "Bachey-Legros et Fils",
  wholesaleCase: "$799.92",
  wholesaleBottle: "$66.66",
  retailBottle: "$99.99",
},

{
  id: 27,
  name: "Chassagne-Montrachet (Blanc)",
  country: "Burgundy, France",
  image: "/Chassagne Montrachet Blanc 2022.webp",
  description:
    "Chassagne-Montrachet 2022 — 14% ABV.",
  grapes: ["Chardonnay"],
  style: "Bachey-Legros et Fils",
  wholesaleCase: "$719.88",
  wholesaleBottle: "$59.99",
  retailBottle: "$89.99",
},

{
  id: 28,
  name: "Puligny-Montrachet (Blanc)",
  country: "Burgundy, France",
  image: "/Puligny Montrachet Blanc.webp",
  description:
    "Puligny-Montrachet 2023 — 13.5% ABV.",
  grapes: ["Chardonnay"],
  style: "Bachey-Legros et Fils",
  wholesaleCase: "$1,127.88",
  wholesaleBottle: "$93.33",
  retailBottle: "$139.99",
},

{
  id: 29,
  name: "Santenay 1er Cru 'La Comme' (Rouge)",
  country: "Burgundy, France",
  image: "/Santenay 1er Cru La Comme Rouge.webp",
  description:
    "Santenay 1er Cru 'La Comme' 2023 — 12.5% ABV.",
  grapes: ["Pinot Noir"],
  style: "Bachey-Legros et Fils",
  wholesaleCase: "$559.92",
  wholesaleBottle: "$46.66",
  retailBottle: "$69.99",
},

{
  id: 30,
  name: "Santenay 1er Cru 'La Comme' (Rouge)",
  country: "Burgundy, France",
  image: "/Santenay 1er Cru La Comme Rouge 2022.webp",
  description:
    "Santenay 1er Cru 'La Comme' 2022 — 13.5% ABV.",
  grapes: ["Pinot Noir"],
  style: "Bachey-Legros et Fils",
  wholesaleCase: "$559.92",
  wholesaleBottle: "$46.66",
  retailBottle: "$69.99",
},

{
  id: 31,
  name: "Santenay 1er Cru 'Clos des Gravières' (Blanc)",
  country: "Burgundy, France",
  image: "/Santenay Clos des Gravieres Blanc.webp",
  description:
    "Santenay 1er Cru 'Clos des Gravières' 2023 — 14% ABV.",
  grapes: ["Chardonnay"],
  style: "Bachey-Legros et Fils",
  wholesaleCase: "$535.92",
  wholesaleBottle: "$44.66",
  retailBottle: "$66.99",
},

{
  id: 32,
  name: "Santenay 1er Cru 'Clos des Gravières' (Blanc)",
  country: "Burgundy, France",
  image: "/Santenay Clos des Gravieres Blanc 2022.webp",
  description:
    "Santenay 1er Cru 'Clos des Gravières' 2022 — 13.5% ABV.",
  grapes: ["Chardonnay"],
  style: "Bachey-Legros et Fils",
  wholesaleCase: "$535.92",
  wholesaleBottle: "$44.66",
  retailBottle: "$66.99",
},

{
  id: 33,
  name: "Santenay 'Clos des Hâtes' (Rouge)",
  country: "Burgundy, France",
  image: "/Santenay Clos des Hates Rouge.webp",
  description:
    "Santenay 'Clos des Hâtes' 2023 — 13.5% ABV.",
  grapes: ["Pinot Noir"],
  style: "Bachey-Legros et Fils",
  wholesaleCase: "$399.96",
  wholesaleBottle: "$33.33",
  retailBottle: "$49.99",
},

{
  id: 34,
  name: "Santenay 'Clos des Hâtes' (Rouge)",
  country: "Burgundy, France",
  image: "/Santenay Clos des Hates Rouge 2022.webp",
  description:
    "Santenay 'Clos des Hâtes' 2022 — 14% ABV.",
  grapes: ["Pinot Noir"],
  style: "Bachey-Legros et Fils",
  wholesaleCase: "$399.96",
  wholesaleBottle: "$33.33",
  retailBottle: "$49.99",
},

{
  id: 35,
  name: "Santenay 'Clos des Hâtes' (Rouge)",
  country: "Burgundy, France",
  image: "/Santenay Clos des Hates Rouge 2021.webp",
  description:
    "Santenay 'Clos des Hâtes' 2021 — 13.5% ABV.",
  grapes: ["Pinot Noir"],
  style: "Bachey-Legros et Fils",
  wholesaleCase: "$359.88",
  wholesaleBottle: "$29.99",
  retailBottle: "$44.99",
},

{
  id: 36,
  name: "Santenay Vieilles Vignes (Rouge)",
  country: "Burgundy, France",
  image: "/Santenay Vieilles Vignes Rouge.webp",
  description:
    "Santenay Vieilles Vignes 2022 — 13.5% ABV.",
  grapes: ["Pinot Noir"],
  style: "Bachey-Legros et Fils",
  wholesaleCase: "$359.88",
  wholesaleBottle: "$29.99",
  retailBottle: "$44.99",
},

{
  id: 37,
  name: "Santenay 'En Charron' (Blanc)",
  country: "Burgundy, France",
  image: "/Santenay En Charron Blanc.webp",
  description:
    "Santenay 'En Charron' 2023 — 13.5% ABV.",
  grapes: ["Chardonnay"],
  style: "Bachey-Legros et Fils",
  wholesaleCase: "$447.96",
  wholesaleBottle: "$37.33",
  retailBottle: "$55.99",
},

{
  id: 38,
  name: "Santenay 'En Charron' (Blanc)",
  country: "Burgundy, France",
  image: "/Santenay En Charron Blanc 2022.webp",
  description:
    "Santenay 'En Charron' 2022 — 13.5% ABV.",
  grapes: ["Chardonnay"],
  style: "Bachey-Legros et Fils",
  wholesaleCase: "$431.88",
  wholesaleBottle: "$35.99",
  retailBottle: "$53.99",
},

// Benoît Sordet

{
  id: 39,
  name: "Pommard 1er Cru 'La Refene'",
  country: "Burgundy, France",
  image: "/Pommard 1er Cru La Refene.webp",
  description:
    "Pommard 1er Cru 'La Refene' 2023 — 13.5% ABV.",
  grapes: ["Pinot Noir"],
  style: "Benoît Sordet",
  wholesaleCase: "$799.92",
  wholesaleBottle: "$66.66",
  retailBottle: "$99.99",
},

{
  id: 40,
  name: "Pommard",
  country: "Burgundy, France",
  image: "/Pommard 2022.webp",
  description:
    "Pommard 2022 — 13% ABV.",
  grapes: ["Pinot Noir"],
  style: "Benoît Sordet",
  wholesaleCase: "$624.00",
  wholesaleBottle: "$52.00",
  retailBottle: "$78.00",
},

{
  id: 41,
  name: "Pommard",
  country: "Burgundy, France",
  image: "/Pommard 2021.webp",
  description:
    "Pommard 2021 — 12.5% ABV.",
  grapes: ["Pinot Noir"],
  style: "Benoît Sordet",
  wholesaleCase: "$559.92",
  wholesaleBottle: "$46.66",
  retailBottle: "$69.99",
},

{
  id: 42,
  name: "Saint Romain (Blanc)",
  country: "Burgundy, France",
  image: "/Saint Romain Blanc 2023.webp",
  description:
    "Saint Romain 2023 — 13% ABV.",
  grapes: ["Chardonnay"],
  style: "Benoît Sordet",
  wholesaleCase: "$439.92",
  wholesaleBottle: "$36.66",
  retailBottle: "$54.99",
},

{
  id: 43,
  name: "Saint Romain (Blanc)",
  country: "Burgundy, France",
  image: "/Saint Romain Blanc 2022.webp",
  description:
    "Saint Romain 2022 — 12.5% ABV.",
  grapes: ["Chardonnay"],
  style: "Benoît Sordet",
  wholesaleCase: "$391.92",
  wholesaleBottle: "$32.66",
  retailBottle: "$48.99",
},

// Domaine Chofflet

{
  id: 44,
  name: "Givry 1er Cru 'Les Galaffres' (Blanc)",
  country: "Burgundy, France",
  image: "/Givry 1er Cru Les Galaffres Blanc.webp",
  description:
    "Givry 1er Cru 'Les Galaffres' 2022 — 13% ABV.",
  grapes: ["Chardonnay"],
  style: "Domaine Chofflet",
  wholesaleCase: "$391.92",
  wholesaleBottle: "$32.66",
  retailBottle: "$48.99",
},

{
  id: 45,
  name: "Givry 1er Cru 'En Choué' (Rouge)",
  country: "Burgundy, France",
  image: "/Givry 1er Cru En Choue Rouge.webp",
  description:
    "Givry 1er Cru 'En Choué' 2022 — 13.5% ABV.",
  grapes: ["Pinot Noir"],
  style: "Domaine Chofflet",
  wholesaleCase: "$391.92",
  wholesaleBottle: "$32.66",
  retailBottle: "$48.99",
},

{
  id: 46,
  name: "Givry 'La Pièce' (Blanc)",
  country: "Burgundy, France",
  image: "/Givry La Piece Blanc.webp",
  description:
    "Givry 'La Pièce' 2022 — 13% ABV.",
  grapes: ["Chardonnay"],
  style: "Domaine Chofflet",
  wholesaleCase: "$319.92",
  wholesaleBottle: "$26.66",
  retailBottle: "$39.99",
},

{
  id: 47,
  name: "Givry Héritage (Rouge)",
  country: "Burgundy, France",
  image: "/Givry Heritage Rouge.webp",
  description:
    "Givry Héritage 2022 — 13% ABV.",
  grapes: ["Pinot Noir"],
  style: "Domaine Chofflet",
  wholesaleCase: "$279.96",
  wholesaleBottle: "$23.33",
  retailBottle: "$34.99",
},

// Burgundy

// Domaine des Monts Luisants

{
  id: 48,
  name: "Morey-Saint-Denis en Pierre Virant",
  country: "Burgundy, France",
  image: "/Morey Saint Denis en Pierre Virant.webp",
  description:
    "Morey-Saint-Denis en Pierre Virant 2022 — 13% ABV.",
  grapes: ["Pinot Noir"],
  style: "Domaine des Monts Luisants",
  wholesaleCase: "$919.92",
  wholesaleBottle: "$76.66",
  retailBottle: "$115.00",
},

// Domaine Dupré

{
  id: 49,
  name: "Mâcon-Villages",
  country: "Burgundy, France",
  image: "/Macon Villages.webp",
  description:
    "Mâcon-Villages 2023 — 12.5% ABV.",
  grapes: ["Chardonnay"],
  style: "Domaine Dupré",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 50,
  name: "Bourgogne Aligoté",
  country: "Burgundy, France",
  image: "/Bourgogne Aligote Dupré.webp",
  description:
    "Bourgogne Aligoté 2023 — 12.5% ABV.",
  grapes: ["Aligoté"],
  style: "Domaine Dupré",
  wholesaleCase: "$135.96",
  wholesaleBottle: "$11.33",
  retailBottle: "$16.99",
},

// Domaine Gilles Morat

{
  id: 51,
  name: "Pouilly-Fuissé 'Terroirs de Vergisson'",
  country: "Burgundy, France",
  image: "/Pouilly Fuisse Terroirs de Vergisson.webp",
  description:
    "Pouilly-Fuissé 'Terroirs de Vergisson' 2023 — 13% ABV.",
  grapes: ["Chardonnay"],
  style: "Domaine Gilles Morat",
  wholesaleCase: "$343.92",
  wholesaleBottle: "$28.66",
  retailBottle: "$42.99",
},

// Domaine Labry

{
  id: 52,
  name: "Meursault 'Les Vireuils' (Blanc)",
  country: "Burgundy, France",
  image: "/Meursault Les Vireuils Blanc.webp",
  description:
    "Meursault 'Les Vireuils' 2017 — 12.7% ABV.",
  grapes: ["Chardonnay"],
  style: "Domaine Labry",
  wholesaleCase: "$639.96",
  wholesaleBottle: "$53.33",
  retailBottle: "$79.99",
},

{
  id: 53,
  name: "Auxey-Duresses (Rouge)",
  country: "Burgundy, France",
  image: "/Auxey Duresses Rouge.webp",
  description:
    "Auxey-Duresses 2020 — 13% ABV.",
  grapes: ["Pinot Noir"],
  style: "Domaine Labry",
  wholesaleCase: "$319.92",
  wholesaleBottle: "$26.66",
  retailBottle: "$39.99",
},

{
  id: 54,
  name: "Auxey-Duresses (Blanc)",
  country: "Burgundy, France",
  image: "/Auxey Duresses Blanc.webp",
  description:
    "Auxey-Duresses 2020 — 13% ABV.",
  grapes: ["Chardonnay"],
  style: "Domaine Labry",
  wholesaleCase: "$319.92",
  wholesaleBottle: "$26.66",
  retailBottle: "$39.99",
},

{
  id: 55,
  name: "Bourgogne Hautes-Côtes de Beaune (Rouge)",
  country: "Burgundy, France",
  image: "/Bourgogne Hautes Cotes de Beaune Rouge 2022.webp",
  description:
    "Bourgogne Hautes-Côtes de Beaune 2022 — 12.5% ABV.",
  grapes: ["Pinot Noir"],
  style: "Domaine Labry",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},

{
  id: 56,
  name: "Bourgogne Hautes-Côtes de Beaune (Rouge)",
  country: "Burgundy, France",
  image: "/Bourgogne Hautes Cotes de Beaune Rouge 2021.webp",
  description:
    "Bourgogne Hautes-Côtes de Beaune 2021 — 12.5% ABV.",
  grapes: ["Pinot Noir"],
  style: "Domaine Labry",
  wholesaleCase: "$239.88",
  wholesaleBottle: "$19.99",
  retailBottle: "$29.99",
},

{
  id: 57,
  name: "Bourgogne Hautes-Côtes de Beaune (Blanc)",
  country: "Burgundy, France",
  image: "/Bourgogne Hautes Cotes de Beaune Blanc.webp",
  description:
    "Bourgogne Hautes-Côtes de Beaune 2022 — 12.5% ABV.",
  grapes: ["Chardonnay"],
  style: "Domaine Labry",
  wholesaleCase: "$263.88",
  wholesaleBottle: "$21.99",
  retailBottle: "$32.99",
},

{
  id: 58,
  name: "Côtes de Beaune Villages (Rouge)",
  country: "Burgundy, France",
  image: "/Cotes de Beaune Villages Rouge.webp",
  description:
    "Côtes de Beaune Villages 2022 — 12.5% ABV.",
  grapes: ["Pinot Noir"],
  style: "Domaine Labry",
  wholesaleCase: "$311.88",
  wholesaleBottle: "$25.99",
  retailBottle: "$38.99",
},

// Domaine Lebreuil

{
  id: 59,
  name: "Corton-Charlemagne Grand Cru",
  country: "Burgundy, France",
  image: "/Corton Charlemagne Grand Cru.webp",
  description:
    "Corton-Charlemagne Grand Cru 2023 — 13% ABV. 100% Chardonnay. Natural malolactic fermentation in barrels. 35% aged in new barrels for 14–18 months.",
  grapes: ["Chardonnay"],
  style: "Domaine Lebreuil",
  wholesaleCase: "$4,272.00",
  wholesaleBottle: "$356.00",
  retailBottle: "$525.00",
},

// Domaine Thomas

{
  id: 60,
  name: "Saint-Véran 'Les Charmones'",
  country: "Burgundy, France",
  image: "/Saint Veran Les Charmones.webp",
  description:
    "Saint-Véran 'Les Charmones' 2023 — 13% ABV.",
  grapes: ["Chardonnay"],
  style: "Domaine Thomas",
  wholesaleCase: "$199.92",
  wholesaleBottle: "$16.66",
  retailBottle: "$24.99",
},

// Geantet-Pansiot

{
  id: 61,
  name: "Charmes-Chambertin Grand Cru",
  country: "Burgundy, France",
  image: "/Charmes Chambertin Grand Cru.webp",
  description:
    "Charmes-Chambertin Grand Cru 2020 — 14% ABV.",
  grapes: ["Pinot Noir"],
  style: "Geantet-Pansiot",
  wholesaleCase: "$2,799.96",
  wholesaleBottle: "$233.33",
  retailBottle: "$349.99",
},

{
  id: 62,
  name: "Gevrey-Chambertin 1er Cru 'Le Poissenot'",
  country: "Burgundy, France",
  image: "/Gevrey Chambertin 1er Cru Le Poissenot.webp",
  description:
    "Gevrey-Chambertin 1er Cru 'Le Poissenot' 2022 — 13.5% ABV.",
  grapes: ["Pinot Noir"],
  style: "Geantet-Pansiot",
  wholesaleCase: "$2,079.96",
  wholesaleBottle: "$173.33",
  retailBottle: "$260.00",
},

{
  id: 63,
  name: "Gevrey-Chambertin 'Vieilles Vignes'",
  country: "Burgundy, France",
  image: "/Gevrey Chambertin Vieilles Vignes.webp",
  description:
    "Gevrey-Chambertin 'Vieilles Vignes' 2021 — 14% ABV.",
  grapes: ["Pinot Noir"],
  style: "Geantet-Pansiot",
  wholesaleCase: "$1,519.92",
  wholesaleBottle: "$126.66",
  retailBottle: "$189.99",
},

{
  id: 64,
  name: "Chambolle-Musigny 'Vieilles Vignes'",
  country: "Burgundy, France",
  image: "/Chambolle Musigny Vieilles Vignes.webp",
  description:
    "Chambolle-Musigny 'Vieilles Vignes' 2020 — 13.5% ABV.",
  grapes: ["Pinot Noir"],
  style: "Geantet-Pansiot",
  wholesaleCase: "$919.92",
  wholesaleBottle: "$76.66",
  retailBottle: "$114.99",
},

{
  id: 65,
  name: "Marsannay 'Champs Perdrix'",
  country: "Burgundy, France",
  image: "/Marsannay Champs Perdrix.webp",
  description:
    "Marsannay 'Champs Perdrix' 2021 — 13% ABV.",
  grapes: ["Pinot Noir"],
  style: "Geantet-Pansiot",
  wholesaleCase: "$639.96",
  wholesaleBottle: "$53.33",
  retailBottle: "$79.99",
},

{
  id: 66,
  name: "Bourgogne Hautes-Côtes de Nuits (Rouge)",
  country: "Burgundy, France",
  image: "/Bourgogne Hautes Cotes de Nuits Rouge.webp",
  description:
    "Bourgogne Hautes-Côtes de Nuits 2022 — 13% ABV.",
  grapes: ["Pinot Noir"],
  style: "Geantet-Pansiot",
  wholesaleCase: "$432.00",
  wholesaleBottle: "$36.00",
  retailBottle: "$54.00",
},

// Notton

{
  id: 67,
  name: "Chablis",
  country: "Burgundy, France",
  image: "/Chablis Notton.webp",
  description:
    "Chablis 2022 — 12.5% ABV.",
  grapes: ["Chardonnay"],
  style: "Notton",
  wholesaleCase: "$199.92",
  wholesaleBottle: "$16.66",
  retailBottle: "$24.99",
},

// Paul Thevenin

{
  id: 68,
  name: "Gevrey-Chambertin",
  country: "Burgundy, France",
  image: "/Gevrey Chambertin Paul Thevenin.webp",
  description:
    "Gevrey-Chambertin 2018 — 13% ABV.",
  grapes: ["Pinot Noir"],
  style: "Paul Thevenin",
  wholesaleCase: "$576.00",
  wholesaleBottle: "$48.00",
  retailBottle: "$72.00",
},

// Sébastien Dampt

{
  id: 69,
  name: "Chablis 1er Cru \"Les Vaillons\"",
  country: "Burgundy, France",
  image: "/Chablis 1er Cru Les Vaillons.webp",
  description:
    "Chablis 1er Cru \"Les Vaillons\" 2023 — 13% ABV.",
  grapes: ["Chardonnay"],
  style: "Sébastien Dampt",
  wholesaleCase: "$439.92",
  wholesaleBottle: "$36.66",
  retailBottle: "$54.99",
},

{
  id: 70,
  name: "Chablis",
  country: "Burgundy, France",
  image: "/Chablis Sebastien Dampt.webp",
  description:
    "Chablis 2023 — 12.5% ABV.",
  grapes: ["Chardonnay"],
  style: "Sébastien Dampt",
  wholesaleCase: "$279.96",
  wholesaleBottle: "$23.33",
  retailBottle: "$34.99",
},

// Burgundy

// Vignerons de Bel Air

{
  id: 71,
  name: "Coteaux Bourguignons Rouge",
  country: "Burgundy, France",
  image: "/Coteaux Bourguignons Rouge.webp",
  description:
    "Coteaux Bourguignons Rouge 2022 — 13% ABV. 100% Gamay.",
  grapes: ["Gamay"],
  style: "Vignerons de Bel Air",
  wholesaleCase: "$111.96",
  wholesaleBottle: "$9.33",
  retailBottle: "$13.99",
},

{
  id: 72,
  name: "Coteaux Bourguignons Blanc",
  country: "Burgundy, France",
  image: "/Coteaux Bourguignons Blanc.webp",
  description:
    "Coteaux Bourguignons Blanc 2022 — 13% ABV. 100% Chardonnay.",
  grapes: ["Chardonnay"],
  style: "Vignerons de Bel Air",
  wholesaleCase: "$151.92",
  wholesaleBottle: "$12.66",
  retailBottle: "$18.99",
},

{
  id: 73,
  name: "Bourgogne",
  country: "Burgundy, France",
  image: "/Bourgogne.webp",
  description:
    "Bourgogne 2021 — 12.5% ABV.",
  grapes: ["Chardonnay"],
  style: "Vignerons de Bel Air",
  wholesaleCase: "$183.96",
  wholesaleBottle: "$15.33",
  retailBottle: "$22.99",
},

{
  id: 74,
  name: "Mâcon-Villages",
  country: "Burgundy, France",
  image: "/Macon Villages.webp",
  description:
    "Mâcon-Villages 2022 — 13% ABV.",
  grapes: ["Chardonnay"],
  style: "Vignerons de Bel Air",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 75,
  name: "Le Rosé de Bel-Air",
  country: "Burgundy, France",
  image: "/Le Rose de Bel Air.webp",
  description:
    "Le Rosé de Bel-Air 2023 — 12.5% ABV. Made from Gamay Noir à Jus Blanc.",
  grapes: ["Gamay Noir à Jus Blanc"],
  style: "Vignerons de Bel Air",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},

// Vignerons de Mancey

{
  id: 76,
  name: "Crémant de Bourgogne Brut Réserve",
  country: "Burgundy, France",
  image: "/Cremant de Bourgogne Brut Reserve.webp",
  description:
    "Crémant de Bourgogne Brut Réserve N/V — 12% ABV. 40% Chardonnay, 40% Pinot Noir, 10% Aligoté, 10% Gamay.",
  grapes: ["Chardonnay", "Pinot Noir", "Aligoté", "Gamay"],
  style: "Vignerons de Mancey",
  wholesaleCase: "$175.92",
  wholesaleBottle: "$14.66",
  retailBottle: "$21.99",
},

// Rhône

// Château Boucarut

{
  id: 77,
  name: "Lirac 'Pierres Vivantes'",
  country: "Rhône, France",
  image: "/Lirac Pierres Vivantes.webp",
  description:
    "Lirac 'Pierres Vivantes' 2022 — 14% ABV. Organic wine made with indigenous yeasts; not fined or filtered. Grenache, Syrah, Mourvèdre and Cinsault.",
  grapes: ["Grenache", "Syrah", "Mourvèdre", "Cinsault"],
  style: "Château Boucarut",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 78,
  name: "Les Petits Ducs - Côtes du Rhône",
  country: "Rhône, France",
  image: "/Les Petits Ducs Cotes du Rhone.webp",
  description:
    "Les Petits Ducs - Côtes du Rhône 2022 — 14.5% ABV. Grenache & Syrah.",
  grapes: ["Grenache", "Syrah"],
  style: "Château Boucarut",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},

{
  id: 79,
  name: "Empusa - Coteaux du Pont du Gard",
  country: "Rhône, France",
  image: "/Empusa Coteaux du Pont du Gard.webp",
  description:
    "Empusa - Coteaux du Pont du Gard Rouge 2022 — 14.5% ABV. 100% Grenache.",
  grapes: ["Grenache"],
  style: "Château Boucarut",
  wholesaleCase: "$103.92",
  wholesaleBottle: "$8.66",
  retailBottle: "$12.99",
},

{
  id: 80,
  name: "Tavel 'Qu'est ce qu'on attend?'",
  country: "Rhône, France",
  image: "/Tavel Qu'est ce qu'on attend.webp",
  description:
    "Tavel 'Qu'est ce qu'on attend?' 2023 — 13.5% ABV. Grenache & Cinsault.",
  grapes: ["Grenache", "Cinsault"],
  style: "Château Boucarut",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 81,
  name: "Lirac 'd'Schlànga'",
  country: "Rhône, France",
  image: "/Lirac d Schlanga.webp",
  description:
    "Lirac 'd'Schlànga' 2022 — 13% ABV. Roussanne & Viognier.",
  grapes: ["Roussanne", "Viognier"],
  style: "Château Boucarut",
  wholesaleCase: "$207.96",
  wholesaleBottle: "$17.33",
  retailBottle: "$25.99",
},

{
  id: 82,
  name: "Gag Blau - Coteaux du Pont du Gard",
  country: "Rhône, France",
  image: "/Gag Blau Coteaux du Pont du Gard.webp",
  description:
    "Gag Blau - Coteaux du Pont du Gard Blanc 2023 — 11.5% ABV. Roussanne & Viognier.",
  grapes: ["Roussanne", "Viognier"],
  style: "Château Boucarut",
  wholesaleCase: "$135.96",
  wholesaleBottle: "$11.33",
  retailBottle: "$16.99",
},

// Domaine Dame Guilherme

{
  id: 83,
  name: "Plan de Dieu, Côtes du Rhône Villages",
  country: "Rhône, France",
  image: "/Plan de Dieu Cotes du Rhone Villages.webp",
  description:
    "Plan de Dieu, Côtes du Rhône Villages 2018 — 15% ABV. 65% Grenache, 25% Syrah, 10% Mourvèdre.",
  grapes: ["Grenache", "Syrah", "Mourvèdre"],
  style: "Domaine Dame Guilherme",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},

// Domaine La Durbane

{
  id: 84,
  name: "Châteauneuf-du-Pape",
  country: "Rhône, France",
  image: "/Chateauneuf du Pape Rouge.webp",
  description:
    "Châteauneuf-du-Pape Rouge 2018 — 14.5% ABV. 95% Grenache, 3% Mourvèdre, 2% Syrah. Fermented in truncated wooden vats and aged 18 months in stainless steel.",
  grapes: ["Grenache", "Mourvèdre", "Syrah"],
  style: "Domaine La Durbane",
  wholesaleCase: "$359.88",
  wholesaleBottle: "$29.99",
  retailBottle: "$44.99",
},

{
  id: 85,
  name: "Châteauneuf-du-Pape Blanc",
  country: "Rhône, France",
  image: "/Chateauneuf du Pape Blanc.webp",
  description:
    "Châteauneuf-du-Pape Blanc 2023 — 14.5% ABV. 100% Roussanne. Fermented in demi-muids and aged on fine lees for 12 months.",
  grapes: ["Roussanne"],
  style: "Domaine La Durbane",
  wholesaleCase: "$399.96",
  wholesaleBottle: "$33.33",
  retailBottle: "$49.99",
},

{
  id: 86,
  name: "Hédoniste Rouge",
  country: "Rhône, France",
  image: "/Hedoniste Rouge.webp",
  description:
    "Hédoniste Rouge 2022 — 13.5% ABV. 100% Syrah.",
  grapes: ["Syrah"],
  style: "Domaine La Durbane",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},

{
  id: 87,
  name: "Hédoniste Blanc",
  country: "Rhône, France",
  image: "/Hedoniste Blanc.webp",
  description:
    "Hédoniste Blanc 2022 — 14% ABV. 85% Viognier, 10% Vermentino, 5% Muscat Petit Grains.",
  grapes: ["Viognier", "Vermentino", "Muscat Petit Grains"],
  style: "Domaine La Durbane",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},
// Rhône

// Domaine Saint Vincent

{
  id: 88,
  name: "Vinsobres Cuvée St. Pierre",
  country: "Rhône, France",
  image: "/Vinsobres Cuvee St Pierre.webp",
  description:
    "Vinsobres Cuvée St. Pierre 2021 — 14.5% ABV. 50% Grenache, 50% Syrah. Aged 12 months in used barrels. 92 pts Robert Parker.",
  grapes: ["Grenache", "Syrah"],
  style: "Domaine Saint Vincent",
  wholesaleCase: "$199.92",
  wholesaleBottle: "$16.66",
  retailBottle: "$24.99",
},

{
  id: 89,
  name: "Vinsobres",
  country: "Rhône, France",
  image: "/Vinsobres.webp",
  description:
    "Vinsobres 2021 — 14% ABV. 50% Grenache, 50% Syrah. Aged in concrete vats.",
  grapes: ["Grenache", "Syrah"],
  style: "Domaine Saint Vincent",
  wholesaleCase: "$159.96",
  wholesaleBottle: "$13.33",
  retailBottle: "$19.99",
},

{
  id: 90,
  name: "Côtes du Rhône Villages",
  country: "Rhône, France",
  image: "/Cotes du Rhone Villages Rouge.webp",
  description:
    "Côtes du Rhône Villages Rouge 2021 — 13.5% ABV. 50% Grenache, 50% Syrah.",
  grapes: ["Grenache", "Syrah"],
  style: "Domaine Saint Vincent",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},

{
  id: 91,
  name: "Côtes du Rhône Blanc",
  country: "Rhône, France",
  image: "/Cotes du Rhone Blanc.webp",
  description:
    "Côtes du Rhône Blanc 2023 — 14% ABV. 80% Grenache Blanc, 10% Marsanne, 10% Viognier.",
  grapes: ["Grenache Blanc", "Marsanne", "Viognier"],
  style: "Domaine Saint Vincent",
  wholesaleCase: "$119.88",
  wholesaleBottle: "$9.99",
  retailBottle: "$14.99",
},

// La Vigne du Roy

{
  id: 92,
  name: "Châteauneuf-du-Pape",
  country: "Rhône, France",
  image: "/Chateauneuf du Pape La Vigne du Roy.webp",
  description:
    "Châteauneuf-du-Pape 2021 — 14% ABV. 57% Grenache, 39% Syrah, 4% Cinsault.",
  grapes: ["Grenache", "Syrah", "Cinsault"],
  style: "La Vigne du Roy",
  wholesaleCase: "$287.88",
  wholesaleBottle: "$23.99",
  retailBottle: "$35.99",
},

{
  id: 93,
  name: "Côtes du Rhône",
  country: "Rhône, France",
  image: "/Cotes du Rhone La Vigne du Roy.webp",
  description:
    "Côtes du Rhône 2024 — 13.5% ABV. 60% Grenache, 40% Syrah.",
  grapes: ["Grenache", "Syrah"],
  style: "La Vigne du Roy",
  wholesaleCase: "$103.92",
  wholesaleBottle: "$8.66",
  retailBottle: "$12.99",
},

{
  id: 94,
  name: "Costières de Nîmes Rosé",
  country: "Rhône, France",
  image: "/Costieres de Nimes Rose.webp",
  description:
    "Costières de Nîmes Rosé 2024 — 12.5% ABV. 80% Syrah, 20% Mourvèdre.",
  grapes: ["Syrah", "Mourvèdre"],
  style: "La Vigne du Roy",
  wholesaleCase: "$103.92",
  wholesaleBottle: "$8.66",
  retailBottle: "$12.99",
},

// Les Sources de Montmirail

{
  id: 95,
  name: "Gigondas",
  country: "Rhône, France",
  image: "/Gigondas.webp",
  description:
    "Gigondas 2021 — 14% ABV. Grenache, Syrah and Mourvèdre. 91 pts James Suckling.",
  grapes: ["Grenache", "Syrah", "Mourvèdre"],
  style: "Les Sources de Montmirail",
  wholesaleCase: "$207.96",
  wholesaleBottle: "$17.33",
  retailBottle: "$25.99",
},

// Rive de Malva

{
  id: 96,
  name: "Saint-Joseph",
  country: "Rhône, France",
  image: "/Saint Joseph.webp",
  description:
    "Saint-Joseph 2020 — 13.5% ABV. 100% Syrah. 92 pts James Suckling.",
  grapes: ["Syrah"],
  style: "Rive de Malva",
  wholesaleCase: "$191.88",
  wholesaleBottle: "$15.99",
  retailBottle: "$23.99",
},

// Provence

// Château Mentone

{
  id: 97,
  name: "Le Bonne Étoile",
  country: "Provence, France",
  image: "/Le Bonne Etoile.webp",
  description:
    "Le Bonne Étoile N/V — 13.5% ABV. 60% Syrah, 25% Cinsault, 15% Grenache. Organic Winery.",
  grapes: ["Syrah", "Cinsault", "Grenache"],
  style: "Château Mentone",
  wholesaleCase: "$135.96",
  wholesaleBottle: "$11.33",
  retailBottle: "$16.99",
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

const filteredRegions = wineRegions.filter((region) => {
  const term = searchTerm.toLowerCase().trim();

  if (!term) return true;

  const searchableText = [
    region.name,
    region.country,
    region.style,
    region.description,
    ...region.grapes,
  ]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(term);
});
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
            Discover France <br />
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
  Explore the timeless wines of France.
  Discover Laurentia&apos;s curated collection, where celebrated French
  terroirs, noble grape varieties, and generations of winemaking tradition
  come together in every bottle.
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
 

  { val: "97", label: "Wines" },
  { val: "25", label: "Wine Houses" },
  { val: "9", label: "Wine Regions" },
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
  "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85')",
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
      France Wine Collection
    </h2>

<p className="mx-auto mt-4 max-w-xl font-old-standard text-sm leading-6 text-white">
  Discover Laurentia&apos;s collection of exceptional French wines,
  showcasing renowned terroirs, noble grape varieties, and the timeless
  elegance of France&apos;s distinguished winemaking tradition.
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
  We couldn&apos;t find any French wine or region matching{" "}

  <span className="font-semibold text-[#65002d]">
    &quot;{searchTerm}&quot;
  </span>

  Try searching for wines like Cabernet Sauvignon, Merlot,
  Pinot Noir, Chardonnay, Sauvignon Blanc, Syrah, or Grenache.
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
       The Art of France Wine
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
  Laurentia • France Wine Collection
</p>

  </div>
</section>
    </main>
  );
}