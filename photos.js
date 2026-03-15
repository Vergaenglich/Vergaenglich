// ============================================================
//  VERGÄNGLICH — Photo Library
//  To add a new photo:
//  1. Drop the image file into the /photos/ folder
//  2. Add a new line below following the same format
//  3. Save and push to GitHub — site updates automatically
//
//  FIELDS:
//  src       — path to image file in /photos/ folder
//  title     — short lowercase title
//  caption   — one poetic line, ends with a period
//  category  — street | architecture | portrait | landscape | documentary | abstract
//  city      — where it was taken
//  highlight — true = featured badge (optional)
// ============================================================

const PHOTOS = [

  // --- STREET ---
  { src: 'photos/DSC03338.jpeg',     title: 'fernsehturm',         caption: 'graffiti, gold light, going somewhere.',        category: 'street',       city: 'Berlin',    highlight: true  },
  { src: 'photos/DSC03638.jpeg',     title: 'wilting',             caption: 'even beauty forgets to leave.',                 category: 'street',       city: 'Berlin',    highlight: true  },
  { src: 'photos/DSC03187.jpeg',     title: 'oberbaumbrücke',      caption: 'old stone, new sky.',                           category: 'street',       city: 'Berlin',    highlight: true  },
  { src: 'photos/IMG_7148.jpeg',     title: 'controller',          caption: 'he knew the camera was there.',                 category: 'street',       city: 'Chicago',   highlight: true  },
  { src: 'photos/DSCF3598.jpeg',     title: 'crosswalk',           caption: 'steel above. rain below. strangers passing.',   category: 'street',       city: 'Chicago'  },
  { src: 'photos/DSCF3609.jpeg',     title: 'leading lines',       caption: 'the city swallows you whole.',                  category: 'street',       city: 'Chicago'  },
  { src: 'photos/DSC02616_2.jpeg',   title: 'still crunchy',       caption: "someone forgot. or maybe didn't.",              category: 'street',       city: 'Paris'    },
  { src: 'photos/2E513AE4_DD8B_4DD6_8CB1_70CD238D9984_1309_0000001112A84E77.jpg', title: 'vespa autumn', caption: 'left behind by summer.', category: 'street', city: 'Berlin' },
  { src: 'photos/DSC08940.jpg',      title: 'prenzlauer berg',     caption: 'two figures, one vanishing point.',              category: 'street',       city: 'Berlin'   },
  { src: 'photos/DSCF1269.jpg',      title: 'blumen & pflanzen',   caption: 'flowers & plants. someone still cares.',         category: 'street',       city: 'Berlin'   },
  { src: 'photos/DSCF2232.jpg',      title: 'boots',               caption: 'someone walked away without them.',              category: 'street',       city: 'Berlin'   },
  { src: 'photos/DSCF6635.jpg',      title: 'havana merchants',    caption: 'the whole city is a repair job.',                category: 'street',       city: 'Havana'   },

  // --- PORTRAIT ---
  { src: 'photos/B91F21CB_62D1_47CB_9CF7_BC046A755A7E_1309_0000001165CD1BD0.jpg', title: 'the gaze', caption: 'she holds more than she shows.', category: 'portrait', city: 'Berlin' },
  { src: 'photos/DSCF1002.jpg',      title: 'with sunflower',      caption: 'bloom and face. both in full light.',            category: 'portrait',     city: 'Berlin',    highlight: true  },
  { src: 'photos/DSCF1107.jpg',      title: 'vogue',               caption: 'rush and success. caught in one frame.',         category: 'portrait',     city: 'Berlin',    highlight: true  },
  { src: 'photos/DSCF7349.jpg',      title: 'self portrait',       caption: 'the one behind the lens.',                      category: 'portrait',     city: 'Cuba'     },

  // --- DOCUMENTARY ---
  { src: 'photos/DSC01748.jpeg',     title: 'teach peace',         caption: 'the handwriting of the hopeful.',               category: 'documentary',  city: 'Berlin'   },
  { src: 'photos/DSC08699.jpeg',     title: 'lean',                caption: 'gravity finds its own angle.',                  category: 'documentary',  city: 'Track'    },

  // --- LANDSCAPE ---
  { src: 'photos/DSC08180.jpeg',     title: 'dolomites',           caption: 'the mountain holds its breath.',                category: 'landscape',    city: 'Dolomites' },

  // --- ABSTRACT ---
  { src: 'photos/B83C4E79_8B2A_4DFE_B220_C5F45AAD15A5_46447_000004874707C767.jpeg', title: 'sky from below', caption: 'geometry of ambition.', category: 'abstract', city: 'Chicago' },
  { src: 'photos/DSCF3456.jpg',      title: 'pigeon',              caption: 'small life. heavy iron.',                       category: 'abstract',     city: 'Berlin'   },


  // --- NEW ADDITIONS ---
  { src: 'photos/DSCF4550.jpg',   title: 'schwartzkopffstraße',  caption: 'everyone leaves the same way.',         category: 'street',      city: 'Berlin'   },
  { src: 'photos/DSCF5452.jpg',   title: 'still waiting',        caption: 'still waiting. always waiting.',        category: 'street',      city: 'Lisbon'   },
  { src: 'photos/DSCF2383.jpg',   title: 'one moment',           caption: 'one moment before it melts.',           category: 'abstract',    city: 'Berlin'   },
  { src: 'photos/DSCF7893.jpg',   title: 'prenzlauer allee',     caption: 'the city breathes through its veins.',  category: 'street',      city: 'Berlin'   },
  { src: 'photos/DSCF2263.jpg',   title: 'lieblingsörtchen',     caption: 'look closer. it gets better.',          category: 'street',      city: 'Berlin',  highlight: true },
  { src: 'photos/DSCF5386.jpg',   title: 'shoes off',            caption: 'shoes off. world on hold.',             category: 'street',      city: 'Lisbon'   },
  { src: 'photos/DSC05515.jpg',   title: 'dancing children',     caption: 'joy finds its own reason.',             category: 'documentary', city: 'Berlin'   },
  { src: 'photos/DSC05319.jpg',   title: 'sparklers',            caption: 'light held against the dark.',          category: 'documentary', city: 'Berlin'   },
  { src: 'photos/DSCF2330.jpg',   title: 'snowfall',             caption: 'every flake its own direction.',        category: 'abstract',    city: 'Berlin'   },
  { src: 'photos/DSCF1500.jpg',   title: 'foggy park',           caption: 'the fog doesn\'t ask permission.',      category: 'landscape',   city: 'Berlin'   },
  { src: 'photos/DSCF9995.jpg',   title: 'highland',             caption: 'they don\'t know about the city.',      category: 'landscape',   city: 'Scotland' },
  { src: 'photos/DSCF8617.jpg',   title: 'havana wall',          caption: 'held together with paint and will.',    category: 'street',      city: 'Havana'   },
  { src: 'photos/DSC03989.jpg',   title: 'venice',               caption: 'the city floats. so do we.',            category: 'street',      city: 'Venice'   },
  { src: 'photos/A3B1ABB7.jpg',   title: 'midnight berlin',      caption: 'midnight errands. nobody asks why.',    category: 'street',      city: 'Berlin'   },
  { src: 'photos/DSCF2316.jpg',   title: 'let go',               caption: 'let go a little.',                      category: 'street',      city: 'Berlin'   },
  { src: 'photos/DSCF2086.jpg',   title: 'always there',         caption: 'always in the background.',             category: 'street',      city: 'Berlin'   },
  { src: 'photos/DSC01755.jpg',   title: 'the kids know',        caption: 'the kids already know.',                category: 'documentary', city: 'Berlin'   },
  { src: 'photos/DSCF4066.jpg',   title: 'lisbon street',        caption: 'another century, same street.',         category: 'street',      city: 'Lisbon'   },

];
