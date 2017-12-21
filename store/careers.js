export const state = () => ({
  careers:
  [

    {position:"Digital Advertising Coordinator",description:"We're looking for a Digital Advertising Coordinator to join our team.",link_text:"Apply",
    link_url:"https://www.indeed.com/job/digital-advertising-coordinator-d1f1b8998798749c",background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/e_brightness:-10/v1504642073/giphy_2_jvzr20'
      }
    },
    {position:"Content: Commerce Editor",description:"We're looking for a Content: Commerce Editor to join our team.",link_text:"Apply",
    link_url:"https://www.indeed.com/job/content-commerce-editor-c8943b4b3d01d946",background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/e_brightness:-10/v1503683774/tenor_geldol'
      }
    },
    {position:"Marketing Assistant",description:"We're looking for a Marketing Assistant to join our team.",link_text:"Apply",
    link_url:"https://www.indeed.com/job/marketing-assistant-a7dd0b41b674ab14",background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/e_brightness:-10/v1503338794/giphy_1_sse4y5'
      }
    },
    {position:"Copy Editor (Full-Time)",description:"We're looking for a Full-Time Copy Editor to join our team.",link_text:"Apply",
    link_url:"https://www.indeed.com/job/copy-editor-0617550d96672e5b",background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/e_brightness:-10/v1504731295/giphy_3_n3uibq'
      }
    },
    {position:"Copy Editor (Part-Time)",description:"We're looking for a Part-Time Copy Editor to join our team.",link_text:"Apply",
    link_url:"https://www.indeed.com/job/copy-editor-part-time-228e84621ced5bc2",background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/e_brightness:-10/v1495227316/7srpeY4TZMrO8_h2jkex'
      }
    },
    {position:"Staff Writer",description:"We're looking for a Staff Writer to join our team.",link_text:"Apply",
    link_url:"https://www.indeed.com/job/staff-writer-afc8f8110f285e81",background_model: {
        type: 'image',
        url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/e_brightness:-10/v1495228609/giphy_2_cg5tv4'
      }
    },
  ]
})


export const getters = {
get_all_careers(state)
{
  return state.careers;
}

}
