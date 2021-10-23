import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/DC Logo.png'
import about from '../public/aboutIllustration.svg'
const mapFolder = require('map-folder');
let fs = require('fs');

export async function getStaticProps(context) {

  let arrData = [];
  let obj={};
  const result = mapFolder('./public/Projects');

  for (var key in result.entries) {
    for (var key2 in result.entries[key].entries) {
          //console.log(result.entries[key].entries[key2].entries['deployedLink.txt'])
          if(result.entries[key].entries[key2].entries['deployedLink.txt'] !== undefined){
          const link = fs.readFileSync(result.entries[key].entries[key2].entries['deployedLink.txt'].path, 'utf-8')


          
          obj={
            name:key2,
            builder:result.entries[key].name ,
            projectImage:`/Projects/${result.entries[key].name}/${key2}/thumbnail.png`,
            projectLink:link
          }
          arrData.push(obj)
          }
      
    } 
  }
  return {
    props: {arrData}, 

  }
}

export default function Home(props) {
  
  return (
    <div className="flex justify-center bg-black" style={{width:'100%'}}>

      <Head>
        <title>Project Showcase</title>
        <meta name="description" content="Collection of Projects made by the Design ad Code community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full bg-black text-white" style={{maxWidth:'1500px'}}>
        <div className="w-full flex justify-between items-center px-10 py-10">
          <Image src={Logo} alt="Logo" className="img-fluid"/>
          <div className="flex">
            <Link href="/" ><a className="mx-5">Home</a></Link>
            {/*<Link href="/projects"><a className="ml-5">Projects</a></Link>*/}
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center mt-20 mb-10">
            <h1 className="text-6xl text-center ">Project Showcase</h1>
            <div className="mt-10 bg-gray-500" style={{height:'25vw',width:'50vw'}}></div>
            <h6 className="mt-5">Featured Project</h6>
            
            <div className="mt-40 text-center mx-10 md:mx-56 text-xl">
              <h3 className="text-4xl font-semibold mb-6">About Us</h3>
              <span className="mb-10">Design & Code is a community where anyone interested in designing and coding can connect and interact with fellow peers from all over the globe and not only learn but also collaborate on various projects!</span>
              <img src={about.src} alt="About" className="img-fluid mx-auto mt-20" width="600"/>
            </div>
            
            <div className="mt-40 w-full">
              <h3 className="text-4xl text-center font-semibold mb-6">Projects</h3>
              {props?.arrData?.map((obj,i)=>{
                  return(
                    <div className="py-10 grid gap-6 md:grid-flow-row md:grid-cols-2 mx-10 md:mx-32" key={i}>
                      <a href={obj.projectLink} target="blank">
                      <div>
                        <img src={obj.projectImage} alt="project img" width="100%" className="img-fluid" />
                      </div>
                      </a>
                      <a href={obj.projectLink} target="blank">
                        <div>
                          <h1 className="text-4xl">{obj.name}</h1>
                          <h3 className="text-lg mt-5">Built by: {obj.builder}</h3>
                        </div>
                      </a>
                    </div>
                  )
              })}
            </div>
            <footer className="w-full overflow-hidden flex justify-between flex-wrap px-10 pt-10 py-0 pb-32">
              <div style={{minWidth:'300px'}}>
                <img src={Logo.src} alt="Logo" className="img-fluid" width="70"/>
                <h1 className="text-xl ml-1 mt-2">Design and Code</h1>
                <h1 className="text-lg ml-1 mt-1 text-gray-500">Project Showcase</h1>
              </div>
              <div className="flex items-center mt-10 md:mt-0"> 
                <a href="https://twitter.com/DesignandCode3" target="blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-0 mr-3 md:mx-3" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172" style={{fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M160.53333,39.77213c-5.4868,2.43667 -11.38067,4.0764 -17.56693,4.816c6.31813,-3.784 11.1628,-9.77533 13.44467,-16.91907c-5.90533,3.50307 -12.4528,6.04867 -19.42453,7.42467c-5.57853,-5.94547 -13.52493,-9.66067 -22.31987,-9.66067c-16.8904,0 -30.5816,13.69693 -30.5816,30.5816c0,2.39653 0.2752,4.73573 0.7912,6.966c-25.41587,-1.2728 -47.94787,-13.4504 -63.038,-31.9576c-2.62587,4.51787 -4.13373,9.7696 -4.13373,15.38253c0,10.60667 5.39507,19.9692 13.59947,25.45027c-5.01093,-0.16053 -9.72947,-1.53653 -13.85173,-3.82413c0,0.13187 0,0.25227 0,0.38413c0,14.82067 10.53787,27.18173 24.53293,29.98533c-2.5628,0.69947 -5.26893,1.07213 -8.06107,1.07213c-1.96653,0 -3.8872,-0.19493 -5.75053,-0.54467c3.89293,12.14893 15.1876,20.99547 28.5692,21.242c-10.46333,8.2044 -23.65,13.09493 -37.98333,13.09493c-2.46533,0 -4.902,-0.14333 -7.29853,-0.43c13.5364,8.67453 29.60693,13.73707 46.88147,13.73707c56.25547,0 87.00907,-46.60053 87.00907,-87.0148c0,-1.3244 -0.02867,-2.64307 -0.086,-3.956c5.97987,-4.3172 11.16853,-9.7008 15.26787,-15.82973z"></path></g></g></svg>
                </a>
                <a href="https://www.youtube.com/channel/UCd4E0oe8MtnZu_48WvYeLMw" target="blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-3" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172" style={{fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M154.45063,49.88c-1.37063,-7.56531 -7.90125,-13.07469 -15.48,-14.79469c-11.34125,-2.40531 -32.33063,-4.12531 -55.04,-4.12531c-22.69594,0 -44.02125,1.72 -55.37594,4.12531c-7.56531,1.72 -14.10937,6.88 -15.48,14.79469c-1.38406,8.6 -2.75469,20.64 -2.75469,36.12c0,15.48 1.37063,27.52 3.09063,36.12c1.38406,7.56531 7.91469,13.07469 15.48,14.79469c12.04,2.40531 32.68,4.12531 55.38937,4.12531c22.70938,0 43.34938,-1.72 55.38938,-4.12531c7.56531,-1.72 14.09594,-6.88 15.48,-14.79469c1.37062,-8.6 3.09062,-20.98937 3.44,-36.12c-0.69875,-15.48 -2.41875,-27.52 -4.13875,-36.12zM65.36,110.08v-48.16l41.96531,24.08z"></path></g></g></svg>
                </a>
                <a href="https://www.linkedin.com/company/designandcode/" target="blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-3" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172" style={{fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M137.6,22.93333h-103.2c-6.33533,0 -11.46667,5.13133 -11.46667,11.46667v103.2c0,6.33533 5.13133,11.46667 11.46667,11.46667h103.2c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-103.2c0,-6.33533 -5.13133,-11.46667 -11.46667,-11.46667zM62.80293,126.13333h-16.91333v-54.4208h16.91333zM54.17427,63.9324c-5.4524,0 -9.86133,-4.4204 -9.86133,-9.86133c0,-5.44093 4.41467,-9.8556 9.86133,-9.8556c5.4352,0 9.8556,4.4204 9.8556,9.8556c0,5.44093 -4.4204,9.86133 -9.8556,9.86133zM126.15627,126.13333h-16.90187v-26.46507c0,-6.3124 -0.11467,-14.4308 -8.7892,-14.4308c-8.80067,0 -10.15373,6.87427 -10.15373,13.97213v26.92373h-16.90187v-54.4208h16.22533v7.43613h0.22933c2.25893,-4.27707 7.7744,-8.7892 16.00173,-8.7892c17.12547,0 20.29027,11.27173 20.29027,25.92613z"></path></g></g></svg>
                </a>
                <a href="https://designandcode.us/home" target="blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-3" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172" style={{fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,14.33333c-39.49552,0 -71.66667,32.17115 -71.66667,71.66667c0,39.49552 32.17115,71.66667 71.66667,71.66667c39.49552,0 71.66667,-32.17115 71.66667,-71.66667c0,-39.49552 -32.17115,-71.66667 -71.66667,-71.66667zM86,28.66667c1.77939,0 3.72971,0.7284 6.21485,3.09342c2.48513,2.36503 5.18351,6.3299 7.5026,11.54785c1.7654,3.97214 3.20962,8.82008 4.45117,14.02539h-36.33724c1.24155,-5.20531 2.68577,-10.05325 4.45118,-14.02539c2.31908,-5.21795 5.01748,-9.18283 7.5026,-11.54785c2.48514,-2.36503 4.43546,-3.09342 6.21485,-3.09342zM60.56673,34.64355c-0.46679,0.93814 -0.94836,1.85736 -1.38574,2.84147c-2.5923,5.83267 -4.60442,12.5828 -6.11686,19.84831h-16.71289c5.63615,-9.76691 14.06539,-17.6704 24.2155,-22.68978zM111.43327,34.64355c10.15011,5.01937 18.57934,12.92287 24.21549,22.68978h-16.71289c-1.51244,-7.26551 -3.52456,-14.01563 -6.11686,-19.84831c-0.43738,-0.98411 -0.91896,-1.90333 -1.38575,-2.84147zM30.54232,71.66667h20.32422c-0.43995,4.63598 -0.69987,9.41436 -0.69987,14.33333c0,4.91897 0.25992,9.69735 0.69987,14.33333h-20.32422c-1.17651,-4.58819 -1.87565,-9.36954 -1.87565,-14.33333c0,-4.96379 0.69914,-9.74515 1.87565,-14.33333zM65.33984,71.66667h41.32031c0.49889,4.60522 0.83985,9.36414 0.83985,14.33333c0,4.96919 -0.34096,9.72811 -0.83985,14.33333h-41.32031c-0.49888,-4.60522 -0.83984,-9.36414 -0.83984,-14.33333c0,-4.96919 0.34096,-9.72811 0.83984,-14.33333zM121.13347,71.66667h20.32422c1.17652,4.58819 1.87565,9.36954 1.87565,14.33333c0,4.96379 -0.69914,9.74515 -1.87565,14.33333h-20.32422c0.43995,-4.63598 0.69987,-9.41436 0.69987,-14.33333c0,-4.91897 -0.25992,-9.69735 -0.69987,-14.33333zM36.35124,114.66667h16.71289c1.51244,7.26551 3.52456,14.01564 6.11686,19.84831c0.43738,0.98411 0.91896,1.90333 1.38574,2.84148c-10.15011,-5.01938 -18.57934,-12.92287 -24.2155,-22.68978zM67.83138,114.66667h36.33724c-1.24155,5.20531 -2.68577,10.05325 -4.45117,14.02539c-2.31908,5.21796 -5.01748,9.18283 -7.5026,11.54785c-2.48513,2.36503 -4.43546,3.09343 -6.21485,3.09343c-1.77939,0 -3.72971,-0.7284 -6.21485,-3.09343c-2.48513,-2.36502 -5.18352,-6.32989 -7.5026,-11.54785c-1.7654,-3.97214 -3.20962,-8.82008 -4.45118,-14.02539zM118.93587,114.66667h16.71289c-5.63615,9.76691 -14.06539,17.67041 -24.21549,22.68978c0.46679,-0.93815 0.94837,-1.85737 1.38575,-2.84148c2.5923,-5.83267 4.60442,-12.5828 6.11686,-19.84831z"></path></g></g></svg>
                </a>
                <a href="https://discord.com/invite/druweDMn3s" target="blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-3" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172" style={{fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M143.19,40.77833c-12.04,-9.60333 -29.24,-12.255 -36.69333,-13.04333h-0.28667c-1.14667,0 -2.22167,0.645 -2.58,1.72c-0.645,1.64833 0.35833,3.44 2.00667,3.72667c8.385,1.72 18.06,4.73 26.875,10.24833c1.79167,1.075 2.22167,3.51167 0.78833,5.16c-1.14667,1.29 -3.08167,1.43333 -4.58667,0.57333c-17.2,-10.60667 -38.55667,-11.18 -42.71333,-11.18c-4.15667,0 -25.51333,0.57333 -42.71333,11.18c-1.505,0.86 -3.44,0.71667 -4.58667,-0.57333c-1.43333,-1.64833 -1.00333,-4.085 0.78833,-5.16c8.815,-5.51833 18.49,-8.52833 26.875,-10.24833c1.64833,-0.28667 2.65167,-2.07833 2.00667,-3.72667c-0.35833,-1.075 -1.43333,-1.72 -2.58,-1.72h-0.28667c-7.45333,0.78833 -24.65333,3.44 -36.69333,13.04333c-7.02333,6.52167 -20.99833,44.00333 -21.64333,77.185c0,2.22167 0.57333,4.44333 1.86333,6.235c8.385,11.825 26.58833,18.92 40.34833,19.92333c2.07833,0.14333 4.085,-0.78833 5.30333,-2.50833c0.07167,0 0.07167,-0.07167 0.14333,-0.14333c2.50833,-3.44 1.00333,-8.31333 -3.01,-9.81833c-11.46667,-4.22833 -17.34333,-9.245 -17.70167,-9.60333c-1.43333,-1.29 -1.57667,-3.44 -0.35833,-4.87333c1.29,-1.43333 3.44,-1.57667 4.87333,-0.28667c0.215,0.14333 16.125,13.68833 47.37167,13.68833c31.24667,0 47.15667,-13.545 47.37167,-13.68833c1.43333,-1.29 3.58333,-1.14667 4.87333,0.28667c1.21833,1.43333 1.075,3.58333 -0.35833,4.87333c-0.35833,0.35833 -6.235,5.375 -17.70167,9.60333c-4.01333,1.505 -5.51833,6.37833 -3.01,9.81833c0.07167,0.07167 0.07167,0.14333 0.14333,0.14333c1.21833,1.72 3.225,2.65167 5.30333,2.50833c13.76,-1.00333 31.96333,-8.09833 40.34833,-19.92333c1.29,-1.79167 1.86333,-4.01333 1.86333,-6.235c-0.645,-33.18167 -14.62,-70.66333 -21.64333,-77.185zM63.71167,106.56833c-6.59333,0 -11.96833,-6.16333 -11.96833,-13.68833c0,-7.59667 5.375,-13.76 11.96833,-13.76c6.665,0 11.96833,6.16333 11.96833,13.76c0,7.525 -5.30333,13.68833 -11.96833,13.68833zM108.28833,106.56833c-6.665,0 -11.96833,-6.16333 -11.96833,-13.68833c0,-7.59667 5.30333,-13.76 11.96833,-13.76c6.59333,0 11.96833,6.16333 11.96833,13.76c0,7.525 -5.375,13.68833 -11.96833,13.68833z"></path></g></g></svg>
                </a>
              </div>
            </footer>
            <small className="text-base">Copyright Design and Code - 2021</small>
        </div>
      </main>
    </div>
  )
}
