import { faker } from '@faker-js/faker';        // faker-js import처리
import dog from './dog.jpg';                    // dog.jpg import처리

  const testData = [
    {
      text : "정기회의 회기는 100일을, 임시회의 회기는 30일을 초과할 수 없다.",
      imgUrl: "https://i.natgeofe.com/n/3faa2b6a-f351-4995-8fff-36d145116882/domestic-dog_16x9.jpg",
    },{
      text: "헌법개정안이 제2항의 찬성을 얻은 때에는 헌법개정은 확정되며, 대통령은 즉시 이를 공포하여야 한다.",
      imgUrl: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d"
    },{
      text: "국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며, 국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다.",
      imgUrl: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d"
    }
  ]

function DogMain() {
    const h1Element = <h1>H1 제목 태그 입니다.</h1>;
    const imgElement = <img src={dog} className="App-logo" alt="dog" />;  
    return (
        <>
            { h1Element }                                                     {/*  h1Element 호출 */}
            { imgElement }                                                    {/*  imgElement 호출 */}
            <p>
                한글로 바꿔보세요. <code>src/App.js</code> and save to reload.
            </p>
            {testData.map((contents)=>{
                return <div>
                    <img src={faker.image.avatar()} alt="avatar"></img>       {/*  faker-js를 이용한 가짜 아바타 생성 */}
                    {contents.text}                                           {/* testData의 text호출 */}
                    <img src={faker.image.avatar()} alt="avatar"></img>       {/*  faker-js를 이용한 가짜 아바타 생성 */}
                </div>
            })}
        </>
    );
}

export default DogMain;
