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
  { src: 'photos/DSC03338.jpeg',     title: 'Blaue Studen',        caption: 'Intensly absorbing the blue sky with the sunset. Raw imperfection.',        category: 'street',       city: 'Berlin',    highlight: true  },
  { src: 'photos/DSC03638.jpeg',     title: 'Pulling the alarm',   caption: 'Even beauty forgets to leave.',                 category: 'street',       city: 'Berlin',    highlight: true  },
  { src: 'photos/DSC03187.jpeg',     title: 'oberbaumbrücke',      caption: 'old stone, new admirer.',                           category: 'street',       city: 'Berlin',    highlight: true  },
  { src: 'photos/IMG_7148.jpeg',     title: 'Train Driver',        caption: 'Sure man go ahead! Love the people of Chicago.',   category: 'street',       city: 'Chicago',   highlight: true  },
  { src: 'photos/DSCF3598.jpeg',     title: 'Crosswalk',           caption: 'steel above. rain below. strangers passing.',   category: 'street',       city: 'Chicago'  },
  { src: 'photos/DSCF3609.jpeg',     title: 'Leading Lines',       caption: 'the city swallows you whole!',                  category: 'street',       city: 'Chicago'  },
  { src: 'photos/DSC02616_2.jpeg',   title: 'French Culture',       caption: "someone forgot. or maybe didn't.",              category: 'street',       city: 'Durbuy'    },
  { src: 'photos/2E513AE4_DD8B_4DD6_8CB1_70CD238D9984_1309_0000001112A84E77.jpg', title: 'Vespa autumn', caption: 'Feft behind.', category: 'street', city: 'Berlin' },
  { src: 'photos/DSC08940.jpg',      title: 'Prenzlauer berg',     caption: 'Growing distand. Amazing meomory.',              category: 'street',       city: 'Berlin'   },
  { src: 'photos/DSCF1269.jpg',      title: 'Blumen & Pflanzen',   caption: 'Flowers & Plants. Someone still cares.',         category: 'street',       city: 'Berlin'   },
  { src: 'photos/DSCF2232.jpg',      title: 'Hang your Boots',               caption: 'someone walked away without them.',              category: 'street',       city: 'Vilnius'   },
  { src: 'photos/DSCF6635.jpg',      title: 'Havana Merchants',    caption: 'Comprar en la Calle',                category: 'street',       city: 'Havana'   },

  // --- PORTRAIT ---
  { src: 'photos/B91F21CB_62D1_47CB_9CF7_BC046A755A7E_1309_0000001165CD1BD0.jpg', title: 'Untrusted Gaze', caption: 'Dangerously close.', category: 'portrait', city: 'Berlin' },
  { src: 'photos/DSCF1002.jpg',      title: 'Breathe in',      caption: 'Breathe in and appreciate, while it is in bloom.',            category: 'portrait',     city: 'Berlin',    highlight: true  },
  { src: 'photos/DSCF1107.jpg',      title: 'Rush Rush',               caption: 'Rush with anger and success. Caught in one frame.',         category: 'portrait',     city: 'Berlin',    highlight: true  },
  { src: 'photos/DSCF7349.jpg',      title: 'Self Portrait',       caption: 'The one behind the lens.',                      category: 'portrait',     city: 'Varadero'     },

  // --- DOCUMENTARY ---
  { src: 'photos/DSC01748.jpeg',     title: 'Teach Peace',         caption: 'The handwriting of the hopeful.',               category: 'documentary',  city: 'Berlin'   },
  { src: 'photos/DSC08699.jpeg',     title: 'Lean',                caption: 'Gravity finds its own angle.',                  category: 'documentary',  city: 'Mettet'    },

  // --- LANDSCAPE ---
  { src: 'photos/DSC08180.jpeg',     title: 'Morroring Dolomites',           caption: 'The mountain holds its breath while looking in the morrir.',                category: 'landscape',    city: 'Dolomites' },

  // --- ABSTRACT ---
  { src: 'photos/B83C4E79_8B2A_4DFE_B220_C5F45AAD15A5_46447_000004874707C767.jpeg', title: 'Sky from Below', caption: 'Geometry of spotlight ambition.', category: 'abstract', city: 'Chicago' },
  { src: 'photos/DSCF3456.jpg',      title: 'Locked freedom',              caption: 'Small life. Heavy iron. Big opening',                       category: 'abstract',     city: 'Berlin'   },


  // --- NEW ADDITIONS ---
  { src: 'photos/DSCF4550.jpg',   title: 'Blessed',  caption: 'Childhood curiousity',         category: 'street',      city: 'Berlin'   },
  { src: 'photos/DSCF5452.jpg',   title: 'Proudly Presenting',        caption: 'Collecting the best of the best',        category: 'street',      city: 'Lisbon'   },
  { src: 'photos/DSCF2383.jpg',   title: 'One moment',           caption: 'one second before it melts.',           category: 'abstract',    city: 'Vilnius'   },
  { src: 'photos/DSCF7893.jpg',   title: 'lieblingsörtchen',     caption: 'look closer. it gets better.',  category: 'street',      city: 'Berlin'  ,  highlight: true },
  { src: 'photos/DSCF2263.jpg',   title: 'Walking',     caption: 'Wave of the earth takes me away.',          category: 'street',      city: 'Vilnius'   },
  { src: 'photos/DSCF5386.jpg',   title: 'Shoes off',            caption: 'Shoes off. World on hold.',             category: 'street',      city: 'Lisbon'   },
  { src: 'photos/DSC05515.jpg',   title: 'Foggy park',     caption: 'Staring into darkness until it brings beauty',             category: 'documentary', city: 'Sint-Niklaas'   },
  { src: 'photos/DSC05319.jpg',   title: 'Heritage',            caption: 'Italian waters',          category: 'documentary', city: 'Berlin'   },
  { src: 'photos/DSCF2330.jpg',   title: 'Crowned',             caption: 'Furry hat',        category: 'abstract',    city: 'Berlin'   },
  { src: 'photos/DSCF1500.jpg',   title: 'Left',           caption: 'Santa is waiting and waving for you. Next year.',      category: 'landscape',   city: 'Berlin'   },
  { src: 'photos/DSCF9995.jpg',   title: 'Highland',             caption: 'Birds perfectly aligned the shot. Thanks. ',      category: 'landscape',   city: 'Belgium' },
  { src: 'photos/DSCF8617.jpg',   title: 'Havana wall',          caption: 'Held together with paint and will.',    category: 'street',      city: 'Havana'   },
  { src: 'photos/DSC03989.jpg',   title: 'Peeping',               caption: 'Has anyone seen that?',            category: 'street',      city: 'Venice'   },
  { src: 'photos/A3B1ABB7.jpg',   title: 'Hold them tight',      caption: 'Midnight errands. Love the rusing emotion',    category: 'street',      city: 'Berlin'   },
  { src: 'photos/DSCF2316.jpg',   title: 'Let go',               caption: 'Just a little.',                      category: 'street',      city: 'Berlin'   },
  { src: 'photos/DSCF2086.jpg',   title: 'Always there',         caption: 'She knows the strenght',             category: 'portrait',      city: 'Berlin'   },
  { src: 'photos/DSC01755.jpg',   title: 'The kids know',        caption: 'Kids already know how to live.',                category: 'documentary', city: 'Berlin'   },
  { src: 'photos/DSCF4066.jpg',   title: 'Leave',        caption: 'Leaving with intensity.',         category: 'street',      city: 'Lisbon'   },
  { src: 'photos/idea of self.jpg',title: 'self perception',     caption: 'know who you are',                      category: 'street',      city: 'Berlin',  highlight: true },

  
];
