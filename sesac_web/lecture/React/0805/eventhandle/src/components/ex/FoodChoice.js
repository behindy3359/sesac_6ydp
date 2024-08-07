import React, {useState} from 'react'

const FoodChoice = () => {
  const [text , setText] = useState('text');
  const [textColor, setTextColor] = useState('white');
  const [bgColor, setbgColor] = useState('black');
  const [food , setfood] = useState('./1000005572.jpg');

  const changeResult =(e) =>{
    console.log(e.target.id);
    switch(e.target.id){
      case 'food':
        setfood(e.target.value);
        break;
      case 'bg-color':
        setbgColor(e.target.value);
        break;
      case 'txt-color':
        setTextColor(e.target.value);
        break;
      case 'txt-content':
        setText(e.target.value);
        break;
      default:
        console.log('몬가 이상한 일이 일어남');
        break;
      }
  }

  return (
    <>
      <div className='tag-wrapper'>
        과일 :
        <select type='select' id='food' onChange={changeResult}>
          <option value='1000005572.jpg'>음식 1</option>
          <option value='1000005580.jpg'>음식 2</option>
          <option value='1000005582.jpg'>음식 3</option>
          <option value='1000005639.jpg'>음식 4</option>
        </select>
        배경색 :
        <select type='select' id='bg-color' onChange={changeResult}>
          <option value='black'>검정</option>
          <option value='yellow'>노랑</option>
          <option value='red'>빨강</option>
          <option value='blue'>파랑</option>
          <option value='coral'>산호</option>
        </select>
        글자색 :
        <select type='select' id='txt-color' onChange={changeResult}>
          <option value='white'>흰색</option>
          <option value='orange'>주황</option>
          <option value='green'>초록</option>
          <option value='brown'>갈색</option>
          <option value='black'>검정</option>
        </select>
        <br/>
        내용 :
        <input type='text' id='txt-content' placeholder='내용을 입력하세요/' onChange={changeResult}></input>
      </div>
      <div>
        <img className='food-image' src={food} alt='duck.png'></img><br/>
        <div className='food-content' style={{
          backgroundColor: bgColor,
          color : textColor,
        }}>{text}</div>
      </div>
    </>
  )
}

export default FoodChoice