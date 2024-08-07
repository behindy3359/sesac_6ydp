import React, { useState } from 'react';

export default function Alphabet() {
    // 배열 ex
    // const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a']);

    // 배열 안에는 객체 형태 ex
    const [alphabet, setAlphabet] = useState([
        {
            id: 1,
            alpha: 'a',
        },
        {
            id: 2,
            alpha: 'p',
        },
        {
            id: 3,
            alpha: 'p',
        },
        {
            id: 4,
            alpha: 'l',
        },
        {
            id: 5,
            alpha: 'e',
        },
    ]);

    const [inputAlpha, setInputAlpha] = useState('');

    // 글자 추가.
    const addAlpha = () => {
        // Q. input이 빈값이라면 alphabet 상태가 변경되지 않도록 하기
        if (inputAlpha.trim().length === 0) {
            return;
        }

        // * concat
        // - 기존 배열을 변경하지 않고, 주어진 배열이나 값들을 새로운 배열로 결합하여 반환.

        // ex)
        // let arr1 = [1, 2, 3];
        // let arr2 = [5, 6, 7];
        // let arr3 = arr1.concat(arr2);

        // console.log(arr3); // [1,2,3,5,6,7];
        const newAlpha = alphabet.concat({
            id: alphabet.length + 1,
            alpha: inputAlpha,
        });

        console.log(alphabet);
        setAlphabet(newAlpha);
        setInputAlpha(''); // 입력 칸 초기화
    };

    // 글자 삭제
    const deleteAlpha = (targetId) => {
        const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);

        setAlphabet(newAlpha);
        console.log(alphabet);
    };

    //  키보드 이벤트
    const handleKeyDown = async (e) => {

        if (e.keyCode === 13) {
            await addAlpha();
    
            if(alphabet.length > 10){
                const deleteId = Math.floor(Math.random()*10 + 1);
                alphabet.splice(deleteId,1);
            }
        }
        
        await console.log(alphabet);
    };

    return (
        <div>
            <h1>Map & Filter</h1>
            <ol>
                {alphabet.map((value) => (
                    <li key={value.id}
                    onDoubleClick={() => deleteAlpha(value.id)}
                >{value.alpha}</li>
                ))}
            </ol>

            {/* 알파벳 추가해보기 */}
            <input
                type="text"
                placeholder="알파벳 입력"
                value={inputAlpha}
                onChange={(e) => {
                    setInputAlpha(e.target.value);
                }}
                // Q2) input에서 enter 키 누르면 추가되도록!
                onKeyDown={(e) => handleKeyDown(e)}
            />
            <button onClick={addAlpha}>추가</button>
        </div>
    );
}