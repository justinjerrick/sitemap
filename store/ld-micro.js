export const state = () => ({
  ld_micro_news:
  [
    {type:"Webcast",description:"2017 LD Micro Invitational Webcast",link_text:"View Now",
    link_url:"http://wsw.com/webcast/ldmicro12/jmda2/"
    },
    {type:"Presentation",description:"2017 LD Micro Invitational Presentation - Public",link_text:"View Now",
    link_url:"https://www.slideshare.net/secret/vnYxIH4Q5sgdoj"
    },
    {type:"Presentation",description:"2017 LD Micro Invitational Presentation - NDA Required",link_text:"View Now",
    link_url:"https://www.slideshare.net/secret/oVhwaZ7ka4pfo0"
    },
    {type:"Presentation",description:"2017 LD Micro Invitational Presentation - Web",link_text:"View Now",
    link_url:"https://www.slideshare.net/secret/IMWzKU1g1vxfth"
    },
  ]
})


export const getters = {
get_all_ld_micro_news(state)
{
  return state.ld_micro_news;
}

}
