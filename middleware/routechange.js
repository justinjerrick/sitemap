const routeBackgrounds={
'/':
{
  theme:{page:"index",
    background_model:{type:'color',color:"#1a1a1a"},
    fontcolor:{color:"#f7f7f7"}
  }
},
'/news':
{
  theme:{page:"news",
    background_model:{type:'color',color:"#1a1a1a"},
    fontcolor:{color:"#f7f7f7"}
  }

},
'/careers':
{
  theme:{page:"careers",
    background_model:{type:'color',color:"#1a1a1a"},
    fontcolor:{color:"#f7f7f7"}
  }

},
'/investors':
{
  theme:{page:"investors",
    background_model:{type:'color',color:"#1a1a1a"},
    fontcolor:{color:"#f7f7f7"}
  }

},
'/ventures':
{
  theme:{page:"ventures",
    background_model:{type:'color',color:"#1a1a1a"},
    fontcolor:{color:"#f7f7f7"}
  }

},
'/ld-micro':
{
  theme:{page:"ld-micro",
    background_model:{type:'color',color:"#1a1a1a"},
    fontcolor:{color:"#f7f7f7"}
  }

},
'/contact':
{
  theme:{page:"contact",
    background_model:{type:'color',color:"#1a1a1a"},
    fontcolor:{color:"#f7f7f7"}
  }

}
}
export default function ({ store, route }) {
    store.commit('themes/SET_THEME',routeBackgrounds[route.path].theme)
}
