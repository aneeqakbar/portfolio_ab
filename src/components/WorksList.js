import React, { Component } from "react";
import WorkComponent from "./WorkComponent";

let works = [
  {
    content: "PUBGM Conquerer Player",
    imgUrl: "https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg",
    link: "https://play.google.com/store/apps/details?id=com.tencent.ig&hl=en&gl=US"
  },
];

export default class Works_list extends Component {
  constructor(props) {
    super(props);
    this.add_animation=(interval,class_add)=>{
      let images = document.querySelectorAll('.work__component')
          let int = -(interval);
          images.forEach(img=>{
              if (img.classList.contains(class_add)) {
                  return
              }
              setTimeout(()=>{
                  img.classList.add(class_add)
              },int+=interval)
          })}
  }
  componentDidMount(){
    setTimeout(() => {
      this.add_animation(150,'work__component_anm');
    }, 400);
  }
  render() {
    return (
    <>
      <div style={{
        width:'80%',
        color:'white',
        marginTop:'15vh',
        fontSize:'2rem',
        textAlign:'left',
      }}>
        <h2>My <span style={{color:'#03a9f4'}}>Works</span>:</h2>
      </div>
      <div className={'work__component__cont custom_scroll2'} style={{
        width:'80%',
        margin:'auto',
        marginTop:'5vh',
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'flex-start',
        flexWrap:'wrap',
        overflowY: 'scroll',
        height: '70vh',
      }}>
        {
          works.map((work,index)=>{
            return(
              <WorkComponent work={work} key={index}/>
            )
          })
        }
      </div>
    </>
    );
  }
}
