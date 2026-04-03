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

  // --- Selection ---
  { src: 'photos/Idea of self-2.jpg',  title: 'Perception of Self',         caption: ' ',         category: 'selection',       city: 'Berlin',  highlight: true },
  { src: 'photos/DSCF3598.jpeg',       title: 'Crosswalk',           caption: ' ',                category: 'selection',       city: 'Chicago'  },
  { src: 'photos/DSCF1107.jpg',        title: 'Cover Shot',               caption: ' ',           category: 'selection',       city: 'Berlin',    highlight: true  },
  { src: 'photos/DSCF5452.jpg',        title: 'Collection',        caption: ' ',                  category: 'selection',       city: 'Lisbon'   },
  { src: 'photos/DSCF4550.jpg',        title: 'Fantasy',  caption: ' ',                           category: 'selection',       city: 'Berlin'   },
  { src: 'photos/DSC03187.jpeg',       title: 'Oberbaumbrücke',      caption: ' ',                category: 'selection',       city: 'Berlin',    highlight: true  },
  { src: 'photos/DSC02616_2.jpeg',     title: 'Baguette',          caption: ' ',                  category: 'selection',       city: 'Durbuy'    },
  { src: 'photos/DSCF6748.jpg',        title: 'Malecon', caption: ' ',                            category: 'selection',       city: 'Havana' },
  { src: 'photos/DSCF7278.jpg',        title: 'Impala', caption: ' ',                             category: 'selection',       city: 'Havana' },
  { src: 'photos/DSC03638.jpeg',       title: 'Help',             caption: ' ',                   category: 'selection',       city: 'Berlin',    highlight: true  },
  { src: 'photos/DSC01748.jpeg',       title: 'To Teach Peace',         caption: ' ',             category: 'selection',       city: 'Berlin'   },
  { src: 'photos/DSCF1002.jpg',        title: 'Breathe',      caption: ' ',                       category: 'selection',       city: 'Berlin',    highlight: true  },
  { src: 'photos/DSCF6947.jpg',        title: 'Breeze',            caption: ' ',                  category: 'selection',       city: 'Varadero' },
  { src: 'photos/DSCF2383.jpg',        title: 'One moment',           caption: ' ',               category: 'selection',       city: 'Berlin'   },
  { src: 'photos/DSCF3297.jpg',        title: 'Spiderman', caption: ' ',                          category: 'selection',       city: 'Berlin' },
  { src: 'photos/DSC03338.jpeg',       title: 'Blaue Stunden',         caption: ' ',              category: 'selection',       city: 'Berlin',    highlight: true  },
  { src: 'photos/DSCF3456.jpg',        title: 'Pigeon',              caption: ' ',                category: 'selection',       city: 'Berlin'   },
  { src: 'photos/DSCF8617.jpg',        title: 'Held by Paint',          caption: ' ',             category: 'selection',       city: 'Havana'   },
  { src: 'photos/DSCF6635.jpg',        title: 'El Barrio',    caption: ' ',                       category: 'selection',       city: 'Havana'   },
  { src: 'photos/DSCF2232.jpg',        title: 'Boots',               caption: ' ',                category: 'selection',       city: 'Vilnius'   },


  // --- Solitary ---
  { src: 'photos/B91F21CB_62D1_47CB_9CF7_BC046A755A7E_1309_0000001165CD1BD0.jpg', title: 'The Gaze', caption: ' ', category: 'solitary', city: 'Berlin' },
  { src: 'photos/DSCF1500.jpg',      title: 'Santa',           caption: ' ',            category: 'solitary',       city: 'Berlin'   },
  { src: 'photos/DSC05515.jpg',      title: 'Shine Light',     caption: ' ',            category: 'solitary',       city: 'Berlin'   },
  { src: 'photos/DSCF9995.jpg',      title: 'Highland',             caption: ' ' ,      category: 'solitary',       city: 'Oppagne' },
  { src: 'photos/DSCF2316.jpg',      title: 'Sparkles',               caption: ' ',     category: 'solitary',       city: 'Berlin'   },
  { src: 'photos/DSC03989.jpg',      title: 'Peeking',               caption: ' ',      category: 'solitary',       city: 'Venice'   },
  { src: 'photos/DSCF2263.jpg',      title: 'Passage',     caption: ' ',                category: 'solitary',       city: 'Berlin',  highlight: true },
  { src: 'photos/DSCF1269.jpg',      title: 'Blumen & Pflanzen',   caption: ' ',        category: 'solitary',       city: 'Berlin'   },
  { src: 'photos/2E513AE4_DD8B_4DD6_8CB1_70CD238D9984_1309_0000001112A84E77.jpg', title: 'South', caption: ' ', category: 'solitary', city: 'Berlin' },
  { src: 'photos/DSC08180.jpeg',     title: 'Dolomites',           caption: ' ',        category: 'solitary',       city: 'Dolomites' },

  // --- Hope ---
  { src: 'photos/DSCF7893.jpg',        title: 'lieblingsörtchen',     caption: '',         category: 'hope',      city: 'Berlin'   },
  { src: 'photos/DSCF9051.jpg',        title: 'Setting Sun', caption: ' ',                 category: 'hope',      city: 'Havana' },
  { src: 'photos/DSCF2330.jpg',        title: 'Snowfall',             caption: ' ',        category: 'hope',      city: 'Berlin'   },
  { src: 'photos/DSCF3760.JPG',        title: 'Glory and Decay', caption: ' ',             category: 'hope',      city: 'Berlin' },
  { src: 'photos/DSCF3746.JPG',        title: 'Believe', caption: ' ',                     category: 'hope',      city: 'Berlin' },
  { src: 'photos/DSC01755.jpg',        title: 'Children Know',        caption: ' ',        category: 'hope',      city: 'Berlin'   },
  { src: 'photos/DSC08699.jpeg',       title: 'Look Back',                caption: ' ',    category: 'hope',      city: 'Track'    },
  { src: 'photos/DSCF1566.jpg',        title: 'Climax', caption: ' ',                      category: 'hope',      city: 'Berlin' },
  { src: 'photos/DSCF2086.jpg',        title: 'Passion',         caption: ' ',             category: 'hope',      city: 'Berlin'   },
  { src: 'photos/DSCF5386.jpg',        title: 'Relax',            caption: ' ',            category: 'hope',      city: 'Lisbon'   },

  
  // --- Perspective ---
  { src: 'photos/B83C4E79_8B2A_4DFE_B220_C5F45AAD15A5_46447_000004874707C767.jpeg', title: 'View', caption: ' ', category: 'perspective', city: 'Chicago' },
  { src: 'photos/A3B1ABB7.jpg',      title: 'Midnight Rush',      caption: ' ',            category: 'perspective',  city: 'Berlin'   },
  { src: 'photos/DSC08940.jpg',      title: 'Berlin Love Story',     caption: ' ',         category: 'perspective',  city: 'Berlin'   },
  { src: 'photos/DSCF3609.jpeg',     title: 'Overpass',       caption: ' ',                category: 'perspective',  city: 'Chicago'  },
  { src: 'photos/DSCF3592.jpg',      title: 'The Controller',          caption: ' ',       category: 'perspective',  city: 'Chicago',   highlight: true  },
  { src: 'photos/DSCF7349.jpg',      title: 'Self Portrait',       caption: '',            category: 'perspective',  city: 'Cuba'     },
  { src: 'photos/DSCF3773.JPG',      title: 'Levels', caption: ' ',                        category: 'perspective',  city: 'Berlin' },
  { src: 'photos/DSC05319.jpg',      title: 'Venice',            caption: ' ',             category: 'perspective',  city: 'Berlin'   },
  { src: 'photos/DSCF3482.JPG',      title: 'Chicago Reflection', caption: '',             category: 'perspective',  city: 'Chicago' },
  { src: 'photos/DSCF6649.jpg',      title: 'Trapicheo', caption: ' ',                     category: 'perspective',  city: 'Havana' },

];
