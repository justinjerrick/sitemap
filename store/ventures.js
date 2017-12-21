export const state = () => ({
  ventures: [{
      name: "Vocal",
      type: "Platform",
      filter_type:"platform", // This is for the filter menu...So books should be books......platform should be platform
      description: "Engaged social publishing platform.",
      link: "https://vocal.media",
      background_model: {
        type: 'video',
        video: {
          vidsrcs: ['https://res.cloudinary.com/jerrick/video/upload/v1494962746/vocal_xw5z85.webm',
            'https://res.cloudinary.com/jerrick/video/upload/v1494962746/vocal_xw5z85.mp4'
          ],
          imageurl: "https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494532413/Screen_Shot_2017-05-11_at_3.52.39_PM_du1kr0"
        }
      }
    },
    {
      name: "What to Buy",
      type: "Platform",
      filter_type:"platform",
      description: "Curated social shopping platform.",
      link: "https://whattobuy.shop",
      background_model: {
        type: 'video',
        video: {
          vidsrcs: ['https://res.cloudinary.com/jerrick/video/upload/v1494965888/guccione_yg3mxl_6_df51q3.webm',
            'https://res.cloudinary.com/jerrick/video/upload/v1494965888/guccione_yg3mxl_6_df51q3.mp4'
          ],
          imageurl: "https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494532413/Screen_Shot_2017-05-11_at_3.52.39_PM_du1kr0"
        }
      }
    },
    {
      name: "Futurism",
      type: "Community",
      filter_type:"community",
      description: "The intersection of science and science fiction.",
      link: "https://futurism.media/",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494943980/omni_tjc4dz'
      }
    },
    {
      name: "Journal",
      type: "Community",
      filter_type:"community",
      description: "For everything work related.",
      link: "https://journal.media",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494944173/journal_vrjl3g'
      }
    },
    {
      name: "Proof",
      type: "Community",
      filter_type:"community",
      description: "In celebration of spirits.",
      link: "https://proof.media",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494944318/proof_fcfiry'
      }
    },
    {
      name: "Psyche",
      type: "Community",
      filter_type:"community",
      description: "The inner workings of the human soul & mind.",
      link: "https://psyche.media",
       background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1503073044/psyche_bcfgvo'
      }
    },
    {
      name: "Viva",
      type: "Community",
      filter_type:"community",
      description: "What it means to be a woman.",
      link: "https://viva.media",
       background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/umabngvabx5qnngyshii'
      }
    },
    {
      name: "Serve",
      type: "Community",
      filter_type:"community",
      description: "All about military lives, culture and careers.",
      link: "https://serve.media",
       background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/ybn8xvniih5cngqyadui'
      }
    },
    {
      name: "Wander",
      type: "Community",
      filter_type:"community",
      description: "Where to go, where to stay, what to do.",
      link: "https://wander.media",
       background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494943725/wander_tkotmu'
      }
    },
    {
      name: "Beat",
      type: "Community",
      filter_type:"community",
      description: "For the musically inclined.",
      link: "https://beat.media",
     background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494944381/beat_lbjshl'
      }
    },
    {
      name: "Humans",
      type: "Community",
      filter_type:"community",
      description: "All about relationships.",
      link: "https://humans.media",
       background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494944439/humans_mmlrvd'
      }
    },
    {
      name: "Filthy",
      type: "Community",
      filter_type:"community",
      description: "For the sexually curious.",
      link: "https://filthy.media",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494944494/filthy_d9poe9'
      }
    },
    {
      name: "Geeks",
      type: "Community",
      filter_type:"community",
      description: "All things pop culture.",
      link: "https://geeks.media",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494944551/geeks_f2ovik'
      }
    },
    {
      name: "Swamp",
      type: "Community",
      filter_type:"community",
      description: "The murky waters of politics.",
      link: "https://theswamp.media",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494944617/swamp_avmaja'
      }
    },
    {
      name: "Feast",
      type: "Community",
      filter_type:"community",
      description: "In celebration of food.",
      link: "https://feast.media",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494944662/feast_m0xcgu'
      }
    },
    {
      name: "Longevity",
      type: "Community",
      filter_type:"community",
      description: "Health, wellness, and medicine.",
      link: "https://longevity.media",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494944697/longevity_uttdfl'
      }
    },
    {
      name: "Potent",
      type: "Community",
      filter_type:"community",
      description: "Marijuana lifestyle and cannabis culture.",
      link: "https://potent.media",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494944731/potent_i7u6wi'
      }
    },
    {
      name: "01",
      type: "Community",
      filter_type:"community",
      description: "Your source for all things tech.",
      link: "https://01.media",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1500472637/01_ag3lue'
      }
    },
    {
      name: "Families",
      type: "Community",
      filter_type:"community",
      description: "All about families.",
      link: "https://families.media/",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1500472738/families_k4acgo'
      }
    },
    {
      name: "Gamers",
      type: "Community",
      filter_type:"community",
      description: "For people who love gaming.",
      link: "https://gamers.media/",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1500472868/gamers_tv3biw'
      }
    },
    {
      name: "PetLife",
      type: "Community",
      filter_type:"community",
      description: "For people who love pets.",
      link: "https://petlife.media/",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1500472974/petlife_irwbed'
      }
    },
    {
      name: "Poets",
      type: "Community",
      filter_type:"community",
      description: "Express yourself in verse.",
      link: "https://poets.media/",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1500473046/poets_wtqo7i'
      }
    },
    {
      name: "Wheel",
      type: "Community",
      filter_type:"community",
      description: "For anyone that drives a car.",
      link: "https://wheel.media/",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1500473113/wheel_xcoee2'
      }
    },
    {
      name: "Till Human Voices Wake Us",
      type: "IP",
      filter_type:"ip",
      description: "Exploring the Celtic myth of the Selkies.",
      link: "https://vimeo.com/ondemand/tillhumanvoiceswakeus",
      background_model: {
        type: 'video',
        video: {
          vidsrcs: ['https://res.cloudinary.com/jerrick/video/upload/v1494947443/guccione_yg3mxl_2_kokmng.webm',
            'https://res.cloudinary.com/jerrick/video/upload/v1494947443/guccione_yg3mxl_2_kokmng.mp4'
          ],
          imageurl: "https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494532413/Screen_Shot_2017-05-11_at_3.52.39_PM_du1kr0"
        }
      }
    },
    {
      name: "Filthy Gorgeous",
      type: "IP",
      filter_type:"ip",
      description: "The extraordinary world of Bob Guccione.",
      link: "https://vimeo.com/ondemand/filthygorgeous",
      background_model: {
        type: 'video',
        video: {
          vidsrcs: ['https://res.cloudinary.com/jerrick/video/upload/v1494945857/guccione_yg3mxl_k6sbly.webm',
            'https://res.cloudinary.com/jerrick/video/upload/v1494945857/guccione_yg3mxl_k6sbly.mp4'
          ],
          imageurl: "https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494532413/Screen_Shot_2017-05-11_at_3.52.39_PM_du1kr0"
        }
      }
    },
    {
      name: "Baked",
      type: "IP",
      filter_type:"ip",
      description: "Cooking with cannabis.",
      link: "https://potent.media/channel/baked-cooking-with-mary-jean",
      background_model: {
        type: 'video',
        video: {
          vidsrcs: ['https://res.cloudinary.com/jerrick/video/upload/v1494950869/guccione_yg3mxl_3_pkfzqf.webm',
            'https://res.cloudinary.com/jerrick/video/upload/v1494950869/guccione_yg3mxl_3_pkfzqf.mp4'
          ],
          imageurl: "https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494532413/Screen_Shot_2017-05-11_at_3.52.39_PM_du1kr0"
        }
      }
    },
             {
      name: "Mind's Eye: Art of Omni",
      type: "IP",
      filter_type:"ip",
      description: "Celebrating the sci-fi imagery of Omni.",
      link: "https://www.amazon.com/Minds-Eye-Art-Omni/dp/1576876861",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494949621/minds-eye_lo2bkp',
      }
    },
    {
      name: "No One's Pet",
      type: "IP",
      filter_type:"ip",
      description: "Autobiography of Sheila Kennedy.",
      link: "https://www.amazon.com/No-Ones-Pet-Autobiography-Kennedy-ebook/dp/B01B8R1P5M",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494949894/no-ones-pet_frhbfd',
      }
    },
                    {
      name: "The Guccione Auction",
      type: "IP",
      filter_type:"ip",
      description: "Art from Guccione's personal collection.",
      link: "https://promotions.ebth.com/bob-guccione/",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1495031024/bob-guccione-auctions_jfzpnh',
      }
    },
    {
      name: "Vice Magazine",
      type: "IP",
      filter_type:"ip",
      description: "Special issue from the archives of Bob Guccione.",
      link: "https://www.vice.com/en_us/article/introducing-the-guccione-archives-issue",
      background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1494950356/vice-magazine_vidk07',
      }
    }
  ]
})

export const getters = {
  get_all_ventures(state) {
    return state.ventures;
  }
}
