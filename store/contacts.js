export const state = () => ({
  contacts:
  [
    {position:"General Inquiries",description:"Questions, comments, and everything in between.",link_text:"info@jerrick.media",
    link_url:"mailto:info@jerrick.media",background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/e_brightness:-25/v1495458824/giphy_4_paptta'
      }
    },
    {position:"Advertising / Sales",description:"Discover how you can collaborate with us on Vocal and its network of sites.",link_text:"advertising@jerrick.media",
    link_url:"mailto:advertising@jerrick.media",background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/e_brightness:-15/v1495459063/giphy_5_kb1qks'
      }
    },
    {position:"Marketing / Press",description:"Features, interviews, opportunities, and more.",link_text:"press@jerrick.media",
    link_url:"mailto:press@jerrick.media",background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/e_brightness:-25/v1495459520/giphy_6_tdxhmh'
      }
    },
      {position:"Investor Relations",description:"All about OTCQB: JMDA.",link_text:"ir@jerrick.media",
    link_url:"mailto:ir@jerrick.media",background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/e_brightness:-55/v1495459808/giphy_7_kcwded'
      }
    },
    {position:"Legal",description:"Keep our legal team busy!",link_text:"legal@jerrick.media",
  link_url:"mailto:legal@jerrick.media",background_model: {
      type: 'image',
      url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/e_brightness:-15/v1495460233/giphy_9_uhfqqf'
    }
  },
  {position:"Careers",description:"Let us know why you'd be a perfect fit for Jerrick.",link_text:"careers@jerrick.media",
link_url:"mailto:careers@jerrick.media",background_model: {
    type: 'image',
    url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/e_brightness:-15/v1495459976/giphy_8_kd1igr'
  }
}


  ]
})


export const getters = {
get_all_contacts(state)
{
  return state.contacts;
}

}
