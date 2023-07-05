import SwiperJs from "./SwiperJs";

function Cards () {

  slideContent = ['one', 'two'];

  return (
    <div className="cards">
      <SwiperJs slides={slideContent}/>
    </div>
  );
}

export default Cards;