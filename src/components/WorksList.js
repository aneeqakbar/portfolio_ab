import React, { Component } from "react";
import WorkComponent from "./WorkComponent";

let works = [
  {
    content: "Django Full Featured Ecommerce Website",
    imgUrl: "https://i.ibb.co/DpF37p5/2021-06-25-09-03-aneeq-ecommerce-herokuapp-com.pngz",
    link: "https://aneeq-ecommerce.herokuapp.com/"
  },
  {
    content: "FaceBook Clone With ReactJs",
    imgUrl: "https://i.ibb.co/ZM5jK8M/2021-06-26-12-29-fb-clone-14f33-firebaseapp-com.png",
    link: "https://fb-clone-14f33.firebaseapp.com/"
  },
  {
    content: "Netflix Clone With ReactJs",
    imgUrl: "https://i.ibb.co/4NR2v0w/2021-06-26-12-40-netflix-clone-6825f-firebaseapp-1.png",
    link: "https://netflix-clone-6825f.firebaseapp.com/"
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
