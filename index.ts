// Import stylesheets
import './style.css';

const exo1 = [0, 6, 4, 1, 3, 2, 5];

exo1[5];
// renvoi la 5eme valeur du tableau
// 3

exo1[9];
// renvoi la 9eme valeur du tableau qui n'existe pas ?
// undefined

exo1.sort();
// trie le tableau en ASC
// [0,1,2,3,4,5,6]

exo1.sort().reverse();
// trie le tableau en DESC
// [6,5,4,3,2,1,0]

exo1.sort().filter((value) => value > 3);
// affiche les entrées du tableau supérieur à 3
// [4,5,6]

console.log(exo1.sort().filter((value) => value % 2 === 0));
// affiche les entrées du tableau ou x/2 = 0
/////// XXXX [0] XXX
// % reste d'une division
// nb de fois ou tu peux mettre le %nb et ce qu'il en reste

exo1.sort().map((value) => value * 2);
// affiche les entrées du tableau multiplié par 2
// [0,2,4,6,8,10,12]

exo1.sort().concat([7, 8, 9]);
// ajoute à la fin du tableau trié les valeurs 7,8,9
//[0, 6, 4, 1, 3, 2, 5, 7, 8, 9];

const exo2 = [
  {
    id: 0,
    name: 'toto',
    prenom: 'tutu',
  },
  {
    id: 4,
    name: 'tata',
    prenom: 'titi',
  },
  {
    id: 2,
    name: 'tyty',
    prenom: 'tete',
  },
  {
    id: 1,
    name: 'Georges',
    prenom: 'Marion',
  },
];

exo2.map((value) => value.name + ' ' + value.prenom);
// Parcours et affiche les names et prenoms du tableau d'objets
// [toto tutu, tata titi, tyty tete, Georges Marion]

exo2.map((value, index) => `${index} : ${value.name}`);
// Affiche l'index : name
// [0 : toto, 4 : tata, 2 : tyty, 1 : Georges]

exo2.filter((value) => !value.name.includes('t'));
// Filtre les noms qui n'ont pas de lettre 't'
// [Georges]

const exo3 = {
  id: 1,
  name: 'stench',
  is_main_series: true,
  generation: {
    name: 'generation-iii',
    url: 'https://pokeapi.co/api/v2/generation/3/',
  },
  names: [
    {
      name: 'Stench',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
    },
  ],
  effect_entries: [
    {
      effect:
        "This Pokémon's damaging moves have a 10% chance to make the target [flinch]{mechanic:flinch} with each hit if they do not already cause flinching as a secondary effect.\n\nThis ability does not stack with a held item.\n\nOverworld: The wild encounter rate is halved while this Pokémon is first in the party.",
      short_effect:
        'Has a 10% chance of making target Pokémon [flinch]{mechanic:flinch} with each hit.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
    },
  ],
  effect_changes: [
    {
      version_group: {
        name: 'black-white',
        url: 'https://pokeapi.co/api/v2/version-group/11/',
      },
      effect_entries: [
        {
          effect: 'Has no effect in battle.',
          language: {
            name: 'en',
            url: 'https://pokeapi.co/api/v2/language/9/',
          },
        },
      ],
    },
  ],
  flavor_text_entries: [
    {
      flavor_text: 'è‡­ãã¦ã€€ç›¸æ‰‹ãŒ\nã²ã‚‹ã‚€ã€€ã“ã¨ãŒã‚ã‚‹ã€‚',
      language: {
        name: 'ja-kanji',
        url: 'https://pokeapi.co/api/v2/language/11/',
      },
      version_group: {
        name: 'x-y',
        url: 'https://pokeapi.co/api/v2/version-group/15/',
      },
    },
  ],
  pokemon: [
    {
      is_hidden: true,
      slot: 3,
      pokemon: {
        name: 'gloom',
        url: 'https://pokeapi.co/api/v2/pokemon/44/',
      },
    },
  ],
};

exo3.pokemon[0].pokemon.name;
// affiche le name du premier pokemon du tableau
////// XXX Gloom

exo3.generation.name;
// affiche : generation-iii,

exo3.generation.language?.name;
//undefined ? language se trouve dans l'array d'obj flavor_text_entries, effect_entries ( de effect_changes et de l'isolé ) et du tableau name.
// et non dans l'objet generation qui ne contient que le name et l'url

exo3['pokemon'][0]?.['pokemon']?.url;
console.log(exo3.pokemon[0]?.pokemon.url)
// affiche l'url du premier pokemon (s'il existe)
// https://pokeapi.co/api/v2/pokemon/44/

exo3.effect_entries[0].effect.replace('flinch', 'prout');
// Vive les regex :D
// remplace flinch par prout UNE FOIS dans la première entrée de l'effet du tableau effect_entries
// This Pokémon's damaging moves have a 10% chance to make the target [prout]{mechanic:flinch} with each hit if they do not already cause flinching as a secondary effect.\n\nThis ability does not stack with a held item.\n\nOverworld: The wild encounter rate is halved while this Pokémon is first in the party.

exo3.effect_entries[0].effect.replace(/flinch/g, 'prout');
// remplace tous les flinch par prout dans la première entrée de l'effet du tableau effect_entries

exo3.pokemon.find((pokemon) => pokemon.slot === 3)?.[0]?.pokemon.name;
//affiche le nom du premier pokemon dont le slot est 3
//gloom

console.log(
  exo3.pokemon.find((pokemon) => pokemon.slot === 4)?.[0]?.pokemon.name
);
// affiche le nom du premier pokemon dont le slot est 4 si elle existe
// undefined
