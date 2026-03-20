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
  { src: 'photos/DSC03338.jpeg',     title: 'blaue stunden',         caption: 'perspective from any position changes everything',        category: 'street',       city: 'Berlin',    highlight: true  },
  { src: 'photos/DSC03638.jpeg',     title: 'help',             caption: 'everyone is going to trouble. aftraid to pull the brake',                 category: 'street',       city: 'Berlin',    highlight: true  },
  { src: 'photos/DSC03187.jpeg',     title: 'oberbaumbrücke',      caption: 'the orange perfection of berlin',                           category: 'street',       city: 'Berlin',    highlight: true  },
  { src: 'photos/DSCF3592.jpg',     title: 'controller',          caption: 'sure man go ahead',                 category: 'street',       city: 'Chicago',   highlight: true  },
  { src: 'photos/DSCF5452.jpg',   title: 'just look at it',        caption: 'look at my shoe collection. you like it right',        category: 'street',      city: 'Lisbon'   },
  { src: 'photos/DSCF3598.jpeg',     title: 'crosswalk',           caption: 'steel above. rain below. strangers passing',   category: 'street',       city: 'Chicago'  },
  { src: 'photos/DSCF3609.jpeg',     title: 'perfect imperfection',       caption: 'not straight not crooked. passed perfectly',                  category: 'street',       city: 'Chicago'  },
  { src: 'photos/DSC02616_2.jpeg',   title: 'leaning',       caption: "someonething so simple so perfect",              category: 'street',       city: 'Paris'    },
  { src: 'photos/2E513AE4_DD8B_4DD6_8CB1_70CD238D9984_1309_0000001112A84E77.jpg', title: 'forgotten glory', caption: 'left behind but loved by all', category: 'street', city: 'Berlin' },
  { src: 'photos/DSC08940.jpg',      title: 'passage',     caption: 'vanishing in infinity',              category: 'street',       city: 'Berlin'   },
  { src: 'photos/DSCF1269.jpg',      title: 'blumen & pflanzen',   caption: 'weight of rain',         category: 'street',       city: 'Berlin'   },
  { src: 'photos/DSCF2232.jpg',      title: 'boots',               caption: 'waiting for you to come home',              category: 'street',       city: 'Berlin'   },
  { src: 'photos/DSCF6635.jpg',      title: 'walking shoes',    caption: 'it does not need to fit for it to work',                category: 'street',       city: 'Havana'   },
  { src: 'photos/DSCF4550.jpg',   title: 'child mind',  caption: 'staying curious and keeping faith',         category: 'street',      city: 'Berlin'   },
  { src: 'photos/DSCF7893.jpg',   title: 'lieblingsortchen',     caption: 'keep looking. it gets better',  category: 'street',      city: 'Berlin'   },
  { src: 'photos/DSCF2263.jpg',   title: 'wave of life',     caption: 'all heading the same direction',          category: 'street',      city: 'Berlin',  highlight: true },
  { src: 'photos/DSCF5386.jpg',   title: 'shoes off',            caption: 'shoes off. world on hold',             category: 'street',      city: 'Lisbon'   },
  { src: 'photos/DSCF8617.jpg',   title: 'havana wall',          caption: 'held together with paint and will',    category: 'street',      city: 'Havana'   },
  { src: 'photos/DSC03989.jpg',   title: 'call me baby',               caption: 'dont forget looking up sweetheart',            category: 'street',      city: 'Venice'   },
  { src: 'photos/A3B1ABB7.jpg',   title: 'responsible danger',      caption: 'hold the small ones. teach them well',    category: 'street',      city: 'Berlin'   },
  { src: 'photos/DSCF2316.jpg',   title: 'let go',               caption: 'let go a little more',                      category: 'street',      city: 'Berlin'   },
  { src: 'photos/DSCF2086.jpg',   title: 'touch of love',         caption: 'we all have a mission. do it',             category: 'street',      city: 'Berlin'   },
  { src: 'photos/Idea_of_self.jpg',  title: 'idea of self',         caption: 'the shadow knows what it wants to be',         category: 'street',      city: 'Berlin',  highlight: true },
  { src: 'photos/DSCF6649.jpg', title: 'video', caption: 'always watching. never seeing', category: 'street', city: 'Berlin' },
  { src: 'photos/DSCF6748.jpg', title: 'malecon', caption: 'the sun does not ask permission either', category: 'street', city: 'Havana' },
  { src: 'photos/DSCF7278.jpg', title: 'impala', caption: 'every street a different century', category: 'street', city: 'Cuba' },
  { src: 'photos/DSCF1566.jpg', title: 'open view', caption: 'always be surprised', category: 'abstract', city: 'Berlin' },
  { src: 'photos/DSCF3482.JPG', title: 'chicago river', caption: 'the city fits through any gap you give it. thanks bird', category: 'street', city: 'Chicago' },
  { src: 'photos/DSCF3760.JPG', title: 'still standing', caption: 'glory and decay. same address', category: 'street', city: 'Berlin' },
  { src: 'photos/DSCF3773.JPG', title: 'friedrichstrasse', caption: 'everyone climbing to somewhere else', category: 'street', city: 'Berlin' },
  
  // --- PORTRAIT ---
  { src: 'photos/B91F21CB_62D1_47CB_9CF7_BC046A755A7E_1309_0000001165CD1BD0.jpg', title: 'the gaze', caption: 'powerful. carefull. and not to be messed with', category: 'portrait', city: 'Berlin' },
  { src: 'photos/DSCF1002.jpg',      title: 'breathe',      caption: 'take it all in',            category: 'portrait',     city: 'Berlin',    highlight: true  },
  { src: 'photos/DSCF1107.jpg',      title: 'pefectly hurried',               caption: 'rush rush',         category: 'portrait',     city: 'Berlin',    highlight: true  },
  { src: 'photos/DSCF7349.jpg',      title: 'self portrait',       caption: 'the one behind the lens',                      category: 'portrait',     city: 'Cuba'     },
  { src: 'photos/DSCF6947.jpg',      title: 'varadero',            caption: 'she held the wind for a moment',               category: 'portrait', city: 'Varadero' },

  // --- DOCUMENTARY ---
  { src: 'photos/DSC01748.jpeg',  title: 'teach peace',         caption: 'the handwriting of the hopeful',               category: 'documentary',  city: 'Berlin'   },
  { src: 'photos/DSC08699.jpeg',  title: 'lean',                caption: 'gravity finds its own angle',                  category: 'documentary',  city: 'Track'    },
  { src: 'photos/DSC05515.jpg',   title: 'lit up',     caption: 'you should shed light around yourself',             category: 'documentary', city: 'Berlin'   },
  { src: 'photos/DSC05319.jpg',   title: 'venice',            caption: 'pusing water and lighting cigarettes',          category: 'documentary', city: 'Berlin'   },
  { src: 'photos/DSC01755.jpg',   title: 'the kids know',        caption: 'the kids already know. its fun',                category: 'documentary', city: 'Berlin'   },
  { src: 'photos/DSCF3746.JPG',  title: 'one direction', caption: 'one direction is enough', category: 'documentary', city: 'Berlin' },

  // --- LANDSCAPE ---
  { src: 'photos/DSC08180.jpeg',  title: 'dolomites',           caption: 'the mountain holding its breath',                category: 'landscape',    city: 'Dolomites' },
  { src: 'photos/DSCF1500.jpg',   title: 'santa',           caption: `passing of december`,      category: 'landscape',   city: 'Berlin'   },
  { src: 'photos/DSCF9995.jpg',   title: 'highland',             caption: `thank you for the framing birds`,        category: 'landscape',   city: 'Scotland' },
  { src: 'photos/DSCF9051.jpg',   title: 'setting sun', caption: 'they just keep it going', category: 'landscape', city: 'Havana' },
  { src: 'photos/DSCF3297.jpg',   title: 'spiderman', caption: 'keep searching for spidey', category: 'landscape', city: 'Aruba' },

  // --- ABSTRACT ---
  { src: 'photos/B83C4E79_8B2A_4DFE_B220_C5F45AAD15A5_46447_000004874707C767.jpeg', title: 'sky from below', caption: 'geometry of ambition and light', category: 'abstract', city: 'Chicago' },
  { src: 'photos/DSCF3456.jpg',   title: 'pigeon',              caption: 'small life. heavy iron. open and closed.',                       category: 'abstract',     city: 'Berlin'   },
  { src: 'photos/DSCF2383.jpg',   title: 'one moment',           caption: 'one moment before it melts',           category: 'abstract',    city: 'Berlin'   },
  { src: 'photos/DSCF2330.jpg',   title: 'snowfall',             caption: 'every flake its own direction',        category: 'abstract',    city: 'Berlin'   },
 
];
